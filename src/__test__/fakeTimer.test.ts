import React from "react";
import { sleep, loopSleep, asyncSleep } from "../components/FakeTimer";

// 9 | FakeTimer：如何"快进"测试定时任务？
describe("examples for fakeTimers", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test("a test for a simple setTimeout", async () => {
    const res = sleep(6000, "this is a simple setTimeout test");
    jest.runAllTimers();
    await expect(res).resolves.toBe("this is a simple setTimeout test");
  });

  test("a test for a controllable setTimeout", async () => {
    const res = sleep(6000, "this is a controllable setTimeout");
    jest.advanceTimersByTime(6000);
    await expect(res).resolves.toBe("this is a controllable setTimeout");
  });

  test("a test for a recursion setTimeout", async () => {
    const res = loopSleep(6000, "this is a recursion setTimeout test");
    // jest.runAllTimers();
    jest.runOnlyPendingTimers();
    await expect(res).resolves.toBe("this is a recursion setTimeout test");
  });

  test("a test for a setTimeout with async function", async () => {
    const fn = jest.fn();
    asyncSleep(6000, fn);
    jest.runOnlyPendingTimers();
    await Promise.resolve();
    expect(fn).toBeCalled();
  });
});

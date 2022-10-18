import React from "react";

// 3 | Expect 断言：如何告诉程序什么是你的预期？
describe("examples for jest expect", () => {
  test("基础类型的比较", () => {
    // tobe
    expect(1 + 1).toBe(2);
    // not
    expect(1 + 1).not.toBe(3);
    // boolean
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    // 浮点数
    expect(0.2 + 0.1).not.toBe(0.3);
    expect(0.2 + 0.1).toBeCloseTo(0.3);
    // NaN
    expect(NaN).toBe(NaN);
    expect(NaN).toBeNaN();
    // +0 -0
    expect(+0).not.toBe(-0);
  });

  test("引用类型的比较", () => {
    const a = { obj1: { name: "obj1", obj2: { name: "obj2" } } };
    const b = Object.assign(a);
    const c = JSON.parse(JSON.stringify(a));
    expect(a).toBe(b);
    expect(a).not.toBe(c);
    expect(a).toEqual(b);
    expect(a).toEqual(c);
    // 小彩蛋
    expect(1 + 1).toEqual(2);
  });

  test("函数", () => {});

  test("数字符号", () => {
    expect(3).toBeGreaterThan(2);
    expect(3).toBeLessThan(4);
    expect(3).toBeGreaterThanOrEqual(3);
    expect(3).toBeGreaterThanOrEqual(2);
    expect(3).toBeLessThanOrEqual(3);
    expect(3).toBeLessThanOrEqual(4);
  });
});

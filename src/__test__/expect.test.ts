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
    // undefined
    expect(undefined).not.toBeDefined();
    expect(undefined).toBeUndefined();
    const test = () => {
      console.log(test);
    };
    expect(test()).toBeUndefined();
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

  test("数字符号", () => {
    // >
    expect(3).toBeGreaterThan(2);
    // <
    expect(3).toBeLessThan(4);
    // >=
    expect(3).toBeGreaterThanOrEqual(3);
    expect(3).toBeGreaterThanOrEqual(2);
    // <=
    expect(3).toBeLessThanOrEqual(3);
    expect(3).toBeLessThanOrEqual(4);
  });

  test("正则匹配", () => {
    expect("This is a regexp validation").toMatch(/regexp/);
    const obj = { prop1: "test", prop2: "regexp validation" };
    const childObj = { prop1: "test" };
    expect(obj).toMatchObject(childObj);
  });

  test("表单验证", () => {
    // 数组元素验证
    expect([1, 2, 3]).toContain(1);
    expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
    expect([{ a: 1, b: 2 }]).toContainEqual({ a: 1, b: 2 });
    // 数组长度
    expect([1, 2, 3]).toHaveLength(3);
    // 对象属性验证
    const testObj = {
      prop1: 1,
      prop2: {
        child1: 2,
        child2: "test",
      },
    };
    expect(testObj).toHaveProperty("prop1");
    expect(testObj).toHaveProperty("prop2.child1");
  });

  test("错误抛出", () => {
    const throwError = () => {
      const err = new Error("console err: this is a test error!");
      throw err;
    };
    // 并不需要真实执行错误函数，可能导致 error 报错中断进程，直接方法传入就好
    expect(throwError).toThrow();
    // 别名，同样可以
    expect(throwError).toThrowError();
    // 异常捕获
    const catchError = () => {
      try {
        const err = new Error("console err: this is a test error!");
        throw err;
      } catch (err) {
        console.log(err);
      }
    };
    expect(catchError).not.toThrow();
    expect(catchError).not.toThrowError();
  });

  test("同步自定义匹配器", () => {
    const toBeBetweenZeroAndTen = (num: number) => {
      if (num >= 0 && num <= 10) {
        return {
          message: () => "",
          pass: true,
        };
      } else {
        return {
          message: () => "expected num to be a number between zero and ten",
          pass: false,
        };
      }
    };
    expect.extend({
      toBeBetweenZeroAndTen,
    });
    expect(8).toBeBetweenZeroAndTen();
    expect(11).not.toBeBetweenZeroAndTen();
  });

  test("异步自定义匹配器", async () => {});
});

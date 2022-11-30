import React from "react";
import { render, screen } from "@testing-library/react";
import { DomSnap } from "../components/DomSnap";

// 12 | 快照测试：怎么保障组件 UI 的完整？
describe("examples for snap", () => {
  test("a test for component snap", () => {
    const { baseElement } = render(<DomSnap />);
    expect(baseElement).toMatchSnapshot();
  });

  test("a test for part component snap", () => {
    render(<DomSnap />);
    expect(
      screen.getByRole("textbox", { name: "form_username" })
    ).toMatchSnapshot();
  });

  test("a test for string snap", () => {
    expect("a test for string snap1").toMatchSnapshot();
  });
});

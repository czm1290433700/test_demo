import React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import useCount from "../components/RenderHook/useCount";
import { RenderHook } from "../components/RenderHook";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// 11 | RenderHook：怎么测试React hook？
describe("examples for render hook", () => {
  test("a test for component with useCount", () => {
    render(<RenderHook />);
    const note = screen.getByRole("note");
    expect(note).toHaveTextContent("0");
    userEvent.click(screen.getByRole("button"));
    expect(note).toHaveTextContent("1");
  });

  test("a test for useCount", () => {
    const { result } = renderHook(() => useCount());
    act(() => {
      result.current.increase();
    });
    expect(result.current.num).toBe(1);
  });
});

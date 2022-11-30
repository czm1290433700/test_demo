import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DomEvent } from "../components/DomEvent";
import userEvent from "@testing-library/user-event";

describe("tests for 《7 | User-event: 怎么对 Dom 组件绑定事件进行模拟触发？》", () => {
  test("mock events with fireEvent", () => {
    const clickEvent = jest.fn();
    render(<DomEvent onClick={clickEvent} />);
    fireEvent.click(screen.getByRole("note"));
    expect(clickEvent).toBeCalled();
    expect(clickEvent).toBeCalledTimes(1);
  });

  test("mock events with userEvent", () => {
    const clickEvent = jest.fn();
    render(<DomEvent onClick={clickEvent} />);
    userEvent.click(screen.getByRole("note"));
    expect(clickEvent).toBeCalled();
    expect(clickEvent).toBeCalledTimes(1);
  });
});

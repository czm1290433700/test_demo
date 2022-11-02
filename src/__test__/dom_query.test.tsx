import React from "react";
import { render, screen } from "@testing-library/react";
import { DomQuery } from "../components/DomQuery";

describe("tests for 《4 | DOM查询(上)：页面元素的渲染和行为查询》 & 《5 | DOM查询(下)：页面元素的参照物查询和优先级》", () => {
  test("get & query & find", () => {
    render(<DomQuery />);
    const getElement = screen.getByText("test1");
    const getAllElement = screen.getAllByText(/test/i);
    const queryElement = screen.queryByText("test3");
    const queryAllElement = screen.queryAllByText("test3");
  });

  test("default role", () => {
    render(<DomQuery />);
    const button = screen.getAllByRole("button");
    screen.debug(button);
  });

  test("defined role", () => {
    render(<DomQuery />);
    const button = screen.getByRole("tab");
    screen.debug(button);
  });

  test("aria", () => {
    render(<DomQuery />);
    const button = screen.getByRole("button", { pressed: true });
    screen.debug(button);
  });

  test("aria-describedby", () => {
    render(<DomQuery />);
    const button = screen.getAllByRole("button", {
      description: "自定义aria按钮",
    });
    screen.debug(button);
  });

  test("aria-label", () => {
    render(<DomQuery />);
    const note = screen.getAllByRole("generic", { name: "test_note" });
    screen.debug(note);
  });

  test("labelText", () => {
    render(<DomQuery />);
    const label = screen.getByLabelText("testLabel");
    screen.debug(label);
  });

  test("placeholder", () => {
    render(<DomQuery />);
    const placeholderInput = screen.getByPlaceholderText(
      "a query by placeholder"
    );
    screen.debug(placeholderInput);
  });

  test("value", () => {
    render(<DomQuery />);
    const valueInput = screen.getByDisplayValue("a query by value");
    screen.debug(valueInput);
  });

  test("alt", () => {
    render(<DomQuery />);
    const altImg = screen.getByAltText("a query by alt");
    screen.debug(altImg);
  });

  test("title", () => {
    render(<DomQuery />);
    const title = screen.getByTitle("a query by title");
    screen.debug(title);
  });

  test("testid", () => {
    render(<DomQuery />);
    const testidItem = screen.getByTestId("a not so good query");
    screen.debug(testidItem);
  });
});

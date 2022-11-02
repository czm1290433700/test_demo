import React from "react";
import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect/index";

describe("tests for 《6 | DOM断言:页面元素的断言》", () => {
  test("visible validation without semi", () => {
    render(<DomExpect />);
    // const emptyNote = screen.getByRole("generic", { name: "empty_note" });
    // const hiddenNote = screen.getByRole("note", { hidden: true });
    // const normalNote = screen.getByRole("note", { hidden: false });
    // expect(emptyNote).toBeEmptyDOMElement();
    // expect(hiddenNote).not.toBeVisible();
    // expect(emptyNote).toBeInTheDocument();
    // expect(hiddenNote).toBeInTheDocument();
    // expect(normalNote).toBeInTheDocument();
  });
});

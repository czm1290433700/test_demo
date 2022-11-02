import React from "react";
import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect/index";

describe("tests for 《6 | DOM断言:页面元素的断言》", () => {
  test("visible validation without semi", () => {
    render(<DomExpect />);
    // const emptyNote = screen.getByRole("generic", { name: "empty_note" });
    // const hiddenNote = screen.getAllByRole("note", { hidden: true });
    // const normalNote = screen.getAllByRole("note", { hidden: false });
    // expect(hiddenNote).toHaveLength(1);
    // expect(normalNote).toHaveLength(1);
    // expect(emptyNote).toBeEmptyDOMElement();
    // expect(hiddenNote[0]).not.toBeVisible();
    // expect(emptyNote).toBeInTheDocument();
    // expect(hiddenNote[0]).toBeInTheDocument();
    // expect(normalNote[0]).toBeInTheDocument();
  });
});

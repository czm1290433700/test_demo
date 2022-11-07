import React from "react";
import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect/index";
import { act } from "react-dom/test-utils";

describe("tests for 《6 | DOM断言:页面元素的断言》", () => {
  test("visible validation without semi", () => {
    render(<DomExpect />);
    const emptyNote = screen.getByRole("generic", { name: "empty_note" });
    const [hiddenNote] = screen.getAllByRole("note", { hidden: true });
    const normalNote = screen.getByRole("note");
    expect(emptyNote).toBeEmptyDOMElement();
    expect(hiddenNote).not.toBeVisible();
    expect(emptyNote).toBeInTheDocument();
    expect(hiddenNote).toBeInTheDocument();
    expect(normalNote).toBeInTheDocument();
    expect(normalNote).toHaveTextContent(/1/i);
  });

  test("form validation without semi", () => {
    render(<DomExpect />);
    const form = screen.getByRole("form", { name: "form" });
    const username = screen.getByRole("textbox", { name: "form_username" });
    const age = screen.getByRole("spinbutton", { name: "form_age" });
    const manCheckbox = screen.getByRole("radio", {
      checked: true,
      name: "form_sex",
    });
    const womanCheckbox = screen.getByRole("radio", {
      checked: false,
      name: "form_sex",
    });
    expect(username).toBeDisabled();
    expect(age).toBeEnabled();
    expect(age).toBeRequired();
    age.focus();
    expect(age).toHaveFocus();
    expect(manCheckbox).toBeChecked();
    expect(womanCheckbox).not.toBeChecked();
    expect(form).toHaveFormValues({
      username: "zhenmin",
      age: 23,
      sex: "man",
    });
    expect(age).toHaveValue(23);
  });

  test("code validation", () => {
    render(<DomExpect />);
    const [hiddenNote] = screen.getAllByRole("note", { hidden: true });
    expect(hiddenNote).toHaveAttribute("aria-hidden");
    expect(hiddenNote).toHaveClass("hidden");
    expect(hiddenNote).toHaveStyle("display: none");
  });

  test("visible validation with semi", () => {
    render(<DomExpect />);
    const form = screen.getByRole("form", { name: "semi-form" });
    const username = screen.getByLabelText("username");
    const age = screen.getByLabelText("age");
    const sex = screen.getByLabelText("sex");
    const hobby = screen.getByLabelText("hobby");
    expect(username).toBeDisabled();
    expect(age).toBeEnabled();
    expect(age).toBeRequired();
    age.focus();
    expect(age).toHaveFocus();
    // expect(username).toHaveValue('zhenmin');
    // expect(hobby).toHaveValue('code');
    // expect(form).toHaveFormValues({
    //   username: 'zhenmin',
    //   age: 23,
    //   sex: 'man',
    //   hobby: 'code',
    // });
    const hiddenNotes = screen.getAllByRole("note", { hidden: true });
    expect(hiddenNotes[2]).toHaveAttribute(
      "value",
      JSON.stringify({
        username: "zhenmin",
        age: 23,
        sex: "man",
        hobby: "code",
      })
    );
  });
});

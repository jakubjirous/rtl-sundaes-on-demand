import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SummaryForm from "../../../components/SummaryForm/SummaryForm";

describe("<SummaryForm />", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);

    const checkboxEl = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const confirmBtnEl = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(checkboxEl).not.toBeChecked();
    expect(confirmBtnEl).toBeDisabled();
  });

  test("checkbox enables button on a first click and disables on second click", () => {
    render(<SummaryForm />);

    const checkboxEl = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const confirmBtnEl = screen.getByRole("button", {
      name: /confirm order/i,
    });

    userEvent.click(checkboxEl);

    expect(checkboxEl).toBeChecked();
    expect(confirmBtnEl).toBeEnabled();

    userEvent.click(checkboxEl);

    expect(checkboxEl).not.toBeChecked();
    expect(confirmBtnEl).toBeDisabled();
  });
});

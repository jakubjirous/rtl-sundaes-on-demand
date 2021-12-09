import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

    fireEvent.click(checkboxEl);

    expect(checkboxEl).toBeChecked();
    expect(confirmBtnEl).toBeEnabled();

    fireEvent.click(checkboxEl);

    expect(checkboxEl).not.toBeChecked();
    expect(confirmBtnEl).toBeDisabled();
  });
});

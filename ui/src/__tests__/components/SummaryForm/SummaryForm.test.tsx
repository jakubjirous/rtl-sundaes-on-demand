import userEvent from "@testing-library/user-event";
import React from "react";
import SummaryForm from "../../../components/SummaryForm/SummaryForm";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../../../test-utils/testing-library";

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

  test("popover responds to hover", async () => {
    render(<SummaryForm />);

    const nullPopoverEl = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    const termsEl = screen.getByText(/terms and conditions/i);

    // popover starts out hidden
    expect(nullPopoverEl).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    userEvent.hover(termsEl);

    const popoverEl = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(popoverEl).toBeInTheDocument();

    // popover disappears when mouse in out
    userEvent.unhover(termsEl);

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});

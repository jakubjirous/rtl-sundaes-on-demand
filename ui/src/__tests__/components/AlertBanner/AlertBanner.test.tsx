import React from "react";
import AlertBanner, {
  AlertVariant,
} from "../../../components/AlertBanner/AlertBanner";
import { render, screen } from "../../../test-utils/testing-library";

describe("<AlertBanner />", () => {
  test("initial renders with default variant", () => {
    render(<AlertBanner message="Alert message" />);

    const alertEl = screen.getByRole("alert");

    expect(alertEl).toBeInTheDocument();
    expect(alertEl).toHaveTextContent("Alert message");
    expect(alertEl).toHaveClass("alert-danger");
  });

  test("initial renders with info variant", () => {
    render(<AlertBanner message="Info message" variant={AlertVariant.INFO} />);

    const alertEl = screen.getByRole("alert");

    expect(alertEl).toBeInTheDocument();
    expect(alertEl).toHaveTextContent("Info message");
    expect(alertEl).toHaveClass("alert-info");
  });
});

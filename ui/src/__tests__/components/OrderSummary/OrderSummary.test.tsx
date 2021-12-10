import React from "react";
import OrderSummary from "../../../components/OrderSummary/OrderSummary";
import { render } from "../../../test-utils/testing-library";

describe("<OrderSummary />", () => {
  test("render", () => {
    render(<OrderSummary />);
  });
});

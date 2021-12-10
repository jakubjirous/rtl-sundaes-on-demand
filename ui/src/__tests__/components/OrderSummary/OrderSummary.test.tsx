import { render } from "@testing-library/react";
import React from "react";
import OrderSummary from "../../../components/OrderSummary/OrderSummary";

describe("<OrderSummary />", () => {
  test("render", () => {
    render(<OrderSummary />);
  });
});

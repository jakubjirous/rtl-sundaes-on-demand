import { render } from "@testing-library/react";
import React from "react";
import App from "../../../components/App/App";

describe("<App />", () => {
  test("render", () => {
    render(<App />);
  });
});

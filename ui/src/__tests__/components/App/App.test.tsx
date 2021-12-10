import React from "react";
import App from "../../../components/App/App";
import { render } from "../../../test-utils/testing-library";

describe("<App />", () => {
  test("render", () => {
    render(<App />);
  });
});

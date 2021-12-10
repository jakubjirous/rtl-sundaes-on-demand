import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { OrderDetailsProvider } from "../context/OrderDetails";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

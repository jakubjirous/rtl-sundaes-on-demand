import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import OrderEntry from "../../../components/OrderEntry/OrderEntry";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import { server } from "../../../mock/server";

describe("<OrderEntry />", () => {
  test("handlers errors for scoops and toppings routes", async () => {
    server.resetHandlers(
      rest.get(`${process.env.REACT_APP_SERVER}/scoops`, (req, res, ctx) => {
        res(ctx.status(500));
      }),

      rest.get(`${process.env.REACT_APP_SERVER}/toppings`, (req, res, ctx) => {
        res(ctx.status(500));
      })
    );

    render(<OrderEntry />, {
      wrapper: OrderDetailsProvider,
    });

    await waitFor(async () => {
      const alertsEl = await screen.findAllByRole("alert");
      expect(alertsEl).toHaveLength(2);
    });
  });
});

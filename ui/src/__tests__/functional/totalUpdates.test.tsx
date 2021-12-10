import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../../components/Options/Options";
import { OrderDetailsProvider } from "../../context/OrderDetails";
import { OptionType } from "../../context/type";

describe("total updates", () => {
  test("update coop subtotal when coops change", async () => {
    render(<Options optionType={OptionType.SCOOPS} />, {
      wrapper: OrderDetailsProvider,
    });

    // make sure total starts out $0.00
    const scoopSubtotal = screen.getByText("Scoops total: $", {
      exact: false,
    });

    expect(scoopSubtotal).toHaveTextContent("0.00");

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInputEl = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInputEl);
    userEvent.type(vanillaInputEl, "1");

    expect(scoopSubtotal).toHaveTextContent("2.00");

    // update chocolate scoops to 2 and check the subtotal
    const chocolateInputEl = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    userEvent.clear(chocolateInputEl);
    userEvent.type(chocolateInputEl, "2");

    expect(scoopSubtotal).toHaveTextContent("6.00");
  });
});

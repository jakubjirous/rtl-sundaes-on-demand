import userEvent from "@testing-library/user-event";
import Options from "../../components/Options/Options";
import { OptionType } from "../../context/type";
import { render, screen } from "../../test-utils/testing-library";

describe("total updates", () => {
  test("update coop subtotal when coops change", async () => {
    render(<Options optionType={OptionType.SCOOPS} />);

    // make sure total starts out $0.00
    const scoopTotal = screen.getByText("Scoops total: $", {
      exact: false,
    });

    expect(scoopTotal).toHaveTextContent("0.00");

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInputEl = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInputEl);
    userEvent.type(vanillaInputEl, "1");

    expect(scoopTotal).toHaveTextContent("2.00");

    // update chocolate scoops to 2 and check the subtotal
    const chocolateInputEl = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    userEvent.clear(chocolateInputEl);
    userEvent.type(chocolateInputEl, "2");

    expect(scoopTotal).toHaveTextContent("6.00");
  });

  test("update toppings subtotal when toppings change", async () => {
    render(<Options optionType={OptionType.TOPPINGS} />);

    // make sure total starts out $0.00
    const toppingsTotal = screen.getByText("Toppings total: $", {
      exact: false,
    });

    expect(toppingsTotal).toHaveTextContent("0.00");

    // add cherries and check total
    const cherriesCheckboxEl = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    userEvent.click(cherriesCheckboxEl);
    expect(toppingsTotal).toHaveTextContent("1.50");

    // add hot fudge and check total
    const hotFudgeCheckboxEl = await screen.findByRole("checkbox", {
      name: "Hot fudge",
    });
    userEvent.click(hotFudgeCheckboxEl);
    expect(toppingsTotal).toHaveTextContent("3.00");

    // add remove fudge and check total
    userEvent.click(hotFudgeCheckboxEl);
    expect(toppingsTotal).toHaveTextContent("1.50");
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import Options, { OptionType } from "../../../components/Options/Options";

describe("<Options />", () => {
  test("displays image for each scoop from the server", async () => {
    render(<Options optionType={OptionType.SCOOPS} />);

    // find images - if waiting for async change in the DOM - use FIND query selector
    const imagesEl = (await screen.findAllByRole("img", {
      name: /scoop$/i,
    })) as HTMLImageElement[];

    expect(imagesEl).toHaveLength(4);

    // confirm alt text of images
    const altTextEl = imagesEl.map((image) => image.alt);
    expect(altTextEl).toEqual([
      "Mint chip scoop",
      "Vanilla scoop",
      "Chocolate scoop",
      "Salted caramel scoop",
    ]);
  });

  test("displays image for each topping from the server", async () => {
    render(<Options optionType={OptionType.TOPPINGS} />);

    // find images - if waiting for async change in the DOM - use FIND query selector
    const imagesEl = (await screen.findAllByRole("img", {
      name: /topping$/i,
    })) as HTMLImageElement[];

    expect(imagesEl).toHaveLength(6);

    // confirm alt text of images
    const altTextEl = imagesEl.map((image) => image.alt);
    expect(altTextEl).toEqual([
      "M&Ms topping",
      "Hot fudge topping",
      "Peanut butter cups topping",
      "Gummi bears topping",
      "Mochi topping",
      "Cherries topping",
    ]);
  });
});

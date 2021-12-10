import { render, screen } from "@testing-library/react";
import React from "react";
import Options, { OptionType } from "../../../components/Options/Options";

describe("<Options />", () => {
  test("displays image for each scoop from the server", () => {
    render(<Options optionType={OptionType.SCOOPS} />);

    // find images
    const imagesEl = screen.getAllByRole("img", {
      name: /scoop$/i,
    }) as HTMLImageElement[];

    expect(imagesEl).toHaveLength(4);

    // confirm alt text of images
    const altTextEl = imagesEl.map((image) => image.alt);
    expect(altTextEl).toEqual([
      "Mint chip",
      "Vanilla",
      "Chocolate",
      "Salted caramel",
    ]);
  });
});

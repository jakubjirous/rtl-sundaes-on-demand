import React from "react";
import ToppingOption from "../../../components/ToppingOption/ToppingOption";
import { render, screen } from "../../../test-utils/testing-library";

describe("<ToppingOption />", () => {
  test("renders correctly topping for m&ms", async () => {
    render(
      <ToppingOption
        name="M&Ms"
        imagePath="/images/m-and-ms.png"
        updateItem={() => null}
      />
    );

    const imageEl = (await screen.findByRole("img", {
      name: /m&ms topping/i,
    })) as HTMLImageElement;

    expect(imageEl).toHaveStyle({ width: "75%" });
    expect(imageEl.alt).toEqual("M&Ms topping");
  });

  test("renders correctly topping for hot fudge", async () => {
    render(
      <ToppingOption
        name="Hot fudge"
        imagePath="/images/hot-fudge.png"
        updateItem={() => null}
      />
    );

    const imageEl = (await screen.findByRole("img", {
      name: /hot fudge topping/i,
    })) as HTMLImageElement;

    expect(imageEl).toHaveStyle({ width: "75%" });
    expect(imageEl.alt).toEqual("Hot fudge topping");
  });
});

import React from "react";
import ScoopOption from "../../../components/ScoopOption/ScoopOption";
import { render, screen } from "../../../test-utils/testing-library";

describe("<ScoopOption />", () => {
  test("renders correctly for vanilla", async () => {
    render(
      <ScoopOption
        name="Vanilla"
        imagePath="/images/vanilla.png"
        updateItem={() => null}
      />
    );

    const imageEl = (await screen.findByRole("img", {
      name: /vanilla scoop/i,
    })) as HTMLImageElement;

    expect(imageEl).toHaveStyle({ width: "75%" });
    expect(imageEl.alt).toEqual("Vanilla scoop");
  });

  test("renders correctly for chocolate", async () => {
    render(
      <ScoopOption
        name="Chocolate"
        imagePath="/images/chocolate.png"
        updateItem={() => null}
      />
    );

    const imageEl = (await screen.findByRole("img", {
      name: /chocolate scoop/i,
    })) as HTMLImageElement;

    expect(imageEl).toHaveStyle({ width: "75%" });
    expect(imageEl.alt).toEqual("Chocolate scoop");
  });
});

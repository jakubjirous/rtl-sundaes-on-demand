import { rest } from "msw";

export interface Item {
  name: string;
  imagePath: string;
}

export const handlers = [
  rest.get<Item>(`${process.env.REACT_APP_SERVER}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Mint chip",
          imagePath: "/images/mint-chip.png",
        },
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
        {
          name: "Salted caramel",
          imagePath: "/images/salted-caramel.png",
        },
      ])
    );
  }),
];

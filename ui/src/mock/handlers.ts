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

  rest.get<Item>(
    `${process.env.REACT_APP_SERVER}/toppings`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            name: "M&Ms",
            imagePath: "/images/m-and-ms.png",
          },
          {
            name: "Hot fudge",
            imagePath: "/images/hot-fudge.png",
          },
          {
            name: "Peanut butter cups",
            imagePath: "/images/peanut-butter-cups.png",
          },
          {
            name: "Gummi bears",
            imagePath: "/images/gummi-bears.png",
          },
          {
            name: "Mochi",
            imagePath: "/images/mochi.png",
          },
          {
            name: "Cherries",
            imagePath: "/images/cherries.png",
          },
        ])
      );
    }
  ),
];

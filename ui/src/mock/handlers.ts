import { rest } from "msw";

interface IceCreamFlavoursResponse {
  name: string;
  imagePath: string;
}

export const handlers = [
  rest.get<IceCreamFlavoursResponse>(
    "http://localhost:3030/scoops",
    (req, res, ctx) => {
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
    }
  ),
];

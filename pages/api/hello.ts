// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const alpabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });
  res.status(200).json({
    name: "John Doe 「" + alpabet[Math.floor(Math.random() * alpabet.length)] + "」",
  });
}

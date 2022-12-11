// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const c = "a".charCodeAt(0);
const alphabets = [...new Array(26)].map((v, i) => {
  return String.fromCharCode(c + i).toUpperCase();
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 5000);
  });
  res.status(200).json({
    name: "「" + alphabets[Math.floor(Math.random() * alphabets.length)] + "」",
  });
}

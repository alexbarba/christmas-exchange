import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db/client";
import type { Gift } from "@prisma/client";

type Data = {
  gift?: Gift;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  try {
    const { giftExchangeId, whoami: from } = req.body;

    const persons = await prisma.person.findMany({
      where: {
        giftExchangeId,
        raffled: {
          not: true,
        },
        id: {
          not: from,
        },
      },
    });

    if (persons.length === 0) {
      return res
        .status(400)
        .json({ message: "parece que ya no quedan más participantes" });
    }

    const giftFrom = await prisma.gift.findFirst({
      where: {
        giftExchangeId,
        from,
      },
    });

    if (giftFrom)
      return res
        .status(400)
        .json({ message: "parece que tu ya sacaste papelito" });

    const to = persons[Math.floor(Math.random() * persons.length)];

    await prisma.person.update({
      where: {
        id: to?.id,
      },
      data: {
        raffled: true,
      },
    });

    const gift = await prisma.gift.create({
      data: {
        giftExchangeId,
        from,
        to: to?.id,
        opened: true,
      },
    });

    res.status(200).json({ gift });
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error, contacta al administrador del sistema",
    });
  }
}

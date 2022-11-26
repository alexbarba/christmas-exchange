"use client";
import type { Gift } from "@prisma/client";
import type { FC } from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  exchangeId: string;
  whoami: string;
};

const TurnLuck: FC<Props> = ({ exchangeId, whoami }) => {
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const onClick = async () => {
    setError(null);
    const res: { gift: Gift } | null = await fetch(
      `https://christmas-exchange.vercel.app/api/turn-luck`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          giftExchangeId: exchangeId,
          whoami,
        }),
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.message);
        }
        return response;
      })
      .then((res) => res.json())
      .catch((error) => {
        setError(error.message);
      });

    if (res) {
      router.push(`${pathname}?whoami=${whoami}&to=${res?.gift.to}`);
    }
  };
  return (
    <>
      <button className="btn my-2 text-xl" onClick={onClick}>
        Sacar papelito
      </button>
      {error && <p className="text-red-300">Oh oh, {error}</p>}
    </>
  );
};

export default TurnLuck;

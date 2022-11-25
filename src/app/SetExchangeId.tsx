"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SetExchangeId = () => {
  const router = useRouter();
  const [exchangeId, setExchangeId] = useState("");
  return (
    <>
      <input
        type="text"
        id="exchangeId"
        name="exchangeId"
        className="input my-2"
        onChange={(e) => setExchangeId(e.target.value)}
      />
      <button
        type="button"
        className="btn"
        onClick={() => router.push(`/sorteo/${exchangeId}`)}
      >
        Entrar
      </button>
    </>
  );
};

export default SetExchangeId;

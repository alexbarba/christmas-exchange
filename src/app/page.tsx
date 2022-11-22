"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [exchangeId, setExchangeId] = useState("");

  return (
    <>
      <label htmlFor="exchangeId" className="block text-xl text-purple-300">
        Introduce el ID de tu intercambio
      </label>
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
}

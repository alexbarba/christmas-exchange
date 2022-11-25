import SetExchangeId from "./SetExchangeId";

export default function Page() {
  return (
    <>
      <label htmlFor="exchangeId" className="block text-xl text-purple-300">
        Introduce el ID de tu intercambio
      </label>
      <SetExchangeId />
    </>
  );
}

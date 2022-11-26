import { prisma } from "@/server/db/client";
import SelectParticipant from "./SelectParticipant";
import TurnLuck from "./TurnLuck";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 3600,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const getExchange = (exchangeId: string) => {
  return prisma.giftExchange.findUnique({
    where: {
      id: exchangeId,
    },
    include: {
      participants: true,
    },
  });
};

const getPerson = (id: string) => {
  return prisma.person.findUnique({
    where: {
      id,
    },
  });
};

const Exchange = async ({
  params,
  searchParams,
}: {
  params: { exchangeId: string };
  searchParams: { whoami: string; to: string };
}) => {
  const exchange = await getExchange(params.exchangeId);
  const toPerson = searchParams.to ? await getPerson(searchParams.to) : null;

  return (
    <section className="flex flex-col items-center justify-center text-center text-purple-100">
      <h2 className="my-4 text-3xl">Grupo: {exchange?.name}</h2>
      <section className="max-w-xs">
        <label className="mt-4 text-xl">
          Quien eres?
          <SelectParticipant participants={exchange?.participants ?? []} />
        </label>
        <TurnLuck exchangeId={params.exchangeId} whoami={searchParams.whoami} />
      </section>

      {toPerson && (
        <p className="text-2xl">Tu regalo es para: {toPerson.name}</p>
      )}
    </section>
  );
};

export default Exchange;

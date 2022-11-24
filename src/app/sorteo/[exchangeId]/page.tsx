import { prisma } from "@/server/db/client";
import SelectParticipant from "./SelectParticipant";
import TurnLuck from "./TurnLuck";
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
  searchParams: { whoami: string, to: string };
}) => {
  const exchange = await getExchange(params.exchangeId);
  const toPerson = searchParams.to ? await getPerson(searchParams.to) : null;
  
  return (
    <section className="text-purple-100 text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl">Grupo: {exchange?.name}</h2>
      <label className="mt-4 text-xl">Quien eres?
      <SelectParticipant participants={exchange?.participants ?? []} />
      </label>
      <TurnLuck exchangeId={params.exchangeId} whoami={searchParams.whoami} />
      
      
      {toPerson && <p className="text-2xl">Tu regalo es para: {toPerson.name}</p>}

      
    </section>
  );
};

export default Exchange;

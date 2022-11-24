import { prisma } from "@/server/db/client";

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

const Exchange = async ({
  params,
  searchParams,
}: {
  params: { exchangeId: string };
  searchParams: { whoami: string };
}) => {
  const exchange = await getExchange(params.exchangeId);

  return (
    <>
      <p>{params.exchangeId}</p>
      <p>{searchParams.whoami}</p>
    </>
  );
};

export default Exchange;

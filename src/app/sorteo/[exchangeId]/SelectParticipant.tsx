"use client";
import type { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Person } from "@prisma/client";

type Props = {
  participants: Person[];
};

const SelectParticipant: FC<Props> = ({ participants }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      onChange={(e) => {
        router.push(`${pathname}?whoami=${e.target.value}`);
      }}
      className="w-full max-w-xs rounded-lg bg-gray-700 px-4 py-2 text-center"
    >
      <option value="">Selecciona un participante</option>
      {participants.map((participant) => (
        <option key={participant.id} value={participant.id}>
          {participant.name}
        </option>
      ))}
    </select>
  );
};

export default SelectParticipant;

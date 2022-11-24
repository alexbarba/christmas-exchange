'use client'

import type {FC} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Person } from '@prisma/client'


type Props = {
  participants: Person[]
}

const SelectParticipant: FC<Props> = ({participants}) => {
  // const searchParams = useSearchParams();
  // const whoami = searchParams.get('whoami');
  const pathname = usePathname();
  const router = useRouter();



  return (
    <div>
      <select
        onChange={(e) => {
          router.push(`${pathname}?whoami=${e.target.value}`)
        }}
        className="bg-gray-700 w-full max-w-xs text-center px-4 py-2 rounded-lg"
      >
        <option value="">Selecciona un participante</option>
        {participants.map((participant) => (
          <option key={participant.id} value={participant.id}>
            {participant.name}
          </option>
        ))}
      </select>
     
    </div>
  )
}

export default SelectParticipant
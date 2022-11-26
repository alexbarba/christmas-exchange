import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-xl text-red-200">
      <p>No has introducido ningún ID de intercambio.</p>
      <Link
        href="/"
        className="my-4 flex items-center gap-2 rounded-md bg-purple-400 p-4 text-purple-800"
      >
        <ArrowLeftIcon className="h-5 w-5" /> Pulsa aquí para volver al inicio
      </Link>
    </section>
  );
}

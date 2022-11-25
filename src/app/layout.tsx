import "styles/globals.css";
// import { Inter } from "@next/font/google";

// const inter = Inter({
//   weight: ["400", "700"],
// }); className={inter.className}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sorteo de navidad" />
        <title>Sorteo navideño</title>
      </head>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Intercambio{" "}
              <span className="text-[hsl(280,100%,70%)]">Navideño</span>
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

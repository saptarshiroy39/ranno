"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OG() {
  const row1 = ["v0.4.0", "gn", "ex", "sv", "cf"];
  const row2 = ["Python", "pip", "uv", "PyPI"];

  return (
    <>
      <main className="bg-sidebar text-foreground flex min-h-screen w-full flex-col items-center justify-center gap-8 p-6">
        <div className="flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="mb-2 flex items-center justify-center gap-2 text-2xl leading-none font-bold">
            <Image
              src="/Ranno.svg"
              alt="Ranno Logo"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="font-mono text-6xl text-foreground">RANNO</span>
          </h1>

          <h1 className="text-muted-foreground text-2xl font-bold tracking-tight">
            Instant Code Gen &amp; Execution from Prompts
          </h1>

          <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground text-center">
            Code Gen • File Intelligence • Shadow Copy
          </h2>

          <h3 className="flex flex-wrap items-center justify-center gap-2 font-semibold">
            {row1.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="bg-primary text-primary-foreground p-3 text-lg h-auto rounded-none font-medium border-0"
              >
                {item}
              </Badge>
            ))}
          </h3>
          <h3 className="flex flex-wrap items-center justify-center gap-2 font-semibold">
            {row2.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="bg-primary text-primary-foreground p-3 text-lg h-auto rounded-none font-medium border-0"
              >
                {item}
              </Badge>
            ))}
          </h3>
        </div>
      </main>
    </>
  );
}

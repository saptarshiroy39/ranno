"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OG() {
  const row1 = ["v0.4.0", "gn", "ex", "sv", "cf"];
  const row2 = ["Python", "pip", "uv", "PyPI"];

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[#F5F5F4] dark:bg-background text-foreground p-6">
        <div className="flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="mb-2 flex items-center justify-center gap-2 text-2xl leading-none font-bold">
            <Image
              src="/Ranno.svg"
              alt="Ranno Logo"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="font-lexend text-6xl text-foreground">RANNO</span>
          </h1>

          <h1 className="text-muted-foreground text-2xl font-bold tracking-tight">
            Instant Code Gen &amp; Execution from Prompts
          </h1>

          <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground">
            Code Gen • File Intelligence • Shadow Copy • Ultra Minimalist
          </h2>

          <h3 className="flex flex-wrap items-center justify-center gap-2 font-semibold">
            {row1.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="border-amber-600/30 dark:border-neutral-700 bg-[#FFFBEB] dark:bg-neutral-900/50 p-3 text-lg text-amber-600 dark:text-amber-400 h-auto rounded-full font-medium"
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
                className="border-amber-600/30 dark:border-neutral-700 bg-[#FFFBEB] dark:bg-neutral-900/50 p-3 text-lg text-amber-600 dark:text-amber-400 h-auto rounded-full font-medium"
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

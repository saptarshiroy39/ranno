"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { IconBook } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center gap-12 min-h-screen p-4 text-center font-sans bg-background text-foreground"
    >
      <div className="w-full max-w-xl py-6">
        <MorphingText
          texts={["404", "Not Found"]}
          className="text-amber-600 dark:text-amber-400 font-sans font-bold"
        />
      </div>
      <Button
        size="lg"
        variant="outline"
        className="mt-6 text-lg font-sans cursor-pointer"
        asChild
      >
        <Link href="/">
          <IconBook className="mr-2 h-5 w-5" />
          Return to Docs
        </Link>
      </Button>
    </main>
  );
}

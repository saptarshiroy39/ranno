import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { IconHome } from "@tabler/icons-react";
import { MorphingText } from "@/components/ui/morphing-text";
import ClickSpark from "@/components/ui/click-spark";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Ranno",
  description:
    "The requested page could not be found. Please return to Ranno to continue.",
};

export default function NotFound() {
  return (
    <ClickSpark
      sparkColor="var(--spark-color)"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
      className="bg-background flex min-h-dvh flex-col items-center justify-center px-4 text-center relative w-full"
    >
      <div className="w-full max-w-4xl">
        <MorphingText
          texts={["404", "Not Found"]}
          className="text-amber-600 dark:text-amber-400 font-sans font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl h-20 sm:h-28 md:h-36 lg:h-40"
        />
      </div>

      <div className="mt-16">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="font-sans cursor-pointer"
        >
          <Link href="/">
            <IconHome className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </ClickSpark>
  );
}

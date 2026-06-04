"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandPython,
  IconBrandGithub,
  IconHeart,
  IconAlertCircle,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-border bg-background text-card-foreground">
        <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Ranno Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-lexend text-2xl font-bold leading-none">
              Ranno
            </span>
          </Link>

          <div className="flex items-center gap-5 sm:gap-6 text-sm">
            <Link
              href="https://pypi.org/project/ranno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors h-8.5 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <IconBrandPython className="h-4 w-4 text-primary" />
              <span>PyPI</span>
            </Link>

            <Link
              href="https://github.com/saptarshiroy39/Ranno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors h-8.5 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span>Repository</span>
            </Link>

            <Link
              href="https://github.com/saptarshiroy39/Ranno/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors h-8.5 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <IconAlertCircle className="h-4 w-4 text-blue-500" />
              <span>Issues</span>
            </Link>

            <button
              onClick={() => setIsDonateOpen(true)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors h-8.5 text-xs sm:text-sm font-semibold cursor-pointer"
              id="nav-support-trigger"
            >
              <IconHeart className="h-4 w-4 text-rose-500" />
              <span>Support</span>
            </button>

            <AnimatedThemeToggler
              id="nav-theme-toggle"
              title="Toggle Theme"
              className="p-1 border rounded-full bg-accent hover:bg-accent/70 cursor-pointer"
            />
          </div>
        </div>
      </header>

      <Dialog open={isDonateOpen} onOpenChange={setIsDonateOpen}>
        <DialogContent className="border-border bg-card text-card-foreground max-w-[320px] rounded-xl p-5 flex flex-col gap-0 shadow-none">
          <DialogHeader className="space-y-1.5 text-center">
            <DialogTitle className="text-sm font-bold font-sans">
              Support
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-[10px] whitespace-nowrap">
              Scan to donate and support our open-source tools.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center mt-5">
            <div className="relative h-52 w-52 bg-muted border border-border rounded-lg overflow-hidden flex items-center justify-center p-2">
              <Image
                src="/ranno-qr.png"
                alt="Donation QR Code"
                fill
                sizes="208px"
                className="object-contain p-1"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

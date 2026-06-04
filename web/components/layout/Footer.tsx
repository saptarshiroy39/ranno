import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandPython,
  IconBrandX,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-card-foreground mt-auto">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>&copy; {currentYear}</span>
          <Link
            href="https://hirishi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline transition-colors font-medium"
          >
            SR.
          </Link>
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/saptarshiroy39"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="GitHub"
          >
            <IconBrandGithub className="h-4 w-4" />
          </Link>
          <Link
            href="https://pypi.org/user/saptarshiroy39"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="PyPI"
          >
            <IconBrandPython className="h-4 w-4" />
          </Link>
          <Link
            href="https://x.com/saptarshiroy39"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="X"
          >
            <IconBrandX className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

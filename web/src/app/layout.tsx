import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Figlet from "@/components/Figlet";

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ranno.hirishi.in"),
  title: "Ranno",
  description: "Instant Code Gen & Execution from Prompts",
  applicationName: "Ranno",
  keywords: [
    "Ranno",
    "ranno.hirishi.in",
    "https://ranno.hirishi.in",
    "Python Library",
    "Code Generation",
    "Python",
    "PyPI",
    "Python Package",
    "Python Package Index",
    "AI Code Execution",
    "AI",
    "NLP",
    "Gemini",
    "Saptarshi Roy",
    "saptarshiroy39",
    "hirishi",
    "hirishi.in",
    "https://hirishi.in",
  ],
  robots: "index, follow",
  creator: "Saptarshi Roy",
  authors: [{ name: "Saptarshi Roy", url: "https://hirishi.in" }],

  openGraph: {
    title: "Ranno",
    description: "Instant Code Gen & Execution from Prompts",
    url: "https://ranno.hirishi.in",
    siteName: "Ranno",
    images: [
      {
        url: "https://ranno.hirishi.in/OG.png",
        width: 1200,
        height: 630,
        alt: "Ranno",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ranno",
    description: "Instant Code Gen & Execution from Prompts",
    images: ["https://ranno.hirishi.in/OG.png"],
    site: "@saptarshiroy39",
    creator: "@saptarshiroy39",
  },

  icons: {
    icon: "/Ranno.svg",
    shortcut: "/Ranno.svg",
    apple: "/Ranno.svg",
  },

  alternates: {
    canonical: "https://ranno.hirishi.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen w-full flex flex-col">
            <Figlet />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

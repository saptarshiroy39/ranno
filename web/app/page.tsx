"use client";

import { useState } from "react";
import Image from "next/image";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const KEYWORDS = new Set([
  "from",
  "import",
  "def",
  "return",
  "if",
  "else",
  "for",
  "in",
  "while",
  "True",
  "False",
  "None",
  "and",
  "or",
  "not",
  "with",
  "as",
  "class",
  "pass",
  "raise",
  "try",
  "except",
  "finally",
]);
const API_FNS = new Set(["gn", "ex", "cf"]);

function tokenizeLine(line: string, idx: number) {
  if (line.trimStart().startsWith("#")) {
    return (
      <span key={idx} className="text-stone-400 dark:text-stone-500 italic">
        {line}
      </span>
    );
  }
  const pattern =
    /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[a-zA-Z_][a-zA-Z0-9_]*|[^a-zA-Z_"']+/g;
  const nodes: React.ReactNode[] = [];
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(line)) !== null) {
    const t = m[0];
    if (t.startsWith('"') || t.startsWith("'")) {
      nodes.push(
        <span key={i++} className="text-amber-600 dark:text-amber-400">
          {t}
        </span>,
      );
    } else if (KEYWORDS.has(t)) {
      nodes.push(
        <span key={i++} className="text-blue-600 dark:text-blue-400">
          {t}
        </span>,
      );
    } else if (API_FNS.has(t)) {
      nodes.push(
        <span
          key={i++}
          className="text-emerald-600 dark:text-emerald-400 font-semibold"
        >
          {t}
        </span>,
      );
    } else {
      nodes.push(<span key={i++}>{t}</span>);
    }
  }
  return <span key={idx}>{nodes}</span>;
}

function HighlightedCode({ code }: { code: string }) {
  return (
    <div className="font-geist text-sm text-foreground leading-[1.65] whitespace-pre-wrap break-words">
      {code.split("\n").map((line, i) => (
        <div key={i} className={i === 0 ? "pr-12" : ""}>
          {line === "" ? <br /> : tokenizeLine(line, i)}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [installManager, setInstallManager] = useState<"pip" | "uv">("pip");
  const [copiedApi, setCopiedApi] = useState(false);
  const [apiTab, setApiTab] = useState<"gn" | "ex" | "cf">("gn");

  const installCommands = {
    pip: "pip install ranno",
    uv: "uv add ranno",
  };

  const apiCodes = {
    gn: `from ranno import gn

# Without Data
gn("Create a list of 10 dinosaurs")

# With Data
gn("Find the average price", data="data.csv")`,

    ex: `from ranno import ex

# Without Data
ex("Print hello world 5 times")

# With Data
ex("Plot price vs category", data="data.csv")`,

    cf: `from ranno import cf, gn, ex

# Set custom credentials & model (Gemini only)
my_cfg = cf(api_key="api_key", model="model_name")

# Run with custom config
gn("Plot Sine Wave", config=my_cfg)

# Execute with custom config
ex("Plot correlation", data="data.csv", config=my_cfg)`,
  };

  const copyInstall = () => {
    navigator.clipboard.writeText(installCommands[installManager]);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const copyApi = () => {
    navigator.clipboard.writeText(apiCodes[apiTab]);
    setCopiedApi(true);
    setTimeout(() => setCopiedApi(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased overflow-hidden transition-colors duration-200">
      <Navbar />

      <main className="flex-1 flex flex-col py-6 sm:py-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch max-w-6xl my-auto">
          <div className="flex flex-col justify-between gap-8 p-1">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-xl border border-border bg-muted flex items-center justify-center p-1.5 flex-shrink-0">
                  <Image
                    src="/Ranno.svg"
                    alt="Ranno Mascot Logo"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight leading-none text-foreground flex items-center gap-1.5">
                    Ranno SDK{" "}
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-600/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 font-geist font-semibold border border-amber-600/20 dark:border-amber-400/20">
                      v0.3.3
                    </span>
                  </h1>
                  <p className="text-sm text-muted-foreground font-mono mt-1.5 font-semibold">
                    Instant Code Gen &amp; Execution from Prompts
                  </p>
                </div>
              </div>

              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-bold pt-1">
                Features
              </h2>

              <ul className="list-disc pl-5 space-y-3.5 text-[15px] text-muted-foreground">
                <li>
                  <strong className="text-foreground">AI Code Gen:</strong>{" "}
                  Turns plain English prompts into runnable Python scripts.
                </li>
                <li>
                  <strong className="text-foreground">
                    File Intelligence:
                  </strong>{" "}
                  Auto detects schema and columns for perfect context.
                </li>
                <li>
                  <strong className="text-foreground">
                    Shadow Copy Integrity:
                  </strong>{" "}
                  Keeps file backups & safely rolls back on failure.
                </li>
                <li>
                  <strong className="text-foreground">Ultra Minimalist:</strong>{" "}
                  Only 3 robust functions (
                  <span className="font-geist font-bold text-amber-600 dark:text-amber-400">
                    gn
                  </span>
                  ,{" "}
                  <span className="font-geist font-bold text-amber-600 dark:text-amber-400">
                    ex
                  </span>
                  ,{" "}
                  <span className="font-geist font-bold text-amber-600 dark:text-amber-400">
                    cf
                  </span>
                  ) - zero boilerplate.
                </li>
              </ul>
            </div>

            <div className="border border-border bg-card text-card-foreground rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-bold">
                  Install Package
                </span>
                <div className="flex gap-4 text-sm font-semibold text-muted-foreground font-sans">
                  {(["pip", "uv"] as const).map((mgr) => (
                    <button
                      key={mgr}
                      onClick={() => setInstallManager(mgr)}
                      className={`cursor-pointer transition-colors hover:text-foreground relative pb-1 ${
                        installManager === mgr
                          ? "text-foreground font-bold border-b-2 border-amber-600 dark:border-amber-400"
                          : ""
                      }`}
                    >
                      {mgr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative bg-muted border border-border rounded-xl p-4 mt-3 flex-shrink-0 overflow-hidden min-h-[56px] flex items-center">
                <div className="font-geist text-sm text-foreground leading-[1.65] whitespace-pre-wrap break-words pr-8">
                  <span className="text-stone-400 dark:text-stone-500 italic">
                    $
                  </span>{" "}
                  {installCommands[installManager]}
                </div>
                <button
                  onClick={copyInstall}
                  className="absolute top-3.5 right-3.5 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg border border-border bg-card cursor-pointer"
                  id="hero-copy-install"
                  title="Copy command"
                >
                  {copiedInstall ? (
                    <IconCheck className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <IconCopy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full p-1">
            <div className="border border-border bg-card text-card-foreground rounded-2xl p-6 space-y-4 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-bold">
                  Documentation
                </span>
                <div className="flex gap-4 text-sm font-semibold text-muted-foreground font-sans">
                  {(["gn", "ex", "cf"] as const).map((f) => (
                    <button
                      key={f}
                      id={`api-btn-${f}`}
                      onClick={() => setApiTab(f)}
                      className={`cursor-pointer transition-colors hover:text-foreground relative pb-1 ${
                        apiTab === f
                          ? "text-foreground font-bold border-b-2 border-amber-600 dark:border-amber-400"
                          : ""
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative bg-muted border border-border rounded-xl p-4 mt-3 min-h-[280px] flex-1 flex-shrink-0 overflow-hidden">
                <HighlightedCode code={apiCodes[apiTab]} />
                <button
                  onClick={copyApi}
                  className="absolute top-3.5 right-3.5 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg border border-border bg-card cursor-pointer"
                  title="Copy Code"
                >
                  {copiedApi ? (
                    <IconCheck className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <IconCopy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="text-xs text-muted-foreground font-mono pt-3 border-t border-border mt-3 flex items-center h-8 flex-shrink-0">
                <span>
                  {apiTab === "gn" && "Generate Code (No Execution)"}
                  {apiTab === "ex" && "Execute Code Instantly (Auto-Backup)"}
                  {apiTab === "cf" && "Custom Configuration (API & Model)"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

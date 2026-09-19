import Link from "next/link";

export default function Page() {
  return (
    <article className="space-y-6 font-mono">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link
          href="/introduction"
          className="hover:text-foreground transition-colors"
        >
          Docs
        </Link>
        <span>&gt;</span>
        <span className="text-foreground font-medium">Introduction</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        What is Ranno?
      </h1>

      <div className="h-px bg-border" />

      <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
        Ranno is a lightweight Python library that translates plain English
        instructions into Python code and executes it directly inside your local
        scope.
      </p>

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            AI Code Gen –{" "}
          </strong>
          Generates runnable Python code from natural language prompts using{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gn()
          </code>{" "}
          (silent code generation) or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ex()
          </code>{" "}
          (direct execution).
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Code Explanation –{" "}
          </strong>
          Explains Python prompts or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            .py
          </code>{" "}
          script files step-by-step using{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            xp()
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            File Intelligence –{" "}
          </strong>
          Auto-detects column names, types, and schemas of local CSV, Excel, or
          JSON files to provide accurate context for code generation.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Data Privacy &amp; Shadow Copy –{" "}
          </strong>
          Processes files entirely on your local machine with column headers and
          row previews only—never uploading full datasets—and creates temporary
          backups (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            copy.&lt;filename&gt;
          </code>
          ) during execution to automatically roll back and restore original
          files if a script fails.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Ultra Minimalist API –{" "}
          </strong>
          Features only 5 simple and robust functions (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gn
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ex
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            xp
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            sv
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            cf
          </code>
          ) to eliminate boilerplate code.
        </li>
      </ul>
    </article>
  );
}

import Link from "next/link";
import { CodeBlockRenderer, ApiRenderer } from "@/components/DocBlocks";

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
        <span className="text-foreground font-medium">gn</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        gn() - Code Generation
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Silent Generation –{" "}
          </strong>
          Translates prompts into valid Python code, returning a custom{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            AIResult
          </code>{" "}
          string wrapper that overrides{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            __repr__
          </code>{" "}
          to suppress automatic prints in Jupyter notebooks or Python REPLs.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            File Auto-Detection –{" "}
          </strong>
          Scans local files (CSV, Excel, JSON) using{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            magika
          </code>{" "}
          and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pandas
          </code>{" "}
          to extract column schemas and preview rows automatically into the AI
          context.
        </li>
      </ul>

      <ApiRenderer signature="ranno.gn(prompt: str, data: Optional[str] = None, config: Optional[dict] = None) -> AIResult" />

      <div className="my-4 overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Parameter
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Type
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Required
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                prompt
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                The natural language instruction.
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                data
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal">No</td>
              <td className="p-3 text-foreground/80 leading-normal">
                File path to target CSV, Excel, or JSON dataset. Reads columns
                and preview rows automatically.
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                config
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                dict
              </td>
              <td className="p-3 text-foreground/80 leading-normal">No</td>
              <td className="p-3 text-foreground/80 leading-normal">
                Optional Gemini request configurations.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Returns
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                AIResult
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Subclass of string containing the generated code block.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="gn() - API"
        code={`from ranno import gn

# Generate code silently
code = gn("Create a list of 10 dinosaurs")
print(code)

# Generate code with dataset context
dataset_code = gn("Find the average salary", data="employees.csv")
print(dataset_code)`}
      />
    </article>
  );
}

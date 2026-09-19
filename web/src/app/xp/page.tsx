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
        <span className="text-foreground font-medium">xp</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        xp() - Code Explanation
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Code & Script Explanation –{" "}
          </strong>
          Explains Python prompts or local{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            .py
          </code>{" "}
          script files in clear, step-by-step markdown overview sections.
        </li>
      </ul>

      <ApiRenderer signature="ranno.xp(prompt: str, data: Optional[str] = None, config: Optional[dict] = None) -> AIResult" />

      <div className="my-4 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
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
            <tr className="hover:bg-muted/20 transition-colors">
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
                The natural language request or code instruction.
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                data
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                No
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                File path to target target Python script (.py). Reads file contents automatically.
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                config
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                dict
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                No
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Optional configuration overrides.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Returns
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                AIResult
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Subclass of string containing the step-by-step markdown explanation.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="xp() - API"
        code={`from ranno import xp, cf

# Explain prompt directly
explanation = xp("Explain how a quicksort algorithm works in Python")
print(explanation)

# Explain a local Python script file
file_explanation = xp("Explain this code", data="script.py")
print(file_explanation)

# Explain with custom configuration
my_config = cf(api_key="api_key", model="model_name")
xp("Explain decorators", config=my_config)`}
      />
    </article>
  );
}

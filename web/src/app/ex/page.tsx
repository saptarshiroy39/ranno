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
        <span className="text-foreground font-medium">ex</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        ex() - Direct Execution
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Scope Propagation –{" "}
          </strong>
          Executes generated Python code directly within the caller&apos;s
          global namespace (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            sys._getframe(1).f_globals
          </code>
          ), allowing it to read, write, and modify local variables inline while
          automatically printing the script to the console.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Shadow Copy Integrity –{" "}
          </strong>
          Protects local files when the{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            data
          </code>{" "}
          parameter is supplied by creating a temporary{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            copy.&lt;filename&gt;
          </code>{" "}
          backup, automatically replacing and restoring the original file if the
          script execution fails.
        </li>
      </ul>

      <ApiRenderer signature="ranno.ex(prompt: str, data: Optional[str] = None, config: Optional[dict] = None) -> AIResult" />

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
                The natural language command.
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
                File path to target CSV, Excel, or JSON dataset. Enables Shadow
                Copy rollback.
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
                Optional configuration overrides.
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
                Subclass of string containing the executed code.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="ex() - API"
        code={`from ranno import ex

# Execute prompt instantly
ex("print('Hello from Ranno execution context')")

# Execute tasks with dataset context
ex("Plot salary vs department", data="employees.csv")`}
      />
    </article>
  );
}

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
        <span className="text-foreground font-medium">sv</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        sv() - Saving Code to File
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            File Persistence –{" "}
          </strong>
          Writes the generated code block directly to a local file path in your
          current working directory.
        </li>
      </ul>

      <ApiRenderer signature="ranno.sv(code: str, name: str) -> None" />

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
                code
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                The Python code block.
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                name
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                The target file path name.
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
                None
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Returns None.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="sv() - API"
        code={`from ranno import gn, sv

# 1. Generate code silently
code = gn("Download image from URL")

# 2. Save it to a file
sv(code, name="file.py")`}
      />
    </article>
  );
}

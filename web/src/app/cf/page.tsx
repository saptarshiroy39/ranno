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
        <span className="text-foreground font-medium">cf</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        cf() - Custom Configuration
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Request Configuration –{" "}
          </strong>
          Generates a custom configuration dictionary containing your API key
          and model key to override defaults when passed to{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gn()
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ex()
          </code>
          .
        </li>
      </ul>

      <ApiRenderer signature="ranno.cf(api_key: str, model: str) -> dict" />

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
                api_key
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Provider API key.
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                model
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                Target model key.
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
                dict
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                A dictionary with configuration keys.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="cf() - API"
        code={`from ranno import gn, ex, cf

# Configure custom credentials and model
my_config = cf(api_key="YOUR_GEMINI_API_KEY", model="gemini-3.1-flash-lite")

# Run generation with custom config
print(gn("Plot a sine wave", config=my_config))

# Run execution with custom config
ex("Plot correlation heatmap", data="data.csv", config=my_config)`}
      />
    </article>
  );
}

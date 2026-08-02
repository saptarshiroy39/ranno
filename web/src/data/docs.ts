export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface CodeBlock {
  type: "code";
  code: string;
  language: string;
  title?: string;
  output?: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface ApiBlock {
  type: "api";
  name: string;
  signature: string;
  description: string;
  parameters: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  returns: { type: string; description: string };
  exceptions?: { type: string; description: string }[];
  notes?: string;
}

export interface DiagramBlock {
  type: "diagram";
  diagramType: "rollback";
}

export type DocBlock =
  ParagraphBlock | CodeBlock | ListBlock | TableBlock | ApiBlock | DiagramBlock;

export interface DocPage {
  title: string;
  blocks: DocBlock[];
}

export const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "gn() - Generation", href: "/gn" },
      { title: "ex() - Execution", href: "/ex" },
      { title: "sv() - Saving Code", href: "/sv" },
      { title: "cf() - Configuration", href: "/cf" },
    ],
  },
  {
    title: "Information",
    items: [
      { title: "Author", href: "/author" },
      { title: "Resources", href: "/resources" },
    ],
  },
];

export const docsData: Record<string, DocPage> = {
  introduction: {
    title: "What is Ranno?",
    blocks: [
      {
        type: "paragraph",
        text: "Ranno is a lightweight Python library that translates plain English instructions into Python code and executes it directly inside your local scope.",
      },
      {
        type: "list",
        items: [
          "**AI Code Gen –** Generates runnable Python code from natural language prompts using `gn()` (silent code generation) or `ex()` (direct execution).",
          "**File Intelligence –** Auto-detects column names, types, and schemas of local CSV, Excel, or JSON files to provide accurate context for code generation.",
          "**Local Data Privacy –** Processes files entirely on your local machine. Only a preview of column headers and the first 5 rows are read locally—your datasets are never uploaded to external servers.",
          "**Shadow Copy Integrity –** Protects your data by creating temporary backups (`copy.<filename>`) during execution, automatically rolling back and restoring the original file if a script fails.",
          "**Caller Scope Propagation –** Executes scripts directly in the caller's namespace (`sys._getframe(1).f_globals`), allowing generated code to read and modify active workspace variables inline.",
          "**Gemini Native Integration –** Powered natively by Google Gemini models (defaulting to `gemini-3.1-flash-lite`). Credentials and model configurations can be configured per request using `cf()`.",
          "**Ultra Minimalist API –** Features only 4 simple and robust functions (`gn`, `ex`, `sv`, `cf`) to eliminate boilerplate code.",
        ],
      },
    ],
  },
  installation: {
    title: "Installation",
    blocks: [
      {
        type: "list",
        items: ["Install Ranno from PyPI using `pip`:"],
      },
      {
        type: "code",
        language: "bash",
        title: "pip",
        code: "pip install ranno",
      },
      {
        type: "list",
        items: ["Install Ranno from PyPI using `uv`:"],
      },
      {
        type: "code",
        language: "bash",
        title: "uv",
        code: "uv add ranno",
      },
      {
        type: "list",
        items: ["Verify the installation version:"],
      },
      {
        type: "code",
        language: "python",
        title: "Verify Version",
        code: "import ranno\nprint(ranno.__version__)",
      },
    ],
  },
  gn: {
    title: "gn() - Code Generation",
    blocks: [
      {
        type: "list",
        items: [
          "**Silent Generation –** Translates prompts into valid Python code, returning a custom `AIResult` string wrapper that overrides `__repr__` to suppress automatic prints in Jupyter notebooks or Python REPLs.",
          "**File Auto-Detection –** Scans local files (CSV, Excel, JSON) using `magika` and `pandas` to extract column schemas and preview rows automatically into the AI context.",
        ],
      },
      {
        type: "api",
        name: "gn",
        signature:
          "ranno.gn(prompt: str, data: Optional[str] = None, config: Optional[dict] = None) -> AIResult",
        description:
          "Generates Python code based on a prompt. If a data file path is supplied, it includes the dataset columns and rows schema preview in the LLM context.",
        parameters: [
          {
            name: "prompt",
            type: "str",
            required: true,
            description: "The natural language instruction.",
          },
          {
            name: "data",
            type: "str",
            required: false,
            description:
              "File path to target CSV, Excel, or JSON dataset. Reads columns and preview rows automatically.",
          },
          {
            name: "config",
            type: "dict",
            required: false,
            description: "Optional Gemini request configurations.",
          },
        ],
        returns: {
          type: "AIResult",
          description:
            "Subclass of string containing the generated code block.",
        },
      },
      {
        type: "code",
        language: "python",
        title: "gn() - API",
        code: 'from ranno import gn\n\n# Generate code silently\ncode = gn("Create a list of 10 dinosaurs")\nprint(code)\n\n# Generate code with dataset context\ndataset_code = gn("Find the average salary", data="employees.csv")\nprint(dataset_code)',
      },
    ],
  },
  ex: {
    title: "ex() - Direct Execution",
    blocks: [
      {
        type: "list",
        items: [
          "**Scope Propagation –** Executes generated Python code directly within the caller's global namespace (`sys._getframe(1).f_globals`), allowing it to read, write, and modify local variables inline while automatically printing the script to the console.",
          "**Shadow Copy Integrity –** Protects local files when the `data` parameter is supplied by creating a temporary `copy.<filename>` backup, automatically replacing and restoring the original file if the script execution fails.",
        ],
      },
      {
        type: "api",
        name: "ex",
        signature:
          "ranno.ex(prompt: str, data: Optional[str] = None, config: Optional[dict] = None) -> AIResult",
        description:
          "Generates and executes the Python code in the caller's global namespace, printing code to stdout and returning it.",
        parameters: [
          {
            name: "prompt",
            type: "str",
            required: true,
            description: "The natural language command.",
          },
          {
            name: "data",
            type: "str",
            required: false,
            description:
              "File path to target CSV, Excel, or JSON dataset. Enables Shadow Copy rollback.",
          },
          {
            name: "config",
            type: "dict",
            required: false,
            description: "Optional configuration overrides.",
          },
        ],
        returns: {
          type: "AIResult",
          description: "Subclass of string containing the executed code.",
        },
      },
      {
        type: "code",
        language: "python",
        title: "ex() - API",
        code: 'from ranno import ex\n\n# Execute prompt instantly\nex("print(\'Hello from Ranno execution context\')")\n\n# Execute tasks with dataset context\nex("Plot salary vs department", data="employees.csv")',
      },
    ],
  },
  sv: {
    title: "sv() - Saving Code to File",
    blocks: [
      {
        type: "list",
        items: [
          "**File Persistence –** Writes the generated code block directly to a local file path in your current working directory.",
        ],
      },
      {
        type: "api",
        name: "sv",
        signature: "ranno.sv(code: str, name: str) -> None",
        description: "Writes a code string directly into a target file path.",
        parameters: [
          {
            name: "code",
            type: "str",
            required: true,
            description: "The Python code block.",
          },
          {
            name: "name",
            type: "str",
            required: true,
            description: "The target file path name.",
          },
        ],
        returns: { type: "None", description: "Returns None." },
      },
      {
        type: "code",
        language: "python",
        title: "sv() - API",
        code: 'from ranno import gn, sv\n\n# 1. Generate code silently\ncode = gn("Download image from URL")\n\n# 2. Save it to a file\nsv(code, name="file.py")',
      },
    ],
  },
  cf: {
    title: "cf() - Custom Configuration",
    blocks: [
      {
        type: "list",
        items: [
          "**Request Configuration –** Generates a custom configuration dictionary containing your API key and model key to override defaults when passed to `gn()` or `ex()`.",
        ],
      },
      {
        type: "api",
        name: "cf",
        signature: "ranno.cf(api_key: str, model: str) -> dict",
        description: "Saves model configuration parameters and returns them.",
        parameters: [
          {
            name: "api_key",
            type: "str",
            required: true,
            description: "Provider API key.",
          },
          {
            name: "model",
            type: "str",
            required: true,
            description: "Target model key.",
          },
        ],
        returns: {
          type: "dict",
          description: "A dictionary with configuration keys.",
        },
      },
      {
        type: "code",
        language: "python",
        title: "cf() - API",
        code: 'from ranno import gn, ex, cf\n\n# Configure custom credentials and model\nmy_config = cf(api_key="YOUR_GEMINI_API_KEY", model="gemini-3.1-flash-lite")\n\n# Run generation with custom config\nprint(gn("Plot a sine wave", config=my_config))\n\n# Run execution with custom config\nex("Plot correlation heatmap", data="data.csv", config=my_config)',
      },
    ],
  },
  author: {
    title: "Author",
    blocks: [
      {
        type: "list",
        items: [
          "**Development –** Created and maintained by [`Saptarshi Roy`](https://hirishi.in) to provide ultra-lightweight prompt execution.",
          "**GitHub –** Explore the project repository at [`saptarshiroy39/Ranno`](https://github.com/saptarshiroy39/Ranno) and follow developer profile updates at [`@saptarshiroy39`](https://github.com/saptarshiroy39).",
          "**PyPI Package –** View releases and download instructions directly from [`ranno` on PyPI](https://pypi.org/project/ranno/) (profile: [`@saptarshiroy39`](https://github.com/saptarshiroy39/user/saptarshiroy39/)).",
          "**License –** Distributed openly under the permissive [`MIT License`](https://github.com/saptarshiroy39/ranno/blob/main/LICENSE) terms.",
        ],
      },
    ],
  },
  resources: {
    title: "Resources",
    blocks: [
      {
        type: "list",
        items: [
          "**[`PyPI Package`](https://pypi.org/project/ranno)** — View releases and download instructions.",
          "**[`GitHub Repository`](https://github.com/saptarshiroy39/Ranno)** — Explore the codebase and clone the repository.",
          "**[`Submit an Issue`](https://github.com/saptarshiroy39/Ranno/issues)** — Report bugs, request features, or ask questions.",
          "**[`Support Ranno`](#support)** — Donate and support our open-source tools.",
        ],
      },
    ],
  },
};

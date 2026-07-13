# ranno SDK Reference

This reference guide demonstrates how to use `ranno` to generate code, execute prompts with rollback protection, save scripts, and configure credentials.

## Imports

Import the core functions from the package:

```python
from ranno import gn, ex, sv, cf
```

---

## Code Generation (`gn`)

Generate Python code from plain-text prompts. By default, `gn()` is silent and returns the generated code string (`AIResult`).

```python
# Generate code silently
code = gn("Create a list of 10 dinosaurs")
print(code)

# Generate code with dataset context
# Reads columns and preview rows automatically
dataset_code = gn("Find the average salary", data="employees.csv")
print(dataset_code)
```

> [!NOTE]
> `gn()` reads supported files (CSV, Excel, JSON) using `magika` and `pandas` to append column structures and row previews into the AI context.

---

## Direct Execution (`ex`)

Execute AI-generated Python code directly on your system. `ex()` prints the generated script to the console before running it.

```python
# Execute prompt instantly
ex("print('Hello from Ranno execution context')")

# Execute tasks with dataset context
ex("Plot salary vs department", data="employees.csv")
```

> [!IMPORTANT]
> **Shadow Copy Integrity**: When running `ex()` with a dataset path, `ranno` creates a hidden backup copy (`copy.<filename>`) in the same directory. If the executed script fails, the original dataset is automatically restored to its original state.

> [!TIP]
> **Caller Scope Propagation**: Code executed via `ex()` runs directly inside the caller's global namespace (`sys._getframe(1).f_globals`). This allows generated code to read variables from your session and write new variables back into your active workspace.

---

## Saving Code to File (`sv`)

Save a generated code string directly to a Python file in your current working directory.

```python
# 1. Generate code silently
code = gn("Download image from URL")

# 2. Save it to a file
sv(code, name="file.py")
```

---

## Custom Configuration (`cf`)

Override default Gemini credentials or model selections per request.

```python
# Configure custom credentials and model
my_config = cf(api_key="YOUR_GEMINI_API_KEY", model="gemini-1.5-pro")

# Run generation with custom config
print(gn("Plot a sine wave", config=my_config))

# Run execution with custom config
ex("Plot correlation heatmap", data="data.csv", config=my_config)
```

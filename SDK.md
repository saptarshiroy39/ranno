# ranno SDK Reference

This reference guide demonstrates how to use `ranno` to generate code, execute prompts with rollback protection, explain scripts, save code, and configure credentials.

## Imports

```python
from ranno import gn, ex, xp, sv, cf
```

---

## `gn` - Code Generation

- **Silent Code Generation –** Translates plain English prompts into runnable Python code without executing it. Returns an `AIResult` string subclass that suppresses automatic prints in interactive environments.
- **File Auto-Detection –** Scans local files (CSV, Excel, JSON) using `magika` and `pandas` to extract column schemas and preview rows automatically into the AI context.

### API Signature

```python
ranno.gn(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult
```

### Parameter Reference

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `prompt` | `str` | Yes | Natural language instruction describing the desired code output. |
| `data` | `str \| None` | No | File path to target CSV, Excel, or JSON dataset. Reads columns and preview rows automatically. |
| `config` | `dict \| None` | No | Optional configuration dictionary from `cf()` to override API credentials or models. |

### `gn` API - Basic Usage

```python
from ranno import gn

# Generate code silently
code = gn("Create a list of 10 dinosaurs")
print(code)
```

### `gn` API - Dataset Context

```python
from ranno import gn

# Generate code with dataset context
# Automatically reads column structures and preview rows
dataset_code = gn("Find the average salary", data="employees.csv")
print(dataset_code)
```

### `gn` API - Custom Configuration

```python
from ranno import gn, cf

# Pass custom credentials or model selections
my_config = cf(api_key="api_key", model="model_name")
custom_code = gn("Plot a sine wave", config=my_config)
print(custom_code)
```

---

## `ex` - Direct Execution

- **Scope Propagation –** Executes generated Python code directly within the caller's global namespace (`sys._getframe(1).f_globals`), allowing it to read, write, and modify local variables inline.
- **Shadow Copy Integrity –** Protects local files when the `data` parameter is supplied by creating a temporary `copy.<filename>` backup, automatically replacing and restoring the original file if execution fails.

### API Signature

```python
ranno.ex(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult
```

### Parameter Reference

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `prompt` | `str` | Yes | Natural language command to generate and execute. |
| `data` | `str \| None` | No | Target dataset file path (`.csv`, `.xlsx`, `.json`). Enables automatic Shadow Copy rollback. |
| `config` | `dict \| None` | No | Optional configuration dictionary from `cf()`. |

### `ex` API - Instant Execution

```python
from ranno import ex

# Execute prompt instantly in local scope
ex("print('Hello from Ranno execution context')")
```

### `ex` API - Dataset Context & Shadow Copy

```python
from ranno import ex

# Execute tasks with dataset context and automatic rollback protection
ex("Plot salary vs department", data="employees.csv")
```

### `ex` API - Custom Configuration

```python
from ranno import ex, cf

# Execute with custom model configuration
my_config = cf(api_key="api_key", model="model_name")
ex("Plot correlation heatmap", data="data.csv", config=my_config)
```

---

## `xp` - Code Explanation

- **Code & Script Explanation –** Analyzes Python prompts or local `.py` script files and generates step-by-step markdown explanations.
- **File Intelligence –** Automatically reads and explains `.py` script files when passed to the `data` parameter.

### API Signature

```python
ranno.xp(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult
```

### Parameter Reference

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `prompt` | `str` | Yes | Natural language instruction or prompt description to explain. |
| `data` | `str \| None` | No | File path to target `.py` script file. Reads file contents automatically. |
| `config` | `dict \| None` | No | Optional configuration dictionary from `cf()`. |

### `xp` API - Explain Prompt

```python
from ranno import xp

# Explain prompt directly
explanation = xp("Explain how quicksort works in Python")
print(explanation)
```

### `xp` API - Explain Python Script File

```python
from ranno import xp

# Explain a local Python script file
file_explanation = xp("Explain this code", data="script.py")
print(file_explanation)
```

### `xp` API - Custom Configuration

```python
from ranno import xp, cf

# Explain code using custom configuration
my_config = cf(api_key="api_key", model="model_name")
explanation = xp("Explain decorators", config=my_config)
print(explanation)
```

---

## `sv` - Saving Code to File

- **File Persistence –** Writes a generated code string directly to a local file path in your current working directory.

### API Signature

```python
ranno.sv(code: str, name: str) -> None
```

### Parameter Reference

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `code` | `str` | Yes | The Python code string to save. |
| `name` | `str` | Yes | The target file path name (e.g. `file.py`). |

### `sv` API - Basic Usage

```python
from ranno import gn, sv

# Generate code silently
code = gn("Download image from URL")

# Save it to a file
sv(code, name="file.py")
```

---

## `cf` - Custom Configuration

- **Request Configuration –** Generates a custom configuration dictionary containing your API key and model key to override default settings per request.

### API Signature

```python
ranno.cf(api_key: str, model: str) -> dict
```

### Parameter Reference

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `api_key` | `str` | Yes | Provider API key. |
| `model` | `str` | Yes | Target model identifier key. |

### `cf` API - Basic Usage

```python
from ranno import gn, ex, xp, cf

# Configure custom credentials and model
my_config = cf(api_key="api_key", model="model_name")

# Run generation with custom config
print(gn("Plot a sine wave", config=my_config))

# Run execution with custom config
ex("Plot correlation heatmap", data="data.csv", config=my_config)

# Run explanation with custom config
print(xp("Explain decorators", config=my_config))
```

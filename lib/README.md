---
title: Ranno
emoji: 🦖
colorFrom: gray
colorTo: yellow
sdk: docker
pinned: false
app_port: 7860
short_description: Python Library
---

<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/ranno/refs/heads/main/lib/public/Ranno.svg" alt="🦖" width="128">
  <br>
  <b>Ranno</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/ranno"><b>Ranno</b></a> is a lightweight Python Library that converts prompts into fully-functional Python scripts, scans dataset columns automatically, and runs code safely with automated rollback file protection.
</p>

<p align="center">
  <a href="https://pypi.org/project/ranno/">
    <img alt="PyPI Version" src="https://img.shields.io/pypi/v/ranno?color=royalblue">
  </a>
  <a href="https://github.com/saptarshiroy39/ranno/releases">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/saptarshiroy39/ranno?color=emerald">
  </a>
  <a href="https://pepy.tech/project/ranno">
    <img alt="PyPI Downloads" src="https://img.shields.io/pepy/dt/ranno?color=goldenrod">
  </a>
  <a href="https://github.com/saptarshiroy39/ranno/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/saptarshiroy39/ranno?color=crimson">
  </a>
</p>

---

## ✳️ _SDK_

`Installation`

```bash
pip install ranno
# or
uv add ranno
```

`Generate Code (gn)`

```python
from ranno import gn

# Generate code silently
code = gn("Create a list of 10 dinosaurs")
print(code)

# Generate code with dataset context
dataset_code = gn("Find the average salary", data="employees.csv")
print(dataset_code)
```

`Execute Code (ex)`

```python
from ranno import ex

# Execute prompt instantly
ex("print('Hello from Ranno execution context')")

# Execute tasks with dataset context
ex("Plot salary vs department", data="employees.csv")
```

`Explain Code & Scripts (xp)`

```python
from ranno import xp

# Explain prompt directly
explanation = xp("Explain how quicksort works in Python")
print(explanation)

# Explain local .py script file
file_explanation = xp("Explain this code", data="script.py")
print(file_explanation)
```

`Save Code to File (sv)`

```python
from ranno import gn, sv

# Generate code silently
code = gn("Download image from URL")

# Save it to a file
sv(code, name="file.py")
```

`Custom Configuration (cf)`

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

---

## ✳️ _Features_

| FEATURE | DESCRIPTION |
| :---: | :---: |
| **AI Code Generation** | Turns plain English prompts into full, runnable Python scripts using `gn()` |
| **Instant Execution** | Runs AI-generated Python code directly inside local scope using `ex()` |
| **Code Explanation** | Explains Python prompts or `.py` script files step-by-step using `xp()` |
| **AI File Intelligence** | Auto-detects column names, types, and schemas of local CSV, Excel, or JSON files |
| **Shadow Copy Integrity** | Creates a hidden `copy.` snapshot before execution; restores on failure |
| **Ultra Minimalism** | Five functions (`gn`, `ex`, `xp`, `sv`, `cf`) is all you need - zero boilerplate |

---

## ✳️ _Architecture_

| # | COMPONENT | DESCRIPTION | STACK |
| :---: | :---: | :---: | :---: |
| 1️⃣ | **Ranno SDK** | Client-side library handling data prep & execution | **_Python_**, **_Magika_**, **_Pandas_** |
| 2️⃣ | **Ranno API** | Backend service for secure code generation | **_FastAPI_**, **_Hugging Face_**, **_Gemini_** |
| 3️⃣ | **Ranno Docs** | Official documentation & web interface | **_Next.js_**, **_Tailwind_**, **_Vercel_** |

---

<p align="center">
  Made with 🦖 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>

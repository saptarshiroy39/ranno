---
title: Ranno
emoji: 🦖
colorFrom: gray
colorTo: yellow
sdk: docker
pinned: false
app_port: 7860
---

<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/Ranno/main/public/Ranno.svg" alt="🦖" width="128">
  <br>
  <b>Ranno</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/ranno"><b>Ranno</b></a> is a lightweight Python Library that converts prompts into fully-functional Python scripts, scans dataset columns automatically, and runs code safely with automated rollback file protection.
</p>

<p align="center">
  <a href="https://pypi.org/project/ranno"><b>🔗 <code>PyPI Package</code></b></a>
  &nbsp;|&nbsp;
  🆔 <code>pip install ranno</code> or <code>uv add ranno</code>
</p>

---

## 🐍 _SDK_

`Installation`

```bash
pip install ranno
# or
uv add ranno
```

`Generate Code (No Execution)`

```python
from ranno import gn

# Without Data
gn("Create a list of 10 dinosaurs")

# With Data
gn("Find the average price", data="data.csv")
```

`Execute Code Instantly (Auto-Backup)`

```python
from ranno import ex

# Without Data
ex("Print hello world 5 times")

# With Data
ex("Plot price vs category", data="data.csv")
```

`Custom Configuration (API & Model)`

```python
from ranno import cf, gn, ex

# Set custom credentials & model (Gemini only)
my_cfg = cf(api_key="api_key", model="model_name")

# Run with custom config
gn("Plot Sine Wave", config=my_cfg)

# Execute with custom config
ex("Plot correlation", data="data.csv", config=my_cfg)
```

---

## ✨ _Features_

| FEATURE                       | DESCRIPTION                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| 🧠 **AI Code Generation**     | Turns plain English prompts into full, runnable Python scripts            |
| 📁 **AI File Intelligence**   | Detects file types (CSV, Excel, JSON) accurately, even without extensions |
| 🔍 **Auto Schema Extraction** | Reads columns and first 5 rows to build perfect AI context automatically  |
| 🧪 **Instant Execution**      | Runs AI-generated Python code directly with automated error handling      |
| ⚙️ **Custom Configuration**   | Override default API keys and Models per request using `cf()`             |
| 🛡️ **Shadow Copy Integrity**  | Creates a hidden `copy.` snapshot before execution; restores on failure   |
| 🦖 **Ultra Minimalism**       | Three functions (`gn`, `ex`, `cf`) is all you need - zero boilerplate     |

---

## 🏗️ _System Architecture_

| #   | COMPONENT     | DESCRIPTION                                            | STACK                                     |
| --- | ------------- | ------------------------------------------------------ | ----------------------------------------- |
| 1️⃣  | **Ranno SDK** | The client-side library handling data prep & execution | **_Python_**, **_Magika_**, **_Pandas_**  |
| 2️⃣  | **Ranno API** | Serverless backend for secure code generation          | **_FastAPI_**, **_Vercel_**, **_Gemini_** |

---

<p align="center">
  Made with 🦖 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>

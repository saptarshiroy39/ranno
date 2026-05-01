<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/Ranno/main/public/Ranno.svg" alt="🦖" width="128">
  <br>
  <b>Ranno</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/ranno/"><b>Ranno</b></a> is a minimalist <b>AI-Bridge</b> that turns plain English into executable Python - instantly. Just describe what you want, and Ranno generates, understands your data, and runs the code for you.
</p>

<p align="center">
  <a href="https://pypi.org/project/ranno/"><b>🔗 <code>PyPI Package</code></b></a>
  &nbsp;|&nbsp;
  🆔 <code>pip install ranno</code>
</p>

---

## 🐍 _SDK_

`Installation`

```bash
pip install ranno
```

`Generate Code (No Execution)`

```python
from ranno import gn

# Without Data
gn("Create a list of 10 dinosaurs and print it")

# With Data
gn("Find the average price", data="data.csv")
```

`Execute Code Instantly (Sandboxed)`

```python
from ranno import ex

# Without Data
ex("Print hello world 5 times")

# With Data
ex("Plot the correlation between price and category", data="data.csv")
```

---

## ✨ _Features_

| FEATURE                       | DESCRIPTION                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| 🧠 **AI Code Generation**     | Turns plain English prompts into full, runnable Python scripts            |
| 🔍 **AI File Intelligence**   | Detects file types (CSV, Excel, JSON) accurately, even without extensions |
| 📊 **Auto Schema Extraction** | Reads columns and first 5 rows to build perfect AI context automatically  |
| 🧪 **Sandboxed Execution**    | Runs AI code in an isolated environment with `pd`, `np` pre-loaded        |
| 🛡️ **Shadow Copy Integrity**  | Creates a hidden `.back` snapshot before execution; restores on failure   |
| 🦎 **Ultra Minimalism**       | Two functions (`gn`, `ex`) is all you need - zero boilerplate             |

---

## 🏗️ _System Architecture_

| #   | COMPONENT         | DESCRIPTION                                              | STACK                                         |
| --- | ----------------- | -------------------------------------------------------- | --------------------------------------------- |
| 1️⃣  | **Ranno SDK**     | The client-side library handling data prep and execution | **_Python_**, **_Pandas_**, **_Magika_**      |
| 2️⃣  | **AI Bridge API** | Serverless backend for secure code generation            | **_FastAPI_**, **_Vercel_**, **_Gemini 3.1_** |

---

<p align="center">
  Made with 🦖 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>

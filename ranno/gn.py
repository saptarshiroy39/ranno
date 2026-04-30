import requests
import pandas as pd
from pathlib import Path
from magika import Magika

BASE_URL = "https://ranno.vercel.app"
m = Magika()

class AIResult(str):
    def __repr__(self) -> str:
        return ""

def gn(prompt: str, data: str | None = None) -> AIResult:
    if not data:
        return _send_request(prompt)

    path = Path(data)
    try:
        file_info = m.identify_path(path)
        label = file_info.output.label
        
        if label == 'csv':
            df, method = pd.read_csv(path, nrows=5), 'read_csv'
        elif label in ['excel', 'xlsx', 'xls']:
            df, method = pd.read_excel(path, nrows=5), 'read_excel'
        elif label == 'json':
            df, method = pd.read_json(path), 'read_json'
        else:
            return AIResult(f"# Error: Unsupported file type '{label}'")

        context = (
            f"Dataset Summary:\n"
            f"Columns: {list(df.columns)}\n"
            f"First 5 rows:\n{df.to_string()}\n\n"
            f"CRITICAL: Start code with:\n"
            f"import pandas as pd\n"
            f"df = pd.{method}('{data}')\n\n"
            f"Task: {prompt}"
        )
        return _send_request(context)

    except Exception as e:
        return AIResult(f"# Error: {e}")

def _send_request(prompt: str) -> AIResult:
    try:
        payload = {"prompt": prompt}
        response = requests.post(f"{BASE_URL}/generate", json=payload, timeout=30)
        code = response.json().get("code", "# No result found")
        print(code)
        return AIResult(code)

    except Exception as e:
        return AIResult(f"# Error: {e}")

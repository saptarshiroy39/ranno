from pathlib import Path

import requests

BASE_URL = "https://saptarshiroy39-ranno.hf.space"


class AIResult(str):
    def __repr__(self):
        return ""


def xp(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult:
    if not data:
        return _send_request(prompt, config)

    path = Path(data)
    try:
        if path.suffix == ".py":
            code = path.read_text(encoding="utf-8")
        else:
            return AIResult(f"# Error: Unsupported file type '{path.suffix}'")

        return _send_request(code, config)

    except Exception as e:
        return AIResult(f"# Error: {e}")


def _send_request(prompt: str, config: dict | None = None) -> AIResult:
    try:
        payload = {"prompt": prompt}
        if config:
            payload.update(config)

        response = requests.post(f"{BASE_URL}/explain", json=payload, timeout=30)
        explanation = response.json().get("explanation", "# No result found")
        return AIResult(explanation)

    except Exception as e:
        return AIResult(f"# Error: {e}")

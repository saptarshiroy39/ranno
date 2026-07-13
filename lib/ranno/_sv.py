def sv(code: str, name: str) -> None:
    with open(name, "w", encoding="utf-8") as f:
        f.write(code)

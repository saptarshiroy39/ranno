from pathlib import Path
import shutil

from ._gn import gn, AIResult


def ex(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult:
    code = gn(prompt, data, config)

    if not code or code.startswith("# Error"):
        return code

    backup_path = None
    if data:
        original_path = Path(data)
        backup_path = original_path.with_name(f"copy.{original_path.name}")
        shutil.copy2(original_path, backup_path)

    try:
        exec(code, globals())

        if backup_path:
            backup_path.unlink(missing_ok=True)
        return AIResult(code)

    except Exception as e:
        if backup_path and backup_path.exists():
            backup_path.replace(original_path)
        return AIResult(f"# Error: {e}")

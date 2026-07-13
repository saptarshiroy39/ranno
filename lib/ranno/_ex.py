import shutil
import sys
from pathlib import Path

from ._gn import AIResult, gn


def ex(prompt: str, data: str | None = None, config: dict | None = None) -> AIResult:
    code = gn(prompt, data, config)

    if not code or code.startswith("# Error"):
        return code

    print(code)

    backup_path = None
    if data:
        original_path = Path(data)
        backup_path = original_path.with_name(f"copy.{original_path.name}")
        shutil.copy2(original_path, backup_path)

    try:
        exec(code, sys._getframe(1).f_globals)

        if backup_path:
            backup_path.unlink(missing_ok=True)
        return AIResult(code)

    except Exception as e:
        if backup_path and backup_path.exists():
            backup_path.replace(original_path)
        return AIResult(f"# Error: {e}")

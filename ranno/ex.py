from pathlib import Path
import shutil

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from .gn import gn, AIResult


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
        sand_env = {"pd": pd, "np": np, "plt": plt, "sns": sns, "__builtins__": __builtins__}
        exec(code, sand_env)
        
        if backup_path: 
            backup_path.unlink(missing_ok=True)
        return AIResult(code)

    except Exception as e:
        if backup_path and backup_path.exists():
            print(f"# Execution failed. Data preserved at {backup_path.name}")
        return AIResult(f"# Error: {e}")

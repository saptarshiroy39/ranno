import pandas as pd
import numpy as np
import shutil
from pathlib import Path
import matplotlib.pyplot as plt
import seaborn as sns
from .gn import gn, AIResult

def ex(prompt: str, data: str | None = None) -> AIResult:
    code = gn(prompt, data)
    
    if not code or code.startswith("# Error"):
        return code

    backup_path = None
    if data:
        original_path = Path(data)
        backup_path = original_path.with_name(f".{original_path.name}.back")
        shutil.copy2(original_path, backup_path)

    try:
        exec_environment = {
            "pd": pd, 
            "np": np, 
            "plt": plt, 
            "sns": sns, 
            "__builtins__": __builtins__
        }
        exec(code, exec_environment)
        
        if backup_path:
            backup_path.unlink(missing_ok=True)
        return AIResult(code)

    except Exception as e:
        if backup_path and backup_path.exists():
            print(f"# Execution failed. Data preserved at {backup_path.name}")
        return AIResult(f"# Error: {e}")

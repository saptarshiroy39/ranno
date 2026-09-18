import json
import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

APP_NAME = "Ranno API"
APP_VERSION = "0.5.0"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/"
CHAT_MODEL = "gemini-3.1-flash-lite"

CORS_ORIGINS_STR = os.getenv("CORS_ORIGINS", '["*"]')
CORS_ORIGINS = json.loads(CORS_ORIGINS_STR)

PROMPTS_DIR = Path(__file__).parent / "prompts"

SYSTEM_PROMPT = (PROMPTS_DIR / "SYSTEM.md").read_text(encoding="utf-8").strip()
EXPLAIN_PROMPT = (PROMPTS_DIR / "EXPLAIN.md").read_text(encoding="utf-8").strip()
USER_PROMPT = (PROMPTS_DIR / "USER.md").read_text(encoding="utf-8").strip()
EXPLAIN_USER_PROMPT = (PROMPTS_DIR / "EXPLAIN_USER.md").read_text(encoding="utf-8").strip()

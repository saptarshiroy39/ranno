import json
import os

from dotenv import load_dotenv

load_dotenv()

APP_NAME = "Ranno API"
APP_VERSION = "0.4.1"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/"
CHAT_MODEL = "gemini-3.1-flash-lite"

CORS_ORIGINS_STR = os.getenv("CORS_ORIGINS", '["*"]')
CORS_ORIGINS = json.loads(CORS_ORIGINS_STR)

SYSTEM_PROMPT = """Write the full, complete, and raw Python code for the user's request.
IMPORTANT: Do NOT use ellipses (...), do NOT use placeholders, and do NOT skip any lines.
Do NOT use markdown backticks (```). Return ONLY the raw code."""

USER_PROMPT = "Request: {prompt}"

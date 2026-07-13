import json
import os

from dotenv import load_dotenv

load_dotenv()

APP_NAME = "Ranno API"
APP_VERSION = "0.4.0"
ENV = os.getenv("ENV", "development")

CORS_ORIGINS_STR = os.getenv("CORS_ORIGINS", '["*"]')
CORS_ORIGINS = json.loads(CORS_ORIGINS_STR)

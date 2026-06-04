import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
import google.generativeai as genai

from app.config import APP_NAME, APP_VERSION, CORS_ORIGINS, ENV

app = FastAPI(
    title=APP_NAME,
    version=APP_VERSION,
    docs_url=None if ENV == "production" else "/docs",
    redoc_url=None if ENV == "production" else "/redoc",
    openapi_url=None if ENV == "production" else "/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PromptRequest(BaseModel):
    prompt: str
    api_key: str | None = None
    model: str | None = None


@app.get("/")
@app.head("/")  # UptimeRobot
async def root():
    return {
        "name": APP_NAME,
        "version": APP_VERSION,
        "status": "OK"
    }


@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    favicon_path = os.path.join("app", "static", "favicon.ico")
    if os.path.exists(favicon_path):
        return FileResponse(favicon_path)
    return {"status": "No favicon"}


@app.post("/generate")
async def generate(request: PromptRequest):
    try:
        current_api_key = request.api_key or os.getenv("GEMINI_API_KEY")
        current_model_name = request.model or "gemini-3.1-flash-lite"

        genai.configure(api_key=current_api_key)
        client = genai.GenerativeModel(current_model_name)

        prompt = (
            f"Write the full, complete, and raw Python code for the following request: {request.prompt}. "
            "IMPORTANT: Do NOT use ellipses (...), do NOT use placeholders, and do NOT skip any lines. "
            "Do NOT use markdown backticks (```). Return ONLY the raw code."
        )

        response = client.generate_content(prompt)
        clean_code = response.text.replace("```python", "").replace("```", "").strip()
        return {"code": clean_code}

    except Exception as e:
        return {"code": f"# AI Error: {str(e)}"}

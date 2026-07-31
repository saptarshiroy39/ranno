import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from openai import OpenAI
from pydantic import BaseModel

from app.config import (
    APP_NAME,
    APP_VERSION,
    CORS_ORIGINS,
    ENV,
    GEMINI_API_KEY,
    GEMINI_BASE_URL,
    CHAT_MODEL,
    SYSTEM_PROMPT,
    USER_PROMPT,
)

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
        current_api_key = request.api_key or GEMINI_API_KEY
        current_model_name = request.model or CHAT_MODEL

        client = OpenAI(
            api_key=current_api_key,
            base_url=GEMINI_BASE_URL,
        )

        response = client.chat.completions.create(
            model=current_model_name,
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": USER_PROMPT.format(prompt=request.prompt),
                },
            ],
        )
        
        answer = response.choices[0].message.content
        clean_code = (
            answer.replace("```python", "").replace("```", "").strip()
            if answer
            else ""
        )
        return {"code": clean_code}

    except Exception as e:
        return {"code": f"# AI Error: {e!s}"}

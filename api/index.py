import os

from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
from dotenv import load_dotenv

import google.generativeai as genai


load_dotenv()
app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str
    api_key: str | None = None
    model: str | None = None

@app.get("/")
@app.head("/") # UptimeRobot
async def root():
    return {"name": "Ranno API", "version": "0.3.0", "status": "OK"}

@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return FileResponse("api/favicon.ico")

@app.post("/generate")
async def generate(request: PromptRequest):
    try:
        current_api_key = request.api_key or os.getenv("GEMINI_API_KEY")
        current_model_name = request.model or 'gemini-3.1-flash-lite-preview'
        
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

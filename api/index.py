import os
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.responses import FileResponse
import google.generativeai as genai

load_dotenv()
app = FastAPI()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-3.1-flash-lite-preview')

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
async def root():
    return {"message": "Ranno is running"}


@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return FileResponse("api/favicon.ico")

@app.post("/generate")
async def generate(request: PromptRequest):
    try:
        prompt = (
            f"Write the full, complete, and raw Python code for the following request: {request.prompt}. "
            "IMPORTANT: Do NOT use ellipses (...), do NOT use placeholders, and do NOT skip any lines. "
            "Do NOT use markdown backticks (```). Return ONLY the raw code."
        )
        
        response = model.generate_content(prompt)
        clean_code = response.text.replace("```python", "").replace("```", "").strip()
        return {"code": clean_code}
 
    except Exception as e:
        return {"code": f"# AI Error: {str(e)}"}

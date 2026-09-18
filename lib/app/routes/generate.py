from fastapi import APIRouter
from pydantic import BaseModel

from app.services.generate import generate_code


class PromptRequest(BaseModel):
    prompt: str
    api_key: str | None = None
    model: str | None = None


router = APIRouter()


@router.post("/generate", tags=["Code Generation"])
async def generate(request: PromptRequest):
    try:
        clean_code = generate_code(
            prompt=request.prompt,
            api_key=request.api_key,
            model=request.model,
        )
        return {"code": clean_code}
    except Exception as e:
        return {"code": f"# AI Error: {e!s}"}

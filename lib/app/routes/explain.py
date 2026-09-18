from fastapi import APIRouter
from pydantic import BaseModel

from app.services.explain import explain_code


class PromptRequest(BaseModel):
    prompt: str
    api_key: str | None = None
    model: str | None = None


router = APIRouter()


@router.post("/explain", tags=["Code Explanation"])
async def explain(request: PromptRequest):
    try:
        explanation = explain_code(
            prompt=request.prompt,
            api_key=request.api_key,
            model=request.model,
        )
        return {"explanation": explanation}
    except Exception as e:
        return {"explanation": f"# AI Error: {e!s}"}

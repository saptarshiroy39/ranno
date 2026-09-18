from openai import OpenAI

from app.config import CHAT_MODEL, EXPLAIN_PROMPT, EXPLAIN_USER_PROMPT, GEMINI_API_KEY, GEMINI_BASE_URL


def explain_code(prompt: str, api_key: str | None = None, model: str | None = None) -> str:
    current_api_key = api_key or GEMINI_API_KEY
    current_model_name = model or CHAT_MODEL

    client = OpenAI(
        api_key=current_api_key,
        base_url=GEMINI_BASE_URL,
    )

    response = client.chat.completions.create(
        model=current_model_name,
        messages=[
            {
                "role": "system",
                "content": EXPLAIN_PROMPT,
            },
            {
                "role": "user",
                "content": EXPLAIN_USER_PROMPT.format(prompt=prompt),
            },
        ],
    )

    answer = response.choices[0].message.content or ""
    return answer.strip()

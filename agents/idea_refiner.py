import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def refine_idea(raw_idea: str) -> str:
    prompt = (
        "Refine the following research idea, clarify its scope, and translate it into technical/research language:\n\n"
        f"{raw_idea}\n\nRefined idea:"
    )
    model = genai.GenerativeModel("models/gemini-1.5-flash-latest")  # Use the free-tier model
    response = model.generate_content(prompt)
    return response.text.strip()

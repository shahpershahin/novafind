import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def generate_keywords(refined_idea: str) -> list:
    prompt = (
        "Extract and categorize keywords for academic and patent searches from the following idea. "
        "Expand with synonyms and related terms. Output as a comma-separated list:\n\n"
        f"{refined_idea}\n\nKeywords:"
    )
    model = genai.GenerativeModel("models/gemini-1.5-flash-latest")  # Use the free-tier model
    response = model.generate_content(prompt)
    keywords = response.text.strip()
    return [k.strip() for k in keywords.split(",") if k.strip()]

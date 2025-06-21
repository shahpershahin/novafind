import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def summarize_findings(papers, patents):
    prompt = f"Summarize the following research papers and patents, highlighting key trends and commonalities.\n\nPapers:\n"
    for p in papers:
        prompt += f"- {p['title']}: {p['abstract']}\n"
    prompt += "\nPatents:\n"
    for pat in patents:
        prompt += f"- {pat['title']}: {pat['abstract']}\n"
    prompt += "\nSummary:"
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text.strip()

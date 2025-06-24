# main_api.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agents.idea_refiner import refine_idea
from agents.keyword_generator import generate_keywords
from agents.research_retriever import search_semantic_scholar
from agents.patent_retriever import search_patentsview
from agents.summarizer import summarize_findings
from report_generator import generate_report

app = FastAPI()

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev, restrict in prod!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class IdeaRequest(BaseModel):
    idea: str

@app.post("/analyze")
async def analyze_idea(req: IdeaRequest):
    raw_idea = req.idea
    refined = refine_idea(raw_idea)
    keywords = generate_keywords(refined)
    papers = search_semantic_scholar(keywords)
    patents = search_patentsview(keywords)
    summary = summarize_findings(papers, patents)
    report = generate_report(refined, keywords, papers, patents, summary)
    return {
        "refinedIdea": refined,
        "keywords": keywords,
        "papers": papers,
        "patents": patents,
        "summary": summary,
        "report": report,
    }

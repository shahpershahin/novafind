from agents.idea_refiner import refine_idea
from agents.keyword_generator import generate_keywords
from agents.research_retriever import search_semantic_scholar
from agents.patent_retriever import search_patentsview
from agents.summarizer import summarize_findings
from report_generator import generate_report

def main():
    print("Welcome to NovaFind Prototype!")
    raw_idea = input("Enter your research idea: ")
    print("\nRefining idea...")
    refined = refine_idea(raw_idea)
    print(f"Refined Idea: {refined}\n")
    print("Generating keywords...")
    keywords = generate_keywords(refined)
    print(f"Keywords: {keywords}\n")
    print("Searching for research papers...")
    papers = search_semantic_scholar(keywords)
    print(f"Found {len(papers)} papers.\n")
    print("Searching for patents...")
    patents = search_patentsview(keywords)
    print(f"Found {len(patents)} patents.\n")
    print("Summarizing findings...")
    summary = summarize_findings(papers, patents)
    print("Generating report...\n")
    report = generate_report(refined, keywords, papers, patents, summary)
    print(report)

if __name__ == "__main__":
    main()

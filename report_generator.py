def generate_report(refined_idea, keywords, papers, patents, summary):
    report = f"# NovaFind Research & Patent Report\n\n"
    report += f"## Refined Idea\n{refined_idea}\n\n"
    report += f"## Keywords\n{', '.join(keywords)}\n\n"
    report += f"## Top Research Papers\n"
    for p in papers:
        report += f"- **{p['title']}**\n  - Authors: {', '.join(p['authors'])}\n  - [Link]({p['url']})\n  - Abstract: {p['abstract']}\n\n"
    report += f"## Top Patents\n"
    for pat in patents:
        report += f"- **{pat['title']}**\n  - [Link]({pat['url']})\n  - Abstract: {pat['abstract']}\n\n"
    report += f"## Summary\n{summary}\n"
    return report

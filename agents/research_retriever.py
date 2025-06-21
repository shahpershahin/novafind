import requests

def search_semantic_scholar(keywords: list, top_n=3):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"
    results = []
    for kw in keywords:
        params = {
            "query": kw,
            "limit": top_n,
            "fields": "title,abstract,authors,url"
        }
        resp = requests.get(url, params=params)
        if resp.status_code == 200:
            data = resp.json()
            for paper in data.get("data", []):
                results.append({
                    "title": paper.get("title"),
                    "abstract": paper.get("abstract"),
                    "authors": [a.get("name") for a in paper.get("authors", [])],
                    "url": paper.get("url")
                })
    return results

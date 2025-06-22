import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

def fetch_papers_for_keyword(kw, top_n):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"
    params = {
        "query": kw,
        "limit": top_n,
        "fields": "title,abstract,authors,url"
    }
    resp = requests.get(url, params=params)
    results = []
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

def search_semantic_scholar(keywords: list, top_n=3):
    results = []
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(fetch_papers_for_keyword, kw, top_n) for kw in keywords]
        for future in as_completed(futures):
            results.extend(future.result())
    return results

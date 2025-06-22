import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

def fetch_patents_for_keyword(kw, top_n):
    url = "https://search.patentsview.org/api/v1/patents/query"
    query = {
        "q": {"_text_any":{"patent_title": kw}},
        "f": ["patent_title", "patent_abstract", "patent_number"],
        "o": {"per_page": top_n}
    }
    resp = requests.post(url, json=query)
    results = []
    if resp.status_code == 200:
        data = resp.json()
        for patent in data.get("patents", []):
            results.append({
                "title": patent.get("patent_title"),
                "abstract": patent.get("patent_abstract"),
                "number": patent.get("patent_number"),
                "url": f"https://patents.google.com/patent/US{patent.get('patent_number')}"
            })
    return results

def search_patentsview(keywords: list, top_n=3):
    results = []
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(fetch_patents_for_keyword, kw, top_n) for kw in keywords]
        for future in as_completed(futures):
            results.extend(future.result())
    return results

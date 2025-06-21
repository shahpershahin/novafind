import requests

def search_patentsview(keywords: list, top_n=3):
    url = "https://search.patentsview.org/api/v1/patents/query"
    results = []
    for kw in keywords:
        query = {
            "q": {"_text_any":{"patent_title": kw}},
            "f": ["patent_title", "patent_abstract", "patent_number"],
            "o": {"per_page": top_n}
        }
        resp = requests.post(url, json=query)
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

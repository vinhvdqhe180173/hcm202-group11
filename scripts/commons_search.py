#!/usr/bin/env python3
import json
import sys
import urllib.parse
import urllib.request

UA = "HCM202-edu-site/1.0 (local dev; educational)"


def api(params: dict) -> dict:
    base = "https://commons.wikimedia.org/w/api.php?"
    url = base + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8"))


def search(term: str, limit: int = 10) -> list[dict]:
    data = api(
        {
            "action": "query",
            "format": "json",
            "generator": "search",
            "gsrnamespace": 6,  # File:
            "gsrsearch": term,
            "gsrlimit": limit,
            "prop": "imageinfo",
            "iiprop": "url|extmetadata",
            "iiurlwidth": 1600,
        }
    )

    pages = data.get("query", {}).get("pages", {})
    results: list[dict] = []
    for page in pages.values():
        title = page.get("title")
        ii = (page.get("imageinfo") or [{}])[0]
        meta = ii.get("extmetadata", {})

        def m(key: str) -> str:
            v = (meta.get(key, {}) or {}).get("value", "")
            return v.replace("\n", " ").strip()

        results.append(
            {
                "title": title,
                "thumb": ii.get("thumburl") or ii.get("url") or "",
                "license": m("LicenseShortName"),
                "license_url": m("LicenseUrl"),
                "artist": m("Artist"),
                "credit": m("Credit"),
                "attribution_required": m("AttributionRequired"),
            }
        )

    results.sort(key=lambda r: (r.get("title") or ""))
    return results


def main() -> int:
    terms = sys.argv[1:] or [
        "Ho Chi Minh portrait",
        "Ho Chi Minh 1945 Ba Dinh",
        "Ho Chi Minh with children",
        "Ho Chi Minh with soldiers",
        "Ho Chi Minh flag",
        "Dien Bien Phu 1954 photo",
    ]

    for term in terms:
        print(f"\n=== {term} ===")
        for it in search(term, limit=10):
            print(f"- {it['title']}")
            print(f"  license: {it['license']}")
            if it["license_url"]:
                print(f"  license_url: {it['license_url']}")
            if it["thumb"]:
                print(f"  url: {it['thumb']}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

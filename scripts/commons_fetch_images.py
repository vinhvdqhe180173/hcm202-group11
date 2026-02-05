#!/usr/bin/env python3
"""Download freely-licensed images from Wikimedia Commons into public/images.

This script is intentionally conservative:
- It fetches each file's license metadata.
- It only downloads the rendered thumbnail (iiurlwidth) when available.
- It writes an attribution file for compliance.

Run:
  python3 scripts/commons_fetch_images.py
"""

from __future__ import annotations

import json
import os
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request
from urllib.error import HTTPError, URLError

UA = "HCM202-edu-site/1.0 (local dev; educational)"
API = "https://commons.wikimedia.org/w/api.php?"

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC_IMAGES = ROOT / "public" / "images"


MAPPING: list[dict[str, str]] = [
    {
        "local": "hero-bg.jpg",
        "title": "File:Ba Dinh Square September 2nd, 1945.jpg",
        "purpose": "Hero background (Ba Đình 2/9/1945)",
    },
    {
        "local": "ho-chi-minh-portrait.jpg",
        "title": "File:Ho Chi Minh - 1946 Portrait.jpg",
        "purpose": "Portrait",
    },
    {
        "local": "ho-chi-minh-young.jpg",
        "title": "File:Nguyen Aïn Nuä'C (Ho-Chi-Minh), délégué indochinois, Congrès communiste de Marseille, 1921, Meurisse, BNF Gallica.jpg",
        "purpose": "Young (historical photo, 1921)",
    },
    {
        "local": "declaration-independence.jpg",
        "title": "File:Président Ho-chi-Minh lit la Proclamation-d'indépendance sur la place Ba-dinh le 2nd Sep 1945.jpg",
        "purpose": "Declaration of Independence 2/9/1945",
    },
    {
        "local": "ho-chi-minh-people.jpg",
        "title": "File:Ho Chi Minh (third from left standing) and the OSS in 1945.jpg",
        "purpose": "With people (group photo)",
    },
    {
        "local": "ho-chi-minh-writing.png",
        "title": "File:Ho Chi Minh Mixed Writing.png",
        "purpose": "Writing / handwriting sample",
    },
    {
        "local": "dien-bien-phu.jpg",
        "title": "File:Battle of Dienbienphu, 1954, Final French Defeat (9732265971).jpg",
        "purpose": "Điện Biên Phủ (historical)",
    },
    {
        "local": "ho-chi-minh-children.jpg",
        "title": "File:Ho-chi-Minh with children (8).jpg",
        "purpose": "With children",
    },
    {
        "local": "ho-chi-minh-soldiers.jpg",
        "title": "File:Ho Chi Minh and Vo Nguyen Giap, Sept. 2, 1945.jpg",
        "purpose": "With soldiers (military leadership)",
    },
    {
        "local": "ho-chi-minh-flag.jpg",
        "title": "File:Ho Chi Minh statue and flag of Vietnam.jpg",
        "purpose": "With Vietnam flag",
    },
]


def api(params: dict) -> dict:
    url = API + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8"))


def get_image_info(title: str, width: int) -> dict:
    data = api(
        {
            "action": "query",
            "format": "json",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|extmetadata",
            "iiurlwidth": str(width),
        }
    )
    pages = data.get("query", {}).get("pages", {})
    page = next(iter(pages.values()), {})
    ii = (page.get("imageinfo") or [{}])[0]
    return ii


def safe_text(html_text: str) -> str:
    text = re.sub(r"<[^>]+>", "", html_text or "")
    return re.sub(r"\s+", " ", text).strip()


def download(url: str, dest: pathlib.Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    last_error: Exception | None = None
    for attempt in range(1, 6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req) as response:
                dest.write_bytes(response.read())
            return
        except HTTPError as e:
            last_error = e
            if e.code in (429, 500, 502, 503, 504):
                time.sleep(1.5 * attempt)
                continue
            raise
        except URLError as e:
            last_error = e
            time.sleep(1.5 * attempt)
            continue

    raise RuntimeError(f"Failed to download after retries: {url}") from last_error


def main() -> int:
    PUBLIC_IMAGES.mkdir(parents=True, exist_ok=True)

    width = int(os.environ.get("COMMONS_WIDTH", "1024"))
    rows: list[dict] = []

    for item in MAPPING:
        title = item["title"]
        local = item["local"]
        dest = PUBLIC_IMAGES / local

        ii = get_image_info(title, width=width)
        meta = ii.get("extmetadata", {})

        def m(key: str) -> str:
            return safe_text((meta.get(key, {}) or {}).get("value", ""))

        thumb = ii.get("thumburl") or ii.get("url")
        if not thumb:
            print(f"Missing URL for {title}", file=sys.stderr)
            return 2

        print(f"Downloading {title} -> {dest.relative_to(ROOT)}")
        download(thumb, dest)
        time.sleep(float(os.environ.get("COMMONS_DELAY", "1.0")))

        rows.append(
            {
                "local": str(dest.relative_to(ROOT)),
                "commons_title": title,
                "source": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title.replace('File:', 'File:'))}",
                "download_url": thumb,
                "license": m("LicenseShortName"),
                "license_url": m("LicenseUrl"),
                "artist": m("Artist"),
                "credit": m("Credit"),
                "purpose": item.get("purpose", ""),
            }
        )

    # Write attribution
    out_md = PUBLIC_IMAGES / "ATTRIBUTION.md"
    lines = [
        "# Image Attribution",
        "",
        "The following images were downloaded from Wikimedia Commons. Please keep this file for license compliance.",
        "",
    ]
    for r in rows:
        lines.extend(
            [
                f"## {pathlib.Path(r['local']).name}",
                f"- Purpose: {r['purpose']}",
                f"- Commons file: {r['commons_title']}",
                f"- Source page: {r['source']}",
                f"- Download URL: {r['download_url']}",
                f"- License: {r['license']}",
                f"- License URL: {r['license_url']}",
                f"- Author/Artist: {r['artist']}",
                f"- Credit: {r['credit']}",
                "",
            ]
        )

    out_md.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out_md.relative_to(ROOT)}")

    # Optional: also dump JSON for tooling
    out_json = PUBLIC_IMAGES / "ATTRIBUTION.json"
    out_json.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {out_json.relative_to(ROOT)}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

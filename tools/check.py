#!/usr/bin/env python3
"""Smoke test: load index.html at phone/tablet/laptop sizes, report script errors and
horizontal overflow, and save screenshots to tools/shots/.
Needs: pip install playwright && playwright install chromium"""
import pathlib
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
out = root / "tools" / "shots"; out.mkdir(exist_ok=True)
url = (root / "index.html").as_uri()
cases = [("phone-home", 390, 844, ""), ("phone-step", 390, 844, "#layout-s8"),
         ("tablet-step", 820, 1180, "#layout-s8"), ("laptop-step", 1440, 900, "#layout-s8")]
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, w, h, hash_ in cases:
        errs = []
        pg = b.new_page(viewport={"width": w, "height": h}, color_scheme="dark")
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(url + hash_); pg.wait_for_timeout(700)
        pg.screenshot(path=str(out / f"{name}.png"))
        print(name, "scrollWidth", pg.evaluate("document.documentElement.scrollWidth"), "errors", errs)
    b.close()

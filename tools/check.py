#!/usr/bin/env python3
"""Smoke test every built guide: load it at phone/tablet/laptop sizes, report script errors,
horizontal overflow and steps that highlight an unknown feature, and save screenshots to
tools/shots/<output folder>/. Pass a base URL to test the live site instead of local files.
Needs: pip install playwright && playwright install chromium"""
import json, pathlib, sys
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
base = sys.argv[1].rstrip("/") + "/" if len(sys.argv) > 1 else None
cases = [("phone-home", 390, 844, ""), ("phone-step", 390, 844, "#layout-s8"),
         ("tablet-step", 820, 1180, "#layout-s8"), ("laptop-step", 1440, 900, "#layout-s8")]
with sync_playwright() as p:
    b = p.chromium.launch()
    for cfgfile in sorted((root / "Machines").glob("*/machine.json")):
        output = json.loads(cfgfile.read_text(encoding="utf-8"))["output"]
        url = base + output.replace("index.html", "") if base else (root / output).as_uri()
        out = root / "tools" / "shots" / cfgfile.parent.name.replace(" ", "-"); out.mkdir(parents=True, exist_ok=True)
        print(cfgfile.parent.name, url)
        for name, w, h, hash_ in cases:
            errs = []
            pg = b.new_page(viewport={"width": w, "height": h}, color_scheme="dark")
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.goto(url + hash_); pg.wait_for_timeout(700)
            pg.screenshot(path=str(out / f"{name}.png"))
            print(" ", name, "scrollWidth", pg.evaluate("document.documentElement.scrollWidth"), "errors", errs)
            pg.close()
    b.close()

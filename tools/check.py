#!/usr/bin/env python3
"""Smoke test every built guide: load it at phone/tablet/laptop sizes, report script errors,
horizontal overflow and steps that highlight an unknown feature, and save screenshots to
tools/shots/<output folder>/. Pass a base URL to test the live site instead of local files.
Pass machine folder names to test only those guides (the main page is always tested); every
guide takes about 30 seconds, so a full run of all of them is slow.
Needs: pip install playwright && playwright install chromium"""
import json, pathlib, sys
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
args = sys.argv[1:]
base = next((a.rstrip("/") + "/" for a in args if a.startswith("http")), None)
only = [a for a in args if not a.startswith("http")]
missing = [m for m in only if not (root / "Machines" / m / "machine.json").exists()]
if missing:
    sys.exit("No such machine folder: " + ", ".join(missing))
cases = [("phone-home", 390, 844, ""), ("phone-step", 390, 844, "#layout-s8"),
         ("tablet-step", 820, 1180, "#layout-s8"), ("laptop-step", 1440, 900, "#layout-s8")]
with sync_playwright() as p:
    b = p.chromium.launch()
    url = base or (root / "index.html").as_uri()
    out = root / "tools" / "shots" / "main-page"; out.mkdir(parents=True, exist_ok=True)
    print("Main page", url)
    for name, w, h in [("phone", 390, 844), ("tablet", 820, 1180), ("laptop", 1440, 900)]:
        errs = []
        pg = b.new_page(viewport={"width": w, "height": h}, color_scheme="dark")
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(url); pg.wait_for_timeout(500)
        pg.screenshot(path=str(out / f"{name}.png"))
        print(" ", name, "scrollWidth", pg.evaluate("document.documentElement.scrollWidth"), "errors", errs)
        pg.close()
    for cfgfile in sorted((root / "Machines").glob("*/machine.json")):
        if only and cfgfile.parent.name not in only:
            continue
        cfg = json.loads(cfgfile.read_text(encoding="utf-8")); output = cfg["output"]
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
        for ed in cfg.get("editions", []):
            for name, w, h, hash_ in cases:
                errs = []
                pg = b.new_page(viewport={"width": w, "height": h}, color_scheme="dark")
                pg.on("pageerror", lambda e: errs.append(str(e)))
                pg.goto(url + "?edition=" + ed["id"] + hash_); pg.wait_for_timeout(700)
                pg.screenshot(path=str(out / f"{ed['id']}-{name}.png"))
                on = pg.evaluate("document.querySelector('#edsw [aria-pressed=true]').dataset.id")
                print(" ", ed["id"], name, "selected", on, "scrollWidth", pg.evaluate("document.documentElement.scrollWidth"), "errors", errs)
                pg.close()
    b.close()

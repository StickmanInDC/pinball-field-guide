#!/usr/bin/env python3
"""Build every field guide from src/template.html and the folders under Machines/, then the
main page (index.html) from src/index.template.html.

  python tools/build.py                 -> all machines
  python tools/build.py "Fallout Pro"   -> one machine (the main page still lists them all)

Each machine folder holds machine.json (listing details, names, photo size, output path), home.html (intro and
trust notes), content.js (features F and SECTIONS) and playfield.jpg. The template is an
Artifact-style fragment (no doctype/head/body), so this wraps it in a standard HTML skeleton.
GitHub Pages serves a full browser, so the no-script fallback at <!--STATIC--> is left empty.
"""
import base64, html, json, pathlib, sys

root = pathlib.Path(__file__).resolve().parent.parent
template = (root / "src" / "template.html").read_text(encoding="utf-8")
head = (
    '<!doctype html>\n<html lang="en"><head>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);'
    'padding-bottom:env(safe-area-inset-bottom,0px)}'
    'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}'
    '[hidden]{display:none!important}</style>\n'
)

def build(folder):
    cfg = json.loads((folder / "machine.json").read_text(encoding="utf-8"))
    body = template
    for token, value in [
        ("__TITLE__", cfg["title"]), ("__KICKER__", cfg["kicker"]), ("__HEADING__", cfg["heading"]),
        ("__ARIA__", cfg["aria"]), ("__W__", str(cfg["width"])), ("__H__", str(cfg["height"])),
        ("__LABEL_SPLIT__", str(cfg["label_split"])),
        ("__HOME__", (folder / "home.html").read_text(encoding="utf-8")),
        ("__CONTENT__", (folder / "content.js").read_text(encoding="utf-8")),
        ("__IMG__", base64.b64encode((folder / "playfield.jpg").read_bytes()).decode()),
        ("<!--STATIC-->", ""),
    ]:
        body = body.replace(token, value)
    out = root / cfg["output"]
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(head + body + "\n</body></html>\n", encoding="utf-8")
    print(f"{folder.name}: wrote {cfg['output']} ({out.stat().st_size/1e6:.2f} MB)")

def build_index():
    machines = [json.loads(p.read_text(encoding="utf-8")) for p in (root / "Machines").glob("*/machine.json")]
    machines.sort(key=lambda m: m["name"].casefold())
    esc = html.escape
    options = lambda values: "".join(f'<option value="{esc(str(v))}">{esc(str(v))}</option>' for v in values)
    rows = "\n".join(
        f'      <tr data-m="{esc(m["manufacturer"])}" data-y="{m["year"]}">'
        f'<td><a href="{esc(m["output"].removesuffix("index.html"))}">{esc(m["name"])}</a></td>'
        f'<td class="mf">{esc(m["manufacturer"])}</td><td class="yr">{m["year"]}</td></tr>'
        for m in machines
    )
    body = (root / "src" / "index.template.html").read_text(encoding="utf-8")
    body = body.replace("__MANUFACTURERS__", options(sorted({m["manufacturer"] for m in machines}, key=str.casefold)))
    body = body.replace("__YEARS__", options(sorted({m["year"] for m in machines}, reverse=True)))
    body = body.replace("__ROWS__", rows)
    out = root / "index.html"
    out.write_text(head + body + "\n</body></html>\n", encoding="utf-8")
    print(f"main page: wrote index.html, {len(machines)} machines")

names = sys.argv[1:] or sorted(p.parent.name for p in (root / "Machines").glob("*/machine.json"))
for name in names:
    build(root / "Machines" / name)
build_index()

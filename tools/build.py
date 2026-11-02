#!/usr/bin/env python3
"""Build index.html from src/guide.src.html.

  python tools/build.py            -> index.html (interactive page for GitHub Pages)

Substitutions: __IMG__ -> base64 of assets/playfield.jpg; <!--STATIC--> -> empty (GitHub Pages
serves a full browser, so the no-script fallback is not needed).
The source is an Artifact-style fragment (no doctype/head/body), so this wraps it in a
standard HTML skeleton.
"""
import base64, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
src = (root / "src" / "guide.src.html").read_text(encoding="utf-8")
img = base64.b64encode((root / "assets" / "playfield.jpg").read_bytes()).decode()
body = src.replace("__IMG__", img).replace("<!--STATIC-->", "")

head = (
    '<!doctype html>\n<html lang="en"><head>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);'
    'padding-bottom:env(safe-area-inset-bottom,0px)}'
    'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}'
    '[hidden]{display:none!important}</style>\n'
)
out = root / "index.html"
out.write_text(head + body + "\n</body></html>\n", encoding="utf-8")
print(f"wrote {out.name}: {out.stat().st_size/1e6:.2f} MB")

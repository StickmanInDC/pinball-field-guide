# Pinball Field Guides

Interactive, step-by-step guides to Stern pinball machines. Rulesheet sections on the left; the
playfield photo highlights the shots for the current step. Works on phones, tablets and desktop.
Use Back/Next or the arrow keys; Esc returns to the list.

The main page, `index.html`, lists every machine alphabetically, with manufacturer and year
filters. `tools/build.py` generates it from the `machine.json` files. Old links to the root
address that name a section still redirect to the Star Wars guide.

- *Avengers: Infinity Quest*: `avengers-infinity-quest/index.html` (Pro / Premium / LE switch)
- *Fallout Pro*: `fallout-pro/index.html`
- *Guardians of the Galaxy*: `guardians-of-the-galaxy/index.html` (Pro / Premium / LE switch)
- *Star Wars: Fall of the Empire*: `star-wars-fall-of-the-empire/index.html`
- *Transformers: More Than Meets the Eye*: `transformers-more-than-meets-the-eye/index.html` (Pro / Premium / LE switch)

Each guide is a single static page, so no build tools are needed to host it.

## Accuracy (Star Wars)
- Rules come from the Pinball Rule Sheets wiki (code 0.97). Its Layout and Jedi Master sections are blank.
- Highlight positions are estimated from the photo. Each is tagged Clear or Estimated.
- Spinners and slingshots are described but not highlighted.

## Sources (Star Wars)
- https://pinballrulesheets.com/stern/star-wars-fall-of-the-empire-rulesheet
- Kineticist tutorial and review; Retro Refurbs

## Accuracy (Fallout Pro)
- Rules come from the supplied rulesheet (code 0.81). Its wizard modes and some other items are TBD.
- Most shot paths are estimated from the photo and tagged Estimated. Verify them on a real machine.

## Accuracy (Avengers)
- Rules come from the supplied rulesheet (code 1.08). It only separates Pro from Premium/LE, so Premium and LE show the same rules and art.
- The photos are 2255x4217 originals, cropped to the playfield and scaled to 1280x2380 for the page. Coordinates use a 640x1190 grid.
- Most shot paths are estimated from the photos and tagged Estimated. Verify them on a real machine.

## Accuracy (Transformers)
- Rules come from the supplied rulesheet (code 0.96), which is unfinished. It treats Premium and LE as one game, so they share rules, but each has its own photo.
- The photos are Stern's 1319x2560 images, the largest it publishes, cropped to 1010x2083. Coordinates use a 640x1320 grid.
- Most shot paths are estimated from the inserts along each lane and tagged Estimated. Verify them on a real machine.

## Accuracy (Guardians of the Galaxy)
- Rules come from the supplied rulesheet, which gives no code revision and only mentions a change "as of 0.87". It does not separate the models, so they share rules, but each has its own photo.
- The photos are Stern's 1476x2500 top views, cropped to 1100x2131. Coordinates use a 640x1240 grid.
- Main shots are placed from their character inserts and arrows. Paths beyond those, the pop bumpers, the Groot standups and the Orb targets are estimated. Verify them on a real machine.

## Add a machine
Create `Machines/<name>/` with:
- `machine.json`: listing `name`, `manufacturer`, `year` and `code_rev` (these also form the line above the page heading), page names, photo width and height, `label_split` (half the width), and `output` path
- `playfield.jpg`: the cropped photo, whose pixel size matches the coordinates you use
- `home.html`: intro text and trust notes
- `content.js`: features `F` and steps `SECTIONS`

Copy `Machines/Fallout Pro/` as a starting point. Shared CSS and app code live in `src/template.html`.

To find a photo, start with `reference/stern-playfield-contact-sheet.jpg` and the image links in `reference/stern-playfield-images.md`.

For a machine with several versions, list them in `machine.json` under `editions` (see `Machines/Avengers Infinity Quest/`). Each has an `id`, `label`, `image` and optional `like`, which names the version it shares rules with. Then:
- Tag a section, step or `home.html` element for certain versions: `ed:"pro"` on a section or step, `data-ed="pro"` in HTML.
- Override a feature for a version with `v:{premium:{s:[...],a:[...]}}`. An empty `s` hides it on that version.

## Develop
    python tools/build.py          # all machines, or pass one folder name
    python tools/check.py          # needs playwright; screenshots to tools/shots/
    python tools/check.py <url>    # same checks against the live site

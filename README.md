# Pinball Field Guides

Interactive, step-by-step guides to Stern pinball machines. Rulesheet sections on the left; the
playfield photo highlights the shots for the current step. Works on phones, tablets and desktop.
Use Back/Next or the arrow keys; Esc returns to the list.

The main page, `index.html`, lists every machine alphabetically, with manufacturer and year
filters. `tools/build.py` generates it from the `machine.json` files. Old links to the root
address that name a section still redirect to the Star Wars guide.

- *Fallout Pro*: `fallout-pro/index.html`
- *Star Wars: Fall of the Empire*: `star-wars-fall-of-the-empire/index.html`

Each guide is a single static page, so no build tools are needed to host it.

## Accuracy (Star Wars)
- Rules come from the Pinball Rule Sheets wiki (code 0.97). Its Layout and Jedi Master sections are blank.
- Highlight positions are estimated from the photo. Each is tagged Clear or Estimated.
- Spinners and slingshots are described but not highlighted.

## Sources (Star Wars)
- https://pinballrulesheets.com/stern/star-wars-fall-of-the-empire-rulesheet
- Kineticist tutorial and review; Retro Refurbs
- Playfield photo: pinballcards.net (Stern artwork; not owned by this project)

## Accuracy (Fallout Pro)
- Rules come from the supplied rulesheet (code 0.81). Its wizard modes and some other items are TBD.
- Most shot paths are estimated from the photo and tagged Estimated. Verify them on a real machine.

## Add a machine
Create `Machines/<name>/` with:
- `machine.json`: listing `name`, `manufacturer` and `year`, page names, photo width and height, `label_split` (half the width), and `output` path
- `playfield.jpg`: the cropped photo, whose pixel size matches the coordinates you use
- `home.html`: intro text and trust notes
- `content.js`: features `F` and steps `SECTIONS`

Copy `Machines/Fallout Pro/` as a starting point. Shared CSS and app code live in `src/template.html`.

## Develop
    python tools/build.py          # all machines, or pass one folder name
    python tools/check.py          # needs playwright; screenshots to tools/shots/
    python tools/check.py <url>    # same checks against the live site

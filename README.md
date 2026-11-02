# Fall of the Empire Field Guide

Interactive, step-by-step guide to Stern's *Star Wars: Fall of the Empire* pinball machine.
Rulesheet sections on the left; the playfield photo on the right highlights the shots for the
current step. Works on phones, tablets and desktop. Use Back/Next or the arrow keys; Esc returns to the list.

Single static page, no build tools needed to host it: `index.html` is the whole app.

## Accuracy
- Rules come from the Pinball Rule Sheets wiki (code 0.97). Its Layout and Jedi Master sections are blank.
- Highlight positions are estimated from the photo. Each is tagged Clear or Estimated.
- Spinners and slingshots are described but not highlighted.

## Sources
- https://pinballrulesheets.com/stern/star-wars-fall-of-the-empire-rulesheet
- Kineticist tutorial and review; Retro Refurbs
- Playfield photo: pinballcards.net (Stern artwork; not owned by this project)

## Develop
    python tools/build.py     # src/guide.src.html + assets/playfield.jpg -> index.html
    python tools/check.py     # needs playwright; screenshots to tools/shots/

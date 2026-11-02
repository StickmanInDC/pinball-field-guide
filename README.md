# Pinball Field Guides

Interactive, step-by-step guides to Stern pinball machines. Rulesheet sections on the left; the
playfield photo highlights the shots for the current step. Works on phones, tablets and desktop.
Use Back/Next or the arrow keys; Esc returns to the list.

The main page, `index.html`, lists every machine alphabetically, with manufacturer and year
filters. `tools/build.py` generates it from the `machine.json` files. Old links to the root
address that name a section still redirect to the Star Wars guide.

- *Avengers: Infinity Quest*: `avengers-infinity-quest/index.html` (Pro / Premium / LE switch)
- *Fallout Pro*: `fallout-pro/index.html`
- *Foo Fighters*: `foo-fighters/index.html` (Pro / Premium / LE switch)
- *Godzilla*: `godzilla/index.html` (Pro / Premium / LE switch)
- *Guardians of the Galaxy*: `guardians-of-the-galaxy/index.html` (Pro / Premium / LE switch)
- *Iron Maiden: Legacy of the Beast*: `iron-maiden-legacy-of-the-beast/index.html` (Pro / Premium / LE switch)
- *James Bond 007*: `james-bond-007/index.html` (Pro / Premium / LE switch)
- *Jurassic Park*: `jurassic-park/index.html` (Pro / Premium / LE switch)
- *Pokémon*: `pokemon/index.html` (Pro / Premium / LE switch)
- *Rush*: `rush/index.html` (Pro / Premium / LE switch)
- *Star Trek*: `star-trek/index.html` (Pro / Premium / LE switch)
- *Star Wars (2017)*: `star-wars/index.html` (Pro / Premium / LE switch)
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

## Accuracy (Iron Maiden)
- Rules come from the supplied rulesheet (code 1.10). It treats Premium and LE as one game, and Stern has no LE page, so they share rules and the Premium photo.
- The photos are Stern's 1387x2500 and 1389x2500 top views, aligned on the printed art and cropped to 1143x1950. Coordinates use a 640x1092 grid.
- Printed inserts are clear, but most shot paths are estimated, because ramps cover much of the upper playfield. The left ramp, loops, spinners, Orb and Super Jackpot target are the least certain. The owner located the skill shot and gravestone targets. Verify the rest on a real machine.

## Accuracy (Foo Fighters)
- Rules come from the supplied rulesheet (code 1.04). It treats Premium and LE as one game, and Stern has no LE page, so they share rules and the Premium photo.
- The photos are Stern's 1547x2500 and 1555x2500 top views, aligned on the printed art, cropped to about 1133x1883 and scaled to 1280x2128. Coordinates use a 640x1064 grid.
- Printed inserts and most targets are clear, but shot paths are estimated, and the rulesheet has no layout text. The side ramp and side loop could be swapped. The left crossover, right orbit, Rock-O-Meter lane, Lightning target, Bot Award target, fourth bot target and the Premium upper playfield shots are the least certain. Verify them on a real machine.

## Accuracy (Godzilla)
- Rules come from the supplied rulesheet (code 1.16). It treats Premium and LE as one game, and Stern has no LE page, so they share rules and the Premium photo.
- The photos are Stern's 2500x4233 top views, aligned on the printed art, cropped to 1749x3274 and scaled to 1280x2396. Coordinates use a 640x1198 grid.
- Printed inserts, the scoop and pop bumper are clear, but shot paths are estimated, and the rulesheet has no layout text. The upper loop, tail whip lane, right spinner (especially on the Premium), left ramp path, Magna-Grab captive ball, powerline targets, Maser Cannon target and Neo Barrier targets are the least certain. The reverse building exit, Mecha side lane and Mecha bottom rollover are not marked. Verify them on a real machine.

## Accuracy (James Bond 007)
- Rules come from the supplied rulesheet (code 1.01). It treats Premium and LE as one game, and Stern has no LE page, so they share rules and the Premium photo.
- The photos are Stern's 2500x4233 top views, aligned on the printed art, cropped to 1780x3204 and scaled to 1280x2304. Coordinates use a 640x1152 grid.
- Printed inserts, the rocket, DB5 and the two mode ramps are clear, but most shot paths are estimated, and the rulesheet has no layout text. The left ramp is the least certain and may be swapped with the rocket lane. The left eject, left orbit, spinner, center lane, bumper lane, Goldfinger target, DB5 eject, SPECTRE targets and the Premium jetpack and lock ring are also worth checking. Verify them on a real machine.

## Accuracy (Jurassic Park)
- Rules come from the supplied rulesheet (code 1.10). It treats Premium and LE as one game, and Stern has no LE page, so they share rules and the Premium photo.
- The photos are Stern's 2500x4233 top views, aligned on the printed art, cropped to 1710x2995 and scaled to 1280x2240. Coordinates use a 640x1120 grid.
- Printed inserts, the T-Rex, truck, right ramp and Raptor Pen are clear, but shot paths are estimated, and the rulesheet has no layout text. The match of arrows to shots and CHAOS letters is a reading of the photo. The upper loop and side ramp may be swapped. The spinner, helipad ramp, Control Room lane, right orbit, Light Escape standup, Supply Drop target, Light 2x Scoring standup, Set Trap targets and purple standups are the least certain. The rollover above the pops is not marked. Verify them on a real machine.

## Accuracy (Pokémon)
- Rules come from the supplied rulesheet (code 0.87). It treats Premium and LE as one game, so they share rules, but each has its own photo.
- The photos are Stern's 1319x2560 top views, aligned on the printed art and cropped to 1002x1901. Coordinates use a 640x1214 grid.
- Printed inserts, the Poké Ball, Meowth balloon, Pikachu, town scoop and Premium whirlpool are clear, but shot paths are estimated, and the rulesheet has no layout text. The bumpers, spinner, top lanes, berry targets, town targets, training targets, BATTLE targets, Psyduck sneak-in and captive ball are the least certain. The Center Playfield X Target is not marked. The Pokémon Master step comes from Stern's apron card, not the rulesheet. Verify them on a real machine.

## Accuracy (Rush)
- Rules come from the supplied rulesheet (code 1.14). It treats Premium and LE as one game, so they share rules, but each has its own photo.
- The photos are Stern's 1474x2500, 1494x2500 and 1475x2500 top views, aligned on the printed art and cropped to 990x1880. Coordinates use a 640x1215 grid.
- Printed inserts, the Time Machine and the right ramp are clear. The 1-2-3 inserts on each lane fit the rulesheet's combo table, but shot paths are estimated, and the rulesheet has no layout text. The side ramp and side loop may be swapped. The scoops, dead end, spinner, pop bumpers, instrument standup, Lite and Lock standups and under-flipper shot are the least certain. The RUSH standups, Premium and LE captive ball and ramp diverter are not marked. Verify them on a real machine.

## Accuracy (Star Trek)
- Rules come from the supplied rulesheet (code 1.62). It does not separate the models, so they share rules. Stern publishes no full LE photo, so LE shows the Premium one. The Five Year Mission text stops mid-sentence.
- The photos are Stern's 1036x2145 Pro and 1650x3000 Premium images. The Premium was aligned to the Pro's printed art by a perspective fit, about 1 pixel error on the art, and both were cropped to 960x1881. Coordinates use a 640x1254 grid. Raised toys do not line up exactly.
- Printed inserts, the target groups named by the apron card, the spinner, warp ramp and right ramp are clear, but shot paths are estimated, and the rulesheet has no layout text. The shot order comes from its Klingon Battle II pattern. The left ramp, Vengeance shot and drop target, Black Hole target, Red Matter targets, Away Team rollover, both orbit paths and plunger lane are the least certain. The Vengeance standups, magnet, pop bumpers and slingshots are not marked. Lines from the apron card are labelled. Verify them on a real machine.

## Accuracy (Star Wars 2017)
- This is Stern's 2017 game, not Star Wars: Fall of the Empire. The rulesheet gives an August 2017 release date, and Stern's page data gives June 2017.
- Rules come from the supplied rulesheet (code 1.31). It treats Premium and LE as one game, so they share rules, but each has its own photo. Its Layout section is blank and its Pict-o-Pops list is unfinished.
- The photos are Stern's 1467x2500, 1378x2500 and 1426x2500 top views. Premium and LE were aligned to the Pro's printed art by a perspective fit, about 1 pixel error or less, and all were cropped to 1130x1980 of the Pro and scaled to 1280x2242. Coordinates use a 640x1121 grid. Raised toys do not line up.
- Printed inserts, the planet cards, the FORCE drop targets and the 3-bank are clear. The planet cards fix the left mini-loop, left ramp and right mini-loop, but shot paths are estimated. The left orbit, right ramp, right orbit, right scoop, Jedi Training standups, TIE Fighter target, top lanes, pop bumpers, right outlane and Hyperspace wireform are the least certain. Spinners, slingshots and the outlane gate are not marked. Lines from the apron card are labelled. Verify them on a real machine.

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

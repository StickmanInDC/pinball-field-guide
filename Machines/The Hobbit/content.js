/* ---------- playfield features (coordinates in the 640x1051 crop of JJP's straight-down Limited Edition photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 lorbit:{n:"Left orbit (Fili)",c:0,s:[B([[108,478],[72,425],[46,385],[38,300],[58,195],[112,108],[200,48]],16)],a:[48,380],x:"The lane behind the FILI arrow at the left. Its path up the left side and over the top is from the manual's shot maps and switch drawing; the wireforms hide most of it in the photo."},
 lspin:{n:"Fili spinner",c:0,s:[R(30,397,22,16)],a:[41,405],x:"Placed from the manual's switch drawing, inside the left orbit. Not visible in the photo."},
 rorbit:{n:"Right orbit (Kili)",c:0,s:[B([[492,488],[538,418],[584,382],[592,300],[576,195],[518,106],[440,48]],16)],a:[584,382],x:"The lane behind the KILI arrow at the right, passing above the upper right flipper. Its path is from the manual's shot maps and switch drawing."},
 rspin:{n:"Kili spinner",c:0,s:[R(576,383,22,16)],a:[587,391],x:"Placed from the manual's switch drawing, inside the right orbit. Not visible in the photo."},
 lramp:{n:"Left ramp (Gandalf)",c:1,s:[B([[270,350],[262,265],[258,200],[258,130],[275,80],[312,55]],20)],a:[262,265],x:"The left leg of the silver ramp, behind the GANDALF arrow, with BOOK and TIME cut into it. The manual calls it the Gandalf ramp. The two ramps cross over each other; where the left ramp sends the ball is not documented yet."},
 rramp:{n:"Right ramp (Bilbo Baggins)",c:1,s:[B([[354,350],[360,265],[366,200],[366,130],[350,80],[312,55]],20)],a:[360,265],x:"The right leg of the silver ramp, behind the BILBO BAGGINS arrow, with LOCK and MODE cut into it. The manual says a mode start diverts the ball from here onto the left wire ramp."},
 bookcut:{n:"BOOK and TIME cutouts",c:1,s:[E(260,178,16,28)],a:[260,178],x:"Lit cutouts on the left ramp."},
 lockcut:{n:"LOCK and MODE cutouts",c:1,s:[E(367,178,16,28)],a:[367,178],x:"Lit cutouts on the right ramp."},
 captive:{n:"Captive ball",c:1,s:[B([[311,282],[311,238]],22)],a:[311,260],x:"The two balls in the lane between the ramp legs. The manual's map points the captive ball arrow up this lane."},
 thorin:{n:"Thorin target",c:0,s:[R(296,108,22,22)],a:[307,119],x:"The target the captive ball strikes. It sits under the ramp in the photo; placed from the manual's switch drawing."},
 smaug:{n:"Smaug",c:1,s:[E(190,168,62,110)],a:[190,168],x:"The dragon in the upper left. Ball locks are virtual: the ball goes to Smaug and comes back out of the left VUK."},
 book:{n:"Book display",c:1,s:[R(458,45,142,112)],a:[529,101],x:"The small screen built into a book in the upper right corner. It shows the selected mode, its description, timers and shot goals."},
 dwarf:{n:"DWARF drop targets",c:1,s:[B([[105,392],[232,288]],18)],a:[168,340],x:"The five red drop targets in a row at the upper left, with the D-W-A-R-F inserts in front."},
 arf:{n:"Bifur, Bofur and Bombur targets",c:0,s:[B([[160,345],[220,302]],12)],a:[190,323],x:"Three yellow targets behind the A, R and F drop targets. Hidden in the photo; placed from the manual's switch drawing."},
 balin:{n:"Left VUK (Balin)",c:0,s:[C(103,338,13)],a:[103,338],x:"The hole behind the left end of the DWARF drop targets. The rulesheet says the DWARF targets block it. Placed from the manual's drawings; it is in shadow in the photo."},
 elf:{n:"ELF drop targets",c:0,s:[B([[66,634],[90,573]],16)],a:[78,604],x:"Three drop targets on the left wall, under the left wire ramp. Placed from the manual's switch drawing; partly hidden in the photo."},
 elfdw:{n:"Gloin, Oin and Dwalin targets",c:0,s:[B([[47,627],[69,567]],10)],a:[58,597],x:"Three yellow targets behind the ELF drop targets. Placed from the manual's switch drawing."},
 man:{n:"MAN drop targets",c:1,s:[B([[563,612],[540,554]],16)],a:[552,583],x:"Three red drop targets on the right wall below the upper right flipper."},
 mandw:{n:"Ori, Dori and Nori targets",c:0,s:[B([[584,604],[561,546]],10)],a:[572,575],x:"Three yellow targets behind the MAN drop targets. My reading of the manual's switch drawing."},
 radvuk:{n:"Right VUK (Radagast)",c:0,s:[C(489,368,14)],a:[489,368],x:"The open hole at the right, behind the RADAGAST arrow. Placed from the manual's shot maps and switch drawing."},
 mystery:{n:"Mystery target",c:0,s:[C(405,274,11)],a:[405,274],x:"The round target to the right of the right ramp, above the MYSTERY insert. Placed from the manual's switch drawing; the blue part in the photo matches."},
 bagend:{n:"Bag End lane",c:0,s:[B([[446,330],[448,268],[440,222]],14)],a:[448,290],x:"The lane into the pop bumpers to the right of the Mystery target. My reading of the manual's switch drawing, which puts the Bag End switch here."},
 pops:{n:"Bag End pop bumpers",c:0,s:[C(422,210,18),C(442,117,18),C(520,178,18)],a:[460,170],x:"Three pop bumpers with barrel caps in the upper right, under the book. Placed from the manual's switch drawing."},
 lock:{n:"LOCK rollovers",c:1,s:[C(232,570,15),C(285,560,15),C(338,560,15),C(391,570,15)],a:[311,565],x:"The four green round inserts across the middle, marked L, O, C and K."},
 spider:{n:"Spider (bash target)",c:1,s:[R(168,612,64,86)],a:[200,655],x:"The stone panel at the lower left. The Spider pops up out of the playfield here."},
 goblin:{n:"Goblin (bash target)",c:1,s:[R(236,399,58,68)],a:[265,433],x:"The stone panel at the upper left of the center."},
 orc:{n:"Orc (bash target)",c:1,s:[R(336,378,68,68)],a:[370,412],x:"The stone panel at the upper right of the center."},
 warg:{n:"Warg (bash target)",c:1,s:[R(399,583,63,79)],a:[430,622],x:"The stone panel at the lower right."},
 uflip:{n:"Upper right flipper",c:1,s:[B([[540,468],[523,528]],12)],a:[531,498],x:"The small yellow flipper on the right. JJP's flow chart says it is used to hit the DWARF drop target during Super Jets."},
 lwire:{n:"Left wire ramp",c:0,s:[B([[95,320],[70,370],[64,480],[78,600],[108,700],[124,780]],12)],a:[66,480],x:"The wireform down the left side to the left inlanes. The manual says the left VUK kicks the ball up onto it. My reading of the photo."},
 kickback:{n:"Left outlane (Windlance kickback)",c:1,s:[B([[46,820],[46,890]],12)],a:[46,856],x:"The far left lane. The manual calls the kickback the Windlance."},
 warglane:{n:"Warg inlane",c:1,s:[B([[105,780],[105,840]],12)],a:[105,812],x:"The outer left inlane. The manual's switch list names it the Warg return lane."},
 orclane:{n:"Orc inlane",c:1,s:[B([[139,780],[139,840]],12)],a:[139,812],x:"The inner left inlane."},
 goblane:{n:"Goblin inlane",c:1,s:[B([[475,780],[475,840]],12)],a:[475,812],x:"The inner right inlane."},
 spilane:{n:"Spider inlane",c:1,s:[B([[510,780],[510,840]],12)],a:[510,812],x:"The outer right inlane."},
 precious:{n:"Right outlane (Precioussss)",c:1,s:[B([[547,780],[547,845]],12)],a:[547,812],x:"The far right lane. The manual's switch list calls it the Gollum outlane."},
 lmys:{n:"Light Mystery inserts",c:1,s:[C(175,885,14),C(447,885,14)],a:[311,885],x:"The two triangle inserts above the slingshots, beside the LIGHT MYSTERY labels."},
 lockins:{n:"LOCK 1 and LOCK 2 inserts",c:1,s:[R(288,788,50,34)],a:[313,805]},
 arkins:{n:"Arkenstone inserts",c:1,s:[C(268,882,14),C(312,860,14),C(362,882,14)],a:[312,872],x:"INTO THE FIRE, BARREL ESCAPE and BATTLE OF THE FIVE ARMIES, above the flippers."},
 shootagain:{n:"Shoot Again and Super X inserts",c:1,s:[C(262,838,14),C(363,838,14)],a:[312,838]},
 ebins:{n:"EXTRA and BALL inserts",c:1,s:[C(207,509,14),C(449,486,14)],a:[328,497],x:"EXTRA in the lane left of center, BALL in the lane in front of the right VUK."},
 shooter:{n:"Shooter lane",c:1,s:[B([[582,1000],[582,690]],14)],a:[582,900]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["rramp","lock","spider","goblin","orc","warg","arkins"],b:"<p>Qualify and play modes at the ramps, light locks for Smaug Multiball, defeat four beasts for Beast Frenzy, collect 13 dwarves and travel to Erebor. Doing all of it lights an Arkenstone wizard mode.</p>"+UNK("The rulesheet says the game has 31 modes and 2 multiballs, and that the backglass screen shows everything; there is no Instant Info.")},
 {t:"Loops",h:["lorbit","rorbit","lspin","rspin"],b:"<p>Two loops run around the outside of the playfield, each with a spinner. Spins move you toward Erebor for Super Spinner.</p>"},
 {t:"Ramps",h:["lramp","rramp"],b:"<p>Two ramps cross over each other, much like the boat ramps in Fish Tales. The left (Gandalf) ramp qualifies Gandalf modes, changes the selected mode and adds time. The right (Bilbo Baggins) ramp qualifies Bilbo modes, starts modes and locks balls.</p>"},
 {t:"Drop target banks",h:["elf","dwarf","man"],b:"<p>Three banks: ELF (3 targets, lower left), DWARF (5 targets, upper left) and MAN (3 targets, lower right). Completing a bank qualifies that race's modes. Knocking the drops down also opens the dwarf targets behind them and the left VUK.</p>"},
 {t:"Dwarf targets",h:["elfdw","arf","mandw"],b:"<p>A yellow target sits behind each drop target except the D and W of DWARF. They collect dwarves.</p>"},
 {t:"VUKs",h:["balin","radvuk"],b:"<p>Two holes kick the ball straight up. The left one, Balin, is blocked by the DWARF targets and collects Balin. The right one is open and qualifies Radagast modes. When Extra Ball is lit, you need both.</p>"},
 {t:"Inlanes",h:["warglane","orclane","goblane","spilane"],b:"<p>Four inlanes, two on each side, are marked Warg, Orc, Goblin and Spider from left to right. A lit inlane raises its beast for a hurry-up. Rolling through one left and one right inlane lights or advances Mystery.</p>"},
 {t:"Bash targets",h:["spider","goblin","orc","warg"],b:"<p>Four beasts pop up from the center: Spider lower left, Goblin upper left, Orc upper right and Warg lower right. Bash all four to start Beast Frenzy Multiball.</p>"},
 {t:"LOCK rollovers",h:["lock"],b:"<p>Four rollovers in the center spell L-O-C-K to light locks for Smaug Multiball.</p>"},
 {t:"Captive ball",h:["captive","thorin"],b:"<p>The captive ball sits between the two ramps. When it is lit blue, hitting it spots a dwarf. It also collects Thorin and the Super Spinner jackpot.</p>"},
 {t:"Mystery target and Bag End",h:["mystery","bagend","pops"],b:"<p>The Mystery target, to the right of the right ramp, gives a Mystery award when lit. Bag End is three pop bumpers in the upper right between the right VUK and the Mystery target; hitting them enough starts Super Jets.</p>"+UNK("The rulesheet calls it Super Pops in one place and Super Jets in another. JJP's flow chart says Super Jets.")},
 {t:"Outlanes",h:["kickback","precious"],b:"<p>The left outlane has a kickback and a stopper pin. Mode starts hold the ball there and fire it out, on their own or when you press the Ring button. The right outlane can be lit through Mystery as a ball save, Precioussss.</p>"},
 {t:"Upper right flipper",h:["uflip","dwarf"],b:"<p>JJP's flow chart uses the upper right flipper to hit the DWARF drop target during Super Jets.</p>"+UNK("The rulesheet does not describe the upper flipper's other shots, so they are not documented yet.")},
 {t:"Ring button and book",h:["book"],b:"<p>The Ring button picks your skill shot, fires the kickback and stops the Precioussss meter. The book in the upper right shows the selected mode and its progress.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Choose",h:["shooter"],b:"<p>Use the Ring button before you plunge to pick one of four skill shots.</p>"+UNK("JJP's flow chart says making no selection gives more points.")},
 {t:"Dwarf skill shot",h:["dwarf"],b:"<p>The DWARF targets cycle; one is raised. Hit it for 10,000, plus 1,500 for each skill shot you have made. The manual says to plunge with medium strength.</p>"},
 {t:"Elf skill shot",h:["elf"],b:"<p>The ELF drop targets are lit. Hit any of them. The manual says a soft plunge, and more targets down is a bigger award.</p>"+UNK("The value is not documented yet.")},
 {t:"Lock skill shot",h:["lock"],b:"<p>The LOCK rollovers light gold. Each rollover hit scores 1,500 (plus 500 per skill shot made). The manual says hitting all four readies your first lock.</p>"},
 {t:"Inlane skill shot",h:["warglane","orclane","goblane","spilane"],b:"<p>A gold light moves across the inlanes. Roll through the lit one.</p>"+UNK("The rulesheet leaves the value as a question. The manual says to plunge very lightly into the lit inlane, then flip at the beast that pops up for the award.")}
]},
/* ====== MAIN MODES ====== */
{g:"Main modes",id:"qualify",title:"Qualifying modes",steps:[
 {t:"Six kinds of mode",h:["lramp","rramp","radvuk","elf","dwarf","man"],b:"<p>Each of the 31 modes belongs to Gandalf, Bilbo Baggins, Radagast, the Elves, the Dwarves or Men. When not in a mode, one shot qualifies each kind.</p>"},
 {t:"Gandalf",h:[["lramp",1]],b:"<p>Shoot the left ramp. Qualifies 1 mode.</p>"},
 {t:"Bilbo Baggins",h:[["rramp",1]],b:"<p>Shoot the right ramp. Qualifies 5 modes.</p>"},
 {t:"Radagast",h:[["radvuk",1]],b:"<p>Shoot the right VUK. Qualifies 4 modes.</p>"},
 {t:"Elf, Dwarf and Man",h:["elf","dwarf","man"],b:"<p>Complete the ELF bank (3 modes), the DWARF bank (3 modes) or the MAN bank.</p>"+UNK("The rulesheet gives no count for Man modes, and its counts do not add up to 31. Not documented yet.")}
]},
{g:"Main modes",id:"modes",title:"Playing modes",steps:[
 {t:"Select a mode",h:["lramp","bookcut","book"],b:"<p>The book shows the selected mode and a description of its scene. Shoot the left ramp when BOOK is lit to turn to the next mode.</p>"},
 {t:"Start",h:["rramp","lockcut","kickback"],b:"<p>Shoot the right ramp when MODE is lit to start the selected mode. The manual says the ball goes down the left wire ramp to the Windlance in the left outlane and is fired back into play.</p>"+UNK("A mode cannot start when no unplayed modes are qualified, when the Ring has postponed it, or when a Smaug lock is lit.")},
 {t:"Play",h:["book"],b:"<p>Most modes give you 30 seconds of lit shots, shown by orange scrolls under each shot. Hurry-up modes are mostly one shot for a 2,500-point hurry-up. The book shows the time, the mode total and the next shot's value.</p>"},
 {t:"Add time",h:["lramp","bookcut"],b:"<p>Shoot the left ramp when TIME is lit blue for 10 seconds; TIME turns purple. With TIME purple it adds 3 seconds. Mode progress turns it blue again.</p>"},
 {t:"All modes qualified",h:["elf","dwarf","man"],b:"<p>Once every mode is qualified, a travelling drop target lights for points. Hitting it is one of the two things needed to light Extra Ball.</p>"+UNK("The manual's flow chart says to hit the roaming drop target before it is gone.")}
]},
{g:"Main modes",id:"modelist",title:"Known modes",steps:[
 {t:"The Resurgence of Sauron (Gandalf)",h:alt(["lorbit","rorbit","rramp","radvuk","captive"]).concat(["lramp"]),b:"<p>A frenzy: every shot scores 50. The left ramp raises the value by 25, up to 175. Hit anything except the left ramp and the LOCK targets to relight the full time collect. It can only end by timing out, so stack it with a multiball.</p>"},
 {t:"An Unexpected Party (Bilbo Baggins)",h:["pops","bagend","elf","dwarf","man"],b:"<p>The Bag End pop bumpers light and a random drop target rises. Bag End scores 1,000 per trip; each raised drop target hit adds another 1,000 to Bag End.</p>"},
 {t:"Evil Revealed",h:[["radvuk",1],["lramp",2]],b:"<p>Shoot the right VUK for 2,000, then the left ramp for 2,500. After that the left ramp scores 500 a shot for the rest of the mode.</p>"+UNK("Which character this mode belongs to is not documented yet.")},
 {t:"Duel in Lake-Town (Dwarf)",h:["orc"],b:"<p>A 2,500-point hurry-up lights on the Orc. Bash it, or let the hurry-up time out, to complete the mode.</p>"},
 {t:"The Fall of Erebor",h:["balin","dwarf"],b:"<p>Shoot the left VUK for 2,000, plus 250 for each raised drop target hit. Keep shooting it for more.</p>"+UNK("Which character this mode belongs to is not documented yet.")},
 {t:"Other modes",h:["book"],b:"<p>Moon Runes is an Elf mode. The other 25 modes are not documented yet.</p>"+UNK("The rulesheet says modes range from hitting the targets behind the drops without knocking the drops down to shooting the ramps with the U-turn diverter up.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"smaug",title:"Smaug Multiball",steps:[
 {t:"Light locks",h:["lock"],b:"<p>Complete the L-O-C-K rollovers. Letters not yet hit blink.</p>"},
 {t:"Lock",h:["rramp","lockcut","smaug","balin","lwire"],b:"<p>The right ramp lights for a lock. The ball goes to Smaug, who wakes and taunts you, and then comes back out of the left VUK onto the left wire ramp. The locks are virtual.</p>"+UNK("The Ring button can postpone a lit lock so you can start a mode instead.")},
 {t:"Getting harder",h:["lock","lockins"],b:"<p>First multiball: completing LOCK once qualifies all three locks. Second: complete LOCK for each lock, but locks can stack. After that: complete LOCK and collect the lock before the next set of rollovers can start.</p>"+UNK("JJP's manual describes LOCK 1 and LOCK 2 inserts and says the third lock shot starts the multiball. Its flow chart marks the re-spelling of LOCK as a difficulty setting.")},
 {t:"Jackpots",h:["lorbit","rorbit","balin","radvuk","lramp","rramp","captive"],b:"<p>A 3-ball multiball with a short ball save. The loops, VUKs, ramps and captive ball are lit for 3,500-point jackpots, which relight once all are collected.</p>"+UNK("The manual adds that seven jackpot shots give a chance at a Super Jackpot. The rulesheet does not mention a Super Jackpot, so how it works is not documented yet.")},
 {t:"Stacking",h:["spider","goblin","orc","warg"],b:"<p>Smaug and Beast Frenzy can stack: beast progress counts during Smaug Multiball, and Smaug locks can be lit and made during Beast Frenzy. Adding one to the other gives an add-a-ball.</p>"}
]},
{g:"Multiballs",id:"beasts",title:"Beast Frenzy Multiball",steps:[
 {t:"Raise a beast",h:[["warglane",1],["warg",2]],b:"<p>Roll through a lit inlane and its beast pops up for a few seconds. Hit it for a few points and +25 bonus. The insert in front of a defeated beast turns yellow.</p>"+UNK("If you start a beast's hurry-up again after defeating it, its light is green instead of blue.")},
 {t:"Light the inlanes",h:[["lramp",0,"alt"],["lorbit",0,"alt"],["rorbit",0,"alt"],["rramp",0,"alt"],"spilane","goblane","orclane","warglane"],b:"<p>In the first Beast Frenzy, roll over an unlit inlane or make its beast's shot to light it: Warg at the right ramp, Orc at the right orbit, Goblin at the left orbit, Spider at the left ramp. After the first, only the shots light the inlanes.</p>"+UNK("The Mystery award Light Beasts lights all four. JJP's flow chart marks the unlit inlane option as a difficulty setting.")},
 {t:"Defeat all four",h:["spider","goblin","orc","warg"],b:"<p>Defeat the Spider, Goblin, Orc and Warg to start Beast Frenzy Multiball.</p>"},
 {t:"Jackpots",h:["spider","goblin","orc","warg"],b:"<p>A 2-ball multiball with a short ball save. Beasts pop out of the playfield for 1,000 a hit. If you trap up, the beasts change so you can make mode start or mode shots.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"dwarves",title:"Dwarves and Feast Frenzy",steps:[
 {t:"Behind the ELF bank",h:["elf","elfdw"],b:"<p>Gloin, Oin and Dwalin.</p>"},
 {t:"Spinners and captive ball",h:["lspin","rspin","captive"],b:"<p>Fili on the left spinner, Kili on the right spinner and Thorin on the captive ball.</p>"},
 {t:"Left VUK and DWARF bank",h:["balin","arf"],b:"<p>Balin in the left VUK. Bifur, Bofur and Bombur behind the A, R and F drop targets.</p>"},
 {t:"Behind the MAN bank",h:["man","mandw"],b:"<p>Nori, Dori and Ori.</p>"},
 {t:"Feast Frenzy",h:["elf","dwarf","man"],b:"<p>Collect all 13 dwarves to start Feast Frenzy: the drop targets score points for a limited time. Then the dwarves can be collected again.</p>"+UNK("JJP's flow chart says the dwarf targets score extra points. The time limit is not documented yet.")}
]},
{g:"Other scoring",id:"erebor",title:"Erebor and Super Spinner",steps:[
 {t:"Travel",h:["lspin","rspin","lorbit","rorbit"],b:"<p>Each spinner spin scores 11 and moves you along the map from the Shire toward Erebor.</p>"},
 {t:"Super Spinner",h:["lspin","rspin",["captive",0,"alt"]],b:"<p>Reach Erebor to start Super Spinner for 60 seconds. Spins build a jackpot. Cash it at the captive ball to end the mode.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery levels",steps:[
 {t:"Light it",h:["lmys","warglane","orclane","goblane","spilane"],b:"<p>Roll through one left and one right inlane to light or advance Mystery. There are four levels.</p>"},
 {t:"Level 1: Mystery target",h:["mystery"],b:"<p>Hit the lit Mystery target for an award: 1,000 or 5,000 points, advance bonus multiplier, advance Erebor, Super Jets, light kickback, Light Beasts, a dwarf, or an extra tilt warning.</p>"},
 {t:"Level 2: Captive ball",h:["captive"],b:"<p>With the Mystery target lit, the captive ball also lights blue. Hit it to spot a dwarf.</p>"},
 {t:"Level 3: Load Arrow",h:["kickback","man"],b:"<p>The left outlane lights for Load Arrow. At the start of the next mode a power meter sets the kickback strength; stop it with the Ring and try to hit the MAN drop targets from the kickback for points.</p>"},
 {t:"Level 4: Precioussss",h:["precious"],b:"<p>The right outlane lights. When the ball goes through it, stop the moving line in the blue region with the Ring button. Make it and Bilbo escapes Gollum and play continues. Miss and the ball is gone.</p>"}
]},
{g:"Other scoring",id:"superjets",title:"Super Jets",steps:[
 {t:"Start",h:["pops","bagend"],b:"<p>Hit the Bag End barrel bumpers enough times to start Super Jets.</p>"+UNK("JJP's flow chart says bumper hits level up 1 to 4, raising bumper values, and level 5 starts Super Jets.")},
 {t:"Kick over barrels",h:[["pops",1],["uflip",2],["dwarf",3]],b:"<p>Further bumper hits load dwarves into barrels. Kick them over by hitting the flashing DWARF target with the upper right flipper. Kicking over 5 is one of the two things needed to light Extra Ball.</p>"+UNK("The flow chart says this happens when the ball drains right from the bumpers, and calls the number of barrels 'X'.")}
]},
{g:"Other scoring",id:"extraball",title:"Extra ball",steps:[
 {t:"Light it",h:["elf","dwarf","man","pops","uflip"],b:"<p>Two requirements: hit the travelling drop target once all modes are qualified, and kick over 5 dwarves in Super Jets.</p>"+UNK("JJP's flow chart also shows a captive ball award that lights Extra Ball (see Forge Gold).")},
 {t:"Collect",h:["balin","radvuk","ebins"],b:"<p>Shoot both VUKs to collect it.</p>"}
]},
{g:"Other scoring",id:"ring",title:"The Ring button",steps:[
 {t:"Charge",h:["book"],b:"<p>Switch hits charge the Ring button. JJP's flow chart says the button changes color and the backglass screen gives cues.</p>"},
 {t:"Use it",h:["rramp","spider","goblin","orc","warg"],b:"<p>Attempt Beast Backstab (a chance to defeat a beast during a hurry-up), postpone a lock shot or a mode shot on the right ramp, or take points: 1,000 plus 100 for each earlier use.</p>"}
]},
{g:"Other scoring",id:"forge",title:"Forge Gold",steps:[
 {t:"Not in the rulesheet",h:["captive"],b:"<p>JJP's manual flow chart shows Forge Gold: hit the captive ball 5 times and every 5th hit gives an award in this order: big points, advance barrel level, 2x playfield (Super X), advance Erebor, light Extra Ball.</p>"+UNK("The rulesheet does not mention Forge Gold, so the details are not documented yet. The same flow chart also names a Mode Multiball, locked at either orbit, and an Add Bonus X feature, with no other detail.")}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"arkenstone",title:"Arkenstone modes",steps:[
 {t:"Qualify",h:["arkins"],b:"<p>Complete a mode, start Smaug Multiball and Beast Frenzy Multiball, start Super Spinner and collect all the dwarves to light an Arkenstone mode.</p>"+UNK("The rulesheet's author had done all of this without seeing one light, and could not confirm they were in the code yet.")},
 {t:"The three modes",h:["arkins"],b:"<p>Into the Fire, Barrel Escape and Battle of the Five Armies. JJP's flow chart calls each one a major multiball scene.</p>"+UNK("How they play is not documented yet.")}
]}
];

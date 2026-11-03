/* ---------- playfield features (coordinates in the 640x1136 crops; the Arcade photo is aligned to the Collector's) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 lramp:{n:"Left ramp",c:1,s:[B([[166,622],[145,592],[120,560],[100,522],[90,475],[87,425]],16)],a:[150,602],x:"The Advance Term arrow at the gray ramp flap, lower left, with the Tryouts, Match and World Cup inserts and three snitch inserts under the green pitch beside it. The rulesheet says the snitch inserts are visible under the transparent left ramp. Where the ramp goes past the grass is my guess; I take it to feed the upper playfield."},
 library:{n:"Library ramp",c:0,s:[B([[204,494],[197,468],[180,452],[152,442],[122,430],[98,402]],14)],a:[198,472],x:"My reading: the Advance Term arrow just above the HERMIONE label. The rulesheet calls the library ramp the side ramp above the Hermione targets and beneath the left ramp. The path is a guess."},
 inner:{n:"Inner loop",c:0,s:[B([[192,412],[173,383],[156,352],[141,320],[129,285]],15)],a:[166,372],x:"My reading: the Advance Term arrow on the light blue lane with the Dumbledore's Army insert, left of the Death Eater. Retro Refurbs shows an inner orbit lane it calls the Secret Passage. Where the loop goes is a guess."},
 allies:{n:"Allies target",c:0,s:[C(197,440,10)],a:[197,440],x:"A guess, at the ALLIES insert below the inner loop. The rulesheet puts the allies target below the inner loop."},
 cramp:{n:"Center ramp",c:1,s:[B([[272,344],[279,302],[287,260],[297,220],[308,184]],16)],a:[276,322],x:"The Advance Term arrow above the four Explore Hogwarts location inserts. The rulesheet says the colored inserts below the center ramp match the left banners. The path past the entrance is my guess."},
 clane:{n:"Center lane",c:1,s:[B([[338,284],[341,246],[346,206],[356,166]],13)],a:[340,262],x:"The Advance Term arrow above the four Diagon Alley shop inserts. The rulesheet spells DIAGON at the center lane and says it feeds the bumpers. The path is my guess."},
 stairs:{n:"Staircase (right ramp)",c:1,s:[B([[404,372],[406,346],[410,322]],15),E(428,262,48,74)],a:[406,352],x:"The Advance Term arrow above the house inserts, into the rotating staircase. The rulesheet calls this shot the staircase or right ramp. Reviews describe three entrances and thirteen exits; I only mark the front one."},
 rorbit:{n:"Right orbit",c:0,s:[B([[466,374],[488,342],[498,302],[508,252],[518,196],[525,140]],14)],a:[480,356],x:"My reading: the Advance Term arrow with the Order of the Phoenix insert, right of the staircase. The path up the right is a guess."},
 rspin:{n:"Right spinner",c:0,s:[E(521,378,13,11)],a:[521,378],x:"A guess: the white ribbed drum between the right orbit and the cauldron. The rulesheet calls it the right time-turner spinner and says weak shots there can trigger Protego."},
 scoop:{n:"Scoop",c:0,s:[E(457,648,24,32)],a:[457,648],x:"A guess: the framed Hogwarts crest above the Start Term and Final Exam arrows, below the upper flipper. Retro Refurbs says the shot under the upper right flipper leads into the scoop."},
 underflip:{n:"Under the upper flipper",c:0,s:[C(463,602,10)],a:[463,602],x:"A guess, below the tip of the upper flipper, where the Extra Ball arrow points. The rulesheet lights extra balls at the hole behind the upper flipper."},
 upflip:{n:"Upper right flipper",c:1,s:[B([[481,522],[463,590]],12)],a:[472,556]},
 de:{n:"Death Eater",c:1,s:[E(217,278,30,72)],a:[217,278],x:"The large hooded Death Eater sculpt left of center."},
 drop:{n:"Death Eater drop target",c:0,s:[R(226,363,24,9)],a:[238,367],x:"A guess, in front of the Death Eater above the BATTLE insert. The rulesheet calls it the left drop target and the drop target in front of the Death Eater."},
 dehole:{n:"Hole behind the drop target",c:0,s:[C(234,346,10)],a:[234,346],x:"A guess, behind the drop target at the Death Eater's feet."},
 battle_ins:{n:"Battle and Death Eater Multiball inserts",c:1,s:[E(238,402,6,16),E(252,452,12,16)],a:[245,428]},
 hagrid:{n:"Hagrid target",c:0,s:[C(312,302,9)],a:[312,302],x:"A guess, above the HAGRID insert. The rulesheet puts the Hagrid standup between the center ramp and the center lane."},
 hagrid_ins:{n:"Hagrid insert",c:1,s:[C(320,325,10)],a:[320,325]},
 shops:{n:"Diagon Alley shop inserts",c:1,s:[C(348,309,11),C(351,336,11),C(331,362,11),C(351,382,11)],a:[348,345],x:"Weasleys, Owl Post, Flourish & Blotts and Ollivanders, below the center lane. I did not find a Borgin & Burkes insert."},
 loc_ins:{n:"Explore Hogwarts location inserts",c:1,s:[C(288,392,13),C(269,415,13),C(312,412,13),C(290,432,13)],a:[290,412],x:"Castle Grounds, Classrooms, Towers and Secret Passages, below the center ramp."},
 house_ins:{n:"House inserts",c:1,s:[C(394,420,12),C(366,435,12),C(401,445,12),C(380,462,12)],a:[384,440],x:"The four house inserts below the staircase. I read Gryffindor, Ravenclaw and Slytherin; the fourth is partly covered by a wire ramp."},
 owls_ins:{n:"O.W.L.s Multiball insert",c:1,s:[E(340,418,14,20)],a:[340,418]},
 ehmb_ins:{n:"Explore Hogwarts Multiball insert",c:1,s:[E(370,497,16,14)],a:[370,497]},
 ron:{n:"RON targets",c:0,s:[C(142,649,10),C(137,680,10),C(127,710,10)],a:[137,680],x:"The N, O and R inserts on the left, beside \"Spell Golden Trio names to light locks\". The rulesheet calls them the left standup targets. I could not see the targets from above, so the inserts are marked."},
 hermione:{n:"Hermione targets",c:0,s:[C(184,518,9),C(180,560,9)],a:[182,540],x:"A guess, at the two inserts beside the HERMIONE label. The rulesheet puts the Hermione standups between the left ramp and the library ramp."},
 harry:{n:"HARRY lanes",c:1,s:[C(58,806,10),C(96,806,10),C(468,806,10),C(522,806,10)],a:[96,806],x:"H and A over the left lanes, R and R over the right lanes. I could not find the Y."},
 lout:{n:"Left outlane (Fawkes)",c:0,s:[E(62,872,8,26)],a:[62,872],x:"My reading: the outer left lane. The FAWKES insert is printed just below the left lanes."},
 rout:{n:"Right outlane (Protego)",c:0,s:[E(522,872,8,26)],a:[522,872],x:"My reading: the outer right lane, by the PROTEGO shield sign."},
 fawkes_ins:{n:"Fawkes insert",c:1,s:[E(94,943,8,26)],a:[94,943]},
 protego_ins:{n:"Protego sign",c:1,s:[E(530,946,26,12)],a:[530,946]},
 lflip:{n:"Left flipper",c:1,s:[B([[180,1060],[248,1093]],12)],a:[214,1076]},
 rflip:{n:"Right flipper",c:1,s:[B([[395,1060],[327,1093]],12)],a:[361,1076]},
 eb_ins:{n:"Extra Ball insert",c:1,s:[E(423,612,22,14)],a:[423,612]},
 travel:{n:"Travel Combo inserts",c:1,s:[C(419,735,22)],a:[419,735],x:"The round TRAVEL COMBO / ADVANCE dial in front of the scoop."},
 term_ins:{n:"Start Term and Final Exam arrows",c:1,s:[E(428,689,8,16),E(449,695,8,16)],a:[438,692]},
 years:{n:"Year inserts",c:1,s:[C(175,787,14),C(215,765,14),C(260,752,14),C(307,750,14),C(352,762,14),C(392,787,14)],a:[283,752],x:"Years 1 to 6, each labelled with its film, in an arc above the flippers."},
 dh_ins:{n:"The Deathly Hallows insert",c:1,s:[E(162,829,22,12)],a:[162,829]},
 boh_ins:{n:"The Battle of Hogwarts insert",c:1,s:[E(411,826,22,12)],a:[411,826]},
 bwl_ins:{n:"The Boy Who Lived insert",c:1,s:[C(284,1105,14)],a:[284,1105]},
 horcrux:{n:"Horcrux inserts",c:1,s:[C(300,565,13),C(245,592,13),C(355,592,13),C(240,640,13),C(360,640,13),C(265,680,13),C(330,680,13)],a:[300,620],x:"Harry, Diadem, Diary, Locket, Ring, Cup and Nagini, around the Deathly Hallows symbol."},
 hallows:{n:"Deathly Hallows symbol",c:1,s:[C(300,625,28)],a:[300,625]},
 q_ins:{n:"Quidditch inserts",c:1,s:[E(109,483,18,10),E(113,511,18,10),E(114,538,18,10)],a:[112,511],x:"World Cup Multiball, Match and Tryouts, under the left ramp."},
 snitch_ins:{n:"Golden Snitch inserts",c:1,s:[C(104,455,6),C(96,466,6),C(116,464,6)],a:[105,462],x:"The three numbered snitches under the left ramp that track matches won."},
 ally_ins:{n:"Ally mode inserts",c:1,s:[C(61,511,9),C(61,534,9),C(63,558,9),C(61,582,9)],a:[61,546],x:"Loopin' Lupin, Heart's Desire, Luna Loves Loops and a fourth I read as Hexes & Jinxes, up the far left lane."},
 da_ins:{n:"Dumbledore's Army insert",c:1,s:[C(188,382,11)],a:[188,382]},
 upf:{n:"Quidditch upper playfield",c:1,s:[R(59,21,190,140)],a:[150,90],x:"The green Quidditch pitch at the top left, with a mini-flipper and two BEATER inserts. Wire ramps cross over it."},
 mini:{n:"Upper playfield mini-flipper",c:1,s:[B([[76,131],[125,170]],10)],a:[100,150]},
 beater:{n:"Beater inserts",c:1,s:[E(165,103,16,8),E(218,105,16,8)],a:[192,104]},
 upramp:{n:"Upper playfield ramp",c:0,s:[B([[118,140],[150,98],[198,72],[245,80]],12)],a:[170,88],x:"A guess. The rulesheet says the upper playfield ramp can be looped; I could not trace it under the wire ramps."},
 willow:{n:"Whomping Willow",c:1,s:[E(372,95,48,60)],a:[372,95],x:"The tree with the flying blue car, top center. Retro Refurbs says it sits on a pop bumper."},
 jets:{n:"Pop bumpers",c:0,s:[C(365,122,28)],a:[365,122],x:"A guess, under the Whomping Willow. The rulesheet mentions jets and bumpers fed by the center lane and staircase but does not say how many or where."},
 erised:{n:"Heart's Desire insert",c:1,s:[C(429,149,14)],a:[429,149],x:"Printed upside down, right of the Whomping Willow."},
 cauldron:{n:"Cauldron",c:1,s:[E(567,432,38,40)],a:[567,432],x:"The large cauldron on the right. The rulesheet says the ball falls into a hole near the cauldron to advance Potions; I take that to be the cauldron itself."},
 potions_ins:{n:"Potions insert",c:1,s:[E(493,420,18,8)],a:[493,420]},
 wands:{n:"Wand lock",c:0,s:[R(542,40,68,330)],a:[576,200],x:"My reading: the three long wands along the upper right. The rulesheet locks balls at the wand, lit at the right orbit and inner loop."},
 shooter:{n:"Plunger lane",c:0,s:[B([[580,1130],[580,1000]],10)],a:[580,1060]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var RO=["lramp","library","inner","cramp","stairs","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["horcrux","years","boh_ins","dh_ins"],b:"<p>Play through Harry's school years, the multiballs and the Deathly Hallows, and collect all seven horcruxes to light The Boy Who Lived, the final wizard mode.</p>"+UNK("The rulesheet's Layout section is two photos with no text, so the playfield names here are my reading of the inserts and of the rulesheet's descriptions.")},
 {t:"Major shots",h:NUM(["lramp","library","inner","cramp","clane","stairs","rorbit"]),b:"<p>Left to right: the left ramp, library ramp, inner loop, center ramp, center lane, staircase (right ramp) and right orbit. Each has an Advance Term arrow for lessons.</p>"+UNK("The left ramp, center ramp, center lane and staircase are fixed by their inserts. The library ramp, inner loop and right orbit are my reading of the other arrows and may be swapped.")},
 {t:"Right side",h:["scoop","underflip","upflip","rspin","cauldron","wands"],b:"<p>The scoop sits below the upper right flipper. A shot under that flipper also leads to the scoop. Further right are the right spinner, the cauldron and the wand lock.</p>"+UNK("The scoop, the under-flipper hole and the spinner are estimated.")},
 {t:"Death Eater and targets",h:["de","drop","hagrid","ron","hermione","allies"],b:"<p>A drop target guards the Death Eater. The Hagrid standup is between the center ramp and center lane. RON standups are on the left, the Hermione standups between the left and library ramps, and the allies target below the inner loop.</p>"},
 {t:"Upper playfield",h:["upf","mini","upramp","beater","willow","jets"],b:"<p>The Quidditch pitch at the top left has a mini-flipper, a ramp, a spinner and a target. The Whomping Willow stands over the bumpers at the top center.</p>"+UNK("The upper spinner and target are not marked.")},
 {t:"Inlanes and outlanes",h:["harry","lout","rout","fawkes_ins","protego_ins"],b:"<p>The lanes spell HARRY. Fawkes can save a ball at the left outlane, and Protego at the right outlane.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Level 1",h:["lramp","hermione","de","harry","ron"],b:"<p>Press the action button to change the lit skill shot. Level 1: the left ramp (Seeker position and a Quidditch match), the Hermione, HARRY or RON skill shot (lights that Golden Trio lock), or the Death Eater (boosts Battle Value).</p>"},
 {t:"Level 2",h:["clane","stairs","rorbit","underflip","scoop","cramp"],b:"<p>Making a level 1 skill shot opens level 2. Among its awards: center lane (Diagon Alley), staircase (2x next Explore Hogwarts), right orbit (character value), under the flipper (extra ball), scoop (3x Wizard Travel advance) and center ramp (stair shot value).</p>"+UNK("Level 2 also lists Harry lane, Ron target, Hermione targets, left ramp and Death Eater awards.")},
 {t:"Level 3",h:["clane","cramp","underflip","scoop","rspin","da_ins"],b:"<p>Level 3: center lane (+25M Knockturn Alley jackpot), Dumbledore's Army and Repeat (3,000,000), center ramp (spot banners), under the flipper (Extra Credit Mania), scoop (add a tilt warning) and right spinner (spot a horcrux).</p>"+UNK("The rulesheet does not say which shot \"Dumbledore's Army and Repeat\" is. The Extra Balls section says the extra ball comes from a level 3 skill shot behind the upper flipper, but the skill shot list puts it at level 2.")}
]},
/* ====== SCHOOL YEARS ====== */
{g:"School years",id:"terms",title:"Terms and lessons",steps:[
 {t:"Starting a year",h:["scoop","term_ins","years"],b:"<p>Shoot the scoop to start a year, then pick it with the flipper and action buttons. A year is a run of 10 lessons, Fall Term and Spring Term.</p>"},
 {t:"Lighting the scoop",h:["rspin","scoop"],b:"<p>If Start Term is not lit, shoot the spinners to light it.</p>"+UNK("The overview says the right spinner; the School Year section says spinners.")},
 {t:"Lessons",h:alt(RO),b:"<p>Lesson shots are lit red and gold. A lesson ends when you make its shots or its time runs out, and the next one begins. Shoot the right time-turner spinner for more time.</p>"},
 {t:"Rewards",h:["rspin","dh_ins"],b:"<p>Each completed lesson scores a time bonus: 25K per second left plus 25K per lesson completed in a row. Completing four lessons is one of three requirements for The Deathly Hallows.</p>"+UNK("The overview and School Year section say four lessons in a game; the Deathly Hallows section says four lessons in a school year term.")},
 {t:"Bombtastic Bombs",h:["shops"],b:"<p>Weasleys' Wizard Wheezes awards Bombtastic Bombs. Press the action button during a lesson to use one and complete that lesson.</p>"}
]},
{g:"School years",id:"lessons",title:"Lesson shots",steps:[
 {t:"Year 1",h:alt(["rorbit","hagrid","harry","ron","library","cramp","rspin","stairs","inner","lramp"]),b:"<p>Philosopher's Stone. Shots named include the right orbit, Hagrid target, HARRY lanes, RON targets, library ramp, center ramp, 20 right spins, right ramp, inner loop and left ramp.</p>"+UNK("Most lessons list only their first shot or two; the rest are question marks.")},
 {t:"Year 2",h:alt(["ron","inner","jets","hermione","lramp","upramp","rspin","rorbit","cramp","clane","underflip"]),b:"<p>Chamber of Secrets. Shots named include RON targets, the inner loop, 8 to 10 jets via the stairs, Hermione target, left ramp, upper playfield ramps, 20 right spins, right orbit, center ramp, center lane and two under-flipper shots.</p>"+UNK("The Final Exam lists a center ramp for its first lesson and nothing more.")},
 {t:"Year 3",h:alt(["rorbit","inner","hermione","jets","library","harry","de","hagrid","cramp","stairs","clane"]),b:"<p>Prisoner of Azkaban. Shots named include ramp and orbit shots, 20 spins of any spinner, the right orbit, inner loop, Hermione target, 10 jets, library ramp, HARRY lane, Death Eater, Hagrid target and center ramp. Truly Seen, Truly Free is the only lesson with all four shots: right ramp, center lane, center ramp, inner loop.</p>"},
 {t:"Year 4",h:alt(["ron","hermione","lramp","de","upramp","hagrid","rorbit","cramp","stairs","harry","clane","inner"]),b:"<p>Goblet of Fire. Shots named include RON or Hermione targets, left ramp, Death Eater, upper playfield ramp, Hagrid target, right orbit, center and right ramps, HARRY lanes, center lane and inner loop.</p>"+UNK("The Final Exam names the Death Eater for its first lesson only.")},
 {t:"Years 5 and 6",h:alt(["clane","rorbit","de"]),b:"<p>Order of the Phoenix and Half-Blood Prince. Year 6 Fall Term names center lanes, right orbits, the Death Eater and center or left shots.</p>"+UNK("Year 5 lists lesson names only, and most of Year 6 has no shots.")}
]},
{g:"School years",id:"exam",title:"Final Exam and O.W.L.s",steps:[
 {t:"Final Exam",h:["scoop","term_ins"],b:"<p>After 10 lessons, shoot the scoop for the Final Exam. It shows how many lessons you completed or failed, which sets the value per shot, then plays six more lessons.</p>"},
 {t:"Starting O.W.L.s",h:["clane","owls_ins"],b:"<p>After the Final Exam, shoot the center lane to start O.W.L.s Multiball, a 2-ball multiball with a 30-second ball saver.</p>"},
 {t:"Jackpots",h:["owls_ins","shops"],b:"<p>The base jackpot depends on lessons completed. Each spell completed at Flourish & Blotts before the multiball adds +1x to everything scored in it. Shoot 5 red jackpot shots to light the super jackpot; 65 switches light a triple jackpot.</p>"+UNK("The rulesheet does not say which shots are red or where the super jackpot is.")}
]},
/* ====== DIAGON ALLEY AND ALLIES ====== */
{g:"Diagon Alley and allies",id:"diagon",title:"Diagon Alley",steps:[
 {t:"Lighting a shop",h:["clane","shops","hagrid"],b:"<p>Shoot the center lane three times to spell DIAGON and visit a shop. Each visit adds a shot, up to six. Hit the Hagrid target or press the action button to change the lit shop.</p>"},
 {t:"Ollivanders",h:["shops"],b:"<p>A 30-second mode. Shoot the lit double-arrow shots to earn Golden Trio perks in order: longer ball save, bigger jackpots, easier wand jackpots, 2x and 3x jackpot combos, auto restart.</p>"+UNK("The rulesheet does not say which shots are the double-arrow shots.")},
 {t:"Flourish & Blotts",h:["shops","owls_ins","horcrux"],b:"<p>A spell training video mode: repeat the spells with the flipper and action buttons. Each spell adds +1x to O.W.L.s Multiball, and finishing awards the Diary horcrux.</p>"},
 {t:"Owl Post and Weasleys",h:["shops"],b:"<p>Owl Post lights a random hurry-up from 50M; the VUK feeds whichever flipper suits the shot. Weasleys' Wizard Wheezes awards 10M and +2 Bombtastic Bombs.</p>"+UNK("The rulesheet does not say where the VUK is.")},
 {t:"Borgin & Burkes",h:["clane"],b:"<p>Open only once the Knockturn Alley value has been built over the multiballs. Visiting it collects the Knockturn jackpot.</p>"}
]},
{g:"Diagon Alley and allies",id:"allies",title:"Allies",steps:[
 {t:"Lighting allies",h:["allies","inner","rorbit","ally_ins"],b:"<p>Shoot the allies target to light a timed mode at the inner loop or right orbit. Each mode takes more hits to light. Ten allies, which plays all four modes, award the Locket horcrux.</p>"},
 {t:"Inner loop modes",h:[["inner",1],"rspin"],b:"<p>Luna Loves Loops: repeat the inner loop for 30 seconds, each one worth more. Hexes & Jinxes: all three spinners score 10K a spin, rising with every rip and unique spinner.</p>"},
 {t:"Right orbit modes",h:[["rorbit",1],"clane","stairs","jets","erised"],b:"<p>Loopin' Lupin: repeat the right orbit for 30 seconds. Heart's Desire: feed the bumpers through the center lane or staircase for rising values, while the Mirror of Erised shows you on the display.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"hogwarts",title:"Explore Hogwarts Multiball",steps:[
 {t:"Banners",h:["cramp","stairs","loc_ins","house_ins"],b:"<p>Spot all eight banners on the display. The center ramp spots the left banners matching its lit insert color, the staircase the right banners. On your first one, either ramp spots both sides. Green and yellow start spotted.</p>"},
 {t:"Starting",h:[["stairs",1],"ehmb_ins"],b:"<p>With all eight banners down, shoot the right ramp to start the multiball.</p>"},
 {t:"Jackpots",h:alt(RO).concat(["loc_ins"]),b:"<p>Many shots light for Secret Passages, Classrooms, Castle Grounds or Towers jackpots. Each one unlights when made. Four jackpots light a super jackpot that roves left to right; more jackpots raise it.</p>"},
 {t:"Super jackpot",h:["horcrux","hagrid"],b:"<p>The super jackpot awards the Ring horcrux, then the cycle repeats. It stays lit after the multiball if not collected. After 2 jackpots, the Hagrid target lights green for an add-a-ball.</p>"}
]},
{g:"Multiballs",id:"trio",title:"Golden Trio Multiball",steps:[
 {t:"Spelling names",h:["harry","ron","hermione"],b:"<p>Each name lights one wand lock: HARRY at the return lanes, RON at the left standups, HERMIONE by repeatedly hitting either target between the left and library ramps. Level 1 skill shots also spell them.</p>"},
 {t:"Locking",h:["rorbit","inner","wands"],b:"<p>Lock at the wand from the right orbit or inner loop. Three locked balls start the multiball.</p>"},
 {t:"Jackpots",h:["ron","harry","hermione"],b:"<p>Blue jackpots are Ron's (left), red Harry's (center), yellow Hermione's (right). After one is collected, a RON target, HARRY lane or Hermione target relights its color.</p>"+UNK("The rulesheet does not say which shots carry each color.")},
 {t:"Wand jackpots",h:["rorbit","clane","inner"],b:"<p>Three jackpots of one color (two with the Ollivanders perk) light the right orbit, center lane and inner loop for a wand jackpot. The second scores 2x, the third 3x. A wand jackpot with two balls left adds a ball.</p>"},
 {t:"Super jackpot",h:["wands","horcrux"],b:"<p>After the third wand jackpot you have 45 seconds to lock the remaining balls at the wand (3 for full value), then shoot a random shot for the super jackpot and the Cup horcrux.</p>"}
]},
{g:"Multiballs",id:"deatheater",title:"Death Eater Multiball",steps:[
 {t:"Battles",h:["drop","dehole","de"],b:"<p>Shoot the drop target to light a Death Eater battle (timed for the second one). Shoot the hole behind it twice in 20 seconds to score 20M and defeat him. The first defeat of the game lights an extra ball.</p>"},
 {t:"Starting",h:[["dehole",1],"battle_ins"],b:"<p>Defeating the second Death Eater lights the hole to start the multiball and kills the flippers. All other rules are off during it. Starting it awards the Nagini horcrux.</p>"},
 {t:"Hurry-up and jackpots",h:["de"],b:"<p>The hurry-up starts at 1M. Collect it above 800K or 400K and fewer Death Eaters need defeating. Green shots then score that value and take half a Death Eater's health.</p>"+UNK("The rulesheet does not say which shots are green.")},
 {t:"Super jackpots",h:["scoop","rspin","underflip"],b:"<p>Shoot any shot on the right (scoop, right spinner, behind the flipper) for 5M times the Death Eaters killed.</p>"},
 {t:"Frenzy",h:["de"],b:"<p>Red shots then run a timed frenzy, collected at the Death Eater.</p>"+UNK("The rulesheet gives the frenzy value as a question mark.")}
]},
{g:"Multiballs",id:"quidditch",title:"Quidditch and the World Cup",steps:[
 {t:"Tryouts",h:[["lramp",1],"upf","q_ins"],b:"<p>The first left ramp shot of the game starts Quidditch tryouts, once per game. Two upper target hits, two ramps, two spinner hits or one snitch shot each raise your position: beater, chaser, keeper, seeker.</p>"},
 {t:"Position",h:["lramp","q_ins"],b:"<p>After tryouts, only the snitch shot or a potion raises your position. Position multiplies your Quidditch Bonus at the end of the game.</p>"},
 {t:"Matches",h:["upf","snitch_ins"],b:"<p>Enough upper playfield spinner hits start a match: 40 seconds the first time, 30 the second. A snitch insert lights and roams. Catch it by shooting the lit snitch, the left ramp skill shot, or the snitch shot on the upper playfield.</p>"+UNK("The rulesheet does not give the spinner count. It says there are 21 snitch inserts on the main playfield and 3 upstairs; they are not marked.")},
 {t:"Snitch shot",h:["mini","upramp","cramp","stairs"],b:"<p>The snitch (broom) shot is a late, strong mini-flipper shot that leaves the upper playfield onto the center ramp to the back of the staircase.</p>"},
 {t:"Points",h:["upramp","snitch_ins"],b:"<p>A snitch catch earns 150 Quidditch points. Each upper ramp shot during a match is a goal worth 10.</p>"},
 {t:"World Cup",h:[["lramp",1],"snitch_ins","q_ins"],b:"<p>Win three matches, one against each rival house, then shoot the left ramp for Quidditch World Cup multiball.</p>"},
 {t:"World Cup jackpots",h:["lramp","upramp","horcrux"],b:"<p>Green shots score jackpots; the left ramp switches them to red, worth more. Five jackpots light the super jackpot at the upper ramp, up to 5x for looping it, with the Diadem horcrux.</p>"+UNK("The count after the first World Cup is a question mark. The rulesheet says an add-a-ball \"seems to be available\" from the upper playfield.")},
 {t:"Missing the horcrux",h:["snitch_ins"],b:"<p>Fail to earn the Diadem and the next World Cup needs 1 snitch, then 2, then all 3 again.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"travel",title:"Wizard Travel and Geminio",steps:[
 {t:"Combos",h:["travel","scoop"],b:"<p>Combos light the travel inserts in front of the scoop. When one flashes, shoot the scoop for the current level's award.</p>"},
 {t:"Awards",h:["travel","scoop"],b:"<p>Geminio (2x) at Broomstick, light extra ball at Flying Car and again at level 4, Geminio (3x) at Knight Bus, Extra Credit Mania at Port Key, Special at Hippogriff, Geminio (4x) at Apparition.</p>"+UNK("The list starts at level 2 Broomstick, but the text says level 1 is Broomstick. Level 4 has no name.")},
 {t:"Geminio",h:["travel"],b:"<p>Geminio is a 30-second playfield multiplier that grows each time it is used in a game.</p>"}
]},
{g:"Other scoring",id:"potions",title:"Potions",steps:[
 {t:"Brewing",h:["cauldron","potions_ins"],b:"<p>In single-ball play, the hole near the cauldron advances Potions. The first needs two, then one more each time.</p>"},
 {t:"Collecting",h:NUM(["lramp","cramp","rorbit"]),b:"<p>Three awards appear for the left ramp, center ramp and right orbit. Shoot one to lock it in, then hit it twice more to collect.</p>"},
 {t:"Awards",h:["cauldron"],b:"<p>Awards include ball saver, tilt warnings, Bombtastic Bombs, Knockturn value, Quidditch position or goals, Spot Snitch, Max Geminio, Extra Credit, 3x Potter Frenzy, 5x Fawkes, Protego Maxima, extra ball, and spots toward Battle of Hogwarts or a horcrux.</p>"+UNK("Muggle Points is TBD. The list also names Library Visits and Forbidden Forest awards that the rulesheet never explains.")}
]},
{g:"Other scoring",id:"saves",title:"Fawkes, Protego and Potter Frenzy",steps:[
 {t:"Fawkes",h:["rorbit","lout","fawkes_ins"],b:"<p>Right orbit shots light Fawkes at the left outlane. Drain there and hit three different shots in 20 seconds to save the ball, then enjoy 10 seconds of victory laps and a super jackpot chance.</p>"+UNK("The rulesheet does not say how many right orbit shots are needed.")},
 {t:"Protego",h:["harry","rout","protego_ins"],b:"<p>Spelling HARRY lights Protego, which saves a ball at the right outlane. Weak right spinner shots and right outlane drains during ball save trigger it too.</p>"+UNK("The overview says HARRY lights Protego only while the Golden Trio lock is already lit; the Protego section gives no condition.")},
 {t:"Potter Frenzy",h:["harry"],b:"<p>Spell HARRY four times to start 40 seconds of Potter Frenzy: every switch scores 50K to 100K.</p>"}
]},
{g:"Other scoring",id:"horcrux",title:"Horcruxes",steps:[
 {t:"Seven horcruxes",h:["horcrux"],b:"<p>Diary: Flourish & Blotts. Ring: Explore Hogwarts super jackpot. Locket: 10 allies. Cup: Golden Trio super jackpot. Diadem: World Cup super jackpot. Harry: The Deathly Hallows. Nagini: start Death Eater Multiball.</p>"},
 {t:"The Boy Who Lived",h:["horcrux","bwl_ins"],b:"<p>Collect all seven, in any order, to light The Boy Who Lived.</p>"}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:[["underflip",1],"eb_ins"],b:"<p>Extra balls light at the hole behind the upper flipper: from a skill shot, the first Death Eater defeat, Wizard Travel, Potions or the Resurrection Stone.</p>"+UNK("The rulesheet says Wizard Travel level 3 here; the travel list lights extra ball at levels 3 and 4.")},
 {t:"Extra credit",h:["underflip","scoop"],b:"<p>The action button, a shot under the upper right flipper or the scoop changes the selected extra credit objective.</p>"},
 {t:"Bonus multiplier",h:[["library",1]],b:"<p>The library ramp raises the bonus multiplier, up to 10x.</p>"},
 {t:"Quidditch Bonus",h:["snitch_ins","q_ins"],b:"<p>At the end of the game, 150 points per snitch and 10 per goal, times your position (beater 100K, chaser 150K, keeper 200K, seeker 300K). In multiplayer, the Quidditch MVP gets 10M per player, up to 40M.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"hallows",title:"The Deathly Hallows",steps:[
 {t:"Qualifying",h:["harry","lramp","years","dh_ins"],b:"<p>Earn the Invisibility Cloak (spell HARRY 3 times), the Resurrection Stone (200 Quidditch points) and the Elder Wand (4 lessons).</p>"},
 {t:"Starting",h:[["scoop",1],"dh_ins"],b:"<p>Shoot the scoop. You get 90 seconds and an 18-second ball save.</p>"},
 {t:"Collecting",h:alt(RO).concat(["upramp"]),b:"<p>Shoot 5 blue shots for the cloak, 5 purple for the stone and 5 red for the wand. The upper ramp can be looped for purple. Yellow shots add 0.25x to the playfield multiplier, up to 8x.</p>"},
 {t:"Rewards",h:["horcrux"],b:"<p>First item: 50M times the multiplier, an extra ball and 10 seconds. Second: 50M times, +10x extra credit and 15 seconds. Third: 100M times and the Harry horcrux. Progress carries over if you drain.</p>"}
]},
{g:"Wizard modes",id:"battle",title:"The Battle of Hogwarts",steps:[
 {t:"Qualifying",h:["boh_ins"],b:"<p>Play four different multiballs.</p>"},
 {t:"Stages",h:alt(["rspin","hagrid","lramp","cramp","jets","rorbit"]),b:"<p>A six-ball multiball in stages. Badges count spinners, targets, ramps, jets and orbits; complete 3, 4 or 5 of them to advance. Stages 1 to 3 pay 25M, 50M and 75M.</p>"},
 {t:"Staying alive",h:["underflip","rout"],b:"<p>Stages 2 to 4 add 3, 2, then 1 ball. Shoot under the upper flipper for 15 seconds of Protego. Down to one ball, the mode ends.</p>"}
]},
{g:"Wizard modes",id:"lived",title:"The Boy Who Lived",steps:[
 {t:"Starting",h:[["clane",1],"bwl_ins"],b:"<p>With all seven horcruxes, shoot the center lane.</p>"},
 {t:"Destroying horcruxes",h:alt(RO),b:"<p>In film order: Diary 2 orange, Ring 3 purple, Locket 4 pink, Cup 3 white (multiball), Diadem 3 blue, Harry 3 red, then Nagini. Then the final battle against Voldemort.</p>"+UNK("Nagini's shots and the Voldemort battle are not documented yet.")}
]}
];

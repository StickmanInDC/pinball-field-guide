/* ---------- playfield features (coordinates in the 640x1238 crops; the Premium photo is aligned to the Pro by an affine fit; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit (left loop)",c:0,s:[B([[108,345],[98,290],[86,220],[82,150],[96,95],[130,60]],18)],a:[88,235],x:"The white arrow at the upper left, beside the Super Bumpers insert. Stern's lamp list calls it LT Orbit Arrow and the manual puts the Left Orbit switch high in this lane. The rulesheet calls it the left orbit or left loop. Where the lane runs above the arrow is my reading of the photo."},
 star:{n:"STAR targets shot (Starchild)",c:0,s:[B([[260,345],[252,295],[242,245],[228,200]],18)],a:[250,290],x:"The red arrow left of center, below the Starchild mini play area. Stern's lamp list calls it Starchild Arrow. I read it as the rulesheet's STAR targets shot, which the songs treat as one of the six main shots."},
 star_tg:{n:"STAR targets",c:0,s:[C(125,150,9),C(160,118,9),C(192,92,9),C(235,88,9)],a:[175,118],x:"Four standups in the Starchild mini play area at the upper left. Stern's manual places them around the top of that area. I could not see them in the photos, so the marks follow the manual."},
 saucer:{n:"Starchild saucer (hidden hole)",c:0,s:[C(285,112,12)],a:[285,112],x:"Stern's features list says the Starchild mini play area has a hidden hole, and the manual has an Eject switch near the top of that area. The rulesheet calls it the Starchild playfield saucer. This mark is my guess from the manual."},
 star_drop:{n:"Starchild drop target",c:0,s:[],a:[232,236],x:"Premium and LE only.",v:{premium:{s:[R(214,228,36,16)],x:"Premium and LE only (Stern's features list: Starchild single drop target with coil assisted trip). The rulesheet says a ball is held captive behind it at the start of Love Gun Multiball. I could not see it in the photo; the mark is a guess in front of the Starchild figure."}}},
 starchild:{n:"Starchild figure",c:1,s:[E(215,165,30,42)],a:[215,165],x:"Paul Stanley's figure with guitar. Static on the Pro, animated on the Premium and LE (Stern's features list).",v:{premium:{s:[E(225,165,30,42)],a:[225,165]}}},
 amp:{n:"Starchild amplifier",c:1,s:[],a:[140,230],v:{premium:{s:[R(105,182,70,82)]}},x:"Premium and LE only. A decorative molded amplifier (Stern's features list)."},
 center_ramp:{n:"Center ramp",c:0,s:[B([[322,350],[320,300],[312,250],[298,205]],20)],a:[322,342],x:"The arrow just left of the Demon head. Stern's lamp list calls it LT Ramp Arrow, and the features list has a left plastic ramp feeding a left wire ramp. I read it as the rulesheet's center ramp, which feeds the left inlane. Where the ramp goes above the entrance is a guess."},
 demon:{n:"Demon shot",c:0,s:[B([[400,470],[400,420],[402,372]],24)],a:[400,455],x:"The shot under Gene's tongue, inside the DEMON letters. Stern's lamp list has a Demon Arrow here and the manual puts the Demon Entrance opto under the head. A spinning disc under the head sends the ball back (Stern's features list).",v:{premium:{x:"The shot under Gene's tongue, inside the DEMON letters. Stern's lamp list has a Demon Arrow here and the manual puts the Demon Entrance opto under the head. On the Premium and LE the head holds a three-ball lock (Stern's features list)."}}},
 demon_ins:{n:"DEMON letters",c:1,s:[C(352,422,10),C(364,455,10),C(386,476,10),C(415,472,10),C(445,442,10)],a:[400,465]},
 lock_tg:{n:"Lock targets (Lite Lock)",c:0,s:[C(362,358,10),C(455,388,10)],a:[408,372],x:"Stern's manual places a Left and a Right Lock Target either side of the Demon entrance, and the features list calls them the 2 Lite Lock standups. The rulesheet calls them the two green lock targets. I could not see them, so the marks follow the manual."},
 lock_ins:{n:"LOCK insert",c:1,s:[C(345,520,13)],a:[345,520]},
 scoop:{n:"Backstage Pass scoop",c:0,s:[C(258,522,16)],a:[258,522],x:"The scoop under the Backstage Pass sign, left of center. Stern's manual puts the Scoop switch here. The rulesheet also calls it the New Track scoop."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[468,500],[478,440],[492,370],[505,280],[515,190],[525,120]],20)],a:[482,425],x:"The white arrow right of the Demon head, above the Super Targets sign. Stern's lamp list calls it RT Ramp Arrow. The ramp climbs the clear ramp at the right. Where it goes after the entrance is a guess.",v:{premium:{x:"The white arrow right of the Demon head, above the Super Targets sign. Stern's lamp list calls it RT Ramp Arrow. On the Premium and LE a diverter can send the ball to the Starchild levitation mech (Stern's features list). Where the ramp goes after the entrance is a guess."}}},
 lg_ins:{n:"Love Gun insert",c:1,s:[C(425,562,13)],a:[425,562],x:"The purple insert below the right ramp arrow. The rulesheet says the right ramp's purple insert lights when Love Gun Multiball is qualified."},
 right_orbit:{n:"Right orbit (right loop)",c:0,s:[B([[548,500],[550,420],[553,340],[557,240],[548,140],[520,70]],18)],a:[554,330],x:"The lane up the right side, past a column of band member inserts. Stern's lamp list calls its arrow RT Orbit Arrow and lists four inserts beside it, which I read as the rulesheet's four bumper lights on the right orbit. The rulesheet says the right orbit feeds the pop bumpers. The lane path is my reading of the photo."},
 spinner:{n:"Spinner",c:0,s:[R(532,520,32,16)],a:[548,528],x:"Placed from the Spinner switch in Stern's manual, in the right orbit lane. I could not see the spinner flag in the photos."},
 pops:{n:"Pop bumpers",c:1,s:[C(178,345,24),C(95,405,24),C(230,420,24),C(110,520,24)],a:[165,430],x:"Four pop bumpers with a band member on each cap. Stern's manual calls them top, left, right and bottom."},
 kiss_tg:{n:"KISS targets",c:0,s:[C(110,685,9),C(127,652,9),C(143,620,9),C(160,588,9)],a:[135,636],x:"A 4-bank of standups along the KISS panel on the left (Stern's manual: 4 Bank K-I-S-S). I could not see the targets in the photo, so the marks follow the manual.",v:{premium:{x:"On the Premium and LE this is a 4-bank of drop targets (Stern's features list). It sits along the KISS panel on the left; I could not see the targets in the photo, so the marks follow the manual."}}},
 army_tg:{n:"ARMY targets",c:0,s:[C(518,605,9),C(518,640,9),C(518,675,9),C(518,710,9)],a:[518,605],x:"A 4-bank of standups on the right, beside the A-R-M-Y inserts (Stern's manual: ARMY targets). I could not see the targets, so the marks follow the manual."},
 army_ins:{n:"A-R-M-Y inserts",c:1,s:[C(482,610,11),C(482,643,11),C(482,677,11),C(482,710,11)],a:[482,705]},
 grid_kiss:{n:"Grid: KISS row",c:1,s:[C(270,735,12),C(304,735,12),C(338,735,12),C(372,735,12)],a:[321,735]},
 grid_army:{n:"Grid: ARMY row",c:1,s:[C(270,770,12),C(304,770,12),C(338,770,12),C(372,770,12)],a:[321,770]},
 grid_pops:{n:"Grid: band member pop bumper row",c:0,s:[C(270,805,12),C(304,805,12),C(338,805,12),C(372,805,12)],a:[321,805],x:"I read the row of band member faces as the four pop bumper lights in the grid. The rulesheet lists the grid's four sets but not which row is which."},
 grid_inst:{n:"Grid: instrument row",c:0,s:[C(270,843,12),C(304,843,12),C(338,843,12),C(372,843,12)],a:[321,843],x:"I read the row of colored round inserts as the four instruments. The rulesheet does not say which row is which."},
 band_ins:{n:"Starchild, Spaceman, Demon and Catman inserts",c:1,s:[C(270,884,13),C(304,884,13),C(338,884,13),C(372,884,13)],a:[321,884],x:"Left to right: Starchild, Spaceman, Demon, Catman (printed labels). Flashing counts toward KISS Army, solid toward Rock City."},
 mult_ins:{n:"2X and 3X inserts",c:1,s:[C(320,932,15),C(320,977,15)],a:[320,955]},
 bonus_ins:{n:"Colossal Bonus insert",c:1,s:[C(320,1025,17)],a:[320,1025]},
 combo_l:{n:"KISS Army Combo insert",c:1,s:[R(145,770,50,42)],a:[170,790]},
 combo_r:{n:"KISS Combo insert",c:1,s:[R(460,785,46,38)],a:[483,804]},
 front_row:{n:"Front Row insert (left outlane)",c:1,s:[C(76,835,11)],a:[76,835]},
 lite_bumper:{n:"Lite Bumper insert",c:1,s:[C(114,795,11)],a:[114,795]},
 left_out:{n:"Left outlane",c:0,s:[E(60,852,9,28)],a:[60,852],x:"Marks follow the lane slots in the photo; the outlane slot is just off the left edge of the art."},
 inlane_l:{n:"Leftmost left inlane",c:0,s:[E(100,848,9,28)],a:[100,848],x:"The outer of the two left inlanes. Stern's manual lists two left return lanes. The Lite Bumper insert sits above it."},
 inlane_r:{n:"Inside left inlane",c:0,s:[E(148,848,9,28)],a:[148,848],x:"The inner of the two left inlanes. Marks follow the lane slots in the photo."},
 right_in:{n:"Right inlane",c:0,s:[E(486,862,9,28)],a:[486,862],x:"Marks follow the lane slots in the photo."},
 right_out:{n:"Right outlane",c:0,s:[E(536,862,9,28)],a:[536,862],x:"Marks follow the lane slots in the photo. The Special insert sits above it."},
 super_tg:{n:"Super Targets sign",c:1,s:[R(428,500,52,36)],a:[454,518]},
 flippers:{n:"Flippers",c:1,s:[B([[222,1022],[288,1060]],16),B([[458,1022],[392,1060]],16)],a:[340,1045]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_orbit","star","center_ramp","demon","right_ramp","right_orbit"];
var GRID=["grid_kiss","grid_army","grid_pops","grid_inst"];
var LANES=["left_out","inlane_l","inlane_r","right_in","right_out"];

var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:GRID.concat(["band_ins","scoop"]),b:"<p>Pick a song (mode) at the start of a ball and shoot lit arrows to finish it. Fill the bonus grid for Heaven's on Fire, and light the four band member inserts for the KISS Army and Rock City wizard modes, which start at the Backstage Pass scoop.</p>"},
 {t:"The six main shots",h:NUM(MAJ),b:"<p>Left to right, as the songs use them: left orbit, STAR targets, center ramp, Demon, right ramp, right orbit. Each has a color-changing arrow insert.</p>"+UNK("The rulesheet has no Layout section. Positions come from the lamp and switch names in Stern's service manual, matched to the photo by eye. The manual calls the center ramp LT Ramp; that reading is mine.")},
 {t:"Left side",h:["left_orbit","pops","kiss_tg","star"],b:"<p>The left orbit, the four pop bumpers, the KISS target bank along the KISS panel, and the arrow into the Starchild mini play area.</p>"},
 {t:"Starchild mini play area",h:["star_tg","saucer","starchild","star_drop","amp"],b:"<p>The upper left holds the Starchild figure, the four STAR targets and a hidden saucer. STAR target hits build Love Gun Multiball.</p><p class=\"fine\" data-ed=\"premium\">The Premium and LE add the Starchild drop target and an amplifier.</p>"+UNK("The STAR targets and saucer are not visible in the photos; they are placed from Stern's manual.")},
 {t:"Center",h:["center_ramp","scoop","demon","demon_ins","lock_tg","lock_ins"],b:"<p>The center ramp, the Backstage Pass scoop, the Demon shot under Gene's head with the DEMON letters around it, and the two green lock targets either side of the Demon.</p>"},
 {t:"Right side",h:["right_ramp","lg_ins","right_orbit","spinner","army_tg","army_ins"],b:"<p>The right ramp with the Love Gun insert below it, the right orbit with the spinner, and the ARMY target bank.</p>"},
 {t:"The grid",h:GRID.concat(["band_ins"]),b:"<p>The 16-light grid in the middle of the playfield pays homage to the original KISS: sets of KISS targets, ARMY targets, band members (pop bumpers) and instruments. Below it are the Starchild, Spaceman, Demon and Catman inserts.</p>"+UNK("Which grid row is pop bumpers and which is instruments is my reading of the art.")},
 {t:"Inlanes and outlanes",h:LANES.concat(["front_row","lite_bumper","combo_l","combo_r"]),b:"<p>Two left inlanes and one right inlane. The leftmost left inlane lights bumper upgrades, the inside left inlane lights the Army Combo, and the right inlane lights the KISS Combo. The left outlane has the Front Row kickback light.</p>"},
 {t:"Pro hardware",ed:"pro",h:["kiss_tg","demon","starchild","right_ramp"],b:"<p>From Stern's features list: the Pro has a KISS standup bank, a static Starchild figure, a Demon trough that feeds balls through the head and out of the mouth (no physical lock), and a right ramp that feeds the right wire ramp.</p>"},
 {t:"Premium and LE hardware",ed:"premium",h:["kiss_tg","star_drop","amp","demon","right_ramp","starchild"],b:"<p>From Stern's features list: the Premium and LE have a KISS drop target bank, the Starchild drop target, an amplifier, an animated Starchild, a three-ball Demon lock, and a right ramp diverter that feeds the Starchild ball levitation for Love Gun Multiball.</p>"}
]},
{g:"Layout and basics",id:"basics",title:"Songs, skill shot and kickback",steps:[
 {t:"Choosing songs",h:["scoop"],b:"<p>At the start of a ball you choose a song (mode). You must finish a song before you can pick another. Progress carries over from ball to ball, but scoring on each song resets between balls.</p><p>After finishing a song, shoot the scoop (New Track) to choose one you have not played. A finished song cannot be picked again.</p>"+UNK("The rulesheet says you can sometimes change songs on the next plunge after a drain without finishing one, and does not know what decides this.")},
 {t:"Skill shot",h:["right_orbit","left_orbit"],b:"<p>There is no skill shot in current code. If a plunge triggers the right loop switch and falls back, you get any right loop awards. The same works for the left loop with a soft enough plunge.</p>"},
 {t:"Front Row kickback",h:["kiss_tg","front_row","left_out"],b:"<p>Spell KISS on the left target bank to light Front Row in the left outlane. It saves your next left outlane drain. Each use needs more KISS completions.</p>"}
]},
{g:"Layout and basics",id:"combos",title:"Target combos and hurry-ups",steps:[
 {t:"Lighting a target combo",h:["inlane_r","right_in","combo_l","combo_r"],b:"<p>In normal play, the inside left inlane lights the Army Combo and the right inlane lights the KISS Combo.</p>"},
 {t:"Collecting it",h:["kiss_tg","army_tg"],b:"<p>Shoot the flashing target to complete the bank at once and raise the bonus multiplier.</p>"},
 {t:"Hurry-ups",h:["center_ramp","left_orbit","army_tg","kiss_tg"],b:"<p>Completing ARMY starts a hurry-up at the center ramp. Completing KISS starts one at the left orbit. The first is worth 1M base and each later one more.</p>"},
 {t:"Shot multiplier",h:alt(MAJ),b:"<p>Complete both the KISS and ARMY hurry-ups and all shots light white: the next shot you make scores 2x for the rest of the ball. Do it again on the same ball to set 2x on another shot. This repeats for all shots.</p>"}
]},
{g:"Layout and basics",id:"bumpers",title:"Bumpers and instruments",steps:[
 {t:"Bumper awards",h:["inlane_l","lite_bumper","right_orbit","pops"],b:"<p>Roll over the leftmost left inlane to light one of four lights on the right orbit. Shoot the right orbit to advance the matching pop bumpers: red (13k a hit, against 10k standard), then green (16k), then purple (20k).</p><p>The center ramp feeds that inlane, so it is the easy way to build bumpers.</p>"},
 {t:"Bumpers toward the wizard modes",h:["pops","band_ins"],b:"<p>Lighting all four pop bumpers once starts the Catman insert flashing (KISS Army). All four purple lights Catman solid (Rock City).</p>"},
 {t:"Collecting instruments",h:["right_ramp","star","center_ramp","demon","left_orbit"],b:"<p>The right ramp lights an instrument at one of four shots: STAR targets (Starchild's guitar), center ramp (Spaceman's guitar), Demon (bass) or left orbit (drums). They are not timed, and on default settings you can light all four by repeating the right ramp.</p>"},
 {t:"Instrument rewards",h:["scoop","band_ins","grid_inst"],b:"<p>A set number of instruments (adjustable) lights extra ball at the scoop. Six instruments start the Spaceman insert flashing (KISS Army); twelve light it solid (Rock City).</p>"}
]},
{g:"Layout and basics",id:"backstage",title:"Backstage Pass",steps:[
 {t:"Lighting it",h:["kiss_tg","army_tg","scoop"],b:"<p>Complete both the KISS and ARMY targets to light Backstage Pass at the scoop. It is a mystery award and cannot be stacked.</p>"+UNK("After the first completion of each, the grid stays solid for KISS and ARMY, so the rulesheet says it is hard to tell which bank you need next.")},
 {t:"Awards",h:["scoop"],b:"<ul><li>Add-A-Ball (first award during any multiball, once the ball save ends)</li><li>2 Million + Light Backstage Pass (during multiball while the ball save is on)</li><li>Shot Multipliers Lit</li><li>Super Ramps (ramp combos score double)</li><li>Super Spinner (spinner combos score double)</li><li>Super Targets</li><li>Super Bumpers</li><li>Super Scoring</li><li>Bonus X</li><li>Hold Bonus</li></ul>"}
]},
{g:"Layout and basics",id:"cities",title:"City Combos",steps:[
 {t:"How they work",h:alt(["center_ramp","right_ramp","left_orbit","scoop","star","demon","right_orbit"]),b:"<p>Fifteen City Combos are made by shooting certain shots in a row. Each scores 1M times the number of shots in it. On default settings, five City Combos light extra ball.</p>"},
 {t:"Two-way",h:NUM(["center_ramp","right_ramp"]),b:"<ul><li>Chicago: center ramp, right ramp</li><li>Pittsburgh: right ramp, center ramp</li><li>Seattle: left orbit, Backstage Pass scoop</li><li>Portland: left orbit, STAR targets</li></ul>"},
 {t:"Three-way",h:NUM(["right_ramp","center_ramp","demon"]),b:"<ul><li>Los Angeles: right ramp, center ramp, Demon</li><li>Houston: right ramp, center ramp, right orbit</li><li>New Orleans: center ramp, right ramp, left orbit</li><li>Atlanta: center ramp, right ramp, Backstage Pass scoop</li><li>Orlando: center ramp, right ramp, STAR targets</li></ul>"},
 {t:"Four-way",h:NUM(["center_ramp","right_ramp","left_orbit","scoop"]),b:"<ul><li>Mexico City: center ramp, right ramp, left orbit, Backstage Pass scoop</li><li>Tokyo: center ramp, right ramp, left orbit, STAR targets</li><li>London: center ramp, right ramp, center ramp, right ramp</li><li>New York: right ramp, center ramp, right ramp, center ramp</li></ul>"},
 {t:"Five and ten-way",h:NUM(["center_ramp","right_orbit"]),b:"<ul><li>San Francisco: center ramp four times, then right orbit</li><li>Detroit: center ramp and right ramp alternating, ten shots, starting with the center ramp. The rulesheet says good luck.</li></ul>"}
]},
{g:"Layout and basics",id:"mult",title:"Multipliers",steps:[
 {t:"Combo multiplier",h:alt(MAJ),b:"<p>Any shot makes certain other shots flash rapidly. Hit one of them in combo for twice that shot's score.</p>"},
 {t:"Playfield multiplier",h:["mult_ins"],b:"<p>Finishing a song starts an untimed playfield multiplier for the rest of the ball (default settings): 2x, then 3x, 5x and 10x for each further song finished that ball.</p><p>Both the 2x and 3x inserts lit means 5x.</p>"},
 {t:"Demon playfield multiplier",h:["demon","lock_tg"],b:"<p>Locking one or two balls in the Demon during Demon Multiball gives 2x or 3x playfield for 20 seconds.</p>"},
 {t:"Stacking",h:["mult_ins"],b:"<p>The playfield multipliers add: 5x song plus 2x Demon is 7x. Shot and playfield multipliers multiply: 3x playfield with a 2x shot is 6x. The rulesheet gives 52x as the most on one shot (13x playfield, 2x shot, 2x combo).</p>"}
]},
/* ====== SONGS ====== */
{g:"Songs",id:"songs",title:"How songs work",steps:[
 {t:"Song modes",h:alt(MAJ),b:"<p>Each song is a mode with its own music. Songs are untimed. Most need about 8 to 10 lit or flashing arrows; one uses the flashing KISS targets.</p><p>Songs can be stacked with multiballs and wizard modes, but the song has to start first. A partly finished song keeps its shot count if you pick it again.</p>"},
 {t:"Finishing a song",h:["mult_ins","scoop"],b:"<p>In code 1.40.0, finishing a song awards an untimed 2x, 3x, 5x or 10x playfield multiplier for the rest of the ball, rising with each song finished that ball. Then shoot the scoop for a new track.</p>"+UNK("Stern's features list says the game has 10 KISS tracks. The rulesheet describes eight songs; the other two are not documented yet.")}
]},
{g:"Songs",id:"deuce",title:"Deuce",steps:[
 {t:"Crossing the playfield",h:NUM(["left_orbit","star"]).concat(alt(["center_ramp","demon","right_ramp","right_orbit"])),b:"<p>Two shots light, starting with the left orbit and STAR targets. Each lit shot made moves the pair one shot to the right (center ramp, Demon, right ramp, then right orbit).</p>"+UNK("The rulesheet notes that the unlit shot just left of the lit pair also counts.")},
 {t:"Strobe and finish",h:alt(MAJ),b:"<p>After crossing once, two shots strobe back and forth. Each lit shot made speeds up the strobe. Make the final strobe shot to finish. Shots are worth 300k times shots made, up to 2.4M.</p>"}
]},
{g:"Songs",id:"hotter",title:"Hotter Than Hell",steps:[
 {t:"Targets, then a shot",h:["kiss_tg"].concat(alt(MAJ)),b:"<p>Alternate between the flashing KISS targets and the random major shot they light. The lit shot relights the KISS targets. Eight shots finish it.</p>"},
 {t:"Scoring",h:["kiss_tg"],b:"<p>KISS targets score 250k times shots made, and the shots score double: up to 1.75M for the last set of targets and 4M for the last shot.</p>"}
]},
{g:"Songs",id:"lickitup",title:"Lick It Up",steps:[
 {t:"Neighboring pairs",h:NUM(["left_orbit","star","center_ramp","demon","right_ramp"]),b:"<p>Two neighboring shots light: left orbit and STAR targets, STAR targets and center ramp, center ramp and Demon, or Demon and right ramp. A lit shot moves the pair. Eight shots finish it, at 250k times shots made, up to 2M on the last.</p>"}
]},
{g:"Songs",id:"shout",title:"Shout It Out Loud",steps:[
 {t:"Shot order",h:NUM(["center_ramp","left_orbit","right_orbit","star","right_ramp","demon"]),b:"<p>Shoot the center ramp, then the orbits, then the STAR targets, right ramp and Demon.</p>"+UNK("Scoring is not documented yet; the rulesheet shows a question mark. It also does not say whether both orbits are needed or in what order.")}
]},
{g:"Songs",id:"detroit",title:"Detroit Rock City",steps:[
 {t:"All shots lit",h:NUM(MAJ),b:"<p>All shots light at the start and go out as you make them. The leftmost lit arrow flashes and is worth double.</p>"},
 {t:"Finishing",h:alt(MAJ),b:"<p>After the first six shots, they all relight; make three more to finish. Each shot is worth 200k times shots made. The final shot is 1.8M solid or 3.6M flashing.</p>"}
]},
{g:"Songs",id:"rnr",title:"Rock & Roll All Night",steps:[
 {t:"Opening",h:NUM(["center_ramp","right_orbit"]),b:"<p>Shoot the center ramp to light the right loop, then shoot the right loop.</p>"},
 {t:"Alternating sides",h:alt(["left_orbit","star","right_orbit","right_ramp","center_ramp","demon"]),b:"<p>The right loop lights the two leftmost shots (left loop and STAR targets). One of those lights the two rightmost shots (right loop and right ramp). One of those lights the three leftmost shots (adding the center ramp). Then three more shots alternate sides, with the Demon added on the right.</p><p>Each shot is worth 500k times shots made, up to 4M on the last.</p>"}
]},
{g:"Songs",id:"loveitloud",title:"Love It Loud",steps:[
 {t:"Phase 1",h:NUM(["left_orbit","right_orbit"]),b:"<p>Both orbits are lit at the start. Hit both to light the other four shots.</p>"},
 {t:"Phase 2",h:alt(["star","center_ramp","demon","right_ramp"]),b:"<p>Hitting one of the four unlights it, leaving three. Hit one of the three and the shot before relights, so three are always lit. Eight Phase 2 shots finish it.</p>"+UNK("Scoring is not documented yet.")}
]},
{g:"Songs",id:"blackdiamond",title:"Black Diamond",steps:[
 {t:"Into the pops",h:["right_orbit","pops"],b:"<p>Shoot the right orbit to collect a value and send the ball into the pop bumpers. The pop hits pick the next lit shot.</p>"},
 {t:"Lit shots",h:alt(MAJ),b:"<p>Shoot the lit shot, even repeatedly, for eight shots in total. The rulesheet says landing on the center ramp is the lucky draw. Each shot is worth 300k times shots made, up to 2.4M.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"demon_mb",title:"Demon Multiball",steps:[
 {t:"Lighting locks",h:["lock_tg","demon","demon_ins","lock_ins"],b:"<p>Complete the two green lock targets, or spell DEMON by shooting the Demon while Lock is not lit (each also adds 500k to the jackpot), to light Lock at the Demon.</p>"},
 {t:"Locking balls",h:["demon"],b:"<p>Locks can be physical or virtual; a virtual lock ejects the ball from Gene's mouth. For the first multiball, lit locks can be stacked. Three locks start Demon Multiball, which also starts the Demon insert flashing for KISS Army.</p><p class=\"fine\" data-ed=\"pro\">Stern's features list shows no physical Demon lock on the Pro, so locks there are presumably virtual. The rulesheet does not say.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>All major shots are lit for the Jackpot, but each shot can be used only twice before the Double Jackpot. Five Jackpots make the next lit shot a Super Jackpot.</p>"},
 {t:"Double and Double Super",h:["demon","band_ins"].concat(alt(MAJ)),b:"<p>Two Super Jackpots light a strobing shot for the Double Jackpot. Make it to light the Double Super Jackpot at the Demon. Collecting it lights the Demon insert solid for Rock City.</p>"},
 {t:"Ball hold and multiplier",h:["lock_tg","demon"],b:"<p>During the multiball, both lock targets light the Demon for a 20-second ball hold (depending on settings) and a playfield multiplier: one ball held is 2x, completing the targets again and holding a second is 3x. The held balls come out of the VUK when the multiplier ends.</p>"},
 {t:"Gene's spit",h:["demon"],b:"<p>Gene can spit a ball straight down the middle. Single-ball play has a short ball save for this (adjustable).</p>"+UNK("The rulesheet warns that during multiball the ball save insert may flash when Gene spits a ball, but you do not get the ball back unless the operator turned that setting on.")},
 {t:"Later Demon Multiballs",h:["lock_tg","demon"],b:"<p>The second Demon Multiball does not allow lock stacking. The third needs two completions of the lock targets to light each lock.</p>"}
]},
{g:"Multiballs",id:"lovegun",title:"Love Gun Multiball",steps:[
 {t:"Qualifying",h:["star_tg","right_ramp","lg_ins","saucer"],b:"<p>Hit the STAR targets in the Starchild mini play area to fill the progress bar. Each Love Gun Multiball needs more hits than the last. When it is qualified, the right ramp's purple insert lights; start it with a right ramp shot or a lucky bounce into the Starchild saucer.</p>"},
 {t:"Third ball (Premium and LE)",ed:"premium",h:["star_drop","starchild"],b:"<p>It starts as a 2-ball multiball with one ball held captive behind the Starchild drop target. Hit the drop target to collect a Love Gun hurry-up, set the jackpot value and add the third ball. If the hurry-up runs down first, it stays a 2-ball multiball.</p>"},
 {t:"Third ball (Pro)",ed:"pro",h:["star_tg"],b:"<p>It starts with two balls in play during the hurry-up, however you started it. Hit one of the STAR standups to collect the hurry-up and add the third ball. The rulesheet calls this harder than the Premium and LE.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>After the hurry-up, all shots are lit for a Jackpot. Make one and that shot becomes the only one lit, for a Double Jackpot. Complete all the Jackpot and Double Jackpot shots to light the right ramp for a Triple Jackpot.</p>"},
 {t:"Super Jackpot",h:["right_ramp","star_tg","band_ins"],b:"<p>The Triple Jackpot at the right ramp lights the Super Jackpot at the Starchild shot. Any STAR target scores it (50M base). It lights the Starchild insert solid for Rock City; starting the multiball sets it flashing.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"heavens",title:"Heaven's on Fire",steps:[
 {t:"Lighting it",h:GRID.concat(["scoop"]),b:"<p>A mini-wizard mode. Complete all 16 grid lights (KISS, ARMY, pop bumpers and instruments) twice to light it at the scoop. The operator can lower this to once. Normal settings carry the grid over between balls.</p>"},
 {t:"Filling the grid again",h:["kiss_tg","army_tg","right_ramp","right_orbit","pops"].concat(alt(["star","center_ramp","demon","left_orbit"])),b:"<p>Complete the KISS and ARMY banks, shoot the four lit instrument shots (the right ramp spots one too), and shoot the right orbit into the pop bumpers.</p>"},
 {t:"Super Jackpot",h:["scoop","star_tg"],b:"<p>With the grid complete, shoot the scoop for a Super Jackpot. Completing the STAR targets collects an Add-A-Ball, once per Super Jackpot.</p>"}
]},
{g:"Wizard modes",id:"band",title:"Band member inserts",steps:[
 {t:"Flashing and solid",h:["band_ins"],b:"<p>Light all four band member inserts flashing for KISS Army, or solid for Rock City. Both start at the scoop.</p><ul><li>Spaceman: 6 instruments flashing, 12 solid</li><li>Starchild: start Love Gun Multiball flashing, its Super Jackpot solid</li><li>Demon: start Demon Multiball flashing, its Double Super Jackpot solid</li><li>Catman: light all four bumpers flashing, all four purple solid</li></ul>"}
]},
{g:"Wizard modes",id:"kissarmy",title:"KISS Army",steps:[
 {t:"Starting",h:["band_ins","scoop"],b:"<p>With all four inserts flashing, KISS Army lights at the scoop. Shoot it to start KISS Army Multiball.</p>"},
 {t:"Jackpots",h:alt(["left_orbit","star","center_ramp","right_ramp","right_orbit"]).concat(["demon"]),b:"<p>All shots except the Demon are lit for a jackpot. After each one, the Demon lights for a Double Jackpot; hitting it relights the shots not yet made.</p>"},
 {t:"Super Jackpot",h:["demon","scoop"],b:"<p>Complete all the shots and Double Jackpots to light the Demon for a Super Jackpot, worth the sum of your Double Jackpots. A lit mystery at the scoop for Add-A-Ball also works here.</p>"}
]},
{g:"Wizard modes",id:"rockcity",title:"Rock City",steps:[
 {t:"Starting",h:["band_ins","scoop"],b:"<p>With all four inserts solid, Rock City lights at the scoop. It is an untimed, multi-phase multiball. Each phase finished adds a ball with a short ball save. It continues in single-ball play after you drain to one ball, possibly timed then.</p>"},
 {t:"Phase 1: instruments",h:NUM(["star","center_ramp","demon","left_orbit"]),b:"<p>Collect each of the four instrument shots.</p>"},
 {t:"Phase 2: KISS ARMY",h:["kiss_tg","army_tg"],b:"<p>Spell KISS ARMY on the target banks.</p>"},
 {t:"Phase 3: KISS Towers",h:["pops"],b:"<p>Hit the pop bumpers 25 times.</p>"},
 {t:"Phase 4: DEMON",h:["demon","demon_ins"],b:"<p>Spell DEMON by shooting the Demon five times.</p>"},
 {t:"Phase 5: Starchild",h:["star_tg"],b:"<p>Hit the Starchild targets 16 times.</p>"},
 {t:"Phase 6: spinner",h:["spinner","right_orbit"],b:"<p>Get 25 spins.</p>"},
 {t:"Phase 7 and the end",h:[],b:"<p>Not documented yet. The rulesheet lists phase 7 as \"??\" and guesses that finishing all phases lights a Super Jackpot worth the sum of the phase jackpots.</p>"}
]}
];

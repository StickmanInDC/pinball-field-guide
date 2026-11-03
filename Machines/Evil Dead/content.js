/* ---------- playfield features (coordinates in the 1100x2300 frame of Spooky's playfield render, perspective-corrected to look straight down) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- left side ---- */
 hand:{n:"Evil Ash hand",c:1,s:[R(10,860,120,290)],a:[65,1000],x:"The severed hand under the WARNING EVIL HAND sign. Spooky's flyer calls it a stepper driven Evil Ash Hand; the switch chart has a Hand Hit switch."},
 lorbit:{n:"Left orbit",c:0,s:[B([[145,1180],[142,1000],[130,850],[105,700],[85,540],[75,380],[100,250]],18)],a:[135,900],x:"My reading of the lane at the far left, behind the Dagger and Blood Flood inserts. Spooky's release notes say the inlanes light the opposite orbit to boost the Dagger multiplier, which is why I take this lane to be the left orbit."},
 lorbins:{n:"Left orbit inserts",c:0,s:[E(140,850,22,30),E(140,930,22,30),C(148,1000,22),C(155,1055,22),C(160,1110,20)],a:[145,980],x:"Two arrows, then the DAGGER, BLOOD FLOOD and SUPER inserts."},
 lramp:{n:"Left ramp (Delta 88)",c:0,s:[B([[240,1010],[236,880],[222,720],[195,540],[170,390],[195,280],[260,235]],26)],a:[232,800],x:"The plank bridge ramp with the yellow Delta 88 car on it. Spooky's release notes add a Delta 88 mode qualified by 88 left ramp shots, so I read this as the left ramp. Its entrance is my estimate."},
 groovy:{n:"GROOVY targets",c:1,s:[C(265,1310,20),C(265,1355,20),C(265,1400,20),C(265,1442,20),C(265,1487,20),C(265,1530,20)],a:[265,1420],x:"The G-R-O-O-V-Y column on the left. Spooky's flyer calls them six inline GROOVY drop targets."},
 /* ---- center ---- */
 shotgun:{n:"Shotgun shells",c:1,s:[C(397,1085,24),C(440,1085,24)],a:[418,1085],x:"The two shell sculpts at the end of the shotgun barrels. Spooky's flyer calls them individual shotgun shell bash sculpts loading into the double barrel; the switch chart has Shotgun Left and Shotgun Right switches."},
 boomins:{n:"Boom Stick inserts",c:1,s:[C(410,1150,16),C(455,1150,16)],a:[432,1150],x:"The BOOM STICK 1 and 2 inserts below the shells."},
 ldeadite:{n:"Left deadite (Evil Scotty)",c:1,s:[R(295,1150,95,110)],a:[342,1205],x:"The wooden hatch near BOOM STICK. Spooky's flyer shows Evil Scotty popping up from it; the switch chart has Left and Right Deadite switches."},
 rdeadite:{n:"Right deadite (Evil Ed)",c:1,s:[R(718,1215,95,115)],a:[765,1272],x:"The second wooden hatch. Spooky's flyer lists an Evil Ed pop-up bash toy; I take this hatch to be his because Scotty's is on the left."},
 deaditeins:{n:"Deadite inserts",c:1,s:[C(420,1375,28),C(745,1400,28)],a:[420,1375],x:"DEADITE MULTIBALL under the left hatch and DEADITE FRENZY under the right one."},
 spinner:{n:"Spinner lane",c:0,s:[B([[480,1000],[478,900],[470,780]],30)],a:[478,900],x:"The lane behind the SPINNER arrow. The spinner itself is hidden in the render."},
 spinins:{n:"Spinner arrow",c:1,s:[E(480,950,24,38)],a:[480,950]},
 captive:{n:"Necronomicon captive ball",c:0,s:[R(505,680,95,75),C(545,795,24)],a:[545,770],x:"My reading of the center lane up to the Book of the Dead sign. Spooky's flyer lists a Necronomicon insanity inducing captive ball; the switch chart has a Captive Ball switch and a Middle VUK."},
 sanityins:{n:"Sanity inserts",c:1,s:[R(515,925,85,95),C(550,1035,30)],a:[555,975],x:"SANITY LAUGHING, SANITY MIRROR and MIRROR, in the center lane."},
 cellar:{n:"Cellar door (trap door)",c:1,s:[R(500,1045,150,135)],a:[575,1112],x:"The wooden door in the middle. Spooky's flyer calls it a multi-functional cellar door with rising Evil Cheryl bash targets and the entrance to the lower playfield."},
 liftbank:{n:"Cellar targets",c:0,s:[R(505,1180,140,32)],a:[575,1196],x:"Not visible in the render. The rulesheet says the targets raise from under the cellar; the switch chart lists Lift Bank Left, Middle and Right. Placed in front of the door."},
 cherylins:{n:"Cheryl Multiball insert",c:1,s:[E(480,1270,45,35)],a:[480,1270]},
 cellarins:{n:"Cellar Open insert",c:1,s:[E(575,1255,38,30)],a:[575,1255]},
 henins:{n:"Henrietta Multiball insert",c:1,s:[E(662,1270,45,35)],a:[662,1270]},
 /* ---- upper playfield ---- */
 pops:{n:"Pop bumpers",c:0,s:[E(380,600,100,90)],a:[380,600],x:"Mostly hidden under the wire ramps in the render, so this is only the area. Spooky's flyer lists a 180 ramp feeding a Deadite pop cluster with Blood Flood standup targets."},
 cabin:{n:"Cabin",c:1,s:[R(460,170,560,480)],a:[740,400],x:"The cabin at the top right. Spooky's flyer calls it a full scale physical cabin multiple ball lock with a VUK through the window and a swinging motorized porch swing ball release."},
 cabinlane:{n:"Cabin lane",c:0,s:[B([[720,1000],[720,880],[714,760],[705,660]],28)],a:[720,880],x:"My reading of the lane behind the CABIN IN THE WOODS arrow, up to the front of the cabin."},
 cabinins:{n:"Cabin in the Woods arrow",c:1,s:[E(722,965,25,40)],a:[722,965]},
 cabindrop:{n:"Cabin drop target",c:0,s:[R(690,690,60,22)],a:[720,700],x:"Not visible. The switch chart lists Cabin Front Drop and Cabin Back Drop switches. Placed at the top of the cabin lane."},
 modeins:{n:"Mode inserts",c:1,s:[R(400,20,215,315)],a:[507,170],x:"On the backboard: HERO FROM THE SKY, then Evil Awakens, Hacked to Bits, It Won't Let Us Leave and Undying Love on the left, and Chased by Evil, Hello Lover, Give Me Back My Hand and Evil Ash on the right."},
 /* ---- right side ---- */
 rramp:{n:"Right ramp (lift ramp)",c:0,s:[B([[800,1090],[830,980],[880,860],[945,760]],34)],a:[855,940],x:"The clear ramp with tree art. Spooky's flyer lists a ball entering and releasing lift ramp, and the servo list has a Right Ramp, so I read this as the right ramp. The entrance is my estimate."},
 rrscoop:{n:"Scoop under the right ramp",c:0,s:[C(800,1112,22)],a:[800,1112],x:"Not visible. The rulesheet says to shoot under the right ramp to start modes; the switch chart has a Right Ramp Scoop. Placed at the ramp's entrance."},
 necklace:{n:"Necklace targets",c:0,s:[R(605,940,32,45),R(686,1105,26,42),R(786,1105,26,42)],a:[700,1100],x:"My guess. The rulesheet places the necklace standups on the right and the switch chart lists Necklace Left, Center and Right. These are the three yellow-green standups right of the cellar."},
 rorbit:{n:"Right orbit",c:0,s:[B([[880,1250],[905,1150],[960,1000],[1010,850],[1030,650],[1022,450]],18)],a:[940,1080],x:"My reading of the lane behind the Dagger, Extra Ball and Mystery inserts, up the right side."},
 rorbins:{n:"Right orbit inserts",c:1,s:[C(890,1215,22),C(858,1262,22),C(830,1320,22)],a:[860,1265],x:"DAGGER, EXTRA BALL and MYSTERY."},
 linda:{n:"Linda's head",c:1,s:[R(960,1290,90,130)],a:[1000,1355],x:"Spooky's flyer calls it a good/evil rotating Linda head in a vice."},
 lindascoop:{n:"Linda scoop",c:0,s:[C(925,1415,22)],a:[925,1415],x:"The rulesheet puts the Good Linda/Bad Linda scoop on the right. Placed below Linda's head, where the Good and Bad Linda inserts point; the scoop itself is not visible."},
 lindains:{n:"Good and Bad Linda inserts",c:1,s:[E(845,1475,45,45)],a:[845,1475]},
 /* ---- fruit cellar ---- */
 lower:{n:"Fruit cellar lower playfield",c:1,s:[R(385,1425,265,340)],a:[517,1595],x:"The window in the middle. Spooky's flyer calls it the RGB lit fruit cellar lower playfield, escaped by completing tasks."},
 lowerflip:{n:"Lower playfield flipper",c:0,s:[B([[425,1688],[475,1718]],14)],a:[450,1703]},
 lockload:{n:"Lock and Load insert",c:1,s:[E(435,1515,32,20)],a:[435,1515],x:"The switch chart lists a Lock and Load switch on the lower playfield. Its target is my guess, near this insert."},
 pages:{n:"Collect Necronomicon Pages",c:0,s:[C(565,1548,34)],a:[565,1548],x:"The center of the lower playfield. The switch chart lists a lower Book Target and a Lower Playfield Loop; I could not place them."},
 /* ---- lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[362,2010],[465,2065]],22)],a:[410,2035]},
 rflip:{n:"Right flipper",c:1,s:[B([[675,2010],[575,2065]],22)],a:[628,2035]},
 slingflip:{n:"Hidden sling flipper",c:0,s:[E(720,1880,70,60)],a:[720,1880],x:"Spooky's flyer lists a hidden sling flipper, and the switch chart has a Sling Flipper switch but only a left sling. My guess is that it sits in the right slingshot; this marks the area only."},
 lsling:{n:"Left slingshot",c:0,s:[E(272,1840,50,100)],a:[272,1840]},
 loutlane:{n:"Left outlane",c:0,s:[B([[100,1650],[102,1860]],14)],a:[100,1760]},
 lmidlane:{n:"Left midlane",c:0,s:[B([[165,1650],[168,1860]],14)],a:[165,1760],x:"The switch chart lists a left outlane, midlane and inlane. Lane positions are my estimate."},
 linlane:{n:"Left inlane",c:0,s:[B([[220,1700],[228,1900]],14)],a:[222,1800]},
 rinlane:{n:"Right inlane",c:0,s:[B([[825,1640],[822,1860]],14)],a:[825,1750]},
 routlane:{n:"Right outlane",c:0,s:[B([[882,1640],[884,1860]],14)],a:[882,1750]},
 ballsave:{n:"Ball Save inserts",c:1,s:[E(110,1772,26,22),E(890,1745,26,40)],a:[110,1772]},
 shooter:{n:"Shooter lanes",c:0,s:[B([[945,2150],[945,1700]],20),B([[1015,2150],[1015,1700]],20)],a:[980,1950],x:"Spooky's flyer lists a double barrel Boom Stick multiball dual shooter lane, and the switch chart has Left and Right Shooter Lane switches. These are the two blue lanes with the 1 to 4 inserts."},
 tape:{n:"Tape deck",c:1,s:[R(800,2040,210,150)],a:[905,2115],x:"Spooky's flyer calls it a flasher lit vintage tape deck with rotating reels and Professor Knowby recordings. The rulesheet does not use it."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var MAJ=["lorbit","lramp","spinner","rramp","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers",h:["lflip","rflip","slingflip","lowerflip"],b:"<p>Two flippers at the bottom. Spooky's flyer also lists a hidden sling flipper, and the fruit cellar lower playfield has a flipper of its own.</p>"+UNK("The rulesheet has no layout section. The picture is a render of a prototype playfield, and most shot positions here are my estimates from it, Spooky's flyers and the switch chart.")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>Left to right: the left orbit, the left ramp, the spinner, the right ramp and the right orbit.</p>"+UNK("The rulesheet does not define a set of major shots. This list is my reading of the playfield.")},
 {t:"Left side",h:["hand","lorbit","lorbins","lramp","groovy"],b:"<p>The Evil Ash hand sits at the far left beside the left orbit. The left ramp carries the Delta 88 car. The six GROOVY targets run down the left side of the center.</p>"},
 {t:"Center",h:["shotgun","boomins","ldeadite","rdeadite","spinner","captive","cellar","liftbank"],b:"<p>The shotgun shells sit left of center, with a deadite hatch on each side. In the middle are the spinner, the Necronomicon captive ball and the cellar door, which leads down to the lower playfield. Targets rise out of the cellar in some modes.</p>"},
 {t:"Upper playfield",h:["pops","cabin","cabinlane","cabindrop","modeins"],b:"<p>The pop bumpers are at the upper left, under the wire ramps. The cabin at the top right is a ball lock, reached up the cabin lane past a drop target. The mode inserts are on the backboard.</p>"},
 {t:"Right side",h:["rramp","rrscoop","necklace","rorbit","rorbins","linda","lindascoop"],b:"<p>The right ramp is a lift ramp, with a scoop underneath that starts modes. The necklace standups are right of the cellar. The right orbit runs up the right side, and Linda's head turns in its vice above the scoop on the right.</p>"},
 {t:"Fruit cellar",h:["lower","lowerflip","lockload","pages"],b:"<p>The lower playfield under the window in the middle. The rulesheet calls it the basement or the lower playfield; the ball reaches it through the cellar door.</p>"+UNK("The rulesheet mentions a loop and a Lock and Load shot down here but does not say where they are.")},
 {t:"Lanes",h:["loutlane","lmidlane","linlane","rinlane","routlane","ballsave","shooter"],b:"<p>Three lanes on the left (outlane, midlane, inlane), an inlane and outlane on the right, and two shooter lanes.</p>"}
]},
{g:"Layout and basics",id:"movie",title:"Choosing a movie",steps:[
 {t:"Pick a movie",h:["modeins"],b:"<p>At the start of the game you pick between the two movies, which sets the modes you can play. The rulesheet's Movie 1 modes match the left column of mode inserts and its Movie 2 modes match the right column.</p>"+UNK("The rulesheet does not say how the movie is chosen, or name the movies. The column match is my reading of the inserts.")}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill Shot",h:["groovy","shooter"],b:"<p>A flashing shot roves over the GROOVY targets. Plunge to hit the lit one; the plunger usually sends the ball to one of the two O targets. The rulesheet gives the value as \"1M + 500k per skill shot\".</p>"},
 {t:"Super Skill Shot",h:["shooter","lflip"],b:"<p>Hold the left flipper and the plunger fires at reduced power to the left flipper. Hit the random flashing shot within 5 seconds for 2x the skill shot value.</p>"+UNK("The rulesheet does not list which shots can flash.")}
]},
/* ====== MODES ====== */
{g:"Modes",id:"modes",title:"Lighting and starting modes",steps:[
 {t:"Light a mode",h:NUM(["lramp","rramp"]),b:"<p>Shoot the ramps (lit white) to light a mode. The first mode needs one ramp; after each completed mode, the next start needs one more ramp.</p>"+UNK("The rulesheet says \"the ramps\" without naming them. I highlight the left and right ramps; the switch chart also lists a Middle Ramp that I could not place.")},
 {t:"Pick the mode",h:["captive"],b:"<p>If more than one mode is available, the captive ball changes which one will start. Press the Action Button to start qualifying a different mode: this closes the right ramp, and the next mode is qualified with more ramp shots.</p>"},
 {t:"Start",h:["rrscoop","rramp"],b:"<p>Shoot under the right ramp to start the mode.</p>"},
 {t:"Structure",h:["modeins"],b:"<p>Each movie has four modes, and each mode has two phases. Completing two modes leads to a mini-wizard mode and completing all four to a wizard mode (see Wizard modes).</p>"}
]},
{g:"Modes",id:"movie1",title:"Movie 1 modes",steps:[
 {t:"Evil Awakens",h:["liftbank","cellar"],b:"<p>Targets rise from under the cellar, one lit at a time, moving left to right. After four lit targets, shoot the cellar within 10 seconds to start a 30-second frenzy: red shots score jackpots as you escape from Cheryl. Every four jackpots lights the cellar for a super jackpot and resets the timer.</p><p>Reaching the frenzy completes the mode; it ends when time runs out.</p>"},
 {t:"Hacked to Bits",h:["groovy","necklace"],b:"<p>The GROOVY drops and the necklace targets are lit to hack for small points. Hit 5 of any target to start a 30-second frenzy: alternate between the left and right banks for hacks, or super hacks on targets not yet made.</p><p>Reaching the frenzy completes the mode; it ends when time runs out.</p>"},
 {t:"It Won't Let Us Leave",h:["lorbit","lramp","rramp","rorbit","cellar"],b:"<p>Shoot four randomly lit green shots (any orbit or ramp) to navigate the woods and start the frenzy. You then have 20 seconds to score scare jackpots at red shots; when they run out, hide in the cellar for a jackpot built from those shots. Do this 3 more times to complete the mode.</p>"},
 {t:"Undying Love",h:["lramp","rramp","cellar","lower","necklace"],b:"<p>Hit the two ramps to chain up Linda, with a speed bonus for how fast you combo them. Then shoot the cellar and hit the loop on the lower playfield to dig the grave. That starts a 2-ball multiball as Linda comes back to life: red shots score jackpots and the necklace targets raise the jackpot value. The mode is completed when the multiball ends.</p>"+UNK("Where the lower playfield loop is, is not documented.")}
]},
{g:"Modes",id:"movie2",title:"Movie 2 modes",steps:[
 {t:"Hello Lover",h:["spinner","necklace","cellar","ldeadite","rdeadite"],b:"<p>Three phases. First, the spinner makes Linda dance and other shots, including the necklace targets and the blue arrow, raise the value. Then hit the blue shots, then the cellar, then the deadites.</p>"+UNK("The rulesheet's notes for this mode are rough: it says 5 blue shots, then \"I think it's 4, but maybe 5\". Spooky's later release notes add shots that spot spins and a roaming shot that adds time in phase 3.")},
 {t:"Give Me Back My Hand",h:["hand","rramp","cellar"],b:"<p>Phase 1: hit the hand 3 times; the right ramp pauses the hand. Phase 2: hit the trap door for a multiball. Phase 3: shoot jackpots around the playfield, with the super jackpot at the hand. Complete \"Fingers\" to light the super. The rulesheet suggests stacking it with a multiball.</p>"+UNK("I read the trap door as the cellar door. The rulesheet does not explain \"Fingers\". Spooky's release notes make the number of hand hits a setting.")},
 {t:"Chased by Evil",h:["cellar","rrscoop","lindascoop"],b:"<p>Phase 1: complete the blue arrows. Phase 2: shoot green shots to hide (the cellar, under the right ramp, the right scoop). Phase 3: shoot white shots to run from evil; yellow shots boost the value.</p>"},
 {t:"Evil Ash",h:["necklace","liftbank"],b:"<p>Hit red shots to turn them blue, then hit the necklace targets. The trap door targets light the necklace targets.</p>"+UNK("I read the trap door targets as the cellar targets. Spooky's v2025.11.26 notes say Evil Ash was reworked and given a Phase 2; the rulesheet does not cover the rework.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"deadites",title:"Deadites",steps:[
 {t:"Qualify",h:["linlane","rinlane","ldeadite","rdeadite"],b:"<p>Collect the orange deadite arrows, then both inlanes, then hit the popped-up deadites (the rulesheet compares them to the trolls on Medieval Madness) to start Double Deadite Multiball. It stacks with all other modes.</p>"+UNK("The rulesheet does not say which arrows are the deadite arrows.")},
 {t:"Jackpots",h:["ldeadite","rdeadite"],b:"<p>Knock down the deadites and collect the jackpots behind a downed deadite.</p>"},
 {t:"Deadite Frenzy",h:["deaditeins"],b:"<p>The second time through is Deadite Frenzy. The rulesheet suggests stacking it with a multiball.</p>"}
]},
{g:"Multiballs",id:"boomstick",title:"Boom Stick Multiball",steps:[
 {t:"Load the shells",h:["shotgun","boomins","cellar"],b:"<p>Load the shells into the shotgun to qualify. That opens the cellar door.</p>"+UNK("The rulesheet does not say how many shell hits it takes.")},
 {t:"The basement",h:["cellar","lower","lockload"],b:"<p>The cellar leads to the basement, where you have 15 seconds or 3 drains to hit the Lock and Load shot.</p>"},
 {t:"Ready, aim, fire",h:[],b:"<p>Listen for \"ready, aim, fire\" and hit the Launch Button for bonus points.</p>"},
 {t:"Jackpots",h:["shotgun"],b:"<p>Purple shots score jackpots. Load shells to light the Action Button; pressing it lights a new jackpot. In the second phase you can add more balls.</p>"+UNK("The rulesheet does not say which shots are purple.")}
]},
{g:"Multiballs",id:"cabin",title:"Cabin Multiball",steps:[
 {t:"Lock balls",h:["cabindrop","cabinlane","cabin"],b:"<p>Hit the drop target down, then shoot the ball up into the lock mech. Cabin Multiball can steal locks.</p>"+UNK("How many locks start it, and its jackpots, are not documented yet. Spooky's v2025.05.28 notes say the cabin drop targets now keep their state between most modes, balls and players.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"bloodflood",title:"Blood Flood",steps:[
 {t:"Blood Flood",h:["pops","lorbins"],b:"<p>Three targets in the pop bumper area add a playfield scoring multiplier.</p>"+UNK("The three targets are hidden in the render; only the pop area is marked. The rulesheet gives no values or timing.")}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Light it",h:["groovy"],b:"<p>Spell GROOVY to light Mystery.</p>"},
 {t:"Collect it",h:["rorbit","rorbins"],b:"<p>Mystery is lit on the right orbit. Use the Action Button to \"shoot\" the moving award. Awards include points, lit deadite rollovers, a lit outlane ball save, Bad Linda boosts and an extra tilt warning.</p>"}
]},
{g:"Other scoring",id:"linda",title:"Good Linda / Bad Linda",steps:[
 {t:"Turn Linda",h:["lindascoop","linda","lindains"],b:"<p>The scoop on the right rotates Linda back and forth between good and bad. Good Linda gives easier mode rules but less scoring; Bad (evil) Linda gives harder rules but better scoring.</p>"},
 {t:"Linda tricks",h:["pops"],b:"<p>Hits to the pop bumpers give an award, and some are tricks: resetting GROOVY, reversed flippers, a fake ball save, resetting the cabin drops, or making the next Mystery award worse.</p>"+UNK("The rulesheet says more tricks are to come. Spooky's notes say the pops now give positive or negative awards depending on which way Linda faces, and that individual tricks can be turned off in the menu.")}
]},
{g:"Other scoring",id:"extraball",title:"Hand and extra ball",steps:[
 {t:"Hit the hand",h:["hand"],b:"<p>The rulesheet says multiple hand hits light extra ball: 7, of which 2 are spotted at the start of the game.</p>"+UNK("Spooky's later notes change this: Kitchen Fight became the second hand reward (v2025.07.30), then extra ball moved to the second hand award (v2025.10.03). Where a lit extra ball is collected is not documented yet.")}
]},
{g:"Other scoring",id:"video",title:"Video mode",steps:[
 {t:"Video mode",h:[],b:"<p>Follow the on-screen and audio instructions to control your man as you battle zombies, with a hideous beast at the end. It is 1980s style and awards few points.</p>"+UNK("How it starts is not in the rulesheet. Spooky's v2025.10.03 notes describe a new 70s-style video mode reached by finding hidden \"lost tapes\" during modes; it is not clear whether that is the same one.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"wizard",title:"Mini-wizard and wizard modes",steps:[
 {t:"Mini-wizard",h:["modeins","cherylins"],b:"<p>The rulesheet puts a mini-wizard mode after completing two modes of a movie. Spooky's v2025.05.28 notes name Cheryl Multiball, qualified by completing two modes from the first film, and say \"performance in Phase 2 determines one of two unique multiball variants\".</p>"+UNK("Henrietta Multiball has an insert too, and Spooky's notes mention it, but how it is qualified is not documented yet.")},
 {t:"Wizard",h:["modeins"],b:"<p>Completing all four modes leads to a wizard mode. Spooky's notes name Destroy the Book (after all four modes from Evil Dead, v2025.07.30) and Hero From the Sky (v2025.06.25), whose insert tops the mode list.</p>"+UNK("How these play is not documented yet.")},
 {t:"Later wizard modes",h:["ldeadite","rdeadite"],b:"<p>Spooky's notes also add Kandarian Demon (v2025.10.03), a multi-phase mode ending in a super jackpot shot, and Hail to the King (v2026.04.01), qualified by 25 deadite hits.</p>"+UNK("Not in the rulesheet; not documented yet.")}
]},
{g:"Wizard modes",id:"newer",title:"Other modes in later code",steps:[
 {t:"Not in the rulesheet",h:["lramp","hand","sanityins"],b:"<p>Spooky's release notes add more modes the rulesheet does not cover: Delta 88 (88 left ramp shots to qualify), Kitchen Fight (a hand reward), and the sanity modes Mirror, Mirror and Laughing, whose inserts are in the center lane.</p>"+UNK("Rules for these are not documented yet.")}
]}
];

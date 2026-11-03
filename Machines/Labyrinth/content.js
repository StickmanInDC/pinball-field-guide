/* ---------- playfield features (coordinates in the 849x1928 frame of Barrels of Fun's promo photo, warped to line up with the playfield artwork in Barrels of Fun's manual) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- left side ---- */
 lorbit:{n:"Left orbit",c:1,s:[B([[200,1030],[160,940],[115,815],[88,700],[78,600]],26)],a:[150,915],x:"The leftmost lane. The manual's shot maps put the lock, forks, spinner and Humongous drop target on it."},
 forks:{n:"Forks (captive ball catch)",c:1,s:[C(97,814,14),C(142,837,14)],a:[120,826],x:"The manual's blue circles on the left orbit. A ball caught here is the captive ball for the Fireys, Brick Keeper super jackpots and Goblin City."},
 spinner:{n:"Left orbit spinner",c:0,s:[R(66,722,46,22)],a:[89,733],x:"The rulesheet and manual put a spinner on the left orbit, and say the captive ball is knocked into it. Its exact spot is my estimate, above the forks."},
 humdrop:{n:"Humongous drop target",c:1,s:[R(48,640,40,30)],a:[68,655],x:"The manual calls it the Humongous (left orbit) drop target and marks it at the top of the left orbit lane, below the Humongous guard toy."},
 junklady:{n:"Junk Lady target",c:1,s:[C(72,936,16)],a:[72,936],x:"Marked on the manual's Friends map, left of the left orbit entrance."},
 helping:{n:"Helping Hands scoop",c:1,s:[C(72,1036,20),B([[150,1120],[100,1065]],22)],a:[118,1085],x:"The scoop under the blue skull art on the left, with its arrow insert. Collects Friend jackpots and extra balls."},
 /* ---- ramps and center ---- */
 lramp:{n:"Left ramp",c:1,s:[B([[272,990],[248,890],[218,775],[200,690]],28)],a:[245,880],x:"The lift ramp (Barrels of Fun calls it the Brick Keeper lift ramp). Entrance placed from the manual's shot maps; the ramp itself rises up the left side."},
 under:{n:"Under the left ramp",c:0,s:[R(200,760,52,70)],a:[226,795],x:"The manual says the Goblin City gate opens under the left ramp, and Tea Time starts by shooting under it. Barrels of Fun lists a Brick Keeper hidden home (scoop) under the lift ramp. Its exact position is my estimate."},
 cramp:{n:"Center ramp",c:1,s:[B([[378,515],[355,410],[322,310],[302,255]],26)],a:[355,410],x:"The arrow just left of the left Start Mode insert, from the manual's shot maps."},
 bridge:{n:"Inner loop (bridge)",c:1,s:[B([[342,625],[300,560],[250,500],[200,450]],26)],a:[285,545],x:"The manual's inner loop (bridge) shot, curving up and to the left. Reverse plunges roll through it for the Egdirb skill shot."},
 changemode:{n:"Change Mode target",c:0,s:[C(342,800,16)],a:[342,800],x:"Placed at the Change Mode plaque on the playfield art and the manual's skill shot map. Exact target position is my estimate."},
 locktargets:{n:"Wall and fairy targets",c:1,s:[C(400,418,14),C(333,567,14),C(297,819,14),C(180,864,14),C(99,1224,14)],a:[297,819],x:"The manual's Brick Keeper map marks five targets: the wall target and four fairy targets. It does not say which is the wall target."},
 /* ---- horseshoe and wiseman ---- */
 lhs:{n:"Horseshoe, left side",c:1,s:[B([[445,432],[452,360],[459,297]],24)],a:[452,365],x:"The rulesheet calls the horseshoe the U-turn."},
 rhs:{n:"Horseshoe, right side",c:1,s:[B([[630,540],[645,460],[659,387]],24)],a:[645,460]},
 startins:{n:"Start Mode inserts",c:1,s:[C(437,523,22),C(587,632,22)],a:[512,578],x:"The two green-ringed START MODE inserts at either side of the horseshoe."},
 wisedrop:{n:"Wiseman drop target",c:1,s:[R(505,461,42,24)],a:[526,473],x:"The manual's blue square in front of the Wiseman scoop, between the horseshoe shots."},
 wisescoop:{n:"Wiseman scoop",c:1,s:[B([[490,590],[508,525],[522,485]],24),C(532,418,18)],a:[506,530],x:"The scoop behind the Wiseman drop target. The manual says the ball is ejected under the right ramp into the right orbit."},
 wisetargets:{n:"Wiseman targets",c:1,s:[C(488,430,13),C(575,445,13)],a:[531,438],x:"The two targets flanking the Wiseman scoop. Hit both to light Ello Mystery."},
 /* ---- right side ---- */
 rramp:{n:"Right ramp",c:1,s:[B([[580,927],[612,840],[648,756],[690,650],[711,576]],28)],a:[640,770],x:"The long ramp from right of center up to the right. Barrels of Fun lists a metal right return ramp and wireform."},
 rorbit:{n:"Right orbit",c:1,s:[B([[774,693],[785,570],[796,450],[800,330]],24)],a:[786,570],x:"The rightmost lane. Its first switches register soft plunges for the Bridge skill shot."},
 ello:{n:"Ello lane (Collect Orb, Mystery)",c:1,s:[B([[594,1152],[640,1050],[690,960],[722,915],[742,1000],[747,1170]],22)],a:[660,1010],x:"The shot under the upper right flipper. The manual draws it as a U-turn that comes back down to the right. Collect Orb and Ello Mystery are both collected here, and soft plunges drop into it for the Worm skill shot."},
 uflip:{n:"Upper right flipper",c:0,s:[B([[815,765],[762,862]],20)],a:[788,812],x:"The white flipper with an orange rubber at the right. It stands off the playfield, so in this corrected photo it looks longer and steeper than it is; the manual's map puts it a little lower."},
 pillar:{n:"Right pillar (Ello) target",c:0,s:[C(670,1125,30)],a:[670,1125],x:"The manual's Friends map marks the pillar left of the Ello lane. The rulesheet calls it the target above the right slingshot. I could not tell in the photo whether the target is the round insert on the pillar or the red target above it."},
 wiseexit:{n:"Wiseman scoop exit",c:0,s:[R(675,410,110,100)],a:[730,460],x:"The manual's skill shot text puts the Wiseman scoop under the right ramp, and its Wiseman map marks an area here. I read it as where the ball comes out."},
 /* ---- top ---- */
 village:{n:"Village (back entry)",c:0,s:[C(201,207,30)],a:[201,207],x:"The manual says a strong plunge drops the ball into the back of the Village entry scoop at the top left. Barrels of Fun lists a sculpted Goblin City with a magnet diverter. Position is my estimate from the manual's skill shot map."},
 skillramp:{n:"Shooter lane and skill wireform",c:0,s:[B([[790,1700],[790,1300],[792,900],[800,500],[790,200]],22)],a:[790,1300],x:"The plunger feeds a wireform up the right side. Soft plunges drop through a hole in it into the Ello lane; harder ones reach the Wiseman scoop, the orbit or the Village. The path is my estimate."},
 /* ---- inserts ---- */
 friendins:{n:"Advance Friend inserts",c:1,s:[C(369,689,16),C(752,747,16),C(554,968,16),C(225,1093,16),C(292,1067,16)],a:[554,968],x:"The five circle inserts the manual's Friends map marks. Each Friend has one lit in his color."},
 faces:{n:"Friend face inserts",c:1,s:[C(230,1238,50),C(338,1328,50),C(472,1355,50)],a:[338,1328],x:"Hoggle, Ludo and Sir Didymus, each with a JACKPOT READY insert below."},
 modeins:{n:"Mode inserts",c:1,s:[R(340,1035,240,182)],a:[460,1125],x:"The six mode inserts: Knockers, Four Guards and Fireys on the upper row, Cleaners, Oubliette and Bog on the lower row, with Goblin City Multiball in the middle."},
 /* ---- lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[245,1648],[335,1712]],22)],a:[290,1680]},
 rflip:{n:"Right flipper",c:1,s:[B([[555,1642],[450,1712]],22)],a:[503,1677]},
 lsling:{n:"Left slingshot",c:0,s:[E(178,1430,38,90)],a:[178,1430]},
 rsling:{n:"Right slingshot",c:0,s:[E(612,1430,38,90)],a:[612,1430]},
 loutlane:{n:"Left outlane (H)",c:0,s:[B([[45,1345],[45,1560]],18)],a:[45,1450],x:"The H of HELP is printed at the top of this lane; the lane itself is my estimate."},
 linlane:{n:"Left inlane (E)",c:0,s:[B([[112,1345],[118,1560]],18)],a:[115,1450]},
 rinlane:{n:"Right inlane (L)",c:0,s:[B([[652,1345],[646,1560]],18)],a:[650,1450]},
 routlane:{n:"Right outlane (P)",c:0,s:[B([[726,1345],[726,1560]],18)],a:[726,1450]},
 didypost:{n:"Sir Didymus post",c:0,s:[C(55,1400,14)],a:[55,1400],x:"The rulesheet puts the Didymus defense above the left outlane. Barrels of Fun lists a Sir Didymus staff up post. Position is my estimate."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var MAJ=["lorbit","lramp","bridge","cramp","lhs","rhs","rramp","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers and lanes",h:["lflip","rflip","uflip","lsling","rsling","loutlane","linlane","rinlane","routlane"],b:"<p>Two flippers at the bottom and an upper right flipper. The in and outlanes spell H-E-L-P from left to right.</p>"+UNK("The rulesheet has no layout section. Shots here are placed from Barrels of Fun's manual, which has a shot map for each rule. The lanes and slingshots are my estimates.")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>Left to right: the left orbit, left ramp, inner loop (bridge), center ramp, the two sides of the horseshoe, the right ramp and the right orbit. The rulesheet calls the horseshoe the U-turn.</p>"},
 {t:"Left orbit",h:["lorbit","forks","spinner","humdrop"],b:"<p>The left orbit carries the spinner, the forks that catch a ball as a captive ball, and the Humongous drop target.</p>"+UNK("The order of the spinner and forks along the lane is my reading of the manual's maps.")},
 {t:"Horseshoe and Wiseman",h:["lhs","rhs","startins","wisedrop","wisescoop","wisetargets"],b:"<p>The horseshoe sits at the top center, with a Start Mode insert at each side. Between its two sides is the Wiseman drop target with the Wiseman scoop behind it, and a target to each side of the scoop.</p>"},
 {t:"Scoops",h:["helping","wisescoop","under","village"],b:"<p>The Helping Hands scoop is on the left. The Wiseman scoop is behind its drop target. A scoop under the left ramp and the back Village entry at the top left also hold balls.</p>"},
 {t:"Ello lane",h:["ello","uflip","pillar"],b:"<p>The shot under the upper right flipper collects Orbs and Ello Mystery. The right pillar target sits next to it.</p>"},
 {t:"Targets",h:["changemode","locktargets","junklady","wisetargets","pillar"],b:"<p>The Change Mode target, the wall and fairy targets that light Brick Keeper locks, the Junk Lady target, the two Wiseman targets and the right pillar target.</p>"},
 {t:"Friends inserts",h:["faces","friendins"],b:"<p>The faces of Hoggle, Ludo and Sir Didymus sit above the flippers, each with a JACKPOT READY insert. Five round Advance Friend inserts around the playfield light in each Friend's color.</p>"},
 {t:"Mode inserts",h:["modeins"],b:"<p>Six modes in two rows: The Knockers, The Four Guards and The Fireys on the upper level, The Cleaners, The Oubliette and The Bog of Eternal Stench on the lower level.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"How they work",h:["skillramp"],b:"<p>How hard you plunge decides where the ball goes. A skill shot's value depends on which ball you are on, not on how often you have made it. The manual says ball 2 is typically worth twice ball 1 and ball 3 three times.</p>"},
 {t:"Worm",h:["skillramp","ello"],b:"<p>A short plunge drops the ball into the Ello Worm staging area under the upper flipper. 200k, 400k, 600k.</p>"},
 {t:"Wiseman",h:["skillramp","wisescoop"],b:"<p>Plunge to the end of the shooter wireform and drop into the Wiseman scoop under the right ramp. Then shoot the bridge loop for a 2-shot super skill shot.</p>"+UNK("The rulesheet gives no values. The manual lists 250k for ball 1, and 1.2M for the super skill shot.")},
 {t:"Target, Ramp and Bridge",h:["skillramp","uflip","changemode","cramp","bridge"],b:"<p>A medium plunge rolls up the right orbit and back to the upper flipper. Then one shot: the Change Mode target (Target), the center ramp (Ramp, 350k/700k/1.05M) or the bridge loop (Bridge, 300k/750k/900k). For Bridge, the soft plunge has to hit the right orbit switches first, or the shot counts as Egdirb.</p>"+UNK("Target is 500k/1M/1.5M in the rulesheet but 400k for ball 1 in the manual.")},
 {t:"Egdirb",h:["skillramp","bridge"],b:"<p>Plunge hard enough to make the back corner but soft enough to fall through the upper loop in reverse. 250k, 500k, 750k.</p>"},
 {t:"Village",h:["skillramp","village"],b:"<p>Plunge past the upper loop, but not a full orbit, so the ball falls into the back of the Village. Starts at 400k. The manual says to be ready for the ball to come out from under the left ramp.</p>"}
]},
/* ====== MODES ====== */
{g:"Modes",id:"modes",title:"Starting a mode",steps:[
 {t:"Spell LABYRINTH",h:NUM(MAJ),b:"<p>Make shots with white arrows to spell LABYRINTH and light Mode Start. The first mode needs one letter, the second two, and so on up to six for the sixth.</p>"},
 {t:"Start the mode",h:["lhs","rhs","startins","wisescoop"],b:"<p>When a mode is ready, both Start Mode lights flash. Shoot either side of the horseshoe, or the Wiseman scoop if its drop target is down. Starting from the left side ejects the ball above the upper flipper; the right side ejects it from under the left ramp.</p>"},
 {t:"Change the lit mode",h:["changemode","modeins"],b:"<p>On ball 1 the lit mode cycles through all six until the first switch. While no mode is running, the Change Mode target changes the lit mode within the current row.</p>"},
 {t:"HELP",h:["loutlane","linlane","rinlane","routlane","helping"],b:"<p>Spell HELP at the in and outlanes, when no mode is running, to light the Helping Hands scoop. Shoot it to choose between staying on your row or moving to the mode on the other row. LABYRINTH then finishes if it is not already complete. This stops after you have played Poisoned Peach.</p>"}
]},
{g:"Modes",id:"upper",title:"Upper level modes",steps:[
 {t:"The Knockers",h:["lramp","rramp","lhs","rhs"],b:"<p>Shoot the yellow shots: the left or right ramp for single value, or the flashing horseshoe shot for double. After 5 shots you hear \"Knock, and the door will open\".</p>"},
 {t:"Pinch the nose",h:["wisedrop","wisescoop"],b:"<p>Then hit the drop target between the horseshoe shots to pinch the knocker's nose, and shoot the ball into that doorway in the next few seconds. Miss, and the target pops back up. Orb: complete the mode.</p>"+UNK("The manual describes more: shoot the Wiseman scoop to put the ring back, finish the yellow shots, then shoot the right orbit to open the door.")},
 {t:"The Four Guards",h:[["lramp",0,"alt"],["rramp",0,"alt"],["lorbit",0,"alt"],["rorbit",0,"alt"],"cramp","bridge"],b:"<p>The ramps and orbits are lit red and blue, and each hit changes a shot's color. Shoot the yellow upper loop or center ramp to make the guards confess. The correct color is the opposite of what they say; the lower display also shows it, and a Mystery award can reveal it.</p>"},
 {t:"Open the door",h:["rhs"],b:"<p>Turn all four shots to the correct color, then shoot the right horseshoe lane, which blinks once the colors match. If you match colors without asking the question first, you will be wrong. Orb: open the correct door on the first try.</p>"},
 {t:"The Fireys",h:["forks","lorbit"],b:"<p>A second ball is auto-plunged into the trap (the forks) and the first ball is ejected. If it misses the trap, the mode starts as a 2-ball multiball with the trap lit.</p>"},
 {t:"Pop the heads",h:["forks","spinner"],b:"<p>Hit the trapped captive ball to knock a Firey's head off for an add-a-ball. Hit a red shot to relight the trap. Trapped balls are a hurry-up and release if not hit in time. After the 5th head (the add-a-ball limit), a roving shot lights for a super jackpot.</p>"+UNK("Orb conflict: the Modes section says pop 5 heads; the rulesheet's Orbs list and the manual say collect a super jackpot.")}
]},
{g:"Modes",id:"lower",title:"Lower level modes",steps:[
 {t:"The Cleaners",h:["spinner","lorbit","rorbit"],b:"<p>Shoot the left orbit spinner to build a hurry-up, then the right orbit to collect. The mode ends after three collects or when the clock reaches the 13th hour. Orb: escape with at least 5M.</p>"+UNK("The manual gives the clock as 90 seconds by default.")},
 {t:"The Oubliette",h:["lorbit","lramp","cramp","lhs","rhs","rorbit"],b:"<p>Shoot any lit shot to activate it, then the same shot again to complete it. Hitting a different lit shot makes that the active one instead. Each shot completes once. Orb: complete 5 doors.</p>"+UNK("The rulesheet does not list the shots. The manual's map lights five doors: the left orbit, left ramp, center ramp, the horseshoe (both sides count as one) and the right orbit.")},
 {t:"The Bog of Eternal Stench",h:NUM(["lramp","rramp","lorbit","rhs","rorbit"]),b:"<p>Shoot the orange shot and avoid the green ones. The orange shot always runs left ramp, right ramp, left orbit, right horseshoe, then right orbit. Hit a green shot and your score stays \"stenched\" in green for the rest of the game, high score list included.</p>"+UNK("Orb: the Modes section says complete 5 orange shots; the Orbs list says get across without touching the Bog.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"brick",title:"Brick Keeper Multiball",steps:[
 {t:"Light locks",h:["locktargets"],b:"<p>Complete the green targets to light lock. With Hoggle at level 2, nearest neighbors count too.</p>"},
 {t:"Lock and start",h:NUM(["lorbit","cramp","rorbit"]),b:"<p>The first lock is at the left orbit, the second at the center ramp, then the right orbit starts the multiball. On default settings all locks are lit at the start of ball 3 if you have not started it yet.</p>"},
 {t:"Jackpots",h:NUM(MAJ),b:"<p>Shots with red arrows are jackpots. One jackpot lights the super jackpot at the left orbit, and each relight needs one more.</p>"+UNK("The rulesheet does not list which shots light red.")},
 {t:"Super jackpot",h:["forks","spinner","lorbit"],b:"<p>Catch a ball in the forks and knock the captive ball into the spinner. Each spin raises the super jackpot.</p>"+UNK("Orb conflict: the rulesheet says 3 super jackpots; the manual and the rules map say 5.")}
]},
{g:"Multiballs",id:"friendmb",title:"Friend Multiball",steps:[
 {t:"Qualify",h:["faces","helping"],b:"<p>Collect a jackpot for each of Hoggle, Ludo and Sir Didymus. The Helping Hands arrow flashes green when the lit Friend jackpot will also start Friend Multiball. Hold either flipper to pass and build higher Friend levels; you get the choice again at each Friend jackpot.</p>"},
 {t:"Jackpots",h:NUM(MAJ),b:"<p>Random shots light blue, yellow and red for the three Friends. For the first jackpot there are two shots per color (default settings); later jackpots have fewer. Collect all three colors to light the Helping Hands scoop for the jackpot, then it resets.</p>"},
 {t:"Collect",h:["helping"],b:"<p>Orb: collect at least one Friend Multiball jackpot.</p>"+UNK("The rulesheet's Orbs list says only \"Play Friends Multiball\"; its Friend Multiball section and the manual say collect a jackpot.")}
]},
{g:"Multiballs",id:"tea",title:"Tea Time Multiball",steps:[
 {t:"Start",h:["ello","under"],b:"<p>Tea Time is a Mystery award. Its first shot is a hurry-up under the left ramp, which can time out and lose the multiball.</p>"},
 {t:"Build and collect",h:["lramp","lorbit","rorbit","lhs","rhs"],b:"<p>The rulesheet says: the left ramp collects the Tea Time value, the orbits increase it and the U-turn multiplies it.</p>"+UNK("Conflict: the manual and the rules map say the orbits multiply the value and the horseshoe increases it.")},
 {t:"Victory laps",h:[],b:"<p>After the third jackpot, one random shot at a time lights until the multiball ends, carrying on a conversation with Ello and the Missus.</p>"+UNK("The rulesheet does not list which shots can light.")}
]},
{g:"Multiballs",id:"wisemb",title:"Wiseman Multiball",steps:[
 {t:"Wiseman Multiball",h:["wisescoop"],b:"<p>Completing the fourth Wiseman quest starts Wiseman Multiball. Shots into the Wiseman scoop score jackpots.</p>"+UNK("How many balls is not in the rulesheet. The rules map says 5-ball.")}
]},
/* ====== FRIENDS ====== */
{g:"Friends",id:"friends",title:"Friends",steps:[
 {t:"Find a Friend",h:["friendins","faces"],b:"<p>Yellow is Hoggle (fairies), orange is Ludo (rocks), blue is Sir Didymus (medals). A Friend not yet found has his circle insert flashing and a black and white picture on the display. Beyond level 1, you need a combo of shots to find him, one more for each level.</p>"},
 {t:"Collect items",h:["friendins","pillar","junklady"],b:"<p>Once found, his insert lights solid and shooting it collects an item; the lit shot then moves. The right pillar target also spots progress when lit by the Junk Lady target. 10 Friend items light an extra ball at the Helping Hands scoop.</p>"},
 {t:"Friend jackpot",h:["helping","faces"],b:"<p>With enough items (2 for level 1, more after), the Friend's jackpot is at the Helping Hands scoop. It levels him up and resets him to not found.</p>"},
 {t:"Friendzy",h:NUM(MAJ),b:"<p>Started by the first and every other Wiseman quest. All shots add one item to one Friend: the lowest level Friend, then the one with fewer items, then random.</p>"},
 {t:"Hoggle's perks",h:[],b:"<p>Level 1: 2 LABYRINTH letters per lit shot. Level 2: easier lock lighting. Level 3: 2x Friend items. Level 4: Orb lit.</p>"},
 {t:"Ludo's perks",h:[],b:"<p>Level 1: 50% more mode scoring. Level 2: 2x Brick Keeper jackpots. Level 3: 2x Friend jackpots. Level 4: Orb lit.</p>"},
 {t:"Sir Didymus' perks",h:["didypost","helping"],b:"<p>Level 1: spelling HELP activates the Didymus defense above the left outlane (normally once per game). Level 2: once per multiball, the Helping Hands scoop adds a ball. Level 3: +5 seconds on all ball saves. Level 4: Orb lit.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"orbs",title:"Orbs",steps:[
 {t:"Collect an Orb",h:["ello"],b:"<p>Finishing modes, multiballs, quests and Friends lights Collect Orb under the upper right flipper for 10M.</p>"},
 {t:"Place the multiplier",h:NUM(MAJ),b:"<p>The next rainbow-colored shot you hit gets a shot multiplier. Up to three can stack on one shot. Drain before placing it and the multiplier is lost, but the Orb still counts toward the wizard mode.</p>"+UNK("Which shots go rainbow is not listed. The highlights show the main shots.")},
 {t:"The 13 Orbs",h:[],b:"<p>Knockers, Four Guards, Fireys, Bog, Oubliette and Cleaners (see each mode); Hoggle, Ludo and Sir Didymus level 4 jackpots; Brick Keeper super jackpots; six Wiseman quests; Friend Multiball; and Goblin City Multiball.</p>"+UNK("Goblin City Orb conflict: the rulesheet says 5 jackpots in the Attack phase; the manual and the rules map say one super jackpot.")}
]},
{g:"Other scoring",id:"quests",title:"Wiseman quests",steps:[
 {t:"Start a quest",h:["wisedrop","wisescoop"],b:"<p>Knock down the drop target under the Wiseman, then shoot the scoop to start a quest. Each quest asks for a number of one random shot type.</p>"},
 {t:"Quest goals",h:["spinner","lramp","rramp","locktargets","lorbit","rorbit","lhs","rhs"],b:"<p>The listed quests: 50 left orbit spins, 5 ramps, 10 targets, a number of orbits, or a number of loops (the U-turn counts as a loop).</p>"+UNK("The rulesheet gives no number for the orbit and loop quests.")},
 {t:"Finish and rewards",h:["wisescoop"],b:"<p>Make the shots, then shoot the Wiseman scoop to finish. Each quest raises the bonus multiplier. Odd-numbered quests start Friendzy, the second lights an extra ball, the fourth starts Wiseman Multiball and the sixth lights an Orb.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery and extra balls",steps:[
 {t:"Light Mystery",h:["wisetargets"],b:"<p>Hit the targets on either side of the Wiseman scoop to light Mystery.</p>"},
 {t:"Collect Mystery",h:["ello"],b:"<p>Shoot under the upper right flipper. Awards include a Friend item, completing the current quest, an extra ball (always the third award, if the limit is not reached), 750k, Tea Time Multiball, and the correct Four Guards color during that mode.</p>"},
 {t:"Extra balls",h:["helping"],b:"<p>Extra balls are collected at the Helping Hands scoop when lit purple: after 10 Friend items, after 2 Wiseman quests, and as the third Mystery award.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"peach",title:"Poisoned Peach",steps:[
 {t:"Qualify",h:["lhs","rhs","startins","wisescoop"],b:"<p>Play all three upper modes or all three lower modes and Start Mode lights. Shoot either Start Mode shot or the Wiseman scoop. It is a timed mode with a ball save for its whole length.</p>"},
 {t:"Break the spell",h:["humdrop","wisedrop","lramp","rramp"],b:"<p>Ramps raise the value, and ramp combos raise it more. Shoot the Wiseman drop target or the left orbit drop target to collect. Hit both drop targets twice to break the spell. Finish before the clock reaches 13 for a time bonus.</p>"}
]},
{g:"Wizard modes",id:"goblin",title:"Goblin City Multiball",steps:[
 {t:"Start",h:["lorbit","forks"],b:"<p>After all six modes, start at the left orbit, which holds the ball at the captive ball post.</p>"},
 {t:"Phase 1: Rock Golem",h:["lramp","rramp","lorbit","humdrop"],b:"<p>Single ball. Alternate the two ramps and the left orbit within 10 seconds to damage the golem (left ramp scores 2x the right). Then shoot the left ramp to enter Goblin City.</p>"+UNK("The manual describes it differently: shoot the ramps to dodge, then bash the captive ball into the Humongous drop target, three times; then the gate opens under the left ramp.")},
 {t:"Phase 2: Run and Hide",h:["wisescoop","helping","cramp"],b:"<p>3-ball multiball. Shoot any flashing blue shot four times (flashing shots score 2x). Then lock balls to hide: the side ramp and Wiseman scoop first, then the Helping Hands scoop.</p>"+UNK("The rulesheet's \"side ramp\" is not identified. The manual says the Wiseman scoop and center ramp, which is what is highlighted.")},
 {t:"Phase 3: Attack",h:["wisescoop"],b:"<p>All shots are jackpots. The first jackpot lights a super jackpot at the Wiseman scoop; each relight needs one more. It ends when you are down to one ball, and modes you did not complete reset. Failing phase 1 or 2 gives one second chance.</p>"+UNK("Ball count conflict: the rulesheet says 6-ball multiball, the manual says 5-ball.")}
]},
{g:"Wizard modes",id:"jareth",title:"Battle Jareth",steps:[
 {t:"Qualify",h:["lorbit","rorbit","village"],b:"<p>Collect all 13 Orbs and place the last multiplier. Both orbits light for a shot to the back left corner, where the Goblin King waits.</p>"},
 {t:"The clock",h:[],b:"<p>If the clock strikes 13 you lose an Orb. Draining also costs an Orb; you get the ball back while you have Orbs left. Shots lose value with every Orb lost.</p>"},
 {t:"Phase 1: Remember the words",h:[],b:"<p>Make a set of yellow shots, then a red shot: one yellow the first time, two the second, and so on. The red shot locks in the word and resets the clock. Losing an Orb steps the current set back one. Six red shots move you on.</p>"+UNK("Which shots light is not documented yet.")},
 {t:"Phase 2: Say the words",h:[],b:"<p>Repeat the six red shots in order. The clock does not reset between them. Finish to escape; a quick escape earns a time bonus. Either way, the game ends here and remaining balls are lost.</p>"}
]}
];

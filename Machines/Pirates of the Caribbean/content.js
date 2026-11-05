/* ---------- playfield features (coordinates in the 640x1020 crop of JJP's straight-down playfield photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 depths:{n:"The Depths",c:0,s:[C(62,500,15)],a:[62,500],x:"The hole at the far left, beside THE DEPTHS label. The hole itself is hidden under the rock in the photo; placed from the manual's layout drawing."},
 dt:{n:"Devil's Triangle (left lane)",c:0,s:[B([[152,583],[132,541],[114,496],[102,469],[86,415]],16)],a:[132,541],x:"The arrow under the DEVIL'S TRIANGLE label is clear. The path is from the manual's map, which calls it the left turnaround loop; the backglass calls it the left lane."},
 dtspin:{n:"Devil's Triangle spinner",c:0,s:[R(100,488,26,14)],a:[113,495],x:"Placed from the manual's map at the Devil's Triangle entrance. Not clearly visible in the photo."},
 mael:{n:"Maelstrom ramp",c:1,s:[B([[197,534],[180,490],[162,440],[145,380],[130,320],[120,255]],18)],a:[160,400],x:"The stone-look ramp on the left with MAELSTROM printed along it. The rulesheet calls it the left ramp."},
 whirl:{n:"Maelstrom whirlpool",c:1,s:[C(118,215,44)],a:[118,215],x:"The bowl at the top of the Maelstrom ramp. A diverter sends the ball in for At World's End Multiball; it drains to the Depths."},
 uflip:{n:"Upper left flipper",c:1,s:[B([[203,398],[201,476]],14)],a:[202,437],x:"The yellow flipper above the BAYOU label."},
 bayou:{n:"Bayou",c:0,s:[C(197,444,13)],a:[197,444],x:"The sinkhole under the upper left flipper. Hidden in the photo; placed from the manual's map. Hold the flipper up to reach it."},
 portroyal:{n:"Port Royal (left orbit)",c:0,s:[B([[244,519],[218,390],[204,300],[190,220],[172,150],[160,110]],16)],a:[218,390],x:"The arrows above the PORT ROYAL label are clear. The path is my reading of the manual's map: past the right side of the upper left flipper and up the left side to the up-post."},
 upost:{n:"Left orbit up-post",c:0,s:[C(166,125,10)],a:[166,125],x:"Placed from the manual's On Stranger Tides map, high in the left orbit."},
 pirtgt:{n:"PIRATE target",c:0,s:[R(207,190,16,18)],a:[215,199],x:"Placed from the manual's map, between Port Royal and the left chest target."},
 chtgts:{n:"Chest targets (LOAD and CHEST)",c:0,s:[R(223,145,16,18),R(301,146,16,18)],a:[270,155],x:"Placed from the manual's map, either side of the chest lane at the foot of the chest. Hidden by the chest in the photo."},
 chestlane:{n:"Chest lane",c:1,s:[B([[273,325],[273,255],[273,190]],18)],a:[273,260],x:"The arrow column above the CHEST label, running up into the treasure chest."},
 chest:{n:"Dead Man's Chest",c:1,s:[R(180,75,135,110)],a:[247,130],x:"The chest toy at the back left. It holds the three-ball lock."},
 starmap:{n:"Star Map",c:0,s:[B([[340,300],[344,220],[352,120]],18)],a:[343,240],x:"The arrow above the STAR MAP label is clear. The shot runs under the Black Pearl, so the rest of it is placed from the manual's map."},
 stargts:{n:"Star Map targets",c:0,s:[R(322,22,82,32)],a:[363,38],x:"Five targets per the rulesheet. Not visible in the photo (under the ship and cut by the top edge); placed from the manual's layout drawing."},
 startch:{n:"Start Chapter insert",c:0,s:[C(332,290,9)],a:[332,290],x:"The manual's yellow Start Chapter insert in the Star Map arrow column. My reading of which insert it is."},
 maptgts:{n:"MAP targets",c:0,s:[C(372,170,8),C(389,187,8),C(406,205,8)],a:[389,187],x:"Three targets between the Star Map and the Captain's Quarters. Placed from the manual's map; they sit under the Black Pearl ramp in the photo."},
 captq:{n:"Captain's Quarters (MAP hole)",c:0,s:[C(431,220,13)],a:[431,220],x:"The manual calls it the MAP hole or MAP subway entrance. Placed from the manual's map, under the top of the Black Pearl ramp."},
 cqshot:{n:"Captain's Quarters shot",c:0,s:[B([[214,430],[330,330],[404,271],[431,224]],14)],a:[380,290],x:"From the upper left flipper up and to the right, past the arrow above the CAPTAIN'S QUARTERS label. Path from the manual's map."},
 mapready:{n:"Map Ready insert",c:1,s:[C(316,385,15)],a:[316,385],x:"The round MAP READY insert."},
 fountain:{n:"Fountain of Youth (inner loop)",c:0,s:[B([[214,425],[330,350],[432,309],[470,240],[489,171]],14)],a:[432,309],x:"From the upper left flipper, behind the arrow above the FOUNTAIN OF YOUTH label. The manual draws it looping round the back of the playfield and back to the upper flipper; that part is hidden in the photo."},
 gold:{n:"GOLD targets",c:0,s:[B([[357,398],[342,456]],16)],a:[350,427],x:"Four targets. The manual marks G-O-L-D inserts in a row beside the left wall of the Black Pearl ramp; the targets are placed from that."},
 bpramp:{n:"Black Pearl ramp",c:1,s:[B([[380,548],[392,480],[410,400],[428,320],[440,245]],20)],a:[410,400],x:"The clear ramp with the ladder, right of center. It always feeds the Black Pearl ship."},
 ship:{n:"Black Pearl ship",c:1,s:[R(388,0,178,205)],a:[477,110],x:"The upper playfield at the back right, with two spinner orbits, Bonus and X targets, GOLD spot targets and the cannon targets. The ship rocks."},
 cannon:{n:"Cannon",c:0,s:[C(402,40,16)],a:[402,40],x:"At the upper left of the ship, per the rulesheet and the manual's mini playfield map. Not clearly identifiable in the photo."},
 popper:{n:"Ship popper",c:0,s:[C(448,88,12)],a:[448,88],x:"The subway entrance under the Black Pearl, which the manual's skill shot map marks; a VUK lifts the ball to the ship. Hidden by the ship in the photo."},
 rorbit:{n:"Open Sea (right orbit)",c:0,s:[B([[433,542],[460,470],[490,406],[530,300],[560,215],[566,150]],16)],a:[490,406],x:"Path from the manual's map. The OPEN SEA label sits beside it. It runs through the bumper area."},
 pops:{n:"Pop bumpers",c:0,s:[C(466,335,18),C(542,409,18),C(504,514,20)],a:[504,440],x:"The manual says four pop bumpers; the rulesheet says three. I placed three from the manual's map and could not find the fourth. On the LE and CE some carry spinning sculptures."},
 rollover:{n:"Pop bumper rollover",c:0,s:[C(425,366,8)],a:[425,366],x:"Placed from the manual's map, at the bumper entrance. Hidden under the ramp in the photo."},
 tortuga:{n:"Tortuga hole",c:0,s:[C(480,560,13)],a:[480,560],x:"The rulesheet calls it the Tortuga saucer; the manual calls it the Tortuga VUK. Placed from the manual's map, near the DICE label."},
 tortins:{n:"Tortuga inserts",c:0,s:[C(442,603,9),C(459,588,9)],a:[450,596],x:"The manual's Tortuga Multiball and Tortuga Mystery inserts in front of the hole. My reading of which inserts they are."},
 liar:{n:"Liar's Dice insert",c:0,s:[C(437,532,9)],a:[437,532],x:"Near the DICE label. Placed from the manual's map."},
 rlane:{n:"Right lane (Extra Ball)",c:0,s:[C(500,585,12)],a:[500,585],x:"The EXTRA insert on the right. The rulesheet describes a curvy lane through the bumpers that collects the extra ball; its path is not traced here."},
 flashers:{n:"Flasher domes",c:1,s:[C(175,355,22),C(556,565,24)],a:[556,565],x:"The two clear domes. They sparkle yellow when gold spawns."},
 xtgts:{n:"X targets (2X to 6X)",c:0,s:[C(104,547,8),C(157,522,8),C(222,503,8),C(347,511,8),C(409,540,8)],a:[222,503],x:"Five multiplier targets around the lower playfield, placed from the inserts the manual marks. Which number is where is not documented."},
 spotchar:{n:"Spot Character target",c:0,s:[C(132,640,10)],a:[132,640],x:"Near the SPOT CHARACTER label by the left inlanes. The target position is my reading."},
 disc:{n:"Spinning disc",c:1,s:[C(311,662,88)],a:[311,662],x:"The map disc in the center. It spins at times, such as when the chest lock is lit or after MAP targets."},
 pirate:{n:"PIRATE lanes",c:1,s:[R(60,645,20,30),R(107,675,20,30),R(153,677,20,30),R(445,675,20,30),R(475,675,20,30),R(525,675,20,30)],a:[311,690],x:"Six lanes with P-I-R-A-T-E inserts, three each side. On the left the outlane sits between two inlanes."},
 wizins:{n:"Wizard mode inserts",c:1,s:[R(236,848,158,48)],a:[315,872],x:"The movie inserts above the flippers, under COMPLETE MOVIE'S CHAPTERS AND MULTIBALL TO QUALIFY WIZARD MODES."},
 shooter:{n:"Shooter lane",c:1,s:[B([[586,1000],[586,560]],14)],a:[586,800]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["dt","mael","portroyal","chestlane","starmap","cqshot","fountain","bpramp","rorbit"];
var SKULL=["portroyal","chestlane","mael","fountain","dt"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["starmap","wizins"],b:"<p>Qualify and play movie Chapters at the Star Map, play the five movie multiballs, and qualify each movie's mini wizard mode. Tortuga Multiball and many side features run alongside.</p>"+UNK("The rulesheet is a work in progress; gaps are marked \"not documented yet\".")},
 {t:"Nine major shots",h:NUM(MAJ),b:"<p>Left to right: Devil's Triangle, the Maelstrom, Port Royal, the chest lane, the Star Map, the Captain's Quarters, the Fountain of Youth, the Black Pearl ramp and Open Sea.</p>"+UNK("At World's End needs \"the nine major shots\" without naming them. This list is the nine jackpot arrows on the manual's maps.")},
 {t:"Left side",h:["depths","dt","dtspin","mael","whirl"],b:"<p>The Depths at the far left kicks the ball out to the P lane and the left flipper. Devil's Triangle is a pseudo-orbit with a spinner that u-turns back to the flippers. The Maelstrom is a tight left ramp that circles a whirlpool and feeds the left inlane.</p>"},
 {t:"Upper left flipper",h:["uflip","bayou","cqshot","captq","fountain"],b:"<p>The Chest feeds the upper left flipper. From there shoot the Captain's Quarters, the Fountain of Youth loop (which keeps feeding the upper flipper) or the GOLD targets. Hold the flipper up and shoot into the Bayou under it.</p>"},
 {t:"Center",h:["portroyal","pirtgt","chtgts","chestlane","chest","starmap"],b:"<p>Port Royal is the left orbit. The PIRATE target sits between it and the left chest target. The Chest is an orbit under the chest toy with a target either side; it can lock balls inside the chest. The Star Map has five targets, a magnet and an up-post.</p>"},
 {t:"Black Pearl",h:["bpramp","ship","cannon","popper"],b:"<p>The steep Black Pearl ramp always feeds the rocking ship upper playfield. The ship has two spinner orbits, Bonus X targets, GOLD spot targets and the cannon. The ship popper (a VUK) also lifts balls up to the ship.</p>"+UNK("The rulesheet warns the ramp is prone to draining the ball straight down the middle.")},
 {t:"Right side",h:["rorbit","pops","rollover","tortuga","rlane","liar"],b:"<p>Open Sea is the right orbit, through the bumpers to the upper flipper. The pop bumpers build the Tortuga Mystery level, collected at the Tortuga hole. The right lane collects the extra ball.</p>"+UNK("The rulesheet says three bumpers and four rum-bottle rollovers; the manual says four pop bumpers and one rollover button.")},
 {t:"Targets",h:["xtgts","gold","maptgts","spotchar","disc"],b:"<p>X targets raise multipliers. GOLD targets spawn gold. MAP targets light the Map Award. The Spot Character target spots a Chapter shot. The disc in the center spins at times to make play harder.</p>"},
 {t:"Lanes",h:["pirate","flashers","shooter"],b:"<p>Six lanes spell PIRATE, three on each side. On the left the outlane sits between two inlanes. The right outlane has an opening that feeds the shooter lane as a ball save.</p>"}
]},
{g:"Layout and basics",id:"characters",title:"Character select",steps:[
 {t:"Pick a character",h:[],b:"<p>Every game starts with a choice of character. Each gives a benefit, such as easier multiballs or Chapters, and lets you skip that character's shot during Chapters. In a multiplayer game no two players can pick the same one.</p>"+UNK("The manual says 22 characters; the rulesheet lists 20.")},
 {t:"Multiball helpers",h:[],b:"<p>Examples: Armando Salazar gives one ball back on a multi-drain. Blackbeard adds 10 seconds of multiball ball save. Hector Barbossa makes jackpots easier (a shot either side counts) but halves multiball scoring. Weatherby Swann adds 25% to multiballs but cannot start Tortuga Multiball or Arrr! Frenzy.</p>"},
 {t:"Chapter helpers",h:[],b:"<p>Elizabeth Swann keeps three Chapters lit. Tia Dalma lets you choose the Chapter. James Norrington makes Chapters easier but halves Chapter scoring. Henry Turner keeps the Spot Character target lit.</p>"},
 {t:"Feature helpers",h:[],b:"<p>Davy Jones always has Liar's Dice available. Jack Sparrow doubles Treasure scoring. Will Turner extends the combo timer and pays 5x skill shots. Cotton slows the Black Pearl and doubles its scoring. Philip Swift needs fewer loops for On Stranger Tides.</p>"+UNK("The full list and every benefit are in the rulesheet.")}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Short plunge",h:["shooter","pops"],b:"<p>A short plunge into the bumpers scores points and raises the Tortuga Mystery level by 1.</p>"},
 {t:"Medium plunge",h:["shooter","popper","ship"],b:"<p>A medium plunge into the ship popper scores points and advances the Black Pearl one stage toward Curse of the Black Pearl Multiball.</p>"},
 {t:"Full plunge",h:["uflip","captq"],b:"<p>A full plunge brings the ball to the upper left flipper. Shoot the Captain's Quarters for points and a spin of the Map. Shoot the Fountain of Youth first, as a combo, to raise the value.</p>"+UNK("The rulesheet gives 1K, 5K (ship) and 2.5K (map). The manual's screen shots show 1,000, 2,500 (ship) and 5,000 (map). Values rise with each skill shot made in a game.")}
]},
/* ====== CHAPTERS ====== */
{g:"Chapters",id:"chapters",title:"Chapters",steps:[
 {t:"Skull shots",h:NUM(SKULL),b:"<p>Five shots light a colored skull each: Port Royal (yellow), the Chest (green), the Maelstrom (red), the Fountain of Youth (blue) and Devil's Triangle (purple). One shot qualifies that movie's Chapter.</p>"},
 {t:"Start at the Star Map",h:["starmap","stargts","startch"],b:"<p>Shoot the Star Map. With several Chapters lit, the up-post and magnet bounce the ball around the targets, collecting each target's skull value. The last target hit picks the Chapter.</p>"},
 {t:"Play the Chapter",h:alt(MAJ),b:"<p>Complete all the flashing character shots, from 1 to 12, before time runs out. Each shot is worth the skull value of its color. The Star Map can also collect Jack Sparrow and add time once the timer is nearly halfway down.</p>"},
 {t:"Skull values",h:["dtspin","mael","chestlane","portroyal","fountain"],b:"<p>Skulls start at 1,000 and build to 10,000. Purple: 10 per left spinner spin. Red: 100 per Maelstrom. Green: 50 per Chest. Yellow: 75 per Port Royal. Blue: 25 per Fountain of Youth.</p>"},
 {t:"Multiplier",h:["starmap"],b:"<p>Character values get +0.5x for each extra skull lit when you shoot the Star Map: one skull 1x, four skulls 2.5x, all five 3x. Starting a Chapter unlights all skulls.</p>"},
 {t:"Skull Hold",h:["depths"],b:"<p>Skull values reset at the end of the ball. A shot into the Depths holds the highest skull value into the next ball. Mystery awards can also give Skull Holds. The Bayou adds 250 to all skull values in normal play.</p>"},
 {t:"Spot Character",h:["spotchar"],b:"<p>The Spot Character target spots a mode shot during Chapters. It is usually hit only by a lucky bounce.</p>"},
 {t:"Completion",h:["wizins"],b:"<p>Completing a Chapter scores a completion bonus (2,500, +250 each time) and a timer bonus (25 x characters x seconds left). Characters collected raise the scoring level of that movie's wizard mode. Five Chapters from one movie are needed to qualify its wizard mode.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"mb1",title:"Curse of the Black Pearl",steps:[
 {t:"Board the ship",h:["bpramp","portroyal","popper"],b:"<p>Get to the Black Pearl up the Black Pearl ramp. The manual adds the left orbit and the ship popper skill shot.</p>"},
 {t:"Spinners",h:["ship"],b:"<p>On the ship, shoot the two spinner orbits. The ship's lights turn green as you spin.</p>"},
 {t:"Load Cannon",h:["ship","cannon"],b:"<p>After enough spins, hit either green Load Cannon target to qualify the cannon. Its gate opens.</p>"},
 {t:"Fire",h:["cannon"],b:"<p>Shoot the ball into the cannon, then press the action button at the right moment to fire at the opposing ship. A hit through the hole destroys it and qualifies Multiball 1. A miss still counts toward it.</p>"+UNK("The manual says two hits on the ship without the bullseye also destroy it.")},
 {t:"Start",h:["portroyal"],b:"<p>Shoot Port Royal to start. A ball is popped up into the ship.</p>"},
 {t:"Jackpots",h:["ship","cannon"],b:"<p>Shots on the ship score jackpots. Fire through the hole in the target ship with the action button for Super Jackpots.</p>"}
]},
{g:"Multiballs",id:"mb2",title:"Dead Man's Chest",steps:[
 {t:"Light lock",h:["chtgts"],b:"<p>Complete the two targets either side of the Chest to light a lock.</p>"},
 {t:"Lock",h:["chestlane","chest"],b:"<p>Shoot the Chest to lock a ball inside it. Lock three balls to start the multiball.</p>"},
 {t:"Jackpots",h:["xtgts"],b:"<p>All the X targets light. The number on the first one you hit sets how many jackpots light. The 2X target needs only two jackpots per Super Jackpot.</p>"+UNK("Where the lit jackpots appear is not documented yet.")},
 {t:"Super Jackpot",h:["chestlane"],b:"<p>Collecting all lit jackpots lights the Super Jackpot at the Chest.</p>"}
]},
{g:"Multiballs",id:"mb3",title:"At World's End",steps:[
 {t:"Pieces of Eight",h:alt(MAJ),b:"<p>Shoot all nine red arrows at the major shots to collect the nine Pieces of Eight. On default settings one is spotted at the start of each ball. The last one flickers.</p>"},
 {t:"Start",h:["mael","whirl"],b:"<p>Shoot the Maelstrom; the ball goes into the whirlpool and starts the multiball.</p>"},
 {t:"Jackpots",h:[["mael",1],["bayou",2]],b:"<p>Shoot the Maelstrom for a jackpot. After each one, a Super Jackpot lights at the Bayou.</p>"},
 {t:"Later rounds",h:alt(MAJ),b:"<p>Later At World's End multiballs need two shots to each major shot, then three, and so on.</p>"}
]},
{g:"Multiballs",id:"mb4",title:"On Stranger Tides",steps:[
 {t:"Qualify",h:["uflip","fountain"],b:"<p>Make repeated Fountain of Youth loops. Another loop starts the multiball.</p>"+UNK("The rulesheet says about 8 or 9 loops. The manual says five separate loops (a run of back-to-back loops counts as one), and the sixth starts it.")},
 {t:"Jackpots",h:[["chestlane",1],["rorbit",1],["fountain",2]],b:"<p>The inner loop scores jackpots. A Chest then loop combo scores a Double Jackpot; an orbit then loop combo scores a Triple.</p>"+UNK("The rulesheet says orbit; the manual's map shows the right orbit.")},
 {t:"Super Jackpot",h:["upost","portroyal"],b:"<p>After enough jackpots a ball is trapped behind the up-post. Knock it out with another ball for the Super Jackpot.</p>"+UNK("The rulesheet says to trap it with the right orbit, the Chest or the inner loop. The manual says the next inner loop is held at the left orbit up-post, then a Port Royal shot hits it free.")}
]},
{g:"Multiballs",id:"mb5",title:"Dead Men Tell No Tales",steps:[
 {t:"Spin",h:["dtspin","dt"],b:"<p>Spin the Devil's Triangle spinner to work toward this multiball.</p>"+UNK("The manual says the number of spins is a difficulty setting.")},
 {t:"Start",h:["dt"],b:"<p>After enough spins, shoot the full Devil's Triangle loop. The ball must reach the switch at the u-turn at the end. At the start the shot feeds the Depths instead of looping back.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>A roving purple jackpot is lit. Shoot it to light the Super Jackpot at Devil's Triangle.</p>"}
]},
{g:"Multiballs",id:"tortuga",title:"Tortuga Multiball",steps:[
 {t:"Qualify",h:["tortuga","tortins"],b:"<p>Collect 50 gold to light Tortuga Multiball at the Tortuga hole (+50 more for the next one).</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>All the major shots light for jackpots. They score little but raise the Super Jackpot.</p>"},
 {t:"Super Jackpot",h:["tortuga"],b:"<p>Collect it at the Tortuga hole. Being patient, and bringing in a Super X, makes it worth much more.</p>"+UNK("The manual says the Super Jackpot lights after enough jackpots break the bottles on the display.")},
 {t:"Add-a-ball",h:["gold"],b:"<p>Completing the GOLD targets adds a ball. After the first time, GOLD must be completed in order, top to bottom, for another.</p>"},
 {t:"Resurrect",h:["tortuga"],b:"<p>Every multiball can stack with the others and adds a ball. Starting one in the grace period after draining to one ball revives multiball play. Tortuga is a good way to do it.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"piratelanes",title:"PIRATE lanes",steps:[
 {t:"Spell PIRATE",h:["pirate"],b:"<p>Complete the six PIRATE lanes to light the PIRATE target for the award you have chosen.</p>"},
 {t:"Choose the award",h:["pirate"],b:"<p>Press the action button at any time (unless gold is on screen) to change the award. Each has its own color on the screen, the lanes and the target.</p>"},
 {t:"Collect",h:["pirtgt"],b:"<p>Shoot the lit PIRATE target.</p>"},
 {t:"Awards",h:["pirtgt"],b:"<p>Light Bonus X, Hold Bonus X, Light Shot X, Light Super X (every second completion), Big Points, a hurry-up at the PIRATE target, Arrr! Frenzy, more time, add-a-ball, gold, Light Extra Ball and Light Liar's Dice.</p>"+UNK("Some awards need a number of completions first: Arrr! Frenzy after 3 and 10, Liar's Dice after 3, Extra Ball after 5 (the rulesheet also says 5 to 6).")}
]},
{g:"Other scoring",id:"gold",title:"Gold",steps:[
 {t:"Spawn gold",h:["gold","flashers"],b:"<p>Gold appears on screen from the GOLD targets, Gold PIRATE awards, Chapter shots and Mystery awards. The flashers sparkle yellow; they turn red as it is about to vanish.</p>"},
 {t:"Collect",h:[],b:"<p>Press the action button to collect gold before it disappears.</p>"},
 {t:"More gold",h:[["fountain",1],["gold",2]],b:"<p>Combos before hitting the GOLD targets spawn more gold. Completing G-O-L-D spawns a larger amount.</p>"+UNK("The manual names Fountain of Youth loops as the combo, and says the GOLD spot target on the Black Pearl spots a letter.")}
]},
{g:"Other scoring",id:"mystery",title:"Tortuga Mystery",steps:[
 {t:"Build the level",h:["pops","rollover"],b:"<p>Hitting each pop bumper once lights Mystery or raises its level. There are 10 levels, purple at 1 up to white at 10.</p>"+UNK("The manual describes it differently: four pop bumpers and the upper slingshot each step an insert through the colors, the rollover steps the lowest, and the level rises when all five reach a color.")},
 {t:"Collect",h:["tortuga","tortins"],b:"<p>Collect at the Tortuga hole. Higher levels give better awards: low ones include a Skull Hold, gold or small points, high ones playfield multipliers, ball save, an instant multiball or Light Extra Ball.</p>"}
]},
{g:"Other scoring",id:"map",title:"Map Awards",steps:[
 {t:"MAP targets",h:["maptgts","disc"],b:"<p>Complete the MAP targets to light the Map Award at the Captain's Quarters. The manual says each hit spins the disc for a while.</p>"},
 {t:"Collect",h:["captq","mapready"],b:"<p>Shoot the Captain's Quarters. The map spins to an award in three parts: an action (Light, Award, Add, Change or Plunder), an amount, and a prize such as Playfield X, Bonus X, a Chapter, points, gold, a jackpot, treasure, a ball or a character.</p>"},
 {t:"Plunder",h:[],b:"<p>Plunder awards take points, gold, a character or, very rarely, a ball from an opponent. A plundered character gives you its benefits but rules you out of that character's champion award.</p>"+UNK("The odds behind each award are not documented yet.")}
]},
{g:"Other scoring",id:"multipliers",title:"Multipliers",steps:[
 {t:"Bonus X",h:["ship","xtgts"],b:"<p>Complete the two targets on the Black Pearl to light the X targets for bonus multiplier. Hit a lit one. Bonus X caps at 6x.</p>"+UNK("The rulesheet calls them Advance X targets; the manual calls them BONUS and X.")},
 {t:"Shot X",h:["xtgts"],b:"<p>A PIRATE award. Hit a flashing X target to multiply only your next shot by its number.</p>"},
 {t:"Super X",h:["xtgts"],b:"<p>A PIRATE award. The first time, only the 2X target flashes; hitting it gives 2x scoring for about 30 seconds. Later ones go up to 6x. A Map Award during Super X usually adds 1x.</p>"}
]},
{g:"Other scoring",id:"extras",title:"Combos and extras",steps:[
 {t:"Treasure Horde",h:alt(MAJ),b:"<p>There are 12 two-shot combos, listed in the status report. Each awards a piece of treasure. All twelve start Treasure Horde, a hurry-up that rewards more combos.</p>"+UNK("Which twelve combos is not documented yet.")},
 {t:"Constellation Bonus",h:["starmap"],b:"<p>In normal play the Star Map lights a random shot for a Constellation Bonus. Enough of them light the extra ball.</p>"+UNK("How many is not documented yet.")},
 {t:"Liar's Dice",h:["rorbit","liar"],b:"<p>A video mode lit by PIRATE awards or by playing Davy Jones. Shoot the right orbit or the ship popper to start. Choose the stakes, or walk away. Losing is double or nothing.</p>"+UNK("The manual names only the right orbit. How souls work as stakes is not documented yet.")},
 {t:"Extra ball",h:["rlane"],b:"<p>The right lane collects a lit extra ball. The rulesheet says the pop bumper rollover, registered without hitting a bumper, is the second part of the extra ball shot.</p>"+UNK("How the extra ball is lit and collected in full is not documented yet.")}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"wizards",title:"Movie wizard modes",steps:[
 {t:"Scoring level",h:["wizins"],b:"<p>Each mode scores by level: (1 + Super Jackpots) x (1 + characters collected in modes).</p>"},
 {t:"Cursed Treasure of Cortés",h:["portroyal","dtspin","ship"],b:"<p>Play 5 yellow Chapters and Curse of the Black Pearl Multiball, then shoot Port Royal. Collect 882 pieces of Aztec gold through switch hits; spinners pay well. Ports run dry, so make a flashing yellow shot to change ports.</p>"},
 {t:"Battle the Kraken",h:["chestlane",["fountain",1],["captq",2]],b:"<p>Play 5 green Chapters and Dead Man's Chest Multiball, then shoot the Chest. Loop the Fountain of Youth 20 times to raise the net, then shoot the Captain's Quarters to defeat the Kraken. Six shots hold back the six tentacles, but red shots do not.</p>"},
 {t:"Escape the Locker",h:["mael"].concat(alt(MAJ)),b:"<p>Play 5 red Chapters and At World's End Multiball, then shoot the Maelstrom. 90 seconds. Four blue shots light on the right; each hit moves them left. Eight blue shots complete it, each worth much more than the last.</p>"},
 {t:"Battle for the Fountain",h:["fountain","starmap"],b:"<p>Play 5 blue Chapters and On Stranger Tides Multiball, then shoot the Fountain of Youth. Phase 1: 5 major shots in 30 seconds. 2: many orange shots. 3: fill the cup with roving blue shots. 4: the Star Map. 5: the inner loop.</p>"},
 {t:"Don't Betray the Compass",h:["dt"].concat(alt(MAJ)),b:"<p>Play 5 purple Chapters and Dead Men Tell No Tales Multiball, then shoot Devil's Triangle. A 15-second timer; most shots are red and one is unlit. Shoot the unlit one to reset the timer. 4 or 5 of them finish it. Too many red shots end it.</p>"+UNK("The rulesheet's author is unsure whether the black shots are safe.")}
]},
{g:"Wizard modes",id:"final",title:"Break the Curse",steps:[
 {t:"Not documented yet",h:["captq","wizins"],b:"<p>Play all five wizard modes, then shoot the Captain's Quarters to start Break the Curse.</p>"+UNK("The rulesheet marks it TBA, so how it plays is not documented yet.")}
]}
];

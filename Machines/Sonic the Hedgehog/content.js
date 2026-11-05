/* ---------- playfield features (coordinates in the 640x1213 crop of JJP's straight-down Special Edition playfield photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 lorbit:{n:"Left orbit",c:1,s:[B([[110,482],[104,400],[92,320],[80,240],[72,170]],16)],a:[94,330],x:"The blue lane with rings printed in it, up the left side behind the star arrow. The manual's switch list has an upper left orbit switch; where the lane runs over the top is hidden in the photo and not drawn."},
 lramp:{n:"Left ramp",c:1,s:[B([[176,482],[172,420],[166,360],[158,300]],18)],a:[168,400],x:"The wooden plank lane right of the left orbit, behind the star arrow. The rulesheet says it sends the ball to the lab upper playfield. The manual's opto drawing puts the ramp's entrance switch here and its made switch at the upper left, so my reading is that it comes back along the DR. EGGMAN'S LABORATORY rail onto the lab."},
 bash:{n:"Bash target (left standup)",c:0,s:[B([[62,615],[50,560],[44,492]],14)],a:[50,555],x:"The rulesheet's left standup target, which holds a ball for Bash Dash; the flyer calls it the Bash Dash captive ball lock. I placed it in the yellow lane at the far left, behind the BASH DASH insert and its star arrow, where the manual's opto drawing puts the bash post switch. The target itself is hidden under the plastic in the photo."},
 chao:{n:"Chao target",c:0,s:[C(34,770,12)],a:[34,770],x:"The rulesheet says the Chao target is on the very left of the playfield. I placed it at the left wall, up from the CHAO insert near the H lane. A guess from the photo; confirm on a machine."},
 cramp:{n:"Center ramp",c:0,s:[B([[300,472],[292,400],[285,330],[280,250],[277,170]],22)],a:[288,330],x:"Up the middle between the BATTLE and ZONE! rails, under the clear lab playfield and through the battle zone. The manual's opto drawing puts the center ramp entrance switch at the back, where a steel ramp lifts the ball up to the lab. The path is my reading of the photo and that drawing."},
 cdrop:{n:"Center drop target",c:0,s:[R(262,72,32,14)],a:[278,79],x:"The manual's switch list has a center drop target, and the flyer lists an upper playfield entry drop target. Placed from the manual's coil drawing, at the back of the center ramp; not visible in the photo."},
 battle:{n:"Battle zone (Badnik) targets",c:0,s:[B([[212,218],[235,195],[262,180]],12),B([[333,195],[338,240],[342,285]],12)],a:[285,205],x:"Six targets around the center ramp, in two banks of three (the manual's left bank and right bank). JJP's close-up photos show Badnik pictures on them at the back left and along the right side of the battle zone. They sit under the lab and are hidden in this photo; placed from those close-ups."},
 lockup:{n:"Lockup",c:1,s:[B([[368,492],[382,430],[390,360],[394,280]],16)],a:[386,400],x:"The lane right of the ZONE! rail, behind the LOCK 1 and LOCK 2 inserts, with ADD A BALL and COLLECT EMERALD inserts in it. The inline drop targets block it."},
 drops:{n:"Inline drop targets",c:0,s:[R(370,402,26,12),R(377,328,26,12),R(383,252,26,12)],a:[384,330],x:"Three drop targets in a line inside the lockup lane (the flyer's inline 3-bank drop target lock). The dark slots for the front two show in the photo; the third is placed from the spacing in the manual's coil drawing."},
 rramp:{n:"Right ramp",c:0,s:[B([[462,455],[470,380],[480,300],[492,200],[505,110],[540,62],[572,100],[580,200],[572,300],[556,380]],16)],a:[478,350],x:"The steel ramp right of the lockup, behind the RING and SPIN DASH inserts. The manual's opto drawing puts the three magnet loop switches along it and the right ramp made switch on the pink ramp that comes down the right side. The route over the top and down to the loop is my reading of that drawing."},
 loop:{n:"Loop (Spin Dash)",c:1,s:[E(552,428,36,48)],a:[552,428],x:"The gold wire loop above Amy. The flyer calls it the magnetic accelerator loop ramp; the rulesheet says a magnet sends balls through the loop, which you control during Spin Dash."},
 rorbit:{n:"Right orbit",c:0,s:[B([[480,502],[530,478],[575,430],[592,330],[592,190],[578,80]],14)],a:[588,300],x:"Behind the star arrow right of the right ramp, with the TEAM ROSE and ADVANCE CHAO inserts below it. The manual's switch list names a right orbit entrance switch and an upper right orbit switch. The path up the right wall is my reading of the opto drawing."},
 froggy:{n:"Froggy (Big Fish) target",c:1,s:[R(510,690,26,26)],a:[523,703],x:"The square target at the far right beside the CHECKPOINTS QUALIFY label, above the BIG FISH insert. The rulesheet calls it the Froggy target; JJP's flow chart calls it the BIG FISH target."},
 lab:{n:"The lab (upper playfield)",c:1,s:[E(340,215,170,190)],a:[340,250],x:"Dr. Eggman's Laboratory, the clear polycarbonate upper playfield over the center of the playfield, with its own two flippers. The battle zone sits under it."},
 uflipl:{n:"Lab left flipper",c:1,s:[B([[196,386],[248,438]],12)],a:[222,412]},
 uflipr:{n:"Lab right flipper",c:1,s:[B([[510,350],[446,398]],12)],a:[478,374]},
 eggman:{n:"Eggman's mech (Eggmobile)",c:1,s:[E(345,195,40,38)],a:[345,195],x:"Eggman in his pod at the back of the lab. You hit it with the ball during boss battles and the Lab Detour skill shot. The manual's switch list calls it the Eggmobile and gives it a motor."},
 labtl:{n:"Left lab target",c:0,s:[C(305,110,12)],a:[305,110],x:"The red round target at the back of the lab. Which lab target is 'left' and which is 'right' is my reading of the photo; the manual lists an upper playfield left target and right target."},
 labtr:{n:"Right lab target",c:0,s:[C(425,160,12)],a:[425,160],x:"The yellow round target right of Eggman's pod. Name is my reading of the photo."},
 lablorb:{n:"Left lab orbit",c:0,s:[B([[232,345],[225,260],[232,180],[255,110],[290,60]],14)],a:[228,260],x:"The manual lists an upper playfield left orbit switch. Its path here is a guess from the photo and the manual's upper playfield drawing; confirm on a machine."},
 labspin:{n:"Lab spinner",c:0,s:[R(215,193,24,14)],a:[227,200],x:"The flyer lists one spinner; the manual's switch list puts it on the left of the lab (upper playfield spinner left). Placed on the left lab orbit; position is a guess."},
 labrorb:{n:"Right lab orbit",c:0,s:[B([[452,330],[468,250],[472,170],[455,100],[420,55]],14)],a:[468,250],x:"The manual lists an upper playfield right orbit switch. Path guessed from the photo; confirm on a machine."},
 labramps:{n:"Lab loopback ramp and lab jump ramp",c:0,s:[E(420,100,44,40)],a:[420,100],x:"The rulesheet names a lab loopback ramp and a lab jump ramp (a shortcut, and a Goal Ring shot that holds the ball). The manual's upper playfield drawing has a loopback ramp switch and a lab ramp switch toward the right and back of the lab. I could not trace either ramp in the photo, so this marks only the general area."},
 hlane:{n:"H lane (left outlane, kickback)",c:1,s:[B([[30,895],[30,990]],12)],a:[30,940],x:"The far left lane, under the H insert, with the kickback at the bottom."},
 elane:{n:"E lane (left inlane)",c:1,s:[B([[86,885],[90,980]],12)],a:[88,930],x:"The left inlane, under the E insert. The manual lists an inlane post that holds the ball here for Tails Hurry-Up."},
 rlane:{n:"R lane (right inlane)",c:1,s:[B([[472,882],[480,975]],12)],a:[476,930]},
 olane:{n:"O lane (right outlane)",c:1,s:[B([[528,898],[532,990]],12)],a:[530,945]},
 zones:{n:"Zone inserts",c:1,s:[R(242,838,76,284)],a:[280,980],x:"Seven inserts up the center, Green Hill at the bottom to Seaside Hill at the top."},
 feats:{n:"Feature mode inserts",c:1,s:[C(190,995,16),C(205,1022,16),C(360,988,16),C(350,1022,16)],a:[280,1005],x:"MASTER EMERALD MISSION and CASINO NIGHT on the left, SUPER SONIC and BOSS RUSH on the right."},
 emeralds:{n:"Chaos Emerald inserts",c:1,s:[C(225,732,14),C(275,720,14),C(325,732,14),C(182,762,14),C(367,762,14),C(162,805,14),C(387,805,14)],a:[275,750],x:"Seven gem inserts around the Master Emerald."},
 master:{n:"Master Emerald insert",c:1,s:[E(275,795,45,35)],a:[275,795]},
 skill:{n:"Skill shot inserts",c:1,s:[R(560,765,26,170)],a:[573,850],x:"CHAO, BONUS X, CHECKPOINT, AWARD HERO and RINGS, in the shooter lane."},
 shooter:{n:"Shooter lane",c:1,s:[B([[572,1100],[572,700]],14)],a:[572,1000]},
 shootagain:{n:"Shoot Again insert",c:1,s:[C(285,1162,16)],a:[285,1162]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var LOWER=["lorbit","lramp","cramp","lockup","rramp","rorbit"];
var LABSHOTS=["lablorb","labrorb","labspin","labtl","labtr","labramps"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["zones","eggman","emeralds"],b:"<p>Play through seven zones. Make lit shots to reach checkpoints, reach the Goal Ring, then beat Eggman in a boss battle at the end of each zone. Along the way, collect the Chaos Emeralds and the Master Emerald.</p>"+UNK("The rulesheet is written for code 0.94 and is still being filled in. Several parts are marked not documented yet below.")},
 {t:"Left side shots",h:["lorbit","lramp","bash","chao"],b:"<p>From the left: the Chao target on the very left, the Bash target (the left standup), the left orbit and the left ramp. The left ramp sends the ball up to the lab.</p>"},
 {t:"Center shots",h:["cramp","lockup","drops"],b:"<p>The center ramp goes up the middle through the battle zone and also sends the ball to the lab. To its right is the lockup, a lane blocked by three inline drop targets.</p>"},
 {t:"Right side shots",h:["rramp","loop","rorbit","froggy"],b:"<p>The right ramp feeds the magnet-driven loop. Then the right orbit, and the Froggy target on the far right.</p>"},
 {t:"The lab",h:["lab","uflipl","uflipr","eggman"],b:"<p>Dr. Eggman's Laboratory is a clear upper playfield with two flippers of its own. Eggman sits at the back of it in his mech. Its shots are the 3x 'expert' shots in zones, shown by flashing blue lights.</p>"},
 {t:"Lab shots",h:["lablorb","labrorb","labspin","labtl","labtr","labramps"],b:"<p>The rulesheet names a left and right lab orbit, two lab targets, a lab spinner, a lab loopback ramp and a lab jump ramp.</p>"+UNK("I could not trace the lab ramps in the photo. Their highlight marks only a general area, and the other lab shots are estimates.")},
 {t:"Battle zone targets",h:["battle","cramp"],b:"<p>Six Badnik targets surround the center ramp. Complete all six to start Badnik Attack. The kickback fires the ball toward them.</p>"},
 {t:"Lockup",h:["lockup","drops"],b:"<p>Shoot the inline drop targets to lock balls for Chaos Emerald Multiball. Casino Night, Boss Rush and Super Sonic also start here when lit.</p>"},
 {t:"HERO lanes",h:["hlane","elane","rlane","olane"],b:"<p>H-E-R-O across the four lanes: H and E on the left, R and O on the right. They cycle with the flippers. Completing them earns heroes for Sonic Heroes Multiball.</p>"+UNK("The lane assignment (H outlane, E inlane, R inlane, O outlane) is from the photo's inserts.")},
 {t:"Kickback",h:["hlane"],b:"<p>The left outlane has a kickback, lit by collecting rings.</p>"},
 {t:"Action button",h:["shooter","skill"],b:"<p>The action button picks your zone and skill shot in the shooter lane, changes the active hero team, delays Sonic Heroes Multiball to collect more teams, and turns Chaos Control on and off.</p>"},
 {t:"Center inserts",h:["zones","feats","emeralds","master"],b:"<p>The zone inserts climb the center. Beside them are the four feature mode inserts. Above them are the seven Chaos Emeralds around the Master Emerald.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Choose a zone",h:["shooter","zones"],b:"<p>With the ball in the shooter lane, use the flippers and action button to select a zone. Plunging locks it in.</p>"},
 {t:"Ball 1: Lab Detour",h:[["cramp",1],["lramp",1],["eggman",2]],b:"<p>Eggman confronts Sonic. Plunge, shoot the center ramp or the left ramp to reach the lab, then hit Eggman's mech. It scores a hurry-up starting at 5M and raises boss battle scoring, with boss battles on ball 1 scoring 2x.</p>"+UNK("The chance ends after 20 seconds, or if the ball leaves the lab without hitting Eggman. Making it gives 10 seconds of victory laps where every lab shot adds 5 rings. JJP's flow chart says only 'Shoot left ramp'.")},
 {t:"Later balls: lock in an award",h:["skill","shooter"],b:"<p>Pick an award by plunging or with the flippers: Chao, Bonus X, Checkpoint, Award Hero or Rings.</p>"},
 {t:"Collect it",h:["rramp","rorbit","froggy"],b:"<p>Hit any white shot on the right side to score the award. A pink shot moves from right to left and back; hit it for the super skill shot. A short plunge starts the sequence on the left side shots instead. Each skill shot made lights fewer shots next time.</p>"+UNK("The rulesheet does not say which right side shots light white, so the highlight shows the right side shots in general.")},
 {t:"The awards",h:["skill"],b:"<p><b>Chao:</b> +1 Chao egg (super: eggs doubled for the ball). <b>Bonus X:</b> +1x (super: +3x and held, or +4x if already held). <b>Checkpoint:</b> next checkpoint (super: an expert shot's progress, a zone scoring boost and 10 seconds off the zone timer). <b>Award Hero:</b> spots HERO lanes, then heroes (super: one, then two, then three heroes). <b>Rings:</b> 10 rings + 5 per skill shot up to 25 (super: 25 + 5 per super skill shot up to 50, and more bonus per ring).</p>"+UNK("Checkpoint is not given at a zone's Goal Ring. Award Hero is not given if you have a full team and have not changed teams.")}
]},
/* ====== ZONES ====== */
{g:"Zones and bosses",id:"zones",title:"Playing a zone",steps:[
 {t:"Seven zones",h:["zones"],b:"<p>Green Hill, Chemical Plant, Rooftop Run, City Escape, Speed Highway, Sky Sanctuary and Seaside Hill.</p>"},
 {t:"Checkpoints",h:LOWER.concat(["bash","froggy","battle"]),b:"<p>Make lit shots to reach checkpoints, which save your progress in the zone. Each checkpoint has its own lit shots.</p>"+UNK("The rulesheet says each zone has 6 checkpoints, excluding the last two zones, but most of its shot maps list only a start and five checkpoints.")},
 {t:"Shot values",h:LOWER.concat(LABSHOTS),b:"<p>Shots score 1x, 2x or 3x by difficulty. 1x and 2x shots are on the lower playfield. 3x 'expert' shots are on the lab, shown by flashing blue lights.</p>"},
 {t:"Goal Ring",h:[["cramp",0],["labramps",0]],b:"<p>The last shot of a zone is the Goal Ring: the center ramp (2x) or the lab jump ramp (3x), in single-ball play.</p>"},
 {t:"Rank",h:["zones"],b:"<p>Reaching the Goal Ring tallies and ranks the zone. Rank depends on how fast you finished, how many expert shots you made, your rings, and the Chaos Emeralds you hold. Later in the game the top S rank gets easier.</p>"},
 {t:"Multiballs and zones",h:["zones"],b:"<p>A multiball stacks with the zone until you reach the Goal Ring. If you are at the Goal Ring, the zone timer pauses and checkpoint shots switch off, so a boss battle cannot start during multiball.</p>"}
]},
{g:"Zones and bosses",id:"maps",title:"Zone shot maps",steps:[
 {t:"Green Hill",h:alt(["lramp","rramp","lorbit","rorbit","lablorb","labrorb"]),b:"<p>Start: left or right ramp (1x), left or right orbit (2x), left or right lab orbit (3x). Then: center ramp / lockup / either lab target; right ramp / either orbit / lab loopback; left ramp / either orbit / lab jump ramp (shortcut); center ramp / Bash target / lab spinner; center ramp or 6 Badnik targets / Chao target / either lab orbit; center ramp or 6 Badnik targets / either orbit / lab loopback.</p>"+UNK("Highlights show the start shots. Each later checkpoint is listed as 1x / 2x / 3x.")},
 {t:"Chemical Plant",h:alt(["cramp","bash","labspin"]),b:"<p>Start: center ramp twice (1x), Bash target (2x), lab spinner (3x). Then: left orbit or left ramp twice / Chao target twice / either lab orbit; right ramp twice / Froggy target twice / lab loopback; either ramp / lockup / left lab target; center ramp twice / Bash target twice / right lab target; center ramp twice / Chao target / left lab orbit twice.</p>"},
 {t:"Rooftop Run",h:alt(["lorbit","rorbit","lramp","cramp","rramp","lab"]),b:"<p>Start: either orbit (1x), any ramp (2x), any lab shot or target (3x). Then: center ramp / left ramp / lab loopback; lockup twice / Bash target / right lab orbit; 6 Badnik target hits / none / left lab orbit (shortcut); either orbit / none / lab jump ramp; right ramp twice / Chao target twice / none.</p>"},
 {t:"City Escape",h:alt(["lramp","rorbit","labtr"]),b:"<p>Start: left ramp (1x), right orbit (2x), right lab target (3x). Then: right ramp / left ramp / right orbit; lockup / Bash target / lab loopback; center ramp / Froggy target / lab spinner; 6 Badnik target hits / Chao target / none; none / none / left lab orbit twice.</p>"+UNK("The rulesheet lists the right orbit, not a lab orbit, as checkpoint 1's 3x shot. Shown as written.")},
 {t:"Speed Highway",h:alt(["cramp","lorbit","rorbit","lablorb","labrorb"]),b:"<p>Start: center ramp (1x), either orbit (2x), either lab orbit (3x). Then: either ramp twice / none / lab loopback; none / Bash target twice / either lab target; 6 Badnik target hits / right orbit / either lab ramp; right ramp twice / right orbit / left lab orbit; lockup twice / Bash target twice / lab spinner.</p>"},
 {t:"Sky Sanctuary",h:["zones"],b:"<p>Not documented yet.</p>"+UNK("The rulesheet's Sky Sanctuary table is empty.")},
 {t:"Seaside Hill",h:alt(["lorbit","labrorb"]),b:"<p>Start: left orbit (1x), right lab orbit (3x). Then: center ramp / either ramp; lockup / center ramp / lab spinner.</p>"+UNK("The rulesheet lists only the start and two checkpoints. The rest is not documented yet.")},
 {t:"Goal Ring for every zone",h:[["cramp",0],["labramps",0]],b:"<p>Every zone's Goal Ring is the center ramp (2x) or the lab jump ramp (3x).</p>"}
]},
{g:"Zones and bosses",id:"boss",title:"Boss battles",steps:[
 {t:"Get to the lab",h:[["cramp",1],["lramp",1]],b:"<p>After the zone is ranked, Eggman appears and the boss battle starts. Shoot the center ramp or the left ramp to reach the lab.</p>"},
 {t:"Attack",h:["eggman","lab"],b:"<p>Hit Eggman's mech enough times to attack and score a hurry-up that falls over time. Each battle is harder. Later bosses need lab shots first to lower Eggman.</p>"+UNK("The rulesheet says boss 4 needs lab shots to lower him with the center drop target active, and boss 5 needs the lab orbits.")},
 {t:"Rewards",h:["eggman","feats"],b:"<p>Each boss defeated gives an award. Boss 1: a boosted Tails Hurry-Up. 2: qualify Casino Night. 3: light extra ball. 4: qualify Boss Rush. 5: +5x bonus X. 6: 50M. 7: Casino Night. 8: 75M. 9: Boss Rush. 10: Casino Night. 11: +5x bonus X. 12: Boss Rush. 13: light extra ball. 14: 100M.</p>"+UNK("JJP's flow chart (version 1) lists a different order: 1 boosted Tails Hurry-Up, 2 light extra ball, 3 Casino Night, 4 rings and bonus X, 5 Boss Rush, 6 boosted next level scoring. JJP's 0.960 code notes say Boss Rush is qualified by 4 boss wins by default, which matches the rulesheet.")}
]},
/* ====== FEATURE MODES ====== */
{g:"Feature modes",id:"master",title:"Master Emerald Mission",steps:[
 {t:"Qualify",h:LABSHOTS.concat(["feats"]),b:"<p>Collect lab shots: by default 5 orbits, 5 targets, 5 of either ramp and 25 spinner spins. They count any time outside boss battles and other feature modes.</p>"},
 {t:"Start",h:[["cramp",1]],b:"<p>Shoot the center ramp when lit green, in single-ball play with no other mode running.</p>"},
 {t:"Collect the shards",h:LOWER.concat(LABSHOTS),b:"<p>You get 30 seconds of ball save. Within 70 seconds, shoot green shots to collect 2 or 3 of the 30 shards each. A hit shot turns red; red shots score smaller jackpots and raise each shard's value. After 20 shards every shot is red, and you hold the action button to reveal where the next shards are.</p>"},
 {t:"Finish",h:[["cramp",0],["labramps",0],["lockup",0]],b:"<p>The last shot is always one that holds the ball: the center ramp, the lab jump ramp or the lockup. If you fail, requalify with more lab shots and resume where you left off.</p>"},
 {t:"Reward",h:["bash","master"],b:"<p>Recovering the Master Emerald boosts Bash Dash scoring for the rest of the game: it starts at 3x and goes up 2x per captive ball hit.</p>"+UNK("With the green Chaos Emerald, victory laps stay on afterwards, and green lab shots build a jackpot scored at the Bash target.")}
]},
{g:"Feature modes",id:"casino",title:"Casino Night",steps:[
 {t:"Start",h:[["lockup",1],"feats"],b:"<p>After winning 2, 7 and 10 boss battles, the lockup lights to start Casino Night in single-ball play. While it is lit, the drop targets do not count toward Chaos Emerald Multiball.</p>"},
 {t:"Earn tokens",h:LOWER.concat(["chao","froggy","bash","drops","battle"]),b:"<p>The mode starts with 60 seconds of ball save. It has three stages. Complete tasks to earn tokens. Stage 1 tasks include Chao then Froggy target, 2 ramps or 2 orbits. Stage 2 asks for more, such as 4 ramps or 10 Badnik targets. Stage 3 asks for shots in order or 5 of one orbit.</p>"},
 {t:"Spin the slots",h:[["cramp",1],["labramps",1]],b:"<p>Shoot the center ramp or the lab jump ramp to use the slot machine. With enough tokens you can add awards from all three rows to your prize bank. Awards include points, tokens, a hero, rings, a Chao egg, a kickback charge and extra ball. After stage 1, three Eggman icons remove the top award.</p>"},
 {t:"Cash out",h:["feats"],b:"<p>You only score the prize bank if you cash out during the mode. Drain before then and it is lost. Clearing all three stages makes the next spin a 100M jackpot that ends the mode and cashes out.</p>"+UNK("How you cash out is not documented yet.")}
]},
{g:"Feature modes",id:"bossrush",title:"Boss Rush",steps:[
 {t:"Start",h:[["lockup",1],"feats"],b:"<p>After winning 4, 9 and 12 boss battles, the lockup lights for Boss Rush in single-ball play.</p>"},
 {t:"Play",h:["eggman","lab"],b:"<p>Sonic and Shadow face all seven of Eggman's machines in a row. Beat the mech on the lab to add a ball. Then follow the flashing shots to drop each shield, damage the mech and add a ball. Bash Dash can run during it and multiplies all scoring.</p>"+UNK("What each boss needs is not documented yet. The rulesheet's author knows boss 7 needs all 5 lower playfield shots first. Progress is saved if you fail, and your best time is saved if you finish. JJP's code notes say Boss Rush was enabled in 0.960 (October 2026).")}
]},
{g:"Feature modes",id:"supersonic",title:"Super Sonic",steps:[
 {t:"Not finished in the code",h:[["lockup",1],"emeralds","feats"],b:"<p>Collect all seven Chaos Emeralds and the lockup lights for Super Sonic. The mode is not implemented yet: it scores 100M and takes away all seven emeralds and their perks.</p>"+UNK("After that you can still play Chaos Emerald Multiball, but only for jackpots and super jackpots. The rulesheet says this is true on 0.96 code.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"bashdash",title:"Bash Dash",steps:[
 {t:"Hold a ball",h:[["bash",1]],b:"<p>During either multiball, shoot the Bash target (the left standup). It holds the ball and raises the jackpot multiplier, starting at 2x (3x with the Master Emerald).</p>"},
 {t:"Bash the held ball",h:["bash"],b:"<p>Each hit on the held ball adds +1x (+2x with the Master Emerald) while Bash Dash lasts.</p>"},
 {t:"Timer",h:["bash"],b:"<p>Bash Dash lasts 10 seconds. Hitting the Bash target in normal play adds 4 seconds. Collect rings in multiball to relight it. Chaos Control pauses its timer.</p>"}
]},
{g:"Multiballs",id:"emerald",title:"Chaos Emerald Multiball",steps:[
 {t:"Lock balls",h:[["drops",1],["lockup",2]],b:"<p>Shoot the inline drop targets to lock balls. The first multiball needs one lockup shot to start; each later one needs one more, up to three.</p>"},
 {t:"Jackpots",h:LOWER.concat(LABSHOTS),b:"<p>The orbits and ramps are lit for jackpots, and lab shots for 2x jackpots. The last jackpot of each set is a super jackpot starting at 2M.</p>"},
 {t:"Emeralds 1 to 3",h:[["lockup",1],["rramp",2],["labramps",3]],b:"<p>1: shoot the lockup. 2: shoot the right ramp twice, then the lockup. 3: shoot the lab jump ramp.</p>"},
 {t:"Emeralds 4 and 5",h:[["labramps",4],["labspin",5],["lockup",0]],b:"<p>4: shoot the lab loopback ramp. 5: make 50 spins, then the lockup.</p>"},
 {t:"Emeralds 6 and 7",h:["labtl","labtr","bash","froggy",["lockup",0]],b:"<p>6: hit all four targets (two on the lab, two on the lower playfield), then the lockup. 7: make all the lab orbit, target and ramp shots, then the lockup.</p>"+UNK("Which two lower playfield targets count for emerald 6 is not documented yet. The highlight guesses the Bash and Froggy targets; the manual's switch list has a left target and a right target.")},
 {t:"Emerald perks",h:["emeralds"],b:"<p>Each emerald adds 15 seconds to Chaos Control and a perk matching its color. Red: Badnik Attack. Purple: Find Froggy. Blue: zone rank. Green: Master Emerald Mission. Cyan: Advance Chao. Yellow: 1.5x rings. White: Tails Hurry-Up.</p>"+UNK("On normal settings the order of colors is random.")}
]},
{g:"Multiballs",id:"heroes",title:"Sonic Heroes Multiball",steps:[
 {t:"Collect heroes",h:["hlane","elane","rlane","olane"],b:"<p>Complete the HERO lanes to collect team members. There are four teams of three. The action button changes the active team.</p>"},
 {t:"Start",h:[["bash",1]],b:"<p>Once one team is complete, the Bash target starts Sonic Heroes Multiball. Press the action button during the intro to delay it and collect more teams.</p>"},
 {t:"Team shots",h:[["lorbit",0],["lramp",0],["rramp",0],["rorbit",0]],b:"<p>A completed team makes its shot score 1.25x: Chaotix the left orbit, Dark the left ramp, Sonic the right ramp, Rose the right orbit.</p>"},
 {t:"Jackpots",h:["battle","cramp","lab","rorbit","lorbit"],b:"<p>Each jackpot raises the jackpot value by 100K. Team Sonic's jackpots are the Badnik targets and center ramp, Team Dark's are on the lab, Team Rose's are near the right orbit and Team Chaotix's are near the left orbit.</p>"},
 {t:"Super jackpots",h:[["bash",1],["lockup",0]],b:"<p>Clearing a team's set lights its super jackpot at the Bash target. Several lit super jackpots multiply its value, and Bash Dash multiplies it again. Add-a-ball lights at the lockup once the ball save ends.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"rings",title:"Ring combos",steps:[
 {t:"Light rings",h:["elane","rlane","lorbit","rorbit"],b:"<p>Roll through the inlanes or shoot the orbits repeatedly to light rings. Collect them with yellow shots near them, as combos. Lit zone shots add rings too.</p>"},
 {t:"What rings do",h:["hlane",["cramp",0]],b:"<p>Rings rank your zones, raise the end-of-ball bonus, and set values in Spin Dash and feature modes. 50 rings (plus 25 more each time) light the kickback or add a charge. 100 rings light extra ball at the center ramp.</p>"},
 {t:"Losing rings",h:["olane"],b:"<p>Tilting removes half the rings you made this ball. Draining down the right outlane removes a few.</p>"}
]},
{g:"Other scoring",id:"chao",title:"Advance Chao",steps:[
 {t:"Spawn an egg",h:[["chao",1]],b:"<p>Hit the Chao target on the far left to spawn a Chao egg and light Advance Chao at both orbits.</p>"},
 {t:"Advance",h:[["lorbit",2],["rorbit",2]],b:"<p>Shoot orbits repeatedly for rising values.</p>"}
]},
{g:"Other scoring",id:"badnik",title:"Badnik Attack",steps:[
 {t:"Start",h:["battle"],b:"<p>Complete all six battle zone targets to start a timed Badnik Attack. More hits score more but each wave is harder.</p>"+UNK("JJP's flow chart says the magnet is active during it.")},
 {t:"Lab hurry-up",h:["labtl","labtr"],b:"<p>Hitting the lab targets during Badnik Attack starts a lab hurry-up, which can clear a whole wave in one shot. Defeated Badniks add to the bonus.</p>"}
]},
{g:"Other scoring",id:"spindash",title:"Spin Dash",steps:[
 {t:"Qualify",h:[["rramp",1]],b:"<p>Shoot the right ramp 5 times to light Spin Dash there. Each later one needs 5 more ramps than the last.</p>"},
 {t:"Spin",h:["rramp","loop"],b:"<p>Shoot the right ramp and you control the magnet that sends the ball through the loop. Use the flippers to build Sonic's speed, then press the action button inside the green window. The award depends on your rings. From the second Spin Dash the window moves.</p>"+UNK("By default a ball that drains straight down the middle after the right ramp is saved.")}
]},
{g:"Other scoring",id:"froggy",title:"Find Froggy",steps:[
 {t:"Light it",h:["froggy","zones"],b:"<p>Reaching a checkpoint lights the Froggy target on the far right for a mystery award based on your fishing gear. Each time takes more checkpoints.</p>"},
 {t:"Awards",h:["froggy"],b:"<p>Lower awards include 5M and 5 or 10 rings; higher ones include an 8-second ball save. With all the gear, the target flashes purple and green: catch Froggy to light extra ball at the center ramp.</p>"}
]},
{g:"Other scoring",id:"tails",title:"Tails Hurry-Up",steps:[
 {t:"Qualify",h:["labspin"],b:"<p>Make 50 spins on the lab spinner to qualify the left inlane.</p>"},
 {t:"Collect",h:[["elane",1]],b:"<p>Roll through the left inlane. It holds the ball, lights a random shot you can hit from the left flipper, then releases the ball. Each hurry-up adds the value of the one before.</p>"+UNK("Which shots it can light is not documented yet.")}
]},
{g:"Other scoring",id:"control",title:"Chaos Control",steps:[
 {t:"Freeze time",h:["emeralds"],b:"<p>With any Chaos Emerald, press the action button to freeze all running timers, for 15 seconds per emerald. Press again to restart them. It affects the zone timer, the boss battle and Tails hurry-ups, and the Bash Dash timer.</p>"+UNK("JJP's 0.960 code notes say Chaos Control is disabled during Casino Night.")}
]},
{g:"Other scoring",id:"extraball",title:"Extra ball and bonus",steps:[
 {t:"Kickback",h:["hlane"],b:"<p>50 rings light the left outlane kickback, then 25 more each time. If it is lit, the rings add a charge. It fires the ball toward the battle zone targets.</p>"},
 {t:"Light extra ball",h:[["cramp",0]],b:"<p>Extra ball lights at the center ramp for: beating boss 3 and boss 13, collecting 100 rings, or finding Froggy. If extra balls are off, you get 10M.</p>"},
 {t:"End-of-ball bonus",h:["shootagain"],b:"<p>Not documented yet.</p>"+UNK("The rulesheet's bonus section is empty. Rings, defeated Badniks and emeralds are mentioned elsewhere as adding to it.")}
]}
];

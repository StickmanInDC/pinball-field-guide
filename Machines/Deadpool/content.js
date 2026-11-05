/* ---------- playfield features (coordinates in the 640x1267 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[82,525],[77,470],[62,390],[48,300],[46,200],[66,110]],18)],a:[77,470],x:"The leftmost arrow. The Dazzler Team-Up insert sits in front of it, and the rulesheet qualifies Dazzler at the left orbit. The owner confirms the Dazzler spinner is in this lane. Past the arrow the path is a guess.",v:{premium:{x:"The leftmost arrow, with the Dazzler figure beside it. The rulesheet qualifies Dazzler at the left orbit. On the Premium and LE, Stern's features list says this orbit feeds the right flipper through a moving up/down ramp. Past the arrow the path is a guess."}}},
 left_ramp:{n:"Left ramp",c:0,s:[B([[180,645],[152,565],[128,480],[110,395],[128,348]],22)],a:[152,565],x:"The steel ramp on the left, entered past the lower arrow of the second lane. Stern's photos show the ramp rising from here under the red arch, with the wireforms coming back down the left side. Which arrow belongs to the ramp is my reading."},
 uturn:{n:"U-turn (Colossus Loop)",c:0,s:[B([[204,525],[186,462],[178,400],[180,340],[186,260],[190,195]],18)],a:[180,410],x:"The upper arrow of the second lane. The Colossus Team-Up and Special inserts sit by it, and the rulesheet qualifies Colossus and lights Special at the U-turn. Stern's apron card calls it the Colossus Loop. The path past the arrow, toward the Colossus figure, is a guess, and this may be swapped with the left ramp."},
 colossus:{n:"Colossus",c:1,s:[R(148,68,86,122)],a:[190,128],x:"The Colossus cut-out at the top left. The owner confirms the Colossal Jackpot target is reached through the Colossus Loop (the U-turn). It is not visible in the photos."},
 scoop:{n:"Scoop",c:0,s:[B([[248,540],[238,470],[228,405]],20),C(222,358,17)],a:[248,530],x:"Stern's features list calls it the Hell House scoop. I placed it under the Shoot Here sign, at the head of the lane printed with Extra Ball, Mystery and Quest, which the rulesheet all collects at the scoop. I could not see the hole itself."},
 dazzler_spin:{n:"Dazzler spinner",c:0,s:[R(52,382,24,14)],a:[64,389],x:"The owner confirms the Dazzler spinner is in the left orbit. I could not see the spinner itself, so its spot in the lane is a guess."},
 center_spin:{n:"Center spinner",c:0,s:[B([[270,425],[280,350],[285,290]],18),R(272,228,26,32)],a:[280,350],x:"The lane behind the Wolverine Team-Up insert. The rulesheet qualifies Wolverine at the center spinner, and the Wolverine art plate at the top of the lane fits Stern's \"Wolverine spinner\". I treat the rulesheet's center loop as this shot."},
 right_ramp:{n:"Right ramp",c:1,s:[B([[464,640],[468,580],[478,512],[503,470],[528,420],[530,330],[530,252]],22)],a:[468,580],x:"The lane with the green Lock insert, up into the katana handle. Stern's features list puts the multiball lock in the handle, and the rulesheet locks Ninja Multiball at the right katana ramp. The exact path past the Lock insert is my reading."},
 katana:{n:"Katana blade return",c:1,s:[B([[522,480],[514,700],[500,900],[484,1055]],16)],a:[510,780],x:"Stern's features list calls the katana a ramp return. Where it drops the ball is my reading of the photo."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[541,625],[558,520],[578,420],[585,320],[578,220],[552,160]],18)],a:[558,520],x:"The rightmost arrow, with the Domino Team-Up insert in front of it. The rulesheet qualifies Domino at the right orbit. The chimichanga truck sits at its top. Past the arrow the path is a guess."},
 truck:{n:"Chimichanga truck",c:1,s:[R(455,100,120,58)],a:[515,128],x:"The truck at the top right. The rulesheet advances it with right orbit shots.",v:{premium:{x:"The molded truck at the top right. The rulesheet advances it with right orbit shots."}}},
 snikt:{n:"SNIKT! target",c:0,s:[R(307,290,16,54)],a:[315,317],x:"The owner confirms the SNIKT! standup sits right of the center spinner, on the left side of the pop bumpers. I marked the dark face between the lane and the upper bumper."},
 lil_dp:{n:"Lil' Deadpool target",c:1,s:[E(440,380,36,42)],a:[440,380],x:"The Lil' Deadpool bash toy. Stern's features list calls it the Lil' Deadpool target and says the 3-bank drop targets guard it."},
 oof:{n:"OOF drop targets",c:0,s:[R(326,524,24,18),R(362,532,24,18),R(398,541,24,18)],a:[374,540],x:"Three drop targets at the front of the Keep Out lock, above the printed OOF. I marked them along the front edge. I could not see the targets themselves in the photo."},
 keepout:{n:"Keep Out lock",c:1,s:[R(304,466,166,84)],a:[386,508],x:"The Keep Out box in front of Lil' Deadpool. The rulesheet locks the ball behind the drop targets here."},
 dead:{n:"D-E-A-D targets",c:0,s:[R(86,716,14,24),R(86,752,14,24),R(86,785,14,24),R(86,818,14,24)],a:[93,780],x:"Standup targets in the dark slot left of the D-E-A-D inserts. The wireforms hide most of them, so the marks are spaced to match the letters.",v:{premium:{n:"D-E-A-D drop targets",x:"Drop targets on the Premium and LE, per Stern's features list, in the slot left of the D-E-A-D inserts. The wireforms hide most of them."}}},
 pool:{n:"P-O-O-L targets",c:0,s:[R(532,716,14,24),R(532,752,14,24),R(532,785,14,24),R(532,818,14,24)],a:[539,780],x:"Standup targets between the katana's steel bars, right of the P-O-O-L inserts. The katana hides most of them.",v:{premium:{n:"P-O-O-L drop targets",x:"Drop targets on the Premium and LE, per Stern's features list, right of the P-O-O-L inserts. The katana hides most of them."}}},
 dead_ins:{n:"D-E-A-D inserts",c:1,s:[C(130,728,13),C(129,764,13),C(129,797,13),C(128,830,13)],a:[129,780]},
 pool_ins:{n:"P-O-O-L inserts",c:1,s:[C(505,728,13),C(505,764,13),C(505,797,13),C(505,830,13)],a:[505,780]},
 pops:{n:"Pop bumpers",c:0,s:[C(355,305,24),C(355,445,24)],a:[355,445],x:"The shuriken caps, which Stern's features list puts on the pop bumpers. A Stern photo shows a third bumper beside Lil' Deadpool, but the toy hides it from above, so only two are marked."},
 top_lanes:{n:"BAM! top lanes",c:1,s:[E(355,252,10,24),E(403,252,10,24),E(450,252,10,24),E(498,252,10,24)],a:[426,252],x:"Four lanes under the printed BAM!. The rulesheet raises the bonus multiplier for completing them and uses them for the lane skill shot."},
 boom_lanes:{n:"BOOM return lanes",c:0,s:[E(47,1015,9,24),E(95,1020,9,26),E(508,1005,9,24),E(550,1020,9,26)],a:[95,1020],x:"The four lanes above the flippers. The apron card says BOOM bottom lanes, and the M prints by the right outlane. The right inlane is hidden under the katana tip, so that mark is a guess."},
 left_out:{n:"Left outlane",c:0,s:[E(47,1015,10,26)],a:[47,1015],x:"The leftmost bottom lane, which the rulesheet lights for Regeneration ball save."},
 lock_ins:{n:"Lock insert",c:1,s:[C(490,546,15)],a:[490,546]},
 colossal_ins:{n:"Colossal Jackpot art",c:1,s:[E(288,455,28,22)],a:[288,455],x:"Printed Colossal Jackpot beside the Colossus art. It is not the target."},
 eb_ins:{n:"Extra Ball insert",c:1,s:[C(256,520,15)],a:[256,520]},
 mystery_ins:{n:"Mystery insert",c:1,s:[C(256,560,14)],a:[256,560],x:"The question mark insert in the scoop lane."},
 quest_ins:{n:"Quest insert",c:1,s:[E(262,600,22,10)],a:[262,600]},
 special_ins:{n:"Special insert",c:1,s:[C(192,511,12)],a:[192,511]},
 teamups:{n:"Team-Up inserts",c:1,s:[E(132,687,22,10),E(205,507,16,9),E(268,378,22,10),E(495,687,20,10)],a:[268,378],x:"Printed Team-Up! in front of the Dazzler, Colossus, Wolverine and Domino shots. The Colossus one is half hidden by the wireforms."},
 battles:{n:"Battle art",c:1,s:[E(197,942,26,10),E(297,942,24,10),E(397,942,28,10)],a:[297,942],x:"Printed Juggernaut, Mystique and Sabretooth."},
 sauron_art:{n:"Sauron art",c:1,s:[E(427,881,22,10)],a:[427,881]},
 sinister_art:{n:"Mr. Sinister art",c:1,s:[E(392,801,28,10)],a:[392,801]},
 quest_art:{n:"Quest art",c:1,s:[E(247,1006,20,10),E(347,1007,26,10)],a:[297,1006],x:"Printed T-Rex and Megalodon, the two Quests."},
 pfx_ins:{n:"Multiplier inserts",c:1,s:[E(250,1091,22,10),E(297,1072,22,10),E(345,1091,22,10),E(297,1110,22,10)],a:[297,1091],x:"Printed 2X, 3X, 4X and 5X. The rulesheet does not explain them. Its playfield multiplier runs 2x to 5x, so I read them as that. That is my inference."},
 disco:{n:"Disco ball",c:1,s:[],a:[90,195],x:"Premium and LE only: Stern's motorized disco ball, over the left side.",v:{premium:{s:[C(90,195,32)],a:[90,195]}}},
 wolverine_fig:{n:"Wolverine figure",c:1,s:[],a:[330,190],x:"Premium and LE only. The rulesheet does not mention it.",v:{premium:{s:[E(330,190,22,50)],a:[330,190]}}},
 dazzler_fig:{n:"Dazzler figure",c:1,s:[],a:[32,540],x:"Premium and LE only, beside the left orbit.",v:{premium:{s:[E(32,540,24,40)],a:[32,540]}}}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_orbit","left_ramp","uturn","center_spin","right_ramp","right_orbit"];
var ALL=MAJ.concat(["scoop"]);
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:alt(ALL.concat(["lil_dp"])),b:"<p>Deadpool fights villains in side-scrolling battles and travels back in time on Quests for artifacts, while Mr. Sinister plots something. Win battles and Quests, play the multiballs, and work up to the Mr. Sinister wizard modes.</p>"},
 {t:"The main shots",h:NUM(["left_orbit","left_ramp","uturn","scoop","center_spin","lil_dp","right_ramp","right_orbit"]),b:"<p>Left to right, as I read the photo: left orbit, left ramp, U-turn, scoop, center spinner, Lil' Deadpool, right ramp, right orbit.</p>"+UNK("The rulesheet's Layout section is only photos. This order is my reading of the arrows and inserts. Team-Up inserts fix the left orbit, U-turn, center spinner and right orbit, and the Lock insert fixes the right ramp. The left ramp, U-turn and scoop are the least certain.")},
 {t:"Team-Up shots",h:["left_orbit","uturn","center_spin","right_orbit","teamups"],b:"<p>Four shots carry a Team-Up! icon: Dazzler at the left orbit, Colossus at the U-turn, Wolverine at the center spinner and Domino at the right orbit. Stern's apron card says the same four heroes.</p>"},
 {t:"Lil' Deadpool and the drop targets",h:["lil_dp","oof","keepout"],b:"<p>The OOF drop target bank guards the Lil' Deadpool target. Hitting Lil' Deadpool when lit locks the ball behind the drop targets.</p>"},
 {t:"D-E-A-D and P-O-O-L",h:["dead","pool","dead_ins","pool_ins"],b:"<p>Two banks of four targets, one each side, spell DEADPOOL.</p>"},
 {t:"Katana ramp",h:["right_ramp","katana","lock_ins"],b:"<p>The right ramp is the katana ramp. Ninja Multiball locks are made here.</p>"},
 {t:"Lanes",h:["top_lanes","boom_lanes"],b:"<p>Four BAM! lanes at the top and four BOOM return lanes at the bottom. The BOOM lanes cycle with the flippers.</p>"+UNK("The rulesheet does not say whether the BAM! lanes cycle, only that you can change the flashing one before plunging.")},
 {t:"Pro and Premium/LE differences",ed:"premium",h:["dead","pool","disco",["left_orbit",0,"alt"]],b:"<p>The rulesheet lists one difference: Disco Loops replaces some Disco Multiballs on the Premium and LE. Stern's features list adds that D-E-A-D and P-O-O-L are drop targets here, and the left orbit feeds the right flipper through a moving up/down ramp.</p>"},
 {t:"Pro differences",ed:"pro",h:["dead","pool"],b:"<p>On the Pro, D-E-A-D and P-O-O-L are standup targets, per Stern's features list. There is no Disco Loops mode.</p>"},
 {t:"BOOM button",h:[],b:"<p>The action button on the lockdown bar is the BOOM button. See Other scoring.</p>"}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Battles",h:["scoop",["dead",0,"alt"]],b:"<p>Start battles at the scoop. Complete D-E-A-D if one isn't lit. Shoot flashing shots to defeat the enemy, then the scoop to finish them. Team-Ups bring allies in.</p>"},
 {t:"Quests",h:["right_orbit","truck","scoop"],b:"<p>Shoot the right orbit, collect chimichangas at the orange shots, then shoot the scoop.</p>"},
 {t:"Lil' Deadpool",h:["oof","lil_dp"],b:"<p>Complete the drop targets and shoot the standup behind them twice, then start Lil' Deadpool Multiball with another shot to the drop targets. This is best used while a battle is running.</p>"},
 {t:"Multiballs",h:["right_ramp","dazzler_spin","scoop"],b:"<ul><li>Lock 3 balls at the right ramp for Ninja Multiball.</li><li>Shoot the left spinner enough times for Disco Multiball.</li><li>Light and cash out weapons at major shots and the scoop for Mechsuit Multiball.</li></ul>"},
 {t:"Other features",h:["boom_lanes","left_ramp","right_ramp","snikt",["dead",0,"alt"],["pool",0,"alt"]],b:"<ul><li>Spell BOOM to qualify the BOOM button.</li><li>Complete the ramp diamonds for Katanarama Time.</li><li>Raise the playfield multiplier to 5x with the SNIKT! target to right ramp combo.</li><li>Spell DEADPOOL to light Mystery. Every 3 completions light the left outlane for Regeneration ball save.</li></ul>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Lane skill shot",h:["top_lanes"],b:"<p>Plunge into the flashing BAM! lane for 2.5M +250K per skill shot. You can change the flashing lane before launch, but it locks in at the first shooter lane switch.</p>"},
 {t:"Super skill shot",h:["right_ramp"],b:"<p>Hold the left flipper and shoot the right ramp for 5M +500K per skill shot. This also collects anything lit at the right ramp.</p>"},
 {t:"MXV skill shot",h:NUM(["right_orbit","right_ramp"]),b:"<p>Hold the left flipper, then shoot the right orbit to right ramp combo for 12.5M +750K per skill shot and the current Ninjapocalypse value.</p>"},
 {t:"Super secret skill shot",h:[["snikt",1],["right_ramp",2]],b:"<p>Hold the left flipper, then shoot the SNIKT! target to right ramp combo for 15M +1M per skill shot and +1 playfield X.</p>"+UNK("Stern's Pro page says the SNIKT! target redirects up the left ramp. The rulesheet says right ramp, and this guide follows the rulesheet.")}
]},
/* ====== MAIN MODES ====== */
{g:"Main modes",id:"battles",title:"Battles",steps:[
 {t:"Starting",h:["scoop",["dead",0,"alt"],["dead_ins",0,"alt"]],b:"<p>Battles start at the scoop at the start of each ball, or after completing D-E-A-D.</p>"},
 {t:"How they play",h:alt(MAJ).concat(["scoop"]),b:"<p>Like a side-scrolling fighter. Each flashing shot, including Team-Up shots, deals damage. Deadpool takes damage if lit shots aren't made. After the enemy is beaten, the scoop finishes them off within 10 seconds.</p><p>Running out of health or draining loses the battle, but progress is saved for the next attempt with a fresh health bar.</p>"},
 {t:"Juggernaut",h:["dead","pool",["oof",0,"alt"]].concat(alt(MAJ)),b:"<p>Hit any 4 D-E-A-D or P-O-O-L targets to taunt Juggernaut and stop his attacks. That lights all main shots for damage for 20 seconds, after which the targets must be shot again.</p>"},
 {t:"Mystique",h:[["center_spin",1],["left_ramp",2],["right_ramp",2]],b:"<p>Center spinner, then both ramps, then all three stay lit. When Mystique turns into a partner, shooting that Team-Up shot, if available, deals big damage.</p>"},
 {t:"Sabretooth",h:["left_orbit","center_spin","right_orbit",["pops",0,"alt"],["top_lanes",0,"alt"]],b:"<p>Shoot either orbit or the center spinner for damage. Orbit shots feed the top lanes and pop bumpers for extra damage.</p>"},
 {t:"Final Shot",h:["scoop"],b:"<p>The scoop's Final Shot value depends on Deadpool's remaining health and how quickly the enemy fell. Near full health it is worth about 30M. Draining with Final Shot lit still counts as a win. Tilting does not.</p>"}
]},
{g:"Main modes",id:"teamups",title:"Team-Ups",steps:[
 {t:"Qualifying",h:["teamups","left_orbit","uturn","center_spin","right_orbit"],b:"<p>In single-ball play with no major mode running, shoot a Team-Up shot twice (+1 if that team-up has already been used this game). That hero then helps in any battle.</p>"},
 {t:"Dazzler",h:["left_orbit"],b:"<p>Left orbit. Adds to Deadpool's health bar and adds time.</p>"},
 {t:"Colossus",h:["uturn"],b:"<p>U-turn. Doubles all points during the battle.</p>"},
 {t:"Wolverine",h:["center_spin"],b:"<p>Center spinner. Doubles all damage dealt.</p>"},
 {t:"Domino",h:["right_orbit"],b:"<p>Right orbit. Boosts a different feature for each enemy: targets for Juggernaut, the spinner for Mystique, bumpers for Sabretooth.</p>"+UNK("The rulesheet does not say which spinner Domino boosts for Mystique.")}
]},
{g:"Main modes",id:"sauron",title:"Sauron and level 2 battles",steps:[
 {t:"Sauron Multiball",h:["scoop","sauron_art"],b:"<p>Win all three battles to light Sauron at the scoop for 3-ball multiball.</p>"},
 {t:"Jackpots",h:[["left_ramp",0],["right_ramp",0],["uturn",0,"alt"]],b:"<p>Shoot the left and right ramps twice each for jackpots, then the U-turn to the Colossal Jackpot target for a super jackpot. The BOOM button can collect the first wave of four jackpots.</p>"+UNK("The target sits at the end of the Colossus Loop and is not visible in the photos, so the U-turn is marked.")},
 {t:"Level 2 battles",h:["left_ramp","right_ramp","battles"],b:"<p>After Sauron, the three battles must be played again. Sauron may resurface and block the win until you shoot both ramps once.</p>"},
 {t:"What it leads to",h:["scoop"],b:"<p>Winning all three level 2 battles lights Clone Multiball at the scoop.</p>"}
]},
{g:"Main modes",id:"quests",title:"Quests",steps:[
 {t:"Lighting a Quest",h:["right_orbit","truck",["quest_ins",0,"alt"]],b:"<p>Shoot the right orbit to advance the chimichanga truck and light chimichangas, in orange, at all major shots. One shot fully advances it the first time. Later Quests need one more right orbit shot.</p>"},
 {t:"Collecting chimichangas",h:alt(MAJ).concat(["scoop","quest_ins"]),b:"<p>Collect 3 chimichangas (+1 per Quest, up to 8) to complete your punch card and light Quest at the scoop. If both Quest and Battle are lit, you can pick either.</p>"},
 {t:"Finishing",h:["scoop"],b:"<p>Meet the Quest's goal, then shoot the scoop for a Mode Jackpot, a percentage of points scored during the Quest. Progress is saved if you fail. Draining with the final shot lit still counts, but you miss the Mode Jackpot.</p>"},
 {t:"T-Rex Quest",h:["oof","lil_dp","quest_art"],b:"<p>Shoot lit green shots to drop the Lil' Deadpool drop targets, then make the hurry-up at the Lil' Deadpool standup to throw a bomb. More green shots first raise the hurry-up. After five bombs, shoot the scoop.</p>"},
 {t:"Megalodon Quest",h:alt(ALL).concat(["quest_art"]),b:"<p>Almost every shot is lit light blue for small points. One strobing red shot is the Megalodon, moving between lit shots. Shoot it 5 times, then the scoop.</p>"},
 {t:"What it leads to",h:["scoop"],b:"<p>Win both Quests and play Sauron Multiball to light the Megakrakolodonus Rex at the scoop.</p>"}
]},
{g:"Main modes",id:"lildp",title:"Lil' Deadpool",steps:[
 {t:"Lighting the lock",h:["oof","lil_dp","keepout"],b:"<p>Knock down the OOF drop targets to expose the Lil' Deadpool target, then hit it 2 times (+1 per mode). When its large insert is fully green, hitting it locks the ball behind the drop targets.</p>"},
 {t:"Relighting",h:["scoop"],b:"<p>After a Lil' Deadpool mode, complete a battle or Quest to qualify the lock again. The modes can run in normal play or battles, not in Quests or multiballs, and always come in this order.</p>"},
 {t:"1. Lil' Deadpool Multiball",h:["oof","lil_dp"],b:"<p>A new ball goes to the shooter lane and a hurry-up counts down from 500K. Hit the drop targets to free the locked ball and set the hurry-up as your jackpot.</p>"},
 {t:"Multiball jackpots",h:["lil_dp"].concat(alt(MAJ),[["dazzler_spin",0,"alt"]]),b:"<p>Collect the jackpot 5 times at Lil' Deadpool, then 5 times at 2x at the flashing red major shots. Then lock a ball at Lil' Deadpool to light the spinners for super jackpot, 500K per spin. It then resets with higher jackpots.</p>"+UNK("The rulesheet does not say which spinners. I take them to be the Dazzler and center spinners.")},
 {t:"2. Lil' Deadpool Frenzy",h:["lil_dp"],b:"<p>60 seconds where every switch scores 100K. Lil' Deadpool raises the switch value by 10K, up to 250K.</p>"},
 {t:"3. Lil' Deadpool Bounce",h:["dead","oof","pool","lil_dp"],b:"<p>All 11 targets (D-E-A-D, OOF and P-O-O-L) rove from left to right. A lit OOF target is worth 5M, a side target 7.5M, a bottom side target 10M. Three collected lights Lil' Deadpool for a jackpot of those three values, +1 playfield X for the rest of the ball, and some magic unicorn poo.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"ninja",title:"Ninja Multiball",steps:[
 {t:"Locks",h:["right_ramp","lock_ins",["pool",0,"alt"]],b:"<p>Lock 3 balls at the right katana ramp. Locks are lit at the start of the game. After the first Ninja Multiball, complete P-O-O-L to relight them one at a time.</p>"},
 {t:"Ninja stars",h:["pops"].concat(alt(MAJ)),b:"<p>Bumper hits light major shots in blue. Shoot them to collect ninja stars, which raise Ninja Multiball jackpots.</p>"},
 {t:"Jackpots",h:alt(MAJ).concat(["right_ramp"]),b:"<p>Shoot all the major shots for jackpots set by your ninja stars. That lights a super jackpot at the right ramp, worth every jackpot collected so far. Ninja Multiball can stack with battles and Quests.</p>"}
]},
{g:"Multiballs",id:"disco",title:"Disco Multiball",steps:[
 {t:"Lighting it",h:["dazzler_spin",["left_orbit",0,"alt"]],b:"<p>Spin the left spinner 60 times (+60 per activation). With very few spins left, you can light and start it on the same shot, depending on your machine. Disco modes only start when no other mode is running.</p>"+UNK("Stern's apron card calls it the Dazzler spinner, in the left orbit. I could not see the spinner itself, so its spot in the lane is estimated.")},
 {t:"Disco Loops",ed:"premium",h:["left_orbit",["disco",0,"alt"]],b:"<p>On the Premium and LE, Disco Loops starts at 60, 180, 300 and so on spins, in place of Disco Multiball. It is a timed single-ball mode: loop the left orbit ramp as many times as you can.</p>"+UNK("The rulesheet does not say what the other activations start on the Premium and LE. Presumably Disco Multiball, but it does not state it.")},
 {t:"Jackpots",h:alt(ALL),b:"<p>Shoot lit shots for Disco Jackpots, built up by switch hits.</p>"},
 {t:"Super jackpot",h:["left_ramp",["dazzler_spin",0,"alt"]],b:"<p>A random shot in each wave starts the super jackpot round. The left ramp collects it and the left spinner raises it.</p>"}
]},
{g:"Multiballs",id:"mechsuit",title:"Mechsuit Multiball",steps:[
 {t:"Lighting it",h:alt(MAJ).concat(["scoop"]),b:"<p>Cash out 45 weapons by shooting white shots, then the scoop. Then shoot the scoop with no other mode running to start 4-ball Mechsuit Multiball. 150, 250, 350 weapons and so on relight it.</p>"},
 {t:"Jackpots",h:alt(ALL),b:"<p>All shots are lit for a jackpot starting at 5M, rising 100K each. A collected shot unlights, and collecting another relights the previous one.</p>"},
 {t:"Super jackpot",h:["scoop"],b:"<p>After 5 jackpots the scoop lights a super jackpot: 15M + 250K per jackpot this multiball. It raises the base jackpot by 1M. Other jackpots stay available.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"boom",title:"BOOM button",steps:[
 {t:"Lighting it",h:["boom_lanes"],b:"<p>Spell BOOM at the return lanes, which cycle with the flippers. Press the action button when it flashes to spot the highest value lit shot, other than the scoop.</p>"},
 {t:"Big Boom",h:alt(ALL),b:"<p>Complete BOOM 4 times without using it to light the button red for Big Boom, which collects all lit shots. Hold the button for a normal Boom instead. Uses are shown on the right of the display. If no shots are lit or all are equal, shots on the left get priority.</p>"},
 {t:"In Berserker Rage",h:["center_spin"],b:"<p>During Berserker Rage, the BOOM button also awards the Berserker Boom value, the highest spin value of the current Berserker Rage. Big Boom awards 4x that.</p>"}
]},
{g:"Other scoring",id:"items",title:"Chimichangas, weapons and ninja stars",steps:[
 {t:"Chimichangas",h:["right_orbit","truck"].concat(alt(MAJ)),b:"<p>Advance the truck at the right orbit, then shoot orange shots. Each adds 250K to bonus.</p>"},
 {t:"Weapons",h:alt(MAJ).concat(["scoop"]),b:"<p>Shoot white shots, then the scoop, to cash out weapons. More shots before the scoop means more weapons.</p><ul><li>25: lights extra ball.</li><li>45, 150, 250, 350 and so on: lights Mechsuit Multiball.</li><li>Every 100: +1 playfield X for the rest of the game.</li></ul><p>Each adds 100K to bonus.</p>"},
 {t:"Ninja stars",h:["pops"].concat(alt(MAJ)),b:"<p>Bumper hits light major shots in blue to collect ninja stars. 50 lights extra ball. Each adds 100K to bonus.</p>"},
 {t:"Ninjapocalypse",h:NUM(["right_orbit","right_ramp"]),b:"<p>The right orbit to right ramp combo collects 10 ninja stars plus 5M +500K per combo.</p>"}
]},
{g:"Other scoring",id:"katana",title:"Katanarama Time",steps:[
 {t:"Starting",h:["left_ramp","right_ramp"],b:"<p>Collect 3 diamonds at both ramps. It can start at any time.</p>"},
 {t:"Scoring",h:["left_orbit","left_ramp","right_ramp","right_orbit"],b:"<p>For 30 seconds these four shots score values starting at 1M and rising by 250 per shot.</p>"+UNK("The rulesheet says 250. It may mean 250K.")}
]},
{g:"Other scoring",id:"colossal",title:"Colossal Jackpot",steps:[
 {t:"Lighting it",h:["uturn","colossus",["colossal_ins",0,"alt"]],b:"<p>Make 2 shots (+2 per qualification) all the way through the U-turn to the Colossal Jackpot target. That lights the Colossal Jackpot at the same target.</p>"+UNK("The target sits at the end of the Colossus Loop and is not visible in the photos, so the U-turn and Colossus figure are marked.")},
 {t:"Value",h:["uturn"],b:"<p>Switch hits build the value, and hits while it is lit add more. A strong U-turn shot that hits the target doubles it, and playfield X multiplies it.</p>"}
]},
{g:"Other scoring",id:"berserker",title:"Berserker Rage",steps:[
 {t:"Starting",h:["center_spin"],b:"<p>Lit after 4 (+1) center loop shots. Shoot the flashing center loop to start it.</p>"+UNK("I treat the center loop as the center spinner lane. The rulesheet does not say so.")},
 {t:"Scoring",h:["center_spin",["dazzler_spin",0,"alt"],["pops",0,"alt"]],b:"<p>45 seconds where spinners score a rising value per spin, and bumpers raise it. Other features still start, and it can start during other features. It was added in July 2024 for the Deadpool and Wolverine movie.</p>"}
]},
{g:"Other scoring",id:"pfx",title:"Playfield X",steps:[
 {t:"Base multiplier",h:["pfx_ins"],b:"<p>Playfield X ranges from 2x to 5x. The base starts at 1x and rises from Lil' Deadpool Bounce (rest of the ball) or every 100 weapons (rest of the game).</p>"},
 {t:"SNIKT! boost",h:[["snikt",1],["right_ramp",2],"pfx_ins"],b:"<p>Rebound off the SNIKT! standup onto the right katana ramp for a temporary boost. Any SNIKT! hit adds a few seconds. The higher it is, the faster it times out. At 5x the combo only adds time.</p>"+UNK("Stern's Pro page says the SNIKT! target redirects up the left ramp, not the right. This guide follows the rulesheet.")}
]},
{g:"Other scoring",id:"targets",title:"DEADPOOL targets",steps:[
 {t:"D-E-A-D",h:["dead","dead_ins","scoop"],b:"<p>Lights a battle at the scoop if one isn't lit.</p>"},
 {t:"P-O-O-L",h:["pool","pool_ins","right_ramp"],b:"<p>Lights a Ninja Multiball lock at the right ramp if one isn't lit.</p>"},
 {t:"DEADPOOL",h:["dead","pool","scoop",["mystery_ins",0,"alt"]],b:"<p>Lights Mystery at the scoop.</p>"},
 {t:"Regeneration",h:["left_out","dead","pool"],b:"<p>Every 3 DEADPOOL completions light the left outlane for Regeneration ball save.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Lighting it",h:["scoop","mystery_ins"],b:"<p>Lit at the scoop by completing DEADPOOL. In multiball it usually awards an add-a-ball if available.</p>"},
 {t:"Awards",h:[],b:"<ul><li>Light Ninja Lock (if not lit)</li><li>1 to 10 ninja stars</li><li>1 to 10 weapons</li><li>500K</li><li>Advance chimichanga truck</li><li>Light extra ball (percentage-based)</li><li>Light Special (percentage-based)</li></ul><p>Watch for joke awards that are never picked.</p>"+UNK("The rulesheet says \"Ghost X Ninjas\". I read it as ninja stars.")}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls, Special and bonus",steps:[
 {t:"Extra ball",h:["scoop","eb_ins"],b:"<p>Lit at the scoop by 25 weapons, 50 ninja stars, or a rare Mystery award.</p>"},
 {t:"Special",h:["uturn","special_ins"],b:"<p>Lit at the U-turn by a rare Mystery award or by winning the Final Battle.</p>"},
 {t:"End-of-ball bonus",h:["top_lanes"],b:"<p>Chimichangas 250K each, ninja stars 100K, weapons 100K, times the bonus multiplier. Completing the 4 BAM! lanes raises the multiplier. Bonus is held between balls, the multiplier is not. With none of these you get 10 points.</p>"}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"rex",title:"Megakrakolodonus Rex",steps:[
 {t:"Lighting it",h:["scoop"],b:"<p>Lit at the scoop after Sauron Multiball and winning both Quests. The two artifacts have mutated into the Megakrakolodonus Rex.</p>"},
 {t:"Phase 1",h:alt(ALL),b:"<p>Single ball with a short ball saver. Shoot flashing blue shots to build a jackpot and reveal his weak spot.</p>"},
 {t:"Weak spot",h:["lil_dp"],b:"<p>You have 10 seconds to bash Lil' Deadpool as many times as you can for 1x, 2x, 3x jackpots and so on. Then back to phase 1 if he has health left.</p>"},
 {t:"Finishing",h:["lil_dp","scoop"],b:"<p>15 hits to the target finish him and light the scoop for the Mode Jackpot. Like a Quest, progress is saved if you drain.</p>"}
]},
{g:"Wizard modes",id:"clone",title:"Clone Multiball",steps:[
 {t:"The mode",h:["scoop"].concat(alt(ALL)),b:"<p>Win all 3 level 2 battles to qualify it at the scoop. 4 shots are lit blue for a hurry-up starting at 10M, which is not shown. Each blue shot resets the hurry-up to its maximum and unlights, and must be relit by a different blue shot.</p>"+UNK("The rulesheet does not say which 4 shots, so all main shots are marked.")}
]},
{g:"Wizard modes",id:"final",title:"The Final Battle",steps:[
 {t:"Lighting it",h:["scoop"],b:"<p>Complete the Megakrakolodonus Rex and Clone Multiball, and play Mechsuit Multiball, to light the Final Battle at the scoop against Mr. Sinister.</p>"},
 {t:"Phase 1",h:["left_orbit","uturn","center_spin","right_orbit","teamups"],b:"<p>45 seconds, single ball. Make all 4 Team-Up shots.</p>"+UNK("The rulesheet asks itself what happens if time runs out, and does not answer.")},
 {t:"Phase 2",h:alt(ALL).concat(["teamups"]),b:"<p>A 70-second multiball. Shoot blue shots for jackpots. Lit Team-Up shots double them. In the last 15 seconds, hit Final Shot for big points.</p>"+UNK("The rulesheet does not say where Final Shot is.")},
 {t:"After",h:["uturn","special_ins"],b:"<p>All balls drain, all modes reset and a new ball is served. Special lights at the U-turn.</p>"}
]}
];

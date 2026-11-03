/* ---------- playfield features (coordinates in the 640x1190 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 river:{n:"River lane",c:0,s:[B([[66,520],[62,460],[62,400],[66,330],[72,270]],13)],a:[62,430],x:"My reading: the outermost lane on the left, beside the Log Bridge insert. The rulesheet puts the river \"on the left side of the playfield\", reachable straight across from the upper right flipper and from the top after a right orbit or plunge. I could not see the lane itself."},
 log_bridge:{n:"Log Bridge insert",c:1,s:[C(64,405,12)],a:[64,405],x:"The blue Log Bridge insert. The rulesheet says it marks the river entrance and the switch above the log diverter, which sends the ball to the mini-flipper."},
 cliffs:{n:"Cliffs ramp",c:0,s:[B([[98,500],[92,440],[89,380],[89,320],[92,262]],15)],a:[89,360],x:"My reading: the far left arrow above the mini-flipper. The Light Island Jackpot insert sits at the top of this lane, and the rulesheet lights island jackpot with cliffs ramp shots, so I take this to be it. The ramp itself is hidden under the plastics."},
 ij_ins:{n:"Light Island Jackpot insert",c:1,s:[R(104,226,44,30)],a:[126,241]},
 mini:{n:"Mini-flipper",c:1,s:[B([[104,585],[150,594]],12)],a:[127,589],x:"The small flipper on the left. The log bridge diverts balls here to pick off drop targets or hit the cliffs ramp. The rulesheet also speaks of an \"upper left flipper\"; I take that to be this one."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[272,560],[245,515],[215,470],[185,425],[160,385],[150,335],[142,260],[148,170],[178,90],[240,40],[340,26]],16)],a:[160,385],x:"My reading: the second arrow from the left, fed along the drop target bank. The rulesheet says shots up the left orbit can sweep the drop targets, and weak ones fall into the hidden lane under Kong, so it must run over the top to the right. Every part of the path is a guess."},
 drops:{n:"KONG drop targets",c:0,s:[R(158,438,13,13),R(174,467,13,13),R(189,498,13,13),R(203,528,13,13)],a:[189,498],x:"Stern lists a 4-bank of sweepable Lost Temple drop targets lettered K-O-N-G. I placed them in the dark channel beside the glyph inserts; the photo is taken from above and the targets are not clear in it."},
 glyphs:{n:"Glyph inserts",c:1,s:[C(151,453,8),C(167,482,8),C(182,513,8),C(196,543,8)],a:[167,482],x:"Four framed glyph inserts on the Lost Temple panel, printed \"decipher glyphs to find island treasure\"."},
 treasure_tgt:{n:"Island Treasure target",c:0,s:[C(193,436,9)],a:[193,436],x:"The rulesheet hides the Island Treasure standup behind the upper two drop targets. I could not see it; this is my guess."},
 treasure_ins:{n:"Island Treasure insert",c:1,s:[E(117,422,16,10)],a:[117,422]},
 powerup:{n:"Power-up target",c:0,s:[C(282,555,12)],a:[282,555],x:"The rulesheet puts the power-up target to the right of the KONG drop targets. I marked the Power Up insert; the target itself is not clear in the photo."},
 sweep_ins:{n:"Super Sweep Bonus insert",c:1,s:[E(244,618,10,22)],a:[244,618]},
 side_ramp:{n:"Side ramp (biplane ramp)",c:0,s:[B([[268,470],[252,420],[230,350],[210,280],[194,200],[182,120],[176,60]],20)],a:[240,390],x:"The clear ramp that runs up under the biplane. \"Side ramp advances biplane\" is printed by the upper right flipper, and the rulesheet uses side ramp and biplane ramp for the same shot. Its entrance is my reading.",v:{premium:{x:"The clear ramp that runs up under the biplane. \"Side ramp advances biplane\" is printed by the upper right flipper, and the rulesheet uses side ramp and biplane ramp for the same shot. On the Premium and LE, King Kong Multiball releases its balls for Kong awards here. Its entrance is my reading."}}},
 biplane:{n:"Biplane toy",c:1,s:[E(192,188,50,48)],a:[192,188],x:"Stern's sculpted biplane, aimed at Kong."},
 biplane_ins:{n:"Biplane inserts",c:1,s:[E(378,630,26,64)],a:[378,630],x:"The Attack and Biplane 1 to 4 inserts on the diagonal by the building."},
 center_ramp:{n:"Center ramp (train station)",c:1,s:[B([[315,380],[316,330],[318,280],[320,220],[322,160]],20)],a:[316,340],x:"Stern's NYC train station middle ramp, with the Lock 1, Lock 2 and Multiball inserts along it. The rulesheet lights the King Kong locks here."},
 lock_ins:{n:"Lock inserts",c:1,s:[E(320,230,18,50)],a:[320,230],x:"Lock 1, Lock 2 and Multiball inserts on the center ramp."},
 train:{n:"Train car lock",c:1,s:[],a:[482,216],v:{premium:{s:[R(417,188,130,58)],x:"Stern's elevated NYC train car. On the Premium and LE balls lock in it, and Kong flips it over to release them."}}},
 center_spinner:{n:"Center spinner",c:0,s:[B([[386,350],[386,310],[386,280]],15)],a:[386,330],x:"My reading: the narrow lane between the center ramp and the gong, with the Lost Temple insert and a Climb arrow in front. The rulesheet loops the center spinner for Rapids. I could not see the spinner."},
 uturn:{n:"U-turn (upper loop)",c:0,s:[B([[357,462],[338,440],[322,420]],15)],a:[350,452],x:"A guess. The rulesheet shoots the U-turn, also called the upper loop, from the upper right flipper. I marked the arrow just below the center ramp that points up and left toward it, but I could not trace the loop."},
 gong:{n:"Gong shot",c:1,s:[B([[436,516],[448,470],[458,420],[462,370]],18)],a:[452,455],x:"The lane behind the Island Scene insert. The Pro has no gong; its gong art is printed on the playfield here, so I take this lane to be the gong shot.",v:{premium:{s:[E(458,405,30,40),B([[436,516],[448,470]],18)],a:[458,405],x:"Stern's sculpted gong in a temple arch. Hitting it reveals a path to Kong's VUK behind it, with a wireform return."}}},
 vuk:{n:"Kong's VUK",c:0,s:[C(462,322,13)],a:[462,322],x:"The dark hole up the gong lane, under the wireform. Stern says the gong hides \"a path to Kong's VUK\". On the Premium and LE the rulesheet lets the ball in here on each gong shot during Save Ann."},
 scene_ins:{n:"Island Scene insert",c:1,s:[C(454,455,13)],a:[454,455]},
 temple_ins:{n:"Lost Temple insert",c:1,s:[C(386,428,14)],a:[386,428]},
 right_orbit:{n:"Right orbit",c:0,s:[B([[518,510],[534,460],[552,400],[570,330],[580,250],[582,170],[570,90],[530,40],[460,24]],16)],a:[540,440],x:"My reading: the arrow below the NYC Event and Island Lock inserts, up the right side and over the top. The rulesheet sends it round to the river and the mini-flipper, and diverts it into a hidden sinkhole for island locks. The path is a guess."},
 nyc_ins:{n:"NYC Event and Island Lock inserts",c:1,s:[C(539,426,13),C(535,455,13)],a:[537,440]},
 punchback:{n:"Punchback target",c:0,s:[C(565,215,13)],a:[565,215],x:"A guess. The rulesheet puts the punchback target at the right loop, reached through the right orbit, with the hidden banana lane to its left. I could not see it, so I placed it at the top of the right orbit, beside Kong."},
 bananas:{n:"2.42 Million Bananas lane",c:1,s:[E(470,228,32,20)],a:[470,228],x:"The \"2.42 Million Bananas\" art under Kong. The rulesheet says a hidden lane here catches weak shots to the left orbit or punchback target lane.",v:{premium:{x:"Under Kong, where the Pro shows \"2.42 Million Bananas\" art. On the Premium and LE the train car covers it. The rulesheet says a hidden lane here catches weak shots to the left orbit or punchback target lane, and is easier to see on the Pro."}}},
 kong:{n:"King Kong",c:1,s:[E(505,95,78,70)],a:[505,95],x:"Stern's sculpted King Kong. It is static on the Pro.",v:{premium:{x:"Stern's animatronic King Kong, which swings its arms and torso."}}},
 upper_flipper:{n:"Upper right flipper",c:1,s:[B([[536,596],[524,668]],12)],a:[530,632],x:"The upper flipper by the Kong Cave. The rulesheet shoots the side ramp, upper loop and river lane from it."},
 cave:{n:"Kong Cave VUK",c:0,s:[B([[505,775],[514,735],[530,705],[556,688]],16)],a:[514,735],x:"The Kong Cave insert sits on the far right, as the rulesheet says, with Mystery and Extra Ball inserts on the lane below it. I could not see the cave hole or the rollover above it, so the end of the lane is my guess."},
 cave_ins:{n:"Kong Cave insert",c:1,s:[C(579,678,15)],a:[579,678]},
 mystery_ins:{n:"Mystery and Extra Ball inserts",c:1,s:[E(500,744,16,9),E(530,694,10,14)],a:[515,720],x:"Both are collected at the Kong Cave VUK."},
 pit:{n:"The Pit (magnet)",c:1,s:[C(186,757,28)],a:[186,757],x:"The magnet in the pit, which grabs and holds the ball.",v:{premium:{x:"The magnet in the pit, under Stern's sculpted giant spider. It grabs and holds the ball."}}},
 pit_arrow:{n:"The Pit insert",c:1,s:[E(244,709,22,11)],a:[244,709]},
 pit_tgts:{n:"Pit targets",c:0,s:[R(148,690,84,14)],a:[190,697],x:"Stern shows three standup targets behind the pit magnet, and the rulesheet adds a far left standup. I could not see them from above, so I marked the back wall of the pit."},
 pit_ins:{n:"Pit multiball inserts",c:1,s:[C(240,741,12),C(240,771,12),C(224,800,12)],a:[240,771],x:"Three round inserts by the pit, with the lizard, octopus insect and spider printed beside them."},
 letters:{n:"KING KONG inserts",c:1,s:[C(190,880,14),C(218,847,14),C(250,824,14),C(285,817,14),C(343,817,14),C(379,826,14),C(410,849,14),C(438,880,14)],a:[314,845],x:"The eight letters over the gate, under \"Bash gong when lit for King Kong letter\"."},
 building:{n:"Building climb inserts",c:1,s:[E(323,700,60,85)],a:[323,700],x:"The skyscraper inserts from 100 ft to 1200 ft."},
 climb:{n:"Climb arrows",c:1,s:[C(89,357,10),C(150,377,10),C(315,409,10),C(386,385,10)],a:[315,409],x:"The yellow Climb arrows I could find. More may sit under the wireforms."},
 x_ins:{n:"X inserts",c:0,s:[C(125,327,9),C(355,374,9),C(415,489,9)],a:[355,374],x:"Small flame inserts with an X beside some shots. The rulesheet's 2x scoring uses orange targets marked with an X; I could not find the targets themselves, and these may only be lights."},
 gate:{n:"Gate inserts",c:1,s:[C(262,901,12),C(256,949,12),C(250,999,12),C(368,899,12),C(372,949,12),C(381,997,12)],a:[314,950],x:"The six 8th Wonder objectives on the gate: Kong Multiball, T-Rex Defeated, Biplanes Destroyed, Climb Complete, Island Scenes and Spider Pit Cleared."},
 l_out:{n:"Left outlane",c:0,s:[E(50,906,6,24)],a:[50,906],x:"My reading of the lane slots. The Leap of Faith insert is beside it."},
 leap:{n:"Leap of Faith insert",c:0,s:[E(80,965,24,12)],a:[80,965],x:"I take this to be the Cliffhanger light for the left outlane. The rulesheet does not say."},
 l_in2:{n:"Outer left inlane",c:0,s:[E(90,913,6,26)],a:[90,913]},
 l_in1:{n:"Inner left inlane",c:0,s:[E(140,965,6,30)],a:[140,965]},
 r_in:{n:"Right inlane",c:0,s:[E(547,975,6,38)],a:[547,975]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_orbit","side_ramp","center_ramp","center_spinner","gong","right_orbit","cave"];
var UPPER=["side_ramp","uturn","river"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["gate","letters","kong"],b:"<p>Ann, Jack and Carl Denham land on Terror Island. Complete the six objectives on the gate above the flippers to qualify the wizard mode, 8th Wonder.</p>"+UNK("The rulesheet's Layout section is blank, so every shot name on the playfield is my reading of the inserts. Its Terror on the Tower and 8th Wonder sections say only \"TBD\".")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>Left to right, as I read the photo: left orbit, side ramp, center ramp, center spinner, gong, right orbit and Kong Cave VUK.</p>"+UNK("Only the center ramp and gong are tied to clear inserts. The rest are my reading and worth checking on a machine.")},
 {t:"Left side",h:["river","log_bridge","cliffs","mini","drops","pit"],b:"<p>The river lane and cliffs ramp run up the far left. The log bridge diverter at the river sends the ball to the mini-flipper, which can pick off the KONG drop targets or shoot the cliffs ramp. The pit, with its magnet, sits below.</p>"},
 {t:"Upper right flipper",h:["upper_flipper"].concat(alt(UPPER)),b:"<p>The upper right flipper shoots the side ramp, the U-turn (upper loop) and, straight across the playfield, the river lane.</p>"},
 {t:"Kong and the gong",h:["kong","gong","vuk","bananas","punchback"],b:"<p>Kong stands at the top right. The gong shot leads to Kong's VUK, a hidden lane under Kong pays 2.42 million, and the punchback target sits at the right loop.</p>"},
 {t:"The gate",h:["gate"],b:"<p>The six objectives: King Kong Multiball, T-Rex Defeated, Biplanes Destroyed, Climb Complete, Island Scenes and Spider Pit Cleared. Each has two levels.</p>"},
 {t:"Pro differences",ed:"pro",h:["gong","kong","center_ramp"],b:"<p>The Pro has no gong. Island scenes light by collecting blue island arrows instead. King Kong is static, and the third King Kong lock lights multiball at the right orbit instead of starting it.</p>"+UNK("The rulesheet still says \"shoot the gong\" in places that apply to the Pro. I take that to mean the gong lane.")},
 {t:"Premium and LE differences",ed:"premium",h:["gong","train","kong","pit"],b:"<p>The Premium and LE have the sculpted gong, which lights island scenes and opens the path to Kong's VUK. Balls lock in the elevated train car, and Kong is animatronic. Stern lists the giant spider over the pit for these models.</p>"}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Island scenes",h:["gong","scene_ins"].concat(alt(MAJ)),b:"<p>Five 60-second main modes. Each one completed awards a map segment. Island locks turn them into 2-ball multiballs.</p>"},
 {t:"Climbing the building",h:["climb","building","right_orbit"],b:"<p>Yellow Climb arrows raise Kong up the building for awards. Clear a level of climb shots to light an NYC event at the right orbit.</p>"},
 {t:"Biplanes",h:["side_ramp","biplane","biplane_ins"],b:"<p>Side ramp shots start Biplane Attack, a 30-second jackpot mode.</p>"},
 {t:"KING KONG",h:["letters","gong"],b:"<p>Skill shots, gong hits and other awards spell KING KONG. Spell it to light T-Rex Battle.</p>"},
 {t:"Multiballs",h:["drops","center_ramp","pit","pit_tgts"],b:"<p>Drop targets light the King Kong locks at the center ramp. Pit shots start the three pit multiballs, then Spider Queen.</p>"},
 {t:"Treasures",h:["cave","drops","treasure_tgt"],b:"<p>Map segments light treasure hunts at the Kong Cave. The Lost Temple glyph puzzle at the drop targets leads to the Island Treasure target. Every treasure found adds a perk.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Plunge skill shots",h:["pit_tgts","river","l_out","l_in1","l_in2"],b:"<ul><li>Skill shot: plunge into the pit targets.</li><li>Super skill shot: plunge into the river lane by the mini-flipper.</li><li>Anti-skill shot: plunge into the left outlane. If the ball bounces back off the post and you hit the right spinner or the gong, it is an anti-skill luck shot.</li><li>Secret skill shot: plunge into the inner left inlane.</li><li>Super secret skill shot: plunge into the outer left inlane.</li></ul>"+UNK("The rulesheet does not say how a plunge reaches the left lanes. The right spinner is not marked.")},
 {t:"Mega secret skill shot",h:[["mini",1],["cliffs",2],["side_ramp",3,"alt"],["uturn",3,"alt"]],b:"<p>Plunge to the upper left flipper and reflex shoot the cliffs ramp: 1.75M and 8 seconds of ball save. Follow up to the biplane ramp for 2x, or the U-turn for 3x.</p>"},
 {t:"Ultra secret skill shot",h:[["mini",1],["cliffs",2],["upper_flipper",3],["river",4]],b:"<p>Reflex shoot the cliffs ramp from the upper left flipper, then shoot straight across from the upper right flipper into the river lane: 8 seconds of ball save and, the rulesheet says, 7M with a question mark.</p>"},
 {t:"What they give",h:["letters"],b:"<p>On default settings each skill shot adds more ball save time. Each different skill shot in a game adds a KING KONG letter.</p>"},
 {t:"Sneak-in",h:["pit_tgts"],b:"<p>If the ball falls back into the shooter lane in single-ball play, you score a sneak-in award from 1M and can try another skill shot.</p>"}
]},
/* ====== MAIN MODES ====== */
{g:"Main modes",id:"scenes",title:"Island scenes",steps:[
 {t:"Lighting scenes",ed:"premium",h:["gong","scene_ins"],b:"<p>Shoot the gong to light island scenes, at the same shot that started them.</p>"},
 {t:"Lighting scenes",ed:"pro",h:["gong","scene_ins"],b:"<p>The Pro has no gong. Collect blue island arrows to light a scene: one for the first, one more for each scene after, up to five.</p>"+UNK("I could not tell which arrows are the blue island arrows, so they are not marked.")},
 {t:"How scenes play",h:["gong","scene_ins"],b:"<p>Each scene runs 60 seconds. Complete it in time for a map segment. The gong adds 15 seconds once per scene. Multiballs can start during a scene unless an island lock made it a 2-ball multiball.</p>"},
 {t:"Save Ann",h:["gong"].concat(alt(MAJ.filter(function(i){return i!="gong"}))),b:"<p>Lit shots score 250K +25K per shot and add 500K +50K per shot to the gong, from 4M. Combos count 2x. Make a lit shot, then the gong, three times. Then the gong lights a final hurry-up worth the three gong shots together.</p><p data-ed=\"premium\">On the Premium and LE, each gong shot lets the ball into the VUK in this mode.</p>"},
 {t:"Cross the Chasm",h:["log_bridge","river","cliffs",["uturn",0,"alt"]],b:"<p>The river entrance stays lit. Hitting it raises the diverter and lights the cliffs ramp for a few seconds. Make the cliffs ramp to save a sailor: 1.5M, +500K each. Miss and a sailor falls, resetting the value. Combo the U-turn after a save for a rising multiplier. Save 6 to complete.</p>"},
 {t:"Pterodactyl Attack",h:["drops","cave","cave_ins"],b:"<p>Hit the lit moving drop target for 5M and light the Kong Cave for 2x. A clean shot over the rollover above the cave makes it 3x, and making the cave without the upper flipper adds 3M. Collect three cave awards. The second adds a KING KONG letter.</p>"},
 {t:"Stegosaurus Encounter",h:alt(["center_spinner","center_ramp","gong","left_orbit","side_ramp","cliffs","uturn","cave","punchback"]),b:"<p>Slow-flashing shots take the easy path, fast-flashing ones the hard path. Each shot scores the base value, from 2M +250K. Hard path shots add +1x for the rest of the mode. Seven shots finish it.</p><ul><li>1: center spinner</li><li>2: center ramp, or cliffs ramp (hard)</li><li>3: gong, or U-turn (hard)</li><li>4: left orbit, or Kong Cave (hard)</li><li>5: biplane ramp, or left orbit (hard)</li><li>6: center ramp, or U-turn (hard)</li><li>7: punchback target</li></ul>"},
 {t:"Escape the Swamp",h:["punchback","right_orbit"].concat(alt(UPPER)),b:"<p>Flashing shots build the punchback jackpot at the right loop. After collecting it, an upper flipper shot multiplies it: side ramp 2x, upper loop 3x, river lane 4x. Collect three punchback jackpots.</p>"},
 {t:"Completing all five",h:["gate"],b:"<p>Playing all five scenes gives Island Scenes level 1. Completing all five gives level 2 and a map segment, and lights Crash the Gate. Scenes can be replayed until completed.</p>"}
]},
{g:"Main modes",id:"locks",title:"Island locks",steps:[
 {t:"Lighting locks",h:["right_orbit","nyc_ins","building"],b:"<p>Climbing to 200, 500 and 900 ft lights island lock at the right orbit. Shooting it diverts the ball into a hidden sinkhole and sends it to the right flipper. Start a scene with a lock to play it as 2-ball multiball.</p><p>Other multiballs cannot be advanced until you are back to one ball.</p>"},
 {t:"Island jackpot",h:["cliffs","ij_ins","pit","pit_tgts"],b:"<p>After any progress shot in a 2-ball scene, shoot the cliffs ramp to light island jackpot at the pit: 5M plus the mode total so far. Knock the held ball into the pit targets with the other ball within 5 seconds for another 2x island jackpot.</p><p>Progress shots: gong hits in Save Ann, U-turns in Cross the Chasm, Kong Cave shots in Pterodactyl Attack, any lit shot in Stegosaurus Encounter, punchback hits in Escape the Swamp.</p>"},
 {t:"Victory challenge",h:alt(MAJ).concat(["gong"]),b:"<p>Finish a scene while still in multiball for a victory challenge. Every shot lights: easy shots 5% of the mode total, hard ones 10%. The first five add 5 seconds each. Collect them all to light the gong for a victory jackpot of 50%. It ends when time runs out or you drop to one ball.</p>"}
]},
{g:"Main modes",id:"climb",title:"Climbing the building",steps:[
 {t:"Climb shots",h:["climb","building","powerup"],b:"<p>Four yellow Climb arrows light at random, 25 ft each. Make them all to climb a section and light a new set. From the 4th set, five arrows at 20 ft; from the 7th, six. A lit power-up target lights every Climb arrow briefly.</p>"},
 {t:"Awards",h:["building"],b:"<ul><li>100 ft: 5M and a map segment</li><li>200 ft: island lock and extra ball</li><li>300 ft: 10M and NYC event 1</li><li>400 ft: a KING KONG letter</li><li>500 ft: island lock</li><li>600 ft: 10M and NYC event 2</li><li>700 ft: a map segment</li><li>900 ft: island lock</li><li>1000 ft: 10M and NYC event 3</li><li>1250 ft: 30M</li></ul>"+UNK("The rulesheet leaves 800, 1100 and 1200 ft blank, and marks the 1250 ft Terror on the Tower award \"TBD\".")}
]},
{g:"Main modes",id:"nyc",title:"NYC events",steps:[
 {t:"Starting one",h:["right_orbit","nyc_ins","climb"],b:"<p>Complete a building level's climb shots to light the right orbit for an NYC event. It cannot start during a scene or multiball, and it ends any other timed mode.</p>"},
 {t:"Pick a modifier",h:["right_orbit"],b:"<p>Choose with the left flipper. Each can be used once:</p><ul><li>3-ball multiball, 1x scoring. Advancing a stage usually adds a ball. Dropping to one ball ends it.</li><li>Limited flips, 2x scoring. 30 flips per flipper, ball save on throughout. Gong adds 10 to each, up to 3 times; stages add 3; a drain costs 5.</li><li>Single-ball timed, 3x scoring. 60 seconds, a 12-second ball save; stages add time.</li></ul><p>Log bridge uses are unlimited during NYC events.</p>"},
 {t:"Stage Fright",h:[["center_ramp",1],["right_orbit",2],["drops",3],["left_orbit",4],["cave",5],"punchback","side_ramp"],b:"<p>Shoot the lit feature, then the punchback target through the right orbit to break a chain: 2.5M +250K per phase +500K per biplane ramp. The biplane ramp is always lit to boost values.</p><ol><li>2 center ramps</li><li>80 right spinner spins</li><li>Complete the drop targets</li><li>60 left spinner spins</li><li>Kong Cave twice; a clean shot over the rollover counts as both</li></ol><p>The fifth right orbit shot wins it and a map segment.</p>"+UNK("Several of the rulesheet's values here are question marks. Which spinner sits in which orbit is my assumption.")},
 {t:"Window Shopping",h:["climb","side_ramp","drops"],b:"<p>Lit Climb shots light red arrows for jackpots, more for each one. The biplane ramp spots a climb shot, or adds +1x if the jackpot is lit. Six jackpots win it and a map segment.</p><p>Multiball: the first two jackpots add balls, the next two short ball saves. Timed: each jackpot adds 10 seconds; completing the drops adds 25.</p>"},
 {t:"Manhattan Rampage",h:alt(MAJ).concat(["uturn","cave"]),b:"<p>Make each ramp and orbit as many times as it has lights. Complete two lanes to light a super jackpot (multiball) or the Kong Cave (limited flips, timed). That wins it and a map segment.</p><p>Multiball: the U-turn scores super jackpots, +1x per lane lit before. Limited flips: the cave pays a bonus for shots made. Timed: completed lanes raise a Retreat bonus; at the cave choose to Rampage on with more time or Retreat and cash out.</p>"}
]},
{g:"Main modes",id:"biplane",title:"Biplane Attack",steps:[
 {t:"Starting it",h:["side_ramp","biplane_ins"],b:"<p>Shoot the side ramp 3 times to start the first Biplane Attack.</p>"},
 {t:"How it plays",h:["side_ramp","biplane"],b:"<p>30 seconds. The side ramp scores a jackpot that grows as switches are hit. The left and right spinners take turns being lit to raise what each switch adds. Each jackpot destroys a biplane, and you can destroy several in one round.</p>"+UNK("The spinners are not marked.")},
 {t:"Barrel roll",h:NUM(["left_orbit","side_ramp"]),b:"<p>Left orbit, then side ramp: +250K to the next biplane. Any time in single-ball play.</p>"},
 {t:"Chandelle maneuver",h:NUM(["river","punchback","side_ramp"]),b:"<p>River, punchback target, side ramp: +500K to the next biplane and +15 seconds.</p>"},
 {t:"Gate credit",h:["gate"],b:"<p>Destroy 5 biplanes, or score 25M from one, for the gate. A 25M biplane also gives a map segment, and 6 biplanes light extra ball.</p>"}
]},
{g:"Main modes",id:"kingkong",title:"Spell KING KONG",steps:[
 {t:"Earning letters",h:["letters","gong","cliffs","cave","drops","side_ramp"],b:"<ul><li>Each different skill shot.</li><li>Fill the switch bar on the display, then the gong collects it. Max power-up level doubles it.</li><li>The 3rd and 15th cliffs ramp, collected at the gong.</li><li>The second Kong Cave award in Pterodactyl Attack.</li><li>A flawless super sweep: all four drops in one left orbit, then the side ramp.</li></ul><p>Each letter adds a log bridge use.</p>"},
 {t:"Set 1 perks",h:["letters"],b:"<ul><li>K: 5M</li><li>I: king kombos +50K</li><li>N: next cliffs shot 2x</li><li>G: <span data-ed=\"pro\">light deadeye</span><span data-ed=\"premium\">king kombos +50K</span></li><li>K: next river shot 2x</li><li>O: <span data-ed=\"pro\">king kombos +50K</span><span data-ed=\"premium\">light deadeye</span></li><li>N: next pit shot 2x and a map segment</li><li>G: light T-Rex Battle</li></ul>"},
 {t:"Set 2 perks",h:["letters"],b:"<ul><li>K: 5M</li><li>I: king kombos +50K</li><li>N: next Biplane Attack 2x</li><li>G: <span data-ed=\"pro\">light deadeye</span><span data-ed=\"premium\">king kombos +50K</span></li><li>K: start super kombos</li><li>O: <span data-ed=\"pro\">king kombos +50K</span><span data-ed=\"premium\">light deadeye</span></li><li>N: not documented</li><li>G: light the Boss T-Rex battle</li></ul><p>After both sets, no more letters this game.</p>"+UNK("The rulesheet gives \"?\" for the second set's N.")}
]},
{g:"Main modes",id:"deadeye",title:"Deadeye",steps:[
 {t:"Lighting it",h:["cave","cave_ins","letters"],b:"<p>Deadeye lights at the Kong Cave after the <span data-ed=\"pro\">first G</span><span data-ed=\"premium\">O</span> in KING KONG. Single-ball play only.</p>"},
 {t:"How it plays",h:["pit_tgts","l_out","l_in1","l_in2","river"],b:"<p>The ball is held at the Kong Cave eject and you get 30 seconds of unlimited ball save to make as many plunge skill shots as you can. Awards start at 1M, +500K each. Pit standups 1x, left outlane 2x, left inlane 3x, outer left inlane 5x.</p>"},
 {t:"Deadeye jackpot",h:["river"],b:"<p>After three awards, plunge into the river lane for the jackpot: 3M plus the awards so far. It repeats until time runs out. The first one in a game gives a map segment. 2x scoring carries into Deadeye.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"kongmb",title:"King Kong Multiball",steps:[
 {t:"Locks",ed:"pro",h:["drops","center_ramp","lock_ins","right_orbit"],b:"<p>Complete the drop targets while \"light kong lock\" flashes to light locks at the center ramp: all three the first time, then one at a time. On the Pro the third lock lights multiball at the right orbit.</p>"},
 {t:"Locks",ed:"premium",h:["drops","center_ramp","lock_ins","train"],b:"<p>Complete the drop targets while \"light kong lock\" flashes to light locks at the center ramp: all three the first time, then one at a time. The third lock starts multiball, releasing all three balls from the train for Kong awards at the side ramp.</p>"},
 {t:"Jackpots",h:["drops","center_spinner","punchback","cliffs","side_ramp"],b:"<p>Green shots score small awards; the side ramp's Kong award is 5x. Red jackpots must be lit. In the first round of a game, any drop target lights the center spinner and punchback target for a 1x jackpot. After that, complete the drops to light a 2x jackpot at the cliffs ramp.</p>"},
 {t:"Super jackpot",h:["side_ramp"],b:"<p>After a jackpot, the side ramp scores the super jackpot. It grows with green shots and is multiplied by side ramps made before it. It stays lit about 30 seconds at first, less after each jackpot. A super jackpot fills the gate light; two give a map segment.</p>"},
 {t:"Relock",h:["center_ramp"],b:"<p>Collect all green awards, then the center ramp, to relock a ball: 2x on all jackpots for 20 seconds.</p><p data-ed=\"pro\">On the Pro the ball is not held during it.</p>"},
 {t:"Add-a-ball",h:["gong"],b:"<p>Mystery is off in this multiball. Ring the gong twice to add a ball, once per multiball.</p>"}
]},
{g:"Multiballs",id:"pitmb",title:"Pit multiballs",steps:[
 {t:"Starting them",h:["pit","pit_tgts","pit_arrow","r_in"],b:"<p>Shoot the pit. The first multiball takes four shots, three to light it and one to start; later ones take two. Rolling through the right inlane briefly makes pit shots count 2x. With one shot to go, the lit multiball changes every 10 seconds.</p>"+UNK("The rulesheet says to hit \"the targets around the pit\", then counts \"pit shots\". I treat them as the same.")},
 {t:"2-Legged Lizard",h:["pit","pit_tgts","pit_ins"],b:"<p>Shoot the pit three times to light the jackpot. Shoot the pit, then knock the ball held by the magnet into the targets. Lit shots add 500K.</p>"+UNK("The rulesheet's maximum jackpot is a question mark.")},
 {t:"Octopus Insect",h:["pit_tgts","pit","pit_ins"],b:"<p>Hit all three right-side standups to light the jackpot at the pit. The far left standup raises target values, and red shots the jackpot. More rounds raise its multiplier.</p>"},
 {t:"Giant Spider",h:["pit","side_ramp","center_ramp","pit_ins"],b:"<p>30 switch hits (+5 per jackpot) light the jackpot at the pit. Non-spinner switches raise it. Each lit ramp adds +1x once, up to 4x, for at most 25M x 4.</p>"},
 {t:"Add-a-ball",h:["cave","river"],b:"<p>The first mystery collected during any of the first three pit multiballs always adds a ball.</p>"}
]},
{g:"Multiballs",id:"queen",title:"Spider Queen",steps:[
 {t:"The fourth pit multiball",h:alt(MAJ).concat(["pit"]),b:"<p>After the three pit multiballs, Spider Queen is a 3-ball multiball. Shoot randomly lit major shots to defeat her spawn, then the pit for a super jackpot: 5M plus 50% of the three earlier pit multiballs.</p>"},
 {t:"More supers",h:["pit"],b:"<p>Supers need 4 jackpots for the first two, then 5, 6, and 7 for the rest. Jackpots start at 5M, +1M per super.</p>"},
 {t:"Adding balls",h:["treasure_tgt"],b:"<p>Mystery add-a-ball is off. Below 4 balls, the Island Treasure standup behind the drops adds a ball, up to two times.</p>"},
 {t:"Gate credit",h:["gate"],b:"<p>Playing it gives level 1; 250M in it gives level 2 and a map segment.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"treasures",title:"Treasures",steps:[
 {t:"Two ways to find them",h:["cave","treasure_tgt","drops"],b:"<p>Complete a map to light a treasure hunt at the Kong Cave, or complete the Lost Temple glyph puzzle and hit the Island Treasure target. Both count toward these perks:</p>"},
 {t:"Treasure perks",h:["cave","treasure_tgt"],b:"<ol><li>+8 seconds on island scenes</li><li>+3 seconds of lit power-up target</li><li>Treasure hunts need one less shot</li><li>+15 seconds ball save in T-Rex Battle</li><li>Lost Temple shots spot 2 ciphers</li><li>Letters need half the switch hits</li><li>Lights Cliffhanger, +5 seconds</li><li>Treasure hunts need one less shot</li><li>Biplane Attack awards 5x</li><li>+15 seconds of 2x scoring</li><li>1 billion, not doubled</li></ol>"}
]},
{g:"Other scoring",id:"temple",title:"Lost Temple",steps:[
 {t:"Lighting it",h:["punchback","cave","right_orbit","temple_ins"],b:"<p>Hit the punchback target or Kong Cave while an unlit drop target remains to light Lost Temple at the right orbit.</p>"},
 {t:"Ciphers",h:["right_orbit","mini","drops","glyphs"],b:"<p>In single-ball play, the next right orbit always sends the ball to the mini-flipper and lights a drop target. Hit it for one cipher, and the progress of one more drop toward king kombos or Kong lock. At power-up level 3 or after 5 treasures you can earn several.</p>"},
 {t:"Island treasure",h:["treasure_tgt","treasure_ins","drops"],b:"<p>Two flashing drops complete the first puzzle. Then shoot the Island Treasure target behind the upper two drops. Each later treasure needs one more drop, up to all four.</p>"},
 {t:"The treasures",h:["treasure_tgt"],b:"<p>Each is 10M plus:</p><ul><li>Drillplate of Dunne: Super Spinners, 30 seconds of alternating spinners at 100K a spin.</li><li>Lost Skull of the Ancients: Super Kombos, 30 seconds of king kombos at 3x.</li><li>Heart of the Keepers: Lost Temple Multiball, 3 balls, started at the gong. Lit drops raise the multiplier to 4x; the super jackpot is at the Island Treasure target.</li><li>Moonstone of N'zai: extra ball.</li><li>Obsidian Dagger: Super Rapids, 30 seconds of shots raising the river value from 2M.</li><li>Serpent's Eye: Super Cave Target, 60 seconds of 25M cave rollover hits, +2.5M each, up to 50M; 2x without the upper flipper.</li></ul>"+UNK("The rulesheet lists treasures in this order but does not say if the order is fixed.")}
]},
{g:"Other scoring",id:"maps",title:"Map segments and treasure hunts",steps:[
 {t:"Map segments",h:["cave"],b:"<p>Each segment is 5M, and a completed map 10M more. The first map has two segments, each later map one more. Sources include completing scenes or NYC events, climbing 100 and 700 ft, the second N in KING KONG, the Deadeye and Rapids jackpots, 20 cliffs ramps, 8 banana combos, a rare mystery, and level 2 of each gate objective.</p>"},
 {t:"Treasure hunt",h:["cave"].concat(alt(MAJ)),b:"<p>A completed map lights the Kong Cave. Make six random gold shots; the last is always the cave. The jackpot starts at 20M, grows with switches, and is multiplied by treasures found. Drain and the treasure is lost. It can run with other modes but only starts in single-ball play.</p>"},
 {t:"Hunt rewards",h:["cave"],b:"<ol><li>Crown of the Forgotten God: +15 seconds on super modes</li><li>Lost Idol of the Ancients: double bonus for the game</li><li>Echo Horn: start each ball with max log bridge uses</li><li>Jade Goat of Sternnes: easier 2x scoring</li><li>Sphere of Dympleton: 500M</li></ol>"+UNK("The Echo Horn is described two ways: max log bridge uses each ball, and +2 uses per ball.")}
]},
{g:"Other scoring",id:"kombos",title:"King Kombos and power-up",steps:[
 {t:"King Kombos",h:["drops","powerup"],b:"<p>Clear the drops while the King Kombos insert is lit to start king kombos. The value builds as you combo. Clear the drops more times to relight it. Off in multiball.</p>"+UNK("The rulesheet says even-numbered letters each add 50K, but its letter table gives the 4th or 6th letter to Deadeye depending on model.")},
 {t:"Power-up target",h:["powerup"],b:"<p>A 2-way kombo or longer lights the power-up target while it lasts. Hit it for the total of kombos times the kombo length, up to 100M, and a timed award:</p><ul><li>2-way: all Climb arrows count for 13 seconds</li><li>3-way: also 2x pit progress for 16 seconds</li><li>4-way: also 2x Lost Temple ciphers for 20 seconds</li><li>5-way: also 2x letter progress for 25 seconds</li></ul>"},
 {t:"Super Sweep",h:["drops","left_orbit","side_ramp","sweep_ins"],b:"<p>Knock down at least 2 drops in one left orbit shot, then the side ramp, for 10M. All four is 50M and a KING KONG letter.</p>"},
 {t:"Ricochet",h:["r_in","mini","cliffs"],b:"<p>Roll through the right return lane, then shoot the rubber near the mini-flipper from the right flipper so it bounces up the cliffs ramp: 5M. Single-ball only.</p>"}
]},
{g:"Other scoring",id:"river",title:"River and Rapids",steps:[
 {t:"Lighting the river",h:["drops","uturn","river"],b:"<p>Complete the drops, or shoot the U-turn from the upper right flipper, in single-ball play.</p>"},
 {t:"River awards",h:["river"],b:"<ul><li>3, 9, 12, 20, 30: light mystery</li><li>5, 15, 25: Rapids</li><li>8: light extra ball</li></ul>"},
 {t:"Rapids",h:["center_spinner","cave"],b:"<p>40 seconds to loop the center spinner and build a value and multiplier, which decay every 5 seconds. Cash out at the Kong Cave. The first Rapids jackpot in a game gives a map segment.</p>"}
]},
{g:"Other scoring",id:"bridge",title:"Log bridge",steps:[
 {t:"The diverter",h:["log_bridge","river","mini","drops","cliffs"],b:"<p>A hidden diverter by the river that sends the ball to the mini-flipper. It works on its own in modes that need cliffs shots, and you can trigger it with the action button just before the ball enters the river, after a right orbit or on the plunge.</p>"},
 {t:"Uses",h:["letters"],b:"<p>Start with 1, +1 each ball, +1 per KING KONG letter, up to 5. Unlimited during NYC events. In competition mode it only fires when a drop cipher or cliffs award is available.</p>"}
]},
{g:"Other scoring",id:"cliffs",title:"Cliffs and Cliffhanger",steps:[
 {t:"Cliff awards",h:["cliffs","mini"],b:"<ul><li>3, 15: a KING KONG letter, or 15M once spelled</li><li>6: light Cliffhanger</li><li>20: light Cliffhanger and a map segment</li><li>25: light extra ball</li></ul>"},
 {t:"Cliffhanger",h:["l_out","leap","powerup"],b:"<p>Lit at the left outlane. Drain there and you have 12 seconds to hit the power-up target to save the ball. Each success needs one more hit. Single-ball only, not in wizard modes. 7 treasures also light it.</p>"+UNK("I take the Leap of Faith insert to be its light. The rulesheet does not say.")}
]},
{g:"Other scoring",id:"twox",title:"2x scoring",steps:[
 {t:"Starting it",h:["x_ins"],b:"<p>Hit all four orange X targets (twice each on later tries), then the roving orange target, which moves left to right and back. Lit targets extend the timer, up to four times, and score bonus points.</p>"+UNK("I could not find the orange targets. The X inserts are marked instead.")},
 {t:"Easier 2x",h:["cave"],b:"<p>After the fourth treasure hunt, every target extends 2x, not just the lit one.</p>"}
]},
{g:"Other scoring",id:"bananas",title:"Bananas",steps:[
 {t:"2.42 Million Bananas",h:["bananas","left_orbit","punchback"],b:"<p>A hidden lane under Kong, left of the punchback target, catches weak left orbit or punchback lane shots: 2.42M, the best shot spotted in a mode, and a climb arrow. It is easier to see on the Pro.</p>"},
 {t:"Banana combos",h:["left_orbit","pit","river","side_ramp","center_ramp","powerup","punchback"],b:"<p>Single-ball combos, 8 for a map segment:</p><ul><li>Apple Banana: center ramp, power-up</li><li>Barangan: left orbit, pit</li><li>Blue Java: left orbit, river</li><li>Cavendish: left orbit, side ramp, pit</li><li>Golden Banana: right orbit, Island Treasure</li><li>Goldfinger: punchback, power-up</li><li>Gros Michael: left orbit, side ramp, center ramp, gong</li><li>Lady Finger: right orbit, cliffs, side ramp, center ramp, gong</li><li>Manzano: punchback, side ramp, pit</li><li>Mysore: left orbit, power-up</li><li>Pisang Raja: pit, back out the shooter lane</li><li>Praying Hands: punchback, upper loop</li><li>Red Banana: center ramp, Kong Cave rollover</li><li>Rhino Horn: punchback, river</li></ul>"}
]},
{g:"Other scoring",id:"mystery",title:"Island mystery",steps:[
 {t:"Mystery",h:["cave","mystery_ins","river"],b:"<p>River shots light mystery at the Kong Cave. Awards include 10M, light a scene, spot climb, biplane, letter, river, cliffs or glyph, light Kong lock, advance pit, a map segment once, +2 log bridge uses, +3 bonus X, and add-a-ball during a locked scene or pit multiball. Competition mode gives only 10M or add-a-ball.</p>"}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["cave","mystery_ins"],b:"<p>Lit at the Kong Cave after 200 ft, 6 biplanes, 25 cliffs ramps or 8 river shots, and awarded at once by the Moonstone treasure. If disabled, 15M, 30M with 2x.</p>"},
 {t:"End-of-ball bonus",h:["drops","building","letters"],b:"<p>100 per switch this ball, 2,500 per foot climbed and 150K per KING KONG letter, times bonus X. Each drop target completion adds +1x. Height and letters carry over between balls. The second treasure hunt doubles bonus for the game.</p>"}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"gate",title:"Crash the Gate",steps:[
 {t:"Starting it",h:["gong","scene_ins"],b:"<p>The sixth island scene, after the other five are completed. It lights like the others: <span data-ed=\"pro\">by island arrows on the Pro</span><span data-ed=\"premium\">by hitting the gong on the Premium and LE</span>.</p>"},
 {t:"Hurry-ups",h:[["gong",1],["cliffs",2],["drops",3],["center_spinner",4],["punchback",5]],b:"<p>90 seconds plus time left from completed scenes, up to 120, with a 40-second ball save. Five shots each start a hurry-up at the gong, from 5M plus 20 to 40% of that scene's total, capped at 99M:</p><ul><li>Save Ann: gong</li><li>Cross the Chasm: cliffs ramp</li><li>Pterodactyl Attack: drop targets</li><li>Stegosaurus Encounter: center spinner</li><li>Escape the Swamp: punchback target</li></ul>"},
 {t:"Super jackpot",h:["side_ramp"],b:"<p>After all five, the biplane ramp scores the total of the hurry-ups. Or play more sets of five to double its multiplier each time. It ends when time runs out or you drain after the ball save.</p>"}
]},
{g:"Wizard modes",id:"trex",title:"T-Rex Battle",steps:[
 {t:"Starting it",h:["gong","letters"],b:"<p>After spelling KING KONG, the next gong shot in single-ball play with no mode running starts it.</p>"},
 {t:"Shots",h:alt(MAJ).concat(["side_ramp"]),b:"<p>Shoot flashing arrows and avoid the slingshots. The biplane ramp spots shots. Three shots of one color (green on the left, blue on the right) light Pummel at the pit. 15 slingshot hits mean the gong must be hit to save Ann first.</p>"},
 {t:"Pummel",h:["pit"],b:"<p>Shoot the pit to hold the ball and mash the action button for 10 seconds: 100K +2K a press. Red arrows add 500K, +1x and more time. Two Pummels, then a third pit shot, defeat a T-Rex: 7.5M, then 15M. The first adds a ball; both complete the mode and the gate light.</p>"},
 {t:"Last chance",h:["pit"],b:"<p>Down to one ball, you have 15 seconds to keep it going, reset by a Pummel or an added ball.</p>"},
 {t:"Boss T-Rex",h:["pit"],b:"<p>The second KING KONG of a game: a 4-ball multiball, 5 red shots to light Pummel, double Pummel value, +10 seconds grace. Defeating it starts victory laps.</p>"}
]},
{g:"Wizard modes",id:"tower",title:"Terror on the Tower",steps:[
 {t:"Not documented yet",h:["building"],b:"<p>The rulesheet says only \"TBD on 0.96 code\". The climb table suggests 1250 ft may light it, also marked TBD.</p>"}
]},
{g:"Wizard modes",id:"wonder",title:"8th Wonder",steps:[
 {t:"Qualifying",h:["gate"],b:"<p>Complete the six gate objectives. Each has two levels: island scenes played or completed, building climbed, biplanes destroyed, T-Rex defeated, King Kong Multiball super jackpots, and Spider Queen.</p>"},
 {t:"Not documented yet",h:["gate"],b:"<p>The rulesheet says only \"TBD on 0.96 code\".</p>"}
]}
];

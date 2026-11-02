/* ---------- playfield features (coordinates in the 640x1240 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 groot:{n:"Groot",c:1,s:[E(304,195,60,112)],a:[304,195]},
 mouth:{n:"Groot's mouth",c:0,s:[C(304,288,26)],a:[304,288],x:"Placed at the bottom of the model, where the mouth is. I could not see an opening in these photos."},
 groot_shot:{n:"Groot shot",c:0,s:[B([[309,480],[309,420],[305,345]],24)],a:[309,470],x:"Placed from the Groot and Groot Multiball inserts, which lead to the model. Estimated."},
 groot_inserts:{n:"Groot inserts",c:1,s:[R(258,505,98,26),R(278,485,62,20)],a:[309,510]},
 stabs:{n:"Standups beside Groot",c:0,s:[C(258,332,14),C(350,332,14)],a:[258,332],x:"The rulesheet puts one on each side of Groot. I could not make out the targets, so these spots are a guess."},
 orb:{n:"Orb",c:1,s:[E(380,398,48,58)],a:[380,398],x:"The large model. It is a different piece on the Pro and on the Premium and LE.",v:{premium:{s:[E(386,400,62,66)],a:[386,400]}}},
 orb_drop:{n:"Orb drop target",c:0,s:[R(350,508,48,24)],a:[374,520],x:"The dark slot at the end of the Broker arrow. I read it as the drop target."},
 orb_standup:{n:"Standup behind the drop target",c:0,s:[C(386,468,20)],a:[386,468],x:"The rulesheet puts it behind the drop target. Placed at the purple disc in line with the slot, which may not be the target itself."},
 orb_shot:{n:"Orb shot",c:0,s:[B([[350,612],[360,583],[372,535]],24)],a:[350,606],x:"Placed from the Broker insert and arrow. Estimated."},
 rocket:{n:"Rocket shot",c:0,s:[B([[196,508],[177,468],[164,428]],24)],a:[196,502],x:"Placed from the Rocket insert and arrow, which lead to the kickback the rulesheet names. Estimated."},
 rocket_toy:{n:"Rocket",c:1,s:[C(138,358,30)],a:[138,358]},
 rampage:{n:"RAMPAGE insert",c:1,s:[R(208,552,24,48)],a:[220,575]},
 left_ramp:{n:"Left ramp",c:0,s:[B([[254,448],[238,404],[218,340],[195,275],[165,215],[125,130]],30)],a:[254,442],x:"Placed from the Nebula insert and arrow, then along the purple ramp. Estimated."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[399,626],[411,589],[428,530],[465,445],[505,370]],30)],a:[399,620],x:"Placed from the Gamora insert and arrow, through the metal ramp entrance. Beyond that it is a guess."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[145,528],[125,486],[108,420],[92,340],[82,265],[110,190],[165,150]],22)],a:[145,522],x:"Placed from the Ronan insert and arrow. The path behind the ramps is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[479,626],[498,589],[518,500],[537,420],[550,340],[552,250],[525,180],[470,145]],22)],a:[479,620],x:"Placed from the Drax insert and arrow. The path behind the ramps is a guess."},
 deadend:{n:"Dead-end lane",c:0,s:[B([[145,745],[112,672],[88,600],[84,545]],24)],a:[145,740],x:"Placed from the Yondu insert. The rulesheet puts this lane on the left, and I read the meshed area as its end. Estimated."},
 scoop:{n:"Right scoop",c:0,s:[C(510,700,20),B([[440,780],[469,745],[495,718]],22)],a:[510,700],x:"Placed from the Star-Lord insert and the arrow pointing to the dark opening. Estimated."},
 pops:{n:"Pop bumper area",c:0,s:[E(450,285,72,58)],a:[450,285],x:"The rulesheet says the orbits can divert here. I could not identify the bumpers in the photos, so this area is a guess."},
 toplanes:{n:"Top Nova Corps lanes",c:1,s:[C(437,183,20),C(489,186,20),C(439,232,14),C(485,232,14)],a:[463,183],x:"The labeled inserts above each lane."},
 inlanes_l:{n:"Left inlanes",c:0,s:[C(119,890,14),C(153,890,14)],a:[136,890],x:"Located from the lane guides and the Nova Corps insert. Estimated."},
 inlane_r:{n:"Right inlane",c:0,s:[C(482,885,14)],a:[482,885],x:"Located from the lane guide and the Nova Corps insert. Estimated."},
 outlane_r:{n:"Right outlane",c:0,s:[C(530,860,16)],a:[530,860],x:"Located from the lane guide and the Save insert. Estimated."},
 hadron:{n:"Hadron Enforcer targets",c:0,s:[C(228,506,15),C(190,578,15),C(453,602,15),C(154,716,15),C(479,780,15)],a:[228,506],x:"Marked at the five inserts with the Hadron Enforcer logo, which I take to sit beside the targets."},
 guardians:{n:"Guardians target",c:0,s:[C(128,680,15)],a:[128,680],x:"The rulesheet does not say where it is. I placed it at the small target next to the Guardians insert."},
 guardians_ins:{n:"GUARDIANS insert",c:1,s:[R(143,614,54,30)],a:[170,629]},
 magna:{n:"Magna-Force",c:1,s:[C(289,700,24)],a:[289,700],x:"Marked at the labeled insert."},
 flippers:{n:"Flippers",c:1,s:[B([[215,1028],[282,1072]],20),B([[418,1028],[350,1072]],20)],a:[248,1050]},
 antiquities:{n:"Antiquities Shop insert",c:1,s:[R(258,784,56,26)],a:[286,797]},
 sibling:{n:"Sibling Rivalry insert",c:1,s:[R(322,784,56,26)],a:[350,797]},
 podchase:{n:"Pod Chase insert",c:1,s:[R(240,822,56,26)],a:[268,835]},
 kyln:{n:"Escape Kyln insert",c:1,s:[R(340,822,56,26)],a:[368,835]},
 sanctuary:{n:"Sanctuary insert",c:1,s:[R(240,859,56,26)],a:[268,872]},
 knowhere:{n:"Knowhere insert",c:1,s:[R(340,859,56,26)],a:[368,872]},
 yaka:{n:"Yaka Arrow insert",c:1,s:[R(255,899,56,26)],a:[283,912]},
 quest:{n:"Quill's Quest insert",c:1,s:[R(322,899,56,26)],a:[350,912]},
 orb_ins:{n:"Orb Multiball inserts",c:1,s:[C(334,678,20),R(226,932,50,22)],a:[334,678]},
 groot_ins:{n:"Groot Multiball inserts",c:1,s:[R(278,358,62,28),R(356,933,50,22)],a:[309,372]},
 immolation:{n:"Immolation Initiative insert",c:1,s:[R(290,932,52,22)],a:[316,943]},
 xandar:{n:"Save Xandar insert",c:1,s:[R(292,958,46,22)],a:[315,969]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var ALL=["deadend","left_orbit","rocket","left_ramp","orb_shot","right_ramp","right_orbit","scoop"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Groot",h:[["groot_shot",1],["mouth",2],["groot",0,"alt"],["groot_inserts",0,"alt"]],b:'<p>Hit Groot to open the mouth and light the lock, then shoot into the mouth to lock a ball for Groot Multiball.</p>'},
 {t:"Right scoop",h:["scoop"],b:'<p>Starts modes, upgrades them once, collects Mystery and Extra Ball, and starts all three wizard modes. Star-Lord\'s shot.</p>'},
 {t:"Orb",h:[["orb_shot",1],["orb_drop",2],["orb_standup",3],["orb",0,"alt"]],b:'<p>Shoot the drop target, then the standup behind it, to collect an Orb. Broker\'s shot.</p>'},
 {t:"Rocket",h:["rocket",["rocket_toy",0,"alt"],["rampage",0,"alt"]],b:'<p>Each hit collects a letter in RAMPAGE. The rulesheet also calls this the Rocket kickback.</p>'},
 {t:"Left ramp",h:["left_ramp"],b:'<p>Nebula\'s shot. Pod Chase is built around the ramps.</p>'},
 {t:"Right ramp",h:["right_ramp"],b:'<p>Gamora\'s shot. Completing Sibling Rivalry lights it to re-collect that mode\'s points.</p>'},
 {t:"Left orbit",h:["left_orbit"],b:'<p>Ronan\'s shot. During Sanctuary it spots the next lit standup target and sends the ball to the flippers.</p>'},
 {t:"Right orbit",h:["right_orbit"],b:'<p>Drax\'s shot. A full plunge travels around the loop, and some modes divert the orbits to the pop bumpers.</p>'},
 {t:"Dead-end lane",h:["deadend"],b:'<p>Yondu\'s shot on the left side, always lit to advance Yaka Arrow.</p>'},
 {t:"Pop bumpers",h:["pops",["toplanes",0,"alt"]],b:'<p>Bumper hits advance Yaka Arrow. Orbits that divert here also let you complete the top lanes.</p>'},
 {t:"Nova Corps rollovers",h:["toplanes","inlanes_l","inlane_r"],b:'<p>Five red rollovers: two at the top right, two left inlanes and one right inlane. Each of those three groups is lane-changed on its own.</p>'},
 {t:"Hadron Enforcer targets",h:["hadron"],b:'<p>Five standups scattered around the playfield. Completing them lights the action button.</p>'},
 {t:"Guardians target",h:["guardians",["guardians_ins",0,"alt"]],b:'<p>Hit it when flashing to spell GUARDIANS and light Mystery at the scoop.</p>'},
 {t:"Standups beside Groot",h:["stabs",["outlane_r",0,"alt"]],b:'<p>Hitting both lights a virtual kickback on the right outlane.</p>'},
 {t:"Magna-Force",h:["magna"],b:'<p>After Orbs 1 and 2 the ball is released and Magna-Force catches it, then releases it wildly.</p>'}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill Shot",h:["toplanes"],b:'<p>Plunge into the flashing top lane. It scores 250K + 50K per skill shot.</p>'},
 {t:"Hands-free",h:["toplanes",["flippers",0,"alt"]],b:'<p>Plunge without touching the flippers, even to change modes, for twice the normal value.</p>'},
 {t:"Super Skill Shot",h:[["flippers",1],["right_orbit",2],["orb_shot",3],["right_ramp",3]],b:'<p>Hold the left flipper and full plunge around the loop. Then shoot the flashing white shot within a short time. It will be the Orb, right ramp or right orbit, and scores 1M, rising by 250K.</p>'}
]},
/* ====== MODES ====== */
{g:"Main modes",id:"modes",title:"How modes work",steps:[
 {t:"Starting",h:["scoop"],b:'<p>At the start of a ball with no mode running, choose any uncompleted mode with the flippers. During a ball with no mode running, shoot the right scoop to start one.</p>'},
 {t:"Shots and combos",h:ALL,b:'<p>Shoot the flashing shots. The shots of the characters in each mode, marked by the flashing character insert, stay lit for advances. Combos score 2x the shot value.</p>'},
 {t:"Upgrade",h:["scoop"],b:'<p>Shoot the right scoop once during a mode to Upgrade it, which changes its shots or makes them worth more.</p>'},
 {t:"Super modes",h:[],b:'<p>Completing a mode starts its level 2 "super mode". It runs untimed for the rest of the ball or until its shots are used up, and cannot restart until the second cycle of modes.</p><p>A completed mode also adds about 10% of its total to bonus for the rest of the game and makes its character shot a 5x jackpot in Groot Multiball.</p>'},
 {t:"Timers and progress",h:[["sanctuary",0,"alt"]],b:'<p>Mode timers follow the length of the movie scene and always run. Progress is saved if a mode times out or you drain, except in Sanctuary.</p>'}
]},
{g:"Main modes",id:"mode-list",title:"The eight modes",steps:[
 {t:"Antiquities Shop",h:[["orb_shot",1],["antiquities",0,"alt"],["pops",0,"alt"]],b:'<p><b>61 seconds, 7 shots, cyan.</b> Shoot the Orb and one other shot that changes each time. 20 switch hits also count as one shot. Orbits divert to the bumpers. Shots start at 500K and rise by 250K.</p><ul><li><b>Upgrade:</b> fewer switches to spot a shot.</li><li><b>Super:</b> each switch scores more for the next 100 hits.</li></ul>'},
 {t:"Knowhere",h:["right_orbit","left_orbit","left_ramp","right_ramp",["knowhere",0,"alt"]],b:'<p><b>85 seconds, 8 shots, red.</b> Either orbit or either ramp, though orbits score more. Shots start at 400K and rise by 400K.</p><ul><li><b>Upgrade:</b> lights all shots for one advance and raises the orbit base.</li><li><b>Super:</b> Super Loops for 10 shots. Orbits feed the flippers, at the highest value collected in the mode.</li></ul>'},
 {t:"Escape Kyln",h:["toplanes","inlanes_l","inlane_r",["groot_shot",0,"alt"],["rocket",1],["kyln",0,"alt"]],b:'<p><b>85 seconds, 7 shots, orange.</b> Complete the flashing Nova Corps lanes and Groot, then shoot Rocket without using the Hadron Enforcer. That completes the mode and lights a free shot multiplier. Hadron can spot the other 6. Orbits divert to the bumpers, and Rocket always spots a lit lane.</p><ul><li><b>Upgrade:</b> raises the base score per lane.</li><li><b>Super:</b> Super Lanes for 10 shots.</li></ul>'},
 {t:"Pod Chase",h:["left_ramp","right_ramp",["podchase",0,"alt"]],b:'<p><b>154 seconds, 10 shots, blue.</b> Make blue ramp shots. They start at 300K and rise by 200K.</p><ul><li><b>Upgrade:</b> lights all the shots and raises the ramp base. Each shot lit this way counts once.</li><li><b>Super:</b> Super Ramps for 10 shots, doubled as combos.</li></ul>'},
 {t:"Quill's Quest",h:[["scoop",1],["quest",0,"alt"]],b:'<p><b>166 seconds, 12 shots, light orange.</b> The first time per cycle it is 2-ball multiball, which ends the mode when it ends. 2 random shots and the scoop collect a 500K hurry-up, rising by 250K. Later plays are single ball and can stack with a multiball.</p><ul><li><b>Upgrade:</b> permanently raises the hurry-up base.</li><li><b>Super:</b> a scoop hurry-up starting at 10% of your score, multiplied by all multipliers.</li></ul>'},
 {t:"Sanctuary",h:["hadron",["left_orbit",0,"alt"],["sanctuary",0,"alt"]],b:'<p><b>68 seconds, 5 shots, yellow.</b> Complete all 5 Hadron targets for 3 free Hadron Enforcers. The Enforcer itself is off here. The left orbit spots the next lit target. If time runs out you start over next time.</p><ul><li><b>Upgrade:</b> raises target scoring.</li><li><b>Super:</b> Super Targets for 20 shots. A solid target is 200K base, and the roving flashing one is 5x that.</li></ul>'},
 {t:"Sibling Rivalry",h:["left_ramp","right_ramp",["sibling",0,"alt"]],b:'<p><b>101 seconds, 10 shots, green.</b> Make ramp shots. Combos raise the base value.</p><ul><li><b>Upgrade:</b> opens more combo shots. A lit combo shot lights the 4 shots on whichever side of the playfield suits it.</li><li><b>Super:</b> one right ramp shot re-collects the mode\'s points, with all multipliers.</li></ul>'},
 {t:"Yaka Arrow",h:["deadend","pops",["yaka",0,"alt"]],b:'<p><b>54 seconds, 8 shots, white.</b> Shoot flashing shots and bumpers. 10 bumper hits spot a shot and light another. The dead-end lane is always lit. Shots start at 1M and rise by 500K.</p><ul><li><b>Upgrade:</b> the left two Hadron standups spot shots.</li><li><b>Super:</b> Super Pops for 50 hits, and the dead-end re-collects the mode total with all multipliers, which ends Super Pops.</li></ul>'}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"multiball-basics",title:"Multiball basics",steps:[
 {t:"Shared rules",h:[["scoop",0,"alt"]],b:'<p>Modes can be brought into both multiballs, and multiballs count toward wizard modes. The two cannot run together. Groot progress carries across balls. Mystery always gives an add-a-ball the first time it is collected in a multiball.</p>'}
]},
{g:"Multiballs",id:"groot-mb",title:"Groot Multiball",steps:[
 {t:"Locking",h:[["groot_shot",1],["mouth",2],["groot_ins",0,"alt"],["groot_inserts",0,"alt"]],b:'<p>Hit Groot\'s mouth to light the lock, then shoot into it to lock a ball. The first multiball is 3-ball. Later ones are 4-ball and need more hits. Locks are virtual if balls are already locked in a multiplayer game or the mechanism is disabled.</p>'},
 {t:"Jackpots",h:ALL,b:'<p>Every shot lights for three jackpots, starting at 300K and rising by 25K.</p>'},
 {t:"Super Jackpot",h:["mouth"],b:'<p>After the 9th and 18th jackpots, Groot lights for a Super worth the jackpots collected so far, up to 25M.</p>'},
 {t:"5x jackpots",h:ALL,b:'<p>A completed mode makes its shot a 5x jackpot. The character inserts show which are live.</p><table><tr><th>Mode</th><th>Shot</th></tr><tr><td>Yaka Arrow</td><td>Yondu / dead-end</td></tr><tr><td>Sanctuary</td><td>Ronin / left orbit</td></tr><tr><td>Escape Kyln</td><td>Rocket</td></tr><tr><td>Pod Chase</td><td>Nebula / left ramp</td></tr><tr><td>Antiquities Shop</td><td>Broker / Orb</td></tr><tr><td>Sibling Rivalry</td><td>Gamora / right ramp</td></tr><tr><td>Knowhere</td><td>Drax / right orbit</td></tr><tr><td>Quill\'s Quest</td><td>Star-Lord / scoop</td></tr></table>'+UNK("The rulesheet spells it \"Ronin\". The insert on the playfield says Ronan.")},
 {t:"Double Super",h:["mouth"],b:'<p>After all 24 jackpots, a Double Super lights at the mouth, which opens and closes repeatedly. Collecting it completes Groot Multiball and relights the jackpots. The Hadron Enforcer cannot collect it.</p>'},
 {t:"Playfield multiplier",h:[["groot_shot",1],["mouth",2]],b:'<p>Hit Groot to open the mouth, then re-lock a ball for 2x playfield for 20 seconds. Do it again for 3x. Up to three balls per multiball can be locked this way, and a temporary ball saver covers drains from the release.</p><p>These combine with all other multipliers.</p>'}
]},
{g:"Multiballs",id:"orb-mb",title:"Orb Multiball",steps:[
 {t:"Collecting Orbs",h:[["orb_drop",1],["orb_standup",2],["magna",0,"alt"],["orb_ins",0,"alt"]],b:'<p>Shoot the drop target and then the standup behind it to collect an Orb and hold the ball briefly. For Orbs 1 and 2, the ball is released and Magna-Force catches it and throws it wildly. Three Orbs start the multiball. Mystery can also give Orb 1 or 2.</p>'},
 {t:"Hurry-up start",h:["orb_drop"],b:'<p>The ball is held behind the drop target while a hurry-up counts from 2M to 500K. It starts 500K higher per later Orb Multiball and per Orb Super. Hit the drop target to lock in that value as the jackpot and free the ball for 3-ball. The Hadron Enforcer cannot make this shot.</p><p>Too slow and the target lowers, leaving you with 2-ball.</p>'},
 {t:"Jackpots",h:ALL.concat([["orb",0,"alt"]]),b:'<p>All shots are lit for jackpots at the hurry-up value. Shooting the Orb at any time doubles the next jackpot for about 3 seconds.</p>'},
 {t:"Super Jackpot",h:[["orb_shot",1],["orb_drop",2]],b:'<p>All jackpots light the Orb for a Double Jackpot. A hurry-up then runs at the drop target. Hit it quickly for a Super worth the jackpot total, which completes Orb Multiball. The first Super adds a ball. Then the jackpots reset.</p>'}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"multipliers",title:"Multipliers",steps:[
 {t:"How they stack",h:[],b:'<p>Multipliers multiply each other, so Nova Corps plus a combo makes 4x on that shot. The exception is Rocket\'s Rampage, which simply adds its +2x playfield to the others.</p>'},
 {t:"Rocket's Rampage",h:["rocket",["rampage",0,"alt"]],b:'<p>Each Rocket hit collects a letter in RAMPAGE. As of 0.87 "RAMP" is spotted free, so it takes three shots. Spelling it gives 45 seconds of 2x playfield. The insert pulses slowly when only the E is left. Rocket during 2x adds 10 seconds.</p>'},
 {t:"Nova Corps",h:["toplanes","inlanes_l","inlane_r"],b:'<p>Complete the five red rollovers to light shot multipliers. Lane change works separately on the top lanes, left inlanes and right inlane.</p>'},
 {t:"Shot multipliers",h:ALL,b:'<p>Then shoot any pulsing shot to light it solid for 2x for the rest of the ball. Once all shots are 2x, a strobing shot moves across the playfield for 3x.</p>'}
]},
{g:"Other scoring",id:"hadron",title:"Hadron Enforcer",steps:[
 {t:"Charges",h:["hadron"],b:'<p>Complete the five standups to light the action button for 3 charges. Each press spots one shot in the current mode or multiball, starting from the leftmost shot, with multipliers counted.</p>'},
 {t:"What it cannot do",h:[["rocket",0,"alt"],["hadron",0,"alt"]],b:'<ul><li>The final Rocket shot in Escape Kyln.</li><li>Any shot in Sanctuary.</li><li>The final super jackpots in multiballs.</li></ul>'}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Lighting it",h:[["guardians",1],["scoop",2],["guardians_ins",0,"alt"]],b:'<p>Each hit of the flashing Guardians target spots a letter. Spelling GUARDIANS lights Mystery at the scoop and raises the bonus multiplier. The insert pulses slowly when only the S is left.</p>'},
 {t:"Awards",h:["scoop"],b:'<ul><li>Add-a-ball (first award in any multiball)</li><li>Advance pops</li><li>Big points (10M)</li><li>Spot a RAMPAGE letter</li><li>Orb Multiball lock</li></ul>'}
]},
{g:"Other scoring",id:"saves",title:"Ball save and Extra Ball",steps:[
 {t:"Ball save",h:[["stabs",1],["outlane_r",2]],b:'<p>Hit the two standups beside Groot to light a virtual kickback on the right outlane. More completions while it is lit add to the value collected when it is used. Each relight takes more completions.</p>'},
 {t:"Extra Ball",h:["scoop"],b:'<p>Lights at the scoop after 3 of the 10 main modes or multiballs have been started, and again after 6 modes are completed.</p><p>If disabled it scores 15M, raised by all multipliers except Nova Corps and combos, up to 75M.</p>'},
 {t:"End-of-ball bonus",h:[],b:'<p>1K per major shot made this ball, plus 10% of the total score of every mode completed so far in the game. The multiplier rises each time GUARDIANS lights Mystery.</p>'}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"cherry-bomb",title:"Cherry Bomb Multiball",steps:[
 {t:"Starting",h:["scoop"],b:'<p>Complete 4 modes, not counting multiballs, to light the scoop. Shoot the red-pulsing scoop to start.</p>'},
 {t:"Scoring",h:ALL.concat([["mouth",0,"alt"]]),b:'<p>6 balls, 60 seconds, unlimited ball save. Flashing shots score 3M, plus 100K per later flashing shot, then turn solid and score 1M. Balls plunge fully around the orbit.</p><p>All 9 flashing shots light the moving Groot mouth for a Super worth the jackpot total, and relight the shots. Hadron charges only spot pulsing shots and cannot make the Super.</p>'},
 {t:"Ending",h:[],b:'<p>After 60 seconds the flippers die and all balls drain. A new ball is served and play continues with another mode.</p>'}
]},
{g:"Wizard modes",id:"immolation",title:"Immolation Initiative",steps:[
 {t:"Starting",h:["scoop","immolation"],b:'<p>Make at least 50% progress on all eight modes and both multiballs to light the scoop for this mini-wizard mode.</p>'},
 {t:"Scoring",h:[["mouth",0,"alt"]],b:'<p>Starts as 3-ball. Jackpots come from yellow shots and after set numbers of switch hits. After enough jackpots a Super lights at the moving Groot mouth. It scores the jackpot total and adds a ball, with no limit.</p>'}
]},
{g:"Wizard modes",id:"xandar",title:"Save Xandar",steps:[
 {t:"Starting",h:["scoop","xandar"],b:'<p>Complete all modes and both multiballs to light the scoop for the wizard mode.</p>'},
 {t:"Scoring",h:["scoop"],b:'<p>4-ball. Collect all the purple jackpots to light the Super at the scoop. Shoot it when flashing for a huge Super that adds a ball, with no limit. As in Immolation Initiative, there are many add-a-ball chances.</p>'}
]}
];

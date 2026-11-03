/* ---------- playfield features (coordinates in the 640x1188 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[127,432],[118,380],[106,300],[96,220],[104,150],[135,90]],18)],a:[118,380],x:"The Bebop arrow points up this lane, and the rulesheet makes the left orbit Bebop's shot. Nothing prints the orbit's name. The path past the arrow is a guess."},
 left_ramp:{n:"Left ramp",c:1,s:[B([[222,445],[208,385],[185,320],[165,240],[150,140]],26)],a:[208,385],x:"The Raphael arrow points at this steel ramp with the red X, and the rulesheet makes the left ramp Raphael's shot. On the Premium and LE the Build Glider Value plastic sits beside it, which fits the rulesheet. Where it ends is not shown."},
 parlor:{n:"Pizza Parlor",c:0,s:[B([[292,462],[286,400],[272,340],[260,290]],22)],a:[286,400],x:"The Ninja Pizza Parlor sign, the Start Episode television and the Michelangelo arrow line up here, and the rulesheet makes the parlor Michelangelo's shot. Stern's apron card calls it the Television shot. The path between them, and where the ball locks, is my reading."},
 center_ramp:{n:"Center ramp",c:0,s:[B([[388,482],[430,420],[475,360],[520,270],[530,190],[470,125],[395,150]],20)],a:[430,420],x:"The Donatello arrow points this way, and the rulesheet makes the center ramp Donatello's shot. Reading the inner clear ramp as this shot is mine. It could be swapped with the Krang Loop. The whole path is a guess."},
 krang_loop:{n:"Krang Loop",c:0,s:[B([[365,448],[405,405],[445,380],[482,342],[508,270],[492,200],[430,190],[398,250]],16)],a:[405,405],x:"The Mondo Jackpot arrow and the 2 foot insert point this way, and the rulesheet puts Mondo Jackpot at this shot. It also calls it the upper loop and upper flipper shot. Most of the path is hidden, so it is a guess."},
 right_ramp:{n:"Right ramp",c:1,s:[B([[455,592],[482,500],[510,405],[552,300],[592,200],[570,112],[490,72],[400,92]],24)],a:[482,500],x:"The Shredder arrow and 1 foot insert point at the steel entrance plate, and the rulesheet starts 1-2-3 Foot and Shredder Hurry-Up at the right ramp. On the Premium and LE the Collect Glider Value plastic sits beside it, which fits the rulesheet. The path past the plate is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[537,525],[560,425],[590,305],[604,195],[575,105],[495,58]],18)],a:[560,425],x:"An arrow sits below the Rocksteady art here, and the rulesheet makes the right orbit Rocksteady's shot. I could not read its label, as a bracket covers it. The path past it is under the clear ramp and is a guess."},
 lair_lane:{n:"LAIR Lane",c:0,s:[B([[232,655],[190,612],[150,625],[112,600]],20)],a:[190,612],x:"The Leonardo, Training and Jackpoto Grande inserts line up toward the back of the upper flipper. The rulesheet calls this an under-flipper shot, and the apron card says to shoot behind the upper flipper. The lane past the arrow is hidden under the wires, so its path is a guess."},
 lair_target:{n:"LAIR Target",c:0,s:[E(96,727,24,32)],a:[96,727],x:"A bullseye on the left wall, along the line of the arrow near Splinter's art. Stern's page mentions a target reading LAIR on the side of the machine. Reading this bullseye as it is mine."},
 april_target:{n:"APRIL Target",c:0,s:[B([[542,660],[558,755]],22)],a:[550,705],x:"The APRIL arrow points up at this tall strip on the right wall, a mirror of the LAIR Target. Reading it as the target is mine. A round APRIL sign also shows through the clear ramp near the right ramp entrance, and the rulesheet does not explain it."},
 two_x:{n:"2X Target",c:0,s:[C(348,392,17)],a:[348,392],x:"The Playfield X arrow points at this spot, up the middle. The target itself is behind wires, and on the Premium and LE it is under the Glider. Its exact place is my reading."},
 two_x_ins:{n:"Playfield X arrow",c:1,s:[E(340,422,14,28)],a:[340,422]},
 dimx:{n:"Dimension X targets",c:1,s:[R(168,428,26,30),R(240,412,26,30)],a:[252,427],x:"Two small standups with explosion art, one each side of the left ramp entrance, beside the printed Dimension X inserts."},
 dimx_ins:{n:"Dimension X inserts",c:1,s:[C(182,476,19),C(261,454,19)],a:[182,476]},
 pizza_disc:{n:"Pizza disc",c:1,s:[C(298,572,92)],a:[298,572],x:"Stern's page calls it a spinning pizza disc with a magnet that holds 3 balls. The rulesheet says Ninja Pizza Multiball releases the balls onto it. Brad confirms this disc is the spinner the rulesheet mentions."},
 pizza_slice:{n:"Pizza insert",c:1,s:[C(373,573,17)],a:[373,573],x:"The printed pizza slice insert beside the disc."},
 pizza_targets:{n:"Pizza Targets",c:1,s:[B([[397,518],[401,562]],12),E(304,303,10,11)],a:[399,540],x:"Red targets with a yellow pizza slice, placed by Brad from the machine. One faces left from the end of the blue plastic between the center and right ramps. The other sits below the round grate under the van's front wheel, right of the Pizza Parlor insert. Their exact outlines are my reading of the photo."},
 pops:{n:"Pict-o-Pops",c:0,s:[C(317,247,26),C(360,325,26),C(455,268,34)],a:[317,247],x:"Round caps with white skirts, partly hidden by the wires. The rulesheet says there are 3 bumpers. Which caps are the bumpers is my reading, and the middle one is the least certain."},
 top_lanes:{n:"Top lanes",c:0,s:[E(370,232,12,28),E(412,240,12,28)],a:[412,240],x:"Two slots behind the wires. The rulesheet only names top lanes, and says the skill shot lane is on the right on the Pro. Reading these as them is mine."},
 inlane_foot:{n:"Inner left inlane",c:1,s:[E(145,920,14,36)],a:[145,920],x:"The 1-2-3 insert sits above this lane, and the rulesheet starts 1-2-3 Foot at the inner left inlane."},
 inlane_l:{n:"Left Weapon inlane",c:1,s:[E(100,920,14,36)],a:[100,920],x:"The Weapon insert above marks it."},
 inlane_r:{n:"Right Weapon inlane",c:1,s:[E(547,932,14,36)],a:[547,932],x:"The Weapon insert above marks it."},
 weapon_ins:{n:"Inlane Weapon inserts",c:1,s:[E(104,851,12,28),E(541,860,12,28)],a:[104,851]},
 battle:{n:"Battle Again inserts",c:1,s:[C(55,902,20),C(599,902,20)],a:[55,902]},
 outlanes:{n:"Outlanes",c:0,s:[E(47,985,14,38),E(605,985,14,38)],a:[47,985],x:"The outer lanes below the Battle Again inserts. The rulesheet does not describe them further."},
 foot123:{n:"1-2-3 insert",c:1,s:[C(150,843,22)],a:[150,843]},
 foot1:{n:"1 foot insert",c:1,s:[C(416,693,19)],a:[416,693]},
 foot2:{n:"2 foot inserts",c:1,s:[C(277,507,19),C(432,395,17)],a:[277,507],x:"One is by the Donatello arrow and one by the Mondo Jackpot arrow, which fits the two routes in the rulesheet."},
 foot3:{n:"3 foot insert",c:1,s:[C(234,519,19)],a:[234,519]},
 lair_ins:{n:"LAIR letters",c:1,s:[C(167,673,19),C(164,707,19),C(162,741,19),C(159,777,19)],a:[164,725]},
 april_ins:{n:"APRIL letters",c:1,s:[C(503,659,19),C(493,692,19),C(511,724,19),C(501,757,19),C(521,791,19)],a:[505,725]},
 leo_ins:{n:"Leonardo arrow",c:1,s:[E(207,631,24,38)],a:[207,631]},
 raph_ins:{n:"Raphael arrow",c:1,s:[E(222,469,24,38)],a:[222,469]},
 mike_ins:{n:"Michelangelo arrow",c:1,s:[E(262,305,20,32)],a:[262,305]},
 don_ins:{n:"Donatello arrow",c:1,s:[E(355,505,42,20)],a:[355,505]},
 shred_ins:{n:"Shredder arrow",c:1,s:[E(425,645,22,38)],a:[425,645]},
 mondo_ins:{n:"Mondo Jackpot arrow",c:1,s:[E(384,427,30,18)],a:[384,427]},
 grande_ins:{n:"Jackpoto Grande insert",c:1,s:[E(286,711,32,20)],a:[286,711]},
 training_ins:{n:"Training inserts",c:1,s:[E(241,670,26,16),E(146,460,14,24),E(531,567,14,24)],a:[241,670],x:"Printed Training inserts on the LAIR Lane line and both orbit lines."},
 training_lamp:{n:"Training lamps",c:1,s:[C(150,282,17),C(531,390,17)],a:[150,282],x:"The lamps on the plastics by the two ramps, labelled Training When Lit. The rulesheet does not explain them.",v:{premium:{s:[C(141,308,17),C(555,422,17)],a:[141,308]},le:{s:[C(132,317,17),C(542,432,17)],a:[132,317]}}},
 start_ep:{n:"Start Episode television",c:1,s:[R(268,415,50,42)],a:[292,435]},
 parlor_sign:{n:"Ninja Pizza Parlor sign",c:1,s:[R(258,380,58,26)],a:[285,392]},
 turtle_power:{n:"Turtle Power insert",c:1,s:[E(393,739,36,22)],a:[393,739]},
 cowabunga:{n:"Cowabunga insert",c:1,s:[E(323,664,36,20)],a:[323,664]},
 team_up:{n:"Team Up insert",c:1,s:[E(342,1063,26,24)],a:[342,1063]},
 ep1:{n:"Pizza-o-Meter insert",c:1,s:[C(314,898,15)],a:[314,898],x:"The rulesheet places it on Shredder's chest."},
 ep2:{n:"Window Shopping insert",c:1,s:[C(258,977,15)],a:[258,977],x:"The rulesheet places it at Bebop and Rocksteady's elbows."},
 ep3:{n:"I Want a Body insert",c:1,s:[C(375,959,15)],a:[375,959],x:"The rulesheet places it touching Krang's brain."},
 ep4:{n:"Night of the Mousers insert",c:1,s:[C(406,989,15)],a:[406,989],x:"The rulesheet places it on the Mousers, below Krang."},
 ep5:{n:"Other Side Ray insert",c:1,s:[C(276,859,15)],a:[276,859],x:"The rulesheet places it at Shredder's fist."},
 ep6:{n:"Concrete Jungle insert",c:1,s:[C(291,1011,15)],a:[291,1011],x:"The rulesheet places it at the tip of Leo's sword."},
 ep7:{n:"Super Fly insert",c:1,s:[C(418,837,15)],a:[418,837],x:"The rulesheet places it next to Super Fly and Krang's android head."},
 ep8:{n:"Wrath of Krang insert",c:1,s:[C(389,898,15)],a:[389,898],x:"The rulesheet places it on Krang's android body's chest."},
 glider:{n:"Glider",c:1,s:[],a:[305,395],x:"Stern's page calls it a player-controlled diverter above both ramps. Raised toys do not line up exactly across photos.",v:{premium:{s:[E(310,395,130,72)],a:[310,395]},le:{s:[E(305,382,130,72)],a:[305,382]}}},
 glider_build:{n:"Build Glider Value plastic",c:1,s:[],a:[165,266],v:{premium:{s:[E(165,266,48,36)],a:[165,266]},le:{s:[E(155,275,48,36)],a:[155,275]}}},
 glider_collect:{n:"Collect Glider Value plastic",c:1,s:[],a:[531,380],v:{premium:{s:[E(531,380,50,34)],a:[531,380]},le:{s:[E(515,385,50,34)],a:[515,385]}}},
 krang_toy:{n:"Krang figure",c:1,s:[],a:[482,197],x:"Stern's page describes a sculpted Krang that moves when hit. It shows on the Premium and LE photos. The rulesheet does not mention it.",v:{premium:{s:[E(482,197,36,44)],a:[482,197]},le:{s:[E(475,210,36,44)],a:[475,210]}}},
 upper_flipper:{n:"Upper flipper",c:1,s:[B([[118,535],[148,607]],16)],a:[133,570]},
 flippers:{n:"Flippers",c:1,s:[B([[210,1086],[300,1144]],18),B([[471,1086],[384,1141]],18)],a:[255,1115]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var SIX=["left_orbit","left_ramp","krang_loop","center_ramp","right_ramp","right_orbit"];
var TS=["lair_lane","left_ramp","parlor","center_ramp"];
var RAMPS=["left_ramp","center_ramp","right_ramp"];
var ORBITS=["left_orbit","right_orbit"];
var ALLEP=["ep1","ep2","ep3","ep4","ep5","ep6","ep7","ep8"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:alt(ALLEP),b:"<p>Pick a turtle, then play eight Episodes against the turtles' rogues gallery. Shredder and his Foot Soldiers are the ultimate goal. Skilled players may reach Cowabunga Multiball.</p>"},
 {t:"The main shots",h:NUM(["lair_lane","left_orbit","left_ramp","parlor","krang_loop","center_ramp","right_ramp","right_orbit"]),b:"<p>Left to right, the rulesheet's lists give: LAIR Lane, left orbit, left ramp, Pizza Parlor, Krang Loop, center ramp, right ramp, right orbit.</p>"+UNK("The rulesheet's Layout section is only two pictures, so this is built from its shot lists and the printed arrows. The Turtle Shot arrows fix four shots. The numbers here are not an official order.")},
 {t:"Names for the same shot",h:["krang_loop","parlor","lair_lane"],b:"<p>The rulesheet says Krang Loop, upper loop and upper flipper loop. It says LAIR Lane and under-flipper shot. The apron card calls the parlor shot the Television shot.</p>"+UNK("Final Battle also says side-loop, and defeating Krang there, so I read that as the Krang Loop. The rulesheet does not say so.")},
 {t:"Upper flipper",h:["upper_flipper",["krang_loop",0,"alt"],["lair_lane",0,"alt"]],b:"<p>The rulesheet puts the Krang Loop on this flipper. Stern's apron card says the Training shot is behind it.</p>"},
 {t:"Turtle Shots",h:TS.concat(alt(["leo_ins","raph_ins","mike_ins","don_ins"])),b:"<p>Each turtle has a matching shot: Leonardo at the LAIR Lane, Raphael at the left ramp, Michelangelo at the Pizza Parlor, Donatello at the center ramp. These four are the multi-color Turtle Shots that finish Episodes.</p>"},
 {t:"LAIR and APRIL targets",h:["lair_target","april_target",["lair_ins",0,"alt"],["april_ins",0,"alt"]],b:"<p>Spell the letters at each target. LAIR leads to Training and 2x Playfield. APRIL leads to Battle Again and April Hurry-Up. Starting an Episode re-enables either one if it is locked out.</p>"+UNK("The rulesheet does not say where these targets are. Both marks are my reading of the photo.")},
 {t:"Dimension X targets",h:["dimx",["dimx_ins",0,"alt"]],b:"<p>The left target moves up the Episode list on the display and the right moves down. They also light Neutrino Pizza Party after a Training Mode.</p>"},
 {t:"2X Target",h:["two_x",["two_x_ins",0,"alt"]],b:"<p>The target up the middle. It starts and extends 2x Playfield.</p>"},
 {t:"Pizza disc and Pizza Targets",h:["pizza_disc","pizza_targets",["pizza_slice",0,"alt"]],b:"<p>Ninja Pizza Multiball releases its balls onto the spinning disc, which is also the spinner. The two Pizza Targets change toppings and add pizza slices. One faces the disc from the right, and the other is up by the van.</p>"},
 {t:"Lanes and top of the table",h:["inlane_foot","inlane_l","inlane_r","outlanes","top_lanes","pops",["pizza_disc",0,"alt"]],b:"<p>The inner left inlane starts 1-2-3 Foot. The Weapon inlanes toggle with the flippers. The outlanes can hold Battle Again. The top lanes raise the bonus multiplier, and three bumpers run Pict-o-Pops.</p>"+UNK("Spins of the pizza disc, which is the spinner, add to the Foot Value. Slingshots toggle Battle Again and are not marked.")},
 {t:"Premium and LE extras",ed:"premium",h:["glider","glider_build","glider_collect","krang_toy"],b:"<p>The Glider is a player-controlled diverter. The rulesheet covers it in the Glider section. Stern's page adds that it sits above both ramps and lets you send the ball to the flipper you choose.</p>"}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Pick a turtle",h:TS,b:"<p>Each turtle has its own perks, earned through Training, and its own skill shot. The first perk starts lit.</p>"},
 {t:"Start Episodes",h:[["left_ramp",1],["right_ramp",1],["parlor",2]],b:"<p>Shoot the left and right ramps to light Start Episode at the Pizza Parlor, then shoot it. Play 4 for Team-Up Multiball and to re-enable your main multiballs. Play 8 for Final Battle.</p>"},
 {t:"Ninja Pizza Multiball",h:["parlor"],b:"<p>Shoot the Pizza Parlor three times.</p>"},
 {t:"Turtle Power Multiball",h:["right_ramp",["turtle_power",0,"alt"]],b:"<p>Shoot the right ramp four times, or choose Donatello at the start of the game, to light it.</p>"},
 {t:"LAIR Target",h:[["lair_target",1],["lair_lane",2],["two_x",3]],b:"<p>Spell LAIR to light Training at the LAIR Lane. Spell it a second time to light 2x Playfield at the 2X Target.</p><p>Your first Training Mode boosts scoring by 10%, enables your next perk and lights Neutrino Pizza Party.</p>"},
 {t:"Apron card",h:["parlor","lair_lane","right_ramp"],b:"<p>Stern's Ninja Instructions card, on the apron: use either flipper button to change turtle, then plunge to select. Lock 3 balls in the Ninja Pizza Parlor. Advance Turtle Power to light the right ramp. Shoot behind the upper flipper for Training missions. Shoot the Television shot when flashing to start an Episode.</p>"}
]},
{g:"Layout and basics",id:"strategy",title:"Quick strategy",steps:[
 {t:"Stack Episodes with multiball",h:[["parlor",1],["right_ramp",2]],b:"<p>Stack Episodes with either main multiball. Try to play through 4 Episodes to reach Team-Up Multiball and re-light your main multiballs.</p>"},
 {t:"Keep 2x Playfield running",h:["two_x"],b:"<p>Get 2x Playfield running and keep it going by shooting the 2X Target from time to time. Use multiball and ball save to light it safely.</p>"},
 {t:"Super Jackpot cycle",h:[["krang_loop",1],["lair_lane",2]],b:"<p>During either multiball, shoot enough shots to light the Krang Loop. Shoot it when lit to light the LAIR Lane for Super Jackpot. Repeat.</p>"},
 {t:"Play Training when lit",h:["lair_lane"],b:"<p>The rulesheet says Training is worth playing, because it enables Neutrino Pizza Party. That can be very valuable, though it is a single ball mode.</p>"},
 {t:"Which turtle",h:["left_ramp"],b:"<p>The rulesheet calls Raphael an overall better turtle to play than Leonardo, in its Team-Up Multiball notes. It also notes that his 3x Playfield and 3x Episodes multiply together, for 9x on Episode shots and completion bonus.</p>"}
]},
{g:"Layout and basics",id:"turtles",title:"Turtles and skill shots",steps:[
 {t:"Leonardo",h:["lair_lane",["leo_ins",0,"alt"]],b:"<p>Skill shot: LAIR Lane.</p><ul><li>Level 1: light Training</li><li>Level 2: +10 seconds to all timers</li><li>Level 3: 2x Weapon Hurry-Up</li><li>Level 4: 2x Team-Up Multiball and Pizza Party</li></ul>"},
 {t:"Raphael",h:["left_ramp",["raph_ins",0,"alt"]],b:"<p>Skill shot: left ramp.</p><ul><li>Level 1: light Start Episode</li><li>Level 2: 2x Krang Kombo</li><li>Level 3: raise the playfield multiplier to 3x</li><li>Level 4: 3x Episode scoring, shots and completion bonus</li></ul>"},
 {t:"Michelangelo",h:["parlor",["mike_ins",0,"alt"]],b:"<p>Skill shot: Pizza Parlor.</p><ul><li>Level 1: light Battle Again and +5 pizza slices</li><li>Level 2: 2x April Hurry-Up</li><li>Level 3: 2x Pizza Eating Contest</li><li>Level 4: 3x Ninja Pizza Multiball</li></ul>"},
 {t:"Donatello",h:["center_ramp",["don_ins",0,"alt"]],b:"<p>Skill shot: center ramp.</p><ul><li>Level 1: light Turtle Power Multiball</li><li>Level 2: 2x 1-2-3 Foot</li><li>Level 3: +10 seconds to all ball saves</li><li>Level 4: 3x Turtle Power Multiball</li></ul>"},
 {t:"Saved levels",h:[],b:"<p>Levels reset at the end of the game, unless the player has an Insider Connected account, which saves them between games.</p>"},
 {t:"Top lane skill shot",ed:"pro",h:["top_lanes","upper_flipper"],b:"<p>Pro only. Plunge into the flashing top lane, always the one on the right, for +1x bonus multiplier. Hold the left flipper to send the ball through the orbit to the upper flipper.</p>"},
 {t:"Turtle skill shot",h:TS.concat(alt(["inlane_l","inlane_r"])),b:"<p>Plunging starts a 15 second timer to hit your turtle's shot. It scores +250k per skill shot and lights Weapon on one inlane. The skill shot only disappears when the timer runs out.</p>"},
 {t:"Timer after the top lane",ed:"pro",h:["top_lanes","pops"],b:"<p>If you went for the top lane, the timer does not start until the ball leaves the pops.</p>"}
]},
{g:"Layout and basics",id:"play_modes",title:"Modes of play",steps:[
 {t:"Choosing a mode",h:["flippers"],b:"<p>Hold both flipper buttons during attract mode until a menu appears.</p><ul><li><b>Standard</b></li><li><b>Competition:</b> randomness removed</li><li><b>Cooperation:</b> shared progress and a shared Weapon Hurry-Up</li><li><b>Cooperation and Competition</b></li></ul>"},
 {t:"Harder modes",h:[],b:"<ul><li><b>Impossible Play:</b> no ball save or extra balls, multiballs harder to light, shorter multiball ball save, and about 2.5 seconds of hold time per flip</li><li><b>Monster Play:</b> in multiplayer, player one plays Impossible rules and the others play Standard</li></ul>"},
 {t:"Team Play",h:[],b:"<p>2 VS 1, 2 VS 2 or 3 VS 1. Teams combine points but do not share progress.</p>"},
 {t:"Final Battle Challenge",h:["left_ramp"],b:"<p>Play only the final episode, on its own leaderboard. The rulesheet says the rules appear mostly identical to a standard game, possibly with a more generous ball save.</p>"},
 {t:"Half Shell Challenge",h:SIX,b:"<p>Get each turtle back to the LAIR, one at a time, by shooting 3 shots lit in that turtle's color. Two green shots spot the leftmost lit shot. Then all 4 Turtle Shots light, and any one finishes that turtle. It is timed, with its own high score table, and ends after Michelangelo.</p>"},
 {t:"DJ Mixer",h:[],b:"<p>Not a gameplay mode. It works like a jukebox for the game's music.</p>"}
]},
/* ====== EPISODES ====== */
{g:"Episodes",id:"episodes",title:"How Episodes work",steps:[
 {t:"Starting an Episode",h:[["left_ramp",1],["right_ramp",1],["parlor",2],["start_ep",0,"alt"]],b:"<p>Shoot the left and right ramps to light Start Episode, then shoot the Pizza Parlor.</p>"},
 {t:"Choosing an Episode",h:["dimx"].concat(alt(ALLEP)),b:"<p>The next Episode's insert flashes. The left Dimension X target goes up the icon list on the display, and the right goes down. Most can be played in any order. Super Fly needs Night of the Mousers played first, and The Wrath of Krang needs I Want a Body played first.</p>"},
 {t:"Finishing an Episode",h:TS,b:"<p>Episodes usually start with 30 seconds, and lit shots add time. Make the set of shots to light the Turtle Shots, then shoot one for the Completion Bonus. Completing an Episode adds a perk to Team-Up Multiball.</p>"},
 {t:"Milestones",h:[["parlor",1],["left_ramp",2]],b:"<ul><li>Start 2: lights an extra ball, at the Pizza Parlor</li><li>Play 4: lights Team-Up Multiball at the left ramp</li><li>Play 8: lights Final Battle at the left ramp</li></ul>"+UNK("The Final Battle section says it is qualified at the Pizza Parlor instead. The rulesheet disagrees with itself here.")},
 {t:"Scoring",h:["lair_target","april_target"],b:"<p>Episode Start Points begin at 275k and rise 25k per Episode played, and the last two are about 100k higher. Typical shots start at 100k and rise by 10k, then 10.5k, 11k and so on. Each completed Episode adds +25k to a shot's base value.</p><p>Starting an Episode re-enables the LAIR and APRIL targets if they are locked out.</p>"}
]},
{g:"Episodes",id:"ep1",title:"1: Pizza-o-Meter",steps:[
 {t:"Shots",h:SIX.concat([["ep1",0,"alt"]]),b:"<p>All six major shots are lit and unlight when shot. Shoot 3 to light the Turtle Shots.</p><p>Completion Bonus 1M. Max base total 2.035M.</p>"},
 {t:"Shoot all six",h:[["left_ramp",1],["center_ramp",1]].concat(alt(["left_orbit","krang_loop","right_ramp","right_orbit"])),b:"<p>Make 2 of your first 3 shots the left ramp and center ramp. The Turtle Shots light with 3 non-Turtle shots still available.</p>"},
 {t:"Team-Up perk",h:[["ep1",0,"alt"]],b:"<p>2x scoring during Pizza Party.</p>"}
]},
{g:"Episodes",id:"ep2",title:"2: Window Shopping",steps:[
 {t:"Shots",h:ORBITS.concat([["ep2",0,"alt"]]),b:"<p>Both orbits are lit and stay lit. Shoot them 3 times in total to light the Turtle Shots. The first 2 appear to add 10 seconds. The orbits stay lit alongside the Turtle Shots.</p><p>Completion Bonus 1M. The rulesheet sees no practical cap, only the timer.</p>"},
 {t:"Colors",h:ORBITS,b:"<p>Yellow scores 1x the typical value, orange 2x, the first red 3x, and further reds keep raising it. Both orbits advance the base value, and each has its own multiplier.</p>"},
 {t:"Team-Up perk",h:ORBITS,b:"<p>Either orbit completes both the Bebop and Rocksteady shots, and scores the points for both.</p>"}
]},
{g:"Episodes",id:"ep3",title:"3: I Want a Body",steps:[
 {t:"Shots",h:["left_ramp","right_ramp",["ep3",0,"alt"]],b:"<p>Both ramps start lit. A lit shot unlights and lights the ramp or orbit on the other side, with the ramp taking priority. Shoot 4 to light the Turtle Shots.</p><p>Completion Bonus 1M. Max base total 1.88M.</p>"},
 {t:"Getting a fifth shot",h:["left_ramp"],b:"<p>If the left ramp is lit for your 4th shot, shoot it. The other lit shot stays lit for more points.</p>"},
 {t:"Team-Up perk",h:TS,b:"<p>Rescue Phase lights any un-rescued turtle to be rescued.</p>"+UNK("The rulesheet's Episode section describes a bug here, and its Team-Up table says it was fixed in 1.55. Its stated code revision is 1.50, so the sheet is not consistent on version.")}
]},
{g:"Episodes",id:"ep4",title:"4: Night of the Mousers",steps:[
 {t:"Shots",h:["lair_target","left_ramp","right_ramp","april_target",["ep4",0,"alt"]],b:"<p>These four start lit. Each lit shot then lights them plus the center ramp and both orbits, except the one you just hit. Shoot 6 to light the Turtle Shots.</p><p>Completion Bonus 1M. Max base total 2.425M.</p>"},
 {t:"No timer, but shots time out",h:["center_ramp","left_orbit","right_orbit"],b:"<p>There is no Episode timer, but each shot can time out. If 10 time out, you fail. Orbits always score 150k and the center ramp always 250k. There is no timer in the Turtle Shots phase.</p>"},
 {t:"Team-Up perk",h:["inlane_l","inlane_r"],b:"<p>Flippers change the lit Weapon inlane, and rolling over it spots a Bad Guy shot.</p>"}
]},
{g:"Episodes",id:"ep5",title:"5: See You On The Other Side Ray",steps:[
 {t:"Shots",h:[].concat(RAMPS.map(function(i){return [i,1]}),[["lair_target",2],["ep5",0,"alt"]]),b:"<p>All 3 ramps start lit. A lit ramp unlights them and lights the LAIR Target. Shoot that to relight the ramps. Hit the lit LAIR Target 3 times to light the Turtle Shots.</p><p>Completion Bonus 1M. Max base total 2.785M.</p>"},
 {t:"Extra shots",h:["lair_target"],b:"<p>The LAIR Target can time out, returning you to lit ramps, while values keep rising. The rulesheet says about 10 shots are technically possible, and 8 is a more realistic goal, by letting it time out twice.</p>"},
 {t:"Team-Up perk",h:TS,b:"<p>Doubles the Rescue Hurry-Up start value from 500k to 1M.</p>"}
]},
{g:"Episodes",id:"ep6",title:"6: Welcome To The Concrete Jungle",steps:[
 {t:"Phase 1",h:[["dimx",1],["left_ramp",2],["left_orbit",0,"alt"],["right_orbit",0,"alt"],["ep6",0,"alt"]],b:"<p>Shoot both Dimension X targets, 100k each or 25k if spotted from the left ramp, then the left ramp. Yellow orbit shots add 10 seconds and score points.</p>"},
 {t:"Phase 2",h:SIX,b:"<p>All six major shots are lit and unlight when shot. Shoot 3 to light the Turtle Shots. The first 2 red shots add 10 seconds.</p><p>Completion Bonus 1M. Max base total 2.08M.</p>"},
 {t:"Team-Up perk",h:ORBITS.concat(["left_ramp","krang_loop","center_ramp","right_ramp"]),b:"<p>Boosts Foot Soldier and Bebop and Rocksteady shots by 250k.</p>"}
]},
{g:"Episodes",id:"ep7",title:"7: Super Fly",steps:[
 {t:"Shots",h:[["right_ramp",1],["right_orbit",1],["left_ramp",2],["left_orbit",2],["krang_loop",3],["center_ramp",3],["ep7",0,"alt"]],b:"<p>Needs Night of the Mousers played first. Shoot a right shot to light the left pair, then the Krang Loop and center ramp. Your 3rd lit shot lights the Turtle Shots.</p>"},
 {t:"Completion hurry-up",h:TS,b:"<p>The Completion Bonus is a hurry-up starting at 2.5M. Shoot a Turtle Shot to collect it.</p>"+UNK("Max total is TBD in the rulesheet, and it has not worked out the shot values.")},
 {t:"If you stall",h:["april_target"],b:"<p>After about 15 seconds without a lit shot, the APRIL Target lights. It adds about 5 seconds and scores about 100k.</p>"},
 {t:"Team-Up perk",h:["right_ramp"],b:"<p>Doubles the Shredder Hurry-Up start value from 500k to 1M.</p>"}
]},
{g:"Episodes",id:"ep8",title:"8: The Wrath of Krang",steps:[
 {t:"Shots",h:["lair_target","lair_lane","left_orbit","left_ramp","krang_loop","center_ramp","right_ramp","right_orbit","april_target",["ep8",0,"alt"]],b:"<p>Needs I Want a Body played first. All nine are lit. Two adjacent red shots sweep left to right and back, and the rest are yellow.</p><p>Completion Bonus 1.5M. Max base total 3.12M.</p>"},
 {t:"Values",h:[],b:"<p>Yellow \"Krang Missed\" shots score 25k. Red shots score 296k, 416k, then 458k. Shoot 3 red shots to light the Turtle Shots.</p>"+UNK("The rulesheet has not settled whether yellow shots get the Episode Completion increase.")},
 {t:"Team-Up perk",h:["left_ramp","krang_loop","center_ramp","right_ramp"],b:"<p>One Foot Soldier shot defeats all 4 Foot Soldiers, but not Bebop and Rocksteady at the orbits.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"tpmb",title:"Turtle Power Multiball",steps:[
 {t:"Starting it",h:["right_ramp",["turtle_power",0,"alt"]],b:"<p>After three right ramp shots, the next one starts it. Donatello's level 1 perk lights it instantly. After it has been played, a wizard mode must be played to re-enable it.</p>"},
 {t:"Jackpots",h:SIX,b:"<p>Shoot the green shots for jackpots, starting at 100k, +25k each, up to 250k. Collect 4 to light Mondo Jackpot.</p>"+UNK("The rulesheet does not list which shots turn green. This marks the six major shots as a guide.")},
 {t:"Mondo and Super",h:[["krang_loop",1],["lair_lane",2],["mondo_ins",1,"alt"],["grande_ins",2,"alt"]],b:"<p>Shoot the Krang Loop for Mondo, then Double, then Triple. Mondo also lights the LAIR Lane for Jackpoto Grande, the Super Jackpot. Greens relight after you collect it, and 4 more qualify Mondo again.</p>"},
 {t:"Add-a-Ball",h:TS.concat(["right_ramp"]),b:"<p>Shoot all 4 Turtle Shots to light Turtle Power for an add-a-ball at the right ramp and relight them. They also count as jackpots. There is no limit on add-a-balls, apart from the balls available.</p>"}
]},
{g:"Multiballs",id:"npmb",title:"Ninja Pizza Multiball",steps:[
 {t:"Starting it",h:["parlor",["parlor_sign",0,"alt"],["pizza_disc",0,"alt"]],b:"<p>Shoot the Pizza Parlor three times in single-ball play to lock balls. The balls release from the parlor onto the spinning disc. After it has been played, a wizard mode must be played to re-enable it.</p>"},
 {t:"Defeat Foot Soldiers",h:[["left_ramp",3],["parlor",1],["krang_loop",2],["center_ramp",2],["right_ramp",1]],b:"<p>Each lit shot defeats this many Foot Soldiers. Defeat 6 to light Mondo Jackpot.</p>"},
 {t:"Mondo and Super",h:[["krang_loop",1],["lair_lane",2],["pizza_targets",0,"alt"]],b:"<p>Shoot the Krang Loop for Mondo, then Double, then Triple. Mondo lights the LAIR Lane for Jackpoto Grande, based on shots collected before it. Pizza Target jackpots score small points and pizza slices.</p>"},
 {t:"Collecting toppings",h:["pizza_targets","parlor"],b:"<p>See toppings at the top right of the display. The 2 Pizza Targets change them, left to right, in normal play. The first lock keeps the first two, the second lock the next two, and the third lock the fifth.</p>"},
 {t:"Topping list, part 1",h:[],b:"<ul><li><b>Anchovies:</b> Pizza Target jackpots +10k</li><li><b>Octopus:</b> all switches score, from 1k up to 8k</li><li><b>Peanut Butter:</b> Pizza Target jackpots add a slice</li><li><b>Pepperoni:</b> single Mondo +250k</li><li><b>Fudge:</b> Foot shots defeat one more</li><li><b>Sausages:</b> +50k per Foot defeated</li></ul>"},
 {t:"Topping list, part 2",h:[],b:"<ul><li><b>Gummy Bears:</b> +1 ball, up to 3 on the Pro and 5 on the Premium and LE</li><li><b>Ice Cream:</b> Mondo starts lit</li><li><b>Pineapple:</b> the parlor defeats one more</li><li><b>Marshmallows:</b> Triple Mondo stays lit, at a rising value, until it times out</li><li><b>Chili Peppers:</b> Jackpoto Grande starts lit</li></ul>"},
 {t:"Mushrooms",ed:"premium",h:["lair_lane"],b:"<p>Premium and LE only. The LAIR Lane holds a ball and starts a timed 2x scoring multiplier.</p>"}
]},
{g:"Multiballs",id:"jackpots",title:"Mondo and Super values",steps:[
 {t:"Double and Triple",h:["krang_loop"],b:"<p>Mondo shows white, Double blue and Triple red. Double and Triple are timed.</p>"},
 {t:"Mondo values",h:["krang_loop"],b:"<ul><li>Ninja Pizza: 500k base (+250k)</li><li>Turtle Power: 350k base (+50k)</li></ul>"+UNK("The rulesheet reports a bug giving your first Turtle Power the 2x value meant for your second, so 700k.")},
 {t:"Super values",h:["lair_lane",["grande_ins",0,"alt"]],b:"<ul><li>Ninja Pizza: 3M + 500k per Mondo since the last Super</li><li>Turtle Power: 500k (+125k), multiplied by Supers collected, up to 3x</li></ul>"+UNK("The same bug makes the first Turtle Power Super 1M, according to the rulesheet.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"pops",title:"Pict-o-Pops",steps:[
 {t:"How it works",h:["pops"],b:"<p>Each bumper hit changes that bumper's award tile. When 2 of 3 tiles match, the award locks in, and all three cycle the last tile until it matches and pays. Then it repeats.</p>"},
 {t:"Points and values",h:["pops"],b:"<ul><li>Big Points: 100k</li><li>Really Big Points: 300k</li><li>Start or Increase April Hurry-Up</li><li>Increase Weapon Hurry-Up value</li><li>Add Time: +10 seconds</li><li>+1x, +2x or +3x bonus multiplier</li><li>Bonus Held</li></ul>"},
 {t:"Things to light",h:["pops"],b:"<ul><li>Add-A-Ball, during multiball</li><li>Light 1-2-3 Foot, Battle Again, Extra Ball, Start Episode, Turtle Power or Weapon</li><li>Special</li></ul>"}
]},
{g:"Other scoring",id:"weapon",title:"Weapon Hurry-Up",steps:[
 {t:"Qualify",h:["inlane_l","inlane_r",["weapon_ins",0,"alt"]],b:"<p>A skill shot lights Weapon on one inlane. It toggles with the flippers. Roll over it to start the hurry-up at one of the orbits.</p>"},
 {t:"Two shots",h:[["left_orbit",1],["right_orbit",1],["center_ramp",2]],b:"<p>Base value is 500k, down to 50k before it times out. Shoot the lit orbit, which lights the center ramp for base value plus the first collect. Pict-o-Pops can add 125k to the base.</p>"},
 {t:"Co-op",h:[],b:"<p>In Cooperation, you get one more shot for each Weapon Hurry-Up teammates qualified on the same ball number. Each shot is 500k plus the previous collect. The rulesheet's theoretical best is 18M.</p>"}
]},
{g:"Other scoring",id:"foot",title:"1-2-3 Foot",steps:[
 {t:"Start it",h:["inlane_foot",["foot123",0,"alt"]],b:"<p>The inner left inlane is lit at the start of each ball. Roll through it in single-ball play.</p>"},
 {t:"First route",h:[["right_ramp",1],["center_ramp",2],["left_ramp",3],["foot1",0,"alt"],["foot2",0,"alt"],["foot3",0,"alt"]],b:"<p>Right ramp, center ramp, left ramp.</p>"},
 {t:"Second route",h:[["right_ramp",1],["krang_loop",2],["center_ramp",3]],b:"<p>Right ramp, Krang Loop, center ramp.</p>"},
 {t:"Timing and value",h:["right_ramp",["pizza_disc",0,"alt"]],b:"<p>You have 15 seconds per shot, and shots already made add time. So the right ramp is a good way to keep it going. Foot Value starts at 50k and gains 1k per spin of the pizza disc. The shots score 1x, 2x and 3x, for 6x in total.</p><p>Completing it stops it lighting at the start of remaining balls, and each shot adds to Foot Defeated in bonus.</p>"+UNK("Pict-o-Pops can also relight it. The rulesheet asks whether that works after you have completed it, and leaves it open.")}
]},
{g:"Other scoring",id:"training",title:"Training",steps:[
 {t:"Lighting it",h:[["lair_target",1],["lair_lane",2],["lair_ins",1,"alt"],["training_ins",2,"alt"],["training_lamp",0,"alt"]],b:"<p>Every odd LAIR completion lights the LAIR Lane for Training. If Training is already lit, it lights the 2X Target instead.</p>"},
 {t:"Reward",h:[],b:"<p>Each win adds +10% to all scoring for the rest of the game, up to +30%. It qualifies Neutrino Pizza Party. Training is the only way to level up your turtle.</p>"},
 {t:"Timer",h:["lair_target"],b:"<p>You start with 15 seconds. The LAIR Target adds 10, to a maximum of 20, and the rulesheet says that maximum might be higher. Other targets sound like they subtract time, but only flash the lights.</p>"},
 {t:"Mode 1, to level 2",h:NUM(["right_ramp","left_ramp"]),b:"<p>Right ramp, left ramp.</p>"},
 {t:"Mode 2, to level 3",h:NUM(["right_ramp","right_orbit","left_orbit","left_ramp"]),b:"<p>Right ramp, right orbit, left orbit, left ramp.</p>"},
 {t:"Mode 3, to level 4",h:NUM(["right_ramp","krang_loop","center_ramp","left_ramp"]),b:"<p>Right ramp, Krang Loop, center ramp, left ramp.</p><p>If the left ramp was lit for Start Episode, finishing on it qualifies that too.</p>"}
]},
{g:"Other scoring",id:"neutrino",title:"Neutrino Pizza Party",steps:[
 {t:"Lighting it",h:[["dimx",1],["left_ramp",2]],b:"<p>After a Training Mode, complete both Dimension X targets before they time out, in normal play, to light the left ramp. It can be played once per game.</p>"+UNK("Whether progress counts while other modes run is unclear. The rulesheet says progress can still be made, then asks about it.")},
 {t:"Blue shot",h:NUM(["left_orbit","left_ramp","right_ramp","right_orbit"]),b:"<p>Single ball, 30 seconds. One shot is blue, starting at 350k, in this order, repeating. Shooting it collects its value and resets the timer to nearly 30 seconds. The value never resets.</p>"},
 {t:"Red shots",h:SIX,b:"<p>The other shots are red. Each one unlights and builds all future blue shots by 200k (+100k), up to 5M. The mode ends when time runs out or you drain.</p>"}
]},
{g:"Other scoring",id:"twox",title:"2x Playfield",steps:[
 {t:"How it works",h:[["lair_target",1],["two_x",2]],b:"<p>Every even LAIR completion lights the center target for 30 seconds of 2x scoring. Shoot it while running to add 5 seconds. Raphael's level 3 perk makes it 3x.</p><p>If the LAIR Target is locked out, starting an Episode re-enables it.</p>"}
]},
{g:"Other scoring",id:"pizza",title:"Pizza Eating Contest",steps:[
 {t:"Collecting slices",h:["pizza_targets",["pizza_slice",0,"alt"]],b:"<p>Pizza Target shots add slices in normal play and during Ninja Pizza Multiball. Michelangelo starts with 5.</p>"},
 {t:"The contest",h:["pizza_targets","flippers"],b:"<p>After 7 slices, the lights dim and the Pizza Targets strobe. Shoot either to start. You have 6 seconds to collect up to 40 slices, one per action button press. Usually around 2 to 3 million, and faster scores more.</p>"},
 {t:"More slices",h:["parlor"],b:"<p>Slices also earn points at thresholds, and a lit extra ball after around 60.</p>"}
]},
{g:"Other scoring",id:"kombo",title:"Krang Kombo",steps:[
 {t:"Build and cash",h:[["krang_loop",1],["center_ramp",2]],b:"<p>Repeat Krang Loop shots to build the value, then shoot the center ramp to cash it. It maxes at 500k, with three loop shots before it times out. A Max Krang Kombo is required for Cowabunga.</p>"}
]},
{g:"Other scoring",id:"glider",title:"Glider",ed:"premium",steps:[
 {t:"Build",h:["left_ramp","glider","glider_build"],b:"<p>Using the player-controlled diverter, shoot the left ramp repeatedly to Build Glider Value, up to a maximum.</p>"+UNK("The rulesheet asks whether the maximum is 3 shots. It wants more information on values and when this is lit.")},
 {t:"Collect",h:["right_ramp","glider_collect"],b:"<p>Shoot the right ramp when Collect Glider Value is lit.</p>"}
]},
{g:"Other scoring",id:"battle",title:"Battle Again",steps:[
 {t:"How it works",h:[["april_target",1],["outlanes",2],["battle",0,"alt"]],b:"<p>Every odd APRIL completion lights one outlane for a Battle Again ball save. The lit outlane alternates with slingshot hits, or flipper buttons with Game Adjustment 18. If it is already lit, the completion starts April Hurry-Up instead.</p>"}
]},
{g:"Other scoring",id:"april",title:"April Hurry-Up",steps:[
 {t:"How it works",h:[["april_target",1],["right_ramp",2],["april_ins",0,"alt"]],b:"<p>Every even APRIL completion lights the right ramp for the hurry-up. The APRIL Target raises the value by 62% the first time and adds time. It will not go past 162%. Shoot the right ramp to cash out.</p>"},
 {t:"Values",h:["right_ramp"],b:"<p>Starts at 100k, plus 75k from Pict-o-Pops. Started during a feature, it adds:</p><ul><li>Episodes: +250k</li><li>Turtle Power or Ninja Pizza: +500k</li><li>Team-Up: +1M</li><li>Final Battle: +2.5M</li><li>Cowabunga: +5M</li></ul>"}
]},
{g:"Other scoring",id:"extra",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["parlor"],b:"<p>Lit at the Pizza Parlor by starting 2 Episodes, collecting enough pizza slices, or a percentage-based Pict-o-Pops award.</p>"},
 {t:"End of ball bonus",h:["top_lanes"],b:"<ul><li>Base bonus, from switch hits</li><li>Foot defeated x 10k</li><li>Pizza slices x 500</li><li>Episodes completed x 125k</li></ul><p>All multiplied by the bonus multiplier, raised by top lane completions and Pict-o-Pops.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"tumb",title:"Team-Up Multiball",steps:[
 {t:"Start",h:["left_ramp",["team_up",0,"alt"]],b:"<p>After playing any 4 Episodes, shoot the left ramp. Your turtle decides which Turtle Shots rescue the others, and each teams up with a different ally. Completed Episodes add perks, shown in each Episode's section.</p>"},
 {t:"Defeat Bad Guys",h:ORBITS.concat(["left_ramp","krang_loop","center_ramp","right_ramp"]),b:"<p>Ball save runs for 20 seconds by default. The orbits are Bebop and Rocksteady, 500k (+25k). The ramps and Krang Loop are Foot Soldiers, 125k (+75k), up to 1M. Each unlights when defeated.</p>"},
 {t:"Rescue",h:TS,b:"<p>Defeat all 6 to start a Rescue Hurry-Up at a Turtle Shot, from 500k. Collect it for an add-a-ball. Repeat for the second.</p>"},
 {t:"Shredder",h:[["right_ramp",1],["shred_ins",1,"alt"]],b:"<p>The third round starts Shredder Hurry-Up at the right ramp. Collect it to light the final Rescue Hurry-Up. Timed-out hurry-ups relight the Bad Guys.</p><p>Letting them time out can score well if you keep the multiball going. The rulesheet gives 1.975M for a first set, up to around 5.5M from the fifth on.</p>"},
 {t:"Weapons",h:["left_orbit","right_orbit","center_ramp"],b:"<p>Shooting an orbit or the center ramp, lit or not, lights a weapon there on a timer. A lit weapon shot spots a Bad Guy, and it appears to choose the lower value.</p>"},
 {t:"Pizza Party",h:SIX,b:"<p>All 3 rescues start Pizza Party, the Victory Laps. It also awards one Cowabunga requirement, if needed. Lit yellow shots collect the next award, then turn red and yellow for 2x, on a timer. The next award starts at 150k, +25k per shot, up to 1M. It runs until you are down to 1 ball.</p>"},
 {t:"Big scoring",h:["two_x"],b:"<p>A level 4 Leonardo with 2x Playfield has 4x scoring, 5.2x with the Training boost. With the Pizza-o-Meter perk it reaches 10.4x in Pizza Party, and 20.8x on the 2x shots. Raphael can reach 7.2x or 7.8x with one less Training Mode.</p>"}
]},
{g:"Wizard modes",id:"final",title:"Final Battle",steps:[
 {t:"Start",h:["parlor",["left_ramp",0,"alt"]],b:"<p>After playing all 8 Episodes. Each failed Episode scores 250k. Completed ones score 500k, 1.25M, 2M, 2.75M, 3.5M, 4.25M, 5M, then 5.75M, for 25M at most. A playfield multiplier multiplies these.</p>"+UNK("This section qualifies it at the Pizza Parlor, but the Episode section says the left ramp. Both are marked. Please check on a machine.")},
 {t:"Phase 1, multiball",h:[["left_ramp",1],["center_ramp",1],["right_ramp",1],["krang_loop",1],["dimx",2],["left_ramp",3]],b:"<p>Play continues down to one ball. The 3 ramps and the side-loop are lit, and each unlights when shot. Shoot 3, then the Dimension X targets, then the left ramp.</p>"},
 {t:"Phase 2, single ball",h:[["left_orbit",1],["right_orbit",1],["left_ramp",2]],b:"<p>8 shots light, 4 red for Bebop and 4 blue for Rocksteady. All red lights the left orbit for Bebop Hurry-Up. All blue lights the right orbit for Rocksteady Hurry-Up. Collect both, then shoot the left ramp.</p>"+UNK("The rulesheet does not say which 8 shots.")},
 {t:"Phase 3, multiball",h:NUM(["left_ramp","krang_loop","right_ramp","left_ramp"]),b:"<p>Shoot the left ramp to defeat Slash, the side-loop to defeat Krang, the right ramp to defeat Shredder, then the left ramp to win.</p>"+UNK("The rulesheet writes X times for each, so the counts are unknown.")},
 {t:"Add-a-ball",h:[["lair_target",1],["lair_lane",2]],b:"<p>In a multiball phase, completing the LAIR Target lights the LAIR Lane for an add-a-ball. The mode ends when you drain all balls or make the final left ramp shot.</p>"}
]},
{g:"Wizard modes",id:"cowabunga",title:"Cowabunga Multiball",steps:[
 {t:"Qualifying",h:["cowabunga"],b:"<ul><li>A Max Krang Kombo</li><li>Jackpoto Grande</li><li>A Triple Mondo Jackpot</li><li>A Weapon Hurry-Up</li><li>5 April Hurry-Ups</li><li>Complete 1-2-3 Foot</li><li>Play Final Battle</li></ul>"},
 {t:"The mode",h:[],b:"<p>The rulesheet does not yet say how this mode works.</p>"+UNK("It also does not say where it starts.")}
]}
];

/* ---------- playfield features (coordinates in the 1000x2070 frame of Spooky's playfield photo, perspective-corrected to look straight down) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- orbits ---- */
 lorbit:{n:"Left orbit",c:0,s:[B([[192,990],[168,860],[128,700],[82,560],[50,400],[62,250],[130,135],[250,62],[320,52]],22)],a:[150,800],x:"The rulesheet puts the left orbit entrance on the left side, feeding the top of the playfield, the CORE rollovers and the right orbit. The path is my reading of the photo."},
 lorbins:{n:"Left orbit inserts",c:1,s:[E(165,880,32,30),E(195,985,16,36)],a:[180,930],x:"The big chevron and the arrow below it at the left orbit entrance."},
 spinner:{n:"Left spinner",c:1,s:[R(92,612,62,76)],a:[123,650],x:"The rulesheet puts the spinner directly inside the left orbit entrance. The white plate, with the SPINNER insert below it."},
 spinins:{n:"Spinner insert",c:1,s:[E(52,770,30,16)],a:[52,770]},
 rorbit:{n:"Right orbit",c:0,s:[B([[792,1000],[815,880],[835,720],[868,520],[915,350],[918,220],[858,112],[740,58],[690,52]],22)],a:[840,700],x:"The rulesheet puts the right orbit entrance on the right side, feeding the top of the playfield, the CORE rollovers and the left orbit. The path is my reading of the photo."},
 rorbins:{n:"Right orbit inserts",c:1,s:[E(808,950,32,30),E(772,1055,16,36)],a:[790,1000],x:"The big chevron and the arrow below it at the right orbit entrance."},
 gates:{n:"Orbit gates",c:0,s:[C(305,150,20),C(700,150,20)],a:[305,150],x:"The rulesheet says the orbit has two controlled gates, one on either side of the rollovers. I could not see them in the photo, so these mark where they should be."},
 /* ---- reactor core (upper playfield area) ---- */
 core:{n:"CORE rollovers",c:1,s:[B([[362,170],[362,280]],30),B([[455,170],[455,280]],30),B([[548,170],[548,280]],30),B([[640,170],[640,280]],30)],a:[500,225],x:"The four lanes at the top under the C, O, R, E inserts. The rulesheet says they feed the reactor area."},
 reactor:{n:"Reactor core",c:1,s:[R(140,290,550,330)],a:[420,440],x:"The blue area in the top half of the playfield. The ball enters through the CORE rollovers and leaves at the bottom, near the scoop."},
 rtargets:{n:"Reactor targets 1, 2, 3",c:0,s:[C(660,340,20),C(660,400,20),C(660,460,20)],a:[660,400],x:"The rulesheet puts three stationary targets labeled 1, 2, 3 on the right side of the reactor. The numbered arrow inserts are clear; the targets themselves are hard to see, so these mark the ends of the arrows."},
 rtargetins:{n:"1, 2, 3 arrow inserts",c:1,s:[E(598,340,30,16),E(598,400,30,16),E(598,460,30,16)],a:[598,400]},
 kickers:{n:"Reactor kickers",c:0,s:[B([[150,330],[200,250],[262,190]],22),B([[525,598],[605,525]],22)],a:[200,260],x:"The rulesheet describes two rubber rings with kickers (like slingshots): the panel above the left ring, and the side that closes the loop after the 1, 2, 3 targets. My reading is the upper left and lower right sides of the blue area."},
 rring:{n:"Reactor left ring",c:0,s:[B([[142,380],[142,530]],18)],a:[142,455],x:"The rulesheet says the left edge above the mini flipper is a rubber ring. Marked at the striped left wall of the reactor."},
 miniflip:{n:"Reactor mini flipper",c:1,s:[B([[238,612],[300,655]],18)],a:[268,632],x:"The yellow flipper at the bottom of the reactor. The rulesheet says the exit is directly to its right."},
 rdisplay:{n:"Reactor display",c:0,s:[R(305,530,115,62)],a:[362,560],x:"The rulesheet says a segment display in the upper playfield counts the reactor status up to 99. This dark window inside the reactor is my reading of it."},
 /* ---- center ---- */
 scoop:{n:"Scoop",c:1,s:[R(285,770,75,70)],a:[322,805],x:"The main scoop, which the rulesheet says can be shot from either flipper. The apron card calls it the left scoop. Its inserts read MYSTERY and START REACTOR."},
 scoopins:{n:"Mystery and Start Reactor inserts",c:1,s:[R(310,895,75,40),R(320,950,78,45)],a:[355,935]},
 gridtargets:{n:"Grid targets",c:1,s:[C(430,800,26),C(490,800,26),C(550,795,26)],a:[490,800],x:"The three yellow targets at the top center. Each one lights the column of grid inserts below it."},
 grid:{n:"Keypad grid",c:1,s:[C(440,890,18),C(498,885,18),C(555,875,18),C(450,945,18),C(507,932,18),C(565,925,18),C(458,995,18),C(515,985,18),C(572,978,18)],a:[507,932],x:"The 3 x 3 grid of round inserts in front of the grid targets."},
 reactornums:{n:"Reactor inserts 1 to 9",c:1,s:[C(375,1155,28),C(490,1085,28),C(600,1090,28),C(600,1240,28),C(645,1355,28),C(530,1330,28),C(395,1335,28),C(335,1265,28),C(500,1210,28)],a:[500,1210],x:"The numbered inserts in the middle of the playfield, one per reactor."},
 /* ---- lock lane ---- */
 locklane:{n:"Lock lane",c:0,s:[B([[640,880],[665,780],[710,650],[762,505],[800,380]],30)],a:[700,680],x:"The long lane on the right with the three in-line drop targets. The lane path is my reading of the photo."},
 drops:{n:"Lock drop targets",c:0,s:[R(645,765,38,38),R(692,632,38,38),R(744,485,38,38)],a:[692,650],x:"The three in-line drop targets in the lock lane. Their spacing is my estimate; the photo shows black blocks along the lane."},
 lockscoop:{n:"Lock scoop",c:0,s:[C(805,370,30)],a:[805,370],x:"The rulesheet puts a scoop behind the third drop target. Marked at the dark opening at the top of the lock lane."},
 lockins:{n:"Lock arrows",c:0,s:[E(690,737,14,30),E(730,583,14,30)],a:[710,660],x:"The arrow inserts inside the lock lane. The rulesheet says the lock arrows light green when lock is lit; I take these to be them."},
 /* ---- targets ---- */
 rad:{n:"RAD targets",c:1,s:[R(128,1118,26,44),R(128,1168,26,44),R(126,1218,26,44)],a:[140,1190],x:"The rulesheet puts three white stationary targets directly above the left inlane. In this photo they look orange; the RAD panel beside them names them. The split into three is my estimate."},
 radins:{n:"R, A, D inserts",c:1,s:[E(220,1185,26,18),E(215,1235,26,18),E(210,1290,26,18)],a:[215,1235]},
 ldestroy:{n:"Left Destroy target",c:1,s:[R(212,735,50,52)],a:[237,760],x:"The red square target at the upper left of the lower playfield, with a DESTROY insert below it."},
 rdestroy:{n:"Right Destroy target",c:1,s:[R(726,812,50,52)],a:[750,838],x:"The red square target at the upper right of the lower playfield, beside the lock lane."},
 destroyins:{n:"Destroy inserts",c:0,s:[E(265,880,14,34),E(710,957,14,34)],a:[265,880],x:"The small vertical inserts below each red target. I read them as the DESTROY inserts the rulesheet mentions."},
 pop:{n:"Pop bumper",c:1,s:[C(822,1150,66)],a:[822,1150],x:"The single pop bumper on the right side, between the right orbit entrance and the right inlane. The two DESTROY arrows beside it point at it."},
 popins:{n:"Pop bumper Destroy arrows",c:1,s:[E(735,1172,34,16),E(740,1262,34,16)],a:[738,1215]},
 /* ---- lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[280,1785],[378,1852]],24)],a:[328,1818]},
 rflip:{n:"Right flipper",c:1,s:[B([[622,1788],[525,1852]],24)],a:[573,1820]},
 lsling:{n:"Left slingshot",c:0,s:[E(215,1530,32,85)],a:[215,1530]},
 rsling:{n:"Right slingshot",c:0,s:[E(690,1530,32,85)],a:[690,1530]},
 laneS:{n:"S lane (left outlane)",c:1,s:[B([[72,1470],[72,1565]],18),C(70,1440,18)],a:[72,1500]},
 laneA:{n:"A lane (left inlane)",c:1,s:[B([[140,1470],[140,1560]],18),C(145,1415,18)],a:[140,1490]},
 laneV:{n:"V lane (right inlane)",c:1,s:[B([[768,1470],[768,1560]],18),C(765,1435,18)],a:[768,1500]},
 laneE:{n:"E lane (right outlane)",c:1,s:[B([[835,1495],[835,1590]],18),C(840,1465,18)],a:[835,1525]},
 bonusgrid:{n:"Bonus grid",c:1,s:[R(330,1425,245,140)],a:[452,1495],x:"The BONUS DATA DISPLAY MODULE inserts, 1K to 50K."},
 bonusx:{n:"Bonus multiplier inserts",c:1,s:[C(405,1605,24),C(457,1600,24),C(510,1605,24)],a:[457,1602],x:"The 2x, 3x and 4x triangles under the bonus grid."},
 ballsave:{n:"Ball save display",c:0,s:[R(385,1885,130,36)],a:[450,1903],x:"The rulesheet puts a segment display below the flippers that counts down the ball save. The BALL SAVE label is visible; the display itself is mostly hidden by the apron in this photo."},
 shooter:{n:"Shooter lane",c:0,s:[B([[935,1900],[935,1150]],22)],a:[935,1500]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers and lanes",h:["lflip","rflip","lsling","rsling","laneS","laneA","laneV","laneE"],b:"<p>A classic layout: two flippers, two triangle slingshots, and one inlane and one outlane on each side. The four lanes are labeled S, A, V and E from left to right.</p>"},
 {t:"Orbits and spinner",h:["lorbit","spinner","rorbit","lorbins","rorbins"],b:"<p>An orbit on each side. Both feed the top of the playfield, the CORE rollovers and the other orbit. The spinner sits directly inside the left orbit entrance.</p>"},
 {t:"The reactor core",h:["core","gates","reactor","rtargets","kickers","rring","miniflip","rdisplay"],b:"<p>The top half of the playfield is the reactor. The ball gets in through the four CORE rollovers at the top, which have a controlled gate on each side. Inside are a rubber ring on the left, a ring with a kicker above it, three targets labeled 1, 2 and 3 on the right, and another ring with a kicker closing the loop. A mini flipper guards the bottom, and the ball leaves just to its right, near the scoop.</p>"+UNK("The gates, kickers and 1, 2, 3 targets are hard to see in the photo; their marks are my estimates from the rulesheet's description.")},
 {t:"Scoop and grid",h:["scoop","scoopins","gridtargets","grid","reactornums"],b:"<p>The main scoop can be shot from either flipper; it collects Mystery and starts reactors. The rulesheet warns that it fires the ball back quickly. The three yellow grid targets at the top center each light a column of the 3 x 3 grid in front of them. Below them, the 1 to 9 inserts show the reactors.</p>"},
 {t:"Lock lane",h:["locklane","drops","lockscoop","lockins"],b:"<p>The lock lane on the right has three in-line drop targets, with a scoop behind the third one.</p>"},
 {t:"Targets",h:["rad","radins","ldestroy","rdestroy","pop","popins"],b:"<p>The three RAD targets sit above the left inlane, each with a triangle insert. The two red Destroy targets are at the left and right corners of the lower playfield. A single pop bumper sits on the right, about halfway between the right orbit entrance and the right inlane.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Hands-Free Skill Shot",h:["core","shooter"],b:"<p>At the start of a ball one CORE rollover is lit. Move it with the flippers <em>before</em> plunging; once the ball leaves the shooter lane the letter is locked in. Land the plunge in the lit rollover.</p><p>It completes the reactor grid, spots a full lane ball-save level and scores 100,000. If a reactor is already running, you get a Reactor Jackpot instead of the grid.</p>"+UNK("The apron card says the skill shot spots a SAVE lane; the rulesheet says a full ball-save level. The rulesheet is not clear whether the Reactor Jackpot replaces the grid award or adds to it.")},
 {t:"Regular Skill Shot",h:["core"],b:"<p>Moving the lit rollover with the flippers <em>after</em> the plunge turns it yellow and gives up the Hands-Free shot. Making the lit rollover then spots a whole lane ball-save level and scores 50,000.</p>"},
 {t:"Secret Skill Shot",h:["shooter","locklane"],b:"<p>With fewer than 2 balls locked, full-plunge past the rollovers, then flip the ball into the lock lane. It scores 100,000 and locks the ball.</p>"},
 {t:"Competitive notes",h:["gates","shooter","rflip","locklane"],b:"<p>Both gates are open on a skill shot, which makes it harder to drop into the rollovers. A short plunge that comes back to the plunger is auto-plunged quickly. A short plunge to the right orbit and right flipper can set up the lock lane.</p>"}
]},
/* ====== REACTORS ====== */
{g:"Reactors",id:"reactors",title:"Reactor basics",steps:[
 {t:"Nine reactors",h:["reactornums"],b:"<p>Destroying reactors is the main goal. There are 9, shown by the 1 to 9 inserts. You start at Reactor 1, and destroying one enables the next.</p><p>Each reactor has three phases: qualify and start it, overheat it to critical, then destroy it. Each level starts with a bigger bonus value, needs more advancing and needs more targets to destroy. Reactor state carries over from ball to ball.</p>"}
]},
{g:"Reactors",id:"qualify",title:"Qualify and start",steps:[
 {t:"Fill the grid",h:["gridtargets","grid"],b:"<p>The grid starts with a random mix of pink and blue lights. Hitting a grid target pushes the pink light in its column up, pushing out the blue light above it. Fill the grid with pink to qualify the reactor.</p>"},
 {t:"Start it",h:["scoop","scoopins"],b:"<p>Shoot the scoop to start the reactor.</p>"}
]},
{g:"Reactors",id:"overheat",title:"Overheat the reactor",steps:[
 {t:"Feed the reactor",h:["lorbit","rorbit","core","lorbins","rorbins"],b:"<p>For the first two reactors both orbits are lit pink, meaning both feed the lanes into the reactor area. From Reactor 3 on only one orbit is lit, and it toggles with slingshot and pop bumper hits.</p>"},
 {t:"Heat it up",h:["spinner","reactor","kickers","rring","rtargets","core","rdisplay"],b:"<p>Once started, the reactor display counts up toward 99. The spinner and every switch and kicker in the reactor area advance it, and the kicker sides advance it fastest. Past 99, the reactor is critical.</p><p>The spinner inserts light and cycle while a reactor is running.</p>"},
 {t:"Raise the value",h:["rtargets","rtargetins"],b:"<p>Advancing the reactor also raises the Reactor Value. The fastest way is the 1, 2, 3 targets in order; once the lit 3 target is hit the value is maxed. The maximum depends on the level: 75,000 for Reactor 1, 112,500 for Reactor 2, 150,000 for Reactor 3, and so on.</p>"}
]},
{g:"Reactors",id:"destroy",title:"Destroy the reactor",steps:[
 {t:"Hit the flashing targets",h:["rad","ldestroy","rdestroy","pop","popins"],b:"<p>At critical, one or more targets on the lower playfield flash white. Reactor 1 needs one; higher reactors need more. They are picked at random from the RAD targets, the Destroy targets and the pop bumper, which can count as two targets.</p><p>Hitting all the flashing targets collects the Reactor Bonus and resets the grid for the next reactor.</p>"}
]},
{g:"Reactors",id:"rjackpot",title:"Reactor Jackpot",steps:[
 {t:"Fill the grid again",h:["gridtargets","grid"],b:"<p>Once a reactor is started, the grid resets. Fill it again the same way, this time with red. Completing it collects a Reactor Jackpot worth 25% of the current Reactor Value.</p>"+UNK("The rulesheet says \"instead of green\" here, though qualifying is described as pink. Shown as written.")}
]},
/* ====== MULTIBALL ====== */
{g:"Multiball",id:"lock",title:"Locking balls",steps:[
 {t:"Lock two balls",h:["locklane","drops","lockins"],b:"<p>Lock is lit at the start of each ball, with the lock arrows green. Shoot the lock lane to lock a ball; the drop targets reset to trap balls behind the first two targets. Two balls can be locked.</p>"},
 {t:"Start multiball",h:["drops","locklane"],b:"<p>With two balls locked, hit the lock target to start a 3-ball multiball. You can keep qualifying, completing and collecting reactors during multiball.</p>"},
 {t:"Relighting lock",h:["drops","lockscoop","lockins"],b:"<p>After a multiball, the drops keep their up or down state and the lock inserts turn blue. Work your way back to the scoop behind them to relight the normal lock sequence.</p>"},
 {t:"Lock stealing",h:["locklane","drops"],b:"<p>Players get credit for any balls already in the lock when their turn starts, so stealing locks is possible and encouraged. Backhanding the lock lane works, but gets more dangerous the deeper the drops are down.</p>"}
]},
{g:"Multiball",id:"jackpots",title:"Jackpots",steps:[
 {t:"Walk up the drops",h:["drops","lockscoop"],b:"<p>Multiball starts with all three drops up. Each drop is a jackpot: 1x for the first, 2x for the second, 3x for the third, and the scoop behind them is the Super Jackpot (5x).</p><p>If you don't make the next jackpot within 5 seconds, the drops cascade back up. For example, miss the 3x in time and they reset so only the 1x is ready.</p>"},
 {t:"Quick Super Jackpot",h:["lockscoop"],b:"<p>Shooting the lock scoop right as multiball starts, before the drops reset, can score a quick Super Jackpot.</p>"},
 {t:"Add-a-ball",h:["lockscoop"],b:"<p>During multiball, put a ball in the scoop behind the drops for an add-a-ball. With all other balls still in play that can raise the multiplier to 4x. Hitting the scoop right as multiball starts, before the drops are reset, also awards it.</p>"},
 {t:"Multiplier and values",h:["bonusx"],b:"<p>During multiball, playfield scores are multiplied by the number of balls in play, shown on the multiplier inserts (2x or 3x).</p><p>Jackpot = seed (5,000 to start) x reactor scaler x balls in play x jackpot multiplier (1x, 2x, 3x or 5x).</p>"+UNK("The rulesheet does not list the reactor scaler values (its one example: 1.5 for the second reactor) or how the seed is boosted. The apron card says all scores are worth 2x during multiball.")},
 {t:"Competitive notes",h:["grid","gridtargets"],b:"<p>The rulesheet calls the grid very dangerous to shoot, which makes qualifying it during multiball attractive. Having the multiplier running before destroying a reactor is also valuable, since reactor values are the biggest points in the game.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"mystery",title:"Mystery Award",steps:[
 {t:"Light it",h:["rad","radins"],b:"<p>Complete the RAD targets to qualify Mystery.</p>"},
 {t:"Collect it",h:["scoop","scoopins"],b:"<p>Shoot the scoop. Awards include +1 tilt warning, 10,000, 25,000 or 150,000 points, completing the grid, ball saver, enabling locks, a lane save level, Super Spinner (if not already on), +1x bonus multiplier and maxing the bonus multiplier (7x).</p><p>If you are out of tilt warnings, Mystery always gives +1 tilt warning.</p>"}
]},
{g:"Other scoring",id:"ballsave",title:"SAVE lanes and ball save",steps:[
 {t:"Light the lanes",h:["laneS","laneA","laneV","laneE","lflip","rflip"],b:"<p>A ball crossing an unlit lane lights it red. Both flipper buttons move the lit lanes. Light three of S, A, V and E and the fourth lane flashes.</p>"},
 {t:"Collect it",h:["laneS","laneA","laneV","laneE","ballsave"],b:"<p>Roll through the flashing lane to start a 10-second ball save, counted down on the display below the flippers. If the ball drains in that time, a new ball is plunged and the timer stops. Ball save is also on at the start of each ball.</p>"},
 {t:"Stack levels",h:["laneS","laneA","laneV","laneE"],b:"<p>Extra levels can be stacked, shown by color: red, orange, yellow, green, blue, then purple. Each unused level is worth 10K at the end of the ball.</p>"}
]},
{g:"Other scoring",id:"bonus",title:"End of ball bonus",steps:[
 {t:"Build bonus",h:["bonusgrid","gridtargets","drops"],b:"<p>The bonus grid above the flippers shows the end of ball bonus. Grid targets and drop targets raise it. Past 10K the inserts change color: at 11K the 10K insert lights white and the 1K insert another color, and so on.</p>"+UNK("The rulesheet asks whether bonus advances are multiplied by the playfield multiplier; not documented yet.")},
 {t:"Bonus multiplier",h:["core","bonusx"],b:"<p>Completing the CORE rollovers raises the bonus multiplier, shown on the 2x, 3x and 4x inserts below the grid.</p>"}
]},
{g:"Other scoring",id:"spinner",title:"Spinner",steps:[
 {t:"Spinner",h:["spinner","spinins"],b:"<p>The spinner advances the Reactor Bonus and, while a reactor is running, its critical state. Super Spinner is one of the Mystery awards.</p>"+UNK("The rulesheet says Super Spinner's effect and how else it is qualified are unknown. Not documented yet.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard mode",id:"wizard",title:"Total Nuclear Annihilation",steps:[
 {t:"Destroy all 9",h:["reactornums"],b:"<p>Destroy all 9 reactors to complete the game, like beating a video game: the game ends. If balls remain, the screen says \"Flippers and slings disabled\", and when the ball drains you are credited with the Total Nuclear Annihilation Bonus again.</p>"+UNK("The rulesheet does not give the bonus value or explain \"again\". Not documented yet.")}
]}
];

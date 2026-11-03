/* ---------- playfield features (coordinates in the 980x2050 frame of Pinball Heaven's promo photo, perspective-corrected to look straight down) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- hedges (left side) ---- */
 hedgeT:{n:"Top hedge",c:1,s:[R(20,650,150,130)],a:[95,715],x:"The highest of the three hedge toys on the left. Spooky's feature list calls them a triple interactive Michael hedge toy; Michael figures stand behind them."},
 hedgeM:{n:"Middle hedge",c:1,s:[R(0,895,165,145)],a:[82,968]},
 hedgeB:{n:"Bottom hedge",c:1,s:[R(0,1145,150,145)],a:[75,1218]},
 hscoops:{n:"Hedge scoops",c:0,s:[C(150,778,22),C(150,1030,22),C(142,1272,22)],a:[150,1030],x:"The manual's switch list has a Left Top, Left Middle and Left Bottom Scoop, one per hedge, and says to shoot all three left scoops for Hedge Multiball. I placed each where the green arrow insert points under its hedge."},
 hins:{n:"Hedge arrow inserts",c:1,s:[E(168,838,20,32),E(172,1072,20,32),E(168,1302,20,32)],a:[170,1072],x:"The green knife-blade inserts pointing at each hedge."},
 hstand:{n:"Hedge standups",c:0,s:[C(188,738,15),C(184,988,15),C(178,1232,15)],a:[184,988],x:"The rulesheet mentions targets next to each scoop, and the manual's Ultraman photo shows a standup just above each left scoop. These are my estimates; I could not pick the targets out in the photo."},
 /* ---- top shots ---- */
 lorbit:{n:"Left orbit",c:0,s:[B([[225,655],[205,520],[190,420],[168,300],[150,200]],22)],a:[195,450],x:"The lane up the left side of the ramps, behind the leftmost knife insert. The manual's LED list puts the left orbit insert there; the path above it is my reading of the photo."},
 lorbins:{n:"Left orbit insert",c:0,s:[E(215,655,20,40)],a:[215,655]},
 lramp:{n:"Left ramp",c:0,s:[B([[310,650],[300,500],[285,360],[230,300],[140,270]],28)],a:[300,480],x:"The wide stainless ramp left of center. The manual has a Left Ramp Exit switch at the top left. Its entrance and path are my estimate."},
 lrampins:{n:"Left ramp insert",c:0,s:[E(312,700,20,40)],a:[312,700]},
 cramp:{n:"Center ramp",c:0,s:[B([[445,585],[450,450],[445,360],[420,300]],28)],a:[448,450],x:"The narrower stainless ramp at the center. The manual says center ramp shots open the upper (house) playfield. Entrance and path are my estimate."},
 crampins:{n:"Center ramp insert",c:0,s:[E(440,615,20,40)],a:[440,615]},
 rramp:{n:"Right ramp",c:0,s:[B([[535,905],[528,720],[520,560]],24)],a:[530,730],x:"The lit chrome lane between the center ramp and the middle playfield. Spooky's announcement says the right ramp leads to the Sanitarium playfield. Which lane is the right ramp is my estimate."},
 rorbit:{n:"Right orbit",c:0,s:[B([[655,1175],[690,1030],[740,955],[830,925],[860,800],[860,600]],22)],a:[700,1020],x:"The manual's LED list puts the right orbit insert to the right of the pumpkin scoop. The path up the right side is my reading of the photo."},
 rorbins:{n:"Right orbit insert",c:0,s:[E(648,1095,20,42)],a:[648,1095]},
 topstand:{n:"Top standups",c:0,s:[C(262,600,15),C(375,585,15),C(505,600,15)],a:[375,585],x:"The manual lists six standups. Standups 4, 5 and 6 sit among the ramp and orbit entrances in its Ultraman photo; these are my estimates for the Halloween positions."},
 /* ---- center ---- */
 drops:{n:"Jack-O-Lantern drop bank",c:1,s:[R(352,705,40,55),R(410,710,45,55),R(465,712,40,55)],a:[430,735],x:"The three white drop targets above the big pumpkin insert. Spooky's feature list calls it the lighted Jack-O-Lantern drop bank."},
 pumpkinins:{n:"Jack-O-Lantern insert",c:1,s:[C(410,840,95)],a:[410,840],x:"The big pumpkin art. The manual's LED list gives it eye, nose and mouth lights."},
 jscoop:{n:"Jack-O-Lantern scoop",c:1,s:[R(560,975,85,80),C(615,935,42)],a:[602,1010],x:"The scoop under the sculpted pumpkin. The rulesheet calls it the Jack-O-Lantern scoop, the manual calls it the right scoop (switch: Front Right Scoop)."},
 judithins:{n:"Judith tombstone insert",c:1,s:[R(232,885,80,140)],a:[272,955],x:"The ghost and Judith Myers tombstone art left of the mode ladder. The manual's LED list has a judith_tomb light."},
 /* ---- Judith Myers tombstone ---- */
 judithtomb:{n:"Judith Myers tombstone",c:1,s:[R(700,940,120,95)],a:[760,985],x:"The tombstone sculpt at the top right of the lower playfield."},
 judithdrop:{n:"Judith drop target",c:0,s:[R(688,1175,42,72)],a:[708,1210],x:"The manual has a Lower Right Drop and a Capture Target. I read the tombstone-printed face at the bottom of the red lane as the drop target, with the lane running up to the tombstone behind it."},
 judithlane:{n:"Judith lock lane",c:0,s:[B([[708,1170],[740,1100],[768,1040]],30)],a:[740,1100],x:"The lane behind the drop target, where a ball locks. Its extent is my estimate."},
 capture:{n:"Target behind the drop",c:0,s:[C(770,1040,20)],a:[770,1040],x:"The rulesheet says that once qualified the drop stays down so you can shoot the target behind it. Position is my estimate."},
 /* ---- middle playfield (Sanitarium) ---- */
 midpf:{n:"Middle playfield (Smith's Grove Sanitarium)",c:1,s:[R(530,520,330,330)],a:[695,690],x:"The rainy driveway plate with the station wagon. Spooky calls it the playable Smith's Grove Sanitarium playfield."},
 mflip:{n:"Middle playfield flipper",c:1,s:[B([[605,770],[715,805]],20)],a:[660,788]},
 mtargets:{n:"Middle playfield standups",c:0,s:[C(635,637,18),C(765,637,18)],a:[700,637],x:"The manual lists a Middle Left and Middle Right target. I read them as the two round targets above the car."},
 mdrop:{n:"Middle playfield drop target",c:0,s:[R(675,548,50,34)],a:[700,565],x:"The manual's LED photo puts the middle drop target at the top center of the plate, between two openings."},
 mscoop:{n:"Sanitarium scoop",c:0,s:[C(700,527,18)],a:[700,527],x:"The rulesheet puts the scoop behind the middle drop target. Position is my estimate."},
 superexit:{n:"Super exit",c:0,s:[C(815,600,22)],a:[815,600],x:"The manual describes a Super Exit shot out of the middle playfield that drops the ball through to the right orbit switch. Marked at the opening at the plate's upper right."},
 /* ---- upper (house) playfield ---- */
 house:{n:"House playfield",c:1,s:[R(480,40,400,440)],a:[700,250],x:"The Myers house interior at the top right. Spooky calls it the playable House playfield."},
 hflip:{n:"House flipper",c:0,s:[B([[860,352],[752,378]],18)],a:[805,365],x:"The manual's upper right flipper, which it says only works while the upper playfield is open. Marked at the flipper I can see at the front of the house floor."},
 hspin:{n:"House spinner loop",c:0,s:[B([[620,420],[560,300],[525,180],[560,80],[680,50],[800,70],[840,180],[830,300]],20)],a:[540,200],x:"Spooky's feature list gives the house playfield a dual spinner loop; the manual has a left and a right spinner there. The loop path is my estimate."},
 hdrop:{n:"House drop target",c:0,s:[R(620,285,55,45)],a:[648,308],x:"The manual has an Upper Drop switch on the upper playfield. I could not identify it in the photo; this marks my best guess."},
 crossover:{n:"Crossover shot",c:0,s:[B([[592,320],[540,200],[482,80],[420,60]],24)],a:[540,200],x:"The manual has a Crossover switch on the upper playfield. I read it as the stainless lane running from the house floor up and to the left."},
 lockbox:{n:"Crossover lock (top left)",c:0,s:[R(170,30,270,200)],a:[305,130],x:"The clear box at the top left. The manual's Ultraman photo puts the Crossover and Mid Ramp Top Lock switches on it. The Boogeyman mode lists a Crossing Shot lock; I take it to be here."},
 /* ---- inserts ---- */
 hedgeins:{n:"Hedge inserts",c:1,s:[E(345,1540,40,16),E(410,1490,40,16),E(475,1440,40,16),E(425,1395,70,18)],a:[410,1490],x:"HEDGE 1, 2, 3 and HEDGE MULTIBALL."},
 asylumins:{n:"Asylum and Smith's Grove inserts",c:1,s:[E(350,1345,40,16),E(415,1305,40,16),E(470,1265,40,16),E(412,1215,62,18)],a:[412,1290],x:"ASYLUM 1, 2, 3 and SMITH'S GROVE."},
 houseins:{n:"House inserts",c:1,s:[E(350,1170,40,16),E(410,1128,40,16),E(470,1085,40,16),E(433,1043,62,18)],a:[412,1110],x:"HOUSE 1, 2, 3 and HOUSE ATTACK."},
 wizins:{n:"Wizard inserts",c:1,s:[E(432,1003,46,16),E(432,960,58,22)],a:[432,980],x:"BOOGEYMAN and THE NIGHT HE CAME HOME."},
 /* ---- lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[270,1812],[385,1878]],24)],a:[328,1845]},
 rflip:{n:"Right flipper",c:1,s:[B([[612,1812],[505,1878]],24)],a:[558,1845]},
 lsling:{n:"Left slingshot",c:1,s:[E(200,1640,50,115)],a:[200,1640],x:"The Laurie slingshot."},
 rsling:{n:"Right slingshot",c:1,s:[E(705,1620,50,115)],a:[705,1620],x:"The Dr. Loomis slingshot."},
 loutlane:{n:"Left outlane",c:0,s:[B([[48,1450],[48,1700]],18)],a:[48,1575]},
 linlane:{n:"Left inlane",c:0,s:[B([[108,1520],[118,1720]],18)],a:[112,1620],x:"Spooky's feature list mentions dual inlane lifters; the manual's switch list has subway and lifter switches on both sides. The lanes are my estimate."},
 rinlane:{n:"Right inlane",c:0,s:[B([[800,1500],[790,1720]],18)],a:[795,1610]},
 routlane:{n:"Right outlane",c:0,s:[B([[845,1450],[845,1700]],18)],a:[845,1575]},
 shooter:{n:"Shooter lane",c:0,s:[B([[888,1950],[888,1400]],22)],a:[888,1680]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers and lanes",h:["lflip","rflip","lsling","rsling","loutlane","linlane","rinlane","routlane","shooter"],b:"<p>Two flippers and two slingshots at the bottom, with an inlane and outlane on each side. Spooky's feature list mentions dual inlane lifters.</p>"+UNK("The rulesheet has no layout section. The lane positions are my estimates from the photo.")},
 {t:"Hedges",h:["hedgeT","hedgeM","hedgeB","hscoops","hins","hstand"],b:"<p>Three hedge toys line the left side, with a Michael figure behind each. Each hedge has a scoop that can lock a ball, and the rulesheet mentions targets next to the scoops.</p>"},
 {t:"Orbits",h:["lorbit","lorbins","rorbit","rorbins"],b:"<p>An orbit on each side. Orbit shots raise the drop targets after a mode is won, and both count as combo shots.</p>"+UNK("Whether the two orbits connect across the top is not documented yet.")},
 {t:"Ramps",h:["lramp","lrampins","cramp","crampins","rramp"],b:"<p>Spooky lists four stainless ramps. The left and center ramps rise in the middle of the playfield; the right ramp leads to the Sanitarium playfield (per Spooky's announcement). Center ramp shots open the house playfield.</p>"+UNK("The fourth ramp is not identified. Ramp entrances and paths are my estimates.")},
 {t:"Jack-O-Lantern",h:["drops","pumpkinins","jscoop","topstand"],b:"<p>The three drop targets above the big pumpkin insert qualify the Jack-O-Lantern modes, which start at the Jack-O-Lantern scoop under the sculpted pumpkin. The scoop also opens the blood store and awards extra balls.</p>"},
 {t:"Judith Myers tombstone",h:["judithtomb","judithdrop","judithlane","capture","judithins"],b:"<p>On the right, a drop target guards a lane with a target behind it, under the Judith Myers tombstone. A ball can lock behind the drop.</p>"},
 {t:"Sanitarium playfield",h:["midpf","mflip","mtargets","mdrop","mscoop","superexit"],b:"<p>The middle playfield is Smith's Grove Sanitarium. It has its own flipper, two standup targets, a drop target and a scoop behind the drop. The manual also describes a Super Exit shot out of it to the right orbit.</p>"},
 {t:"House playfield",h:["house","hflip","hspin","hdrop","crossover","lockbox"],b:"<p>The top playfield is the Myers house, with its own flipper, two spinners on a loop, a drop target and the crossover shot. The manual says its flipper only works while the house is open.</p>"+UNK("The house playfield is hard to see in the photo; all its parts except the house itself are my estimates.")},
 {t:"Mode inserts",h:["hedgeins","asylumins","houseins","wizins"],b:"<p>The center ladder tracks the three multiballs (Hedge, Asylum or Smith's Grove, and House) and the two wizard modes, Boogeyman and The Night He Came Home.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:["drops","shooter"],b:"<p>Before plunging, use the flippers to choose which shot or target is lit. Harder shots, like the middle drop target, score more. A drop target skill shot only counts if you knock down that drop target alone.</p>"+UNK("The rulesheet does not list which shots can be lit or their values.")},
 {t:"Secret skill shot",h:["shooter","judithdrop","judithlane"],b:"<p>Plunge and immediately shoot the Judith Tombstone to score a secret skill shot. The ball locks behind the drop target at once. It can be released to start Tombstone Multiball, or it acts as a ball save if you drain.</p>"}
]},
/* ====== MAIN MODES ====== */
{g:"Jack-O-Lantern modes",id:"modes",title:"Starting a mode",steps:[
 {t:"Light and start",h:["drops","jscoop"],b:"<p>Complete the center drop targets, then shoot the Jack-O-Lantern scoop and pick a mode with the flippers. Each drop target completion also lights blood at three shots for about 20 seconds.</p>"},
 {t:"Next mode",h:["lorbit","rorbit","drops"],b:"<p>For each mode won on the same ball, an orbit shot is needed to raise the drop targets again, and the count goes up by one for each mode won. Winning two modes in a game lights the extra ball.</p>"},
 {t:"In multiball",h:["jscoop"],b:"<p>Modes can start during any multiball, but you get no choice: the easiest mode not yet completed starts.</p>"},
 {t:"Final hurry-up",h:["hscoops"],b:"<p>At the end of every mode, one of the three hedge shots (picked at random) lights for a final hurry-up. You do not need it to win the mode, but it is valuable. When it times out or is collected, six more blood shots light for 20 seconds.</p>"+UNK("The rulesheet asks how the hurry-up value is set. Not documented yet.")}
]},
{g:"Jack-O-Lantern modes",id:"easy",title:"Easy modes",steps:[
 {t:"I. Death in the Driver's Seat",h:["lorbit","lramp","cramp","rorbit"],b:"<p>Make the left orbit, left ramp, center ramp and right orbit in any order. Shoot them as combos to double each shot's value.</p>"},
 {t:"II. Bob and Lynda's Demise",h:["lorbit","lramp","cramp","rorbit","crossover"],b:"<p>Shoot the lit shots from left to right. When the center ramp lights, the ball is sent to the house playfield for the crossover shot.</p>"+UNK("The rulesheet does not list which shots light, so the highlights show the main shots.")}
]},
{g:"Jack-O-Lantern modes",id:"medium",title:"Medium modes",steps:[
 {t:"III. Counting Bodies",h:["lramp","cramp","topstand"],b:"<p>Shoot the lit green shots and avoid the red ones. The green shots alternate between the left ramp plus targets and the center ramp plus targets. Too many red shots ends the mode in failure.</p>"+UNK("Which targets go with each ramp, and how many red shots are too many, is not documented yet.")},
 {t:"IV. Escape the Kitchen",h:["hstand","topstand","mtargets"],b:"<p>Make the lit standup targets in any order. The mode is won after six standup shots.</p>"+UNK("The rulesheet does not say which standups light. The highlights show all the standups I placed.")}
]},
{g:"Jack-O-Lantern modes",id:"hard",title:"Hard modes",steps:[
 {t:"V. Let Me In",h:["drops","lorbit","rorbit"],b:"<p>Alternate between hitting one specific drop target and resetting the bank with either orbit. Only the green drop target may go down; knocking down any other resets them all.</p>"},
 {t:"VI. Laurie Slashes Back",h:["lorbit","lramp","cramp","rramp","rorbit"],b:"<p>Shoot the roaming pink shot before it reaches the red arrow. It moves left to right, then right to left. Do this five times to win.</p>"+UNK("The rulesheet does not list which shots the pink light roams across.")}
]},
{g:"Jack-O-Lantern modes",id:"expert",title:"Expert modes",steps:[
 {t:"VII. Stalker",h:["jscoop"],b:"<p>Avoid Michael. The playfield is split into four color-coded areas. Michael moves between them, and if you are in his area a hurry-up lights to escape. Survive the night to win.</p>"+UNK("The four areas and where the escape hurry-up is shot are not documented yet. Spooky's v1.14 notes mention a Stalker hurry-up at the scoop.")},
 {t:"VIII. First Kill",h:[],b:"<p>White shots start a hurry-up combo sequence that must be finished quickly. Complete three hurry-up combos to win.</p>"+UNK("Which shots light white is not documented yet.")}
]},
{g:"Jack-O-Lantern modes",id:"jmb",title:"Jack-O-Lantern Multiball",steps:[
 {t:"4-ball multiball",h:["drops","hstand","topstand","jscoop"],b:"<p>After three modes are won, the next Jack-O-Lantern mode is Jack-O-Lantern Multiball, a 4-ball multiball. The drop targets light 250K jackpots, standup hits raise them, and they are collected at any major shot.</p>"+UNK("Spooky's v1.16b notes say the base jackpot was increased, so 250K may be out of date.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"mbs",title:"Multiball basics",steps:[
 {t:"Super jackpots",h:["hedgeins","asylumins","houseins"],b:"<p>There are three multiballs: Hedge, Sanitarium and House. Each has a super jackpot that must be collected to complete it. Once a multiball's super jackpot is scored, that multiball cannot be played again until you have played Boogeyman, which is started by scoring all three super jackpots.</p>"}
]},
{g:"Multiballs",id:"hedge",title:"Hedge Multiball",steps:[
 {t:"Lock three balls",h:["hscoops","hins","hedgeT","hedgeM","hedgeB"],b:"<p>Lock a ball at each of the three hedge shots to start a 3-ball Hedge Multiball.</p>"},
 {t:"Reveal Michael",h:["lramp","hstand"],b:"<p>Shoot the left ramp, or one of the targets next to a scoop, to reveal a Michael figure behind the hedges for about 15 seconds.</p>"},
 {t:"Jackpots",h:["hscoops"],b:"<p>Shoot the matching scoop for a jackpot. Do this for all three scoops to light the middle scoop for a super jackpot worth the total of all jackpots collected. The first Hedge super jackpot is also an add-a-ball.</p>"},
 {t:"Restart",h:["jscoop"],b:"<p>Drain out without a super jackpot and the Jack-O-Lantern scoop lights for about 15 seconds to restart the multiball.</p>"}
]},
{g:"Multiballs",id:"sanitarium",title:"Sanitarium Multiball",steps:[
 {t:"Start Sanitarium Mode",h:["rramp","mdrop","mscoop"],b:"<p>Sanitarium is played on the middle playfield. Shoot its drop target, then the scoop behind it, to start Sanitarium Mode.</p>"+UNK("The manual says the middle playfield scoop starts it. The rulesheet says the drop target first, then the scoop.")},
 {t:"Qualify",h:["mtargets","mdrop","mscoop"],b:"<p>Now shoot both middle playfield standups, then the drop target, then the scoop. Make all four and Sanitarium Multiball begins when the ball drains from the middle playfield.</p>"},
 {t:"Gather the patients",h:["hstand","topstand"],b:"<p>A 2-ball multiball. Each patient is a standup target, and each one scores a 225K jackpot. Collect all six to light the super jackpot.</p>"},
 {t:"Super jackpot",h:["mscoop"],b:"<p>With all six jackpots collected, shoot the middle playfield scoop for the 500K super jackpot.</p>"}
]},
{g:"Multiballs",id:"house",title:"House Multiball",steps:[
 {t:"Light House Attack",h:["cramp","houseins"],b:"<p>House Multiball is played on the upper playfield. Make five center ramp shots to light House Attack. Completing Hedge and Sanitarium Multiball also qualifies it. A shot to \"the ramp that passes through the left and right drop targets\" starts it at once.</p>"+UNK("The manual says three center ramp shots, not five. Which ramp passes through the drop targets is unclear to me; quoted as written.")},
 {t:"House Attack",h:["house","hspin","hflip","hdrop","mtargets"],b:"<p>The ball goes to the house playfield. The display shows health bars for Michael and Laurie. Lower Michael's health by hitting the two spinners enough within 60 seconds. Hitting the drop target lowers Laurie's health, and the mode ends early if hers runs out; the middle playfield standups restore some.</p>"},
 {t:"Defeat Myers",h:["hdrop","crossover"],b:"<p>When Michael's health is at minimum, shoot the drop target and then the crossover shot to defeat him and start the multiball.</p>"},
 {t:"Jackpots",h:["lorbit","rorbit","lramp","cramp","rramp","crossover"],b:"<p>A 3-ball multiball. All orbit and ramp shots are lit for jackpots. The crossover is lit for a super jackpot of 2.5M plus 250K per jackpot plus 25K per spin. Scoring it resets its value and relights the jackpots you collected.</p>"}
]},
{g:"Multiballs",id:"tombstone",title:"Tombstone Multiball",steps:[
 {t:"Judith lock",h:["judithdrop","judithlane","capture","judithtomb"],b:"<p>The manual says hitting the lower right target five times advances Judith Tombstone and eventually traps the ball. You can then hit it to release the ball for multiball, or keep it as a ball save that releases on a drain. The secret skill shot locks it at once.</p>"+UNK("The rulesheet has no Tombstone Multiball section. Its rules are not documented yet.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"blood",title:"Blood and the store",steps:[
 {t:"Collect blood",h:["drops"],b:"<p>Lighting a Jack-O-Lantern mode lights three blood shots; winning one lights six. Blood carries over for the whole game.</p>"+UNK("Which shots light for blood is not documented yet.")},
 {t:"Spend it",h:["jscoop"],b:"<p>Once you have any blood, the Jack-O-Lantern scoop lights for the store: 1 blood buys 1M points, 10 blood buys 2x scoring for the rest of the ball, and 12 blood buys an extra ball.</p>"}
]},
{g:"Other scoring",id:"combos",title:"Combos",steps:[
 {t:"Combos",h:["lorbit","lramp","cramp","rorbit"],b:"<p>The left orbit, left ramp, center ramp and right orbit are combo shots, scoring more each time. To keep a combo going, alternate shots; the same shot twice does not count.</p>"}
]},
{g:"Other scoring",id:"eb",title:"Extra balls",steps:[
 {t:"Extra balls",h:["jscoop"],b:"<p>Extra balls are collected at the Jack-O-Lantern scoop after winning two Jack-O-Lantern modes, or bought for 12 blood (awarded at once).</p>"}
]},
{g:"Other scoring",id:"bonus",title:"End-of-ball bonus",steps:[
 {t:"Bonus",h:[],b:"<p>Not documented yet. The rulesheet's End-of-Ball Bonus section is blank.</p>"}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"boogeyman",title:"Boogeyman",steps:[
 {t:"Qualify",h:["hedgeins","asylumins","houseins","wizins"],b:"<p>Score the super jackpot in all three multiballs to start Boogeyman. The goal is to relock six balls in the game's physical locks.</p>"+UNK("The rulesheet lists \"Hedge Multiball, Sanitarium Multiball, and Hedge Multiball\"; the second Hedge is presumably House. It also calls Boogeyman both a mini-wizard and a wizard mode.")},
 {t:"Phase 1",h:["hscoops","hedgeT","hedgeM","hedgeB"],b:"<p>Three locks: Hedge 1, Hedge 2 and Hedge 3.</p>"},
 {t:"Phase 2",h:["jscoop","mscoop"],b:"<p>Two locks: the Jack-O-Lantern scoop and the Sanitarium scoop.</p>"},
 {t:"Phase 3",h:["crossover","lockbox"],b:"<p>One lock: the crossing shot.</p>"},
 {t:"Multiball",h:["lorbit","lramp","cramp","rramp","rorbit"],b:"<p>If you drain during the mode, the last locked ball is released and must be relocked. Lock all six to watch Loomis knock Michael off the house balcony, which starts a 6-ball multiball with all major shots lit yellow and blue for jackpots.</p>"}
]},
{g:"Wizard modes",id:"night",title:"The Night He Came Home",steps:[
 {t:"Qualify",h:["wizins"],b:"<p>Start or complete the number of Jack-O-Lantern modes set in the game's menu. Spooky's v1.14 notes list the choices: start 6, start 9, complete 6 or complete 9 modes. The goal is to advance through locations from Smith's Grove to the Myers house against a running clock.</p>"},
 {t:"Phase 1: hurry-up",h:[],b:"<p>At each new location, one shot flashes white as a hurry-up that locks in the jackpot value for that location. Collect it fast. If not collected, the jackpot is at least 1M.</p>"},
 {t:"Phase 2: jackpots",h:["lorbins","lrampins","crampins","rorbins","mdrop","hdrop","crossover"],b:"<p>All knife inserts and the drop targets on the middle and upper playfields are lit for jackpots. A jackpot turns the knife's blade red for a short time; shoot it again while red for a double jackpot. Collected knives unlight, and the crossing shot on the upper playfield relights them. Each jackpot advances you toward the next location, which brings a fresh ball save and an add-a-ball.</p>"},
 {t:"Blood targets",h:["hstand","topstand","jscoop"],b:"<p>The standup blood targets are lit red. Collect them to light the pumpkin scoop for a bonus item, each lasting 30 seconds: the Halloween Mask (travel further per shot), Rope (slows the fuel timer) or a Knife (raises the jackpot value).</p>"},
 {t:"Super jackpot",h:["judithdrop","capture","judithtomb"],b:"<p>Shoot the Judith Tombstone to qualify a super jackpot. The drop target pops straight back up when hit, like a row of in-line drops. Once qualified it stays down, and the target behind it scores 10M times the number of balls in play. One super jackpot per location.</p>"},
 {t:"Fuel",h:["hspin","drops"],b:"<p>The fuel gauge is the timer; run out and the mode ends. Each new location refills it, but by less each time. Once per location, when fuel drops below 10 seconds, the center drop targets rise and each one adds fuel. The spinners add fuel at any time.</p>"}
]}
];

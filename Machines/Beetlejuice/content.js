/* ---------- playfield features (coordinates in the 640x1280 frame of the top-down render cropped from Spooky's "Frightful Features" flyer) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- left side ---- */
 lorbit:{n:"Left orbit",c:0,s:[B([[92,650],[80,590],[68,520],[58,440],[50,360]],16)],a:[75,560],x:"My reading of the lane at the far left, under the red wire ramps, with a Scare insert in front of it. The rulesheet says it feeds the upper playfield."},
 lramp:{n:"Left ramp (Dante's Inferno Room)",c:1,s:[B([[150,632],[148,590],[140,540],[128,490],[112,450]],22)],a:[145,560],x:"The orange DANTE'S INFERNO ROOM ramp. Spooky's flyer calls its entrance the Devil's Mouth (the red sculpt; the render shows it flat) and the wheel above it the spinning prize left ramp sign."},
 lrampins:{n:"Left ramp inserts",c:1,s:[E(173,662,20,16),E(187,703,14,18),E(193,741,14,18)],a:[185,700],x:"The arrow, Scare and Lost Soul inserts in front of the Devil's Mouth."},
 wheel:{n:"Spin the Wheel sign",c:1,s:[C(65,415,62)],a:[65,415],x:"The prize wheel over the left ramp: Super Pops, Super Ramps, Super Spinner, Super Worm, Extra Ball, point values and You Lose."},
 spinner:{n:"Spinner lane",c:0,s:[B([[188,500],[182,470],[172,440]],18)],a:[180,470],x:"My reading of the lane between the left ramp and the camera. The spinner itself is not visible in the render; Spooky's flyer lists an Afterlife Dual Decaled Spinner."},
 spinins:{n:"Spinner inserts",c:0,s:[E(187,493,20,16),E(200,530,14,18),E(210,573,14,18)],a:[198,530],x:"The arrow, Scare and Lost Soul inserts in front of the lane right of the left ramp. I take them to be the spinner's, because the manual's lamp list names Spinner Arrow, Spinner Scare and Spinner Lost Soul inserts."},
 pops:{n:"Pop bumpers",c:0,s:[E(165,295,70,42)],a:[165,295],x:"Not visible in the render. The rulesheet places them above the left orbit, left ramp and spinner and below the upper playfield, so this is only the area."},
 soulspawn:{n:"Lost Soul Spawned insert",c:1,s:[C(140,350,20)],a:[140,350]},
 changemode:{n:"Mode Change switch",c:0,s:[C(72,790,13)],a:[72,790],x:"The rulesheet calls it a rebound switch above the left slingshot and below the left orbit. I placed it beside the CHANGE MODE insert; the switch itself is not visible."},
 changeins:{n:"Change Mode insert",c:1,s:[E(115,735,24,22)],a:[115,735]},
 faces:{n:"Beetlejuice face inserts",c:0,s:[C(165,838,15),C(197,802,15),C(235,787,15)],a:[197,808],x:"The three faces under SAY IT 3 TIMES. My reading is that they count the three purple shots that light Mode Start; the rulesheet does not say."},
 /* ---- upper playfield ---- */
 uloop:{n:"Upper Loop",c:0,s:[B([[100,178],[78,130],[78,70],[120,35],[200,25],[280,30],[315,70],[318,130],[300,175]],14)],a:[100,60],x:"My reading of the loop of purple wire around the couch. Both entrances are estimated."},
 knock:{n:"Knock inserts",c:1,s:[E(97,183,12,12),E(115,199,12,12),E(140,217,12,12)],a:[115,200],x:"The KNOCK 1, 2 and 3 inserts that point up at the Upper Loop."},
 ebtarget:{n:"Extra Ball target",c:0,s:[C(137,248,15)],a:[137,248],x:"Marked at the EXTRA BALL insert. The rulesheet places the target just below the left entrance to the Upper Loop."},
 juno:{n:"Juno Scoop",c:0,s:[C(118,112,18)],a:[118,112],x:"My reading of the dark opening at the upper left, above the JUNO arrow. The rulesheet puts the Juno Scoop in the upper left."},
 junoins:{n:"Juno arrow insert",c:1,s:[E(138,160,22,18)],a:[138,160]},
 nowserving:{n:"Now Serving targets",c:0,s:[C(180,128,13),C(215,132,13)],a:[198,130],x:"The two round targets above the NOW SERVING inserts, under the couch. Estimated from the render."},
 nsins:{n:"Now Serving inserts",c:1,s:[R(170,150,24,28),R(203,152,24,28)],a:[198,165]},
 couch:{n:"Couch Lock",c:1,s:[R(165,45,115,70)],a:[222,80],x:"The Afterlife couch at the top. Spooky's flyer calls it a triple ball lock."},
 uflip:{n:"Upper flipper",c:0,s:[B([[265,218],[215,232]],12)],a:[240,225],x:"My reading of the orange flipper shape below the Now Serving targets. The rulesheet says shots that go underneath it feed the center scoop."},
 /* ---- center ---- */
 camera:{n:"Barloroid camera",c:1,s:[R(205,295,70,85)],a:[240,335],x:"Lydia's instant camera toy."},
 camtargets:{n:"Camera targets",c:0,s:[C(228,393,12),C(258,393,12)],a:[243,393],x:"In Spooky's photo two web-printed targets sit under the camera. Their place in the render is my estimate."},
 camins:{n:"Camera inserts",c:1,s:[R(220,405,24,28),R(250,405,24,28)],a:[247,420]},
 lsscoop:{n:"Center scoop (Lost Souls, front door)",c:0,s:[R(275,300,40,60)],a:[295,330],x:"My reading of the box at the top of the 1 to 5 inserts. The manual calls this the Lost Souls Scoop."},
 lsback:{n:"Center scoop back door",c:0,s:[C(262,262,14)],a:[262,262],x:"Not visible. The rulesheet says the back door is under the upper flipper; the manual has a Lost Souls Back Entrance switch."},
 lsins:{n:"Center scoop 1 to 5 inserts",c:1,s:[B([[293,388],[290,415],[300,442],[300,467],[300,497]],22)],a:[300,445],x:"The five numbered inserts in front of the center scoop, under THE ROOM OF LOST SOULS."},
 worm:{n:"Sandworm",c:1,s:[E(372,300,48,95)],a:[372,300],x:"The full-size sculpted Sandworm. Its mouth is the shot at the bottom of the head."},
 wormtargets:{n:"Sandworm targets",c:1,s:[R(320,425,100,35)],a:[370,442],x:"The raising and lowering sand dune triple target bank in front of the Sandworm."},
 wormarrows:{n:"Sandworm arrows",c:1,s:[E(333,477,14,14),E(367,483,16,16),E(397,477,14,14)],a:[367,480]},
 wormins:{n:"Sandworm mode inserts",c:1,s:[R(325,540,75,95)],a:[360,590],x:"SANDWORM BATTLE, HUNGRY HUNGRY SANDWORMS and SANDWORM MULTI-BALL."},
 showtimeins:{n:"It's Showtime insert",c:1,s:[E(332,663,40,22)],a:[332,663]},
 modeins:{n:"Mode inserts",c:1,s:[E(275,880,110,70)],a:[275,880],x:"The house in the center: As Seen on TV, Otho's Seance, Day-O Dinner Party, Grave Dig, 'Til Death, Inferno Room, Beetle Snake, Head Shrink, Let's Play Charades and Singing in the Stairwell."},
 /* ---- right side ---- */
 rramp:{n:"Right ramp",c:0,s:[B([[445,500],[448,460],[452,420],[455,385]],18)],a:[448,450],x:"My reading of the entrance right of the Sandworm, under the purple wire ramps. Spooky's flyer lists a dual lift ramp to the couch."},
 rrampins:{n:"Right ramp inserts",c:0,s:[E(443,487,18,14),E(433,527,13,17),E(430,567,13,17)],a:[436,527],x:"The arrow, Scare and Lost Soul inserts in front of it. The manual's lamp list names Right Ramp Arrow, Scare and Lost Soul inserts."},
 handbook:{n:"Handbook target",c:0,s:[C(450,590,16)],a:[450,590],x:"Marked at the HAND BOOK insert, between the right ramp and the right orbit."},
 rorbit:{n:"Right orbit / ramp",c:0,s:[B([[470,620],[495,575],[520,520],[545,450],[555,360],[550,260],[530,190]],16)],a:[530,450],x:"My reading of the lane behind the Mode Start arrow, past the tombstone and up the right side. The rulesheet says it switches between a loopable ramp and a dead end vari-target, with a drop target that holds the ball."},
 rorbins:{n:"Right orbit inserts (Mode Start)",c:1,s:[E(463,620,20,15),E(457,653,13,16),E(433,690,13,16)],a:[455,650],x:"The MODE START arrow with Scare and Lost Soul inserts below it."},
 droptgt:{n:"Right orbit drop target",c:0,s:[R(480,585,24,14)],a:[492,592],x:"Not visible in the render. Placed at the right orbit entrance."},
 bj:{n:"Beetlejuice and tombstone",c:1,s:[R(500,455,80,110)],a:[540,510],x:"The Beetlejuice figure on the HERE LIES BETELGEUSE tombstone. Spooky's flyer calls it a raising, magnetized ball-catching tombstone."},
 captive:{n:"Captive ball",c:0,s:[C(497,663,14)],a:[497,663],x:"My reading of the steel ball shown at the right. Spooky's flyer lists a grave digging captive ball."},
 coffin:{n:"Coffin",c:1,s:[E(550,653,28,30)],a:[550,653],x:"The coffin-shaped standup plastic with the green light. The rulesheet says hitting the coffin qualifies Mystery."},
 mystery:{n:"Mystery Scoop",c:0,s:[C(530,700,16)],a:[530,700],x:"My reading. The MYSTERY arrow points at this spot, near the covered bridge in Spooky's photos."},
 mysteryins:{n:"Mystery insert",c:1,s:[E(477,745,26,16)],a:[477,745]},
 bridge:{n:"Covered bridge (outlane diverter)",c:1,s:[R(505,782,52,92)],a:[531,828],x:"Spooky's flyer lists a Bridge Out raising and lowering outlane diverter and a bridge and wrecked car habitrail cover."},
 /* ---- lower playfield ---- */
 linlane:{n:"Left inlane",c:0,s:[B([[82,840],[92,960],[150,1048]],12)],a:[88,900],x:"The lane with the left LIGHT CAMERA insert."},
 rinlane:{n:"Right inlane",c:0,s:[B([[467,840],[460,960],[400,1048]],12)],a:[465,900],x:"The lane with the right LIGHT CAMERA insert."},
 loutlane:{n:"Left outlane",c:0,s:[B([[38,850],[40,1030]],12)],a:[38,940]},
 routlane:{n:"Right outlane",c:0,s:[B([[530,880],[530,1010]],12)],a:[530,945],x:"My reading. The rulesheet says it can act as an outlane or an inlane, depending on the gate."},
 linsert:{n:"Light Camera inserts",c:1,s:[C(82,870,14),C(467,870,14)],a:[82,870]},
 shooter:{n:"Shooter lane",c:0,s:[B([[567,1110],[566,980],[562,850],[560,760]],12)],a:[566,1000],x:"Along the right edge, beside the 250K and 100K inserts."},
 skillins:{n:"250K and 100K inserts",c:0,s:[C(562,920,15),C(562,965,15)],a:[562,942],x:"My reading is that these are the skill shot values; the rulesheet does not say where the lit value is shown."},
 slings:{n:"Slingshots",c:0,s:[E(122,950,24,58),E(420,950,24,58)],a:[122,950]},
 flippers:{n:"Flippers",c:0,s:[B([[172,1063],[240,1100]],16),B([[378,1063],[310,1100]],16)],a:[275,1085]},
 magnet:{n:"Magna-Save magnet",c:0,s:[C(275,1135,22)],a:[275,1135],x:"The rulesheet says the magnet is between and below the flippers. Placed at the drain."},
 magins:{n:"Magnet Save insert",c:1,s:[E(275,985,30,22)],a:[275,985]},
 xball:{n:"Extra Ball insert",c:1,s:[E(275,1030,30,22)],a:[275,1030]},
 again:{n:"Shoot Again insert",c:1,s:[E(275,1077,30,22)],a:[275,1077]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["lorbit","lramp","spinner","rramp","rorbit"];
var LOST=["lrampins","spinins","rrampins","rorbins"];
var SCOOPS=["juno","lsscoop","mystery"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Three flippers",h:["flippers","uflip"],b:"<p>Two flippers at the bottom and one upper flipper on the right side of the upper playfield. The rulesheet reads the shots clockwise from the bottom left.</p>"+UNK("The picture is a render of a prototype playfield from Spooky's sales flyer. Several parts, the pop bumpers and the spinner among them, are hidden under ramps or not drawn, so many marks are estimates.")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>Left to right: the left orbit, the left ramp, the spinner, the right ramp and the right orbit. Each of the last four has an arrow with Scare and Lost Soul inserts in front of it.</p>"+UNK("The rulesheet does not define a set of major shots. This list is my reading of the playfield.")},
 {t:"Left side",h:["lorbit","lramp","wheel","changemode","changeins"],b:"<p>The left orbit feeds the upper playfield; a perfect shot does a figure-8 through the right side of the Upper Loop. The left ramp has the prize wheel. The Mode Change switch is a rebound switch above the left slingshot.</p>"},
 {t:"Spinner and pops",h:["spinner","spinins","pops","soulspawn"],b:"<p>Clean spinner shots go through the pops and into the Juno Scoop. Some rattle and feed the pops or the upper playfield.</p>"},
 {t:"Upper playfield",h:["uloop","knock","ebtarget","juno","nowserving","couch","uflip"],b:"<p>The Upper Loop runs around the couch and lights locks. The Juno Scoop is at the upper left, the Now Serving targets sit under the couch, and the Extra Ball target is just below the loop's left entrance. The upper flipper hits the upper targets and loops.</p>"},
 {t:"Center",h:["camera","camtargets","lsscoop","lsins","lsback"],b:"<p>The Polaroid camera targets sit in the center and are lit by the inlanes. The center scoop has five inserts in front of it and is used for playfield multipliers. Going under the upper flipper feeds its kickout from behind.</p>"},
 {t:"Sandworm",h:["worm","wormtargets","wormarrows"],b:"<p>The Sandworm and its wall of targets are used by the Sandworm modes.</p>"},
 {t:"Right side",h:["rramp","handbook","rorbit","droptgt","captive","mystery","coffin"],b:"<p>The right ramp feeds the right flipper when down; when up it locks balls on the couch. The Handbook target sits between the right ramp and the right orbit. The right orbit switches between a loopable ramp and a dead end vari-target, with a drop target that holds the ball. The captive ball and the Mystery Scoop are on the right.</p>"},
 {t:"Lanes",h:["linlane","rinlane","loutlane","routlane","shooter","linsert"],b:"<p>The shooter lane feeds the right outlane/inlane. If a ball save is lit, its gate stays closed and feeds the ball to your flipper; if not, the ball drains. Passing through the inlanes lights the camera targets.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:["shooter","skillins","rinlane","flippers"],b:"<p>Time the launch for when a point value is lit, to feed the ball to the right flipper. If you miss, the ball drains through the right outlane gate, but the magnet catches it and tosses it up between the flippers without using a Magna-Save.</p>"+UNK("The rulesheet does not say where the lit value is shown. The 250K and 100K inserts in the shooter lane are my guess.")},
 {t:"Super Skill Shot",h:["lramp","rramp","spinner"],b:"<p>After a successful skill shot, quickly shoot the lit left ramp, right ramp and spinner combo.</p>"+UNK("The rulesheet does not give a time limit or a value.")}
]},
{g:"Layout and basics",id:"magnasave",title:"Action Button and Magna-Save",steps:[
 {t:"Magna-Save",h:["magnet","magins"],b:"<p>A magnet between and below the flippers can save balls draining down the outlanes or even the center. Fire it with the Action Button on the lockdown bar. It is qualified at the start of each ball.</p>"},
 {t:"Requalify",h:["handbook"],b:"<p>Hit the Handbook target to spawn the undead fly on the screen, then swat it with the Action Button. The button glows green briefly when a swat will land. How many saves a player can use is a setting (default unlimited).</p>"},
 {t:"Other uses",h:[],b:"<p>Some modes use the Action Button too: to lock a shot value, to lower the Sandworm, or to collect super jackpots.</p>"}
]},
{g:"Layout and basics",id:"pfx",title:"Playfield multipliers (Returning Souls)",steps:[
 {t:"Spawn a soul",h:["pops","soulspawn"],b:"<p>Hit the pop bumpers to spawn a Lost Soul.</p>"},
 {t:"Return it",h:LOST.concat(["lsscoop"]),b:"<p>Shoot the randomly lit Lost Soul shot, then the front door of the center scoop. Each soul returned qualifies +1x and +30 seconds, up to 5x.</p>"},
 {t:"Start it",h:["lsback","uflip"],b:"<p>Start the multiplier through the back door of the center scoop, under the upper flipper. Above 2x, the highest level runs first for 30 seconds, then it drops by 1x every 30 seconds until you are back to 1x.</p>"+UNK("The rulesheet says the center scoop has five inserts used for playfield multipliers; it does not say what each one shows.")}
]},
/* ====== BEETLEJUICE MODES ====== */
{g:"Beetlejuice modes",id:"modes",title:"Qualifying and starting",steps:[
 {t:"Qualify",h:NUM(MAJ).concat(["faces"]),b:"<p>Shoot the purple-lit shots, marked by Beetlejuice face inserts, three times to light Mode Start. Modes cannot be qualified or started during a multiball or a Juno mode.</p>"+UNK("The rulesheet does not list which shots light purple.")},
 {t:"Change or lock",h:["changemode","modeins"],b:"<p>Hit the Mode Change switch to change the mode. While a purple mode is blinking, press the Launch Button to lock it in so the sling cannot change it; its inserts turn white.</p>"},
 {t:"Start",h:["rorbit","rorbins"],b:"<p>Shoot the right orbit to start the mode.</p>"}
]},
{g:"Beetlejuice modes",id:"modelist",title:"The modes",steps:[
 {t:"As Seen on TV",h:["captive","modeins"],b:"<p>Shoot 7 easy shots, then hit the captive ball to stop Lydia and score jackpots. Hold the Action Button to keep the current shot value.</p>"},
 {t:"Grave Dig",h:SCOOPS.concat(["bj","lramp","rramp","rorbit"]),b:"<p>Shoot 3 scoop shots, then the headstone, the ramps, and finally the right orbit.</p>"+UNK("The rulesheet does not say which scoops count. I read the headstone as the tombstone under Beetlejuice.")},
 {t:"Day-O Dinner Party",h:["pops","slings","couch","worm","bj"],b:"<p>A timed mode where the machine takes over the flippers. Shoot lit shots to stay alive and add balls. Pops, slings, the couch, the Sandworm and Beetlejuice raise a multiplier. When the timer runs out the flippers die and you keep playing your ball.</p>"},
 {t:"Head Shrink",h:["worm","wormtargets"],b:"<p>Build switch hits, distract the Sandworm, shoot a jackpot, then repeat.</p>"+UNK("The rulesheet does not say how the Sandworm is distracted or where the jackpot is.")},
 {t:"Charades",h:NUM(MAJ),b:"<p>White shots reveal colors. Shoot 3 matching pairs. The final shot is a hurry-up.</p>"},
 {t:"Beetle Snake",h:["pops","spinner","lramp","rramp"],b:"<p>Complete 3 pop bumper hits, 30 spinner spins and 3 ramp shots.</p>"},
 {t:"'Til Death",h:["spinner","rramp","droptgt","rorbit"],b:"<p>Shoot blue shots to gather witnesses. The spinner raises your multiplier and the right ramp raises the shot value. Hit the drop target or the right orbit 4 times to interrupt the ceremony.</p>"},
 {t:"Otho's Seance",h:["handbook"],b:"<p>Shoot the Handbook target to start the seance, shoot the green shots that light, then the Handbook target again to finish.</p>"}
]},
/* ====== JUNO ====== */
{g:"Juno and the Waiting Room",id:"juno",title:"Juno and the Waiting Room",steps:[
 {t:"Take a number",h:["juno","junoins"],b:"<p>Shoot the Juno Scoop to take a number.</p>"},
 {t:"Advance the counter",h:["couch"],b:"<p>Shoot the couch targets to advance the number counter.</p>"+UNK("The rulesheet names couch targets here but lists only the couch lock in its layout. Not marked separately.")},
 {t:"Now Serving",h:["nowserving","nsins"],b:"<p>Shoot the Now Serving targets in the upper playfield.</p>"+UNK("The rulesheet does not say what happens when your number is called. How a Juno mode starts is not documented yet.")},
 {t:"Scare the Deetz",h:["juno"],b:"<p>Shoot mauve shots to try a scare. White shots add time, red shots take it away. Shoot the Juno Scoop for the final hurry-up.</p>"},
 {t:"Ghosts in the Sheets",h:SCOOPS,b:"<p>Shoot orange shots to haunt Charles and Delia. Shoot a scoop to avoid being photographed. Camera jackpots are awarded after a certain time.</p>"}
]},
/* ====== SANDWORM ====== */
{g:"Sandworm",id:"sandworm",title:"Sandworm battles",steps:[
 {t:"Start a battle",h:["wormtargets","wormarrows","wormins"],b:"<p>Hit the three Sandworm wall targets to start a Sandworm Battle.</p>"},
 {t:"Feed the worm",h:["worm"],b:"<p>Each battle has its own way to lower the wall and line up the worm's mouth. Shoot into the mouth to deal damage, and empty its health bar to defeat it. Defeating enough Sandworms lights an extra ball.</p>"+UNK("The rulesheet does not say how many defeats light the extra ball.")},
 {t:"Battles",h:["worm"],b:"<p>Named battles include Gut Punch and Sharp Shooter. In Walk With Rhythm, rapidly press the Action Button to lower the Sandworm.</p>"+UNK("The rulesheet gives no rules for Gut Punch or Sharp Shooter; not documented yet.")},
 {t:"Sandworm Multiball",h:["worm","wormins"],b:"<p>Shoot orange shots, find the door, then shoot red shots. Finally shoot the worm for super jackpots.</p>"+UNK("How Sandworm Multiball is qualified is not documented yet.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"couchmb",title:"Afterlife Couch / Now Serving Multiball",steps:[
 {t:"Light locks",h:["uloop","knock"],b:"<p>Shoot the Upper Loop around the couch, from either direction, to light the Knock inserts, which light locks.</p>"},
 {t:"Lock 3 balls",h:["rramp","couch"],b:"<p>Shoot the right ramp to lock balls on the couch. Lock 3 to start.</p>"},
 {t:"Jackpots",h:["uloop"],b:"<p>Shoot green shots for jackpots. The Knock loop builds the jackpot value.</p>"},
 {t:"Super Jackpot",h:["rramp","couch","spinner","juno"],b:"<p>Lock a ball on the couch again to light the super jackpot at the spinner / Juno Scoop.</p>"}
]},
{g:"Multiballs",id:"strange",title:"Strange and Unusual Multiball",steps:[
 {t:"Light the cameras",h:["linlane","rinlane","linsert"],b:"<p>Pass through the inlanes to light the camera targets.</p>"},
 {t:"Start",h:["camtargets","camins","camera"],b:"<p>Hit each camera target once to start this 2-ball multiball.</p>"},
 {t:"Jackpots",h:["lramp","rramp"],b:"<p>Shoot the ramps for jackpots. Complete sets of flashing camera targets to add a ball.</p>"}
]},
{g:"Multiballs",id:"showtime",title:"It's Showtime Multiball",steps:[
 {t:"Spell SHOWTIME",h:["showtimeins"],b:"<p>Shoot yellow shots to spell S-H-O-W-T-I-M-E. Yellow shots are only available while a Beetlejuice mode is qualified but not yet started.</p>"},
 {t:"Start",h:["rorbit"],b:"<p>Start the multiball at the right orbit. At the start, press the Action Button (or say \"Beetlejuice\" three times).</p>"},
 {t:"Jackpots",h:NUM(MAJ),b:"<p>Shoot 3 (+1) jackpots. Carousel shots qualify the Strength Test super jackpot.</p>"+UNK("The rulesheet does not say which shots are the carousel shots.")},
 {t:"Super Jackpot",h:["rorbit","droptgt"],b:"<p>Shoot the right orbit dead end to lock a ball, then hit the right orbit drop target to knock the locked ball into the vari-target for a super jackpot. The first one adds a ball.</p>"}
]},
{g:"Multiballs",id:"stairwell",title:"Singing in the Stairwell",steps:[
 {t:"Qualify",h:["modeins"],b:"<p>Spooky's v2026.04.10 release notes say to complete two modes or start four modes to light this sub-wizard mode.</p>"+UNK("The rulesheet only guesses (\"likely a mini-wizard mode reached after playing a set number of modes\"). Where it starts is not documented yet.")},
 {t:"Play",h:["juno"],b:"<p>A multiball with built-in add-a-balls. The super jackpot is at the Juno Scoop, but you must press the Action Button to collect it.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"wheel",title:"Spin the Wheel",steps:[
 {t:"Light the wheel",h:["lramp","lrampins"],b:"<p>Shooting the left ramp repeatedly lights the wheel. Shoot it when lit to spin the wheel on the screen; stop it with the Action Button.</p>"+UNK("The rulesheet does not say how many ramps light it.")},
 {t:"Awards",h:["wheel"],b:"<p>Super Pops, Super Ramps, Super Spinner and Super Worm (each 5x that value), Extra Ball, points (5M, 25K or 50K), or You Lose.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Qualify",h:["coffin"],b:"<p>Hit the coffin to qualify a Mystery Award.</p>"},
 {t:"Collect",h:["mystery","mysteryins"],b:"<p>Collect it at the right scoop: Lite Lock, points (5M, 15M or 50M), Advance Now Serving (+2 or +4), a 15-second ball save, or the Shooting Gallery video mode.</p>"}
]},
{g:"Other scoring",id:"extraball",title:"Extra balls",steps:[
 {t:"Lighting extra ball",h:["ebtarget","xball","wheel","worm"],b:"<p>Extra ball can be lit by the wheel and by defeating enough Sandworms. An Extra Ball target sits just below the Upper Loop's left entrance.</p>"+UNK("The rulesheet does not say what the Extra Ball target does or where a lit extra ball is collected.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"inferno",title:"Inferno Room",steps:[
 {t:"Not documented yet",h:["modeins","lramp"],b:"<p>The rulesheet lists the Inferno Room (Dante's Inferno) only as \"likely a multi-level wizard mode progression\". There is an Inferno Room insert among the mode inserts. Not documented yet.</p>"+UNK("The Scare-o-meter is also listed as to be determined.")}
]}
];

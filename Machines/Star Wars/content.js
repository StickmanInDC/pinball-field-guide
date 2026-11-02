/* ---------- playfield features (coordinates in the 640x1121 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[131,450],[119,385],[105,310],[85,220],[105,120],[200,60]],18)],a:[119,385],x:"The far left arrow and green X point up this lane. Nothing prints its name. Treating it as the left orbit is my reading of the rulesheet's shot names, and the path past the arrow is a guess."},
 left_loop:{n:"Left mini-loop",c:1,s:[B([[204,447],[194,400],[175,350],[170,300],[205,245],[265,225]],20)],a:[194,400],x:"The Death Star card sits on this lane, and the rulesheet says the left mini-loop lights Death Star modes. The rulesheet also says inner left loop. The path around the back of the loop is a guess."},
 left_ramp:{n:"Left ramp",c:1,s:[B([[265,450],[262,402],[247,362],[238,300]],24)],a:[262,402],x:"The Endor card, Extra Ball and Super Jackpot inserts sit on this lane, and the rulesheet puts all three at the left ramp. The metal plate is its entrance. The path past the plate is not shown, as I could not follow it."},
 right_loop:{n:"Right mini-loop",c:1,s:[B([[320,360],[312,320],[305,265],[265,225]],20)],a:[312,320],x:"The Hoth card and Video Mode insert sit on this lane, and the rulesheet puts both at the right mini-loop. It also says right loop. Its path around the back is a guess. The rulesheet's wording suggests the two mini-loops are the two sides of one loop."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[428,523],[445,475],[470,417],[495,330],[510,220]],24)],a:[445,475],x:"The arrow and green X point at the metal plate right of the display. Nothing prints its name. I read that plate as the ramp's entrance. The path past it is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[480,552],[502,505],[530,430],[555,340],[560,220],[520,120],[430,80]],18)],a:[502,505],x:"The next arrow and green X point up this lane. Nothing prints its name. The path past the arrow is a guess, under the clear ramp on the Pro."},
 right_scoop:{n:"Right scoop",c:0,s:[C(566,497,24)],a:[566,497],x:"The Tatooine card and Mystery insert point along this line, which fits the rulesheet. The scoop itself is hidden. This mark is at the red glow behind the side rail, and it is my reading."},
 scoop_lane:{n:"Right scoop arrow",c:1,s:[E(550,568,16,30),E(529,617,18,30)],a:[529,617],x:"The red arrow and green X on the Tatooine and Mystery line."},
 three_bank:{n:"3-bank standups",c:1,s:[R(345,370,110,40)],a:[400,392],x:"The display above them says TARGETS INCREASE SHOT MULTIPLIER, and three red arrows point at them. The rulesheet calls this the center standup target bank. Their exact edges are hidden by the display housing."},
 tie_toy:{n:"TIE Fighter toy",c:1,s:[E(272,295,36,42)],a:[272,295],x:"Stern's page calls it a TIE Fighter bash toy that reacts to ball strikes."},
 tie_target:{n:"TIE Fighter target",c:0,s:[C(282,351,17)],a:[282,351],x:"The apron card says to hit the target in front of the TIE Fighter toy. The TIE Fighter insert points at this spot. It is my reading of where the target sits."},
 tie_ins:{n:"TIE Fighter insert",c:1,s:[E(291,397,16,30)],a:[291,397]},
 force:{n:"FORCE targets",c:1,s:[B([[97,735],[127,600]],24)],a:[112,668],x:"The black bank of five drop targets beside the printed letters. The rulesheet calls them both FORCE targets and a drop target bank."},
 force_letters:{n:"FORCE letters",c:1,s:[B([[140,727],[162,612]],36)],a:[150,668]},
 duel_ins:{n:"Lightsaber Duel insert",c:1,s:[R(173,645,38,58)],a:[192,672]},
 jedi_t:{n:"Blue Jedi Training standups",c:0,s:[C(207,355,14),C(157,430,14),C(507,428,14),C(523,547,14),C(550,650,14)],a:[507,428],x:"Each of the five JEDI TRAINING inserts sits just in front of a small standup, and the rulesheet says to complete every blue standup. Reading these five as those targets is mine. Each one sits behind the insert."},
 jedi_ins:{n:"Jedi Training inserts",c:1,s:[C(217,387,13),C(165,475,13),C(497,454,13),C(509,574,13),C(533,678,13)],a:[497,454]},
 red_arrows:{n:"Red target arrows",c:1,s:[E(354,430,9,20),E(384,433,9,20),E(415,437,9,20),E(222,415,9,20),E(172,502,9,20),E(483,483,9,20),E(492,603,9,20),E(512,707,9,20)],a:[384,433],x:"The rulesheet says red arrows in front of certain targets are TIE Fighters. These are the small red ones: three at the 3-bank and one in front of each blue standup."},
 x_ins:{n:"Green X inserts",c:1,s:[E(131,432,14,22),E(204,447,14,22),E(265,450,14,22),E(320,360,14,22),E(428,523,14,22),E(480,552,14,22),E(529,617,14,22)],a:[265,450],x:"Seven green X inserts, one per lane. The rulesheet does not say how many shots can hold a multiplier, so this is the photo's count."},
 yellow_rm:{n:"Mystery insert",c:1,s:[E(500,663,15,36)],a:[500,663]},
 video_ins:{n:"Video Mode insert",c:1,s:[E(320,405,14,24)],a:[320,405]},
 eb_ins:{n:"Extra Ball insert",c:1,s:[E(272,503,14,26)],a:[272,503]},
 sj_ins:{n:"Super Jackpot insert",c:1,s:[E(276,547,12,22)],a:[276,547]},
 top_lanes:{n:"Top lanes",c:0,s:[E(377,215,14,34),E(425,220,14,34),E(470,225,14,34)],a:[425,220],x:"Three lanes with Imperial crest inserts, above the display. The rulesheet only says top lanes. Reading these as them is mine."},
 pops:{n:"Pict-o-Pops",c:0,s:[C(357,245,22),C(410,264,22),C(485,260,22)],a:[410,264],x:"Picture caps behind the display, with different images on each photo. I could see one or two clearly on each, and the positions of the others are a guess."},
 rebel:{n:"Rebel lanes",c:1,s:[C(75,807,15),C(112,826,15),C(482,826,15),C(526,808,15)],a:[112,826],x:"Four yellow Rebel symbols, at the lanes. The apron card calls them Rebel lanes. The rulesheet says inlane rollovers, and these four are the only lane lights on each side."},
 inlanes:{n:"Inlanes",c:0,s:[C(112,826,15),C(482,826,15)],a:[112,826],x:"The two inner Rebel symbols. Reading the inner pair as the inlanes is mine. The rulesheet does not say how many lanes count, or whether the outer ones do."},
 outlane_r:{n:"Right outlane",c:0,s:[B([[526,808],[540,960]],18)],a:[533,880],x:"The lane under the ESCAPE insert. The path is placed from the photo."},
 escape_ins:{n:"Escape insert",c:1,s:[E(513,770,14,38)],a:[513,770]},
 death_toy:{n:"Death Star toy",c:1,s:[C(160,172,74)],a:[160,172],x:"Stern's page calls it an interactive molded Exploding Death Star, on the Premium. The Pro has a similar sphere. The rulesheet does not separate them. It sits higher on the Premium and LE photos, because it is raised above the art.",v:{premium:{s:[E(163,140,75,78)],a:[163,140]},le:{s:[E(157,113,76,74)],a:[157,113]}}},
 hyper_wire:{n:"Hyperspace wireform",c:0,s:[],a:[60,600],x:"The wire track on the Premium and LE. Stern's page calls it a magnetic Hyperdrive ball accelerator that sends balls around a circuit above the playfield. The path shown is only roughly where the wires run.",v:{premium:{s:[B([[60,700],[85,835],[150,920],[290,945],[410,935],[490,850],[545,690],[590,430]],16)],a:[290,945]},le:{s:[B([[60,700],[85,835],[150,920],[290,945],[410,935],[490,850],[545,690],[590,430]],16)],a:[290,945]}}},
 falcon_toy:{n:"Millennium Falcon toy",c:1,s:[],a:[50,620],x:"Stern's page lists a Millennium Falcon toy with LED lighting on the Premium. The rulesheet does not mention it.",v:{premium:{s:[E(50,615,50,70)],a:[50,615]},le:{s:[E(66,578,48,72)],a:[66,578]}}},
 display:{n:"Center display",c:1,s:[R(325,265,155,98)],a:[400,315],x:"The small screen on the playfield. The rulesheet calls it the LCD screen at the back center."},
 m_ds:{n:"Death Star mode card",c:1,s:[E(210,492,22,42)],a:[210,492]},
 m_en:{n:"Endor mode card",c:1,s:[E(286,590,22,40)],a:[286,590]},
 m_ho:{n:"Hoth mode card",c:1,s:[E(323,457,22,42)],a:[323,457]},
 m_ta:{n:"Tatooine mode card",c:1,s:[E(473,712,26,44)],a:[473,712]},
 ds_lamps:{n:"Destroy the Death Star inserts",c:1,s:[E(298,696,50,20),C(267,725,13),C(298,722,13),C(328,725,13)],a:[298,696]},
 en_lamps:{n:"Battle Above Endor inserts",c:1,s:[E(296,982,52,18),C(266,951,13),C(296,955,13),C(327,951,13)],a:[296,982]},
 ho_lamps:{n:"Escape from Hoth inserts",c:1,s:[E(165,767,20,32),C(173,804,13),C(186,779,13),C(205,757,13)],a:[165,767]},
 ta_lamps:{n:"Escape from Tatooine inserts",c:1,s:[E(430,765,20,32),C(391,757,13),C(410,780,13),C(421,802,13)],a:[430,765]},
 jedi_mb:{n:"Jedi Multiball insert",c:1,s:[C(219,712,17)],a:[219,712]},
 victory:{n:"Victory Multiball insert",c:1,s:[C(378,712,17)],a:[378,712]},
 ch_han:{n:"Han insert",c:1,s:[C(221,913,16)],a:[221,913]},
 ch_leia:{n:"Leia insert",c:1,s:[C(271,913,16)],a:[271,913]},
 ch_r2:{n:"R2-D2 insert",c:1,s:[C(322,913,16)],a:[322,913]},
 ch_luke:{n:"Luke insert",c:1,s:[C(372,913,16)],a:[372,913]},
 plunger:{n:"Plunger lane",c:0,s:[B([[592,1000],[592,600]],14)],a:[592,800],x:"Placed from the photo. The rulesheet does not describe it."},
 flippers:{n:"Flippers",c:1,s:[B([[185,1017],[262,1060]],18),B([[405,1017],[330,1060]],18)],a:[223,1038]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var SIX=["left_orbit","left_loop","left_ramp","right_loop","right_ramp","right_orbit"];
var LANES=["left_orbit","left_loop","left_ramp","right_loop","right_ramp","right_orbit","right_scoop"];
var LOOPS=["left_loop","right_loop"];
var RAMPS=["left_ramp","right_ramp"];
var ORBITS=["left_orbit","right_orbit"];
var CHARS=["ch_luke","ch_leia","ch_r2","ch_han"];
var SIXNOTE="The rulesheet never lists its major shots. It counts 6 for Victory Multiball, so this marks the orbits, mini-loops and ramps.";
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["m_ds","m_en","m_ho","m_ta",["jedi_mb",0,"alt"]],b:"<p>Pick a character, then survive challenges on four planets. Each planet has modes and a final multiball. Clearing the game's big tasks qualifies the wizard mode, Jedi Multiball.</p>"},
 {t:"The seven lanes",h:NUM(LANES),b:"<p>From left to right: left orbit, left mini-loop, left ramp, right mini-loop, right ramp, right orbit, right scoop.</p>"+UNK("The rulesheet's Layout section is blank. This order is my reading. The Death Star, Endor, Hoth and Tatooine cards fix four of the lanes, and the rulesheet ties each planet to a shot. The orbits and right ramp are read from the leftover arrows.")},
 {t:"Planet shots",h:[["left_loop",1],["left_ramp",2],["right_loop",3],["right_scoop",4],["m_ds",1,"alt"],["m_en",2,"alt"],["m_ho",3,"alt"],["m_ta",4,"alt"]],b:"<p>Each planet has one qualifying shot:</p><ul><li>Death Star: left mini-loop</li><li>Endor: left ramp</li><li>Hoth: right mini-loop</li><li>Tatooine: right scoop</li></ul>"},
 {t:"Mini-loop",h:["left_loop","right_loop",["tie_toy",0,"alt"]],b:"<p>The rulesheet treats the mini-loops as two sides of a loop. It also calls them the inner loops, and the right one the right loop.</p>"+UNK("It does not say they are the same loop outright. Its wording, \"both sides of the mini-loop\", is why I read it that way.")},
 {t:"3-bank standups",h:["three_bank",["display",0,"alt"]],b:"<p>The center standup target bank. Hitting any of its targets raises your shot multiplier and keeps it alive. It is also the skill shot target.</p>"},
 {t:"FORCE targets",h:["force","force_letters",["duel_ins",0,"alt"]],b:"<p>A bank of drop targets at the left. Complete them for the awards listed in the FORCE section, and eventually for Lightsaber Duel.</p>"},
 {t:"TIE Fighter toy and target",h:["tie_target","tie_toy",["tie_ins",0,"alt"]],b:"<p>Shoot the lit TIE Fighter target to collect TIE Fighter Hurry-Up.</p><p>The apron card says to hit the target in front of the TIE Fighter toy.</p>"},
 {t:"Red and blue targets",h:["red_arrows","jedi_t",["jedi_ins",0,"alt"]],b:"<p>Red arrows in front of certain targets are TIE Fighters to collect. They move around once collected.</p><p>Blue standups are for Jedi Training.</p>"},
 {t:"Rebel lanes and top lanes",h:["rebel","top_lanes"],b:"<p>The inlane rollovers cycle with the flippers and build Hyperspace. The top lanes raise the bonus multiplier.</p><p>The apron card calls the rollovers Rebel lanes, and says they build the Hurry-Up value.</p>"},
 {t:"Pict-o-Pops",h:["pops"],b:"<p>The bumpers can award one of many features during normal play.</p>"},
 {t:"Flippers and action button",h:["flippers"],b:"<p>The action button toggles shot multipliers, selects modes, fires at TIE Fighters and uses add-a-ball.</p><p>The apron card adds that it launches the ball, advances instant info, slows the end of ball bonus and enters initials. Holding a flipper button starts instant info.</p>"}
]},
{g:"Layout and basics",id:"strategy",title:"Basic strategy",steps:[
 {t:"Keep multipliers alive",h:["three_bank",["x_ins",0,"alt"]],b:"<p>Keep shooting the center bank to hold your shot multipliers. The rulesheet says these are where the big points come from. If they are about to time out, backhanding the center bank is a reliable way to reset the timer.</p>"},
 {t:"Choosing a character",h:CHARS,b:"<p>The rulesheet says Luke and R2-D2 tend to be the most newcomer friendly.</p>"},
 {t:"Backup during final multiballs",h:["red_arrows"].concat(alt(SIX)),b:"<p>During planet multiballs, try the red targets or yellow shots, not the flashing shots. TIE Fighter and Hyperspace Multiball can both start during these modes and they reset the ball saver.</p>"+UNK(SIXNOTE)},
 {t:"Double Multipliers, not Duel",h:["force",["duel_ins",0,"alt"]],b:"<p>The rulesheet says Lightsaber Duel generally is not worth pursuing, as it can only start when nothing else is running. The fourth FORCE award, Double Multipliers, is very worthwhile. Try scoring it during a mode to avoid being stuck in what it calls Lightsaber Duel jail.</p>"},
 {t:"Keep control first",h:["flippers"],b:"<p>Never risk control of the ball to fire at TIE Fighters. Work out where the ball will rebound and whether you can save it before you mash the action button.</p>"}
]},
{g:"Layout and basics",id:"characters",title:"Characters and paths",steps:[
 {t:"Pick a character",h:CHARS,b:"<p>At the start of the first ball, choose a character. The choice sets a special benefit and which planet modes you can reach.</p>"},
 {t:"Luke",h:["ch_luke","duel_ins"],b:"<p>Doubled scoring during Lightsaber Duel.</p>"},
 {t:"Leia",h:["ch_leia"],b:"<p>Adds 3x to the shot multiplier during any final planet mode.</p>"},
 {t:"R2-D2",h:["ch_r2","three_bank"],b:"<p>Easier shot multipliers: fewer target hits, and multipliers last longer.</p>"},
 {t:"Han Solo",h:["ch_han"],b:"<p>Doubled scoring during Escape from Boba Fett.</p>"},
 {t:"Character paths",h:CHARS,b:"<p>At the start of each ball, each character has a path of four awards. Select one with the flippers. It locks in when the ball enters play. These generally help the current character, and can change if certain modes are running.</p>"+UNK("The rulesheet's full list of awards is a link to a forum post it does not reproduce.")}
]},
{g:"Layout and basics",id:"skill-shots",title:"Skill shots",steps:[
 {t:"3-bank skill shot",h:["three_bank",["plunger",0,"alt"]],b:"<p>Shoot the flashing 3-bank target for Bonus X. Each time you make it, the target moves faster and the Bonus X at stake rises. The middle target scores the most.</p>"+UNK("The rulesheet does not describe the plunge. The apron card says the right flipper changes the skill shot award before you plunge.")},
 {t:"Roving FORCE target",h:["force"],b:"<p>Shoot the roving FORCE target to spot the next FORCE award. You can collect this at any time, but it is disabled once you hit the wrong drop target.</p>"}
]},
/* ====== PLANET MODES ====== */
{g:"Planet modes",id:"planets",title:"How planets work",steps:[
 {t:"Qualify a planet",h:[["left_loop",1],["left_ramp",2],["right_loop",3],["right_scoop",4]],b:"<p>Shoot any of the four planet shots three times to qualify that planet's modes. Each planet has up to three modes, depending on your character. Each qualifying shot scores points that the rulesheet says seem based on the number of modes available.</p>"},
 {t:"Start a mode",h:["left_loop","left_ramp","right_loop","right_scoop"],b:"<p>If no mode is active, shooting a qualified planet's shot lets you choose a mode or pass. Select with the flippers and action button.</p><p>Modes do not time out, though many are built around short hurry-ups.</p>"},
 {t:"Stacking",h:["m_ds","m_en","m_ho","m_ta"],b:"<p>Two modes from different planets can run at once. Stacking is disabled in competition mode. A completed mode cannot be replayed until the wizard mode has ended.</p>"},
 {t:"Final multiball",h:["ds_lamps","en_lamps","ho_lamps","ta_lamps"],b:"<p>Completing all of a planet's modes qualifies its final multiball, which must be played on its own. The ball count is the number of that planet's modes you played, plus 1.</p>"},
 {t:"Add-a-ball",h:["force"],b:"<p>Complete FORCE, then hold the action button, to add a ball once per final multiball. If you do not use it, it can carry over into other multiballs.</p>"},
 {t:"Extra ball and wizard",h:["left_ramp",["eb_ins",0,"alt"],["jedi_mb",0,"alt"]],b:"<p>Winning missions lights the left ramp for an extra ball. Attempting all four final multiballs is one requirement for Jedi Multiball.</p>"+UNK("The rulesheet conflicts: this section says two missions, and its Extra Balls section says percentage-based, starting at 3.")}
]},
{g:"Planet modes",id:"death-star",title:"Death Star",steps:[
 {t:"Qualify",h:["left_loop",["m_ds",0,"alt"]],b:"<p>Shoot the left mini-loop to light these modes.</p>"},
 {t:"I: Rescue the Princess",h:[["left_orbit",1],["left_loop",2],["right_loop",3],["right_ramp",4]],b:"<p>Luke, Leia, R2 or Han. Complete 4 hurry-up shots: the left orbit, both sides of the mini-loop and the right ramp.</p><p>The first is worth a base of 2M. Each later one is the multiplied value of the previous plus 2M. It caps at 25M.</p>"+UNK("The rulesheet does not set an order. The numbers only count the shots.")},
 {t:"II: Escape the Death Star (Luke, Leia)",h:["left_loop","right_loop",["left_orbit",0,"alt"],["right_orbit",0,"alt"]],b:"<p>Shoot 3 mini-loops, then an orbit before the timer runs out. If the timer runs out on the orbit shot, you must shoot the three inner loops again.</p>"},
 {t:"II: Escape the Death Star (Han)",h:["left_loop","right_loop","left_orbit","right_orbit",["left_ramp",0,"alt"]],b:"<p>Pilot the Millennium Falcon by shooting both mini-loops or both orbits once, then shoot the left ramp to escape.</p>"},
 {t:"III: Fight TIE Fighters (Luke, Han)",h:SIX.concat(["tie_target"]),b:"<p>Shoot any flashing purple shot, which are all major shots, to light the TIE Fighter target for about 10 seconds. Shoot the lit target four times to win.</p>"+UNK(SIXNOTE)},
 {t:"Final: Destroy the Death Star",h:["left_ramp","right_ramp",["left_loop",0,"alt"],["ds_lamps",0,"alt"]],b:"<p>Shoot the ramps to light a 10-second hurry-up at the left mini-loop, which damages the Death Star. Collect three, rising in value each time, to destroy it and start Victory Multiball.</p>"}
]},
{g:"Planet modes",id:"endor",title:"Endor",steps:[
 {t:"Qualify",h:["left_ramp",["m_en",0,"alt"]],b:"<p>Shoot the left ramp to qualify and start these modes.</p>"},
 {t:"I: Speeder Bike Chase (Luke)",h:LANES,b:"<p>Shoot the flashing green shots to move the chase along. Each shot has a 15-second timer. If it runs out, you fall back a shot and must make it again.</p>"+UNK("The rulesheet does not list the green shots, so all seven lanes are marked.")},
 {t:"II: Throne Room Duel (Luke)",h:["left_ramp","right_ramp",["right_loop",0,"alt"],["force",0,"alt"]],b:"<p>Make combo shots to the left and right ramp three times. Shoot the right mini-loop to raise their value. After the first ramp shot, the other is on a short timer. If it runs out, the FORCE targets flash to relight the ramps for another try.</p>"},
 {t:"III: Knockout Shield Generator (Leia, R2, Han)",h:["left_loop","right_loop","left_ramp","right_ramp"],b:"<p>Complete 4 flashing green shots (mini-loops, ramps) to unlock the door to the shield generator. Then complete the same 4 again to finish. Target shots score small points and raise the shot values.</p>"},
 {t:"Final: Battle Above Endor",h:["left_loop",["three_bank",0,"alt"],["en_lamps",0,"alt"]],b:"<p>First light the left mini-loop by completing three other shots before the timer runs out. Each shot starts a timer for the next, and the 3-bank adds time.</p><p>If the timer runs out, the Death Star destroys a Capital ship and you need 3 more shots. Once lit, shoot the inner left loop to destroy the Death Star and start Victory Multiball.</p>"+UNK("The rulesheet does not name the three other shots.")}
]},
{g:"Planet modes",id:"hoth",title:"Hoth",steps:[
 {t:"Qualify",h:["right_loop",["m_ho",0,"alt"]],b:"<p>Shoot the right mini-loop to qualify and start these modes.</p>"},
 {t:"I: Navigate the Asteroid Field (Leia, Han)",h:["right_loop",["video_ins",0,"alt"]],b:"<p>Another way to start Video Mode. If Video Mode was lit by the FORCE targets and you choose this mode, Video Mode advances a level as compensation.</p>"},
 {t:"II: Cloud City Escape (Leia)",h:[["left_ramp",1],["right_ramp",1],["left_orbit",2],["right_orbit",2],["right_loop",3]],b:"<p>Shoot both ramps, then both orbits. The right mini-loop then lights to complete the mode, on a 10-second timer, for the total value. Draining or waiting out the timer also finishes the mode.</p>"},
 {t:"II: Duel on Cloud City (Luke)",h:["force",["left_ramp",0,"alt"],["right_ramp",0,"alt"],["right_loop",0,"alt"]],b:"<p>Make five shots to the FORCE targets. Shoot the ramps to raise each target's value. Complete the mode at the right mini-loop.</p>"},
 {t:"III: Repair the Hyperdrive (R2)",h:["left_loop"],b:"<p>Shoot any blue shot to light the left mini-loop for a hurry-up. Collect it to win.</p>"+UNK("The rulesheet does not list the blue shots.")},
 {t:"III: TIE Fighter Escape (Leia)",h:["three_bank",["left_orbit",0,"alt"]],b:"<p>Complete all 3-bank standups to light the left orbit for 10 seconds, which completes the mode. Waiting out the timer or draining also completes it.</p>"},
 {t:"Final: Escape from Hoth",h:[["left_orbit",1],["three_bank",2],["left_loop",3],["right_loop",3],["ho_lamps",0,"alt"]],b:"<p>Two tasks run at once:</p><ul><li>Shoot the left orbit 3 times to prepare the ion cannon, then any shot to the 3-bank to fire it.</li><li>Shoot either mini-loop 4 times to take down the AT-AT with a tow cable.</li></ul>"},
 {t:"Final: Escape",h:["left_ramp","right_ramp",["right_loop",0,"alt"]],b:"<p>After both tasks, shoot the last two ramp shots to escape from Darth Vader, then the right loop to start Victory Multiball.</p>"}
]},
{g:"Planet modes",id:"tatooine",title:"Tatooine",steps:[
 {t:"Qualify",h:["right_scoop","scoop_lane",["m_ta",0,"alt"]],b:"<p>Shoot the right scoop to qualify and start these modes.</p>"},
 {t:"I: Get to the Escape Pod (Leia, R2)",h:["left_orbit","right_orbit","left_loop","right_loop","left_ramp"],b:"<p>Complete 5 orange shots (orbits, mini-loops, left ramp) to complete the mode.</p>"},
 {t:"II: Escape from Mos Eisley (Luke, R2, Han)",h:["left_ramp","right_ramp",["left_loop",0,"alt"]],b:"<p>Shoot either ramp once to light the left mini-loop, which completes the mode. Further ramp shots build the value.</p>"},
 {t:"III: The Rancor (Luke)",h:["left_ramp","right_ramp",["three_bank",0,"alt"]],b:"<p>Shoot ramps to light the 3-bank, then hit it to damage the Rancor. Further ramp shots build the value. The second 3-bank hit needs both ramps made to qualify it.</p>"},
 {t:"Final: Escape from Tatooine",h:["left_ramp","right_loop",["three_bank",0,"alt"],["right_ramp",0,"alt"],["right_scoop",0,"alt"],["ta_lamps",0,"alt"]],b:"<p>Alternate between the left ramp and right mini-loop, to move the story from Luke reaching Jabba's yacht to escaping it with Leia. There are 9 parts.</p><p>Shots to the 3-bank, right ramp and right scoop raise your award value. Victory Multiball begins on the final shot.</p>"}
]},
{g:"Planet modes",id:"victory",title:"Victory Multiball",steps:[
 {t:"Start",h:["victory","ds_lamps","en_lamps","ho_lamps","ta_lamps"],b:"<p>Starts after you complete any planet's final multiball mode, sending 3 additional balls into play.</p>"+UNK("The rulesheet's overview calls it 6-ball, and this section says 3 additional balls.")},
 {t:"Goal",h:SIX,b:"<p>Complete 6 major shots for big points, and collect bronze, silver and gold medals. Medals set the points scored at the start of Jedi Multiball, which can be a very high-scoring collect.</p>"+UNK(SIXNOTE)},
 {t:"Afterward",h:["m_ds","m_en","m_ho","m_ta"],b:"<p>Once it ends, that planet is disqualified. It can be relit after playing the wizard mode.</p>"}
]},
/* ====== FORCE ====== */
{g:"FORCE",id:"force",title:"FORCE awards",steps:[
 {t:"Completing FORCE",h:["force","force_letters"],b:"<p>Complete the targets at any time, even off a skill shot to the drop target bank. Planet mode behavior takes priority over the awards. After five completions, no more awards until Lightsaber Duel ends.</p>"},
 {t:"1st: Light Mystery",h:["force",["right_scoop",0,"alt"],["yellow_rm",0,"alt"]],b:"<p>Lights Mystery at the right scoop.</p>"},
 {t:"2nd: Light Escape",h:["force",["escape_ins",0,"alt"],["outlane_r",0,"alt"]],b:"<p>Lights Escape at the right outlane.</p>"},
 {t:"3rd: Light Video Mode",h:["force",["right_loop",0,"alt"],["video_ins",0,"alt"]],b:"<p>Lights Video Mode at the right mini-loop.</p>"},
 {t:"4th: Double Multipliers",h:["force",["x_ins",0,"alt"]],b:"<p>Doubles the multipliers until the multiplier timer expires.</p>"},
 {t:"5th: Light Lightsaber Duel",h:["force",["left_ramp",0,"alt"],["duel_ins",0,"alt"]],b:"<p>Lights Lightsaber Duel.</p>"}
]},
{g:"FORCE",id:"duel",title:"Lightsaber Duel",steps:[
 {t:"Start",h:["left_ramp",["duel_ins",0,"alt"]],b:"<p>After five FORCE completions, and if no other modes are active, the left ramp lights to start it. It is a timed mini-wizard mode. It takes priority over all other modes once started, and it carries over between balls until completed.</p>"},
 {t:"Blue shots",h:["left_loop","right_loop","right_ramp"],b:"<p>Delay Vader while your allies escape. Shoot the blue shots (both mini-loops and right ramp) to help them.</p>"},
 {t:"Red shots",h:["left_ramp","three_bank"],b:"<p>Shoot the red shots (left ramp and 3-bank) to add time.</p>"},
 {t:"FORCE values",h:["force",["ch_luke",0,"alt"]],b:"<p>The FORCE targets raise the award values. Choosing Luke raises them too.</p>"},
 {t:"Win",h:["right_loop",["jedi_mb",0,"alt"]],b:"<p>After all three allies escape, shoot the right loop to win. Completing this mode is one of the Jedi Multiball requirements.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"tie-fighters",title:"TIE Fighters",steps:[
 {t:"Collect TIE Fighters",h:["red_arrows",["display",0,"alt"]],b:"<p>The red arrows and the center LCD screen represent TIE Fighters. Collected targets move around the playfield.</p>"},
 {t:"Light the hurry-up",h:["red_arrows","tie_target",["tie_ins",0,"alt"]],b:"<p>Collect enough (5 the first time, then 10, 15 and so on) to light the TIE Fighter target for TIE Fighter Hurry-Up. Shoot it to cash out.</p>"},
 {t:"Mash the action button",h:["tie_toy"],b:"<p>The lights go dark red and an alarm blares. Keep mashing the action button. Every second press during the 7-second timer destroys another TIE Fighter for a percentage of the hurry-up value. Odd presses fire a laser that might destroy one.</p>"},
 {t:"Start multiball",h:["tie_target",["tie_toy",0,"alt"]],b:"<p>Defeating 35 TIE Fighters starts TIE Fighter Multiball, and 110 after that.</p>"},
 {t:"Jackpots",h:SIX,b:"<p>A 3-ball multiball. All major shots are lit for Jackpots worth 750K.</p>"+UNK(SIXNOTE)},
 {t:"Super Jackpot",h:["left_ramp",["three_bank",0,"alt"],["sj_ins",0,"alt"]],b:"<p>Once all Jackpots are collected, shoot the left ramp for a Super Jackpot. Build it with the flashing red 3-bank targets. It is worth 4M + 100K per advance.</p><p>The rulesheet says scoring is relatively low, so treat it as backup during a final planet multiball.</p>"},
 {t:"Other TIE awards",h:["left_ramp",["eb_ins",0,"alt"],["jedi_mb",0,"alt"]],b:"<p>Defeating 80 lights the extra ball. It can also be lit after defeating enough advanced TIE Fighters on the center LCD screen. Defeating 100 is a Jedi Multiball requirement.</p>"+UNK("The rulesheet asks how many advanced TIE Fighters that takes.")}
]},
{g:"Multiballs",id:"hyperspace",title:"Hyperspace",steps:[
 {t:"Light the hurry-up",h:["rebel",["right_ramp",0,"alt"],["left_orbit",0,"alt"]],b:"<p>Complete the inlane rollovers, which cycle with the flippers, to light the right ramp and left loop for Hyperspace Hurry-Up.</p><p>The apron card says yellow arrows show it and to shoot either the right ramp or left orbit to start it, so I marked the left orbit.</p>"+UNK("The rulesheet says left loop and does not say which. Its overview also says yellow shots light the Death Star for the hurry-up, which its Hyperspace section does not mention.")},
 {t:"Collect",h:["left_loop"],b:"<p>When the mode starts, shoot the left mini-loop for a hurry-up value.</p>"},
 {t:"Build the value",h:["rebel","right_ramp"],b:"<p>Before the mode, raise the value by completing the inlane lights or shooting an unlit right ramp.</p>"},
 {t:"Start multiball",h:["left_loop"],b:"<p>Collecting two Hyperspace Hurry-Ups starts Hyperspace Multiball, plus one more for each later multiball.</p>"},
 {t:"Opening lock (Pro)",ed:"pro",h:["left_loop"],b:"<p>The ball locks at the left mini-loop. It must be knocked out of the loop to set the jackpot value. You can complete the sequence a second time, if successful, for bigger jackpots. If time runs out, or both hurry-ups are completed, multiball begins.</p>"},
 {t:"Opening lock (Premium and LE)",ed:"premium",h:["hyper_wire"],b:"<p>The ball loops around the hyperspace wireform. Send more balls into the wireform to raise the jackpots and the number of balls for the multiball. If time runs out, multiball begins.</p>"+UNK("The wire path is only roughly marked. I did not place the entry to the wireform.")},
 {t:"Jackpots",h:SIX,b:"<p>Shoot the yellow shots for jackpots based on the value you collected. Shoot enough of them to light the left mini-loop for another jackpot hurry-up.</p><p>The rulesheet says scoring is relatively low, so treat it as backup during a final planet multiball.</p>"+UNK("The rulesheet does not list the yellow shots. This marks the six major shots.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"multipliers",title:"Shot multipliers",steps:[
 {t:"On and off",h:["x_ins"],b:"<p>Multipliers start at 2x. The action button toggles them on (green) and off (red). When off, the flippers move them left or right.</p>"},
 {t:"Build it",h:["three_bank"],b:"<p>Hitting any 3-bank target adds 1x, up to 20x. The fourth FORCE award doubles it, to a maximum of 40x.</p>"},
 {t:"The spread",h:["x_ins"],b:"<p>At lower multipliers, a spread of three shots shows the green X. The spread falls to 2 shots at 5x (7x with R2-D2), and to 1 shot at 10x (14x with R2-D2).</p>"},
 {t:"Timing out",h:["three_bank"],b:"<p>The multiplier resets to 2x if a 3-bank target has not been hit for a while. The higher it is, the faster it times out.</p>"}
]},
{g:"Other scoring",id:"jedi-training",title:"Jedi Training",steps:[
 {t:"Complete the blue targets",h:["jedi_t",["jedi_ins",0,"alt"]],b:"<p>Complete every blue standup once in about 30 seconds to advance your Jedi level. Higher levels raise target scores and your end-of-ball bonus. Each level advanced also completes a set of FORCE targets.</p>"},
 {t:"The levels",h:["jedi_t"],b:"<ul><li>Youngling: 250K for completion, 25K per target</li><li>Padawan: 1M, 100K per target</li><li>Jedi: 10M, 1M per target</li><li>Master: 25M, 2.5M per target</li></ul>"},
 {t:"Jedi Master",h:["jedi_t",["jedi_mb",0,"alt"]],b:"<p>Becoming a Jedi Master is a requirement for Jedi Multiball.</p>"}
]},
{g:"Other scoring",id:"video-mode",title:"Video Mode",steps:[
 {t:"Light it",h:["force","right_loop",["video_ins",0,"alt"]],b:"<p>Complete the FORCE targets three times to light Video Mode at the right mini-loop. Leia or Han can also play it as Hoth I.</p>"},
 {t:"Play it",h:["flippers"],b:"<p>Steer the Millennium Falcon through an asteroid field with the flippers. The center button gives a speed boost. Points are based on the asteroids you dodge, with a large bonus if you are never hit.</p>"},
 {t:"Multiply it",h:["right_loop",["three_bank",0,"alt"]],b:"<p>Shot multipliers apply to Video Mode, so have the right loop multiplied before you shoot it.</p>"}
]},
{g:"Other scoring",id:"boba-fett",title:"Escape from Boba Fett",steps:[
 {t:"Qualify",h:SIX,b:"<p>Combo shots light the shots that ended the combo with a white arrow. Complete four white arrow shots, with the last two in non-mode play, to begin this timed hurry-up mode.</p>"+UNK("The rulesheet does not list which shots can combo. This marks the six major shots.")},
 {t:"The sequence",h:[["left_ramp",1],["right_loop",2],["right_ramp",3],["left_orbit",4],["left_ramp",5]],b:"<p>Five hurry-ups: left ramp, right mini-loop, right ramp, left orbit, then the left ramp again.</p>"},
 {t:"Make it big",h:["three_bank",["ch_han",0,"alt"]],b:"<p>Shooting the 3-bank adds time. Use your shot multipliers, as the rulesheet says the final score can be huge, especially as Han Solo. Completing this mode is a Jedi Multiball requirement.</p>"}
]},
{g:"Other scoring",id:"pops",title:"Pict-o-Pops",steps:[
 {t:"Pict-o-Pops",h:["pops"],b:"<p>Shooting the bumpers during normal play can award one of many features. Each award has its own symbol. Instant Info shows what each symbol means.</p>"+UNK("The rulesheet's list of awards is unfinished. It names a percentage-based extra ball as one of them.")}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Mystery",h:["right_scoop",["yellow_rm",0,"alt"]],b:"<p>The first FORCE award lights Mystery at the right scoop, for 3 different awards at once. They include instantly lighting planets. Bonus Hold is also available, and the rulesheet says it can lead to very large end-of-ball bonuses.</p>"},
 {t:"Multiply it",h:["right_scoop",["scoop_lane",0,"alt"]],b:"<p>A shot multiplier on the lit Mystery award multiplies all point values from it.</p>"}
]},
{g:"Other scoring",id:"escape",title:"Escape (ball save)",steps:[
 {t:"Escape",h:["outlane_r",["escape_ins",0,"alt"]],b:"<p>The second FORCE award lights Escape at the right outlane. Mystery can also award it.</p>"},
 {t:"On the Pro",ed:"pro",h:["outlane_r"],b:"<p>A virtual ball save.</p>"},
 {t:"On the Premium and LE",ed:"premium",h:["outlane_r",["plunger",0,"alt"]],b:"<p>A gate opens to send the ball back to the plunger.</p>"}
]},
{g:"Other scoring",id:"extra-balls",title:"Extra balls",steps:[
 {t:"Light it",h:["left_ramp",["eb_ins",0,"alt"]],b:"<p>Extra balls light at the left ramp, by:</p><ul><li>Winning enough planet modes (percentage-based, starts at 3)</li><li>Destroying enough TIE Fighters (percentage-based, starts at 80)</li><li>Destroying enough advanced TIE Fighters on the center screen</li><li>A percentage-based Pict-o-Pops award</li></ul>"+UNK("The rulesheet asks how many advanced TIE Fighters it takes.")}
]},
{g:"Other scoring",id:"bonus",title:"End-of-ball bonus",steps:[
 {t:"Bonus",h:["top_lanes","three_bank"],b:"<p>Bonus is largely switch-based, plus your Jedi level and how many planet modes you played this ball. All of it is multiplied by the bonus multiplier, which rises through skill shots or by completing the top lanes.</p>"},
 {t:"Bonus Hold",h:["right_scoop"],b:"<p>Mystery can award Bonus Hold. It holds over the bonus and Bonus X. On the last ball, it rewards the end-of-ball bonus twice.</p>"}
]},
/* ====== WIZARD ====== */
{g:"Wizard mode",id:"jedi-multiball",title:"Jedi Multiball",steps:[
 {t:"Qualify",h:["left_ramp",["jedi_mb",0,"alt"]],b:"<p>Light it at the left ramp by completing all of these:</p><ul><li>Become a Jedi Master</li><li>Complete Lightsaber Duel</li><li>Complete Escape from Boba Fett</li><li>Destroy 100 TIE Fighters</li><li>Start all four final planet multiballs</li></ul>"},
 {t:"Medal bonus",h:["victory"],b:"<p>Before it begins, you receive bonus points based on the medals you earned during Victory Multiball. The rulesheet says this can often score more than the multiball itself.</p>"},
 {t:"Blue shots",h:SIX,b:"<p>A battle against the Emperor that starts with two balls. Complete all blue shots to add a ball.</p>"+UNK("The rulesheet does not list the blue shots. This marks the six major shots.")},
 {t:"Red shots",h:SIX,b:"<p>If the timer expires, the blue shots unlight and one or two shots light red, with a new timer. Shoot one red shot within it, or the Emperor wins and the mode ends.</p>"},
 {t:"Four phases",h:SIX,b:"<p>All blue shots, or one red shot, moves you to the next phase of blue shots. Complete four phases to win. The mode continues on a single ball, but draining that ball loses it. Losing this way does not end your ball.</p>"},
 {t:"Afterward",h:CHARS,b:"<p>Win or lose, you return to character select, and must pick a different character for another loop of the game. There is no further wizard mode for completing it with all four. The characters are simply unlocked again.</p>"}
]}
];

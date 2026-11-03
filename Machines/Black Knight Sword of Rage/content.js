/* ---------- playfield features (coordinates in the 640x1381 crops; Premium and LE photos are warped to the Pro's geometry; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 castle:{n:"Left spinner lane (Castle)",c:0,s:[B([[134,662],[120,605],[106,560],[94,480],[84,400],[78,320]],18)],a:[116,600],x:"The far left lane, with its lightning bolt insert and the Knight Mode and Add-A-Ball inserts below it. Stern's lamp list calls the bolt Castle Lightning Bolt, and the manual puts the Castle Spinner and Castle VUK in this lane. I read it as the rulesheet's left spinner lane. The apron card says KNIGHT Mode starts at the Castle VUK.",v:{premium:{x:"The far left lane, with its lightning bolt insert and the Knight Mode and Add-A-Ball inserts below it. On the Premium and LE the manual has a drop target here instead of the Pro's Castle Spinner. I read it as the rulesheet's left spinner lane."}}},
 castle_spin:{n:"Castle spinner",c:0,s:[R(90,550,32,24)],a:[106,562],x:"The decorated flag in the far left lane. Stern's Pro manual puts the Castle Spinner here. The Premium and LE have a drop target in its place.",v:{premium:{s:[]}}},
 left_drop:{n:"Left drop target",c:0,s:[],a:[112,584],v:{premium:{s:[R(92,573,40,22)]}},x:"The rulesheet's left drop target. The Premium/LE manual lists a Left 1 Bank Drop in the far left lane, about where the Pro has its Castle Spinner. I marked the dark slot there; the target itself is hard to see."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[198,632],[186,560],[168,470],[153,390],[141,300]],18)],a:[184,548],x:"The second lane from the left, with two lightning bolt inserts. Stern's lamp list names both Left Orbit. The manual also puts its Left Spinner in this lane. Past the spinner the orbit runs up and over the top; that part is hidden."},
 left_spin:{n:"Left orbit spinner",c:0,s:[R(152,452,32,24)],a:[168,464],x:"The decorated flag in the left orbit lane. Stern's manual calls it the Left Spinner. The rulesheet never mentions a spinner in the left orbit."},
 ramp:{n:"Flail ramp",c:0,s:[B([[272,642],[268,575],[258,480],[250,400],[246,300],[240,215]],20)],a:[270,600],x:"The chrome ramp left of the Knight, with the Flail lightning bolt insert at its foot. Stern's manual calls it the Flail Ramp and the apron card says to shoot it to light modes. Where it runs past the Knight is a guess.",v:{premium:{x:"The chrome ramp left of the Knight, with the Flail lightning bolt insert at its foot. On the Premium and LE the manual puts the ramp exit on the upper playfield. Where it runs past the Knight is a guess."}}},
 flail:{n:"Flail",c:1,s:[C(252,500,24)],a:[252,500],x:"The two steel balls on the arm at the ramp entrance. The rulesheet calls it the spinning flail; Stern's manual has flail motor and flail opto switches here."},
 center_tg:{n:"Center target",c:0,s:[R(310,566,42,18)],a:[331,575],x:"The flame panel under the Knight, with the center lightning bolt insert and the Super and Power inserts below it. Stern's manual puts the Center Target here. The apron card calls it the 8K Bash Target."},
 shield:{n:"Shield",c:1,s:[E(398,522,22,32)],a:[398,522],x:"The blue and gold shield right of the Knight, with the Shield lightning bolt insert and the Lock, Extra Ball and Mystery inserts in its lane."},
 saucer:{n:"Saucer behind the shield",c:0,s:[C(458,541,14)],a:[458,541],x:"The ring right of and behind the shield. Stern's manual draws the Shield VUK inside a ring here. Locks, mode starts, Mystery and extra balls are collected at this saucer. Worth confirming on a machine."},
 light_lock:{n:"Light lock target",c:0,s:[R(437,589,24,22)],a:[449,600],x:"The small standup right of the shield, with its own lightning bolt and the Light Lock insert below. Stern's manual calls it the Shield Target. The apron card says to shoot the lock target to raise the shield."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[484,640],[500,560],[514,480],[532,400],[548,320],[556,250]],18)],a:[500,560],x:"The lane at the right, with two lightning bolt inserts. Stern's lamp list names both Right Orbit, and the manual's Right Orbit switch is at the top right. The upper part of the lane is my reading of the photo."},
 war:{n:"WAR top lanes",c:1,s:[C(311,234,10),C(357,232,10),C(404,232,10)],a:[357,232],x:"The three top lanes under the W, A and R diamonds."},
 pops:{n:"Pop bumpers",c:0,s:[C(303,300,25),C(421,305,25),C(355,398,20)],a:[362,300],x:"Two pops are plain in the photo. The third sits under the Knight's plume; it is placed from Stern's manual."},
 drops:{n:"Right drop targets",c:0,s:[R(482,718,24,84)],a:[494,760],x:"The 3-bank at the right, beside the three red arrow inserts. Stern's manual puts the Right 3 Bank Drop here, and the apron card says the right drop target 3-bank charges the sword. The targets are hard to see from above."},
 add_time:{n:"Add time targets",c:0,s:[C(108,805,10),C(102,836,10)],a:[106,820],x:"The two standups on the left wall, beside the Time and Add inserts. Stern's manual calls them the Lower Left 2 Bank. I could not see the targets, so the marks follow the manual."},
 add_ins:{n:"Add Time inserts",c:1,s:[C(144,836,9),C(135,872,9)],a:[140,854]},
 knight_ins:{n:"KNIGHT letters",c:1,s:[C(208,844,13),C(237,823,13),C(275,815,13),C(309,815,13),C(341,825,13),C(373,844,13)],a:[290,820]},
 castle_ins:{n:"Knight Mode and Add-A-Ball inserts",c:1,s:[C(146,722,10),C(160,764,10)],a:[152,742]},
 center_ins:{n:"Super and Power inserts",c:1,s:[C(323,706,10),C(322,750,10)],a:[322,728]},
 shield_ins:{n:"Lock, Extra Ball and Mystery inserts",c:1,s:[C(377,678,10),C(368,718,10),C(357,762,10)],a:[368,718]},
 lock_ins:{n:"Light Lock insert",c:1,s:[C(413,732,10)],a:[413,732]},
 wheel:{n:"Mode wheel",c:1,s:[E(290,955,112,108)],a:[290,955],x:"The round wheel between the slings. It names the five battles, Black Castle and the six Super Modes."},
 knight:{n:"The Black Knight",c:1,s:[E(330,455,40,55)],a:[330,455]},
 lanes:{n:"RAGE lanes",c:0,s:[E(60,1030,9,32),E(108,1030,9,32),E(471,1035,9,32),E(526,1035,9,32)],a:[108,1030],x:"The two outlanes and two inlanes, under the R, A, G and E letters. Marks follow the lane slots in the photo."},
 left_out:{n:"Left outlane and ball save",c:0,s:[E(60,1030,9,32),C(56,1106,10)],a:[60,1030],x:"The left outlane, with the Ball Save insert below it. Stern's lamp list also has a Kickback lamp here."},
 magna:{n:"Magna-Save",c:0,s:[E(526,1035,10,34),C(462,895,16)],a:[526,1035],x:"The rulesheet says the magnet sits above the right outlane. The Magna-Save insert points at it. The magnet itself is under the playfield, so the right outlane is marked."},
 flippers:{n:"Flippers",c:1,s:[B([[184,1168],[249,1213]],16),B([[399,1168],[327,1213]],16)],a:[290,1190]},
 slings:{n:"Slingshots",c:0,s:[E(150,1015,16,46),E(430,1015,16,46)],a:[150,1015]},
 catapult:{n:"Catapult lock",c:0,s:[],a:[192,110],v:{premium:{s:[E(192,110,42,42)]}},x:"The three rings on the red catapult at the top left of the upper playfield. Stern's Premium/LE manual lists three U/P Lock switches here. I read the rings as the lock positions."},
 cat_tg:{n:"Catapult target",c:0,s:[],a:[242,150],v:{premium:{s:[C(242,150,13)]}},x:"The standup next to the catapult. Stern's manual lists a U/P Target beside the locks, but I could not see it in the photo. This mark is my guess."},
 up_flip:{n:"Upper playfield flipper",c:1,s:[],a:[488,368],v:{premium:{s:[B([[480,405],[494,330]],12)]}},x:"The small yellow flipper at the right. The Premium/LE manual lists it as the U/P Right Flipper. The rulesheet does not mention it."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["castle","left_orbit","ramp","center_tg","shield","light_lock","right_orbit"];
var CEN=["flail","center_tg","shield"];
var OUT=["castle","left_orbit","light_lock","right_orbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["knight","wheel"].concat(alt(MAJ)),b:"<p>The Black Knight is back with more monsters. Win the five monster battles, charge the Sword of Rage, build KNIGHT for multiball, and then face the Black Knight himself in Black Castle.</p>"},
 {t:"The main shots",h:NUM(MAJ),b:"<p>Left to right, as I place them: left spinner lane (Castle), left orbit, flail ramp, center target, shield, light lock target, right orbit. Each has a lightning bolt insert. The rulesheet calls these the 7 major shots.</p>"+UNK("The rulesheet's Layout section is only photos. Positions come from the lamp names in Stern's manuals, matched to the photo by eye. The left spinner lane and light lock target names are my readings of the manual's Castle and Shield Target.")},
 {t:"The three center shots",h:NUM(CEN).concat(["ramp"]),b:"<p>The flail, center target and shield. Many features light all three, and the Pro Super Skill Shot uses them. The flail sits at the entrance of the ramp, so a ramp shot has to get past it.</p>"},
 {t:"Left spinner lane",ed:"pro",h:["castle","castle_spin","castle_ins"],b:"<p>The far left lane. KNIGHT Multiball starts here, and so does Add-A-Ball in Triple Knights Challenge. The Pro has a spinner in this lane.</p>"+UNK("The rulesheet calls it the left spinner lane. Stern's manual calls it the Castle lane, with a Castle Spinner and Castle VUK.")},
 {t:"Left spinner lane and drop target",ed:"premium",h:["castle","left_drop","castle_ins"],b:"<p>The far left lane. KNIGHT Multiball starts here. On the Premium and LE a drop target sits in this lane; it lights Add-A-Ball in Triple Knights Challenge and Catapult Multiball.</p>"+UNK("The rulesheet calls it the left spinner lane and mentions the drop target. Stern's manual puts a Left 1 Bank Drop in the Castle lane on these models.")},
 {t:"Left orbit and U-turns",h:["left_orbit","left_spin","right_orbit"],b:"<p>The two orbits. Shooting one sets up U-turns, which send the ball around past the top lanes. See U-Turns.</p>"},
 {t:"The Knight, shield and saucer",h:["knight","shield","saucer","light_lock"],b:"<p>Shoot the light lock target to light locks, and the ramp to raise the shield for a battle. Then shoot behind the shield to the saucer to lock a ball or start the battle. Mystery and extra balls are also collected at the saucer.</p>"+UNK("The apron card says the lock target raises the shield, and the rulesheet says the ramp does for battles. I place the saucer at the ring the manual draws around the Shield VUK.")},
 {t:"Top lanes and pop bumpers",h:["war","pops"],b:"<p>The W, A and R top lanes advance the bonus multiplier and the WAR Hurry-Up. The pop bumpers raise the hurry-up value.</p>"},
 {t:"Drop targets and add time targets",h:["drops","add_time","add_ins"],b:"<p>The right drop targets charge the Sword of Rage and relight Magna-Save. The two add time targets on the left add battle time and light ball save.</p>"},
 {t:"Bottom lanes, Magna-Save and ball save",h:["lanes","magna","left_out"],b:"<p>The four bottom lanes spell RAGE for Mystery. The lit letters cycle with the flippers. Magna-Save holds a ball headed down the right outlane, and ball save is collected at the left outlane.</p>"},
 {t:"Upper playfield",ed:"premium",h:["catapult","cat_tg","up_flip","ramp"],b:"<p>The Premium and LE add an upper playfield with a catapult that locks balls for Catapult Multiball. The standup next to the catapult lights its locks.</p>"+UNK("The rulesheet says only that the catapult is on the upper playfield. The flipper and the ramp exit come from Stern's Premium/LE manual. The catapult target mark is my guess.")},
 {t:"Pro and Premium/LE differences",ed:"premium",h:["catapult","left_drop"],b:"<p>From the rulesheet: a different skill shot, Catapult Multiball, a left drop target that lights Add-A-Ball, Last Chance, and Triple Knights and Catapult Multiball can be built and played during each other.</p>"},
 {t:"Pro differences",ed:"pro",h:["war","castle_spin"],b:"<p>From the rulesheet: the Pro skill shot uses the top lanes, there is no catapult or Catapult Multiball, and spins at the left spinner light Add-A-Ball in Triple Knights Challenge. Last Chance is listed as Premium and LE only.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",ed:"pro",h:["war"],b:"<p>Plunge into the lit top lane: 750K, plus 250K for each skill shot after that. Hold the left flipper and let the ball enter the lit lane without changing it for a Super Skill Shot worth 3x a normal one.</p>"},
 {t:"Super Skill Shot",ed:"pro",h:NUM(CEN),b:"<p>Hold the left flipper and hit one of the three center shots (flail, center target, shield): 1.5M, plus 500K for each one after that.</p>"+UNK("The rulesheet calls both of these the Super Skill Shot.")},
 {t:"Skill shot",ed:"premium",h:["cat_tg"],b:"<p>Shoot the light lock target under the catapult lock: 1M, plus 250K for each skill shot after that.</p>"+UNK("The rulesheet says \"light lock\" target under the catapult lock. I read this as the standup next to the catapult, not the light lock target on the lower playfield. That is my reading.")},
 {t:"Super Skill Shot",ed:"premium",h:["catapult"],b:"<p>Lock a ball in the catapult on the upper playfield: 2M, plus 500K for each one after that.</p>"}
]},
/* ====== MONSTER BATTLES ====== */
{g:"Monster battles",id:"battles",title:"Starting a battle",steps:[
 {t:"Qualify the ramp",h:NUM(CEN),b:"<p>Shoot the three center shots to qualify the ramp. The first battle needs one shot, the second two, and so on. The shots are rainbow colored to show how many are left, and the colors repeat every 4 hits, so red can mean 5 shots or 1.</p>"},
 {t:"Raise the shield and start",h:["ramp","shield","saucer"],b:"<p>Shoot the ramp to raise the Black Knight's shield, then shoot behind it to start a battle.</p>"+UNK("The apron card says to shoot the flail ramp and bash the shield to light modes.")},
 {t:"Timer and add time",h:["add_time","add_ins"],b:"<p>The mode timer starts at 65 seconds and shows at the top right of the display. The add time standups on the left add about 3 seconds per hit and 10 seconds per completion.</p>"},
 {t:"Mode values",h:["flail"],b:"<p>Base values rise by 200K for each completed battle and 950K once you have completed a lap of battles. These boosts reset each ball. Hitting the spinning flail while a battle is lit adds a small boost that also resets.</p>"},
 {t:"Carry over and rewards",h:["saucer","wheel"],b:"<p>A battle in progress carries over from ball to ball, and time is added if its timer is low when the ball drains. Winning a battle lights extra ball at the saucer. Win all five for Black Castle.</p>"}
]},
{g:"Monster battles",id:"mudbog",title:"Mud Bog",steps:[
 {t:"The Hydra",h:NUM(["castle","left_orbit","ramp","light_lock","right_orbit"]),b:"<p>Green. Five shots are lit: left spinner lane, left orbit, left ramp, light lock target and right orbit. Shooting one locks it in and starts a timer. Shoot it again to score, cut off a Hydra head and take the shot out of the mode.</p><p>A KNIGHT letter is awarded after the second head. Cut off four heads to complete the battle.</p>"+UNK("The rulesheet says left ramp. The flail ramp is the only ramp I found, so it is marked.")},
 {t:"With Power",h:["center_tg"],b:"<p>Every shot both seals and cuts off a head.</p>"}
]},
{g:"Monster battles",id:"molten",title:"Molten Fire",steps:[
 {t:"The Magma Beast",h:NUM(MAJ),b:"<p>Orange. All 7 major shots are lit; once all have been made they relight. A KNIGHT letter is awarded after 3 shots, and the battle ends after 8.</p>"},
 {t:"With Power",h:["center_tg"],b:"<p>Shots you have not completed stay lit, so you can loop one shot for a fast finish.</p>"}
]},
{g:"Monster battles",id:"sands",title:"Burning Sands",steps:[
 {t:"The Sandworm",h:alt(MAJ),b:"<p>Yellow. A set of three shots, the Sandworm, roves left to right across the 7 major shots. Shoot one of the three to hold the set in place for a few seconds before it moves again.</p><p>A KNIGHT letter is awarded after 3 hits (one full set). The battle is complete after 6 hits (two sets).</p>"},
 {t:"With Power",h:NUM(CEN),b:"<p>The three center shots light for damage automatically.</p>"}
]},
{g:"Monster battles",id:"cavern",title:"Wicked Cavern",steps:[
 {t:"The Hell Hand",h:alt(MAJ),b:"<p>Red. Alternate sides of the playfield. One of the 4 shots on the left side starts lit; shooting it lights a random one of the 4 shots on the right side. Repeat four times, with one more random shot added to the group each cycle.</p><p>A KNIGHT letter is awarded after 3 shots, and the battle is complete after 8.</p>"+UNK("The rulesheet does not say which shots count as left and right. With 7 major shots, one may count on both sides. All major shots are shown dimmed.")},
 {t:"With Power",h:alt(MAJ),b:"<p>All four shots on a side light at once.</p>"}
]},
{g:"Monster battles",id:"freeze",title:"Deep Freeze",steps:[
 {t:"The Lich Lords",h:NUM(["castle","ramp","right_orbit"]),b:"<p>Blue. Three shots light blue: left spinner lane, ramp and right orbit. A blue shot freezes a Lich and turns red. Shoot a red shot for more points and to defeat the Lich there, along with any other red shots lit. Each defeated Lich lights another blue shot.</p><p>A KNIGHT letter is awarded after the second Lich, and the battle is complete after four.</p>"},
 {t:"With Power",h:["center_tg"],b:"<p>One shot kills each Lich.</p>"}
]},
{g:"Monster battles",id:"rage",title:"Sword of Rage",steps:[
 {t:"Charging the sword",h:["drops","center_tg"],b:"<p>The sword meter on the right of the display fills from right drop target hits and other switches. Single targets add about 1%. Completing the drop target bank, or shooting the center target, adds about 20%.</p>"},
 {t:"Using Power",h:["center_tg","center_ins"],b:"<p>When the sword is full, POWER lights at the center target. Collect it during a battle for 2x scoring for the whole battle, plus an easier version of that battle.</p>"},
 {t:"Starting level",h:[],b:"<p>On default settings the meter starts at 70% for the first activation, 40% for the second, and 0% after that.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"tkc",title:"Triple Knights Challenge",steps:[
 {t:"Locking balls",h:["light_lock","lock_ins","saucer","shield_ins"],b:"<p>Shoot the light lock target to light a lock at the saucer behind the shield. Each lock relights the target, and later multiballs need several target hits per lock. Three virtual locks start the 3-ball multiball.</p>"},
 {t:"Phase 1",h:NUM(["castle","ramp","saucer"]),b:"<p>The left spinner lane, ramp and shield saucer light for jackpots against the skeletal knights. Make all three and the ramp lights for a hurry-up.</p>"},
 {t:"The hurry-up",h:["ramp","flail"],b:"<p>The flail spins fast. Partial progress up the ramp, or hitting the flail ball, stops it for a moment. Making the ramp scores the hurry-up (2M, plus 1M on later playthroughs) and sets the jackpot value for phase 2.</p>"},
 {t:"Phase 2 and the Super Jackpot",h:alt(MAJ).concat(["ramp"]),b:"<p>All shots light for jackpots based on the hurry-up. Complete them all to light the ramp for a Super Jackpot worth 3x the jackpot, plus a KNIGHT letter. It needs a strong ramp shot that goes all the way around. After the super the mode returns to phase 1 with boosted scoring.</p>"+UNK("The rulesheet says \"all of the shots\" without listing them, so the major shots are shown dimmed.")},
 {t:"Add-A-Ball",ed:"pro",h:["castle_spin","castle"],b:"<p>Enough spins at the left spinner light Add-A-Ball at the left spinner lane. Shoot the lane again to collect it.</p>"},
 {t:"Add-A-Ball",ed:"premium",h:["left_drop","castle"],b:"<p>On the Premium and LE the left drop target lights Add-A-Ball instead of spinner spins.</p>"+UNK("The rulesheet does not say where it is collected on these models.")},
 {t:"Playing with Catapult Multiball",ed:"premium",h:["catapult","saucer"],b:"<p>On the Premium and LE you can build toward and start Triple Knights Challenge and Catapult Multiball during each other.</p>"}
]},
{g:"Multiballs",id:"catapult_mb",title:"Catapult Multiball",ed:"premium",steps:[
 {t:"Locking balls",h:["catapult","cat_tg"],b:"<p>Lock 3 balls in the catapult on the upper playfield. All 3 locks are lit for the first Catapult Multiball. After that, light each lock by hitting the standup next to the catapult.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>All major shots on the lower playfield are lit for 250K, plus 25K for most jackpots.</p>"+UNK("The rulesheet marks these values \"need to confirm\".")},
 {t:"Super Jackpot",h:["catapult","cat_tg"],b:"<p>The catapult collects a Super Jackpot: a base of 300K plus an unknown step per super, plus the total of jackpots since the last super. Each hit to the standup lights a lock light for +1x on the next super, up to 4x, and the multiplier resets when collected.</p>"+UNK("The per-super increase is shown as \"??\" in the rulesheet, and these values need confirming.")},
 {t:"Add-A-Ball",h:["left_drop"],b:"<p>Hit the left drop target to light Add-A-Ball, then collect it at the drop target too.</p>"}
]},
{g:"Multiballs",id:"knight",title:"KNIGHT Multiballs",steps:[
 {t:"Collecting KNIGHT",h:["knight_ins"],b:"<p>Earn letters by making enough shots in battles, completing WAR Hurry-Ups and collecting the Triple Knights Challenge Super Jackpot. By default K and N are lit at game start, so the first round takes four letters and later rounds take six.</p>"},
 {t:"Starting it",h:["castle","castle_ins"],b:"<p>With KNIGHT complete, shoot the left spinner lane. You can start it any time in single-ball play. Starting it during a timed mode ends both modes with no compensation.</p>"},
 {t:"KNIGHT Multiball",h:["castle"],b:"<p>In the style of the original Black Knight's multiball, with the main theme from its sequel. Playfield values multiply by the number of balls in play, up to 3x. Nothing else can be advanced except Super Modes, and their values are locked in once it starts.</p>"},
 {t:"The King's Ransom",h:["flail","left_orbit","right_orbit","war"],b:"<p>The second KNIGHT completion of a game starts The King's Ransom, with effects from Black Knight 2000. It is a one minute 3-ball multiball with unlimited ball save. It adds +5x bonus and lights extra ball at the saucer. Jackpots come from the flail, either orbit, or completing the WAR lanes. When time runs out, play goes back to normal with a new ball in the plunger lane.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"supers",title:"Super Modes and Super Jackpot",steps:[
 {t:"Lighting a Super Mode",h:[["castle_spin",0,"alt"],["left_spin",0,"alt"],"center_tg","center_ins"],b:"<p>Enough spinner spins light SUPER. Shoot the center target to start a random, untimed Super Mode: Lanes, Slings, Spinner, Orbits, Targets or Pops. Super Modes last until the ball drains.</p>"+UNK("The rulesheet says \"right spinner\" spins, but Stern's manuals list only the Castle and Left spinners, both on the left. Both are shown dimmed. The apron card says to shoot the 8K bash target to start Super features.")},
 {t:"Boosting them",h:["castle"],b:"<p>While any Super Mode runs, shoot the left lane to boost all active Super Modes. A Super Mode is maxed when its icon and playfield insert turn purple. During KNIGHT Multiball their values are locked in.</p>"+UNK("The rulesheet says \"left lane\". I read it as the left spinner lane; it may mean the left orbit.")},
 {t:"Cashing out",h:["magna","drops"],b:"<p>Use the Magna-Save to save a ball and you cash out all active Super Modes as a Super Jackpot. That ends them. During KNIGHT Multiball the playfield multiplier applies.</p>"}
]},
{g:"Other scoring",id:"uturns",title:"U-Turns",steps:[
 {t:"Making U-Turns",h:["left_orbit","right_orbit","war"],b:"<p>Once either orbit has been shot, the light in front of it turns red to show it will start a U-turn and send the ball past the top lanes. Keep making U-turns without other shots for more points. An adjustable number of U-turns lights extra ball at the saucer.</p>"}
]},
{g:"Other scoring",id:"war",title:"WAR Hurry-Up",steps:[
 {t:"Lighting it",h:["war","pops"],b:"<p>Complete the W, A and R top lanes to raise the bonus multiplier and light the three center shots for a hurry-up. Each starts at 3M, grows with pop bumper hits, and maxes at 25M. Later rounds need more lane completions.</p>"},
 {t:"Collecting it",h:NUM(CEN).concat(["ramp"]),b:"<p>The flail has to be hit before the ramp counts. On later attempts the shield must be hit once to collect its hurry-up; Mystery takes priority if lit. Collect all three, then shoot the center target to finish and score a KNIGHT letter.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Lighting Mystery",h:["lanes","flippers"],b:"<p>Complete RAGE at the inlanes and outlanes; the flippers cycle the lit letters. That lights Mystery at the saucer behind the shield.</p>"},
 {t:"Awards",h:["saucer","shield_ins"],b:"<ul><li>2M, 3M, 4M or 5M</li><li>Hold Bonus</li><li>Light Lock (one target hit of progress, or the lock itself if one hit away)</li><li>Spot WAR lanes</li><li>Add Bonus X (+1x)</li><li>Add KNIGHT letter</li><li>Light Super</li><li>Advance Save (one target set)</li><li>Light Magna-Save</li><li>Light Extra Ball (percentage based)</li></ul>"}
]},
{g:"Other scoring",id:"saves",title:"Ball save, Magna-Save and Last Chance",steps:[
 {t:"Ball save",h:["add_time","left_out"],b:"<p>Complete the two add time targets enough times to light ball save at the left outlane. The first ball save needs one completion; each one used raises the count needed.</p>"},
 {t:"Magna-Save",h:["magna","drops"],b:"<p>A magnet above the right outlane, as on the two earlier Black Knight machines. Press the action button as the ball is about to drain down the right outlane to save it. Complete the drop targets to relight it. A save also scores the Super Jackpot.</p>"},
 {t:"Last Chance",ed:"premium",h:[],b:"<p>Last Chance is listed as Premium and LE only. It is not documented yet: the rulesheet's section is empty.</p>"}
]},
{g:"Other scoring",id:"eb",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["saucer","shield_ins"],b:"<p>Extra ball lights at the saucer behind the shield by:</p><ul><li>Winning a battle</li><li>Making enough U-turns</li><li>Starting The King's Ransom</li><li>A percentage-based Mystery award</li></ul>"},
 {t:"End-of-ball bonus",h:["war"],b:"<p>Bonus adds base bonus (switch hits), 25K per Super Mode started and U-turns collected, all multiplied by the bonus multiplier. Each WAR lane completion raises the multiplier.</p>"}
]},
/* ====== WIZARD MODE ====== */
{g:"Wizard mode",id:"castle_wiz",title:"Black Castle",steps:[
 {t:"Starting it",h:["ramp","shield","saucer"],b:"<p>Win all five battles to qualify Black Castle, the sixth battle. Start it the same way as the others. It cannot be combined with other modes and has a 200 second timer.</p>"},
 {t:"Center shots, then the outer loops",h:NUM(CEN).concat(alt(OUT)),b:"<p>The three center shots start lit. Hit all three to light the four outer loop shots. Each outer loop relights the center shots, but the flail spins faster and the shield kicks the ball back harder. There is a ball saver at the start and again each time you make an outer shot.</p>"+UNK("The rulesheet does not name the four outer loop shots. I show the four major shots outside the center (left spinner lane, left orbit, light lock target, right orbit) dimmed; that is my guess.")},
 {t:"Finishing the Black Knight",h:["saucer"],b:"<p>With all four outer shots made, the saucer behind the shield lights. Shoot it to finish off the Black Knight for a bonus based on the time left, and start Rage Multiball.</p>"},
 {t:"Rage Multiball",h:["center_tg"],b:"<p>A 6-ball multiball. The center target is always lit for a frenzy bonus that starts at 1M per hit and rises by a set amount each hit.</p>"+UNK("The rulesheet says the increase is presumably tied to the time left when Black Castle was completed, and that this needs confirmation.")},
 {t:"After Black Castle",h:["wheel"],b:"<p>Black Castle is always the last battle in a cycle. Win or lose, you can then choose from the other five battles again.</p>"}
]}
];

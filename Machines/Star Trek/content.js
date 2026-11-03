/* ---------- playfield features (coordinates in the 640x1254 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_eject:{n:"Left eject (Mission Start)",c:1,s:[C(63,610,22)],a:[63,610],x:"The LOCK and MISSION START inserts both point at this spot, and the rulesheet calls it the far left eject hole. It also says left scoop, and I treat them as one. The hole itself is hidden by plastic on the Pro photo and wire ramps on the Premium photo."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[175,753],[155,673],[127,595],[97,483],[73,367],[47,233],[53,133],[80,45]],18)],a:[97,483],x:"The printed Orbit label and the spinner mark the lane. Its arrow and the spinner are clear. The path past the label is a guess, under clear ramps."},
 spinner:{n:"Left spinner",c:1,s:[R(136,640,40,62)],a:[155,673],x:"The plate with the sunburst and hinge wire, in the left orbit lane. The rulesheet calls this shot the left spinner/orbit."},
 warp:{n:"Warp ramp",c:1,s:[B([[175,467],[123,400],[103,313],[107,200],[147,93],[200,53]],24)],a:[123,400],x:"The clear ramp with WARP printed on it. Printed chevrons point at its metal entrance. On the Premium photo an asteroid sits beside the entrance. The top of the path is a guess."},
 left_ramp:{n:"Left ramp",c:0,s:[B([[237,385],[230,314],[213,233],[203,153]],26)],a:[230,314],x:"The ramp printed Alpha Quadrant, left of the Vengeance. Its arrow points at the metal entrance, and the rulesheet's shot order fits. The ramp is not labelled Left Ramp, and its upper path is hidden."},
 vengeance:{n:"Vengeance shot",c:0,s:[B([[325,377],[325,335]],28)],a:[325,356],x:"The lane behind the Vengeance standup, leading under the front of the ship. The arrow and the center LOCK insert point at it. Where the lane ends under the toy is a guess."},
 vengeance_toy:{n:"Vengeance ship",c:1,s:[E(322,250,95,90)],a:[322,250],x:"The large dark ship toy in the center. The apron card says its targets damage the enemy ship, and the rulesheet treats the Vengeance as a shot and an enemy to defeat."},
 standup:{n:"Vengeance standup",c:1,s:[R(305,378,40,18)],a:[325,387],x:"The black rectangle right in front of the Vengeance lane. The rulesheet and apron card call the target here a drop target."},
 magnet:{n:"Vengeance magnet",c:0,s:[C(322,262,28)],a:[322,262],x:"Under the Vengeance ship toy, which hides it, so the exact spot is a guess."},
 pops:{n:"Pop bumpers",c:1,s:[C(423,325,24),C(494,234,22)],a:[423,325],x:"The two round blue domes right of the Vengeance. The upper one is under the clear right ramp, and on the Premium photo the asteroid hides it."},
 black_hole:{n:"Black Hole target",c:0,s:[E(389,392,30,22)],a:[389,392],x:"The red block its purple arrow points at, right of the Vengeance, which fits the rulesheet. A blue glowing dome sits behind it, and it could be part of this feature."},
 black_hole_arrow:{n:"Black Hole purple arrow",c:1,s:[E(377,443,22,36)],a:[377,443],x:"The apron card names a Black Hole Purple Arrow, and this is the only purple arrow of its shape."},
 right_ramp:{n:"Right ramp",c:1,s:[B([[413,569],[442,500],[459,447],[477,367],[493,280],[513,187],[533,107]],26)],a:[459,447],x:"The ramp printed Beta Quadrant, with its metal entrance above the arrow. The rulesheet's shot order fits. Its upper path is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[497,581],[520,523],[547,433],[567,300],[573,167],[540,53]],18)],a:[520,523],x:"The arrow and the printed Orbit label are clear. The path past the label is a guess, and I could not see where it comes out."},
 top_lanes:{n:"Top lanes",c:1,s:[B([[365,125],[365,195]],18),B([[413,125],[413,195]],18),B([[463,125],[463,195]],18)],a:[413,160],x:"Three lanes printed BEAM, ME and UP. The rulesheet says top (bonus X) lanes and does not give the words."},
 klingon_t:{n:"Klingon standups",c:1,s:[C(219,567,21),C(221,601,21),C(222,636,21)],a:[221,601],x:"Three green round targets beside LIGHT LOCK. The apron card calls them the 3 upper left Klingon targets, and the rulesheet the 3 green standups."},
 torpedo_t:{n:"Torpedo standups",c:1,s:[C(457,777,22),C(465,811,22),C(472,850,22)],a:[465,811],x:"Three orange round targets by INCREASE POWER AND WEAPONS. The apron card calls them the 3 lower right targets, adding torpedoes, phaser banks and power. Reading them as the rulesheet's torpedo standups is mine."},
 shields_t:{n:"Shields targets",c:1,s:[C(93,799,23),C(89,835,23)],a:[91,817],x:"Two teal targets by the SHIELDS label. They come from the apron card. The rulesheet does not mention them."},
 red_matter:{n:"Red Matter targets",c:0,s:[C(213,437,18),C(285,439,18),C(369,493,18),C(387,540,18),C(472,550,18),C(130,750,18)],a:[285,439],x:"The six round red ones. The apron card says there are 6 Red Matter targets, and these are the only six of that look, but nothing labels them."},
 left_lock:{n:"Left LOCK insert",c:1,s:[E(69,667,16,36)],a:[69,667]},
 center_lock:{n:"Center LOCK insert",c:1,s:[E(335,586,16,34)],a:[335,586]},
 mission_start:{n:"Mission Start insert",c:1,s:[E(87,741,20,36)],a:[87,741]},
 extra_ball:{n:"Extra Ball insert",c:1,s:[E(339,643,16,32)],a:[339,643]},
 special:{n:"Special insert",c:1,s:[C(399,745,17)],a:[399,745]},
 torpedoes:{n:"Torpedo triangles",c:1,s:[B([[287,620],[287,905]],50)],a:[287,760],x:"The rulesheet's line of yellow triangles."},
 away_team:{n:"Away Team rollover",c:0,s:[C(494,707,16)],a:[494,707],x:"The AWAY TEAM insert points at this ring under the upper flipper, which fits the rulesheet. Reading the ring as the rollover is mine."},
 away_ins:{n:"Away Team insert",c:1,s:[E(439,721,36,14)],a:[439,721]},
 upper_flip:{n:"Upper flipper",c:1,s:[B([[537,633],[504,717]],18)],a:[520,675]},
 chair:{n:"The Captain's Chair insert",c:1,s:[C(287,1147,33)],a:[287,1147]},
 chart:{n:"Three missions card",c:1,s:[R(325,867,124,64)],a:[387,899],x:"The printed card says completing 3 missions in any line advances to The Captain's Chair."},
 m_pd:{n:"Prime Directive insert",c:1,s:[C(287,957,31)],a:[287,957]},
 m_kb:{n:"Klingon Battle insert",c:1,s:[C(251,1019,31)],a:[251,1019]},
 m_sj:{n:"Space Jump insert",c:1,s:[C(322,1019,31)],a:[322,1019]},
 m_dd:{n:"Destroy the Drill insert",c:1,s:[C(213,1083,31)],a:[213,1083]},
 m_ne:{n:"Nero insert",c:1,s:[C(287,1083,31)],a:[287,1083]},
 m_st:{n:"Save the Enterprise insert",c:1,s:[C(356,1083,31)],a:[356,1083]},
 plunger:{n:"Plunger lane",c:0,s:[B([[583,1100],[583,700]],14)],a:[583,900],x:"Placed from the photo. The rulesheet does not describe it."},
 flippers:{n:"Lower flippers",c:1,s:[B([[171,1174],[251,1217]],18),B([[404,1174],[323,1217]],18)],a:[210,1196]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var ALL=["left_eject","left_orbit","warp","left_ramp","vengeance","right_ramp","right_orbit"];
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var MODES=["m_pd","m_kb","m_sj","m_dd","m_ne","m_st"];
var DROPNOTE="The rulesheet says Vengeance drop target. The target in front of the Vengeance lane is a standup, so this is my reading of which target it means.";
var ALLNOTE="The rulesheet does not list \"all shots\". This marks the seven in its Klingon Battle II pattern.";
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:MODES.concat([["chair",0,"alt"]]),b:"<p>Six colored hexagon modes each have levels. Completing them all at a level unlocks a wizard mode: Kobayashi Maru, then Enterprise Amok, then Five Year Mission.</p>"},
 {t:"The seven main shots",h:NUM(ALL),b:"<p>From left to right: left eject, left orbit, warp ramp, left ramp, Vengeance, right ramp, right orbit.</p>"+UNK("The rulesheet has no layout text. This order comes from its Klingon Battle II pattern, which spreads out from the left ramp. The arrows and printed Orbit labels fit it, but clear ramps hide most of the paths.")},
 {t:"Left eject",h:["left_eject","left_lock","mission_start"],b:"<p>The far left eject hole starts modes when Mission Start is lit, and it holds a lock when Lock is lit.</p>"+UNK("The rulesheet says both left eject and left scoop. I treat them as one shot.")},
 {t:"Left orbit and spinner",h:["left_orbit","spinner"],b:"<p>The rulesheet calls this the left spinner/orbit. The spinner is worth 75K per spin in Destroy the Drill's Galactic Away Team, and Super Spinner is a Captain's Chair award.</p>"},
 {t:"The three ramps",h:["warp","left_ramp","right_ramp"],b:"<p>The warp ramp, left ramp and right ramp. The warp ramp has its own awards.</p>"+UNK("I read the ramp printed Alpha Quadrant as the left ramp and Beta Quadrant as the right ramp. The rulesheet's shot order supports this, and printed chevrons point at the warp entrance.")},
 {t:"Vengeance and Black Hole",h:["vengeance","standup","black_hole","black_hole_arrow",["vengeance_toy",0,"alt"],["magnet",0,"alt"],["pops",0,"alt"]],b:"<p>Vengeance is the center shot, with a standup right in front of its lane. A magnet sits under the ship toy. The Black Hole shot and the two pop bumpers are to its right.</p><p>The apron card says to shoot the central drop target and nearby standup targets to damage the enemy ship, and warns that it fights back.</p>"+UNK("The apron card and rulesheet call the center target a drop target, but it is a standup.")},
 {t:"Away Team",h:["away_team","away_ins","upper_flip"],b:"<p>The Away Team rollover sits under the upper right flipper. It starts modes, and it upgrades a Level I mode to Galactic Away Team.</p>"},
 {t:"Top lanes",h:["top_lanes"],b:"<p>Three top lanes, for bonus X. The flipper buttons rotate them.</p>"},
 {t:"Targets",h:["klingon_t","torpedo_t","red_matter",["shields_t",0,"alt"]],b:"<p>Three green Klingon standups light locks. Three torpedo standups add torpedoes. Red Matter targets light the Black Hole.</p><p>The apron card adds that the 2 lower left targets increase shields. The rulesheet does not cover shields.</p>"},
 {t:"Plunger and flippers",h:["flippers","upper_flip",["plunger",0,"alt"]],b:"<p>Two lower flippers and one upper right flipper.</p>"+UNK("The rulesheet does not describe a skill shot.")}
]},
{g:"Layout and basics",id:"strategy",title:"Basic strategy",steps:[
 {t:"Shoot the color",h:ALL,b:"<p>Shoot the shots matching the mode's color to earn points and advance. Combos double the points the shot would have earned.</p>"+UNK(ALLNOTE)},
 {t:"Start a mode",h:["left_eject","away_team",["mission_start",0,"alt"],["away_ins",0,"alt"]],b:"<p>When a mode ends, start another or restart it at Mission Start (far left eject) or Away Team (under the upper flipper), and choose a mode.</p><p>The apron card says the flipper buttons change missions and the fire button launches them, at lit blue arrows.</p>"},
 {t:"Go to Galactic",h:["away_team"],b:"<p>Once you hit one mode shot, shooting Away Team adds 20 seconds and changes the objective to specific shots. The rulesheet says this is usually a good idea, as the shots become much more valuable.</p>"},
 {t:"Stack multiball",h:["left_eject","vengeance"],b:"<p>Hold off starting a multiball until just after you have started a mode, so the two stack.</p><p>If the third lock is lit at the left eject when Mission Start is also lit, you can choose a mode and immediately start Klingon Multiball.</p>"}
]},
{g:"Layout and basics",id:"levels",title:"Mode levels",steps:[
 {t:"Level I",h:MODES,b:"<p>The starting modes run on a timer. When time runs out, all shots light for one final shot, which completes the mode. Draining during the final shot sequence also completes it.</p><p>One or two shots are lit for 4x the final shot value. A combo can double that, but the rulesheet says it is hard, as the shot before must come just before the timer ends.</p>"},
 {t:"Galactic Away Team",h:["away_team"],b:"<p>First shoot any lit mode shot, then the Away Team rollover. The Level I timer continues with 20 seconds added. You can start it after any number of mode shots, as long as the timer has not run out.</p><p>Draining ends the mode with your current medal status. It is only available in Level I modes.</p>"},
 {t:"Level II",h:MODES,b:"<p>Starts only after you complete that mode's Level I or Galactic. Regular-color arrows give mode points and advance toward bronze. Multi-color arrows give double points and count toward silver and gold.</p><p>It ends and is marked complete after a set number of shots. If the ball drains or the timer runs out, it exits and can be restarted later with progress saved.</p>"},
 {t:"Level III",h:MODES,b:"<p>Starts only after you complete that mode's Level II. It works like Level II with better scoring. Completing it lights one shot for double scoring for the rest of the game.</p>"}
]},
/* ====== MAIN MODES ====== */
{g:"Main modes",id:"prime-directive",title:"Prime Directive",steps:[
 {t:"Level I",h:["m_pd"].concat(ALL),b:"<p>30 seconds. All shots light blue and unlight when hit. Unlighting five shots relights all of them. After a short timer, shots also relight if no mode shot has been made.</p>"+UNK(ALLNOTE)},
 {t:"4x final shot",h:["right_ramp"],b:"<p>The right ramp.</p>"},
 {t:"Galactic Away Team",h:["top_lanes"],b:"<p>The top lanes are lit. Rolling over a lane scores as a shot and unlights it. Lanes relight over time, or when all 3 are completed. The flipper buttons still rotate them.</p>"},
 {t:"Level II",h:ALL,b:"<p>30 seconds. All shots light blue, with one lit for 2x. A shot unlights when made. Making the 2x shot moves the 2x to another shot. Complete all shots to complete the mode.</p>"},
 {t:"Level III",h:ALL,b:"<p>The rulesheet says identical to Level II, with a question mark.</p>"+UNK("So this is unconfirmed in the rulesheet.")},
 {t:"Level III reward",h:["left_eject"],b:"<p>2X on the left scoop for the rest of the game.</p>"}
]},
{g:"Main modes",id:"space-jump",title:"Space Jump",steps:[
 {t:"Level I",h:["m_sj","left_orbit","right_orbit","left_ramp","right_ramp"],b:"<p>30 seconds. Both orbits, the left ramp and the right ramp light yellow. A lit arrow unlights that shot and one other, but always relights a combo. All shots relight after a small timer if no shots are made.</p>"},
 {t:"4x final shot",h:["vengeance"],b:"<p>The Vengeance.</p>"},
 {t:"Galactic Away Team",h:["standup"],b:"<p>One target: the Vengeance drop target. Hitting it advances one medal rank if you are not at gold, and ends the mode. It awards 4x the regular Galactic value and counts as 4 shots for medals.</p>"+UNK(DROPNOTE)},
 {t:"Level II",h:["left_orbit","right_orbit","left_ramp","right_ramp"],b:"<p>30 seconds. Like Level I, but after the first shot, one lit shot is worth 2x, and shots do not relight with time. Make 6 shots to complete the mode.</p>"},
 {t:"Level III: shots 1 to 4",h:[["left_ramp",1],["right_ramp",1],["warp",2],["right_orbit",2],["right_ramp",3],["warp",4],["left_orbit",4]],b:"<p>30 seconds. Complete a sequence of 8 shots. The warp ramp is 2x when lit.</p><ol><li>Left ramp or right ramp</li><li>Warp ramp (2x) or right orbit</li><li>Right ramp</li><li>Warp ramp (2x) or left orbit</li></ol>"},
 {t:"Level III: shots 5 to 8",h:[["left_ramp",5],["warp",6],["vengeance",6],["right_ramp",7],["warp",8],["right_orbit",8]],b:"<ol start=\"5\"><li>Left ramp</li><li>Warp ramp (2x) or Vengeance</li><li>Left ramp or right ramp</li><li>Warp ramp (2x) or right orbit</li></ol>"},
 {t:"Level III reward",h:["right_orbit"],b:"<p>2X on the right orbit for the rest of the game.</p>"}
]},
{g:"Main modes",id:"save-the-enterprise",title:"Save the Enterprise",steps:[
 {t:"Level I",h:["m_st","left_eject","left_orbit","left_ramp","vengeance","right_ramp","right_orbit"],b:"<p>30 seconds. Three random adjacent shots light, never the warp ramp. Shoot any one to move to three new random adjacent shots. The other shots unlight.</p>"},
 {t:"4x final shot",h:["left_orbit","right_orbit"],b:"<p>Both orbits.</p>"},
 {t:"Galactic Away Team",h:["warp","left_orbit"],b:"<p>The warp ramp and left orbit.</p>"},
 {t:"Level II",h:ALL,b:"<p>No time limit. 2 random shots light, and one is 2x. They re-randomize after every shot. Complete 6 shots to finish.</p>"},
 {t:"Level III",h:["warp"].concat(alt(["left_eject","left_orbit","left_ramp","vengeance","right_ramp","right_orbit"])),b:"<p>No time limit. Only 1 random shot lights. Hitting it lights a different random shot, and lights the warp ramp for a 2x shot. The warp stays lit until hit. Once hit, another mode shot must be made to relight it. Complete 8 shots to finish.</p>"},
 {t:"Level III reward",h:["right_ramp"],b:"<p>2X on the right ramp for the rest of the game.</p>"}
]},
{g:"Main modes",id:"nero",title:"Nero",steps:[
 {t:"Level I",h:["m_ne","left_orbit","left_ramp","vengeance","right_ramp","right_orbit"],b:"<p>30 seconds. Five shots light purple, all except the scoop and warp ramp. A lit shot unlights when hit. All five relight when you unlight them all, or after a short timer.</p>"},
 {t:"4x final shot",h:["black_hole"],b:"<p>The Black Hole target.</p>"},
 {t:"Galactic Away Team",h:["red_matter"],b:"<p>The Red Matter standups. They unlight when hit, and completing all of them relights them.</p>"},
 {t:"Level II: attackers",h:[["left_eject",1],["left_orbit",1],["left_ramp",2],["vengeance",2],["right_ramp",3],["right_orbit",3]],b:"<p>No time limit. Defeat 10 attackers to complete it. Attackers relight after a short time, up to 4 times at each pair of shots. Defeating three before any relight awards extra points.</p><ol><li>Left Romulan: left scoop (2x), left orbit</li><li>Center Romulan: left ramp (2x), Vengeance</li><li>Right Romulan: right ramp (2x), right orbit</li></ol>"},
 {t:"Level III",h:["left_eject","right_orbit"].concat(alt(["left_orbit","warp","left_ramp","vengeance","right_ramp"])),b:"<p>55 seconds. The left eject and right orbit start lit. The left flipper button moves the left lit shot one to the right on each flip, looping back to the far left. The right flipper button moves the right lit shot one to the left, looping back to the far right.</p><p>If both land on one shot, it is worth 2x. Complete 5 shots to finish.</p>"},
 {t:"Level III reward",h:["left_orbit"],b:"<p>2X on the left orbit for the rest of the game.</p>"}
]},
{g:"Main modes",id:"destroy-the-drill",title:"Destroy the Drill",steps:[
 {t:"Level I",h:["m_dd","left_eject","left_orbit","warp","left_ramp"].concat(alt(["vengeance","right_ramp","right_orbit"])),b:"<p>30 seconds. The leftmost 4 shots start lit. More light from left to right as time passes. A lit shot unlights the rightmost lit shot.</p><p>An invisible bonus builds with each shot, and is added to the final shot value when time runs out.</p>"},
 {t:"4x final shot",h:["left_eject"],b:"<p>The left eject.</p>"},
 {t:"Galactic Away Team",h:["left_eject","left_orbit","spinner"],b:"<p>The left eject and left spinner/orbit are lit. The spinner is worth 75K per spin. These shots also build the invisible bonus.</p>"},
 {t:"Level II",h:ALL,b:"<p>No time limit. Shots light one at a time from left to right until all are lit, then unlight left to right until only the right orbit remains. Then it runs the same way from right to left, and repeats.</p><p>The most recently lit shot is worth 2x. A made shot stays unlit for the rest of the mode. Complete 6 different shots of the 7 to finish.</p>"},
 {t:"Level III",h:["left_eject","vengeance","right_orbit"],b:"<p>55 seconds. The left eject, Vengeance and right orbit are lit, plus a roving shot that starts at the Vengeance and moves left and right with the crosshairs on the display.</p><p>When the roving shot overlaps another lit shot, that shot is worth 2x. Complete 7 shots to finish.</p>"},
 {t:"Level III reward",h:["warp"],b:"<p>2X on the warp ramp for the rest of the game.</p>"}
]},
{g:"Main modes",id:"klingon-battle",title:"Klingon Battle",steps:[
 {t:"Level I",h:["m_kb","left_orbit","right_orbit","warp","left_ramp","right_ramp"],b:"<p>30 seconds. Both orbits and all 3 ramps are lit. A made shot unlights until another shot is made. The final shot gains an extra 25K for each shot made in the mode.</p>"},
 {t:"4x final shot",h:["left_ramp"],b:"<p>The left ramp.</p>"},
 {t:"Galactic Away Team",h:["left_ramp","right_ramp"],b:"<p>The left and right ramps. You must alternate after the first.</p>"},
 {t:"Level II: the cycle",h:[["left_ramp",1],["warp",2],["vengeance",2],["left_orbit",3],["right_ramp",3],["left_eject",4],["right_orbit",4]],b:"<p>No time limit. Lit shots spread out from the left ramp in about 8 seconds per full cycle:</p><ol><li>Left ramp only, for 2x</li><li>Warp ramp and Vengeance light, 2x moves to the warp ramp</li><li>Left orbit and right ramp light, 2x moves to the right ramp</li><li>Left eject and right orbit light, so all are lit, and 2x moves to the right orbit</li></ol><p>Any lit shot restarts the cycle. Repeating the left ramp gives perfect medal progress, but gives up points as it avoids 2x combos.</p>"},
 {t:"Level III",h:ALL,b:"<p>45 seconds. A random shot is lit for 2x. More light over time, up to 3 at once. Shots unlight when hit. Making the 2x shot moves it to another lit shot, or to a random shot if it was the only one. Make 8 shots to finish.</p>"},
 {t:"Level III reward",h:["left_ramp"],b:"<p>2X on the left ramp for the rest of the game.</p>"}
]},
/* ====== SCORING ====== */
{g:"Scoring",id:"mode-scoring",title:"Mode scoring",steps:[
 {t:"Shot value",h:ALL,b:"<p>Each mode shot is worth 100K x level + shot bonus + streak bonus + 30K x shots made in the current mode.</p><p>Both bonuses start at 0. Each shot adds 5K to the shot bonus and 10K to the streak bonus. On the first attempt at a Level II or III mode, the increase is multiplied by the level.</p>"},
 {t:"What carries over",h:ALL,b:"<p>The shot bonus carries over for the whole game. The streak bonus resets at the end of each ball.</p><p>The rulesheet's example, in a new game with a drain after shot 2: 100K, then 145K, then 180K.</p>"},
 {t:"Galactic scoring",h:["away_team"],b:"<p>Galactic shots collect the shot and streak bonuses but do not build them. The shot under the flipper counts as a regular Level I shot.</p><p>The first shot after is that value + 30K + the mode shot bonus x shots made before Galactic. Each later shot is worth 75K more. The final shot scores as a regular Level I shot.</p>"},
 {t:"Galactic mode shot bonus",h:MODES,b:"<ul><li>Prime Directive: 125K</li><li>Space Jump: 125K</li><li>Klingon Battle: 150K</li><li>Destroy the Drill: 200K</li><li>Nero: 225K</li><li>Save the Enterprise: 350K</li></ul>"},
 {t:"Special cases",h:["m_kb","m_dd","m_sj"],b:"<ul><li>Klingon Battle I adds 25K x shots made to the final shot.</li><li>Destroy the Drill I adds an invisible bonus to the final shot. Each shot adds 20K x (unlit shots + 3).</li><li>Space Jump Galactic awards 4x the regular value and ends the mode at once.</li></ul>"}
]},
{g:"Scoring",id:"medals",title:"Medals",steps:[
 {t:"Medal values",h:MODES,b:"<p>Medals accrue and are never replaced, so a silver leaves you holding a bronze too.</p><ul><li>Bronze: 250K, +125K for each later one</li><li>Silver: 450K, +175K for each later one</li><li>Gold: 1000K, +275K for each later one</li></ul><p>Comboing into the shot that earns the medal doubles it, and double scoring doubles it again.</p>"},
 {t:"Level I",h:MODES,b:"<p>Every 3rd shot awards the next medal: 3 for bronze, 6 for silver, 9 for gold. The shot that starts Galactic counts as one, and the count carries into Galactic.</p>"},
 {t:"Space Jump Galactic",h:["standup"],b:"<p>Its one shot counts as 4 and ends the mode. If those 4 would award several medals, you only get the higher one.</p><ul><li>Start on the 2nd shot: silver, skipping bronze.</li><li>Start on the 4th shot: silver, and gold becomes impossible.</li><li>Start on the 5th shot: gold, skipping silver.</li></ul>"},
 {t:"Levels II and III",h:MODES,b:"<p>Level II: 3 shots award bronze. Silver and gold need 2x shots: 3 for silver, 5 for gold.</p><p>Level III: only 2x shots count. Prime Directive III and Klingon Battle III need 2, 3 and 5. The others give one medal per 2x shot, up to gold on the 3rd.</p><p>Lower-value shots may lock you out of better medals.</p>"},
 {t:"Medal bonus",h:["vengeance"],b:"<p>Starting a wizard mode awards a medal bonus for all medals collected so far, shown in the Wizard modes sections. The rulesheet says 2x scoring can double it.</p><p>The Double Super Jackpot in Klingon Multiball awards a single gold medal.</p>"}
]},
{g:"Scoring",id:"captains-chair",title:"Captain's Chair",steps:[
 {t:"Three in a line",h:["chart","chair"].concat(MODES),b:"<p>Completing three same-level modes in a line enables the Captain's Chair. It stays live across balls until completed.</p><p>You get it once per rack, but finishing two at once gives both awards.</p>"},
 {t:"Awards",h:["m_kb","m_dd","m_pd","m_sj","m_st","m_ne",["pops",0,"alt"]],b:"<ul><li>Left side: Super Pops</li><li>Right side: Super Ramps</li><li>Bottom side: Super Spinner</li></ul><p>The pop bumpers are the two blue domes right of the Vengeance.</p>"},
 {t:"Permanent 2X shots",h:[["left_eject",1],["right_orbit",2],["right_ramp",3],["left_orbit",4],["warp",5],["left_ramp",6]],b:"<p>Completing a Level III mode gives a 2X shot for the rest of the game. Its combo arrow stays lit, effectively replacing 2x combo scoring.</p><ol><li>Prime Directive: left scoop</li><li>Space Jump: right orbit</li><li>Save the Enterprise: right ramp</li><li>Nero: left orbit</li><li>Destroy the Drill: warp ramp</li><li>Klingon Battle: left ramp</li></ol>"}
]},
{g:"Scoring",id:"warp-ramp",title:"Warp ramp awards",steps:[
 {t:"Warp levels",h:["warp"],b:"<ul><li>Warp 4, 4 shots: Extra Ball</li><li>Warp 9.1, 10 shots: 2X scoring for 60 seconds</li><li>Warp 9.9, 18 shots: 2X scoring for 60 seconds, and a 2nd ball into single ball play</li></ul>"},
 {t:"After Warp 9.9",h:["warp","extra_ball"],b:"<p>The level resets. More extra balls cannot be earned this way, but double scoring and the added ball can.</p><p>On default settings the extra ball is percentage-based, but the requirement will not drop below Warp 3.</p>"}
]},
{g:"Scoring",id:"other-awards",title:"Black Hole and awards",steps:[
 {t:"Add-a-ball",h:["black_hole","red_matter",["black_hole_arrow",0,"alt"]],b:"<p>The Black Hole shot awards add-a-ball once during multiball when lit. Light it by shooting the Red Matter targets.</p>"},
 {t:"Mystery",h:["black_hole_arrow","red_matter"],b:"<p>From the apron card, not the rulesheet: complete the 6 Red Matter targets to light the Black Hole purple arrow for a Mystery Award.</p>"},
 {t:"Extra Ball and Special",h:["extra_ball","special","warp","black_hole"],b:"<p>From the apron card, not the rulesheet: light Extra Ball and Special by shooting the warp ramp, completing missions and the Black Hole Mystery Award.</p>"},
 {t:"Shields",h:["shields_t"],b:"<p>From the apron card, not the rulesheet: the 2 lower left targets increase shields.</p>"+UNK("Neither source says what shields do.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"klingon-multiball",title:"Klingon Multiball",steps:[
 {t:"Light locks",h:["klingon_t",["left_lock",0,"alt"],["center_lock",0,"alt"]],b:"<p>Complete the 3 green standups to light locks at the Vengeance and left scoop.</p>"},
 {t:"First multiball",h:["klingon_t","vengeance","left_eject"],b:"<p>Each completion lights 2 locks, one at each shot, and lit locks can stack, up to 6. The standups are disabled when all 6 are lit, or when 2 balls are locked and both shots have a lock lit.</p>"},
 {t:"Lock 3 balls",h:["vengeance","left_eject"],b:"<p>Locking the 3rd ball starts the multiball, and remaining locks do not carry over.</p><p>After the first one, each completion lights only 1 lock, and the standups are disabled when both shots have a lock lit.</p>"},
 {t:"Jackpots",h:ALL,b:"<p>All shots are lit for jackpots, starting at 200K with a 175K increment.</p><ul><li>7th jackpot: Super Jackpot, 6.25 Million</li><li>14th jackpot: Super Jackpot, 10 Million</li><li>Then a traveling Double Jackpot, 4 Million</li></ul>"+UNK(ALLNOTE)},
 {t:"Double Super Jackpot",h:["warp"],b:"<p>Finally, the warp ramp lights for a Double Super Jackpot worth 20 Million, which also awards a gold medal. Then the multiball repeats.</p>"}
]},
{g:"Multiballs",id:"vengeance",title:"Vengeance modes",steps:[
 {t:"Light it",h:["vengeance","torpedo_t",["torpedoes",0,"alt"]],b:"<p>Hit Vengeance a number of times, or use torpedoes, to light a Vengeance mode.</p>"+UNK("The rulesheet says \"X number of times\" and gives no number.")},
 {t:"Torpedoes",h:["torpedo_t","torpedoes"],b:"<p>Completing the torpedo standups adds 3 torpedoes, shown by the line of yellow triangles. The fire button uses one to score a Vengeance hit. Torpedoes do not award mode shots.</p>"},
 {t:"1. Vengeance Multiball",h:["vengeance","magnet"],b:"<p>Hit the magnet-held ball at the start to add a ball, going from 2-ball to 3-ball play, and to extend ball save.</p><p>Shots to Vengeance and lit white shots do damage and award points. Defeating Vengeance awards 5M after 10 shots and then a Vengeance shot. Torpedoes can complete shots, except the final one.</p>"+UNK("The magnet is under the Vengeance ship toy, which hides it.")},
 {t:"2. Vengeance Scoring",h:["vengeance"],b:"<p>A hurry-up mode. 5 shots destroy Vengeance, which awards an extra ball.</p>"},
 {t:"3. Vengeance Battle",h:["vengeance","standup"],b:"<p>Shoot the Vengeance 5 times to raise the drop target. Shooting it down gives very limited time to shoot the Vengeance for 10% of total score, or 10M if greater. If time runs out, the target re-raises and you must hit it again.</p><p>A combo makes it 20%, and with double scoring it can reach 40%.</p>"+UNK(DROPNOTE)}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"kobayashi-maru",title:"Kobayashi Maru",steps:[
 {t:"Start",h:["vengeance"],b:"<p>After completing all Level I modes, the Vengeance shot lights white. Starting awards medal bonuses for all medals so far:</p><ul><li>Single medal: 1M / 2M / 3.5M (bronze / silver / gold)</li><li>Full set: 10M / 20M / 35M</li></ul>"},
 {t:"Play",h:["left_eject","left_orbit","left_ramp","vengeance","right_ramp","right_orbit"],b:"<p>A 2-ball multiball, with all shots lit except the warp ramp. Each takes 2 hits to clear. The first scores nominal points, 500K to start. The second scores based on your performance in that level 1 mode, shown by color. Shots max at 7.5M.</p>"},
 {t:"Finish",h:["left_eject","left_orbit","left_ramp","vengeance","right_ramp","right_orbit"],b:"<p>Clearing them all lets you continue in single ball play, even with 2 or more balls still in play.</p>"}
]},
{g:"Wizard modes",id:"enterprise-amok",title:"Enterprise Amok",steps:[
 {t:"Start",h:["vengeance"],b:"<p>After completing all Level II modes, the Vengeance shot lights white. Starting awards medal bonuses:</p><ul><li>Single medal: 1.5M / 3M / 5M (bronze / silver / gold)</li><li>Full set: 15M / 30M / 50M</li></ul>"},
 {t:"Switch rounds",h:ALL,b:"<p>A 2-ball multiball with all shots lit and a switch hit counter on the display. Reaching the count adds a ball, except in the 6th and final round, and lights all shots white for a final shot.</p><p>The next shot then stays unlit for future final shots, and starts a new, higher requirement.</p>"+UNK(ALLNOTE)},
 {t:"Super Jackpot",h:["vengeance"],b:"<p>After the 6th round, the Vengeance is lit for a Super Jackpot. Making it lets you continue in single ball play, with more than one ball in play.</p>"}
]},
{g:"Wizard modes",id:"five-year-mission",title:"Five Year Mission",steps:[
 {t:"Start",h:["vengeance"],b:"<p>After completing all Level III modes, the Vengeance shot lights white. Starting awards medal bonuses:</p><ul><li>Single medal: 2.5M / 4.5M / 7.5M (bronze / silver / gold)</li><li>Full set: 25M / 45M / 75M</li></ul>"},
 {t:"Play",h:ALL,b:"<p>It begins as a 4-ball multiball with all shots lit.</p>"+UNK("The rulesheet stops mid-sentence here, so the rest of the mode is not documented.")}
]}
];

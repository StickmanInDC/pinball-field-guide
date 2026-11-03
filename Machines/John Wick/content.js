/* ---------- playfield features (coordinates in the 640x1136 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_eject:{n:"Left eject (administration)",c:0,s:[B([[112,628],[96,600],[82,574],[72,548]],15)],a:[96,600],x:"A small \"Administration\" label sits at the mouth of this lane, and an arrow with an Enemy insert points into it. The rulesheet calls the left eject \"the administration shot\". Where the eject hole sits past the label is my guess."},
 left_orbit:{n:"Left orbit (spinner)",c:0,s:[B([[142,545],[124,492],[98,452],[72,402],[60,322],[62,232],[80,150],[118,96]],17)],a:[124,492],x:"The arrow and Enemy insert just right of the left eject. The rulesheet puts a spinner in the left orbit and lights Car Chase Multiball here. I could not see the spinner, and the path up the left side is a guess."},
 left_ramp:{n:"Left ramp (Akira)",c:1,s:[B([[208,562],[188,486],[170,425],[160,360],[150,300],[128,258],[100,250]],20)],a:[188,486],x:"The arrow beside the Akira diamond, up the steel ramp with the Osaka Continental crest and portrait. The rulesheet uses Akira at the left ramp. The ramp is clear; its exact path is my reading."},
 red_circle:{n:"Red Circle (Dance Club lane)",c:1,s:[B([[250,442],[238,392],[228,342],[228,288]],18)],a:[238,392],x:"The arrow and Dance Club insert lead up a red lane to the Red Circle bumper."},
 rc_bumper:{n:"Red Circle bumper",c:1,s:[C(234,194,26)],a:[234,194],x:"The big red bumper at the top of the Dance Club lane. The rulesheet counts each Red Circle bumper or target hit as 4 switches for enemy spawns."},
 rc_target:{n:"Red Circle entrance target",c:0,s:[R(210,333,38,17)],a:[229,341],x:"A red bar across the Dance Club lane. Stern lists a drop target entrance to the Red Circle Club on the Premium; I take this to be it. The rulesheet only says \"targets surrounding\" the bumper, so what else counts is not shown."},
 level_ins:{n:"Dance floor level inserts",c:1,s:[E(200,248,14,40)],a:[200,248],x:"The stack under \"Level Maxed\" beside the bumper. The rulesheet raises the dance floor level for Excommunicado Multiball."},
 center_ramp:{n:"Center ramp (Charon)",c:1,s:[B([[307,493],[296,432],[289,372],[285,300],[282,232],[288,150],[318,92]],20)],a:[296,432],x:"The arrow beside the Charon diamond, up the steel lane with the purple Charon portrait. The rulesheet uses Charon at the center ramp and puts the Deconsecrated locks here. The ramp is clear; past the lane the path is my reading.",v:{premium:{x:"The arrow beside the Charon diamond, up the steel lane with the purple Charon portrait. The rulesheet uses Charon at the center ramp and puts the physical Deconsecrated locks here on the Premium and LE. Past the lane the path is my reading."}}},
 car:{n:"Car bash toy",c:1,s:[E(343,283,24,48)],a:[343,283],x:"Stern's muscle car bash toy in the center. Car hits light Car Chase Multiball and change which one is lit.",v:{premium:{x:"Stern's muscle car bash toy with a motorized drifting effect. On the Premium and LE the rulesheet says it can be hit from several angles and locks the ball when Car Chase Multiball starts."}}},
 car_ins:{n:"CAR inserts",c:1,s:[E(330,397,11,9),E(353,423,11,9),E(380,440,11,9),E(410,451,11,9)],a:[353,423],x:"Four CAR inserts in a row below the car. The rulesheet lights jackpots by how many \"car\" inserts are lit in Helipad Showdown."},
 continental:{n:"The Continental",c:1,s:[R(376,104,64,158)],a:[408,183],x:"Stern's New York Continental building, with an internal captive ball target."},
 captive:{n:"Captive ball (Continental)",c:1,s:[C(393,286,15)],a:[393,286],x:"The ball under the red C cap at the foot of the Continental. The rulesheet says the captive ball under the Continental spells WINSTON."},
 winston_ins:{n:"WINSTON inserts",c:1,s:[E(403,368,15,56)],a:[403,368]},
 right_orbit:{n:"Right orbit",c:0,s:[B([[442,470],[454,420],[459,340],[462,262],[466,182],[490,126],[536,112],[568,170]],16)],a:[456,400],x:"My reading: the narrow pink-edged lane just left of the Katia ramp, which runs up past the Continental. Its Enemy insert and arrow sit beside the Continental at the top of the lane. The path round the top is a guess."},
 right_ramp:{n:"Right ramp (Katia)",c:1,s:[B([[437,560],[458,500],[476,442],[484,372],[494,292],[512,222]],22)],a:[476,442],x:"Stern's stainless steel \"Katia\" right ramp, with the Katia portrait at the entrance and the Katia diamond at the arrow. The rulesheet uses Katia at the right ramp. Stern says a wireform returns it to the right flipper. Past the entrance the path is my reading."},
 enemy_ins:{n:"Enemy inserts",c:1,s:[E(143,667,18,14),E(150,587,18,14),E(213,617,18,14),E(260,483,18,14),E(317,543,18,14),E(427,307,18,14),E(419,617,18,14)],a:[317,543],x:"Seven Enemy inserts, each with blue circles, in front of the seven major shots. The rulesheet calls the lit blue circles enemies."},
 orange:{n:"Orange standup targets",c:0,s:[R(155,503,14,14),R(216,490,14,14),R(428,479,14,14)],a:[216,497],x:"My reading: three orange starburst squares by the left orbit, left ramp and right ramp. The rulesheet does not say where its orange standups are."},
 coins:{n:"Gold coin targets",c:0,s:[E(548,570,22,38)],a:[548,570],x:"The cluster of gold coins above the weapons crate. The rulesheet places the gold coin targets above the crate. Which coins are targets is my reading."},
 pop:{n:"Pop bumper",c:0,s:[C(481,551,18)],a:[481,551],x:"The large gold coin cap above the crate. I take it to be a pop bumper; the rulesheet mentions \"the pop bumper\" without saying where it is."},
 crate:{n:"Weapons crate",c:1,s:[R(450,630,72,122)],a:[486,690],x:"Stern's sculpted weapons crate, which opens to reveal a hidden shot.",v:{premium:{x:"Stern's sculpted weapons crate, which opens to reveal a hidden shot. It looks different from the Pro's crate in the photos."}}},
 vuk:{n:"Right VUK",c:0,s:[C(497,614,11)],a:[497,614],x:"My guess at the right VUK: the opening between the crate and the pop bumper. The rulesheet shoots the crate or the right VUK to light jobs, and the plunger can feed the VUK for the crate skill shot."},
 crate_ins:{n:"Crate lights",c:1,s:[C(415,665,11),C(415,704,11),C(417,738,11)],a:[415,704],x:"The three blue lights in front of the crate. Light all three to light a job."},
 marker:{n:"Blood Oath Marker",c:0,s:[E(70,684,40,30)],a:[70,684],x:"Stern's sculpted Blood Oath Marker on the left. The rulesheet's left standup targets (the blood marker targets) light outlane ball saves. The marker is clear; I could not pick out the standups, so they are not marked separately.",v:{premium:{x:"Stern's motorized Blood Oath Marker on the left. The rulesheet's left standup targets (the blood marker targets) light outlane ball saves. The marker is clear; I could not pick out the standups, so they are not marked separately."}}},
 factions:{n:"Faction inserts",c:1,s:[E(203,849,11,11),E(219,884,11,11),E(250,907,11,11),E(292,918,11,11),E(330,907,11,11),E(362,884,11,11),E(381,849,11,11)],a:[292,918],x:"The Bowery, New York Continental, Osaka Continental, High Table, Ruska Roma, Marquis de Gramont and Tarasov Family."},
 adversaries:{n:"Adversary inserts",c:1,s:[E(204,788,16,9),E(238,749,9,16),E(291,729,9,16),E(345,749,9,16),E(381,790,16,9)],a:[291,729],x:"Viggo, Kirill, Cassian, Ares and Zero around the portrait."},
 wizard_ins:{n:"Wizard mode inserts",c:1,s:[C(245,675,14),C(292,673,18),C(340,677,14)],a:[292,673],x:"The Duel, Special Assignment and The Staircase."},
 eb_ins:{n:"Extra Ball insert",c:1,s:[C(170,704,13)],a:[170,704]},
 inlanes:{n:"Inlanes",c:0,s:[E(97,912,7,24),E(484,910,7,24)],a:[97,912],x:"The two inner lanes. The rulesheet spells BABA and YAGA at the inlanes."},
 outlanes:{n:"Outlanes",c:0,s:[E(53,910,7,24),E(531,910,7,24)],a:[53,910],x:"The two outer lanes, above the Ball Save inserts."},
 save_ins:{n:"Ball Save inserts",c:1,s:[C(53,1006,13),C(531,1006,13)],a:[53,1006]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_eject","left_orbit","left_ramp","red_circle","center_ramp","right_orbit","right_ramp"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:alt(MAJ).concat(["car","captive","crate"]),b:"<p>John Wick is out of retirement. Play jobs for the seven factions, defeat enemies to fight the adversaries from the films, and play the car chase, Deconsecrated and Excommunicado multiballs. Each set leads to a wizard mode, ending with Special Assignment.</p>"},
 {t:"The seven major shots",h:NUM(MAJ),b:"<p>Left to right, as I read the photo: left eject, left orbit, left ramp, Red Circle, center ramp, right orbit and right ramp. Each has an Enemy insert in front of it and belongs to one faction.</p>"+UNK("The rulesheet has no Layout section. The left eject and right orbit are the least certain.")},
 {t:"Enemies",h:["enemy_ins"],b:"<p>The blue circles in front of each shot are enemies. Lit enemies multiply that shot during jobs and multiballs, and defeating them lights adversary battles.</p>"},
 {t:"Weapons crate and VUK",h:["crate","vuk","crate_ins","coins","pop"],b:"<p>The crate and right VUK light and start jobs. The gold coin targets sit above the crate.</p>"},
 {t:"Car and Continental",h:["car","car_ins","continental","captive","winston_ins"],b:"<p>Bash the car for Car Chase Multiball. The captive ball under the Continental spells WINSTON for Deconsecrated Multiball.</p>"},
 {t:"Red Circle",h:["red_circle","rc_bumper","rc_target","level_ins"],b:"<p>The Red Circle bumper and the targets around it raise the dance floor level toward Excommunicado Multiball.</p>"},
 {t:"Blood marker",h:["marker","save_ins","outlanes"],b:"<p>The blood marker's standup targets on the left light the outlane ball save.</p>"},
 {t:"Pro differences",ed:"pro",h:["car","left_orbit","center_ramp"],b:"<p>On the Pro, the car must be lit by ripping the spinner before it counts toward Car Chase Multiball, and the Deconsecrated locks are virtual. The rulesheet lists the car skill shot, swipe-a-ball and the Excommunicado short-plunge locks as Premium and LE only.</p>"},
 {t:"Premium and LE differences",ed:"premium",h:["car","center_ramp","marker","rc_target"],b:"<p>On the Premium and LE, the car can be hit from several angles and locks the ball during Car Chase Multiball, the center ramp has physical locks, and there is a car skill shot. Stern lists a motorized Blood Oath Marker and a drop target entrance to the Red Circle Club.</p>"}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Jobs",h:["crate","vuk"].concat(alt(MAJ)),b:"<p>Shoot the weapons crate or VUK to light jobs, then the VUK to start one. Lit shots are multiplied by the enemies in front of them. Cash out a job at the left eject for its faction's perk.</p>"},
 {t:"Allies",h:["coins","left_ramp","center_ramp","right_ramp"],b:"<p>Hit the gold coin targets before starting a job to light allies, then shoot the left, center or right ramp to qualify that ally for the next job.</p>"},
 {t:"Adversary battles",h:["enemy_ins","left_eject","marker"],b:"<p>Defeat 10 enemies in single-ball play to light the left eject for an adversary battle: a single-ball mode with a long ball save. Make lit shots and hit the blood marker to light the escape jackpot.</p>"},
 {t:"Multiballs",h:["car","left_orbit","captive","center_ramp","rc_bumper"],b:"<p>Bash the car to light Car Chase Multiball at the left orbit. Spell WINSTON at the captive ball to light locks at the center ramp. Hit the Red Circle bumper and nearby targets for Excommunicado.</p>"},
 {t:"Wizard modes",h:["wizard_ins","left_eject","crate"],b:"<p>Play all three multiballs, one job and one battle for Red Circle Reckoning. Play every job, every battle or every multiball for the later wizard modes.</p>"},
 {t:"Ball save",h:["marker","outlanes","save_ins"],b:"<p>Blood marker standup targets in normal play light an outlane ball save.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Crate skill shots",h:["vuk","crate"],b:"<p>Plunge into the right VUK:</p><ul><li>No switches hit: Baba Yaga skill shot, 1.5M, and the lit job starts at once.</li><li>One switch: super crate skill shot, advances the crate and scores from 750K.</li><li>More than one switch: crate skill shot, points only from 150K.</li></ul><p>If the VUK is already lit for a job, any of them starts it.</p>"},
 {t:"VIP skill shot",h:["rc_bumper","level_ins"],b:"<p>Plunge into the back door of the Red Circle club: 650K, +250K per VIP skill shot. If Excommunicado is lit, this starts it.</p>"+UNK("I could not find the back door lane, so only the club is marked.")},
 {t:"MXV skill shot",h:NUM(["right_orbit","right_ramp","left_eject"]),b:"<p>Full plunge, then combo the right orbit, right ramp and left eject for 10M and 10 extra enemies at the next spawn.</p>"},
 {t:"Car skill shot",ed:"premium",h:["car","left_orbit"],b:"<p>Premium and LE only. Plunge behind the car: 850K, +250K per car skill shot, and it advances the car toward the next Car Chase Multiball. If the left orbit is already lit for it, points only.</p>"+UNK("I could not find the lane behind the car.")}
]},
/* ====== MAIN MODES ====== */
{g:"Main modes",id:"jobs",title:"Jobs",steps:[
 {t:"Lighting and starting",h:["crate","vuk","crate_ins"],b:"<p>Shoot the crate or the right VUK to light the three blue lights in front of the crate. With all three solid, the VUK starts the next job. Play 3 jobs in a game to light extra ball.</p>"},
 {t:"Picking a faction",h:alt(MAJ).concat(["factions"]),b:"<p>Each of the seven shots belongs to a faction. Shoot it before starting a job to light that faction's insert and pick its job.</p>"},
 {t:"Timer",h:["crate","vuk"],b:"<p>Jobs run 60 seconds, +3 seconds per shot made, and every 4th job adds 30 seconds to the base. Once per job, complete the crate targets then shoot the VUK for +30 seconds.</p>"},
 {t:"Cashing out",h:["left_eject"],b:"<p>The final shot of every job is the left eject. It pays 20% of the job's total and awards the faction perk. Play all seven to light a wizard mode.</p>"},
 {t:"Night Watch (Bowery)",h:[["left_eject",1]].concat(alt(MAJ.slice(1))),b:"<p>Left eject. All 7 shots light purple and go out as made. One roving white shot scores 2x. Make them all to light the cashout and relight every shot for a second go.</p><p>Perk: +5 seconds on all ball savers.</p>"},
 {t:"Assassination (NY Continental)",h:[["left_orbit",1],"captive"],b:"<p>Left orbit. Shoot lit green shots to light the captive ball for a kill shot. After 5 kill shots, the cashout lights.</p><p>Perk: the marker ball save lights at both outlanes.</p>"},
 {t:"Security Detail (Osaka)",h:[["left_ramp",1],"rc_bumper","rc_target"],b:"<p>Left ramp. Shoot the single blinking red shot. It starts at the left ramp and moves one shot right (skipping the Red Circle) each time it is made or a Dance Floor target or bumper is hit. Dance Floor hits raise the value. After 7 shots the left eject lights.</p><p>Perk: all multiballs are extended once when you drain to one ball.</p>"},
 {t:"VIP Award (High Table)",h:[["red_circle",1]].concat(alt(MAJ)),b:"<p>Red Circle. Two shots light white: a blinking 5M hurry-up and a solid shot that resets it and moves both one shot right. Score 6 hurry-ups for the cashout.</p><p>Perk: the bonus multiplier starts at 2x every ball.</p>"},
 {t:"Heist (Ruska Roma)",h:[["center_ramp",1],"orange","coins","marker"],b:"<p>Center ramp. Standups light major shots yellow. Gold coin hits in single-ball play collect all lit shots, at 2x if the ball rebounds into them off the blood marker. Score 6 for the cashout.</p><p>Perk: motion sensors can be used during Lights Out.</p>"},
 {t:"Gather Intel (Marquis)",h:[["right_orbit",1],"left_ramp","right_ramp","center_ramp"],b:"<p>Right orbit. The left, center and right ramps light blue. Combo the left and right ramps to score and build a jackpot at the center ramp, 2x as a combo. 6 left or right ramp shots light the cashout.</p><p>Perk: +20 seconds on Lights Out timers.</p>"},
 {t:"Task a Crew (Tarasov)",h:[["right_ramp",1],"left_orbit"],b:"<p>Right ramp. Flashing shots add 100K to the left orbit spinner, and the right ramp sets it up for 2x. Enemies at the left orbit multiply it. Rip the lit spinner 4 times for the cashout.</p><p>Perk: one add-a-ball per ball in play, by holding the action button.</p>"}
]},
{g:"Main modes",id:"adversaries",title:"Adversary battles",steps:[
 {t:"Lighting them",h:["enemy_ins","left_eject","marker","pop"],b:"<p>Defeat 10 enemies in single-ball play to light the left eject for a battle. Multiball kills do not count. While it is lit, the left standup targets or the pop bumper change which battle starts.</p>"+UNK("The rulesheet calls them the \"left standup targets\" in one place and the \"blood oath standup targets\" in another. I read them as the same targets.")},
 {t:"How they play",h:["marker","left_eject"],b:"<p>Battles last 200 seconds and override everything else. Make half the required shots, then hit the blood marker to light the escape jackpot at the left eject. Collect it to end the battle, or keep going for +1x scoring, up to 4x.</p>"},
 {t:"Be Seeing You",h:["eb_ins"],b:"<p>Make all the required shots for Be Seeing You: 25M (doubled in Lights Out), 10M added to bonus, and an extra ball the first time in a game.</p>"},
 {t:"Ball save",h:["marker","outlanes"],b:"<p>Battles start with 40 seconds of ball save, +30 if a lit marker ball save was unused. Playing any battle requalifies the marker ball save. The outlane save cannot be used in battles.</p>"+UNK("The marker ball save section says +10 seconds if the save was already used. Both may apply.")},
 {t:"Viggo",h:["car","captive"],b:"<p>Shoot the car or captive ball to light gold shots. Blood marker after 6 lit shots, Be Seeing You after 12.</p>"},
 {t:"Kirill",h:["red_circle"].concat(alt(MAJ)),b:"<p>Shoot flashing red shots, which alternate sides and shrink in number, to light the Red Circle for their total + 300K. Skipping the Red Circle for a whole wave adds 1M. Blood marker after 6, Be Seeing You after 12.</p>"},
 {t:"Cassian",h:alt(MAJ).concat(["orange","pop"]),b:"<p>Switch frenzy: every switch scores 2.5K and adds 10K to the jackpot. One flashing purple shot is the jackpot, moved by orange targets and pop bumpers. It rises 250K per jackpot and resets when all shots relight at 100 switches. Blood marker after 3 jackpots, Be Seeing You after 6.</p>"},
 {t:"Ares",h:alt(MAJ).concat(["pop"]),b:"<p>All shots light white for rising points. One red shot moves around; it scores 3M +1.25M per red shot, and bumper or slingshot hits briefly show it. Blood marker after 4 red shots, Be Seeing You after 8.</p>"},
 {t:"Zero",h:alt(MAJ).concat(["car","captive"]),b:"<p>Combo mode. Shoot light blue shots, then the car or captive ball (1x) or the left eject (2x) to collect: 750K +100K per combo completed +250K per combo shot. Blood marker after 2 combos, Be Seeing You after 4.</p>"},
 {t:"What it leads to",h:["adversaries"],b:"<p>Play all five battles to light a wizard mode.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"extend",title:"Multiball perks",steps:[
 {t:"Extending multiballs",h:["left_eject"],b:"<p>Three perks can extend a multiball, once per ball in play, and only one per multiball:</p><ul><li>Multiball Extend, from Security Detail: extends when you drain to one ball. It must be used first.</li><li>Add-A-Ball, from Task a Crew: hold the action button.</li><li data-ed=\"premium\">Swipe-a-ball (Premium and LE): with balls locked for Deconsecrated, press the action button to take one, if neither perk above was used. The next locks get harder.</li></ul><p>Night Watch adds +5 seconds to multiball ball savers. Play all 6 multiballs for a wizard mode.</p>"}
]},
{g:"Multiballs",id:"car",title:"Car Chase Multiballs",steps:[
 {t:"Lighting it",ed:"pro",h:["car","left_orbit"],b:"<p>On the Pro, rip the spinner to light the car, then bash it to light the left orbit. The first multiball is 2-ball. Each later one needs one more car hit, up to 4, and adds a ball. After all four it resets to the base +1 ball.</p>"+UNK("The overview says the Pro needs four car hits for the first multiball. The car section says two. The rulesheet contradicts itself.")},
 {t:"Lighting it",ed:"premium",h:["car","left_orbit"],b:"<p>On the Premium and LE, bash the car from any angle to light the left orbit. The first multiball needs two hits and is 3-ball. Each later one needs more, up to 8 (front and side hits each count), and adds a ball. After all four it resets to the base +1 ball. The car locks the ball when it starts.</p>"},
 {t:"Choosing one",h:["car","car_ins"],b:"<p>The game starts with Helipad Showdown lit. Each car hit before starting changes it to the next of the four, wrapping round.</p>"},
 {t:"Car jackpot",h:["car"],b:"<p>Starts at 2M. Pink award shots score 20% of it. Single-ball car hits add 20% of the hit value (raised by spinner rips). Award shots add 5K, jackpots 50K, super jackpots 250K.</p>"},
 {t:"1: Helipad Showdown",h:alt(MAJ).concat(["car","car_ins",["left_orbit",0,"alt"]]),b:"<p>Red shots collect awards and raise the car jackpot to 2x, 3x or 4x by lit CAR inserts. After nine jackpots, the car scores a 5x super jackpot and the left orbit a 2x super jackpot.</p>"},
 {t:"2: Taxicab Chase",h:["car","left_orbit"].concat(alt(MAJ)),b:"<p>A 15-second hurry-up: hit the car to lock in the value. Sets of lit chase awards light jackpots at the car, each needing one more award and paying a higher multiplier. After four, the left orbit lights a 5x super jackpot, raised by car hits.</p>"},
 {t:"3: Motorcycle Pursuit",h:["car","continental","rc_bumper","left_eject","left_orbit","left_ramp","center_ramp","right_orbit","right_ramp"],b:"<p>Awards light at the Dance Floor and on one side: left eject, left orbit and left ramp, or center ramp, right orbit and right ramp. Each raises the multiplier to 4x. Hit the car to switch sides and score a jackpot. After four, hit the Continental for a super jackpot.</p><p data-ed=\"premium\">On the Premium and LE the car blocks the Continental. Bash it to move it for a few seconds.</p>"},
 {t:"4: Bagarre a L'Etoile",h:["left_ramp","center_ramp","right_ramp","left_orbit","right_orbit","car"],b:"<p>Shoot any ramp to light the car jackpot, and the orbits to raise its multiplier to 4x and collect awards. Relight it after each one. After four, the car lights four 5x super jackpots. The rulesheet calls it the highest scoring of the four on average.</p>"}
]},
{g:"Multiballs",id:"excommunicado",title:"Excommunicado Multiball",steps:[
 {t:"Lighting it",h:["rc_bumper","rc_target","level_ins","red_circle"],b:"<p>Red Circle bumper and target hits raise the dance floor level. At max, the next Red Circle shot, directly or through the VIP lane, starts it.</p>"},
 {t:"Build phase",h:alt(MAJ).concat(["orange"]),b:"<p>A 15-second single-ball phase with ball save. Shots add 200K and targets 125K to the coming jackpots. Orange targets add 5 seconds. It ends when time runs out or the ball drains.</p><p data-ed=\"premium\">On the Premium and LE, short plunges into the Red Circle lock balls and raise the super jackpot, up to four balls.</p>"},
 {t:"Multiball",h:alt(MAJ).concat(["red_circle"]),b:"<p>Then 2-ball multiball. Gold flashing shots score jackpots, panning outward from the center. After all six, the Red Circle lights the super jackpot: 5M plus amounts for enemies this game, this ball and this mode.</p>"+UNK("The rulesheet says the jackpots start at the left ramp and right ramp and end at the left eject and right ramp. One of those right ramps is probably a different shot.")}
]},
{g:"Multiballs",id:"deconsecrated",title:"Deconsecrated Multiball",steps:[
 {t:"Locks",ed:"pro",h:["captive","winston_ins","center_ramp"],b:"<p>Shoot the captive ball to spell WINSTON and light locks at the center ramp. On the Pro the locks are virtual. The first multiball needs only three captive ball shots for all three locks; it gets harder. Lock 3 balls to start.</p>"},
 {t:"Locks",ed:"premium",h:["captive","winston_ins","center_ramp"],b:"<p>Shoot the captive ball to spell WINSTON and light locks at the center ramp. On the Premium and LE the locks are physical. The first multiball needs only three captive ball shots for all three locks; it gets harder. Lock 3 balls to start.</p>"},
 {t:"Jackpots",h:alt(MAJ).concat(["captive"]),b:"<p>Green shots score 500K plus amounts for enemies and captive ball boosts. Captive ball hits add 200K to the super jackpot. The first wave can be scored at any shot but the last one made; later waves need all 7 different shots before relighting.</p>"},
 {t:"Super jackpots",h:["captive"],b:"<p>After 7 jackpots (14 for the 3rd super jackpot phase and later), shoot the captive ball for 15 seconds of repeated super jackpots: 2.5M plus enemy amounts. Then back to jackpots to relight it.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"enemies",title:"Enemies",steps:[
 {t:"Spawning",h:["enemy_ins","orange","rc_bumper","left_orbit"],b:"<p>Each ball starts with at least 5 enemies. More spawn every 50 switch hits, with a phone ring and a flash. 3 spinner spins count as 1 switch. Red Circle hits count as 4. In single-ball play each orange target qualifies one enemy; in multiball it takes 3. The MXV skill shot adds 10.</p>"},
 {t:"Shot multipliers",h:alt(MAJ).concat(["enemy_ins"]),b:"<p>In jobs and multiballs, each enemy at a lit shot adds +1x, up to 3 for 4x. Making the shot defeats them and raises shot values, a lot for this ball and less for the game.</p>"},
 {t:"Rewards",h:["left_eject","eb_ins"],b:"<p>10 enemies in single-ball play light an adversary battle. 10 in single-ball or multiball play light extra ball.</p>"}
]},
{g:"Other scoring",id:"allies",title:"Allies",steps:[
 {t:"Qualifying",h:["coins"],b:"<p>Hit the gold coin targets with no mode running to qualify allies. One ally per job. Once all three are used, they can be used again.</p>"},
 {t:"Akira",h:["left_ramp"].concat(alt(MAJ)),b:"<p>Left ramp: rotates enemies one shot right, wrapping from the right ramp to the left eject. Hold the left flipper while shooting to rotate them left.</p>"},
 {t:"Charon",h:["center_ramp"],b:"<p>Center ramp: a 4-second hurry-up. The next enemies defeated replenish at once, so you score the multiplied shot and get another try.</p>"},
 {t:"Katia",h:["right_ramp"].concat(alt(MAJ)),b:"<p>Right ramp: moves enemies from unlit shots to shots lit in the current job or multiball, with a left-to-right bias, except the scoop.</p>"+UNK("The rulesheet does not say which shot is \"the scoop\". It may be the left eject.")}
]},
{g:"Other scoring",id:"lightsout",title:"Lights Out",steps:[
 {t:"Lighting it",h:["inlanes"],b:"<p>Spell YAGA at the inlanes to light the action button. A YAGA letter only collects at a lane whose BABA insert is already lit. Progress resets each ball, but a lit Lights Out carries over.</p>"},
 {t:"Lights Out",h:["inlanes","outlanes","marker"],b:"<p>Most playfield lights go out and all scoring doubles for 30 seconds, +20 after Gather Intel. With the Heist perk, the action button fires motion sensors that relight the playfield briefly and recharge after 5 seconds. Not available in wizard modes except Red Circle Reckoning.</p>"}
]},
{g:"Other scoring",id:"coins",title:"Gold coins",steps:[
 {t:"Collecting coins",h:["coins"].concat(alt(MAJ)),b:"<p>Bounces into the gold coin targets light a random shot for a gold coin, or raise its value if one is lit. It starts at 10K, one shot at a time. Each coin adds 1M to bonus, and 10 in a game light extra ball.</p>"},
 {t:"Other uses",h:["coins"],b:"<p>Coin hits also light allies outside modes, and collect all lit shots in Heist during single-ball play.</p>"}
]},
{g:"Other scoring",id:"marker",title:"Marker ball save",steps:[
 {t:"Lighting it",h:["marker","outlanes","save_ins"],b:"<p>Hit the left standup targets 5 times (+2 per ball save already lit) to light an outlane. The flippers change which one flashes. With one lit, more hits add to it. Assassination makes both outlanes light.</p>"},
 {t:"Requalifying",h:["marker","left_eject"],b:"<p>Once used, play an adversary battle to fulfill the blood marker's obligation and requalify it.</p>"}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["left_eject","eb_ins"],b:"<p>Extra ball lights at the left eject after 10 enemies, 3 jobs started, or 10 gold coins. It is awarded at once for the first Be Seeing You and for completing Red Circle Reckoning. If disabled, 10M, doubled in Lights Out but not by enemies.</p>"},
 {t:"End-of-ball bonus",h:["inlanes"],b:"<p>A small base, 1M per job started, 2M per battle started, 10M per Be Seeing You, 1M per gold coin, 10K per combo. Spelling BABA at the inlanes raises the multiplier, up to 5x.</p>"+UNK("The bonus section names the perk job \"escort the VIP\". The job table calls it VIP Award.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"wizard",title:"Lighting wizard modes",steps:[
 {t:"How they light",h:["left_eject","crate","wizard_ins"],b:"<p>Wizard modes light at the left eject and the crate. Red Circle Reckoning needs one job, one battle and one of each multiball type. The others need every job, every battle or every multiball. They are always played in the same order.</p>"+UNK("The overview says Red Circle Reckoning needs \"all three multiballs\". The wizard section says one of each type: car, Deconsecrated and Excommunicado.")}
]},
{g:"Wizard modes",id:"reckoning",title:"Red Circle Reckoning",steps:[
 {t:"The mode",h:alt(MAJ).concat(["red_circle"]),b:"<p>A 60-second 4-ball multiball. Clear every shot for 10M each, then the Red Circle for 30M, which ends it and awards an extra ball, plus 1M per second left.</p>"},
 {t:"More time",h:["rc_bumper"],b:"<p>Enough switch hits in the Red Circle bumper area add 10 seconds. Lights Out doubles everything, including the final shot and time bonus.</p>"}
]},
{g:"Wizard modes",id:"staircase",title:"The Staircase",steps:[
 {t:"Three levels",h:["left_ramp","right_ramp",["left_orbit",0,"alt"],["right_orbit",0,"alt"],["left_eject",0,"alt"],["red_circle",0,"alt"]],b:"<p>A long ball save at the start.</p><ul><li>Level 1: left and right ramps, one enemy each.</li><li>Level 2: left orbit, left ramp, right orbit and right ramp, 2 enemies each.</li><li>Level 3: all 6 major shots except the center ramp, 3 enemies each.</li></ul><p>Each enemy shot scores 5M and lights a white arrow there.</p>"},
 {t:"Completion bonus",h:["center_ramp"],b:"<p>Clear a level to light the center ramp for 20M, 20M or 40M. Each white arrow collected first adds +1x, for up to 60M, 100M and 280M.</p>"},
 {t:"Back up the stairs",h:["center_ramp"],b:"<p>Finishing level 3 repeats all three levels as a 2-ball multiball. The center ramp at the end completes it.</p>"+UNK("The rulesheet's Level 3 says \"all 6 major shots\" though it lists 7 shots elsewhere.")}
]},
{g:"Wizard modes",id:"duel",title:"The Duel",steps:[
 {t:"Shots",h:NUM(["red_circle","left_ramp","center_ramp","left_orbit","right_ramp"]),b:"<p>A 2-ball multiball with a long ball save. Keep both balls in play to double everything. Hit the Red Circle, then the left and center ramps, then the left orbit and right ramp. Hurry-ups start at 5M, then 10M.</p>"},
 {t:"The shootout",h:["left_eject","vuk","crate"],b:"<p>Lock both balls at the left eject and crate within 10 seconds of each other (15M each if in time). Press the action button as Caine and Wick fire, up to 25M dead center. You have about 5 seconds.</p>"},
 {t:"Finale",h:NUM(["left_eject","red_circle","right_orbit","crate"]),b:"<p>After three rounds, the left eject, Red Circle, right orbit and crate light: 25M each for the first three, 50M for the last, which completes the mode.</p>"}
]},
{g:"Wizard modes",id:"final",title:"Special Assignment",steps:[
 {t:"The mode",h:["wizard_ins"],b:"<p>The final mode: single ball with 60 flips. It ends the game when you finish or run out of flips, with a last bonus.</p>"},
 {t:"Clearing enemies",h:NUM(["right_orbit","left_ramp","right_ramp","left_orbit","center_ramp","red_circle","left_eject"]),b:"<p>Clear enemies in order, three shots each: right orbit, left and right ramps, left orbit, center ramp, Red Circle, left eject. Each enemy is 10M, 2x as a combo, and adds 6 flips. A drain costs 5 flips.</p>"},
 {t:"Find Iosef",h:alt(MAJ),b:"<p>Then every shot lights and Iosef hides at a random one. No more flips can be added. Find him to score the total of all prior shots plus 10M per flip left.</p>"}
]}
];

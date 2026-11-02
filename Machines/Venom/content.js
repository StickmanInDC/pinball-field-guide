/* ---------- playfield features (coordinates in the 640x1228 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[122,500],[116,420],[108,340],[100,260],[100,190]],18)],a:[116,420],x:"The Rykers Prison lane, the leftmost arrows. Reading it as the left orbit comes from the rulesheet's left-to-right shot lists, not from a label. Past the arrows the path is a guess."},
 left_ramp:{n:"Left ramp",c:1,s:[B([[188,500],[180,430],[170,385],[153,315],[133,240],[110,205]],22)],a:[180,430],x:"The Alchemax lane. The Choose Host insert prints on it, and the rulesheet changes hosts at the left ramp. Reading the sky-printed surface as the ramp, and its path to the wireform, is mine."},
 captive:{n:"Captive ball",c:1,s:[E(232,440,24,30)],a:[232,440],x:"The chrome ball at the head of the Carnage lane, between two red posts. The Carnage insert stack below it fits the rulesheet."},
 carnage_track:{n:"Carnage and Ravencroft",c:1,s:[B([[222,405],[212,330],[198,220],[185,120]],22)],a:[208,290],x:"The Carnage figure rides this black track toward the Ravencroft arch at the top. The rulesheet says the captive ball sends him back to Ravencroft."},
 center_ramp:{n:"Center ramp",c:1,s:[B([[290,500],[284,430],[272,375],[264,300],[256,240],[272,150],[306,76],[362,30],[450,14],[556,30],[596,100],[598,200]],22)],a:[284,430],x:"The Police Station lane. Stern's apron card says to shoot the Police Station ramp to start a battle, and the rulesheet starts battles at the center ramp. Everything past the purple entry, including the clear ramp over the top, is my reading."},
 left_loop:{n:"Left loop",c:0,s:[B([[345,490],[355,400],[362,320],[370,250],[398,208]],18)],a:[355,400],x:"The Life Foundation lane, by the shot lists. The THWIP art runs up it. Where it comes out is a guess.",v:{premium:{s:[B([[345,490],[355,400],[362,330],[372,270]],18)],a:[355,400],x:"The Life Foundation lane, by the shot lists. On the Premium and LE the rulesheet says some hosts get a 180 ramp or a target here, so what the lane does depends on your host."}}},
 uturn:{n:"U-turn ramp and target",c:0,s:[],a:[372,285],x:"Premium and LE only. The rulesheet says 180 ramp, U-turn ramp and a target below it. This steel lane behind a blue housing, at the end of the left loop, is the only thing that fits. Which parts are the ramp and the target is a guess.",v:{premium:{s:[E(372,285,22,55)],a:[372,285]}}},
 bell:{n:"Bell tower target",c:0,s:[R(318,338,30,24),E(331,392,13,27)],a:[331,392],x:"The arrow with the BONGSS art points up to the foot of the Bell Tower toy. The small gold shape there is my pick for the target itself."},
 tower_toy:{n:"Bell Tower",c:1,s:[R(300,206,54,142)],a:[327,280],x:"The toy prints Bell Tower on it.",v:{premium:{s:[R(286,188,58,152)],a:[315,270]},le:{s:[R(286,210,56,130)],a:[314,275]}}},
 scoop:{n:"Scoop",c:1,s:[B([[432,490],[434,420],[440,340]],22),C(447,285,20)],a:[434,420],x:"The Daily Bugle lane, which ends in this hole. Stern's apron card says Daily Bugle scoop, and it and the rulesheet both collect the extra ball there."},
 right_loop:{n:"Right loop",c:0,s:[B([[495,490],[505,400],[515,320],[535,250],[528,180]],18)],a:[505,400],x:"The Argo-Lab lane, by the shot lists. The path past the arrows is a guess.",v:{premium:{x:"The Argo-Lab lane, by the shot lists. The rulesheet says where it feeds depends on your host, and the steel curve at its top may be how. The path past the arrows is a guess."}}},
 right_orbit:{n:"Right orbit",c:0,s:[B([[548,490],[566,400],[572,310],[580,220],[594,140]],18)],a:[566,400],x:"The Vault Prison lane, the rightmost arrows, by the shot lists. Past the arrows the path is a guess."},
 dopp_targets:{n:"Doppelganger flyaway targets",c:0,s:[],a:[462,578],x:"Premium and LE only. The photo prints Doppelganger over three tall blue shapes, and the rulesheet gives a 3-bank of flyaway targets. I read those shapes as the bank. The photo does not show how they fly away.",v:{premium:{s:[E(411,569,11,28),E(462,578,11,28),E(512,592,11,28)],a:[462,578]}}},
 rampage_ins:{n:"Rampage inserts",c:1,s:[],a:[453,622],x:"Premium and LE only: three red inserts over the printed word Rampage. The rulesheet does not explain them.",v:{premium:{s:[C(405,612,13),C(451,623,13),C(505,634,13)],a:[451,623]}}},
 canister_l:{n:"Left canister",c:0,s:[E(72,515,30,34)],a:[72,515],x:"The clear box where the left wireform ends. Reading it as the rulesheet's left canister is mine. It fits the two-canister description."},
 canister_r:{n:"Right canister",c:0,s:[E(565,605,30,36)],a:[565,605],x:"The clear box where the right wireform ends. Reading it as the rulesheet's right canister is mine."},
 infected_t:{n:"Red targets",c:0,s:[R(396,354,22,26),R(466,364,22,26)],a:[408,367],x:"Two standups with the red swirl, each side of the scoop. The rulesheet says there are five red targets. I could only find these two in the photos."},
 infected_ins:{n:"Red swirl inserts",c:0,s:[C(405,396,14),C(471,406,14),C(330,428,14),C(252,606,12),C(146,665,12),C(79,677,10),C(499,680,14)],a:[405,396],x:"Printed swirls, the same mark as the red targets. There are seven of these. The rulesheet does not explain them. They may show where the other red targets are, but I cannot tell."},
 scoop_panel:{n:"Plastic over the scoop",c:1,s:[R(433,165,68,103)],a:[467,216],x:"Reads Special Attack, Host Hurry-Up, a question mark, Scream, Klyntar Multiball, Toxin Team-Up, Doppelganger, Carnage and Mayhem. The rulesheet starts Klyntar at the center ramp, so this panel is not simply a list of what the scoop starts.",v:{premium:{s:[R(428,143,66,120)],a:[461,203]},le:{s:[R(430,160,64,103)],a:[462,212]}}},
 eb_ins:{n:"Extra Ball insert",c:1,s:[C(405,503,18)],a:[405,503]},
 sj_ins:{n:"Super Jackpot insert",c:1,s:[E(428,461,10,22)],a:[428,461],x:"Printed Super Jackpot in the Daily Bugle lane. The rulesheet lights several super jackpots at the scoop."},
 host_ins:{n:"Choose Host insert",c:1,s:[C(203,635,17)],a:[203,635]},
 start_ins:{n:"Start insert",c:1,s:[C(310,616,16)],a:[310,616],x:"The round Start insert below the Police Station lane."},
 carnage_ins:{n:"Carnage inserts",c:1,s:[E(240,537,19,15),E(245,569,19,15)],a:[240,537],x:"Printed Hurry Up and Blood Lust, in the Carnage lane."},
 bosses:{n:"Minor boss inserts",c:1,s:[E(237,788,22,22),E(278,788,22,22),E(337,788,22,22),E(384,788,22,22)],a:[278,788],x:"Printed Riot, Agony, Phage and Lasher."},
 grendel:{n:"Grendel insert",c:1,s:[E(312,763,24,14)],a:[312,763],x:"Printed Grendel and 20, which fits the rulesheet's level 20."},
 knull:{n:"Knull insert",c:1,s:[E(311,716,27,17)],a:[311,716],x:"Printed Knull and 30, which fits the rulesheet's level 30."},
 grid_stars:{n:"Grid inserts",c:1,s:[C(244,841,11),C(287,841,11),C(326,841,11),C(372,841,11),C(234,885,11),C(284,885,11),C(329,885,11),C(378,885,11),C(224,946,11),C(281,929,11),C(332,929,11),C(389,946,11)],a:[305,885],x:"Four columns of three inserts under the boss names. The rulesheet says each column belongs to a host, but not which is which. Matching a column to a host is left open."},
 grid_awards:{n:"Grid awards",c:1,s:[R(238,848,48,36),R(290,848,42,36),R(330,848,48,36),R(238,895,48,36),R(284,895,42,36),R(332,895,48,36)],a:[304,890],x:"Printed Extra Time, Web 2X Combos, Extra Ball Save, +1X Playfield, Flamethrower and 2X Experience. The rulesheet's list order differs from the photo's layout."},
 multiplier:{n:"Multiplier inserts",c:1,s:[C(453,729,14),C(453,769,14),C(453,808,14)],a:[453,769],x:"Printed 4, 2, 1 and Multiplier. The rulesheet does not explain them. They add to 7, which matches its 7x limit, so I read them as playfield X. That is my inference."},
 team_ups:{n:"Team-up inserts",c:1,s:[C(212,699,15),C(198,737,15),C(182,776,15)],a:[198,737],x:"Green inserts beside the printed Hybrid, Sleeper and Miles Morales Team-Up."},
 toxin_art:{n:"Toxin art",c:0,s:[R(540,668,45,30)],a:[562,683],x:"The printed word Toxin, under the right wireform. It is only artwork. The mode starts at the scoop."},
 bottom_lanes:{n:"Bottom lanes",c:0,s:[E(45,985,10,30),E(98,954,10,30),E(512,954,10,30),E(564,985,10,30)],a:[98,954],x:"The four slots above the flippers, read as inlanes and outlanes. The rulesheet does not say how many bottom lanes there are, and these marks are my reading."},
 host_card:{n:"Choose Host plastic",c:1,s:[R(594,766,44,212)],a:[616,870],x:"Printed Choose Host, with Eddie Brock, Flash Thompson, Gwen Stacy and Peter Parker.",v:{premium:{s:[R(582,755,54,216)],a:[610,860]}}},
 spider_toy:{n:"Spider-Man toy",c:1,s:[],a:[538,370],x:"Premium and LE only. A Stern photo shows this raised figure, and the Pro has a flat one up by the scoop. The rulesheet does not mention either.",v:{premium:{s:[E(538,370,42,60)],a:[538,370]},le:{s:[E(541,390,46,58)],a:[541,390]}}}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var ALL=["left_orbit","left_ramp","center_ramp","left_loop","scoop","right_loop","right_orbit"];
var MM=function(y,b,w){return "<ul><li><b>Yellow:</b> "+y+"</li><li><b>Blue:</b> "+b+"</li><li><b>White:</b> "+w+"</li></ul>"};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:alt(ALL.concat(["captive"])),b:"<p>Venom needs a host, and Carnage is trying to revive Knull. Pick a host, play mini-modes to fill the grid, beat the bosses, and work up to Knull. The rulesheet says the game was designed around Insider Connected, and many rules carry over between games for registered players.</p>"},
 {t:"The main shots",h:NUM(["left_orbit","left_ramp","captive","center_ramp","left_loop","scoop","right_loop","right_orbit"]),b:"<p>Left to right: left orbit, left ramp, captive ball, center ramp, left loop, scoop, right loop, right orbit.</p>"+UNK("The rulesheet has no layout text. This order comes from its shot lists and the printed lanes. Stern's apron card fixes the center ramp as the Police Station lane and the scoop as the Daily Bugle lane, and the Choose Host insert fixes the left ramp as Alchemax. The other lanes are read in order.")},
 {t:"Lane names",h:["center_ramp","scoop","left_ramp"],b:"<p>Stern's apron card calls the center ramp the Police Station ramp and the scoop the Daily Bugle scoop. The other printed lane names are Rykers Prison, Alchemax, Life Foundation, Argo-Lab and The Vault Prison.</p>"},
 {t:"Captive ball and Ravencroft",h:["captive","carnage_track"],b:"<p>Shooting the captive ball pushes Carnage back toward Ravencroft prison. Getting him all the way back lights a Carnage mode at the center ramp.</p>"},
 {t:"Red targets",h:["infected_t",["infected_ins",0,"alt"]],b:"<p>Five red targets, shot twice each to defeat the Infected.</p>"+UNK("I could only place two of the five. The rulesheet does not say where they are.")},
 {t:"Bell tower",h:["bell","tower_toy"],b:"<p>The bell tower target sits in the middle of the playfield. Center ramps light it, and a lit shot adds playfield multiplier.</p>"},
 {t:"Two ball locks",h:["canister_l","canister_r"],b:"<p>Mayhem Multiball locks balls in a left canister and a right canister. Each one gives its own set of perks.</p>"},
 {t:"Pro and Premium/LE differences",ed:"premium",h:["dopp_targets","uturn",["spider_toy",0,"alt"]],b:"<p>On the Premium and LE, Doppelganger is a 3-bank of flyaway targets instead of a shot to the left loop. The left loop and right loop also change with your host, and there is a U-turn ramp with a target below it.</p>"},
 {t:"Pro differences",ed:"pro",h:["left_loop"],b:"<p>On the Pro, Doppelganger is beaten virtually by shooting the left loop. The physical layout changes and Doppelganger targets are Premium and LE only.</p>"},
 {t:"Flipper and action buttons",h:[],b:"<p>Use the right flipper at ball start to choose a host, per Stern's apron card. The rulesheet also uses the right flipper to change the skill shot. The action button runs Spider-Sense, aborts a Mayhem start, and uses team-ups.</p>"}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Hosts",h:["host_card"],b:"<p>Choose a host at the start of the game, at the start of each ball, and after completing a full set of mini-modes.</p>"},
 {t:"Mini-modes",h:alt(ALL).concat(["grid_stars"]),b:"<p>Shoot the flashing yellow, blue and white shots to complete mini-modes. They light Mayhem locks and fill the grid, which lights battles at the center ramp.</p>"},
 {t:"Battles block the center ramp",h:["center_ramp"],b:"<p>Anything that starts at the center ramp, such as a multiball or Carnage mode, cannot start while a battle is available. Mayhem locks cannot be collected while a battle is lit.</p>"},
 {t:"Locks",h:["canister_l","canister_r"],b:"<p>Shoot the green lock shots to lock balls for Mayhem Multiball, which is another way to defeat minor bosses outside battles.</p>"},
 {t:"Carnage",h:["captive","carnage_track"],b:"<p>Lock Carnage back in Ravencroft by shooting the captive ball. That lights Carnage Multiball and other modes.</p>"},
 {t:"Infected and Doppelganger",h:["infected_t","left_loop","dopp_targets"],b:"<p>Shoot the red targets to defeat the Infected. Then shoot Doppelganger at the left loop (Pro) or flyaway targets (Premium/LE). Defeat him three times to light Rampage.</p>"},
 {t:"Mystery and multiplier",h:["bottom_lanes","scoop","center_ramp","bell"],b:"<p>Complete the bottom lanes enough times to light Mystery. Loop the center ramp, then combo into the lit bell tower to raise the playfield multiplier.</p>"}
]},
{g:"Layout and basics",id:"modes",title:"Modes of play",steps:[
 {t:"Choosing a mode",h:[],b:"<p>Hold both flipper buttons during attract mode until a menu appears.</p><ul><li><b>Standard:</b> the rules in this guide.</li><li><b>Competition:</b> Standard with randomness removed.</li><li><b>Cooperative:</b> one team, with shared scores, mini-modes and XP.</li><li><b>Team Play:</b> two sets of players add their scores. The highest wins.</li></ul>"},
 {t:"Harder and practice modes",h:[],b:"<ul><li><b>Impossible:</b> no extra balls, very hard rules, and flippers cannot be held over 2 seconds.</li><li><b>Monster:</b> player 1 plays Impossible, everyone else plays regular rules.</li><li><b>Challenge:</b> practice defeating Knull at different levels and with different grid boxes done.</li><li><b>DJ Mixer:</b> a jukebox, not a game mode.</li></ul>"}
]},
/* ====== HOSTS ====== */
{g:"Hosts",id:"hosts",title:"Choosing a host",steps:[
 {t:"Why it matters",h:["host_card"],b:"<p>Hosts change the rules, the music and, on the Premium and LE, the layout. Each has its own perks, skill shots, starting locks, combo level, signature combo and mini-modes.</p>"},
 {t:"Changing host during a ball",h:["left_ramp","host_ins"],b:"<p>Complete any host's column of mini-modes to change host at the left ramp. After the first host change of a ball, you can also change by completing that host's battle mode, then shooting the left ramp.</p>"},
 {t:"Eddie Brock",h:[["left_loop",0,"alt"],["right_orbit",0,"alt"]],b:"<ul><li>Perk: Mayhem Multiball is more valuable.</li><li>Skill shots: left loop (spots a mini-mode), right orbit (points).</li><li>Mayhem locks lit: 2. Combo level: average.</li></ul>"},
 {t:"Eddie Brock on Premium/LE",ed:"premium",h:["uturn","right_loop"],b:"<p>A 180 ramp shot, and the right loop feeds back to the sinkhole.</p>"+UNK("The rulesheet says sinkhole here and nowhere else, so I cannot mark it.")},
 {t:"Flash Thompson",h:[["scoop",0,"alt"],["right_orbit",0,"alt"]],b:"<ul><li>Perks: Sleeper unlocked, extra-wide bell tower, Million Plus Pops access (Premium/LE).</li><li>Skill shots: scoop (lights Mystery), right orbit (spots a mini-mode).</li><li>Mayhem locks lit: 0. Combo level: poor.</li></ul>"},
 {t:"Flash on Premium/LE",ed:"premium",h:["uturn","right_loop",["left_orbit",0,"alt"]],b:"<p>A target in place of the left loop, and the right loop feeds the left orbit entrance.</p>"},
 {t:"Gwen Stacy",h:[["left_loop",0,"alt"],["right_loop",0,"alt"]],b:"<ul><li>Perks: 2x Infected defeated, more valuable Doppelganger attacks, Quick Doppelganger Multiball access (Premium/LE).</li><li>Skill shots: left loop (spots a mini-mode), right loop (starts Doppelganger).</li><li>Mayhem locks lit: 1. Combo level: good.</li><li>Shot positions on Premium/LE: same as Pro.</li></ul>"},
 {t:"Peter Parker",h:[["left_loop",0,"alt"],["scoop",0,"alt"]],b:"<ul><li>Perks: Miles Morales unlocked, Carnage modes easier and more valuable.</li><li>Skill shots: left loop (spots a mini-mode), scoop (lights Mystery).</li><li>Mayhem locks lit: 1. Combo level: good.</li></ul>"},
 {t:"Peter on Premium/LE",ed:"premium",h:["uturn","right_loop",["left_orbit",0,"alt"]],b:"<p>A 180 ramp shot, and the right loop feeds the left orbit entrance.</p>"},
 {t:"Unlockable hosts",h:["knull"],b:"<p>Win the final battle against Knull to unlock more hosts. They are not available in competitive play, and each one corresponds to two lines on the grid instead of one.</p><ul><li><b>Venomized Hulk:</b> action button lit for Hulk Smash, extra-wide bell tower, Million Plus Pops access (Premium/LE). 0 locks, poor combos.</li><li><b>Venomized Captain America:</b> Mystery always awards all of the above, more valuable battles. 1 lock, poor combos.</li><li><b>Venomized Wolverine:</b> longer ball saves, 2x Infected, Quick Doppelganger Multiball access (Premium/LE). 2 locks, average combos.</li></ul>"},
 {t:"Venomized Ghost Rider",h:["grid_stars"],b:"<p>Available if the topper is installed. Connected players who have played a game with the topper can use him for up to 3 months after, even without it. He must complete the far left and far right grid lines to light a battle, and starts with Flamethrower if chosen as first host.</p>"+UNK("The rulesheet leaves his skill shots, locks and combo level blank.")}
]},
{g:"Hosts",id:"skill",title:"Skill shots",steps:[
 {t:"Rollover lane",h:[],b:"<p>Every host can plunge into the flashing rollover lane for +2 bonus X. Use the right flipper to change between this and the host's other skill shot options.</p>"+UNK("I could not find the rollover lanes in the photos, so they are not marked.")},
 {t:"Host skill shots",h:alt(["left_loop","right_orbit","scoop","right_loop"]),b:"<p>Each host's own options are on the host pages, using the left loop, right orbit, right loop or scoop. If you change host at the left ramp during a ball, those can be scored as a bonus shot.</p>"},
 {t:"Secret Hideout",h:[],b:"<p>Plunge the ball into the saucer at the apex of the orbit for 3M +500K per skill shot and +4x bonus. Any host can do this, but it disables all other skill shot opportunities.</p>"+UNK("I could not find the saucer in the photos, so it is not marked.")}
]},
/* ====== MINI-MODES ====== */
{g:"Main modes",id:"minimodes",title:"Mini-modes and the grid",steps:[
 {t:"How mini-modes work",h:alt(ALL),b:"<p>Each mini-mode is a simple two-shot combo marked by flashing arrows: yellow, blue and white, from top to bottom. Shoot any flashing arrow, then quickly shoot the shot of the same color before it times out.</p>"},
 {t:"Eddie Brock",h:NUM(["left_ramp","left_loop"]).concat(alt(["center_ramp","left_orbit","right_orbit","scoop"])),b:MM("left ramp, left loop","center ramp, left orbit","right orbit, scoop")},
 {t:"Flash Thompson",h:NUM(["left_orbit","left_ramp"]).concat(alt(["right_loop","right_orbit","scoop","center_ramp"])),b:MM("left orbit, left ramp","right loop, right orbit","scoop, center ramp")},
 {t:"Gwen Stacy",h:NUM(["right_loop","left_orbit"]).concat(alt(["left_ramp","scoop","left_loop","center_ramp"])),b:MM("right loop, left orbit","left ramp, scoop","left loop, center ramp")},
 {t:"Peter Parker",h:NUM(["center_ramp","left_ramp"]).concat(alt(["left_loop","scoop","right_orbit","left_orbit"])),b:MM("center ramp, left ramp","left loop, scoop","right orbit, left orbit")},
 {t:"Unlockable hosts",h:alt(ALL),b:"<ul><li><b>Hulk:</b> right orbit, right loop. Scoop, left orbit. Center ramp, left ramp.</li><li><b>Captain America:</b> left ramp, right loop. Left loop, right orbit. Scoop, center ramp.</li><li><b>Wolverine:</b> center ramp, left loop. Scoop, left orbit.</li><li><b>Ghost Rider:</b> left loop, scoop. Center ramp, left ramp. Right orbit, left orbit.</li></ul>"+UNK("The rulesheet's table has no third combo for Wolverine.")},
 {t:"Filling a column",h:["grid_stars",["canister_l",0,"alt"],["canister_r",0,"alt"]],b:"<p>Each mini-mode moves the host's path above the flippers and lights a Mayhem lock. Default hosts need one column of three to qualify their battle. Unlockable hosts need two.</p>"},
 {t:"What a full column gives",h:["center_ramp","left_ramp","host_ins"],b:"<p>The left ramp lets you change hosts if this was the first column this ball. If you are at level 10, the center ramp starts a battle. While a battle is lit, Mayhem locks cannot be lit or collected and Carnage modes cannot start.</p>"},
 {t:"Grid awards",h:["grid_awards"],b:"<p>Complete a square of four inserts to earn the award between them:</p><ul><li>Extra Time: longer timers.</li><li>+1x Playfield.</li><li>2x Web Combos: combo level rises by 2, not 1.</li><li>Flamethrower: if three adjacent shots are lit, it lights at the center one and counts all three.</li><li>Extra Ball Save: longer ball saves at the start of the ball and multiball modes.</li><li>2x Experience.</li></ul>"},
 {t:"Losing awards",h:["grid_awards","grid_stars"],b:"<p>Failing a battle resets the mini-mode path needed to light it, and any award touching a reset insert is disabled. Defeating Knull resets the whole grid.</p>"}
]},
/* ====== BATTLES ====== */
{g:"Main modes",id:"battles",title:"Battle modes",steps:[
 {t:"Starting a battle",h:["center_ramp","bosses",["grid_stars",0,"alt"]],b:"<p>Battles are the main objective. Complete a mini-mode path and reach at least level 10, then shoot the center ramp. Stern's apron card says the same.</p>"},
 {t:"How damage works",h:alt(ALL).concat(["scoop","bell"]),b:"<p>Deplete the boss's two health bars by making flashing shots. Some do more damage than others. The scoop gives Special Attack, 5x damage, by a different method in each battle. Shoot the bell tower for more time.</p><p>The second phase is the first made harder, with fewer shots or stricter timers. Timers also get lower as you unlock more hosts.</p>"},
 {t:"Riot",h:alt(ALL).concat(["scoop"]),b:"<p>Red shots move left to right, blue shots right to left. Shoot both to deal damage, or make shots when both colors are lit for large damage and lit Special Attack.</p>"},
 {t:"Agony",h:alt(ALL).concat(["bell"]),b:"<p>Make two shots to the flashing red shots for large damage and lit Special Attack. Stop the green shots taking over by shooting them when one lights. Shoot the bell tower to relight shots.</p>"},
 {t:"Phage",h:[["left_ramp",1],["right_orbit",2],"bell",["center_ramp",0,"alt"],["left_loop",0,"alt"],["scoop",0,"alt"]],b:"<p>The left ramp and right orbit are lit. The left ramp starts a combo sequence for large damage. The right orbit lights the bell tower, which shifts into shooting the three center shots for damage. Special Attack: make all three center shots.</p>"+UNK("The rulesheet does not name the three center shots. The ones marked are my guess.")},
 {t:"Lasher",h:["left_orbit","right_orbit",["left_ramp",0,"alt"],["right_loop",0,"alt"]],b:"<p>Shoot the left and right orbits, with the shots near them doing smaller damage. Lasher leaps between orbits, so keep track of him. Special Attack: make enough shots to either orbit.</p>"+UNK("The rulesheet does not name the nearby shots. The ones marked are my guess.")},
 {t:"Beating bosses in Mayhem",h:["canister_l","canister_r","bosses"],b:"<p>A boss can also be defeated by bringing it into Mayhem Multiball and scoring the super jackpot, in the order the balls were locked. Change Host will not light at the left ramp from this. It only lights from a mini-mode column (once per ball) or by playing or failing the battle that follows.</p>"},
 {t:"What winning leads to",h:["bosses","grendel","knull"],b:"<ul><li>All four minor bosses: qualifies Hybrid.</li><li>One minor boss (two for unlockable hosts) and level 20: Grendel is next.</li><li>Grendel beaten and level 30: Knull.</li></ul>"},
 {t:"Failing",h:["grid_stars"],b:"<p>Failing a battle resets the mini-mode path needed to light it.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"mayhem",title:"Mayhem Multiball",steps:[
 {t:"Lighting locks",h:["grid_stars",["canister_l",0,"alt"],["canister_r",0,"alt"]],b:"<p>The game starts with a few locks lit, depending on host. After that, complete mini-modes to light them: one more mini-mode required for each lock, up to three.</p><p>Locks cannot score while the center ramp is lit for a battle. All available battles must be played or lost first.</p>"},
 {t:"Locking",h:["canister_l","canister_r"],b:"<p>When a lock is lit, two shots flash green, one to lock in the left canister and one in the right.</p>"+UNK("The rulesheet does not say which two shots. Stern's apron card only says shoot lock.")},
 {t:"Perks",h:["canister_l","canister_r","bosses"],b:"<p>Each canister has a set of awards. The number and position of locked balls decide the perks for that multiball: credit for any of the four battles, 2x experience or +1x playfield.</p><ul><li>3 balls in the left lock: 2x XP for that multiball.</li><li>3 balls in the right lock: +1x playfield during your next Mayhem Multiball.</li></ul>"},
 {t:"Stacking more balls",h:["canister_l","canister_r"],b:"<p>Hold the action button to abort multiball and lock up to 6 balls, if you want to keep going for perks.</p>"},
 {t:"Phase 1, quick jackpots",h:NUM(["left_ramp","scoop"]),b:"<p>With one ball in play, alternate between the left ramp and scoop for quick jackpots, worth XP and spotting a jackpot in phase 2. Balls keep releasing from alternating canisters.</p><p>Balls release when a quick jackpot times out, you miss a shot, or 9 have been scored. Ball save runs throughout, and draining times out the current jackpot at once.</p>"},
 {t:"Phase 2, multiball",h:alt(ALL),b:"<p>All shots are lit for jackpots with your perks active. Make them all to score a super jackpot and instantly complete one battle you brought in, in lock order. For later super jackpots, each shot needs two hits for double jackpots, then three for triple.</p>"},
 {t:"Missed super jackpot",h:[],b:"<p>If you light a super jackpot and Mayhem ends before you collect it, it stays lit for a few seconds, then goes.</p>"}
]},
{g:"Multiballs",id:"carnage",title:"Carnage modes",steps:[
 {t:"Lighting Carnage",h:[["captive",1],["carnage_track",1],["center_ramp",2],"carnage_ins"],b:"<p>Shoot the captive ball enough times to lock Carnage in Ravencroft. Once he is all the way back, the center ramp lights to start a Carnage mode.</p>"},
 {t:"Carnage Multiball",h:[["captive",1],["scoop",2],"sj_ins",["infected_t",0,"alt"]],b:"<p>First in the order. Lock Carnage in Ravencroft again with the captive ball to light the super jackpot at the scoop. Other shots and completing the Infected targets score jackpots and raise the super jackpot.</p>"},
 {t:"Carnage Hurry-Up",h:["captive","carnage_track",["left_ramp",0,"alt"],["center_ramp",0,"alt"]],b:"<p>Second. Get Carnage all the way back to Ravencroft to score a hurry-up. Shooting any ramp or the captive ball raises it. Bottom lane completions also raise its value.</p>"},
 {t:"Blood Lust",h:["center_ramp","captive","bell",["carnage_ins",0,"alt"]],b:"<p>Third. Unlike the others, this one is mutually exclusive. Shoot blue shots for big points. Keep your flips by looping the center ramp then shooting the captive ball (up to three times), or shooting the bell tower. Carnage attacks if too long passes with no shot, taking a large amount of flips.</p>"}
]},
{g:"Multiballs",id:"quickmb",title:"Quick Doppelganger Multiball",ed:"premium",steps:[
 {t:"Qualifying",h:["right_loop","left_loop"],b:"<p>Premium and LE only, as Gwen Stacy or Venomized Wolverine. Make 8 right loop shots in single-ball play to lock the ball at the entrance to the left loop.</p>"},
 {t:"Starting",h:["uturn"],b:"<p>Quickly shoot the 180 ramp with the ball that launches to score a jackpot and start multiball.</p>"},
 {t:"Scoring",h:["dopp_targets",["scoop",0,"alt"]],b:"<p>All Doppelganger targets are lit for a hurry-up, locked in as soon as any target is made. Four shots then light for jackpots at that value. Collect all four to light the super jackpot at the scoop, worth 4x the value.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"infected",title:"Infected and Doppelganger",steps:[
 {t:"Defeating Infected",h:["infected_t",["infected_ins",0,"alt"]],b:"<p>Shoot any of the five red targets, then shoot the same one again quickly.</p><ul><li>Every 4: bonus X.</li><li>Every 10: Sleeper unlocked.</li><li>15 and 65: light extra ball.</li><li>20 and 70: light Scream.</li></ul>"},
 {t:"Doppelganger attacks",h:["infected_t","left_loop","dopp_targets"],b:"<p>He attacks at seemingly random intervals every few Infected. In Competition mode the attacks come at set intervals, and the flashing flyaway target is predetermined.</p>"},
 {t:"Defeating him on the Pro",ed:"pro",h:["left_loop"],b:"<p>Shoot the left loop. The first time takes one hit, then two, then three, up to four. Pro Doppelganger scoring can be multiplied by web combos.</p>"},
 {t:"Defeating him on Premium/LE",ed:"premium",h:["dopp_targets"],b:"<p>Hit the flyaway targets. The first time takes one hit, then two, then three, up to four. Scoring here cannot be multiplied by web combos.</p>"},
 {t:"Rampage",h:[["center_ramp",1],["left_loop",2],["dopp_targets",2],["rampage_ins",0,"alt"]],b:"<p>Defeat three Doppelgangers to light Rampage at the center ramp, when no other modes are running.</p><p>You get a few seconds to shoot blue shots to build the value. Then he spawns with a short ball save. Hit him as many times as you can before time runs out. Each hit briefly pauses the timer. There is no grace period.</p>"}
]},
{g:"Other scoring",id:"xp",title:"Experience and team-ups",steps:[
 {t:"Experience points",h:["bosses"],b:"<p>Tasks score XP and level you up. Your level is remembered with a registered Insider Connected account. Levels unlock harder battles and raise your battle damage. The maximum is 99, and beating Knull resets you to level 1.</p><p>XP doubles from a grid award and from locking 3 Mayhem balls in the left lock, for that multiball only.</p>"},
 {t:"Using team-ups",h:["team_ups"],b:"<p>At the start of any multiball or battle, use the flippers and action button to change host and select any team-ups you have. A qualified but unused team-up stays for the next game if you are signed in. Using one disqualifies it until you earn it again.</p>"},
 {t:"Hybrid",h:["team_ups","bosses"],b:"<p>Beat all four battles in a game, properly or through Mayhem super jackpots. The action button then collects all lit shots and adds +2x playfield for a short time.</p>"},
 {t:"Sleeper",h:["team_ups",["infected_t",0,"alt"]],b:"<p>Unlocked by every 10 Infected, and if Flash Thompson is the game's first host. The action button adds a ball in multiball or adds time in a timed battle. During Toxin Team-Up, add-a-ball takes priority.</p>"},
 {t:"Miles Morales",h:["team_ups"],b:"<p>Available if Peter Parker is the game's first host, or unlock it with a 4-way combo. All combos then increment by 2, not 1.</p>"}
]},
{g:"Other scoring",id:"pfx",title:"Bell tower and playfield X",steps:[
 {t:"Lighting the bell tower",h:[["center_ramp",1],["bell",2],"multiplier"],b:"<p>Make repeated center ramps. The first lit tower takes two ramps, the second three, and so on. A lit shot adds +1x playfield for a limited time, up to 7x. Unlit shots add more time.</p>"},
 {t:"Flash and Hulk",h:["left_loop","uturn"],b:"<p>Flash Thompson and Venomized Hulk can also shoot the left loop in place of the bell tower to collect playfield X advances.</p>"},
 {t:"Bell Tower Frenzy",h:[["center_ramp",1],["bell",2]],b:"<p>Shoot at least four center ramps before the lit bell tower to start this fast scoring mode, worth 5K +500 per bell tower shot. Later frenzies need two more center ramps each.</p>"},
 {t:"Untimed playfield X",h:["grid_awards","canister_r"],b:"<ul><li>The +1x Playfield grid award, as long as its square remains full.</li><li>Locking 3 Mayhem balls in the right lock, only during your next Mayhem Multiball.</li></ul>"}
]},
{g:"Other scoring",id:"combos",title:"Combos and Host Hurry-Up",steps:[
 {t:"Web combos",h:alt(ALL),b:"<p>Shoot flashing shots in sequence to score combos and boost each shot's multiplier, up to 5x at a 10-way combo. Combos in battles deal more damage.</p>"},
 {t:"Host combos",h:[["scoop",0]],b:"<p>Enabled after playing Toxin Team-Up. Each host's signature combo has its own colored shots. Finishing it lights the scoop for Host Hurry-Up, where you repeat the combo before time runs out, scoring the displayed value on each shot. It starts at 20M, and each one adds the last value. Each host's combo works once per game.</p>"},
 {t:"Eddie Brock",h:NUM(["center_ramp","left_ramp","left_loop","right_orbit"]),b:"<p>Center ramp, left ramp, left loop, right orbit.</p>"},
 {t:"Flash Thompson",h:[["right_loop",1],["scoop",2],["left_ramp",3],["scoop",4]],b:"<p>Right loop, scoop, left ramp, scoop.</p>"},
 {t:"Gwen Stacy",h:[["left_loop",1],["center_ramp",2],["left_loop",3],["left_ramp",4]],b:"<p>Left loop, center ramp, left loop, left ramp.</p>"},
 {t:"Peter Parker",h:NUM(["left_orbit","left_ramp","left_loop","scoop"]),b:"<p>Left orbit, left ramp, left loop, scoop.</p>"},
 {t:"Unlockable hosts",h:alt(ALL),b:"<ul><li><b>Hulk:</b> right orbit, scoop, left orbit, left ramp.</li><li><b>Captain America:</b> left loop, center ramp, left orbit, left ramp.</li><li><b>Wolverine:</b> left orbit, left ramp, scoop, center ramp.</li><li><b>Ghost Rider:</b> left ramp, left loop, right loop, right orbit.</li></ul>"}
]},
{g:"Other scoring",id:"spider",title:"Spider-Sense",steps:[
 {t:"Using it",h:alt(ALL),b:"<p>While any mode is running, hold the action button to light a random shot white for a short time. Making it scores a hurry-up starting at 25M and helps the running mode.</p>"},
 {t:"What it does",h:[],b:"<ul><li>Battle: lights Special Attack.</li><li>Doppelganger: instantly defeats him.</li><li>Carnage Multiball: lights the super jackpot.</li><li>Carnage Hurry-Up: scores it at the current value.</li><li>Blood Lust: counts as a shot and adds flips.</li><li>Mayhem: collects one set of jackpots, lighting super jackpot if applicable.</li><li>Toxin Team-Up: lights the super jackpot.</li><li>Rampage: collects one full set of shots in the build phase.</li></ul>"},
 {t:"Hulk Smash",h:[],b:"<p>Venomized Hulk has no Spider-Sense. Instead, the action button scores every shot in the game, once per ball. This takes priority over Hybrid's super bomb, though its +2x still applies.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Lighting Mystery",h:[["bottom_lanes",1],["scoop",2],"scoop_panel"],b:"<p>Complete the bottom lanes three times to light Mystery at the scoop. Each later award takes two more completions than the last. Mystery cannot be collected while Doppelganger is active.</p>"},
 {t:"Choosing",h:["scoop"],b:"<p>You see three awards, and the fourth is always all of the above. Venomized Captain America always gets all of the above. In Competition mode, awards come in a set order.</p>"},
 {t:"Award pool: progress",h:[],b:"<ul><li>Complete any grid box</li><li>Light Carnage</li><li>Increase Carnage Hurry-Up</li><li>Light 3 locks</li><li>+1000 XP</li><li>+2 or +3 levels</li><li>Unlock any team-up</li><li>Defeat 5 Infected</li></ul>"},
 {t:"Award pool: scoring",h:[],b:"<ul><li>Scream</li><li>+1x playfield</li><li>Bell Tower Frenzy, or increase it</li><li>Light two Mysteries</li><li>Big points (5M), bigger points (10M)</li><li>+1x, +2x or +3x bonus</li><li>Light extra ball (percentage-based)</li><li>Special (percentage-based)</li></ul>"}
]},
{g:"Other scoring",id:"scream",title:"Scream",steps:[
 {t:"Starting",h:["scoop",["infected_t",0,"alt"]],b:"<p>This video mode lights at the scoop after enough Infected (20 the first time), or from a Mystery award.</p>"},
 {t:"Playing",h:[],b:"<p>Use the left and right flipper buttons to defeat Infected that spawn on each side. Scream can defeat several at once if they are close together on the same side. It awards 10M at the start, even if you defeat none, and 10M more for defeating them all, plus XP for each. Web combos affect the points.</p>"}
]},
{g:"Other scoring",id:"pops",title:"Million Plus Pops",ed:"premium",steps:[
 {t:"Starting",h:["uturn"],b:"<p>Premium and LE only, as Flash or Hulk. Make 8 shots to the target below the U-turn ramp.</p>"},
 {t:"Running",h:alt(["left_orbit","right_orbit"]),b:"<p>For a timed period, all pop bumper hits are worth 1M x your playfield multiplier. All orbit shots send balls to the bumpers too.</p>"+UNK("I could not find the pop bumpers in the photos, so they are not marked.")}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["scoop","eb_ins",["infected_t",0,"alt"]],b:"<p>Lit at the scoop by defeating enough Infected, or by a rare, percentage-based Mystery award. Stern's apron card also says Daily Bugle for the extra ball.</p>"},
 {t:"End-of-ball bonus",h:[],b:"<p>Infected defeated that ball, plus points from XP collected that ball, multiplied by bonus X. Bonus X rises by completing the top lanes, defeating Infected, or top lane skill shots.</p>"+UNK("I could not find the top lanes in the photos, so they are not marked. The rulesheet does not say how many there are.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"toxin",title:"Toxin Team-Up",steps:[
 {t:"Lighting it",h:["scoop",["toxin_art",0,"alt"]],b:"<p>The scoop lights after starting Mayhem Multiball, starting Carnage Multiball, and defeating a Doppelganger. Stern's apron card says the same.</p>"},
 {t:"Single-ball phase",h:["captive",["carnage_track",0,"alt"]],b:"<p>Three random shots light for two jackpots each, starting at 1M and rising 1M per shot. Shoot Carnage for 2x or 3x, but only briefly, as his position slowly resets. Draining in this phase ends the mode.</p>"},
 {t:"Super jackpot",h:["scoop","sj_ins"],b:"<p>All six jackpots light a 25M super jackpot at the scoop. Collecting it adds a ball for 2-ball multiball. Later super jackpots add 25M to the value. The mode ends when the multiball ends.</p>"},
 {t:"Sleeper",h:["team_ups"],b:"<p>If you select Sleeper in the intro, the flashing action button always adds a ball, even in the single-ball phase.</p>"}
]},
{g:"Wizard modes",id:"boss",title:"Grendel and Knull",steps:[
 {t:"Getting there",h:["center_ramp","grendel","knull"],b:"<p>Defeat one minor boss, then reach level 20 for Grendel or level 30 for Knull. Complete your host's required mini-modes and shoot the center ramp.</p>"},
 {t:"Grendel",h:["grendel","bell",["scoop",0,"alt"]],b:"<p>Shoot any lit shot to light the others, excluding the one made, for three levels of damage and more time. The bell tower also adds time. A lit red shot or enough damage lights Special Attack.</p><p>If Grendel attacks, your flippers reverse until you make a flashing blue shot. On the fourth health bar it becomes 2-ball multiball. If a ball drains, sudden death starts and the bell tower no longer adds time.</p>"},
 {t:"Knull",h:["knull","bell",["scoop",0,"alt"]],b:"<p>Blue, yellow and red shots deal small, medium and large damage and add time. The bell tower adds time too. A lit red shot lights Special Attack. The fifth health bar is 2-ball multiball, with the same sudden death rule.</p>"},
 {t:"Knull's tricks",h:[],b:"<p>At any time in a phase he can turn all shots green and require more shots, dim the whole playfield, or remove power from a flipper.</p>"},
 {t:"Beating Knull",h:["knull","grid_stars"],b:"<p>This raises your Hero ranking on Insider Connected, lets you unlock another host, resets your XP and resets the grid.</p>"}
]},
{g:"Wizard modes",id:"mania",title:"Symbiote Mania",steps:[
 {t:"Access",h:["center_ramp","bosses"],b:"<p>Topper only. You must own the topper or have played a connected game with it in the last 3 months. Start all four minor bosses, then shoot the center ramp with no other mode running.</p>"},
 {t:"The mode",h:[],b:"<p>All eight characters are played in random order, and on the Premium and LE the playfield morphs between them. Complete three distinct shots to advance from each.</p>"}
]},
{g:"Wizard modes",id:"klyntar",title:"Klyntar Multiball",steps:[
 {t:"Qualifying",h:["center_ramp"],b:"<p>The center ramp lights after completing all of these:</p><ul><li>Defeat Knull in the final battle</li><li>Start Rampage</li><li>Start Blood Lust, the third Carnage mode</li><li>Start Toxin Team-Up</li><li>Start Scream</li><li>Complete a Host Hurry-Up</li><li>Start Bell Tower Frenzy</li></ul>"},
 {t:"The mode",h:["left_ramp","center_ramp","scoop","right_orbit"],b:"<p>A timed 2-ball multiball with unlimited ball save. These four shots score 4-stage hurry-ups that rise by the last one awarded. Each shot dims the playfield, until only the final shot's insert is flashing.</p><p>It ends at 16 shots or when time runs out, with a bonus for seconds left if completed.</p>"}
]}
];

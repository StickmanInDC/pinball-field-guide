/* ---------- playfield features (coordinates in the 640x1242 crops; Premium and LE photos are aligned to the Pro by a perspective fit; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[107,512],[94,470],[78,410],[64,340],[56,270]],18)],a:[80,420],x:"The lane up the left side from the arrow above the Child and Hunter inserts. Stern's lamp list calls the arrow Left Orbit and puts the Child and Hunter lamps on it. Where the lane runs behind the pop bumpers and Grogu is my reading of the manual."},
 spinner:{n:"Spinner (TIE fighter)",c:0,s:[R(74,464,28,22)],a:[88,475],x:"The TIE fighter plate in the left orbit. Stern's features list calls it the left orbit Tie Fighter spinning target, and the manual's Left Spinner switch sits here."},
 orbit_ins:{n:"Child and Hunter inserts",c:1,s:[C(118,560,12),C(118,590,12)],a:[118,575]},
 scoop:{n:"Left scoop",c:0,s:[C(167,512,14)],a:[167,512],x:"The hole above the arrow with the Foundry, Extra Ball and Mission inserts. Stern's lamp list calls the arrow Left Eject, and the features list calls it the left side scoop and VUK."},
 foundry_ins:{n:"Foundry and Extra Ball inserts",c:1,s:[C(200,640,12),C(213,683,12)],a:[206,660],x:"The purple insert is Foundry in Stern's lamp list; the yellow one is printed Extra Ball."},
 left_ramp:{n:"Left ramp",c:0,s:[B([[257,585],[248,528],[228,465],[208,410],[200,340],[212,220],[232,110]],20)],a:[257,580],x:"The arrow above the red Encounters insert. Stern's lamp list calls it Left Ramp. The clear ramp climbs the left side and runs through the back panel; a diverter sends the ball to the Encounter mini playfield (Stern's features list). The upper path is my reading of the photo."},
 enc_ins:{n:"Encounters insert",c:1,s:[C(275,640,13)],a:[275,640],x:"The red insert in front of the left ramp. It flashes red when an Encounter is ready."},
 center:{n:"Center ramp (Razor Crest)",c:0,s:[B([[315,532],[312,480],[307,435]],20)],a:[315,528],x:"The arrow printed Advance Razor Crest to Light Multiball. Stern's lamp list calls its lamps Razor 1, 2 and 3. The ramp runs up under the Razor Crest ship; where it goes after that is a guess."},
 razor:{n:"Razor Crest target",c:0,s:[C(305,452,13)],a:[305,452],x:"Stern's features list describes a hanging uplift target on the Razor Crest sculpture, and the manual lists a Razor Crest Hit Target here. It cannot be seen from above; this mark is my guess at where it hangs in the center lane."},
 ship:{n:"Razor Crest ship",c:1,s:[E(272,385,58,80)],a:[272,385]},
 uturn:{n:"U-turn",c:0,s:[B([[400,490],[404,452],[410,415]],18)],a:[406,445],x:"The white arrow above the Super Jackpot insert. Stern's Pro lamp list calls it Right Scoop and its features list calls it a static inner loop under the right helix ramp. I read it as the rulesheet's U-turn.",v:{premium:{n:"U-turn (right scoop)",x:"The white arrow above the Super Jackpot insert. Stern's lamp list calls it Right Scoop. On the Premium and LE, Stern's features list describes a dynamic inner loop with an up/down horseshoe scoop that feeds the left ramp return to the left flipper. The rulesheet calls it the U-turn, the right scoop, or the reverse scoop."}}},
 sj_ins:{n:"Super Jackpot insert",c:1,s:[C(378,542,12)],a:[378,542]},
 right_ramp:{n:"Right ramp (helix)",c:0,s:[B([[444,552],[460,500],[478,450],[492,400],[472,345],[422,325],[372,350]],20)],a:[444,548],x:"The arrow right of the 2X Ramp insert. Stern's lamp list calls it Right Ramp. The clear helix ramp starts between the two 2x targets and circles over the U-turn. The path is my reading of the photo."},
 tg2x:{n:"2x targets",c:0,s:[C(430,492,10),C(492,505,10)],a:[461,498],x:"The two standups either side of the right ramp entrance. Stern's manual calls them Right Ramp Left Target and Right Ramp Right Target; the features list calls them the 2x ramp targets. Placed from the manual and two target-like shapes in the photo."},
 x2_ins:{n:"2X Ramp insert",c:1,s:[C(422,526,11)],a:[422,526]},
 scope_arrows:{n:"Blue Scope arrows",c:1,s:[C(358,588,12),C(394,594,12),C(424,610,12)],a:[394,594],x:"Left to right: the U-turn, the left 2x target and the right ramp, per the lamp names in Stern's manual (Right Scoop Scope L, Scope Mid, Right Ramp Scope R)."},
 ambush_ins:{n:"Ambush inserts",c:1,s:[C(346,632,13),C(412,650,13)],a:[379,641],x:"One below the U-turn arrows and one below the right ramp arrows."},
 mission_ins:{n:"Mission inserts",c:1,s:[C(225,718,12),C(282,680,12),C(398,688,12)],a:[282,680],x:"Yellow Mission inserts at the left scoop, the left ramp and the right ramp."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[545,465],[556,400],[564,330],[566,250],[556,170]],18)],a:[545,460],x:"The arrow at the far right. Stern's lamp list calls it Right Orbit. The upper part of the lane is my reading of the photo."},
 boba:{n:"BOBA and FETT targets",c:0,s:[C(512,688,10),C(514,722,10)],a:[513,705],x:"Stern's manual calls them the Right 2 Bank, on the right wall beside the BOBA and FETT inserts. The targets are hard to see, so the marks follow the manual."},
 boba_ins:{n:"BOBA and FETT inserts",c:1,s:[C(478,686,13),C(478,722,13)],a:[478,704]},
 hunter_tg:{n:"Hunter targets (left 3-bank)",c:0,s:[C(98,672,9),C(96,705,9),C(94,738,9)],a:[96,705],x:"The left wall is printed Targets Light Hunter, beside three orange inserts. Stern's manual calls them the Left 3 Bank. The targets are hard to see, so the marks follow the manual."},
 hunter_ins:{n:"Hunter target inserts",c:1,s:[C(126,671,12),C(122,705,12),C(118,739,12)],a:[122,705]},
 pops:{n:"Pop bumpers",c:0,s:[C(122,377,20),C(222,402,18)],a:[170,390],x:"Two pop bumpers below the CHILD lanes. The left one has a printed cap; the right one sits under the Razor Crest ship. Placed from Stern's manual."},
 child:{n:"CHILD lanes",c:1,s:[C(90,268,12),C(140,272,12),C(190,273,12),C(239,277,12),C(271,280,12)],a:[180,274],x:"The C, H, I, L and D inserts. The rollover lanes are just below them."},
 grogu:{n:"Grogu",c:1,s:[E(140,95,70,95)],a:[140,95],x:"The Grogu sculpture at the top left.",v:{premium:{x:"The Grogu sculpture at the top left. On the Premium and LE it has a \"Force\" magnet that can catch the ball and throw it down the CHILD lanes (Stern's features list). The rulesheet does not describe the magnet."}}},
 mini:{n:"Encounter mini playfield",c:1,s:[E(447,245,74,68)],a:[447,245],x:"The helmet-shaped mini playfield at the top right. On the Pro it is fixed, with one flipper.",v:{premium:{s:[E(447,170,95,118)],a:[447,170],x:"The helmet-shaped mini playfield at the top right. On the Premium and LE it tilts and rotates, with two flippers (Stern's features list)."}}},
 mini_tg:{n:"Encounter targets",c:0,s:[C(402,238,9),C(415,223,9),C(435,213,9),C(458,213,9),C(478,222,9),C(492,237,9)],a:[447,220],x:"Six standups on the mini playfield (Stern's features list). The marks sit on the six round lights at the top of the helmet; the targets themselves are not clear in the photo.",v:{premium:{s:[C(400,125,10),C(415,103,10),C(438,90,10),C(465,90,10),C(487,107,10),C(500,132,10)],a:[450,105]}}},
 mini_fl:{n:"Mini playfield flipper",c:0,s:[B([[470,296],[520,282]],12)],a:[495,289],x:"The Pro's single mini playfield flipper. The white bar at the lower right of the helmet is my reading of it.",v:{premium:{n:"Mini playfield flippers",c:1,s:[B([[356,242],[424,280]],12),B([[540,242],[466,280]],12)],a:[447,262],x:"The two white flippers at the bottom of the helmet."}}},
 level_ins:{n:"Encounter level inserts",c:1,s:[C(447,282,9),C(447,307,9)],a:[447,295],x:"Numbered 3, 2 (and 1, hidden under the plastic in the Pro photo).",v:{premium:{s:[C(447,195,10),C(447,228,10),C(447,262,10)],a:[447,228],x:"Numbered 3, 2 and 1 down the helmet's visor."}}},
 missions_tbl:{n:"Mission inserts (1 to 5) and I Like Those Odds",c:1,s:[C(250,822,11),C(260,795,11),C(290,785,11),C(318,795,11),C(330,822,11),C(290,822,14)],a:[290,805]},
 razor_ins:{n:"Razor Crest inserts",c:1,s:[C(205,902,11),C(215,932,11),C(242,947,11),C(245,905,15)],a:[225,905],x:"The green inserts numbered 1, 2 and 3, and the larger Precious Cargo insert."},
 enc_tbl:{n:"Encounter inserts",c:1,s:[C(372,903,11),C(362,932,11),C(335,947,11),C(335,905,15)],a:[355,945],x:"The red inserts numbered 1, 2 and 3, and the larger You Have What I Want insert."},
 way_ins:{n:"This Is The Way insert",c:1,s:[C(290,875,18)],a:[290,875]},
 pfx_ins:{n:"+1X playfield multiplier inserts",c:1,s:[C(400,745,13),C(440,775,13),C(395,787,13)],a:[410,770],x:"Three +1X inserts with blue, green and orange rings, printed All 3 for +5X."},
 inlanes:{n:"Inlanes",c:0,s:[E(82,965,8,26),E(495,960,8,26)],a:[82,965],x:"Marks follow the lane slots in the photo."},
 outlanes:{n:"Outlanes and Heal inserts",c:0,s:[E(32,985,8,26),E(542,980,8,26),C(35,915,12),C(538,915,12)],a:[35,940],x:"The lane slots, with a printed Heal insert above each."},
 scope_ins:{n:"Scope insert",c:1,s:[C(132,1039,13)],a:[132,1039],x:"The blue Scope insert at the bottom of the left inlane."},
 shooter:{n:"Shooter lane",c:0,s:[B([[588,1100],[588,900],[586,700]],14)],a:[588,900],x:"The plunger lane at the far right, marked from the photo."},
 flippers:{n:"Flippers",c:1,s:[B([[165,1110],[245,1155]],16),B([[405,1110],[325,1155]],16)],a:[285,1135]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_orbit","left_ramp","center","uturn","right_ramp","right_orbit"];
var ALL=["left_orbit","scoop","left_ramp","center","uturn","right_ramp","right_orbit"];

var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["missions_tbl","razor_ins","enc_tbl","way_ins"],b:"<p>Three sets of features lead to the wizard modes: five Missions, started at the left scoop; three Razor Crest Multiballs, started at the center ramp; and three Encounters, played on the mini playfield. Finishing each set qualifies a mini-wizard mode, and all three lead to This Is The Way.</p>"},
 {t:"The main shots",h:NUM(ALL),b:"<p>Left to right, as I place them: left orbit (spinner), left scoop, left ramp, center ramp, U-turn, right ramp and right orbit.</p>"+UNK("The rulesheet's Layout section is two photos with no text. Positions come from the lamp and switch names in Stern's service manual, matched to the photo by eye. The rulesheet speaks of six \"major shots\" without listing them; I read them as everything here except the left scoop.")},
 {t:"Left side",h:["left_orbit","spinner","orbit_ins","scoop","foundry_ins","hunter_tg","hunter_ins"],b:"<p>The left orbit with its TIE fighter spinner, the left scoop (Missions, Foundry and Extra Ball), and the three Hunter targets on the left wall.</p>"},
 {t:"Center",h:["left_ramp","enc_ins","center","razor","ship"],b:"<p>The left ramp, which can send the ball to the Encounter mini playfield, and the center ramp under the Razor Crest ship, with the Razor Crest target hanging in front of it.</p>"},
 {t:"Right side",h:["uturn","right_ramp","tg2x","right_orbit","boba"],b:"<p>The U-turn under the right helix ramp, the right ramp with a 2x target on each side, the right orbit, and the BOBA and FETT targets on the right wall.</p>"},
 {t:"Upper playfield",h:["child","pops","grogu","mini","mini_tg"],b:"<p>The CHILD rollover lanes and two pop bumpers at the top left, and the helmet-shaped Encounter mini playfield at the top right. Both orbits can be diverted into the CHILD lanes.</p>"},
 {t:"Pro differences",ed:"pro",h:["mini","mini_fl","uturn"],b:"<p>From Stern's features list: the Pro's Encounter mini playfield is fixed, with one flipper, and the U-turn is a static inner loop. The Pro has no Grogu magnet. From the rulesheet: the Pro's Encounter equipment is the Rising Phoenix, and Ambush is set up at the U-turn.</p>"},
 {t:"Premium and LE differences",ed:"premium",h:["mini","mini_fl","uturn","grogu"],b:"<p>From Stern's features list: the Premium and LE have a motorized, tilting and rotating mini playfield with two flippers and an exit up-post, an up/down horseshoe scoop at the U-turn, and Grogu's \"Force\" magnet. From the rulesheet: their Encounter equipment is the Jet Pack, which also levels the mini playfield, and Ambush is set up at the right scoop.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Regular skill shot",h:["child","shooter"],b:"<p>The plunged ball falls into the CHILD lanes. A strong plunge always falls through the C lane, so time the plunge or nudge the ball into one of the two cycling lit lanes. A skill shot scores 1M (plus 1M per skill shot) and gives +2 bonus X, lights the Child award, and adds one Super Pops bumper.</p>"},
 {t:"Super skill shot",h:NUM(["uturn","right_ramp"]).concat(alt(["scoop","left_ramp","center"])),b:"<p>Hold the left flipper until the ball passes the C lane. Then shoot the U-turn, the right ramp and one of three final shots, within 5 seconds per shot:</p><ul><li>Left scoop: start the lit Mission</li><li>Left ramp: start the lit Encounter</li><li>Center ramp: start the lit Razor Crest Multiball or Hurry-Up</li></ul>"}
]},
{g:"Layout and basics",id:"modes",title:"Play modes and strategy",steps:[
 {t:"Play modes",h:["flippers"],b:"<p>Hold both flipper buttons in attract mode for a menu:</p><ul><li>Standard</li><li>Competition: randomness removed, no extra balls, no Child award</li><li>Cooperation: shared progress for 2 to 4 players</li><li>Team Play: 2 vs 2, 3 vs 1 or 2 vs 1</li><li>Impossible Play: no ball save or extra balls, harder multiballs, less Beskar, no Armor, and about 2.5 seconds of flipper hold time that recharges</li><li>Monster Play: player one plays Impossible, the rest Standard</li><li>Challenge Mode: play You Have What I Want directly</li><li>DJ Mixer: the music player</li></ul>"},
 {t:"Quick strategy",h:["pfx_ins","boba","scope_ins"],b:"<p>From the rulesheet: stacking a Mission with a Razor Crest Multiball is quick, safe scoring. Any playfield multiplier boosts scoring a lot. Save the Flamethrower for a single big shot, such as the Jetpack Multiball Super Jackpot, or for many lit shots at once.</p>"},
 {t:"The Fire Triangle",h:["pfx_ins","center"],b:"<p>Get all three playfield multipliers running, then play a multiball. Complete Scope and start (ideally complete) Hunter first; the BOBA FETT multiplier can be started after the multiball begins. In Ice Spider or Pirates Multiball, use the Flamethrower once all multipliers run, for 12x on each shot's first hit and 6x after while the timer lasts. In Jetpack Multiball, build the Super Jackpot to 50M with the multipliers active, then use the Flamethrower before collecting it in single-ball play, for 600M.</p>"}
]},
/* ====== RAZOR CREST ====== */
{g:"Razor Crest",id:"razor",title:"Starting Razor Crest Multiballs",steps:[
 {t:"Hitting the Razor Crest",h:["razor","center","razor_ins"],b:"<p>Hit the Razor Crest target hard enough to register a direct hit, enough times to light the multiball. Each Razor Crest feature started needs one more hit. Then start it with a shot that goes all the way around the center ramp.</p>"},
 {t:"Choosing the multiball",h:["boba","razor_ins"],b:"<p>The flashing numbered green insert shows which multiball will start. Hit the BOBA and FETT targets to change it, when a multiball is not already lit. Each of the three can be played once until This Is The Way.</p>"},
 {t:"Relighting",h:["hunter_tg","inlanes","center"],b:"<p>After a multiball, complete a Hunter mode to relight the Razor Crest, for Razor Crest Hurry-Up and then the next multiball. It also relights when the ball drains, if it is not already lit. Each Super Jackpot in a multiball adds 2.5M to the end-of-ball bonus. Playing all three qualifies Precious Cargo as the final Razor Crest award.</p>"}
]},
{g:"Razor Crest",id:"ice",title:"Ice Spider Multiball",steps:[
 {t:"Purple shots",h:alt(ALL),b:"<p>Make every purple shot once to kill the ice spiders.</p>"+UNK("The rulesheet does not list which shots are purple. All main shots are marked.")},
 {t:"Super Jackpot",h:["uturn","sj_ins","mini_tg"],b:"<p>That lights a timed Super Jackpot at the U-turn. Collect it as many times as you can in 20 seconds, then the jackpots relight. Each upper playfield target adds 5 seconds to the Super Jackpot timer.</p>"+UNK("I read the \"upper playfield targets\" as the Encounter mini playfield targets.")}
]},
{g:"Razor Crest",id:"jetpack",title:"Jetpack Multiball",steps:[
 {t:"Jackpots",h:alt(ALL),b:"<p>All shots are lit purple for jackpots, and each one raises the Super Jackpot. A shot cannot be repeated until a different shot is made.</p>"},
 {t:"Mini playfield jackpots",h:["left_ramp","mini","mini_tg"],b:"<p>While jackpots are lit, the left ramp always diverts to the mini playfield. Hitting any of the six flashing purple targets there scores a jackpot and adds to the Super Jackpot; hitting all six adds a ball.</p>"},
 {t:"Super Jackpot",h:["uturn","sj_ins"],b:"<p>The Super Jackpot lights at the U-turn after the multiball ends, so you collect it in single-ball play.</p>"}
]},
{g:"Razor Crest",id:"pirates",title:"Pirates Multiball",steps:[
 {t:"Waves",h:alt(ALL),b:"<p>Shoot waves of lit shots to take out pirates and score jackpots. Each jackpot shot can be made once per wave, and each wave needs one more jackpot shot than the last.</p>"+UNK("The rulesheet does not list the jackpot shots.")},
 {t:"Keeping the rhydonium stable",h:["spinner","left_orbit"],b:"<p>Keep the rhydonium stable with switch hits and spinner shots.</p>"+UNK("The rulesheet does not say what happens if it becomes unstable.")},
 {t:"Super Jackpot",h:["uturn","sj_ins"],b:"<p>Complete Wave 3 to light the Super Jackpot at the U-turn. After you collect it, Wave 1 starts again and each jackpot needs two shots to each purple arrow.</p>"}
]},
{g:"Razor Crest",id:"rhurry",title:"Razor Crest Hurry-Up",steps:[
 {t:"Starting it",h:["center","razor"],b:"<p>Lit at the center ramp after the first and second Razor Crest Multiballs, and started the same way, with the same number of Razor Crest hits.</p>"},
 {t:"Playing it",h:["razor","pfx_ins"],b:"<p>A timed hurry-up: make the required number of Razor Crest target hits, collecting the hurry-up value on each. The base value and the shots needed both rise with each active playfield multiplier (+2 shots per multiplier). The mode ends when you make the hits or time runs out.</p>"}
]},
/* ====== MISSIONS ====== */
{g:"Missions",id:"missions",title:"Starting Missions",steps:[
 {t:"Lighting a Mission",h:["left_ramp","right_ramp","mission_ins","scoop"],b:"<p>Shoot both the left and right ramps to light a Mission at the left scoop. By default the scoop spots the ramp shots for the first two Missions.</p>"},
 {t:"Changing the Mission",h:["tg2x","x2_ins"],b:"<p>If a Mission is not lit yet, shoot either 2x target beside the right ramp to change which Mission is qualified.</p>"},
 {t:"Playing a Mission",h:["scoop","missions_tbl"],b:"<p>Missions are 60-second timed modes. Make all flashing yellow shots, usually ending at the scoop, for a timer bonus of 225,000 times the seconds left. A Mission ends in failure when the ball drains or time runs out, and cannot be replayed until This Is The Way. Each completed Mission adds 2.5M to the end-of-ball bonus, and starting two lights the extra ball. Whistling Birds collects all the Mission's lit shots.</p>"}
]},
{g:"Missions",id:"mlist",title:"The five Missions",steps:[
 {t:"1. Find the Asset",h:NUM(["right_ramp"]).concat(alt(["left_orbit","right_orbit","left_ramp"])).concat(["scoop"]),b:"<p>Three shots flash yellow. Make any one to light a hurry-up at the right ramp for about 10 seconds. Making the hurry-up lights both orbits and the left ramp for the hurry-up value. After two of those shots the left scoop lights to finish, or keep shooting the orbits and left ramp for more points.</p>"+UNK("The rulesheet does not say which three shots flash first.")},
 {t:"2. Deceive the Magistrate",h:["right_ramp","left_ramp","uturn","right_orbit","scoop"],b:"<p>Two halves. Mando (yellow): shoot the right ramp to start a hurry-up at the left ramp, with an optional bonus shot at the right orbit. Ahsoka (blue): shoot the U-turn, then the right orbit, then the U-turn again. The left scoop lights to finish only when both halves are done.</p>"+UNK("The rulesheet gives the right orbit bonus value as \"?\".")},
 {t:"3. Destroy the Imperial Base",h:alt(ALL).concat(["spinner"]),b:"<p>Shoot all shots. Spinner hits raise the value of each shot, shown as the inserts change from yellow to orange to red. The left scoop finishes the mode once enough shots are made.</p>"+UNK("The rulesheet does not say how many shots are needed.")},
 {t:"4. Defeat the Mudhorn",h:["pops","left_orbit","right_orbit","child","scoop","left_ramp","right_ramp"],b:"<p>Four yellow shots must be made; the pop bumpers change which they are. An orbit shot diverts the ball into the CHILD lanes and raises the yellow shots' value. After all four, the left scoop lights to finish, and the left and right ramps light for one-time bonus shots.</p>"},
 {t:"5. Infiltrate the Freighter",h:NUM(["uturn"]).concat(alt(["left_ramp","left_orbit"])).concat(["scoop","right_ramp"]),b:"<p>Shoot the U-turn to light the left ramp and left orbit briefly. Either one lights the left scoop to finish. The right ramp also lights for a bonus while the final shot is lit.</p>"}
]},
/* ====== ENCOUNTERS ====== */
{g:"Encounters",id:"encounters",title:"Encounters",steps:[
 {t:"Lighting an Encounter",h:["left_ramp","enc_ins"],b:"<p>Shoot the left ramp until the Encounters insert in front of it flashes red: one shot for the first Encounter, plus two for each one after. Then every left ramp shot goes to the mini playfield. Encounters can run in single-ball play or during Missions; otherwise they wait until the active mode ends.</p>"},
 {t:"Three waves",h:["mini","mini_tg","level_ins","mini_fl"],b:"<p>Each Encounter needs three waves of lit target hits, shown by flashing yellow inserts on the mini playfield. Later Encounters need more hits. Progress carries over between visits. The Rising Phoenix (Pro) or Jet Pack (Premium and LE) completes a wave instantly.</p>"},
 {t:"Bonus Level",h:["mini_tg"],b:"<p>After the three waves, a timed Bonus Level starts. All shots score 2M plus more for each target made during it, and the roving purple targets add to the value scored at the end. It ends when time runs out or the ball leaves the mini playfield.</p>"},
 {t:"Finishing them",h:["enc_tbl"],b:"<p>The three Encounters have the same rules with different scenes from the show. Complete all three, in order, to qualify You Have What I Want.</p>"},
 {t:"Sneaky Encounter",h:["shooter","right_orbit","left_orbit","mini"],b:"<p>Soft plunges and orbit shots that reach the mini playfield start a Sneaky Encounter, whose starting value carries over between visits. It has a 10-second timer that resets as you make target shots (blue, then purple, then green) and when the ball leaves the mini playfield.</p>"+UNK("The rulesheet does not say which orbit reaches the mini playfield. Stern's manual lists an Encounter Back Entrance switch near the top right.")},
 {t:"Pro mini playfield",ed:"pro",h:["mini","mini_fl"],b:"<p>On the Pro the mini playfield is fixed, with one flipper.</p>"},
 {t:"Premium and LE mini playfield",ed:"premium",h:["mini","mini_fl"],b:"<p>On the Premium and LE the mini playfield tilts, with two flippers. Using the Jet Pack also levels it.</p>"}
]},
/* ====== OTHER FEATURES ====== */
{g:"Other features",id:"equip",title:"Equipment",steps:[
 {t:"Getting equipment",h:["scoop","uturn","child"],b:"<p>Each piece of equipment can be qualified once at a time, by buying it at the Foundry, by scoring the U-turn during Scope (two random pieces), or from the Child award (two random pieces). Use it with the action button.</p>"},
 {t:"Flamethrower (orange)",h:alt(ALL),b:"<p>One use at the start of every game. Hold the action button to set the main arrow shots on fire from right to left; let go before the flames reach the left orbit and you lose the rest. The next shot to each flaming shot scores 2x everything for that shot. Flames go out when the ball drains. Continuing Ambush twice also gives one.</p>"},
 {t:"Amban Rifle (green)",h:["center"],b:"<p>Adds a ball to any multiball. The action button lights green once the initial ball save runs out.</p>"},
 {t:"Whistling Birds (yellow)",h:alt(ALL),b:"<p>Collects all flashing shots in a Mission, and lit jackpots during multiballs. It is affected by the Flamethrower multiplier.</p>"},
 {t:"Rising Phoenix or Jet Pack (red)",h:["mini","mini_tg"],b:"<p>Completes a wave of targets in an Encounter. It is the Rising Phoenix on the Pro and the Jet Pack on the Premium and LE, where it also levels the mini playfield.</p>"},
 {t:"Armor",h:["outlanes"],b:"<p>Adds ball save time in single-ball and multiball play. Once per game.</p>"}
]},
{g:"Other features",id:"foundry",title:"Foundry and Beskar",steps:[
 {t:"Earning Beskar",h:["inlanes","tg2x","child"],b:"<p>Beskar comes from completing a Hunter mode (at least 250), the left 2x target during Scope (200), and the Child award (300 to 400). It also builds slowly from shots and switches during Hunter.</p>"},
 {t:"The Foundry",h:["scoop","foundry_ins"],b:"<p>Once you have Beskar, Foundry lights at the left scoop. Buy up to two adjacent items per visit, with 10% off when you buy two, or pass and save your Beskar. Each purchase raises that item's price by 50% of its current cost.</p>"},
 {t:"Items",h:["scoop"],b:"<ul><li>Armor (200, once)</li><li>Whistling Birds (175)</li><li>Rising Phoenix or Jet Pack (175)</li><li>Flamethrower (175)</li><li>Amban Rifle (175)</li><li>Start Mission (175)</li><li>Razor Crest: light the next multiball or hurry-up (300)</li><li>Light Encounter (100)</li><li>Light Scope at the left inlane (75)</li><li>Light Heal, the outlane ball saver (200)</li><li>Extra Ball at the left scoop (600, once)</li><li>+1 playfield multiplier (500)</li></ul>"},
 {t:"The ? item",h:["scoop"],b:"<p>An item you cannot use is replaced by ?, which costs 100. Buying it starts a fast random selector; press the action button to stop it and win that item, even one you could not afford. Stopping on ? again gives a random award: light Ambush, start Hunter, start Dank Farrik! (a 2-ball multiball where every switch scores), light all three +1x playfield multipliers, or light Child.</p>"}
]},
{g:"Other features",id:"hunter",title:"Hunter",steps:[
 {t:"Lighting Hunter",h:["hunter_tg","hunter_ins","inlanes"],b:"<p>Complete the left bank of three targets to light Hunter at one of the inlanes. Either flipper button moves it between the lit inlanes.</p>"},
 {t:"The hunt",h:NUM(["left_orbit","right_orbit"]).concat(alt(["left_ramp","right_ramp"])),b:"<p>Roll through the lit inlane, in single-ball play, to start a 25-second hunt. Shoot the flashing orbit, then the opposite orbit, to collect at least 250 Beskar and end it. Lit ramp shots add 25 Beskar each.</p>"+UNK("The rulesheet says \"the lit left or right ramp\" without saying when each is lit.")},
 {t:"Rewards",h:["pfx_ins","center"],b:"<p>Completing a hunt also starts a 75-second playfield multiplier (the orange ring) and relights the Razor Crest if it is not lit.</p>"}
]},
{g:"Other features",id:"scope",title:"Scope",steps:[
 {t:"Lighting Scope",h:NUM(["uturn","tg2x","right_ramp"]).concat(["scope_arrows"]),b:"<p>Make all three shots with blue arrows (the U-turn, the left 2x target and the right ramp) to light Scope at the left inlane.</p>"+UNK("The rulesheet says the left 2x target. I mark both 2x targets as one feature; the left one is the shot.")},
 {t:"The Scope shot",h:["scope_ins","inlanes","uturn","tg2x","right_ramp"],b:"<p>Roll through the left inlane for a 5-second timed shot, with a short grace period. Hit a lit arrow to collect its award and start a 75-second playfield multiplier (the blue ring):</p><ul><li>U-turn: 2 random pieces of equipment, or points if you have them all</li><li>Left 2x target: 200 Beskar</li><li>Right ramp: 2M</li></ul><p>Each award can be collected once per set. After a set, play one of the four wizard modes to qualify Scope again.</p>"}
]},
{g:"Other features",id:"ambush",title:"Ambush",steps:[
 {t:"Starting Ambush",h:alt(MAJ),b:"<p>With no other modes running, a shot to the U-turn (Pro) or the right scoop (Premium and LE) may light all six major shots for about 5 seconds. Two of them start Ambush; the others escape and score 2M. On competition settings the second shot always starts it. After the first Ambush, five shots can start it.</p>"+UNK("I read the right scoop and the U-turn as the same shot location.")},
 {t:"Building the value",h:["uturn","ambush_ins"].concat(alt(["left_orbit","left_ramp","center","right_orbit"])),b:"<p>A hurry-up. The U-turn (reverse scoop) is lit red to stop the countdown, and the other shots are white, each adding a few seconds and raising the value. The U-turn locks the value in and lights the other shots blue, except the right ramp, to add more and go back to the white stage.</p>"},
 {t:"Cashing out",h:["right_ramp","ambush_ins"],b:"<p>Shoot the right ramp while all the shots are blue to end Ambush and collect, so it can go on as long as you keep raising the value. Continuing instead of ending pays bonus awards: 2 restarts give a Flamethrower; 3, 4 and 5 restarts each give +1x playfield. With all multipliers, the maximum is 720M.</p>"}
]},
{g:"Other features",id:"child_s",title:"The Child mystery award",steps:[
 {t:"Lighting Child",h:["left_orbit","right_orbit","orbit_ins"],b:"<p>Shoot either orbit once to light the Child award, then two times, three times, and so on after that.</p>"},
 {t:"Collecting it",h:["left_orbit","right_orbit","child"],b:"<p>When lit, orbit shots are diverted to the CHILD lanes. The display shows which award is at which lane, and the lane you roll through gives that award. With no rollover, the D award is scored. Whistling Birds collects all five.</p>"},
 {t:"Awards",h:["child"],b:"<ul><li>Equipment</li><li>300 to 400 Beskar</li><li>Super Pops</li><li>Super Spinner</li><li>+1 playfield multiplier</li><li>Light Heal</li><li>Ambush value +2M</li><li>+1x to +3x bonus multiplier</li><li>2.5M</li><li>Light Extra Ball</li><li>Special</li></ul><p>Competition mode disables the Child award.</p>"}
]},
{g:"Other features",id:"pfx",title:"Playfield multipliers",steps:[
 {t:"The three +1x",h:["pfx_ins"],b:"<p>Each +1x insert adds +1x to playfield scoring while running; all three together give +5x, for 6x. They start when earned and share one timer. They blink purple when active and strobe blue and purple near the end.</p>"},
 {t:"Orange: Hunter",h:["inlanes","left_orbit","right_orbit"],b:"<p>75 seconds, for completing a Hunter mode.</p>"},
 {t:"Blue: Scope",h:["scope_ins","scope_arrows"],b:"<p>75 seconds, for a successful Scope shot.</p>"},
 {t:"Green: BOBA FETT",h:["boba","boba_ins"],b:"<p>30 seconds, for hitting both BOBA FETT targets. Hitting them also adds time. It is the only multiplier that can be started during a multiball. Later ones need more hits, and the timer starts 10 seconds lower each time on the same ball (10 seconds minimum).</p>"},
 {t:"Other sources",h:["scoop","way_ins"],b:"<p>The Foundry, Ambush restarts and the Child award can also add a multiplier. Completing This Is The Way adds +1x for the rest of the game.</p>"}
]},
{g:"Other features",id:"pops_s",title:"Super Pops and Super Spinner",steps:[
 {t:"Super Pops",h:["pops","child"],b:"<p>Spell CHILD, or make the skill shot, to light one of the two bumpers below the CHILD lanes for 50,000 a hit. The Child award may light both.</p>"},
 {t:"Super Spinner",h:["spinner","left_orbit"],b:"<p>Starts after 100 spinner hits on one ball, or from the Child award. Every spin then scores 50,000 for the rest of the ball, rising 10,000 per left orbit shot to 100,000.</p>"}
]},
{g:"Other features",id:"eb",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["scoop","foundry_ins"],b:"<p>Collect lit extra balls at the left scoop. They light by starting two Missions, by buying one at the Foundry (600 Beskar, once), or from the Child award.</p>"},
 {t:"Heal",h:["outlanes"],b:"<p>Light Heal is an outlane ball saver, bought at the Foundry or given by the Child award.</p>"},
 {t:"End-of-ball bonus",h:["child"],b:"<p>Switch bonus, plus 2.5M per Super Jackpot and 2.5M per completed Mission, times the bonus multiplier. Spelling CHILD adds +1x; the skill shot adds +2x. Switch bonus resets each ball.</p>"}
]},
/* ====== TOPPER ====== */
{g:"Topper modes",id:"madness",title:"Mandalorian Madness (topper)",steps:[
 {t:"Qualifying it",h:["center","razor"],b:"<p>Only with The Mandalorian topper installed. Fill the topper's grid by winning a Mission, scoring a Super Jackpot in a Razor Crest Multiball, completing an Encounter, collecting a Scope award, completing a Hunter mode, and cashing out an Ambush. With all six lit and no other mode running, the next Razor Crest shot starts it.</p>"},
 {t:"Playing it",h:["scoop","left_ramp","right_ramp","uturn","tg2x","left_orbit","right_orbit"],b:"<p>Starts as a timed single-ball mode. The shots that got you here are lit; completing any set lights the U-turn for a Super Jackpot:</p><ul><li>Mission: left scoop, left ramp, right ramp</li><li>Scope: two of the U-turn, left 2x target or right ramp</li><li>Hunter: both orbits</li><li>Ambush: right ramp</li></ul><p>Each Super Jackpot adds a ball, up to a 4-ball multiball, and stacked ones are worth more. It ends when time runs out.</p>"},
 {t:"Mini playfield",h:["left_ramp","mini","mini_tg"],b:"<p>If Mission is not lit at the left ramp, the ramp sends the ball to the mini playfield. Complete all six targets there for +1x playfield multiplier.</p>"}
]},
{g:"Topper modes",id:"bonanza",title:"Beskar Bonanza (topper)",steps:[
 {t:"Beskar Bonanza",h:["scoop"],b:"<p>Only with the topper. Its meter tracks Beskar across games. When any player reaches 20,000, the next Foundry shot gives one of every Foundry item: all equipment, the lit Mission, the next Razor Crest, the next Encounter, Scope, Heal, an extra ball and +1x playfield. The meter then resets.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"cargo",title:"Precious Cargo",steps:[
 {t:"Precious Cargo",h:["center","razor","razor_ins"],b:"<p>Play all three Razor Crest Multiballs, then hit the Razor Crest enough times to start this mini-wizard mode.</p>"+UNK("How the mode plays is not documented yet; the rulesheet says \"need more info\".")}
]},
{g:"Wizard modes",id:"odds",title:"I Like Those Odds",steps:[
 {t:"Starting it",h:["scoop","missions_tbl"],b:"<p>Play all five Missions once, and this mini-wizard mode starts as the sixth Mission.</p>"},
 {t:"Phase 1",h:NUM(["left_ramp","right_ramp","center","scoop"]),b:"<p>Shoot both ramps and the Razor Crest once each, then the scoop.</p>"+UNK("The rulesheet says \"the Razor Crest\", which could mean the target or the center ramp. I mark the center ramp.")},
 {t:"Phase 2",h:NUM(["left_ramp","right_ramp","center","uturn","scoop"]),b:"<p>The same shots again plus the U-turn, then the scoop.</p>"},
 {t:"Phase 3",h:alt(MAJ),b:"<p>A 4-ball multiball. Make every major shot to win, starting a 60-second wizard frenzy where every switch scores 250,000.</p>"}
]},
{g:"Wizard modes",id:"want",title:"You Have What I Want",steps:[
 {t:"You Have What I Want",h:["left_ramp","enc_tbl"],b:"<p>Play all three Encounters once, then shoot the left ramp 7 times to start this mini-wizard mode. Challenge Mode in the play-mode menu starts it directly.</p>"+UNK("How the mode plays is not documented yet; the rulesheet says \"need more info\".")}
]},
{g:"Wizard modes",id:"way",title:"This Is The Way",steps:[
 {t:"Starting it",h:alt(MAJ).concat(["scoop","way_ins"]),b:"<p>Play all three mini-wizard modes, then make all six lit major shots, then the left scoop.</p>"},
 {t:"Single-ball phases",h:alt(["scoop","left_ramp","center"]),b:"<p>Three rounds, each a single-ball phase and then a Multiball Bonus Round. Each single-ball phase starts with a ball saver: make 5 shots to qualify the scoop, left ramp or center shot to start the multiball. Round 1 offers three shot choices per shot, round 2 two, and round 3 one. Finishing faster gives more multiball time.</p>"},
 {t:"Multiball Bonus Rounds",h:alt(ALL).concat(["mini"]),b:"<p>All regular shots score jackpots, and the mini playfield scores its own. Completing the mini playfield raises the multiplier.</p>"},
 {t:"Your Signet",h:["way_ins","pfx_ins"],b:"<p>After all three rounds you get 10M and your Signet. All Missions, multiballs and Encounters reset, and you get +1x playfield multiplier for the rest of the game.</p>"}
]}
];

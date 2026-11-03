/* ---------- playfield features (coordinates in the 640x1330 layout drawing from Chicago Gaming's Rules Manual 1.7) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 topsaucer:{n:"Starts Character saucer",c:1,s:[C(288,128,22)],a:[288,128],x:"The top center saucer under the STARTS CHARACTER label, above the bumpers. The rulesheet calls it the top saucer."},
 toparrows:{n:"Skill shot arrows",c:1,s:[E(290,52,78,24)],a:[290,52],x:"The five arrow inserts above the Starts Character saucer. The manual says the center one is blue and the others amber."},
 lane1:{n:"Lane 1",c:1,s:[B([[210,100],[210,190]],12)],a:[210,145],x:"The top left rollover lane, numbered 1."},
 lane2:{n:"Lane 2",c:1,s:[B([[372,100],[372,190]],12)],a:[372,145],x:"The top right rollover lane, numbered 2."},
 lane3:{n:"Lane 3 (left return lane)",c:1,s:[B([[70,995],[70,1105]],12)],a:[70,1050],x:"The left return lane, numbered 3 under a DRIVE FAST W/LIT label."},
 lane4:{n:"Lane 4 (right return lane)",c:1,s:[B([[512,995],[512,1105]],12)],a:[512,1050],x:"The right return lane, numbered 4 under a DRIVE FAST W/LIT label."},
 bumpers:{n:"Jet bumpers",c:1,s:[C(243,280,44),C(375,280,44),C(308,395,44)],a:[308,330],x:"The three bumper caps printed Jack, Rabbit and Slim's, inside the Twist Contest art."},
 popper:{n:"Briefcase popper (left kicker)",c:1,s:[C(118,152,22)],a:[118,152],x:"The hole at the top of the briefcase lane. The rulesheet calls it the left kicker or scoop; the manual calls it the briefcase lock popper. Locked balls go up into the back panel."},
 bcdrops:{n:"Briefcase drop targets",c:1,s:[R(97,208,28,22),R(100,293,28,22),R(103,390,28,22)],a:[112,300],x:"The three inline drop targets up the briefcase lane, outlined on the manual's Briefcase Boogie map. Each has a 666 slot-machine insert below it."},
 bclane:{n:"Briefcase lane",c:1,s:[B([[170,625],[150,560],[130,480],[118,400],[112,300],[112,210],[118,170]],16)],a:[140,520],x:"The long lane on the left with a PAYOFF arrow, a LOCK insert and the BRIEFCASE BOOGIE label at its entrance, running up past the drop targets to the popper."},
 briefcase:{n:"Rotating briefcase",c:0,s:[R(455,75,135,120)],a:[520,135],x:"My reading of the grey box at the upper right, drawn see-through over the right orbit. The manual mentions a rotating briefcase toy beside the steel ball return chute."},
 bcrail:{n:"Ball release rail",c:0,s:[B([[490,30],[480,90],[470,165]],12)],a:[480,95],x:"My reading of the chute the manual's Briefcase Boogie map draws at the upper right. The rulesheet says Briefcase Boogie balls return through the metal rail to the right of the bumpers."},
 pawnscoop:{n:"Pawn shop scoop",c:1,s:[C(283,507,15)],a:[283,507],x:"The sinkhole behind the left two center drop targets, with a LOCK insert in front. The manual's map draws the ball path up into it."},
 cdrops:{n:"Center drop targets",c:1,s:[R(272,585,26,16),R(310,567,26,16),R(348,549,26,16)],a:[323,576],x:"The three drop targets in front of the pawn shop, under a TARGETS LIGHT P-U-L-P F-I-C-T-I-O-N label, with red arrow inserts in front. The manual calls them the front door targets."},
 rsdrop:{n:"Roll Scene drop target",c:1,s:[R(497,258,32,20)],a:[512,268],x:"The single drop target at the top of the Roll Scene lane. The rulesheet calls it the right drop target."},
 rssaucer:{n:"Roll Scene saucer",c:1,s:[C(520,232,17)],a:[520,232],x:"The saucer behind the Roll Scene drop target."},
 rslane:{n:"Roll Scene lane",c:1,s:[B([[425,630],[440,585],[460,510],[480,430],[498,340],[512,275]],16)],a:[455,540],x:"The lane on the right of center with a PAYOFF arrow, COLLECT CHARACTER and ROLL SCENE inserts and the scene inserts, running up to the drop target."},
 scenes:{n:"Scene inserts",c:1,s:[E(505,318,18,16),E(497,354,18,16),E(490,390,18,16),E(483,425,18,16),E(475,462,18,16)],a:[490,390],x:"Up the Roll Scene lane, top to bottom: The Shot, Clean the Car, Gold Watch, BMF Wallet, Twist Contest. The rulesheet's \"top to bottom\" list runs in the opposite order."},
 collectchar:{n:"Collect Character insert",c:1,s:[E(440,570,12,22)],a:[440,570],x:"The COLLECT CHARACTER W/LIT arrow at the foot of the Roll Scene lane."},
 lorbit:{n:"Left orbit",c:1,s:[B([[112,668],[85,590],[55,500],[40,400],[35,300],[38,165]],14)],a:[45,420],x:"The far left lane with a SUPER SPINNER insert, a red car DRIVE FAST insert and a PAYOFF arrow. The manual's Drive Fast map draws it."},
 rorbit:{n:"Right orbit",c:1,s:[B([[485,642],[512,570],[545,455],[575,355],[595,265],[610,165]],14)],a:[555,430],x:"The far right lane with a SUPER SPINNER insert, a lavender car DRIVE FAST insert and a PAYOFF arrow. The plunger feeds into its top."},
 lspin:{n:"Left spinner",c:0,s:[R(55,540,34,10)],a:[72,545],x:"My reading of the bar across the left orbit just above its SUPER SPINNER insert."},
 rspin:{n:"Right spinner",c:0,s:[R(510,512,34,10)],a:[527,517],x:"My reading of the bar across the right orbit just above its SUPER SPINNER insert."},
 lcar:{n:"Left Drive Fast insert",c:1,s:[R(25,380,34,52)],a:[42,406],x:"The red car insert in the left orbit."},
 rcar:{n:"Right Drive Fast insert",c:1,s:[R(535,375,34,52)],a:[552,401],x:"The lavender car insert in the right orbit."},
 superspin:{n:"Super Spinner inserts",c:1,s:[C(80,567,14),C(515,553,14)],a:[80,567],x:"The SUPER SPINNER inserts at the foot of each orbit."},
 payoffs:{n:"Payoff arrows",c:1,s:[E(35,290,15,32),E(168,640,15,32),E(425,640,15,32),E(588,288,15,32)],a:[168,640],x:"The PAYOFF arrows in front of the left orbit, briefcase lane, Roll Scene lane and right orbit. The pawn shop's Payoff light is on its sign."},
 lkahuna:{n:"Left Big Kahuna target (Hold Cast)",c:1,s:[R(146,176,28,24)],a:[160,188],x:"The standup to the upper left of the bumpers, with BIG KAHUNA BONUS and HOLD CAST inserts. The manual outlines it for both Big Kahuna Bonus and Hold Cast."},
 rkahuna:{n:"Right Big Kahuna target (Extra Ball)",c:1,s:[R(444,168,28,24)],a:[458,180],x:"The standup to the upper right of the bumpers, with BIG KAHUNA BONUS and EXTRA BALL inserts."},
 holdcast:{n:"Hold Cast insert",c:1,s:[E(180,298,12,22)],a:[180,298]},
 xball:{n:"Extra Ball insert",c:1,s:[E(443,285,12,22)],a:[443,285]},
 royale:{n:"Royale with Cheese target",c:1,s:[R(76,790,24,22)],a:[88,800],x:"The standup at the far left under the burger plastic, outlined on the manual's map, with a ROYALE WITH CHEESE insert beside it. The rulesheet calls it the yellow standup."},
 bullseye:{n:"Bullseye target",c:1,s:[R(545,696,26,24)],a:[558,708],x:"The target at the right, above the bullseye magnet. The manual calls it the Bullseye Magnet trigger target."},
 magnet:{n:"Bullseye magnet",c:0,s:[C(508,792,34)],a:[508,792],x:"The red and white bullseye insert. The manual says the magnet catches the ball, holds it, then releases it; I take the magnet to sit under this bullseye."},
 gunins:{n:"Collect Gun Bonus and Advance Big Kahuna inserts",c:1,s:[E(425,845,48,30)],a:[425,845],x:"The arrow at the gun's muzzle pointing toward the bullseye, printed COLLECT GUN BONUS and ADVANCE BIG KAHUNA BONUS."},
 mph:{n:"MPH Bonus target",c:1,s:[R(325,508,26,22)],a:[338,520],x:"The hidden standup behind the right center drop target, outlined on the manual's Drive Fast map. The rulesheet calls it the hidden standup near the pawn shop."},
 lred:{n:"Left red arrow targets",c:1,s:[R(60,695,26,20),R(60,728,26,20)],a:[73,722],x:"The two-target bank at the left with red arrow inserts."},
 rred:{n:"Right red arrow targets",c:1,s:[R(532,598,26,20),R(532,632,26,20)],a:[545,625],x:"The two-target bank at the right with red arrow inserts."},
 letters:{n:"PULP FICTION letters",c:1,s:[R(200,690,252,50)],a:[326,715],x:"The letter inserts in the center of the playfield."},
 cast:{n:"Character inserts",c:1,s:[E(280,880,105,85)],a:[280,880],x:"Jules, Mia, Vincent, Mr. Wolf and Jimmie in the center art."},
 gun:{n:"Gun bonus inserts",c:1,s:[B([[297,1127],[283,1097],[270,1065],[258,1032],[282,1010],[306,988],[329,966],[353,945],[377,925]],18)],a:[270,1065],x:"The 1K to 50K inserts up the gun's barrel."},
 bonusx:{n:"Bonus multiplier inserts",c:1,s:[B([[315,1037],[340,1015],[365,993],[390,970]],20)],a:[350,1005],x:"The 1X to 4X inserts beside BONUS MULTIPLIER 1-2-3-4 ADV. X."},
 objectives:{n:"Objective inserts",c:1,s:[C(215,1155,16),C(255,1180,16),C(292,1212,16),C(330,1182,16),C(366,1150,16)],a:[292,1212],x:"Above the flippers, left to right: Briefcase Boogie, Pawn Shop Panic, Roll Scene, Cast Chaos and Pulp Fiction Frenzy."},
 divine:{n:"Divine Intervention insert",c:1,s:[C(292,1265,18)],a:[292,1265]},
 ballsave:{n:"Outlane ball saves",c:1,s:[B([[25,1000],[25,1100]],10),B([[563,1000],[563,1100]],10)],a:[25,1050],x:"The outlanes outside lanes 3 and 4, each with a BALL SAVE insert."},
 again:{n:"Shoot Again insert",c:1,s:[C(370,1088,16)],a:[370,1088]},
 flippers:{n:"Flippers",c:0,s:[B([[182,1229],[256,1273]],13),B([[404,1229],[330,1273]],13)],a:[293,1250],x:"The drawing shows the flippers only as pale shapes; placed from those."},
 shooter:{n:"Plunger lane",c:0,s:[B([[615,1320],[615,700],[612,300],[610,170]],10)],a:[615,900],x:"Along the right edge to the top of the right orbit, as the manual's skill shot map draws it."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["lorbit","bclane","pawnscoop","rslane","rorbit"];
var RED=["lred","cdrops","rred"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["objectives","divine"],b:"<p>Five objectives sit above the flippers: Briefcase Boogie, Pawn Shop Panic, Roll Scene, Cast Chaos and Pulp Fiction Frenzy. Complete all five to reach the wizard mode, Divine Intervention.</p>"+UNK("The rulesheet's Layout section is blank. The names here come from Chicago Gaming's Rules Manual and the printed inserts.")},
 {t:"Five major shots",h:NUM(MAJ),b:"<p>Left to right: the left orbit, the briefcase lane, the pawn shop, the Roll Scene lane and the right orbit. These are the five Payoff shots used by the multiballs.</p>"+UNK("The rulesheet says Pawn Shop Panic lights super payoffs at all five major shots including the pawn shop, but does not list the other four. The four PAYOFF arrows on the playfield mark them.")},
 {t:"Upper playfield",h:["topsaucer","toparrows","lane1","lane2","bumpers","lkahuna","rkahuna"],b:"<p>The Starts Character saucer sits at the top, between lanes 1 and 2. Below are the three jet bumpers, with a Big Kahuna target to each side.</p>"},
 {t:"Left side",h:["popper","bcdrops","bclane","royale","lred"],b:"<p>The briefcase lane runs up the left past three inline drop targets to the briefcase popper. Lower down are the Royale with Cheese target and the left pair of red arrow targets.</p>"},
 {t:"Center",h:["pawnscoop","cdrops","mph","letters"],b:"<p>Three drop targets guard the pawn shop scoop. A hidden standup behind them collects the MPH Bonus. PULP FICTION is spelled in the letters below.</p>"},
 {t:"Right side",h:["rssaucer","rsdrop","rslane","rred","bullseye","magnet"],b:"<p>The Roll Scene lane leads to a drop target with a saucer behind it. Lower right are the right pair of red arrow targets and the bullseye target above the magnet.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:["shooter","rorbit","toparrows","topsaucer"],b:"<p>Plunge into the top saucer, ideally when as many arrows are lit as possible. Each lit arrow scores 3k, and all five lit adds a 100k bonus. A skill shot also qualifies a character to collect at the Roll Scene saucer.</p>"+UNK("The rules manual says the arrows light one at a time and are all lit at the end of the sequence, and that a weak plunge rolls back down the right orbit.")},
 {t:"Super Skill Shot",h:NUM(MAJ),b:"<p>Hold the left flipper on the plunge to light all the Payoff inserts. Hit one of those shots before the timer runs out for 100k.</p>"+UNK("The rulesheet does not say how long the timer runs.")}
]},
/* ====== MAIN OBJECTIVES ====== */
{g:"Main objectives",id:"briefcase",title:"Briefcase Boogie",steps:[
 {t:"Unlock the briefcase",h:["bcdrops","bclane"],b:"<p>All three drop targets in front of the left kicker are up at the start of the game. Knock them down to unlock the briefcase. Progress is remembered between balls on default settings.</p>"},
 {t:"Lock 3 balls",h:["popper","bclane"],b:"<p>Shoot the kicker behind the drop targets to lock a ball. Lock 3 to start Briefcase Boogie, a 3-ball multiball.</p>"},
 {t:"Ball release",h:["bcrail"],b:"<p>The balls are released through the metal rail to the right of the bumpers.</p>"},
 {t:"Payoffs",h:alt(["lorbit","pawnscoop","rslane","rorbit"]).concat([["bclane",1]]),b:"<p>Shoot the flashing shots for payoffs worth 25k, then the left kicker for another payoff and the next phase, with +1x added to the payoff value each phase. Each phase needs one more payoff to light the kicker, up to three. Payoff progress resets when the multiball ends.</p>"},
 {t:"Super payoff",h:["bcdrops","popper"],b:"<p>After the final (green) payoff at the briefcase, the super payoff stage starts. Shoot the briefcase drop targets and the scoop, one time each, for 250k per shot. All four restart the multiball at 2x the base payoff value.</p>"+UNK("The rules manual says instead to lock all remaining balls in the briefcase popper to qualify the super payoff. The two do not match.")},
 {t:"Objective",h:["objectives"],b:"<p>Score at least one super payoff to light Briefcase Boogie solid.</p>"}
]},
{g:"Main objectives",id:"pawnshop",title:"Pawn Shop Panic",steps:[
 {t:"Open the pawn shop",h:["cdrops","pawnscoop"],b:"<p>Shoot the center drop targets to open the pawn shop sinkhole hidden behind the left two, then shoot the sinkhole to lock a ball. Each lock resets the drop targets.</p>"},
 {t:"Lock 3 balls",h:["pawnscoop"],b:"<p>Lock 3 balls to start Pawn Shop Panic, a 3-ball multiball. The locked balls release directly above the left slingshot.</p>"+UNK("The slingshots are not marked. The rules manual says the balls return through a subway popper under the Royale with Cheese plastic.")},
 {t:"Drop target phases",h:["cdrops"],b:"<p>Shoot the center drop target bank 3 times, each time scoring 5k + 5k per shot (up to 15k), to open the pawn shop for the payoff. The targets reset only after their speech callout ends. Values gain +1x each phase.</p>"},
 {t:"Payoffs",h:["pawnscoop"],b:"<p>The pawn shop payoff scores 15k for the first ball locked, 30k for the second and 90k for the third, multiplied by +1x for every payoff collected. Unlike Briefcase Boogie, the payoff level is held across attempts.</p>"},
 {t:"Get medieval",h:NUM(MAJ),b:"<p>After the final (green) payoff, super payoffs worth 100k light at all five major shots, including the pawn shop. Clear them all to relight them. Score one to light the objective solid.</p>"}
]},
{g:"Main objectives",id:"scene",title:"Roll Scene",steps:[
 {t:"Qualify",h:["rsdrop","rssaucer","ballsave"],b:"<p>Shoot the right drop target to light an outlane ball save and qualify the saucer behind it to start the next scene. The same saucer collects qualified characters.</p>"},
 {t:"Scenes",h:["rssaucer","scenes"],b:"<p>Scenes are 40-second timed modes. They cannot stack with a multiball; they pause and pick up again after it ends.</p>"+UNK("The rules manual says the lit scene changes with each slingshot or jet bumper hit.")},
 {t:"Collect",h:["rssaucer"],b:"<p>In the final 10 seconds, shoot the saucer to collect what you built in the scene plus the base value of earlier successful collects in the game. Big Kahuna playfield multipliers apply to the build and the collect.</p>"},
 {t:"Twist Contest",h:["bumpers"],b:"<p>Shoot the bumpers (2000+ point scoring).</p>"},
 {t:"BMF Wallet",h:RED,b:"<p>Shoot the red arrow targets, the left or right standups or the center drop targets (10,000+ point scoring).</p>"},
 {t:"Gold Watch",h:["bullseye"],b:"<p>Shoot the target above the bullseye magnet (100,000+ point scoring).</p>"},
 {t:"Clean the Car",h:["lspin","rspin"],b:"<p>Shoot the spinners (100+ point scoring).</p>"+UNK("The rulesheet lists the four scenes \"from top to bottom\" as Twist Contest, BMF Wallet, Gold Watch, Clean the Car. On the playfield the scene inserts run the other way, with Clean the Car highest.")},
 {t:"The Shot",h:["rsdrop","scenes"],b:"<p>After all four scenes, The Shot starts at the saucer: an untimed 4-ball multiball where the right drop target scores payoffs worth 10% of your accumulated scene collects. Starting it completes the objective. The carried-over value resets after The Shot.</p>"+UNK("The rules manual says the objective insert lights at the end of The Shot, not at its start.")}
]},
{g:"Main objectives",id:"cast",title:"Cast Chaos",steps:[
 {t:"Qualify characters",h:["topsaucer","lorbit","rorbit","cast"],b:"<p>Balls that enter the top saucer, from the skill shot or after an unlit orbit, qualify one of five characters (flashing).</p>"},
 {t:"Collect characters",h:["rssaucer","collectchar","cast"],b:"<p>Collect them (solidly lit) at the saucer behind the right drop target. Collecting several in one shot multiplies the value.</p>"},
 {t:"Hold cast",h:["lkahuna","holdcast"],b:"<p>Collecting a character lights the left standup near the bumpers for hold cast, which keeps collected characters for the start of the next ball.</p>"},
 {t:"Cast Chaos",h:NUM(MAJ),b:"<p>All five characters start Cast Chaos, a 4-ball multiball, and complete the objective. Shoot all five lit shots for 100k payoffs.</p>"},
 {t:"Super payoff",h:["topsaucer","toparrows"],b:"<p>Then shoot the Starts Character saucer for the 500k super payoff, which relights the payoffs. Cast Chaos ends when single-ball play resumes.</p>"}
]},
{g:"Main objectives",id:"frenzy",title:"Pulp Fiction Frenzy",steps:[
 {t:"Spell PULP FICTION",h:RED.concat(["letters"]),b:"<p>In single-ball play, each completed flashing red arrow bank (left standups, right standups or center drop targets) adds a letter. Completing all the flashing arrows relights them flashing.</p>"},
 {t:"Start it",h:["pawnscoop","letters"],b:"<p>After 11 bank completions spell PULP FICTION, the next pawn shop shot starts Pulp Fiction Frenzy, a 4-ball multiball, and completes the objective.</p>"},
 {t:"Switch hits",h:["letters","pawnscoop"],b:"<p>Spell PULP FICTION again with switch hits, 5000 points each. Then the pawn shop lights for a 500k payoff, and the sequence restarts.</p>"+UNK("The rulesheet says every 9 switch hits adds a letter (99 in all). The rules manual says every 10 (110, adjustable).")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"royale",title:"Royale with Cheese",steps:[
 {t:"1-2-3-4 lanes",h:NUM(["lane1","lane2","lane3","lane4"]),b:"<p>Two lanes at the top and two at the inlanes. Change lanes with the flippers. Lighting all four advances the bonus multiplier.</p>"},
 {t:"Hurry-up",h:["royale"],b:"<p>Completing the lanes also lights the yellow standup on the far left for a hurry-up.</p>"+UNK("The rulesheet does not give the hurry-up's value or time.")},
 {t:"Rewards",h:["bullseye","gunins","superspin"],b:"<p>Scoring the hurry-up lights the target above the bullseye magnet for collect gun bonus, and both orbits for super spinners.</p>"}
]},
{g:"Other scoring",id:"kahuna",title:"Big Kahuna Bonus",steps:[
 {t:"Qualify",h:["lkahuna","rkahuna"],b:"<p>Shoot the two flashing standups near the bumpers to qualify the Big Kahuna Bonus.</p>"},
 {t:"Advance",h:["bullseye","gunins"],b:"<p>Advance it at the flashing target above the bullseye magnet. Both steps work in single-ball play only.</p>"},
 {t:"Playfield X",h:["bullseye"],b:"<p>Each advance on the same ball adds +1x to all playfield scoring: 2x, then 3x, 4x, 5x, up to 6x. It lasts until the ball drains on default settings.</p>"}
]},
{g:"Other scoring",id:"drive",title:"Drive Fast and MPH Bonus",steps:[
 {t:"Light it",h:["lane3","lane4","lcar","rcar"],b:"<p>Roll through the lit 3 or 4 return lane to briefly light the opposite orbit for Drive Fast.</p>"+UNK("The rules manual says lane 3 lights the right orbit and lane 4 the left, for 10 seconds (adjustable).")},
 {t:"Orbit loop",h:NUM(["lorbit","rorbit"]),b:"<p>The lit orbit scores 20k and sends the ball past the top lanes to the other orbit, back to the flippers for another shot worth 40k, then 60k, up to 100k.</p>"},
 {t:"MPH Bonus",h:["lspin","rspin","mph"],b:"<p>Each spin during Drive Fast adds MPH: +1 per spin for the first orbit, +2 for a second in a row, up to +5. Collect 1k per MPH at the hidden standup near the pawn shop, any time that ball.</p>"},
 {t:"Extra ball",h:["mph","rkahuna"],b:"<p>Collecting 146 MPH or more lights extra ball.</p>"}
]},
{g:"Other scoring",id:"spinners",title:"Super Spinners",steps:[
 {t:"Super spinners",h:["lspin","rspin","superspin"],b:"<p>Collecting the Royale with Cheese hurry-up qualifies both spinners for 1k per spin, for the next time each is hit. Super spinner points add to any other rule using the spinners.</p>"}
]},
{g:"Other scoring",id:"save",title:"Outlane ball save",steps:[
 {t:"Ball saves",h:["rsdrop","ballsave"],b:"<p>Shoot the right drop target to light a ball save at the left outlane, and again on the same ball for the right outlane. A single lit save alternates sides with each slingshot hit. Up to two per ball; they do not carry over.</p>"}
]},
{g:"Other scoring",id:"extraball",title:"Extra balls",steps:[
 {t:"Lighting extra ball",h:["rkahuna","xball"],b:"<p>Extra ball is lit at the right standup near the bumpers by completing the 1-2-3-4 lanes 5 times on one ball and reaching 6x bonus, or by collecting an MPH Bonus of at least 146 MPH.</p>"}
]},
{g:"Other scoring",id:"gun",title:"Gun Bonus",steps:[
 {t:"End of ball",h:["gun","bonusx"],b:"<p>The bonus shows on the inserts up the gun, above the objective inserts. It maxes out at 160k, and the bonus multiplier at 10x.</p>"},
 {t:"Collect early",h:["bullseye","gunins"],b:"<p>After the Royale with Cheese hurry-up, collect the gun bonus at the target above the bullseye magnet. It is multiplied by bonus X and then by Playfield X, and the bonus and multiplier reset.</p>"}
]},
/* ====== WIZARD MODE ====== */
{g:"Wizard mode",id:"divine",title:"Divine Intervention",steps:[
 {t:"Start",h:["objectives","popper","rssaucer"],b:"<p>Complete all five objectives, then shoot the left kicker or the saucer behind the right drop target. If all the balls drain the mode fails and all progress toward the game's features resets.</p>"},
 {t:"Phase 1",h:["bcdrops","popper"],b:"<p>Shoot the three drop targets in front of the left kicker, then the left kicker itself three times.</p>"},
 {t:"Phase 2",h:["pawnscoop"],b:"<p>Shoot the pawn shop scoop three times.</p>"},
 {t:"Phase 3",h:["rsdrop"],b:"<p>Shoot the right drop target five times.</p>"},
 {t:"Phase 4",h:["topsaucer"],b:"<p>Shoot the top saucer five times.</p>"},
 {t:"Phase 5",h:RED,b:"<p>Shoot all seven red arrow targets.</p>"},
 {t:"Phase 6",h:["bullseye"],b:"<p>Shoot the target above the bullseye magnet. Clear all six phases to double your score; all progress toward the wizard mode then resets.</p>"+UNK("The rules manual adds that phase 6 has no multiball renewal, so one ball must survive.")}
]}
];

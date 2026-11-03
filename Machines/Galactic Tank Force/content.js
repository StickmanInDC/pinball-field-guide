/* ---------- playfield features (coordinates in the 640x1124 photo, cropped from a Pinside owner's overhead shot) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 tanks_col:{n:"Tank inserts",c:1,s:[C(260,612,12),C(251,645,12),C(240,679,12),C(230,712,12),C(221,747,12)],a:[221,747],x:"The column above the printed TANKS label, left of center: Echo (top), Delta, Charlie, Bravo and Alpha (bottom)."},
 missions_col:{n:"Mission inserts",c:1,s:[C(345,610,12),C(354,645,12),C(361,677,12),C(368,712,12),C(377,747,12)],a:[345,610],x:"The column above the printed MISSIONS label, right of center: Sprinkles (top), Fudge, Berries, Walnuts and Cream (bottom), the rulesheet's mission order."},
 medals_col:{n:"Medal inserts",c:1,s:[C(300,618,14),C(300,662,14),C(300,717,14),C(300,772,14),C(300,830,14)],a:[300,830],x:"The five yellow inserts up the center rocket, labeled Meltdown at the bottom, then Accelerator, Air Strike and Cow-A-Bongo, with Major General at the top. That matches the rulesheet's bottom-to-top medal list, with maximum rank last."},
 wizard_ins:{n:"Wizard inserts",c:1,s:[E(245,573,45,14),E(300,537,48,18),E(358,573,45,14)],a:[300,545],x:"Above the insert columns: Completed Zulu (left), Intergalactic Ice Cream Social (center) and Completed Sundae (right)."},
 tank:{n:"Enemy tank",c:1,s:[E(318,305,100,80)],a:[318,305],x:"The red tank sculpt with side cannons behind the center target bank. American Pinball's sell sheet calls it the Enemy Tank. It is a raised toy, so it hides what sits under it."},
 bank:{n:"Center target bank",c:1,s:[R(266,400,100,42)],a:[316,421],x:"The five white targets in front of the enemy tank. The rulesheet says the center target bank defeats the tanks and that the middle target often scores the most."},
 ufo:{n:"UFO",c:1,s:[C(362,165,47)],a:[362,165],x:"The grey flying saucer right of the bumpers, with cows standing below it. The sell sheet's UFO Moving Target line ends just below this saucer, so I take the moving target to sit under or in front of it; I cannot see the target itself."},
 lramp:{n:"Left ramp",c:0,s:[B([[182,395],[178,360],[170,330],[160,300],[150,265]],16)],a:[178,370],x:"My reading: the lane behind the white arrow between the A and I standups, with Multiplier, Charge Methane and Extra Ball inserts in front. The path past the entrance runs under the metal housing, so it is a guess."},
 lorbit:{n:"Left orbit",c:0,s:[B([[135,450],[118,410],[95,370],[75,320],[60,250],[55,170],[65,90],[90,20]],14)],a:[75,320],x:"My reading: the white arrow at the lower left with Multiplier, Charge Methane and Air Strike inserts, through the spinner and up the left side. The path behind the wire ramps is a guess."},
 rorbit:{n:"Right orbit",c:0,s:[B([[552,335],[565,280],[580,220],[590,150],[592,80],[580,10]],14)],a:[580,220],x:"My reading: the white arrow at the right with Multiplier, Charge Methane and Power Up inserts. The path up through the wire ramps is a guess."},
 rsaucer:{n:"Right saucer (Mission Control)",c:0,s:[C(495,215,14)],a:[495,215],x:"The sell sheet calls this saucer Mission Control and says to shoot it when lit to accept an ice cream mission. Its lane is the white arrow with a MISSION insert, right of the green cow ramp. The saucer's exact spot is my guess at the dark pocket at the top of that lane."},
 lab:{n:"Plotnik's lab saucer",c:0,s:[C(160,72,14)],a:[160,72],x:"A guess, under the LAB sign marked OPEN WHEN LIT. The rulesheet puts the lab saucer near the bumpers and says either orbit can feed it."},
 labsign:{n:"LAB sign",c:1,s:[R(115,0,70,45)],a:[150,25],x:"The pink LAB sign at the top left, marked OPEN WHEN LIT. The photo is cut off just above it."},
 toplanes:{n:"LAB lanes",c:0,s:[R(215,72,130,30)],a:[280,87],x:"Below the POWER UP sign, where the sell sheet points its L-A-B lanes. I cannot see the lane switches in this photo. The sell sheet also marks two advance rank lanes on the upper right, under the wire ramps, which I cannot pick out."},
 bumpers:{n:"Pop bumpers (reactors)",c:1,s:[C(195,145,40),C(298,128,38),C(255,205,40)],a:[250,160],x:"The three white bumper caps at the top. The sell sheet calls them Reactor Bumpers."},
 accel:{n:"Quantum accelerator targets",c:0,s:[E(320,155,10,24)],a:[320,155],x:"A guess, between the right bumper and the UFO, where the sell sheet's Accelerator Targets line ends. The targets are hidden in this photo."},
 spinner:{n:"AIR spinner",c:0,s:[C(118,412,12)],a:[118,412],x:"My reading of the spinner in the left orbit lane, where the sell sheet's AIR Spinner line ends. The sell sheet also shows a Planet Spinner at the upper right, which is above this photo."},
 air:{n:"AIR targets",c:1,s:[C(140,367,9),C(217,345,9),C(535,300,9)],a:[178,356],x:"The green standups with A and I inserts either side of the left ramp, and R near the right saucer. All three inserts read AIR STRIKE LOCK."},
 lflank:{n:"Left flank targets",c:1,s:[E(95,505,25,45)],a:[95,505],x:"The targets and inserts beside the printed ADVANCE FLANK FORCES label on the left. The sell sheet calls them Alpha Flank Targets."},
 ltri:{n:"Left flank award inserts",c:1,s:[E(147,568,40,28)],a:[147,568],x:"Three inserts under a TARGETS ADVANCE label: Meltdown, Pop Bumpers and Quantum Accelerator, the left flank awards in the rulesheet."},
 rflank:{n:"Right flank targets",c:1,s:[E(535,505,28,45)],a:[535,505],x:"The targets and inserts beside the printed ADVANCE FLANK FORCES label on the right. The sell sheet calls them Bravo Flank Targets."},
 rtri:{n:"Right flank award inserts",c:1,s:[E(480,557,38,28)],a:[480,557],x:"Three inserts under a TARGETS ADVANCE label: Rank, Cow and Spinners, the right flank awards in the rulesheet."},
 lret:{n:"Left return lane",c:0,s:[B([[45,645],[45,760]],10)],a:[45,700],x:"My reading: the lane left of the left slingshot, under the MISSILE STRIKE and LIGHT MISSION labels."},
 rret:{n:"Right return lane",c:0,s:[B([[560,650],[560,760]],10)],a:[560,700],x:"My reading, mirroring the left return lane, under the right LIGHT MISSION label."},
 flippers:{n:"Flippers",c:1,s:[B([[160,910],[252,975]],13),B([[440,910],[348,975]],13)],a:[300,950]},
 again:{n:"Shoot Again insert",c:1,s:[C(298,925,13)],a:[298,925]},
 shield:{n:"Atomic shield",c:1,s:[C(300,995,26)],a:[300,995],x:"The round ATOMIC SHIELD insert below a DEFENSE label, between the flippers. The sell sheet points its Atomic Shield here."},
 lucky:{n:"Lucky Break lanes",c:1,s:[B([[197,975],[215,1040]],11),B([[403,975],[385,1040]],11)],a:[300,1005],x:"The lanes printed LUCKY BREAK below each flipper. The rulesheet says Lucky Break lights a lane under either flipper."},
 shooter:{n:"Plunger lane",c:0,s:[B([[630,1000],[630,700],[628,400]],10)],a:[630,700],x:"A guess. The plunger lane is at or past the right edge of this photo."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["lorbit","lramp","rsaucer","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["tanks_col","missions_col","medals_col","wizard_ins"],b:"<p>Defeat Empress Annoya's five tanks, play all five ice cream missions and earn five medals. The tanks lead to Tank Zulu, the missions to the Ice Cream Sundae, and all of it together to the Intergalactic Ice Cream Social.</p>"+UNK("The rulesheet's Overview and Layout sections are blank, so the playfield names here are my reading of an owner's photo and American Pinball's sell sheet.")},
 {t:"Insert columns",h:["tanks_col","medals_col","missions_col"],b:"<p>Three columns sit above the flippers: the five tanks on the left (Alpha to Echo), the five medals up the center rocket, and the five missions on the right (Sprinkles to Cream).</p>"},
 {t:"Four major shots",h:NUM(MAJ),b:"<p>The rulesheet's four major shots: both orbits, the left ramp and the right saucer. They carry the Air Strike jackpots and the 2x shot multipliers.</p>"+UNK("My reading: each of these four lanes has a white arrow with Multiplier and Charge Methane inserts in front. Where each shot goes past its entrance is a guess.")},
 {t:"Center of the playfield",h:["bank","tank","ufo"],b:"<p>The center target bank destroys tanks. Behind it sits the enemy tank, and up to its right the UFO, whose moving target rescues cows.</p>"},
 {t:"Upper playfield",h:["labsign","lab","toplanes","bumpers","accel"],b:"<p>Plotnik's lab saucer sits near the pop bumpers. The top rollover lanes spell LAB, and two more advance your rank.</p>"+UNK("The photo is cut off just above the LAB sign, so the top of the playfield, including the sell sheet's Space Station AIR Lock and Planet Spinner, is not shown. The lab saucer, the lanes and the accelerator targets are guesses.")},
 {t:"Lower playfield",h:["lflank","ltri","rflank","rtri","lret","rret","shield"],b:"<p>Flank attack target banks on the far left and far right, the return lanes that light missions, and the atomic shield between the flippers.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"LAB lane",h:["shooter","toplanes","lab"],b:"<p>Plunge into the flashing LAB rollover lane to qualify Plotnik's lab for a mystery award.</p>"},
 {t:"Advance rank lane",h:["shooter","toplanes"],b:"<p>Plunge into the flashing advance rank lane to advance your rank at once.</p>"+UNK("The rulesheet does not say which of the top lanes are which.")}
]},
/* ====== TANKS ====== */
{g:"Tanks",id:"tanks",title:"Destroying tanks",steps:[
 {t:"The center bank",h:["bank","tanks_col"],b:"<p>Shoot the flashing center target bank to damage the current tank. The light color on each target shows its damage; the target in the middle often scores the most.</p>"},
 {t:"Charge methane",h:alt(MAJ).concat(["bank"]),b:"<p>Shoot the blue charge methane shots, then hit the blue flashing target dead-on to destroy a tank in one shot.</p>"+UNK("The rulesheet does not say which shots are the charge methane shots. My reading: the four major shots, which each have a CHARGE METHANE insert.")},
 {t:"Tanks 1 and 3",h:["tanks_col","bank"],b:"<p>Standard battles. The red center target deals the most damage.</p>"},
 {t:"Tanks 2 and 4",h:["bank"],b:"<p>One of Annoya's robots makes the red target move left and right across the bank. Time your shot.</p>"},
 {t:"Tank 5",h:["bank"],b:"<p>A shielded tank. Any target lowers the shield's health bar, then it is a standard battle with the red center target dealing the most damage.</p>"},
 {t:"Rewards",h:["lucky","shield","wizard_ins"],b:"<p>Each tank destroyed lights Lucky Break under a flipper. Every center bank hit raises the atomic shield. All five tanks qualify Tank Zulu.</p>"}
]},
{g:"Tanks",id:"shield",title:"Lucky Break and atomic shield",steps:[
 {t:"Lucky Break",h:["lucky"],b:"<p>Destroying any tank lights a lane under either flipper for Lucky Break, which saves the ball. Destroy another tank while one is lit and the other lights too.</p>"+UNK("The rulesheet does not say how long Lucky Break stays lit.")},
 {t:"Atomic shield",h:["shield","bank"],b:"<p>The atomic shield between the flippers rises with every shot to the center target bank and can stop a straight-down-the-middle drain off the targets.</p>"}
]},
/* ====== MISSIONS ====== */
{g:"Missions",id:"missions",title:"Starting missions",steps:[
 {t:"The right saucer",h:["rsaucer","missions_col"],b:"<p>Shoot the right saucer to be briefed on a mission, then shoot the pink flashing shots to gather ingredients. The first mission of a game needs just one saucer shot.</p>"},
 {t:"Relighting",h:["lret","rret","rsaucer"],b:"<p>Later missions need the return lanes completed to light the right saucer again.</p>"+UNK("The rulesheet does not say how many return lanes there are or whether they must be completed more than once.")},
 {t:"Shot values",h:["missions_col","medals_col"],b:"<p>Your rank sets the value of each mission shot.</p>"}
]},
{g:"Missions",id:"ingredients",title:"The five missions",steps:[
 {t:"Sprinkle Desert",h:["spinner","rsaucer","lab"],b:"<p>Shoot the spinner to collect sprinkles, then the right saucer or Plotnik's lab to send them.</p>"+UNK("The rulesheet does not say which spinner. The sell sheet shows two, the AIR spinner in the left orbit (marked) and a Planet Spinner at the upper right, above this photo.")},
 {t:"Drilling for Fudge",h:["lab","rsaucer"],b:"<p>Shoot Plotnik's lab or the right saucer to drill for as much fudge as you can.</p>"},
 {t:"Buckets O'Berries",h:["lramp","rsaucer"],b:"<p>Shoot the ramp to gather berries, up to 5 buckets at a time, and the right saucer to send them to Plotnik.</p>"+UNK("The rulesheet says \"the ramp\". I take it to be the left ramp, the only ramp it names.")},
 {t:"Where's Walnuts?",h:alt(MAJ),b:"<p>Plotnik's Nutdar marks the walnut shots in green. They keep moving around the playfield.</p>"},
 {t:"Udder Madness",h:["rsaucer"],b:"<p>Every switch hit sends cows through the Milk-O-Matic. Herd 15 cows in, then shoot the right saucer to send the whipped cream.</p>"},
 {t:"All five",h:["missions_col","wizard_ins"],b:"<p>Play all five missions to make the Ice Cream Sundae.</p>"+UNK("The rulesheet says \"play\" all five; it does not say whether a mission must be finished to count.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"airstrike",title:"Air Strike Multiball",steps:[
 {t:"Locking balls",h:["air","lab"],b:"<p>Spell AIR at the green standups (two near the left ramp, one near the right saucer) to light the lab saucer to lock a ball.</p>"},
 {t:"Reaching the lab",h:["lorbit","rorbit","lab","bumpers"],b:"<p>Make either orbit to reach the lab saucer, or the ball can fall in off the bumpers. Lock 3 balls to start the multiball.</p>"},
 {t:"Jackpots",h:NUM(MAJ),b:"<p>Spybots above the four major shots mark the jackpots. Score all four and destroy the spybots.</p>"},
 {t:"Super jackpot",h:["ufo"],b:"<p>The moving UFO target then lights for the super jackpot, which destroys Annoya's Juggernaut mothership. After that every shot is lit for victory laps until the multiball ends.</p>"},
 {t:"Tank tip",h:["bank"],b:"<p>The start of Air Strike gives a ball save, so it is a good time to shoot the center tank targets.</p>"}
]},
{g:"Multiballs",id:"meltdown",title:"Meltdown",steps:[
 {t:"Charging the reactors",h:["bumpers"],b:"<p>Pop bumper hits power the reactors. The blue inserts above the bumpers turn red as they charge. At full power a second ball launches for 2-ball multiball.</p>"},
 {t:"Jackpots",h:["bumpers"],b:"<p>Shoot the flashing green shots to raise the jackpot, which scores on each bumper hit.</p>"+UNK("The rulesheet does not say which shots flash green.")},
 {t:"Ending it",h:["lab"],b:"<p>After enough bumper hits, shoot the lab to end the meltdown and earn the Meltdown medal.</p>"+UNK("The rulesheet does not say how many bumper hits are needed.")}
]},
{g:"Multiballs",id:"cows",title:"Cow-A-Bongo",steps:[
 {t:"Rescuing cows",h:["ufo"],b:"<p>Shoot the moving UFO target to rescue cows. Once all the cows currently available are saved, the next UFO shot starts Cow-A-Bongo multiball.</p>"+UNK("The rulesheet does not say how many cows are available or how many balls Cow-A-Bongo uses.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"flank",title:"Flank attack targets",steps:[
 {t:"Left bank",h:["lflank","ltri"],b:"<p>Complete the far left targets to advance the lit feature: meltdown, quantum accelerators or bumpers.</p>"},
 {t:"Right bank",h:["rflank","rtri"],b:"<p>Complete the far right targets to advance the lit feature: rank, spinners or cows.</p>"},
 {t:"Shot multipliers",h:alt(MAJ).concat(["lflank","rflank"]),b:"<p>Complete both a left and a right bank to light 2x at the four major shots. Shoot one to lock its 2x in for the rest of the ball.</p>"}
]},
{g:"Other scoring",id:"quantum",title:"Quantum accelerators",steps:[
 {t:"Hidden targets",h:["accel","bumpers"],b:"<p>Two hidden banks of four standups near the bumpers can only be hit off the bumpers. The flippers change which targets are lit; only unlit ones count.</p>"+UNK("The hidden banks are not visible in the photo. The mark is where the sell sheet points its Accelerator Targets.")},
 {t:"2x and 4x",h:["accel","medals_col"],b:"<p>Complete one bank for timed 2x scoring. Complete the other while 2x runs for 4x and the Accelerator medal. More completions add time.</p>"}
]},
{g:"Other scoring",id:"lab",title:"Plotnik's lab",steps:[
 {t:"Mystery",h:["toplanes","lab"],b:"<p>Complete the LAB top lanes to light the lab saucer near the bumpers. Shoot it directly or let it fall in for a mystery award.</p>"}
]},
{g:"Other scoring",id:"ranks",title:"Ranks and medals",steps:[
 {t:"Ranks",h:["toplanes","rflank","lab"],b:"<p>Rank raises the bonus multiplier and the value of mission shots. Advance it by completing the two advance rank lanes, by the skill shot, by the right flank targets when rank is lit, or as a lab mystery award.</p>"+UNK("The rulesheet does not say how many ranks there are.")},
 {t:"Medals",h:["medals_col"],b:"<p>Five medals, bottom to top: complete Meltdown, start 4x scoring, defeat the Juggernaut in Air Strike, start Cow-A-Bongo and reach maximum rank. All five are needed for the final wizard mode.</p>"}
]},
{g:"Other scoring",id:"extraball",title:"Extra balls and bonus",steps:[
 {t:"Not documented yet",h:["again"],b:"<p>The rulesheet marks both Extra Balls and End-of-Ball Bonus as TBD. It says only that rank raises the bonus multiplier.</p>"+UNK("American Pinball's page says the latest code adds extra balls. This guide does not cover them.")}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"zulu",title:"Tank Zulu",steps:[
 {t:"Qualifying",h:["tanks_col","bank","wizard_ins"],b:"<p>Destroy all five tanks to take on the sixth tank, Tank Zulu.</p>"+UNK("The rulesheet gives no rules for the battle itself. American Pinball's page says the latest code adds the Tank Zulu mini-wizard mode, so older code may not have it.")}
]},
{g:"Wizard modes",id:"sundae",title:"Ice Cream Sundae",steps:[
 {t:"Qualifying",h:["missions_col","wizard_ins"],b:"<p>Gather ingredients in all five missions to make the sundae.</p>"+UNK("The rulesheet gives no rules for the mode.")}
]},
{g:"Wizard modes",id:"social",title:"Intergalactic Ice Cream Social",steps:[
 {t:"Qualifying",h:["wizard_ins","medals_col"],b:"<p>Complete both mini-wizard modes, Tank Zulu and the Sundae, and earn all five medals.</p>"+UNK("The rulesheet gives no rules for the mode.")}
]}
];

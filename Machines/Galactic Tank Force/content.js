/* ---------- playfield features (coordinates in the 640x1300 photo, rectified from a player's-eye promo shot) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 tanks_col:{n:"Tank inserts",c:1,s:[C(250,1030,9),C(245,1056,9),C(238,1083,9),C(232,1110,9),C(227,1137,9)],a:[227,1137],x:"The column under the printed TANKS label, left of center. American Pinball's close-up names them Alpha (bottom), Bravo, Charlie, Delta and Echo (top)."},
 missions_col:{n:"Mission inserts",c:1,s:[C(327,1030,9),C(335,1056,9),C(342,1083,9),C(347,1110,9),C(352,1137,9)],a:[327,1030],x:"The column under the printed MISSIONS label, right of center. The close-up reads Sprinkles (top), Fudge, Berries, Walnuts and Cream (bottom), the rulesheet's top-to-bottom mission order."},
 medals_col:{n:"Medal inserts",c:1,s:[C(290,1035,12),C(290,1074,12),C(290,1114,12),C(290,1152,12),C(290,1192,12)],a:[290,1192],x:"The five yellow inserts up the center rocket. The close-up reads Meltdown at the bottom, then Accelerator, Air Strike and Cow-A-Bongo, with a rank title at the top. That matches the rulesheet's bottom-to-top medal list."},
 wizard_ins:{n:"Wizard inserts",c:1,s:[E(220,992,24,10),E(290,965,26,12),E(352,992,24,10)],a:[290,975],x:"Above the insert columns: Completed Zulu (left), Intergalactic Ice Cream Social (center) and Completed Sundae (right), as read from American Pinball's close-up."},
 robot:{n:"Annoya's robot",c:1,s:[E(305,690,90,85)],a:[305,690],x:"The red robot sculpt with arm cannons behind the center target bank. The rulesheet says one of Annoya's robots moves the red target for tanks 2 and 4. Raised toys sit higher in the photo than their base, so the outline is rough."},
 bank:{n:"Center target bank",c:0,s:[R(268,795,72,38)],a:[304,812],x:"My reading: the red targets at the foot of the robot, in line with the insert columns. The rulesheet says the center target bank defeats the tanks and that the middle target often scores the most. I could not count the targets in this photo."},
 ufo:{n:"UFO target",c:1,s:[E(357,478,46,26)],a:[357,478],x:"The grey flying saucer above and right of the robot, with cows below it in the close-up. The rulesheet calls it the moving UFO target. It is a raised toy, so its spot in this rectified photo is approximate."},
 lramp:{n:"Left ramp",c:0,s:[B([[150,790],[140,730],[132,660],[130,590],[138,520]],16)],a:[140,700],x:"My reading of the clear ramp entrance with green trim, left of the robot. The rulesheet names a left ramp and also says \"shoot the ramp\" in Buckets O'Berries; I take those to be the same shot. The path past the entrance is a guess."},
 lorbit:{n:"Left orbit",c:0,s:[B([[72,830],[62,700],[56,560],[60,420],[80,280],[130,150],[210,80]],15)],a:[62,640],x:"A guess, along the left wall. The rulesheet names both orbits but I cannot see either path in this photo."},
 rorbit:{n:"Right orbit",c:0,s:[B([[548,830],[558,700],[562,560],[560,420],[545,280],[500,150],[420,80]],15)],a:[558,640],x:"A guess, along the right wall inside the plunger lane."},
 rsaucer:{n:"Right saucer",c:0,s:[C(506,742,15)],a:[506,742],x:"A guess, right of the robot. The rulesheet says the right saucer starts missions and is one of the four major shots, but gives no position."},
 lab:{n:"Plotnik's lab saucer",c:0,s:[C(140,282,16)],a:[140,282],x:"A guess, under the raised LAB sign with Plotnik's portrait at the upper left. The rulesheet puts the lab saucer near the bumpers and says either orbit can feed it."},
 labsign:{n:"LAB sign",c:1,s:[R(88,165,72,80)],a:[124,205],x:"The raised pink LAB sign at the upper left, with Plotnik's portrait below it."},
 toplanes:{n:"Top rollover lanes",c:0,s:[R(248,215,112,50)],a:[304,240],x:"A guess: three yellow lights in a row at the top center. The rulesheet has three LAB lanes and two advance rank lanes at the top, but I cannot pick out the lanes in this photo."},
 bumpers:{n:"Pop bumpers",c:0,s:[E(440,290,58,80)],a:[440,290],x:"A guess, at the blue domes in the upper right. The rulesheet says blue inserts above the bumpers turn red as the reactors charge. I could not count the bumpers."},
 air:{n:"AIR targets",c:0,s:[C(125,768,10),C(200,800,10),C(468,725,10)],a:[160,785],x:"A guess, at green lit parts of the photo. The rulesheet says the three green AIR standups are two near the left ramp and one near the right saucer."},
 lflank:{n:"Left flank targets",c:0,s:[E(68,970,16,40)],a:[68,970],x:"My reading. American Pinball's close-up shows three stacked targets labeled ADVANCE FLANK FORCES along the left side, beside the Meltdown, Pop Bumpers and Quantum Accelerator inserts."},
 ltri:{n:"Left flank award inserts",c:1,s:[E(140,1000,34,18)],a:[140,1000],x:"Three inserts under a TARGETS ADVANCE label: Meltdown, Pop Bumpers and Quantum Accelerator, the left flank awards in the rulesheet."},
 rflank:{n:"Right flank targets",c:0,s:[E(540,965,14,40)],a:[540,965],x:"A guess, mirroring the left flank targets on the right side."},
 rtri:{n:"Right flank award inserts",c:0,s:[E(452,1000,32,18)],a:[452,1000],x:"My reading of the three inserts on the right that mirror the left set. The rulesheet's right flank awards are rank, spinners and cows; I cannot read the labels."},
 lret:{n:"Left return lane",c:0,s:[E(98,1075,8,26)],a:[98,1075],x:"A guess, where the left wire ramps come down."},
 rret:{n:"Right return lane",c:0,s:[E(492,1072,8,26)],a:[492,1072],x:"A guess, where the right wire ramps come down."},
 flippers:{n:"Flippers",c:0,s:[B([[190,1212],[268,1250]],13),B([[392,1212],[314,1250]],13)],a:[290,1235],x:"Mostly hidden under the cabinet flap in the photo, so drawn from where the inlanes end."},
 again:{n:"Shoot Again insert",c:1,s:[C(290,1250,11)],a:[290,1250]},
 shield:{n:"Atomic shield",c:0,s:[E(290,1282,24,12)],a:[290,1282],x:"A guess, between the flippers below Shoot Again. The close-up shows a DEFENSE insert there. The photo is cut off at this point."},
 lucky:{n:"Lucky Break lanes",c:0,s:[E(200,1290,30,8),E(380,1290,30,8)],a:[290,1290],x:"A guess. The rulesheet says Lucky Break lights a lane under either flipper, and the close-up shows LUCKY BREAK printed below both flippers, but the photo does not reach that far."},
 shooter:{n:"Plunger lane",c:0,s:[B([[606,1260],[606,1000],[604,760]],12)],a:[606,1000],x:"My reading of the lane along the right side."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["lorbit","lramp","rsaucer","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["tanks_col","missions_col","medals_col","wizard_ins"],b:"<p>Defeat Empress Annoya's five tanks, play all five ice cream missions and earn five medals. The tanks lead to Tank Zulu, the missions to the Ice Cream Sundae, and all of it together to the Intergalactic Ice Cream Social.</p>"+UNK("The rulesheet's Overview and Layout sections are blank, so the playfield names here are my reading of American Pinball's photos.")},
 {t:"Insert columns",h:["tanks_col","medals_col","missions_col"],b:"<p>Three columns sit above the flippers: the five tanks on the left (Alpha to Echo), the five medals up the center rocket, and the five missions on the right (Sprinkles to Cream).</p>"},
 {t:"Four major shots",h:NUM(MAJ),b:"<p>The rulesheet's four major shots: both orbits, the left ramp and the right saucer. They carry the Air Strike jackpots and the 2x shot multipliers.</p>"+UNK("Only American Pinball's player's-eye promo shows the whole playfield, and the upper half is a blur of clear ramps. All four shots are placed from context.")},
 {t:"Center of the playfield",h:["bank","robot","ufo"],b:"<p>The center target bank destroys tanks. Behind it stands Annoya's robot, and above it the moving UFO target that rescues cows.</p>"},
 {t:"Upper playfield",h:["labsign","lab","toplanes","bumpers"],b:"<p>Plotnik's lab saucer sits near the pop bumpers. The top rollover lanes spell LAB, and two more advance your rank.</p>"+UNK("These positions are guesses. The upper playfield is not readable in the only full photo I could use.")},
 {t:"Lower playfield",h:["lflank","ltri","rflank","rtri","lret","rret","shield"],b:"<p>Flank attack target banks on the far left and far right, the return lanes that light missions, and the atomic shield between the flippers.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"LAB lane",h:["shooter","toplanes","lab"],b:"<p>Plunge into the flashing LAB rollover lane to qualify Plotnik's lab for a mystery award.</p>"},
 {t:"Advance rank lane",h:["shooter","toplanes"],b:"<p>Plunge into the flashing advance rank lane to advance your rank at once.</p>"+UNK("The rulesheet does not say which of the top lanes are which.")}
]},
/* ====== TANKS ====== */
{g:"Tanks",id:"tanks",title:"Destroying tanks",steps:[
 {t:"The center bank",h:["bank","tanks_col"],b:"<p>Shoot the flashing center target bank to damage the current tank. The light color on each target shows its damage; the target in the middle often scores the most.</p>"},
 {t:"Charge methane",h:["bank"],b:"<p>Shoot the blue charge methane shots, then hit the blue flashing target dead-on to destroy a tank in one shot.</p>"+UNK("The rulesheet does not say which shots are the charge methane shots. The close-up shows a CHARGE METHANE insert on the left.")},
 {t:"Tanks 1 and 3",h:["tanks_col","bank"],b:"<p>Standard battles. The red center target deals the most damage.</p>"},
 {t:"Tanks 2 and 4",h:["robot","bank"],b:"<p>One of Annoya's robots makes the red target move left and right across the bank. Time your shot.</p>"},
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
 {t:"Sprinkle Desert",h:["missions_col","rsaucer","lab"],b:"<p>Shoot the spinner to collect sprinkles, then the right saucer or Plotnik's lab to send them.</p>"+UNK("The rulesheet does not say where the spinner is, and I could not find it in the photo.")},
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
 {t:"Hidden targets",h:["bumpers"],b:"<p>Two hidden banks of four standups near the bumpers can only be hit off the bumpers. The flippers change which targets are lit; only unlit ones count.</p>"+UNK("The hidden banks are not visible in the photo. The bumper area is marked instead.")},
 {t:"2x and 4x",h:["bumpers","medals_col"],b:"<p>Complete one bank for timed 2x scoring. Complete the other while 2x runs for 4x and the Accelerator medal. More completions add time.</p>"}
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

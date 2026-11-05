/* ---------- playfield features (coordinates in the 640x1305 crop of American Pinball's sell sheet playfield photo; lower left patched from a distributor copy of the same photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 lorbit:{n:"Left orbit",c:0,s:[B([[130,600],[108,548],[85,490],[60,410],[45,320],[55,220],[100,130],[190,65],[300,48]],14)],a:[108,548],x:"The lane behind the arrow above the checkered flag, 6th and 12th place inserts. Its entrance and spinner match the switch map; the path up the left side and over the top to the loop magnet is my reading. The rulesheet also calls it the left orbit/ramp."},
 lloop:{n:"Left inner loop",c:0,s:[B([[172,500],[162,455],[145,400],[125,340],[118,270],[135,200],[180,150]],13)],a:[162,455],x:"The lane behind the arrow above the 2nd, 5th and 11th place inserts. The switch map puts its entry switch partway up the lane; the path past that is my reading."},
 build:{n:"Build Track lane",c:1,s:[B([[242,505],[230,462],[214,412],[200,378]],13),R(181,356,30,22)],a:[230,462],x:"The lane with the BUILD TRACK sign, ending at the yellow and black striped drop target. The switch map names it the upper drop target, which matches."},
 vuk:{n:"Build Track VUK (left saucer)",c:0,s:[C(176,318,14)],a:[176,318],x:"Behind the drop target, placed from the switch map. The rulesheet calls this both the Build Track scoop and the left saucer; it delivers the ball to the left inlane by way of the orange ramp."},
 rpm:{n:"RPM targets",c:1,s:[C(272,461,13),C(295,436,13),C(320,411,13)],a:[295,436],x:"The stepped R, P and M targets in the middle of the playfield, each above a colored tach strip."},
 kicker:{n:"Turbo kicker",c:0,s:[B([[377,505],[386,462],[398,425]],12)],a:[384,470],x:"My reading: the lane with the green arrow and the round turbo insert, right of the RPM targets. The switch map puts its Big Kick switch here. The kicker itself is not visible in the photo."},
 rramp:{n:"Right ramp",c:0,s:[B([[425,505],[440,460],[450,410],[456,340],[458,260]],14)],a:[440,460],x:"The lane behind the arrow above the 3rd, 8th and 10th place inserts, up to the metal ramp entrance. The switch map puts its entry switch here and its made switch on the left side, where the orange ramp comes down; the route between is my reading."},
 oramp:{n:"Orange ramp return",c:0,s:[B([[170,185],[120,170],[70,215],[45,300],[38,450],[40,600],[60,760],[90,850]],12)],a:[60,400],x:"My reading of where the orange ramp comes down: the orange arch at the upper left and the orange track down the left side to the left inlane."},
 rorbit:{n:"Right orbit",c:0,s:[B([[482,540],[502,467],[535,410],[552,330],[555,250],[535,165],[495,100]],14)],a:[502,467],x:"The lane behind the arrow above the 4th, 7th and 9th place inserts, through the spinner. The path up the right side is my reading."},
 lspin:{n:"Left spinner",c:0,s:[C(92,505,12)],a:[92,505],x:"My reading of the white plate with a wheel decal at the left orbit entrance, where the switch map puts the left spinner."},
 rspin:{n:"Right spinner",c:0,s:[C(502,468,12)],a:[502,468],x:"My reading of the white plate with a wheel decal at the right orbit entrance, where the switch map puts the right spinner."},
 saucer:{n:"Right saucer",c:0,s:[B([[445,728],[465,685],[488,648]],12),C(496,630,14)],a:[465,688],x:"The lane behind the red arrow on the right, above the pink lock and mystery inserts. The saucer and the drop target that guards it are hidden under the plastics; I placed them from the switch map."},
 sdrop:{n:"Clock tower drop target",c:0,s:[R(478,646,30,14)],a:[492,653],x:"The drop target in front of the right saucer, placed from the switch map (lower drop target)."},
 epic_s:{n:"EPIC start target",c:1,s:[R(451,727,28,24)],a:[465,739],x:"The upper of the two yellow framed standups beside the printed EPIC label."},
 epic_c:{n:"EPIC collect target",c:1,s:[R(451,769,28,24)],a:[465,781],x:"The lower of the two yellow framed standups beside the printed EPIC label."},
 cars:{n:"Car targets",c:0,s:[C(132,508,10),C(203,482,10),C(386,455,10),C(425,232,11)],a:[203,482],x:"All four are guesses. Two on either side of the left inner loop entrance, beside the white and pink car-shaped inserts; one beside the turbo kicker lane; one in the pop bumper area. The rulesheet and the switch map do not agree exactly on where they are."},
 bonusx:{n:"Advance Bonus X target",c:0,s:[C(380,345,10)],a:[380,345],x:"Placed from the switch map, near the pop bumper exit. I cannot pick it out in the photo."},
 pops:{n:"Pop bumpers",c:1,s:[C(222,190,32),C(332,215,32),C(250,295,32)],a:[270,230],x:"The three Redline tire bumpers with caps, matching the switch map's left, right and bottom pop bumpers. The fourth tire at the right, under a clear plastic, is not a bumper on the switch map."},
 magnet:{n:"Loop magnet",c:0,s:[C(305,75,18)],a:[305,75],x:"A guess, at the top of the outer loop above the pop bumpers."},
 spincar:{n:"Spinning car",c:1,s:[E(330,368,32,22)],a:[330,368],x:"The red car on the arm above the RPM targets."},
 battle:{n:"BATTLE targets",c:1,s:[C(130,632,12),C(127,661,12),C(122,693,12),C(112,724,12),C(98,758,12),C(82,787,12)],a:[112,724],x:"The six lit letter targets curving up the left side, B at the bottom and E at the top. This is the patched part of the photo, so it is soft."},
 pitstop:{n:"Pit Stop target",c:0,s:[C(52,845,10)],a:[52,845],x:"A guess, above the left outlane, from the switch map and the rulesheet's description."},
 lout:{n:"Left outlane (E)",c:0,s:[B([[45,890],[42,1010]],10)],a:[45,905],x:"The lane under the lit E insert at the far left."},
 lin:{n:"Left inlane (P)",c:0,s:[B([[93,858],[96,990]],10)],a:[93,870],x:"The lane under the lit P insert."},
 rin:{n:"Right inlane (I)",c:0,s:[B([[477,855],[482,990]],10)],a:[477,866],x:"The lane under the lit I insert."},
 rout:{n:"Right outlane (C)",c:0,s:[B([[531,890],[540,1010]],10)],a:[531,905],x:"The lane under the lit C insert at the far right."},
 skill:{n:"Skill shot rollovers",c:0,s:[C(568,752,11),C(570,490,11),C(588,305,11)],a:[570,490],x:"The green 1 and 2 inserts under the blue ramp on the right. The 3 rollover is hidden; I placed it from the switch map."},
 retramp:{n:"Blue return ramp",c:0,s:[B([[510,80],[565,160],[594,300],[598,500],[585,690],[540,830],[485,880]],16)],a:[594,450],x:"The clear blue ramp down the right side. The switch map puts its entry at the top right and its made switch low on the right. The rulesheet says hard left orbit shots return to the right flipper by a plastic ramp; I take this to be it."},
 tach:{n:"Tachometer",c:1,s:[C(285,958,78)],a:[285,958],x:"The ten wedge gauge above the flippers."},
 gear:{n:"Gear insert",c:1,s:[C(285,948,15)],a:[285,948],x:"The round gear shift insert at the center of the tach, with 1ST to 5TH printed below it."},
 hero:{n:"Hero car inserts",c:1,s:[C(290,770,15),C(230,808,15),C(290,808,15),C(352,808,15),C(290,845,15)],a:[290,808],x:"The five car inserts above the tach, under COLLECT ALL HERO CARS TO BECOME A HOT WHEELS LEGEND."},
 battle_ins:{n:"Battle mode inserts",c:1,s:[C(205,868,42)],a:[205,868],x:"The round group upper left of the tach: Gorilla, T-Rex, Cobra and Tricera around a center question mark."},
 epic_ins:{n:"Epic feature inserts",c:1,s:[C(372,862,42)],a:[372,862],x:"The round group upper right of the tach, labeled EPIC FEATURES: Cars, Ramps, Pops and Loops around a center question mark."},
 lock_ins:{n:"Saucer award inserts",c:1,s:[C(430,742,10),C(412,770,10),C(400,792,10)],a:[412,770],x:"The pink, lock and question mark inserts in front of the right saucer lane."},
 flippers:{n:"Flippers",c:1,s:[B([[178,1080],[262,1108]],13),B([[422,1080],[338,1108]],13)],a:[300,1095],x:"Decorated as checkered flags."},
 shooter:{n:"Plunger lane",c:0,s:[B([[608,1250],[608,1000],[604,800]],10)],a:[608,1050],x:"A guess, along the right edge. The shooter gauge sticker is at the bottom right."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var RACE=["lorbit","lloop","rramp","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["hero","tach"],b:"<p>Collect all five hero cars to start Legend Multiball and become a Hot Wheels Legend. Along the way the tachometer multiplies almost all of your scoring.</p>"},
 {t:"Race shots",h:NUM(RACE),b:"<p>Four shots carry the race position inserts: the left orbit, the left inner loop, the right ramp and the right orbit. Each has an arrow and three place inserts in front.</p>"},
 {t:"Left side",h:["lorbit","lspin","lloop","build","vuk"],b:"<p>The left orbit has a spinner at its entrance. Next comes the left inner loop, then the Build Track lane, whose drop target guards a VUK.</p>"+UNK("The rulesheet calls the VUK both the Build Track scoop and the left saucer.")},
 {t:"Center",h:["rpm","kicker","spincar"],b:"<p>The stepped RPM targets rev the tach. To their right is the turbo kicker, which kicks the ball back to the left flipper at high speed. The spinning car sits above.</p>"},
 {t:"Upper playfield",h:["pops","bonusx","magnet","cars"],b:"<p>Three pop bumpers, the Advance Bonus X target near the pop exit, and the loop magnet above the bumpers. Weak orbit, loop and ramp shots fall into the pops.</p>"},
 {t:"Right side",h:["rramp","rorbit","rspin","saucer","sdrop"],b:"<p>The right ramp, the right orbit with its spinner, and the right saucer, guarded by the clock tower drop target.</p>"},
 {t:"Targets",h:["battle","cars","epic_s","epic_c","pitstop"],b:"<p>Six BATTLE targets up the left side, four car targets around the playfield, the EPIC start and collect targets on the right, and the Pit Stop target above the left outlane.</p>"+UNK("The car target positions are guesses. The rulesheet places them two different ways, and the switch map does not fully settle it.")},
 {t:"Ramps",h:["rramp","oramp","retramp"],b:"<p>A hard right ramp shot rides the orange ramp to the left inlane. A hard left orbit shot returns to the right flipper by a plastic ramp.</p>"+UNK("The ramp routes are my reading of the photo and switch map.")},
 {t:"Lanes and inserts",h:["lout","lin","rin","rout","tach","battle_ins","epic_ins"],b:"<p>The inlanes and outlanes spell E-P-I-C. Above the flippers sit the tach, with battle modes to its upper left and Epic features to its upper right.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Tach value increase",h:["shooter","skill"],b:"<p>Soft plunge over the 1, 2 and 3 rollovers without falling through the one-way gate into the pops. Each rollover passed adds a wedge to the tach.</p>"+UNK("American Pinball's manual says to aim for the 3 zone without overshooting into the pops or the orbit.")},
 {t:"Super skill shot",h:["lorbit","magnet"],b:"<p>After a good soft plunge, the left orbit lights with a yellow arrow. Shoot it for the super skill shot, which also awards 12th place in the race and catches the ball on the loop magnet if the race has not started.</p><p>Hitting any switch or waiting too long clears it.</p>"},
 {t:"Rev the engine",h:["tach","shooter"],b:"<p>Before the launch, hold the left flipper button to rev the engine on the tach. Release the plunger when it reaches 10 without going over. The tach number reached multiplies the launch points. Going past the maximum blows the engine for that launch.</p>"},
 {t:"Last chance",h:["lorbit","kicker"],b:"<p>If the launch goes all the way around the orbit to the left flipper, the last chance skill shot lights on the kicker, worth the same as the 3 rollover.</p>"}
]},
{g:"Layout and basics",id:"tach",title:"Tachometer and gears",steps:[
 {t:"The tach",h:["tach"],b:"<p>The tach value multiplies almost all scoring. It drops over time, faster in higher gears. Shots add a little; draining takes away 3 wedges.</p>"},
 {t:"RPM targets",h:["rpm","tach"],b:"<p>Hitting flashing RPM targets gives a bigger tach boost and briefly pauses the drop.</p>"},
 {t:"Gears",h:["gear","tach"],b:"<p>The gear sets the minimum tach and the bonus multiplier: 1st (white) x1, 2nd (green) x2, 3rd (yellow) x3, 4th (orange) x4, 5th (red) x5. The only way to shift up is to finish Red Line Mania.</p>"},
 {t:"Shot values",h:["tach","gear"],b:"<p>Most shots score tach value times shot value times gear. Most shots have a value of 1; some are 1.5 or possibly less than 1.</p>"},
 {t:"Spinning car",h:["spincar","tach"],b:"<p>The spinning car speeds up as the tach rises, and the lighting shifts toward yellow and red near the maximum. Maxing the tach starts Red Line Mania.</p>"+UNK("The rulesheet gives the speed steps as 5, 7 and 8 with question marks, so I leave them out.")}
]},
{g:"Layout and basics",id:"extraball",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["vuk","build","hero","cars"],b:"<p>Light an extra ball by reaching a score, collecting two hero cars, collecting forty cars in total, or as a random Collector Case Award. Collect lit extra balls at the left saucer. The score award is instant. The default limit is four per player.</p>"},
 {t:"Bonus",h:["bonusx","cars","gear"],b:"<p>The end-of-ball bonus includes the cars collected that ball, and the gear multiplies the total.</p>"+UNK("The rest of the end-of-ball bonus is not documented yet.")}
]},
/* ====== CARS ====== */
{g:"Cars",id:"cars",title:"Car collecting",steps:[
 {t:"Collecting cars",h:["cars"],b:"<p>Each car target hit collects one car. There are over 450 cars in the game. Cars light Car Chaos Multiball, earn an extra ball and qualify Collector Case Awards.</p>"},
 {t:"Collector Case Awards",h:["cars","saucer"],b:"<p>Fill a case with cars to qualify the mystery award. The display's car icon counts down the cars still needed. Awards include starting a battle, +2 tach wedges, holding or adding bonus X, 10 million, lighting turbo, lighting an extra ball, advancing the race three places, starting Car Chaos when qualified and resetting tilt warnings.</p>"+UNK("The rulesheet does not say where the award is collected, except that Car Chaos starts from the right scoop. American Pinball's manual says case awards are collected at the lower saucer.")},
 {t:"Treasure Hunts",h:["cars"],b:"<p>Change all four car target inserts to yellow to light Treasure Hunt jackpots on the blinking car targets. Draining ends it.</p>"+UNK("The rulesheet marks this as needing testing and verification.")},
 {t:"Advance Bonus X",h:["cars","bonusx"],b:"<p>Hit all four car targets to light the Advance Bonus X target near the pop exit. It awards +1 bonus X.</p>"}
]},
{g:"Cars",id:"turbo",title:"Turbo boost",steps:[
 {t:"Lighting turbo",h:["pops","kicker"],b:"<p>Pop bumper hits light turbo boost at the kicker. The display shows the hits still needed. Draining clears a lit turbo, but pop hits carry over between balls.</p>"},
 {t:"Boosting",h:["kicker","tach"],b:"<p>Shoot the kicker with turbo lit for 10x scoring for 15 seconds. Only one boost is allowed per gear, so activate it at a high tach.</p>"},
 {t:"Fallback",h:["vuk"],b:"<p>If you boost outside a mode, shooting the left scoop banks a higher Track Builder multiball jackpot.</p>"}
]},
{g:"Cars",id:"hero",title:"Hero cars",steps:[
 {t:"The five hero cars",h:["hero"],b:"<p>Twin Mill for completing Car Chaos. Roger Dodger for completing the Draven battle. Sharkruiser for completing Victory Lap, Loop Crash and Track Builder Unlimited multiballs. Bone Shaker for completing the Ultimate Epic. Rip Rod for completing Red Line Mania.</p>"+UNK("American Pinball's manual says \"playing\" several of these modes rather than completing them, and spells the car Rodger Dodger.")},
 {t:"Rewards",h:["hero","vuk"],b:"<p>Two hero cars light an extra ball at the left saucer. All five qualify Legend Multiball.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"race",title:"The race",steps:[
 {t:"Starting the race",h:["lorbit","magnet"],b:"<p>At the start of the game 12th place flashes on the left orbit. Shoot it: the ball stops on the loop magnet and the race starts. Press both flippers to skip the animation.</p>"},
 {t:"Places 12th to 7th",h:NUM(["lorbit","lloop","rramp","rorbit","rramp","rorbit"]),b:"<p>Shoot the blinking place insert each time: 12th left orbit, 11th left loop, 10th right ramp, 9th right orbit, 8th right ramp, 7th right orbit.</p>"+UNK("The rulesheet's race list says \"Left Ramp\" for 12th, 6th and the checkered flag. Its playfield tour and the photo's inserts put those on the left orbit, which the rulesheet also calls the left orbit/ramp.")},
 {t:"Places 6th to the flag",h:NUM(["lorbit","lloop","rorbit","rramp","lloop","lorbit"]),b:"<p>Then 6th left orbit, 5th left loop, 4th right orbit, 3rd right ramp, 2nd left loop and the checkered flag on the left orbit.</p>"},
 {t:"Finishing",h:["lorbit","magnet"],b:"<p>The checkered flag catches the ball on the loop magnet, shows your race time and starts Victory Lap Multiball. Race shots stay available during most modes, but not Red Line Mania.</p>"+UNK("American Pinball's manual describes the race as 13th to 1st place.")}
]},
{g:"Multiballs",id:"victory",title:"Victory Lap Multiball",steps:[
 {t:"Jackpots",h:NUM(RACE),b:"<p>A 4-ball multiball. The left orbit, left loop, right ramp and right orbit are lit for progressive jackpots, and each one raises the multiplier.</p>"+UNK("The rulesheet's list names the left ramp, left orbit, right ramp and right orbit. I take that to mean the four race shots, but it is not certain.")},
 {t:"Super jackpot",h:["kicker"],b:"<p>Collect the super jackpot at the kicker. Its multiplier depends on your jackpot progress, and collecting it resets the jackpot values.</p>"},
 {t:"Stacking",h:["lorbit","lloop","rorbit"],b:"<p>Qualify Loop Crash too before shooting the left orbit to play both at once as a five ball multiball.</p>"}
]},
{g:"Multiballs",id:"loopcrash",title:"Loop Crash Multiball",steps:[
 {t:"Qualifying",h:alt(["lloop","rorbit"]),b:"<p>The left inner loop and right orbit take turns lighting red. Make 6 lit loops to qualify, up to 12 for later qualifications. Then shoot the left orbit to start the 3-ball multiball.</p>"},
 {t:"Crashes",h:["lorbit","rorbit","pops"],b:"<p>You get a 15 second ball save. Left orbit, right orbit and pop bumper hits each score a crash.</p>"},
 {t:"Super jackpot",h:["lorbit","magnet"],b:"<p>Ten crashes light the left orbit green. Shoot it to catch a ball on the loop magnet, then knock it off with another left orbit shot before it is released for the super jackpot. Later supers need more crashes.</p>"}
]},
{g:"Multiballs",id:"track",title:"Track Builder Unlimited",steps:[
 {t:"Building track",h:["build","vuk"],b:"<p>Hit the Build Track drop target or the left saucer four times. Each hit builds the base jackpot.</p>"},
 {t:"Starting",h:["vuk","saucer"],b:"<p>Shoot the left saucer, lit green, for a 2-ball multiball with a 15 second ball save. The right saucer lights for 15 seconds: hit it to add a third ball and double the base jackpots.</p>"},
 {t:"Jackpots",h:["lorbit","lloop","rorbit","vuk"],b:"<p>Light blue arrows on the orbits and loops award jackpots. Enough jackpots light the left saucer for the super jackpot.</p>"+UNK("The rulesheet says \"orbits and loops\" without naming each shot.")},
 {t:"Mega jackpot",h:["vuk","kicker"],b:"<p>After a super jackpot, the left saucer holds the ball for a few seconds. Shoot the kicker for the mega jackpot before it lets go.</p>"}
]},
{g:"Multiballs",id:"carchaos",title:"Car Chaos Multiball",steps:[
 {t:"Starting",h:["cars","saucer"],b:"<p>Collect 40 cars to qualify Car Chaos, which then starts as a Collector Case Award from the right scoop.</p>"},
 {t:"Jackpots",h:["cars","lorbit","rramp"],b:"<p>The car targets flash yellow. Hit them to enable jackpot shots, shown by flashing yellow arrows. The game awards Twin Mill at the end.</p>"+UNK("Not documented yet. The rulesheet starts a jackpot order, \"Left orbit, Left ramp\", and stops. American Pinball's manual says flashing car targets raise loop and ramp jackpots and enough jackpots light a super jackpot at the kicker.")}
]},
/* ====== BATTLES ====== */
{g:"Battles",id:"battles",title:"Creature battles",steps:[
 {t:"Qualifying",h:["battle","lspin","rspin","sdrop"],b:"<p>Complete the BATTLE targets to light a battle. Each spinner shifts the lit letters left or right. For the first battle, the clock tower drop target or any BATTLE target spots a letter; later ones need unlit targets.</p>"},
 {t:"Picking a creature",h:["battle","battle_ins","lspin","rspin"],b:"<p>The BATTLE inserts change color to show the battle: Gorilla blue, T-Rex red, Cobra green, Triceratops yellow. BATTLE target hits or spins rotate through the unfinished ones.</p>"},
 {t:"Starting",h:["saucer","vuk"],b:"<p>Shoot the right saucer to start the lit battle. The first two battles can also start from the left saucer.</p>"},
 {t:"Fuel",h:["battle"],b:"<p>A health bar and a 90 second fuel gauge show on the display. Relight BATTLE targets for more fuel. Finishing early pays a fuel bonus. Draining, tilting or running out of fuel ends the battle with no bonus.</p><p>Battle shots are always purple.</p>"}
]},
{g:"Battles",id:"creatures",title:"The four creatures",steps:[
 {t:"T-Rex",h:["rramp","rorbit","lspin","rspin"],b:"<p>Waves 1 and 2: the left ramp and right orbit are lit. Collect 20 spins to light the right ramp, then shoot it. Wave 3: collect spins to light the saucers and finish.</p>"+UNK("The rulesheet says \"left ramp\" here and puts a question mark on the wave 3 spin count. It is not clear which shot the left ramp is (it may be the left orbit), so it is not marked.")},
 {t:"Gorilla",h:["cars","rramp","lorbit"],b:"<p>Wave 1: hit each of the three front car targets once. Wave 2: hit the left and right ramp once each to light the saucers.</p>"+UNK("The rulesheet does not say which car targets are the front three, or which shot it means by the left ramp. It says the ball must clear the blue ramp, so I mark the left orbit.")},
 {t:"Triceratops",h:["kicker","rramp","rorbit"],b:"<p>The turbo kicker, right ramp and right orbit are lit. Make all three to light the saucers.</p>"},
 {t:"Cobras",h:NUM(["lorbit","lloop","rramp","rorbit"]),b:"<p>Four shots are lit. Each lit shot captures a cobra, but one escapes every 30 seconds and relights a shot. Clear all four at once to light both saucers.</p>"},
 {t:"Finishing",h:["saucer","vuk"],b:"<p>Each battle ends with a shot to a lit saucer.</p>"}
]},
{g:"Battles",id:"draven",title:"Draven",steps:[
 {t:"Qualifying",h:["battle","saucer"],b:"<p>Beat Gorilla, T-Rex, Cobra and Triceratops, then qualify and start Draven the same way, at the right saucer. You get a short ball save.</p>"},
 {t:"Waves 1 and 2",h:["sdrop","battle"],b:"<p>Wave 1: hit the clock tower target at the right saucer to light all six BATTLE inserts. Wave 2: clear any two by hitting their targets.</p>"+UNK("The rulesheet calls the clock tower a drop target in one place and a standup here.")},
 {t:"Waves 3 to 6",h:["cars","battle","saucer","vuk"],b:"<p>Wave 3: hit a front car target. Wave 4: clear two more BATTLE letters. Wave 5: hit a different front car target. Wave 6: clear the last two letters to light both saucers. Spinners do not move the letters in this battle.</p>"},
 {t:"Reward",h:["hero"],b:"<p>Beating Draven awards Roger Dodger and resets the battles. If you drain, Draven escapes but keeps your progress.</p>"}
]},
/* ====== EPIC ====== */
{g:"Epic features",id:"epic",title:"Epic features",steps:[
 {t:"Lighting E-P-I-C",h:["lout","lin","rin","rout"],b:"<p>Roll over the inlanes and outlanes to light E-P-I-C. The left flipper button moves E and P, the right one I and C. Before a feature is qualified, the EPIC targets also spot a letter.</p>"},
 {t:"Qualifying a feature",h:["epic_ins","lspin","rspin"],b:"<p>All four letters light an unfinished feature: Cars, Ramps, Pops or Loops. The spinners cycle which one. Repeat to qualify more before you start.</p>"},
 {t:"Playing",h:["epic_s","epic_c"],b:"<p>Hit the EPIC start target to play every lit feature at once. Make Cars 8, Loops 5, Pops 20 or Ramps 5 times, then hit EPIC collect for the bonus. Extra shots add to the bonus.</p>"+UNK("A machine setting can make both EPIC targets work as start and collect.")},
 {t:"Draining",h:["epic_c"],b:"<p>Draining before you collect loses the features and the bonus: an EPIC fail.</p>"},
 {t:"Ultimate Epic",h:["epic_ins","cars","pops","epic_c"],b:"<p>After all four, collect E-P-I-C again for the Ultimate Epic: 40 car targets, loops, pops or ramps in any mix, then the collect target. It awards Bone Shaker and resets the features.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"redline",title:"Red Line Mania",steps:[
 {t:"Starting",h:["tach","rpm"],b:"<p>Max the tach to start Red Line Mania. Turbo boost does not count. Other modes pause and the playfield drains.</p>"},
 {t:"Shots",h:["lorbit","lloop","vuk","kicker","rramp","rorbit","saucer"],b:"<p>Four balls with unlimited ball saves for 45 seconds. The left orbit, left loop, left saucer, kicker, right ramp, right orbit and right saucer are lit red for jackpots. Make all seven for a super jackpot and a new round.</p>"},
 {t:"Ending",h:["gear","hero"],b:"<p>When time runs out the playfield drains, the gear goes up one (to 5th at most), the tach resets and you earn Rip Rod. Paused modes resume.</p>"}
]},
{g:"Wizard modes",id:"legend",title:"Legend Multiball",steps:[
 {t:"Starting",h:["hero","saucer","vuk"],b:"<p>Collect all five hero cars, then shoot either saucer.</p>"},
 {t:"Playing",h:["lorbit","lloop","rramp","rorbit","kicker"],b:"<p>Two minutes with a ball save throughout, adding balls until six are in play. Every shot starts lit white. Each hit is a jackpot; clearing a shot is a super jackpot, and all supers make the Legend Jackpot.</p>"+UNK("The rulesheet says \"all shots\" without listing them; the marks are the main shots.")},
 {t:"Ending",h:["hero","kicker"],b:"<p>The hero cars reset, but finished Epic features and battles stay. The kicker lights Special.</p>"}
]}
];

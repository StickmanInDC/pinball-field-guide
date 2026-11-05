/* ---------- playfield features (coordinates in the 830x1645 frame of Barrels of Fun's overhead photo, perspective-corrected from the cabinet outline) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- left side ---- */
 lspin:{n:"Left spinner lane",c:0,s:[B([[132,705],[120,630],[106,530],[98,420]],22)],a:[118,620],x:"The lane behind the white arrow at the far left. The rulesheet names a left spinner shot; that it is this lane is my guess."},
 lramp:{n:"Left ramp",c:0,s:[B([[268,815],[260,760],[250,720]],26)],a:[260,765],x:"The entrance behind the arrows left of center. The rulesheet says left ramp shots drain down the left wireform past a hook, so the ramp feeds the left wire return. Its entrance and path are my estimates."},
 lorbit:{n:"Left orbit",c:0,s:[B([[228,470],[205,400],[175,310],[160,230]],24)],a:[200,390],x:"The lane behind the LOCK arrow above the upper flipper, running up the left side. The rulesheet puts Desert Power locks on the left and right orbits, which is why I read this LOCK arrow as the left orbit. Estimated."},
 scoop:{n:"Scoop (front and rear entry)",c:0,s:[R(196,640,46,80)],a:[219,680],x:"The black scoop under the tip of the upper flipper. Barrels of Fun's scoop protector instructions show it beside the upper flipper, with a subway underneath. The rulesheet calls the rear entry the Sneak."},
 uflip:{n:"Upper flipper",c:1,s:[B([[185,545],[232,638]],18)],a:[208,590],x:"Barrels of Fun calls it the Sandwalk upper flipper and lists a magnet there."},
 thumper:{n:"Thumper bumper",c:0,s:[C(145,772,24)],a:[145,772],x:"The black thumper on the sand sculpt at the left. Barrels of Fun lists a Thumper bumper in a dune sculpt; that this is it is my reading of the photo."},
 /* ---- center ---- */
 worm:{n:"Sandworm (ball-eating worm)",c:1,s:[C(300,365,58)],a:[300,365],x:"The upright sandworm with its mouth facing up. Barrels of Fun's rear photo shows it as a tall cylinder. It grabs the ball with a magnet and rises."},
 wormshot:{n:"Worm shot",c:0,s:[B([[330,525],[318,470],[308,425]],28)],a:[318,470],x:"The opening in front of the sandworm. Its exact entrance is my estimate."},
 center:{n:"Center shot (center ramp, center spinner)",c:0,s:[B([[432,525],[426,420],[420,310],[428,235]],26)],a:[424,400],x:"The lane up the middle, between the upright worm and the lying sandworm sculpt. The rulesheet names a center ramp, a center spinner (the Dribble skill shot) and a center shot; I could not tell them apart in the photo, so one lane stands for all three."},
 harvester:{n:"Harkonnen Harvester",c:1,s:[C(185,70,62)],a:[185,70],x:"The Harvester sculpt in the back left corner. A jump ramp throws the ball into the area below it; where the jump ramp starts is not documented, and I could not find it in the photo."},
 travworm:{n:"Lying sandworm sculpt",c:1,s:[E(590,295,55,75)],a:[590,295],x:"Barrels of Fun's static traversing sandworm. Not a shot."},
 drops:{n:"Fremkit drop targets (items)",c:1,s:[R(408,580,38,30),R(413,618,38,30),R(419,657,38,30)],a:[430,632],x:"The three drop targets next to the upper flipper. Barrels of Fun's flyer calls them the Fremkit drop target bank. The rulesheet says they award items."},
 /* ---- desert power field ---- */
 pit:{n:"Desert Power field (pit)",c:1,s:[E(565,575,92,98)],a:[565,575],x:"The enclosed sand field right of center, with the captive fork inside. Barrels of Fun's flyer points here. The rulesheet also calls it the pit, and says it can be entered from the front or the back and holds a spinner."},
 pitfront:{n:"Desert Power field, front entry",c:0,s:[C(556,688,28)],a:[556,688],x:"The half-round opening at the front of the field. The rulesheet says entering the field from the front doubles the super jackpot. Its exact spot is my estimate."},
 tunnel:{n:"Tunnel",c:0,s:[C(492,582,18)],a:[492,582],x:"The rulesheet pairs it with the pit (\"the pit/tunnel\"). I marked the round hole inside the field. Barrels of Fun lists one subway. Estimated."},
 /* ---- right side ---- */
 rramp:{n:"Right ramp",c:0,s:[B([[482,500],[520,425],[580,365],[650,330]],26)],a:[560,385],x:"The clear ramp up to the Sietch mountain. Barrels of Fun's ramp diverter guide puts the right ramp under the mountain sculpt, and the rulesheet says it lowers to trap the ball in the Sietch. Entrance placement is my estimate."},
 sietch:{n:"Sietch mountain",c:1,s:[E(720,280,100,240)],a:[720,280],x:"The rock sculpt along the right. Barrels of Fun lists a Sietch stronghold up-post and a magnet in the Mountains of Arrakis."},
 sideramp:{n:"Side ramp (upper right ramp)",c:0,s:[B([[598,640],[612,575],[650,520],[700,480]],24)],a:[630,560],x:"The rulesheet calls it the upper right ramp, with an upper loop and a lower exit, and a right post that can hold the ball. I could not find it reliably in the photo; this placement is a guess."},
 rorbit:{n:"Right orbit",c:0,s:[B([[660,745],[655,670],[690,580],[735,470]],24)],a:[680,610],x:"The lane behind the right LOCK arrow. As with the left orbit, I read this LOCK arrow as the right orbit because Desert Power locks are on the orbits. Estimated."},
 sandtrap:{n:"Sand Trap",c:1,s:[B([[690,840],[708,780],[725,715]],26)],a:[708,780],x:"The lane with the row of light bars right of center. Barrels of Fun's flyer calls it the Fedaykin Sand Trap ball lock and kickout. The rulesheet calls it the middle-right kickback lane."},
 sanddrop:{n:"Sand Trap drop target",c:0,s:[R(655,815,26,22)],a:[668,826],x:"The red target at the mouth of the Sand Trap. The rulesheet says it must be hit to open the Sand Trap. Estimated."},
 standups:{n:"Standup targets",c:0,s:[C(285,470,12),C(375,417,12),C(477,345,12),C(505,692,12),C(575,752,12)],a:[505,692],x:"The rulesheet counts seven standup targets. I marked five red targets I could see; which ones are which, and where the other two are, is not documented."},
 /* ---- inserts ---- */
 harvins:{n:"Harvester inserts",c:0,s:[C(360,615,14),C(310,650,14),C(377,690,14),C(347,762,14),C(370,825,14),C(315,865,14)],a:[347,762],x:"Six round inserts with a label under each. The rulesheet says there are six Harvester inserts; the labels are too small to read in the photo."},
 prophins:{n:"Prophecy mode inserts",c:1,s:[C(275,985,16),C(248,1018,16),C(222,1052,16),C(195,1095,16),C(227,1115,16),C(265,1140,16)],a:[222,1052],x:"Train, Survive, Ride, Rescue, Fight and Awaken, in an arc on the left."},
 dunemodes:{n:"DUNE mode inserts",c:1,s:[B([[335,1195],[385,1168],[440,1140],[495,1110]],34)],a:[415,1155],x:"Battle of Arrakeen, Fall of Sietch Tabr, Liberate Arrakis and Voice From the Outer World."},
 duneletters:{n:"DUNE letter inserts",c:0,s:[C(311,1240,20),C(361,1240,20),C(411,1240,20),C(462,1240,20)],a:[386,1240],x:"The four round inserts under the DUNE mode inserts. That they are the four DUNE letters is my reading."},
 voiceins:{n:"The Voice insert",c:0,s:[C(712,1190,15)],a:[712,1190],x:"The insert labelled THE VOICE beside the right outlane, as I read it."},
 painins:{n:"Pain Box insert",c:0,s:[C(62,1165,15)],a:[62,1165],x:"The rulesheet puts a purple Pain Box insert above the left outlane. Position estimated."},
 /* ---- lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[245,1400],[330,1468]],20)],a:[288,1434]},
 rflip:{n:"Right flipper",c:1,s:[B([[527,1400],[442,1468]],20)],a:[485,1434]},
 lsling:{n:"Left slingshot",c:1,s:[E(192,1205,34,85)],a:[192,1205]},
 rsling:{n:"Right slingshot",c:1,s:[E(590,1205,34,85)],a:[590,1205]},
 loutlane:{n:"Left outlane",c:0,s:[B([[62,1185],[62,1300]],18)],a:[62,1250]},
 linlane:{n:"Left inlane",c:0,s:[B([[128,1140],[128,1300]],18)],a:[128,1220]},
 rinlane:{n:"Right inlane",c:0,s:[B([[645,1140],[645,1300]],18)],a:[645,1220]},
 routlane:{n:"Right outlane",c:0,s:[B([[712,1210],[712,1300]],18)],a:[712,1260]},
 shooter:{n:"Shooter lane",c:0,s:[B([[805,1520],[805,1100],[800,800]],20)],a:[805,1250],x:"The plunger is player-controlled. A full-strength plunge usually goes all the way around the orbit."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var NINE=["lspin","lramp","scoop","lorbit","wormshot","center","tunnel","sideramp","rorbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers and lanes",h:["lflip","rflip","uflip","lsling","rsling","loutlane","linlane","rinlane","routlane"],b:"<p>Two flippers at the bottom and an upper flipper on the left. The left inlane lights the spinners for resources. The left outlane has the Pain Box save and the right outlane The Voice save.</p>"+UNK("The rulesheet's layout section is only a photo. The lanes are my estimates.")},
 {t:"The shots",h:NUM(NINE),b:"<p>The rulesheet's Liberate Arrakis list names nine shots: the left spinner, left ramp, scoop, left orbit, worm, center, tunnel, side ramp and right orbit. Several modes also use a center ramp, a right ramp and the Desert Power field.</p>"+UNK("The rulesheet lists these shots by name and scoring position, not by where they are. Every shot here is my estimate from the photo.")},
 {t:"Left side",h:["lspin","lorbit","uflip","scoop","thumper"],b:"<p>The left side has a spinner lane, the left orbit, the upper flipper with the scoop under its tip, and the Thumper bumper.</p>"+UNK("Which left lane is the left spinner and which is the left orbit is my guess.")},
 {t:"The sandworm",h:["worm","wormshot","center"],b:"<p>The upright sandworm grabs the ball and rises. Switches on its side and inside it count as worm hits. The center lane runs up past it.</p>"},
 {t:"Desert Power field",h:["pit","pitfront","tunnel"],b:"<p>The enclosed sand field holds a captive fork, a spinner and magnets. A ball trapped there becomes a bash toy. It can be entered from the front or the back.</p>"},
 {t:"Right side",h:["rramp","sietch","sideramp","rorbit"],b:"<p>The right ramp climbs to the Sietch mountain and can lower to trap the ball there. The side ramp (upper right ramp) has a post that can hold the ball. The right orbit runs up the right.</p>"+UNK("The side ramp placement is a guess.")},
 {t:"Sand Trap",h:["sandtrap","sanddrop"],b:"<p>The middle-right kickback lane, with a drop target in front. It locks balls for Fedaykin Multiball.</p>"},
 {t:"Targets",h:["drops","standups","sanddrop"],b:"<p>The three Fremkit drop targets next to the upper flipper award items. Seven standup targets are spread around the playfield, and the Sand Trap has its own drop target.</p>"+UNK("Only five standups are marked; the other two are not placed.")},
 {t:"Toys",h:["harvester","worm","travworm","sietch"],b:"<p>The Harkonnen Harvester in the back left, the ball-eating sandworm, the lying sandworm sculpt and the Sietch mountain.</p>"},
 {t:"Inserts",h:["prophins","harvins","dunemodes","duneletters"],b:"<p>The six prophecy mode inserts on the left, the six Harvester inserts up the middle, and the four DUNE mode inserts with four round inserts under them above the flippers.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"How they work",h:["shooter","rflip"],b:"<p>The plunger is player-controlled. Before the plunge, pick a skill shot with the right flipper; the selected one shows an orange arrow. No other switch may be hit first. If you do not flip before making the shot, the value and award are doubled.</p>"},
 {t:"Scoop (Front)",h:["scoop"],b:"<p>2,500,000 and 10 water or spice (5,000,000 and 20 doubled). You get water in the day and spice at night.</p>"},
 {t:"Sneak (Rear Scoop)",h:["scoop"],b:"<p>5,000,000 and 5 water or spice (10,000,000 and 10 doubled).</p>"},
 {t:"Left Spinner",h:["lspin"],b:"<p>Lights all water or spice. 7,500,000 (15,000,000 doubled).</p>"},
 {t:"Secret skill shots",h:["tunnel","loutlane","center","sideramp"],b:"<p>Not selectable; hit them straight from the plunge. Tunnel: 10,000,000, and spinners make more resources for the rest of the ball. Left outlane: 5,000,000, loads a Sand Snork and plunges another ball. Center spinner (Dribble): 2,500,000. Upper right ramp (side ramp): 5,000,000.</p>"}
]},
{g:"Layout and basics",id:"cycle",title:"Day and night",steps:[
 {t:"The cycle",h:[],b:"<p>The game cycles between day (orange cabinet lighting) and night (blue). The half moon at the top of the screen shows progress. By default a day or night lasts 200 switch hits. You can play one mode per cycle: a Harvester Battle by day, a Prophecy mode by night.</p>"},
 {t:"Faster time",h:[],b:"<p>Once you start that cycle's mode, time runs at double speed. At 80% of the cycle, time holds while a mode is running, so the cycle does not change mid-mode.</p>"},
 {t:"Bonus multiplier",h:[],b:"<p>Each day or night change during a ball adds 50% to the bonus multiplier, up to 500% after eight changes.</p>"}
]},
{g:"Layout and basics",id:"resources",title:"Water and spice",steps:[
 {t:"Spread resources",h:["linlane","lspin","center","pit"],b:"<p>Hit the left inlane when lit to light the spinners. Each spin then adds a resource dot in front of a shot: blue for water, orange for spice. The left inlane also lights two random unlit standup targets with the other resource.</p>"+UNK("The rulesheet says there are three spinners; Barrels of Fun's flyer agrees. The left spinner, the center spinner and the spinner in the Desert Power field are highlighted.")},
 {t:"Collect them",h:["lramp","lorbit","center","pit","rorbit"],b:"<p>Making a shot collects all the dots in front of it. There are five dot clusters: left ramp, left orbit, center, pit and right orbit. Each water or spice scores 50,000. Both cap at 100 by default. Uncollected dots carry over between balls by default. A tilt sets both to zero.</p>"},
 {t:"What they do",h:[],b:"<p>Water is made at night and is the timer for Harvester Battles. Spice is made by day; it is all spent at a prophecy mode's cash out, adding 1,000,000 per spice to the jackpot. End of ball bonus is 13,000 per water and 22,000 per spice collected that ball, times the multiplier.</p>"}
]},
{g:"Layout and basics",id:"items",title:"Items",steps:[
 {t:"Collect an item",h:["drops"],b:"<p>Hit the three drop targets next to the upper flipper. The first drop locks in the item, and you need all three down to collect it. They reset after 20 seconds. Change the active item with the right flipper. After one of each kind, you need the other two before another of the same.</p>"+UNK("The rulesheet mentions a sweep, all three down within a second, but not what it awards. Not documented yet.")},
 {t:"Sand Snork",h:["lramp","loutlane"],b:"<p>A left outlane ball save. Load it at the yellow left ramp. You can hold up to three. An unused loaded Snork is ejected at the end of the ball, and the next ball starts with the left ramp lit to reload it.</p>"},
 {t:"Lasgun",h:["rramp","sideramp"],b:"<p>The blue shot in Harvester Battles, for big damage. You start the game with one. By default (Hybrid) the first two battles accept either the right ramp or the side ramp, then only the side ramp.</p>"},
 {t:"Thumper",h:[],b:"<p>A playfield multiplier. Press the action button to deploy all your Thumpers: one is 2x, two 3x, three 4x. This calls the worm, which takes about 20 seconds to arrive while a worm jackpot builds. Thumpers cannot be used in Prophecy modes.</p>"+UNK("How the worm jackpot is collected is not documented yet.")}
]},
/* ====== MODES ====== */
{g:"Modes",id:"harvester",title:"Harvester Battle",steps:[
 {t:"Start",h:["harvins"],b:"<p>A daytime mode. There are six Harvesters and you can battle one per day. Each battle adds defenders and health. Water is the timer: when it runs out the battle ends and resumes, where you left off, the next day. Low water gives up to 30 seconds of bonus time first.</p>"+UNK("Where a battle starts is not documented yet.")},
 {t:"Fight",h:["worm","wormshot",["rramp",0,"alt"],["sideramp",0,"alt"]],b:"<p>Switches on and inside the worm damage the Harvester. Red shots are Harkonnen soldiers (750,000 and 5 water each). Yellow roving shots are ornithopters (5,000,000). A lit blue shot uses a Lasgun charge for big damage.</p>"+UNK("Which shots carry soldiers and ornithopters is not documented yet.")},
 {t:"Destroy it",h:["harvester"],b:"<p>The final yellow shot has to jump into the area below the Harvester toy at the back, or use a lit blue Lasgun shot instead. Destroying it scores 7,500,000. The second Harvester destroyed awards an extra ball by default.</p>"},
 {t:"Feed the worm",h:["worm"],b:"<p>Then the worm is called. Shoot the blue shots to collect slain soldiers for water and feed them to the worm; each water adds 1,000,000 to the sacrifice jackpot. If the worm does not eat the ball before reaching the area, the jackpot is missed. Finishing a battle lights the Hunter-Seeker.</p>"}
]},
{g:"Modes",id:"prophecy",title:"Prophecy modes",steps:[
 {t:"Start",h:["scoop","prophins"],b:"<p>Night only, and not in multiball. The next mode's insert flashes yellow. Order: Train, Survive, Ride, Rescue, Fight, Awaken. Shoot the scoop to start. By default (Hybrid) the first mode starts from either scoop entry and later ones only from the front.</p>"},
 {t:"Change the mode",h:["rorbit","lorbit"],b:"<p>The right orbit moves forward through the list and the left orbit moves back.</p>"},
 {t:"Cash out or continue",h:[],b:"<p>Each mode has a mid-point cash out. Take the jackpot and end the mode, or continue and risk it for a 5x hurry-up on the last shot. Making that hurry-up in time also gives a perk for the rest of the game. A completed insert stays green if you cashed out, yellow if you finished.</p>"}
]},
{g:"Modes",id:"train",title:"Train",steps:[
 {t:"Spar",h:["pit"],b:"<p>Shoot a ball into the Desert Power field; a second ball is plunged. Bash the captive ball to spar until the meter runs out.</p>"},
 {t:"Cash out",h:["center","rramp"],b:"<p>Shoot the center or right ramp to reach the mid-point cash out.</p>"},
 {t:"Continue",h:["pit"],b:"<p>Bash the captive ball again until it is released. Shoot the lit shot to make a move, or the field to move the lit shot, then send a ball back into the field. Do this three times.</p>"+UNK("Which shots can be the lit shot is not documented yet.")},
 {t:"Finish",h:["lramp","center","rramp"],b:"<p>The left ramp lights; the hook stops that ball and sends it down the outlane. The captive ball is released and a hurry-up at the center and right ramps completes the mode. Perk: Gurney takes out soldiers in Harvester Battles.</p>"}
]},
{g:"Modes",id:"survive",title:"Survive",steps:[
 {t:"Find the pitch",h:NINE,b:"<p>One shot is correct and all are lit. A wrong shot unlights every shot on the side of the playfield without the correct one. Correct: 19,470,000. Wrong: 4,870,000.</p>"},
 {t:"Cash out",h:["rramp","sietch"],b:"<p>Then the right ramp lowers to trap the ball in the Sietch mountain for the cash out.</p>"},
 {t:"Climb",h:[],b:"<p>Continue: reach 5,000m. Lit ramp shots gain altitude, orange 1,000m and blue 500m. Perk: one The Voice right outlane save per ball, and extras are stored.</p>"+UNK("Which ramps light is not documented yet.")}
]},
{g:"Modes",id:"ride",title:"Ride",steps:[
 {t:"Find the spot",h:["rramp","center"],b:"<p>The blue shot is the next place to try a Thumper. The right ramp, center spinner and center ramp find the right spot. Check sand: 3,750,000.</p>"},
 {t:"Set the Thumper",h:["thumper","center","rramp"],b:"<p>Hit the lit Thumper bumper to place it (18,740,000). Then the center and right ramps light for the cash out.</p>"},
 {t:"Mount the worm",h:["worm","wormshot"],b:"<p>Continue: shoot the worm. It grabs the ball and rises part way, and a second ball is plunged. Bash the worm three or four times.</p>"},
 {t:"Set the hooks",h:["rorbit","lramp"],b:"<p>The right orbit sets the first hook and the left ramp the second; the hook then sends that ball to the drain.</p>"},
 {t:"Ride",h:["center","lramp"],b:"<p>The worm releases its ball onto the wireform and a hurry-up starts at the center and left ramps. Make it to finish. Perk: the Thumper adds a ball once per Desert Power Multiball.</p>"}
]},
{g:"Modes",id:"rescue",title:"Rescue",steps:[
 {t:"Rescue crew",h:["standups","scoop"],b:"<p>All seven standup targets are lit. Hit two to light a hurry-up at the scoop, then shoot the scoop to board the ornithopter. A hit target does not relight.</p>"},
 {t:"Cash out",h:["wormshot"],b:"<p>After the first two targets and the scoop, the worm lights for the cash out.</p>"},
 {t:"Continue",h:["standups","scoop"],b:"<p>The worm lets go of the ball. Do two targets and the scoop three more times. Perk: slower water use in Harvester Battles.</p>"}
]},
{g:"Modes",id:"fight",title:"Fight",steps:[
 {t:"First combo",h:[["lramp",1],["rramp",2],["center",3]],b:"<p>Shoot the lit shots to fight Jamis. The combo is left ramp, right ramp, center ramp. The flashing shot continues a combo for more points, but you do not need the whole combo. Finish with the center or right ramp for the cash out.</p>"},
 {t:"Continue",h:[["lramp",1],["rramp",2],["center",3],["pit",4]],b:"<p>The new combo is left ramp, right ramp, center ramp twice, the middle spinner and the Desert Power field. Then a hurry-up at the center and right ramps finishes it. Perk: double damage in Harvester Battles.</p>"}
]},
{g:"Modes",id:"awaken",title:"Awaken",steps:[
 {t:"Attract the worm",h:NINE,b:"<p>All nine shots are lit. Shoot one to lure the worm there, then shoot it again quickly before the worm flees. Repeat until you make enough catches.</p>"+UNK("How many catches is not documented yet.")},
 {t:"Trap and drown",h:["sideramp","pit","tunnel","scoop"],b:"<p>Shoot the side ramp to trap the ball on the right post. Then shoot the pit or tunnel five times to drown the worm, and the scoop to extract the water of life.</p>"},
 {t:"Cash out and fight back",h:["center","rramp"],b:"<p>The center or right ramp is the cash out. Continue: make all lit shots, then the center or right ramp completes the mode. Perk: longer spice jackpot hurry-up.</p>"}
]},
/* ====== SIDE QUESTS ====== */
{g:"Side quests",id:"arena",title:"Feyd-Rautha's Arena Battle",steps:[
 {t:"Start",h:["lramp"],b:"<p>The fourth Bene Gesserit award. A single-ball mode on five shots: left ramp, left orbit, center, side ramp and right orbit. Defense starts at 10.</p>"},
 {t:"Combos",h:[["lramp",0],["lorbit",0],["center",0],["sideramp",0],["rorbit",0]],b:"<p>Three lit shots form a combo: shoot a lit white arrow, then follow the path to the side ramp. Shots start at 10,000,000 and go up 10,000,000 each, scaled by defense. A second combo scores from that total and wins the mode and a DUNE letter.</p>"},
 {t:"Defense",h:["standups","drops","thumper"],b:"<p>Any target hit, including the drops, standups and pop bumper, costs 1 defense; a drain costs 3. At 0 you lose. Win with defense still at 10 for a 100,000,000 bonus.</p>"}
]},
{g:"Side quests",id:"hunter",title:"Hunter-Seeker",steps:[
 {t:"Qualify",h:["harvester"],b:"<p>After a Harvester Battle, and with no battle running, make the jump ramp shot so the ball reaches the Harvester switch while the insert flashes white.</p>"+UNK("Where the jump ramp starts is not documented yet.")},
 {t:"Catch it",h:NINE,b:"<p>One lit shot roves left to right across the nine shots, five seconds at each. Shoot it to collect: 20,000,000 plus 10,000,000 per hunter already caught. Flipper presses and target hits lower the value. If it reaches the end, it escapes.</p>"}
]},
{g:"Side quests",id:"sandwalk",title:"Sandwalk and Run From Shai-Hulud",steps:[
 {t:"Sandwalk",h:["sideramp","lorbit"],b:"<p>The side ramp starts a sandwalk combo when lit gold, from its upper loop or lower exit. The left orbit continues it. 4,000,000 to start, plus 250,000 each time.</p>"},
 {t:"Run",h:["sideramp"],b:"<p>After three sandwalks by default, the side ramp lights solid gold for a Run. Make five side ramp shots in 30 seconds. Each pays your banked sandwalk value. Finish for a DUNE letter.</p>"}
]},
{g:"Side quests",id:"spicedreams",title:"Spice Dreams",steps:[
 {t:"Qualify",h:["sandtrap","linlane"],b:"<p>With a ball locked in the Sand Trap and no Fedaykin Multiball, hit the left inlane. The Sand Trap insert flashes orange; shoot the ball into the Sand Trap within 5 seconds.</p>"},
 {t:"Intensity",h:["sanddrop"],b:"<p>While a ball is locked, each Sand Trap drop target hit raises Spice Intensity, up to 6. A dream scores more and raises your spice cap. It also spots a shot in a running battle or prophecy.</p>"}
]},
{g:"Side quests",id:"bene",title:"Bene Gesserit awards",steps:[
 {t:"Collect",h:["lramp"],b:"<p>A mystery award at the purple left ramp, once each time day and night change (not the first cycle). Awards come in a fixed pattern: common, common, rare, special.</p>"},
 {t:"What you get",h:[],b:"<p>Common: double resources, full spice or water, super spinners, slower water use, bigger Desert Power jackpots. Rare, in order: an extra ball, The Voice save, the Pain Box test. Special: Feyd-Rautha's Arena the first time, then a DUNE letter.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"desertpower",title:"Desert Power Multiball",steps:[
 {t:"Light locks",h:["thumper"],b:"<p>Hit the Thumper bumper to light locks: 2 hits the first time, then 2 more for each multiball played. After the first, you also need the blue Thumper item drop target to reactivate the bumper.</p>"+UNK("Which of the three drops is the blue Thumper one is not documented yet.")},
 {t:"Lock and build",h:["lorbit","rorbit","pit"],b:"<p>Lock at the left and right orbits (1,500,000 each). After two locks, send a ball into the Desert Power field to build the jackpot from 5,000,000 for about 10 seconds: wall switches, spinner and bumper hits all add.</p>"},
 {t:"Start",h:["worm","wormshot"],b:"<p>Then shoot the worm to start. If you have not played it before ball 3, it is qualified for you by default.</p>"},
 {t:"Jackpots",h:["center","pitfront"],b:"<p>Jackpot shots light orange. The switch in front of the worm moves the side jackpot one shot over each hit, for 2x, 3x and 5x.</p>"+UNK("Which shots are jackpots is not documented yet.")},
 {t:"Super jackpot",h:["pit","pitfront"],b:"<p>After three jackpots, send a ball into the field and bash the captive ball with the others until the meter empties. Then collect the super jackpot at the field's spinner, worth the three jackpots combined; from the front it is 2x. Your first super jackpot is a DUNE letter.</p>"}
]},
{g:"Multiballs",id:"fedaykin",title:"Fedaykin Multiball",steps:[
 {t:"Open the Sand Trap",h:["sanddrop","sandtrap"],b:"<p>Hit the drop target to open the Sand Trap: once the first time, one more hit each time after. The first ball in locks and another is plunged.</p>"},
 {t:"Qualify and start",h:["sandtrap"],b:"<p>Hit the Sand Trap twice more (one more each later multiball), then once more when FMB flashes to start. It starts with 2 balls, more with each Harvester destroyed, up to 6.</p>"},
 {t:"Jackpots",h:["sandtrap","sideramp"],b:"<p>Shoot the Sand Trap to lock a ball and light the Fedaykin Jackpot at the upper right ramp. Shoot it again while green for an add-a-ball (up to three). The first jackpot takes one side ramp shot and awards a DUNE letter; later ones need two.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"painbox",title:"Pain Box",steps:[
 {t:"The test",h:["painins","loutlane"],b:"<p>A left outlane ball save, lit by default from ball 2. The ball is caught in the apron. Hold the action button until proven worthy; flipping both flippers within 120 ms is an instant fail. A loaded Sand Snork is used first.</p>"},
 {t:"Prove yourself",h:["lramp"],b:"<p>A new ball is plunged. Make the left ramp. The hook drains that ball and the trapped one comes back. Miss and your ball ends. Completing it is a DUNE letter.</p>"}
]},
{g:"Other scoring",id:"letters",title:"DUNE letters",steps:[
 {t:"Earn letters",h:["duneletters"],b:"<p>Light all four DUNE letters to qualify each DUNE mode. Letters come from destroying a Harvester, continuing a prophecy mode, your first Desert Power super jackpot and first Fedaykin jackpot, a Bene Gesserit award, the Pain Box, the Arena Battle and a Run From Shai-Hulud.</p>"},
 {t:"Choose a mode",h:["dunemodes"],b:"<p>By default you can choose among Battle of Arrakeen, Fall of Sietch Tabr and Liberate Arrakis with the flippers and action button. The fourth is always Voice From the Outer World.</p>"+UNK("Where a DUNE mode starts is not documented yet.")}
]},
{g:"Other scoring",id:"extra",title:"Bonus and extra balls",steps:[
 {t:"Bonus",h:[],b:"<p>(water times 13,000 plus spice times 22,000) times the day and night multiplier. Double-flip to skip.</p>"},
 {t:"Extra balls",h:["harvins"],b:"<p>The second Harvester destroyed, a rare Bene Gesserit award, and replay if the operator turns it on.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"arrakeen",title:"Battle of Arrakeen",steps:[
 {t:"Collect the shots",h:[],b:"<p>Single ball. All six shots are lit; shoot each twice in a row. The ball is held after each.</p>"+UNK("Which six shots is not documented yet.")},
 {t:"Finish",h:["harvester"],b:"<p>A hurry-up starts at 43,960,000. Shoot the Harvester (the jump shot at the back of the worm) to collect and complete the mode, for a DUNE letter.</p>"}
]},
{g:"Wizard modes",id:"sietchtabr",title:"Fall of Sietch Tabr",steps:[
 {t:"Hunt",h:["lspin","center","pit"],b:"<p>A spinner shot clears the sand and shows a lit shot; make it to kill a soldier. More spins first raise its value. Kill six.</p>"},
 {t:"Retreat",h:["rorbit","center","rramp"],b:"<p>Head for the Sietch: the right orbit, then the center or right ramp.</p>"},
 {t:"Save Fremen",h:["rramp","pitfront","pit","center"],b:"<p>For 30 seconds, shoot anything that reaches the Sietch area. Each switch and spin in the field saves a Fremen.</p>"}
]},
{g:"Wizard modes",id:"liberate",title:"Liberate Arrakis",steps:[
 {t:"Call and ride",h:["thumper","worm","wormshot"],b:"<p>Shoot the Thumper for 30 seconds to attract worms, then shoot the worm to ride into a 3-ball multiball.</p>"},
 {t:"Jackpots",h:[["lspin",5],["rorbit",5],["lramp",3],["sideramp",3],["scoop",2],["tunnel",2],["lorbit",1],["wormshot",1],["center",1]],b:"<p>All shots are lit red. Outer shots pay most: left spinner and right orbit 5x, left ramp and side ramp 3x, scoop and tunnel 2x, the rest 1x. Standups steer the jackpot window. Collect them all.</p>"},
 {t:"Fedaykin attack",h:["sandtrap"],b:"<p>Shoot the Sand Trap to launch the Fedaykin, then defeat 10 Harkonnen on red shots. The Sand Trap adds balls and relights shots.</p>"},
 {t:"The Baron",h:["worm","harvester","lorbit"],b:"<p>Shoot the worm three times, then the Harvester. When one ball remains, shoot the left orbit hurry-up to defeat the Baron.</p>"}
]},
{g:"Wizard modes",id:"voice",title:"Voice From the Outer World",steps:[
 {t:"Trap the ball",h:["pit","rramp","lramp","rorbit","sideramp","center","tunnel"],b:"<p>The final mode, with two balls kept in play. Shoot the pit to trap a ball and start fighting Feyd. Both of you start with 15 health.</p>"+UNK("The rulesheet's list of seven shots includes an \"upper loop\" I could not place.")},
 {t:"Fight",h:["standups"],b:"<p>While a ball is trapped, standups (pulsing orange) damage Feyd. A drain costs Paul 1 health; dropping to one ball costs 3. At low health a hurry-up starts at 1,000,000,000.</p>"}
]}
];

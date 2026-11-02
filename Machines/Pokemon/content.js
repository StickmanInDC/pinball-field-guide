/* ---------- playfield features (coordinates in the 640x1214 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit (Bulbasaur)",c:0,s:[B([[122,610],[98,520],[78,440],[66,340],[66,250],[80,160]],18)],a:[105,540],x:"The green Bulbasaur lane. The rulesheet sets the left to right order of these four shots. The arrow is clear, but the clear ramps hide the path past it, so the route is a guess."},
 left_ramp:{n:"Left ramp (Squirtle)",c:0,s:[B([[212,660],[192,560],[172,470],[150,380],[122,290],[112,180],[120,90],[170,40]],20)],a:[192,560],x:"The blue Squirtle lane, in line with the Poké Ball and the blue ramp plate behind it. The rest of the path follows the clear ramp and is my reading."},
 right_ramp:{n:"Right ramp (Pikachu)",c:0,s:[B([[418,650],[440,545],[470,420],[505,270],[500,190]],22)],a:[440,545],x:"The yellow Pikachu lane, up the wide yellow ramp toward the Pikachu toy. The rulesheet does not describe the ramp, so the upper part is my reading."},
 right_orbit:{n:"Right orbit (Charmander)",c:0,s:[B([[470,610],[510,490],[545,360],[565,230],[575,130],[535,70]],18)],a:[510,490],x:"The orange Charmander lane, then round the green arc behind Pikachu. The arrow is clear, but the wires hide much of the path, so the route is a guess."},
 center:{n:"Center lane",c:0,s:[B([[290,445],[290,350],[290,290]],28)],a:[290,400],x:"The rulesheet puts this lane under the Meowth balloon. I could not see the lane itself, so this follows the center line of the printed art up to the balloon."},
 balloon:{n:"Meowth balloon",c:1,s:[E(305,265,75,62)],a:[305,265],x:"The large Meowth toy. Stern's caption calls it the interactive Meowth Balloon."},
 pokeball:{n:"Poké Ball",c:1,s:[C(162,482,56)],a:[162,482],x:"The big red ball. Stern calls it the illuminated, mechanically animated Poké Ball. The rulesheet says the Poké Ball shot is the left ramp."},
 captive:{n:"Pokedex captive ball",c:0,s:[E(408,456,24,34)],a:[408,456],x:"The two chrome balls above the Pokedex Scan and Combo Collect inserts. I read these as the captive ball because the inserts point here, and the red toy behind them looks like a Pokedex. The photo does not label it, or show the back target the rulesheet mentions."},
 pokedex_ins:{n:"Pokedex Scan and Combo Collect inserts",c:1,s:[C(394,513,14),C(382,546,18),C(367,585,24)],a:[382,546]},
 scoop:{n:"Town scoop",c:1,s:[E(505,690,38,26)],a:[505,690],x:"The tray printed TOWN. I treat the rulesheet's town scoop, right scoop and plain scoop as this one shot."},
 town_sign:{n:"Town sign",c:0,s:[R(510,616,52,46)],a:[535,640],x:"Four lit panels above the scoop, with text I cannot fully read. One looks like Mystery. I read it as showing what is lit at the scoop. The rulesheet does not mention it."},
 scoop_ins:{n:"Town scoop arrow",c:0,s:[C(469,750,20)],a:[469,750],x:"The arrow insert pointing up at the scoop. Its link to the scoop is my reading."},
 town_tg:{n:"Town targets",c:0,s:[C(514,733,14),C(520,766,14)],a:[514,733],x:"These two round inserts sit beside the pink Pokémon art, which I read as Chansey. The apron card says Chansey targets light ball save, and the rulesheet says town targets. I treat them as one set, and could not pick out the targets themselves or how many there are."},
 train_tg:{n:"Training targets",c:0,s:[B([[110,690],[108,800]],14)],a:[108,745],x:"The dark strip the three orange arrows point at. The rulesheet puts training targets near the left orbit, below the Psyduck sneak-in, which fits. The strip looks edge on in the photo, so this is my reading."},
 train_ins:{n:"Training inserts",c:1,s:[C(151,726,18),C(151,763,18),C(151,803,18)],a:[151,763],x:"The three orange arrows with dumbbell lamps."},
 psyduck:{n:"Psyduck sneak-in",c:0,s:[C(100,655,24)],a:[100,655],x:"Marked by the Psyduck art just above the training targets. The rulesheet says a target on the Pro and a scoop on the Premium and LE. I could not see either in the photos."},
 battle_l:{n:"Left BATTLE targets",c:0,s:[B([[217,309],[234,280],[253,254]],20)],a:[234,280],x:"The three pink panels left of Meowth. I read them as the left half of BATTLE, and the rulesheet's left Battlefield targets as the same three. The letters are not readable in the photo."},
 battle_r:{n:"Right BATTLE targets",c:0,s:[B([[367,251],[388,279],[407,307]],20)],a:[388,279],x:"The three pink panels right of Meowth. I read them as the right half of BATTLE, and the rulesheet's right Battlefield targets as the same three. The letters are not readable in the photo."},
 berry_l:{n:"Left berry",c:0,s:[C(154,562,17)],a:[154,562],x:"The berry insert left of the left ramp. The rulesheet says the targets flank the left ramp and sit near the captive ball. I could not pick out the target."},
 berry_c:{n:"Center berry",c:0,s:[C(242,516,17)],a:[242,516],x:"The berry insert right of the left ramp. The rulesheet does not say which berry target is the center one. This is my reading from left to right order, and I could not pick out the target."},
 berry_r:{n:"Right berry",c:0,s:[C(363,482,17)],a:[363,482],x:"The berry insert near the captive ball. I could not pick out the target."},
 spinner:{n:"Spinner",c:0,s:[B([[522,462],[534,425]],18)],a:[526,445],x:"The rulesheet ties the spinner to the right orbit. I could not see it, so this marks the orbit entrance, as a guess."},
 toplanes:{n:"Top lanes",c:0,s:[B([[169,119],[168,205]],17),B([[220,119],[219,205]],17)],a:[194,160],x:"Two lamps with slots below them, under the clear ramps. The rulesheet does not say how many top lanes there are, so these may not be all of them."},
 bumpers:{n:"Bumper area",c:0,s:[E(110,165,56,85)],a:[110,165],x:"The rulesheet mentions bumpers but not where they are. I could not see any bumper caps under the clear ramps, so this is the likely area, and only a guess."},
 pikachu:{n:"Pikachu toy",c:1,s:[C(485,135,62)],a:[485,135],x:"Stern calls it the animatronic Pikachu."},
 whirlpool:{n:"Whirlpool",c:1,s:[C(125,1000,88)],a:[125,1000],x:"The clear bowl at the end of the left ramp. The rulesheet's whirlpool spin is on the Premium and LE only.",v:{pro:{s:[]}}},
 tasks:{n:"Travel task inserts",c:1,s:[R(352,812,62,126)],a:[384,875],x:"Printed Discover, Catch, Train and Battle above the right flipper."},
 b_forest:{n:"Forest",c:1,s:[C(255,780,15)],a:[255,780],x:"Tree icon."},
 b_lake:{n:"Lake",c:1,s:[C(279,844,15)],a:[279,844],x:"Water icon."},
 b_mount:{n:"Mountain",c:1,s:[C(346,766,15)],a:[346,766],x:"Peaks icon."},
 b_desert:{n:"Desert",c:1,s:[C(368,826,15)],a:[368,826],x:"Cactus and dune icon."},
 ins_bulb:{n:"Bulbasaur inserts",c:1,s:[B([[92,492],[127,600]],26)],a:[110,545]},
 ins_squirt:{n:"Squirtle inserts",c:1,s:[B([[186,530],[220,650]],26)],a:[202,590]},
 ins_pika:{n:"Pikachu inserts",c:1,s:[B([[446,525],[405,640]],28)],a:[425,585]},
 ins_char:{n:"Charmander inserts",c:1,s:[B([[516,485],[484,590]],26)],a:[498,540]},
 combo_ins:{n:"Combo inserts",c:1,s:[C(137,638,16),C(224,698,16),C(398,665,16),C(478,613,16)],a:[224,698]},
 x_ins:{n:"X inserts",c:1,s:[C(147,672,17),C(232,733,17),C(386,699,17),C(469,646,17)],a:[386,699],x:"Printed X on each main lane. I read these as the shot multiplier lamps. The rulesheet does not say what they are."},
 rocket_ins:{n:"Team Rocket panel",c:1,s:[R(232,450,120,112)],a:[292,510]},
 mewtwo:{n:"Pokémon Master inserts",c:1,s:[R(235,620,100,100)],a:[295,675],x:"Mewtwo and printed Pokémon Master hexagons. The rulesheet does not cover them."},
 team_t:{n:"T lane (left outlane)",c:0,s:[B([[56,935],[56,1000]],13)],a:[56,965],x:"A printed T sits above this lane. I read the TEAM lanes as left to right, T, E, A, M."},
 team_e:{n:"E lane (left inlane)",c:0,s:[B([[109,935],[109,1000]],13)],a:[109,965],x:"The E is hidden in the photos, so this is by position."},
 team_a:{n:"A lane (right inlane)",c:0,s:[B([[491,925],[491,985]],13)],a:[491,950],x:"A printed A sits above this lane."},
 team_m:{n:"M lane (right outlane)",c:0,s:[B([[544,935],[544,1000]],13)],a:[544,965],x:"A printed M sits above this lane."},
 save_l:{n:"Left ball save insert",c:1,s:[C(56,908,16)],a:[56,908]},
 save_r:{n:"Right ball save insert",c:1,s:[C(544,910,16)],a:[544,910]},
 cheeks:{n:"Pikachu art (2x timer)",c:1,s:[E(292,1012,38,30)],a:[292,1012],x:"The rulesheet says Pikachu's cheeks above the flippers show the 2x playfield timer."},
 plunger:{n:"Plunger lane",c:0,s:[B([[603,1160],[603,1020],[600,860]],14)],a:[602,1020],x:"Placed from the photo. The upper part of the lane is hidden."},
 flippers:{n:"Lower flippers",c:1,s:[B([[190,1095],[263,1150]],18),B([[414,1095],[340,1150]],18)],a:[225,1120]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var FOUR=["left_orbit","left_ramp","right_ramp","right_orbit"];
var FIVE=["left_orbit","left_ramp","center","right_ramp","right_orbit"];
var TEAM=["team_t","team_e","team_a","team_m"];
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:alt(["ins_bulb","ins_squirt","ins_pika","ins_char","pokeball","tasks"]),b:"<p>You start with Pikachu and the three Kanto starters, catch Pokémon across four biomes, fight rivals and work toward the Arena Battle.</p><p>The three main mode types are story modes, rival battles and TEAM features.</p>"},
 {t:"Four main shots",h:FOUR.concat(alt(["ins_bulb","ins_squirt","ins_pika","ins_char"])),b:"<p>From left to right, the ramps and orbits belong to Bulbasaur, Squirtle, Pikachu and Charmander. Each lane shows its character.</p>"+UNK("The rulesheet gives this order but no layout text. I matched the lanes by their art. The paths past the arrows are my reading.")},
 {t:"Center lane and Meowth",h:["center","balloon",["rocket_ins",0,"alt"]],b:"<p>BATTLE targets lower the Meowth balloon. Hit the balloon, then the lane below it, for Team Rocket Multiball.</p>"},
 {t:"Poké Ball and left ramp",h:["pokeball","left_ramp"],b:"<p>The Poké Ball shot is at the left ramp. It is the last shot to catch a Pokémon, and it also collects the victory bonus after a rival battle.</p>"},
 {t:"Pokedex captive ball",h:["captive",["pokedex_ins",0,"alt"]],b:"<p>Scan a discovered Pokémon here, build Pokedex Assists and finish combos for Poké Balls. Most story modes end with a final shot here.</p>"},
 {t:"Town scoop",h:["scoop",["scoop_ins",0,"alt"],["town_sign",0,"alt"],"town_tg"],b:"<p>Starts rival battles, travel, mystery and the extra ball when lit. Town targets light outlane ball save.</p>"+UNK("The rulesheet says town targets, and the apron card says Chansey targets. I treat them as the same set.")},
 {t:"BATTLE targets",h:["battle_l","battle_r"],b:"<p>Six targets around Meowth, split left and right. The rulesheet also calls them Battlefield targets.</p>"+UNK("Treating BATTLE and Battlefield targets as one set is my reading.")},
 {t:"Training targets and Psyduck",h:["train_tg",["train_ins",0,"alt"],"psyduck"],b:"<p>The training targets sit near the left orbit, with the Psyduck sneak-in above them. It is a target on the Pro and a scoop on the Premium and LE.</p>"},
 {t:"Berry targets",h:["berry_l","berry_c","berry_r"],b:"<p>Berry targets sit on both sides of the left ramp and near the captive ball. They start 2x playfield.</p>"},
 {t:"Top lanes and bumpers",h:["toplanes","bumpers"],b:"<p>Top lanes build Bonus X. Top lanes and bumpers are the main way to fill the discover gauge.</p>"+UNK("The clear ramps hide this area in the photos. Both marks are estimates.")},
 {t:"Lower playfield",h:TEAM.concat(["tasks",["save_l",0,"alt"],["save_r",0,"alt"]]),b:"<p>The bottom lanes spell TEAM. The panel above the right flipper tracks your progress toward travel.</p>"},
 {t:"Whirlpool",ed:"premium",h:["whirlpool","left_ramp"],b:"<p>On the Premium and LE, the left ramp feeds a whirlpool that spins the ball.</p>"+UNK("The link from the ramp to the bowl is my reading of the photo.")}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:[["plunger",0,"alt"],"center","scoop"],b:"<p>Plunge at full strength and hit the flashing lane. It starts at 500k and raises the bonus multiplier by 2x, plus 1x each time you make it.</p>"+UNK("The rulesheet does not list which lanes can flash. It only names the center lane and scoop, under super skill shots.")},
 {t:"Super skill shot",h:[["plunger",0,"alt"],["flippers",0,"alt"],"center","scoop"],b:"<p>Hold the left flipper and full plunge for 2x the skill shot value, starting at 1M.</p><ul><li><b>Center lane:</b> completes the BATTLE targets and lowers the Meowth balloon. If Team Rocket Multiball is lit there, it starts and lights the add-a-ball without BATTLE being completed.</li><li><b>Scoop:</b> lights mystery if it is not already lit.</li></ul>"},
 {t:"Super secret skill shot",h:["psyduck"],b:"<p>Bounce into the Psyduck sneak-in for 3x the skill shot value, starting at 1.5M.</p>"}
]},
/* ====== STORY MODES ====== */
{g:"Story modes",id:"story",title:"How story modes work",steps:[
 {t:"Starting a mode",h:FOUR,b:"<p>Story modes can be played at any time in single-ball play. Hit a ramp or orbit three times to start that character's level 1 mode. Five more shots to the same shot start its level 2 mode.</p>"},
 {t:"Boosting",h:["train_tg",["train_ins",0,"alt"]],b:"<p>Complete the training targets to boost story modes. Each color boosts a different Pokémon's mode. During a mode, completing them adds 20 seconds.</p><p>Each Pokémon caught adds +1x to the next story mode, to a maximum of 3x. The multiplier resets once the mode ends.</p>"},
 {t:"Rewards",h:[["x_ins",0,"alt"],["scoop",0,"alt"],["right_ramp",0,"alt"]],b:"<p>Completing a story mode qualifies a shot multiplier. Completing three lights the extra ball at the town scoop.</p><p>Playing four story modes of the same level lights the right ramp to choose a mini-wizard mode.</p>"}
]},
{g:"Story modes",id:"bulbasaur",title:"Bulbasaur",steps:[
 {t:"Bulbasaur 1",h:FOUR.concat(["berry_c",["captive",1]]),b:"<p>All ramps and orbits start lit to raise the pollen value, at 400k plus 50k per shot. Shoot the center berry target to relight the shots and collect the built value.</p><p>Clearing all four without the berry target adds +1x to the pollen value. After 6 lit shots, the final shot lights at the captive ball.</p>"},
 {t:"Bulbasaur 2",h:FOUR.concat(["captive",["flippers",0,"alt"]]),b:"<p>One green shot and one purple shot are lit. The left flipper moves the green shot one to the left, and the right flipper moves the purple shot one to the right. Line them up for 3x awards.</p><p>Collect three 3x awards to light the final shot at the captive ball.</p>"}
]},
{g:"Story modes",id:"squirtle",title:"Squirtle",steps:[
 {t:"Squirtle 1 (Pro)",ed:"pro",h:["left_ramp","left_orbit","right_ramp","right_orbit","captive"],b:"<p>Shoot the left ramp. Other lit blue shots raise the value of each ramp shot by +1x, up to 4x, for 10 seconds per shot.</p><p>After 3 lit left ramp shots, the final shot lights at the captive ball.</p>"},
 {t:"Squirtle 1",ed:"premium",h:["left_ramp","whirlpool","left_orbit","right_ramp","right_orbit","captive"],b:"<p>Shoot the left ramp to spin the whirlpool. Other lit blue shots raise the value of each spin by +1x, up to 4x, for 10 seconds per shot.</p><p>After 3 lit left ramp shots, the final shot lights at the captive ball.</p>"},
 {t:"Squirtle 2",h:FIVE.concat(["captive"]),b:"<p>The five major shots are on fire. Shooting a shot starts its fire going out for 15 seconds, and hitting that shot scores an award multiplied by how many other shots are going out.</p><p>Put out all five to light the left ramp for a whirlpool shot based on the total, then shoot the captive ball to finish.</p>"+UNK("The rulesheet does not list the five major shots. I marked the four main shots and the center lane. It also does not say what the whirlpool shot does on the Pro.")}
]},
{g:"Story modes",id:"pikachu",title:"Pikachu",steps:[
 {t:"Pikachu vs. Raichu",h:FIVE.concat(["captive"]),b:"<p>2-ball multiball. All shots are lit yellow for jackpots and unlight once made, until another shot's jackpot is scored.</p><p>A jackpot (+1 per super jackpot) lights the super jackpot at the captive ball, based on their combined value. Hit the very back target for a 2x super jackpot. Collect 3 super jackpots to finish.</p><p>For the add-a-ball, complete BATTLE, then press the action button while it blinks green.</p>"+UNK("I marked the main shots as all shots. The rulesheet does not list them.")},
 {t:"Pikachu vs. Mimikyu",h:FOUR.concat(["battle_l","battle_r","center"]),b:"<p>3-ball multiball with add-a-ball chances. Ramps and orbits are lit for jackpots, but need relighting at the BATTLE targets.</p><p>2 jackpots light the center lane for a super jackpot and an add-a-ball, the first three times. Each super jackpot resets this with 1 more jackpot needed. Score 3 super jackpots to finish.</p>"}
]},
{g:"Story modes",id:"charmander",title:"Charmander",steps:[
 {t:"Charmander 1",h:["right_orbit","spinner","left_orbit","left_ramp","right_ramp","captive"],b:"<p>The right orbit is lit to collect a spinner jackpot, worth 30k per spin. The left orbit and both ramps multiply the jackpot, up to 4x. After 100 spins, the final shot lights at the captive ball.</p>"},
 {t:"Charmander 2",h:["left_ramp","right_ramp","captive"],b:"<p>Battle Dragonite with left ramp and right ramp combos. While a combo runs, all lit ramp shots are multiplied. A total of 6 ramp shots, in or out of a combo, lights the captive ball to finish.</p>"}
]},
/* ====== CATCH AND BATTLE ====== */
{g:"Catch and battle",id:"catch",title:"Discover and catch",steps:[
 {t:"Biomes",h:["b_forest","b_lake","b_mount","b_desert"],b:"<p>You start in the forest, including on competition mode. If you are signed in to Insider Connected, have already played Forest Battle and are on normal settings, you can choose your starting biome before the first plunge.</p>"},
 {t:"Discover",h:["toplanes","bumpers",["captive",0,"alt"]],b:"<p>Hitting switches while no mode or multiball runs, mainly the top lanes and bumpers, fills the gauge and eventually discovers a Pokémon.</p><p>The action button lights purple when a scan is available. Hold it to let the Pokémon escape if you want a different one.</p>"},
 {t:"Scan",h:["captive",["pokedex_ins",0,"alt"]],b:"<p>Shoot the captive ball to scan. This gives a short ball save and starts a hurry-up at 2M.</p>"},
 {t:"Catch",h:["pokeball","left_ramp"],b:"<p>Shoot the purple targets to spell CATCH! and light the Poké Ball at the left ramp. It scores a value starting at the combined value of the prior shots.</p><p>Each catch adds +1x to the next story mode and lights the right scoop for a rival battle. The first battle takes one catch, and each later battle takes two.</p>"},
 {t:"Capture 1",h:["battle_l",["left_ramp",1]],b:"<p>Left Battlefield targets, then the left ramp.</p>"},
 {t:"Capture 2",h:[["left_ramp",1],["right_ramp",2],["left_ramp",0,"alt"]],b:"<p>Left ramp, right ramp, then the left ramp.</p>"},
 {t:"Capture 3",h:[["train_tg",1],["right_ramp",2],["left_orbit",3],"left_ramp"],b:"<p>Training targets, right ramp, left orbit, then the left ramp.</p>"},
 {t:"Capture 4",h:[["right_orbit",1],["battle_r",2],["train_tg",3],["right_ramp",4],"left_ramp"],b:"<p>Right orbit, right Battlefield targets, training targets, right ramp, then the left ramp.</p>"},
 {t:"Capture 5 and later",h:[["left_ramp",1],["scoop",2],["right_ramp",3],["battle_l",4],["left_orbit",5]],b:"<p>One listed sequence is left ramp, town scoop, right ramp, left Battlefield targets, left orbit, then the left ramp.</p>"+UNK("The rulesheet leaves the other two sequences for captures 5 and up as question marks.")},
 {t:"Pokedex Assist",h:["captive",["left_ramp",0,"alt"]],b:"<p>An assist spots the currently lit shot and awards its value, but never the final left ramp shot.</p>"}
]},
{g:"Catch and battle",id:"battle",title:"Rival battles",steps:[
 {t:"Starting",h:["scoop"],b:"<p>Rival battles must be qualified by catching, and start only at the right scoop.</p>"},
 {t:"Fighting",h:FOUR.concat(["battle_l","battle_r","center"]),b:"<p>Defeat the rival's Pokémon with flashing shots and Battlefield targets. Battlefield targets build an arena bonus scored at the center lane. Other shots are multiplied by any active shot multiplier, and boosted by completed TEAM features.</p><p>Pokémon with two types alternate attack types with each shot. You always start as Pikachu.</p>"},
 {t:"Switching and healing",h:["scoop","train_tg",["flippers",0,"alt"]],b:"<p>After dealing 3 shots of damage, shoot the town scoop when flashing to switch Pokémon. The right flipper changes the choice, and a type that is super effective flashes faster.</p><p>If one faints, the next is queued automatically. Completing the training targets heals the active Pokémon, once per Pokémon swapped out.</p>"},
 {t:"Assists",h:["captive"],b:"<p>Pokedex Assists score the most valuable lit shot, or if all are equal, the one dealing the most damage.</p>"},
 {t:"Victory",h:["left_ramp"],b:"<p>After winning, shoot the left ramp within 10 seconds for the victory bonus, based on how quickly you won. An assist cannot collect it.</p><p>Winning adds +1x to all Team Rocket Multiball scoring for the rest of the game, to a maximum of 3x. After that, wins raise the base victory bonus by 10M, then 15M, then 20M and so on.</p>"},
 {t:"Rival types",h:["b_forest","b_lake","b_desert","b_mount"],b:"<ul><li><b>Forest:</b> primarily Bug and Grass.</li><li><b>Lake:</b> primarily Water.</li><li><b>Desert:</b> primarily Fire and Psychic.</li><li><b>Mountain:</b> primarily Rock, Ground and Steel.</li></ul>"}
]},
{g:"Catch and battle",id:"travel",title:"Travel",steps:[
 {t:"Tasks",h:["tasks","train_tg","captive",["pokeball",0,"alt"],["scoop",0,"alt"]],b:"<p>Above the right flipper are the tasks for travel:</p><ul><li>Discover, then catch any Pokémon.</li><li>Complete the training targets, outside a story mode.</li><li>Play a rival battle.</li></ul>"+UNK("The rulesheet says four tasks but lists three. The panel shows Discover, Catch, Train and Battle, so discover and catch may count separately.")},
 {t:"Traveling",h:["scoop","b_forest","b_lake","b_mount","b_desert"],b:"<p>With all tasks done, and no other mode or multiball running, shoot the scoop to go to the biome of your choice. You can also revisit a biome where you already battled.</p><p>After traveling for all four biomes, the scoop starts the Arena Battle.</p>"}
]},
/* ====== TEAM ====== */
{g:"TEAM and Team Rocket",id:"team",title:"TEAM features",steps:[
 {t:"How they work",h:TEAM,b:"<p>Complete the TEAM bottom lanes to light a TEAM feature. It is a short timed mode that starts on the next shot made, even during multiball.</p><p>Once completed or timed out, it boosts that shot for the rest of the ball. Boosted shots score more while lit in any mode, and award +1 Poké Ball.</p>"},
 {t:"Pikachu Hurry-Up",h:["right_ramp",["pikachu",0,"alt"]],b:"<p>Lit at the right ramp for about 10 seconds. While the ball is held, mash the action button to lock in the value, which starts at about 6M. Only the value shown when the ball releases scores.</p>"},
 {t:"Squirtle Prize Pool (Pro)",ed:"pro",h:["left_ramp"],b:"<p>Lit at the left ramp for about 10 seconds. On the Pro it scores a set value, 5M plus 1.25M per collect.</p>"},
 {t:"Squirtle Prize Pool",ed:"premium",h:["left_ramp","whirlpool"],b:"<p>Lit at the left ramp for about 10 seconds. While the ball spins in the whirlpool, press the action button to score the selected award x2. Each spin changes the award.</p>"},
 {t:"Charmander Super Spinner",h:["right_orbit","spinner"],b:"<p>Shoot the right orbit to light the spinner at 100k per spin for the mode. Reach the cap of 15M, plus 2.5M each time this mode is completed, to finish it.</p>"},
 {t:"Bulbasaur Loops",h:["left_orbit"],b:"<p>Shoot the left orbit repeatedly for rising points per loop. Make 5 before time runs out to complete it.</p>"}
]},
{g:"TEAM and Team Rocket",id:"rocket",title:"Team Rocket Multiball",steps:[
 {t:"Lower the balloon",h:["battle_l","battle_r","center","balloon"],b:"<p>Shoot the BATTLE targets to lower the Meowth balloon. The center lane spots targets not yet hit. A super skill shot to the center lane lowers the balloon at once.</p>"},
 {t:"Start the multiball",h:["balloon","center"],b:"<p>Shoot the lowered balloon 4 times to start the first multiball at the lane below it. Hitting that lane as a sneak-in lights the multiball instantly.</p><p>The second takes 5 balloon shots to light, and then the lane below starts it.</p>"},
 {t:"Multiball 1",h:["left_ramp","right_ramp","balloon","center"],b:"<p>The ramps and balloon are lit for jackpots. 6 jackpots light the lane under the balloon for a super jackpot, which qualifies a shot multiplier.</p><p>The outer ramps and orbits then light for 15 seconds of unlimited super jackpots, before the process resets. Later cycles need 8 jackpots.</p>"},
 {t:"Multiball 2",h:["balloon","center"].concat(alt(FOUR)),b:"<p>Fight the mecha-Meowth powered by Vanillite and its evolutions. Red shots freeze, turning blue, and raise the jackpot multiplier. Hitting a frozen shot lowers the multiplier but raises the base jackpot.</p><p>The jackpot scores at the balloon after freezing a shot, with +1 frozen shot per later multiball. 2 jackpots, +1 per round, light the center lane for a super jackpot, which qualifies a shot multiplier.</p>"+UNK("The rulesheet does not list which shots turn red.")},
 {t:"Add-a-ball and scoring",h:["battle_l","battle_r"],b:"<p>In any Team Rocket Multiball, complete BATTLE, then press the action button while it blinks green for an add-a-ball.</p><p>Each rival battle won adds +1x to these multiballs, to a maximum of 3x.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"shotx",title:"Shot multipliers",steps:[
 {t:"Qualifying",h:[["x_ins",0,"alt"]].concat(FOUR),b:"<p>Complete a story mode or score the first super jackpot in any Team Rocket Multiball. The next shot made gets 2x scoring for the rest of the ball.</p><p>It affects all scoring from that shot, including CATCH! values and the third shot of an Eevee combo ending there.</p>"},
 {t:"3x",h:FOUR,b:"<p>With multipliers lit at every shot, one more qualified multiplier enables 3x scoring at the next shot made.</p>"}
]},
{g:"Other scoring",id:"training",title:"Training targets",steps:[
 {t:"Outside a mode",h:["train_tg",["train_ins",0,"alt"]],b:"<p>Completing the targets trains one of your four Pokémon, which then deals more damage per shot in rival battles. They also qualify travel.</p>"},
 {t:"In a mode",h:["train_tg"],b:"<p>During a story mode they add 20 seconds. During a rival battle they heal the active Pokémon, once per Pokémon swapped out.</p>"}
]},
{g:"Other scoring",id:"psyduck",title:"Psyduck sneak-in",steps:[
 {t:"Award (Pro)",ed:"pro",h:["psyduck"],b:"<p>The target above the training targets scores a sneak-in award on a lucky bounce. It starts at 500k, rises 250k per sneak-in and resets at the end of each ball.</p>"},
 {t:"Award",ed:"premium",h:["psyduck"],b:"<p>The scoop above the training targets scores a sneak-in award on a lucky bounce. It starts at 500k, rises 250k per sneak-in and resets at the end of each ball.</p><p>The scoop also gives a short ball save in case the ball drains after release, with no grace period.</p>"}
]},
{g:"Other scoring",id:"berries",title:"Berries and 2x playfield",steps:[
 {t:"Starting 2x",h:["berry_l","berry_r",["berry_c",1]],b:"<p>Hit the left and right berry targets twice each, then the center berry target when flashing, for 20 seconds of 2x playfield.</p>"+UNK("The rulesheet does not say which target is the center one. My left to right reading could be wrong.")},
 {t:"Timer",h:["cheeks","berry_c"],b:"<p>Pikachu's cheeks above the flippers show the timer. Each center berry hit during 2x adds 5 seconds, up to the 20 second maximum.</p>"}
]},
{g:"Other scoring",id:"assists",title:"Pokedex Assists",steps:[
 {t:"Earning and using",h:["captive"],b:"<p>Shooting the captive ball advances toward an assist, more easily in single-ball play. Use one by pressing the action button while it blinks red.</p><p>Assists work during CATCH! and rival battles, but not on the final CATCH! shot or the victory bonus.</p>"},
 {t:"Extra ball",h:["captive",["scoop",0,"alt"]],b:"<p>25 captive ball hits in a game light the extra ball at the town scoop. In single-ball play each switch counts, up to 3 on a maximum strength shot. In multiball each captive ball hit counts as 1.</p>"}
]},
{g:"Other scoring",id:"pokeballs",title:"Poké Ball combos",steps:[
 {t:"Combos",h:FOUR.concat([["combo_ins",0,"alt"],"captive"]),b:"<p>Each combo shot awards 1 Poké Ball, +1 if boosted by a TEAM feature. A 2-way combo or more lights the captive ball to finish it, awarding Poké Balls by length. A 5-way combo ending there awards 5.</p>"},
 {t:"Rewards",h:[["scoop",0,"alt"]],b:"<p>Poké Balls add to end-of-ball bonus. 50 in a game light the extra ball at the town scoop.</p>"}
]},
{g:"Other scoring",id:"eevee",title:"Eevee evolution combos",steps:[
 {t:"Scoring",h:FOUR,b:"<p>Eight secret combos each collect an Eevee Evolution, worth 2.5M plus 500k per unique combo. All eight award 10M and reset them, though not the value.</p>"},
 {t:"Vaporeon",h:[["left_ramp",1],["right_ramp",2],["battle_l",3],["battle_r",3]],b:"<p>Left ramp, right ramp, Battlefield.</p>"},
 {t:"Jolteon",h:[["right_ramp",1],["left_orbit",2]],b:"<p>Right ramp, left orbit, Center Playfield X Target.</p>"+UNK("I could not place this target, and the rulesheet names it nowhere else, so it is not marked.")},
 {t:"Flareon",h:[["left_ramp",1],["right_orbit","2,3"]],b:"<p>Left ramp, right orbit, right orbit.</p>"},
 {t:"Espeon",h:[["right_ramp",1],["left_ramp",2],["captive",3]],b:"<p>Right ramp, left ramp, captive ball.</p>"},
 {t:"Umbreon",h:[["right_ramp",1],["left_orbit",2],["train_tg",3]],b:"<p>Right ramp, left orbit, training targets.</p>"},
 {t:"Leafeon",h:[["left_orbit",1],["left_ramp",2],["scoop",3]],b:"<p>Left orbit, left ramp, town scoop.</p>"},
 {t:"Glaceon",h:[["left_ramp",1],["right_orbit",2],["scoop",3]],b:"<p>Left ramp, right orbit, town scoop.</p>"},
 {t:"Sylveon",h:[["left_orbit",1],["left_ramp",2],["right_orbit",3]],b:"<p>Left orbit, left ramp, right orbit.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery, ball save, extra balls",steps:[
 {t:"Mystery",h:TEAM.concat(["scoop"]),b:"<p>TEAM lights mystery at the town scoop, the first after one completion and later ones after two.</p><ul><li>2.5M</li><li>Advance discover, about 1/4 of the gauge</li><li>2 to 10 Poké Balls</li><li>Advance outlane ball save by one target set</li><li>Light extra ball (one per game, percentage based)</li></ul>"},
 {t:"Outlane ball save",h:["town_tg","save_l","save_r",["team_t",0,"alt"],["team_m",0,"alt"]],b:"<p>Complete the town targets to light ball save, with +1 completion needed each time it is used. Either flipper alternates it between outlanes. Saved balls bypass the bumpers and head straight to the flippers.</p>"},
 {t:"Extra balls",h:["scoop"],b:"<p>Lit at the town scoop by completing three story modes, 50 Poké Balls, 25 captive ball hits, or a rare mystery award. An extra ball scores 2.5M when off or maxed out.</p>"},
 {t:"End-of-ball bonus",h:["toplanes"],b:"<ul><li>500k x Pokémon caught</li><li>25k x berry targets hit</li><li>12.5k x Poké Balls collected</li></ul><p>All multiplied by Bonus X, built by completing the top lanes, up to 20x.</p>"}
]},
{g:"Other scoring",id:"magikarp",title:"Magikarp (topper only)",steps:[
 {t:"Letters",h:[["pokeball",0,"alt"]],b:"<p>With the topper installed, each Pokémon caught lights a letter of MAGIKARP on it. All 8 start Pikachu vs. Magikarp. Letters carry over across players and games, except that on competition mode each player has their own, reset when the game ends.</p>"},
 {t:"Pikachu vs. Magikarp",h:["captive",["left_ramp",0,"alt"]],b:"<p>2-ball multiball. Blue shots light a Magikarp Jackpot at the captive ball, and more blue shots build it. 3 jackpots light the left ramp to evolve Magikarp.</p>"},
 {t:"Pikachu vs. Gyarados",h:FOUR.concat([["left_ramp",0,"alt"]]),ed:"pro",b:"<p>6-ball multiball. All shots are lit for jackpots, but the same shot cannot be hit twice in a row. 10 jackpots light the left ramp for four super jackpots. Shooting the right ramp holds a ball there and multiplies the next super jackpot. The process then repeats.</p>"},
 {t:"Pikachu vs. Gyarados",h:FOUR.concat(["whirlpool"]),ed:"premium",b:"<p>6-ball multiball. All shots are lit for jackpots, but the same shot cannot be hit twice in a row. 10 jackpots light the left ramp to score four super jackpots, using the scoop. Shooting the right ramp holds a ball there and multiplies the next super jackpot. The process then repeats.</p>"+UNK("The rulesheet does not say whether this scoop is the whirlpool or the town scoop. I marked the whirlpool.")}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"mini",title:"Mini-wizard modes",steps:[
 {t:"Lighting them",h:["right_ramp"],b:"<p>Playing all four level 1 or level 2 story modes lights the right ramp. The mode only starts if nothing else runs. You choose one, and after the level 2 modes the other one starts.</p>"},
 {t:"Lucario: build phase",h:["left_orbit","right_orbit","left_ramp",["right_ramp",0]],b:"<p>Single ball with 15 seconds of ball save. Orbits and the left ramp add 250k to the jackpot per shot. After 3 build shots, the right ramp lights to lock a ball. Draining, or locking the maximum for 6-ball multiball, starts the multiball phase.</p>"},
 {t:"Lucario: multiball phase",h:FOUR,b:"<p>Two shots are lit at a time, scoring the jackpot x balls in play, then moving to shots not yet hit. 10 jackpots light the right ramp. Shoot it to light the left ramp for a super jackpot worth all the jackpots combined, or keep shooting blue jackpots to raise it.</p>"+UNK("The rulesheet does not list which shots these are. I marked the main four.")},
 {t:"Charizard",h:FOUR.concat(["captive"]),b:"<p>4-ball multiball. Each ramp and orbit starts a phase using 10% of that shot's story mode total as its base value, so the left orbit uses Bulbasaur 1. Two lit shots light the captive ball to score the total x balls in play. More lit shots first raise it.</p>"},
 {t:"Charizard: finish",h:["center","captive"],b:"<p>After all four phases, the center lane lights to win the battle, with a super jackpot hurry-up starting at the total of all shots so far. The maximum is 100M, or 200M with 2x playfield.</p><p>If you drop to one ball, you have 15 seconds to hit a lit shot or the captive ball to add a ball. The mode ends on the super jackpot or when that last chance times out.</p>"}
]},
{g:"Wizard modes",id:"arena",title:"Arena Battle",steps:[
 {t:"Starting",h:["scoop","b_forest","b_lake","b_mount","b_desert"],b:"<p>After traveling for all four biomes, shoot the scoop. The rules are those of rival battles, but much harder.</p>"},
 {t:"Six opponents",h:alt(FOUR).concat([["scoop",0,"alt"],["train_tg",0,"alt"]]),b:"<ol><li><b>Ursaring</b> (Normal): each attack switches your Pokémon, and the town scoop cannot switch.</li><li><b>Sandslash</b> (Ground): damage over time on your active Pokémon. Switching or healing gets round this.</li><li><b>Talonflame</b> (Fire / Flying): Fly makes it briefly invincible. You can deal damage as it recovers.</li><li><b>Gengar</b> (Ghost / Poison): all lights turn off.</li><li><b>Metagross</b> (Steel / Psychic): flippers are reversed, and no healing.</li><li><b>Salamence</b> (Dragon / Flying): attacks hard and often.</li></ol>"},
 {t:"Pokémon Master",h:["mewtwo"],b:"<p>The apron card says to conquer the Arena, stop Team Rocket, and defeat Charizard and Lucario, then challenge Mewtwo and become a Pokémon Master.</p>"+UNK("The rulesheet does not cover this at all. This text is from Stern's apron card, read from a blurry photo.")}
]}
];

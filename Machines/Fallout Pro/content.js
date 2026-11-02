/* ---------- playfield features (coordinates in the 700x1340 photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 pipboy:{n:"Pip-Boy",c:1,s:[E(185,270,100,88)],a:[185,270]},
 lower_pip:{n:"Lower pipboy ramp",c:0,s:[B([[190,745],[150,640],[112,500]],36)],a:[175,700],x:"The metal staircase. Identified by the extra ball target beside it and the Pip-Boy insert in front of it."},
 upper_pip:{n:"Upper pipboy ramp",c:0,s:[B([[215,455],[195,385],[195,345]],26)],a:[212,450],x:"Placed from the Pip-Boy insert and the arrow under the Pip-Boy. Estimated."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[270,470],[252,385],[245,345]],26)],a:[268,465],x:"Placed from the first row of item inserts and the arrow above it. Estimated."},
 uturn:{n:"U-turn",c:0,s:[B([[318,425],[312,320],[305,245]],26)],a:[318,420],x:"Placed from the middle row of item inserts and the arrow above it. Estimated."},
 jump_ramp:{n:"Center jump ramp",c:0,s:[B([[382,510],[390,440]],52)],a:[382,500],x:"The white arrow insert leads to the red lip. Exact extent estimated."},
 back_panel:{n:"Back panel",c:0,s:[R(345,80,65,100)],a:[377,130],x:"The panel behind the jump ramp, with Open Vault and Vault Letter lights."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[585,640],[612,560],[640,490],[662,400]],30)],a:[590,630],x:"Placed from the right row of item inserts. The ramp itself is partly hidden. Estimated."},
 upper_loop:{n:"Upper loop",c:0,s:[B([[185,525],[262,440],[335,300],[345,215]],16)],a:[250,450],x:"The path is my guess. A review confirms a repeatable loop from the inverted flipper, not where it runs."},
 mutant:{n:"Mutant flipper",c:1,s:[B([[130,515],[178,545]],20)],a:[155,530]},
 quantum:{n:"Quantum lane",c:0,s:[E(172,465,38,24)],a:[172,465],x:"The rocket insert. The rulesheet puts this shot behind the mutant flipper."},
 deathclaw:{n:"Deathclaw",c:1,s:[E(560,540,88,72)],a:[560,520]},
 fire:{n:"FIRE insert",c:1,s:[C(520,600,22)],a:[520,600]},
 scoop:{n:"Scoop",c:0,s:[C(465,478,26)],a:[465,478],x:"Placed from the Sundries and Loot inserts that point at it. Estimated."},
 sundries:{n:"Sundries and Loot inserts",c:1,s:[C(475,526,18),C(470,558,18)],a:[470,540]},
 spinner:{n:"Nuka Cola spinner",c:0,s:[C(385,470,30)],a:[385,470],x:"Placed from the Cap Stash insert below it. I could not see the spinner in the photo."},
 cap_ins:{n:"Cap Stash insert",c:1,s:[C(385,555,22)],a:[385,555]},
 radio:{n:"Radio tower target",c:0,s:[C(418,490,18)],a:[418,490],x:"The labeled insert is clear. The target sits somewhere behind it."},
 nukes:{n:"Right nuke standups",c:1,s:[R(562,655,70,145)],a:[590,725]},
 junk:{n:"Junk target",c:0,s:[C(295,1135,24)],a:[295,1135],x:"The labeled insert is clear. The target is where it points, up and to the left."},
 mystery:{n:"? target",c:1,s:[C(243,702,16)],a:[243,702]},
 extra:{n:"Extra ball target",c:1,s:[C(237,672,16)],a:[237,672]},
 bumper:{n:"Fusion core bumper",c:1,s:[C(160,985,56)],a:[160,985]},
 core:{n:"Fusion core meter",c:1,s:[R(282,955,38,105)],a:[300,1000]},
 roaches:{n:"Radroach targets",c:0,s:[C(222,640,18),C(405,295,18),C(415,358,18),C(572,880,18)],a:[222,640],x:"Located by the four Radroach inserts. The targets sit just behind them."},
 radaway_jp:{n:"Radaway Jackpot insert",c:1,s:[C(460,350,24)],a:[460,350]},
 notes:{n:"Music note inserts",c:1,s:[C(220,947,14),C(252,950,14),C(282,1090,14),C(265,420,14),C(312,350,14),C(372,365,14),C(610,557,14),C(583,917,14)],a:[265,420]},
 vault_ins:{n:"Vault Letter inserts",c:1,s:[C(312,310,20),C(207,430,20),C(228,885,20)],a:[207,430]},
 items:{n:"Wasteland item inserts",c:1,s:[R(252,435,40,82),R(298,368,40,75),R(568,575,52,80)],a:[272,475],x:"Rows of blue, yellow and white, in front of the left, U-turn and right shots."},
 quests_l:{n:"Quest inserts",c:1,s:[C(292,670,22),C(285,715,22),C(275,752,22),C(523,670,22),C(531,715,22),C(540,750,22)],a:[292,670]},
 q_wed:{n:"Wedding Day",c:1,s:[C(292,670,22)],a:[292,670]},
 q_rad:{n:"Radscorpion Attack",c:1,s:[C(285,715,22)],a:[285,715]},
 q_kings:{n:"The Kings",c:1,s:[C(275,752,22)],a:[275,752]},
 q_mind:{n:"Mind Control",c:1,s:[C(523,670,22)],a:[523,670]},
 q_novac:{n:"NOVAC",c:1,s:[C(531,715,22)],a:[531,715]},
 q_target:{n:"Find the Target",c:1,s:[C(540,750,22)],a:[540,750]},
 w_you:{n:"What Makes YOU Special",c:1,s:[C(358,622,24)],a:[358,622]},
 w_cold:{n:"Cold Fusion",c:1,s:[C(405,612,28)],a:[405,612]},
 w_obs:{n:"Observatory",c:1,s:[C(456,622,24)],a:[456,622]},
 side:{n:"Side quest inserts",c:1,s:[C(360,987,22),C(405,990,22),C(458,985,22)],a:[405,990]},
 companions:{n:"Trusty Companion inserts",c:1,s:[C(373,1150,16),C(340,1195,16),C(405,1195,16),C(373,1245,16)],a:[373,1195]},
 nuka_ins:{n:"Nuka Cola inlane inserts",c:1,s:[C(262,1012,22),C(570,975,22)],a:[262,1012]},
 inlanes:{n:"Inlanes",c:0,s:[C(185,1200,16),C(550,1200,16)],a:[185,1200],x:"Located by the Double XP labels. Estimated."},
 stimpak:{n:"Left outlane",c:0,s:[C(105,1195,16)],a:[105,1195],x:"The Stimpak insert. I could not locate the right outlane insert, so only the left is marked."},
 flippers:{n:"Flippers",c:1,s:[B([[250,1255],[330,1300]],20),B([[495,1255],[418,1300]],20)],a:[290,1278]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The Pip-Boy ramps",h:[["lower_pip",1],["upper_pip",2],"pipboy"],b:'<p>Two ramps feed the Pip-Boy. Most rules call them the pipboy ramps, and either one works unless a step says otherwise.</p><p>They load the Fat Man, cash in a level-up for a SPECIAL perk, and light the ? target. The upper one also starts Radaway Hurry-Up and holds the Wasteland Multiball super jackpot.</p>'},
 {t:"Left orbit and U-turn",h:[["left_orbit",1],["uturn",2]],b:'<p>The left orbit collects food for HP, and repeat shots add more each time. It and the U-turn are two of the three shots with wasteland item inserts.</p>'+UNK("These two paths are my reading of the inserts. Confirm them on the machine.")},
 {t:"Center jump ramp",h:[["jump_ramp",1],["back_panel",0,"alt"]],b:'<p>The center shot. It lights for Open Vault once you spell VAULT, starts Find the Lunchbox! on the next shot, and scores the Vault Multiball super jackpot.</p>'},
 {t:"Right ramp",h:["right_ramp"],b:'<p>Collects food for your first two quests, carries the third row of item inserts, and is your escape route after a failed steal at Sundries.</p>'},
 {t:"Mutant flipper and upper loop",h:[["mutant",1],["upper_loop",2],["quantum",3,"alt"]],b:'<p>The inverted flipper at upper left. Shoot the outer loop from it to advance wasteland locations, which is the main way to light Nuka-Cola Quantum at the shot behind this flipper. Quantum doubles XP for a short time.</p>'},
 {t:"Deathclaw",h:["deathclaw","fire"],b:'<p>The bash toy. Each hit cripples a limb, and the four rotating inserts below it show which one. When all four and FIRE flash, the next hit starts multiball.</p>'},
 {t:"Scoop",h:["scoop","sundries"],b:'<p>Starts quests and side quests, opens Sundries, loots corpses, upgrades your weapon and opens lunchboxes.</p>'},
 {t:"Nuka Cola spinner and radio tower",h:[["spinner",1],["cap_ins",0,"alt"],["radio",2]],b:'<p>The spinner drops for Cap Stash, the skill shot and Mind Control. Rip it from the right flipper. The radio tower target beside it builds your radio signal.</p>'},
 {t:"Right nuke standups",h:["nukes"],b:'<p>A 3-bank on the right. Hit them to collect mini nukes for the Fat Man. On the Pro, the Fat Man is fired from the flippers at these same targets.</p>'},
 {t:"Small targets on the left",h:[["extra",1],["mystery",2],["junk",3]],b:'<p>The extra ball target sits beside the lower pipboy ramp, with the ? (hacking) target below it. The junk insert is lower down, and the rulesheet describes the junk target as a left standup.</p>'},
 {t:"Radroach targets",h:["roaches"],b:'<p>Four standups spread across the playfield. One always flashes. Hit it, but avoid ones already solid, because those give you RAD.</p>'},
 {t:"Fusion core bumper",h:["bumper","core"],b:'<p>Charges the Power Armor, shown on the meter at center. It also moves a lit stimpak between the outlanes.</p>'},
 {t:"Lanes and inserts",h:["nuka_ins","inlanes",["stimpak",0,"alt"],"flippers"],b:'<p>Light both Nuka Cola inlanes to qualify Cap Stash, then roll through the flashing one. Rolling the right inlane and then hitting junk awards 2 pieces. Stimpaks save a ball at a lit outlane.</p>'}
]},
{g:"Layout and basics",id:"start",title:"Character and skill shot",steps:[
 {t:"Pick a character",h:[],b:'<p>Choose with the flipper buttons before launching your first ball.</p><table><tr><th>Character</th><th>Perk</th><th>Stats</th></tr><tr><td>Lucy</td><td>Easier letters and longer timers for vaults</td><td>+1 Perception, +1 Luck</td></tr><tr><td>Maximus</td><td>+2 seconds per fusion core level</td><td>+1 Strength, +1 Agility</td></tr><tr><td>The Ghoul</td><td>Radroaches build HP</td><td>+1 Endurance, +1 Charisma</td></tr></table>'},
 {t:"Skill shot",h:[["spinner",1],"flippers"],b:'<p>Time your plunge to the flashing Nuka Cola insert on the right inline. The spinner lowers for a few seconds, so rip it right away from the right flipper.</p><p>Base award is 3M plus 75k per spin, with 3 seconds of ball save. Each later cap stash skill shot adds 1M to the base and 50k per spin.</p>'}
]},
{g:"Layout and basics",id:"plan",title:"Game plan overview",steps:[
 {t:"Build HP, start a quest",h:[["left_orbit",1],["right_ramp",0,"alt"],["scoop",2]],b:'<p>Shoot food until you have 50 HP, then take the scoop. Completing quests earns legendary weapons.</p>'},
 {t:"Keep three things moving",h:[["deathclaw",1],["nukes",2],["vault_ins",3]],b:'<p>The Deathclaw, the nuke standups and the VAULT letters lead to the three multiball families.</p>'},
 {t:"Level up",h:["lower_pip","upper_pip"],b:'<p>Earn XP, then shoot either pipboy ramp outside a mode to pick a SPECIAL perk. The Pip-Boy screen describes it.</p>'},
 {t:"Multiply scoring",h:["bumper","junk","scoop"],b:'<p>Fusion cores power a 2x Power Armor. Junk upgrades your weapon at the scoop for a permanent playfield multiplier.</p>'}
]},
/* ====== QUESTS ====== */
{g:"Quests",id:"quests",title:"How quests work",steps:[
 {t:"HP is your timer",h:[["left_orbit",1],["right_ramp",0,"alt"]],b:'<p>Quest time is based on HP: 1 HP is 1 second, up to 100. You need at least 50 HP to start one.</p><p>The left orbit adds food, with more for each repeat shot. The right ramp also adds food, for the first 2 quests only.</p>'},
 {t:"Choose and start",h:[["quests_l",1],["junk",2],["scoop",3]],b:'<p>The blinking yellow insert is the quest you will start. The junk target rotates to the next one, and so do the flippers with level 2 Charisma. Shoot the scoop to start.</p>'},
 {t:"The reward",h:["quests_l"],b:'<p>Each completed quest awards a legendary weapon. In the 2-ball quests, that means scoring a super jackpot. Otherwise it is the final shot of the mode. Playing 3 quests also lights extra ball.</p>'}
]},
{g:"Quests",id:"wedding",title:"Wedding Day",steps:[
 {t:"Blue, then yellow",h:["q_wed",["items",0,"alt"]],b:'<p>A 2-ball multiball. Four shots are blue and four are yellow. A blue shot lights a yellow one, and yellow shots build toward the super jackpot.</p>'+UNK("The rulesheet marks the Pro rules for this quest as needing more information.")},
 {t:"Add-a-ball",h:["deathclaw"],b:'<p>Hit the Deathclaw 5 times during the multiball for add-a-ball.</p>'}
]},
{g:"Quests",id:"radscorpion",title:"Radscorpion Attack",steps:[
 {t:"Build up the jump ramp",h:["q_rad",["jump_ramp",1]],b:'<p>Lit shots light the center jump ramp for 2x the value. Base shot value is 500k plus 250k per shot. Extra lit shots raise the multiplier for the next jump ramp shot only.</p>'},
 {t:"Final blow",h:["nukes"],b:'<p>After 4 center jump ramp shots, hit the flashing right standup to finish.</p>'}
]},
{g:"Quests",id:"kings",title:"The Kings",steps:[
 {t:"Jackpots and killing sprees",h:["q_kings"],b:'<p>A 2-ball multiball. Lit shots score jackpots, base 500k plus 50k per shot. Combos start a killing spree, add +1x and award a multiplied jackpot.</p>'},
 {t:"Super jackpot",h:["nukes","deathclaw"],b:'<p>Reach 8x or start 3 sprees to light the super jackpot at the flashing right standup, which moves top to bottom and back. Hit the Deathclaw 5 times for add-a-ball.</p>'}
]},
{g:"Quests",id:"mind",title:"Mind Control",steps:[
 {t:"Ramps lower the spinner",h:["q_mind",["spinner",1]],b:'<p>Lit ramp shots lower the spinner for a set time. While it is down, more lit ramp shots raise the multiplier on the next rip.</p>'},
 {t:"Three tests",h:["spinner"],b:'<p>Enough spins start the next test. Each has its own spin count and base value. Complete all three to finish.</p>'}
]},
{g:"Quests",id:"novac",title:"NOVAC",steps:[
 {t:"Left orbit and right ramp",h:["q_novac",["left_orbit",1],["right_ramp",2],["upper_loop",0,"alt"]],b:'<p>Base score is 2M plus 250k per shot. The upper loop raises the multiplier for the next ramp shot, and each successive left orbit raises it too.</p>'},
 {t:"Final shot",h:["pipboy","back_panel"],b:'<p>After 6 or more shots, the final shot lights at the pipboy. It scores 2x the current back panel shot value, and ramp shots raise that while it is lit.</p>'+UNK("The rulesheet does not explain the back panel value further.")}
]},
{g:"Quests",id:"target",title:"Find the Target",steps:[
 {t:"Find the target",h:["q_target",["items",0,"alt"],"scoop"],b:'<p>Hit 4 yellow shots. You cannot repeat one. Then hit the scoop.</p>'},
 {t:"Finish it",h:[["right_ramp",1],["lower_pip",2],["upper_pip",2],["nukes",3]],b:'<p>Shoot the right ramp, load the Fat Man with either pipboy ramp, then hit the random flashing right standup from the flippers.</p>'}
]},
/* ====== VAULT ====== */
{g:"Vault",id:"lunchbox",title:"Find the Lunchbox!",steps:[
 {t:"Spell VAULT",h:[["vault_ins",1],["jump_ramp",2]],b:'<p>Shoot lit VAULT letter shots until Open Vault lights at the center ramp, then shoot it again to start.</p>'},
 {t:"Find it",h:["scoop"],b:'<p>You have 15 seconds, longer as Lucy. Hit any lit blue shot, then the scoop to open the lunchbox. In later rounds, the shot you hit is removed.</p>'},
 {t:"What is inside",h:[],b:'<p>Odd-numbered lunchboxes start Vault Multiball. Even-numbered lunchboxes give a legendary weapon.</p>'}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"deathclaw",title:"Deathclaw Multiballs",steps:[
 {t:"Starting it",h:["deathclaw","fire"],b:'<p>Hit the toy to cripple limbs. When all four inserts and FIRE flash, the next hit starts multiball. The three multiballs play in the same order every game. Upgrade your weapon to enable the next one.</p>'},
 {t:"Multiball 1",h:[["deathclaw",2]],b:'<p>For 20 seconds, red shots build the jackpot from 2M by 250k per shot. Then you have 12 seconds to hit the Deathclaw for stacking jackpots. After enough, the next shot is a super jackpot worth their total.</p>'},
 {t:"Multiball 2",h:["deathclaw"],b:'<p>Red shots and switches charge your weapon, 20% per shot. Fully charged, the Deathclaw scores a jackpot and you recharge. Five jackpots qualify a super jackpot worth their total.</p>'},
 {t:"Multiball 3 and add-a-ball",h:["roaches"],b:'<p>Multiball 3 is not documented yet. In any of them, completing all 4 radroach targets adds a ball and briefly extends ball save.</p>'}
]},
{g:"Multiballs",id:"wasteland",title:"Wasteland Multiball",steps:[
 {t:"Load the Fat Man",h:[["nukes",1],["lower_pip",2],["upper_pip",2]],b:'<p>Hit the nuke standups to collect a mini nuke, then shoot a lit pipboy ramp. The ball feeds to the left flipper.</p>'},
 {t:"Fire",h:[["flippers",1],["nukes",2]],b:'<p>Shoot the lit standups. Hitting all three starts the multiball.</p><p>VATS can spot one: fill the AP bar with switch hits, select with the flipper buttons, confirm with the action button.</p>'},
 {t:"Jackpots",h:["upper_pip","nukes"],b:'<p>Jackpots are 3M plus 500k per shot. After 2 jackpots, plus 1 more per super scored, the super lights at the upper pipboy ramp. Then hit the random blinking right standup to score it.</p><p>Base super is 15M plus 2.5M per jackpot, times wave number.</p>'}
]},
{g:"Multiballs",id:"vaultmb",title:"Vault Multiball",steps:[
 {t:"Moving jackpot",h:["vault_ins",["left_orbit",1],["right_ramp",2]],b:'<p>A 3-ball multiball. Blue shots score awards. The fastest blinking one is the jackpot, worth 2M plus prior award values plus 500k per jackpot. It moves left to right with each shot.</p>'},
 {t:"Double and super",h:[["upper_loop",1],["jump_ramp",2]],b:'<p>After the jackpot at the right ramp, shoot the upper loop for a double jackpot. That lights the center jump ramp for a super jackpot worth all prior jackpots.</p>'}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"special",title:"S.P.E.C.I.A.L.",steps:[
 {t:"Earning perks",h:["lower_pip","upper_pip"],b:'<p>Earn XP from quests, looting and killing enemies, and wasteland locations. Once leveled up, shoot a pipboy ramp outside a mode. Each stat goes to level 2.</p>'},
 {t:"S, P, E, C",h:[],b:'<table><tr><th>Stat</th><th>Level 1</th><th>Level 2</th></tr><tr><td>Strength</td><td>More loot, easier junk</td><td>Carry 2 stimpaks</td></tr><tr><td>Perception</td><td>Not documented</td><td>Right flipper moves stimpak</td></tr><tr><td>Endurance</td><td>Longer ball save</td><td>Next flashing lane scores all 3 lit items</td></tr><tr><td>Charisma</td><td>Sundries 20% off, more junk XP</td><td>Flippers select quest</td></tr></table>'},
 {t:"I, A, L",h:[],b:'<table><tr><th>Stat</th><th>Level 1</th><th>Level 2</th></tr><tr><td>Intelligence</td><td>Easier Fat Man, -1 shot for radio jackpots</td><td>Not documented</td></tr><tr><td>Agility</td><td>Not documented</td><td>Easier VATS and weapon upgrades</td></tr><tr><td>Luck</td><td>More caps, better steal odds and junk</td><td>More spinner caps, better junk</td></tr></table>'}
]},
{g:"Other scoring",id:"radio",title:"Radio modes",steps:[
 {t:"Build the signal",h:["radio"],b:'<p>Hit the radio tower target until the signal is full. Each radio mode started needs one more hit next time.</p>'},
 {t:"Pick a song",h:["notes"],b:'<p>Music note inserts light in colors, and each shot starts a song. The song length is the timer, and cradling the ball does not pause it.</p><table><tr><th>Song</th><th>Start at</th><th>Color</th><th>Time</th><th>Shots</th></tr><tr><td>In the Mood</td><td>Fusion core bumper</td><td>Purple</td><td>2:05</td><td>7</td></tr><tr><td>Anything Goes</td><td>Lower pipboy ramp</td><td>White</td><td>3:07</td><td>7</td></tr><tr><td>Yellow Rose of Texas</td><td>Junk target</td><td>Blue</td><td>3:00</td><td>5</td></tr><tr><td>Uranium Fever</td><td>Left orbit</td><td>Yellow</td><td>2:17</td><td>6</td></tr><tr><td>Some Enchanted Evening</td><td>Upper loop</td><td>Cyan</td><td>2:32</td><td>7</td></tr><tr><td>Big Iron</td><td>Right ramp</td><td>Orange</td><td>3:55</td><td>7</td></tr></table>'},
 {t:"Radio jackpots",h:["notes"],b:'<p>Keep hitting music notes. "Shots" in the table is how many enable radio jackpots, and the multiplier rises with each one earned.</p>'}
]},
{g:"Other scoring",id:"items",title:"Wasteland items",steps:[
 {t:"Three rows",h:["items",["left_orbit",1],["uturn",2],["right_ramp",3]],b:'<p>Shots at the left ramp, U-turn and right ramp fill inserts in order: white, yellow, blue. After the first side quest, you must make them left to right.</p>'},
 {t:"White: stimpak",h:["stimpak","bumper"],b:'<p>Lights the right outlane for a ball save. The bumper and right slingshot move it. Strength 2 lets you carry two, and Perception 2 moves it with the flippers.</p>'},
 {t:"Yellow: companion",h:["companions"],b:'<p>While the third yellow insert flashes, the right flipper rotates clockwise and the left counterclockwise. The action button uses the active ability, and leveling up refreshes it.</p><table><tr><th>Companion</th><th>Active</th><th>Passive</th></tr><tr><td>Victor</td><td>Drops the spinner for Cap Stash</td><td>Great Deals</td></tr><tr><td>Protectron</td><td>Spots lit Radaway</td><td>Max quest timers</td></tr><tr><td>Dogmeat</td><td>Collects lit junk, 3 charges</td><td>More radroaches lit</td></tr><tr><td>Mr. Handy</td><td>Spots a Deathclaw shot, not the start</td><td>Easier fusion core</td></tr></table>'},
 {t:"Blue: side quest",h:["side","scoop"],b:'<p>Fill all three blue inserts with HP above 50, then shoot the scoop. Side quests override everything but radio modes. Each phase lights the scoop to cash out or continue with added time.</p><p>Cashout bonuses add junk, then a legendary weapon, then two awards the rulesheet leaves unknown.</p><p><b>Gulper:</b> 4 phases. Clear 6 shots, then either pipboy ramp. The first shot of a phase becomes a multiplier shot and is removed in later phases.</p><p>Filly and Super Duper Mart are not documented yet.</p>'}
]},
{g:"Other scoring",id:"rads",title:"Radroaches and Radaway",steps:[
 {t:"Radroaches",h:["roaches"],b:'<p>Hit the flashing target to kill a radroach. Hitting a solid one gives RAD, which lowers maximum HP. Shooting 4, then 25 lit targets lights extra ball.</p><p>Killing all four spawns a Glowing Radroach, worth 20M plus 10M per glowing radroach with the Fat Man, or half from the flippers.</p>'},
 {t:"Radaway",h:["upper_pip","jump_ramp","right_ramp"],b:'<p>RAD lights a green shot at the ramps. Hitting it scores a hurry-up and removes RAD. Three of them qualify Radaway Hurry-Up at the upper pipboy ramp.</p>'},
 {t:"Radaway Jackpot",h:[["upper_pip",1],["jump_ramp",2],["right_ramp",3],["upper_loop",4],["radaway_jp",0,"alt"]],b:'<p>Make all 3 ramps, then shoot the upper loop from the mutant flipper. The jackpot is the total of the 3 hurry-ups. The 10-second timer starts at the first collect, and every repeat scores it again.</p>'}
]},
{g:"Other scoring",id:"multipliers",title:"Power Armor and weapons",steps:[
 {t:"Power Armor",h:["bumper","core"],b:'<p>Charge the core with bumper hits or Sundries. At 50% or more, hold the action button for two seconds for 2x scoring, additive with your weapon. Hold it again to toggle off while time remains.</p>'},
 {t:"Weapon upgrades",h:["junk","scoop"],b:'<p>Each upgrade adds +0.2x playfield, +1x bonus and enables the next Deathclaw Multiball. Shoot the scoop once you have the junk.</p><table><tr><th>Level</th><th>Junk needed</th></tr><tr><td>2</td><td>Any 5</td></tr><tr><td>3</td><td>8 common, 3 rare</td></tr><tr><td>4</td><td>13 common, 5 rare</td></tr></table><p class="fine">Higher levels are not documented yet.</p>'}
]},
{g:"Other scoring",id:"loot",title:"Loot, junk and hacking",steps:[
 {t:"Loot",h:["scoop"],b:'<p>After killing a radroach or shooting gallery enemy, shoot the scoop for 2 to 3 random rewards: caps, Nuka Cola, Jet, junk or a legendary weapon.</p>'},
 {t:"Junk",h:["junk","inlanes"],b:'<p>The junk target lights after 10 slingshot or bumper hits and gives common or rare junk. Roll the right inlane first for 2 pieces.</p>'},
 {t:"Hacking",h:[["lower_pip",1],["upper_pip",1],["mystery",2]],b:'<p>A pipboy ramp lights the ? target. Without mentats, there is about a 50% chance of nothing. Known awards are 10M, +25 XP, light Fat Man, and common or rare junk.</p>'}
]},
{g:"Other scoring",id:"caps",title:"Caps and Sundries",steps:[
 {t:"Cap Stash",h:["nuka_ins",["spinner",1]],b:'<p>Light both Nuka Cola inlanes, roll the flashing one to drop the spinner, then rip it for caps and points.</p>'},
 {t:"Shopping",h:["scoop","sundries"],b:'<p>The scoop opens the shop when qualified, with up to 4 items per visit. Useful prices:</p><table><tr><th>Item</th><th>Effect</th><th>Caps</th></tr><tr><td>New Fusion Core</td><td>Max Power Armor</td><td>250</td></tr><tr><td>Sugar Bombs</td><td>Max HP</td><td>80</td></tr><tr><td>Mentats</td><td>Advanced hacking</td><td>80</td></tr><tr><td>Rad X</td><td>Longer timer</td><td>80</td></tr><tr><td>Radaway</td><td>Resets rads</td><td>80</td></tr><tr><td>Stimpak</td><td>Outlane save</td><td>80</td></tr><tr><td>Buffout</td><td>Extend multiball</td><td>150</td></tr><tr><td>Psycho</td><td>Add tilt warning</td><td>120</td></tr></table><p class="fine">Legendary junk buys a Gold Pinball (extra ball), bobbleheads (perks), Holotape or Nuka Quantum.</p>'},
 {t:"Stealing",h:["right_ramp"],b:'<p>A failed steal gives you 10 seconds to shoot the right ramp. Miss it and you lose all caps and the item. Make it and you keep the item, but the next visit costs double.</p>'}
]},
{g:"Other scoring",id:"weapons",title:"Legendary weapons",steps:[
 {t:"Eleven perks",h:[],b:'<p>Earned from quests, side quests and lunchboxes, and lasting all game. In standard play the first 4 are weak and later ones are drawn from the rest. In competition the order is fixed. After 11, you get points instead.</p><p>Perks double: wasteland loop value, Quantum timer, loop progress, Radaway, quest scoring, companion uses, Deathclaw Multiball, action points, radio jackpots, Vault Multiball and Wasteland Multiball.</p>'}
]},
{g:"Other scoring",id:"bonus",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["extra"],b:'<p>Lit by playing 3 quests, shooting 4 then 25 lit radroach targets, or buying a Gold Pinball. Collect at the target beside the lower pipboy ramp. In competition, it is worth 15M instead.</p>'},
 {t:"End-of-ball bonus",h:[],b:'<table><tr><th>Base</th><th>Value</th></tr><tr><td>Character level</td><td>1M each</td></tr><tr><td>Caps</td><td>5K each</td></tr><tr><td>Common junk</td><td>100K each</td></tr><tr><td>Rare junk</td><td>250K each</td></tr><tr><td>Legendary junk</td><td>1M each</td></tr></table><p>Multiplied by +1x per weapon level and +1x per remaining tilt warning, up to +2x.</p>'}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"wizard",title:"Wizard modes",steps:[
 {t:"Not documented yet",h:["w_you","w_cold","w_obs"],b:'<p>The inserts show What Makes YOU Special and Observatory (mini-wizard modes) and Cold Fusion (wizard mode). The rulesheet lists all three as TBD at code 0.81, so I have no rules to give you.</p>'}
]}
];


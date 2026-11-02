/* ---------- playfield features (coordinates in the 640x1092 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 center_ramp:{n:"Center ramp",c:1,s:[B([[356,385],[356,345],[356,172]],32)],a:[356,260],x:"The metal ramp with the Battle insert at its base."},
 bullseye:{n:"Bullseye target",c:1,s:[C(373,97,32)],a:[373,97],x:"The round target at the top center, past the center ramp."},
 captive:{n:"Captive ball",c:1,s:[C(298,342,24)],a:[298,342],x:"The steel ball under the sign that names it on the Pro. On the Premium and LE it sits lower.",v:{premium:{s:[C(298,364,24)],a:[298,364]}}},
 drops:{n:"Drop targets",c:0,s:[R(396,414,24,78)],a:[408,452],x:"The dark bank beside the award inserts the rulesheet describes. Individual targets are hard to see."},
 drop_awards:{n:"Drop target award inserts",c:1,s:[R(344,434,50,76)],a:[368,472]},
 left_ramp:{n:"Left ramp",c:0,s:[B([[256,390],[248,310],[238,240],[215,178]],26)],a:[256,384],x:"My best reading, from the arrow left of the captive ball and the ramp entrance above it. Not certain."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[435,558],[452,510],[500,400],[540,285],[545,195],[495,145]],30)],a:[435,552],x:"Placed from the arrow beside the Power Ramps insert, then along the metal ramp."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[154,513],[125,440],[95,320],[76,205],[110,115],[200,100]],22)],a:[154,507],x:"Placed from the arrow between the two domes. The path behind the metal is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[512,526],[545,450],[565,350],[575,235],[560,150]],22)],a:[512,520],x:"Placed from the arrow beside the Power Orbits insert. The path is a guess."},
 big_loop:{n:"Big loop",c:0,s:[B([[218,425],[182,400],[168,340],[178,285],[150,205],[188,150],[238,190]],20)],a:[182,400],x:"Placed along the loop value inserts. Where it runs past them is a guess."},
 mini_loop:{n:"Mini loop",c:0,s:[B([[222,420],[205,365],[205,305],[230,262]],18)],a:[205,340],x:"The rulesheet does not say where it runs. Placed inside the big loop, as a guess."},
 loop_ins:{n:"Loop value inserts",c:1,s:[C(178,302,17),C(168,340,17),C(168,375,17),C(180,410,17)],a:[168,358]},
 upper_left:{n:"Upper left flipper",c:1,s:[B([[224,404],[243,452]],18)],a:[234,428]},
 upper_right:{n:"Upper right flipper",c:1,s:[B([[534,584],[502,644]],18)],a:[518,614]},
 flippers:{n:"Lower flippers",c:1,s:[B([[198,998],[269,1036]],20),B([[400,998],[330,1036]],20)],a:[234,1017]},
 left_spinner:{n:"Left (REVIVE) spinner",c:0,s:[B([[136,712],[112,665],[92,625]],22)],a:[136,706],x:"Placed from the arrow near the Advance Revive insert. I could not see the spinner itself."},
 second_spinner:{n:"Second spinner",c:0,s:[B([[259,500],[243,478]],22)],a:[259,496],x:"The rulesheet says there are two but does not place this one. Marked at the arrow beside the Power Spinners insert, as a guess."},
 pops:{n:"Pop bumper domes",c:0,s:[E(214,513,42,42),E(102,497,42,42)],a:[214,513],x:"I read the gold domes as the pop bumpers. The rulesheet does not place them or say how many."},
 orb:{n:"Orb",c:0,s:[C(152,640,24)],a:[152,640],x:"Placed at the Clairvoyant art, which the apron card links to the Orb. The exact target spot is a guess."},
 super_target:{n:"Super Jackpot target",c:0,s:[C(424,340,20)],a:[424,340],x:"Placed beside the insert reading SUPER. The target itself is hidden in the photo."},
 x_targets:{n:"X targets",c:0,s:[C(99,580,15),C(268,578,15),C(418,373,15),C(456,307,15)],a:[268,578],x:"Marked at the printed X inserts, which I take to sit beside the targets. There may be others."},
 eb_target:{n:"Extra Ball target",c:0,s:[C(268,578,16),R(240,568,20,50)],a:[250,593],x:"Placed at the Extra Ball insert and the X beside it."},
 pfx_lanes:{n:"Return lanes",c:0,s:[C(118,812,18),C(477,809,18)],a:[118,812],x:"The lit lanes that activate Playfield X, placed from the red inserts."},
 inlane_l:{n:"Left inlane",c:0,s:[C(118,812,18)],a:[118,812],x:"Placed from the red insert."},
 outlanes:{n:"Outlanes",c:0,s:[C(80,850,18),C(518,850,18)],a:[80,850],x:"Placed from the REVIVE inserts."},
 revive_ins:{n:"Advance Revive insert",c:1,s:[C(165,772,18)],a:[165,772]},
 plunger:{n:"Plunger lane",c:0,s:[B([[590,1020],[590,760]],18)],a:[590,900],x:"The skill targets themselves are not visible in the photo."},
 underworld:{n:"Underworld Scoop",c:0,s:[C(356,352,20)],a:[356,352],x:"The rulesheet only says it is under the center ramp. The spot is a guess.",v:{pro:{s:[]}}},
 mummy_ins:{n:"MUMMY inserts",c:1,s:[R(298,410,26,92)],a:[311,456]},
 battle_ins:{n:"Battle insert",c:1,s:[C(332,374,20)],a:[332,374]},
 lock_ins:{n:"Lock inserts",c:1,s:[R(376,708,28,46),R(408,690,28,46)],a:[406,722]},
 pfx_ins:{n:"2X and 3X inserts",c:1,s:[R(222,690,28,46),R(254,712,28,46)],a:[252,724]},
 beast_ins:{n:"Number of the Beast insert",c:1,s:[C(330,660,30)],a:[330,660]},
 cards_ins:{n:"Eddie card inserts",c:1,s:[R(262,600,138,44)],a:[330,622]},
 power_ins:{n:"Power Feature inserts",c:1,s:[R(292,730,76,34),R(268,766,124,36)],a:[330,766]},
 two_mtm:{n:"2 Minutes to Midnight insert",c:1,s:[C(314,826,20)],a:[314,826]},
 aces:{n:"Aces High insert",c:1,s:[C(286,860,20)],a:[286,860]},
 fear:{n:"Fear of the Dark insert",c:1,s:[C(314,893,20)],a:[314,893]},
 rime:{n:"Rime of the Ancient Mariner insert",c:1,s:[C(286,927,20)],a:[286,927]},
 hallowed:{n:"Hallowed Be Thy Name insert",c:1,s:[C(314,962,20)],a:[314,962]},
 icarus:{n:"Flight of Icarus insert",c:1,s:[C(286,998,20)],a:[286,998]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var ALL=["left_orbit","left_ramp","center_ramp","right_ramp","right_orbit"];
var COMBO=["left_ramp","big_loop","left_orbit","mini_loop","right_ramp","right_orbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Center ramp and bullseye",h:["center_ramp","bullseye",["battle_ins",0,"alt"]],b:'<p>The Pharaoh center ramp starts Eddie Battles when Battle is lit. The bullseye collects Soul Shards, and many awards multiply by where on the target you hit it.</p>'},
 {t:"Captive ball",h:["captive",["mummy_ins",0,"alt"]],b:'<p>The Sarcophagus. It lights the Mummy lock, spells MUMMY and starts Mummy Multiball.</p>'},
 {t:"Drop targets",h:["drops",["drop_awards",0,"alt"]],b:'<p>Three targets. Completing them collects the flashing award to their left: Bonus X, Light Orb or Light Locks.</p>'},
 {t:"Ramps",h:["left_ramp","right_ramp"],b:'<p>The left and right ramps both count toward combos, Power Ramps and Flight of Icarus. The Premium and LE also use the left ramp for the Mummy lock and the Tomb.</p>'},
 {t:"Orbits",h:["left_orbit","right_orbit"],b:'<p>Both count toward combos and Power Orbits. Trooper locks are lit here with green arrows.</p>'},
 {t:"Upper loops",h:["big_loop","mini_loop",["upper_left",0,"alt"],["loop_ins",0,"alt"]],b:'<p>The big loop and mini loop build the Loop Jackpot. The inserts along the loop show the current value.</p>'},
 {t:"Spinners",h:["left_spinner","second_spinner"],b:'<p>The left spinner spells REVIVE and changes the flashing Eddie Battle. The rulesheet warns that it is a risky shot.</p>'},
 {t:"Orb",h:["orb"],b:'<p>Collects Mystery once lit, and the Power Jackpot once any Power Feature is complete.</p>'},
 {t:"Super Jackpot target",h:["super_target"],b:'<p>The Super Skill Shot target, and where the 2 Minutes to Midnight Super Jackpot is collected.</p>'},
 {t:"X targets",h:["x_targets",["pfx_ins",0,"alt"]],b:'<p>Flashing X targets qualify Playfield X, which you then activate at a lit return lane.</p>'},
 {t:"Modes of play",h:[],b:'<p>Hold both flipper buttons in attract mode for a menu.</p><ul><li><b>Standard:</b> the rules in this guide.</li><li><b>Competition:</b> the same, with randomness removed.</li><li><b>DJ Mixer:</b> a jukebox, not a game mode.</li></ul><p>You can also pick a song at the start of each ball. It only changes the music.</p>'}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill Shot",h:["plunger"],b:'<p>Soft plunge into the skill shot target for 1M, one EDDIE letter and 5 more seconds of ball saver.</p>'+UNK("I could not locate this target in the photos.")},
 {t:"Super Skill Shot",h:[["plunger",1],["upper_left",2],["super_target",3]],b:'<p>Hold the left flipper and plunge to the inner orbit. The ball rolls back to the upper flipper. Shoot the Super Jackpot target for 5M, a lit Playfield X and 10 more seconds of ball saver.</p>'},
 {t:"Secret Skill Shots",h:[],b:'<p>The rulesheet says there are at least three, and gives no details.</p>'}
]},
/* ====== MODES ====== */
{g:"Eddie Battles",id:"battles",title:"How battles work",steps:[
 {t:"Qualifying",h:ALL.concat([["center_ramp",0,"alt"]]),b:'<p>Shoot white arrows to spell EDDIE. You get two letters free toward the first battle. Later battles offer fewer arrows and no free letters, down to 2 random shots that change when hit.</p>'},
 {t:"Starting",h:["center_ramp",["battle_ins",0,"alt"]],b:'<p>Once EDDIE is spelled, Battle lights at the center ramp. Shoot it to start the flashing battle.</p>'},
 {t:"Choosing",h:["left_spinner"],b:'<p>Until EDDIE is spelled, the left spinner changes the flashing battle. After that it is locked in. Very poor play by ball 3 forces Aces High first.</p>'},
 {t:"Stacking",h:[],b:'<p>Single-ball battles can stack with Trooper or Mummy Multiball if the battle started first. 2-ball battles cannot stack with any multiball.</p>'},
 {t:"Soul Shards",h:["bullseye"],b:'<p>Winning a battle lights the bullseye for 10 seconds. The hurry-up starts at 20% of the battle\'s points, times 2 or 3 by where you hit.</p><p>Shards raise the bonus, light Tomb Treasures, add to 2 Minutes to Midnight and raise the Number of the Beast award.</p>'+UNK("Making the final shot during a grace period scores it, but gives no Soul Shard hurry-up.")}
]},
{g:"Eddie Battles",id:"battle-list",title:"The five battles",steps:[
 {t:"Aces High",h:ALL.concat(["bullseye",["aces",0,"alt"]]),b:'<p><b>2-ball.</b> Defeat four fighters with blue shots, out of eight major shots. Then for each ramp, shoot the ramp and the bullseye to defeat a bomber. Then shoot the strobing shot and the bullseye within 5 seconds to defeat the ace. That jackpot is multiplied by where you hit the bullseye.</p><p>The first Mystery in the battle adds a ball.</p>'},
 {t:"Fear of the Dark",h:["left_spinner","second_spinner",["right_ramp",0,"alt"],["fear",0,"alt"]],b:'<p>Shoot one of four purple arrows to light both spinners for one rip. Harder arrows give a higher base value. A lit spinner goes dark once it stops. Do this three times to win.</p><ul><li>The REVIVE spinner scores 2x the displayed value.</li><li>The right ramp adds +2x if shot before either spinner.</li><li>Both spinners in one rip scores 4x on the left one, but is very hard.</li></ul>'},
 {t:"Rime of the Ancient Mariner",h:["center_ramp","bullseye",["drops",0,"alt"],["underworld",0,"alt"],["rime",0,"alt"]],b:'<p>Shoot the center shot to lock in a hurry-up counting from 1M, starting 2-ball. Each left-side shot, worth that value +500K, moves them toward the center for 20 seconds. Once centered, shoot the bullseye for a jackpot of the total. Repeat on the right, including the drop targets, to light the shard.</p><p>The first Mystery adds a ball. The rulesheet also lists the scoop under the center ramp as a way to score.</p>'},
 {t:"Hallowed Be Thy Name",h:[["left_orbit",1],["left_ramp",1],["right_ramp",1],["right_orbit",1],["captive",2],["drops",4],["bullseye",6],["hallowed",0,"alt"]],b:'<p>Make these in order, as fast as you can. Any orange arrow is one of the four marked 1, and goes dark once used:</p><ol><li>Orange arrow: 3M</li><li>Captive ball: 5M</li><li>Orange arrow: 3M</li><li>All three drop targets: 10M</li><li>Orange arrow: 3M</li><li>Bullseye: 10M plus 1M per second left, and lights the shard</li></ol>'},
 {t:"Flight of Icarus",h:["left_ramp","right_ramp","bullseye",["icarus",0,"alt"]],b:'<p>Alternate lit ramps for 2M, +150K per ramp shot of any kind. Ramp combos within 5 seconds multiply: 2x, then 3x and so on. Repeating a ramp resets that timer.</p><p>At 20M you can shoot the bullseye to end early and light the shard, or keep playing.</p>'}
]},
{g:"Eddie Battles",id:"midnight",title:"2 Minutes to Midnight",steps:[
 {t:"Starting",h:[["two_mtm",0,"alt"]],b:'<p>The sixth battle, lit after you play the other five. Single ball with a generous ball save. It counts up to midnight at double speed, so it lasts about 60 seconds. Starting it awards the Soldier Eddie card at level 1.</p>'},
 {t:"Shots",h:ALL.concat([["x_targets",0,"alt"]]),b:'<p>5 major shots light, one for each battle, worth 1M plus 15% of that battle\'s points and shard. Each X target adds 5 seconds, once.</p><p>Playfield X only works here if you qualified it beforehand.</p>'},
 {t:"Super Jackpot",h:["super_target"],b:'<p>Collect all lit shots to light it, worth all the shot values. The value resets only when the mode ends. Clearing the shots again while it is lit adds +1x, and scoring it resets that multiplier.</p><p>A 2x Super awards Soldier Eddie at level 2.</p>'},
 {t:"Afterward",h:[],b:'<p>The battles reset and can be played again. The harder EDDIE spelling does not reset.</p>'}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"trooper",title:"Trooper Multiball",steps:[
 {t:"Lighting locks",h:["drops",["drop_awards",0,"alt"]],b:'<p>Complete the drop targets when Light Lock is flashing. The first time takes two completions.</p>'},
 {t:"Locking",h:["left_orbit","right_orbit",["lock_ins",0,"alt"]],b:'<p>Shoot green arrow orbit shots to lock 3 balls virtually. For the first multiball, the left orbit and the right loop are both lit. After that, each award lights one lock on one shot.</p>'+UNK("The rulesheet says \"right loop\" here and does not define it. I marked the right orbit as a stand-in.")},
 {t:"Jackpots",h:ALL.concat(["big_loop","mini_loop"]),b:'<p>3-ball. It is 4-ball if Mummy Multiball was lit and the ball grazed the captive ball on its way to the third lock. All shots start blue for 1x and go dark when collected. Levels carry between Trooper Multiballs.</p><p>Colors step up: blue, green, yellow, orange, red.</p>'},
 {t:"Super Jackpot",h:["super_target"],b:'<p>3 jackpots light it at "the corresponding target". I take that to mean this target. Scoring it relights the collected jackpots at +1x and awards the Trooper card at level 1. Level 2 takes all jackpots at 3x or one 5x jackpot.</p>'},
 {t:"Cannon",h:[["drops",1],["bullseye",2]],b:'<p>Complete the drop targets to light the bullseye for the cannon. It scores 1 to 3 jackpots by where you hit, and adds a ball the first time. You need another Super Jackpot before you can light the next one.</p>'}
]},
{g:"Multiballs",id:"mummy",title:"Mummy Multiball",steps:[
 {t:"Lighting the lock",h:[["captive",1],["center_ramp",2]],ed:"pro",b:'<p>Shoot the captive ball twice, or 5 times for later multiballs, to light the Mummy lock at the <b>center ramp</b>.</p>'},
 {t:"Lighting the lock",h:[["captive",1],["left_ramp",2]],ed:"premium",b:'<p>Shoot the captive ball twice, or 5 times for later multiballs, to light the Mummy lock at the <b>left ramp</b>.</p>'},
 {t:"Spelling MUMMY",h:["captive",["mummy_ins",0,"alt"]],b:'<p>After locking, five more captive ball hits spell MUMMY and qualify the multiball, which starts on the next hit. From the third multiball on, each letter takes two hits.</p>'},
 {t:"Jackpots",h:["captive",["pops",0,"alt"]],b:'<p>Reach 10 switch hits, +10 per jackpot, to qualify a jackpot at the captive ball. Each spots a MUMMY letter. In later rounds values double, but you only score when the matching letter is lit.</p>'},
 {t:"Premium and LE extra",ed:"premium",h:[["left_ramp",1],["captive",2]],b:'<p>Each jackpot also lights the left ramp for double switch hits, plus another jackpot at the captive ball, worth 2x if you reached the switch hit target.</p>'},
 {t:"Super Jackpot",h:["bullseye"],b:'<p>Spell MUMMY to light it at the bullseye, multiplied by where you hit. The first awards the Mummy card at level 1. A second, in any multiball, awards level 2. Letters carry over, but switch progress within a letter does not.</p>'},
 {t:"Add-a-balls",h:["left_ramp","right_ramp",["left_orbit",0,"alt"],["right_orbit",0,"alt"]],b:'<p>Complete all the yellow shots at a level to add a ball, up to 3 per multiball. Progress carries over.</p><ul><li><b>Level 1:</b> both ramps.</li><li><b>Level 2:</b> both ramps and both orbits.</li><li><b>Level 3+:</b> both ramps, both orbits, both loops, center ramp and Super Jackpot target.</li></ul>'}
]},
/* ====== POWER FEATURES ====== */
{g:"Power Features",id:"power",title:"Power Features",steps:[
 {t:"The five features",h:["power_ins"],b:'<p>Power Spinners, Orbits, Ramps, Targets and Bumpers. Hit each one many times to activate it. Its icon on the screen turns from gray to color, and its yellow triangle insert flashes. Keep hitting it to complete it, adding +3M to the Power Jackpot base per feature.</p>'},
 {t:"Power Jackpot",h:["orb"],b:'<p>Once any feature is complete, collect the jackpot at the Orb.</p><table><tr><th>Boost</th><th>Value</th></tr><tr><td>Complete a feature</td><td>+3M</td></tr><tr><td>Tomb Treasure 3</td><td>+15M (if Madness is off)</td></tr><tr><td>Level 1 Eddie card</td><td>+5M</td></tr><tr><td>Level 2 Eddie card</td><td>+15M</td></tr><tr><td>Another feature while lit</td><td>+1x</td></tr><tr><td>Mystery Award</td><td>+1x</td></tr><tr><td>Tomb Treasure 8</td><td>+5x</td></tr></table><p>Playfield X multiplies it further.</p>'},
 {t:"Lighting Cyborg Multiball",h:[["power_ins",0,"alt"],"bullseye","center_ramp"],b:'<p>Complete all five features to qualify it. The rulesheet says bullseye in one section and "bullseye target / center ramp" in another.</p>'}
]},
{g:"Power Features",id:"cyborg",title:"Cyborg Multiball",steps:[
 {t:"Super Jackpot",h:["orb",["power_ins",0,"alt"]],b:'<p>Hit each Power Feature at least once to light its insert. That lights the Super Jackpot at the Orb, starting at 4M and built from the shots collected before it.</p>'},
 {t:"Multiplier",h:["orb"],b:'<p>Each Super adds +1x to later ones, resetting when the multiball ends. The first two Supers add a ball.</p>'},
 {t:"Eddie card",h:[["cards_ins",0,"alt"]],b:'<p>Starting the multiball gives Cyborg Eddie at level 1, and a 5x Super gives level 2. After you complete it, Power Features reset, worth more and harder to complete.</p>'},
 {t:"Playfield X",h:[["x_targets",0,"alt"]],b:'<p>The X targets count toward the Super here, so Playfield X is only active if you bring one in.</p>'}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"pfx",title:"Playfield Multiplier",steps:[
 {t:"Qualifying",h:["x_targets",["pfx_ins",0,"alt"]],b:'<p>Shoot the flashing X targets to light a return lane for 2x. Complete them again for 3x, and again to add time. Qualified multipliers carry between balls.</p>'},
 {t:"Activating",h:["pfx_lanes",["flippers",0,"alt"]],b:'<p>Roll over the lit return lane. The flippers change which lane is lit. It lasts 20 seconds, and a flashing X adds 5. No timer shows on screen, but the insert flashes faster near the end.</p>'},
 {t:"Gravestone",h:["inlane_l"],b:'<p>Alley pass from the right flipper through the left inlane into the gravestone target. It helps a running mode or multiball, or spots an X when none is running.</p>'+UNK("I could not locate the gravestone target in the photos, so only the inlane is marked.")}
]},
{g:"Other scoring",id:"drops-orb",title:"Drop targets and Orb",steps:[
 {t:"Awards",h:["drops",["drop_awards",0,"alt"]],b:'<p>Complete the targets for the flashing award: Bonus X (up to 50x), Light Orb, then Light Locks. A new game starts on Light Orb, or Bonus X on competition settings.</p>'},
 {t:"Sweeping",h:["drops",["orb",0,"alt"]],b:'<p>All three in one shot scores 2x the target value and gives two awards. Hitting the Orb raises that value. Awards that cannot be used get skipped.</p>'},
 {t:"Mystery",h:[["drops",1],["orb",2]],b:'<p>Light Orb lights Mystery at the Orb. Collect Light Orb again first to raise it, up to level 3, for better awards. An instant info page lists them. After 2 Minutes to Midnight, a level 3 award spots an uncollected Soul Shard.</p>'}
]},
{g:"Other scoring",id:"loops",title:"Loop Jackpot",steps:[
 {t:"Building",h:["big_loop","mini_loop",["loop_ins",0,"alt"]],b:'<p>Each loop scores the lit value and adds it to the jackpot, then raises it by 250K, up to 2.5M. It decays back to 250K over time.</p><ul><li><b>Big loop without the upper left flipper:</b> 2x the value.</li><li><b>Mini loop:</b> 3x the value, and lights 2x Loop for about 6 seconds.</li></ul>'},
 {t:"Collecting",h:["big_loop","mini_loop",["upper_left",0,"alt"]],b:'<p>Loop shots light it. The rulesheet writes the count as "5 (+2)", which I read as 2 more each time. It runs 12 seconds, with +1x per shot. At 4x the ball goes to the upper left flipper. The third and later jackpots only multiply if you leave that flipper down.</p><p>Draining loses a lit Loop Jackpot.</p>'},
 {t:"Rewards",h:[],b:'<p>A Loop Jackpot lights a Tomb Treasure. 30 loops in a game, not counting Loop Jackpots, light an Extra Ball.</p>'}
]},
{g:"Other scoring",id:"combos",title:"Combos and Deathblows",steps:[
 {t:"Combos",h:COMBO.concat([["upper_right",0,"alt"]]),b:'<p>Make different shots in a row. There is no time limit. Combos start at 500K for 2-way and rise steeply. A 6-Way lights a Tomb Treasure. A lamp by the upper right flipper strobes while one is running.</p>'},
 {t:"What ends one",h:[],b:'<ul><li>Scoring a Deathblow</li><li>Repeating a shot in the combo</li><li>Any standup or drop target</li><li>2 pop bumper hits</li></ul>'},
 {t:"Deathblows",h:["eb_target","captive","bullseye","super_target","left_spinner"],b:'<p>End the combo on one of these to score by its length. The Extra Ball target, captive ball and bullseye score a normal Deathblow.</p><p><b>Super Deathblow, worth 3x:</b> the bullseye\'s center, the Super Jackpot target or the REVIVE spinner.</p><p>The rulesheet gives 900M as the maximum.</p>'}
]},
{g:"Other scoring",id:"saves",title:"Revive, Extra Ball, bonus",steps:[
 {t:"Revive",h:[["left_spinner",1],["outlanes",2],["revive_ins",0,"alt"]],b:'<p>The left spinner spells REVIVE and lights outlanes for a save. The first spelling lights both, and each later one lights one. On factory settings each lit outlane is its own save. Lit Revives carry between balls. With both lit, spinner scoring goes up.</p><p>The rulesheet advises spelling it during a multiball or a long ball saver.</p>'},
 {t:"Extra Ball",h:["eb_target"],b:'<p>Lit by 3 Power Features, the 5th Tomb Treasure or 30 loops.</p>'},
 {t:"End-of-ball bonus",h:[],b:'<p>Multiplied by Bonus X.</p><table><tr><th>Item</th><th>Each</th></tr><tr><td>Switches</td><td>3,500</td></tr><tr><td>MUMMY letters</td><td>25,000</td></tr><tr><td>Deathblows</td><td>45,000</td></tr><tr><td>Loops</td><td>50,000</td></tr><tr><td>Power Features</td><td>75,000</td></tr><tr><td>Soul Shards</td><td>250,000</td></tr><tr><td>Eddie cards (level 2 counts twice)</td><td>250,000</td></tr></table>'}
]},
{g:"Other scoring",id:"tomb",title:"Tomb Treasures",steps:[
 {t:"Collecting (Pro)",ed:"pro",h:["right_orbit"],b:'<p>When lit, collect at the <b>right loop</b>.</p>'+UNK("The rulesheet does not define \"right loop\". I marked the right orbit as a stand-in.")},
 {t:"Collecting (Premium and LE)",ed:"premium",h:["left_ramp"],b:'<p>When lit, collect at the <b>left ramp</b>.</p>'},
 {t:"What lights one",h:[],b:'<p>Each counts once, 11 in all:</p><ul><li>Each of the five Soul Shards</li><li>A Loop Jackpot</li><li>A 6-Way Combo</li><li>Mummy Super Jackpot</li><li>Trooper Super Jackpot</li><li>Winning Number of the Beast</li><li>All 4 level 2 Eddie cards</li></ul>'},
 {t:"The ten awards",h:[],b:'<p>In this order. Playfield X multiplies them, per the rulesheet.</p><ol><li>15M</li><li>Super Slings: 250K +1K, rest of ball</li><li>Power Jackpot +15M, or Can I Play With Madness</li><li>Super Combos: 5x combos and Deathblows, rest of ball</li><li>Light Extra Ball</li><li>Light Revive, wasted if already lit</li><li>Collect 2x Bonus</li><li>Power Jackpot +5x</li><li>50M and a random level 2 Eddie card</li><li>Run to the Hills</li></ol>'}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"madness",title:"Can I Play With Madness",steps:[
 {t:"Starting",h:[],b:'<p>The third Tomb Treasure on Premium, LE and Insider Connected games. It can be disabled in settings.</p>'},
 {t:"First shot",h:[["flippers",0,"alt"]],b:'<p>2-ball with one lit red shot. The flippers move it left and right. Making it adds a ball and lights 2 moving red shots.</p>'},
 {t:"Red to green",h:["orb"],b:'<p>Shoot red shots to turn them green, but not again or they go back to red. The Orb locks lit shots for 10 seconds. Turning all red shots green adds a ball. Repeat until it ends.</p>'},
 {t:"Underworld Scoop",ed:"premium",h:["underworld"],b:'<p>The scoop under the center ramp temporarily holds the ball when lit green.</p>'}
]},
{g:"Wizard modes",id:"cards",title:"Eddie Cards",steps:[
 {t:"Requirements",h:[["cards_ins",0,"alt"]],b:'<table><tr><th>Card</th><th>Level 1</th><th>Level 2</th></tr><tr><td>Mummy</td><td>Mummy Super</td><td>2nd Mummy Super in the game</td></tr><tr><td>Cyborg</td><td>Start Cyborg</td><td>Cyborg 5x Super</td></tr><tr><td>Trooper</td><td>Trooper Super</td><td>All jackpots 3x, or a 5x jackpot</td></tr><tr><td>Soldier</td><td>Start 2 Minutes to Midnight</td><td>Its 2x Super</td></tr></table>'},
 {t:"Levels",h:[["cards_ins",0,"alt"]],b:'<p><b>Level 1:</b> +5M Power Jackpot, lost when a Number of the Beast attempt fails.</p><p><b>Level 2:</b> +15M Power Jackpot, kept across attempts. All four at level 2 light a Tomb Treasure.</p>'}
]},
{g:"Wizard modes",id:"beast",title:"Number of the Beast",steps:[
 {t:"Starting",h:[["beast_ins",0,"alt"],["cards_ins",0,"alt"]],b:'<p>Collect all 4 Eddie cards at any level. Untimed, single ball, with a 30-second ball save.</p>'},
 {t:"Lighting counter-attacks",h:[["bullseye",2],["beast_ins",0,"alt"]],b:'<p>Shoot any of three red arrows, then the bullseye within 5 seconds. Miss and the shots relight.</p>'},
 {t:"Counter-attacks",h:ALL,b:'<p>All shots light yellow for 10 seconds. You cannot repeat a shot twice in a row. 15 counter-attacks defeat the Beast. You can requalify as often as needed.</p>'},
 {t:"Winning or losing",h:[],b:'<p><b>Win:</b> the flippers die, the ball drains, and you score 100M plus your Soul Shard values. Play continues on the same ball with a fresh ball saver. You cannot face the Beast again until Run to the Hills has been played.</p><p><b>Lose:</b> requalify every card not at level 2. With all four at level 2 you get an immediate rematch if you have another ball.</p>'}
]},
{g:"Wizard modes",id:"hills",title:"Run to the Hills",steps:[
 {t:"Starting",h:[],b:'<p>The super wizard mode, started by the 10th Tomb Treasure. 6-ball with a generous ball save.</p>'},
 {t:"Scoring",h:ALL.concat([["center_ramp",1],["captive",0,"alt"]]),b:'<p>All shots stay lit for jackpots. Collect one of each Power Feature, in order from top-left to bottom-right, to light the Super at the center ramp. It adds +1x to all jackpots. Spell MUMMY at the captive ball to add balls.</p>'},
 {t:"Afterward",h:[],b:'<p>Tomb Treasure progress resets, and all Soul Shards and Eddie cards clear.</p>'}
]},
{g:"Wizard modes",id:"strategy",title:"Strategy notes",steps:[
 {t:"From the rulesheet",h:[["bullseye",0,"alt"]],b:'<ul><li>Stack single-ball battles with a multiball to make shards easier. Flight of Icarus suits Mummy, because its ramps are also the first add-a-ball. Hallowed suits Trooper.</li><li>Level 3 Mystery can collect shards after 2 Minutes to Midnight, which helps on the way to Run to the Hills.</li><li>Light REVIVE during a multiball or a long ball save.</li><li>Tomb Treasures multiply with Playfield X, so a 15M award can be 45M.</li></ul>'}
]}
];

/* ---------- playfield features (coordinates in the 640x1190 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var P=function(s,a){return{premium:{s:s,a:a}}};
var F={
 tower:{n:"Avengers Tower",c:1,s:[R(65,45,85,155)],a:[108,120]},
 tower_shot:{n:"Tower shot",c:0,s:[B([[160,483],[140,420],[120,320],[110,215]],22)],a:[160,475],x:"Path placed from the arrow that points toward the Tower. Estimated.",v:P([B([[165,495],[145,430],[122,325],[110,225]],22)],[165,487])},
 left_orbit:{n:"Left orbit",c:0,s:[B([[148,640],[120,550],[90,473],[72,400],[60,300]],24)],a:[148,632],x:"Placed from the two arrows beside the Hulk art. Estimated.",v:P([B([[155,660],[125,560],[93,485],[75,400],[62,300]],24)],[155,652])},
 spinner:{n:"Left orbit spinner",c:0,s:[C(82,440,18)],a:[82,440],x:"Sits somewhere in the left orbit. I could not see it in the photo.",v:P([C(85,450,18)],[85,450])},
 pop_lane:{n:"Pop bumper lane",c:0,s:[B([[233,385],[233,300],[225,235]],24)],a:[233,378],x:"The lane with the Captain America inserts. It runs up toward the bumpers. Estimated.",v:P([B([[238,395],[238,310],[228,245]],24)],[238,388])},
 pops:{n:"Pop bumpers",c:0,s:[C(165,205,28),C(265,195,28)],a:[265,195],x:"The two lit caps at the top. Only two are visible, so others may be hidden.",v:P([C(165,215,28),C(268,205,28)],[268,205])},
 left_ramp:{n:"Left ramp",c:1,s:[B([[300,450],[300,365],[298,230],[298,100]],44)],a:[300,445],x:"The left metal ramp, with the Black Widow art at its entrance.",v:P([B([[305,460],[303,370],[300,240],[300,100]],44)],[305,455])},
 right_ramp:{n:"Right (gauntlet) ramp",c:0,s:[B([[360,405],[375,330],[410,210],[440,90]],44)],a:[360,398],x:"The right metal ramp, which leads toward the gauntlet. That it is the ramp the rulesheet calls both right and gauntlet is my reading.",v:P([B([[365,415],[375,335],[412,210],[445,90]],44)],[365,408])},
 gauntlet:{n:"Infinity Gauntlet",c:1,s:[R(460,20,100,100)],a:[510,70],v:{premium:{s:[R(480,5,100,165)],a:[530,85]}}},
 portal:{n:"Portal",c:0,s:[],a:[0,0],x:"Placed at the disc because a retailer lists a motorized pop-up disc scoop. The rulesheet does not locate it.",v:P([C(218,440,48)],[218,440])},
 disc:{n:"Doctor Strange disc",c:1,s:[C(215,433,50)],a:[215,433],v:P([C(218,440,48)],[218,440])},
 sanctum:{n:"Sanctum target",c:0,s:[C(215,372,16)],a:[215,372],x:"The rulesheet puts it behind the disc. Exact spot estimated.",v:P([C(218,385,16)],[218,385])},
 upper_loop:{n:"Upper loop",c:0,s:[B([[348,442],[385,400],[430,330]],20)],a:[348,436],x:"Also called the mini loop. The site owner confirms it sits just above the center Bullseye target. Only the entrance is drawn, and its exact path is estimated.",v:P([B([[352,452],[390,405],[430,340]],20)],[352,446])},
 captive:{n:"Captive ball",c:1,s:[C(462,555,22)],a:[462,555],v:P([C(462,567,22)],[462,567])},
 thor_ins:{n:"Thor Multiball insert",c:1,s:[C(428,628,20)],a:[428,628],v:P([C(438,637,20)],[438,637])},
 marvel:{n:"Captain Marvel spinner shot",c:0,s:[B([[403,590],[415,520],[445,420],[460,380]],24)],a:[403,584],x:"Placed from the arrows beside the Captain Marvel art and hardware up the lane. Estimated.",v:{premium:{n:"Captain Marvel ramp",c:1,s:[B([[410,600],[420,530],[450,430],[465,395]],28)],a:[410,594],x:"The ramp entrance is clear. It continues on the wire form above."}}},
 right_orbit:{n:"Right orbit",c:0,s:[B([[488,608],[515,523],[540,420],[560,290],[520,190]],22)],a:[488,602],x:"Placed from the two arrows beside the Black Panther art. Estimated.",v:P([B([[492,618],[520,535],[545,420],[565,290],[520,195]],22)],[492,612])},
 antman:{n:"Ant-Man shot",c:1,s:[C(540,766,15),B([[538,745],[533,715]],26)],a:[540,766],x:"Located by the site owner: the shot is below Black Panther, with the large yellow light just below its entrance. The lane above the light is drawn approximately.",v:P([C(541,766,15),B([[539,745],[535,720]],26)],[541,766])},
 bullseyes:{n:"Bullseye targets",c:1,s:[C(340,365,14),C(356,467,16),C(471,747,14)],a:[356,467],x:"Located by the site owner: purple circles with a shield icon, at the top between the ramps, at center, and by the Ant-Man lane.",v:P([C(345,382,14),C(370,478,16),C(475,754,14)],[370,478])},
 drops:{n:"Drop targets",c:0,s:[B([[265,612],[465,680]],26)],a:[365,646],x:"The row of dark slots across mid-playfield. I read these as the drop targets, but no source confirms it.",v:P([B([[275,625],[470,690]],26)],[372,658])},
 grid:{n:"Computer grid",c:1,s:[R(95,672,140,128)],a:[165,735],v:P([R(92,680,148,130)],[166,745])},
 avengers:{n:"Avenger inserts",c:1,s:[R(188,822,240,62)],a:[308,853],v:P([R(192,828,240,62)],[312,859])},
 strange:{n:"STRANGE letters",c:1,s:[C(195,560,14),C(224,562,14),C(252,556,14),C(280,545,14),C(303,528,14),C(320,507,14),C(332,484,14)],a:[252,556],v:P([C(199,572,14),C(228,574,14),C(257,568,14),C(284,558,14),C(307,540,14),C(325,520,14),C(337,497,14)],[257,568])},
 eye:{n:"Eye of Agamotto insert",c:1,s:[C(317,556,18)],a:[317,556],v:P([C(322,565,18)],[322,565])},
 portal_lock:{n:"Portal Lock insert",c:1,s:[C(276,580,18)],a:[276,580],v:P([C(281,590,18)],[281,590])},
 battle:{n:"Battle Thanos insert",c:1,s:[C(308,718,32)],a:[308,718],v:P([C(312,728,32)],[312,728])},
 iron:{n:"IRON return lanes",c:1,s:[C(72,880,20),C(120,855,20),C(490,855,20),C(530,880,20)],a:[120,855],x:"The letters are clear. Which lane each one covers is not.",v:P([C(78,890,20),C(125,868,20),C(495,868,20),C(535,890,20)],[125,868])},
 left_inlane:{n:"Left inlane",c:0,s:[C(115,935,16)],a:[115,935],x:"Located from the lane guide in the photo. Estimated.",v:P([C(118,950,16)],[118,950])},
 right_inlane:{n:"Right inlane",c:0,s:[C(495,940,16)],a:[495,940],x:"Located from the lane guide in the photo. Estimated.",v:P([C(498,945,16)],[498,945])},
 upper_flipper:{n:"Upper left flipper",c:0,s:[B([[125,505],[160,565]],18)],a:[142,535],x:"Looks like a third flipper in the photo. The rulesheet never mentions it.",v:P([B([[130,520],[165,580]],18)],[147,550])},
 flippers:{n:"Flippers",c:1,s:[B([[200,1080],[265,1125]],20),B([[405,1080],[340,1125]],20)],a:[232,1102],v:P([B([[205,1085],[270,1130]],20),B([[405,1085],[340,1130]],20)],[237,1107])}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var PRO=function(s){return '<span data-ed="pro">'+s+'</span>'};
var PREM=function(s){return '<span data-ed="premium">'+s+'</span>'};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Doctor Strange disc",h:["disc",["sanctum",0,"alt"],"strange"],b:'<p>Spin the disc to spell STRANGE and qualify Gem Quests. Spins also change which IRON lanes are lit and build several jackpots. The Sanctum target sits behind it.</p>'},
 {t:"Left orbit and spinner",h:[["left_orbit",1],["spinner",2]],b:'<p>Hulk\'s shot. The spinner counts toward collecting and leveling up Hulk.</p>'},
 {t:"Avengers Tower",h:[["tower",1],["tower_shot",2]],b:'<p>Locks balls for Iron Man Multiball and starts Hawkeye Challenge. It also collects the Arc Reactor Bonus and scores the Super Skill Shot.</p>'+UNK("The path to the Tower is my reading of the inserts. Confirm it on the machine.")},
 {t:"Pop bumper lane",h:[["pop_lane",1],["pops",0,"alt"]],b:'<p>Captain America\'s shot. A shot up the lane counts as 10 pop bumper hits and raises bonus X.</p>'},
 {t:"Left ramp",h:["left_ramp"],b:'<p>Black Widow\'s shot, and part of the Binary Hurry-Up.</p>'},
 {t:"Right (gauntlet) ramp",h:["right_ramp",["gauntlet",0,"alt"]],b:'<p>Collects Gems and starts most big modes. Repeat shots build Hawkeye Combos.</p>'+UNK("The rulesheet uses both \"right ramp\" and \"gauntlet ramp\". I treat them as one shot, which it does not state outright.")},
 {t:"Captive ball",h:["captive","thor_ins"],b:'<p>Thor\'s shot. Hits spell T-H-O-R toward Thor Multiball.</p>'},
 {t:"Captain Marvel",h:["marvel"],b:'<p>'+PRO("On the Pro this is a spinner shot. Spins count toward the Captain Marvel awards.")+PREM("On this model this is a ramp. Ramp shots count toward the Captain Marvel awards.")+'</p>'},
 {t:"Right orbit",h:["right_orbit"],b:'<p>Black Panther\'s shot. Combo Jackpot is collected here, and the ball has to go all the way around to count.</p>'},
 {t:"Upper loop",h:["upper_loop"],b:'<p>Also called the mini loop, and Hawkeye\'s shot. It collects Hawkeye Combos and lights Captain America to collect the Shield Bonus. Pop bumper lane and upper loop often score double in multiball modes.</p>'},
 {t:"Drop targets and computer grid",h:[["drops",1],["grid",2]],b:'<p>Any drop target hit locks in the lit grid award. Complete the bank to collect it. Three awards in a line start a Super Mode or award a feature.</p>'},
 {t:"Return lanes",h:["iron",["left_inlane",0,"alt"],["right_inlane",0,"alt"]],b:'<p>These spell I-R-O-N. Lit letters only move when the disc spins, not with the flippers. After a right inlane roll, the next disc hit doubles STRANGE progress.</p>'},
 {t:"Ant-Man shot",h:["antman"],b:'<p>On the right side, below Black Panther, with a large yellow light just below the entrance. It collects Mystery when lit.</p>'},
 {t:"Bullseye targets",h:["bullseyes"],b:'<p>Three targets marked by purple circles with a shield icon: one at the top between the left and gauntlet ramps, one in the center, and one on the right by the Ant-Man lane. Completing them lights Hawkeye Challenge and, at 3 completions, Extra Ball.</p>'},
 {t:"Portal",ed:"premium",h:["portal"],b:'<p>The rulesheet says the portal starts Gem Quests on Premium and LE.</p>'+UNK("It does not say where the portal is. I placed it at the disc from a retailer listing that mentions a pop-up disc scoop.")}
]},
{g:"Layout and basics",id:"basics",title:"Rules overview",steps:[
 {t:"The three main goals",h:["disc","avengers","grid"],b:'<ul><li><b>Gem Quests:</b> spell STRANGE, then start one.</li><li><b>Assemble the Avengers:</b> shoot their shots enough times.</li><li><b>Super Modes:</b> complete lines on the computer grid.</li></ul><p>Play all six quests and all three mini-wizard modes to reach the final battle with Thanos.</p>'},
 {t:"A good first plan",h:[["captive",1],["portal_lock",2]],b:'<p>The rulesheet suggests making four combos to light a Portal Lock before your first Gem Quest, then starting Thor Multiball during that quest. Thor needs only three captive ball shots at the start of a game, because T and H are already lit.</p>'},
 {t:"Other tips",h:["tower"],b:'<ul><li>Fill the six inserts above the flippers to qualify Soul Gem. This is best done in multiball.</li><li>Take Tower locks when they appear. Going out of your way to light them can be risky.</li><li>The best Gem depends on how you play. Check the Gem information on the display.</li></ul>'}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill Shot",h:["pops"],b:'<p>Plunge softly into the top rollover near the pop bumpers. Worth 250K + 100K per successful skill shot, plus 3 seconds of ball save.</p>'+UNK("I could not see the rollover in the photo, so the bumpers mark the area.")},
 {t:"Super Skill Shot",h:["tower"],b:'<p>Full plunge, then shoot the Tower. Worth 1M + 150K per successful skill shot, plus 5 seconds of ball save. The first one in a game lights Mystery.</p>'},
 {t:"Secret Skill Shot 1",h:["upper_loop"],b:'<p>Plunge with medium strength so the ball rolls backward down the upper loop. Worth 3M + 200K per skill shot, plus 10 seconds of ball save and one Portal Lock lit.</p>'},
 {t:"Secret Skill Shot 2",h:["drops"],b:'<p>Full plunge, then shoot the center drop target. Worth 3M + 200K per skill shot, plus 10 seconds of ball save and the flashing grid square.</p>'}
]},
/* ====== GEM QUESTS ====== */
{g:"Gem Quests",id:"quests",title:"Starting a quest",steps:[
 {t:"Spell STRANGE",h:["disc","strange",["right_inlane",0,"alt"],["eye",0,"alt"]],b:'<p>Spin the disc to spell S-T-R-A-N-G-E. After a right inlane roll, the Eye of Agamotto flashes and spins advance STRANGE 2x. Later quests need more spins per letter.</p>'},
 {t:"Start the quest",ed:"pro",h:["right_ramp"],b:'<p>Shoot the right ramp. Choose a quest with the flippers and confirm with the action button or both flippers.</p>'},
 {t:"Start the quest",ed:"premium",h:["portal"],b:'<p>Shoot the portal. Choose a quest with the flippers and confirm with the action button or both flippers.</p>'},
 {t:"Staying alive",h:[],b:'<p>Quests have no timer apart from a health bar that steadily falls. A quest only ends if you drain while it is active. If you fail, Thanos gets the Gem.</p><p>Win a lost Gem back with Hawkeye Challenge on Marksman difficulty. With the Soul Gem you can replay a lost quest, but failing the replay also costs you the Soul Gem.</p>'},
 {t:"What runs alongside",h:["captive","tower","grid"],b:'<p>Either multiball and any timed Super Mode can run during a quest, and you can keep leveling up Avengers. Score 30M in a quest for its Gold Trophy.</p>'}
]},
{g:"Gem Quests",id:"quest-list",title:"The Gem Quests",steps:[
 {t:"Mind Gem (blue)",h:[["left_orbit",0],["left_ramp",0],["right_orbit",0],["marvel",0],["disc",0,"alt"],["sanctum",0,"alt"]],b:'<p>Fight Supergiant. Hulk, Marvel, Panther and Black Widow are lit. Each one you free adds +1x to the disc, up to 5x, and lights the disc for 100K per spin.</p><p>Do this three times to light the Sanctum target for Final Blow. Shoot the fastest blinking shot in all three rounds and the last disc spin scores it instead.</p>'},
 {t:"Power Gem (red)",h:[["marvel",1],["pop_lane",2],["upper_loop",3],["tower",4],["spinner",0,"alt"],["left_orbit",0,"alt"]],b:'<p>Three shots flash at a time. The center one does 30% damage and the outer two do 15% and half value. Build the value with the left spinner (one rip only) or the disc.</p><p>Critical hits run in the order shown and loop if needed. Do enough damage to light the left orbit for Final Blow.</p>'},
 {t:"Space Gem (purple)",h:[["right_orbit",1],["upper_loop",1],["left_orbit",2],["left_ramp",3,"alt"]],b:'<p>Fight Corvus with combos. Parry at the right orbit or upper loop, then attack at the left orbit for points and 50K per bumper for 5 seconds. A combo parry can make it 2x or 4x, and the upper loop always gives at least 2x.</p><p>Three attacks light the left ramp and right orbit for Final Blow. The right orbit pays more.</p>'},
 {t:"Time Gem (orange)",h:[["left_ramp",1],["right_ramp",1],["drops",2]],b:'<p>Fight Proxima. Shoot the left ramp and gauntlet ramp once each, then hit the cycling lit drop target. It starts at 3x and drops with each unlit target you hit.</p><p>Repeat three times to win. The target moves faster each time.</p>'},
 {t:"Reality Gem (yellow)",h:["disc","strange",["pop_lane",0,"alt"],["upper_loop",0,"alt"]],b:'<p>Fight Ebony Maw. Each disc spin lights STRANGE letters and all major shots turn yellow. Flashing letters multiply lit shots, and the pop bumper lane and upper loop score another 2x.</p><p>Letters fade, later ones fastest, but spins bring them back. Shoot 8 yellow arrows to win.</p>'}
]},
{g:"Gem Quests",id:"portal-locks",title:"Portal Locks and Victory Laps",steps:[
 {t:"Earning Portal Locks",h:["portal_lock","disc"],b:'<p>Before starting a quest, up to two can be qualified and collected at the disc, from:</p><ul><li>Secret Skill Shot 1</li><li>4, 10, 20 and later combos</li><li>Your first Hawkeye Challenge</li><li>A computer grid award</li></ul>'},
 {t:"What they do",h:[],b:'<p>They give 2x or 3x scoring in the next quest as long as you keep the balls in play.</p><p>Finish the quest with those balls still in play for Victory Laps at all major shots. Build and relight them at the disc. They multiply by balls in play, and the pop bumper lane and upper loop score 2x.</p>'}
]},
{g:"Gem Quests",id:"gems",title:"Placing Gems",steps:[
 {t:"Collect and place",h:["right_ramp"],b:'<p>After winning a quest, Collect Gem lights at the right ramp and takes priority. Then shoot a flashing Gem shot to place it, which also lights the disc toward the next quest.</p><p>The perk depends on the Gem and the shot it sits on. Move Gems with the Space Gem or Change Gems, which lights each time the Avengers are assembled.</p>'},
 {t:"Mind Gem",h:[],b:'<p>The action button collects lit shots for you.</p><table><tr><th>On</th><th>Uses</th></tr><tr><td>Uncollected Avenger</td><td>1 on that shot</td></tr><tr><td>Collected</td><td>2 on that shot</td></tr><tr><td>Level 1</td><td>3, spots the best shot anywhere</td></tr><tr><td>Level 2</td><td>1, all shots in all modes</td></tr><tr><td>Drop targets</td><td>3, change the lit grid square</td></tr><tr><td>Captain Marvel</td><td>3, spots the shot and counts '+PRO("10 spins")+PREM("1 ramp")+'</td></tr></table>'},
 {t:"Power Gem",h:[],b:'<p>Makes leveling easier. Shots toward that Avenger count double, and the level and its level 2 multiplier carry between balls.</p><ul><li><b>Drop targets:</b> the next 3 completions award 2 grid squares.</li><li><b>Captain Marvel:</b> each '+PRO("spin")+PREM("ramp")+' counts double toward the awards.</li></ul>'},
 {t:"Space Gem",h:[],b:'<p>Shoot its shot, then press the action button within 3 seconds to move all placed Gems one shot right. Change Gems timer extends to 20 seconds.</p><table><tr><th>On</th><th>Uses</th></tr><tr><td>Uncollected or collected</td><td>1</td></tr><tr><td>Level 1 / Level 2</td><td>2 / 3</td></tr><tr><td>Drop targets</td><td>1, recharges at next grid award</td></tr><tr><td>Captain Marvel</td><td>1, recharges at next count-up award</td></tr></table>'},
 {t:"Time Gem",h:[],b:'<p>Its shot adds time to the Super Mode timer or Time Bank. Multiball ball savers also get longer, by the same times.</p><table><tr><th>On</th><th>Time</th></tr><tr><td>Uncollected or collected</td><td>5 s</td></tr><tr><td>Level 1 / Level 2</td><td>8 s / 15 s</td></tr><tr><td>Drop targets or Captain Marvel</td><td>10 s</td></tr></table>'},
 {t:"Reality Gem",h:[],b:'<p>A shot multiplier.</p><table><tr><th>On</th><th>Multiplier</th></tr><tr><td>Uncollected or collected</td><td>2x</td></tr><tr><td>Level 1 / Level 2</td><td>3x / 4x (replaces level 2\'s 2x)</td></tr><tr><td>Captain Marvel</td><td>2x</td></tr><tr><td>Drop targets</td><td>2x, and grid awards for 2 of 3 targets (3 times only)</td></tr></table>'},
 {t:"Soul Gem",h:[],b:'<p>After you collect another Gem, a Soul Gem Jackpot lights at its shot for part of that quest\'s value: 50% on an uncollected or collected Avenger, drop targets or Captain Marvel, 75% at level 1, 150% at level 2.</p><p>It also allows replays of failed quests and the Black Order Multiball extender, and you can lose it through either. Win it back with a Black Order Multiball Super Jackpot or by winning Battle Royale.</p>'}
]},
/* ====== AVENGERS ====== */
{g:"Avengers Assemble",id:"assemble",title:"Assembling the team",steps:[
 {t:"How it works",h:["avengers"],b:'<p>Collect all six Avengers to qualify a mini-wizard mode and light Change Gems. Keep shooting a collected Avenger to reach level 1 and level 2. Each level adds perks and improves any Gem placed there. Level 2 earns a Trophy.</p>'},
 {t:"Hulk",h:["left_orbit","spinner",["right_inlane",0,"alt"]],b:'<p>Left orbit spinner.</p><ul><li><b>Level 1:</b> 2x Hulk Rampage scoring.</li><li><b>Level 2:</b> 2x left orbit.</li></ul><p>Each collect or level lights the right inlane to start Gamma Ray, 15 seconds of huge left spinner points. The game goes dark and flashes green when it starts.</p>'},
 {t:"Iron Man",h:["iron"],b:'<p>Spell I-R-O-N at the return lanes.</p><ul><li><b>Level 1:</b> all Arc Reactor shots score 2x.</li><li><b>Level 2:</b> Iron Man Multiball scores 2x.</li></ul>'},
 {t:"Captain America",h:["pops","pop_lane"],b:'<p>Pop bumper hits. A shot up the lane counts as 10 hits.</p><ul><li><b>Level 1:</b> all pop hits score 2x.</li><li><b>Level 2:</b> 2x pop bumper lane.</li></ul>'},
 {t:"Black Widow",h:["left_ramp",["left_inlane",0,"alt"]],b:'<p>Left ramp.</p><ul><li><b>Level 1:</b> left inlane briefly lights the captive ball for 2x THOR letters.</li><li><b>Level 2:</b> 2x left ramp.</li></ul>'},
 {t:"Thor",h:["captive"],b:'<p>Spell T-H-O-R at the captive ball.</p><ul><li><b>Level 1:</b> Super Slings, 100K per hit.</li><li><b>Level 2:</b> 2x captive ball.</li></ul>'},
 {t:"Black Panther",h:["right_orbit"],b:'<p>Right orbit.</p><ul><li><b>Level 1:</b> 3 seconds added to the combo timer.</li><li><b>Level 2:</b> 2x right orbit.</li></ul>'},
 {t:"How many it takes",h:[],b:'<p>To assemble, for each successive mode:</p><table><tr><th></th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th></tr><tr><td>Hulk</td><td>80</td><td>100</td><td>120</td><td>140</td><td>160</td></tr><tr><td>Iron Man</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>Cap</td><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td></tr><tr><td>Widow</td><td>3</td><td>5</td><td>7</td><td>9</td><td>11</td></tr><tr><td>Thor</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>Panther</td><td>3</td><td>5</td><td>7</td><td>9</td><td>11</td></tr></table><p>To level up (level 1 / level 2): Hulk 110 / 110, Iron Man 1 / 2, Cap 50 / 50, Widow 5 / 5, Thor 1 / 1, Panther 3 / 3.</p>'}
]},
{g:"Avengers Assemble",id:"soul-quest",title:"Soul Gem Quest",sub:1,steps:[
 {t:"Normal or Hard",h:["right_ramp"],b:'<p>The first mini-wizard mode, started at the right ramp. Hold the action button during the start animation for Hard Mode.</p><ul><li><b>Normal:</b> 30 flips, more flips per shot, lower scoring.</li><li><b>Hard:</b> 20 flips, fewer flips per shot, 10x the scoring.</li></ul>'},
 {t:"The eight shots",h:[["right_orbit",1],["left_ramp",2],["right_ramp",3],["left_orbit",4],["captive",5],["drops",6],["marvel",7],["tower",8]],b:'<p>Shoot 8 green shots in this fixed order without running out of flips. Shots add flips and draining takes some away.</p><p>Shot 7 is '+PRO("30 spins of the Captain Marvel spinner")+PREM("the Captain Marvel ramp")+'.</p><p>Mystery, Flank Attack and the Mind Gem can spot shots, but not the Tower.</p>'},
 {t:"Finish or fail",h:[],b:'<p>Win to get the Soul Gem and a bonus per flip left. Run out of flips and you lose the quest with no ball saver. Drain with 1 to 5 flips left and you lose the quest, but the ball is saved.</p><p>If you fail, regain it with a Black Order Multiball Super Jackpot, by beating Battle Royale, or from Marksman Hawkeye Challenge.</p>'}
]},
{g:"Avengers Assemble",id:"bomb",title:"Black Order Multiball",sub:1,steps:[
 {t:"Light the jackpot",h:["left_orbit","iron","pop_lane","left_ramp","captive","right_orbit",["upper_loop",0,"alt"],["marvel",0,"alt"]],b:'<p>All six Avengers are lit. Enough shots to them light a Jackpot at the upper loop. More Avengers collected means a higher value and multiplier. Each lit jackpot also lights Captain Marvel for extra multiplier.</p>'},
 {t:"Super Jackpot",h:["disc","strange",["pop_lane",0,"alt"]],b:'<p>After the jackpot, spell STRANGE at the disc to light Super Jackpot at the pop bumper lane. It pays 5M + jackpots since the last super, adds a ball, returns a lost Soul Gem and resets the qualifying.</p><p>Drop targets boost the Jackpot and Avenger Value.</p>'},
 {t:"Soul Gem extender",h:[],b:'<p>If you have the Soul Gem, hold the action button to risk it and restart multiball when you drain to one ball. Without a Super Jackpot you lose it.</p>'}
]},
{g:"Avengers Assemble",id:"royale",title:"Black Order Battle Royale",sub:1,steps:[
 {t:"Your six lives",h:["avengers"],b:'<p>Each insert is a life, and each Avenger has a health bar that falls with flips used, the timer running out and draining (a big hit). The longer an Avenger lasts, the more you score.</p><p>All shots are lit. Clear waves to defeat members of the Black Order.</p>'},
 {t:"Helpers",h:["drops","disc","marvel","upper_loop","antman"],b:'<ul><li><b>Drop targets:</b> Vision adds 8 flips.</li><li><b>Disc:</b> STRANGE lights a moving Power-Up for 3x damage, 4x on an arrow, for 10 seconds.</li><li><b>Captain Marvel:</b> freezes the timer briefly.</li><li><b>Upper loop:</b> Hawkeye lights the three left shots for an attack, double on an arrow already lit.</li><li><b>Ant-Man:</b> a normal shot first, then Wasp adds a ball and 2x.</li></ul>'},
 {t:"Winning",h:[],b:'<p>Win for 20M per Avenger left, 1M per flip left and 1M per second left.</p>'}
]},
/* ====== THANOS ====== */
{g:"Thanos",id:"thanos-attacks",title:"Thanos Attacks!",steps:[
 {t:"Starting",h:["right_ramp"],b:'<p>After at least two Gems and the Soul Gem, shoot the lit right ramp.</p>'},
 {t:"Defend each Gem",h:[["left_orbit",1],["left_ramp",2],["right_orbit",3],["right_ramp",4],["drops",0,"alt"]],b:'<p>Shoot a Gem shot to select it, then these four in order. You have 45 seconds per Gem. Lit shots add 5 seconds and drop targets add 15. Flank Attack and the Mind Gem can collect any shot except the right ramp.</p><p>More Gems at the start means higher scoring.</p>'},
 {t:"The outcome",h:[],b:'<p>Timing out or draining loses the Gem you were defending. Defend all of them to win back a lost Gem, or, if you failed no quest, start 3-ball Super Victory Laps.</p>'}
]},
{g:"Thanos",id:"battle-thanos",title:"Battle Thanos",steps:[
 {t:"Starting",h:["right_ramp","battle"],b:'<p>After attempting all six quests and playing all three mini-wizard modes, shoot the lit right ramp. With all 6 Gems you automatically complete the mode for 1 billion points.</p>'},
 {t:"The fight",h:["disc","captive"],b:'<p>A four-ball multiball. Sets of shots flash red and blue to damage Thanos. The disc rotates them, and a shot flashing both colors does 2x. Your Gems affect how fast health falls in the single-ball phase. Completing THOR adds a ball.</p>'},
 {t:"Final blow",h:["tower"],b:'<p>After enough damage, the Tower lands the final blow, then 6-ball Super Victory Laps begins.</p>'}
]},
{g:"Thanos",id:"laps",title:"Super Victory Laps",steps:[
 {t:"Higher scoring laps",h:[],b:'<p>A 3-ball version comes from Thanos Attacks and a 6-ball version from Battle Thanos. The base value is 500K rather than 250K, and all scores multiply by balls in play.</p>'}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"iron-mb",title:"Iron Man Multiball",steps:[
 {t:"Light the locks",h:["iron","disc",["grid",0,"alt"]],b:'<p>Spell IRON at the return lanes, or collect Light Lock from the grid. This lights 3 locks at the Tower, and only one for later multiballs. Level 2 Iron Man doubles all jackpots.</p>'},
 {t:"Lock and start",h:["tower"],b:'<p>Lock 3 balls at the Tower.</p>'},
 {t:"Phase 1",h:["left_ramp","right_ramp"],b:'<p>Two jackpots light per phase. Collect both to light the Tower super jackpot for 10 seconds. Two balls in the Tower at once give a double super.</p><p>Jackpots start at 1M, rise 500K per phase, and gain 12,500 per disc spin.</p>'},
 {t:"Phase 2",h:["left_orbit","right_orbit"],b:'<p>Left orbit and right orbit.</p>'},
 {t:"Phase 3",h:["pop_lane","marvel"],b:'<p>Pop bumper lane and Captain Marvel.</p>'},
 {t:"Phase 4",h:["tower","upper_loop"],b:'<p>Tower and upper loop (the rulesheet says "upper orbit" here, which I read as the same shot). Completing it lights the disc for 250K per spin for 22 seconds and awards or upgrades the Trophy.</p>'},
 {t:"Add a ball",h:["iron","sanctum"],b:'<p>Once per multiball, complete the IRON lanes, then shoot the Sanctum target.</p>'}
]},
{g:"Multiballs",id:"thor-mb",title:"Thor Multiball",steps:[
 {t:"Starting",h:["captive","thor_ins",["left_inlane",0,"alt"]],b:'<p>First: three captive ball shots, as T and H start lit. Second: spell THOR twice. Third and later: three times.</p><p>Level 1 Black Widow lets the left inlane light 2 THOR letters for 5 seconds. Level 2 Thor doubles all jackpots.</p>'},
 {t:"Jackpots",h:[["pop_lane",0,"alt"],["upper_loop",0,"alt"]],b:'<p>All shots are lit for 200K + 2,500 per disc spin. The pop bumper lane and upper loop score double, and raise the Mjolnir Attack twice as much.</p>'},
 {t:"Mjolnir Attack",h:["captive"],b:'<p>After a jackpot, the captive ball scores the jackpot value times THOR letters so far. Then it takes 2 jackpots, then 3, and so on, until you have spelled THOR.</p>'},
 {t:"Super Jackpot",h:["tower"],b:'<p>Worth 20x the jackpot value at the Tower, with the Thor Multiball Trophy. The sequence then resets and needs more jackpots.</p>'},
 {t:"Add a ball",h:["disc","sanctum"],b:'<p>Spell STRANGE to summon the Eye of Agamotto, then shoot the Sanctum target. Each time you do this in a game, it takes more spins.</p>'}
]},
{g:"Multiballs",id:"frenzy",title:"Computer Frenzy Multiball",steps:[
 {t:"Starting",h:["grid","right_ramp"],b:'<p>Play all 6 Super Modes and this becomes the next grid award. Then shoot the right ramp.</p>'},
 {t:"Scoring",h:["grid","drops"],b:'<p>Shots are colored to match grid inserts. Each spots its lamp and scores a jackpot, and a bingo scores a super. A double bingo gives two 4x supers and a triple gives three 9x supers. Completing the drop targets adds a ball, up to twice.</p>'}
]},
{g:"Multiballs",id:"gem-mania",title:"Gem Mania",steps:[
 {t:"Starting",h:["grid"],b:'<p>A 3-ball mode. With the topper, collect all six Gems. With Insider Connected, it can appear as the second added award on a completed grid row, and stacks with multiballs.</p>'},
 {t:"Scoring",h:["right_ramp"],b:'<p>All shots score 150K. Switch hits light Gems: 50 for the first, then 10 more each time. Each lit Gem makes the Gem inserts score a final jackpot of 5K per switch times a rising multiplier. The sixth ends it.</p><p>If two balls drain, the gauntlet ramp stays lit for 10 seconds for one last jackpot. THOR adds a ball, up to three.</p>'}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"grid",title:"Computer grid",steps:[
 {t:"Collecting awards",h:["drops","grid"],b:'<p>The lit award cycles until a drop target is hit. Finish the bank, or make enough Hawkeye Combos, to collect it. Three in a line start a Super Mode or feature. The layout is random each game, but the same for every player.</p>'},
 {t:"What is on it",h:["grid"],b:'<p>All six Super Modes, Portal Lock and Super Ball Saver (30 seconds) start on the grid. Collected awards are replaced by:</p><ul><li>10 Million</li><li>+5x Bonus</li><li>Light Extra Ball</li><li>Collect Bonus</li><li>Light Change Gems</li><li>Trophy (three times)</li><li>Light Computer Frenzy</li></ul>'}
]},
{g:"Other scoring",id:"supers",title:"Super Modes",steps:[
 {t:"How they run",h:["grid"],b:'<p>All share one timer. Starting another resets it for all, and the Time Gem adds to it. Score 30M in one for a Gold Trophy.</p>'},
 {t:"Hulk Rampage",h:["spinner"],b:'<p>All shots are lit green from 800K, rising 50K per shot and 5K per spin. Complete them to relight. Level 1 Hulk gives 2x.</p>'},
 {t:"Super Arc Reactor",h:["tower"],b:'<p>The Arc Reactor stays lit. Each hit pays up to 4x depending on shot strength, from a base of 600K rising 50K per hit.</p>'},
 {t:"Super Gauntlet",h:["right_ramp"],b:'<p>Loop the right ramp. The value starts at 800K, and the amount added doubles each shot from 50K. Flank Attack collects the latest value once.</p>'},
 {t:"Super Targets",h:["bullseyes"],b:'<p>Targets score 4M a hit. All three Hawkeye targets add 250K to all of them. Complete 2 sets to light an Extra Ball.</p>'},
 {t:"Super Combos",h:[],b:'<p>Each combo adds 300K + 50K per combo, multiplied for each successive shot, and counts 2x toward combo awards.</p>'},
 {t:"Super Disc",h:["disc"],b:'<p>Spin the disc one way for points, then the other way to raise the multiplier, up to 5x per spin.</p>'}
]},
{g:"Other scoring",id:"combos",title:"Combos",steps:[
 {t:"Combos and Combo Jackpot",h:[["right_orbit",0,"alt"]],b:'<p>Shots flash white after any major shot. Thresholds light the right orbit for Combo Jackpot, which re-scores previous combo points. The ball must go all the way around, and draining means relighting it.</p>'},
 {t:"Combo awards",h:["portal_lock"],b:'<p>Combos count across the whole game.</p><table><tr><td>4, 10, 35, 45</td><td>Portal Lock</td></tr><tr><td>8, 12</td><td>Combo Jackpot</td></tr><tr><td>20, 55</td><td>Portal Lock and Combo Jackpot</td></tr><tr><td>30, 40</td><td>Combo Jackpot and Bronze, Silver Trophy</td></tr><tr><td>50</td><td>Extra Ball and Gold Trophy</td></tr></table><p>After 55, every 5 combos alternate between the two.</p>'},
 {t:"Hawkeye Combos",h:[["right_ramp",1],["upper_loop",2]],b:'<p>Repeat right ramp shots raise the multiplier, up to 3x, then the upper loop collects. Scoring 3, 8, 13 and so on spots the grid square. 10, 20 and 30 earn Trophies. These do not count toward the combo awards above.</p>'}
]},
{g:"Other scoring",id:"hawkeye",title:"Hawkeye Challenge",steps:[
 {t:"Lighting it",h:[["bullseyes",1],["tower",2]],b:'<p>Complete the 3 Bullseye targets, then shoot the Tower.</p><ul><li>1 completion: lights it.</li><li>3 completions: lights Extra Ball.</li><li>7, then every 4 more: lights it, or adds 2M if already lit.</li></ul>'},
 {t:"The levels",h:["tower",["bullseyes",0,"alt"]],b:'<p>The level rises with each success, and the action button jumps to level 3 when available.</p><ul><li><b>Amateur:</b> timed release. Hit the inner loop or bullseye target for a Portal Lock and 3M.</li><li><b>Pro:</b> timed release. Hit the inner loop for an Extra Ball.</li><li><b>Marksman:</b> random release once three lock inserts light. Hit the inner loop for an uncollected Gem and 10M.</li></ul>'+UNK("I could not tell which shot the inner loop is.")}
]},
{g:"Other scoring",id:"marvel",title:"Captain Marvel",steps:[
 {t:"Count-up awards",h:["marvel"],b:'<p>'+PRO("Spins are")+PREM("Ramps are")+' counted across the game.</p><table><tr><th>'+PRO("Spins")+PREM("Ramps")+'</th><th>Award</th></tr><tr><td>'+PRO("90")+PREM("3")+'</td><td>Binary Hurry-Up, Mystery</td></tr><tr><td>'+PRO("180")+PREM("6")+'</td><td>Binary Hurry-Up, Mystery</td></tr><tr><td>'+PRO("300")+PREM("10")+'</td><td>Mystery</td></tr><tr><td>'+PRO("360")+PREM("12")+'</td><td>Mystery</td></tr><tr><td>'+PRO("450")+PREM("15")+'</td><td>Binary Hurry-Up, Mystery</td></tr><tr><td>'+PRO("540")+PREM("18")+'</td><td>Bronze Trophy</td></tr><tr><td>'+PRO("960")+PREM("32")+'</td><td>Silver Trophy</td></tr><tr><td>'+PRO("1440")+PREM("48")+'</td><td>Gold Trophy</td></tr><tr><td>'+PRO("1500")+PREM("50")+'</td><td>Extra Ball</td></tr></table>'},
 {t:"Binary Hurry-Up",h:["left_ramp","marvel"],b:'<p>A two-shot hurry-up from 5M. Shoot the left ramp or Captain Marvel, then the other for a value starting at double. Points rise 1M per collect.</p>'+PREM('<p>Each completed hurry-up adds +1X to the Captain Marvel ramp multiplier, up to 5X.</p>')+PRO('<p>The ramp multiplier from this hurry-up is not on the Pro.</p>')}
]},
{g:"Other scoring",id:"bonuses",title:"Bonuses and awards",steps:[
 {t:"Arc Reactor Bonus",h:["drops","tower"],b:'<p>Completing the drop targets lights the Tower. It pays up to 4x depending on shot strength. Unlit IRON letters raise the 75K base, and it carries between balls until collected.</p>'},
 {t:"Shield Bonus",h:["pops","upper_loop"],b:'<p>Pop hits build it from a 6M base. The upper loop lights Captain America for 15 seconds to collect it with a Trophy, then it resets. It doubles with the grid\'s 2x Shield, level 2 Cap or the Reality Gem.</p>'},
 {t:"Mystery",h:["antman"],b:'<p>Lit at the Ant-Man shot, by Captain Marvel awards or your first Super Skill Shot. Awards include add-a-ball, spot 3 STRANGE letters, 10M, a Super Mode, +5x Bonus and Change Gems.</p><p>Spot Captain Marvel gives '+PRO("+45 spins")+PREM("+3 ramps")+'.</p>'},
 {t:"Extra Balls",h:["sanctum",["bullseyes",0,"alt"]],b:'<p>Lit at the Sanctum target by:</p><ul><li>3 Bullseye completions</li><li>2 waves of Super Targets</li><li>8 Trophies</li><li>2nd Hawkeye Challenge</li><li>A late grid award</li><li>50 combos</li></ul><p>If unavailable, it scores 25M.</p>'},
 {t:"End-of-ball bonus",h:[],b:'<p>This ball: switches x 250, and grid squares, Arc Reactors, upper loops and combos x 25K each.</p><p>Whole game: Bronze x 100K, Silver x 250K, Gold x 500K, Gems x 250K.</p><p>All multiply by bonus X, up to 25x, raised at the pop bumper lane or the grid.</p>'}
]},
/* ====== TROPHIES ====== */
{g:"Trophies",id:"trophies",title:"Trophies",steps:[
 {t:"How they work",h:[],b:'<p>There are 32 trophies, each Bronze, Silver or Gold. They raise combo values and bonus, and 24 unlocks Trophy Mania. Hard Mode disables 8, but triples Trophy Mania scoring.</p>'},
 {t:"Trophy list",h:[],b:'<table><tr><th>Trophy</th><th>B / S / G</th></tr><tr><td>Each of 6 Gems</td><td>Finish / 15M / 30M</td></tr><tr><td>Super Skill*, Secret Skill*, Iron MB, Thor MB, Hawkeye Challenge*, Grid*, Shield*</td><td>1x / 2x / 3x</td></tr><tr><td>Each level 2 Avenger</td><td>1x / 2x / 3x</td></tr><tr><td>Combos*</td><td>30 / 45 / 60</td></tr><tr><td>Captain Marvel*</td><td>'+PRO("540 / 960 / 1440 spins")+PREM("18 / 32 / 48 ramps")+'</td></tr><tr><td>Hawkeye Combos*</td><td>10 / 20 / 30</td></tr><tr><td>Black Order MB</td><td>1 / 2 / 3 SJ or 10x JP</td></tr><tr><td>Each of 6 Super Modes</td><td>5M / 10M / 20M</td></tr><tr><td>Computer Frenzy</td><td>SJ / Double / Triple</td></tr><tr><td>Battle Thanos</td><td>Start / Start Defeat Thanos / Finish</td></tr><tr><td>Battle Royale</td><td>Start / 2 villains / Finish</td></tr></table><p class="fine">* Disabled in Hard Mode.</p>'}
]},
{g:"Trophies",id:"trophy-mania",title:"Trophy Mania",steps:[
 {t:"Starting",h:["right_ramp"],b:'<p>The true wizard mode. Shoot the right ramp after 24 trophies. The 8 RGB shots light in proportion to your Bronze, Silver and Gold counts.</p>'},
 {t:"Trophy Jackpots",h:["disc","captive"],b:'<p>Base 1M, raised at the disc. Silver is 2x and Gold is 4x. The captive ball moves all trophies right, and a jackpot swaps its trophy with the next different color to the right.</p>'},
 {t:"Super Jackpot",h:["antman","drops"],b:'<p>Balls are added at 12 and 24 trophies. 24 also lights Super Jackpot at Ant-Man, worth all Trophy Jackpots so far. Drop target bingos multiply it by 2x, 3x or 5x.</p>'},
 {t:"Afterward",h:[],b:'<p>You return to square one and the trophy case resets. With all six Gems, quests stay disabled, but mini-wizard modes remain.</p>'}
]}
];

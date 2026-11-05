/* ---------- playfield features (coordinates in the 640x1180 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 xjet:{n:"X-Jet shot",c:1,s:[B([[178,612],[163,565],[146,520],[124,475],[102,435]],15)],a:[152,545],x:"The arrow beside the X-JET label, lower left. The rulesheet says the X-Jet shot feeds the X-Mansion ramp and the Danger Room, and also calls it the X-Jet ramp and the X-Jet orbit. Where it goes past the arrow is my guess."},
 downtown:{n:"Downtown (left) loop",c:1,s:[B([[168,300],[161,250],[155,200],[148,150],[134,100],[110,72]],15)],a:[158,235],x:"The arrow above the DOWNTOWN label and the green Exit sign. The rulesheet calls it the Downtown loop, left loop and Downtown ramp. The path up the left is my guess."},
 uptown:{n:"Uptown (left) ramp",c:1,s:[B([[242,300],[238,252],[229,200],[216,142],[202,84],[192,40]],17)],a:[238,262],x:"The arrow with the Cerebro insert and the UPTOWN label below it. The rulesheet also calls it the left ramp. I take the steel ramp up the upper left to be its path, which is a guess."},
 beast_lane:{n:"Beast's Lab lane",c:1,s:[B([[284,322],[281,285],[276,245]],12)],a:[282,290],x:"The narrow lane above the BEAST LAB label, between the Uptown and Midtown shots."},
 beast:{n:"Beast's Lab captive ball",c:0,s:[E(285,205,13,26)],a:[285,205],x:"A guess: the end of the Beast's Lab lane. I could not see the captive ball in Stern's Pro photo.",v:{premium:{c:1,s:[C(262,218,12),R(276,52,24,112)],a:[262,218],x:"The chrome ball at the end of the Beast's Lab lane, with three green lights above it. Stern lists an elevated captive ball vari-target themed as Beast's Lab. I take the lights to show the award level; that is my reading."}}},
 midtown:{n:"Midtown (center) ramp",c:1,s:[B([[318,300],[322,250],[330,200],[340,140],[352,82],[366,40]],17)],a:[320,285],x:"The arrow and inserts under the MIDTOWN label, just left of the Sentinel head. Missions start here or at the Subway loop. The path up the center is my guess."},
 sentinel:{n:"Sentinel head",c:1,s:[E(400,265,52,60)],a:[400,265],x:"Stern's sculpted, destructible Sentinel head bash toy.",v:{premium:{x:"Stern's sculpted, destructible Sentinel head bash toy, motorized on the Premium and LE."}}},
 mouth:{n:"Sentinel mouth",c:0,s:[C(400,318,13)],a:[400,318],x:"A guess at where the mouth opens, at the bottom of the face. The rulesheet says the mouth opens as the giant Sentinel weakens."},
 subway:{n:"Subway (right) loop",c:1,s:[B([[462,392],[468,342],[478,292],[490,242],[505,182],[514,122],[504,70]],15)],a:[468,345],x:"The arrow and inserts below the SUBWAY sign, right of the Sentinel head. The rulesheet calls it the Subway loop, the right loop and the Subway ramp. Missions start here or at Midtown. The path past the entrance is my guess."},
 highway:{n:"Highway (right) ramp",c:1,s:[B([[492,562],[497,502],[505,442],[515,382],[525,322]],17)],a:[497,500],x:"The arrow and inserts above the HIGHWAY label, right side. The rulesheet also calls it the right ramp. The path past the entrance is my guess."},
 kitty:{n:"Kitty Pryde lane",c:0,s:[C(185,420,11)],a:[185,420],x:"A guess, at the Kitty Pryde art. The rulesheet puts a hidden lane, gated by a target, below the entrance to the Downtown ramp."},
 cerebro:{n:"Cerebro lock",c:0,s:[C(100,700,30)],a:[100,700],x:"The blue dome with the Cerebro label, above the Danger Room. Stern lists a Cerebro ball lock at the left flipper feed. That the dome is the lock is my reading."},
 missions:{n:"Mission inserts",c:1,s:[C(336,623,11),C(376,627,11),C(418,633,11),C(415,667,11),C(414,702,11),C(378,697,11),C(343,692,11),C(341,658,11)],a:[378,662],x:"Eight inserts around the big X: Xavier, Rogue and Bishop on top, Storm on the right, Wolverine, Colossus and Gambit below, Magneto on the left. The blue-tabbed corners are the easy missions, the red-tabbed ones between them the challenging missions."},
 m_xavier:{n:"Xavier mission insert",c:1,s:[C(336,623,11)],a:[336,623]},
 m_rogue:{n:"Rogue mission insert",c:1,s:[C(376,627,11)],a:[376,627]},
 m_bishop:{n:"Bishop mission insert",c:1,s:[C(418,633,11)],a:[418,633]},
 m_storm:{n:"Storm mission insert",c:1,s:[C(415,667,11)],a:[415,667]},
 m_wolverine:{n:"Wolverine mission insert",c:1,s:[C(414,702,11)],a:[414,702]},
 m_colossus:{n:"Colossus mission insert",c:1,s:[C(378,697,11)],a:[378,697]},
 m_gambit:{n:"Gambit mission insert",c:1,s:[C(343,692,11)],a:[343,692]},
 m_magneto:{n:"Magneto mission insert",c:1,s:[C(341,658,11)],a:[341,658]},
 future:{n:"Future insert",c:1,s:[C(401,732,14)],a:[401,732],x:"The insert below the mission grid."},
 danger:{n:"Danger Room",c:1,s:[R(25,765,215,290)],a:[130,900],x:"Stern's Danger Room, left of the main flippers, with a mini-flipper and an outlane spinner. The outline is rough."},
 mini:{n:"Danger Room mini-flipper",c:1,s:[B([[92,1022],[145,1050]],12)],a:[118,1036]},
 dr_spinner:{n:"Danger Room spinner",c:0,s:[E(47,880,8,30)],a:[47,880],x:"A guess. Stern calls it an outlane spinner; I take it to be in the far left lane."},
 dr_ramp:{n:"Danger Room exit ramp",c:0,s:[B([[200,1000],[214,935],[238,875],[268,822]],14)],a:[226,905],x:"A guess at the wire ramp that leaves the Danger Room. The rulesheet says exiting by the ramp also counts as a Cerebro shot."},
 dr_targets:{n:"Danger Room targets",c:0,s:[E(135,843,24,16)],a:[135,843],x:"A guess, at the DANGER inserts. The rulesheet lists targets in the Danger Room but does not say where."},
 abort:{n:"Abort target",c:1,s:[C(104,771,13)],a:[104,771],x:"The owner confirms the Abort target sits at the top of the Danger Room, above the Rogue art. I marked the warning-triangle face there. The ABORT insert lower down is not the target."},
 bonus_hold:{n:"Bonus hold target",c:0,s:[C(110,1072,8)],a:[110,1072],x:"A guess. The rulesheet puts it directly below the mini-flipper and says it cannot be hit on purpose."},
 bishop_pop:{n:"Bishop (left) pop bumper",c:0,s:[C(207,840,22)],a:[207,840],x:"My reading: the blue bumper cap beside the BISHOP label. The rulesheet also lists a bumper in the Danger Room; it may be this one."},
 gambit_pop:{n:"Gambit (right) pop bumper",c:0,s:[C(530,700,20)],a:[530,700],x:"A guess: the red ring right of the Gambit art, above the right return lane."},
 xmansion:{n:"X-Mansion target",c:0,s:[C(527,615,9)],a:[527,615],x:"A guess. The rulesheet puts the X-Mansion target above the Gambit pop."},
 nc_ins:{n:"Nightcrawler targets",c:1,s:[C(476,404,14),C(211,590,15),C(147,786,13)],a:[211,590],x:"The owner confirms purple Nightcrawler targets at the pink BAMF! decals: right of the Subway loop entrance, under the X-Jet, and above and right of Rogue in the Danger Room. Each decal has an insert in it; the standup itself sits at or beside the decal."},
 nc_maybe:{n:"Possible fourth Nightcrawler target",c:0,s:[C(191,288,13)],a:[191,288],x:"My reading: a fourth pink BAMF! decal with an insert, just above the DOWNTOWN label. Not yet confirmed by the owner."},
 bonus_ins:{n:"Cerebro target",c:1,s:[C(220,1002,12)],a:[220,1002],x:"The owner confirms the Cerebro target is left of the left flipper, just right of the ABORT insert: the red X disc. The rulesheet says bonus X is built by the Cerebro Bonus Build targets near the left flipper; I take this to be one of them. The CEREBRO BONUS BUILD label is above it."},
 r_in:{n:"Right return lane",c:0,s:[E(537,895,7,30)],a:[537,895],x:"My reading of the lane slots, beside the Cyclops art."},
 r_out:{n:"Right outlane",c:0,s:[E(567,905,7,30)],a:[567,905],x:"My reading of the lane slots."},
 flippers:{n:"Flippers",c:1,s:[B([[255,1025],[330,1072]],14),B([[480,1025],[410,1072]],14)],a:[368,1050]},
 shooter:{n:"Shooter lane",c:0,s:[B([[606,1150],[606,950],[604,780]],12)],a:[606,950],x:"My reading of the plunger lane along the right side."},
 hand:{n:"Sentinel hand",c:1,s:[],a:[548,455],x:"Premium and LE only.",v:{premium:{s:[R(505,405,85,100)],a:[548,455],x:"Stern's sculpted Sentinel hand, which can destroy ramps, and on the LE intercept the ball. The rulesheet says a Sentinel Attack can also start at any shot that feeds the hands on the Premium and LE, but does not say which shots those are."}}},
 wolverine:{n:"Wolverine figure",c:1,s:[],a:[150,88],x:"Not in the Pro photo.",v:{premium:{s:[E(150,88,50,26)],a:[150,88],x:"Stern lists a Wolverine figure at the left ramp under LE features. The Premium photo shows it too."}}}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["xjet","downtown","uptown","midtown","subway","highway"];
var START=["midtown","subway"];
var CEREBRO=["uptown","highway","dr_ramp"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["missions","future"],b:"<p>Complete the eight missions, one for each X-Man around the big X. Each completed mission sends you to the Future, where escaping earns that X-Man's perk. All eight light the Save Senator Kelly mini-wizard mode.</p>"+UNK("The rulesheet's Layout section is blank, so the shot names on the playfield are my reading of the printed labels.")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>The six city shots, left to right as I read the photo: X-Jet, Downtown loop, Uptown ramp, Midtown ramp, Subway loop and Highway ramp. The rulesheet calls them the six primary or major shots.</p>"+UNK("The labels fix each entrance. Where each ramp and loop goes past it is my guess; the ramps cross each other.")},
 {t:"The Sentinel",h:["sentinel","mouth","beast_lane","beast"],b:"<p>The giant Sentinel head stands at the top center. Beast's Lab is the narrow lane between Uptown and Midtown, with a captive ball at its end.</p><p data-ed=\"premium\">On the Premium and LE the head is motorized.</p>"},
 {t:"The Danger Room",h:["danger","mini","dr_spinner","dr_ramp","dr_targets","abort","bonus_hold"],b:"<p>Left of the main flippers is the Danger Room, with its own mini-flipper, a spinner, targets, a bumper and an exit ramp. The X-Jet shot feeds it, or the ball can fall in on its own.</p>"+UNK("Only the mini-flipper is clear. The other Danger Room parts are placed from context.")},
 {t:"Bumpers and targets",h:["bishop_pop","gambit_pop","xmansion","kitty","cerebro","nc_ins",["nc_maybe",0,"alt"],"bonus_ins"],b:"<p>Bishop's left pop bumper and Gambit's right pop bumper, the X-Mansion target above Gambit, Kitty Pryde's hidden lane below Downtown, the Cerebro lock at the left flipper feed, the purple Nightcrawler targets at the BAMF! decals and the Cerebro target left of the left flipper.</p>"+UNK("A fourth BAMF! decal above Downtown may be another Nightcrawler target; it is not confirmed. The rulesheet speaks of Bonus Build targets, plural; only one is marked.")},
 {t:"Pro differences",ed:"pro",h:["sentinel"],b:"<p>The rulesheet gives no Pro-only rules. Stern lists a Sentinel head that is not motorized, and no Sentinel hand.</p>"},
 {t:"Premium and LE differences",ed:"premium",h:["hand","sentinel","wolverine","beast"],b:"<p>The rulesheet's only edition note: a Sentinel Attack can also start at any shot that feeds the Sentinel hands. Stern lists a motorized Sentinel head and a Sentinel hand that destroys ramps; on the LE it can also intercept the ball and launch it back into play.</p>"+UNK("The rulesheet does not say which shots feed the hands, or how the hands change other rules.")}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Missions",h:["missions"].concat(alt(START)),b:"<p>Shoot the white shots to light a mission at Midtown or Subway. Use the flippers and action button to pick it. Completing a mission sends you to the Future: defeat Sentinels at the flashing shots, then escape for a perk.</p>"},
 {t:"Sentinel Multiball",h:["sentinel","mouth","dr_ramp"],b:"<p>Hit the Sentinel head enough to spawn the giant Sentinel, then defeat it to start the multiball. Jackpots light a super jackpot at the head; the Danger Room exit ramp relights jackpots at a higher multiplier.</p>"},
 {t:"Save the City",h:alt(MAJ),b:"<p>Make three shots to every ramp and loop to light Save the City at the center and right shots.</p>"+UNK("The overview says the center and right ramps; the Save the City section says Midtown and Subway, the right loop.")},
 {t:"To Me, My X-Men",h:CEREBRO.concat(["nc_ins"]),b:"<p>Collect sets of purple standups to light Cerebro, then shoot a ramp that feeds the post to advance it. The third Cerebro starts To Me, My X-Men.</p>"},
 {t:"Berserker",h:["uptown"],b:"<p>Defeat 35 Sentinels during Sentinel Multiball or the Future to light Berserker Multiball at the left (Uptown) ramp.</p>"},
 {t:"Other features",h:["danger","bishop_pop","gambit_pop","beast"],b:"<p>Train in the Danger Room for bigger missions and an easier Future. Bishop's bumper charges the action button, Gambit's bumper doubles the next mode shot, and Beast's Lab gives mystery awards.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Soft plunge",h:["shooter","highway"],b:"<p>Soft plunge into the lane near the Highway ramp entrance: 200K and +1 bonus X.</p>"+UNK("The rulesheet does not name the lane.")},
 {t:"X-Jet",h:["xjet","dr_ramp"],b:"<p>Hit the X-Jet shot to feed the X-Mansion ramp: +3 bonus X. If the ball enters the ramp, the Danger Room exit ramp then scores a super skill shot.</p>"},
 {t:"Time loop",h:["downtown","uptown"],b:"<p>Hit Downtown repeatedly for up to a 5-way time loop combo. After all five, the left ramp is the final shot and adds 15 seconds to the ball save.</p>"},
 {t:"Cerebro skill shot",h:["uptown"],b:"<p>Hit the left ramp to spot one shot's worth of progress toward To Me, My X-Men.</p>"},
 {t:"MXV super skill shot",h:[["uptown",1],["highway",2],["xjet",3],["dr_ramp",4]],b:"<p>After the Cerebro skill shot, shoot Highway, X-Jet, then the Danger Room ramp: 15M and the Danger Room jumps to level 3.</p>"+UNK("The rulesheet says there are four skill shots, then lists five.")}
]},
/* ====== MISSIONS ====== */
{g:"Missions",id:"missions",title:"Starting missions",steps:[
 {t:"Lighting a mission",h:alt(MAJ).concat(START),b:"<p>Hit the lit white shots, then a blue shot to start the next mission. The first mission lights after one white shot; each completed mission needs more. Missions start at a blue arrow: Midtown or Subway.</p>"},
 {t:"Easy and challenging",h:["missions"],b:"<p>The four corner missions are easy and lead to the Sentinel Future. The four between them are challenging and lead to Escape Nimrod. The rulesheet lists them clockwise.</p>"},
 {t:"Double scoring",h:["danger"],b:"<p>Reach Danger Room level 1 (green) before starting a mission to double all its scoring. Danger Room progress carries over from ball to ball until level 1.</p>"},
 {t:"Extra balls",h:["r_in"],b:"<p>Extra ball lights at the right return lane after 3, then 7, completed missions, only the first time through.</p>"},
 {t:"Stacking",h:["missions"],b:"<p>A multiball can stack on a mission started before it. If a mission completes during multiball, the center ramp lights to start the Future afterwards.</p>"}
]},
{g:"Missions",id:"easy",title:"Easy missions",steps:[
 {t:"Rescue the Innocent (Bishop)",h:["m_bishop","bishop_pop"].concat(alt(MAJ)),b:"<p>Six red shots rescue the citizens; they light in an order that allows combos. Bishop's pop bumper raises each shot's multiplier, up to 5x.</p><p>Perfect: score at least one shot worth 5x.</p>"},
 {t:"Bitter Rivalry (Wolverine)",h:["m_wolverine"].concat(alt(MAJ)),b:"<p>Four random shots light, three yellow and one blue. Hit four shots to beat Sabretooth; blue shots score more. The lit shots reshuffle after each shot.</p><p>Perfect: hit only blue shots.</p>"},
 {t:"Smuggled Cargo (Gambit)",h:["m_gambit","gambit_pop"].concat(alt(MAJ)),b:"<p>Seven blue shots recover the cargo. Blinking purple arrows score double damage and progress and move left to right. The right bumper adds 200K to the next shot.</p><p>Perfect: hit only purple shots, five shots in all.</p>"},
 {t:"Stopping a Juggernaut (Xavier)",h:["m_xavier","xjet","beast","xmansion"],b:"<p>Alternate red shots with targets: the X-Jet orbit, Beast's Lab and the X-Mansion ball save target. Five shots complete it.</p><p>Perfect: finish with more than 25 seconds left.</p>"}
]},
{g:"Missions",id:"challenging",title:"Challenging missions",steps:[
 {t:"Sentinel Facility Raid (Rogue)",h:["m_rogue","sentinel"].concat(alt(MAJ)),b:"<p>Lit shots move left to right. Each shot defeats a Sentinel on the assembly line and counts 1 toward Berserker, up to 7. Sentinel target hits stop them for a few seconds. Eight shots complete it.</p><p>Perfect: hit only the farthest left lit shots in the wave.</p>"+UNK("The rulesheet marks this perfect rule with a question mark.")},
 {t:"A Fiery Assault (Storm)",h:["m_storm"].concat(alt(MAJ)),b:"<p>All shots start red. A red shot puts out Pyro's flames and turns blue; a blue shot damages him and goes dark. Three blue shots finish it.</p><p>Perfect: collect every red shot before the third blue.</p>"},
 {t:"Mayhem in Midtown (Colossus)",h:["m_colossus"].concat(alt(MAJ)),b:"<p>Hit the targets between shots to light the two shots beside each one yellow. Enough target hits light red shots for 2x progress. Five yellow shots complete it.</p><p>Perfect: light all shots red and collect at least one red shot at each set.</p>"+UNK("The rulesheet does not say which targets sit between the shots.")},
 {t:"Genosha Under Siege (Magneto)",h:["m_magneto","bishop_pop","gambit_pop"].concat(alt(MAJ)),b:"<p>Red shots damage Magneto. Green shots hit Toad for bonus scores, worth 2x red; Toad moves every 5 seconds or when a bumper is hit.</p><p>Perfect: hit only green shots.</p>"+UNK("The rulesheet does not say how many shots complete it.")}
]},
{g:"Missions",id:"future",title:"The Future",steps:[
 {t:"Sentinel Future",h:alt(MAJ).concat(["sentinel","future"]),b:"<p>After an easy mission: 40 seconds, with 10 seconds of ball save. Shoot the shots where Sentinels have spawned; each takes one shot, and another shot relights a defeated one. Shots to the giant head raise the value per Sentinel (white, green, yellow, red, +1x each). Other modes cannot start.</p>"},
 {t:"Escaping",h:START,b:"<p>After 6 Sentinels, Midtown and Subway light to escape and collect the mission's perk. Run out of time or fail to escape and you return to the past with no perk.</p>"+UNK("The Missions section and overview say only the center ramp lights to return.")},
 {t:"Danger Room help",h:["danger"],b:"<p>Danger Room level 2 (yellow) means one fewer Sentinel is needed to escape. Level 3 (red) makes every Sentinel count double, for points and toward the escape.</p>"},
 {t:"Escape Nimrod",h:alt(MAJ).concat(START),b:"<p>After a challenging mission: 35 seconds, with 10 seconds of ball save. Three red shots light among the major ramp shots; each scores a bonus based on time left. Then Midtown and Subway light blue on a new 10-second timer. Escaping awards the perk and 4 Sentinels. Bishop's action button is off.</p>"},
 {t:"Future perks",h:["m_bishop","m_gambit","m_xavier","m_wolverine"],b:"<ul><li>Bishop: fewer left bumper hits to light Bishop.</li><li>Gambit: the lit Gambit bumper makes the next shot 3x instead of 2x.</li><li>Xavier: the Danger Room bonus works in the Future, and a ball save the first time you enter the Danger Room each ball.</li><li>Wolverine: longer single-ball ball saves, and bonus damage to the first Sentinel in Sentinel Multiball.</li></ul>"},
 {t:"Nimrod perks",h:["m_colossus","m_magneto","m_rogue","m_storm"],b:"<ul><li>Colossus: longer multiball ball saves.</li><li>Magneto: all game timers +10 seconds.</li><li>Rogue: hold the action button for an add-a-ball in multiball, and the Danger Room spinner pauses the Escape Nimrod timer for 7 seconds.</li><li>Storm: bonus damage to Sentinels in Sentinel Multiball, and it runs longer the next time.</li></ul>"+UNK("The Nimrod table gives Rogue's add-a-ball once per ball; the Multiballs section says once per multiball. That section also credits the Rogue and Colossus perks to escaping the Future rather than Nimrod.")}
]},
{g:"Missions",id:"perks",title:"Other perks",steps:[
 {t:"Beast",h:["beast"],b:"<p>Advance Beast's Lab to level 3: Beast's Lab awards work in the Future.</p>"},
 {t:"Cyclops",h:["danger"],b:"<p>Complete 3 Danger Room levels in one game: longer combo timers.</p>"},
 {t:"Jean Grey",h:["xmansion","r_out"],b:"<p>10 hits to the X-Mansion ball save target: the outlane ball save can advance in the Future, and the next level 2 Beast's Lab award is always Light X-Mansion Ball Save.</p>"},
 {t:"Nightcrawler",h:["nc_ins",["nc_maybe",0,"alt"]],b:"<p>20 hits to the purple Nightcrawler targets: purple targets defeat Sentinels in the Future.</p>"+UNK("The fourth target above Downtown is my reading and not confirmed.")}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"sentinelmb",title:"Sentinel Multiball",steps:[
 {t:"Spawning the Sentinel",h:["sentinel","mouth"],b:"<p>Hit the Sentinel head 3 times (+2 for each multiball played) to spawn it. Keep hitting it to wear it down; its mouth opens, and enough hits defeat it and start the multiball. A Fastball Special skips straight to the next stage.</p>"},
 {t:"Jackpots",h:alt(MAJ).concat(["dr_ramp"]),b:"<p>All major shots start lit yellow for 1x jackpots. The Danger Room exit ramp relights them at 2x (orange), then 3x (red). An unlit shot defeats a Sentinel toward Berserker instead.</p>"},
 {t:"Super jackpot",h:["sentinel","mouth"],b:"<p>After four jackpots, the head scores a super jackpot worth the jackpots of that wave; the open mouth doubles it. Each super jackpot needs more jackpots, up to six.</p>"},
 {t:"Perks",h:["m_storm","m_wolverine"],b:"<p>Storm's perk adds Sentinel damage, makes the jackpot easier to light and extends the multiball once. Wolverine's adds damage to the first Sentinel hit.</p>"}
]},
{g:"Multiballs",id:"city",title:"Save the City Multiball",steps:[
 {t:"Qualifying",h:alt(MAJ),b:"<p>Hit each of the six city shots three times during single-ball play. Later rounds need 4, then 5 each. The display tracks progress in its upper right corner.</p>"},
 {t:"Starting",h:START,b:"<p>Midtown and Subway then light to start it when no other mode is running.</p>"},
 {t:"Lighting jackpots",h:["downtown","uptown","midtown","subway","highway"],b:"<p>Five areas light for jackpots (7M plus the shot's level value) by hits to their feeders:</p><ul><li>Downtown: the loops (X-Jet and left loop)</li><li>Uptown: the ramps (left, center, right loop and right ramp)</li><li>Midtown: targets (Danger Room, Nightcrawler and ball save)</li><li>Subway: the Danger Room spinner</li><li>Highway: the Bishop and Gambit bumpers</li></ul><p>Feeder hits also raise a lit jackpot. Each shot pays one jackpot per round.</p>"},
 {t:"Super jackpot",h:[["xjet",1],["dr_spinner",2],["kitty",0,"alt"]],b:"<p>After all five jackpots, the X-Jet ramp lights. Shoot it to light the Danger Room spinner: 1M per spin for 15 seconds. Bounces into Kitty Pryde's lane add 10 seconds.</p>"}
]},
{g:"Multiballs",id:"xavier",title:"To Me, My X-Men",steps:[
 {t:"Lighting Cerebro",h:["uptown","nc_ins"],b:"<p>Make Cerebro skill shots, or hit the Nightcrawler targets 5 times, to light Cerebro.</p>"},
 {t:"Collecting Cerebro",h:["uptown","highway","cerebro"],b:"<p>With Cerebro lit, shoot Uptown or Highway to collect it. The third collect starts the multiball. Exiting the Danger Room by the ramp also counts as a Cerebro shot when lit.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>Hit six blue shots to summon random X-Men for jackpots. You cannot hit the same shot twice in a row.</p>"},
 {t:"Super jackpot",h:[["uptown",1],["dr_ramp",2]],b:"<p>Every sixth jackpot lights a super jackpot at the left ramp worth the jackpot total (about 5M minimum), and a 2x super jackpot at the Danger Room exit ramp. There is a bonus for summoning all 12 X-Men before a super jackpot.</p>"}
]},
{g:"Multiballs",id:"berserker",title:"Berserker Multiball",steps:[
 {t:"Earning Sentinels",h:["sentinel","missions"],b:"<p>Defeat 35 Sentinels over the game:</p><ul><li>Sentinel Facility Raid: one per shot, up to 7</li><li>The Future: each lit shot, or 2 at Danger Room level 3</li><li>Escaping Nimrod: 4</li><li>Sentinel Multiball: a shot whose jackpot is already scored</li></ul>"},
 {t:"Starting",h:["uptown"],b:"<p>Berserker lights at Uptown when no other mode or multiball is running. It takes priority over everything else.</p>"},
 {t:"Jackpots",h:alt(MAJ).concat(["sentinel"]),b:"<p>3-ball multiball. All major shots and the Sentinel head light yellow for jackpots from 5M. A jackpot shot cannot repeat until another is made.</p>"},
 {t:"Super jackpot",h:[["xjet",1],["dr_ramp",2]],b:"<p>After 5 jackpots, the X-Jet ramp scores a super jackpot worth those five and adds 1M to the jackpot, then the Danger Room exit ramp lights briefly for a 2x super jackpot. Each later super jackpot needs one more jackpot.</p>"}
]},
{g:"Multiballs",id:"mbrules",title:"Multiball rules",steps:[
 {t:"Stacking",h:["missions"],b:"<p>A multiball stacks with a mission started before it. Multiballs do not stack with each other.</p>"},
 {t:"Danger Room boost",h:["danger"],b:"<p>Leveling the Danger Room before or during a multiball, with no mode running, raises every jackpot and super jackpot.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"danger",title:"Danger Room",steps:[
 {t:"Getting in",h:["xjet","danger"],b:"<p>Shoot the X-Jet to feed the Danger Room, or the ball falls in on its own.</p>"},
 {t:"Levels",h:["dr_spinner","dr_targets","dr_ramp","bishop_pop"],b:"<p>Hit the spinner, targets, ramp and bumper to fill the progress bar and gain a level:</p><ul><li>Level 1 (green): the next mission scores double.</li><li>Level 2 (yellow): one fewer Sentinel to escape the Future.</li><li>Level 3 (red): Sentinels count double in the Future; Escape Nimrod's final timer gets 5 more seconds.</li></ul><p>The level resets after each mission. Each level also raises multiball scoring.</p>"+UNK("I take the Danger Room bumper to be Bishop's; the rulesheet does not say.")},
 {t:"During missions",h:["danger"],b:"<p>During missions the Danger Room cannot level up; it builds a Danger Room bonus instead, added with a mission's final shot. 10% of it also goes into end-of-ball bonus.</p>"},
 {t:"Abort",h:["abort","xjet"],b:"<p>An Abort save is lit at game start, and again after enough X-Jet shots, the first after three. Hit the Abort target for a 5-second ball save covering the Danger Room and the main playfield.</p>"},
 {t:"Limits",h:["danger","m_xavier"],b:"<p>The Danger Room is normally off in the Future and in Save the City. Xavier's perk keeps its bonus rule on in the Future.</p>"}
]},
{g:"Other scoring",id:"bishop",title:"Bishop and Gambit",steps:[
 {t:"Bishop",h:["bishop_pop"],b:"<p>Left pop bumper hits charge Bishop, up to three uses. When the action button flashes red, press it to spot the most valuable lit shot. It never spots the Sentinel or a Danger Room shot, and is off in Escape Nimrod. In multiball it takes twice as many hits, unless you have Bishop's perk.</p>"},
 {t:"Gambit",h:["gambit_pop","r_in"],b:"<p>Three hits to Gambit's bumper make the next mode or multiball shot 2x. An alley pass that hits it on the way to the right return lane does it at once. Gambit's perk makes it 3x.</p>"}
]},
{g:"Other scoring",id:"kitty",title:"Kitty Pryde",steps:[
 {t:"Hidden lane",h:["kitty","downtown"],b:"<p>A hidden lane below the Downtown entrance scores from 500K, +250K for each hit to the target that gates it. During missions it spots the leftmost lit shot for half value, unless the final shot is lit.</p>"}
]},
{g:"Other scoring",id:"combos",title:"Combos and Sentinel Attacks",steps:[
 {t:"Combos",h:alt(MAJ),b:"<p>Shoot lit X shots in a row for combos: 200K, +200K each, up to 1M a shot. The lit combo shots move around so you cannot just repeat the center ramp. Combos raise the next Beast's Lab award level.</p>"},
 {t:"Sentinel Attack",h:[["uptown",0,"alt"],["midtown",0,"alt"],["highway",0,"alt"],["subway",0,"alt"]],b:"<p>After 6 combos, Uptown, Midtown and Highway light to start a Sentinel Attack; then 8 more, then every 10. Two red shots each defeat a Sentinel for a hurry-up from 20M down to 1M; the second starts at 1.5x. Each round adds 5M to the next. Nothing else advances meanwhile.</p>"+UNK("The rulesheet lights Uptown, Midtown and Highway to start it, but names the left ramp, center ramp and right loop (Subway) as the red shots.")},
 {t:"Hands",ed:"premium",h:["hand"],b:"<p>On the Premium and LE, a Sentinel Attack can also start at any shot that feeds the Sentinel hands.</p>"+UNK("The rulesheet does not say which shots feed the hands.")}
]},
{g:"Other scoring",id:"beast",title:"Beast's Lab",steps:[
 {t:"Awards",h:["beast_lane","beast"],b:"<p>Hit the captive ball hard enough to collect an award at its current level, raised by combos.</p><ul><li>Level 1: +200K skill shot, double next progress shot, +1x bonus, Danger Room bonus, sneak-in bonus, or 550K</li><li>Level 2: light X-Mansion ball save, or 5.5M</li><li>Level 3: light extra ball (always first), Beast for the Future (always second), or 10M</li></ul><p>Beast's Lab is off in the Future unless you have Beast's perk.</p>"},
 {t:"Competition",h:["beast"],b:"<p>A Competition Install disables extra balls, so the first level 3 award always qualifies Beast instead.</p>"}
]},
{g:"Other scoring",id:"fastball",title:"Fastball Special",steps:[
 {t:"The combo",h:[["r_in",1],["uptown",2],["sentinel",3]],b:"<p>Lit at the right return lane after enough sets of standup targets. A ball through the right return lane lights a strobing left ramp: 500K. The ball returns to the left flipper; combo it into the Sentinel for 2.5M. It also jumps the Sentinel to its next stage.</p>"+UNK("The rulesheet does not say which standup targets.")}
]},
{g:"Other scoring",id:"xmansion",title:"X-Mansion ball save",steps:[
 {t:"Outlane save",h:["xmansion","r_out"],b:"<p>Four hits to the X-Mansion target above the Gambit pop light the right outlane ball save and build toward Jean Grey's perk. It cannot advance in the Future without that perk.</p>"}
]},
{g:"Other scoring",id:"extraball",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["r_in","missions","beast"],b:"<p>Lit at the right return lane by completing 3, then 7, missions (first cycle only), and by the first level 3 Beast's Lab award.</p>"},
 {t:"End-of-ball bonus",h:["bonus_ins","dr_ramp","kitty"],b:"<p>Starting bonus, plus 125K per X-Mansion ramp, 250K per Kitty Pryde lane, the Danger Room total and 100K per Sentinel destroyed. All times bonus X, built by completing the Cerebro Bonus Build targets near the left flipper.</p>"+UNK("The Danger Room section says 10% of the Danger Room bonus is scored in bonus; this list just says Danger Room total.")},
 {t:"Bonus hold",h:["bonus_hold","mini"],b:"<p>The bonus hold target directly below the mini-flipper holds bonus; it cannot be hit on purpose. Held on the last ball, bonus is doubled instead.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"senator",title:"Save Senator Kelly",steps:[
 {t:"Starting it",h:["missions"].concat(START),b:"<p>After all 8 missions, Midtown and Subway light to start this single-ball mini-wizard mode, with 40 seconds of ball save.</p>"},
 {t:"Phases",h:alt(MAJ).concat(CEREBRO),b:"<p>Phase 1: two green shots. Each phase then lights all three Cerebro shots (Uptown, Highway and the Danger Room exit ramp) to advance. Phase 2: three yellow shots. Phase 3: four orange shots.</p>"+UNK("The rulesheet says the Cerebro shots light after phase 1 and implies, but does not state, the same after phases 2 and 3.")},
 {t:"Final phase",h:alt(MAJ).concat(CEREBRO),b:"<p>All six major shots light red on a 60-second timer. Clear them and shoot Cerebro before time runs out to capture Mystique.</p>"},
 {t:"Combos",h:alt(MAJ),b:"<p>The highest combo you make multiplies the rest of the mode's scoring: a 4-way combo makes everything after it 4x. Combos do not advance other objectives here.</p>"}
]},
{g:"Wizard modes",id:"mastermold",title:"Master Mold",steps:[
 {t:"Not documented yet",h:["sentinel"],b:"<p>The rulesheet lists Master Mold as a placeholder that \"will appear in a later code update\".</p>"+UNK("Not documented for code 0.98.")}
]}
];

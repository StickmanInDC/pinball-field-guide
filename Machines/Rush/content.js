/* ---------- playfield features (coordinates in the 640x1215 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[176,566],[155,500],[135,455],[110,395],[75,300],[42,190]],18)],a:[135,455],x:"The lane with a 1 and a 2, which fits the rulesheet's combo table. The inserts are clear. Past the arrow the path is a guess, and the Premium and LE drum sits over it."},
 side_loop:{n:"Side loop",c:0,s:[B([[243,360],[197,306],[172,282],[110,190],[150,130],[225,165]],18)],a:[197,306],x:"The lane with a 2, a 3 and a record, ending at a white arrow. The side loop and side ramp both carry a 2 and a 3, so I placed this one by where it points. They could be swapped. The curve beyond the arrow is a guess."},
 side_ramp:{n:"Side ramp",c:0,s:[B([[335,452],[292,440],[232,412],[150,345],[75,265],[48,170],[90,85],[170,60],[230,120]],20)],a:[232,412],x:"The arrow with a 2 and a 3 points at the entrance of the big clear ramp on the left, so I read that ramp as the side ramp. It could be swapped with the side loop."},
 upper_scoop:{n:"Upper scoop",c:0,s:[C(270,478,18)],a:[270,478],x:"I read the green lit opening on the right of the dice housing as this scoop, because the arrow with the Extra Ball insert points at it. The rulesheet says upper, top and side scoop, and I treat them as one."},
 left_scoop:{n:"Left scoop",c:0,s:[E(247,585,22,18)],a:[247,585],x:"I read the lower opening of the dice housing as this scoop, because the Roll the Bones arrow points up at it. The rulesheet says left scoop and bottom scoop, and I treat them as one."},
 dead_end:{n:"Dead end / VUK",c:0,s:[B([[282,363],[267,306],[258,272],[250,235]],18)],a:[267,306],x:"The lane with a 1, a 3 and a record, which fits the combo table. The inserts are clear, but wires cover the lane and I could not see the end of it."},
 tm:{n:"Time Machine",c:1,s:[B([[345,362],[345,250]],40),E(345,210,58,48)],a:[345,300],x:"The ramp with the runway lights, leading through the ring of the copper machine. The clear ramp beyond it looks like its return, which is my reading."},
 tm_lights:{n:"Time Machine lights",c:0,s:[C(320,108,11),C(343,105,11),C(366,105,11)],a:[343,105],x:"Three bulbs on top of the machine. The rulesheet talks about red, green, yellow and blue lights on the Time Machine without locating them, so this is my reading."},
 tm_ins:{n:"Time Machine insert",c:1,s:[R(308,384,72,44)],a:[344,406]},
 spinner_lane:{n:"Spinner lane",c:0,s:[B([[403,387],[411,356],[416,329],[428,290],[445,230]],18)],a:[411,356],x:"The lane with a 1, a 2 and a record, which fits the combo table. The inserts are clear. The clear ramp hides the path past the spinner."},
 spinner:{n:"Spinner",c:0,s:[E(428,288,14,20)],a:[428,288],x:"The shiny plate at the top of the spinner lane. I read this as the spinner, and the rulesheet does not place it."},
 right_ramp:{n:"Right ramp",c:1,s:[B([[405,550],[418,520],[441,462],[472,400],[490,280],[500,120]],26)],a:[472,400],x:"The big metal ramp, with Rush cut into it. The lane below has only a 1 and a record, which fits the combo table. The apron card calls it the Hemispheres ramp."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[510,500],[522,440],[531,411],[550,340],[565,267],[565,180],[540,110]],18)],a:[531,411],x:"The lane with a 2, a record and a Multiball insert, which fits the combo table and Headlong Flight. The path past the rollover is a guess."},
 under_flip:{n:"Under the upper flipper",c:0,s:[B([[405,632],[450,603],[506,588]],16)],a:[450,603],x:"The Drum Solo and Extra Ball arrows point here. The shot itself is hidden below the flipper, so the end of this path is a guess."},
 upper_flip:{n:"Upper flipper",c:1,s:[B([[539,506],[512,579]],18)],a:[525,542]},
 drops:{n:"Instrument drop targets",c:1,s:[B([[161,649],[106,717]],20)],a:[134,683],x:"Three drop targets in a line, right behind the instrument inserts."},
 inst_std:{n:"Instrument standup",c:0,s:[E(118,655,18,18)],a:[118,655],x:"The rulesheet and apron card put this target behind the drops. I could not pick it out, so the mark is the area behind them. The instrument lane and the Premium and LE captive ball would be here too, and I could not see them."},
 ins_bass:{n:"Bass insert",c:1,s:[C(142,735,22)],a:[142,735]},
 ins_guitar:{n:"Guitar insert",c:1,s:[C(167,711,22)],a:[167,711]},
 ins_sticks:{n:"Drumsticks insert",c:1,s:[C(190,686,22)],a:[190,686]},
 pops:{n:"Pop bumpers",c:0,s:[C(85,480,40),C(105,595,40),C(198,505,36)],a:[85,480],x:"I read the two cog-topped caps as bumpers. The third is a guess, based on a white base showing under the dice housing. The rulesheet does not say how many there are."},
 clock_ins:{n:"Clock insert",c:1,s:[C(187,599,24)],a:[187,599],x:"A printed drum with a clock face. The rulesheet does not mention it, so its link to the Drum Clock is my reading."},
 drum:{n:"Drum Clock",c:1,s:[E(108,385,62,75)],a:[108,400],x:"The lit clock on the drum, on the Premium and LE. The rulesheet shows the Drum Clock on the display and does not mention this toy, so the link is my reading.",v:{pro:{s:[]}}},
 records:{n:"Records",c:1,s:[C(155,500,20),C(197,306,20),C(267,306,20),C(416,329,20),C(418,519,20),C(531,411,20)],a:[267,306],x:"The six vinyl records. Six matches the rulesheet's six record shots."},
 combos:{n:"1-2-3 inserts",c:1,s:[C(176,566,14),C(166,530,14),C(243,360,14),C(220,335,14),C(282,363,14),C(274,335,14),C(369,462,14),C(335,452,14),C(403,387,14),C(411,356,14),C(405,550,14),C(522,440,14)],a:[282,363]},
 rush:{n:"RUSH inserts",c:1,s:[B([[478,636],[480,740]],40)],a:[478,690],x:"Printed R, U, S and H. They point at the wall beside them. I could not pick out the standups themselves, so this marks the inserts."},
 lite_t:{n:"Lite and Lock standups",c:0,s:[C(422,431,14),C(481,462,14)],a:[422,431],x:"Two small targets either side of the right ramp, each with a Lite Lock insert in front. The rulesheet says these targets are near the right ramp. Which one is Lite and which is Lock I cannot say."},
 lite_ins:{n:"Lite Lock inserts",c:1,s:[C(407,459,14),C(471,493,14),C(393,583,18)],a:[393,583]},
 mb_ins:{n:"Multiball insert",c:1,s:[C(515,475,18)],a:[515,475]},
 eb_upper:{n:"Extra Ball insert (upper scoop)",c:1,s:[C(379,508,20)],a:[379,508]},
 eb_under:{n:"Extra Ball arrow (under flipper)",c:1,s:[C(405,632,20)],a:[405,632]},
 solo_ins:{n:"Drum Solo arrow",c:1,s:[C(450,603,20)],a:[450,603]},
 mystery:{n:"Mystery insert",c:1,s:[R(229,597,75,110)],a:[266,650]},
 rtb_l:{n:"Left Roll the Bones lane",c:0,s:[C(94,848,15),B([[88,895],[88,975]],13)],a:[94,848],x:"The insert is printed Roll the Bones. The lane below is placed by eye."},
 rtb_r1:{n:"Inner right Roll the Bones lane",c:0,s:[C(455,826,15),B([[459,895],[459,960]],13)],a:[455,826],x:"The insert is printed Roll the Bones. The lane below is placed by eye."},
 rtb_r2:{n:"Outer right Roll the Bones lane",c:0,s:[C(496,821,15),B([[500,885],[500,950]],13)],a:[496,821],x:"The insert is printed Roll the Bones. The lane below is placed by eye. The clear ramp return crosses it."},
 out_l:{n:"Left outlane",c:0,s:[B([[34,930],[34,1010]],13)],a:[34,970],x:"Placed by the slot and the ball save insert above it."},
 out_r:{n:"Right outlane",c:0,s:[B([[546,925],[546,1000]],13)],a:[546,960],x:"Placed by the slot and the ball save insert above it."},
 save_l:{n:"Left ball save insert",c:1,s:[C(46,874,15)],a:[46,874]},
 save_r:{n:"Right ball save insert",c:1,s:[C(546,876,15)],a:[546,876]},
 slings:{n:"Slingshots",c:0,s:[E(125,945,32,55),E(415,945,32,55)],a:[125,945],x:"The rulesheet does not place them. These marks are where the red domes and the inlane guides sit."},
 m_sawyer:{n:"Tom Sawyer insert",c:1,s:[C(238,1053,18)],a:[238,1053]},
 m_working:{n:"Working Man insert",c:1,s:[C(196,968,18)],a:[196,968]},
 m_radio:{n:"The Spirit of Radio insert",c:1,s:[C(370,849,18)],a:[370,849]},
 m_money:{n:"The Big Money insert",c:1,s:[C(179,845,18)],a:[179,845]},
 m_villa:{n:"La Villa Strangiato insert",c:1,s:[C(314,1034,18)],a:[314,1034]},
 m_lime:{n:"Limelight insert",c:1,s:[C(355,977,18)],a:[355,977]},
 cyg1:{n:"Cygnus X-1 Book 1 insert",c:1,s:[C(225,875,20)],a:[225,875]},
 cyg2:{n:"Cygnus X-1 Book 2 insert",c:1,s:[C(319,891,20)],a:[319,891]},
 star:{n:"Center star insert",c:1,s:[C(274,957,42)],a:[274,957],x:"The large round insert. The rulesheet does not say what it shows. I only use it to mark 2112, as a reading."},
 plunger:{n:"Plunger lane",c:0,s:[B([[598,1080],[598,850]],12)],a:[598,960],x:"Placed from the photo. The rulesheet does not describe it."},
 flippers:{n:"Lower flippers",c:1,s:[B([[158,1079],[240,1134]],18),B([[398,1077],[318,1134]],18)],a:[198,1106]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var UPPER=["upper_scoop","side_ramp","side_loop"];
var RECS=["left_orbit","side_loop","dead_end","spinner_lane","right_ramp","right_orbit"];
var MAJOR=["left_orbit","side_loop","side_ramp","dead_end","tm","spinner_lane","right_ramp","right_orbit"];
var MODES=["m_sawyer","m_working","m_radio","m_money","m_villa","m_lime"];
var RTB=["rtb_l","rtb_r1","rtb_r2"];
var MAJNOTE="The rulesheet never lists its major shots, so this marks the main lanes.";
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["tm",["tm_lights",0,"alt"]],b:"<p>Advance your Time Machine 100 years past 2012 to qualify the 2112 wizard mode. Each 10 years lets the Time Machine collect an upgrade.</p>"},
 {t:"Time Machine",h:["tm",["tm_ins",0,"alt"]],b:"<p>This center ramp starts planet modes, Time Machine multiballs, Combo Jackpots, Far Cry Super Jackpots and the wizard modes.</p><p>On the rulesheet's terms: red lit starts a planet mode, green lit a multiball or upgrade, yellow lit a Combo Jackpot.</p>"},
 {t:"Six record shots",h:["records"].concat(alt(RECS)),b:"<p>Six shots carry a record: left orbit, side loop, dead end, spinner lane, right ramp and right orbit. Collect flashing records to qualify a planet mode.</p>"+UNK("The rulesheet says there are six record shots but not which ones. I took them from the record inserts in the photo.")},
 {t:"Lower flipper shots",h:["left_orbit","left_scoop","dead_end","tm","spinner_lane","right_ramp","right_orbit"],b:"<p>From left to right in the photo: left orbit, left scoop, dead end, Time Machine, spinner lane, right ramp, right orbit.</p>"+UNK("The rulesheet has no layout text. The 1-2-3 inserts on each lane fit its combo table, which supports the lanes, but clear ramps and wires hide most of the paths.")},
 {t:"Upper flipper shots",h:UPPER.concat(["upper_flip"]),b:"<p>The rulesheet's three upper flipper shots are the upper scoop, side ramp and side loop.</p><p>The side loop typically sends the ball slowly back to the upper flipper.</p>"+UNK("The side ramp and side loop both have a 2 and a 3. I placed them by where their arrows point, and they could be swapped.")},
 {t:"Scoops and dice housing",h:["upper_scoop","left_scoop",["mystery",0,"alt"],["eb_upper",0,"alt"]],b:"<p>Far Cry locks a ball in the top scoop, then at either scoop. Roll the Bones Mystery is collected at the left scoop.</p>"+UNK("I read both scoops as the two openings of the dice housing. The rulesheet does not say so.")},
 {t:"Drop targets and instruments",h:["drops","inst_std",["ins_bass",0,"alt"],["ins_guitar",0,"alt"],["ins_sticks",0,"alt"]],b:"<p>Complete the drops to collect the lit instrument. The standup behind them activates perks and cycles the lit instrument.</p><p>From left to right the inserts are bass, guitar and drumsticks.</p>"},
 {t:"RUSH and Lite Lock targets",h:["rush","lite_t",["lite_ins",0,"alt"]],b:"<p>RUSH standups lead to Bastille Day. Lite and Lock standups near the right ramp lead to Far Cry.</p>"},
 {t:"Pop bumpers and Drum Clock",h:["pops","drum",["clock_ins",0,"alt"]],b:"<p>Pop bumpers advance the Drum Clock, which starts at 5 pm. At 12 am the right orbit lights Headlong Flight.</p>"},
 {t:"Under the upper flipper",h:["under_flip",["solo_ins",0,"alt"],["eb_under",0,"alt"]],b:"<p>This shot collects a lit Drum Solo and may collect a lit extra ball. On default settings, shooting behind the upper flipper also gives another skill shot attempt.</p>"},
 {t:"Inlanes and outlanes",h:RTB.concat(["out_l","out_r",["save_l",0,"alt"],["save_r",0,"alt"]]),b:"<p>Three inlanes spell Roll the Bones: one left, two right. Each outlane has its own ball save insert.</p>"},
 {t:"Action button and diverter",h:["tm","side_ramp","right_ramp"],b:"<p>Unlit by the Weapon, the action button is red. Pressing it changes the position of the diverter between the two ramps.</p>"+UNK("The rulesheet says only \"the two ramps\", and I could not see the diverter, so these marks are the ramps that I think it means. Check it on a machine.")},
 {t:"Modes of play",h:[],b:"<p>Hold both flipper buttons during attract mode to open the menu.</p><ul><li><strong>Standard:</strong> the full rules in this guide.</li><li><strong>Competition:</strong> the same, with randomness removed.</li><li><strong>Challenge:</strong> play a Cygnus X-1 book or 2112, with separate high scores.</li><li><strong>DJ Mixer:</strong> not a game. It plays the music like a jukebox.</li></ul>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Upper flipper skill shots",h:[["upper_scoop",3],["side_ramp",2],["side_loop",1]],b:"<p>Any upper flipper shot scores a skill shot. The value starts at 750,000, adds 250,000 per skill shot and extends the ball save.</p><ul><li>Upper scoop: 3x</li><li>Side ramp: 2x</li><li>Side loop: 1x</li></ul><p>The numbers here are the multipliers.</p>"},
 {t:"Double it",h:["side_loop","upper_scoop","side_ramp"],b:"<p>Combo the side loop into the upper scoop or side ramp to double its value.</p>"},
 {t:"Losing and regaining it",h:["plunger","under_flip"],b:"<p>Skill shots are disabled if the ball hits the plunger lane switch after a weak plunge twice.</p><p>On default settings, shooting behind the upper flipper enables another attempt.</p>"}
]},
{g:"Layout and basics",id:"upgrades",title:"Time Machine upgrades",steps:[
 {t:"Earning years",h:["tm"],b:"<p>Years come from these sources:</p><ul><li>Any planet mode: +5, or +10 with 80M+ in total</li><li>Red Barchetta Super Jackpot: +2 (5 per attempt)</li><li>Subdivisions or Fly By Night Super Jackpot: +5 (5 per attempt)</li><li>Far Cry Super Jackpot: +5 (10 per attempt), or +10 if flawless, with no jackpots timed out</li><li>One Little Victory Super Jackpot: +2 (10 per attempt)</li><li>Headlong Flight Super Jackpot: +5 (10 per attempt)</li><li>3 Freewill Super Jackpots: +5 (10 per attempt)</li><li>All four Bastille Day targets: +2 (6 per game)</li><li>Combo Jackpot or Combo Super Jackpot: +1 (14 per game)</li><li>6x instrument bonus: +5, one time only</li><li>Topper mystery award: +5 (10 per game)</li></ul>"+UNK("The rulesheet's table says +2 for Bastille Day. Its Bastille Day section says +1.")},
 {t:"Upgrade list",h:["tm",["tm_lights",0,"alt"]],b:"<p>Every 10 years the Time Machine lights green to collect the next upgrade:</p><ul><li>2022: +1 ball and 10 seconds of ball save on Time Machine multiballs</li><li>2032: longer timers for the ball, not ball save</li><li>2042: +1 ball and 10 seconds of ball save on Far Cry</li><li>2052: easier RUSH targets for the ball (lit targets spot unlit targets)</li><li>2062: light extra ball</li><li>2072: +2 balls and 20 seconds of ball save on Time Machine multiballs</li><li>2082: Super Records for the ball (each shot adds 2 records)</li><li>2092: 2x Ramp Count-Up for the ball</li><li>2102: +1 ball and 10 seconds of ball save on all multiballs</li><li>2112: the 2112 wizard mode</li></ul>"},
 {t:"What upgrades also do",h:["tm"],b:"<p>Each upgrade permanently reduces the shots needed for the next Time Machine multiball by 1, and raises the jackpots of those modes.</p><p>The upgrades that last until the ball drains (2032, 2052, 2082 and 2092) can come back by reaching the next upgrade threshold, if the ball drained while they were active.</p>"}
]},
/* ====== PLANET MODES ====== */
{g:"Planet modes",id:"planets",title:"Records and starting modes",steps:[
 {t:"Light a mode",h:["records","tm"].concat(alt(RECS)),b:"<p>Collect any flashing record (+1 per mode) to qualify the Time Machine, then shoot the Time Machine to start one of six untimed modes. The solidly lit colored records decide which.</p>"},
 {t:"Choosing colors",h:["records","rush","inst_std"],b:"<p>The RUSH targets cycle uncollected record shots to other colors. The instrument lane cycles collected ones.</p><p>Apron card: use the left and right flipper buttons to choose your song.</p>"+UNK("The rulesheet says \"instrument lane\" here. I mark the area behind the drops.")},
 {t:"Boosting a mode",h:["records"],b:"<p>Records of the same color lock in when their mode starts, and score 2x during it. All 6 record shots on the same color give 3x scoring on all shots.</p><p>Each extra record collected before starting the mode boosts its scoring by 10%.</p>"},
 {t:"Rewards",h:["tm",["cyg2",0,"alt"]].concat(alt(MODES)),b:"<p>Any completed mode adds +5 years, or +10 if it totals more than 80M.</p><p>Winning all six lights Cygnus X-1 Book 2 at the Time Machine.</p>"},
 {t:"Rainbow records",h:MAJOR,b:"<p>Completing any mode earns a rainbow record. To place it, shoot any shot without one. It gives that shot a 2x multiplier for all purposes, and stays until the 2112 wizard mode.</p>"+UNK("This is the rule from code 1.10 onward. Older code behaved differently and lost them on draining. "+MAJNOTE)},
 {t:"Using the Weapon",h:["tm"],b:"<p>If you hold the unused album for the mode's song, hold the blue lit action button to spot lit mode shots. It sweeps left to right, or right to left, depending on the ramp diverter, and also takes shots that the sweep lights along the way.</p>"}
]},
{g:"Planet modes",id:"sawyer",title:"Tom Sawyer (cyan)",steps:[
 {t:"Phase 1: both orbits",h:["left_orbit","right_orbit",["m_sawyer",0,"alt"]],b:"<p>Clear all shots in a phase to light the next. Shots start at 2 million and add 250,000 per shot.</p><p>Album: Moving Pictures.</p>"},
 {t:"Phase 2: both ramps",h:["side_ramp","right_ramp"],b:"<p>Fail and restart, and you return to the phase you left, with all its shots lit.</p>"+UNK("The rulesheet says \"both ramps\". I read that as the side and right ramps. The Time Machine is also a ramp, so check this on a machine.")},
 {t:"Phase 3: all shots",h:MAJOR,b:"<p>Make all shots to finish.</p>"+UNK(MAJNOTE)}
]},
{g:"Planet modes",id:"working",title:"Working Man (orange)",steps:[
 {t:"Clock in",h:MAJOR.concat([["m_working",0,"alt"]]),b:"<p>Shots move the workday clock from 9am to 5pm. Any orange shot adds 10 minutes and relights all other orange shots. Shots start at 75,000 and add 25,000 per shot.</p><p>Album: Rush.</p>"+UNK(MAJNOTE)},
 {t:"Best shots",h:["left_orbit","side_loop","side_ramp"],b:"<p>Left orbit, side loop and side ramp add 20 minutes and score 3x the shot value.</p>"},
 {t:"Random events",h:[],b:"<p>Events worth 1.5M plus 500K per event land at 9:15am, 10:00am, 11:00am, 12:00pm, 1:00pm, 2:00pm, 2:45pm, 3:30pm and 4:15pm. They cannot be multiplied.</p>"},
 {t:"Clock out",h:["left_orbit"],b:"<p>Once it is 5pm, the left orbit ends the mode.</p>"}
]},
{g:"Planet modes",id:"radio",title:"The Spirit of Radio (blue)",steps:[
 {t:"Build the jackpots",h:MAJOR.concat(["spinner",["m_radio",0,"alt"]]),b:"<p>All shots are lit to score points and light the radio jackpot based on their values. Each can be made up to 5 times.</p><p>Shots start at 1M. Each spin adds 2000 to them, up to 4M.</p><p>Album: Permanent Waves.</p>"+UNK(MAJNOTE)},
 {t:"Cash out",h:["dead_end"],b:"<p>Cash radio jackpots at the dead end. Collect 5, individually or all at once, to win.</p>"}
]},
{g:"Planet modes",id:"money",title:"The Big Money (pink)",steps:[
 {t:"Three phases",h:MAJOR.concat([["m_money",0,"alt"]]),b:"<p>Each phase takes one shot more than the last to light Big Money. The first phase takes three.</p><p>Shots start at 1M and add 150K per shot or multiplier increase.</p><p>Album: Power Windows.</p>"+UNK(MAJNOTE)},
 {t:"Collect or multiply",h:["tm"],b:"<p>When lit, collect Big Money at the Time Machine, or keep hitting shots to multiply it. Those shots blink slower than other lit shots, and are the ones you chose while lighting Big Money.</p><p>The multiplier carries through the mode. With perfect play the last jackpot is 3 + 4 + 5 + 1x = 13x. Collect the third Big Money to win.</p>"}
]},
{g:"Planet modes",id:"villa",title:"La Villa Strangiato (purple)",steps:[
 {t:"Combo mode",h:[["m_villa",0,"alt"]],b:"<p>One shot is lit at a time, through the song's twelve movements. Combo into the next shot within 5 seconds to multiply it by the combo streak length. Shots start at 2M and add 250K per shot.</p><p>Album: Hemispheres.</p>"},
 {t:"Shots 1 to 4",h:[["right_ramp",1],["dead_end",3],["left_orbit",4],["spinner_lane",4]],b:"<ol><li>Right ramp</li><li>Right ramp</li><li>Dead end</li><li>Left orbit or spinner</li></ol>"},
 {t:"Shots 5 to 8",h:[["side_ramp",5],["upper_scoop",5],["spinner_lane",6],["side_loop",7]].concat(alt(["side_ramp","upper_scoop"])),b:"<ol start=\"5\"><li>Side ramp or side scoop</li><li>Spinner</li><li>Side loop</li><li>Any upper flipper shot</li></ol><p>After the side loop is made, shoot it repeatedly to spot the next four shots.</p>"},
 {t:"Shots 9 to 12",h:[["tm",9],["side_ramp",10],["left_orbit",11],["upper_scoop",12]],b:"<ol start=\"9\"><li>Time Machine</li><li>Side ramp</li><li>Left orbit</li><li>Side scoop</li></ol>"+UNK("I read \"side scoop\" as the upper scoop.")}
]},
{g:"Planet modes",id:"limelight",title:"Limelight (green)",steps:[
 {t:"Fame",h:MAJOR.concat([["m_lime",0,"alt"]]),b:"<p>Any shot scores, adds 5% fame and starts a 15 second Fame Timer. The timer resets if you make a shot with less than 5 seconds left.</p><p>Faster blinking shots, cycling between left, center and right, are worth 3x and 10% fame.</p><p>Shots start at 250K. The increment starts at 150K, and also grows by 50K.</p><p>Album: Moving Pictures.</p>"+UNK(MAJNOTE)},
 {t:"Timer runs out",h:["tm"],b:"<p>Shoot the Time Machine to relight the arrows and increase their value.</p>"},
 {t:"Escape the Fame",h:["tm"],b:"<p>At 100% fame, the Time Machine lights to Escape The Fame and complete the mode.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"mbrules",title:"Multiball rules",steps:[
 {t:"The six multiballs",h:["tm","upper_scoop","right_orbit","inst_std"],b:"<p>Multiballs can start during planet modes, but modes cannot start during multiball. Only one multiball runs at a time, except Headlong Flight, which can start at any time.</p><p>Play all six in a game to qualify Cygnus X-1 Book 1 at the Time Machine.</p>"}
]},
{g:"Multiballs",id:"tmmb",title:"Time Machine multiballs",steps:[
 {t:"Power it up",h:["tm",["tm_lights",0,"alt"]],b:"<p>Shoot the ramp through the Time Machine portal 3 times, +6 per multiball, -1 per decade. Then shoot it once more to start the lit multiball with 2 balls. Years can add more balls.</p>"},
 {t:"Pick one",h:["dead_end","tm"],b:"<p>The dead end changes which multiball is lit. The TIME MACHINE flasher shows it:</p><ul><li>Red Barchetta: normal blink</li><li>Subdivisions: fast blink</li><li>Fly By Night: slow pulse</li></ul>"},
 {t:"Runway lights",ed:"premium",h:["tm"],b:"<p>On the Premium and LE, the ramp runway lights also show it:</p><ul><li>Red Barchetta: red lights on the Time Machine, white lights off</li><li>Subdivisions: half on and half off, alternating</li><li>Fly By Night: lights rove upward toward the Time Machine</li></ul>"},
 {t:"Red Barchetta (red)",h:["pops","tm"],b:"<p>All switches and jackpots boost the RPMs. Once they redline, hit enough bumpers for a Super Jackpot worth the total of this gear's jackpots, +2 years, and the next gear with higher scoring. Victory laps at gear 6.</p><p>Jackpots start at 750k + 250k per decade. Album: Moving Pictures.</p>"+UNK("The rulesheet does not list the jackpot shots.")},
 {t:"Subdivisions (yellow)",h:["tm","spinner_lane","dead_end"],b:"<p>Shoot the Time Machine to light the spinner and dead end for jackpots. Any jackpot lights the next outermost shot. Light every shot for a Super Jackpot at the Time Machine worth the jackpot total, +5 years.</p><p>Faster flashing shots reach the Super sooner. Jackpots start at 1.5M + 500k per decade. Album: Signals.</p>"},
 {t:"Fly By Night (green)",h:MAJOR,b:"<p>Dim the playfield lights by shooting jackpots and hitting switches. Flashing red shots are jackpots, and rapidly flashing ones are double jackpots.</p><p>Once dimmed, a strobing blue shot is a Super Jackpot worth the jackpot total, +5 years. Jackpots add 50k, and supers add 500k. Then repeat, with more shots needed.</p><p>Jackpots start at 500k + 250k per decade. Album: Fly by Night.</p>"+UNK(MAJNOTE)}
]},
{g:"Multiballs",id:"farcry",title:"Far Cry and One Little Victory",steps:[
 {t:"Light the locks",h:["lite_t",["lite_ins",0,"alt"],"right_ramp"],b:"<p>Shoot the Lite Lock standups near the right ramp to light the lock at the top scoop. The first time takes only the targets. The second takes the targets and the ramp, and it gets harder each time.</p>"+UNK("The rulesheet's overview says targets, then green lit right ramp, without this first-time exception.")},
 {t:"Lock two balls",h:["upper_scoop","left_scoop"],b:"<p>Lock at the top scoop. The second lock can go at the top scoop, which starts with higher jackpots, or the bottom scoop.</p><p>It starts with 2 balls. 30 years makes it 3. The Weapon and mystery can add balls.</p>"},
 {t:"Colored jackpots",h:MAJOR,b:"<p>All major shots light as timed jackpots: blue 1x, green 2x, yellow 3x, orange 4x, red 5x. Higher multipliers time out faster.</p><p>Any jackpot raises the base value, which starts at 750k, and relights two shots with random colors. If all time out, the base resets and all shots relight.</p>"+UNK(MAJNOTE)},
 {t:"Super Jackpot",h:["tm"],b:"<p>Score 15 jackpots in one attempt, then shoot the Time Machine for a Super Jackpot worth the jackpots' total, +5 years. It also starts One Little Victory Laps.</p>"},
 {t:"One Little Victory Laps",h:UPPER.concat(["upper_flip"]),b:"<p>6-ball multiball begins, with the upper flipper shots lit for victory laps. Collect one to light a Super Jackpot at a roving shot. Its multiplier grows for each unique shot it has been collected at. Each Super takes one more victory jackpot to light.</p><p>The Weapon adds balls if the Vapor Trails album is qualified.</p>"}
]},
{g:"Multiballs",id:"headlong",title:"Headlong Flight",steps:[
 {t:"Start it",h:["pops","right_orbit",["mb_ins",0,"alt"],["clock_ins",0,"alt"],"drum"],b:"<p>Advance the Drum Clock to midnight, then shoot the right orbit. Once lit it can start at any time, stacked with other multiballs.</p><p>The Weapon adds balls if the Clockwork Angels album is qualified.</p>"},
 {t:"Clock jackpots",h:["side_loop","side_ramp"],b:"<p>Jackpots at the side loop and side ramp score 1 million x the clock hour, which starts at 12 and counts back 1 hour every few seconds.</p>"},
 {t:"Super Jackpot",h:[["side_loop",1],["side_ramp",2]],b:"<p>Combo the side loop into the side ramp, whether or not the loop was collected, for a Super Jackpot worth 3x the jackpot value, +5 years.</p>"},
 {t:"Reset at the right ramp",h:["right_ramp"],b:"<p>The right ramp is also a jackpot. It relights both side shots and sets the clock back to 12.</p>"},
 {t:"Mega and Ultra",h:["side_loop","side_ramp","right_ramp"],b:"<p>Hit both side shots and the right ramp lights Mega or Ultra instead, based on the sum of those two shots. Mega means no Super was scored, and Ultra means one was. It also scores the clock hour x 2 million, or x 4 million for Ultra.</p>"}
]},
{g:"Multiballs",id:"freewill",title:"Freewill",steps:[
 {t:"Start it",h:["drops","inst_std",["ins_bass",0,"alt"],["ins_guitar",0,"alt"],["ins_sticks",0,"alt"]],b:"<p>Collect all three instruments by completing the drop bank, then shoot the instrument lane. The apron card says to shoot the Freewill target behind the bank.</p><p>The Weapon adds balls if the Permanent Waves album is qualified.</p>"},
 {t:"Opening lock",ed:"premium",h:["inst_std"],b:"<p>On the Premium and LE, the mode starts by locking the ball at the instrument lane. Repeatedly shooting the captive ball raises the base jackpots. After 20 seconds, multiball starts.</p>"+UNK("I could not see the captive ball. The mark is the area behind the drops.")},
 {t:"Choose your jackpot",h:MAJOR,b:"<p>Choose a jackpot shot. Hitting it turns it into a Super Jackpot. Collect the Super and all shots relight, except that one.</p><p>Every 3 unique Supers add +5 years. Jackpots start at 750,000, add 750,000 per Freewill played, and each boosts the next by 250,000.</p>"+UNK(MAJNOTE)},
 {t:"2x and add-a-ball",h:["inst_std"],b:"<p>During the multiball, shoot the standup twice, +1 per lock, to lock a ball for 20 seconds. While locked, a ball is added and jackpots score double. You can also keep hitting the standup or captive ball to raise jackpots.</p><p>After the release, more standup shots relight the lock. Max 3 add-a-balls per Freewill.</p>"}
]},
/* ====== OTHER ====== */
{g:"Other scoring",id:"instruments",title:"Instruments",steps:[
 {t:"Collect",h:["drops",["ins_bass",0,"alt"],["ins_guitar",0,"alt"],["ins_sticks",0,"alt"]],b:"<p>The flashing instrument turns solid on the first drop target. All drops down collects it, resets the drops and turns the major shots white for the instrument bonus.</p><p>The standup cycles the flashing instrument before the drops are complete.</p>"},
 {t:"Collected perks",h:["ins_bass","ins_guitar","ins_sticks"],b:"<p>These reset at end of ball unless held:</p><ul><li>Bass: +25k to combo values and Combo Jackpot</li><li>Guitar: +5k to spinner hits</li><li>Drumsticks: +5k to bumper hits, advances two bumpers by +1 minute, qualifies Drum Solo</li></ul>"},
 {t:"Activate",h:["inst_std"],b:"<p>The standup activates the current instrument and any others collected but not activated, for 60 seconds. The timer resets on a new activation.</p><ul><li>Bass: combos score 2x and can be collected in multiball, but on default settings do not qualify albums there</li><li>Guitar: +1x for spinner shots</li><li>Drumsticks: bumper hits count 2x minutes, score 2x and advance the clock during multiball ball save. Drum Bonus doubles.</li></ul>"},
 {t:"Instrument bonus",h:MAJOR,b:"<p>Each instrument collected lights all major shots for a bonus based on points from its perk, with +1x each time scored. A 6x bonus adds +5 years, one time only.</p>"+UNK(MAJNOTE)}
]},
{g:"Other scoring",id:"drum",title:"Drum Clock and bonuses",steps:[
 {t:"Advance the clock",h:["pops","drum",["clock_ins",0,"alt"]],b:"<p>In single ball play, or after multiball ball save ends, each bumper hit advances the clock from 5 pm by 1 minute.</p>"},
 {t:"Upgrade bumpers",h:["under_flip","right_orbit","pops"],b:"<p>Under the upper flipper advances two bumpers by +1 minute. The right orbit advances one. Values carry across balls until the first Headlong Flight, then reset to 1 minute.</p>"},
 {t:"Drum Solo",h:["under_flip",["solo_ins",0,"alt"],"pops"],b:"<p>Collecting drumsticks lights Drum Solo behind the upper flipper, which temporarily doubles all minutes. Apron card: it is a timed scoring round at the pop bumpers. It always unlights at end of ball.</p>"},
 {t:"Drum Bonus",h:["left_orbit","rtb_r1","rtb_r2"],b:"<p>Each bumper hit adds to Drum Bonus. It lights at the left orbit for 5 seconds when a ball rolls over either right inlane, or permanently after advancing a full hour.</p>"},
 {t:"Clock Bonus",h:["right_orbit","rtb_l"],b:"<p>Every hour lights Clock Bonus at the right orbit, for 1M x the clock hour. While it is lit, the left inlane temporarily lights the right orbit for 2x.</p>"}
]},
{g:"Other scoring",id:"loops",title:"Side loop and Bonus X",steps:[
 {t:"Repeat loops",h:["side_loop"],b:"<p>If Combo Super Jackpot is lit, repeat side loops while its arrow flashes white score 500k + 100k per shot, up to 1M. Shot multipliers apply, up to 6M per shot with 2x on the loop.</p>"},
 {t:"Earn Bonus X",h:["spinner","spinner_lane","side_loop"],b:"<p>Enough spins light Bonus X at the side loop.</p><ul><li>2x: 100 spins</li><li>3x: 200</li><li>4x: 400</li><li>5x: 700</li></ul><p>The increase grows by 100 each time. Max 25x. The guitar or a shot multiplier on the spinner doubles the count.</p>"}
]},
{g:"Other scoring",id:"combos",title:"Combo Jackpot and albums",steps:[
 {t:"How it works",h:["combos","tm"],b:"<p>Shoot the flashing 1-2-3 shots in order to light the Combo Jackpot at the Time Machine. Collecting it also collects a unique album.</p><p>Each shot scores the combo value x its number, +2x if quick and +2x with bass active. Rainbow records multiply this. Draining resets the jackpot value and disables the jackpots.</p>"},
 {t:"Rush",h:[["left_orbit",1],["side_loop",2],["side_ramp",3]],b:"<p>Related song: Working Man.</p>"},
 {t:"Fly by Night",h:[["left_orbit",1],["side_ramp",2],["dead_end",3]],b:"<p>Related song: Fly By Night.</p>"},
 {t:"Snakes and Arrows",h:[["dead_end",1],["left_orbit",2],["side_loop",3]],b:"<p>Related song: Far Cry.</p>"},
 {t:"Vapor Trails",h:[["dead_end",1],["left_orbit",2],["side_ramp",3]],b:"<p>Related song: One Little Victory.</p>"},
 {t:"Power Windows",h:[["spinner_lane",1],["side_loop",2]],b:"<p>Spinner lane, then side loop twice. Related song: The Big Money.</p>"},
 {t:"Permanent Waves",h:[["spinner_lane",1],["side_loop",2],["side_ramp",3]],b:"<p>Related songs: Freewill and The Spirit of Radio.</p>"},
 {t:"Clockwork Angels",h:[["spinner_lane",1],["side_ramp",2],["dead_end",3]],b:"<p>Related song: Headlong Flight.</p>"},
 {t:"Moving Pictures",h:[["right_ramp",1],["spinner_lane",2],["side_loop",3]],b:"<p>Related songs: Limelight, Red Barchetta and Tom Sawyer.</p>"},
 {t:"Signals",h:[["right_ramp",1],["spinner_lane",2],["side_ramp",3]],b:"<p>Related song: Subdivisions.</p>"},
 {t:"Hemispheres",h:[["right_ramp",1],["right_orbit",2]],b:"<p>Two shots only. Related song: La Villa Strangiato.</p>"},
 {t:"Combo Super Jackpot",h:["side_ramp","tm"],b:"<p>After the Combo Jackpot, the side ramp lights for a Combo Super Jackpot worth 2x. The number of 1-2-3 shots scored sets how long it stays lit.</p><p>Either jackpot awards +1 year, up to 14 per game. Completing combos while the jackpot is lit raises its multiplier by +1x.</p>"},
 {t:"Album rewards",h:["eb_upper","eb_under"],b:"<p>Five albums light extra ball. All ten add +1x to further Combo Jackpots, and let albums be collected again.</p>"}
]},
{g:"Other scoring",id:"weapon",title:"The Weapon",steps:[
 {t:"Use it",h:[],b:"<p>If you have the album for an active mode, the action button lights. Hold it for three seconds:</p><ul><li>Flashing blue (planet mode): collects everything lit, subject to shot multipliers</li><li>Flashing green (multiball): adds a ball</li></ul><p>If both apply, Add-A-Ball takes priority. An album with several songs favors the active song, and works once until you cycle through all 10 albums again.</p>"},
 {t:"Diverter direction",h:["tm"],b:"<p>Otherwise the button is red, and pressing it moves the diverter between the ramps. Facing left, the Weapon spots shots from left to right. Facing right, the reverse. It starts each game facing left.</p>"+UNK("I could not see the diverter. The mark is only a reference point.")}
]},
{g:"Other scoring",id:"ramps",title:"Ramp Count-Up",steps:[
 {t:"Hold values",h:["side_ramp","right_ramp"],b:"<p>While no wizard mode runs, ramp shots hold features to the next ball:</p><ul><li>5: guitar value</li><li>8: light extra ball</li><li>10: combo value</li><li>15: bumper value</li><li>20: ramp value</li><li>25: instrument bonus value</li><li>30: records</li><li>35: Bonus X</li></ul>"+UNK("The rulesheet says \"either ramp\", which I read as the side and right ramps.")},
 {t:"Faster counts",h:[["left_orbit",1],["side_ramp",2]],b:"<p>Left orbit into side ramp as a combo counts +2 ramps. From 2092, ramps count double for the rest of the ball.</p>"}
]},
{g:"Other scoring",id:"bastille",title:"RUSH and Bastille Day",steps:[
 {t:"Start it",h:["rush","right_ramp"],b:"<p>Complete the RUSH standups, then shoot the right ramp. Each start needs more completions next time, shown as a red fraction on the display.</p>"},
 {t:"Hurry-ups",h:["rush","right_ramp"],b:"<p>Hurry-ups start at 2 million each, plus a little per earlier hit on that letter. They are additive, so each one collected adds to the next. The right ramp adds 2 million.</p><p>Score all four to add a year and raise the next round's values by 2 million.</p>"+UNK("Here the rulesheet says +1 year. Its upgrades table says +2.")},
 {t:"Ball save",h:["rush","save_l","save_r"],b:"<p>Two RUSH completions light a ball save at either outlane, changed with the flippers.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Roll the Bones Mystery",steps:[
 {t:"Collect it",h:RTB.concat(["left_scoop",["mystery",0,"alt"]]),b:"<p>Complete the three inlanes, then shoot the left scoop. It awards an add-a-ball once per multiball and various points.</p>"},
 {t:"Awards",h:["left_scoop"],b:"<p>In competition order:</p><ul><li>Activate Instruments</li><li>2.5M</li><li>Add Bonus X</li><li>Bump Spinner Value</li><li>Bump Pop Bumper Value</li><li>Bump Combo Value</li><li>Spot 3 Records</li><li>Light Ball Save</li><li>Light Far Cry Lock</li><li>Spot 3 Ramp Shots</li><li>5M</li><li>Advance Drum Clock +3 hours</li><li>10M</li></ul><p>Bump Value awards and 10M are left out in standard play. Context awards come first, and no award repeats within the last two.</p>"},
 {t:"Topper mystery",h:["left_scoop"],b:"<p>If the topper is enabled, an award can be: 1M to 12M, +5 years (or +5 Time Machine hits if maxed), 60 seconds of Frenzy, or an instant extra ball.</p><p>In wizard modes, Mystery gives credit for a required shot.</p>"}
]},
{g:"Other scoring",id:"extra",title:"Extra balls and bonus",steps:[
 {t:"Collecting extra balls",h:["under_flip","upper_scoop",["eb_upper",0,"alt"],["eb_under",0,"alt"],"slings"],b:"<p>Lit extra balls are at the under-flipper shot and upper scoop. The slingshots change which is lit. Two lit means both shots collect.</p><p>Disabled or capped, they score 10M.</p>"},
 {t:"Earning extra balls",h:["side_ramp","right_ramp","tm"],b:"<p>Sources:</p><ul><li>A percentage-based number of ramp shots (starts at 8, minimum 4)</li><li>5 albums</li><li>Year 2062</li><li>Topper mystery award</li></ul>"},
 {t:"End-of-ball bonus",h:[],b:"<p>Each has a this-ball part and a permanent part:</p><ul><li>Instruments: 100K x activations, 100K x complete sets</li><li>Drum Clock: 5K x minutes, 25% of Drum Solo points</li><li>Records: 100K x records, plus a matching bonus per mode start (2 colors 100K, 3 200K, 4 400K, 5 800K, 6 1.6M)</li><li>Time Machine: 100K x single ball shots, 1M x modes completed</li><li>Combos: 100K x combo shots, 500K x albums</li><li>RUSH: 250K x completions, 2.5M x Bastille Day wins</li></ul><p>With no other bonus, you get a Bozo bonus of 21,120.</p>"}
]},
/* ====== WIZARD ====== */
{g:"Wizard modes",id:"voyage",title:"Cygnus X-1 Book 1: The Voyage",steps:[
 {t:"Start",h:["tm",["cyg1",0,"alt"]],b:"<p>Start all six multiballs to light it at the Time Machine. You begin with one ball and steer a ship across three planets. Each new planet, 50% of a planet's shots, or a mystery add-a-ball adds a ball.</p>"},
 {t:"Jackpot values",h:[],b:"<p>Values come from your multiballs:</p><ul><li>Base (victory laps): 1M + 1.5M x Headlong Super and Mega Jackpots</li><li>Yellow: 1M + 1.5M x Freewill Supers</li><li>Blue: 1M + 2M x Far Cry Supers + 3M x One Little Victory Supers</li><li>Purple: 1M + 1M x Red Barchetta + 2M x Fly By Night + 3M x Subdivisions Supers</li></ul>"},
 {t:"Yellow Planet",h:["drops","inst_std"],b:"<p>Start at the instrument targets. Make 10 shots for 10% fuel each to escape. The instrument lane lights more fuel shots and raises their value.</p>"},
 {t:"Blue Planet",h:["upper_scoop","left_scoop"],b:"<p>Start at either scoop. Flashing blue shots, which move with slingshot or bumper hits, give 5% progress. Red shots force more shots. Each shot without locking on adds +1x and +5%, and a red shot resets that. A scoop locks on the navigation and relights all shots. Reach 100%.</p>"},
 {t:"Purple Planet",h:["tm"],b:"<p>Start at the Time Machine. Bright lights hide the lit shots. Shoot the Time Machine to briefly reveal them and add one. Make 10 lit shots.</p>"},
 {t:"Escape the black hole",h:["tm"],b:"<p>Lock the ball at the Time Machine, then knock it out with the second ball to win. With more than 1 ball left, victory laps run until one ball remains. All shots score the jackpot value, +1x per unique shot, and the Time Machine relights them.</p>"}
]},
{g:"Wizard modes",id:"hemi",title:"Cygnus X-1 Book 2: Hemispheres",steps:[
 {t:"Start",h:["tm",["cyg2",0,"alt"]],b:"<p>Complete all six planet modes to light it at the Time Machine. Jackpots come from the points in each mode (up to 200M), in the order played. Shot values get a cumulative boost.</p><p>Each phase lasts 120 seconds, and all lit shots must be made. A drain costs 10 seconds. A mystery award adds 15.</p>"},
 {t:"Phases 1 and 2",h:["flippers"],b:"<p><strong>Apollo:</strong> the left button runs all flippers, and the right moves the lit shots.</p><p><strong>Dionysus:</strong> the left button moves the lit shots, and the right runs all flippers.</p>"},
 {t:"Phases 3 to 5",h:["flippers"],b:"<p><strong>Armageddon:</strong> the buttons are reversed.</p><p><strong>Cygnus:</strong> holding a button lowers its flipper, and releasing flips it.</p><p><strong>The Sphere:</strong> holding left lowers the right flippers, and holding right lowers the left flipper, and the reverse.</p>"},
 {t:"Finish",h:["tm"],b:"<p>After all five phases, one Time Machine shot scores the Super Jackpot, worth the last completed planet mode's total, and ends the mode.</p>"}
]},
{g:"Wizard modes",id:"w2112",title:"2112",steps:[
 {t:"Start",h:["tm",["star",0,"alt"]],b:"<p>With 100 years collected, and both Cygnus books played, the next Time Machine shot starts 2112.</p>"},
 {t:"Overture",h:MAJOR,b:"<p>For 3 minutes, 6-ball multiball and ball save run. Each shot scores and adds to the phase jackpots. Every 30 seconds locks in the jackpot for that part of the song, while the current jackpot keeps building.</p>"+UNK(MAJNOTE)},
 {t:"Six phases",h:MAJOR,b:"<p>Making a shot unlights it until the phase ends, or all shots are made and relight. Add-a-ball / advance shot counts:</p><ul><li>The Temples of Syrinx: 2:13, yellow, 2 / 4</li><li>Discovery: 3:19, purple, 3 / 6</li><li>Presentation: 3:35, orange, 4 / 8</li><li>Oracle - The Dream: 1:53, blue, 5 / 10</li><li>Soliloquy: 2:12, red, 6 / 12</li><li>Grand Finale: 2:11, green, 7 / 14</li></ul><p>It ends if time runs out in a phase, or all balls drain.</p>"}
]}
];

/* ---------- playfield features (coordinates in the 640x1320 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var P=function(s,a){return{premium:{s:s,a:a}}};
var F={
 megatron:{n:"Megatron",c:1,s:[R(370,55,130,95)],a:[435,100]},
 scoop:{n:"Megatron's scoop",c:0,s:[R(382,160,55,120)],a:[410,220],x:"The rulesheet puts it behind the drop targets. I read it as the opening below the model. Estimated."},
 drops:{n:"Megatron drop targets",c:1,s:[B([[352,320],[440,328]],26)],a:[396,324],x:"The three targets above the \"Clear drop targets\" lettering."},
 mega_shot:{n:"Megatron shot",c:0,s:[B([[386,445],[386,395],[396,345]],22)],a:[386,440],x:"Placed from the arrow above the Mission Start and Final Blow inserts. Estimated."},
 cannon:{n:"Megatron's gun cannon",c:1,s:[R(318,40,42,205)],a:[340,140],x:"The dark barrel beside the model. The rulesheet only gives it a working cannon on Premium and LE."},
 optimus:{n:"Optimus",c:1,s:[E(185,185,72,90)],a:[185,190]},
 opt_shot:{n:"Optimus shot",c:0,s:[B([[238,315],[225,285],[205,268]],22)],a:[236,310],x:"Placed from the large arrow below the model. Estimated."},
 vuk:{n:"Center VUK",c:0,s:[C(255,170,20),B([[266,295],[262,240],[257,195]],18)],a:[262,240],x:"Placed from the LOCK insert and the arrow below it, leading to the dark hole beside Optimus. Estimated."},
 spinner:{n:"Center spinner",c:0,s:[B([[328,365],[325,300],[320,225]],24)],a:[327,355],x:"The rulesheet says inserts light under the spinner, so I placed it above the ladder of lit bars. The spinner itself is not visible."},
 energon:{n:"Energon inserts",c:1,s:[B([[330,250],[318,300]],24)],a:[324,275],x:"The bars that fill as the spinner turns. That these are the rulesheet's inserts is my reading."},
 left_ramp:{n:"Left ramp",c:0,s:[B([[190,630],[172,570],[150,510],[130,470]],32)],a:[188,622],x:"Placed from the arrow above the Autobot Hurry-Up insert, which the rulesheet lights at this ramp. Estimated."},
 captive:{n:"Captive ball",c:1,s:[C(197,521,30)],a:[197,521],x:"Two steel balls are visible here. Only the rulesheet's captive ball is highlighted as a shot, and the small arrow below points at it."},
 side_ramp:{n:"Side ramp",c:0,s:[B([[385,510],[300,455],[235,400],[190,360]],28)],a:[380,506],x:"Placed from the yellow trail with Combiner Part Collect and Super Jackpot, both of which the rulesheet lights here. Estimated."},
 bridge:{n:"Space bridge",c:0,s:[B([[385,585],[300,520],[222,472],[170,440]],26)],a:[380,581],x:"Placed from the blue trail with the Add-A-Ball, Extra Ball and Space Bridge inserts. Estimated."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[452,400],[470,340],[478,290],[525,160],[565,30]],38)],a:[452,395],x:"The large metal ramp, with the One Shall Fall insert at its entrance. Estimated."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[525,395],[545,300],[575,210],[555,110],[490,40]],22)],a:[525,390],x:"The lane past the Starscream Frenzy insert. Estimated."},
 left_orbit:{n:"Left orbit",c:0,s:[B([[150,690],[120,630],[78,550],[65,480],[48,340],[45,180],[90,60],[180,30]],22)],a:[148,684],x:"Placed from the arrow beside the Dinobot inserts. The path behind the wire ramps is a guess."},
 grimlock:{n:"Grimlock targets",c:0,s:[E(88,590,38,30)],a:[88,590],x:"The rulesheet says they gate the left orbit. Placed at the clear plastic on the Pro, where I could not see the targets themselves.",v:P([E(65,565,42,65)],[65,565])},
 upper_flipper:{n:"Upper flipper",c:1,s:[B([[510,520],[518,590]],18)],a:[514,555],x:"Clear on the Pro. The Soundwave model hides it on the Premium and LE photos.",v:{premium:{c:0}}},
 cassette:{n:"Cassette / Soundwave target",c:0,s:[C(510,650,18)],a:[510,650],x:"Placed from the Cassette Combo insert and the arrow pointing right. Treating these as one target is my reading."},
 bumper:{n:"Bumper",c:1,s:[C(505,742,42)],a:[505,742],x:"The rulesheet mentions one bumper, and this ring is the only one I can see."},
 techspecs:{n:"Tech spec standups",c:0,s:[C(172,298,13),C(297,290,13),C(372,270,13),C(443,278,13),C(490,387,13)],a:[297,290],x:"The small targets I could see near major shots. Others may be hidden."},
 inlane_l:{n:"Left inlane",c:0,s:[C(99,956,16)],a:[99,956],x:"Located from the lane guide. Estimated."},
 inlane_r:{n:"Right inlane",c:0,s:[C(486,956,16)],a:[486,956],x:"Located from the lane guide. Estimated."},
 outlane_l:{n:"Left outlane",c:0,s:[C(53,956,16)],a:[53,956],x:"Located from the lane guide and the Ball Save insert. Estimated."},
 outlane_r:{n:"Right outlane",c:0,s:[C(530,956,16)],a:[530,956],x:"Located from the lane guide and the insert above it. Estimated."},
 slings:{n:"Slingshots",c:0,s:[C(140,944,44),C(445,945,44)],a:[140,944],x:"Marked at the lit inserts on each plastic."},
 flippers:{n:"Flippers",c:1,s:[B([[182,1096],[258,1138]],20),B([[400,1096],[327,1140]],20)],a:[220,1117]},
 missions:{n:"Mission inserts",c:1,s:[R(238,830,110,125)],a:[293,890]},
 energ:{n:"Energized and Rusted inserts",c:1,s:[C(393,888,22),C(405,850,18)],a:[393,888]},
 combiners:{n:"Combiner grid",c:1,s:[C(312,678,62)],a:[312,678]},
 dino:{n:"Dinobot inserts",c:1,s:[C(145,755,15),C(175,760,20),C(198,735,15),C(190,790,15)],a:[175,760]},
 pf_x:{n:"Playfield X insert",c:1,s:[C(235,622,20)],a:[235,622]},
 doom:{n:"The Ultimate Doom insert",c:1,s:[R(262,760,62,40)],a:[293,780]},
 rescue:{n:"Rescue Optimus insert",c:1,s:[R(232,803,50,28)],a:[257,817]},
 mania:{n:"Tech Spec Mania insert",c:1,s:[R(306,803,50,28)],a:[331,817]}
};

/* ---------- content ---------- */
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Megatron",h:[["drops",1],["scoop",2],["megatron",0,"alt"],["mega_shot",0,"alt"]],b:'<p>Knock down the three drop targets, then shoot the scoop behind them to start missions. Final blows land here too.</p>'},
 {t:"Optimus",h:["optimus",["opt_shot",0,"alt"]],b:'<p>Shoot Optimus to light locks. In a mission with under 15 seconds left, it resets the timer once.</p>'},
 {t:"Center VUK",h:["vuk"],b:'<p>Locks balls for Transformers Multiball and starts Rescue Optimus and Dinobot Desertion when lit.</p>'},
 {t:"Center spinner",h:["spinner","energon"],b:'<p>Fills the Energon cube, and earned cubes qualify Stunt Loops.</p>'},
 {t:"Left ramp",h:["left_ramp"],b:'<p>Starts the Autobot Hurry-Up when lit, and is part of Cassette combos.</p>'},
 {t:"Captive ball",h:["captive","pf_x"],b:'<p>Lit hits add letters to BUMBLEBEE. It also matters during Solar Needle, add-a-ball and Stunt Loops.</p>'},
 {t:"Side ramp",h:["side_ramp",["upper_flipper",0,"alt"]],b:'<p>Earns Combiner parts and collects most super jackpots.</p>'},
 {t:"Space bridge",h:["bridge",["upper_flipper",0,"alt"]],b:'<p>Extra Ball, Mystery, add-a-ball and Combiner Multiball all light here. The rulesheet says a late flip from the upper flipper can hit it.</p>'},
 {t:"Right ramp",h:["right_ramp"],b:'<p>Lights for One Shall Fall.</p><p data-ed="premium">On this model it can also load Megatron\'s cannon.</p>'},
 {t:"Right orbit",h:["right_orbit"],b:'<p>Starts Starscream Frenzy when lit. During Golden Lagoon it scores 2x the spinner value per spin.</p>'},
 {t:"Left orbit and Grimlock",h:[["grimlock",1],["left_orbit",2],["dino",0,"alt"]],b:'<p>The Grimlock targets gate the left orbit. Hit them to light the orbit, which starts Dinobot Missions and collects Dino Jackpots.</p>'},
 {t:"Upper flipper",h:["upper_flipper"],b:'<p>A short plunge feeds it for skill shots. The game rewards backhands, and many shots can be hit from either flipper.</p>'},
 {t:"Cassette target",h:["cassette"],b:'<p>Starts Soundwave modes, scores Cassette combos and relights the left outlane ball save.</p>'+UNK("The rulesheet says both \"Cassette target\" and \"Soundwave target\". I treat them as one, which it does not state.")},
 {t:"Tech spec standups",h:["techspecs"],b:'<p>Standup targets near the major shots light those shots for Tech Specs.</p>'},
 {t:"Bumper",h:["bumper",["pf_x",0,"alt"]],b:'<p>Repeated hits light Mystery. When the captive ball is not lit, two hits relight the Playfield X insert.</p>'},
 {t:"Lanes",h:["inlane_l","inlane_r",["outlane_l",0,"alt"],["outlane_r",0,"alt"]],b:'<p>Lit inlanes build toward the Autobot Hurry-Up (left) and Starscream Frenzy (right). The left inlane also starts Cassette combos. The outlanes hold the ball save and Countdown to Extinction.</p>'},
 {t:"Megatron's cannon",ed:"premium",h:["cannon",["right_ramp",0,"alt"]],b:'<p>The right ramp can load the cannon, which fires the ball to a flipper. See Cannon Jackpot.</p>'}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shots",h:[["upper_flipper",1],["optimus",2],["side_ramp",3],["bridge",4]],b:'<p>Short plunge to the upper flipper, then hit any shot from it.</p><table><tr><th>Shot</th><th>Score</th><th>Ball save</th></tr><tr><td>Optimus / standup target</td><td>500K</td><td>+5 s</td></tr><tr><td>Side ramp</td><td>5M</td><td>+8 s</td></tr><tr><td>Space bridge</td><td>8M</td><td>+10 s</td></tr></table>'},
 {t:"Secret skill shot",h:[["left_orbit",1],["upper_flipper",2],["side_ramp",3],["bridge",3]],b:'<p>Short plunge to the lower right flipper and hit the left orbit where Grimlock is. Then make any of the three skill shots from the upper flipper. The side ramp or space bridge gives the top value, 15M.</p>'}
]},
/* ====== MISSIONS ====== */
{g:"Main modes",id:"missions",title:"Starting missions",steps:[
 {t:"Starting",h:[["drops",1],["scoop",2],["missions",0,"alt"]],b:'<p>Knock down the drop targets, then shoot the scoop to start the flashing mission. Change it with the flippers.</p><p>The first two missions in a game take one scoop shot, and the rest take three. Clearing all three drop targets counts as one shot, but will not start a mission.</p>'},
 {t:"Trickshot",h:["scoop","drops"],b:'<p>The drop targets only reset if you hit all three before shooting the scoop. Hit Megatron with only the center target down, or all of them up, for a 5M Trickshot.</p>'},
 {t:"Timer and final blow",h:["megatron",["optimus",0,"alt"]],b:'<p>Missions run 60 seconds. Make enough lit shots to light a final blow at Megatron. You complete the mission by making the shots in time, even without the final blow.</p><p>Below 15 seconds, Optimus resets the timer to 20 seconds, once per mode and only if final blow is not lit. Lighting final blow also adds time.</p>'},
 {t:"Final blow value",h:["megatron"],b:'<p>Worth a share of the score from the completed mission:</p><ul><li>Normal: 35%</li><li>Energized: 20%</li><li>Rusted: 50%</li></ul><p>Each shot to Megatron during the mission adds 5% and 1M. Completing it on the first try adds 10%.</p>'},
 {t:"What it earns",h:[["right_ramp",0,"alt"],["vuk",0,"alt"],["techspecs",0,"alt"]],b:'<p>A final blow puts a 2x multiplier on a random shot, active when a Tech Spec is lit there.</p><ul><li>Play two missions to light One Shall Fall at the right ramp.</li><li>Complete all five to light Rescue Optimus at the VUK.</li></ul><p>If you fail, your progress is saved for the next time that mission starts.</p>'},
 {t:"Energon and Cosmic Rust",h:["spinner","energon","energ"],b:'<p>The spinner fills the Energon cube. With a full cube, you choose at the next mission start whether to make it easier for less score.</p><p>Complete a mission without Energon and you can apply Cosmic Rust to the next, which is harder and scores more per shot.</p>'}
]},
{g:"Main modes",id:"mission-list",title:"The five missions",steps:[
 {t:"Autobot Run",h:[["spinner",1],["left_ramp",2],["right_orbit",3],["left_orbit",4],["side_ramp",5]],b:'<p>Two adjacent blue shots light at a time. Make five to light final blow. Quickly flashing shots score 3x, in the order shown.</p><ul><li><b>Energized:</b> any five blue arrows or targets.</li><li><b>Rusted:</b> one shot lit at a time, and combos score 4x.</li></ul>'},
 {t:"Microbots",h:["left_ramp","side_ramp","right_ramp","drops"],b:'<p>A ramp lights a drop target. Missed targets unlight, and more ramps raise the multiplier and light another. Complete 3 lit targets to light final blow.</p><ul><li><b>Energized:</b> any shot lights drop targets.</li><li><b>Rusted:</b> the left ramp lights a random target and missed ones unlight. The right ramp raises the multiplier, once.</li></ul>'},
 {t:"Solar Needle",h:[["techspecs",1],["captive",2]],b:'<p>Hit 2 lit cyan standups to light the captive ball. More cyan hits raise its value and red hits lower it. Hit 3 lit captive balls to light final blow.</p><ul><li><b>Energized:</b> 1 cyan hit lights it.</li><li><b>Rusted:</b> 3 cyan hits, and all major shots count as red.</li></ul>'},
 {t:"Prime Target",h:["left_ramp","side_ramp","right_ramp","optimus"],b:'<p>Shoot lit ramps and hit Optimus to raise shot value. Ramp combos score 2x. Make 6 lit ramps to light final blow.</p><ul><li><b>Rusted:</b> each combo is +1x, and Optimus builds value and relights ramps.</li></ul>'+UNK("The rulesheet leaves Energized blank for this mission.")},
 {t:"Golden Lagoon",h:["left_ramp","side_ramp","right_ramp","vuk","spinner",["right_orbit",0,"alt"]],b:'<p>Lit yellow shots (ramps and VUK) raise the spinner value from 60K per spin. Collect 25M from the spinner to light final blow. The right orbit scores 2x the spinner value per spin.</p><ul><li><b>Energized:</b> collect 10M.</li><li><b>Rusted:</b> collect 60M.</li></ul>'}
]},
{g:"Main modes",id:"dinobots",title:"Dinobot Missions",steps:[
 {t:"Starting",h:[["grimlock",1],["left_orbit",2]],b:'<p>Hit the Grimlock targets to light the left orbit, then shoot it. Hit the shots shown on the display to light Dino Jackpots at the left orbit. Score 3 to complete the mission.</p>'},
 {t:"War",h:["slings","bumper"],b:'<p>Hit the lit slingshot or bumper to light the jackpot. Only one lights at a time, and more hits raise the jackpot.</p>'},
 {t:"Island",h:["left_orbit","left_ramp","spinner","right_ramp","right_orbit"],b:'<p>A 2-ball multiball. 50 switches light the jackpot at the left orbit. Clear all major shots for an add-a-ball. They build up in stages: left ramp and center spinner, then right ramp, then right orbit, and so on.</p>'},
 {t:"S.O.S.",h:["drops","techspecs","left_orbit","right_orbit","bumper"],b:'<p>Hitting a drop target, standup, orbit, pop bumper or ramp locks in that shot. Hit it repeatedly to light the jackpot.</p>'},
 {t:"What it earns",h:["vuk","dino"],b:'<p>3 Dino Jackpots in any mission lights Dinobot Desertion at the VUK. 3 in all three missions lights Super Dinobot Desertion instead.</p>'}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"add-a-ball",title:"Add-a-ball",steps:[
 {t:"How it works",h:[["bridge",1],["captive",2]],b:'<p>Once per game, after the multiball ball save ends, the space bridge lights. Shooting it holds the ball for 10 seconds. Hit the captive ball in time for 30 seconds of 2x scoring and the ball is released.</p><p>Mystery can relight it. If you bring Bumblebee 2x into the multiball, the captive ball boosts it to 3x.</p>'}
]},
{g:"Multiballs",id:"transformers-mb",title:"Transformers Multiball",steps:[
 {t:"Locking balls",h:[["optimus",1],["vuk",2]],b:'<p>Optimus lights a lock, then the center VUK locks a ball. Lock 3 to start. Later multiballs take 4, 6 and so on Optimus hits per lock. With a lock already lit, Optimus adds 250K to the jackpot.</p>'},
 {t:"Jackpots",h:["left_ramp","spinner","right_ramp","left_orbit","right_orbit"],b:'<p>Shots start purple for Decepticon awards, turn red for Autobot awards, then flash red and white for jackpots, so three hits on a shot score one. Jackpots multiply by how many are lit.</p>'},
 {t:"Super Jackpot",h:["side_ramp"],b:'<p>Three jackpots light the super at the side ramp, worth the base value of all prior jackpots combined.</p>'}
]},
{g:"Multiballs",id:"combiner-mb",title:"Combiner Multiball",steps:[
 {t:"Earning Combiners",h:[["side_ramp",1],["combiners",0,"alt"]],b:'<p>The side ramp earns parts, and each Combiner has five. The latest Tech Spec color sets which parts qualify. 3 Tech Specs of one color also award a part.</p>'},
 {t:"Starting",h:["bridge"],b:'<p>Complete 3 Combiners to light the space bridge once no other modes are running. Press the action button to skip it and requalify at the next Combiner.</p>'},
 {t:"Jackpots",h:[["spinner",1],["upper_flipper",0,"alt"],["megatron",0,"alt"],["right_ramp",0,"alt"]],b:'<p>The spinner or held action button cycles the Combiner grid. Land on one you completed to light jackpots at the upper flipper shots, center spinner, Megatron and right ramp.</p><p>The base is 6M with 3 Combiners, up to 10M with 5. Landing on one you lack resets it. White "build" shots raise it while the spinner is active or the button is held.</p>'},
 {t:"Super Jackpot",h:["side_ramp","bridge"],b:'<p>2 jackpots in a wave light both shots for 15M + 3M per jackpot scored, plus an add-a-ball. Then pick another Combiner.</p>'}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"tech-specs",title:"Tech Specs",steps:[
 {t:"Collecting",h:[["techspecs",1]],b:'<p>Standups light nearby shots for Tech Specs, in five colors, one per Combiner. They spot Combiner parts. After you complete a mission, a Tech Spec scored at its shot multiplies that shot. 15 of any color light Extra Ball.</p>'},
 {t:"Action button",h:[["cassette",0,"alt"]],b:'<p>Cassette combos light the button. It lights all shots for Tech Specs with 2x scoring for 15 seconds, and they stay lit afterward. Each use needs one more combo.</p>'},
 {t:"Tech Spec Mania",h:["mania",["captive",0,"alt"],["side_ramp",0,"alt"]],b:'<p>Collect 3 of each color to start this 3-ball multiball, if no other modes are running. Collect one of each color. Captive ball hits change the color of the shots.</p><p>All five light a super jackpot at the side ramp, worth 10M + total Tech Specs x 1M x supers this game, with a 25M base.</p>'}
]},
{g:"Other scoring",id:"hurry-frenzy",title:"Hurry-Up and Frenzy",steps:[
 {t:"Autobot Hurry-Up",h:[["drops",1],["inlane_l",2],["left_ramp",3]],b:'<p>Completing the drop targets lights an inlane. Roll the lit left inlane 2 times without the lit right inlane to light this at the left ramp. The third and later take 4.</p>'},
 {t:"First hurry-up",h:["right_ramp","spinner","side_ramp"],b:'<p>Three pink shots, starting at 15M. The value resets with each shot, and the mode ends at its minimum or after all 3.</p>'},
 {t:"Second hurry-up",h:["left_orbit","right_orbit","side_ramp"],b:'<p>Three shots again, starting at 25M.</p>'},
 {t:"Starscream Frenzy",h:[["drops",1],["inlane_r",2],["right_orbit",3]],b:'<p>Roll the lit right inlane 2 times without the lit left inlane to light this at the right orbit. The third and later take 4.</p><p>For 30 seconds, each switch is worth 100K and slingshots and bumpers 500K. The multiplier rises with each start.</p>'}
]},
{g:"Other scoring",id:"bumblebee",title:"Bumblebee Double Scoring",steps:[
 {t:"Spelling BUMBLEBEE",h:["captive",["bumper",0,"alt"],["pf_x",0,"alt"]],b:'<p>Each lit captive ball hit adds 3 letters, so after 3 lit hits the next one starts 30 seconds of 2x scoring.</p><p>If it is not lit, two bumper hits relight the Playfield X insert. If the bumper is not lit, Mystery can relight it.</p>'},
 {t:"In multiball",h:["bridge","captive"],b:'<p>Brought into a multiball with add-a-ball available, the captive ball at the space bridge starts 3x scoring and resets the timer.</p>'}
]},
{g:"Other scoring",id:"super-features",title:"Combiner Super Features",steps:[
 {t:"How they run",h:["combiners"],b:'<p>Finishing a Combiner starts its feature for 40 seconds. Several can run at once, and each new one resets the timer. The fifth Combiner in a game runs all five for 60 seconds. Mini-wizard modes end them.</p>'},
 {t:"Superion",h:["left_ramp","side_ramp","right_ramp"],b:'<p>Left, side and right ramps score 10M.</p>'},
 {t:"Menasor",h:["spinner"],b:'<p>Spinner is worth 170K per spin.</p>'},
 {t:"Bruticus",h:["techspecs"],b:'<p>All Tech Spec standups score 5M.</p>'},
 {t:"Defensor",h:["grimlock","right_orbit"],b:'<p>Grimlock shot and right orbit score 15M.</p>'},
 {t:"Devastator",h:["drops","megatron"],b:'<p>Drop targets and Megatron score 10M.</p>'}
]},
{g:"Other scoring",id:"stunt-loops",title:"Stunt Loops",steps:[
 {t:"Starting",h:["spinner"],b:'<p>After 3, then 6 Energon cubes, the next spinner shot starts a 15-second round. It can start any time outside mini-wizard modes.</p>'},
 {t:"Crash out jackpot",h:[["spinner",1],["side_ramp",2],["captive",3],["bridge",3]],b:'<p>Starts at 5M. Each spin adds 200K, up to 30M, and resets the timer. The side ramp adds +1x, up to 4x.</p><p>Collect at the captive ball for base value, or at the space bridge for +2x. That makes 180M the maximum, and 540M in the second round, where the jackpot cap is 90M.</p>'}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Awards",h:[["bumper",1],["bridge",2],["upper_flipper",0,"alt"]],b:'<p>Repeated bumper hits light it at the space bridge, reachable with a late flip from the upper flipper. Awards depend on game state:</p><ul><li>5M</li><li>Light add-a-ball</li><li>Spot a Combiner part</li><li>3 or 5 Tech Specs</li><li>Light bumper for Playfield X</li><li>+4x bonus</li><li>+2x bonus (permanent)</li><li>Cyber Coin (Insider Connected, every 5th single-player game on standard play)</li></ul>'}
]},
{g:"Other scoring",id:"cannon",title:"Cannon Jackpot",ed:"premium",steps:[
 {t:"Loading",h:[["right_ramp",1],["cannon",2]],b:'<p>At the start of each ball the right ramp lights to load the cannon, for 1M. It fires to the left flipper. This works once per ball, with no other modes running.</p>'},
 {t:"Combo",h:["right_ramp","cannon"],b:'<p>Hit the right ramp again quickly for a 5M cannon combo, which fires to the upper flipper.</p>'},
 {t:"Jackpot",h:["optimus",["upper_flipper",0,"alt"]],b:'<p>Hit Optimus from this feed, from the upper or lower flippers, for a 14M cannon jackpot.</p>'},
 {t:"Other feeds",h:["cannon"],b:'<p>The cannon also fires to the left flipper after Countdown to Extinction and when One Shall Fall starts.</p>'}
]},
{g:"Other scoring",id:"soundwave",title:"Soundwave and Cassette combos",steps:[
 {t:"Interference",h:["cassette"],b:'<p>Shoot the Cassette target 3 times for the first Soundwave mode. Later ones need Cassette combos. In this one, roving blue arrows raise a hurry-up, scored at the Cassette target once the 20-second timer ends.</p>'+UNK("Interference is the only Soundwave mode the rulesheet lists.")},
 {t:"Cassette combos",h:[["right_ramp",1],["left_ramp",2],["cassette",3],["inlane_l",0,"alt"]],b:'<p>The left inlane briefly lights the target for a combo starting at 3M. Chaining flashing white shots raises the multiplier. The longest is right ramp or scoop, left ramp, then Cassette target.</p>'}
]},
{g:"Other scoring",id:"outlanes",title:"Outlanes and Extra Balls",steps:[
 {t:"Left outlane",h:["outlane_l",["cassette",0,"alt"]],b:'<p>The ball save is lit at game start. Once used, the Soundwave target relights it, up to twice per ball.</p>'},
 {t:"Countdown to Extinction",h:["outlane_r","right_ramp"],b:'<p>Lit at the right outlane on the last ball. If you drain there, you have 18 seconds to shoot the right ramp and save the ball.</p><p data-ed="pro">The ball releases to the upper flipper.</p><p data-ed="premium">The ball fires to the left flipper.</p>'},
 {t:"Extra Balls",h:["bridge"],b:'<p>Lit at the space bridge by playing all 5 missions or collecting 15 Tech Specs. If disabled or maxed out, it scores 15M.</p>'},
 {t:"End-of-ball bonus",h:[],b:'<ul><li>Base bonus</li><li>500K x Dino Jackpots</li><li>400K x Tech Specs</li><li>1.5M x Energon Cubes</li></ul><p>Bonus X affects only the base bonus.</p>'}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"one-shall-fall",title:"One Shall Fall",steps:[
 {t:"Starting",h:["right_ramp"],b:'<p>Lit at the right ramp after playing two missions. You can wait and play more missions to make it easier and worth more.</p>'},
 {t:"The duel",h:[],b:'<p>Purple shots damage Megatron and score 10% of the base value. Avoid red shots, which damage Optimus. The base value is 600K per stored Energon Cube, plus amounts for Rusted missions and final blows.</p>'+UNK("The rulesheet shows those last two amounts as \"???\".")},
 {t:"Mission perks",h:[],b:'<p>Missions you started change the rules:</p><ul><li><b>Autobot Run:</b> major shots no longer light red.</li><li><b>Microbots:</b> purple drop targets are lit.</li><li><b>Solar Needle:</b> red targets unlight after 2 hits.</li><li><b>Prime Target:</b> drained balls no longer penalize.</li><li><b>Golden Lagoon:</b> the red slingshot is no longer lit.</li></ul>'+UNK("The rulesheet says \"no longer right red\" for Autobot Run. I read that as a typo for \"light\".")},
 {t:"Finishing Megatron",h:["drops","scoop"],b:'<p>Enough purple shots light a hurry-up at the scoop, blocked by the drop targets. White shots add 10% of the maximum, but each one resets the targets.</p><p>Win or lose, the flippers then die and all balls drain. A new ball comes to the shooter lane with no skill shot.</p>'}
]},
{g:"Wizard modes",id:"rescue",title:"Rescue Optimus",steps:[
 {t:"Starting",h:["vuk","rescue"],b:'<p>Play all five missions to light the VUK, once no other modes are running. There are 3 phases of 70 seconds, each with 30 seconds of ball save.</p>'},
 {t:"Phase 1",h:["optimus","vuk"],b:'<p>Optimus lights sets of two shots, for about 15 seconds. Make four, then shoot the VUK.</p>'},
 {t:"Phase 2",h:["vuk",["inlane_l",0,"alt"],["inlane_r",0,"alt"]],b:'<p>The right flipper moves the lit arrow and the left flipper moves the lit Tech Spec insert. A Tech Spec scores half the award, an arrow scores the base, and both score 2.5x. A lit inlane first doubles it. Score 4 lit shots, then the VUK.</p>'},
 {t:"Phase 3",h:["bridge","optimus"],b:'<p>Multiball victory laps. Unique jackpots build a super at the space bridge. Optimus relights the jackpots.</p>'}
]},
{g:"Wizard modes",id:"desertion",title:"Dinobot Desertion",steps:[
 {t:"Starting",h:["vuk","dino"],b:'<p>Lit at the VUK after 3 Dino Jackpots in any mission. 3 in each mission lights Super Dinobot Desertion instead.</p>'},
 {t:"Phase one",h:["megatron"],b:'<p>Timed for 30 seconds + 15 per Dinobot mission completed, up to 60. Build the jackpot based on those missions:</p><ul><li><b>War:</b> slingshots add 250K.</li><li><b>Island:</b> switches add 75K, and spins add 12K.</li><li><b>S.O.S.:</b> shots and targets add 100K.</li></ul><p>Shoot Megatron in time without draining to triple it.</p>'},
 {t:"Phase two",h:[["grimlock",0,"alt"],["left_orbit",1],["side_ramp",2],["optimus",2],["right_ramp",3]],b:'<p>Lasts 30 seconds. Grimlock standups score 0.5x the jackpot and the left orbit 1x. The left orbit lights a combo to the side ramp or Optimus for 2x, then the right ramp for 2x, then it repeats.</p>'}
]},
{g:"Wizard modes",id:"doom",title:"The Ultimate Doom",steps:[
 {t:"Not documented yet",h:["doom"],b:'<p>The rulesheet only says "Still assembling...", so there is nothing to show here yet.</p>'}
]}
];

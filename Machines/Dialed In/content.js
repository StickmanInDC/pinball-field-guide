/* ---------- playfield features (coordinates in the 640x1300 perspective-corrected JJP Limited Edition photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 lorbit:{n:"Left orbit (Crazy Bob's)",c:0,s:[B([[152,742],[120,660],[102,570],[100,460],[100,340],[92,230]],16)],a:[104,500],x:"The lane behind the BOB arrow at the left. The manual's shot map draws it running up the left side to Crazy Bob's trap door. Its path past the entrance is my reading."},
 trapdoor:{n:"Crazy Bob's trap door",c:0,s:[R(66,205,40,60)],a:[86,235],x:"Not visible in the photo. Placed from the manual's shot map, which boxes it high in the left orbit."},
 lramp:{n:"Left ramp (Train 1)",c:0,s:[B([[226,690],[205,610],[188,530],[172,440],[168,350],[182,260],[225,175]],18)],a:[175,440],x:"The red ramp at the left, with a TRAIN 1 arrow in front and the SHOOT RAMPS TO LITE TRAIN sign. The manual calls it the TRAIN 1 (left) ramp; it runs over the top of the playfield to Betty. The entrance is my reading of the shot map."},
 sramp:{n:"Side ramp (Station 3)",c:0,s:[B([[250,400],[240,320],[222,235],[185,150],[125,90]],16)],a:[230,290],x:"The clear ramp to the right of the red ramp, shot from the upper right flipper. The rulesheet calls it the side ramp; the manual calls it the STATION 3 (upper left) ramp and draws it ending at the lock in the top left corner."},
 theater:{n:"Quantum Theater",c:1,s:[B([[332,545],[328,470],[325,400]],20)],a:[328,470],x:"The shot up the red lane into the theater, with a question mark arrow and a FUTURE AHEAD insert. The theater box itself sits behind it."},
 theaterbox:{n:"Quantum Reality Theater",c:1,s:[R(265,200,105,135)],a:[318,268],x:"The black box with the QUANTUM REALITY THEATER sign. Virtual targets and awards appear inside it."},
 rramp:{n:"Right ramp (Train 2)",c:0,s:[B([[462,690],[490,620],[520,530],[546,430],[560,330],[558,250]],16)],a:[530,500],x:"The shot behind the arrow to the left of the upper right flipper. The manual calls it the TRAIN 2 (right) ramp/orbit and the rulesheet says the right loop and the right ramp are the same thing. Its path up the right side is my reading."},
 phone:{n:"Smartphone",c:1,s:[R(437,373,90,167)],a:[482,456],x:"The large phone toy on the right of center. Its screen shows the next mode, shot cues and timers."},
 phonescoop:{n:"Phone scoop",c:0,s:[C(470,553,15)],a:[470,553],x:"My reading of the scoop under the phone, behind the up arrow at its foot. The manual's map points the Smartphone scoop arrow here."},
 simscoop:{n:"SIM Card scoop",c:0,s:[C(252,462,13)],a:[252,462],x:"Placed from the manual's shot map, beside the SIM CARD insert, below the side ramp entrance and above the Lite Big Bang targets as the rulesheet describes. The scoop itself is hidden by the ramps in the photo."},
 qed:{n:"QED moving target",c:1,s:[E(232,585,38,42)],a:[232,585],x:"The QED character with the lightning bolts in the middle of the playfield. It moves side to side."},
 tic:{n:"TIC target",c:0,s:[R(266,404,22,22)],a:[277,415],x:"My reading of the blue target to the left of the theater entrance, above the TIC insert."},
 ket:{n:"KET target",c:0,s:[R(358,430,24,22)],a:[370,441],x:"My reading of the blue target to the right of the theater entrance, above the KET insert."},
 ticins:{n:"TIC and KET inserts",c:1,s:[R(262,436,32,30),R(344,466,34,30)],a:[300,455]},
 kicker:{n:"Skill shot kicker",c:0,s:[C(372,218,11)],a:[372,218],x:"The inline kicker slot behind the theater. Not visible in the photo; placed from the manual's skill shot map."},
 bob:{n:"B-O-B targets",c:1,s:[R(102,748,18,26),R(104,780,18,26),R(106,812,18,26)],a:[113,795],x:"The three yellow standups at the left, where the manual's map boxes them."},
 bobins:{n:"BOB letters",c:1,s:[R(92,520,40,115)],a:[112,578],x:"The large B, O, B inserts up the left side."},
 bobarrow:{n:"BOB arrow",c:1,s:[E(148,705,16,40)],a:[148,705],x:"The arrow printed BOB in front of the left orbit. It lights when Crazy Bob's is open."},
 spider:{n:"Spider target",c:0,s:[R(150,620,22,22)],a:[161,631],x:"My reading of the red target just above the spider insert, where the manual's map boxes the Spider stand-up."},
 lbb:{n:"Lite Big Bang targets",c:0,s:[R(216,500,20,46)],a:[226,523],x:"Placed from the manual's map, which draws two yellow targets on the right wall of the left ramp entrance. Not clearly visible in the photo."},
 bigbang:{n:"Big Bang target",c:0,s:[C(236,292,13)],a:[236,292],x:"Placed from the manual's map only: a red target deep in the lane between the ramps, left of the theater. The weakest placement on this page."},
 uflip:{n:"Upper right flipper",c:1,s:[B([[540,663],[527,597]],14)],a:[534,630],x:"The small red and yellow flipper on the right. It feeds the side ramp and the SIM Card scoop."},
 dronetgt:{n:"Drone target",c:0,s:[R(506,690,22,22)],a:[517,701],x:"My reading of the red stand-up just below the upper right flipper, where the manual's map boxes the Drone stand-up."},
 drones:{n:"Drone rubber switches",c:0,s:[E(470,735,32,30),E(565,725,38,34)],a:[470,735],x:"The rubbers around the two lower drone toys on the right. The manual's map points the Drone rubber switch arrows at them."},
 package:{n:"Package Delivery inserts",c:1,s:[B([[440,740],[428,770],[430,800],[445,825],[475,838]],28)],a:[432,790],x:"The seven round inserts under the PACKAGE DELIVERY PROGRESS label."},
 betty:{n:"Betty",c:1,s:[E(482,120,52,92)],a:[482,120],x:"The mechanic figure at the back right. Her wrench is the diverter over the left ramp's exit."},
 wrench:{n:"Wrench target",c:0,s:[R(455,190,24,20)],a:[467,200],x:"Placed from the manual's Under Attack map, which boxes a target below Betty. Not clearly visible in the photo."},
 bumpers:{n:"Jet bumpers",c:0,s:[C(398,334,22),C(446,285,20),C(506,290,22)],a:[450,305],x:"My reading of the bumper caps under the plastics to the right of the theater. The rulesheet says the left ramp diverter can drop the ball into them."},
 letters:{n:"D-I-A-L-E-D I-N inserts",c:1,s:[E(245,885,68,30)],a:[245,885],x:"The eight round letter inserts above the left slingshot."},
 status:{n:"Inserts above the flippers",c:1,s:[R(232,1015,180,45)],a:[322,1037],x:"Five inserts. CHARGE PHONE, LOCK IS LIT and UNDER ATTACK are readable in the photo; the other two are not."},
 kickback:{n:"Left outlane and kickback",c:1,s:[B([[62,905],[62,1040]],12)],a:[62,990],x:"The far left lane, with SPECIAL and KICK BACK inserts."},
 lin1:{n:"Left inlane (Hurry Up)",c:1,s:[B([[112,895],[112,1000]],12)],a:[112,950],x:"The outer of the two left inlanes, with a HURRY UP insert."},
 lin2:{n:"Inner left inlane (Lite Drone)",c:1,s:[B([[147,895],[147,1000]],12)],a:[147,950],x:"The inner left inlane, with a LITE DRONE insert."},
 rin:{n:"Right inlane (10K+)",c:1,s:[B([[500,895],[500,1000]],12)],a:[500,950],x:"The right inlane, with a 10K+ insert."},
 rout:{n:"Right outlane",c:1,s:[B([[537,905],[537,1040]],12)],a:[537,990],x:"The far right lane, with a SPECIAL insert."},
 shooter:{n:"Shooter lane",c:1,s:[B([[583,1180],[583,700]],14)],a:[583,1050]},
 skillins:{n:"Skill shot inserts",c:0,s:[B([[577,800],[577,935]],22)],a:[577,868],x:"The round inserts up the shooter lane. The manual lists six awards; four inserts are visible in the photo and the others may be hidden by the drones."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["lorbit","lramp","sramp","theater","rramp"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["qed","phonescoop","simscoop","letters"],b:"<p>Charge the phone at QED, start Disaster Modes at the phone scoop, and collect SIM Cards to spell D-I-A-L-E-D I-N. Playing all 11 Disaster Modes leads to Armageddon; all eight letters lead to Showdown.</p>"+UNK("The rulesheet has no layout section. Shot positions here come from the shot maps in JJP's game manual.")},
 {t:"Five arrow shots",h:NUM(MAJ),b:"<p>Left to right: the left orbit, the left ramp, the side ramp, the Quantum Theater and the right ramp. Under Attack Multiball and Showdown list these five as their jackpot shots.</p>"+UNK("Alien Invasion lights \"all 5 arrows\" without naming them; I take them to be these.")},
 {t:"Upper right flipper",h:["uflip","sramp","simscoop"],b:"<p>The upper right flipper feeds the side ramp, where balls lock for Under Attack Multiball, and the SIM Card scoop.</p>"+UNK("The rulesheet calls it the side ramp; JJP's manual calls it the STATION 3 (upper left) ramp.")},
 {t:"Phone and QED",h:["qed","phone","phonescoop"],b:"<p>The QED character in the middle moves side to side. Hitting it charges the phone. The scoop under the phone starts modes and multiballs.</p>"},
 {t:"Quantum Theater",h:["theater","theaterbox","tic","ket","ticins","kicker"],b:"<p>The theater shot runs up the center. Virtual targets and awards appear in the theater box. The TIC and KET targets sit either side of its entrance, and the skill shot kicker is behind it.</p>"},
 {t:"Left side",h:["bob","bobins","bobarrow","spider","lbb","kickback"],b:"<p>The yellow B-O-B targets light the kickback and Crazy Bob's, collected up the left orbit. The Spider target and the Lite Big Bang targets are nearby.</p>"},
 {t:"Right side",h:["dronetgt","drones","package","uflip"],b:"<p>The Drone target and the rubbers around the drone toys advance the Package Delivery inserts.</p>"},
 {t:"Back of the playfield",h:["betty","wrench","bumpers","bigbang"],b:"<p>Betty the mechanic stands at the back right with her wrench over the left ramp. The jet bumpers are under the plastics beside the theater. The Big Bang target is a hard shot between the ramps.</p>"},
 {t:"Lanes",h:["kickback","lin1","lin2","rin","rout","shooter","skillins"],b:"<p>Two inlanes on the left (Hurry Up outside, Lite Drone inside) and one on the right (10K+). The kickback guards the left outlane. The skill shot awards cycle in the shooter lane.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:["shooter","skillins","kicker"],b:"<p>The shooter lane inserts cycle through Big Points, Hold Drones, Hold Kilowatts, Hold Transit, Hold Bonus and Hold Spider. Plunge so the ball drops into the kicker behind the theater to collect the lit one. The first scores 5000 points; each later one adds 500.</p>"+UNK("The rulesheet says you get the insert lit when the ball passes the shooter lane switch.")},
 {t:"Super Skill Shot",h:["uflip","sramp"],b:"<p>After a skill shot the ball comes around to the upper right flipper. Shoot the side ramp for a Super Skill Shot: Big Points pays 2x the skill shot value, Hold Bonus adds +1x bonus, and the other holds raise their value.</p>"+UNK("The rulesheet gives the hold increases as \"+1500 (?)\".")},
 {t:"Super Duper Skill Shot",h:["uflip","simscoop"],b:"<p>Shoot the SIM Card scoop instead for a Super Duper Skill Shot: Bigger Points (6x the skill shot value), +3x bonus, or each hold raised by the skill shot value.</p>"},
 {t:"Holds",h:["theaterbox"],b:"<p>A hold keeps that value into the next ball. On the newest code, holds collected from skill shots also raise the Quantum Theater Multiball Super Jackpot.</p>"+UNK("The rulesheet does not say which code revision \"newest\" means.")}
]},
/* ====== DISASTER MODES ====== */
{g:"Disaster Modes",id:"disaster",title:"Starting Disaster Modes",steps:[
 {t:"Charge the phone",h:["qed","phone"],b:"<p>Hit QED to charge the phone. The first mode needs one hit; later modes need more, up to four.</p>"},
 {t:"Pick a mode",h:["phone"],b:"<p>There are 11 Disaster Modes. The next mode cycles among the icons on the phone when you press either flipper button, so you choose what starts.</p>"},
 {t:"Start",h:["phonescoop"],b:"<p>Shoot the green-lit phone scoop to start the mode. A mode cannot start while Under Attack Multiball is lit.</p>"},
 {t:"Overcharge",h:["qed"],b:"<p>Mode scoring depends on the phone's charge when the mode starts. Hitting QED while the phone is lit overcharges it past 100%, +10% per hit.</p>"},
 {t:"Add time",h:["phonescoop"],b:"<p>During a mode, the first phone scoop shot after a lit shot adds time.</p>"},
 {t:"Complete",h:["simscoop"],b:"<p>Completing a mode scores a 30K bonus and lights a SIM Card at the SIM Card scoop.</p>"},
 {t:"Extra ball",h:["lorbit","trapdoor"],b:"<p>Playing three Disaster Modes lights extra ball.</p>"+UNK("JJP's manual says the extra ball is collected at Crazy Bob's trap door in the left orbit.")}
]},
{g:"Disaster Modes",id:"modes1",title:"Alien Invasion to Flash Fires",steps:[
 {t:"Alien Invasion",h:NUM(MAJ),b:"<p>Shoot the single roving arrow, starting at the left orbit, for 10K. Then all five arrow shots light for up to 20K each, more the faster you made the first shot. Shoot all five to complete.</p>"},
 {t:"Eruption",h:[["theater",1],["rramp",2]],b:"<p>Shoot the theater for a 6,000 hurry-up, then the right ramp for 6K plus that value. Alternate theater, right ramp, theater for the same value; the last theater shot completes the mode.</p>"},
 {t:"Tidal Wave",h:[["sramp",1]].concat(alt(["lorbit","lramp","theater","rramp"])),b:"<p>Only the side ramp is required, worth 20,000. Every other lit shot first raises it by 8K, except the theater, which raises it by 6K.</p>"},
 {t:"Whirl Wind",h:NUM(["lramp","rramp","lorbit","sramp"]),b:"<p>A 30-second mode. In order: left ramp 14,000, right ramp 15,000, left orbit 16,000, side ramp 17,000. All four as one combo adds a 50K Whirlwind Combo.</p>"},
 {t:"EMP Strike",h:["theater"],b:"<p>Shoot the theater, 10,000 per shot. The magnets go crazy, but only three shots complete the mode.</p>"+UNK("Where the magnets are is not documented yet.")},
 {t:"Flash Fires",h:[["lramp",1],["bob",2]],b:"<p>Five shots: left ramp 10,000, B-O-B targets 15,000, left ramp, B-O-B targets, left ramp.</p>"}
]},
{g:"Disaster Modes",id:"modes2",title:"Sinkholes to Singularity",steps:[
 {t:"Sinkholes",h:[["lorbit",1],["rramp",1],["theater",2]],b:"<p>Shoot either loop three times, 10K each. Then the left loop for 10K and the theater for 10K to complete.</p>"+UNK("The rulesheet says the right loop is the same shot as the right ramp.")},
 {t:"Meteor Storm",h:["spider","tic","ket","wrench"],b:"<p>Shoot the lit standups, 6,000 each: Spider, TIC, KET and Wrench. Five hits complete the mode.</p>"},
 {t:"Earth Shaker",h:alt(MAJ),b:"<p>The two leftmost adjacent shots light. Shooting either moves the lit pair one position right. Four shots complete the mode, 17,000 for the first and +1,000 each.</p>"+UNK("Which shots make up the row is not documented yet.")},
 {t:"Acid Rain: build",h:["bumpers","lramp"],b:"<p>Shoot the jets to build value, 3,000 per hit. The left ramp is lit too and can feed the pops through the ramp diverter. After 6 jet hits the collect phase begins.</p>"},
 {t:"Acid Rain: collect",h:["lramp"],b:"<p>With the diverter removed, shoot the left ramp three times for 3,000 plus 3,000 per pop hit. The pops still build value.</p>"},
 {t:"Singularity",h:NUM(["lorbit","lramp","theater","rramp"]),b:"<p>One shot lit at a time: left orbit 12,000, left ramp 13,000, theater 14,000, right ramp 15,000, then a random one of those four for 16,000.</p>"+UNK("The rulesheet says five shots are lit but lists four plus a random repeat. In competition mode the last shot is always the left orbit.")}
]},
{g:"Disaster Modes",id:"simcards",title:"SIM Cards",steps:[
 {t:"Light",h:["simscoop"],b:"<p>SIM Cards light for completing Disaster Modes and for meeting the goals of the quick multiballs. Collect them at the lit SIM Card scoop.</p>"+UNK("The rulesheet lists \"Other?\" as a third source. On default settings an uncollected SIM Card is lost at the end of the ball.")},
 {t:"Mode multiplier",h:["simscoop","phone"],b:"<p>Each SIM Card multiplies future mode totals, not single shots: (4K base + mode shot values + the 30K completion bonus) x SIM Cards collected, paid when the mode ends.</p>"},
 {t:"Spell DIALED IN",h:["letters"],b:"<p>Eight SIM Cards spell D-I-A-L-E-D I-N and qualify Showdown. Several can be lit at once; only one letter blinks, and the next blinks as soon as you collect.</p>"}
]},
/* ====== CRAZY BOB'S ====== */
{g:"Crazy Bob's",id:"crazybob",title:"Crazy Bob's",steps:[
 {t:"B-O-B targets",h:["bob","kickback"],b:"<p>Each completion of the B-O-B targets lights the kickback (no stacking by default) and lights Crazy Bob's. Up to three can be stacked, and they carry from ball to ball.</p>"},
 {t:"Collect",h:["bobarrow","lorbit","trapdoor"],b:"<p>Shoot the left orbit when Crazy Bob's is lit.</p>"+UNK("The rulesheet does not say where Crazy Bob's is collected. JJP's manual says the left orbit, into Crazy Bob's trap door.")},
 {t:"Award order",h:["bobarrow"],b:"<p>In order: a Crazy Mode (blue), +1x bonus multiplier (yellow), a Quick Multiball (red), +1x bonus multiplier, then repeat. With the setting on, extra ball (orange) lights every 3 collects.</p>"},
 {t:"Emoji Overload",h:["lramp","rramp","phonescoop"],b:"<p>A Crazy Mode. Shoot the left ramp, right ramp and phone scoop (lit blue) to clear emoji.</p>"},
 {t:"Selfie Mode",h:[],b:"<p>A Crazy Mode frenzy: all switch hits score.</p>"},
 {t:"Lottery Frenzy",h:["theater"],b:"<p>A Crazy Mode. Shoot the ticket in the theater, then wave at the camera to scratch it off. Cards are generally worth 5-10K.</p>"},
 {t:"Drones Gone Wild",h:["dronetgt","theater","simscoop"],b:"<p>A Quick Multiball. Each Drone target hit is a jackpot and drops an item into the theater; shoot the theater for the Super Jackpot. Three Super Jackpots light a SIM Card.</p>"},
 {t:"High Voltage",h:["qed","simscoop"],b:"<p>A Quick Multiball. Hit the moving QED target for jackpots. 15 jackpots light a SIM Card.</p>"},
 {t:"Monkey Wrench",h:["lramp","betty","simscoop"],b:"<p>A Quick Multiball. Get the ball up the left ramp past Betty, who raises and lowers her wrench to block it. Three jackpots light a SIM Card.</p>"},
 {t:"Stacking",h:["phonescoop"],b:"<p>Quick Multiballs and Crazy Modes can stack with Under Attack Multiball. Modes can also be started and requalified during a Quick Multiball, unlike during Under Attack Multiball.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"uamb",title:"Under Attack Multiball",steps:[
 {t:"Light lock",h:NUM(["lramp","rramp"]),b:"<p>Shoot both ramps to light lock at the side ramp.</p>"},
 {t:"Lock",h:["sramp","uflip"],b:"<p>Lock at the side ramp (lit green). For the first multiball's first lock, Crazy Bob's also works.</p>"+UNK("The rulesheet's progression list says the first lock can be in the left loop or the side ramp, and that it lights once the first Disaster ends. JJP's manual says locking at Crazy Bob's trap door depends on a game setting.")},
 {t:"Getting harder",h:["lramp","rramp","sramp"],b:"<p>#1: one lock. #2: two locks, both ramps light the lock. #3: two locks, each lit separately. #4: three locks, both ramps as a combo for each. #5 on: as #4 but only one ramp lights to start the combo. Balls in play are one more than locks.</p>"},
 {t:"Start",h:["phonescoop"],b:"<p>Shoot the phone scoop to start. To start a Disaster first, quickly hit both flipper buttons twice when \"Multiball is Lit\" shows on the phone; it relights when the Disaster starts or the ball drains.</p>"},
 {t:"Jackpots",h:[["lorbit",1],["lramp",1],["theater",1],["rramp",1],["sramp",2]],b:"<p>Jackpots light red at the left orbit, left ramp, theater and right ramp. The side ramp scores a double jackpot.</p>"},
 {t:"Super Jackpots",h:["qed","theater","wrench"],b:"<p>After some jackpots, attacks start from QED (yellow), the theater (blue) or a third target (red), shown as lines of light running toward your flippers. Hit the origin to repel the attack for a Super Jackpot, worth more the closer it gets. If it reaches a flipper, that flipper stutters for 1-2 seconds.</p>"+UNK("The rulesheet names the third target the Pop Bumper Target; JJP's manual and flow chart name the Wrench stand-up. How many jackpots qualify the Super Jackpot is not documented yet.")},
 {t:"Add-a-ball",h:[["phonescoop",3]],b:"<p>Once during any multiball, shoot the phone scoop 3 times to add a ball.</p>"}
]},
{g:"Multiballs",id:"qtheater",title:"Quantum Theater",steps:[
 {t:"Kilowatts",h:["qed","theater"],b:"<p>Hitting QED raises Kilowatts and shows a tank with a lightning bolt in the theater (arrow yellow). Shoot the theater while it shows to collect.</p>"},
 {t:"Spiders",h:["spider","theater"],b:"<p>The Spider target raises Spiders (arrow pink).</p>"},
 {t:"Drones",h:["dronetgt","theater"],b:"<p>The Drone target raises Drones (arrow purple).</p>"},
 {t:"Transit",h:["lramp","rramp","sramp","theater"],b:"<p>Any ramp raises Transit, shown as a train (arrow blue). Several lit collects stack together.</p>"+UNK("The rulesheet asks whether a value resets after collection; that is not documented yet. Built values are lost at the end of the ball unless held.")},
 {t:"Features",h:["theater","theaterbox"],b:"<p>Two collects of a type start its 30-second theater feature: Kilowatt Drops (drop targets in the theater), Spider Spinner, Drone Captive Ball or Train Bash (a door). Hit the virtual target to collect that bonus.</p>"+UNK("JJP's manual says three hits start each feature, not two collects. During the features (except Spider Spinner) QED moves when the ball leaves the theater.")},
 {t:"Quantum Theater Multiball",h:["theater"],b:"<p>After all four features, the next theater shot starts Quantum Theater Multiball, even during another multiball.</p>"},
 {t:"Jackpots",h:["lramp","rramp","sramp","spider","dronetgt","qed"],b:"<p>Jackpots light at the ramps (Transit), the Spider and Drone targets and QED (Kilowatt). All four types qualify a theater Super Jackpot, based on shots made in the features and holds collected. Then it resets.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"bigbang",title:"Big Bang",steps:[
 {t:"Light it",h:["lbb"],b:"<p>Hit the Lite Big Bang targets to light Big Bang: 3 hits the first time, then one more each time up to 6.</p>"},
 {t:"Collect",h:["bigbang"],b:"<p>Shoot the Big Bang target. It scores 50K to start, +10K each time. In a Disaster Mode it completes the mode and lights a SIM Card. In a multiball it scores all lit jackpots. Both at once do both.</p>"+UNK("A mode completed this way only applies the SIM Card multiplier to the shots made before Big Bang. The rulesheet says the JJP app's Big Bang button can trigger it too.")}
]},
{g:"Other scoring",id:"drones",title:"Drone deliveries",steps:[
 {t:"Deliveries",h:["dronetgt","drones","package"],b:"<p>Each Drone target hit adds 2 deliveries and each drone rubber switch adds 1. Light all the Package Delivery inserts for a Drone Mystery award.</p>"+UNK("The rulesheet is unsure whether it takes 7 or 8; JJP's manual says seven inserts.")},
 {t:"Drone Mystery",h:["theater"],b:"<p>Collect it at the theater. It carries over to the next ball. Awards include points, bumpers at max, Drone Combo lit, extra ball lit, a value increase or hold, +1x bonus, Add Danger and Hold Holds.</p>"},
 {t:"Drone Combo",h:[["lin2",1],["dronetgt",2]],b:"<p>Roll through the lit inner left inlane (Lite Drone), then hit the Drone target right away. That lights the Drone Mystery at once.</p>"}
]},
{g:"Other scoring",id:"combos",title:"Combos",steps:[
 {t:"Combos",h:MAJ.concat(["phonescoop"]),b:"<p>Link any major shots (orbits, ramps and the phone). The first combo is 500, the next 600, and so on, resetting on a break. Yellow blinking arrows show what continues the combo.</p>"},
 {t:"Rewards",h:["lorbit","trapdoor"],b:"<p>Combo totals count in the bonus and can be held by a skill shot. Extra ball lights at the trap door after 35 and 100 combos.</p>"+UNK("The rulesheet's status report says \"Extra Ball at 25\". JJP's manual says 35.")}
]},
{g:"Other scoring",id:"hurry",title:"Inlane hurry-ups",steps:[
 {t:"Light",h:["tic","ket","ticins"],b:"<p>Hurry-ups are lit at the start of the game. Complete the TIC and KET targets in front of the theater to relight them. Flipper presses move the lit hurry-up between the left and right inlanes.</p>"},
 {t:"Theater hurry-up",h:[["lin1",1],["theater",2]],b:"<p>Roll through the lit left inlane, then shoot the theater within the time limit. TIC and KET raise the value.</p>"+UNK("The time limit is not documented yet. JJP's manual names the outer left lane (HURRY UP insert).")},
 {t:"10K+ hurry-up",h:[["rin",1],["lramp",2]],b:"<p>Roll through the lit right inlane, then shoot the left ramp before time runs out for 10K. Each repeat adds 1K.</p>"+UNK("The rulesheet leaves the details as questions. JJP's manual says the timer restarts after each shot, up to 20K.")}
]},
{g:"Other scoring",id:"bonus",title:"Bonus",steps:[
 {t:"End of ball bonus",h:["status"],b:"<p>The bonus adds City Damage, Crazy Modes, Spider, Kilowatts, Transit, Drones and Combos, times the bonus multiplier. With nothing collected you get a 500-point Participation Award.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"armageddon",title:"Armageddon",steps:[
 {t:"Qualify and start",h:["phonescoop"],b:"<p>Play all 11 Disaster Modes, then shoot the phone scoop.</p>"},
 {t:"Play",h:alt(MAJ).concat(["phonescoop","simscoop"]),b:"<p>Lit arrows award jackpots. The Super Jackpot is at the phone scoop or the SIM Card scoop. 8 modes completed makes the jackpot 9x.</p>"+UNK("The rulesheet gives only these three lines.")}
]},
{g:"Wizard modes",id:"showdown",title:"Showdown",steps:[
 {t:"Qualify and start",h:["letters","theater"],b:"<p>Collect 8 SIM Cards to spell D-I-A-L-E-D I-N, then shoot the theater.</p>"},
 {t:"Fight D.I.E.",h:MAJ,b:"<p>A multiball with unlimited ball saves until you or D.I.E. is defeated. Red jackpot arrows at the left orbit, left ramp, theater, right ramp and side ramp take D.I.E.'s health. You lose health when you lose a ball. Theater and pop bumper attacks come fast.</p>"},
 {t:"Victory laps",h:MAJ,b:"<p>Defeat D.I.E. and the ball save stops (it lingers about 20 seconds). Jackpots then count as victory laps until one ball is left.</p>"}
]},
{g:"Wizard modes",id:"chaos",title:"Chaos in Quantum City",steps:[
 {t:"Not documented yet",h:["phonescoop"],b:"<p>JJP's rules flow chart shows a third wizard mode, Chaos in Quantum City, started at the phone scoop after starting 6 Disaster Modes.</p>"+UNK("The rulesheet does not mention it, so how it plays is not documented yet.")}
]}
];

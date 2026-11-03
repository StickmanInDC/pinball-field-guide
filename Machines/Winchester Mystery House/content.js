/* ---------- playfield features (coordinates in the 1200x2460 frame of Barrels of Fun's flyer photo, perspective-corrected) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 /* ---- main shots (all estimated: no manual or shot map found) ---- */
 lramp:{n:"Left ramp",c:0,s:[B([[322,1340],[310,1240],[285,1120],[255,1000],[225,880],[200,790]],30)],a:[285,1120],x:"My reading: the lane above the left Advance Tour arrow, up the blue staircase to the metal ramp at the top left. The rulesheet names a left ramp but does not place it."},
 lhall:{n:"Left hall (turntable)",c:0,s:[B([[560,745],[598,695],[632,660]],22)],a:[598,695],x:"The rulesheet says the left hall is shot from the upper left flipper. I placed it at the Advance Tour arrow that points up and right from beside the mini flipper."},
 chall:{n:"Center hall (turntable scoop)",c:0,s:[B([[725,800],[727,705]],24),C(728,672,28)],a:[727,730],x:"The Advance Tour arrow that points straight at the dark opening in front of the hallway. The rulesheet calls this the center or middle hall and the hall's front facing scoop; I took them to be the same shot."},
 inner:{n:"Inner loop",c:0,s:[B([[839,862],[842,770],[850,690],[862,620]],24)],a:[842,770],x:"The Advance Tour arrow under the big wire spiral. The rulesheet calls it the inner loop, the inner orbit and the inner upper loop; I assumed one shot."},
 spinner:{n:"Spinner loop",c:0,s:[B([[952,850],[958,745],[966,645]],24),R(935,728,46,18)],a:[958,760],x:"The Advance Tour arrow right of the inner loop, with a label beside it that looks like it starts \"SPI\". I could not read it fully, and the flyer lists one spinner."},
 rramp:{n:"Right ramp (staircase)",c:0,s:[B([[960,1330],[985,1220],[1008,1100],[1026,960]],28)],a:[990,1200],x:"The lower right Advance Tour arrow and the blue staircase right of the upper flipper. The flyer calls a ramp the Right Staircase Ramp. The top of the ramp is under one of the flyer's close-up pictures."},
 rorbit:{n:"Right orbit",c:0,s:[B([[1060,1260],[1066,1100],[1055,950],[1035,820],[1010,700]],26)],a:[1062,1100],x:"The rulesheet names a right orbit but does not place it. The right side of the photo is hidden by the flyer's close-up pictures, so this placement is a guess."},
 /* ---- turntable and upper playfield ---- */
 turntable:{n:"Revolving hallway turntable",c:0,s:[E(680,640,110,72)],a:[680,640],x:"The flyer: a revolving hallway turntable with 3 entrances and 8 positions. I placed it behind the center hall and Annunciator target, where the hallway sculpt is."},
 stairs:{n:"Stairs to Nowhere",c:0,s:[C(495,476,40)],a:[495,476],x:"At the STAIRCASE TO NOWHERE sign behind the hallway. The flyer describes a magnetic ball catch there."},
 tower:{n:"Tower",c:0,s:[R(845,20,150,420)],a:[920,230],x:"The square tower at the top right. The flyer says the tower collapses to reveal a hidden ball path; the rulesheet's \"behind the fallen tower\" super jackpot is up the right ramp. Which tower falls is my reading."},
 house:{n:"Mansion and Ghost Box",c:1,s:[R(110,0,860,400)],a:[540,250],x:"The house sculpt and the Pepper's Ghost display at the back of the playfield."},
 /* ---- drop targets ---- */
 cdrops:{n:"Center drop targets",c:0,s:[C(548,1095,13),C(538,1145,13),C(528,1196,13)],a:[538,1145],x:"The bank angled up through the center. The targets are my estimate, just left of their inserts."},
 cdropins:{n:"Center drop target inserts",c:1,s:[C(595,1095,22),C(585,1145,22),C(575,1198,22)],a:[585,1145],x:"From top to bottom: Call Spirits, Light Mystery, Advance 13, as the rulesheet lists them."},
 keydrops:{n:"Key drop targets",c:0,s:[B([[398,648],[505,676]],22)],a:[450,660],x:"The rulesheet puts a 3-bank that awards Keys in the upper left. I placed it just behind the K-E-Y inserts; wireforms hide the targets in the photo."},
 keyins:{n:"K-E-Y inserts",c:1,s:[C(412,675,18),C(462,684,18),C(509,703,18)],a:[462,684]},
 inline:{n:"Seance Room inline drops",c:0,s:[B([[465,1330],[455,1240],[440,1150],[422,1065]],34)],a:[450,1200],x:"Three drop targets in a line, with the Seance Room behind. The flyer: break through the wall to uncover the Seance Room. Placed up the lane above the 1-2-3 inserts."},
 inlineins:{n:"1-2-3 Seance Room inserts",c:1,s:[C(430,1365,18),C(467,1365,18),C(503,1353,18),C(492,1434,22)],a:[467,1380]},
 seance:{n:"Seance Room (lock)",c:0,s:[C(415,1040,30)],a:[415,1040],x:"Behind the inline drops. The flyer describes a seance table and crystal ball 3-ball physical lock. Exactly where the ball stops is my estimate."},
 crystal:{n:"Crystal ball",c:1,s:[C(85,1225,55)],a:[85,1225],x:"The crystal ball sculpt on the seance table at the left."},
 /* ---- targets ---- */
 annun:{n:"Annunciator target",c:0,s:[R(612,710,50,62)],a:[637,741],x:"The rulesheet: a large target near the front of the hallway carousel. I read it as the framed square directly above the printed ANNUNCIATOR insert."},
 instr:{n:"Instrument targets",c:0,s:[C(376,1256,16),C(498,1222,16),C(798,792,16),C(888,862,16),C(922,1211,16)],a:[498,1222],x:"Five white standups printed with music symbols. The rulesheet says there are five instrument targets plus hidden bass and treble targets; I could not find the hidden two."},
 help:{n:"Help target",c:0,s:[C(905,1622,18)],a:[905,1622],x:"The rulesheet puts it above the right inlane. Placed at the printed HELP insert; the target itself is my estimate."},
 /* ---- flippers and lower playfield ---- */
 lflip:{n:"Left flipper",c:1,s:[B([[367,2107],[503,2203]],24)],a:[435,2155]},
 rflip:{n:"Right flipper",c:1,s:[B([[795,2110],[660,2200]],24)],a:[728,2155]},
 uflip:{n:"Upper right flipper",c:1,s:[B([[930,1150],[978,995]],22)],a:[954,1072],x:"It stands upright on the right side. The flyer lists 3 full-size flippers and 1 mini flipper."},
 miniflip:{n:"Mini flipper (upper left)",c:0,s:[B([[362,757],[432,812]],18)],a:[397,785],x:"A short white flipper at the upper left. The rulesheet mentions an upper left flipper; I took it to be this one."},
 lsling:{n:"Left slingshot",c:0,s:[E(280,1790,40,95)],a:[280,1790]},
 rsling:{n:"Right slingshot",c:0,s:[E(885,1790,40,95)],a:[885,1790]},
 lout:{n:"Left outlane (O)",c:0,s:[B([[117,1765],[117,1895]],20),C(117,1730,18)],a:[117,1830]},
 lin:{n:"Left inlane (P)",c:0,s:[B([[207,1742],[212,1880]],20),C(207,1707,18)],a:[210,1810]},
 rin:{n:"Right inlane (E)",c:0,s:[B([[945,1742],[947,1885]],20),C(930,1707,18)],a:[946,1810]},
 rout:{n:"Right outlane (N)",c:0,s:[B([[1040,1765],[1045,1900]],20),C(1033,1733,18)],a:[1042,1830]},
 kick:{n:"Return kickback",c:1,s:[C(110,1978,22)],a:[110,1978],x:"The RETURN insert under the left outlane. The flyer calls it the Return left outlane kickback."},
 shooter:{n:"Shooter lane",c:0,s:[B([[1095,2050],[1095,1700],[1092,1350]],22)],a:[1095,1700],x:"My reading: the narrow lit lane right of the right outlane. The bottom of it is hidden by one of the flyer's close-up pictures."},
 /* ---- printed inserts ---- */
 arrows:{n:"Advance Tour arrows",c:1,s:[C(322,1355,20),C(572,718,20),C(725,770,20),C(839,823,20),C(952,805,20),C(960,1333,20)],a:[725,770],x:"Six arrow inserts labeled ADVANCE TOUR, one in front of each main shot."},
 foyer:{n:"Foyer",c:1,s:[C(557,1693,32)],a:[557,1693]},
 kitchen:{n:"Kitchen",c:1,s:[R(425,1527,58,46)],a:[453,1550]},
 venetian:{n:"Venetian Dining Room",c:1,s:[R(327,1647,82,42)],a:[367,1667]},
 twin:{n:"Twin Dining Rooms",c:1,s:[E(612,1532,62,52)],a:[612,1532]},
 seanceins:{n:"Seance Room insert",c:1,s:[C(492,1434,24)],a:[492,1434]},
 basement:{n:"Basement",c:1,s:[C(800,1632,32)],a:[800,1632]},
 ballroom:{n:"Grand Ballroom",c:1,s:[C(733,1430,62)],a:[733,1430]},
 daisy:{n:"Daisy Bedroom",c:1,s:[C(873,1493,30)],a:[873,1493]},
 sarah:{n:"Sarah's Bedroom",c:1,s:[R(605,1277,78,32)],a:[643,1292]},
 fires:{n:"Hall of Fires",c:1,s:[R(790,1238,42,76)],a:[810,1275]},
 south:{n:"South Conservatory",c:1,s:[R(668,1180,92,38)],a:[713,1198]},
 north:{n:"North Conservatory",c:1,s:[R(722,1102,98,38)],a:[770,1120]},
 callroom:{n:"Callroom",c:1,s:[C(822,1020,32)],a:[822,1020]},
 cap:{n:"Witch's Cap",c:1,s:[C(696,985,32)],a:[696,985]},
 thirteen:{n:"Thirteens inserts",c:1,s:[C(577,1785,18),C(505,1843,18),C(647,1843,18),C(530,1933,18),C(627,1933,18),C(577,1870,22)],a:[577,1870],x:"LOOPS, TARGETS, COMBOS, WEBS and SUMMONS around a central 13 insert, matching the rulesheet's five Thirteen categories."},
 multins:{n:"2X and 3X inserts",c:1,s:[C(367,1760,30),C(790,1760,30)],a:[578,1760],x:"Printed 2X and 3X inserts. The rulesheet does not mention them; I read them as the playfield multiplier lights."},
 mysteryins:{n:"Mystery (?) insert",c:1,s:[C(700,1805,26)],a:[700,1805],x:"A printed question mark insert. The rulesheet does not mention it."},
 echoesins:{n:"Echoes insert",c:1,s:[C(460,1910,32)],a:[460,1910]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var MAJ=["lramp","lhall","chall","inner","spinner","rramp","rorbit"];
var ROOMS=["foyer","kitchen","venetian","twin","seanceins","basement","ballroom","daisy","sarah","fires","south","north","callroom","cap"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"Flippers and lanes",h:["lflip","rflip","lsling","rsling","lout","lin","rin","rout","kick"],b:"<p>Two flippers at the bottom. The in and outlanes spell O-P-E-N from left to right. The left outlane has a kickback, marked RETURN.</p>"+UNK("The rulesheet has no layout section, and I found no manual or shot map. Shots in this guide are placed from Barrels of Fun's flyer photo and are mostly estimated.")},
 {t:"Upper flippers",h:["uflip","miniflip"],b:"<p>An upright flipper on the right side and a mini flipper at the upper left. The flyer lists 3 full-size flippers and 1 mini flipper.</p>"+UNK("The rulesheet mentions an upper right and an upper left flipper. Matching the upper left one to the mini flipper is my reading.")},
 {t:"Main shots",h:NUM(MAJ),b:"<p>Each main shot has an Advance Tour arrow. Left to right, as I read them: the left ramp, the left hall, the center hall, the inner loop, the spinner loop, the right ramp and the right orbit.</p>"+UNK("All seven are estimated. The rulesheet also names a center or side ramp and the Door to Nowhere ramp, which I could not find.")},
 {t:"The hallway",h:["turntable","chall","lhall","stairs","annun"],b:"<p>A revolving hallway sits at the top center. Ramp shots turn it to set up a shot at the Stairs to Nowhere. The large Annunciator target is in front of it.</p>"+UNK("The flyer says the turntable has 3 entrances and 8 positions. The rulesheet names a left hall and a center (middle) hall; the third entrance is not documented yet.")},
 {t:"Center drop targets",h:["cdrops","cdropins"],b:"<p>Three drop targets angled up through the center. From top to bottom: Call Spirits, Light Mystery and Advance 13. The plunge goes into this bank for the skill shot.</p>"},
 {t:"Key drop targets",h:["keydrops","keyins"],b:"<p>A second 3-bank in the upper left awards Keys when you complete it.</p>"+UNK("The X target that starts the playfield multiplier is \"near the key drop targets\". I could not find it in the photo.")},
 {t:"Seance Room",h:["inline","inlineins","seance","crystal"],b:"<p>Three inline drop targets guard the Seance Room, with a physical ball lock behind them. The flyer pictures a seance table and crystal ball.</p>"},
 {t:"Targets",h:["instr","annun","help"],b:"<p>Five instrument targets, the Annunciator target in front of the hallway, and the Help target above the right inlane.</p>"+UNK("The rulesheet also mentions hidden bass and treble targets and a captive ball. I could not find them in the photo.")},
 {t:"The map",h:ROOMS,b:"<p>The center of the playfield is a map of the house. Each room has its own insert, and the rulesheet says you can see angry spirits as red dots moving between rooms.</p>"},
 {t:"Lower inserts",h:["thirteen","multins","mysteryins","echoesins"],b:"<p>Above the flippers: the Thirteens inserts (Loops, Targets, Combos, Webs, Summons and 13), the Echoes insert, a question mark insert, and 2X and 3X inserts.</p>"+UNK("What the question mark and 2X/3X inserts show is not documented yet.")}
]},
{g:"Layout and basics",id:"skill",title:"Skill shot",steps:[
 {t:"Plunge into the drops",h:["shooter","cdrops","cdropins"],b:"<p>One center drop target is lit at a time, then all three, and it rotates. Plunge so the lit drop is the first switch hit. At the start of the game: top (Call Spirits) completes OPEN, middle (Light Mystery) maxes Spirit Energy, bottom (Advance 13) gives +3 to all five Thirteens, and all three lit scores a value (1.3M on default settings).</p>"},
 {t:"After the skill shot",h:["cdrops"],b:"<p>The drops strobe through their three lights. Hitting a drop locks in the award shown for a while, and you get it if the whole bank goes down.</p>"}
]},
{g:"Layout and basics",id:"tour",title:"Touring the mansion",steps:[
 {t:"Choose a room",h:["arrows"],b:"<p>You start in the Foyer. Hit any shot with a lit Advance Tour insert to choose the next room. The insert colors match the room list on the left of the screen.</p>"},
 {t:"Keys",h:["keydrops","keyins"],b:"<p>Some rooms show \"Use Key to Unlock\". Press the action button to spend a key (2M) and add that room to the choices. You can hold three keys at a time; the key drops award them.</p>"},
 {t:"Travel",h:NUM(MAJ),b:"<p>A timer shows how long the trip takes. Shots, drop banks, spinners and targets lit dim white build the next room's value, and combos (flashing white shots) add more. Draining during travel starts the next ball outside the door with half the value.</p>"},
 {t:"Outside the door",h:["arrows"],b:"<p>When the timer ends, hit any lit Advance Tour shot to start the room's mode. Or spend a key to skip the room and keep building value; use the flippers to pick the next room first.</p>"},
 {t:"Run",h:[],b:"<p>Hold the action button to run: it speeds up travel and lets you skip angry spirits, possibly with a penalty. You start with Run ready; after using it you need a growing number of switch hits to relight it.</p>"},
 {t:"Help",h:["help"],b:"<p>Once per mode, hit the Help target and a helpful spirit travels to your room on the map. When it arrives it spots a shot.</p>"},
 {t:"Mementos",h:[],b:"<p>Completing a room lights a Memento at the captive ball (lit cyan). Each room has its own Memento; see Mementos under Other scoring.</p>"+UNK("I could not find the captive ball in the photo, so it is not highlighted.")},
 {t:"Foyer and Grand Ballroom",h:["foyer","ballroom"],b:"<p>The rulesheet gives no mode for the Foyer. The Grand Ballroom is where Echoes is played, and it has no mode of its own.</p>"}
]},
/* ====== ROOM MODES ====== */
{g:"Room modes",id:"twin",title:"Twin Dining Rooms: The Mirror Banquet",steps:[
 {t:"Break free",h:["twin","chall"],b:"<p>Room color red. Help a faceless spirit break free by hitting teal shots, starting up the middle of the hallways and moving around. The rulesheet says the shots seem to come in the same order each time.</p>"},
 {t:"Time",h:[],b:"<p>Timed. Mystery can add 15 seconds. Memento: the Mirrored Teaspoon, which fills the Spirit Energy meter (one time).</p>"+UNK("Which shots light, in what order, is not documented yet.")}
]},
{g:"Room modes",id:"kitchen",title:"Kitchen: The Hungering Flame",steps:[
 {t:"Distract Agnes",h:["kitchen","chall"],b:"<p>Room color dark blue. A 2-ball multiball, not timed, that ends when you are down to one ball. Hit the red shot, the hall's front facing scoop, to distract Agnes.</p>"},
 {t:"Douse the stove",h:NUM(MAJ),b:"<p>While she is distracted, cyan shots light. Each one you hit goes out; the center hall scoop relights them all. Six shots escape through the Seance Room.</p>"},
 {t:"Finish",h:["seance","inline"],b:"<p>Park both balls in the Seance Room to start Seance Multiball at the end of the mode. Memento: the Matchbox, which lights an extra ball (one time).</p>"}
]},
{g:"Room modes",id:"venetian",title:"Venetian Dining Room: The Flickering Flame",steps:[
 {t:"Light the candles",h:["venetian"],b:"<p>Room color yellow. Timed; Mystery can add time. Hit flickering blue shots to keep the central match lit, then flickering red shots to light the six candles. If the match goes out, hit a blue shot to relight it.</p>"},
 {t:"Bonus doubler",h:[],b:"<p>Hit the upper blue shot in the first seconds to double the completion bonus. The mode ends when all candles are lit. Memento: the Snuffer Bell, +3 to all Thirteen tasks (one time).</p>"+UNK("Which shot is \"the upper blue shot\" is not documented yet. The rulesheet's contents call this mode Flicker and Flame.")}
]},
{g:"Room modes",id:"basement",title:"Basement: Whispers in the Dark",steps:[
 {t:"Hold off the spirit",h:["basement"],b:"<p>Room color dark green. When you hear the screech and see the angry spirit, hold the action button as the rail lighting climbs to a flash. Then hit red flashing shots, which only show during the heartbeat sound.</p>"},
 {t:"Fix the fuses",h:[],b:"<p>Enough shots get you to the fusebox, and more red shots restore the playfield lights. The spirit keeps coming back; missing the button or not holding it long enough ends the mode unfinished.</p>"},
 {t:"Scoring",h:[],b:"<p>Combos between flashes raise shot values; shots right after a flash lower them. Memento: the Boiler Gauge Dial, +13 seconds on the Spirit Energy jackpot collect timer (permanent).</p>"}
]},
{g:"Room modes",id:"seanceroom",title:"Seance Room: The Thirteenth Toll",steps:[
 {t:"Beat the bells",h:["seanceins"],b:"<p>Room color light green. The mode starts in the Seance Room, tours a few rooms and returns to its other entrance. Hit the lit shots before the 13th bell; the top of the screen counts the bells.</p>"},
 {t:"Memento",h:[],b:"<p>The Spirit Board: +13 seconds on the Spirit Spinner and Stair Madness timers (permanent).</p>"+UNK("Which shots light is not documented yet.")}
]},
{g:"Room modes",id:"daisy",title:"Daisy Bedroom: Lullaby of the Hollow Eyes",steps:[
 {t:"Match the doll",h:["daisy","lramp"],b:"<p>Room color lilac purple. Hit the left ramp to show one of Maribel's dolls' items, and a hurry-up lights on the shot that matches that doll.</p>"},
 {t:"Four hurry-ups",h:[],b:"<p>Hit it quickly. Four hurry-ups complete the mode; missing four ends it. Memento: the Porcelain Locket, +5M base mode value (permanent).</p>"+UNK("Which shot goes with which doll is not documented yet.")}
]},
{g:"Room modes",id:"daisy2",title:"Daisy Bedroom: The Shattered Threshold",steps:[
 {t:"After Echoes",h:["daisy","spinner"],b:"<p>Visit the Daisy Bedroom after completing Echoes for this mode instead. Build three salt barriers: start at the white shot at the spinner, then hit the white shots that follow.</p>"},
 {t:"Expel spirits",h:[],b:"<p>Hit red shots as they appear to expel angry spirits. Memento: the Music Box, +5x bonus multiplier (permanent).</p>"+UNK("How many white shots make a barrier is not documented yet.")}
]},
{g:"Room modes",id:"sarah",title:"Sarah's Bedroom: The Possession",steps:[
 {t:"Targets, then drops",h:["sarah","instr","inline"],b:"<p>Room color cyan. Not timed. Hit one lit instrument target and the inline drops light; hit one inline drop. Then 2 targets and 2 drops, then the last 2 targets and 3 drops to open the secret passage.</p>"},
 {t:"Final shot",h:["seance","chall"],b:"<p>Shoot behind the inline drops to light the final shot up the middle.</p>"+UNK("\"Up the middle\" is not identified; the center hall is highlighted as a guess.")},
 {t:"Help",h:["help"],b:"<p>Here the Help target spots one target in the standup phase, or completes all the drops for the drops phase. If a lit standup is hard to hit, the hidden bass and treble targets spot one for less. Memento: the House Key Charm, +5 keys.</p>"}
]},
{g:"Room modes",id:"fires",title:"Hall of Fires: Ashes in the Walls",steps:[
 {t:"Get water",h:["fires","spinner"],b:"<p>Room color orange. Collect water at the spinner (lit blue).</p>"},
 {t:"Put out the fires",h:["lramp","inner","chall","rorbit"],b:"<p>Then the four fires light: left ramp, inner upper loop, center hall and right orbit. After you put one out, Cinderman walks over to relight it. Put out all four to finish.</p>"},
 {t:"Fail",h:[],b:"<p>If Cinderman relights six fires in total, the mode fails. Memento: the Smoldering Hearthstone, 3x Spirit Spinner value (permanent).</p>"}
]},
{g:"Room modes",id:"south",title:"South Conservatory: The Watching Glass",steps:[
 {t:"Hide from Elias",h:["south"],b:"<p>Room color pink. Good shots are cyan arrows; Elias is the orange shots, which move with him. Hitting targets takes away good shots; hitting a good shot puts them back. Enough good shots let you escape.</p>"},
 {t:"He's coming",h:["rramp"],b:"<p>Hitting enough targets, or the shot where Elias is, starts a countdown with the right ramp flashing. Hit the right ramp before it ends or the mode fails.</p>"+UNK("Its Memento is listed as \"to be implemented\".")}
]},
{g:"Room modes",id:"north",title:"North Conservatory: What Lies Beneath",steps:[
 {t:"Draw the sigils",h:["north"],b:"<p>Room color canary yellow. One shot is lit at a time. Hitting it scores and advances the sigil on screen. Targets near the spinner may light for reduced value but still count.</p>"},
 {t:"Three sigils",h:[],b:"<p>The first sigil takes 2 shots, the second 3 and the third 4. Finishing fast turns the time left into points. Memento: +2 to the next Stair Madness multiplier.</p>"+UNK("Which targets are \"near the spinner\" is not documented yet.")}
]},
{g:"Room modes",id:"callroom",title:"Callroom: The Unfinished Request",steps:[
 {t:"Follow the bells",h:["callroom"],b:"<p>Room color aquamarine. Hit cyan shots to move through the house toward Sarah's Bedroom. In some rooms, angry spirits wait: avoid them with cyan shots or banish them with red shots before time runs out.</p>"},
 {t:"Return",h:["sarah","callroom"],b:"<p>The mode ends successfully when you get back to the Callroom after reaching Sarah's Bedroom.</p>"+UNK("Its Memento is listed as \"to be implemented\".")}
]},
{g:"Room modes",id:"cap",title:"Witch's Cap: Circle of Echoes",steps:[
 {t:"Spell the shot",h:["cap","spinner"],b:"<p>Room color blue. Spin the spinner to spell out a shot on the spirit board (for example, LEFT LOOP). You can guess early: possible shots are lit cyan, and the right one counts.</p>"},
 {t:"Drops, then choose",h:["inline"],b:"<p>Spell and hit 3 shots, then knock down the three inline targets. Then three shots light with different values; pick one to finish. Memento: 2x Spirit Energy jackpot collects (permanent).</p>"+UNK("A \"left loop\" is the rulesheet's own example; I did not find a left loop in the photo.")}
]},
/* ====== ANGRY SPIRITS ====== */
{g:"Room modes",id:"spirits",title:"Angry Spirits",steps:[
 {t:"Releasing spirits",h:ROOMS,b:"<p>Failing a mode, by timing out or draining, releases an angry spirit. Count the red dots roaming the halls on the playfield map.</p>"},
 {t:"Spirit Battle",h:[],b:"<p>During travel you may meet a spirit you released: the music changes and a shot lights red. Hit it in time for +5M next room value; miss and you lose up to 5M. Running costs 5M.</p>"},
 {t:"Spirit Ambush",h:[],b:"<p>From the second room on, an Ambush can happen during travel: the playfield turns red and a red shot lights. Hit it to start. Then expel 3 spirits at red shots, untimed; a blue shot hit in the first few seconds doubles the next expel. Finishing awards a Wildcard Memento.</p>"},
 {t:"Spirit Reckoning",h:[],b:"<p>Three angry spirits in the house force a Reckoning, which plays like an Ambush and removes your next planned Ambush. You can run from an Ambush or Reckoning, but you score nothing and get no Memento.</p>"}
]},
/* ====== MULTIBALLS ====== */
{g:"Multiballs",id:"seancemb",title:"Seance Multiball",steps:[
 {t:"Lock balls",h:["inline","inlineins","seance"],b:"<p>Knock down all three inline drops and shoot into the Seance Room behind them to lock a ball.</p>"},
 {t:"The easy way",h:["instr","cdrops"],b:"<p>Hit instrument targets or collect spirits at the drop targets to light the captive ball green. Hitting it then drops all the inline targets.</p>"+UNK("Which drop targets \"collect spirits\" is not documented yet; the center bank's Call Spirits target is a likely guess.")},
 {t:"Ball 3 help",h:["seance"],b:"<p>On default settings, if you have not played Seance Multiball by the start of ball 3, the drops are all down and one Seance Room shot starts it. It stacks with most modes, but not Hungering Flame, and modes cannot be started once it is running.</p>"},
 {t:"Jackpots",h:["rramp","tower","spinner","help"],b:"<p>Jackpots are at blue shots. After enough jackpots, hit the red-lit captive ball to light a super jackpot up the right ramp, behind the fallen tower. 13 jackpots light a mega super jackpot at the spinner for 13 seconds. Add-a-ball is at the Help target.</p>"+UNK("How many jackpots light the super is not documented yet (the rulesheet writes \"enough jackpots(?)\").")}
]},
{g:"Multiballs",id:"wheelbarrow",title:"Wheelbarrow Ghost Multiball",steps:[
 {t:"Light the ramps",h:["lout","lin","rin","rout","lramp","rramp"],b:"<p>Light all of O-P-E-N in the lanes and both ramps pulse cyan. A ramp shot spins the turntable to set up the Stairs to Nowhere and starts a Wheelbarrow hurry-up.</p>"},
 {t:"Up the stairs",h:["chall","lhall","miniflip","stairs"],b:"<p>Hit the cyan turntable shot: the middle hall after the left ramp, or the left hall from the upper left flipper after the right ramp. You get the hurry-up value and a lock. On default settings the first lock starts multiball; later ones need 3.</p>"},
 {t:"Manage the boiler",h:["spinner","chall"],b:"<p>Shoot the spinner loop to build the jackpot and lower the pressure. Survive the countdown to earn a jackpot based on your shots and the pressure (lower is better). Then hit the front hall scoop to relight the spinner.</p>"},
 {t:"Angry spirits",h:["help"],b:"<p>Hit red arrows to banish spirits walking to the basement. Too many raise the pressure and block jackpots. Add-a-ball is at the Help target.</p>"+UNK("The rulesheet mentions Super and Mega Boiler Jackpots under Mementos but does not say how to get them. Not documented yet.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"thirteens",title:"Thirteens",steps:[
 {t:"How they work",h:["thirteen","rorbit"],b:"<p>Five counters each start a mini mode at 13. When one is ready, shoot the right orbit. Starting several at once multiplies scoring by the number started. The skill shot's bottom drop gives +3 to all five.</p>"},
 {t:"Summons",h:["annun","thirteen"],b:"<p>Hit the Annunciator target to put a faint green summons on a shot; hit that shot to collect it. Mode: Summon the Mortals.</p>"+UNK("How Summon the Mortals plays is not documented yet.")},
 {t:"Webs",h:["inner","rorbit"],b:"<p>Collect Mystery at the inner or right orbit while the spider web insert is lit. Mode: Spider Web Frenzy (shoot halls to web).</p>"},
 {t:"Targets",h:["instr"],b:"<p>Hit lit instrument targets. Mode: Virtuoso. Hit each of the 5 yellow instrument targets to light the captive ball for a jackpot.</p>"},
 {t:"Loops and Combos",h:["inner"],b:"<p>Inner loops count toward Loops; combos count toward Combos. Combos mode: Banished.</p>"+UNK("The rulesheet lists Summon the Mortals as the Loops mode too, which looks like a copy error. The Loops mode and how Banished plays are not documented yet.")}
]},
{g:"Other scoring",id:"multiplier",title:"Playfield multipliers",steps:[
 {t:"Fill the Spirit meter",h:["lramp","rramp","spinner"],b:"<p>Any ramp lights the spinner; spin it while lit to fill the Spirit meter. Mystery, the skill shot and a Memento also fill it. Over half full, you can start a multiplier.</p>"},
 {t:"Start it",h:["keydrops"],b:"<p>The X target near the key drops pulses. Hit it for 2x, again for 3x. Your score freezes and points go to a multiplied bank while the meter drains one per second.</p>"+UNK("The X target is not placed: I could not find it in the photo. The key drops are shown as a guide.")},
 {t:"Collect",h:["rorbit"],b:"<p>When the lighting returns to normal, you have 20 seconds to shoot the right orbit and collect the bank. Drain after starting, or run out of time, and the points are gone.</p>"}
]},
{g:"Other scoring",id:"mini",title:"Mini-modes",steps:[
 {t:"Spirit Spinner",h:["spinner"],b:"<p>Hit a lit spinner when the Spirit meter is already full. For a while, spinner shots pay big, as you go.</p>"},
 {t:"Stair Madness",h:["rramp"],b:"<p>Starts on your third right ramp of the game (four for later ones). Switch hits build a bank; cash it at the right ramp. Cashing 3 in a game lights the captive ball for a Wildcard Memento.</p>"},
 {t:"Cashout combos",h:[["lramp",1],["rramp",2]],b:"<p>Left ramp then right ramp cashes out at 2x. Center (side) ramp, left ramp, right ramp cashes out at 4x. A cashed-out Stair Madness boosts the next one; a missed one resets it.</p>"+UNK("I could not find the center (side) ramp in the photo, so the 4x combo is not fully highlighted.")}
]},
{g:"Other scoring",id:"mementos",title:"Mementos",steps:[
 {t:"Earning them",h:[],b:"<p>Each completed room lights its own Memento at the captive ball. Others come from a Seance super jackpot, a Wheelbarrow Super or Mega Boiler jackpot, playing Thirteenths, your 3rd tier-3 Mystery award, and completing an Ambush or Reckoning. Three Mementos start Echoes.</p>"},
 {t:"Wildcards",h:[],b:"<p>Servant's Pin: revives Seance Multiball after draining to one ball (one time). Pocketwatch: +15 seconds to all Thirteens modes. Signature Quill: 99M. Miniature Ruler: +1 Help target hit per mode.</p>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Light and collect",h:["cdrops","inner","rorbit"],b:"<p>Mystery lights from clearing the center bank while Light Mystery is lit, or from the rebound switches under the shooter exit and over the captive ball. Collect at either spider web shot: the inner orbit or the right orbit.</p>"},
 {t:"Tiers",h:[],b:"<p>Three tiers. Clearing the bank while Mystery is lit advances one tier; the purple captive ball moves you to tier 2; the side ramp when purple moves you to tier 3. Nothing shows your tier.</p>"},
 {t:"Awards",h:[],b:"<p>Loops, summons, room value (+2M, up to +5M at tier 3), keys, OPEN letters or OPEN complete, Spirit Energy, collect bonus, last energy jackpot, light the Return kickback, +15 seconds, reset a Thirteen timer, light Seance lock, and light extra ball.</p>"+UNK("The rulesheet marks the extra ball award as \"level 2+, estimated\".")}
]},
{g:"Other scoring",id:"oracle",title:"Spirit board apron",steps:[
 {t:"What it shows",h:[],b:"<p>The apron is a spirit board. It shows the player up, the ball number, which lock was awarded, timers under 10 seconds (several at once, in different colors) and the match.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"echoes",title:"Echoes",steps:[
 {t:"Start",h:["ballroom","echoesins"],b:"<p>Collect three Mementos and you go straight to the Grand Ballroom. Shoot any cyan shot to start.</p>"},
 {t:"Phase 1: Escape the basement",h:["spinner","stairs","chall"],b:"<p>Hit the red shots: 2, plus one for each angry spirit in the house, from 13M up 1M each. Then the hall turns and lights the spinner cyan for a shot to the Stairs to Nowhere. Miss it and the center hall diverts there instead, for less. Draining while the ball save is yellow also moves you on.</p>"},
 {t:"Phase 2: Build the escape",h:["chall","uflip","rramp"],b:"<p>2-ball multiball. Hit a blue shot to light the Door to Nowhere ramp red. The center hall feeds the upper right flipper; make the red shot to light the right ramp for unlimited super jackpots, until the red dot on the map reaches the Grand Ballroom.</p>"+UNK("I could not find the Door to Nowhere ramp in the photo, so it is not highlighted.")},
 {t:"Phase 3: Escape",h:["rramp","tower"],b:"<p>Down to one ball: shoot the right ramp, behind the tower, for your Phase 2 total. Every other switch lowers it.</p>"}
]},
{g:"Wizard modes",id:"thirteenths",title:"Thirteenths",steps:[
 {t:"Start",h:["thirteen"],b:"<p>After all Thirteens modes have been played, the house pulses yellow. Shoot any yellow arrow to start.</p>"},
 {t:"Sets",h:NUM(MAJ),b:"<p>Five shots light, one per Thirteen. Hit them all to raise the multiplier and light five more. The Help target can spot a lit shot.</p>"},
 {t:"Balls and cashout",h:[],b:"<p>Single ball, but a ball is added every 13 seconds. A drain drops the multiplier by one. After two sets, keep going or press the action button to cash out. Then the Thirteens counters reset.</p>"}
]}
];

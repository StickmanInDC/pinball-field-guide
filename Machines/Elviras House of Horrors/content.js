/* ---------- playfield features (coordinates in the 640x1210 crop of Stern's Premium photo) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[114,470],[115,400],[115,328],[119,230],[140,148],[172,117]],16)],a:[115,430],x:"The far left lane, with the arrow carrying the Jackpot, Drive Me Crazy and Jumpin' Time inserts. Stern's lamp list calls it the Left Loop. Past the arrow the lane runs behind the left ramp toward the top of the House; that part is hidden and my guess."},
 left_ramp:{n:"Left ramp",c:0,s:[B([[168,410],[160,328],[148,250],[137,150]],20)],a:[165,395],x:"The film strip ramp left of the House, with the Jackpot, Junk in the Trunk and Un-Happy Hour inserts at its arrow. Stern's manual puts the Left Ramp entry here and its exit at the top left, from where a wire rail runs down the left side past the Trunk."},
 garage:{n:"Garage",c:0,s:[B([[234,345],[222,300],[212,252]],18)],a:[228,322],x:"The shot to the left end of the House, behind the gravestone drop target. Its arrow carries the three Garage multiball inserts. Stern's lamp list calls it the Drop Target arrow."},
 gravestone:{n:"Gravestone drop target",c:0,s:[R(203,257,24,20)],a:[215,267],x:"Stern says a gravestone drop target guards the Garage. The manual puts its switch at the Garage entrance; I marked the blue panel there."},
 house_ent:{n:"House Entrance",c:1,s:[B([[305,362],[296,292],[289,232]],22)],a:[297,300],x:"The metal stairs up to the House's front door, with the Jackpot, Extra Ball, House Party and Trailer Trash inserts at its arrow. Stern calls it the front door ramp."},
 cellar:{n:"Cellar",c:0,s:[C(296,282,14)],a:[296,282],x:"Stern says the front door ramp pivots up to reveal a shot into the Cellar, so the Cellar is shot at the foot of the stairs. Its exact entrance is hidden; this mark follows the manual's Cellar Enter switch."},
 house:{n:"The House",c:1,s:[E(285,150,115,110)],a:[285,170],x:"Elvira's haunted house. Its lit windows track the Haunts."},
 turret:{n:"Attic turret",c:1,s:[C(275,109,15)],a:[275,109],x:"The spinning turret with the eyeball on top of the House."},
 back_door:{n:"Back Door",c:0,s:[C(245,156,12)],a:[245,156],x:"The skill shot entrance behind the House. The Super Secret Back Door sign is at the top left; the mark follows the manual's Cellar Backdoor switch, which is hidden by the House."},
 house_lock:{n:"House Lock",c:0,s:[C(359,119,11)],a:[359,119],x:"Stern's manual puts a House Lock switch at the back of the House. It is hidden in the photo, and the rulesheet does not say which shot feeds it."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[402,420],[414,328],[429,269],[460,234],[515,219],[570,242],[583,312]],18)],a:[405,398],x:"The film strip ramp left of the Crypt, with the Jackpot, Un-Happy Hour and Trailer Bits inserts at its arrow. It climbs over the pop bumpers and exits at the right (the manual's Right Ramp Exit switch). The path over the bumpers is my reading of the clear plastic."},
 crypt:{n:"Crypt",c:0,s:[B([[427,594],[457,523],[486,450]],18)],a:[452,535],x:"The shot between the two gargoyles into the Deadhead Family Crypt. Its arrow carries the Jackpot and Super Head Shot inserts."},
 crypt_door:{n:"Crypt door",c:1,s:[E(488,420,20,24)],a:[488,420],x:"The green door of the Deadhead Family Crypt. Stern says it opens only when hit with the ball."},
 crypt_toy:{n:"Deadhead Family Crypt",c:1,s:[E(505,350,58,86)],a:[505,350],x:"The mausoleum. The Deadhead bash toy rises inside it and cannot be seen in the photo."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[544,507],[552,425],[564,336],[578,250],[562,180]],16)],a:[548,470],x:"The lane at the right, with the arrow carrying the Jackpot, Drive Me Crazy and Jumpin' Time inserts. Stern's lamp list calls it the Right Loop. Its upper part is my reading of the photo."},
 spinner:{n:"Right spinner (Beast Booster)",c:0,s:[R(525,512,24,16)],a:[537,520],x:"Stern's manual puts the Right Spinner in the right orbit by the Beast Booster label; Stern's feature list calls the Beast Booster an opto spinner."},
 pops:{n:"Pop bumpers",c:0,s:[C(400,235,18),C(512,228,18),C(457,262,18)],a:[457,245],x:"Stern puts three pop bumpers in Elvira's haunted swimming pool. They sit under the right ramp plastic and are placed from the manual."},
 top_lanes:{n:"Top lanes (Dead End lanes)",c:0,s:[E(434,180,9,26),E(484,176,9,26)],a:[459,178],x:"The two lanes above the pop bumpers, printed DEEP and END. I read them as the rulesheet's Dead End lanes."},
 for_sale:{n:"For Sale sign",c:1,s:[R(330,228,44,28)],a:[352,242],x:"The Alternate Realty For Sale sign right of the House."},
 wmv:{n:"Wild Market Value target",c:0,s:[C(377,315,10)],a:[377,315],x:"My guess. Stern's manual has a For Sale/Wild Market lamp and a target switch just below the For Sale sign. The rulesheet says only that you hit the Wild Market Value spot target."},
 gargs:{n:"Gar-Goil targets",c:0,s:[C(260,310,11),C(332,308,11),C(417,494,11),C(499,500,11)],a:[332,308],x:"The four gargoyles, two beside the House stairs and two beside the Crypt. Stern lists four Gargoyle Leaper Targets; the manual's switch list calls them House Target Left and Right and Crypt Target Left and Right. Reading them as the Gar-Goil targets is mine."},
 gauge:{n:"Garg-Oil Gauge",c:1,s:[C(362,789,9),C(362,759,9),C(377,734,9),C(410,727,9)],a:[380,760]},
 ggw_ins:{n:"Gar-Goils Gone Wild insert",c:1,s:[C(456,718,24)],a:[456,718]},
 trunk:{n:"The Trunk",c:1,s:[E(52,660,18,52)],a:[52,660],x:"The wooden trunk on the left side, printed Property of Elvira and Junk in the Trunk. Stern says it sits on the left ramp and can pop open to lock balls. Stern's manual puts the Trunk Lock switches above it."},
 trunk_tg:{n:"Trunk targets (36-24-36)",c:0,s:[C(85,624,8),C(86,659,8),C(86,695,8)],a:[86,659],x:"The three standups on the left wall beside the 36, 24 and 36 inserts. The manual calls them the Left 3-Bank. I could not see the targets, so the marks follow the manual."},
 trunk_ins:{n:"36-24-36 inserts",c:1,s:[C(135,649,9),C(135,680,9),C(135,714,9)],a:[135,680]},
 junk_ins:{n:"Junk inserts",c:1,s:[C(180,650,8),C(187,676,8),C(185,699,8),C(176,724,8),C(161,748,8)],a:[182,699],x:"The Junk items printed beside the Trunk targets: Atomic Raygun, Elvira's Dagger, Lab Test and Skeleton Key, plus the phone."},
 hof_tg:{n:"Hand of Fate targets",c:0,s:[C(558,658,8),C(563,693,8),C(571,725,8)],a:[564,693],x:"The three standups on the right wall beside the HAND, OF and FATE inserts. The manual calls them the Right 3-Bank. The targets are hard to see; the marks follow the manual."},
 hof_ins:{n:"HAND OF FATE inserts",c:1,s:[C(496,680,9),C(501,710,9),C(506,741,9)],a:[501,710]},
 fryer:{n:"Freak Fryer",c:1,s:[E(293,730,22,75)],a:[293,730],x:"The column of five level inserts in the center."},
 gappa_ins:{n:"Gappa Angry! insert",c:1,s:[C(303,562,22)],a:[303,562]},
 garage_ins:{n:"Garage multiball inserts",c:1,s:[C(237,372,10),C(243,403,10),C(251,436,10)],a:[243,403],x:"Attic Attack, Add-A-Zombie and Wild Women Multiball."},
 house_ins:{n:"House inserts",c:1,s:[C(304,391,10),C(309,425,10),C(309,457,10),C(311,494,10)],a:[309,440],x:"Jackpot, Extra Ball, House Party and Trailer Trash."},
 head_ins:{n:"Super Head Shot insert",c:1,s:[C(401,669,10)],a:[401,669]},
 cleaner:{n:"Crypt Cleaner phases",c:1,s:[C(245,861,12),C(299,861,12),C(352,861,12)],a:[299,861],x:"Printed: complete all 3 phases to light Super Head Shot."},
 restorator:{n:"B-Restorator levels",c:1,s:[C(238,939,11),C(278,939,11),C(319,939,11),C(358,939,11)],a:[298,939]},
 directors:{n:"Director's Cut insert",c:1,s:[C(306,973,10)],a:[306,973]},
 pfx:{n:"2X and 4X Playfield inserts",c:1,s:[C(163,835,14),C(432,835,14)],a:[163,835]},
 left_out:{n:"Left outlane (Hand of Fate)",c:0,s:[E(46,925,8,28)],a:[46,925]},
 right_out:{n:"Right outlane (Return)",c:0,s:[E(552,925,8,28)],a:[552,925]},
 inlanes:{n:"Inlanes",c:0,s:[E(96,925,8,28),E(503,925,8,28)],a:[96,925]},
 flippers:{n:"Flippers",c:1,s:[B([[173,1095],[251,1144]],14),B([[414,1098],[336,1144]],14)],a:[293,1120]},
 plunger:{n:"Shooter lane",c:0,s:[B([[622,1150],[622,920]],12)],a:[622,1030]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var ALL=["left_orbit","left_ramp","garage","house_ent","right_ramp","crypt","right_orbit"];
var NOH=["left_orbit","left_ramp","garage","right_ramp","crypt","right_orbit"];
var RAMPS=["left_ramp","right_ramp"];
var ORBS=["left_orbit","right_orbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["house","crypt_toy","trunk"].concat(alt(ALL)),b:"<p>Elvira has moved into a haunted house. Send the B-movie monsters back to their films, clear out the Deadheads, Gar-Goils and other creatures, and then sell the house in Wild Market Value.</p><p>Seven tasks qualify Wild Market Value. Each one scores a value that starts at 5M and rises by 5M for each task completed.</p>"},
 {t:"The seven shots",h:NUM(ALL),b:"<p>Left to right: left orbit, left ramp, Garage, House Entrance, right ramp, Crypt and right orbit. Each has an arrow insert.</p>"+UNK("The rulesheet has no layout text. Positions come from the arrow names in Stern's manual (Left Loop, Left Ramp, Drop Target, House, Right Ramp, Crypt, Right Loop), matched to the photo.")},
 {t:"The House and the Cellar",h:["house","house_ent","cellar","turret","house_ins"],b:"<p>Shoot the House Entrance, the metal stairs to the front door, to start Haunts and collect Extra Balls. The windows of the House show the Haunts. Stern says the front door ramp can pivot up to reveal a shot into the Cellar, which several modes use as a final shot.</p>"},
 {t:"Back Door and House Lock",h:["back_door","left_orbit","house_lock"],b:"<p>The Back Door is a skill shot entrance behind the House. During Haunts a weak orbit shot can also fall into it. Gappa Angry! locks a ball in the House Lock.</p>"+UNK("Both are hidden by the House; the marks follow Stern's manual. The rulesheet does not say how a ball reaches the House Lock.")},
 {t:"The Garage",h:["garage","gravestone","garage_ins"],b:"<p>A gravestone drop target blocks the Garage. Hit it to light locks, and lock balls in the Garage to start the Garage multiballs.</p>"},
 {t:"The Deadhead Family Crypt",h:["crypt","crypt_door","crypt_toy","head_ins"],b:"<p>Hit the Crypt door to lower it, then shoot into the Crypt to bring up a Deadhead to bash.</p>"},
 {t:"The Trunk and its targets",h:["trunk","trunk_tg","trunk_ins","junk_ins","left_ramp"],b:"<p>The 36-24-36 Trunk targets pick and light Junk. Then the left ramp collects it and locks a ball in the Trunk.</p>"+UNK("The apron card says the targets unlock the Trunk and the left ramp collects Junk.")},
 {t:"Gar-Goil targets",h:["gargs","gauge","ggw_ins"],b:"<p>Four jumping gargoyle targets build the Garg-Oil Gauge toward Gar-Goils Gone Wild.</p>"+UNK("Which four targets are the Gar-Goils is my reading of Stern's manual and photo.")},
 {t:"Hand of Fate targets and the outlanes",h:["hof_tg","hof_ins","left_out","right_out"],b:"<p>The three targets on the right wall light the Hand of Fate at the left outlane. Defeating a Deadhead lights Return, a ball save at the right outlane.</p>"},
 {t:"Top lanes, pop bumpers and spinner",h:["top_lanes","pops","spinner"],b:"<p>The two top lanes are the Dead End lanes for the skill shot. Three pop bumpers sit in Elvira's swimming pool, under the right ramp. The right spinner is in the right orbit.</p>"+UNK("The lanes are printed DEEP and END; reading them as the Dead End lanes is mine.")},
 {t:"Center inserts",h:["fryer","gappa_ins","cleaner","restorator","directors"],b:"<p>The Freak Fryer column counts switch hits toward Gappa Angry!. Below it, Crypt Cleaner shows Deadhead phases and the B-Restorator shows completed Haunts toward Director's Cut.</p>"},
 {t:"One playfield for every model",h:["house"],b:"<p>Stern made a Premium, a Limited Edition and a Signature Edition. Stern's feature matrix and manual show the same playfield for all three, with different cabinet art, trim and plastics. The rulesheet does not separate them.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Dead End lanes",h:["top_lanes","plunger"],b:"<p>Plunge into either Dead End lane: 250K, plus 25K for each skill shot after that, and +5X bonus multiplier.</p>"},
 {t:"Back Door",h:["back_door","plunger"],b:"<p>Plunge so the ball lands in the Back Door: 1M, plus 250K for each one after that, up to 2.5M. It instantly qualifies a Haunt at the House Entrance, or starts one that is already qualified.</p><p>During a Haunt or Gappa Angry!, the Back Door spots the next mode shot.</p>"+UNK("The apron card calls it Elvira's Super Secret Back Door Unskilled Shot.")}
]},
/* ====== HAUNTS ====== */
{g:"Haunts",id:"haunts",title:"Starting a Haunt",steps:[
 {t:"Light and start",h:["house_ent","house"],b:"<p>Shoot the House Entrance enough times. When its light flashes purple, the next House shot starts a Haunt. Use either flipper to pick a window; each window is a Haunt. With a Skeleton Key from the Trunk, the far right window opens a locked Haunt.</p>"},
 {t:"Values and timer",h:alt(ALL),b:"<p>Unless a Haunt says otherwise, each shot starts at 500K and the final shot at 2M. Each shot collects the base value and raises both. Haunts start with 45 seconds. The timer pauses in the pop bumpers, and a lit shot with under 15 seconds left resets it to 15.</p>"},
 {t:"Failing a Haunt",h:["house"],b:"<p>Drain or time out and that Haunt cannot be played again until They Came From Space has been played.</p>"},
 {t:"Rewards",h:["house_ins","restorator"],b:"<p>Completing a Haunt lights Trailer Trash at the House and advances the B-Restorator toward Director's Cut. Completing two Haunts lights Extra Ball.</p>"}
]},
{g:"Haunts",id:"main_haunts",title:"The six main Haunts",steps:[
 {t:"Night of the Living Dead",h:RAMPS.concat(["house_ent","cellar"]),b:"<p>Right side of the House, basement window.</p><ul><li>Stage 1 (500K increment): shoot the House. Each ramp can be shot once first for more points.</li><li>Stage 2 (100K): every shot but the House destroys Ghouls. A made shot turns off until a different one is made. Destroy at least 4 to qualify the Cellar; more raise the final shot.</li><li>Stage 3: shoot the House Entrance for the final shot.</li></ul>"},
 {t:"Teenagers from Outer Space",h:NOH.concat(["spinner","house_ent"]),b:"<p>Left side, attic window.</p><ul><li>Stage 1 (250K): every shot but the House is lit, each worth the base value plus 50K per shot, and turns off when made. Make 3, plus 1 per Haunt already completed.</li><li>Stage 2: the right orbit lights. Each spin of the right spinner scores the base value plus 1% of the final shot value and lights the House for the finish. More spins raise the final shot.</li></ul>"},
 {t:"The Brain That Wouldn't Die",h:alt(NOH).concat(["house_ent","cellar"]),b:"<p>Left side, left garage window.</p><ul><li>Stage 1 (500K base, 250K final shot increment): 4 random shots light, 3 pink and 1 flashing white. Pink shots raise the base value; the white shot collects it and advances.</li><li>Stage 2 (100K): shoot the House Entrance.</li><li>Stage 3 (100K): every shot but the House is lit and turns off until another is made. Make at least 4, plus 1 per completed Haunt, to qualify the Cellar.</li><li>Stage 4 (100K): shoot both ramps to light the final shot at the House.</li></ul>"},
 {t:"The Manster",h:alt(NOH).concat(["house_ent"]),b:"<p>Left side, right garage window. Shots start at 500K and rise 50K each; every switch is worth 10K, rising 1K per shot, and adds to the final shot.</p><ul><li>Stage 1: every shot but the House is lit. Make 5 to qualify the House.</li><li>Stage 2: turn off all 6 shots.</li><li>Stage 3: shoot the House twice.</li><li>Stage 4: shoot each ramp once to light the final shot at the House.</li></ul>"},
 {t:"Manos: The Hands of Fate",h:NUM(["left_orbit","left_ramp","garage"]).concat(alt(["right_orbit","crypt","right_ramp"]),["house_ent","cellar"]),b:"<p>Right side, middle floor window.</p><ul><li>Stage 1 (250K): shoot a left shot (left orbit, left ramp, Garage), then a right shot (right orbit, Crypt, right ramp), then the House.</li><li>Stage 2 (250K): shoot the House twice more. Then 5 shots flash red and yellow and one is solid red; the solid red shot advances.</li><li>Stage 3 (100K): shoot the House to light all 7 shots. Make 3 to qualify the Cellar.</li><li>Stage 4 (100K): the same, but the Cellar lights the final shot at the House.</li></ul>"},
 {t:"The Werewolf of Washington",h:NUM(ORBS).concat(alt(["garage","crypt","house_ent","left_ramp","right_ramp"])),b:"<p>Right side, attic window.</p><ul><li>Stage 1: shoot either orbit to transform, 500K plus 50K per transformation.</li><li>Stage 2: the House and both ramps flash for a combo. The Nth shot scores the base value plus 125K x (N² - N). After the first flashing shot, each next one must come within 7 seconds. The Garage or Crypt cashes out the transformation, as does timing out.</li><li>The House keeps all shots lit; a ramp turns off until another shot is made. After the third transformation the final shot lights at the House.</li></ul>"+UNK("If the left orbit transform falls into the Back Door, the spotted shot starts the 7 second combo timer.")}
]},
{g:"Haunts",id:"locked_haunts",title:"Locked Haunts",steps:[
 {t:"The Skeleton Key",h:["house","junk_ins","left_ramp"],b:"<p>Each Skeleton Key from the Trunk unlocks one of four bonus Haunts at the far right window. They unlock in random order, except that on default settings Dracula comes first on October 31 and Santa Claus first in December.</p>"},
 {t:"Santa Claus Conquers the Martians",h:RAMPS.concat(["garage","crypt"],ORBS,["cellar"]),b:"<p>Stage 1 (50K): shoot a ramp, then the Garage or Crypt, then an orbit.</p><p>Stage 2 (50K): every shot but the House starts green. A green shot turns red, a red shot turns green. Make 3 green shots to light the final shot at the Cellar.</p>"+UNK("Turning every shot red before the final shot gives a bonus that is not documented yet.")},
 {t:"The Giant Gila Monster",h:alt(NOH).concat(["house_ent","pops"]),b:"<p>Stage 1 (50K): the House and the major shots are lit. Shots raise the base value, which the House collects.</p><p>Stage 2: 20 pop bumper hits light the final shot at the House. The lit ramps and orbits alternate and raise the bumper value, which starts at 100K and rises 50K per lit shot.</p>"},
 {t:"The Satanic Rites of Dracula",h:["house"],b:"<p>Not documented yet. The rulesheet lists it with \"need info\".</p>"},
 {t:"Eegah",h:alt(ALL).concat(["cellar"]),b:"<p>Stage 1: shoot all major shots, then the Cellar.</p><p>Stage 2: make 2 ramp shots (the same ramp counts twice) to light the Cellar.</p><p>Stage 3: make 6 shots to the orbits, ramps and House Entrance to light the House and finish.</p>"}
]},
{g:"Haunts",id:"trailer",title:"Trailer Trash and Director's Cut",steps:[
 {t:"Trailer Trash",h:["house_ent","left_ramp","right_ramp","house_ins"],b:"<p>After any Haunt, the House Entrance lights on a hurry-up to score 50% of the Haunt's points again. One ramp raises it to 75%, both ramps to 100%. It runs during multiball too.</p>"+UNK("The Atomic Raygun cannot collect the hurry-up, but it can be used on the ramps to boost it.")},
 {t:"B-Restorator",h:["restorator"],b:"<p>Each completed Haunt advances the B-Restorator rank above the flippers: 1M plus 500K per rank.</p>"},
 {t:"Director's Cut",h:["directors","house_ent","cellar"],b:"<p>At rank 4 the House Entrance lights to start Director's Cut, which takes precedence over everything else. It re-collects each completed Haunt: shoot the lit blue shots to qualify the Cellar and cash out, four times, for a 100M bonus. Starting it is one of the seven tasks.</p>"+UNK("The rulesheet does not say which shots light blue.")}
]},
{g:"Haunts",id:"haunt_wiz",title:"House Party and They Came From Space",steps:[
 {t:"House Party",h:alt(NOH).concat(["house_ent","turret"]),b:"<p>Lit at the House after playing three Haunts. A 4-ball multiball: the major shots score Jackpots of 25K x the shots made in those three Haunts, and turn off until a different shot is made.</p><p>The House Entrance scores a Super Party Jackpot, all Jackpots collected so far again. The turret spins; make the shot while its eyeball faces you to add a ball, once per House Party.</p>"},
 {t:"They Came From Space",h:alt(NOH).concat(["house_ent"]),b:"<p>Lit after starting six Haunts (the main six, or five plus a locked one). A 6-ball multiball in six phases, one per Haunt played. In each, make any 5 shots for Jackpots, then the House for a Super Jackpot of the Jackpot total. Finish all six for 100M. Starting it is one of the seven tasks.</p>"}
]},
/* ====== OTHER MAIN OBJECTIVES ====== */
{g:"Main objectives",id:"crypt_sec",title:"Deadhead Family Crypt",steps:[
 {t:"Open the Crypt",h:["crypt_door","crypt"],b:"<p>Hit the Crypt door 1 time, plus 1 per Deadhead defeated, and it lowers to reveal a scoop. Shoot the ball in.</p>"},
 {t:"Bash the Deadhead",h:["crypt","crypt_toy","cleaner"],b:"<p>A skull head lowers. Hit it 3 times, plus 2 per Deadhead defeated, then shoot into the Crypt once more to finish it. There are 15 Deadheads.</p>"},
 {t:"Rewards",h:["right_out","house_ent"],b:"<p>Each Deadhead lights Return at the right outlane and is worth 250K in bonus. Two Deadheads light Extra Ball at the House.</p>"},
 {t:"Super Head Shot",h:["crypt","head_ins"],b:"<p>The third Deadhead ends with a Super Head Shot at the Crypt: aim for the flashing target with the button. Completing it is one of the seven tasks (the rulesheet's list names the Clown Deadhead).</p>"+UNK("The apron card says to use the button to let them rest in pieces.")}
]},
{g:"Main objectives",id:"fryer_sec",title:"Freak Fryer and Gappa Angry!",steps:[
 {t:"Freak Fryer",h:["fryer"],b:"<p>Every switch hit counts. Level 1 takes 150 hits and scores 1M; each level takes 25 more hits and scores 500K more, up to level 5 at 1,000 hits in all and 3M.</p>"},
 {t:"Starting Gappa Angry!",h:["house_ent","gappa_ins"],b:"<p>At the top level the House Entrance lights to start Gappa Angry!, a single-ball mode. Shots start at 500K, rise 500K per stage and 25K per shot. All switches build a Super Jackpot. Starting it is one of the seven tasks.</p>"},
 {t:"Stage 1",h:NUM(["house_ent","house_lock"]),b:"<p>The House Entrance, then lock a ball in the House Lock.</p>"},
 {t:"Stage 2",h:NUM(["left_ramp","right_ramp","garage"]),b:"<p>Both ramps, then lock a ball in the Garage.</p>"},
 {t:"Stage 3",h:NUM(["left_orbit","right_orbit","house_ent","crypt"]),b:"<p>Both orbits and the House Entrance, then lock a ball in the Crypt.</p>"},
 {t:"Stage 4",h:NUM(["left_ramp","right_ramp","house_ent","crypt","trunk"]),b:"<p>Both ramps, the House Entrance and the Crypt, then lock a ball in the Trunk.</p>"},
 {t:"Stage 5",h:NUM(["left_orbit","right_orbit","left_ramp","right_ramp","house_ent","garage"]),b:"<p>Both orbits, both ramps and the House Entrance, then lock another ball in the Garage.</p>"},
 {t:"Stage 6 and Gappa Angry Multiball",h:["cellar"].concat(alt(ALL)),b:"<p>Shoot the Cellar to collect the Super Jackpot and start a 6-ball multiball. All shots stay lit for Jackpots; clear them all, then shoot the House for a Super Jackpot.</p>"+UNK("How the Jackpot value is built is not documented yet.")},
 {t:"Shortcuts",h:["back_door","trunk"],b:"<p>The Back Door skill shot spots one shot. A ball landing in the Trunk while one is already locked completes the level at once.</p>"},
 {t:"Consolation modes",h:["pops","gargs","left_ramp","house_ent","crypt"],b:"<p>Drain before the end and a mode starts with the Jackpot built so far:</p><ul><li>Stage 2: Pool Party. Pop bumpers score more, and every 20 bumper hits score the Jackpot, for the rest of the ball.</li><li>Stage 3: Dance Fever, 2 balls. The Gar-Goil targets score Jackpots and light the shots around them.</li><li>Stage 4: Make-Out Mayhem, 3 balls. Left ramp, House and Crypt score Jackpots.</li><li>Stage 5: Scream Test, 4 balls. Left ramp, House, right ramp and Crypt; one random shot scores, the others add +1x, up to 6x.</li><li>Stage 6: Run For Your Life, 5 balls. Both orbits, both ramps and the House score Jackpots.</li></ul>"+UNK("Pool Party's bumper value is given as 250K, with a question about whether it rises.")}
]},
{g:"Main objectives",id:"gargoils",title:"Gar-Goils Gone Wild",steps:[
 {t:"Fill the gauge",h:["gargs","gauge"],b:"<p>Complete the Gar-Goil targets two times (rising to four) to fill the Garg-Oil Gauge, then complete them once more to start the mode. Starting it is one of the seven tasks.</p>"},
 {t:"The mode",h:["gargs","ggw_ins"].concat(NUM(ORBS)),b:"<p>Each Gar-Goil target scores 50K plus 10K per hit, with 150K plus 25K for all four. Each orbit scores 150K plus 150K per shot.</p>"+UNK("A Super Jackpot exists, but how it is collected is not documented yet.")}
]},
{g:"Main objectives",id:"garage_mb",title:"Garage multiballs",steps:[
 {t:"Lighting locks",h:["gravestone","garage","garage_ins"],b:"<p>Hit the gravestone drop target to light locks: once for the first multiball (lights all locks), once per lock for the second, twice per lock for the third. Lock three balls in the Garage to start. They can start during a Haunt.</p>"},
 {t:"Wild Women Multiball",h:alt(["left_orbit","left_ramp","house_ent","right_ramp","crypt","right_orbit"]).concat(["house_ent"]),b:"<p>All major shots except the Garage light for Jackpots: 350K, plus 25K each. All five lights a 1M Super Jackpot at the House. After that, both orbits score Super Jackpots (800K plus 25K) for the rest of the multiball.</p>"+UNK("Five Jackpots with the Garage left out means the rulesheet's major shots do not include the House. That is my reading; the House is dimmed here.")},
 {t:"Add-a-Zombie Multiball",h:NUM(["left_orbit","house_ent","crypt","right_orbit"]).concat(["garage"]),b:"<p>The left orbit, House Entrance, Crypt and right orbit light for Jackpots: 500K, plus 25K each. The Garage adds a Jackpot at a random shot.</p>"},
 {t:"Attic Attack Multiball",h:alt(ALL),b:"<p>All shots light for Jackpots: 500K, plus 25K each. A shot relights once a different one is made. Every 5 Jackpots light a Super Jackpot at the House worth the Jackpot total. Starting it is one of the seven tasks.</p>"}
]},
{g:"Main objectives",id:"junk",title:"Junk in the Trunk",steps:[
 {t:"Pick and light the Junk",h:["trunk_tg","junk_ins","trunk_ins"],b:"<p>The flashing insert cycles through the Junk. Hit any Trunk target to pick it, then complete the targets to light the Trunk.</p>"},
 {t:"Collect it",h:["left_ramp","trunk"],b:"<p>Shoot the lit left ramp to collect the Junk and lock a ball. A ball that falls into the Trunk lock also counts.</p>"},
 {t:"The Junk",h:["junk_ins"],b:"<ul><li>Skeleton Key: unlocks a bonus Haunt.</li><li>Lab Test: raises Jackpot values.</li><li>Elvira's Dagger: adds a bonus to each non-multiball Haunt.</li><li>Atomic Raygun: lights the button to spot a shot in the most recent mode, in that shot's color. Not usable on some awards, such as Trailer Trash.</li></ul>"},
 {t:"Trunk Multiball",h:["trunk_tg","left_ramp"].concat(alt(NOH)),b:"<p>Lock 2 balls to start a 2-ball multiball. Two random shots are lit for Jackpots; a Trunk target moves them. Completing the targets lights the left ramp for a Super Jackpot and 1 to 3 of a random Junk item. It can be carried into other modes.</p>"},
 {t:"Phone-A-Fiend Multiball",h:["trunk_tg","left_ramp"].concat(alt(["left_orbit","right_ramp","right_orbit"])),b:"<p>Collect at least one of every Junk item, then lock two balls in the Trunk again. Complete the Trunk targets to light the left ramp for a Jackpot, which lights the ramp and orbit shots for 20 seconds. Each Jackpot is 500K more than the last. Starting it is one of the seven tasks.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"side",title:"Side modes and Double Trouble",steps:[
 {t:"Un-Happy Hour",h:NUM(RAMPS),b:"<p>Make 5 ramp shots, plus 2 each time it has run, to start it. Ramps score 350K plus 25K each for 30 seconds.</p>"},
 {t:"Drive Me Crazy",h:NUM(ORBS),b:"<p>Make 5 orbit shots, plus 2 each time it has run, to start it. Orbits score 300K plus 25K each for 30 seconds.</p>"+UNK("Neither side mode can run with the other or with Gar-Goils Gone Wild.")},
 {t:"Double Trouble",h:["trunk_tg","hof_tg","inlanes","pfx"],b:"<p>Complete the Trunk targets and the Hand of Fate targets to light the inlanes, then roll over one for 2x scoring for 30 seconds. Completing either bank again adds 10 seconds. Qualify and start it again during 2x for 4x and a fresh timer.</p>"}
]},
{g:"Other scoring",id:"hof",title:"Hand of Fate and Manos Wheel",steps:[
 {t:"Lighting it",h:["hof_tg","hof_ins","left_out"],b:"<p>Complete the right target bank to light the Hand of Fate at the left outlane. Drain down it and stop the wheel on the display with the lockdown bar button within 6 seconds.</p>"},
 {t:"The wheels",h:["left_out"],b:"<p>Six awards per wheel; a collected award is replaced by part of a picture and scores nothing if landed on again. The first wheel: Ball Save, Extend Garage Multiball, Extend Trunk Multiball, 5M, 2M and Double Bone-Us. Later wheels add Extra Ball and Special.</p>"+UNK("One award on each of the second and third wheels is not documented yet.")},
 {t:"Manos Wheel",h:["hof_tg","left_out"],b:"<p>Collect every award to start Manos Wheel. Hand of Fate targets collect the value on a small spinning wheel (250K to 5M) and add it to a Jackpot collected at the left outlane.</p>"}
]},
{g:"Other scoring",id:"eb",title:"Return, extra balls and bonus",steps:[
 {t:"Return",h:["right_out"],b:"<p>Return is the right outlane ball save, lit by defeating a Deadhead.</p>"},
 {t:"Extra balls",h:["house_ent","house_ins"],b:"<p>Extra Ball lights at the House by completing two Haunts or defeating two Deadheads.</p>"},
 {t:"End-of-ball bonus",h:["crypt_toy"],b:"<p>250K per Deadhead (kept from ball to ball), 5K per Haunt shot and a base value, times the bonus multiplier and Double Bone-Us.</p>"+UNK("How the base value is set is not documented yet.")}
]},
/* ====== WIZARD MODE ====== */
{g:"Wizard mode",id:"wmv",title:"Wild Market Value",steps:[
 {t:"The seven tasks",h:["directors","head_ins","trunk","gappa_ins","ggw_ins","garage_ins","house"],b:"<ul><li>Start Director's Cut</li><li>Banish the Clown Deadhead (Super Head Shot)</li><li>Start Phone-A-Fiend Multiball</li><li>Start Gappa Angry!</li><li>Start Gar-Goils Gone Wild</li><li>Start Attic Attack Multiball</li><li>Start They Came From Space</li></ul>"},
 {t:"Sell the house",h:["cellar","wmv","for_sale"],b:"<p>Once lit, Wild Market Value starts at the Cellar. A 30 second hurry-up then runs: hit the Wild Market Value target to sell the house for the value built up during the game.</p>"+UNK("Which target this is, is my guess from Stern's manual. The apron card says to hit the target to sell high.")}
]}
];

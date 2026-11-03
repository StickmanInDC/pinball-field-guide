/* ---------- playfield features (coordinates in the 640x1200 crops; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 left_orbit:{n:"Left orbit",c:0,s:[B([[130,532],[122,480],[105,420],[85,350],[68,280],[58,200],[62,130],[85,85],[130,62]],14)],a:[108,430],x:"My reading: the leftmost arrow, with the three bicycle chapter inserts below it. The rulesheet starts Season 1 chapters at the left orbit and left ramp, and the walkie-talkie inserts sit under the Lock Ball ramp, so I take the bicycles to be the left orbit. The path up the left side is a guess."},
 left_ramp:{n:"Left ramp",c:1,s:[B([[200,522],[192,470],[175,410],[155,345],[135,280],[120,215],[112,150]],18)],a:[170,400],x:"The arrow with the Lock Ball insert and the walkie-talkie chapter inserts below it, between the two Lite Lock targets. The rulesheet locks balls, and starts every wizard mode, at the left ramp. The path up the left is my reading.",v:{premium:{x:"The arrow with the Lock Ball insert and the walkie-talkie chapter inserts below it, between the two Lite Lock targets. The rulesheet locks balls, and starts every wizard mode, at the left ramp. On the Premium and LE the ramp has white covers with red chevrons for the projector, and Stern lists an Eleven Telekinesis magnetic lock. The path is my reading."}}},
 lite_lock:{n:"Lite Lock targets",c:1,s:[C(152,510,11),C(226,492,11)],a:[189,500],x:"The two green Lite Lock inserts on each side of the left ramp. The rulesheet lights locks with \"the green standup targets on each side of the left ramp\". The targets sit just behind the inserts."},
 lock_ins:{n:"Lock Ball insert",c:1,s:[E(215,572,18,14)],a:[215,572]},
 standup_lane:{n:"Left standup lane",c:1,s:[B([[264,522],[262,475],[258,438]],14)],a:[262,480],x:"The arrow with the Extra Ball, Demo Dog Attack and Mystery inserts below it. The rulesheet lights extra ball, Demodog Attack and mystery at the left standup lane, and also calls it the standup/mystery lane."},
 standup_tgt:{n:"Left standup target",c:0,s:[C(258,428,9)],a:[258,428],x:"A guess: the end of the left standup lane. I could not see the target in the photos."},
 lane_ins:{n:"Extra Ball, Demo Dog Attack and Mystery inserts",c:1,s:[E(271,567,15,12),E(272,603,15,12),E(285,640,15,12)],a:[276,603]},
 center:{n:"Center shot (up the middle)",c:1,s:[B([[337,522],[337,475],[337,440]],16)],a:[337,480],x:"The purple center arrow, with the five Demogorgon mode inserts below it. The rulesheet shoots \"up the middle\" to start Demogorgon modes."},
 gorgon_ins:{n:"Demogorgon mode inserts",c:1,s:[R(322,558,32,24),R(322,596,32,24),R(322,631,32,24),R(322,668,32,24),R(322,708,32,24)],a:[338,640],x:"Bust Out!, Trap 'Em!, What's That?, Run Will! and Can't Stop This!"},
 drops:{n:"Drop targets",c:0,s:[R(276,372,126,26)],a:[339,385],x:"Stern lists a 4-bank of resettable memory drop targets guarding the Demogorgon. In the Pro photo the Hawkins Laboratory ramp covers them, so this is placed from the Premium photo.",v:{premium:{c:1,x:"The 4-bank of drop targets in front of the center ramp, showing the letters W I L L, with four purple inserts in front. The rulesheet spells words here to light the Demogorgon."}}},
 scoop:{n:"Center scoop",c:0,s:[C(338,352,11)],a:[338,352],x:"A guess. The rulesheet puts a scoop behind the drop targets and calls the shot both \"the middle (behind drops)\" and \"the center scoop\". I could not see it in the photos."},
 hawkins:{n:"Center ramp (Hawkins Laboratory ramp)",c:1,s:[R(272,320,128,155)],a:[336,400],x:"Stern's Hawkins Laboratory transforming ramp, which leads to the Demogorgon. In the Pro photo it sits over the drop targets. The rulesheet says it lowers and raises during Run Will! and lowers for the Can't Stop This! super jackpot.",v:{premium:{s:[R(262,234,140,112)],a:[332,290],x:"Stern's center ramp that doubles as a projector screen and leads to the Demogorgon. The rulesheet says it lowers and raises during Run Will! and lowers for the Can't Stop This! super jackpot."}}},
 demogorgon:{n:"Demogorgon",c:1,s:[E(330,200,50,46)],a:[330,200],x:"Stern's sculpted Demogorgon, which reacts to the ball. Shots into its mouth kill it in the Demogorgon modes.",v:{premium:{x:"Stern's sculpted Demogorgon, which shakes on the Premium and LE. Shots into its mouth kill it in the Demogorgon modes."}}},
 mouth:{n:"Demogorgon mouth",c:1,s:[C(330,224,13)],a:[330,224]},
 burn:{n:"Burn It Back loop",c:1,s:[B([[413,520],[414,470],[418,420],[424,372]],15)],a:[415,460],x:"The arrow with the Burn It Back insert below it. The rulesheet also calls it the right inner loop. Where the loop goes past the entrance is my guess."},
 burn_ins:{n:"Burn It Back insert",c:1,s:[C(410,570,15)],a:[410,570]},
 right_ramp:{n:"Right ramp",c:0,s:[B([[470,545],[480,490],[492,430],[502,360],[506,290],[500,220],[490,160]],18)],a:[492,440],x:"My reading: the arrow with the three binocular chapter inserts, under the metal ramp entrance. The rulesheet starts Season 2 chapters at the right ramp and right orbit. The path is a guess."},
 right_orbit:{n:"Right orbit",c:0,s:[B([[538,548],[552,480],[564,410],[570,330],[570,250],[562,170],[545,110],[505,75],[450,60]],14)],a:[562,420],x:"My reading: the rightmost arrow, with the three telephone chapter inserts, up the outer right lane beside the Hawkins sign. The rulesheet links it with the pop bumpers in Morse Code. The path is a guess."},
 saucer:{n:"Saucer (kicker)",c:1,s:[C(80,652,13)],a:[80,652],x:"The hole at the end of the lower left arrow, below the Danger sign, with the 2X Scoring insert in front. The rulesheet says saucer, left saucer and kicker; I take all three to be this shot."},
 x2_ins:{n:"2X Scoring insert",c:1,s:[E(135,737,17,13)],a:[135,737]},
 s1_bikes:{n:"Bicycle chapter inserts",c:1,s:[C(142,583,13),C(152,623,13),C(163,662,13)],a:[152,623],x:"Three inserts under the left orbit. Each shot lights one; the third starts a Season 1 chapter."},
 s1_walkie:{n:"Walkie-talkie chapter inserts",c:1,s:[C(220,610,13),C(232,652,13),C(245,692,13)],a:[232,652],x:"Three inserts under the left ramp. Each shot lights one; the third starts a Season 1 chapter."},
 s2_bino:{n:"Binocular chapter inserts",c:1,s:[C(460,597,13),C(457,637,13),C(452,680,13)],a:[457,637],x:"Three inserts under the right ramp. Each shot lights one; the third starts a Season 2 chapter."},
 s2_phone:{n:"Telephone chapter inserts",c:1,s:[C(527,595,13),C(520,635,13),C(510,675,13)],a:[520,635],x:"Three inserts under the right orbit. Each shot lights one; the third starts a Season 2 chapter."},
 s1_names:{n:"Season 1 chapter inserts",c:1,s:[C(177,707,13),C(182,751,13),C(236,740,13),C(212,787,13),C(202,832,13),C(212,880,13)],a:[202,790],x:"Where's Barb?, Monster Hunting!, Bullies!, Get Me Out!, Operation Mirkwood! and Follow the Compass!"},
 s2_names:{n:"Season 2 chapter inserts",c:1,s:[C(455,726,13),C(415,747,13),C(438,787,13),C(392,792,13),C(378,837,13),C(367,882,13)],a:[410,790],x:"Quarter Hunt!, Save Will!, What Mama Says!, Morse Code!, Lure Dart! and Turn Up the Heat!"},
 dd_names:{n:"Demodog Attack inserts",c:1,s:[C(290,762,12),C(280,800,12),C(275,840,12)],a:[282,800],x:"Break Out!, Junk Yard! and It's a Trap!"},
 demodog:{n:"DEMODOG letters",c:1,s:[C(117,775,11),C(110,615,11),C(318,362,10),C(358,362,10),C(445,495,11),C(507,540,11),C(495,717,11)],a:[110,615],x:"Seven teal letter inserts that run clockwise from the lower left: D, E, then M and O behind the drop targets, D and O around the right ramp, and G at the lower right. The rulesheet spells DEMODOG with standup targets; I take each target to sit at its letter, but I could not see the targets. In the Pro photo the M and O are hidden under the center ramp."},
 pops:{n:"Pop bumpers",c:0,s:[C(410,190,22),C(492,222,16)],a:[410,190],x:"One pop bumper cap is visible right of the Demogorgon; the second is my guess, under the right ramp. The rulesheet has a left pop cycling Season 1 chapters and a right pop cycling Season 2 chapters."},
 objectives:{n:"Objective inserts",c:1,s:[C(247,972,15),C(237,925,15),C(267,887,15),C(314,887,15),C(344,926,15),C(332,972,15)],a:[237,925],x:"Left to right: 5-Way Combo, Send It Back, Demodog!, Demogorgon!, Light the Fire and Telekinesis Multiball, around the Final Showdown insert."},
 showdown:{n:"Final Showdown insert",c:1,s:[C(291,937,22)],a:[291,937]},
 pf2x:{n:"2X Playfield Multiplier insert",c:1,s:[E(290,1047,26,12)],a:[290,1047]},
 spell:{n:"Spell of Protection insert",c:1,s:[C(27,1055,14)],a:[27,1055]},
 l_out:{n:"Left outlane",c:0,s:[E(35,990,6,26)],a:[35,990],x:"My reading of the lane slots. The Spell of Protection insert sits below it."},
 l_in:{n:"Left return lane",c:0,s:[E(86,967,6,26)],a:[86,967]},
 r_in:{n:"Right return lane",c:0,s:[E(496,965,6,26)],a:[496,965]},
 r_out:{n:"Right outlane",c:0,s:[E(547,995,6,26)],a:[547,995]},
 flippers:{n:"Flippers",c:1,s:[B([[170,1118],[245,1160]],14),B([[410,1118],[335,1160]],14)],a:[290,1140]},
 shooter:{n:"Shooter lane",c:0,s:[B([[606,1150],[606,900],[604,650]],12)],a:[606,900],x:"My reading of the plunger lane along the right side."}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["left_orbit","left_ramp","standup_lane","center","burn","right_ramp","right_orbit"];
var ALL8=["saucer"].concat(MAJ);
var RO=["left_orbit","left_ramp","right_ramp","right_orbit"];
var LANES=["l_in","r_in"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["objectives","showdown"],b:"<p>Six objectives sit above the flippers: 5-Way Combo, Send It Back, Demodog!, Demogorgon!, Light the Fire and Telekinesis Multiball. Light all six solid to qualify the Final Showdown.</p>"+UNK("The rulesheet's Layout section is only photos, so the shot names on the playfield are my reading of the inserts.")},
 {t:"Main shots",h:NUM(ALL8),b:"<p>Left to right, as I read the photo: saucer, left orbit, left ramp, left standup lane, center (up the middle), Burn It Back loop, right ramp and right orbit.</p>"+UNK("The saucer, left ramp, standup lane, center and Burn It Back are fixed by their inserts. The left orbit, right ramp and right orbit are my reading of the chapter arrows.")},
 {t:"The center",h:["hawkins","demogorgon","mouth","drops","scoop","demodog"],b:"<p>The Demogorgon stands at the top, at the end of the center ramp. Four drop targets guard it, with the center scoop behind them.</p><p data-ed=\"pro\">In Stern's Pro photo the Hawkins Laboratory ramp sits over the drop targets.</p><p data-ed=\"premium\">On the Premium and LE the center ramp doubles as a projector screen.</p>"},
 {t:"Chapter shots",h:["s1_bikes","s1_walkie","s2_bino","s2_phone"].concat(alt(RO)),b:"<p>Three inserts sit under each of the left orbit, left ramp, right ramp and right orbit. Each shot lights one, and the third starts a chapter: Season 1 on the left two, Season 2 on the right two.</p>"},
 {t:"DEMODOG",h:["demodog"],b:"<p>Seven letter targets spell DEMODOG, spread clockwise around the playfield from the lower left. Spell it to light a Demodog Attack at the left standup lane.</p>"+UNK("I placed the targets at their letter inserts; I could not see the targets themselves.")},
 {t:"Pro differences",ed:"pro",h:["left_ramp","lite_lock","hawkins"],b:"<p>On the Pro, balls lock at the left ramp behind an up-post. During Telekinesis Multiball the left ramp can lock one ball for 20 seconds to double the super jackpot. There is no swipe-a-ball.</p>"},
 {t:"Premium and LE differences",ed:"premium",h:["left_ramp","hawkins","demogorgon"],b:"<p>On the Premium and LE, balls lock on the Eleven Telekinesis magnet. During Telekinesis Multiball up to two balls can lock on the magnet for a 2x or 3x super jackpot, and the action button can swipe a locked ball into another multiball. Stern lists the projector and a shaking Demogorgon for these models.</p>"+UNK("I could not find the magnet in the photos, so it is not marked.")}
]},
{g:"Layout and basics",id:"overview",title:"Rules overview",steps:[
 {t:"Chapters",h:["s1_names","s2_names"].concat(alt(RO)),b:"<p>Make three shots to a ramp or orbit to start a Season 1 or Season 2 chapter. Shoot the flashing shots to win it and collect drawings. Starting enough chapters lights an extra ball.</p>"},
 {t:"Demodog Attack",h:["demodog","standup_lane","dd_names"],b:"<p>Spell DEMODOG, then shoot the left standup lane to start one of three Demodog Attack modes.</p>"},
 {t:"Demogorgon",h:["drops","center","hawkins","mouth"],b:"<p>Spell words at the center drop targets, then shoot up the middle to battle the Demogorgon. There are five Demogorgon modes. Once per game the action button kills a Demogorgon instantly.</p>"},
 {t:"Telekinesis Multiball",h:["lite_lock","left_ramp","saucer"],b:"<p>Shoot the Lite Lock targets, then the left ramp, to lock balls for 3-ball Telekinesis Multiball. Collect jackpots, then cash out the super jackpot at the saucer.</p>"},
 {t:"Burn It Back and bonus",h:["burn","saucer","spell"].concat(LANES),b:"<p>Burn It Back loops build toward an extra ball, Spell of Protection and 2x Scoring at the saucer. Complete the return lanes, which cycle with the flippers, to raise bonus X and light mystery at the left standup lane.</p>"},
 {t:"The Upside Down",h:["drops"].concat(alt(RO)),b:"<p>Now and then the game flips into the Upside Down. Shoot the center drop targets to escape; every other Upside Down needs the major shots instead.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Skill shot",h:["drops","shooter"],b:"<p>Plunge into the flashing drop target: 5M, +1M per skill shot.</p>"+UNK("The rulesheet does not say how the plunge reaches the drop targets.")},
 {t:"Super skill shot",h:[["shooter",1],["flippers",2],["saucer",3]],b:"<p>Soft plunge toward the flippers, then shoot the saucer (the rulesheet says kicker): 10M, +2.5M per super skill shot.</p>"},
 {t:"MXV super skill shot",h:["drops","saucer"],b:"<p>Make both on the same plunge: rebound off the flashing drop target into the kicker. Along with both skill shot awards, it scores 25M, +5M per MXV super skill shot, and a drawing.</p>"}
]},
/* ====== MAIN OBJECTIVES ====== */
{g:"Main objectives",id:"combo",title:"5-Way Combo",steps:[
 {t:"Making the combo",h:alt(["left_orbit","left_ramp","burn","right_ramp"]),b:"<p>Make five shots in a row, each within a few seconds of the last. The left orbit, left ramp, Burn It Back loop and right ramp can be shot in any combination.</p><p>When ball lock is lit the combo is much harder through the left ramp: the combo timer seems to keep running while the ball is held.</p>"},
 {t:"Finishing shots",h:alt(["saucer","standup_lane","center","right_orbit"]),b:"<p>The saucer, left standup lane, center and right orbit end the combo, so they can only be the fifth shot. It can be collected during multiball.</p>"},
 {t:"Reward",h:["objectives"],b:"<p>Lights the 5-Way Combo objective and adds 10M to end-of-ball bonus for the rest of the game. Mystery can also award the objective.</p>"}
]},
{g:"Main objectives",id:"chapters",title:"Starting chapters",steps:[
 {t:"Three shots",h:["s1_bikes","s1_walkie","s2_bino","s2_phone"].concat(alt(RO)),b:"<p>Each shot to the left orbit, left ramp, right ramp or right orbit lights an insert under it. Complete a set of three to start a chapter. The left orbit and left ramp start Season 1 chapters, the right ramp and right orbit Season 2.</p>"},
 {t:"Early help",h:["standup_lane"],b:"<p>Until two chapters have been played, the left standup lane spots progress toward the shot closest to starting a chapter. A lit Demodog Attack takes priority there.</p>"},
 {t:"Choosing a chapter",h:["pops"],b:"<p>The lit chapters start random. Each pop bumper hit changes them: the left pop cycles Season 1, the right pop Season 2.</p>"+UNK("Which pop is left and which is right is my reading; only one pop cap is clear in the photos.")},
 {t:"Drawings and limits",h:["s1_names","s2_names"],b:"<p>Completing a chapter awards one drawing, or two if you meet that chapter's restriction. Chapters cannot start during Telekinesis Multiball or a Demodog Attack, but can start before them and keep running.</p>"}
]},
{g:"Main objectives",id:"season1",title:"Season 1 chapters",steps:[
 {t:"Where's Barb?",h:["saucer"].concat(alt(MAJ)),b:"<p>40 seconds. All shots are lit, with the saucer flashing. Barb is at one random shot. Shots score 1M, +250K for each shot Barb is not at. The saucer (2M) reveals her, and the flashing shot finds her for 5M, or 10M if it is the last one left.</p><p>Find her on the very first shot for 40M and 2 drawings.</p>"},
 {t:"Monster Hunting",h:["drops","center"],b:"<p>45 seconds. Five waves at the drop targets, worth 1M per drop rising 500K each wave. Once any drop falls the bank resets for the next wave, so you get one shot per wave. After the fifth wave the center lights for 7M per drop knocked down in that wave, up to 28M.</p><p>No 2-drawing bonus.</p>"},
 {t:"Bullies",h:alt(RO).concat(["standup_lane"]),b:"<p>45 seconds. Shoot the left orbit, left ramp, right ramp and right orbit for 1.5M, 2M, 2.5M and 3M, then the left standup lane for 7M.</p><p>2 drawings: shoot the four in the order right ramp, left ramp, right orbit, left orbit.</p>"},
 {t:"Get Me Out!",h:["standup_lane","drops","center","burn"],b:"<p>40 seconds. The left standup lane, drops, center and Burn It Back are lit. Five lit shots light the center for the final shot. Drops score 1M, +500K every 5 drops up to 2.5M; shooting drops only, you must clear five full banks before the center is the last shot (3M).</p><p>2 drawings: finish using only the drop targets.</p>"+UNK("The rulesheet says the scoring is hard to pin down when drops and lit shots are mixed.")},
 {t:"Operation Mirkwood",h:["left_ramp","right_ramp"],b:"<p>70 seconds. Ramp shots collect items for 1M. Another ramp while both are flashing counts as a combo and adds +1M; otherwise the value resets. The 10th item scores 10M, or 20M if every shot was a combo.</p><p>2 drawings: make a 5-way combo using only the ramps.</p>"},
 {t:"Follow the Compass",h:alt(ALL8).concat(["standup_lane"]),b:"<p>40 seconds. One shot is lit orange. Make four lit shots for 1.5M, 2M, 2.5M and 3M, then the left standup lane for 7M. The spinner moves the lit shot.</p><p>2 drawings: finish without using the spinner. Starting it from the left standup lane tends to spoil this, because the ball hits the spinner on the way down.</p>"+UNK("The spinner is not marked; I could not place it.")}
]},
{g:"Main objectives",id:"season2",title:"Season 2 chapters",steps:[
 {t:"Quarter Hunt",h:["left_ramp","right_ramp"],b:"<p>45 seconds. Every switch scores 50K. Every 25 switch hits is a level up worth 1M, 2.5M, 5M and 10M. Each ramp adds 25K to the switch value; a ramp will not relight for this until you shoot the other one.</p><p>2 drawings: reach all four levels.</p>"},
 {t:"Save Will",h:[["right_ramp",1],["left_orbit",2],["left_ramp",3],["burn",4],["saucer",5,"alt"],["standup_lane",5,"alt"],["center",5,"alt"]],b:"<p>40 seconds. A combo chapter: right ramp, left orbit, left ramp, Burn It Back, then the saucer, left ramp, left standup lane or center. Each shot is a hurry-up from 2M, +250K per shot. All five as one combo adds 50M and an extra drawing.</p>"},
 {t:"What Mama Says",h:NUM(["left_orbit","left_ramp","standup_lane","burn","right_ramp","right_orbit"]),b:"<p>40 seconds. Six shots lit, the left orbit flashing. The flashing shot is worth 2x and moves left to right as shots are made. Shots score 1M, +500K each. Five shots complete it.</p><p>2 drawings: shoot only flashing shots.</p>"},
 {t:"Morse Code",h:["left_orbit","right_orbit","pops"].concat(alt(["left_ramp","right_ramp"])),b:"<p>45 seconds. Both orbits flash and both ramps are lit. Complete the message with right orbit and pop bumper hits, the spinner, or ramp shots (each spots 3 or 4 letters). About 16M on completion.</p><p>2 drawings: finish with right orbit shots only. Starting from the left standup lane tends to spoil this, through the spinner.</p>"},
 {t:"Lure Dart",h:[["burn",1],["right_orbit",2],["left_orbit",3],["standup_lane",4]],b:"<p>40 seconds. The left orbit, Burn It Back and right orbit are lit, from 3M, +250K per shot; then the left standup lane. Dart's pop bumper level raises the start to 4M or 5M.</p><p>2 drawings: shoot them in the order Burn It Back, right orbit, left orbit, then the standup lane.</p>"},
 {t:"Turn Up the Heat",h:["standup_lane","burn","left_ramp","right_ramp","lite_lock"],b:"<p>40 seconds. The left standup lane and Burn It Back flash for 2M and raise the temperature most. Ramps score 1M and raise it about half as much; each ramp's standups 500K, half again. Finish at the left standup lane once hot enough: about 4 flashing shots, 7 ramps or 14 standups.</p><p>2 drawings: use only the left standup lane and Burn It Back.</p>"+UNK("The rulesheet does not name the ramp standups. I take the left ramp's to be the Lite Lock targets; the right ramp's are not marked.")}
]},
{g:"Main objectives",id:"isolation",title:"Total Isolation",steps:[
 {t:"Qualifying",h:["left_ramp"],b:"<p>Total Isolation 1 is qualified after 4 chapters played, Total Isolation 2 after 8. Once qualified, the next left ramp shot starts the multiball. Normal add-a-ball rules apply.</p>"+UNK("The overview says wizard modes qualify after 4, 8, 10 and 12 chapters. The Send It Back and Light the Fire sections tie those to all six chapters of a season instead.")},
 {t:"Total Isolation 1",h:alt(MAJ).concat(["scoop"]),b:"<p>All major shots light for jackpots, from 1M +100K per shot, doubled for combos; a shot cannot be repeated. After 3 jackpots the center scoop scores a super jackpot worth all of them. Each super jackpot needs one more jackpot, and the third adds a ball. When every shot is needed, it drops back to 6 shots with only 5 or 6 lit.</p>"},
 {t:"Total Isolation 2",h:alt(MAJ).concat(["center"]),b:"<p>Every major shot flashes for points. Hit one to make it solid, then hit it again for a double jackpot. Combos also double jackpots. Do this for every lit shot to light a super jackpot at the center worth all shots made.</p>"}
]},
{g:"Main objectives",id:"senditback",title:"Send It Back",steps:[
 {t:"Starting it",h:["left_ramp","s1_names"],b:"<p>After all 6 Season 1 chapters have been played, the next left ramp shot starts Send It Back and lights its objective. It awards 10M per drawing collected.</p>"+UNK("The Chapters section says the chapters must be completed; this section says played.")},
 {t:"Playing it",h:alt(MAJ).concat(["demodog","scoop"]),b:"<p>Alternate a flashing major shot with a center shot (DEMODOG targets or the center scoop), once for each major shot.</p>"},
 {t:"Super jackpot",h:["hawkins","mouth"],b:"<p>Then use the center ramp to bash the Demogorgon, or shoot its mouth for an instant kill, for a super jackpot worth the mode's total. Normal play resumes.</p>"}
]},
{g:"Main objectives",id:"lightthefire",title:"Light the Fire",steps:[
 {t:"Starting it",h:["left_ramp","s2_names"],b:"<p>After all 6 Season 2 chapters have been played, the next left ramp shot starts Light the Fire and lights its objective. It awards 10M per drawing collected.</p>"},
 {t:"Lighting the targets",h:["demodog","scoop","center"],b:"<p>Shoot the center shots (DEMODOG targets or the center scoop) over and over. Each lights a DEMODOG target. Once all are lit the center goes dark; then complete the DEMODOG targets.</p>"},
 {t:"Super jackpot",h:["standup_lane","saucer"],b:"<p>The super jackpot, worth the mode's total, is then at the left standup lane or the kicker. The kicker scores it double. Normal play resumes.</p>"}
]},
{g:"Main objectives",id:"demodog",title:"Demodog Attack",steps:[
 {t:"Lighting it",h:["demodog","standup_lane","saucer"],b:"<p>Spell DEMODOG with direct hits to the standup targets to light the left standup lane. For the first Demodog Attack the saucer also counts. Play all three to light the Demodog! objective; completing one awards a drawing.</p><p>Chapters cannot start during a Demodog Attack. Demogorgon modes and Telekinesis Multiball can.</p>"},
 {t:"Break Out!",h:["demodog"],b:"<p>40 seconds. All DEMODOG targets are lit for 1M. Complete all the pulsing targets to raise the value to 2M, then 4M. 15 target hits complete it.</p>"},
 {t:"Junk Yard",h:[["left_orbit",1],["right_orbit",1],["left_ramp",2],["right_ramp",2],["standup_lane",3],["burn",3]],b:"<p>40 seconds. Three phases with two shots lit each: orbits, then ramps, then the left standup lane and Burn It Back.</p><ul><li>Orbits: the same one twice for 1M each, or both, the second 2M plus higher scoring after.</li><li>Ramps: the same twice for 2M and 3M, or both for 4M and 6M.</li><li>Lane and loop: the same twice for 4M to 9M, or both for 8M to 18M.</li></ul><p>Finishing phase 3 awards the drawing.</p>"},
 {t:"It's a Trap!",h:alt(ALL8),b:"<p>40 seconds. All eight shots are lit for 3M each and go dark when hit. Shoot all eight for the drawing. The Demodog! objective lights as soon as it starts.</p>"+UNK("The rulesheet does not list the eight shots; I take them to be the eight on the Main shots step.")}
]},
{g:"Main objectives",id:"demogorgon",title:"Demogorgon modes",steps:[
 {t:"Lighting it",h:["drops","center","gorgon_ins"],b:"<p>Complete the drop targets to spell words and light Demogorgon Ready. Each mode needs one more completion than the last. Once the drops are down and the purple arrow strobes, shoot up the middle. Sneak behind the drops early and the remaining drops and the word are spotted.</p><p>Play all five to light the Demogorgon! objective.</p>"},
 {t:"Demogorgon Bomb",h:["mouth"],b:"<p>During these modes the action button flashes red. Press it once per game to kill the current Demogorgon for a reduced value. In the two multiball modes it locks in the jackpot value without lowering the super jackpot.</p>"},
 {t:"Bust Out!",h:["mouth","demogorgon"],b:"<p>Single ball. One shot into the mouth kills it for 15M, or 10M after any side hits. Five side hits (100K each) kill it for 5M. Don't waste the bomb here.</p>"},
 {t:"Trap 'Em!",h:["mouth"].concat(alt(MAJ)),b:"<p>2-ball multiball. A hurry-up from 5M down to 500K. A mouth shot, or five side hits, collects it and lights all major shots for jackpots at that value. Collect them all for a super jackpot hurry-up at the Demogorgon worth them all, and shoot it again for a second one. Then the jackpot rises and it repeats.</p>"},
 {t:"What's That?",h:["mouth"],b:"<p>Single ball. Kill three Demogorgons: 30M each for a mouth shot first time, 20M after bashes, 10M if bashed to death.</p>"},
 {t:"Run Will!",h:["mouth","drops","hawkins"],b:"<p>4-ball multiball. First shoot the Demogorgon during the hurry-up to lock the jackpot value. Then the drops are lit for jackpots; collect them to light a super jackpot hurry-up at the Demogorgon, while the ramp up to it lowers and raises every second or two.</p>"},
 {t:"Can't Stop This!",h:alt(MAJ).concat(["mouth","hawkins"]),b:"<p>5-ball multiball with 60 seconds of ball save. Shoot the red jackpots. Once all are made, the ramp lowers for a super jackpot at the mouth worth them all, up to 100M; then the jackpots relight. Collect as many super jackpots as you can before time runs out.</p>"}
]},
{g:"Main objectives",id:"tk",title:"Telekinesis Multiball",steps:[
 {t:"Lighting locks",h:["lite_lock"],b:"<p>Shoot the green standups on each side of the left ramp. First multiball: complete both once for all three locks. Second and third: both once per lock. Fourth on: two sets per lock.</p>"},
 {t:"Locking",ed:"pro",h:["left_ramp","lock_ins"],b:"<p>Shoot the left ramp to lock. On the Pro the ball is held behind an up-post. The 3rd lock starts the multiball. Chapters can start before it, not during.</p>"},
 {t:"Locking",ed:"premium",h:["left_ramp","lock_ins"],b:"<p>Shoot the left ramp to lock on the magnet. The 3rd lock starts the multiball. Chapters can start before it, not during.</p><p>Swipe-a-ball: if another multiball starts while balls are locked, the action button adds a locked ball to it. You then need another left ramp shot to relock. No limit.</p>"},
 {t:"Jackpots",h:alt(MAJ).concat(["saucer"]),b:"<p>Shoot 5 lit jackpots, from 1.1M (+100K per super jackpot), to light the super jackpot at the left saucer for 6M. Collecting it lights the Telekinesis Multiball objective and awards a drawing. 2x Scoring doubles everything.</p>"},
 {t:"Doubling up",ed:"pro",h:["left_ramp","saucer"],b:"<p>The left ramp is also lit to lock a ball for 20 seconds, doubling the super jackpot; a 2x super jackpot awards 2 drawings.</p>"},
 {t:"Doubling up",ed:"premium",h:["left_ramp","saucer"],b:"<p>Up to two balls can lock on the magnet for a 2x or 3x super jackpot, worth 2 or 3 drawings.</p>"}
]},
{g:"Main objectives",id:"wizard",title:"Final Showdown",steps:[
 {t:"Starting it",h:["objectives","showdown","left_ramp"],b:"<p>With all six objectives solid, the next left ramp shot starts the Final Showdown. It awards 10M per drawing collected.</p>"+UNK("The rulesheet does not describe the mode itself, only that there is a surprise at the end if you complete it.")}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"upsidedown",title:"The Upside Down",steps:[
 {t:"How it starts",h:["drops"],b:"<p>It starts at random, based on switch hits, and can start during a chapter. Chapter and Telekinesis progress is hidden, but both can start in Upside Down 1, not in Upside Down 2.</p>"},
 {t:"Upside Down 1",h:["drops"],b:"<p>Each drop target scores a hurry-up from 7.5M that does not reset between hits. Up to 30M if you hit them all quickly.</p>"},
 {t:"Upside Down 2",h:alt(RO),b:"<p>The ramps and orbits are lit for a 10M hurry-up, and each shot adds a multiplier, up to 4x for the last. Combo them for around 80M to 90M, more with 2x Scoring.</p>"}
]},
{g:"Other scoring",id:"burn",title:"Burn It Back",steps:[
 {t:"Loop awards",h:["burn","burn_ins"],b:"<p>Burn It Back loops count up through the game:</p><ul><li>Extra ball after 1 to 10 loops, and again at 50.</li><li>Spell of Protection at 3, 12 and 25, then every 14 (39, 53...).</li><li>2x Scoring at 7 and 18, then every 14 (32, 46...).</li></ul>"+UNK("The Extra Balls section says 2 to 10 loops; this section says 1 to 10.")},
 {t:"Spell of Protection",h:["spell","l_out"],b:"<p>Lit at the left outlane by Burn It Back or mystery. When lit, a drain down the left outlane is saved. Lighting it again while lit adds 250K to its value.</p>"},
 {t:"2x Scoring",h:["saucer","x2_ins","pf2x"],b:"<p>Lit at the saucer by Burn It Back. Shoot it to start 60 seconds of double scoring.</p>"}
]},
{g:"Other scoring",id:"dart",title:"Dart (pop bumpers)",steps:[
 {t:"Evolving Dart",h:["pops"],b:"<p>Pops start at 10K and rise 3K each level. Levels need 25 pops, then 5 more each time:</p><ul><li>25: Dart evolves (13K)</li><li>55: second evolution, better Lure Dart (16K)</li><li>90: third evolution, best Lure Dart (19K)</li><li>130: a drawing (22K)</li></ul><p>Later levels only raise the pop value.</p>"}
]},
{g:"Other scoring",id:"drawings",title:"Drawings",steps:[
 {t:"What they do",h:["showdown"],b:"<p>Each drawing adds 10M to the jackpot at the start of all three wizard modes and 2M to end-of-ball bonus. 11 drawings in one game light an extra ball.</p>"},
 {t:"Where they come from",h:["drops","saucer","s1_names","s2_names","dd_names","left_ramp","pops","standup_lane"],b:"<ul><li>MXV super skill shot: 1</li><li>Completing a chapter: 1, or 2 under its restriction</li><li>Completing a Demodog Attack: 1</li><li>Telekinesis super jackpot: 1, 2 for 2x, 3 for 3x (Premium and LE)</li><li>130 pop bumper hits: 1</li><li>Mystery: 1</li></ul>"}
]},
{g:"Other scoring",id:"mystery",title:"Mystery",steps:[
 {t:"Lighting it",h:LANES.concat(["standup_lane","lane_ins"]),b:"<p>Odd-numbered return lane completions light mystery at the left standup lane. The lanes cycle with the flippers. In timed modes, including 2x Scoring, every other mystery adds time. In multiball without ball save, the first mystery lit adds a ball.</p><p>Mystery is pseudo-random and generally helps; it is fixed in tournament mode.</p>"},
 {t:"The 20 awards",h:["standup_lane"],b:"<ol><li>Light lock</li><li>Light extra ball (15M if disabled)</li><li>5-Way Combo objective</li><li>Add-a-ball</li><li>Spinner value +3K</li><li>Start chapter</li><li>Light Burn It Back award</li><li>Stranger Points (11M)</li><li>Hold bonus</li><li>+1x bonus</li><li>Eleven (never awarded)</li><li>Upside Down</li><li>Multiball</li><li>Add time</li><li>Advance Dart (+3K pops)</li><li>Light Demogorgon Ready</li><li>A joke award: all switches score some points</li><li>Light Demodog Attack</li><li>+1 drawing</li><li>Spell of Protection</li></ol>"}
]},
{g:"Other scoring",id:"extraball",title:"Extra balls and bonus",steps:[
 {t:"Extra balls",h:["standup_lane","lane_ins"],b:"<p>Lit at the left standup lane by starting 3 chapters, starting 6 chapters, 2 to 10 Burn It Back loops (percentage based), 50 loops, or mystery.</p>"},
 {t:"End-of-ball bonus",h:LANES,b:"<p>Bonus carries over between balls, except chapter scoring. It totals:</p><ul><li>10M with a 5-Way Combo</li><li>2M per Demogorgon mode started</li><li>5M per Demodog Attack started</li><li>3M per Telekinesis Multiball started</li><li>10% of chapter points this ball</li><li>2M per drawing</li></ul><p>All times bonus X, which rises +1x with even-numbered return lane completions, up to 5x. Mystery's hold bonus keeps the multiplier; on the last ball it pays the bonus twice.</p>"}
]},
{g:"Other scoring",id:"strategy",title:"Strategy",steps:[
 {t:"Stacking",h:["left_ramp","standup_lane","s1_names","s2_names"],b:"<p>The rulesheet suggests stacking Telekinesis Multiball on a running chapter. Start the chapter before or with the shot that starts multiball. For a bigger stack: start a chapter, then a Demodog Attack, then Telekinesis Multiball, in that order.</p>"},
 {t:"Cautions",h:["hawkins","standup_lane","burn"],b:"<p>Avoid stacking Telekinesis on a single-ball Demogorgon mode unless you can make the mouth shot; the big ramp flap gets in the way of the mystery lane and Burn It Back.</p>"},
 {t:"Bonus and loops",h:["left_ramp","right_ramp","burn"].concat(LANES),b:"<p>Bonus can be huge. With plenty of bonus achievements, spam ramp shots to complete return lanes and max out bonus X. Don't neglect Burn It Back: Spell of Protection is like an extra ball, and well-timed 2x Scoring can be massive.</p><p data-ed=\"premium\">On the Premium and LE, use the swipe-a-ball.</p>"}
]}
];

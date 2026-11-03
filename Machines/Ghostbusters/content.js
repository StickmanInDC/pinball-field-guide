/* ---------- playfield features (coordinates in the 640x1249 crops; Premium and LE photos are aligned to the Pro by an affine fit; "v" overrides fields per version) ---------- */
var C=function(x,y,r){return{t:"c",x:x,y:y,r:r}};
var E=function(x,y,rx,ry){return{t:"e",x:x,y:y,rx:rx,ry:ry}};
var B=function(p,w){return{t:"b",p:p,w:w}};
var R=function(x,y,w,h){return{t:"r",x:x,y:y,w:w,h:h}};
var F={
 scoop:{n:"Left scoop",c:0,s:[C(132,572,15)],a:[132,572],x:"The chrome scoop on the left, above the arrow with the Librarian, Back Off Man! and Spooked Librarian inserts. Stern's lamp list calls that arrow LT Scoop Arrow and the manual puts the LT Eject here. The hole is visible in the photos."},
 left_orbit:{n:"Left loop (spinner)",c:0,s:[B([[160,505],[152,455],[146,400],[140,345],[134,285]],18)],a:[158,492],x:"The lane up the left side from the arrow beside the 2X Values insert. Stern's lamp list calls the arrow Left Orbit and the manual puts the Spinner and an Up Post in this lane. The rulesheet calls it the left loop, or the spinner shot. Where it runs behind the firehouse is a guess."},
 spinner:{n:"Spinner",c:0,s:[R(124,322,32,20)],a:[140,332],x:"Placed from the Spinner switch in Stern's manual. I could not see the spinner flag in the photos."},
 left_ramp:{n:"Left ramp",c:0,s:[B([[234,505],[224,445],[206,380],[186,300],[170,220],[160,150]],20)],a:[234,492],x:"The arrow beside the 3X Values insert, with We Got One!, He Slimed Me! and The Ballroom below it. Stern's lamp list calls it Left Ramp Arrow. The ramp climbs the track-like ramp at the left and crosses the top of the playfield to the right side. Where the entrance sits behind the two targets is my reading of the manual.",v:{premium:{x:"The arrow beside the 3X Values insert, with We Got One!, He Slimed Me! and The Ballroom below it. Stern's lamp list calls it Left Ramp Arrow. On the Premium and LE it is a steel looping ramp (Stern's features list: repeatable steel crossover looping ramp). Where the entrance sits behind the two targets is my reading of the manual."}}},
 ramp_tg:{n:"Targets in front of the left ramp",c:0,s:[C(172,438,10),C(228,410,10)],a:[200,424],x:"Stern's manual lists a Left Ramp-Left Target and Left Ramp-Right Target beside the 2X and 3X Values inserts. I could not see the targets, so the marks follow the manual."},
 mult_ins:{n:"2X and 3X Values inserts",c:1,s:[C(176,465,11),C(237,430,11)],a:[200,450]},
 ghost_tg:{n:"Center target (Ghost target)",c:0,s:[C(306,432,12)],a:[306,432],x:"Stern's manual puts the Ghost Target here, above the G-H-O-S-T inserts and behind where Slimer drops. I read it as the rulesheet's center target. The target is not visible in the photos."},
 ghost_ins:{n:"GHOST letters",c:1,s:[C(313,460,10),C(310,483,10),C(307,507,10),C(310,530,10),C(313,553,10)],a:[311,507]},
 slimer:{n:"Slimer",c:1,s:[E(257,420,24,22)],a:[257,420],x:"The green Slimer toy. It drops down onto the playfield when lit.",v:{premium:{s:[E(267,465,24,22)],a:[267,465],x:"The green Slimer toy. On the Premium and LE it rotates as well as drops (Stern's features list)."}}},
 gozer:{n:"Gozer target",c:0,s:[C(240,248,12)],a:[240,248],x:"Behind Slimer, below the two Gozer flashers in Stern's lamp list. The rulesheet calls it the Gozer target or the Gozer shot behind Slimer. I could not see the target; this mark is my guess from the manual."},
 captive_r:{n:"Right captive ball (Stacked Books)",c:0,s:[C(363,512,14)],a:[363,512],x:"The chrome post right of the GHOST letters. Stern's features list has a single Newton ball \"Stacked Books\" feature, and the manual puts the Captive Ball Target behind it. I read the post as the captive ball housing."},
 book_ins:{n:"Book Stacks insert",c:1,s:[C(349,572,12)],a:[349,572]},
 tony:{n:"Tony Scoleri drop target",c:0,s:[R(224,598,32,16)],a:[240,606],x:"The left pop-up drop target, above the Tony Scoleri insert. Stern's manual calls it the Left 1-Bank Drop. The target is down in the photo, so the mark is at its slot."},
 nunzio:{n:"Nunzio Scoleri drop target",c:0,s:[R(368,616,32,16)],a:[384,624],x:"The right pop-up drop target, above the Nunzio Scoleri insert. Stern's manual calls it the Right 1-Bank Drop. The target is down in the photo, so the mark is at its slot."},
 scoleri_ins:{n:"Tony and Nunzio Scoleri inserts",c:1,s:[C(240,634,12),C(383,655,12)],a:[311,645]},
 right_orbit:{n:"Right loop",c:0,s:[B([[426,490],[440,432],[456,380],[482,320],[520,240],[556,170]],18)],a:[427,482],x:"The upper arrow at the right, under the Stay Puft, Gozer, Spook Central and Okay, Who Brought the Dog? inserts. Stern's lamp list calls it Right Orbit. The rulesheet calls it the right loop or right orbit. The upper part of the lane is my reading of the photo."},
 right_ramp:{n:"Right ramp",c:0,s:[B([[440,632],[454,580],[468,530],[480,478]],20)],a:[440,620],x:"The lower arrow at the right, above the PKE insert. Stern's lamp list calls it Right Ramp. Where the ramp goes after the entrance is a guess.",v:{premium:{x:"The lower arrow at the right, above the PKE insert. Stern's lamp list calls it Right Ramp. Stern's features list gives the Premium and LE a steel drop-off speed ramp through the subway ball lock. Where it goes after the entrance is a guess."}}},
 terror:{n:"Terror Dog target",c:0,s:[C(478,688,11)],a:[478,688],x:"The standup beside the DOG insert, right of the right ramp. Stern's manual calls it the Terror Dog Target. Placed from the manual and a target-like shape in the photo.",v:{premium:{s:[C(460,704,11)],a:[460,704]}}},
 dog_ins:{n:"PKE and DOG inserts",c:1,s:[C(406,694,11),C(436,708,10)],a:[420,700]},
 right_scoop:{n:"Right scoop (subway)",c:0,s:[C(462,782,15)],a:[462,782],x:"The hole beside the ghost containment unit, which the pink arrow points at. Stern's manual calls this shot the Subway and puts the Negative Reinforcement insert at its arrow. I read it as the rulesheet's right scoop.",v:{premium:{x:"Under the clear ramp at the lower right, which the pink arrow points at. Stern's manual calls this shot the Subway; on the Premium and LE it has a three-ball subway lock. I read it as the rulesheet's right scoop."}}},
 subway_ins:{n:"Subway arrow",c:1,s:[C(424,826,14)],a:[424,826]},
 far_left:{n:"Far left lane",c:0,s:[B([[73,505],[70,450],[66,395]],16)],a:[73,482],x:"The narrow lane at the far left with its own arrow. Stern's lamp list calls the arrow Library Lock Arrow, and the manual lists Lock 1-3 and Lock Stage 1-3 switches on this side. The rulesheet never names this lane. Three steel balls sit in it in the Premium photo; it may be where Storage Facility balls lock, but nothing I found says so."},
 left_cb:{n:"Left captive balls (Public Library)",c:0,s:[B([[148,738],[132,690],[112,630]],16),C(108,612,13)],a:[146,726],x:"The arrow above the Proton Pack insert points at three steel balls. Stern's lamp list calls it Library Arrow, and the features list has a triple Newton ball \"Public Library\" feature. I read it as the rulesheet's left captive balls."},
 left_tg:{n:"Left standups (PKE)",c:0,s:[C(104,684,9),C(100,716,9),C(98,748,9)],a:[100,716],x:"Stern's manual lists a Left 3 Bank on the left wall, beside three round inserts. I read them as the rulesheet's left standups near the left captive balls. The targets are hard to see, so the marks follow the manual.",v:{premium:{x:"Stern's manual lists a Left 3 Bank on the left wall, beside three round inserts. I read them as the rulesheet's left standups. On the Premium and LE the 3D library model hides them, so the marks follow the manual."}}},
 pke_lanes:{n:"PKE top lanes",c:0,s:[C(360,188,10),C(405,190,10),C(450,190,10)],a:[405,190],x:"The K and E lanes are printed in the photo. The P lane is under the ramp; it is placed from Stern's manual."},
 pops:{n:"Pop bumpers (Slot Pops)",c:0,s:[C(285,285,22),C(415,315,22),C(318,388,20)],a:[350,320],x:"The pop bumpers sit under the purple city buildings and cannot be seen from above. Marks follow Stern's manual."},
 stay_puft:{n:"Stay-Puft",c:1,s:[E(530,165,36,60)],a:[530,165]},
 ecto:{n:"Ecto Goggles",c:0,s:[],a:[452,410],v:{premium:{s:[E(452,412,32,30)]}},x:"The round lens under the Ecto Goggles sign at the upper right. Stern's Premium/LE manual has an Ecto Goggles opto here. The rulesheet mentions it only once, for Slimer."},
 ls_ins:{n:"Left scoop scene inserts",c:1,s:[C(187,650,10),C(202,672,10),C(210,692,10)],a:[200,672]},
 lr_ins:{n:"Left ramp scene inserts",c:1,s:[C(240,535,10),C(250,560,10),C(263,582,10)],a:[250,560]},
 rl_ins:{n:"Right loop scene inserts",c:1,s:[C(390,603,10),C(399,578,10),C(406,553,10),C(415,528,10)],a:[402,565]},
 ladder:{n:"Ghost count inserts",c:1,s:[C(293,1070,13),C(293,1033,13),C(293,1003,13),C(293,963,13),C(293,927,13)],a:[293,1000],x:"20, 40, 60, 80 and 100 ghosts, bottom to top."},
 wiz_ins:{n:"Wizard mode inserts",c:1,s:[R(266,866,58,30),R(266,826,58,26)],a:[295,850]},
 add_ins:{n:"Light Super Jackpot, Light Playfield Multipliers, Light Add-a-Ball and Light Storage Facility inserts",c:1,s:[C(190,762,10),C(196,784,10),C(203,806,10),C(210,828,10)],a:[200,795]},
 storage_ins:{n:"Storage Facility and Super Jackpot inserts",c:1,s:[C(296,630,11),C(308,680,11)],a:[302,655]},
 lanes:{n:"Inlanes and outlanes",c:0,s:[E(52,950,9,30),E(97,950,9,30),E(497,950,9,30),E(545,950,9,30)],a:[97,950],x:"Marks follow the lane slots in the photo."},
 flippers:{n:"Flippers",c:1,s:[B([[180,1068],[252,1106]],16),B([[407,1068],[340,1106]],16)],a:[294,1090]}
};
var UNK=function(s){return '<p class="fine">'+s+'</p>'};
var NUM=function(a){return a.map(function(i,n){return [i,n+1]})};
var alt=function(a){return a.map(function(i){return [i,0,"alt"]})};
var MAJ=["scoop","left_orbit","left_ramp","right_orbit","right_ramp","right_scoop"];
var SCN=["scoop","left_ramp","right_orbit"];
var SECTIONS=[
/* ====== LAYOUT AND BASICS ====== */
{g:"Layout and basics",id:"layout",title:"Playfield layout",steps:[
 {t:"The goal",h:["ladder","wiz_ins"].concat(alt(SCN)),b:"<p>Collect ghosts to work up the ghost ladder in the center of the playfield, and play the nine Scenes, started at the left scoop, left ramp and right loop. Finish a ladder of Scenes for We Came, We Saw, We Kicked It's..., and all nine for We're Ready To Believe You!</p>"},
 {t:"The main shots",h:NUM(MAJ),b:"<p>Left to right, as I place them: left scoop, left loop (spinner), left ramp, right loop, right ramp, right scoop. Each has a color-changing arrow insert.</p>"+UNK("The rulesheet has no Layout section. Positions come from the lamp and switch names in Stern's service manuals, matched to the photo by eye. Stern's manual calls the right scoop the Subway.")},
 {t:"The three Scene shots",h:NUM(SCN).concat(["ls_ins","lr_ins","rl_ins"]),b:"<p>Scenes start at the left scoop, left ramp and right loop. The scene names are printed beside each arrow.</p>"},
 {t:"Left side",h:["far_left","left_orbit","spinner","scoop","left_cb","left_tg"],b:"<p>From the far left: a narrow lane, the left loop with its spinner, the left scoop, the left captive balls and the left standups.</p>"+UNK("The rulesheet does not use the far left lane. Stern's lamp list calls its arrow Library Lock Arrow.")},
 {t:"Center",h:["left_ramp","ramp_tg","mult_ins","slimer","ghost_tg","gozer","captive_r","tony","nunzio"],b:"<p>The left ramp with two targets in front of it, Slimer, the center target, the Gozer target behind Slimer, the right captive ball, and the two Scoleri Brothers drop targets.</p>"},
 {t:"Right side",h:["right_orbit","right_ramp","terror","right_scoop"],b:"<p>The right loop, the right ramp with the Terror Dog target beside it, and the right scoop.</p>"},
 {t:"Top lanes and pop bumpers",h:["pke_lanes","pops"],b:"<p>The P, K and E top lanes and the pop bumpers build PKE. The pops also give Slot Pops awards.</p>"},
 {t:"Pro and Premium/LE differences",ed:"premium",h:["ecto","slimer","right_scoop","left_ramp"],b:"<p>From Stern's features list: the Premium and LE add the Ecto Goggles, a rotating Slimer, a subway ball lock, a steel looping left ramp, a steel speed ramp through the subway lock, and magnetic slingshots. The rulesheet mentions only the Ecto Goggles, for Slimer.</p>"},
 {t:"Pro differences",ed:"pro",h:["right_ramp","slimer","right_scoop"],b:"<p>From the rulesheet: a lit right ramp shot on the Pro can collect 1, 2 or 3 ghosts, depending on how hard it is hit. From Stern's features list: the Pro has a bi-directional ramp, a subway ball eject without a lock, and traditional slings.</p>"}
]},
{g:"Layout and basics",id:"skill",title:"Skill shots",steps:[
 {t:"Choosing a skill shot",h:["pke_lanes"].concat(alt(MAJ)),b:"<p>You choose your skill shot. One type is on the playfield and one is at the top rollovers. Either one awards 5% of your score plus an award that depends on the shot.</p>"+UNK("The rulesheet warns of a bug that sometimes changes a Start Scene skill shot to its other award. The display shows the real award, so read it before you plunge.")},
 {t:"Playfield skill shots",h:NUM(MAJ),b:"<ul><li>Left scoop: start the left scoop Scene, or Tobin's Spirit Guide if Scenes are lit or the ladder is done</li><li>Left loop: +5M Super Jackpot</li><li>Left ramp: start the left ramp Scene, or light Super Jackpot</li><li>Right loop: start the right loop Scene, or River of Slime</li><li>Right ramp: start PKE Frenzy, or catch 10 ghosts</li><li>Right scoop: catch 10 ghosts</li></ul>"},
 {t:"Top lane skill shots",h:NUM(["pke_lanes"]),b:"<ul><li>P: +3 bonus X</li><li>K: advance the playfield multiplier (2x, or 3x if 2x is lit)</li><li>E: +3M Super Jackpot</li></ul>"}
]},
/* ====== GHOSTS ====== */
{g:"Ghosts",id:"ghosts",title:"Collecting ghosts",steps:[
 {t:"Catching ghosts",h:alt(MAJ).concat(["ghost_ins"]),b:"<p>Shoot flashing shots to collect ghosts. Ghosts are relit through Slot Pops, Tobin's Spirit Guide, the center target or the right captive ball.</p>"},
 {t:"Other ways",h:["right_ramp","slimer","tony","nunzio"],b:"<p>In Storage Facility Multiball, each jackpot awards a ghost, and so do hits to Slimer or either Scoleri Brother.</p><p class=\"fine\" data-ed=\"pro\">On the Pro, a lit right ramp shot collects 1, 2 or 3 ghosts in normal play, depending on how hard it is hit.</p>"},
 {t:"Ghost awards",h:["ladder"],b:"<ul><li>Every 10: light Storage Facility (one lock, at the left ramp)</li><li>20: light Tobin's Spirit Guide at the left scoop</li><li>40: light the video mode at the right scoop</li><li>60: start Loopin' Supers</li><li>80: start PKE Frenzy</li><li>100: start Mass Hysteria Multiball</li><li>About 50 (adjustable): light extra ball at the left scoop</li></ul><p>Ghosts also set jackpot values in Storage Facility Multiball and PKE Frenzy.</p>"}
]},
{g:"Ghosts",id:"tobin",title:"Tobin's Spirit Guide (20)",steps:[
 {t:"Lighting it",h:["scoop","ladder"],b:"<p>Lit at the left scoop after 20 ghosts, or as a Slot Pops award. A left scoop skill shot also starts it when Scenes are lit.</p>"},
 {t:"Awards",h:["scoop"],b:"<p>It gives 3 to 5 random awards, such as points, +10% of your score, spinner value or level, a Book Stacks feature, +3M Super Jackpot, a 2x or 3x playfield multiplier, Storage Facility, PKE Frenzy, another Tobin's Spirit Guide, extra ball or a special.</p>"}
]},
{g:"Ghosts",id:"video",title:"Video modes (40)",steps:[
 {t:"Lighting it",h:["right_scoop","subway_ins"],b:"<p>Lit at the right scoop after 40 ghosts. Current code offers two video modes.</p>"},
 {t:"Negative Reinforcement on ESP Ability",h:["right_scoop"],b:"<p>Guess the next card from two choices with the flipper buttons, or cash out. The bank starts at 250,000 and doubles each guess up to 64M, then rises 25M per guess. One wrong guess loses the bank.</p>"+UNK("In tournament settings you get one correct guess per 10 ghosts, and the next guess is always wrong.")},
 {t:"Don't Cross The Streams",h:["right_scoop"],b:"<p>Each flipper moves a proton stream toward the other side. Aim the streams at ghosts before their timers run out, without crossing them. Catch 15 to win; each ghost is roughly 2-3M and completing the mode is worth 60M.</p>"+UNK("The rulesheet says the 60M presumably includes a completion bonus of about 20M, and that later code no longer lets you pick the video mode as a skill shot.")}
]},
{g:"Ghosts",id:"loopin",title:"Loopin' Supers (60)",steps:[
 {t:"Loopin' Supers",h:["left_ramp","ladder"],b:"<p>Active after 60 ghosts; ghost collection pauses until it starts. Loop the left ramp as often as you can in 21 seconds, collecting a Super Jackpot each time.</p>"+UNK("The rulesheet says the mode used to run indefinitely while you kept hitting the ramp, and is unsure whether 1.16 fixed this.")}
]},
{g:"Ghosts",id:"pke",title:"PKE Frenzy (80)",steps:[
 {t:"Starting it",h:["right_ramp","ladder"],b:"<p>Started by collecting 80 ghosts, the right ramp skill shot, or a Tobin's Spirit Guide award. Ghost collection pauses until it starts but can continue while it runs.</p>"},
 {t:"Jackpot",h:["right_ramp"],b:"<p>All switches score big, and a jackpot is lit at the right ramp: 1,000 times your PKE level times a multiplier. The multiplier starts at 12x and drops 1x every 5 seconds.</p>"},
 {t:"Keeping it up",h:["pke_lanes","left_tg"],b:"<p>Any 5 switch hits, a completed set of PKE top lanes, or the left standups add 1x to the multiplier. Stacking a multiball into it is worth a lot.</p>"}
]},
{g:"Ghosts",id:"mass",title:"Mass Hysteria (100)",steps:[
 {t:"Reversed flippers",h:NUM(["left_orbit","left_ramp","right_orbit","right_ramp","right_scoop"]),b:"<p>A multiball after 100 ghosts, with the flippers reversed. The left loop, left ramp, right loop, right ramp and right scoop start lit for jackpots; each completed set lights fewer shots.</p>"},
 {t:"Raising the jackpot",h:["captive_r"],b:"<p>The right captive ball toggles the reversed flippers on and off. To raise the jackpot, switch the flippers, collect at least one jackpot, and switch them again.</p>"}
]},
/* ====== SCENES ====== */
{g:"Scenes",id:"scenes",title:"Starting Scenes",steps:[
 {t:"Starting a Scene",h:NUM(SCN),b:"<p>Shoot a flashing Scene shot (left scoop, left ramp or right loop) to start the next Scene in that shot's ladder. Completing a Scene lights the shots to start the next one.</p>"},
 {t:"Lighting the Scenes",h:["ghost_tg","slimer"],b:"<p>Hit the center target and Slimer lowers onto the playfield. Hit him three times to defeat him and light the Scenes at the three Scene shots.</p>"+UNK("Depending on code, the center target may need more than one hit. The rulesheet does not name the center target's location; I read it as the Ghost Target in Stern's manual.")},
 {t:"Scene rewards",h:["scoop","wiz_ins"],b:"<p>Three Scenes, from any ladders, light extra ball. Completing any ladder lights We Came, We Saw, We Kicked It's.... Completing all nine lights We're Ready To Believe You! Both wizard modes start at the left ramp.</p>"},
 {t:"Draining during a Scene",h:NUM(SCN),b:"<p>As of 1.16, a Scene you drain during counts as completed, and all three Scene shots light again. The top Scene in each ladder is the exception: it picks up where you left off and must be finished to clear the ladder.</p>"}
]},
{g:"Scenes",id:"ls_scenes",title:"Left scoop Scenes",steps:[
 {t:"Spooked Librarian",h:["scoop","ls_ins","spinner"].concat(alt(MAJ)),b:"<p>Shoot flashing shots to arrange books. Three shots complete it; flashing teal shots are worth double or triple. After a shot, the spinner lights red to raise the Super Jackpot by 100K per spin.</p>"},
 {t:"Back Off, Man!",h:["scoop","ls_ins"].concat(alt(["right_scoop","right_ramp","right_orbit","left_ramp","left_orbit"])),b:"<p>Shoot any lit shot. After the first, two shots are lit at a time, working from the right side of the playfield toward the left scoop for the final shot.</p>"+UNK("The rulesheet does not list which shots light along the way.")}
]},
{g:"Scenes",id:"lr_scenes",title:"Left ramp Scenes",steps:[
 {t:"We Got One!",h:NUM(["left_ramp","left_orbit","right_orbit","right_ramp"]).concat(["lr_ins"]),b:"<p>Shoot flashing shots, alternating sides: the left ramp or left loop, then the right loop or right ramp. Three shots end the mode.</p>"},
 {t:"He Slimed Me!",h:["left_ramp","left_orbit","right_orbit","slimer"],b:"<p>Loop the left ramp to build the mode jackpot. After three ramp shots the loops light. Hit either loop to lower Slimer, then hit Slimer to collect the hurry-up and slime the whole playfield. Ramp shots add to the hurry-up.</p>"},
 {t:"The Ballroom",h:alt(MAJ).concat(["slimer"]),b:"<p>Shoot each major shot once, then Slimer comes out. Hit him three times to light the spinner and right ramp. Each hit lights a Super Jackpot (they do not stack, and are not needed to finish).</p>"},
 {t:"Finishing The Ballroom",h:NUM(["left_orbit","right_ramp","left_ramp"]),b:"<p>Shoot the left loop and right ramp in either order for another hurry-up, then the left ramp to complete the mode.</p>"+UNK("The rulesheet does not list the \"major shots\" for The Ballroom. I show the six main arrow shots dimmed.")}
]},
{g:"Scenes",id:"rl_scenes",title:"Right loop Scenes",steps:[
 {t:"Okay, Who Brought the Dog?",h:NUM(["left_orbit","left_ramp","right_orbit"]).concat(["rl_ins"]),b:"<p>Shoot each of the three lit shots: left loop, left ramp and right loop.</p>"},
 {t:"Spook Central",h:["left_ramp"].concat(alt(["left_orbit","right_orbit","right_ramp"])),b:"<p>A hurry-up on the left ramp counts down from 15,125,000 to 1.5M to set the jackpot value. Then both loops and both ramps light for jackpots. The ramp shot that locks in the value does not score it.</p>"+UNK("The rulesheet reports a bug: collecting the hurry-up at 1.5M in the last seconds of grace can end the mode early or stack it into your next mode.")},
 {t:"Gozer the Gozerian, phase 1",h:["terror","right_ramp","right_orbit"],b:"<p>Build value on the Terror Dog target, then cash it in at the right ramp or right loop.</p>"},
 {t:"Gozer, phases 2 and 3",h:["left_ramp","gozer"].concat(alt(["left_orbit","right_orbit"])),b:"<p>Raise value on the left ramp and cash in on the Gozer target. Then collect all lit shots (left ramp, left loop, right loop) and finish on the Gozer target.</p>"},
 {t:"Stay-Puft, phases 1 and 2",h:alt(MAJ).concat(["stay_puft"]),b:"<p>Choose the form of the destructor: four shots light with multipliers that decay to 1x. The first shot locks in its multiplier. Then you have about 20 seconds of unlimited shots, all worth 3.5M plus 125K per shot, times your multiplier. Draining in phase 2 means starting it over next ball.</p>"+UNK("The rulesheet does not say which four shots light in phase 1.")},
 {t:"Stay-Puft, phases 3 and 4",h:NUM(["right_ramp","left_ramp","left_orbit","right_orbit"]),b:"<p>The right ramp, left ramp and left loop light for three more shots. Then the right loop lights. A post catches the ball and you are told to cross the streams; once released, the final shot is the right loop again, for a hurry-up based on the points scored in the mode.</p>"}
]},
/* ====== MULTIBALL ====== */
{g:"Multiball",id:"storage",title:"Storage Facility Multiball",steps:[
 {t:"Lighting locks",h:["left_cb","left_ramp","add_ins"],b:"<p>Complete the left captive balls award to light three stacked locks, or collect 10, 30 or 50 ghosts to light one lock at the left ramp. Lock three balls to start the multiball.</p>"+UNK("The rulesheet does not say where balls lock. Stern's manual lists Lock 1-3 switches on the left side of both models, and the Premium and LE also have a three-ball subway lock. I mark the left ramp, where the rulesheet lights a lock.")},
 {t:"Jackpots",h:alt(MAJ).concat(["storage_ins"]),b:"<p>All ghost shots are lit for jackpots, and each jackpot spots a ghost toward the ghost awards. Collect all ghosts to light three Super Jackpots. Scenes running at the start continue, and finishing a ladder during it lets you start We Came, We Saw, We Kicked It's....</p>"},
 {t:"Add-a-Ball",h:["left_cb","scoop","pops"],b:"<p>Shoot the captive balls to light Add-a-Ball, then shoot the left scoop to collect it. The Slot Pops can also award it.</p>"}
]},
/* ====== OTHER SCORING ====== */
{g:"Other scoring",id:"slimer_s",title:"Slimer and slime",steps:[
 {t:"Defeating Slimer",h:["ghost_tg","slimer"],b:"<p>Hit the center target to lower Slimer, then hit him three times to light the Scenes. Each Slimer hit slimes one shot, turning its insert green.</p>"},
 {t:"Cleaning up the slime",h:alt(MAJ),b:"<p>Clean up all the slime to qualify the Super Jackpot shot.</p>"+UNK("The rulesheet does not say how slime is cleaned or which shot the Super Jackpot is then lit at.")},
 {t:"Premium and LE Slimer",ed:"premium",h:["right_orbit","ecto"],b:"<p>On the Premium and LE, the final Slimer shot may be on the right loop, with Slimer in the Ecto Goggles. A strong shot will start the right loop Scene you have just lit.</p>"},
 {t:"Slimer disabled",h:["ghost_tg"],b:"<p>Slimer can be turned off in settings. The Ghost target then takes his place.</p>"}
]},
{g:"Other scoring",id:"books",title:"Book Stacks",steps:[
 {t:"Qualifying a feature",h:["captive_r","book_ins"],b:"<p>Hit the right captive ball once to qualify a feature for 10 seconds, then hit it again to start one.</p>"},
 {t:"Scoleri Brothers",h:["tony","nunzio","scoleri_ins"],b:"<p>Raises the two drop targets. Knock down both to light three Super Jackpots. If you get one and miss the other for 10 seconds, the first one comes back.</p>"},
 {t:"Terror Dog Hurry-Up",h:["terror","right_ramp","gozer"],b:"<p>Shoot the Terror Dog target or the right ramp to collect a hurry-up worth 4M to start. The Terror Dog and Gozer targets raise its value.</p>"},
 {t:"Librarian mini-mode",h:["captive_r","scoop"],b:"<p>If you have already played Spooked Librarian: hit the captive ball to build an award, then shoot the scoop to collect it and end the mini-mode.</p>"+UNK("The rulesheet says \"the scoop\" without saying which. I mark the left scoop, the Librarian's shot.")},
 {t:"Gozer Hurry-Up",h:["gozer"],b:"<p>Shoot the Gozer shot behind Slimer for a hurry-up worth up to 14M.</p>"+UNK("The rulesheet numbers the features 1, 2, 3, 3, 4 and lists Terror Dog twice. The order may not be fixed.")}
]},
{g:"Other scoring",id:"pops_s",title:"Slot Pops and PKE",steps:[
 {t:"Slot Pops",h:["pops"],b:"<p>Hit the pop bumpers enough times to collect a mystery award: light or capture ghosts, light extra ball, special, spinner level or value, bonus X, big points, light the video mode, Tobin's Spirit Guide, Storage Facility (one lock), or 10 seconds of time in certain modes.</p>"},
 {t:"PKE",h:["pops","pke_lanes","left_tg","dog_ins"],b:"<p>PKE builds from bumper awards, the bumper lane rollovers and the left standups. It fuels PKE Frenzy and adds a little to the end of ball bonus.</p>"+UNK("The rulesheet does not locate the bumper lane rollovers. I mark the PKE top lanes.")}
]},
{g:"Other scoring",id:"mult",title:"Playfield multipliers",steps:[
 {t:"Lighting multipliers",h:["left_cb","left_tg","add_ins"],b:"<p>Shoot the left captive balls when lit through the standup targets to light the playfield multipliers. Completing the PKE standups lights them too.</p>"},
 {t:"2x, 3x and 6x",h:["ramp_tg","mult_ins"],b:"<p>Shoot the targets in front of the left ramp for 2x or 3x, or 6x if both are flashing. Hitting a flashing 2x or 3x target extends its timer.</p>"}
]},
{g:"Other scoring",id:"supers",title:"Super Jackpots",steps:[
 {t:"Super Jackpot value",h:["spinner","left_orbit"],b:"<p>The Super Jackpot starts at 5M each ball and can be raised to 30M with the spinner, at 39K per spin.</p>"},
 {t:"Lighting Super Jackpots",h:["tony","nunzio","left_ramp","left_cb","storage_ins"],b:"<ul><li>Defeating the Scoleri Brothers (three)</li><li>Capturing all ghosts in Storage Facility Multiball (three)</li><li>Loopin' Supers</li><li>Enough jackpots in Mass Hysteria</li><li>Cleaning up all the slime</li><li>Left ramp skill shot when a Scene is lit</li><li>The captive balls award</li><li>Tobin's Spirit Guide</li></ul>"}
]},
{g:"Other scoring",id:"hurry",title:"Hurry-ups",steps:[
 {t:"Equipment Hurry-Up",h:["left_ramp","left_tg"],b:"<p>Hit the left ramp to build the hurry-up, then the left standups to collect it.</p>"},
 {t:"River of Slime",h:["right_orbit","right_scoop"],b:"<p>Hit the right loop to build the hurry-up and collect it in the right scoop. That lights more River of Slime shots to collect the same award again.</p>"}
]},
/* ====== WIZARD MODES ====== */
{g:"Wizard modes",id:"wecame",title:"We Came, We Saw, We Kicked It's...",steps:[
 {t:"Starting it",h:["left_ramp","wiz_ins"],b:"<p>A mini-wizard mode lit by completing any Scene ladder and started at the left ramp. You play it twice on the way through all nine Scenes; the ninth lights We're Ready To Believe You! instead.</p>"},
 {t:"Jackpots",h:alt(MAJ),b:"<p>A multiball; the number of balls depends on how many Scenes are in the ladder you completed. All shots start lit for jackpots worth 6.25M, rising 750K per shot to a 30M cap. A shot unlights when hit and relights after another shot. Enough shots award a 100M Super Jackpot.</p>"}
]},
{g:"Wizard modes",id:"ready",title:"We're Ready To Believe You!",steps:[
 {t:"Starting it",h:["left_ramp","wiz_ins"],b:"<p>Lit by completing all nine Scenes, started at the left ramp. A 4-ball multiball: collect 100 ghosts in 60 seconds.</p>"},
 {t:"Adding time",h:["captive_r","tony","nunzio"],b:"<p>The captive ball adds time (up to 60 seconds), but it also raises the Scoleri Brothers targets.</p>"},
 {t:"Ranks",h:["ladder"],b:"<p>Each ghost checkpoint raises your rank and adds a ball: Junior (0-29), Tex (30-49), Apprentice (50-69), Ghostbuster (70-79), Demigod (80-89), Lesser Deity (90-99), and \"Maybe a God?\" at 100.</p>"}
]},
{g:"Wizard modes",id:"god",title:"Are You a God?",steps:[
 {t:"Level 1",h:NUM(["left_ramp","scoop","right_orbit","right_scoop"]),b:"<p>Reached by collecting 100 ghosts in We're Ready To Believe You! A single-ball mode where every shot scores 10M plus 1M per shot. Make two combos: left ramp to left scoop, and right loop to right scoop, each within 10 seconds of its first shot.</p>"},
 {t:"Level 2",h:NUM(["slimer","scoop","terror","gozer","tony","nunzio","right_orbit","left_ramp"]),b:"<p>Make these in order, each within 10 seconds: Slimer, the left scoop (Librarian), Terror Dog, Gozer, both Scoleri Brothers (they rise only after Gozer), the right loop, and the left ramp. Miss the time and the sequence starts over.</p>"},
 {t:"Level 3",h:alt(MAJ),b:"<p>A one billion completion bonus, which the playfield multiplier can raise, then a 6-ball victory lap with all shots lit for rising jackpots. The captive ball adds time during levels 1 and 2.</p>"}
]}
];

/* global undum, npcloc */
// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------
fastmode = false;
curhost="";
nightfun=false;
spark=false;
headingholder="";
headingholder2="";
alt="";
alt2="";
/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "Xeylefxeylefxeylef";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.05";
/*
undum.game.beforeAction = function (character, system, situation, action) {
    system.write("");
};
*/
/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
            "<h1>The Merging</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>For the last 25 years you have lived a fairly normal life, \
				Went to school, got a job, got your own place. Even had a\
				girlfriend for a short time. </p>\
        \
        <p>You live in a mixed neighborhood, mostly furrs and a few scalies\
				and maybe a handful of taurs the most. Only a few of them were\
				non native forms, usually the result of some strange magics or bizarre\
				experimental machine. Weird transformations were very rare but not\
				unheard off. </p>\
        \
				<p>You are sleeping when a sudden knock at the door wakes you up.\
				</p>\
				\
        <p class='transient'>Grab your bathrobe and <a href='intro'> open the\
				door.</a></p>",
            {
                actions: {
                    /*
                     "debug2": function(character, system, action) {
                     system.write("<p>"+character.sandbox.fname+"</p>");
                     character.sandbox.fname ="Xeytester";
                     system.write("<p>"+character.sandbox.fname+"</p>");
                     //system.dolink(mark);
                     }*/
                }
            }
    ),
    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function (character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    global: new undum.SimpleSituation(
            "<p>Damn it snagged the opener and changed situation</p>",
            {
                heading: "Test",
                actions: {
                    "you": function (character, system, action) {
                        system.write("Your description");
                    }
                },
                exit: function (character, system, to) {
                    system.setQuality("stamina", character.qualities.stamina + 30);
                }
            }
    ),
    intro: new undum.SimpleSituation(
            "<p>Standing there is a a wolf taur holding a rather\
				large box strapped on his back.</p>\
        \
        <p>'Oh... sorry to have woken you... I just need your signature for\
				This box.' he says noticing your lack of pants. \
				\
				</p>\
				<p>\
				He hands you a clipboard to sign. <a href='./grrrr' >Sign for the package</a></p>"
            , {
                // then <a href='hub'>return to the topic list</a>.
                actions: {
                    "debug": function (character, system, action) {
                         character.sandbox.host = character.sandbox.mark;
                 
                        character.sandbox.currenthostparse = character.sandbox.markparse;
                character.qualities.essence=15;
                curhost="Mark";
                parer("alright building a debugger");
                alt="interesting idea";
                if (character.sandbox.fname=="David"){
                    
                knower("superdumb",true);
                }
                
                knower("superdumb");
                parer("Now running the knower test player. How dumb are we? "+knower("superdumb"));
               
                oper(system,"transformation","Quick jumper ready and Mark loaded");
                    },
                    "grrrr": function (character, system, action) {
                        character.sandbox.fname = "David";
                        pname = (prompt("What is your first name?"));
                        console.log("name is" + character.sandbox.fname + pname);
                        if (false==(pname == ""||pname==null)) {
                            character.sandbox.fname = (strip(pname));
                            console.log("name is" + character.sandbox.fname + pname);
                        }
                        ;
                        transer();
                        parer("He examines the clipboard making sure everything is in order.\
                                         Alright, everything seems ok, " + character.sandbox.fname + ".\
                                         Though, let me bring it inside, darn thing is heavy even for me.'\
                                         </p><p>\
                                         He steps inside and quickly unhooks the straps and carefully\
                                         sets it down on the floor of your living room.\
                                         He seems to stare at you for a few seconds afterwards\
                                         If I wasn't on such a tight schedule I would help you with\
                                         your other package problems.' he seems to say with a grin.\
                                         He takes a card and jots something down on it, 'Here is my\
                                         number if you ever need some help later.'  and rather\
                                         quickly he steps out.\
                                         </p><p>\
                                         Only then do you look down and realize you have had a bad case\
                                         of morning wood the entire time! On the card is the name 'Bret' and his personal number</p>\
                                         <p> <a href='./examine'  class='once' > Examine the package\
                                         </a>");
                            //parer("<a href='./debug' >debuger</a>");
                        oper(system, "./opening", "Just open it now");
                    },
                    "opening": function (character, system, action) {
                        transer();
                        parer("<p>\
                                         It takes some work with all the tape and straps but eventually\
                                         it is pried open revealing some supportive Styrofoam and\
                                         a small letter. After getting rid of the Styrofoam and the cardboard\
                                         you are left with a truly strange sight. <br>\
                                         Before you is a 3 foot tall stone pedestal with a 6inch long obsidian phalic crystal\
                                         seated atop it. Around its base there is a thick jade cock ring with a single\
                                         gem inset in it. All over the surface of the pedestal is some kind of unrecognizable writing.\
                                         </p><p>Along with it is a letter that hopefully will explain\
                                         what this is all about.\
                                         </p>");
                        oper(system, "letter", "Read the letter");
                    },
                    "examine": function (character, system, action) {
                        transer();
                        parer("<p>\
                                         The box is about 3 feet tall, and is just as heavy\
                                         as the Wolf said, you can hardly\
                                         get it to move from where he left it. Checking the label\
                                         you discover that it was sent from VERY far away, a county\
                                         that you havent even heard of. But at least you know who sent\
                                         it now! Your uncle Shendo that works in archeology. You\
                                         hardly know him and why he might be sending you something is\
                                         still a mystery.\
                                         </p>");
                        oper(system, "./opening", "Open it");
                    }
                }
            }


    ),
    letter: new undum.SimpleSituation(
            "<em><p>I know this is a bit of a surprise but I hoped you might be willing\
                            to help me with something. Along with this letter I have sent an artifact my\
                            team recovered from a recent dig site. Normally we have a lab that\
                            takes care of this sort of thing but due to it's nature\
                            they decided to pass seeing it as unimportant or unprofessional. </p>\
                            <p>A lab full of stuck up scientists too squeamish to test\
                            an ancient sex toy! </p>\
                            <p>So I have told them that I am sending it to a specialist in such matters\
                            . I figure a young man such as yourself might fit that description loosely.\
                             In a few months I will be heading your way,\
                      so you have till then.\
                            I am sure someone your age would learn far more than a room full\
                            of dusty scientists.</p><p>Best Wishes</p><p>Shendo Urimay</p>\
                            <p>PS: As extra incentive I am willing to pay you 2000 dollars\
                            for your help in this and to keep it quiet.</p>\
                            </p><em> <p><a href='./second' >Second Page</a></p>"
            , {
                // then <a href='hub'>return to the topic list</a>.
                heading: "The Letter",
                actions: {
                    "second": function (character, system, action) {
                       parer("<p>\
                                         The second page seems to be translations for some of the symbols\
                                         that you see on the artifact. It's mostly gibberish\
                                         but it generally says things like sacrifice and pleasure but\
                                         it seems whoever was translating it stopped half way.\
                                         \
                                         Regardless you should probably keep it in a\
                                         a more private location.</p>");
                        oper(system, "artifact/enterer", "Move it to your room");
                    }
                }
            }
    ),
    artifact: new undum.SimpleSituation(
            "",
            {
                heading: "The Artifact",
                  actions: {
                    "enterer": function (character, system, from) {
                         system.setQuality("timeofday", character.qualities.timeofday+1);
                    parer("<p>With some work you manage to push it into your bedroom so that\
                                        it's not on display in your living room for all to see.\
                                        </p><p>It is still early morning and the entire day is ahead of you\
                                         thankfully you don't happen to have any classes at the college to attend today.<a href=./note class=stickish> PRE ALPHA NOTE </a>E</p>");
                    /*system.write("<p>\
                     <table class=transient border='1' style='width:100%'><tr>\
                     <td style='text-align:center;'><a href='./leave'  class=transient> Ignore the artifact </a></td>\
                     <td style='text-align:center;'><a href=./experiment class=transient> Experiment with it </a></td>\
                     </tr></p> ");*/
                    oper(system, "./leave", "Ignore the artifact", "./experiment", "Experiment with it");
                }, //enter close
                    "leave": function (character, system, action) {
                        transer();
                       parer("<p>Deciding its best to wait for later, you get dressed and leave your apartment\
		giving yourself some time to think this over.</p>");
                        /*system.write("<p>\
                         <table class=transient border='1' style='width:100%'><tr>\
                         <td style='text-align:center;'><a href=places  class=transient> Choose your destination </a></td>\
                         </tr></p> ");*/
                        oper(system, "places", "Choose your destination");
                        /*
                         system.write("<p>\
                         <table class=transient border='1' style='width:100%'><tr>\
                         <td style='text-align:center;'><a href=places  class=transient> Choose your destination </a></td>\
                         </tr></p> ");
                         */
                    }, //function close
                    "note": function (character, system, action) {
                        parer("<p  class='transient' style='color:rgb(255, 14, 100);'>/b (UNFINISHED! this section may change drastically \
                                             from its presented form. The cause of the curse or affliction is still something I am\
                                             uncertain on. Either he has to use the dildo... touch it or be fucked by it... or even if it SHOULD be a dildo.\
                                             Suggestions for this are welcome</p>");
                    }, //function close
                    "experiment": function (character, system, action) {
                        transer();
                       undum.game.situations.home.canView = function(character, system, host) {
    return false;
};
                       parer("<p>You take the second page of the letter your uncle sent and sit down on the end of your bed staring at the artifact.\
                                        Along the sides of the dildo you can see blue runic lines, and the jade ring around the base also has a set of runes on it.\
                                        Various glyphic pictures and more runes adorned the surface of the stone pedestal, even with the letter there is very little that makes sense.\
                                        What you do gather is that one runic pictures seems to show someone siting on the pedestal...</p><p>\
                                        If it was magical in some way then it probably just induced orgasm or maybe vibrated. Still 2000 dollars to test it certainly made the decision easier</p>");

                        oper(system, "./experiment2", "What is the worst that could happen?");
                        /*
                         system.write("<p>\
                         <table class=transient border='1' style='width:100%'><tr>\
                         <td style='text-align:center;'><a href=./experiment2  class=transient> What is the worst that could happen? </a></td>\
                         </tr></p> ");
                         */
                    }, //function close
                    "experiment2": function (character, system, action) {
                        transer();
                       parer("<p>A bottle of lube later you are standing over the pedestal wondering if this is really worth it. Then again it might be fun!\
                                            With a sigh you ease yourself down, thanks to its angle there is no problem aiming.</p><p>\
                                            However the near electric shock that follows when it touches your ass is enough to send a spasm through your arms. It causes you to let go of the pedestal and fall onto it\
                                            rapidly forcing the entire thing into your rear!</p>");
                        oper(system, "curse", "Give yourself a moment to recover");
                        /*system.write("<p>\
                         <table class=transient border='1' style='width:100%'><tr>\
                         <td style='text-align:center;'><a href=curse  class=transient> Give yourself a moment to recover </a></td>\
                         </tr></p> ");*/
                    } //function close
                }//actions close
            }//options close
    ),
    curse: new undum.SimpleSituation(
            "",
            {
                //heading: "Your Bathroom",
                enter: function (character, system, from) {
                    system.write("<p><br></p>");
                parer("\
                    <p> Astonishingly there is only a bit of pain, and all you can do is groan as another shock emanates from the dildo! You are sitting directly on the stone with every inch of the dildo\
                                                stuffed inside you. Rather slowly you stand back up and check for any kind of damage, thankfully there is none.... but something is very wrong! There is a burn\
                                                sensation at your sides and a tingling sensation in your rear!<br></p>");
                    character.sandbox.checked = 1;
                    oper(system, "./sides", "Check your sides", "./rear", "Check your ass");

                }, //enter close
                actions: {
                    "rear": function (character, system, action) {
                        transer();
                        parer("You rub your poor sore hole only to be surprised by a wave of pleasure to wash over you! The damn thing must have made you\
                                             super sensitive. It certainly would\
                                      confirm its magical nature. However looking back at it you see that the RING IS MISSING. You quickly probe your hole \
                                            and nearly double over in the process however as twinges of pleasure rocket though you. You gasp as the sensation becomes too much\
                                            and you actually experience an anal orgasm! However you do manage to confirm it's NOT inside you.");
                        system.animateQuality("essence", character.qualities.essence + 10);
                        character.sandbox.checked += 1;
                        if (character.sandbox.checked == 2) {
                            oper(system, "./sides", "Check your sides");
                        } else {
                            oper(system, "./itbegins", "Decide what to do next");
                        }
                    }, //function close
                    "sides": function (character, system, action) {
                        character.sandbox.checked += 1;
                        transer();
                       parer("You feel a burning sensation just under both your arms. You don't find anything wrong till you check a mirror\
                                            and find the same runic line adorning you as the cock had! It looks rather stylish... but you still hope its only temporary.");
                        if (character.sandbox.checked == 2) {
                            oper(system, "./rear", "Check your rear");
                        } else {
                            oper(system, "./itbegins", "Decide what to do next");
                        }
                    },
                    "itbegins": function (character, system,action) {
                        transer();
                        parer("<p>You are left panting on the bed after that orgasm, whatever the artifact did to you it isn't seeming to go away.\
                                      That strange tingling is rather distracting and it almost makes\
                                             you want to shove something back inside you just to make it go away. However you don't really own anything\
                                             like that other than the artifact and using that again could just make this worse! You try to ignore the tinglings till night falls\
                                             and hope to sleep it off.</p>");
                        oper(system, "./masturbate", "Masturbate before you sleep", "firstday", "Resist the urge and get some sleep");
                         system.setQuality("timeofday", character.qualities.timeofday+1);
                    }, //function close
                    "masturbate": function (character, system, action) {
                        transer();
                        system.animateQuality("essence", character.qualities.essence + 10);
                       parer("<p>You waste no time once in bed and quickly try to\
                                                bring yourself to orgasm, but it just doesn't feel like enough. And to make it worse\
                                                the tingling from your rear is distracting you terribly. You reach back and try to feel if rubbing it will help\
                                                and you are rewarded with a surge of sensation! Working both your cock and hole you rapidly reach that climax! \
                                                You lay back and breath heavily basking in the relief.</p>");
                        oper(system, "firstday", "Finally get some sleep");
                    }//function close					 
                }//actions close
            }//options close
    ),
    /*
     curse: new undum.SimpleSituation(
     "<p>You are now filled with a strange sensation, almost like a need to have something fill you. Its almost overwhelming! \
     und the shaft enough to remove it perhaps. <a href='./ring'> Examine the ring</a></p>"
     ,{
     actions: {
     "ring": function(character, system, action) {
     system.write("<p>Rather easily the ring slides off the shaft and you feel that pulling or connection\
     is actually to the ring and not the cock.</p><p class=transient><a href=./worn >Put it on</a></p>");
     },
     "worn": "<p>Almost as if you are compelled to do so the ring slides easy down over your own cock\
     fitting comfortably against the base. A cold shiver passes over your entire body and that pulling\
     turns into something much different. You feel connected to the ring, almost as though it were an extension of you.\
     You can faintly even see a slight glow to the gem! Focusing on the ring seems to cause the glowing to fade away and\
     that tinging sensation spreads through your body again.\
     </p><p>OPTION TWO\
     /b The markings on the cock are also surprisingly missing! Their blue glow gone along with the obsidian color\
     . Yet you seem to still see a glint of blue at the corner of your eye, tracing the source you find those markings\
     are now adorning your sides! once you reali..... GAA I DONT LIKE THIS OPTION EITHER\
     </p>\
     <p><a href='./itbegins' class=transient style='color:rgb(255, 14, 100)'> BACK TO READY CONTENT </a> </p>\
     ",
     "itbegins": "<p>Whatever the artifact did to you it isn't seeming to go away. With any luck you hope\
     it will go away by itself by morning. That strange tingling is rather distracting and it almost makes\
     you want to shove something back inside you just to make it go away. However you don't really own anything\
     like that other than the artifact and using that again could just make this worse!</p>\
     <p></p>\
     <p><a class='transient' href=./masturbate> Masturbate before you sleep </a> or</p>\
     <p><a href=firstday class=transient> just try to get some rest </a>.\
     </p>",
     "masturbate": function(character, system, action) {
     system.animateQuality("essence",character.qualities.essence+20);
     system.write("<p>You waste no time once in bed and quickly try to\
     bring yourself to orgasm, but it just doesn't feel like enough. And to make it worse\
     the tingling from your rear is distracting you terribly. You reach back and try to feel if rubbing it will help\
     and you are rewarded with a surge of sensation! Working both your cock and hole you rapidly reach that climax! \
     You lay back and breath heavily basking in the relief.</p><p class=transient><a href=firstday >Finally get some sleep</a></p>");
     },
     }
     }
     ),
     */
    firstday: new undum.SimpleSituation(
            "<p>You wake up to a rather uncomfortable feeling it almost seems centered on your rear.\
            Whatever that artifact did is causing your ass to feel EMPTY and all you can think of is\
            some way to end this feeling! You could almost swear it is like the artifact put you into some\
            sort of heat! The darn thing must have been meant for females! This feeling of need is FAR beyond that\
            of any normal aphrodesiac! It will be a miracle if you even make it through the day. </p><p>\
            <table class=transient border='1' style='width:100%'><tr>\
            <td style='text-align:center;'><a href=./morning  class=transient> Get up and finish your morning routine </a></td>\
            </tr></p> ",
            {
                enter:function(character, system){
                     system.setQuality("timeofday", 0);
                     system.setQuality("day", 1);
                },
                actions: {
                    "morning": function (character, system, action) {
                      transer();
                        parer("\
                                             <p>You get up, use the bathroom and make some coffee all the while trying to ignore the\
                                             desperate need to be fucked coming from your rear! Unless this goes away soon you will need to do something\
                                             before the day is up, possibly find a nice guy to invite over. And maybe make plans to kick your\
                                             uncles ass when you see him next.</p>");
                        oper(system, "places", "Head out hoping to find some relief.");
                    }//function close
                }, //action close
                exit: function (character, system, to) {

                    
                }
            }

    ),
    /////////////////////////////////////////////////////////////////////
//                    First Merging                              //
    /////////////////////////////////////////////////////////////////////
  

    firstmerge: new undum.SimpleSituation(
            "", {
                heading: "Home",
                enter: function (character, system, from) {
                   
                   parer("<p>You make it back home and quickly do some random\
                                        cleanings of your apartment knowing " + character.sandbox.host.host + " should be arriving soon.\
                                        this entire situation is terribly embarrassing, thankfully the desperation is making it a bit easier to bare.</p>\
                                        <br><p>After about an hour and a half there is a knocking at your door. You are about to answer it when you realize the\
                                        artifact is till out in the open in your bedroom!</p>\
                                        <p>\
                                        </p> ");
                    oper(system, "./answer", "Answer the door", "./stall", "Stall and hide the artifact");
                },
                actions: {
                    "answer": function (character, system, action) {
                        transer();
                       parer("<p>Figuring its too late now you quickly open the door and welcome " +
                                character.sandbox.host.host + " inside. It's absurdly difficult just to keep your pants on and hold a\
									slight conversation for a few minutes. Every second your ass clenches uncomfortably with need.\
									\
									</p><p></p> ");
                        oper(system, character.sandbox.host.host + "host/sex", "Take him right to your bedroom", character.sandbox.host.host + "host/foreplay", "Keep it together");
                        character.sandbox.artifacthidden = false;
                    },
                    "stall": function (character, system, action) {
                        transer();
                       parer("<p>You call out saying you just need a moment or two as you rush to your\
                                             bedroom and begin pushing the heavy pedestal into your closet! It makes a terrible grinding noise\
                                             but you manage to get it in and shut the door behind it.</p>\
                                             <p>Finally you get to the door and let host in, trying not to give away how out of\
                                             breath you are.</p>\
                                             <p>It's absurdly difficult just to keep your pants on and hold a\
                                            slight conversation. Every second your ass clenches uncomfortably with need. \
                                             </p>\
                                             <p></p>");
                        oper(system, character.sandbox.host.host + "host/sex", "Take him right to your bedroom", character.sandbox.host.host + "host/foreplay", "Keep it together");
                        
                        character.sandbox.artifacthidden = true;
                    }
                }
            }
    ),
    markhost: new undum.SimpleSituation(
            "", {
                heading: "Your Bedroom",
                actions: {
                    "foreplay": function (character, system, action) {
                        if (character.sandbox.markknows) {
                            parer("<p>Eventually the conversation drifts your predicament. Though you can't say much\
                                                you admit that you were messing with something that probably wasn't a good idea.</p><p>\
                                                \"Are you sure that having sex will even make it go away? How do you know its not contagious!\" he suggests to your horror.\
                                                </p><p>You jokingly mention that if it was he wouldn't be any different, and that you are willing to try anything at this point.</p><p>\
                                                He nods and gives you a flick with his tail as he gets up and slips into your bedroom. Following after him you are surprised\
                                                to see his pants ALREADY off and canine cock erect and waiting.</p>");
                        } else {
                            parer("<p>You manage to start an innocent conversation with him but the way his tail keeps caressing you\
                                                its clear what he is here for. Eventually you and he head of to your bedroom. The speed at which his pants disappear\
                                                is rather impressive but not nearly as impressive as his erect canine cock waiting for you.</p>");
                        }
                        ;
                        oper(system, "./sex", "Finally give in");
                    },
                    "sex": function (character, system, action) {
                        transer();
                        parer("<p>You hardly get the door to your room closed before his hands have snuck around your waist\
                                             and your pants hit the floor joining his.\
                                            He leans in behind you giving your ear a nibble as you feel a hot pressure right under your tail!</p>\
                                             <p>After going all day feeling such ridiculous spasms of need you can't resist it anymore letting out a moan of pleasure\
                                             leaning back some grinding the head of his cock against your rear's entrance.\
                                                                                                    </p> ");
                        oper(system, "./fuck", "Get fucked");
                    },
                    "fuck": function (character, system, action) {
                        transer();
                        parer("<p>It isn't long till you are bent over the bed tail raised trying to ignore how wrong this is\
                                                        . His cock presses harder and harder against your hole till you feel a stretching sensation followed by hot warmth as\
                                                        your anal virginity is taken. It actually takes you by surprise how easily you gave it up.</p>\
                                                        <p>You hold back a moan of pain as the real thickness of his cock spreads you open, it only lasts a few seconds\
                                                        but it seems like an eternity. Its not till he begins pulling back out and thrusting that your moans of pain turn into ones of pleasure!</p>\
                                                        <p>\"Damn, if I didn't know better I would think you were a pro at this! Tight but more than that, you are almost pulling at it!\" He says\
                                                        with a gasp and begins really thrusting faster into you, but he has to slow down when a large bulge starting to pound against your hole</p><p>\
                                                        </p>");
                        oper(system, "./knot", "Realize you are about to get knotted");
                    },
                    "knot": function (character, system, action) {
                        transer();
                        parer("<p>Letting out a distressed groan you can feel it getting closer and closer to getting inside you!<p>\
                                            You cry out quickly \"Your knot! Ahh.... Please not on my first time!\".</p><p>He laughs and leans in closer \"Knot you on your first time?\
                                            Hehe you are desperate!\" he says pulling almost all the way back with his hands holding your sides. You feel an insane force suddenly punch into\
                                            your tailhole stretching it beyond anything you ever imagined as his knot sinks all the way into you! It is enough to knock the breath out of you\
                                            and cries of mixed pain and pleasure for several seconds afterwards.</p> <p>After you get your breath back you grumble to him about his\
                                            misunderstanding. He only nibbles on your ear in response before saying \"Well.. too late now.... REALLY TO... Late... AHHH!!!\" he moans\
                                            and hugs you tightly as a HOT sensation spreads through your insides, each surge spreading it deeper as he cums.</p><p>\
                                            To your embarrassment it somehow feels so good, that warmth, the pressure everything that you feel your own cock release cum onto the bed under\
                                             you</p>");
                        system.animateQuality("essence", character.qualities.essence + 20);
                        oper(system, "./afterglow", "Try to relax and get use to the knots size");
                    },
                    "afterglow": function (character, system, action) {
                        transer();
                        parer("<p>He holds onto you and scoots up onto the bed rolling onto his side, that massive knot dragging you along with him.</p>\
                                                <p>\"Your ass will be stuck around my knot for at least an hour so might as well get some sleep.\" He says nuzzling close to you.</p>\
                                                <p>There really isn't much you can do, besides it really is starting to feel SOOO good being trapped by his knot. Or his knot trapped in you..\
                                                Either way you both slowly slip off to sleep.</p>");
                        oper(system, "./sleep", "Sleep enjoying the size of his knot");
                    },
                    "sleep": function (character, system, action) {
                        transer();
                        parer("<p>You lazily wake up a few hours later judging by the clock on your bedside table. As you try to move\
                                            a sudden surge of pleasure shoots through your ass! Quickly realizing Mark's knot is still fully lodged inside you! His cock\
                                            causing your entire ass to tingle slightly. You are sure he said it would only take an hour to go down...</p>");
                        system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                        system.animateQuality("tfstatus", character.qualities.tfstatus + 1);
                        oper(system, "./merge1", "Go back to sleep", "./ask", "Wake Mark and ask him about this");
                    },
                    "ask": function (character, system, action) {
                        transer();
                        parer("<p>You give Mark a few prods trying to wake him up, only managing to get a few garbled words out of him.\
                                             You get a bit more insistent and wiggle your butt tugging on his knot! This certainly gets a response, he lets out a moan and rolls over in his sleep!\
                                             His knot seems to drag you along surprisingly easily, as if you weighed far less than usual! He starts to wiggle around getting comfortable again unfortunately this includes him beginning to hump into you!\
                                             Within moments he brings you and himself back to another pair of orgasms and more cum filling up your insides!</p><p>\
                                             Even if you did wake him now he just came again and wouldn't be getting soft anytime soon anyway.\
                                            <p>");
                        system.animateQuality("essence", character.qualities.essence + 20);
                        oper(system, "./merge1", "Go back to sleep");


                    },
                    "merge1": function (character, system, action) {
                        transer();

                        parer("<p>Your eyes open and everything feels strange, your entire body seems to tingle with warmth.\
                                             Even stranger you have to look up to see your clock or pillows, in fact even Marks head is a good foot above you!\
                                             looking down you see your legs are short and stubby. Quickly you realize this must be a dream, oddly you can still feel Marks cock within you in the dream.\
                                             But its HUGE as if taking up every inch of your insides! Your rear seems to pulse with a strange feeling and everything feels hazy as you drift off to sleep again.</p>");
                        if (character.qualities.essence > 1) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                        ;
                        oper(system, "./merge2", "Drift off to sleep");

                    },
                    "merge2": function (character, system, action) {
                        transer();
                        parer("<p>Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel the massive size of Mark's knot\
                                            keeping you prisoner. With a sigh you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of Marks's\
                                            balls, but surprisingly not your legs... You tug a few more times and realize that you must still be dreaming.</p>");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                        ;
                        oper(system, "./wake", "Try to wake yourself up", "./dreamer", "Assume its a dream and enjoy");

                    },
                    "dreamer": function (character, system, action) {
                        transer();
                        parer("<p>Not sure why, but this bizarre dream is very arousing. The closeness of being a part of someone else just seems so erotic.\
                                                        Your hands drift down to your own cock and you begin masturbating. The dream seems to have changed even your cock, its smaller than it should be. However your entire body\
                                                        feels just as sensitive! As you stroke your cock your other arm strokes your body enjoying how good everything feels! Surprisingly even Mark starts to moan during this. Gently humping\
                                                        your body against the bed. Finally you both cum, and somehow you feel Marks orgasm as well! Oddly you feel your stomach bloat and feel full once he finishes as if from a large meal\
                                                        </p><p>Oddly your own cock seems to shrink with each blast of cum that leaves it, you continue to pump easily twice the amount of cum you normally would! Sadly your hands\
                                                        find a perfectly blank crotch now, reaching farther down only to find the start of Marks currently massive balls.</p>");
                        system.animateQuality("essence", character.qualities.essence + 20, {from: 1, to: 0});

                        oper(system, "./dreamer2", "Pay closer attention to whats happening");

                    },
                    "dreamer2": function (character, system, action) {
                        transer();
                        parer("<p>Your body feels really clear for a dream and it seems you are still getting smaller. Almost like his groin is absorbing you\
                                                        and taking control of you. His veins working their way through your body and the urethra of his cock forming inside you and connecting to your throat.\
                                                        You end up coughing up something sticky and salty as that happens but it still feels rather nice. Your sides tingle almost with a cooling sensation along those runic lines\
                                                        . As the sensation passes the changes finish, leaving you feeling very strange. The dream is starting to seem a bit too real as you wait and nothing else happens.</p>");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                        ;
                        oper(system, "./wake", "Try to wake yourself up");

                    },
                    "wake": function (character, system, action) {
                        transer();
                        //if (character.sandbox.artifacthidden==false){
                        /*
                         system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                         and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                         <p>\"Careful what you are doing down there... that hurt. And what the heck is that light shining in my eyes...\" Mark mumbles starting to wake up.\
                         The light is a bit of a surprise and you notice the ring on the artifact is glowing brightly!</p><p>\
                         You yell to him to wake up and GRAB THAT RING NOW! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your\
                         world to shift as he gets up, \"What the fuck is going on!!!\" he asks in horror before grabbing the ring, which rapidly stops glowing.</p>\
                         ");
                         */
                        parer("<p>You try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                                                        and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                                                        <p>\"Careful what you are doing down there... that hurt.\" Mark mumbles starting to wake up.\
                                                        </p><p>It quickly becomes apparent this isn't some dream and must have something to do with that\
                                                        artifact!\
                                                        You yell to him to wake up though it takes him a moment to realize the scope of the situation.<p>He sits up causing your\
                                                        world to shift,  \"What where are you, and why does my... OHMYGOD the fuck is going on!!!\" he asks in shock, looking down at his new cock... you.</p>\
                                                        ");
                        /*
                         } else {
                         system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                         and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                         <p>\"Careful what you are doing down there... that hurt.\" He says starting to wake up.</p><p>\
                         You yell for him to wake up NOW! It quickly becomes apparent this isn't some dream. This must have something to do with that\
                         artifact! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your\
                         world to shift, \"What the fuck is going on!!!\"</p><p>\
                         You do your best to calm him down and to focus.</p>\
                         ");
                         */
                        /*
                         system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                         and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                         <p>\"Careful what you are doing down there... that hurt.\" He says starting to wake up.</p><p>\
                         You yell for him to wake up NOW! It quickly becomes apparent this isn't some dream. This must have something to do with that\
                         artifact in your closet! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your\
                         world to shift as he gets up, \"What the fuck is going on!!!\"</p><p>\
                         You do your best to calm him down and to focus finally managing to get him to open your closet and see the ring just as it stops glowing.</p>\
                         ");
                         */
                         system.setQuality("timeofday", 0);
  system.setQuality("day", 2);
                        oper(system, "mergefinal/type" + character.qualities.tfstatus, "Take stock of the situation");
                    }
                }
            }
    ),
    brethost: new undum.SimpleSituation(
            "", {
                heading: "Your Livingroom",
                actions: {
                    "foreplay": function (character, system, action) {

                        parer("When you turn around Bret has already removed his pants before you even get the door closed!\
                                        It wasn't unheard of to see a taur walking around without pants, a bit more acceptable\
                                        than a female running around in just a bikini.<p> \"Ugh... It feels better without pants on, but company policy and all.\
                                        \" he says letting his rear end sit, also putting his rather sizable sheath on display!\"");

                        oper(system, "./bedsex", "Remove your pants and offer to make him feel MUCH better", "./chat", "Ask how a taur came to live in the city.");
                        if (character.sandbox.artifacthidden == true) {
                        } else {
                        }
                        ;
                    },
                    //I hope you have a big rear entrance, because I'm stuffing this oversized package in it.

                    "chat": function (character, system, action) {
                        transer();
                        parer("You remember that taurs tended to rural or rougher area. Cities just are not normally built with their unusual size kept in mind. Bret\
                                        shakes his head as rests against your couch. \"Well I find it easier to meet new people in the city who might be\
                                        interested in some 'deliveries', just by checking if they stare at the rear\" he snickers \"What can I say? I one of those types that can't go long\
                                        without relief, and taurs find it rather difficult to masturbate.\"");
                        oper(system, "./offer", "Drop your pants and offer to help him get some relief", "./offer", "(in the future this will be another option)Ask if he ever takes what he needs");
                    }, "sex": function (character, system, action) {
                        transer();
                        parer("When you turn around Bret has already removed his pants before you even get the door closed! \
                                His sheath says more than his face as it seems to pulse and stretch around a massive red canine rod. You begin to have second thoughts, it really is\
                                        massive! However your ass seems to approve and it suddenly clenches as if with excitement. You and he head into your bedroom. \
                                        \"I hope you have a big rear entrance, because I'm stuffing this oversized package in it.\"He says hugging you from behind and lightly bites your neck.");
                        oper(system, "./bedsex", "Bend over the bed for him", "./sex2", "Drop to all fours for him");
                    },
                    "offer": function (character, system, action) {
                        transer();
                        parer("His sheath says more than his face as it seems to pulse and stretch around a massive red canine rod. You begin to have second thoughts, it really is\
                                        massive! However your ass seems to approve and it suddenly clenches as if with excitement. You and he head into your bedroom. \
                                        \"I hope you have a big rear entrance, because I'm stuffing this oversized package in it.\"He says hugging you from behind and lightly bites your neck.");
                        oper(system, "./bedsex", "Bend over the bed for him", "./sex2", "Drop to all fours for him");
                    },
                    "bedsex": function (character, system, action) {
                        //bret to fuck you, bent over bed
                        bretbed = true;
                        transer();
                        parer("The feelings caused by the artifact are impossible to ignore, you just NEED something inside your ass! It's unreasonable and desperate,\
                                                all your mind focused on getting his shaft into you. At least till you feel his weight shift the bed and a hard slick rod begins pressing\
                                                painful hard against your hole!<p> He reaches down and rubs your shoulders as if giving you a massage,\
                                                 \"One last pun....\" he leans down and whispers \"I never was good with things labeled\
                                                'handle with care'.\" He warns you, and then thrusts forward MERCILESSLY!");

                        oper(system, "./sex3", "Get fucked");
                    },
                    "sex2": function (character, system, action) {
                        //bret to fuck you, submissivly on the floor
                        transer();
                        bretbed = false;
                        parer("The feelings caused by the artifact are impossible to ignore, you just NEED something inside your ass! It's unreasonable and desperate,\
                                        all your mind focused on getting his shaft into you. You drop to the floor submissively on all fours like a good bitch would and slowly spread your legs!\
                                        <p> He reaches down and holds onto your shoulders, \"One last pun....\" he gets a bit closer and whispers \"I never was good with things labeled\
                                        'handle with care'.\" He warns you, and then thrusts forward MERCILESSLY!");
                        oper(system, "./sex3", "Get fucked");
                        //set demener scale ++1

                    
                    },
                    "sex3": function (character, system, action) {
                        //bent over bed or on floor
                        transer();

                        parer("You hold back a moan of pain as the thickness of his cock spreads you open, it only lasts a few seconds\
                                                but it seems like an eternity. Its not till he begins pulling back out and thrusting \
                                                that your moans of pain turn into ones of pleasure! Even after you feel like you can't take more another inch of canine cock sinks in\
                                                The real fear comes when you feel a massive unreasonable bulge pounding into your ass, each time forcing you a bit wider!\
                                                ");

                        oper(system, "./knot", "Get knotted");
                    },
                    "knot": function (character, system, action) {
                        //bent over bed or on floor
                        transer();
                        parer("He pulls almost all the way back with his hands holding your shoulders and front legs " +
                                ((bretbed) ? " supporting himself on either side of you." : "wrapped tightly around your chest forcing you to support his weight.") +
                                ". You feel an insane force suddenly punch into\
                                                your tailhole stretching it beyond anything you ever imagined as his knot sinks all the way into you! It is enough to knock the breath out of you\
                                                followed by cries of mixed pain and pleasure for several seconds afterwards. <p>\
                                                Bret lets out a loud grow and tries to pull back suddenly sending a shock of pleasure through your body. That knot already had started growing\
                                                making it impossible to pull out! He lets out a howl as a HOT sensation spreads through your insides, each surge spreading it deeper as he cums.</p><p>\
                                                        To your embarrassment it somehow feels so good, that warmth, the pressure, and everything that your own cock begins cumming just from being fucked in the ass.\
                                                 ");
                        oper(system, "./knot2", "Relax and let him fill you");
                    },
                    "tease": function (character, system, action) {
                        transer();
                        character.sandbox.bretdom=true;
                        parer("He raises an eyebrow and smiles in a way only a true predator can. \"You sure you want to know? This is one request you can't return to sender....\" he says\
                                        once again using a horrible postal reference. Still he gets the point across, this could get rough if you say yes.");
                        oper(system, "./rape", "Walk to your room saying nothing and flick your tail in his direction", "./offer", "Suggest a more gentle approach for your first time");
                        system.animateQuality("essence", character.qualities.essence + 20, {from: 1, to: 0});
                    },
                    "rape": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "", "", "");
                        system.animateQuality("essence", character.qualities.essence + 20, {from: 1, to: 0});
                        oper(system, "./dreamer2", "Pay closer attention to whats happening");
                    },
                    "tease3w": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "", "", "");
                        system.animateQuality("essence", character.qualities.essence + 20, {from: 1, to: 0});
                        oper(system, "./dreamer2", "Pay closer attention to whats happening");
                    },
                    /*
                     system.animateQuality("essence",character.qualities.essence+20);
                     system.animateQuality("essence",character.qualities.essence-20, {from:1, to:0});
                     system.animateQuality("tfstatus",character.qualities.tfstatus+1);	
                     if (character.qualities.essence >1){
                     system.animateQuality("essence",character.qualities.essence-20, {from:1, to:0});
                     system.animateQuality("tfstatus",character.qualities.tfstatus+4);
                     };
                     
                     
                     
                     
                     
                     */
                    "knot2": function (character, system, action) {
                        //bent over bed or on floor
                        transer();
                        parer("" + ((bretbed) ? "He holds onto you and scoots up onto the bed" : "He carefully grabs both your arms and stands up, your ass is lifted off the ground\
                                        literally suspending you under him as he gets onto the bed.") + " That massive knot tugging at your hole both hurts and feels wonderful as he drags you along with him.\
                                                <p>\"This is my favorite part.\" He says wrapping his four legs around you possessively. You suddenly let out a gasp as you feel him lightly hump into you, and then again....\
                                                <p>He just keeps passively humping you, each time that knot roughly tugging at your hole. There really isn't much you can do while his knot keeps you prisoner.\
                                                Eventually he manages to bring you to orgasm again while he settles in to sleep without any sign of stopping his weak thrusts.");
                        system.animateQuality("essence", character.qualities.essence + 10);
                        oper(system, "./sleep", "Try to get some sleep", "./hump", "Wait for the humping to stop");
                    },
                    "hump": function (character, system, action) {
                        //bent over bed or on floor
                        transer();
                        parer("You groan feeling the knot tug again and again at your ass. It is hardly more than a twitch from his rear but as time goes on that knot\
                      is so large any movement begins to feel like a full force lunge! The more you focus on it the better it feels, waves of pleasure causing you to to wiggle around.\
                      All that movement around his cock causes him to moan lightly and really start to thrust harder!<p>Soon you are both once again brought to orgasm and he finally settles down");
                        system.animateQuality("essence", character.qualities.essence + 20);
                        oper(system, "./sleep", "Finally get some sleep");
                    },
                    "sleep": function (character, system, action) {
                        transer();
                        parer("A few hours later you start waking up. As you try to move\
                                                        and a sudden surge of pleasure shoots through your ass! Quickly you realize Bret's knot is still fully lodged inside you! Its\
                                                        causing your entire ass to tingle slightly from how long its been forced to stay impaled.\
                                                        His four legs are hugging you tightly, even without the knot you might not be able to get up.");
                        oper(system, "./wake", "Try to wake yourself up");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 1);
                        }
                        oper(system, "./merge1", "Go back to sleep", "./ask", "Wake Bret and ask him to pull out");
                    },
                    "ask": function (character, system, action) {
                        transer();
                        parer("You give Bret a few prods trying to wake him up, only managing to get a few garbled words out of him.\
                                                         You get a bit more insistent and wiggle your butt tugging on his knot! This certainly gets a response, he lets out a moan and stretches in his sleep!\
                                                          He starts to wiggle around getting comfortable again unfortunately this includes him starting that passive humping again!\
                                                         Within moments he brings you and himself back to another pair of orgasms and more cum filling up your insides!</p><p>\
                                                         Even if you did wake him now he just came again and wouldn't be getting soft anytime soon anyway.\
                                                        ");
                        system.animateQuality("essence", character.qualities.essence + 20);
                        oper(system, "./merge1", "Go back to sleep");
                    },
                    "merge1": function (character, system, action) {
                        transer();

                        parer("Your eyes open and everything feels strange, your entire body seems to tingle with warmth.\
                                  You realize you have to look UP to see Brets front legs!\
                                 Looking down you see your own legs are short and stubby. This must be a dream, oddly you can still feel Bret's cock within you\
                                 But its HUGE as if taking up every inch of your insides! Your rear seems to pulse with a strange feeling and everything else feels hazy as you drift off to sleep again.");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                      
                        oper(system, "./merge2", "Drift off to sleep");

                    },
                    "merge2": function (character, system, action) {
                        transer();
                        parer("Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel the massive size of Bret's knot\
                                keeping you prisoner. With a sigh you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of Bret's\
                                balls, but surprisingly not your legs. Trying to flex your legs shockingly causes his balls to pull up slightly in his sack. You tug a few more times and conclude that you must still be dreaming.");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                     
                        oper(system, "./wake", "Try to wake yourself up", "./dreamer", "Assume its a dream and enjoy");

                    },
                    "dreamer": function (character, system, action) {
                        transer();
                        parer("Not sure why, but this bizarre dream is very arousing. The closeness of being a part of someone else just seems so erotic.\
                                Your hands drift down to your own cock and you begin masturbating. The dream seems to have changed even your cock, its smaller than it should be. However your entire body\
                                feels just as sensitive! As you stroke your cock your other arm strokes your body enjoying how good everything feels! Surprisingly even Bret starts to moan during this. Gently humping\
                                your body against the bed. Finally you both cum, and somehow you feel Brets orgasm as well! Your stomach bloats and feels full once he finishes as if from a large meal\
                                </p><p>Oddly your cock seems to shrink with each blast of cum that leaves it, you continue to pump easily twice the amount of cum you normally would! Sadly your hands\
                                soon find a perfectly blank crotch now, reaching farther down only to find the start of Bret's currently massive balls.");
                        system.animateQuality("essence", character.qualities.essence + 20);

                        oper(system, "./dreamer2", "Pay closer attention to whats happening");

                    },
                    "dreamer2": function (character, system, action) {
                        transer();
                        parer("<p>Your body feels really clear for a dream and it seems you are still getting smaller. Almost like his groin is absorbing you\
                                            and taking control of you. His veins working their way through your body and the urethra of his cock forming inside you and connecting to your throat.\
                                            You end up coughing up something sticky and salty as that happens but it still feels rather nice. Your sides tingle almost with a cooling sensation along those runic lines\
                                            . As the sensation passes the changes finish leaving you feeling very strange. The dream is starting to seem a bit too real as you wait and nothing else happens.</p>");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                        ;
                        oper(system, "./wake", "Try to wake yourself up");

                    },
                    "wake": function (character, system, action) {
                        transer();
                        //if (character.sandbox.artifacthidden==false){
                        /*
                         system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                         and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                         <p>\"Careful what you are doing down there... that hurt. And what the heck is that light shining in my eyes...\" Mark mumbles starting to wake up.\
                         The light is a bit of a surprise and you notice the ring on the artifact is glowing brightly!</p><p>\
                         You yell to him to wake up and GRAB THAT RING NOW! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your\
                         world to shift as he gets up, \"What the fuck is going on!!!\" he asks in horror before grabbing the ring, which rapidly stops glowing.</p>\
                         ");
                         */
                       parer("You try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                                            and are rather surprised to hear a yelp of pain from yourself AND Bret!</p>\
                                            <p>\"Careful what you are doing down there... that hurt.\" Bret mumbles starting to wake up.\
                                            </p><p>It quickly becomes apparent this isn't some dream and must have something to do with that\
                                            artifact!\
                                            You yell to him to wake up though it takes him a moment to realize the scope of the situation.<p>He sits up causing your\
                                            world to shift,  \"What where are you, and why... the fuck is going on!!!???\" he asks in shock, angling around to look down at his new cock... you.\
                                            ");
 system.setQuality("timeofday", 0);
  system.setQuality("day", 1);
                        oper(system, "mergefinal/type" + character.qualities.tfstatus, "Take stock of the situation");
                    }
                }
            }
    ),
    keagenhost: new undum.SimpleSituation(
            "", {
                /*
                 
                  if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                  system.animateQuality("essence", character.qualities.essence + 20, {from: 1, to: 0});
                 
                 He bounces out of his seat, which for a roo is rather impressive, he practically lands on you with a hug! \"DUDE! You have no idea how much this means to me!\
                                Just so you know it's probably a fake... but its still worth it to find out!\" He hugs tighter making you shiver as his sheath brushes against you through his pants.\
                                         \"OH I need to get my tools from the college, just in case it is the real deal!\"He says finally leting go of you.");
                        oper(system, "keagenhost/home", "Tell him your address and to meet you there in an hour");
                 */
                
                
                heading: "Your House",
                actions: {
                    "home": function (character, system, action) {
                            parer("Once home to tidy up a bit and pull the pedestal over closer to your bed. Now that you look at it again you see that the blue lines that now adorn your sides\
                                are missing from the sides of the phallus. Just as you are getting the second page of the letter you hear a knocking at your door.");
                        oper(system,"./answer","Answer the door.");
                    },
                    "answer": function (character, system, action) {
                        transer();    
                        parer("As expected Keagen is there with a huge grin on his face and a massive dufflebag in his arms. \"Ah good I found the right place this time! Err....\
                        Tell your neighbor I didn't mean to cause trouble... ANYWAY! Lets take a look at this thing!\" He exclaims and rushes into the room placing his dufflebag\
                        on the table making a bizarre almost musical ding sound from something inside.");
                        
                        oper(system,"./talk","Talk to him about the letters first","./artifact","Bring him to your bedroom.");
                    },
                     "talk": function (character, system, action) {
                        transer();    
                        parer("He sighs and rolls his eyes \"I swear if this is about safety...\" he says grumbling.<p>\
                       You get out the letters and ask him to keep everything he sees here a secret which he quickly agrees to do.\
                        Handing him the second letter with the partial translations on it he gets a blank look on his face but then turns to you.\
                       <p>\"You do realize this is gibberish to me right? I am an arcanist, not an archeologist! Not even a linguist! I don't know the first thing about other languages!\
                        \" He says waving the paper about");
                        oper(system,"./second","Sigh and show him the first letter","./artifact","Show him the artifact but don't tell how you got it");
                    },
                     "second": function (character, system, action) {
                        transer();    
                        parer("He takes it and smiles seeing that its actually in a language that he can read. However the farther he reads the wider his eyes become,\
                       soon even his mouth is wide open in shock from what he is reading!<p> \"Is this for real? You have a potentially wardless artifact????\" he asks as if you would understand. ");
                        oper(system,"./danger","Tell him maybe","./explain","Ask him what 'wardless' means");
                    },
                     "explain": function (character, system, action) {
                        transer();    
                        parer("He sits down and starts opening his bag. \"Alright, unwarded means BAD, very BAD! Like 'Oh my uncle just mailed me a ball of warm metal'\
                        they found in the remains of a defused Nuclear warhead!\" He says starting to get exasperated\
                        <p>\"I will put it another way... Magic or arcana isn't good at staying stable. Every hundred and twenty years stuff has to be reinforced, thats what most arcanists\
                        do for work. As arcane stuff ages it needs wards to keep from 'leaking' or 'spreading'.\" He pauses to think" );
                  
                        oper(system,"./depth","Ask for details","./danger","Tell him to GET ON WITH IT!");
                    },
                    
                    
                     "danger": function (character, system, action) {
                        transer();    
                        parer("\"Alright! It comes down to this, those strangelet's in the crystals have to be modified by people to do specific things, which makes them unstable. Unless an arcanist reinforces them\
                       they will grow till they become fully stable again, which can cause all sorts or BAD things! Like a computer that you never turn off, it will start to do weird stuff.\
                       I figured you would have some little thing maybe 100years old at best.... Which wouldn't be dangerous... But an artifact from a dig site that HASN't been checked by an arcane lab!\
                       I need to see this thing NOW\" he says with a forceful tone");
                        oper(system,"./artifact","Show him to your bedroom");
                    },
                    "depth": function (character, system, action) {
                        transer();    
                        parer("I will try to explain as best I can. Arcana is the result of semi stable particle things, I think they called them strangelets or charmlets... Something\
                        and basically they can become stable with enough of them. However they are more stable than regular stuff like matter, and can even convert matter into more of itself.\
                        Its complicated and more of a quantum class topic. Anyway matter usually gets in the way almost clogging the process and ends up forming crystals of certain elements or minerals\
                        around the strangelets, which is why the whole world isn't eaten up by them");
                        oper(system,"./more","Tell him to keep going","./danger","Beg him to stop");
                    },
                    
                     "more": function (character, system, action) {
                        transer();    
                        parer("\"The thing about crystals that form is that they become a bit looser around the parts entangled with the strangelet,\
                       kind of like a balanced compass needle. Anything effecting that material will apply an effect on the strangelet, including some bizarre energy field folding bullshit.\
                       I admit once they start talking about  26 string dimension stuff and -1/12 I start to zone out.\"He says holding his head<p>\
                      \"Different materials resonate to different things. Some resonate to specific music notes, others to heat, and the best ones to alpha brainwaves\
                     !");
                        oper(system,"./danger","Stare blankly at him");
                    },
                    
                     "artifact": function (character, system, action) {
                        transer();    
                        parer("He enters and then stops once he sees the pedestal. \"I was prepared for a few things, but a magic dildo was not one of them.\"\
                       He says staring at it for a moment, then gets out his duffel bag and places it next to the pedestal. He starts cycling though the different items in the bag often making weird musical notes or high pitched\
                       noises that hurt your hears. Finally he gets closer and kneels in front of the pedestal placing a small device to his head. Seeing you stareing at him he sighs \
                       \"It amplifies brainwaves under 15 hertz. This way I don't need to touch it to see if it reacts to bioelec... something input\" he says stumbling for the right terms");
                        oper(system,"./ouch","Take a step closer and watch");
                    },
                     "ouch": function (character, system, action) {
                        transer();    
                        parer("Keagen stays silent for a few minutes, almost like he was trying to meditate. Nothing seems to be happening, at least not at first. The cock and pedestal show no signs\
                       any change but what does get your attention is the burning sensation under your arms!<p>You pull off your shirt quickly and stare down at the blue lines glowing brightly on either\
                       of your sides! A second later another burning sensation begins to spread through your ass and head.");
                        oper(system,"./yelp","Tell him to stop");
                    },
                    "yelp": function (character, system, action) {
                        transer();    
                        parer("He hears you and sighs \"Yea I know... Nothing. I was really hoping...\"He starts to say but turns seeing your predicament!\"No way!\" He says\
                        Examining the glowing runes on your sides. After a moment or two the glowing stops as does the pain in your ass and head.<p>\
                        \"Ok... this is.... weird. Guessing you already interacted with the artifact? And here I thought I would be the one in trouble for ignoring safety! Tell me exactly what happened\" he\
                        says knowing it will be something naughty");
                        oper(system,"./curse","Tell him about your accident the other day");
                    },
                    "curse": function (character, system, action) {
                        transer();    
                        parer("You explain in detail all about the other day and how you fell onto it when it shocked you and about the ring that went missing afterward, then reluctantly mention how desperate\
                        you have been feeling all day. He listens nodding at each part then smiles at you. \"So its a two part artifact, one to cause heat and one to control it.\
                        But due to arcanic degradation it was unstable and merged with the first source of carbon it found, you. Arcanists call them runic scars or tattoos, always the result of improper warding.\"");
                        oper(system,"./bad","Ask if they are dangerous","./rid","Ask if he can remove them");
                    },
                    "rid": function (character, system, action) {
                        transer();    
                        parer("He shrugs \"Not really sure, I am still learning most of this stuff. And as you can see there is a ton of safety needed to learn before you ever get to touch any arcane object.\
                        \" He says looking at your sides. \"Just be thankful you only got hit by a fertility enchantment, others can be fatal. Still I should stabilize those runes just to make sure it doesn't get worse\"\
                         he says getting out a few crystals and placing them in a circle on the floor then connecting them with a line chalk.");
                        oper(system,"./agree","Thank him and stand in the circle");
                    },
                     "bad": function (character, system, action) {
                        transer();    
                        parer("\"Well not at the moment. They may still be semi unstable, which could be bad for the ones on the ring since those are inside you.\
                        Most runed arcanists just have to be a bit careful to not accidentally activate their effects. I will just make sure to stabilize your entire body\
                       , that way they should be safe from doing any further harm.\" he says getting out a few crystals and placing them in a circle on the floor then connecting them with a line chalk.");
                        oper(system,"./agree","Stand in the circle");
                    },
                      "agree": function (character, system, action) {
                        transer();    
                        parer("He starts to get out a few more things from the bag including a book and what looks like a loudspeaker. \"I am pretty sure this will work. Well, at least thats what\
                      I have heard others have done.\"He says as you quickly remember he hasn't done anything like this before! <p>He sees the worry in you eyes and pats you on the back\
                        \"Don't worry, stabilizing artifacts is something they teach really early. Though usually thats objects.... but the principle is the same!\" he says failing to assure you. \
                        Despite that he kneels again and gets out that device connecting it to the loud speaker. \"This might feel... strange... Actually I have no idea what it will feel like!\" he says and begins meditating.");
                        oper(system,"./zot","Hope for the best");
                    },
                     "zot": function (character, system, action) {
                        transer();    
                        parer("The crystals around you glows and the chalk begins to spark slightly, it goes on for a few moments till a sudden flash fills the room! The runes on your sides become\
                       burning hot and your ass feels like it needs to be fucked by 40 horses! The sensations all seem to converge in your head and you nearly black out and fall over. Thankfully Keagen catches you\
                       Looking worried\"OH damn! I forgot stabilizing also dumps significant energy into the artifact.... Sorry, but at least you should be safe now\" He says, but really you don't hear much of his words\
                       all you can think about is how desperately you NEED to be fucked!");
                            system.animateQuality("essence", character.qualities.essence + 5);
                        oper(system,"./pants","Rip his pants off","./bend","Take your pants off and beg for his help");
                    },
                       "pants": function (character, system, action) {
                        transer();    
                        keagenbed=true;
                        parer("He yelps in surprise as you struggle to pull his pants off to his knees. \"Hey what the.... OH no... It was a fertility enchantment. Alright just calm down!\"\
                     he says as you push him around and onto the bed. Your body almost feels like its on automatic, you just NEED your ass to be filled with something!\
                     \"I am not gay but I did cause this... Try to get ahold of yourself\" he begs you");
                        oper(system,"./sex","Tell him you are exchanging his offer of a blowjob for him fucking you");
                    },
                     "bend": function (character, system, action) {
                        transer();
                        keagenbed=false;
                        parer("You present your ass to him and whimper desperately in need!\"Dude... I am not gay. I mean... I know this is my fault\"\
                       he says trying to think of a good way out of this. In a moment minimal clarity you mention his earlier offer.");
                        oper(system,"./sex","Ask him to fuck you instead of giving a blowjob");
                    },
                       "sex": function (character, system, action) {
                        transer();    
                        parer("He sighs remembering that offer. \"But... I didn't mean....\"\
                        Ehhhh.... What kind of arcanist would I be if I didn't make sure the artifact was still working after the stableization\" he asks\
                     weakly and with a sigh takes his pants off.<p>His sheath is thick with a thin read tip poking out of it, thankfully his balls are not in the same place as feral kangaroo's.\
                     But the shape is apparently still the same.");
                        oper(system,"./lick","Help him get in the mood");
                    },
                    "lick": function (character, system, action) {
                        transer();    
                        parer("You know this isn't you, the damn artifact and those runes are causing you to be horny as HELL. All you can think about is getting his cock in your ass\
                        But he needs to be hard first."+((keagenbed)?"You kneel ":"You flip around on the bed so you are facing\
                         his crotch,")+"and sneak your tongue into his sheath causing amusing gasps from him. The taste is unfamiliar but to your lust filled mind it's blissfully good.\
                         <p>\"That... really feels good! Keep going!\" he moans out wrappings his hands around be back of your head as his cock quickly escapes from his thick sheath.");
                        oper(system,"./suck","Bring him to orgasm","./fuck","Now that he is hard ask him to fuck you");
                    },
                     "suck": function (character, system, action) {
                        transer();
                        parer("His cock is oddly long and a tad muscular, it practically wrestles with your tongue as you bring him closer to orgasm. The kangaroo's\
                       moans start to grow louder as he begins humping your face. <p>\"This feels so much better than I thought it would!\" he says with a groan\
                       . After one final hard thrust he pulls your head against his groin and unleashes a torrent of cum straight down your throat. Its not till he is cumming that you \
                       realize you have been deepthroating him! He pulls back and pants for a few minutes but to your delight doesn't go soft,");
                         system.animateQuality("essence", character.qualities.essence + 10 );
                         oper(system,"./fuck","Get fucked");
                    },
                    "fuck": function (character, system, action) {
                        transer();
                        
                        parer(((keagenbed)?"Standing back up you turn and slowly lower yourself down toward Keagens cock.":"You flip back around on the bed so your ass is in perfect humping range.")+"\
                        Keagen lets out a soft moan as you feel his cock slowly work its way into you, It's shape is odd and you can even feel it moving around on its own.  \"Geeze you are tight!\"\
                        He exclaims feeling your tight hole works his length"+((keagenbed)?"You begin bouncing up and down on his lap really sending shivers of pleasure though both of you\
                        .":"He beings humping your ass faster and faster sending waves of pleasure though your body."));
                        oper(system,"./orgasm","Get filled with cum");
                    },
                     "orgasm": function (character, system, action) {
                        transer();    
                        parer("With one final plunge he grabs onto you tightly and a warmth spreads through your insides. His cock twitches wonderfully inside you with each surge of cum\
                       , but it also seems to press against something wonderful. It sends you into a state of absolute bliss as you experience your first anal orgasm. Both of you exhausted\
                        collapse onto the bed to enjoy the afterglow of orgasm.");
                         system.animateQuality("essence", character.qualities.essence + 20 );
                        oper(system,"./afterglow","Suggest he stays the night");
                    },
                       "afterglow": function (character, system, action) {
                        transer();
                        parer("It really doesn't take much to convince him and he seems rather content just to snuggle up behind you as his cock occasionally moves around inside you.\
                     \"Never thought doing it with another guy could be so... good. Though maybe it was just the artifact.... I am sure it must be effecting me\" he tries to rationalize a bit\
                     Still you and he are both rather tired and soon fall asleep, his cock still exploring your insides.");
                                 oper(system, "./sleep", "Sleep");
                       
                  
                    },
                    "sleep": function (character, system, action) {
                        transer();
                        parer("A few hours later you start waking up to a strange feeling in your rear. As you try to move\
                                                        and a sudden surge of pleasure shoots through your ass! Looking around you realize Keagen is still behind you but his cock is inside you again, he must have gotten hard again in the night!\
                                                        All you can do is wiggle around and try to disentangle yourself from him but it becomes clearer and clearer that you can't dislodge his cock by yourself");
                                             if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 1);
                        }
                        oper(system, "./merge1", "Go back to sleep", "./ask", "Wake Keagen and ask him to pull out");
                    },
                    "ask": function (character, system, action) {
                        transer();
                        parer("You give Keagen a few prods trying to wake him up, only managing to get a few garbled words out of him.\
                                                         Getting a bit more insistent and you wiggle your butt kind of pulling on his member! This certainly gets a response, he lets out a moan and stretches in his sleep!\
                                                          He shifts around to get comfortable again unfortunately this includes him starting to hump you in his sleep!\
                                                         Within moments he brings you and himself back to another pair of orgasms and more cum filling up your insides!</p><p>\
                                                        It feels so good you might as well go back to sleep");
                        system.animateQuality("essence", character.qualities.essence + 20);
                        oper(system, "./merge1", "Go back to sleep");
                    },
                    "merge1": function (character, system, action) {
                        transer();

                        parer("Your eyes open and everything feels strange, your entire body seems to tingle with warmth.\
                                  You realize you have to look UP to see Keagens head!\
                                 Below you see your own legs are short and stubby. This must be a dream, oddly you can still feel Keagen's cock within you\
                                 But its HUGE as if taking up every inch of your insides! Your rear seems to pulse with a strange feeling and everything else feels hazy as you drift off to sleep again.");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                      
                        oper(system, "./merge2", "Drift off to sleep");

                    },
                    "merge2": function (character, system, action) {
                        transer();
                        parer("Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel the Keagen's cock\
                                keeping you prisoner like earlier. With a sigh you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of Keagens's\
                                balls, but surprisingly not your legs. Trying to flex them shockingly causes his balls to pull up slightly in his sack. You tug a few more times and conclude that you must still be dreaming.");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                     
                        oper(system, "./wake", "Try to wake yourself up", "./dreamer", "Assume its a dream and enjoy");

                    },
                    "dreamer": function (character, system, action) {
                        transer();
                        parer("Not sure why, but this bizarre dream is very arousing. The closeness of being a part of someone else just seems so erotic.\
                                Your hands drift down to your own cock and you begin masturbating. The dream seems to have changed even your cock, its smaller than it should be. However your entire body\
                                feels just as sensitive! As you stroke your cock your other arm strokes your body enjoying how good everything feels! Surprisingly even Bret starts to moan during this. Gently humping\
                                your body against the bed. Finally you both cum, and somehow you feel Keagen's orgasm as well! Your stomach bloats and feels full once he finishes as if from a large meal\
                                </p><p>Oddly your cock seems to shrink with each blast of cum that leaves it, you continue to pump easily twice the amount of cum you normally would! Sadly your hands\
                                soon find a perfectly blank crotch now, reaching farther down reveals the start of Bret's currently massive balls.");
                        system.animateQuality("essence", character.qualities.essence + 20);

                        oper(system, "./dreamer2", "Pay closer attention to whats happening");

                    },
                    "dreamer2": function (character, system, action) {
                        transer();
                        parer("<p>Your body feels really clear for a dream and it seems you are still getting smaller. Almost like his groin is absorbing you\
                                            and taking control of you. His veins working their way through your body and the urethra of his cock forming inside you and connecting to your throat.\
                                            You end up coughing up something sticky and salty as that happens but it still feels rather nice. Your sides tingle almost with a cooling sensation along those runic lines\
                                            . As the sensation passes the changes finish leaving you feeling very strange. The dream is starting to seem a bit too real as you wait and nothing else happens.</p>");
                        if (character.qualities.essence > 19) {
                            system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                            system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                        }
                        ;
                        oper(system, "./wake", "Try to wake yourself up");

                    },
                    "wake": function (character, system, action) {
                        transer();
                        //if (character.sandbox.artifacthidden==false){
                        /*
                         system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                         and are rather surprised to hear a yelp of pain from yourself AND Mark!</p>\
                         <p>\"Careful what you are doing down there... that hurt. And what the heck is that light shining in my eyes...\" Mark mumbles starting to wake up.\
                         The light is a bit of a surprise and you notice the ring on the artifact is glowing brightly!</p><p>\
                         You yell to him to wake up and GRAB THAT RING NOW! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your\
                         world to shift as he gets up, \"What the fuck is going on!!!\" he asks in horror before grabbing the ring, which rapidly stops glowing.</p>\
                         ");
                         */
                       parer("You try and get up but everything below your waist is just missing. Finally you resort to pinching yourself\
                                            and are rather surprised to hear a yelp of pain from yourself AND host!</p>\
                                            <p>\"Careful what you are doing down there... that hurt.\" host mumbles starting to wake up.\
                                            </p><p>It quickly becomes apparent this isn't some dream and must have something to do with that\
                                            artifact!\
                                            You yell to him to wake up though it takes him a moment to realize the scope of the situation.<p>He sits up causing your\
                                            world to shift,  \"What where are you, and why... the fuck is going on!!!???\" he asks in shock, angling around to look down at his new cock... you.\
                                            ");
 system.setQuality("timeofday", 0);
  system.setQuality("day", 2);
                        oper(system, "mergefinal/type" + character.qualities.tfstatus, "Take stock of the situation");
                    },
                    
                   "prototypeerr": function (character, system, action) {
                        transer();    
                        parer("");
                        oper(system,"./","");
                    }
                }
            }
    ),
    mergefinal: new undum.SimpleSituation(
            "", {
                heading: "Your Bedroom",
                enter:function(character, system, from){
                      system.setQuality("timeofday", 0);
                     curhost = character.sandbox.currenthostparse.host;
                     console.log("new test for header "+curhost);
                },
                actions: {
                    /*
                     Conversion rate: 
                     Smaller= 1-1 (20 essence= 1 full tier jump)
                     larger= 2-1 (40 essence= 1 full tier jump)
                     Extras= (5 essence to remove, 10 to return)
                     
                     COCK
                     20%= minor shrinking, no legs, attached to groin 
                     40%= surrounded by sheath, Urethral buldge can pull into sheath part way, Looks like a hyper fur. Can hide in public.
                     60%= Far smaller but larger than a cock, can fit in pants.
                     80%= cock sized, no bones, Difficulty moving when hard.
                     100%= Full converstion, can still move around slightly when soft.
                     no arms= extra 10%
                     Cock shaped head=5%
                     */

                    "type1": function (character, system, action) {
                        //20%= minor shrinking, no legs, attached to groin
                    parer("<p>After the panic of the situation has finished host stands in front of the mirror\
                                                        looking over what has happened to both of you.</p>\
                                                        <p>Thankfully the transformation didn't seem to get very far. You are only a few feet shorter but your legs have been\
                                                        completely absorbed by his now MASSIVE balls. The rest of your body is mostly unchanged. At best only about 20% of\
                                                        your body has been transformed, though your waist is merged with " + character.sandbox.host.host + "s groin. </p>");
                        if (character.sandbox.host.host == "mark" || character.sandbox.host.host == "keagen") {
                            parer("host" + ((character.sandbox.host.host=="keagen")? "Sighs looking down at you. \"That artifact is much more than some fertility inducer.\
                            but if it can cause this it certainly can undo it. Stilll.... This is weird.\"\
                            " :" shakes his head looking at you and he in the mirror. \"Damn... there is no way we can\
                                                        go out in public looking like this... I really hope you can explain what the hell is going on, and why you are currently attached to my groin\""));
                        character.sandbox.limits.goout=false;
                        } else {
                            //its bret
                            parer("host shakes his head looking at you and he in the mirror. \"If I wear a long overcoat you should\
                                                     be able to stay hidden with a harness to keep you secure under me. Still I really hope you can explain what the hell is going on,\
                                                      and why you are currently attached to my groin\"");
                        }
                        ;
                       character.sandbox.limits.insheath=0;
                        oper(system, "./explain", ((character.sandbox.host.host=="keagen")?"Ask him how this could happen":"Tell him about the artifact"));

                    },
                    "type5": function (character, system, action) {

                        //40%= surrounded by sheath, can pull into sheath part way, Looks like a hyper fur. Can hide in public.
                        parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you\
                                                        . Your body gets a bit softer and you feel yourself getting pulled into his sheath. You let out an eeep of surprise but with your size\
                                                        the sheath can only hold up to your shoulders. If you really relax and work your arms in you can get it to around your neck.\
                                                        Although anyone seeing the bulge in his pants would think he is a hyper fur or something.</p>\
                                                        "+((character.sandbox.host.host=="keagen")?"Keagen sighs looking down at you, his new cock \"I had no way to know this would happen, but if \
                                                        the artifact can do this, then it most likely can undo it.\"":"\
                                                        <p>\"I really hope you can explain what the hell is going on, and why you have been turned into my cock!/")+ "He says giving you an experimental rub which causes\
                                                        a surge of pleasure to run through your entire body.</p>\
                                                        </p>");
                character.sandbox.limits.insheath=1;
                        oper(system, "./explain", ((character.sandbox.host.host=="keagen")?"Ask him how this could happen":"Tell him about the artifact"));
                    },
                    "type9": function (character, system, action) {
                        if (character.sandbox.host.host == "bret") {
                            system.doLink("mergefinal/type13");

                        }
                        ;
                        //60%= Far smaller but larger than a cock, can fit in pants.
                        parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you\
                                                        . Your body gets a bit softer and you feel yourself getting pulled into his sheath! Apparently the only reason you were out was due to his morning wood.\
                                                        His sheath seems determined to welcome you to your new home! However you are able to grab the sides and hold yourself from being pulled in, though the moment you\
                                                        let go it would engulf you rather quickly.</p>\
                                                        <p>"+((character.sandbox.host.host=="keagen")?"Keagen sighs looking down at you, his new cock \"I had no way to know this would happen, but if \
                                                        the artifact can do this, then it most likely can undo it.\"":"\"I really hope you can explain what the hell is going on, and why you have been turned into my cock!\"")+ "He says giving you an experimental rub which causes\
                                                        a surge of pleasure to run through your entire body.</p>");
                        character.sandbox.limits.insheath=2;
                        oper(system, "./explain", ((character.sandbox.currenthostparse.host=="keagen")?"Ask him how this could happen":"Tell him about the artifact"));
                    },
                    "type13": function (character, system, action) {
                        //80%= cock sized, no bones, Difficulty moving when hard
                       parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you\
                                            . Your body gets a bit softer and you feel yourself getting pulled into his sheath! Apparently the only reason you were out was due to his morning wood.\
                                            The sheath soon pulls you in deeper. Even with your full strength his sheath seems determined to welcome you to your new home! Your arms give out and you are pulled the rest of the way\
                                            into his warm moist sheath which quickly closes above you! </p><p>\
                                            Its unbelievably tight the best you can do is wiggle around slighty, you are still a fair bit larger than any normal cock would be. You soon feel a rubbing sensation\
                                            from outside and a wonderful surge of pleasure cascading through you. There is a thumping pulse that is causing you to grow hard and slowly exit from his sheath. \
                                            </p><p>\""+((character.sandbox.host.host=="keagen")?"Alright I will try to talk fast":"ALright talk fast")+", I can't stay hard... err you can't stay hard forever!\" He says trying to maintain an erection</p>");
                        character.sandbox.limits.insheath=2;
                        oper(system, "./explain", ((character.sandbox.host.host=="keagen")?"Ask him how this could happen":"Tell him about the artifact"));
                    },
                    "explain": function (character, system, action) {
                        transer();
                        if (character.sandbox.host.host=="keagen"){
                            parer("Keagen mostly just apologies for this happening, but also does his best to explain how this is possible. Apparently arcane items can change all sorts\
                                            of physical characteristics, even gender or species are mutable. <p>However a new uncomfortable sensation is building somewhere within you\
                                              as he winces and interrupts \"I hate to say this... but I really need to use the bathroom!\" You start to say yes fine... but then realize just what this means\
                                            for you being his cock!\
                                            ");
                            
                        }else{
                        parer("<p>All you can do is sigh and explain to him everything you know about receiving the artifact and what happened with it yesterday.\
                                            However a new uncomfortable sensation is building somewhere within you\
                                              as he winces and interrupts \"I hate to say this... but I really need to use the bathroom!\" You start to say yes fine... but then realize just what this means\
                                            for you being his cock!\
                                            </p>");
                        };
                        parer("<p>\
                                            <table class=transient border='1' style='width:100%'><tr>\
                                            <td style='text-align:center;'><a href=./hold  class=transient> Tell him to try and hold it in! </a></td>\
                                            </tr></p> ");
                    },
                    "hold": function (character, system, action) {
                        transer();
                        parer("<p>He nods and starts to pace around the room while you and he continue to talk. It is incredibly strange bouncing up and down slightly as he walks. \
                                            Still that pressure within or possibly behind you continues to build. Trying to hold in piss when you really have to go is unpleasant, but its nothing compared to being\
                                            a cock trying to hold it in! Strange tingling sensations spreads from a point below you, continuing upward in a line under your belly, chest, and neck! The sensation is\
                                            unmistakable, host's urethra is a part of you and extends all the way to your throat!\
                                            </p><p>\"I am sorry I... I can't hold it much longer!\" he whimpers and searches for your bathroom!\
                                            </p>");
                        oper(system, "mergebathroom", "Tell him where the bathroom is", "translate/nope", "Wait for this to be over.(Prevents further watersports scenes)");
                    }//function close
                }
            }
    ),
    mergebathroom: new undum.SimpleSituation(
            "", {
                heading: "Your Bathroom",
                enter: function (character, system, action) {
                    if (character.sandbox.host.host != "bret") {
                        parer("<p>" + character.sandbox.host.host + " rushes down the hall as you try to give him directions. It's rather disconcerting\
                                                        bouncing up and down with each step, not to mention how everything looks bigger due to your new size and lower vantage point.\
                                                        \
                                                        </p><p>He wastes no time and puts up the lid of the toilet and then rather roughly grabs you. You let out a quick complaint \
                                                        as he points your body right into the toilet. You look up at him pleadingly but even you know there is little either of you can do about this!\
                                                         \"Sorry about this... But I am pretty sure its going to come out your mouth\"\
                                                         he mentions. You knew that already but it hadn't sunk in that also meant\
                                                         your tongue would be right in the way and you would be forced to taste every drop.\
                                                         </p><p>He reaches farther up on your body and holds your head still forcing it to face into the toilet. There is an overwhelming sensation of movement\
                                                         that almost feels like a rumbling, it travels up your body slightly expanding that urethra inside you and a torrent of piss fills your mouth!\
                                                        </p>");
                    } else {
                        parer("<p>host rushes down the hall as you try to give him directions. It's rather disconcerting\
                                                    bouncing up and down with each step, not to mention how everything looks bigger due to your new size and lower vantage point.\
                                                    \
                                                    </p><p>\"Ugh.. hate these types of toilet\" He says and reaches up onto the water tank with his front legs and awkwardly reaches down between his legs to hold you pointing into the toilet\
                                                     \"Sorry about this... But I am pretty sure its going to come out your mouth\"\
                                                     he mentions. You knew that already but it hadn't sunk in that also meant\
                                                     your tongue would be right in the way and you would be forced to taste every drop.\
                                         </p><p> There is an overwhelming sensation of movement\
                                                     that almost feels like a rumbling, it travels up your body slightly expanding that urethra inside you and a torrent of piss fills your mouth!\
                                                    </p>");
                    }
                    ;
                    oper(system, "./enjoy", "Find you actually like it", "./accept", "Reluctantly accept your role", "./refuse", "Refuse to cooperate");
                }, //function/enter close
                actions: {
                    "enjoy": function (character, system, action) {
                        transer();
                        parer("<p>Surprisingly it really isn't that bad. You always hear how disgusting drinking piss is, sure its unpleasant but its not horrible.\
                                            Once host sees that you are aiming just fine he lets go of your head and just steadies your body. The flow is really chaotic and a mess\
                                            coming out of a mouth rather than a piss slit. Thinking about it you close your mouth just a bit to maintain its pressure on the way out and even shape it\
                                            slightly with your tongue. Of course this means you can taste it even more clearly but it doesn't bother you much.\
                                                                                                            </p>");
                        oper(system, "translate", "Finish and lick your lips to get that last drop");
                          system.setQuality("harmony",character.qualities.harmony+1);
                    }, //function close
                    "accept": function (character, system, action) {
                        transer();
                        parer("<p>Your cheeks inflate with piss as it flows out from your throat, really without much choice you open your mouth\
                                            letting the flow do as it pleases trying to keep your tongue out of the way as much as possible. Seems being turned into a cock didn't lessen your taste buds\
                                            unfortunately. If it didn't already resemble throwing up you might have instinctively tried to. He finishes up and swings up and down violently to free any remaining drops.\
                                                                                                            You do your best to get the taste out of your mouth but it seems intent to linger.</p>");
                      
                        oper(system, "translate", "Wash your mouth out with some water");
                    }, //function close
                    "refuse": function (character, system, action) {
                        transer();
                       parer("<p>You shake and wiggle around trying to free yourself from his grip. You beg him not to do this and to hold it in just a while longer!\
                                            He shakes his head and just keeps a hold on you as your complaining is suddenly cut off by a mouthful of his piss. The taste is unbearable and you clamp\
                                            your hands over your mouth trying to halt the flow. A surge of pain strikes you and he both as the urine pressure builds up and stretches the massive\
                                            urethra inside your body. Finally you can take it now more and it breaks free from your mouth like a firehose. \"Come on! Stop that you are making a mess!\"\
                                            \he says with frustration then holds your arms to your sides and grabs your head making sure you don't turn it. Once he is done he runs a finger up your belly compressing\
                                            his urethra to get the last few drops to pour into your mouth.\
                                                                                                            </p>");
                          system.setQuality("harmony",character.qualities.harmony-1);
                        oper(system, "translate", "Cough a few time trying clear your throat");
                    } //function close
                }//actions close
            }//options close
    ),
    translate: new undum.SimpleSituation(
            "", {
                heading: "Your Livingroom",
                enter: function (character, system, action) {
                    if (character.sandbox.host.host != "bret") {

                        ///////////// Not bret
                        if (character.sandbox.host.host=="keagen"){
                        
                            parer("After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                        going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                        gives him a laugh. </p>\
                                                        <p>\"There has to be some reason that artifact did this, if we can figure out its intended function we may have a chance at reversing it..\"\
                                                        He agrees and you both are soon back in your bedroom looking over the artifact and translation paper. While reading over it he idly starts rubbing your body up and down, not really masturbating you but\
                                                        it feels REALLY good and keeps you hard");
                        }else{
                            parer("<p>After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                        going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                        gives him a laugh. </p>\
                                                        <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                        is sitting on your bed looking over the artifact and translation paper. While reading over it he idly starts rubbing your body up and down, not really masturbating you but\
                                                        it feels REALLY good and keeps you hard</p>");
                        }
                        oper(system, "./focus", "Focus on the translations", "./enjoy", "Ask him to keep rubbing you");
                    } else {
                        if (character.qualities.tfstatus < 6) {
                            /////// bret with minor TF
                            parer("<p>After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                gives him a laugh. </p>\
                                                <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                is sitting on your bed looking over the artifact and translation paper.</p>");
                            oper(system, "./focus", "Focus on the translations");
                        } else {
                            ///////////bret with major TF
                            parer("<p>After dealing with the bathroom issues " + character.sandbox.host.host + " sits down in your living room and sighs \"This is really\
                                                going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                gives him a laugh. </p>\
                                                <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                is sitting on your bed looking over the artifact and translation paper.</p><p>\"Sorry about this but taurs really have issues masturbating, so I can't\
                                                keep helping you stay hard\" he says apologetically, you already feel your body relaxing and softening!</p>");
                            oper(system, "shrinkage", "Beg him to keep you out of his sheath");
                        }
                        ;//else close
                    }
                    ;//else close
                },
                actions: {
                    "nope": function (character, system, action) {
                        character.sandbox.ws = false;
                    }, //function close
                    "focus": function (character, system, action) {
                        transer();
                         if (character.sandbox.host.host== "keagen") {
                        parer("He continues rubbing your body making sure you stay hard.\
                                                         You have to grit your teeth trying to ignore how good it feels so you can stay focused\
                                                        on the task at hand.</p><p>\"Alright... so there is the ring.\
                                                         A stick dude holding it and a guy kneeling in front of him. You said the ring somehow disappeared\
                                                        when you used the dildo?\" he asks and you confirm it also mentioning\
                                                         how it seemed to have merged with you judging from the tingling that day.\
                                                         \"So the paper says something about essence from pleasure,\
                                                          and then mentions essence to form. I know some arcane objects can 'charge' themselves with energy to preform rather profound tasks.\
                                                          ");
                         }else{
                            parer("<p>He continues rubbing your body making sure you stay hard.\
                                                         You have to grit your teeth trying to ignore how good it feels so you can stay focused\
                                                        on the task at hand.</p><p>\"Alright... so there is the ring.\
                                                         A stick dude holding it and a guy kneeling in front of him. You said the ring somehow disappeared\
                                                        when you used the dildo?\" he asks and you confirm it also mentioning\
                                                         how it seemed to have merged with you judging from the tingling that day.\
                                                         \"So the paper says something about essence from pleasure,\
                                                          and then mentions essence to form.\
                                                        Humm and here is the ring again, he wrote manipulates next to it.\
                                                         Maybe the ring can control the changes? Damn these notes are a mess.\" he says thinking out loud.</p><p>\
                                                         </p>");
                        }
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        oper(system, "shrinkage", "Suggest taking a break", "./enjoy", "Ask him to rub you a bit faster");
                    }, //function close
                    "enjoy": function (character, system, action) {
                        transer();
                        parer("<p>He laughs and puts down the piece of paper. \
                                                            \"Has being turned into a cock started to get to you?\" He asks with a grin\
                                                            gripping your sensitive body and stroking you up and down.\
                                                            Every inch of your body stiffens even more than before, you\
                                                            you can even feel his heartbeat pumping his blood into your veins.\
                                                            </p><p>Masturbating always felt good, but its nothing compared to GETTING masturbated.\
                                                            However you crash back to reality when precum begins leaking into your mouth cutting off any possibility of moaning</p>");
                        oper(system, "./climax", "Be a good cock for " + character.sandbox.currenthostparse.host);
                    }, //function close
                    "climax": function (character, system, action) {
                        transer();
                       parer("The taste is both salty and sticky, yet it feels natural for it to be coming up your throat.\
                      As he continues to jerk up and down your body the flow of pre grows to the point you can't even contain it in your mouth,\
                     its the only thing preventing you from moaning in pleasure.<p>FInally you start to feel a change, your balls.. or his balls start to tense up\
                     and your body seems to harden as his rubbing speeds up rapidly! That urethra inside you suddenly expands with a surge of cum that torrents into your mouth!\
                     Its impossible to keep your mouth closed as it is forced open by the pressure of his cum shooting into the air from your mouth!");
                         system.animateQuality("essence", character.qualities.essence + 10);
                        oper(system, "./afterglow", "Continue cumming till his balls are finished using you");
                   
                    }, //function close
                    "afterglow": function (character, system, action) {
                        transer();
                        parer("The flow of cum finally slows till it is just a trickle occasionally filling your mouth. Once you mouth is clear enough you get the chance to gasp and pant in exhaustion\
                        . host is also breathing heavily after that, \"Damn.... that really felt good. I almost don't want you to change back!\" he says suddenly worrying you for a moment\
                        . He gives you a few pats of reassurance. \"Hehe don't worry lets just get back to this.\"he says. <p> For just a moment you feel those blue runic lines cool down slightly\
                        as if they had been heated during the time you were distracted by the orgasm.");
                        oper(system, "shrinkage", "Nod and try not to get distracted again");
                    } //function close
                }//actions close
            }//options close
    ),
    //1 5 9 13
    shrinkage: new undum.SimpleSituation(
            "", {
                enter: function (character, system, action) {
                    system.setQuality("timeofday", character.qualities.timeofday + 1);
                    //time of day is now noon
                    if (character.qualities.tfstatus == 13 || (character.sandbox.host.host == "bret" && character.qualities.tfstatus > 8)) {
                        system.doLink("./sheath");
                                          } else{
                        //too big for sheath
                        /// status==1
                        parer("<p>You and host spend some time just chatting about things. Eventually you offer him some food from your limited fridge\
                                    . He offers to feed you something but you find yourself no longer ever feeling hungry, seems you have been restricted to the output aspect of his digestive system.\
                                    </p><p>Later on in the day he takes another failing look at the artifact</p>");
                    if (character.qualities.tfstatus == 9) {
                        /// can't be bret
                        parer("<p>After a while you start to grow tired of holding yourself outside of his sheath, it has been constantly trying to pull you in all day.\
		you just can't keep it up any longer. Your grip starts slipping. </p>");
                        oper(system, "./sheathvar", "Struggle to stay unsheathed");
                       } else if (character.qualities.tfstatus == 5) {
                        // bret has same 
                        // Can interact
                        parer("<p>After a while of hanging out of his sheath you let it pull you in a bit, just enough to close around your neck. Its rather warm and comfortable like a tight sleepingbag\
		actually, though a bit sticky after the first hour or so.<p> As the day continues on it becomes clear that you and host will be stuck like this for a while unfortunately.</p>");
                        oper(system, "discussfirst","Make plans to deal with this arrangement long term");
                    } else if (character.qualities.tfstatus == 1) {
                        //no sheath at all
                        if (character.sandbox.host.host== "bret") {
                            ///hanging under bret
                            if(character.sandbox.bretdom){
                                parer("mentions the harness");
                                }
                                parer("After an hour or so of stareing hopelessly at the second page and the artifact host just shakes his head and puts the papers down \"This isn't going to get us anywhere and I am tired of carrying you like this.\"\
                                    He says apologetically. He gets up and goes to his pants that are still in the floor and reaches into one of the large cargo pockets pulling out a set of straps\
                                    . \"Normally I use these for some bellyriding fun but they should serve the same purpose here.\" He slips a loop around your neck, then around your arms and waist.\
                                    You can't really tell how it attaches above you but he pulls it tight and your entire body is pulled helplessly tight to his underside!");
                                oper(system,"discussfirst","Wiggle around and test out the straps");
                        }else{
                        ;
                        //too large to leave house keagen and mark
                            parer("After an hour or so you and host give up on the artifact, unfortunately with your current size host can't leave the house without attracting unwanted attention to your condition.\
                                Even walking tends to be a bit difficult, he has to hold you to his chest to keep your from falling forward.\
                                When standing still you find that you can keep your hands on the ground to prop yourself up sort of, its awkward but relaxing.\
                                <p> As the day continues on it becomes clear that you and host will be stuck like this for a while unfortunately.");
                       
                        oper(system, "discussfirst","Make plans to deal with this arrangement long term");
                        }
                          system.setQuality("timeofday",character.qualities.timeofday+ 1); 
                         //time is now afternoon
                        }
                                          }
                }, //function/enter close 
                actions: {
                    "sheathvar": function (character, system, action) {
                        // going in sheath struggling
                        // I have no idea why I made two of these
                        // time is noon still for both
                        transer();
                        parer("No matter what you do it begins dragging you in. host notices your plight \"Sorry, I can't stay hard forever, you will have to stay in my sheath for a while.\
                                            Till we get this fixed its basically your new home.\" he says and heads back to your bedroom. You beg him a few times to do something to stop this\
                                            but his sheath is intent on welcoming you home. \"Don't worry I will keep you safe, "+((character.sandbox.host.host=="keagen")?"but I still have college classes to worry about.":"But I still have a job to worry about")+
                                ". I will take every opportunity to work out how to change you back!\"\
                                            he says giving you a pat just before the sheath engulfs you completely, the last thing you see is a pair of pants being zipped up locking you inside a fleshy prison with a zipper for bars.");
                        oper(system, "firstsheath", "Explore your new home");
                    }, //function close
                    "sheath": function (character, system, action) {
                        // going in sheath with no ability to pull yourself out
                        transer();
                       parer("Your body starts to grow softer and there is a pulling sensation from inside of " + character.sandbox.host.host + "'s sheath\
                                            . No matter what you do it begins dragging you in. \"Sorry I can't stay hard forever, you will have to stay in my sheath for a while.\
                                            Till we get this fixed its basically your new home.\" he says and heads back to your bedroom. You beg him a few times to do something to stop this\
                                            but his sheath is intent on welcoming you home. \"Don't worry I will keep you safe,"+((character.sandbox.host.host=="keagen")?"but I still have college classes to worry about.":"But I still have a job to worry about")+
                                " I will take every opportunity to work out how to change you back!\"\
                                            he says giving you a pat just before the sheath engulfs you completely, the last thing you see is a pair of pants being zipped up locking you inside a fleshy prison with a zipper for bars.");
                        oper(system, "firstsheath", "Explore your new home");
                    }, //function close
                    "": function (character, system, action) {

                        system.write("<p></p>");
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        oper();   
                    } //function close
                }//actions close
            }//options close 
    ),
    firstsheath: new undum.SimpleSituation(
            "", {
                
                //Time IS NOON
                heading:  function(){return curhost+"'s Sheath";},
                enter: function (character, system, action) {
                    //bret skips 9 goes to 13
                    // mark and keagen both here at 9 and 13
                    //9 can wiggle around in sheath and even pull themselfs out for an hour or so before getting tired.
                    // 13 is trapped with the cock parts of their body holding them in.
                    // HE JUST ZIPPED up his pants over you.
                    
                    parer("You are helplessly trapped in host's sheath unable to see anything. The thick musky scent of it is overwhelming at first and honestly only gets a little bit easier\
                    to deal with after an hour or so.\
                    Eventually you find that not all the light is blocked, with enough wiggling you can look out his sheath to see light through the seams of his zipper. <p>\
                    However your sense of hearing is hardly effected... for the most part you can still hear just about everything that happens around host.");
                    oper(system,"./listen","Listen for clues to what is happening");
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
                    //			oper("./focus","Focus on the translations", "./enjoy","Ask him to keep rubbing you");
                    //The air seems to get warmer and warmer in his sheath yet it doesn't bother you much other than feeling uncomfortable.
                }, //function/enter close 
                actions: {
                    
                    "listen": function (character, system, action) {
                         transer();
                        parer("host seems to be wandering about your house for a little while, items are being moved. Then you hear a slightly disturbing sound... your front door being opened and closed!\
                        You wiggle around and push at his sheath as you yell out to him asking where he is going.<p>\"Shhhh don't worry everything is fine. Just be a good penis and stay quiet in there maybe take a nap.\
                        The last thing I need is an erection out in public.\" he says giving you a pat through his pants.");
                        
                        oper(system, "./awake", "Stay awake and aware of events");
                    }, //function close
                    "awake": function (character, system, action) {
                         transer();
                       parer("Eventually host sits down somewhere and you are suddenly rather squished inside of the sheath. You don't really feel uncomfortable just... squeezed in there tightly.\
                      "+((character.sandbox.host.host=="keagen")?"The sound of mechanical clinks along with a smooth up and down motion, your best guess is that host is on a bicycle now.":"The loud sound of an \
                       engine starts up as host seems to be in a car or truck now"));
                        
                        
                        
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // time is now afternoon
                        oper(system,"./ask","Wiggle around and ask where he is going!","./begood","Stay silent like good flacid cock");
                    }, //function close
                    //MAY RETURN TO THIS AS A FUTURE OPTION
                    "sleepshift": function (character, system, action) {
                         transer();
                        parer("You drift off to sleep rather easily, the comfort of host's sheath trying to make you feel all warm and happy. If it wasn't as sticky or perverse you might actually look forward to\
                       sleeping in there every night. Even the up and down motions of host's foot steps cause you to shift back and forth rhythmically, it feels soothing after a bit.<p>\
                       ");
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                       //time is now afternoon 
                        oper(system, "");
                    }, //function close
                    "ask": function (character, system, action) {
                         transer();
                        // be noisy in sheath about to head to their house
                       parer("You quickly speak up to ask what is going on only to feel him squeeze his legs together harder\"Hey! Shoosh down there, cocks can't talk. While we are in public you have to pretend to be a penis, alright? \"\
                       He says leaving you feeling uncomfortable. Without much choice you stay quiet as host continues though his day. Once or twice he stops to do something, walking around a bit then getting back on the road.\
                       Its a bit boring but you didn't want to sleep. Another option does occur to you though.....");
                          system.setQuality("harmony",character.qualities.harmony-1);
                        
                  
                    
                        oper(system,"./erect","Arouse him by wiggling and rubbing yourself", "./begood","Stay still like a good cock should");
                    
                        }, //function close
                "begood": function (character, system, action) {
                     transer();
                    // headed to their house in sheath not making any noise
                      system.setQuality("harmony",character.qualities.harmony+1);
                       parer(((character.sandbox.host.host!="keagen")?"\
                       The vibration of the car is rather distracting but you and he eventually stops and you hear him go through a door.\
                        ":"Its a rough ride being pushed back and forth by his pedling legs but\
                       eventually he stops somewhere and head though a door closing it behind him.")+"<p>\"Ugh... finally home. Alright its safe to talk now. We are at my home\
                       now, I  brought the letters and your keys so we can keep working on the artifact from here. Also did some errands and picked up a few things on the way here so its already night. I actually have to do things in public tomorrow, so we really need to get some sleep.\" he says\
                       as he removes his pants.");
                        
                        
                        
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // time is now evening
                        oper(system,"newhome/sleep","Agree and let him get to sleep","newhome/masturbate","Suggest some relaxation before heading to bed");
                        
                    }, //function close
                    "erect": function (character, system, action) {
                         transer();
                        // WAS noisy.... and then decided to be even more naughty
                       parer("You start to caress your body as best you can, the sheath is rather tight but it still lets you move them over some of your body. The\
                      moisture in his sheath helps a ton and it starts to really feel good, even wiggling around so your body rubs against the inside of the sheath feels pleasurable.\
                      <p>\"HEY! what... are... Stop that in there! Mmmmm! You have no idea how weird it is feeling your own cock moving around! Omg Stooooop!\" he says as you keep up\
                      the distractions. Soon you notice your success as your body hardens and begins to slide out of his sheath.");
                          
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // time is now evening
                        
                  
                    
                        oper(system,"./stop","Stop once you are out of his sheath","./wetspot","It feels good and you want to keep going.");
                    
                        }, //function close
                         "stop": function (character, system, action) {
                              transer();
                        // WAS noisy.... and then decided to be even more naughty but not trying to cum.
                       parer("You hear all kinds of grumbling from host as the sheath opens up around you and forces you to push against his pants."+((character.qualities.tfstatus==9&&character.sandbox.host.host!="bret")?"\
                        You are still large enough and have enough strength to pull yourself up and even slip your head past the top of his pants! \"HEY!!! now get back in there damn it! You are lucky we are almost there,\
                        someone might have seen you! Gaaa... you are making me so horny right now!\" Being nice you remain quiet though just enjoying some fresh air, even though all you can see is the inside of his shirt now.":"You try to more around some but just can't seem to get past his pants.\
                        Even the inside of his zipper proves impossible to work from the inside.\"Damn it... you are making a huge tent in my pants! Luckily we are almost at my house! Ugh.... I feel so horny now\"")+"\
                        he complains. Soon he stops somewhere and quickly goes through a door. \"Alright! Now I will masturbate you! Damn you make such a needy cock!\"");
                        
                        oper(system,"newhome/masturbate","Finally get some relief");
                    
                        }, //function close
                         "wetspot": function (character, system, action) {
                              transer();
                        // WAS noisy.... and then decided to be even more naughty
                       parer("Ignoring any of host's complaints you keep rubbing up and down your body as it fully extends from his sheath. You can practically feel him trying to cross his legs in distress\
                        \"Ahh..... Damn you pick the worst time to be horny! Gaa.... stop.... We are almost there.... just.. mmmmm.\" he says trying to ignore the self pleasuring cock between his legs. But you keep going\
                        as that feeling of absolute bliss seems to be just within reach. Eventually even host can't hold himself back and starts thrusting slightly with his hips. You hear him pant with relief and slows to a stop.\
                        Its too late though and soon a massive surge of cum flows up from his balls and through your body!");
                        oper(system,"./wetspotcum","Make a mess");
                      system.setQuality("harmony",character.qualities.harmony-1);
                        }, //function close
                 "wetspotcum": function (character, system, action) {
                      transer();
                       
                       parer("Host leans forward and moans deeply as an unwanted orgasm courses through him, however as his cock you get the best of it! The cum quickly fills your mouth and bulges your cheeks\
                         as it splatters against the inside of his pants coating you completely. Its like a pump full of this sticky salty cream was attached to your stomach, your entire body twitching stiffly with each pulse of cum\
                         Soon his pants are a mess and you are basking in the wonderful afterglow of orgasm tucked back in your warm extremely sticky sheath. \"Damn.... don't do that.... Ah..... again\" He sighs and gets up opening a door and closing it behind him. \" Lets get just get some sleep, its already late\" he begs sounding even\
                         more tired than you feel.");
                     system.animateQuality("essence", character.qualities.essence + 10);
                        oper(system,"newhome/sleep","Agree and let him sleep in peace");
                           } //function close
                 }//actions close
            }//options close
    ),
    discussfirst: new undum.SimpleSituation(
            "", {
                heading:"Sleep",
                enter: function (character, system, action) {
                    
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
                    switch (character.sandbox.host.host){
                        // character.qualities.tfstatus == 5) means they have sheath around neck. Otherwise its type 1 with no sheath
                        case "bret":
                                //either under him in harness or in sheath
                                if ( character.qualities.tfstatus != 5){
                        //in harness
                                parer("You quickly find that the harness keeps you completely immobile, even your arms have been pulled to your sides rendering you mostly helpless!\
                                You try to ask him to if the harness is really nessesary but he only laughs it off \"This will be fine, in fact I rather like you down there! Someone to keep me company on my mail trips\
                                , of course we will keep trying to fix this. But till then we will have to get along, I will be nice to you so long as you are not a 'dick' to me.\" he says revealing his newest favorite pun!");
                    }else{
                        parer("You quickly find that the sheath keeps you completely immobile, your arms are stuck at your sides rendering you mostly helpless! It seemed safe going in but its just too tight to get\
                                your hands to the sheath around your neck to pull yourself back out. Still it is rather warm and comfortable inside, though getting slightly sticky.\
                                 Host gathers up his clothes and begins to put on his pants \"I rather like you down there! Someone to keep me company on my mail trips\
                                , of course we will keep trying to fix this. But till then we will have to get along, I will be nice to you so long as you are not a 'dick' to me.\" he says revealing his newest favorite pun!");
                        
                    }
                    oper(system,"./plan","Ask what he plans to do next");
                    break;
                        case "keagen":
                        //only for type 1 and 5. 
                      
                        case "mark":
                           if ( character.qualities.tfstatus == 5){
                               //type5 
                       parer("You quickly find that the sheath keeps you completely immobile, your arms are stuck at your sides rendering you mostly helpless! It seemed safe going in but its just too tight to get\
                                your hands to the sheath around your neck to pull yourself back out. Still it is rather warm and comfortable inside, though getting slightly sticky.\
                                <p> Host gathers up his clothes and begins to put on his pants\
                                \"We are going to have to get along with each other if we are to get through this.\"");
                                   
                                    oper(system,"./plan","Ask what he plans to do next");
                    break;
                    }else{
                        //type 1
                        parer("host sighs trying to think of what to do. \"We have to do something before tomorrow, we can't be seen like this.\
                                 Since this happened while we slept it might go away during the same time! Or... it could get worse. I know it isn't ideal but if we are still trapped inside tomorrow I think we should call\
                                 "+((character.sandbox.host.host=="keagen")?"a professional arcanist":"the hospital")+"and ask for help.\" he says clearly not wanting to do that.");
                      oper(system,"./wait","Suggest waiting for tomorrow");
                      headingholder="Your";
                    break;
                            }
                    }

                }, //function/enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                         //time is NOW AFTERNOON
                        // all three here. head sticking out sheath OR bret carrying you in harness
                        parer("host thinks about it for a few moments \"Well I still have dayjob to worry about tomorrow. I should be able to hide you well enough so no one will notice\
                       , we will just have to be careful. There are a few things at my house that I need for dayjob tomorrow, so I really can't stay here during the week.\
                       Though that would make it harder to work on the artifact.\" he says. You also have commitments at the college tomorrow, but there is little you can do about that. ");
                     
                        oper(system, "./yourhouse", "Ask him to move in temporarily to stay near the artifact","./hishouse","Agree with him and have him collect a few of your things");
                    }, //function close
                    "wait": function (character, system, action) {
                        transer();
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                                ////evening
                        parer("host nods and agrees with you. \"At least if it gets worse you will be able to fit in my pants again!\" He says but not helping in the least\
                        Still you and he go about the rest of the day mostly uneventful. Once or twice trying to do some more work with the artifact but it really seems useless\
                       . Eventually you and he start to get tired and head for bed.");
                     
                        oper(system,"newhome/masturbate","Suggest some fun before you and he sleep","newhome/sleep","Head to sleep with no fooling around");
                    headingholder="Your";
                    character.sandbox.gooutcount=1;//to assist first day after change detection
                    }, //function close
                    
                     "yourhouse": function (character, system, action) {
                        //afternoon type 5, bret type 1 and 5
                         transer();
                        parer("He hesitates but after a bit of thinking eventually shakes his head. \"It wouldn't make sense to stay here, we have the notes and can easily take a picture of the artifact.\
                       We can always take it to my house and work on it there.\" He says outright disregarding your suggestion. <p> He begins packing up to leave and you convince him to take a few of\
                       your belongings too, keys to the house, your wallet, and the letters."+((character.sandbox.host.host=="bret")?"\"I think it will be best if we wait till dark to smuggle my new... package to the truck\"\
                        He says with a grin." :"\"So.... you wouldn't happen to have a pair of loose sweatpants would you?\" With some reluctance you say yes and soon find yourself\
                        trapped inside them trying not to make too much of a bulge."));
                                   system.setQuality("harmony",character.qualities.harmony-1);
                        
                         if ("bret"==character.sandbox.host.host){
                             oper(system,"./away","Wait for night");
                        }else{
                         oper(system,"./away","Stay quiet as he heads home","./noisy","Try to talk with him along the way");
                     }
                    }, //function close
                     "hishouse": function (character, system, action) {
                         //afternoon type 5, bret type 1 and 5
                        transer();
                        parer("He begins packing up to leave and collects the\
                       belongings you requested, keys to the house, your wallet, and the letters."+((character.sandbox.host.host=="bret")?"\"I think it will be best if we wait till dark to smuggle my new... package to the truck\"\
                        He says with a grin." :"\"So.... you wouldn't happen to have a pair of loose sweatpants would you?\" With some reluctance you say yes and soon find yourself\
                        trapped inside them trying not to make too much of a bulge."));
                         
                       
                        if ("bret"==character.sandbox.host.host){
                             oper(system,"./away","Wait for night");
                 
                        }else{
                         oper(system,"./away","Stay quiet as he heads home","./noisy","Try to talk with him along the way");
                     }
                         }, //function close
                     "away": function (character, system, action) {
                        transer();
                        if ("bret"==character.sandbox.host.host){
                          //bret leaving at night with you under him type 1 and 5
                         parer("host fiddles around your house for the remaining hours till it gets dark. The entire time he leaves you trapped by"+((character.qualities.tfstatus<4)?"his sheath":"the harness")+"\
                          Once it's dark enough he hurries to his mail truck in your driveway\
                          and searches though a small side compartment in the back.<p>\"Here we go! This is just what we need!\" he says pulling out a large rain pancho and putting it on. It does a decent job\
                         hiding you, even if it looks a bit silly on him. ");
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         // its is now evening
                         }else{
                             //mark or keagen leaving in afternoon with you in sweatpants
                         parer("From your point of view its mostly a matter of guessing what is going on around you, from inside the sweatpants the best you can tell is the general light outside.\
                      Soon after leaving your house host sits down causing you to be rather squished between his legs"+((character.sandbox.host.host=="mark")?"and then the sound of an engine starting\
                       . You get the urge to say something but decide it best to stay quiet till you are sure his is alone. The vibration of the car is rather distracting but you and he eventually make it to his house.\
                        ":", you hear a few odd metallic click sounds and then feel movement! It takes\
                       a minute or two to realize he is on a bicycle. Not all college students have as good a financial family as you. Its a rough ride being pushed back and forth by his pedling legs but\
                       eventually he makes it to his home.")+" <p>\"I will give you a tour of the place in the morning... Right now I think we both deserve some rest.\" He says giving you a rub through the pants.");
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // time is now evening
                         };
                       
                        
                      oper(system,"newhome/masturbate","Suggest some fun before you and he sleep","newhome/sleep","Head to sleep with no fooling around");
                    }, //function close
                     "noisy": function (character, system, action) {
                      // mark or keagen leaving in afternoon with you in sweatpants, you being impatient
                      
                         transer();
                        //obedience behavior --
                       parer("From your point of view its mostly a matter of guessing what is going on around you, from inside the sweatpants the best you can tell is the general light outside.\
                      Soon after leaving your house host sits down causing you to be rather squished between his legs"+((character.sandbox.host.host=="mark")?"and then the sound of an engine starting\
                       <p> You quickly speak up to ask what is going on, but you feel a hand reach down and cover you. \"Hey! Shoosh down there, cocks can't talk. While we are in public you are just a penis, alright? \
                       He says leaving you feeling uncomfortable. Eventually he makes it home. ":", you hear a few odd metallic click sounds and then feel movement! <p>\
                         You quickly speak up to ask what is going on only to feel him squeeze his legs together harder\"Hey! Shoosh down there, cocks can't talk. While we are in public you have to pretend to be a penis, alright? \
                       He says leaving you feeling uncomfortable. You soon realize he is on a bicycle and eventually makes it to his house. ")+" <p>\"I will give you a tour of the place in the morning... Right now I think we both deserve some rest.\" He says giving you a rub through the pants.");
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        //time is now evening
                        oper(system,"newhome/masturbate","Suggest some fun before you and he sleep","newhome/sleep","Head to sleep with no fooling around");
                    } //function close
                }//actions close
            }//options close
    ),
     newhome: new undum.SimpleSituation(
            "", {
                
                heading: function(){return curhost+((headingholder=="Your")?"Your Bedroom":"'s Bedroom");},
                enter: function (character, system, action) {
                    console.log("curhost test "+curhost);
                    runefocus=false;
                 //all three type 5   
                 
                   
                }, //function/enter close 
                actions: {
                    
                     "masturbate": function (character, system, action) {
                        //mark and keagen. soo.... newhome and the had to stay home.
                         transer();
                        parer("host just shakes his head, giving you a playful rub. \"After everything that has a happened you still want to play some more? Are you sure you are not\
                       actually enjoying being attached to my groin?\" he asks with a knowing grin as he settles into bed. "+
                       ((character.qualities.tfstatus==1)?"You try to come up with a reasonable excuse, something along the lines of how rare a situation like this is.\
                        ":"You look up at him from his sheath and give a helpless wiggle, he reaches down and gives his sheath a few strokes till you are finally released from it's tight grasp.")+
                       "<p>host breathes deeply rubbing up and down your chest sending delightful sensations through your whole body\
                       and it isn't long till your mouth starts filling with his pre! But just as his orgasm hits you start to feel those rune lines on your sides heat up.");
                    
                         oper(system,"./cum","Ignore the runes and enjoy the orgasm","./focus","Try to focus on what the runes are doing");
                    }, //function close
                    "focus": function (character, system, action) {
                         transer();
                        parer("Even with precum flowing up through your body and into your mouth, you hold your focus on those runes realizing this could be important!\
                        His fondling of your body just feels soooo good and even begins to thrust up into you rubbing you against the bed delightfully. You can almost feel the runes reacting to\
                        the volume of his moans! .... and your own. They seem to almost be charging, by concentrating on them you can feel generally how much they have stored.");
                        oper(system, "./cum", "Lose your concentration once you orgasm");
                        runefocus=true;
                    }, //function close
                    "cum": function (character, system, action) {
                        transer();
                        parer(((runefocus==false)?"Fuck the runes, you have an orgasm to enjoy! You even begin to join in caressing yourself reveling in the incredible sensitivity of your partial cock like form":"")+"\
                        <p>Finally the sensations build up and you can feel his.... or your balls pull up slightly and unknown parts within you suddenly fill and expand with his creamy thick seed!\
                        With eyes crossed from the the overload of senses a torrent of hot cum surges into your maw, it causes your cheeks to expand adorably before forcing your mouth open around the fountain of cum!\
                        "+((character.qualities.tfstatus>5)?"":"With your size added to his cock and balls the flow jets high enough to splatter over the ceiling!"));
                         system.animateQuality("essence", character.qualities.essence + 10);
                        oper(system, "./sleep1", ((character.qualities.tfstatus<6)?"Continue to coat the room until the flow ends":"Continue to spray cum from your mouth until the flow ends"));
                    }, //function close
                     "sleep1": function (character, system, action) {
                         transer();
                         parer("The torrent of cum flowing up your throat begins to slow and you are left gasping in exhsaustion. host is also breathing hard but laughs a bit \"That was.... Amazing.... and a mess.\
                       I am starting to hope we can't change you back.\" he says leaving you a bit worried as your cum leaking throat prevents you from responding.");
                        oper(system,"./sleep",((character.qualities.tfstatus>1)?"Relax and slip back into your sheath":"Relax and let him get ready for bed"));
                    nightfun=true;
                     }, //function close
                    "sleep": function (character, system, action) {
                       //bret 1 and 5, mark and keagen 1 and 5. both at home and at their home. Also orgasm or not orgasmed.
                       // Ok EVERYONE decided to join this path!
                         transer();
                        parer("You and host eventually settle down and find sleep rather welcoming after the crazy day. Just before both of you drift off to sleep host mentions something\
                        \""+((character.sandbox.host.host!="bret")?"The changes happened when we slept last time..... They might happen again tonight\"":"You remember what happened last time we slept\
                        , it could get worse if that artifact specializes in 'overnight deliveries'")+"\" he warns. Considering how tired you are there really isn't anything to do about it.\
                        ");
                       switch (character.qualities.tfstatus){
                           case 1:
                               parer("Hugs you close to his chest giving you a few snuggles as you and he drift off to sleep.");
                           break;
                            default:
                           parer("Having a nice warm slick sheath to sleep in proves rather enjoyable. If it didn't double as a personal embarrassingly perverted prison it would be ideal!\
                      Still its wonderful tight embrace quickly luls you to sleep as host pulls a blanket over you.");
                       }
                        oper(system, "transformation", "Drift of to sleep wondering what changes morning will bring");
                    }, //function close
                    "intomorningfinal": function (character, system, action) {
                         transer();
                         
                         switch (character.qualities.essence) {
                             
                             
                             
                         }
                         
                      /* parer("CURRENT END OF CONTENT <p>. Even longer intro.... But now all possibilities lead to this point which means the Day Loop will start from here.\
                        Anything past this point can be reached by any of the paths eventually. This includes unmerging with the current NPC and merging with a different one. \
                        I admit with the extent of content in the intro its troublesome to restart it over and over just to see all the different <a href='places'> possibilities</a> but I hope it was still enjoyable.");
                        system.setQuality("timeofday", 1);
                       wtf=true;
                        */
                    } //function close
                }//actions close
            }//options close
    ),
        transformation: new undum.SimpleSituation(
            "", {
                enter: function (character, system, action) {
                    character.sandbox.tfup=false;
                    character.sandbox.tfed=false;
                    
                    //Character has GONE to sleep. So now what?
                    console.log("Here we go again. "+character.sandbox.tfup);
                    console.log("Here we go again. "+character.sandbox.tfup+" "+character.sandbox.control+" ");
                     if (character.sandbox.control&&character.qualities.harmony<10&&character.qualities.essence>19) {
                         //Can control the TF
                         
                              
                        parer("With some effort you manage to focus on the runes without fully waking up. A feeling of floating or melting\
                            fills you as other aspects of your surroundings grow stronger. Everything around you feels fuzzy and insubstantial as it becomes clear\
                            this is some sort of dreamstate, your body even seems to change to match how you imagine it! The only part that feels real is the warm bright glow of the runes along your sides.\
                             <p> host mumbles something in his sleep and suddenly\
                            you feel his connection to this dreamstate. New sensations spread over you as his thoughts begin altering the shape of your body!");
                            // Imagine yourself normal, focus on a part of yourself, 
                            //push for control, End the dreamstate, 
                    
                    oper(system, "./control", "Struggle for control","./stop","Quickly disperse the dreamstate","./hostcontrol","Relax and let it happen");
                         
                     }else{
                         //Can't control the tf OR going deeper
                         if((character.qualities.essence>19||(character.qualities.essence>4&&(character.sandbox.limits.hasarms||character.sandbox.limits.cantalk)))&&character.qualities.tfstatus!=17){
                            //TFSTATUS"", "20%", "25", "30", "35", "40%", "45", "50", "55", "60%", "65", "70", "75", "80%", "85", "90", "95", "100%" 
                          
                            parer("Sensations of being partially awake come over you, it's like you're almost dreaming just about to wake. However you can feel the runes along your sides burning slightly and tingling sensations are spreading through your body!");
                       
                            
                          
                            oper(system,"./tfstandard","Ignore the strange feelings and go back to sleep","./tfstandard","(COMING SOON TWO OTHER OPTIONS)");
                            /*
                            if (character.sandbox.runefocus){
                                oper(system,"./tfstandard","Ignore the strange feelings and go back to sleep","./focus","Attempt to focus on the runes again");
                            }else{
                                oper(system,"./tfstandard","Ignore the strange feelings and go back to sleep","./stop","Wake up and try to stop the changes!");
                                //idea, runefocus allows the runes to be controlled. however only ONE of you can be that focus at a time.
                            }
                        */
                        }else{
                             system.doLink("morning");
                              
                             
                             
                         }
                         
                         
                     }
                    
                    
                }, //function/enter close 
                actions: {
                    "tf15": function (character, system, action) {
                        
                        //special case event function
                       var newtest;
                        character.sandbox.tfup=true;
                        character.sandbox.tfed=true;
                        switch (Math.floor(character.qualities.essence / 5)) {
                                    
                                         case 3:
                                        //15 essence
                                        if (character.sandbox.limits.hasarms && character.sandbox.limits.cantalk){
                                        system.animateQuality("essence", character.qualities.essence - 15, {from: 1, to: 0});
                                        system.animateQuality("tfstatus", character.qualities.tfstatus + 3);
                                        newtest="mini";
                  character.sandbox.tfholder=(character.sandbox.tfup)?"It is a bit of a shock as you discover that you no longer have arms! They seem to have been absorbed into your sides and to make it worse\
                                        you discover your mouth has been completely taken over by host's urethra, you can still taste in it but find yourself unable to speak. In fact your entire head has shifted slightly to resemble a cock's head. Your eyes are still intact and some of your facial structure\
                                         ":"The first thing you realize is that your arms have returned! You can actually feel and move them again and after further exploring you find your head also has bee restored to normal!";
                        character.sandbox.tfresponse=(character.sandbox.tfup)?"host looks down at you \"Yea..... I suppose it was bound to happen eventually with you becoming my cock\" he says rubbing along your cock like body":"\
                host gives you a poke\"Bet you are thankfull you can talk again! Still, just because you can doesn't mean you should while in public!\" He warns.";                        
                                            
                                character.sandbox.limits.hasarms=false;
                                character.sandbox.limits.cantalk=false;
                            break;
                                        }
                                      case 2:
                                        //10 essence
                                        if (character.sandbox.limits.hasarms){
                                        system.animateQuality("essence", character.qualities.essence - 10, {from: 1, to: 0});
                                        system.animateQuality("tfstatus", character.qualities.tfstatus + 2);
                                        newtest = "mini";
                                      
                                        character.sandbox.tfholder=(character.sandbox.tfup)?"It is a bit of a shock but you discover that you no longer have arms! They seem to have been absorbed into your sides, leaving you looking far more like a cock shaft.":"";
                                        character.sandbox.tfresponse=(character.sandbox.tfup)?"host looks down at you \"Yea..... I suppose it was bound to happen eventually with you becoming my cock\" he says rubbing along your cock like body":"\
                                        ";
                                      
                                            character.sandbox.limits.hasarms=false;
                        break;
                    }
                                    case 1:
                                        //only 5 essence
                                        // Head becomes cock like can no longer talk
                                       if (character.sandbox.limits.cantalk){
                                        system.animateQuality("essence", character.qualities.essence - 5, {from: 1, to: 0});
                                        system.animateQuality("tfstatus", character.qualities.tfstatus + 1);
                                         newtest = "mini";
                                         character.sandbox.tfholder=(character.sandbox.tfup)?"For the most part hardly anything has changed. You don't find any changes till you realize that your head feels different\\n\
                                         Rather quickly you discover your mouth has been completely taken over by host's urethra, you can still taste things but find yourself unable to speak a sound. In fact your entire head has shifted slightly to resemble the head of a penis. Your eyes and some of your facial structure is still intact\
                                         ":"";
                        character.sandbox.tfresponse=(character.sandbox.tfup)?"host looks down at you and gasps \"Alright thats.... different. I suppose it was bound to happen eventually with you becoming my cock\" he says giving you a rub along your newly sensitive head.":"\
                ";
                                        character.sandbox.limits.cantalk=false;
                                        break;
                                    }
                                    newtest="mini";
                                     character.sandbox.tfup=false;
                        character.sandbox.tfed=false;
                        
                           case 0:
                                        //no essence
                                        //can't happen yet
                                        default:
                                            //something wrong
                                }
                                if ((Math.floor((character.qualities.tfstatus + 3) / 4) * 20)==100){
                                    newtest=100;
                                };
                     system.doLink("./tf" + newtest);
                    }, //function close
                    "tfstandard": function (character, system, action) {
                        transer();
                        var newtest="mini";
                        //system.write("<p></p>");
                        
                       character.sandbox.tfup=true;
                        character.sandbox.tfed=true;
                        switch (Math.floor(character.qualities.essence / 20)) {

                            case 0:
                                //under 20 essence
                                     if (!character.sandbox.limits.hasarms&&!character.sandbox.limits.cantalk){
                                         character.sandbox.tfup=false;
                                         character.sandbox.tfed=false;
                                         break;
                                     }
                                newtest="15";
                                break;

                            default:
                                //at least 20 essence
                                // changes
                                //
                                system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                               if (character.qualities.tfstatus>13){
                                   system.animateQuality("tfstatus", character.qualities.tfstatus + (17-character.qualities.tfstatus));
                                } else{
                                system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                            }
                                    newtest = (Math.floor((character.qualities.tfstatus + 3) / 4) * 20);
                                 
                        }
            
                system.doLink("./tf" + newtest);
                        
                    }, //function close
                     "tfreversion": function (character, system, action) {
                        transer();
                        var newtest="mini";
                        //system.write("<p></p>");
                        
                       character.sandbox.tfup=false;
                        character.sandbox.tfed=true;
                      
                                //at least 20 essence
                                // changes
                                //
                         if ((Math.floor((character.qualities.tfstatus + 3) / 4) * 20)<40){
                             //First return legs and mouth
                             if ((Math.floor((character.qualities.tfstatus + 3) / 4) * 20)==20){
                                         //congrats they are changing back to normal!
                                 //ummm.... now what?
                                newtest=escape; 
                               
                             }else{
                                 //return mouth or arms
                                 
                             }
                             
                             
                             
                         } else {     
                         system.animateQuality("essence", character.qualities.essence - 40, {from: 1, to: 0});
                                system.animateQuality("tfstatus", character.qualities.tfstatus - 4,{from: 1, to: 0});
                                newtest = (Math.floor((character.qualities.tfstatus + 3) / 4) * 20);
                            }
                      
            
                system.doLink("./tf" + newtest);
                        
                    }, //function close
                     "tfescape": function (character, system, action) {
                        transer();
                         parer("You wake up and find host snuggled up aginst you, at first you find it comforting then\
                                 feel a pain in your ass where you feel his cock stuck up inside you, painfully stretching out your ass.<p>\
                                 It takes a surprising amount of time to realize the implication of this.... Quickly looking down you find your own legs once again\
                                 below your waist!<p> As you get out of the bed his cock seems rather reluctant to let you go, in fact it feels stuck inside you!\
                                 Not the normal too large to pull out, more like a suction or glue feeling.");
                                 
                                 oper(system,"INCOMPLETE","Pull harder","INCOMPLETE","Relax and pull slowly");
                    }, //function close
                    "tfreturnmouth": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        parer();
                        oper(system, "", "");
                    }, //function close
                     "tfreturnarms": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        parer();
                        oper(system, "", "");
                    }, //function close
                    "stop": function (character, system, action) {
                        transer();
                        //You do not have runefocus, 
                        //Or host has runefocus
                        // No one has runefocus
                       
                        /*
                        if (character.sandbox.runefocus){
                         if (knower("runefocus")){
                             //Host knows what runefocus is
                             
                             
                             
                         } else {
                             //host has no idea about rune focus
                             parer("You force yourself awake the rest of the way and now can CLEARLY feel the heat from the runes. In a way it's almost like\
                          are slowly releasing the heat into you as a tingling sensation. However as you wake up it seems they are rapidly cooling, as if shy you caught them.\
                         ");
                             
                             
                             
                             //alt=(true)?"":"";
                             oper(system,"","");
                         }
                            
                            
                            
                        };
                        //try to get focus
                        //Don't know what focus is, thus learn about focus
                        */
                        spark=true;
                        
                        parer("You feel host start to join and influence the dreamstate just as you shake it off. Niether of you had a\
                        had a chance to make any changes. Also you notice the runes feel almost warm along your sides but are rapidly cooling, as if shy you caught them. \
                         ");
                        
                        
                        
                        
                        oper(system, "morning", "Sleep well knowing you won't wake up with any changes","./control","Reconsider and try to focus on the runes again as you sleep");
                    }, //function close
                "callforhelp": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        parer();
                        oper(system, "", "");
                    }, //function close
                "firstfocus": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        parer();
                        oper(system, "", "");
                    }, //function close
                "focus": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        

                     
                    }, //function close
                    //      }, //function close
                "control": function (character, system, action) {
                        transer();
                        
                        // Impossible to reach with harmony of 10 and up
                         console.log("Testing control. harmony "+character.qualities.harmony);
                      
                        var rnddream=rnd();
                        var resulter;
                    if (character.qualities.harmony<-4) {
                        resulter=0;
                    }else if (character.qualities.harmony>4){
                     
                          
                          
                       
                          resulter=2;
                    
                    }else{
                    
                        resulter=1;
                    }
                      if (spark){
                            
                            parer("With some effort you return to the dream but feel slightly less in control as host joins it as well!");
                            rnddream=rnddream-.5;
                        }
                    //reduced harmony to a simple scale below, above or inbetween anti-absolute 4.5 represented by the harmony arrary locations, [0,1,2,""] where "" is the target
                      
                    if (rnddream>character.sandbox.host.harmony[resulter]){
                       //HOST has control!
                       console.log("Testing control of dream, you DO NOT have it");
                       switch (character.sandbox.host.host){
                         case "keagen":
                         
                         break;
                            case "bret":
                         
                         break;
                            case "mark":
                         
                         break;
                            default:
                             
                           
                           
                           
                           
                       }
                        
                        parer("You focus on the dream and desperetly push against host's influence on it. It doesn't feel like he is consiously trying to gain control. You can practically feel his emotions and feelings\
                       toward you in this state, in fact they seem to fuel his strength here. Unfortunatly they also begin shapeing your body as well as the rest of the dream.\
                        <p>Soon the dreamscape shifts and your body begins mirroring his\
                        internal view of how you should look. You are left drained from the failed effort and lose focus on the dreamscape.");
                        oper(system,"./hostcontrol","Drift back into a deeper sleep");
                        }else{
                        //You have control of dream    
                             console.log("Testing control of dream, you have it");
                            switch(resulter){
                                case 1:
                                alt="";
                                break;
                                case 2:
                                 alt="";
                                 break;
                                case 0:
                                 alt="";
                                 break;
                            }
                             parer("You feel his influence drift slightly as you focus and reinforce your own hold on the dreamstate. #alt\
                                 <P>Still the struggle seems to have weakened the dream and it's slowly collapsing.\
                                 Just before falling back asleep you manage to encourage the dream in a direction that hopefully the runes will apply to your physical body.\
                                 With your last moments of semiconsiousness you manage to focus on one thing.");
                             //options 
                             //learn more about the runes
                             //transform further
                             //transform back
                             //restore arms/head
                             //
                             
                        oper(system, "./tfreversion","Reversing the transformation","morning","Preventing further changes","./tf15","Becomeing a cock");
                            
                        }
                        
                        //system.write("<p></p>");
                        // Taking control of the transformation.
                        //
                        // host has tf target stat based on harmony so.... an array?
                        // [0,0,0]
                        // [9.5,7.5,5.5]
                        //  
                        //   10, host overrides
                        //  8 9 10
                        //  6 7 8 9 10
                        //
                        //
                        // rnd() < array
                        spark=false;
                
                    }, //function close
                    //      }, //function close
                "wake": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        parer();
                        oper(system, "", "");
                    }, //function close
                   "hostcontrol": function (character, system, action) {
                                              //HOST IN CONTROL OF DREAM
                        console.log("REACHED HOSTCONTROL");
                        //important to note this doesn't represent hosts desire to help you, more so their reaction to your behavior and the cutoff point when they think they know better.
                        
                            //this should give a standard 1-10 chance and compare it the the harmony trend of the host. 
                            //Mark in control when your harmony is low because he knows you can do better than that. Loses empathy for your situation
                            //Keagen sees the scientific potential for this and unless you piss him off he will want to keep you.
                            //Bret is a bit of a wildcard. Piss him off and he wont be nice, enjoy it too much and he will think you are better off as a cock
                            //Mark's target 80% Almost fully cock easiest to hide.
                            //Brets target 55. Mouth or arms missing he prefers
                            //Keagens target 40, Just small enough to fit in his sheath kinda like a kangaroo
                            var tfstater=(((character.qualities.tfstatus+3)/4)*20 );
                        if (character.sandbox.host.harmony(3)<16&&character.qualities.tfstatus!=17){
                            //either head, arms or both 
                            //bret wants both
                            switch (character.sandbox.host.harmony(3)){
                                //all these can saftly dump into tf15 as they only further the TF
                                // This section is for The host controled tf of arms and head.
                                case 5:
                                //for possible future characters, will need to learn "continue" statments for them to function
                                break;
                                case 10:
                                break;
                                case 15:
                                    // for bret
                                    
                              
                                    if (((((character.qualities.tfstatus + 3) / 4) * 20)-(Math.floor((character.qualities.tfstatus + 3) / 4) * 20))!=15){
                                        
                                        
                                        //I know..... You don't need to say it.
                                    system.doLink("./tf15");
                                        
                                    }else{
                                               system.doLink("./mini");      
                                //No transformation desired by host
                     
                                   }
                            }//end switch
                          } else {
                              //Host in control of TF with a fixed TF % target
                        if (character.sandbox.host.harmony(3)==tfstater){
                                //No TF needed
                                system.doLink("./tfmini");
                            } else if (character.sandbox.host.harmony(3)>tfstater){
                          //TF directed upward      
                                system.doLink("./tfstandard");
                                
                            } else {
                                //TF directed downward
                                
                                system.doLink("./tfreversion");
                            }
                            
                            
                }
                       
                    }, //function close
                    ///////////////////////////////////////////////////////////////////////
                    /////////////////////////////TF resuslts/////////////////////
                    ////////////////////////////////////////////////////////////////////////
                    "tf20": function (character, system, action) {
                        transer();
                        if (character.sandbox.tfup){
                            
                            
                        }else{
                        character.sandbox.tfholder="The first thing that hits you is that host's sheath is gone! You have become large enough\
                    that you are basically sharing hips with host. Though you are still much smaller than you should be and are still missing everything below your waist.\
                    "; 
                    
                        }
character.sandbox.limits.insheath=0;
                       system.doLink("morning");
                    }, //function close
                    "tf40": function (character, system, action) {
                        
             character.sandbox.tfholder=(character.sandbox.tfup)?"The first change you notice is host has regained his sheath, its large enough for most of your body\
                though your head would remain sticking out. It also feels like everything has gotten larger, however a quick glance proves its just you that shrunk. \
                A bit more disturbing is the slight bulge of host's urethra that runs up your front ending just below your neck.":"Unlike the previous mornings you realize you are too large for\
                host's sheath to hold you completely! Even fully flacid your head would stick out with the opening around your neck.";
              character.sandbox.tfresponse=(character.sandbox.tfup)?"host looks down at you and shrugs \"Well at least it will be easier getting around with you now\" he says trying to be optimistic":"\
                host looks down at you and blinks a few times\"Huh, You look a good bit bigger than last night, you might be able to get back to normal after all if you keep this up!\" he says\
                with a sense of encouragement";
                         character.sandbox.limits.goout=true;
                        character.sandbox.limits.insheath=1;
                       system.doLink("morning");
                    }, //function close
                    "tf60": function (character, system, action) {
                     
                        character.sandbox.tfholder=(character.sandbox.tfup)?"It seems you have become even smaller over the course of the night, enough so that all of your body even your head can\
                        fit inside host's sheath.":"Your body feels larger than before and host's sheath feels tighter as well. Quickly checking for more changes you find your body moves easier and feels\
                        more your own, mostly small changes but they all seem to show signs of returning to your normal body!";
                        character.sandbox.tfresponse=(character.sandbox.tfup)?"host looks down at your new size \"Well... I can go back to wearing normal pants again. So thats good...\" he says trying to be optimistic":"\
               host looks down at your new size \"Geeze if you keep getting bigger I am going to need to wear larger pants again....\" he mentions";
                        character.sandbox.limits.insheath=2;
                       system.doLink("morning");
                    }, //function close
                    "tf80": function (character, system, action) {
                        
                        character.sandbox.tfholder=(character.sandbox.tfup)?"It is getting harder to tell where you begin and the cock ends. Most of your body has started being changed\
                        in small but noticeable ways. You are not even sure if you have any bones anymore. When flacid you can still move around normally but erect feels like being filled with concrete":"\
                        With a huge relief you discover once again you have changed but this time it was toward returning to normal! Some of the shape has returned to your upper body and even your neck has\
                        regained some of it's definition.";
                        character.sandbox.tfresponse=(character.sandbox.tfup)?"After noticing the changes host gives you a reassuring rub \"If this keeps up there won't be any way to tell you apart from a normal cock\" he says with concern":"\
                host notices the changes to your body and gives you a pleasent rub\"So it really isn't permanent, see? No need to worry at all!\"";
                                                character.sandbox.limits.insheath=2;
                        system.doLink("morning");
                    }, //function close
                    "tf100": function (character, system, action) {
                        character.sandbox.tfholder="Your entire body feels.... different than last night. Due to the current state its in you are a having a difficult time\
                        determining exactly what is different. With some wiggling and concentration you manage to get a good idea of what you look like now. You don't have arms or eyes anymore, and your\
                        mouth is vertical. You seem to feel host's sheath completely comfortable and not even slightly tight and your entire body feels smooth. Other than the fact that you can move around and bend\
                        ,you have completely become his cock!";
                        character.sandbox.tfresponse="host looks down noticing the changes and gives you a slight rub.\"Looks like you are fully transformed now, can you even move?\" You quickly wiggle around some to prove\
                        you are still alive and aware down here\"Well... at least you can't change any further into my cock.\" He says.";
                        character.sandbox.limits.insheath=2;
                        character.sandbox.limits.cantalk=false;
                        character.sandbox.limits.hasarms=false;
                        
                        system.doLink("morning");
                    }, //function close
                   "tfmini": function (character, system, action) {
                      
                        system.doLink("morning");
                    } //function close
                },//actions close
           exit: function (character, system, to) {
           if (!character.sandbox.limits.cantalk&&!character.sandbox.abilities.think&&character.qualities.essence==0){
               system.setQuality("essence", character.qualities.essence +1);
               
           };
               
           if (character.sandbox.tfup==false&&character.sandbox.tfed==true){
               //Transformation took place but reduced %
               switch (character.qualities.tfstatus){
                   
                   
                   
               }
               
               
               
           }
           
           
           }//exit close
            }//options close
    ),
    
    /////////////////////////////////////////////////////////////////////
    //		 DAILY LOOP            //
    /////////////////////////////////////////////////////////////////////

    /*
     Conversion rate: 
     Smaller= 1-1 (20 essence= 1 full tier jump)
     larger= 2-1 (40 essence= 1 full tier jump)
     Extras= (5 essence to remove, 10 to return)
     
     COCK
     20%= minor shrinking, no legs, attached to groin 
     40%= surrounded by sheath, Urethral bulge can pull into sheath part way, Looks like a hyper fur. Can hide in public.
     60%= Far smaller but larger than a cock, can fit in pants.
     80%= cock sized, no bones, Difficulty moving when hard.
     100%= Full conversation, can still move around slightly when soft.
     no arms= extra 10%
     Cock shaped head=5%
     */
    morning: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return ((headingholder == "Your") ? "Your house" : "" + curhost + "'s Home");
                },
                enter: function (character, system, from) {
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

                    //Who woke first 
                    //in or out of sheath
                    //tfed more or not
                    //




                    var aroused = ((character.sandbox.host.libido + rnd()) < 4.5 &&!nightfun);
                    if ((character.sandbox.host.sleepy + rnd()) < 5.5&&character.sandbox.ws) {
                        //He woke first
                        if (aroused) {
                            alt="sleep";
                            //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                            system.doLink("./masturbate");

                        } else {
                            alt="sleep";
                        system.doLink("./bathroom");//he woke first not horny/masturbated night before.
                        }//close aroused else
                    } else {
                        
                        /////////////////////you woke first OR WS disabled

                        switch (character.sandbox.limits.insheath) {
                            case 0:
                                //no sheath
                                                 if (character.sandbox.tfed){
                         parer("During the night it seems you were transformed further by the runes. "+character.sandbox.tfholder);
                     }
                     alt=(character.sandbox.host.host=="bret")?"front leg":"arm";
                            parer("You wake up feeling rather comfortable, head on a pillow and host's #alt wraped around you as one would a lover. It almost seems nice till you remember\
                        you are attached to his groin and your legs have basically merged with his massive balls. From the snoreing you can assume host is still fast asleep");

                                
                                // Type 1 TF so minimal TF
                                oper(system,"./snuggle","Gentely wake him up","./bathroom","Let him sleep a bit longer");
                                alt="";
                                break;
                            case 1:
                                // head pokes out
                                if (!aroused) {
                                    if (character.sandbox.tfed) {
                                        parer("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                                    }
                                    parer("You wake up in the warmth of host's sheath" + ((nightfun) ? ", all around you is moist and sticky from the nights fun" : "") + ".\
                                                It's opening clamped tightly around your neck like some kind of bizzare collar. From the snoreing you can assume host is still fast asleep");
                                    
                                            //head pokes out and host is asleep he is also not horny
                                    oper(system,"./bathroom","Wait patiently for him to wake up","./masturbate",(character.sandbox.limits.cantalk)?"Call out to try and wake him":"Wiggle around desperately trying to wake him");
                                    
                                    
                                    alt="insheath";
                                    break;
                                }//if night mastur close
                            case 2:
                                // completely inside
                                if (aroused) {

                                    parer("You wake up surrounded by cloth in complete darkness, along with a mumbling sound from above you. Your entire body feels warm and hard\
                                            , enough so you find it a bit difficult to move around. host apparently is going to wake up with morning wood.");

                                    if (character.sandbox.tfed) {
                                        parer("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                                    }
                                    
                                        
                                        //You are outside of the sheath. BUT He is horny and not yet awake. Morning wood mode activate! 
                                        if (character.sandbox.limits.hasarms){
                                           
                                          oper(system,"./masturbate","Start without him","./bathroom","Relax and wait to see if it goes away"); 
                                       alt="started";
                                        } else { 
                                            
                                           oper(system,"./masturbate",(character.sandbox.limits.cantalk)?"Yell out to wake him so he will masturbate you":"Wiggle around desperately needing to be rubbed","\
                                     ./bathroom","Be a good cock and wait for him to wake up");
                                            alt="aroused";
                                        }
                                        
                                                    


                                    break;
                                }//if aroused statment closed
                                //Both iffs end above due to having identicle conditional
                                if (character.sandbox.tfed) {
                                    alt=("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                                }
                                parer("#alt <p>You wake up in the warmth of host's sheath" + ((nightfun)? ", all around you is moist and sticky from the nights fun" : "") + ".\
                                        You can't see anything due to the sheath completely covering your head. host's musky scent overwhelms you, seems you even sweat like a cock.\
                                        Especially since you have been stuck inside his sheath all night.");
                                
                                    
                                     alt="insheath";
                                    //not aroused, stuck in sheath completely. He isn't awake.
                                    oper(system, "./bathroom","Relax and let him wake up naturally","./masturbate","Wiggle around and try to wake him");
                                           
                                            
                                    
                                    
                                    
                                    break;

                        }//switch close

                    }//woke first if statment close



                }, //function/enter close 
                actions: {
                    "bathroom": function (character, system, action) {
                        transer();
                        var bath1 = "";
                        var bath2 = "";
                        var bath3 = "";
                        if (alt == "sleep") {
                            alt = "";
                            //woke up IN bathroom
                            if (!character.sandbox.limits.cantalk) {
                                bath1 = ('An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside.\
                        Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! <p> "Sorry just figured I didn\'t need to wake you\
                        considering your current condition." host says and begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up...');

                                if (character.sandbox.tfed) {
                                    bath2 = ("You barely have time to notice a few changes took place during the night. " + character.sandbox.tfholder + "<p>" + character.sandbox.tfresponse);
                                }//tfed check closed

                            } else {// cantalk check false closed

                                bath1 = ('"Hey wake up!" host says out of nowhere! Rather abruptly you are given a slight shake to wake you up! It\'s about as jolting\
                        as being knocked out of a bed! But it doesn\'t take long to figure out why host needs you awake, you are currently in the bathroom and pointing at the toilet!\
                        <p>"Open your mouth a bit more I need to piss." He says almost as if this were a perfectly normal thing to request.');

                                if (character.sandbox.tfed) {
                                    bath2 = ("<p>During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder + "<p>" + character.sandbox.tfresponse);
                                }//tfed check close
                            }// cantalkcheck fully true closed


                        } else {//sleep check closed 
                            alt = "";
                            //already awake.... host is alseep in bed and about to wake up  MAYBE no watersports
                            switch (character.sandbox.host.host) {
                                case "keagen":

                                    alt = "how quantum safety measures can kiss his ass";

                                    break;
                                case "bret":
                                    alt = "refusing to mail coconuts to government buildings";

                                    break;
                                default:
                                    alt = "swearing he didn't eat the last of the ice cream";

                            }

                            
                            bath1 = "You can hear host mumbling something about #alt in his sleep, before finally giving a short yawn and wakes up.\
                            <p> "+(character.sandbox.limits.cantalk)?"You call out to him saying good morning, all you get is an \" Ehhh....\" as he responds still taking a minute to wake up fully.":"\
                            You start to say good morning but then remember your mouth is currently a vertical piss slit. He gives another yawn<p> \"I hope you slept well\" he says giving you a pat";


                            if (character.sandbox.tfed) {

                                bath2 = "<p>" + character.sandbox.tfresponse;
                            }//tfed check close

                            
                                //used to pee with
                                bath3 = "<p>Eventually he stretches and gets up, however he is walking straight to the bathroom! You have little choice but to comply with your role as his cock as he\
                            points you at the toilet. There is hardly a moment to complain before a rush of urine surges through you body heading for your mouth, the feeling is incredibly bizarre!";
                          
                              
                               

                        
                            }

                            // +character.sandbox.tfresponse
                        

                         if (character.sandbox.ws) {
                        parer(bath1 + bath2 + bath3);

                        oper(system,"./bathroom2","Be a good cock and help direct his piss","./disobey","Wince and try to hold back the flow");
                        } else { // No watersports
                                bath3 = "<p>Eventually host gets up giving you a rub and heads for the bathroom. He is thankfully quick about it and afterward\
                             leaves you to wait for him to finish brushing his teeth.";
                                parer(bath1 + bath2 + bath3);
                                oper(system,"aftermorning","Continue with the day");
                        }
                        


                    ///    parer("You finish up your buissness in the bathroom and host begins his day.");
                        //system.write("<p></p>");a


                    }, //function close
                    "bathroom2": function (character, system, action) {
                    
                        transer();
                        alt=(true)?"":"";
                        parer("host sighs with relief as he relaxes his bladder and lets it flow through your body. It isn't nearly as relaxing for you,\
                         clearly tasting very drop that passes through you mouth as it coats every inch of your insides. In some ways it almost feels like a hose had been shoved up your ass\
                        and turned on. The feeling of rapid moving liquid through you is disturbing enough but its all the stranger knowing WHAT that liquid is. <p>\
                        Still you do your best to help him aim it into the toilet.");
                        oper(system,"aftermorning","Finish draining his bladder and get cleaned up");
                        
                   if (rnd() < 8) {
                            // showers
                        }

                   
                    }, //function close
                     "disobey": function (character, system, action) {
                    
                        transer();
                        system.setQuality("harmony", character.qualities.harmony -1);
                        alt=(true)?"":"";
                        if (character.sandbox.limits.cantalk) {
                        parer("You didn't ask for this and he didn't even ask if this was ok! Already you can taste it starting to leak up your throat! If your mouth wasn't full of urine you might even have complained!\
                       Being a bit defiant you shut your throat and mouth as best you can! Host rather rapidly realizes something is wrong... <p>\"What.. hey! what are you doing! Ack!\"\
                       he says and braces himself due to the uncomfortable back pressure. \"Come on... don't be like that... I can't hold it forever. Like it or not you are a penis and I need to pee!\"\
                       he says forcefully and pushes harder! <p>Finally the pressure is too much and the flow breaks past your mouth and sprays into the toilet.");
                         } else {
                             parer("Try as you might your mouth is in no shape to hold back any of the flow. Its just a vertical piss slit, the only purpose your mouth has now is to piss with.\
                             Still you manage to clench it somewhat putting a bit of pressure on the urethra and causing it to inflate slightly. All this does is remind you just how much of your insides have been\
                             repurposed for use as his urethra");
                             
                         }
                   if (rnd() < 8) {
                            // showers
                        }

                        
                        oper(system,"aftermorning","Finish draining his bladder and get cleaned up.");                 
                   
                    }, //function close
                    "showers": function (character, system, action) {
                       /* transer();
                        alt=(true)?"":"";
                        parer("");
                        oper(system,"");
                        */
                        transer();
                        alt=(true)?"":"";
                        parer("");
                        oper(system,"");                 
                    }, //function close
                    "snuggle": function (character, system, action) {
                    
                        transer();
                        alt=(true)?"":"";
                        parer("INCOMPLETE");
                        alt="snuggle";
                        oper(system,"./masturbate","Convince him to give you a massage","./snugglethenbathroom","Tell him to get ready for the day");                 
                   
                    }, //function close
                     "snugglethenbathroom": function (character, system, action) {
                    
                        transer();
                        alt=(true)?"":"";
                        parer("INCOMPLETE");
                        if (character.sandbox.ws){
                        oper(system,"./disobey","Grumble and keep your mouth closed","./bathroom2","Open your mouth for him to piss with");                 
                    }else {
                          oper(system,"aftermorning","Finish up with the bathroom and continue with the day");   
                    }
                    }, //function close
                    "masturbate": function (character, system, action) {
                        transer();
                        //// options sleep ), 
                        var conser = "";

                        switch (alt) {
                            case "sleep":

                                //woke up to BEING masturbated
                                if (character.sandbox.host.host!="bret"){
                                    
                                    
                                conser = "You wake up to a strange feeling of being rubbed. host has his hands around you and is strokeing you up and down. It feels REALLY good! Like a massage but\
                            its sending tingels of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is masturbating!\
                            It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!";
                                    if (character.sandbox.tfed){
                                        conser=conser+"<p>Despite the wonderful feelings you do realize the night held a few changes for you. "+character.sandbox.tfholder+"<p>Yet \
                                       all that seems to matter right now is the wonderful feeling of being masturbated.";
                                        
                                    }
                                    parer(conser);
                                    oper(system,"./masturbate2","Enjoy the pleasures as you feel his balls begin to tighten");

                                    
                                } else {
                                    //damnit bret
                              
                                   system.doLink("./masturbatebret");
                                
                                }
                                
                                break;
                            case "started":
                                //Outside of sheath, have arms
                                alt = (character.sandbox.host.host=="bret") ? "groans stretching out some." : "reaches down to help you.";
                                parer("Being rather impatient you decide to start without him. Besides you if you want to masturbate why should he have to be awake for it?\
                                Well other than you being his cock. The idea that you belong to him suddenly sends an erotic shiver down your back. <p>You begin rubbing yourself\
                                up and down just enjoying the sensation of it. The closer to being completely a cock the better everything feels against your skin. After a bit more caressing you hear host waking up\
                                \"Mmmmm That... feels good! Don't stop!\" He says and #alt");
                             oper(system,"./masturbate2","Continue to enjoy the feelings as his balls begin to tighten");
                                break;
                            case "aroused":
                                //host is asleep and you are horny but have no arms!
                                //Can not be type 20
                                
                                conser = "The current state of your transformation leaves you rather helpless! You desperately need to be rubbed and stroked but with your arms\
                                having been absorbed by your cockflesh you are left to wiggle around helplessly. Finally you hear a few yawns as host wakes up a bit and notices your plight."+
                                (character.sandbox.tfed)?character.sandbox.tfresponse:"";
                        if (character.sandbox.host.host=="bret"){
                            
                            system.doLink("./masturbatebret");
                                        
                                    }else{
                                        //NOT BRET!
                                        conser=conser+"\
                                        <p> He gives your aroused body a rub and smiles \"Hehe looks like you need some help there.\" He says and begins to stroke your body up and down.\
                                         It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!";
                                parer(conser);
                             oper(system,"./masturbate2","Enjoy the pleasure as you feel his balls tighten");
                                
                                };
                        
                                break;
                            case "insheath":
                                //stuck in sheath, head out or inside. 
                                // Still wanting to be masturbated. not aroused YET
                                 if (character.sandbox.host.host!="bret"){
                                     //NOT BRET
                                conser=("It seems that your attempts are working and you can hear a few mumbles from host. He doesn't exactly wake up but he does roll over and yawn\
                                . One of his hands suddenly reaches to his balls to scratch them, but afterwards it drifts upwards beginning to rub his sheath! <p>You can feel the pressure through it\
                                and its hard to describe how nice it feels. Soon you can feel a strong pulsing through your body as you stiffen and become erect. host has his hands around you and is stroking you up and down. It feels REALLY good! Like a massage but\
                            its sending tingles of pleasure straight through you!  It takes surprisingly long to realize he is masturbating!\
                            It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!");
                             parer(conser);
                             oper(system,"./masturbate2","Enjoy the pleasure as you feel his balls tighten");
                         }else {
                                     // Alright bret....
                            alt="awake";
                                 system.doLink("./masturbatebret");
                                 break;
                         }
                                break;
                            case "snuggle":
                                conser="host paces his hands around you and begins stroking you up and down. It feels REALLY good! It seems like a massage but\
                            its sending tingles of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is actually masturbating!\
                            It's times like this, completely drowning in pleasure that the thought of becoming a cock seems like the best thing in the world!";
                                
                                parer(conser);
                        oper(system, "./masturbate2","Enjoy the pleasure as you feel his massive balls tighten");
                        }
                      




                    }, //function close
                      "masturbate2": function (character, system, action) {
                       /* transer();
                        alt=(true)?"":"";
                        parer("");
                        oper(system,"");
                        */
                        transer();
                        alt=(true)?"":"";
                        parer("All the wonderful sensations begin to build higher and higher! Thoughts about never wanting to turn back begin flooding your mind as you feel his balls\
                      begin to churn and pull upwards. You hardly have a seconds warning before a massive pulse of cum shoots through your body and up your throat! The wonderful taste\
                      overwhelms you and all you can think of is the surges of cum that follow every clench of his balls.<p>host is left panting from the pleasure \"Sorry meant to warn you... but damn that feels\
                        good!\" You continue to drool cum as host gets up and heads for the bathroom");
                            system.animateQuality("essence", character.qualities.essence + 10);
                          if (character.sandbox.ws){
                               oper(system,"./masturthenbathroom","Try to clear the cum from your throat");      
                              
                          } else{
                              oper(system,"aftermorning","Finish up in the bathroom and continue the day");  
                          }
                    }, //function close
                     "masturbatebret": function (character, system, action) {
                       /* transer();
                        alt=(true)?"":"";
                        parer("");
                        oper(system,"");
                        */
                       // 3 options, He woke to you being aroused, Snuggled then masturbated, woke to being masturbated.
                       transer();
                       if (alt=="awake"){
                           
                           parer("It seems that your attempts are working and you can hear a few mumbles from host. He doesn't exactly wake up but he does roll over and yawn\
                            After a bit more wiggling he finally shifts around and sits up, unfortunatly this leaves you squished under him pressed firmly aginst the bed.\
                            <p>\"Mmmmm, Good morning down there.... Eh another surprise morning package? Hah! Just like the first day I saw you, always hard in the morning aye?\" He\
                            says teasing you. The pressure doesn't let up though as he just shifts around dragging you pleasurably aginst the bed."+character.sandbox.tfresponse+
                       "host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                   }else{
                          parer("You wake up to a strange pleasurable but squished feeling. host seems to be laying down pressing you firmly aginst the bed.\
                            <p>\"Mmmmm, Good morning down there.... \""+character.sandbox.tfresponse+" <p> The pressure doesn't let up though as he just shifts around dragging you pleasurably\
                       against the slick silk sheets of his bed, and it starts to REALLY feel good!");
                       
                       
                   };
                      character.sandbox.tfresponse="";
                        
                oper(system,"./masturbate2","Enjoy the pleasure as you feel his balls tighten");
                                 }, //function close
                      "masturthenbathroom": function (character, system, action) {
                       /* transer();
                        alt=(true)?"":"";
                        parer("");
                        oper(system,"");
                        */
                        transer();
                        //alt=((true)?"":"");
                        parer("host smiles and gives you a rub, but he is currently pointing you at the toilet! \"Sorry, just came and now have to pee.... You know how it is\" he says kind of shifting from foot to foot with need\
                    ."+((character.sandbox.limits.cantalk)?"You start to say something but only end up coughing up more cum! He holds your head and points it right at the bowl!":"Your piss slit of a mouth seems to tingle\
                    as he gets ready to piss"));

                        oper(system,"./bathroom2","Be a good cock and help direct his piss","./disobey","Wince and try to hold back the flow");
                    } //function close
                }//actions close
            }//options close
    ),
    aftermorning: new undum.SimpleSituation(
            "", {
                 heading: function () {
                  return (((headingholder == "Your")? headingholder : (curhost + "'s"))+" Living Room");},
                enter: function (character, system, action) {
                    nightfun=false;
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
                    if (!character.sandbox.limits.goout) {
                        //Stuck inside
                         character.sandbox.gooutcount++;
                        if (character.sandbox.gooutcount > 1) {
                          // Headed to professional

                            system.doLink("./seekhelp");
                            
                        }else{//stuck inside too long, close
                            // Mentions might have to call hospital and calls out
                            system.doLink("./inside");
                            
                        };//stuck inside close
                        } else if (headingholder=="Your"){
                            // Currently IN your house but can leave house now.
                        character.sandbox.gooutcount = 0;
                           system.doLink("./move");
                           character.sandbox.limits.goout=true;
                          
                    } else {
                         //Host is able to leave the house
                         character.sandbox.gooutcount = 0;
                        
                        
                        
                        
                        
                        
                        system.doLink("./discuss");
                    }//able to leave house if statment close
                 
                }, //function/enter close 
                actions: {
                    "discuss": function (character, system, action) {
                        transer();
                        /*
                       
                        alt=(true)?"":"";
                        
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        */
                       //Bret and others past tfstatus20 come here
                       //have breakfast
                       
                        //event triggers
                        if (!character.sandbox.limits.cantalk&&!character.sandbox.abilities.think){
                          //learns how thought speak works 
                          
                        parer("Still sucks that you can't talk anymore, this isn't going to be any easier to change you back with just one of us. You sure you can't get any words through that piss slit?\"\
                    he asks, but to you it's painfully obvious. You can tighten it a bit as if some of the muscles from your mouth were still there but it's just an extension of his urethra now.\
                    Until you turn back the only thing your mouth is going to be used for is piss and cum. You just shake your cock head negetivly at host internally sighing.\
                    <p>The runes were nice enough to let you keep your sense of taste though. You internally glare at them thinking angry and harsh thoughts their direction, surprisingly they almost seem to\
                    tingle when you do so!");
                                    /*
The runes did all this, you think about them and wonder why they left sense of taste is intact..... and if you can somehow convince them to turn you back.\
                    They seem to almost tingle as you think about them, however you don't really notice until you think the words *stupid runes*<p>\"HEY I heard that!\" host says shocked!");
                  */
                      oper(system,"./thoughts","Concentrate on the runes again");
                                   
                       } else if(character.qualities.tfstatus==17){
                        //Full cock TFed
                                if(!knower("cocked")){
                                // fullcock not the first time.             
                                    //leaving this here as a possible expansion hook
                                     
                            parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensetive squishy body.\
                            Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, its easy to forget you are not just a normal cock. You look almost exactly like\
                            my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob!\
                            Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                        alt="";
                        knower("cocked",true);
                        oper(system,"./obey","Relax and slide back into your sheath obediantly","./disobey","Twist around pointing at him as if glareing");
                                    
                                    
                            }else{
                        // first morning as a full cock   
                           
                           
                           
                               
                            alt="";
                            switch (character.sandbox.host.host) {
                            case "keagen":
                                alt='<p>"" ';
                
                                    break;
                                        
                                default:
                                    
                            
                            
                            
                        }
                        
                            parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensetive squishy body.\
                            Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, its easy to forget you are not just a normal cock. You look almost exactly like\
                            my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob!\
                            Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                        alt="";
                        knower("cocked",true);
                        oper(system,"./obey","Relax and slide back into your sheath obediantly","./disobey","Twist around pointing at him as if glareing");
                    }
                        }else if (character.qualities.harmony<-2&&character.sandbox.limits.insheath!=0&&rnd()>5.5) { 
                          //complicated as fuck.... harmony is very low, penis is in one of the second two stages, and a random chance of 40% auto disobey
                            system.doLink("./disobey");
                            
                        }else{
                            
                            //no special circumstances, not full cock, inbetwenish for minimal TF, already has thought transfer OR doesn't need it.
                            if (false) {
                                // for determining if host has work/school or not
                            }

                            switch (character.sandbox.limits.insheath) {
                                // determins sheath based interaction next
                                case 0:
                                    // mostly for bret
                                    if (character.sandbox.host.host != "bret") {

                                        break
                                    }
                                    parer("host rather quickly gets the harness back out and secures you to his belly once more.\
                                    He continues his morning getting himself some breakfast, once again reminding you\
                                    of your inability to eat. In some ways it certainly makes things easier not needing to eat... but its hardly worth the cost!<p>\
                                    <p>Host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\"\
                                    he suggests.");
                                    if (character.sandbox.limits.cantalk) {
                                        oper(system, "./prework", "Tell him to just go about his day as normal", "requestmatrix", "Make a request (menu)");
                                    } else if (character.qualities.essence < 1) {
                                        oper(system, "./prework", "Shake your cock-like head indicating no");
                                    } else {
                                        spark=true;
                                        oper(system, "./prework", "Shake your cock-like head indicating no", "requestmatrix", "(TT) Make a request");
                                    }
                                    break;
                                    parer("OK, how the heck did you get here?");
                                case 1:
                                    // head sticks out makes talking easier.

                                    parer("host continues his morning getting himself some breakfast, once again reminding you\
                             of your inability to eat. In some ways it certainly makes things easier not needing to eat... but its hardly worth the cost!\
                           Through the morning you find Its surprisingly comfortable being carried around inside his sheath, at least without those pants on.\
                            <p>Host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\"\
                            he suggests.");
                                    if (character.sandbox.limits.cantalk) {
                                        oper(system, "./prework", "Tell him to just go about his day as normal", "requestmatrix", "Make a request (menu)");
                                    } else if (character.qualities.essence < 1) {
                                        oper(system, "./prework", "Shake your cock-like head indicating no");
                                    } else {
                                        spark=true;
                                        oper(system, "./prework", "Shake your cock-like head indicating no", "requestmatrix", "(TT) Make a request");
                                    }
                                    break;
                                case 2:
                                    // will have to get you out of sheath first.
                                    parer("host continues his morning getting himself some breakfast, of course you end up spending all of it inside his sheath\
                            Through the morning you find Its surprisingly comfortable being carried around inside his sheath, at least without those pants on.\
                            <p>Host finishes his food and spreads his legs, you feel a pressure all followed by slight twinge of arousal. Soon the penis parts of your body begin to firm up and force\
                            you out of his sheath. He breaths deeply and gives you a friendly rub before speaking.\
                            \"I have to go to dayjob soon. So if there is anything you want, you better tell me before I put you back home for the day.\" He says patting his sheath\
                           ");
                                    if (character.sandbox.limits.cantalk) {
                                        oper(system, "./prework", "Tell him to just go about his day as normal", "requestmatrix", "Make a request (menu)");
                                    } else {
                                        if (character.qualities.essence < 1) {
                                            oper(system, "./prework", "Shake your cock-like head indicating no");
                                        } else {
                                            spark=true;
                                            oper(system, "./prework", "Tell him to just go about his day as normal", "requestmatrix", "(TT)Make a request (menu)");
                                        }
                                    }
                            }
                        }
                    }, //function close
                    "move": function (character, system, action) {
                        transer();
                        /* 
                         alt=(true)?"":"";
                        
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                         parer("host seems a bit too enthusiastic as he goes about his morning, first raiding your fridge for some food. Then giving you a rub though your new sheath\
                         . \"Hehe, sorry I am just really thankfull we don't have to go see a professional about this. And I get to wear pants and even sleep in my own bed tonight!\" He says\
                         completely neglecting the fact that you have been further transformed into his cock.");
                        alt=((character.sandbox.limits.cantalk)?"Gumble at him and say this is hardly better":"Start to complain but remember your mouth is just a cocks piss slit now"); 
                        oper(system,"./discuss",alt);
                         headingholder="";
                         alt="";
                    }, //function close
                     "thoughts": function (character, system, action) {
                       transer();
                         /* 
                         alt=(true)?"":"";
                        
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        if (character.sandbox.host.host=="keagen"){
                            
                            alt2="\"That felt so strange... don't do that too often... Wait HOW did you do that? I know the runes pick up on thoughts during alpha waves but if you can send a thought to me,\
                            then maybe they can pick up on other toughts as well!\" He says excitedly.";
                        
                         }
                        parer("They tingle stronger the longer you think about them, however you don't really notice anything until you think the words *stupid runes*<p>\
                        \"HEY I heard that! Err sort of it was like a weird... thought in the back of my mind.\" host says shocked! At the same time you feel a tiny warmth drain out of the runes as you do so. It's\
                        like learning to cross your eyes for the first time, you know how to do it again even if you are not sure HOW you did it. It did seem to drain the power of the runes a bit however\
                        <p>[\"Glad that communication won't be too much of a problem, still it was weird having your thoughts pop up in my head like that. Try to keep it to a minimum...\" He warns]");
                         alt2="";
                        parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED:(TT) Thought Transfer");
                        
                        character.sandbox.abilities.think=true;
                        
                             system.animateQuality("essence", character.qualities.essence - 1);
                         oper(system,"./discuss","Continue the day armed with your new mastery over the runes");
                         
                         
                    }, //function close
                    "continue": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");
                        character.sandbox.tfholder = "";
                        character.sandbox.tfresponse = "";
                        alt="";
                       alt2="";

                        system.doLink("transformation");
                    }, //function close
                    "seekhelp": function (character, system, action) {
                        /* 
                         alt=(true)?"":"";
                        
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        // TF kept host indoors too long. Will not apply to bret
                        //Might be day after TF or 2 days in a row of calling out from work.
                        
                        transer();
                        
                        
                        parer("host sighs as he gets some breakfast, sitting at the chair with you leaning on the table is rather awkward. You eventually decide to grab a chair under the table to lay on while he eats\
                        <p>\"Well we can't keep this up any longer, I can't stay stuck here! We have have to get some professional help, this is just beyond what we take care of on our own\" He says rather\
                        disparingly");
                       
                        
                        system.setQuality("essence", character.qualities.essence +20);
                        oper(system,"eventhospital","Reluctantly agree");
                   
                    
                    
                    }, //function close
                    "inside": function (character, system, action) {
                       transer();
                        /*
                         alt=(true)?"":"";
                        
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        // TF kept host indoors too long. Will not apply to bret
                        //Might be day after TF or 2 days in a row of calling out from work.
                        if (character.sandbox.goout){
                            
                            
                        }
                        
                        
                        alt=((character.sandbox.limits.cantalk)?"You ask him whats wrong, ":"You give him a comforting rub in worry, ");
                        
                        parer("host seems a bit grumpy as he wanders around getting something to eat. #alt but he just sighs in response. <p>\
                        Finally he opens up a bit, \"Look, if this keeps up we will have to ask for help. This is embaressing enough that the last thing I want to do is let others find out\"\
                        He notices the way you are looking at him and he slumps a bit \"Alright I know this is a bit more concerning for you but I don't think either of us want to\
                        explain how this happened!\" He says actually making a good point.");
                        
                       
                        
                        
                        oper(system,"nowork","Find a way to pass the time");
                   
                    
                    
                    }, //function close
                     "obey": function (character, system, action) {
                         transer();
                         /*
                         alt=(true)?"":"";
                       
                  
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        
                        system.setQuality("harmony", character.qualities.harmony + 1);
                          parer("host smiles and gives you a quick rub. \"There, thats a good penis, I am sure we will find a way to change you back eventually.\"\
                           he says as if trying to sound reasuring. All it really does is cause you to wonder how long he actually expects to keep you like this!\
                           <p> He begins to to put his pants on, \"Long day ahead, so remember no talking to me even in thoughts while I am out. \
                            So this is your last chance to say anything on your mind for a while.\" he says as the pants draw ominously close to covering you.");
                                oper(system,"requestmatrix","(TT) Make a request","./prework","Do nothing and stay still like a good cock");
                        
                    }, //function close
                     "disobey": function (character, system, action) {
                         transer();
                         /*
                         alt=(true)?"":"";
                         
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        parer("host just seems to grumble at you and rather quickly locks you away within his pants. He didn't even let you in on his plans for the day, nor\
                        check to see if you needed anything! Though you don't really need much as you are currently, it's getting difficult to rationalize\
                        being treated like a person when you only have the needs of a penis. <p> host continues his day and gets breakfast mostly ignoring you\
                        . From the sounds of his activities you can guess he is about to head out to dayjob.");
                         system.setQuality("harmony", character.qualities.harmony - 1);
                         spark=true;
                         oper(system,"./prework","Stay silent and try to behave","requestmatrix","(TT) Make a demand");
                        
                        
                        
                    }, //function close
                                       "normal": function (character, system, action) {
                        transer();
                                           /* 
                         alt=(true)?"":"";
                         parer("");
                         oper(system,"");
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                          oper(system,"./continue","INCOMPLETE Continue to next morning");
                    }, //function close
                        "prework": function (character, system, action) {
                         transer();
                                 //alt=(true)?"":"";
                         parer("host finishes getting ready for dayjob and makes his way out the door. The trip there is uneventfull\
                        and the swaying back and forth as he walks just makes it harder to relax. host expects you to\
                        to stay unmoving and quiet for hours with nothing to do, easy for a normal cock to do.\
                        However a normal cock doesn't get bored!\
                        ");
                            var switchsend;    
                    switch (character.sandbox.host.host){
                            case "bret":
                           
                            
                            switchsend="work/mail";
                          headingholder2="Post Office";  
                            break;
                        case "keagen":
                            
                            switchsend="work/student";
                            headingholder2="College";
                            break;
                        case "mark":
                            
                            
                            headingholder2="Office Building";
                            switchsend="work/office";
                            break;
                        }
                         oper(system,switchsend,"Get comfortable and pretend to be an ordinary penis for now");
                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                        "prenowork": function (character, system, action) {
                        /* transer();
                         alt=(true)?"":"";
                         parer("");
                         oper(system,"");
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        
                    }, //function close
                    "R1": function (character, system, action) {
                        /* transer();
                         alt=(true)?"":"";
                         parer("");
                         oper(system,"");
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         */
                        
                    } //function close
                }//actions close
            }//options close
    ),
    nowork: new undum.SimpleSituation(
            "", {
                
                
                // A few ideas for options here
            // give choice to player, sleep? through day, mischevious horny, 
            // 
            // 
            // 
            // 
                //heading:"Inside a sheath"
                enter: function (character, system, action) {
                    parer("<p>");
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

                }, //function/enter close 
                actions: {
                    "R1": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");

                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper(system, "", "");
                    }, //function close
                    "R2": function (character, system, action) {
                        transer();
                        system.write("<p></p>");
                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper();
                    } //function close
                }//actions close
            }//options close
    ),
    work: new undum.SimpleSituation(
            "", {
                
                // The work block.
            //A bit harder each character has a diffrent job. This section very personalized
            //Possibility of compacting them if player is stuffed in pants
            //jobs, mailman, student, office
            // after an hour decide if should be horny, wait impatiently or BE THE COCK
            //
            //
            //
            //
            //
                //heading:"Inside a sheath"
                 heading: function () {
                  return (headingholder2);}, 
                  actions: {
                      "mail": function (character, system, action) {
                             transer();
                          if (character.qualities.tfstatus<5){
                                //uses harness
                                // Can see a ton of whats happening
                                
                                 parer("host arrives at the post office without incident, he is being especially careful\
                                even using the back entrance. With the harness holding you against his belly and the trenchcoat\
                                keeping anyone from seeing you it proves to be rather effective. Though it also keeps you from moving anything due to the bondage nature of the harness\\n\
                                You can't help but feel a bit embaressed as it almost feels like he is thrusting into... or against... something with each step.\
                                <p>host collects a few bags and boxes from the mailroom loading them into his truck for delivery\
                                He seems to pant a bit as if exerting himself, finally as his truck starts he mentions \"Damn, now I know what hypers have to go through!\
                                You should have come with a heavy package warning label!\" he says giving a slight thrust with his hips teasingly also sending a tingle of pleasure through you\
                                \"Alright making requent stops now so keep quiet down there....\" he says.You know it's going to be a long day\
                                if you do nothing, jokeingly you wonder how a cock manages it.");
                              
                              
                            }else{
                                parer("host arrives at the post office seeming oddly confident as he strides in.\
                                It's a bit hard to tell whats going on from inside his pants but you are able to make decent guesses.\
                                He greets the worker at the front desk and heads for the mail room.\
                                 <p>host collects a few bags and boxes from the mailroom loading them into his truck for delivery\
                                You even hear him make a jokeing pass at another worker, they ignore it obviously hearing it from host a thousand times.\
                                Finally you hear his truck start and he snickers \"One of these days he will say yes and I will get you under his tail!\
                                \" You give a surprised shake in protest and he laughs \"I was kidding!\" he says\
                                 giving a slight teasing tightening to the muscles in his groin also sending you a tingle of pleasure.\
                                <p>\"Alright making requent stops now so keep quiet down there....\" he says. You know it's going to be a long day\
                                if you do nothing, jokeingly you wonder how a cock manages it.");
                                
                            }
                         // bret, can be at any TF stage, only mention harness for first stage.
                         alt=(true)?"":"";
                        
                         oper(system,"./wait","Wait impatiently","./horny","Be a horny needy cock","./meditate","Ponder how a penis gets through a boring day");
                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                    }, //function close
                    "student": function (character, system, action) {
                        // Pouch or sheath variation. 
                        // no type 1. Sheath version is in pants can't see.
                        // pouch version maybe...... for later anyway
                         transer();
                         alt=(true)?"":"";
                         parer("After a short bicycle ride being squished repeatedly between host's legs, the sounds of the college hallways soon surround you.\
                          host heads off quickly to his first class of the day, while he does his best to hide any sort of bulge you might make.  Other\
                          students funnel into what you can only guess is a lecture hall as you get squshied a bit between host's legs as he sits down.\
                          <p> Unfortunatly this isn't one of the classes you are taking so even listening to the lecture is boring or just confusing at best without being able to\
                          see the visuals the professor is refering to. You know it's going to be a long day\
                                if you do nothing, almost makes you wonder how a normal cock manages it.");
                         oper(system,"./wait","Wait impatiently","./horny","Be a horny needy cock","./meditate","Ponder how a penis gets through a boring day");
                        // system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                    "office": function (character, system, action) {
                         transer();
                         // no variation. 
                         // sits in office all day, boring unless event happens
                         // no type 1
                         // always blinded by pants.
                         //alt=(true)?"":"";
                         parer("A bumby car ride through town later you hear a change in the surroundings as host arrives at his workplace. You never really asked\
                         host about where he works, only that he has an office job. <p>\"So about to head inside, just stay still for the next eight hours while I get my work done and we should be fine.\"\
                         He says almost sounding concerned. Before you can reply you hear an electronic BEEP as a door unlocks and host steps inside.\
                         host greets a few coworkers on his way deeper into the building followed by a few more beeps of security doors.\
                         You suddenly get squished between his legs as he sits down in a chair and begins doing something with the computer. You know it's going to be a long day\
                         if you do nothing, in a silly way it makes you wonder how a normal cock manages it.");
                         oper(system,"./wait","Wait impatiently","./horny","Be a horny needy cock","./meditate","Ponder how a penis gets through a boring day");
                        // system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                    "work": function (character, system, action) {
                         transer();
                         alt=(true)?"":"";
                         parer("");
                         oper(system,"returner","Workday not done yet");
                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                      "meditate": function (character, system, action) {
                         transer();
                         alt=(true)?"":"";
                         parer("");
                         oper(system,"returner","Workday not done yet");

                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                      "horny": function (character, system, action) {
                         transer();
                         alt=(true)?"":"";
                         parer("");
      oper(system,"returner","Workday not done yet");
                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        
                    }, //function close
                      "wait": function (character, system, action) {
                         transer();
                         alt=(true)?"":"";
                         parer("");
                  
                         //system.setQuality("timeofday", character.qualities.timeofday + 1);
                         
                        oper(system,"returner","Workday not done yet");
                    } //function close
                }//actions close
            }//options close
    ),
    afterwork: new undum.SimpleSituation(
            "", {
                //heading:"Inside a sheath"
                enter: function (character, system, action) {
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

                }, //function/enter close 
                actions: {
                    "R1": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");

                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper(system, "", "");
                    }, //function close
                    "R2": function (character, system, action) {
                        transer();
                        system.write("<p></p>");
                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper();
                    } //function close
                }//actions close
            }//options close
    ),
    evening: new undum.SimpleSituation(
            "", {
                //heading:"Inside a sheath"
                enter: function (character, system, action) {
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

                }, //function/enter close 
                actions: {
                    "R1": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");

                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper(system, "", "");
                    }, //function close
                    "R2": function (character, system, action) {
                        transer();
                        system.write("<p></p>");
                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper();
                    } //function close
                }//actions close
            }//options close
    ),
    nightmasturbate: new undum.SimpleSituation(
            "", {
                //heading:"Inside a sheath"
                enter: function (character, system, action) {
                    //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

                }, //function/enter close 
                actions: {
                    "R1": function (character, system, action) {
                        transer();
                        //system.write("<p></p>");

                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper(system, "", "");
                    }, //function close
                    "R2": function (character, system, action) {
                        transer();
                        system.write("<p></p>");
                        system.setquality("timeofday", character.qualities.timeofday + 1);
                        oper();
                    } //function close
                }//actions close
            }//options close
    ),
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////// REQUEST MATRIX///////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////d////
    //,"./research","(TT)Ask him to do more reasearch on the artifact!"
    requestmatrix: new undum.SimpleSituation(
            //heading:"Inside a sheath"
              "<h1><p class=transient>Choose a location</p><h1>",
            {
                displayOrder: 4,
                choices: "#choice",
                 enter: function (character, system, from) {
                    if (character.qualities.day==1&&character.qualities.timeofday<2){
                        parer("<h1><p class=transient>Choose a Request</p><h1><p>(This section will lead to all kinds of things in the future, And the choices avalible can be incredibly dynamic)");
                        
                    }
                }//exit close
            }//options close
    ),
     learnmore: new undum.SimpleSituation(
            "",
            {
                heading: "Ask him to spend more time looking for a cure",
                tags: ["choice"],
                 canView: 
                         function(character, system, host) {
                return character.sandbox.hasbook;
                                },
                displayOrder: 1,
                enter:
                        function (character, system, from) {
                            
                            character.sandbox.control=true;
                            parer("There is so much more to come in the future......");
                           oper(system,"transformation","INCOMPLETE continue to next morning");
                        }
            }
    ),
     playmore: new undum.SimpleSituation(
            "",
            {
                heading: "Ask for him to let you out of his pants more often.",
                tags: ["choice"],
                displayOrder: 3,
                enter:
                        function (character, system, from) {
                            parer("There is so much more to come in the future......");
                           oper(system,"transformation","INCOMPLETE continue to next morning");
                        }
            }
    ),
     findinfo: new undum.SimpleSituation(
            "",
            {
                heading: "Ask him to check the library for books on magic",
                tags: ["choice"],
                displayOrder: 2,
                   canView: 
                         function(character, system, host) {
                return !character.sandbox.hasbook;
                                },
                enter:
                        function (character, system, from) {
                            character.sandbox.hasbook=true;
                            parer("There is so much more to come in the future......");
                           oper(system,"transformation","INCOMPLETE continue to next morning");
                        }
            }
    ),
    returner: new undum.SimpleSituation(
            "",
            {
                heading: "Ask for nothing",
                tags: ["choice"],
                displayOrder: 5,
                enter:
                        function (character, system, from) {
                            parer("There is so much more to come in the future......");
                           oper(system,"transformation","INCOMPLETE continue to next morning");
                        }
            }
    ),
    
    /////////////////////////////////////////////////////////////////////
    //						 LOCATIONS                                   //
    /////////////////////////////////////////////////////////////////////
    places: new undum.SimpleSituation(
            "<h1><p class=transient>Choose a location</p><h1>",
            {
               
                displayOrder: 4,
                choices: "#place",
                 exit: function (character, system, from) {
                    if (character.qualities.day==1&&character.qualities.timeofday<1){
                        
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                    }
                },
                enter: function (character, system, from) {
                    gfrom = from;
                    
                 if (wtf==true){
                     wtf=false;
                 parer("Jumping back down here is kinda wonky expect some weirdness in the stats for a bit");
                 system.setQuality("timeofday", 0);
                     system.setQuality("day", 1);
                     system.setQuality("essence", 10);
                      system.setQuality("tfstatus", 0);
                     
                      
                    }  
                }
            }
    ),
    mall: new undum.SimpleSituation(
            "",
            {
                heading: "Mall",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                               parer("Ariving at the mall you see the usual crowd of people wandering about store to store. The mall itself is set up with 3 tiers each connected to the last by a wide ramp and stairs\
                              , convinently each tier has similar stores clustered together. However it seems most of the stores are currently closed due to some event called 'pre alpha' or something");

                                /// LATER ON THIS will be more efficient to use a for loop with a -1 to length to determine the end point for "and"
                                var derp = whoer(startlocations.mallnpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                }
                                ;

                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
    office: new undum.SimpleSituation(
            "",
            {
                heading: "Office",
                tags: ["place2"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                                parer("");
                                var derp = whoer(startlocations.officenpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                }
                                ;
                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
    adult: new undum.SimpleSituation(
            "",
            {
                heading: "Adult Novelties",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                                parer("The store is a bit quiet and out of the way, anyone you see inside is often slighty embarrassed to be there.\
                                Along the walls are numerous fetish supplies and media. The middle of the area is dominated by clothing racks with all sorts of costumes and outfits.\
                                In the back there are two rooms with the more... sexual toys. One with dildos, vibrators, and anal beads. While the other has far more exotic items like chastity belts, sounding\
                                devices and even Estim<p> A staircase leading up a floor contains private rooms for 'changing clothes', however some have holes in the walls and 1 hour time limits");
                                var derp = whoer(adultnpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                };

                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
    park: new undum.SimpleSituation(
            "",
            {
                heading: "Park",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                                parer("Sounds of animals and rustling leaves dominates the area as you enter the park. There are a few trails here and there and a general picknick table area\
                                . Often students at the nearby college will come here to study when the weather permits.");
                                var derp = whoer(startlocations.parknpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                }
                                ;

                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
    post: new undum.SimpleSituation(
            "",
            {
                heading: "Post Office",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                                parer("Along the walls are numerous PO boxes and kiosks for sending more complicated packages. The main desk is headed by a rather bored looking receptionist.\
                                There is a shipping and receiving department in the back and a number of offices in the upper floors.");
                                var derp = whoer(startlocations.postnpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                }
                                ;

                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
    gym: new undum.SimpleSituation(
            "",
            {
                heading: "Gym",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            if (character.sandbox.limits.cansee) {
                                parer("The gym's general area is filled with some basic equipment for keeping in shape, as usual there are several people here that are in desperate need of that.\
                                The really good equipment is in the back however and that requires a membership. A  small food court is off to the side in a connected building, however they specialize in 'healthy'\
                                options only. Still it's a nice place to sit at and get a decent healthy meal even if you don't intend to work out.");
                                var derp = whoer(startlocations.gymnpc);
                                if (derp != undefined) {
                                    system.write("<p>Also here you see " + derp + "</p>");
                                }
                                ;

                                ;
                                system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
                            } else {
                                //for use later with being unable to see due to pants or TF


                            }
                        }
            }
    ),
     home: new undum.SimpleSituation(
            "",
            {
                canView:true,
                heading: "Your house",
                tags: ["place"],
                displayOrder: 4,
                enter:
                        function (character, system, from) {
                            parer("You head home and do an errand or two on the way, it is nearly dark before you get back.");
                            oper(system,"artifact/experiment","Give the artifact another look.");
                             system.setQuality("timeofday", character.qualities.timeofday + 1);
                        }
            }
    ),
    ////////////////////////////////////////////////////////////////////
    // PROTOTYPE EVENT HANDLER                                   //
    /////////////////////////////////////////////////////////////////////

/// BEHOLD MORTAL, THE MEIGHTY EVENTHANDLER! 
//NO MORTAL I DID NOT MISPELL MIGHTY! FOR THIS THE MEIGHTY EVENTHANDLER!
// I DO NOT CARE IF IT IS JUST MORE SITUATIONS, I CAN CALL A GROUP OF SITUATIONS ANYTHING I WANT
eventbasic: new undum.SimpleSituation(
            "", {
                //heading:"Inside a sheath"
                enter: function (character, system, from) {
                    
                    
                }, //enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                         //time is NOW AFTERNOON
                        // all three here. head sticking out sheath OR bret carrying you in harness
                        parer("");
                     
                        oper(system,"");
                    } //function close
                   }//actions close
            }//options close
    ),
    eventhospital: new undum.SimpleSituation(
            "", {
                //heading:"",
                enter: function (character, system, from) {
                    
                    
                }, //enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                         //time is NOW AFTERNOON
                        // all three here. head sticking out sheath OR bret carrying you in harness
                        parer("");
                     
                        oper(system,"");
                    } //function close
                   }//actions close
            }//options close
    ),
    
    
    //MEIGHTY EVENT HANDLER CLOSE




    //        /////////////////////////////////////////////////////////////////////
    //                     NPCs                                      //
    /////////////////////////////////////////////////////////////////////
    mark: new undum.SimpleSituation("",
            {
                heading: '<table class=stickish border="1" style="width:100%"><tr>\
                                            <td><a href=./desc class=stickish>Mark</a></td>\
                                            </tr>',
                //tags: ["place"],
                displayOrder: 5,
                enter: function (character, system, from) {
                    gfrom = from;
                    parer("Mark is an vulpine and decent friend you have known for a long time. Always willing to offer you a hand when you have\
				needed it. Often he has made slight passes at you jokingly, you are certain he is bi.");
                },
                actions: {
                    "desc": "<p>Mark is a vulpine and decent friend you have known for a long time. Always willing to offer you a hand when you have\
				needed it. Often he has made slight passes at you jokingly, you are certain he is bi.</p>",
                    "talkto": function (character, system, action) {
                        transer();
                        if (character.qualities.day == 0) {
                      parer("<p>He waves you over and strikes up a conversation. You remember the letter and decide to\
								skip mentioning the artifact for now.</p>");
                            system.write(backto(gfrom));
                        } else if (character.sandbox.marktalkedto) {
                            parer('<p>Oh you are back, any interest in taking my offer yet? From the looks of it that..."heat" isn\'t\
								going away by itself" he says with a smirk</p>\
								<p>\
                                                <table class=transient border="1" style="width:100%"><tr>\
                                                <td><a href=./decline class=transient> assure him you will be fine </a></td>\
                                                <td><a href=./submit class=transient> Give in and accept his help </a></td>\
                                                </tr></p>');
                        } else if (character.qualities.day == 1) {
                            parer('<p>"Hey there ' + character.sandbox.fname + ' How.."</p><p>\
                                                he starts to say but gets a concerned look on his face. "Err... are you doing alright? \
                                                " he asks apparently picking up on the distress you are having.</p>\
                                                <p class=once><table class=transient border="1" style="width:100%"><tr><td><a href=./seduce class=transient> Explain the problem truthfully </a>\
                                                </td><td><a href=./lie class=transient> Blame an accidental aphrodesiac </a></td>\
                                                <td><a href=./avoid class=transient> Tell him its nothing </a></td></tr></p>\
                                                <p></p>');
                        }

                        /*STRUCTURE
                         Seduce
                         *submit
                         *decline
                         Lie
                         submit
                         decline
                         avoid	 
                         
                         */
                        //system.write (backto(gfrom));
                        //  system.setQuality("skill", character.qualities.skill+1);
                    },
                    "seduce": function (character, system, action) {
                        transer();
                        parer('<p>You tell him that you received something weird in the mail and you\
                                                really can\'t talk about it much. Though you do mention it is causing you to be horny as hell!\
                                                and its driving you crazy</p><p> He seems concerned but interested "Humm, anything I can do to help? You look on the verge of jumping\
                                                someone\s tail!" He says with a snicker</p>\
                                                <p class=once><table class=transient border="1" style="width:100%"><tr><td><a href=mark/submit class=transient> Accept his offer </a>\
                                </td><td><a href=./decline class=transient> Decline his offer </a></td>\
                                </tr></p>');
                        character.sandbox.markknows = true;
                    },
                    "lie": function (character, system, action) {
                        transer();
                       parer('<p>You tell him that you might have accidentally injested some weird\
                                                            aphrodesiac and its driving you crazy. He can\'t help but laugh at your plight more than willing\
                                                            to give you some friendly teasing.</p> <p> "All hot under the collar and no way to relieve yourself? Whatever it is must be damn strong\
                                                            you look needier than a vixen in heat!" He laughs giving you a grin</p>\
                                                            <p>"So... you coming to me for some.... help?" he asks giving a suggestive flick of his tail</p>\
                                                            <p class=transient><table class=transient border="1" style="width:100%"><tr><td><a href=./submit class=transient> Reluctantly accept his offer </a>\
                                            </td><td><a href=./decline class=transient> Turn down his offer </a></td>\
                                            </tr></p>\
										');
                        character.sandbox.markknows = false;
                    },
                    "submit": function (character, system, action) {
                        transer();
                        parer("You give him a nod and tell him you really need something to make this feeling go away\
                                            and any 'help' he could provide would be really nice!</p><p>\"Hehe alright then, I will head to your place in an hour\
                                            </p><p><a href=firstmerge class=transient> Thank him and return home</a>");
                        
                        character.sandbox.host = character.sandbox.mark;
                 
                        character.sandbox.currenthostparse = character.sandbox.markparse;
                    },
                    "decline": function (character, system, action) {
                        transer();
                        parer("<p>You explain that you really don't want to deal with it right now and are just going to hope\
                                            it goes away on its own. He seems disappointed but nods</p><p>\"Well maybe someday I will find a way under your tail.\" he says with a laugh\
                                            . The conversation shifts to other topics from there but that nagging need just doesn't go away.</p>");
                        system.write(backto(gfrom));
                        system.setQuality("timeofday", character.qualities.timeofday + 1);
                        character.sandbox.marktalkedto = true;
                    },
                    "avoid": function (character, system, action) {
                        parer("<p>You pass it off as nothing and try to change the subject. He seems suspicious but accepts it as\
			your private business and doesn't pry further</p>");
                        system.write(backto(gfrom));
                    }
                },
                exit: function (character, system, to) {

                    system.write(backto(gfrom));
                }
            }
    ),
    bret: new undum.SimpleSituation("",
            {
                heading: '<table class=stickish border="1" style="width:100%"><tr>\
                            <td><a href=./desc class=stickish>Bret</a></td>\
                            </tr>',
                //tags: ["place"],
                displayOrder: 5,
                enter: function (character, system, from) {
                    gfrom = from;
                    parer("This wolftaur works as a postman, you have seen him around once or twice before. He is REALLY good looking, even straight guys would say so.\
                                     He also was the one that brought you the package that contained the artifact. You still have his number written on a card in your pocket. He did offer to\
                                     'help' you with any package problems. Though you might be feeling it for a few days if he ends up on top.");
                    
                },
                actions: {
                    "desc": "<p>This wolftaur works as a postman, you have seen him around once or twice before. He is REALLY good looking, even a straight guys would say so.\
                                     He also was the one that brought you the package that contained the artifact. You still have his number written on a card in your pocket. He did offer to\
                                     'help' you with any package problems. Though you might be feeling it for a few days if he ends up on top.</p>",
                    "talkto": function (character, system, action) {

                        if (character.qualities.day == 0) {
                            transer();
                            parer("You approach the front desk of the post office and see Bret checking a list of items and confirming them with the receptionist. The receptionist nods about something\
                                    and heads into the back.</p><p>Walking up to bret he gives you smile \"She should be right back to help you soon.\" he says and then looks back at you for a moment\
                                    \"Wait... You are the guy with that crazy heavy box.... You look different with more clothes on\" he says with a chuckle.");
                            oper(system, "./smalltalk", "Strike up a conversation");
                        } else if (character.sandbox.brettalkedto) {
                            //DECLINED offer once already but are back.
                            parer("Bret looks up from what he was doing and gets a big grin seeing you again. \"Anything I can do for you? Maybe willing to take me up on that offer?\"\
                                        he asks, his tail wagging behind his taur end giving away his hopeful excitement");
                            oper(system, "./flirtfin", "Blush and admit you might be interested", gfrom, "Decline and head back out");

                        } else {
                            //day 1 and not talkedtoo yet
                            parer("You approach the front desk of the post office and see bret checking a list of items and confirming them with the receptionist. Waiting for a break in\
                                        their conversation you can't help but wince as your ass clenches needily. The receptionist nods about something\
                                        and heads into the back.</p><p>Walking up to Bret he gives you smile \"She should be right back to help you soon.\" he says and then squints at you\
                                        \"Wait... You are the guy with that crazy heavy box.... You look different with more clothes on\" he says with a chuckle.");
                            oper(system, "./smalltalk", "Strike up a conversation", "./flirt", "Apologize for that morning but in a flirty way");

                        }
                    },
                    //system.write (backto(gfrom));
                    //  system.setQuality("skill", character.qualities.skill+1);
                    "flirt": function (character, system, action) {
                        transer();
                        parer("You embarrassingly apologize for that mornings unintended erection but mention that it was possibly because of him it didn't go away.\
                                Its a bit forced but the best you can do without getting on your knees and begging.</p><p>\
                                Thankfully it gets a hearty laugh out of him.\"Hah, I may need to deliver mail to your door more often.\
                                You know I might have some problems with my own.. package that could really use your help.\" he says with a predatory grin just as the lady returns.");
                        oper(system, "./flirtfin", "Offer him help with his 'package'", "./smalltalk", "Tell him you will keep that in mind but maybe later.");

                    },
                    "flirtfin": function (character, system, action) {
                        transer();
                        parer("\"Just flip that red flag on the side of your mailbox\
                                when it's empty. I will make sure to save your stop for the last in case it requires... overnight priority.\" he says clearly turning to the side\
                                displaying the bulge between his rear legs. Each word almost feels like it needs bad porno music behind it, meanwhile the receptionist just rolls her eyes\
                                apparently having seen this before");
                        oper(system, "firstmerge", "Thank him and return home making sure to flip the mail flag on the way in.");
                        character.sandbox.brettalkedto = true;
                        character.sandbox.host = character.sandbox.bret;
                        character.sandbox.currenthostparse = character.sandbox.bretparse;


                    },
                    "smalltalk": function (character, system, action) {
                        transer();
                        parer("You and he talk for a bit longer but its clear that he needs to get back to work. As you are heading back out he gives you a parting grin\
                                 \"We normally can't let anyone in the mail truck. If you ever need a nice hard.. 'ride' give me a hollar.\
                         I might be able to 'stretch' the rules a bit\" he says as you leave");
                        character.sandbox.brettalkedto = true;
                        system.write(backto(gfrom));
                    }
                }
            }
    ),
    keagen: new undum.SimpleSituation("",
            {
                heading: '<table class=stickish border="1" style="width:100%"><tr>\
                                    <td><a href=./desc class=stickish>Keagen</a></td>\
                                    </tr>',
                //tags: ["place"],
                displayOrder: 5,
                enter: function (character, system, from) {
                    gfrom = from;
                    parer("Keagen is a kangaroo that you happen to know from college, good looking but a bit reckless. His major is some kind of theoretical arcana thing, you have heard its a pretty\
                                 limited field with no real applications. Kind of along the same lines of quantum physics. Sure its prestigious but few and far between practical uses\
                                 other than teaching, research or theoreticals.");
                },
                actions: {
                    "desc": "<p>Keagen is a kangaroo that you happen to know from college, good looking but a bit reckless. His major is some kind of theoretical arcana thing, you have heard its a pretty\
                                 limited field with no real applications. Kind of along the same lines of quantum physics. Sure its prestigious but few and far between practical uses\
                                 other than teaching, research or theoreticals.</p>",
                    "talkto": function (character, system, action) {

                        if (character.qualities.day == 0) {
                            transer();
                            parer("You see keagen off in a secluded area reading a textbook he seems to be waiting for something. You know he is in that weird arcane class, and he might be able to shed some light on\
                                        that letter your uncle sent. But your uncle also said to keep it quiet.... You walk up to him and ask him how things are going.</p><p>\
                                        He smiles \"Oh hey umm... its player right?\" he asks.");
                            oper(system, "./smalltalk", "Nod and ask about his studies");
                        } else if (character.sandbox.keagentalkedto) {
                            //DECLINED offer once already but are back.
                            if (character.sandbox.keagenyes) {
                                parer("You find the Kangaroo again and he is still busy with his books. He sees you approach and grins \"Don't worry about me, if this book turns out to be as worthless as it has so far\
                                            I am considering giving it to one of the physics students to do something horrible to it.\"he says only half joking about that.");
                                oper(system, "./achance", "Mention you have a way he could learn firstand", gfrom, "Let him get back to his book and head out");
                            } else {
                                parer("Keagen's eyes light up when he sees you. \"Any chance you might reconsider? You know I would do anything for a\
                                            chance working with a real arcane focus. How about a blowjob every morning?\" asks only half joking\
                                            You can only imagine what it must be like to spend all your time learning about something knowing you might never actually see it for years");
                                oper(system, "./rootime", "Offer to show it to him in an hour or two", gfrom, "Decline again and head back");
                            }

                        } else {
                            //day 1 and not talkedtoo yet
                            parer("You see keagen off in a secluded area reading a textbook he seems to be waiting for something. You know he is in that weird arcane class, and he might be able to shed some light on\
                                        that letter your uncle sent! Right now he might be able to help solve BOTH of your issues, that is if you could convince him</p><p>\
                                        He smiles \"Oh hey umm... its player right?\" he asks");
                            oper(system, "./via", "Nod and ask him about his studies");

                        }
                    },
                    //system.write (backto(gfrom));
                    //  system.setQuality("skill", character.qualities.skill+1);
                    "via": function (character, system, action) {
                        transer();
                        parer("He sighs and takes the book in front of him and dangles it like a gross napkin\"It would be going much better\
                                             if these damn books spent as much time covering magic as it did safety! I should have gone into the physics class... at least they get to talk about smashing\
                                          stuff together in an accelerator.\" he grumbles at the book.");

                        oper(system, "./achance", "Mention you have a way he could learn firsthand", gfrom, "Let him get back to his book and head out");

                    },
                    "achance": function (character, system, action) {
                        transer();
                        parer("He seems rather skeptical, but it looks like you could ask for help with taxes and he would still say yes to get away from his book.\
                                \"Oh really?\" he asks looking at you funny but soon realizes your mean it. \"Wait, your not joking are you?\"</p><p>\
                                You nod and tell him about the second letter and that a strange object came with it. \"Show me! I have to see this!\"");
                        oper(system, "./rootime", "Offer to show it to him in an hour or two", "./shutout", "Say you were just looking for a quick second opinion");
                        character.sandbox.brettalkedto = true;



                    },
                    "rootime": function (character, system, action) {
                        transer();
                        parer("He bounces out of his seat, which for a roo is rather impressive, he practically lands on you with a hug! \"DUDE! You have no idea how much this means to me!\
                                Just so you know it's probably a fake... but its still worth it to find out!\" He hugs tighter making you shiver as his sheath brushes against you through his pants.\
                                         \"OH I need to get my tools from the college, just in case it is the real deal!\"He says finally letting go of you.");
                        oper(system, "keagenhost/home", "Tell him your address and to meet you there in an hour");
                       
                        character.sandbox.host = character.sandbox.keagen;
                        character.sandbox.currenthostparse = character.sandbox.keagenparse;
                    },
                    "shutout": function (character, system, action) {
                        transer();

                        parer("You shake your head and apologies for getting his hopes up, but its not something you can really go showing people\"I guess I understand... but REALLY\
                                I would move all the moon in the heavens to see that thing! I would even blow you to see it! You ever change your mind let me know ok?\" he says still practically begging as you head off");
                        oper(system, gfrom, "Tell him you will keep him in mind and head out.");
                        character.sandbox.keagentalkedto = true;
                        character.sandbox.keagenyes = true;

                    },
                    "smalltalk": function (character, system, action) {
                        transer();
                        parer("He sighs and takes the book in front of him and dangles it like a gross napkin\"It would be going much better\
                     if these damn books spent as much time covering magic as it did safety! I should have gone into the physics class... at least they get to talk about smashing\
                         stuff together in an accelerator.\" he grumbles at the book. You and he chat for a bit longer but you never end up mentioning the artifact.");

                        character.sandbox.keagentalkedto = true;
                        system.write(backto(gfrom));
                    }
                }
            }
    ),
    /////////////////////////////////////////////////////////////////////
    //	    TUTORIAL                                    //
    /////////////////////////////////////////////////////////////////////

    qualities: new undum.SimpleSituation(
            "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
            {
                heading: "Qualities and the Character",
                tags: ["topic"],
                displayOrder: 4,
                actions: {
                    "skill-boost": function (character, system, action) {
                        system.setQuality("skill", character.qualities.skill + 1);
                    }
                },
                exit: function (character, system, to) {
                    system.setQuality("stamina", character.qualities.stamina + 1);
                }
            }
    ),
     INCOMPLETE: new undum.SimpleSituation(
            "", {
                //heading:"",
                enter: function (character, system, from) {
                    parer("CURRENTLY INCOMPLETE but you did find out how to trasform back!\
                    in the future this will open the possibility to choose a new host with far more characters to choose from.");
                    
                }, //enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();
                        
                        parer("");
                     
                        oper(system,"");
                    } //function close
                   }//actions close
            }//options close
    ),
    "character-text": new undum.SimpleSituation(
            "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
            {
                exit: function (character, system, to) {
                    system.setCharacterText(
                            "<p>We're nearing the end of the road.</p>"
                            );
                }
            }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */


/////////////////////////////////////////////////////////////////////
//	  SANDBOX INIT                             //
/////////////////////////////////////////////////////////////////////



/*
 BarQuality: new undum.QualityDefinition('<div class="progress_bar">\
 <span class="name" data-attr="name">Quality Name</span>\
 <span class="value" data-attr="value">24</span>\
 <div class="progress_bar_track">\
 <div class="progress_bar_color" data-attr="width" style="width:24%">\
 </div>\
 </div>\
 <span class="left_label" data-attr="left_label">Left Label</span>\
 <span class="right_label" data-attr="right_label">Right Label</span>\
 </div>');
 BarQuality.inherits(QualityDefinition);
 */
undum.game.qualities = {
    /*
     energybar: new undum.BarQuality('<div class="progress_bar">\
     <span class="name" data-attr="name">Quality Name</span>\
     <span class="value" data-attr="value">24</span>\
     <div class="progress_bar_track">\
     <div class="progress_bar_color" data-attr="width" style="width:24%">\
     </div>\
     </div>\
     <span class="left_label" data-attr="left_label">Left Label</span>\
     <span class="right_label" data-attr="right_label">Right Label</span>\
     </div>'),
     */
    // energy: new undum.IntegerQuality(
    //     "<div class=progress_bar>energy</div>", {priority:"01", group:'stats'}
    //),
    essence: new undum.IntegerQuality(
            "Essence", {priority: "0001", group: 'stats'}
    ),
    currency: new undum.NumericQuality(
            "Currency $", {priority: "0002", group: 'stats'}
    ),
    // fname: new undum.WordScaleQuality(
    //   "Name","David", {group:'stats'}
//				),
    luck: new undum.FudgeAdjectivesQuality(// Fudge as in the FUDGE RPG
            "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks.).'>Luck</span>",
            {priority: "0003", group: 'stats'}
    ),
    timeofday: new undum.WordScaleQuality(
            "Time", ["Morning", "Noon", "Afternoon", "Evening"], {priority: "1", group: 'tod'}
    ),
    day: new undum.IntegerQuality(
            "Day", {priority: "0001", group: 'tod'}),
    tfstatus: new undum.WordScaleQuality(
            "TF percent", ["", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"], {priority: "00001", group: 'tfstate'}
            //                     0    1          2          3         4         5         6          7        8           9       10          11      12      13         14       15       16        17
    ),
    inspiration: new undum.NonZeroIntegerQuality(
            "Inspiration", {priority: "0001", group: 'progress'}
    ),
    harmony: new undum.NonZeroIntegerQuality(
            "Harmony", {priority: "0001", group: 'progress'}
    ),
    novice: new undum.OnOffQuality(
            "Novice", {priority: "0002", group: 'progress', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority: "0001"}),
    progress: new undum.QualityGroup('progress', {priority: "0002"}),
    tfstate: new undum.QualityGroup('Transformation', {priority: "01"}),
    tod: new undum.QualityGroup('Day', {priority: "0000001"})
    
};


//end of sandbox variables

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
       startlocations = {
        mallnpc: [],
        parknpc: [],
        postnpc: ["<a class=transient href=bret/talkto> Bret </a>"],
        gymnpc: []};
    adultnpc = [];
 character.sandbox = {
    fname: "David",
    tfup:false,
          tfed:false,
        mark: {host: "mark", libido: 1, sleepy: 0,harmony:[5.5,7.5,9.5,80], mem:[] },
    markparse: {host: "Mark", sheath: "sheath",dayjob:"work"},
    marktalkedto: false,
    bret: {host: "bret", libido: 2, sleepy: -2,harmony:[5.5,9.5,5.5,15], mem:[]},
    bretparse: {host: "Bret", sheath: "sheath", dayjob:"work"},
    brettalkedto: false,
    bretdom:false,
    keagen: {host: "keagen", libido: -2, sleepy: 2, harmony:[9.5,7.5,5.5,40], mem:[]},
    keagenparse: {host: "Keagen", sheath: "sheath",dayjob:"class"},
    keagentalkedto: false,
    gooutcount: 0,
    hasbook: false,
    limits: {goout: true, cantalk: true, hasarms:true, insheath: 0, cansee:true},
    abilities: {shrink: false , command:false, think:false},
    currenthostparse: {},
    tracker:[],
    ws: true,
    host: {
        host: "",
        libido: 0, //-5 to +5
        sleepy: 0// -5 to +5
    }

};
wtf=false;
    function say(str) {
   
        var res = str;
        var person = character.sandbox.currenthostparse;
        var x;
        var arrarer = ["host", "sheath","dayjob"];
        var pos = 0;
           res = res.replace(new RegExp("#alt", 'g'), alt);

        if (alt2!=""){
            res = res.replace(/\[.*?\]\s?/, alt2);
        }
        
        
        for (x in person) {
            
            
        
            res = res.replace(new RegExp(arrarer[pos], 'g'), person[x]);
//console.log("testing "+person[x]+" to replace "+arrarer[pos]); 
            pos++;
        }
        ;
        res = res.replace(new RegExp("player", 'g'), character.sandbox.fname);
        
        
        system.write("<p><br></p><p>" + res + "</p>");
         
  
    }
    ;
    npcloc:[];
    parer = say.bind(system);

//WHAT THE HECK IS THIS! oh its.... complicated.
 function whoknowswhat (information, inorout) {
if (inorout){
character.sandbox.host.mem.push(information);
} else {
var test=character.sandbox.host.mem.some(function(info){return info==information;});
return test;
}
};


knower=whoknowswhat.bind(system);

 function whoknowswhat2 (information, inorout) {
if (inorout){
character.sandbox.tracker.push(information);
} else {
var test=character.sandbox.tracker.some(function(info){return info==information;});
return test;
}
};
tracker=whoknowswhat.bind(system);
function rnd2() {
            //var x = Math.floor((Math.random() * 10) + 1);
    
    var x = system.rnd.randomInt(1,10);
    return x;
}
        ;
rnd=rnd2.bind(system);
    npcloc = ["<a class=transient href=mark/talkto> Mark </a>", "<a class=transient href=keagen/talkto> Keagen </a>"];
/////////////////////// THIS TOOK SOOO LONG TO FIGURE OUT!!!! and I realized I had to search for a "variable variable". 
//WHAT.... Turns out I just had to objectify a string... WAIT WAHT Does that even MEAN!!!!
//// AND NONE of it worked! 


    //and three lines of code solved it.
    var x2;
    for (x2 in npcloc) {
        rndprop(startlocations).push(npcloc[x2]);
    }
    ;

    /*behold the ultimate derp solution that really didn't work.
     var derp=this[character.sandgox.startlocations[0]];
     console.log("umm initactivated "+derp[0]);
     derp.push(npcloc[0]);
     console.log ("Aright maybe this doesn't work"+derp[0]);
     console.log ("Aright maybe this doesn't work"+character.sandbox.mallnpc[0]);
     console.log ("Aright maybe this doesn't work"+character.sandbox.gymnpc[0]);
     console.log ("Aright maybe this doesn't work"+character.sandbox.parknpc[0]);
     //and now all I can do is sit back AND WONDER how,why,if this will work.
     //I will rebuild this later.*/


    character.qualities.day = 0;
    character.qualities.tfstatus = 0;
    character.qualities.timeofday = 0;
    character.qualities.essence = 0;
    character.qualities.currency = 12;
    //character.qualities.luck = 0;
    //character.qualities.energy = 1;
    //character.qualities.novice = 1;
    character.qualities.harmony = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");

};
/*
 <div class="progress_bar">
 <span class="name" data-attr="name">Quality Name</span>
 <span class="value" data-attr="value">24</span>
 <div class="progress_bar_track">
 <div class="progress_bar_color" data-attr="width" style="width:24%">
 </div>
 </div>
 <span class="left_label" data-attr="left_label">Left Label</span>
 <span class="right_label" data-attr="right_label">Right Label</span>
 </div>
 */


function backto(from) {
    var htback = "<p class=transient><a href=" + from + "> Finish and head back. </a>";
    return htback;
}
;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
;
function transer() {
    spark=false;
    $('#content a').each(function (index, element) {
        var a = $(element);
        if (a.hasClass('stickish') || a.attr("href").match(/[?&]sticky[=&]?/))
            return;
        a.replaceWith($("<span>").addClass("ex_link").html(a.html()));
    });
    var contentToHide = $('#content .transient, #content ul.options');
    contentToHide.add($("#content a").filter(function () {
        return $(this).attr("href").match(/[?&]transient[=&]?/);
    }));
    var interactive = true;
    if (interactive) {
        var mobile = function () {
            return (navigator.userAgent.toLowerCase().search(
                    /iphone|ipad|palm|blackberry|android/
                    ) >= 0 || $("html").width() <= 640);
        };
        if (mobile) {
            contentToHide.fadeOut(2000);
        } else {
            contentToHide.
                    animate({opacity: 0}, 1500).
                    slideUp(500, function () {
                        $(this).remove();
                    });
        }
    } else {
        contentToHide.remove();
    }
}
;
//$(".unstick").css("opacity", ".0"); 

function oper(system, href, text, href2, text2, href3, text3) {

    if (href2 != undefined) {
        var p2 = "<td style='text-align:center;'><a href=" + href2 + " class=transient> " + text2 + " </a></td>";
    } else {
        p2 = "";
    }
    ;
    if (href3 != undefined) {
        var p3 = "<td style='text-align:center;'><a href=" + href3 + " class=transient> " + text3 + " </a></td>";
    } else {
        p3 = "";
    }
    ;
    var lechoices = ("<p class:trasient ><table class='transient unstick' border='1' style='width:100%;opacity:.15'><tr>\
                                        <td style='text-align:center;'><a href=" + href + " class=unstick> " + text + " </a></td>" +
            p2 + p3 + "</tr></p>");

    var swaper = "";
    system.write(lechoices);
    if (fastmode) {
        $(".unstick").delay(200).animate({opacity: "1"}, '4000');
    } else {
        $(".unstick").delay(400).animate({opacity: "1"}, '4000');
    }
    ;
//setTimeout(function(){system.write(lechoices)},3000,system,lechoices);
}

var rndprop = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function strip(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
function whoer (derp){
     var whohere = "";
                            
                            switch (derp.length) {
                                case 1:
                                   var whohere = derp[0];
                                   return whohere;
                                case 2:
                                    whohere = derp[0] + " and " + derp[1];
                                    return whohere;
                                case 3:
                                    whohere = derp[0] + ", " + derp[2] + " and " + derp[1];
                                     return whohere;
                                case 0:
                            }
    
    
}
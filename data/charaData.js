
//=====================//
//===   variables   ===//
//=====================//

var relationshipPosData = [
    { id: "RY", x: 170, y: 50, start: "ryan" },
    { id: "YE", x: 1030, y: 50, start: "yoni" },
    { id: "XY", x: 745, y: 25, start: "yoni" },
    { id: "RL", x: 170, y: 130, start: "lance" },
    { id: "LM", x: 220, y: 630, start: "minerva" },
    { id: "LY", x: 455, y: 130, start: "lance" },
    { id: "LB", x: 455, y: 280, start: "lance" },
    { id: "XB", x: 715, y: 185, start: "xiu" },
    { id: "EX", x: 1102, y: 745, start: "edd" },
    { id: "XE", x: 1015, y: 145, start: "xiu" },
    { id: "XA", x: 945, y: 265, start: "xiu" },
    { id: "RH", x: 180, y: 405, start: "ryan" },
    { id: "LH", x: 315, y: 280, start: "lance" },
    { id: "YB", x: 560, y: 285, start: "yoni" },
    { id: "YA", x: 710, y: 265, start: "yoni" },
    { id: "BE", x: 850, y: 295, start: "blade" },
    { id: "HB", x: 455, y: 405, start: "hannah" },
    { id: "AB", x: 715, y: 405, start: "blade" },
    { id: "AE", x: 1000, y: 435, start: "ellie" },
    { id: "RM", x: 105, y: 670, start: "minerva" },
    { id: "RB", x: 355, y: 520, start: "ryan" },
    { id: "HM", x: 280, y: 560, start: "minerva" },
    { id: "BM", x: 455, y: 480, start: "blade" },
    { id: "EB", x: 570, y: 625, start: "edd" },
    { id: "EA", x: 845, y: 625, start: "edd" },
    { id: "EM", x: 560, y: 745, start: "minerva" },
    { id: "SB", x: 780, y: 530, start: "simon" },
    { id: "SA", x: 975, y: 520, start: "simon" }
]

const charaData = {
    blade: {
        jpname: "ブレイド",
        age: 16,
        color: "rgb(127, 180, 57)",
        photoPos: {
            x: 520,
            y: 335,
            rotation: 4
        }
    },
    axel: {
        jpname: "アクセル",
        age: 15,
        color: "rgb(221, 155, 33)",
        photoPos: {
            x: 770,
            y: 330,
            rotation: -4
        }
    },
    xiu: {
        jpname: "シュウ",
        age: 18,
        color: "rgb(65, 173, 206)",
        photoPos: {
            x: 770,
            y: 80,
            rotation: 3
        }
    },
    yoni: {
        jpname: "ヨニ",
        age: 16,
        color: "rgb(224, 213, 54)",
        photoPos: {
            x: 520,
            y: 75,
            rotation: -4
        }
    },
    hannah: {
        jpname: "ハンナ",
        age: 19,
        color: "rgb(41, 81, 194)",
        photoPos: {
            x: 245,
            y: 320,
            rotation: -2
        }
    },
    lance: {
        jpname: "ランス",
        age: 20,
        color: "rgb(148, 77, 206)",
        photoPos: {
            x: 245,
            y: 80,
            rotation: 0
        }
    },
    ellie: {
        jpname: "エステル（エリ）",
        age: 14,
        color: "rgb(17, 148, 87)",
        photoPos: {
            x: 1005,
            y: 200,
            rotation: 3
        }
    },
    edd: {
        jpname: "エッド",
        age: 18,
        color: "rgb(211, 43, 43)",
        photoPos: {
            x: 630,
            y: 570,
            rotation: -2
        }
    },
    minerva: {
        jpname: "ミネルヴァ",
        age: 18,
        color: "rgb(167, 87, 83)",
        photoPos: {
            x: 360,
            y: 570,
            rotation: 3
        }
    },
    simon: {
        jpname: "サイモン",
        age: 18,
        color: "rgb(216, 40, 163)",
        photoPos: {
            x: 920,
            y: 570,
            rotation: 6
        }
    },
    ryan: {
        jpname: "",
        age: 20,
        color: "rgb(180, 180, 180)",
        photoPos: {
            x: 55,
            y: 200,
            rotation: 5
        }
    }
}

var relationshipData_en = [
    {
        id: "RY",
        chara1: "yoni",
        chara2: "ryan",
        label: "At war",
        desc1: "So badass!!!",
        desc2: "You little shit...",
        descDetail1: "Bro's badass friend!!<br> SO COOL",
        descDetail2: "Die, prick",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "YE",
        label: "Friends",
        chara1: "yoni",
        chara2: "ellie",
        desc1: "*Shoves gummies*",
        desc2: "So funny and weird",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "XY",
        label: "Friends",
        chara1: "yoni",
        chara2: "xiu",
        desc1: "*Shoves gummies*",
        desc2: "A little wary of",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "RL",
        label: "Close Friends",
        chara1: "lance",
        chara2: "ryan",
        desc1: "Get your shit together.",
        desc2: "What shit?",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LM",
        label: "Teammates",
        chara1: "lance",
        chara2: "minerva",
        desc1: "Newbie with potential",
        desc2: "Slightly awkward",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LY",
        label: "Siblings",
        chara1: "yoni",
        chara2: "lance",
        desc1: "*Invades space*",
        desc2: "*Punches*",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LB",
        label: "Mentorship",
        chara1: "lance",
        chara2: "blade",
        desc1: "Cares",
        desc2: "Admires/likes",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "XB",
        label: "Close Friends",
        chara1: "xiu",
        chara2: "blade",
        desc1: "Really likes",
        desc2: "Annoyed by",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EX",
        label: "Co-workers",
        chara1: "xiu",
        chara2: "edd",
        desc1: "Sarcastic",
        desc2: "Tries to impress",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "XE",
        label: "Online Pals",
        chara1: "xiu",
        chara2: "ellie",
        desc1: "Trusts",
        desc2: "Supportive",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "XA",
        label: "Ex Boyfriends",
        chara1: "xiu",
        chara2: "axel",
        desc1: "Hey chill",
        desc2: "Not happy about",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "RH",
        label: "Teammates",
        chara1: "ryan",
        chara2: "hannah",
        desc1: "Follows orders",
        desc2: "A little wary of",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LH",
        label: "Old friends",
        chara1: "lance",
        chara2: "hannah",
        desc1: "Knows well",
        desc2: "Trust",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "YB",
        label: "Childhood<br>Friends",
        chara1: "yoni",
        chara2: "blade",
        desc1: "Love you bro!",
        desc2: "Annoyed by",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "YA",
        label: "Friends",
        chara1: "yoni",
        chara2: "axel",
        desc1: "*Shoves gummies*",
        desc2: "What an oddball",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "BE",
        label: "Friends",
        chara1: "ellie",
        chara2: "blade",
        desc1: "Slight crush",
        desc2: "A bit noisy",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "HB",
        label: "Siblings",
        chara1: "blade",
        chara2: "hannah",
        desc1: "Hates/afraid of",
        desc2: "Hates/torments",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "AB",
        label: "Close Friends",
        chara1: "blade",
        chara2: "axel",
        desc1: "Annoyed by",
        desc2: "Has feelings for",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "AE",
        label: "Siblings",
        chara1: "ellie",
        chara2: "axel",
        desc1: "Nags",
        desc2: "Urgh!",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "RM",
        label: "Teammates",
        chara1: "ryan",
        chara2: "minerva",
        desc1: "Cooperates",
        desc2: "Scary...",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "RB",
        label: "Friends???",
        chara1: "ryan",
        chara2: "blade",
        desc1: "Teases",
        desc2: "Scary...",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "HM",
        label: "Friends",
        chara1: "hannah",
        chara2: "minerva",
        desc1: "Recruits",
        desc2: "Why me?",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "BM",
        label: "Acquaintance",
        chara1: "blade",
        chara2: "minerva",
        desc1: "Respects",
        desc2: "Slightly interested",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EB",
        label: "Friends",
        chara1: "blade",
        chara2: "edd",
        desc1: "Annoyed by",
        desc2: "Wants to be close",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EA",
        label: "Rivals",
        chara1: "axel",
        chara2: "edd",
        desc1: "Dislike",
        desc2: "Displeased",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EM",
        label: "Twins",
        chara1: "minerva",
        chara2: "edd",
        desc1: "Let's train",
        desc2: "Catching up",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "SB",
        label: "Enemies...?",
        chara1: "blade",
        chara2: "simon",
        desc1: "God you're ANNOYING",
        desc2: "One-side rivalry",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "SA",
        label: "Enemies",
        chara1: "axel",
        chara2: "simon",
        desc1: "Fucking Octarian scum!",
        desc2: "Shut up Inkling pest!",
        content: [
            "Under construction..."
        ]
    }
]

var bioData_en = [
    {
        id: "blade",
        name: "Branden “Blade”",
        gender: "Male",
        like: "To be alone",
        dislike: "Self",
        rank: "S+",
        mains: "Splattershot Pro, .96, Carbon",
        traits: [
            "Gloomy, angsty, quiet",
            "Has anxiety issue",
            "Lack of confidence",
            "Tries to act cool",
            "Is actually a sweet boy"
        ],
        outfits: [
            { name: "Regular", url: "profile/blade.png" },
            { name: "Agent 3", url: "profile/blade.png" },
            { name: "Younger", url: "profile/blade.png" }            
        ],
        bio: [
            "He used to refuse playing any turf/ranked and would push away anyone who wants to be friend due to his anxious nature. After being abruptly scouted by Captain Cuttlefish as Agent 3, he received support from captain and the other two agents, it was then he decided to make change and begin the process of healing. Operating as agent 3 has helped him both mentally and physically, he is now able to play competitively. It was around this time he moved out to live on his own.",
            "He then met Axel and other friends and eventually got along since he is now a bit more opened-up to other people, and they decided to form a team called “Bad Buttons” with Blade as leader.",
        ],
        personality:[
            "The constant bullying and abusing from his older sister made him a very gloomy introvert, he often puts up a cool look to cover up the insecure side of him."
        ],
        trivia:[
            "His actual name is Branden, Axel was the one who started calling him \"Blade\", which came from his online handle, and the rest of his friends started doing the same.",            
            "He is a great cook, mostly excels in home style cooking.",
            "His braclet, ear cuff, hair ties and necklace are all gifts from other members of the team."            
        ],
        refsheets: [
            "assets/img/refsheets/blade_v2.png",
        ]
    },
    {
        id: "axel",
        name: "Axel",
        gender: "Male",
        like: "Compete",
        dislike: "Losing or getting mocked",
        rank: "S+",
        mains: "Dualies",
        traits: [
            "Rude, brusque, cocky",
            "Has anger management issue",
            "Aggressive behaviors",
            "Picks fights daily",
            "Cares about his grandma"
        ],
        outfits: [
            { name: "Regular", url: "profile/axel.png" }
        ],
        bio: [
            // "A short-temper and violent boy. He used to hang out with street thugs, but cut ties with them because",
            "He had been trying to form a competitive team with skilled players; however, due to his short-temper and violent nature, they often fell out very quickly, and usually in a pretty bad way.",
            "One day in a random match he met Blade and picked a fight with him, and later realized that Blade could be the teammate he had been looking for. He then chased him through the sewer system in Inkopolis Square where he became Agent 4 just for another chance to meet Blade. He eventually got to meet Blade again and was able to befriend him and formed a team \"Bad Buttons\" like he always wanted to.",
            "Ever since Blade walked into his life, he is shown to have less frequent temper issues."
        ],
        refsheets: [
            "assets/img/refsheets/axel1.png",
        ]
    },
    {
        id: "xiu",
        name: "Xiu",
        gender: "Male",
        like: "Coral collecting",
        dislike: "Losing followers",
        rank: "S+",
        mains: "Sloshing Machine",
        traits: [
            "Dashing, charming, sociable",
            "Social media addict",
            "Craves for attention",
            "Cares about his appearance",
            "Is a train wreck inside"
        ],
        outfits: [
            { name: "Regular", url: "profile/xiu.png" }
        ],
        bio: [
            "Xiu was once a very caring and kindhearted nerd boy. He and Axel go way back; they used to play league matches together all the time and dated for a while. It all changed when Xiu's supposed \"friend\" started bullying him. Unable to handle the harassment, Xiu snapped at some point and resorted to revenge. Although this has made him more confident and brave, it nevertheless brought him more trouble than before, and caused Axel to leave him.",
            "After Axel broke up with him, he stopped playing matches and shifted his focus onto social media. He took great interest in entertainment/performing related activities, which was inspired by influencers he follows online. He then started working at bars to practice his new favorite stunt: flair bartending. He was able to earn a good amount of followers with his charismatic personality and performance, but he also got himself in flames from time to time due to his problematic posts and comments. It is around this time that he damaged his right eye from a dangerous streaming challenge.",
            "At some point, he found out Axel was hanging out with Blade and he took an immediate liking to Blade. The three boys then became good friends and formed Bad Buttons. Xiu also started participating in splat matches again."
        ],
        personality: [
            "He used to be a gentle and kind boy, but his personality undergoes a sudden change after he was tormented by relentless harassment. He has then became a very confident and daring person who believes in an eye for an eye; he would even resorts to extreme means to make things go his way.",
            "Xiu is bisexual, but finds himself hitting on hot guys a lot. He is sexually open and has not much self-restraint when it comes to sex. He tends to fanboy over person he is very attracted to.",
            "He is an extrovert who can blend himself into all kinds of social groups; he is also very good at coming up with dubious party game ideas. He likes big-city and lives with sort of a New Yorker attitude.",
            "He is an attention seeker who really likes to show off; he also loves the idea of being able to entertain others. He would do absolutely anything to be popular and often gets himself into trouble.",
            "He is actually rather weak-minded and is not very good at handling stress when things take a turn for the worse. Would easily lose his mind if no one was around to pull him up. He will do all kind of horrible things imaginable when he goes out of control."
        ],
        trivia: [
            "His right eye was damaged during a dangerous streaming challenge; this caused his right pupil to become a strange # shape. He can still see, but his right eye now gives him a rather blurry vision.",
            "He is still working on his flair bartending skill; he often break glasses while doing so.",
            "His favorite dessert is %tiramisu/Tiramisu% (He stated that he only eats the ones that have rum)"
        ],
        refsheets: [
        ]
    },
    {
        id: "yoni",
        name: "Yoni",
        gender: "Male",
        like: "Happy stuff",
        dislike: "Theft",
        rank: "S+",
        mains: "Hydra, Dynamo Roller",
        traits: [
            "Goofy, happy, bizarre",
            "Is a junkie",
            "Get excited easily",
            "Has destructive strength",
            "Can make lots of money"
        ],
        outfits: [
            { name: "Regular", url: "profile/yoni.png" }
        ],
        bio: [
            "A care-free and cheerful boy, also a bit of a joker who can be pretty naughty sometimes. Speaks and behaves in a comical and silly way. He finds a lot of things funny and will laugh everything off even when the timing is inappropriate.",
            "He loves getting high using...some substance, which is obviously banned in all sports. While wanting to play with Blade as a member of Bad Buttons, he had cut out most of it. However, he wasn't able to fully resist the temptation of such things, so he has been looking for a solution so he can have it both ways",
            "He is not very good at expressing his negative emotion.",
            "Seems to be involved in some shady business."
        ],
        refsheets: [
            "assets/img/refsheets/yoni1.png",
        ]
    },
    {
        id: "hannah",
        name: "Hannah",
        gender: "Female",
        like: "Splat Battles",
        dislike: "Blade",
        rank: "X",
        mains: "N-zap, .52",
        traits: [
            "Vicious, intimidating, hostile",
            "Abusive to her brother",
            "Very mean",
            "Laughs like a maniac",
            "Is actually a great leader"
        ],
        outfits: [
            { name: "Regular", url: "profile/hannah.png" }
        ],
        bio: [
            "Hannah was specially neglected by her mother when she was little, and her mother heavily favored the younger brother Blade over her,  this caused Hannah to hold a strong grudge against Blade. After their mother passed away, the grudge soon turned into abuse.",
            "Splat battle has been an outlet for her anger. As she poured her heart and soul into the games, she became unreasonably good at them. She actively searched for long-term teammates and eventually got Lance, RJ and Minerva to form an elite team.",
            "She was actually Captain Cuttlefish's the first candidate for Agent 3, but she quitted in order to focus on competitive games, which ultimately made Blade the next Agent 3. Now she only goes back to help when it's absolutely necessary.",
            "She is aware of her flaws and had thought of fixing the relationship with Blade, but gave up after failing to make any attempt, stating \"It's too late now\"."
        ]
    },
    {
        id: "lance",
        name: "Lance",
        gender: "Male",
        like: "Pop rocks candy",
        dislike: "Sudden change in plan",
        rank: "X",
        mains: "Blasters & Nozzlenose",
        traits: [
            "Level-headed, righteous",
            "OCPD, a bit of a neat freak",
            "A reliable brotherly figure",
            "Also has destructive strength",
            "Is a good listener"
        ],
        outfits: [
            { name: "Regular", url: "profile/lance.png" }
        ],
        bio: [
            "Yoni's older brother, he is a childhood friend to both Hannah and Blade. He may look and act intimidating, but he is a very reliable, supportive and caring person. He is also a very organized perfectionist with high standards, he also has incredibly (and sometimes unnecessarily) sharp attention to details. He occasionally bursts out life advice with that poker face of his.",
            "He was the first member Hannah recruited in Royal Flush, he deals with things Hannah doesn't know how to do or had trouble with.",
            "He tries his best to live with his OCPD and is always seen wearing a pair of black gloves. Pop rocks inspired him to pick up Blaster when he was young, now he must eat a pack of pop rocks every morning."
        ]
    },
    {
        id: "ellie",
        name: "Estelle \"Ellie\"",
        gender: "Female",
        like: "Gossips",
        dislike: "Selfish people",
        rank: "A+",
        mains: "Splash-o-matic",
        traits: [
            "Outgoing, humorous",
            "Is a SJW",
            "Engages in online shaming",
            "Loves to chitchat",
            "Is actually very empathetic"

        ],
        outfits: [
            { name: "Regular", url: "profile/ellie.png" }
        ],
        bio: [
            "Axel\'s younger sister,  a typical happy teenage girl. She is friendly and nice but rather immature, her sense of justice is so strong that she would actively seek out questionable people online to harass and \"cancel\".",
            "Initially, socializing was about the only thing she cared about, but seeing Axel hanging out with his teammates all the time, she started developing interest in splat battle under their influence. She got along with all the members of Bad Buttons. At some point she found out that Axel has been doing hero stuff and she eventually got involved, she helps out with the Agent 4 tasks on many occasions.",
            "She is one of the mods of a community that specializes in harassment and doxxing, but she decided to cut down any related activities after her crush Blade questions the morality of their actions."
        ]
    },
    {
        id: "edd",
        name: "Edd",
        gender: "Male",
        like: "Compliment",
        dislike: "Dark places",
        rank: "S+",
        mains: "Octo brushes",
        traits: [
            "Stoic, aloof, curious",
            "Rather cunning",
            "Talks in a distant/dreamy way",
            "Daydreams about...stuff",
            "Horny af"
        ],
        outfits: [
            { name: "Regular", url: "profile/edd.png" }
        ],
        bio: [
            "Minerva's twin brother who was also born underground; however, unlike Minerva, he did not like the life and treatment he had as an Octarian. ",
            "After hearing Squid Sisters' song on that fateful day, he started planning for escape, using any means he could; however, before anything can be done, he got caught in the whole Deepsea Metro shenanigans, though the whole thing did manage to give him a chance to leave at the end. During this ordeal he met Blade who was operating as Agent 3 at the time and took a great liking to him, after the befriended Blade, Edd became the fifth member of Bad Buttons.",
            "He managed to graduate from a hacking boot camp when he was still in Octarian army, so he knows his way around cyber security shenanigans."
        ]
    },
    {
        id: "minerva",
        name: "Minerva",
        gender: "Female",
        like: "Underground life",
        dislike: "Bright place",
        rank: "X",
        mains: "Octoshot",
        traits: [
            "Loyal, honest",
            "Stockholm Syndrome?",
            "Workholic",
            "Enters \"flow state\" often",
            "Just a law-abiding normal girl"
        ],
        outfits: [
            { name: "Regular", url: "profile/minerva.png" }
        ],
        bio: [
            "She was raised in the Octarian army since she was very little. She hated the training regimen at first, but eventually she grew attached to the army deeply. She was shown to have no intention to leave even after hearing Squid Sister's Calamari Inkantation on that fateful day. She even began to loathe the so-called \"surface world\" that suddenly came into their life.",
            "One day she encountered Hannah who was operating as Agent 3 at the time; after engaging in battle, Hannah was committed to recruit Minerva into her team and wanted to bring her to the surface after witnessing Minerva's battle skills, but Minerva rejected as she never wanted to leave the Octarian army. After multiple encounters and battles with Hannah, Minerva eventually (and reluctantly) agreed to go with her. She is now a member of Royal Flush, she is still trying to get used to the surface life."
        ]
    },
    {
        id: "simon",
        name: "Simon",
        gender: "Male",
        like: "DJ Octavio, robotic stuff",
        dislike: "Heroes",
        rank: "???",
        mains: "???",
        traits: [
            "Arrogant, ambitious",
            "Delusional",
            "DJ Octavio's biggest fanboy",
            "Just your typical villian",
            "Always fails miserably"
        ],
        outfits: [
            { name: "Regular", url: "profile/simon.png" }
        ],
        bio: [
            "A member of the Octorian underground army. He is obsessed with DJ Octavio. A self-proclaimed \"DJ Octavio\'s greatest assistant\" and \"Evil genius Octorian engineer\" or some such. He seems to be extremely skilled and efficient when it comes to tech stuff, which includes programming AI, building robotics or even hacking.",
            "He was initially a shut-in who only stays in his lab, one day he was out on Octo Valley to inspect damages on some of the gadget he made, that was when he found out about Blade (who had just started his Agent 3 work), he then hijacked Blade's radio to confronted him. After a couple conflicts he determined that Blade is to be his archenemy and begin the life-long entanglement. He holds similar attitude toward Axel who operates as Agent 4. His plans never seem to bare fruits due to his own foolishness and some glaring shortcomings. Despite all the failures, he has no intension to stop bugging the two heros.",
            "He has never been to the surface and neither has he ever wished for such thing."
        ]
    },
    {
        id: "ryan",
        name: "Ryan \"RJ\"",
        gender: "Male",
        like: "Retro firearms",
        dislike: "Broken promise",
        rank: "X",
        mains: "All chargers",
        traits: [
            "Cruel, cold-blooded, impatient",
            "Lack of empathy",
            "Rather sadistic",
            "Efficient and professional",
            "Doesn't know how to socialize"
        ],
        outfits: [
            { name: "Regular", url: "profile/rj.png" }
        ],
        bio: [
            "Not much is known about this guy and it's not like he has intention to disclose anything whatsoever.",
            "One day he just appears out of nowhere in ranked battles like a phantom. Despite having very few battle records, his performance and splat counts are off the charts (to an extend that is almost alarming). At several points he got matched with Lance and they had multiple intense showdowns, the two ended up becoming friends. Hannah then took this chance to invite him into her team; though he did took the offer, he seems to be busy with some other shady business most of the time.",
            "Drinks only straight espresso."
        ]
    }
]

var relationPhotoReverse = [
    "HB", "EB", "LY", "AB"
]




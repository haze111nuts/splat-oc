
//=====================//
//===   variables   ===//
//=====================//

var relationshipPosData = [
    { id: "RY", x: 275, y: 260, start: "ryan" },
    { id: "YE", x: 1180, y: 185, start: "yoni" },
    { id: "XY", x: 795, y: 145, start: "yoni" },
    { id: "RL", x: 280, y: 365, start: "ryan" },
    { id: "LM", x: 500, y: 625, start: "lance" },
    { id: "LY", x: 530, y: 285, start: "lance" },
    { id: "LB", x: 535, y: 435, start: "lance" },
    { id: "XB", x: 795, y: 290, start: "xiu" },
    { id: "EX", x: 925, y: 675, start: "xiu" },
    { id: "XE", x: 1115, y: 250, start: "xiu" },
    { id: "XA", x: 1040, y: 380, start: "xiu" },
    { id: "RH", x: 160, y: 535, start: "ryan" },
    { id: "LH", x: 275, y: 470, start: "lance" },
    { id: "YB", x: 630, y: 405, start: "yoni" },
    { id: "YA", x: 775, y: 385, start: "yoni" },
    { id: "BE", x: 910, y: 410, start: "blade" },
    { id: "HB", x: 450, y: 560, start: "hannah" },
    { id: "AB", x: 800, y: 530, start: "blade" },
    { id: "AE", x: 1165, y: 545, start: "ellie" },
    { id: "RM", x: 290, y: 735, start: "ryan" },
    { id: "RB", x: 390, y: 510, start: "ryan" },
    { id: "MH", x: 405, y: 695, start: "hannah" },
    { id: "BM", x: 540, y: 680, start: "blade" },
    { id: "EB", x: 625, y: 655, start: "blade" },
    { id: "EA", x: 715, y: 655, start: "axel" },
    { id: "EM", x: 520, y: 960, start: "minerva" },
    { id: "WB", x: 820, y: 630, start: "blade" },
    { id: "AW", x: 1030, y: 655, start: "axel" },
    { id: "XW", x: 1065, y: 785, start: "xiu" },
    { id: "EW", x: 800, y: 830, start: "edd" },
    { id: "WE", x: 1250, y: 830, start: "wade" },
    { id: "BVn", x: 375, y: 990, start: "vngelica" },
    { id: "RVn", x: 100, y: 640, start: "ryan" },
    { id: "LVn", x: 45, y: 535, start: "lance" },
    { id: "HVn", x: 275, y: 810, start: "hannah" },
    { id: "MVn", x: 265, y: 960, start: "vngelica" },
    { id: "VpB", x: 970, y: 975, start: "blade" },
    { id: "VpA", x: 1110, y: 880, start: "axel" },
]

const charaData = {
    blade: {
        jpname: "ブレイド",
        age: 16,
        color: "rgb(127, 180, 57)",
        button: "",
        photoPos: {
            x: 595,
            y: 450,
            rotation: 4
        }
    },
    axel: {
        jpname: "アクセル",
        age: 15,
        color: "rgb(221, 140, 33)",
        button: "",
        photoPos: {
            x: 865,
            y: 450,
            rotation: -4
        }
    },
    xiu: {
        jpname: "シュウ",
        age: 18,
        color: "rgb(65, 173, 206)",
        button: "",
        photoPos: {
            x: 865,
            y: 195,
            rotation: 3
        }
    },
    yoni: {
        jpname: "ヨニ",
        age: 16,
        color: "rgb(224, 213, 54)",
        button: "",
        photoPos: {
            x: 595,
            y: 195,
            rotation: -4
        }
    },
    hannah: {
        jpname: "ハンナ",
        age: 19,
        color: "rgb(41, 81, 194)",
        button: "",
        photoPos: {
            x: 210,
            y: 535,
            rotation: -2
        }
    },
    lance: {
        jpname: "ランス",
        age: 20,
        color: "rgb(148, 77, 206)",
        button: "",
        photoPos: {
            x: 340,
            y: 310,
            rotation: 0
        }
    },
    ellie: {
        jpname: "エステル（エリ）",
        age: 14,
        color: "rgb(17, 148, 87)",
        button: "",
        photoPos: {
            x: 1110,
            y: 340,
            rotation: 3
        }
    },
    edd: {
        jpname: "エッド",
        age: 18,
        color: "rgb(211, 43, 43)",
        button: "",
        photoPos: {
            x: 595,
            y: 715,
            rotation: -2
        }
    },
    minerva: {
        jpname: "ミネルヴァ",
        age: 18,
        color: "rgb(167, 87, 83)",
        button: "",
        photoPos: {
            x: 340,
            y: 770,
            rotation: 3
        }
    },
    viper: {
        jpname: "",
        age: 18,
        color: "rgb(216, 40, 163)",
        button: "",
        photoPos: {
            x: 1050,
            y: 950,
            rotation: 6
        }
    },
    ryan: {
        jpname: "",
        age: 20,
        color: "rgb(92, 165, 155)",
        button: "",
        photoPos: {
            x: 75,
            y: 310,
            rotation: -5
        }
    },
    vngelica: {
        jpname: "アンジェリカ",
        age: 19,
        color: "rgb(190, 190, 190)",
        button: "",
        photoPos: {
            x: 75,
            y: 770,
            rotation: -2
        }
    },
    wade: {
        jpname: "",
        age: 17,
        color: "rgb(87, 65, 168)",
        button: "",
        photoPos: {
            x: 865,
            y: 715,
            rotation: 5
        }
    },
    scott: {
        jpname: "",
        age: 19,
        color: "rgb(173, 166, 129)",
        button: "",
        photoPos: {
            x: 1145,
            y: 610,
            rotation: -2
        }
    },
    zoelle: {
        jpname: "",
        age: 19,
        color: "rgb(58, 71, 101)",
        button: "",
        photoPos: {
            x: 340,
            y: 65,
            rotation: -3
        }
    },
    zarah: {
        jpname: "",
        age: 19,
        color: "rgb(64, 61, 41)",
        button: "",
        photoPos: {
            x: 75,
            y: 65,
            rotation: 3
        }
    },
}

var relationshipData_en = [
    {
        id: "RY",
        chara1: "yoni",
        chara2: "ryan",
        label: "Co-worker?",
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
        label: "Friends",
        chara1: "ryan",
        chara2: "lance",
        desc1: "Let's duel",
        desc2: "Bring it on",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LM",
        label: "Teammates",
        chara1: "lance",
        chara2: "minerva",
        desc1: "Trust",
        desc2: "Respect",
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
        label: "Like-minded",
        chara1: "xiu",
        chara2: "edd",
        desc1: "Interested",
        desc2: "Envies",
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
        desc1: "Still cares",
        desc2: "Awkward",
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
        desc1: "Let's play!",
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
        desc2: "Good person",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "HB",
        label: "Siblings",
        chara1: "blade",
        chara2: "hannah",
        desc1: "Afraid of",
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
        label: "Acquaintance",
        chara1: "ryan",
        chara2: "blade",
        desc1: "Teases",
        desc2: "Scary...",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "MH",
        label: "Roommates",
        chara1: "hannah",
        chara2: "minerva",
        desc1: "Recruits",
        desc2: "Curious",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "BM",
        label: "Pen Pal",
        chara1: "blade",
        chara2: "minerva",
        desc1: "Respects",
        desc2: "Interested",
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
        desc2: "Wants",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EA",
        label: "Rivals",
        chara1: "axel",
        chara2: "edd",
        desc1: "Hostile",
        desc2: "Dislike",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EM",
        label: "Twins",
        chara1: "minerva",
        chara2: "edd",
        desc1: "Thinks lowly of",
        desc2: "Weirded out",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "WB",
        chara1: "blade",
        chara2: "wade",
        label: "Mentorship",
        desc1: "Cares",
        desc2: "Admires",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "AW",
        chara1: "axel",
        chara2: "wade",
        label: "Teammates",
        desc1: "Dumb newbie",
        desc2: "Looks up to",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "XW",
        chara1: "xiu",
        chara2: "wade",
        label: "Kinship",
        desc1: "Teases",
        desc2: "Fond of",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "EW",
        chara1: "edd",
        chara2: "wade",
        label: "Teammates",
        desc1: "Gives a hard time",
        desc2: "Looks up to",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "WE",
        chara1: "ellie",
        chara2: "wade",
        label: "Friends",
        desc1: "Funny dork",
        desc2: "Funny irl",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "BVn",
        chara1: "blade",
        chara2: "vngelica",
        label: "Friends?",
        desc1: "Kind of scary",
        desc2: "May Lord watch over you",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "RVn",
        chara1: "ryan",
        chara2: "vngelica",
        label: "Co-worker",
        desc1: "Bitch",
        desc2: "May Lord bless you",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "LVn",
        chara1: "lance",
        chara2: "vngelica",
        label: "Teammates",
        desc1: "Somewhat familiar",
        desc2: "May Lord bless you",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "HVn",
        chara1: "hannah",
        chara2: "vngelica",
        label: "Teammates",
        desc1: "A little wary of",
        desc2: "May Lord bless you",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "MVn",
        chara1: "minerva",
        chara2: "vngelica",
        label: "Teammates",
        desc1: "A little wary of",
        desc2: "May Lord bless you",
        descDetail1: "",
        descDetail2: "",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "VpB",
        label: "Enemies...?",
        chara1: "blade",
        chara2: "viper",
        desc1: "God you're ANNOYING",
        desc2: "My eternal rival!",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "VpA",
        label: "Enemies",
        chara1: "axel",
        chara2: "viper",
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
            // "A timid and docile boy when he is young. He is favored by his mother, much to his older sister - Hannah's dismay. After their mother passed, Hannah's hatred toward him become full-blown domestic violence. Long term abuse from his sister turned Blade into a ",
            "He used to refuse playing any turf/ranked and would push away anyone who wants to be friend due to his anxious nature. After being abruptly scouted by Captain Cuttlefish as Agent 3, he received support from captain and the other two agents, it was then he decided to make change and begin the process of healing. Operating as agent 3 has helped him both mentally and physically, he is now able to play competitively. It was around this time he moved out to live on his own.",
            "He then met Axel and other friends and eventually got along since he is now a bit more opened-up to other people, and they decided to form a team called “Bad Buttons” with Blade as leader.",
        ],
        personality: [
            "The constant bullying and abusing from his older sister made him a very gloomy introvert, he often puts up a cool look to cover up the insecure side of him."
        ],
        trivia: [
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
        trivia: [
            ""
        ],
        refsheets: [
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
        trivia: [
            ""
        ],
        refsheets: [
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
        ],
        trivia: []

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
        ],
        trivia: []
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
        ],
        trivia: []
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
        ],
        trivia: []
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
        ],
        trivia: []
    },
    {
        id: "viper",
        name: "viper",
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
            { name: "Regular", url: "profile/viper.png" }
        ],
        bio: [
            "A member of the Octorian underground army. He is obsessed with DJ Octavio. A self-proclaimed \"DJ Octavio\'s greatest assistant\" and \"Evil genius Octorian engineer\" or some such. He seems to be extremely skilled and efficient when it comes to tech stuff, which includes programming AI, building robotics or even hacking.",
            "He was initially a shut-in who only stays in his lab, one day he was out on Octo Valley to inspect damages on some of the gadget he made, that was when he found out about Blade (who had just started his Agent 3 work), he then hijacked Blade's radio to confronted him. After a couple conflicts he determined that Blade is to be his archenemy and begin the life-long entanglement. He holds similar attitude toward Axel who operates as Agent 4. His plans never seem to bare fruits due to his own foolishness and some glaring shortcomings. Despite all the failures, he has no intension to stop bugging the two heros.",
            "He has never been to the surface and neither has he ever wished for such thing."
        ],
        trivia: []
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
        ],
        trivia: []
    },
    {
        id: "vngelica",
        name: "<span class='upSideDown'>A</span>ngelica",
        gender: "Female",
        like: "Lord",
        dislike: "???",
        rank: "???",
        mains: "???",
        traits: [
            "Polite, other-worldly",
            "Devoted cult missionary",
            "Lord this, Lord that",
            "From the Deep"
        ],
        outfits: [
            { name: "Regular", url: "profile/vngelica.png" }
        ],
        bio: [
            "??",
        ],
        personality: [
            "??"
        ],
        trivia: [
            "??"
        ],
        themes: [
        ]
    },
    {
        id: "wade",
        name: "Wade",
        gender: "Male",
        like: "Video game",
        dislike: "social contact",
        rank: "A-",
        mains: "Aerospray",
        traits: [
            "Nerd",
            "Mobile game whale",
            "A bit shy",
            "Dork, thick-headed",
        ],
        outfits: [
        ],
        bio: [
            "??",
        ],
        personality: [
            "??"
        ],
        trivia: [
            "??"
        ],
        themes: [
        ]
    }        
]

var relationPhotoReverse = [
    "HB", "EB", "LY", "AB"
]





//=====================//
//===   variables   ===//
//=====================//

var relationshipPosData = [
    { id: "RY", x: 300, y: 110, start: "ryan" },
    { id: "YE", x: 1205, y: 75, start: "yoni" },
    { id: "XY", x: 820, y: 35, start: "yoni" },
    { id: "RL", x: 305, y: 255, start: "ryan" },
    { id: "LM", x: 525, y: 515, start: "lance" },
    { id: "LY", x: 555, y: 35, start: "lance" },
    { id: "LB", x: 565, y: 230, start: "lance" },
    { id: "XB", x: 820, y: 180, start: "xiu" },
    { id: "EX", x: 950, y: 565, start: "xiu" },
    { id: "XE", x: 1140, y: 140, start: "xiu" },
    { id: "XA", x: 1065, y: 270, start: "xiu" },
    { id: "RH", x: 175, y: 425, start: "ryan" },
    { id: "LH", x: 300, y: 360, start: "lance" },
    { id: "YB", x: 655, y: 290, start: "yoni" },
    { id: "YA", x: 800, y: 275, start: "yoni" },
    { id: "BE", x: 935, y: 300, start: "blade" },
    { id: "HB", x: 475, y: 450, start: "hannah" },
    { id: "AB", x: 825, y: 420, start: "blade" },
    { id: "AE", x: 1080, y: 365, start: "estelle" },
    { id: "RM", x: 260, y: 625, start: "ryan" },
    { id: "RB", x: 415, y: 400, start: "ryan" },
    { id: "MH", x: 430, y: 585, start: "hannah" },
    { id: "BM", x: 565, y: 570, start: "blade" },
    { id: "EB", x: 650, y: 550, start: "blade" },
    { id: "EA", x: 740, y: 545, start: "axel" },
    { id: "EM", x: 675, y: 850, start: "minerva" },
    { id: "WB", x: 845, y: 520, start: "blade" },
    { id: "AW", x: 1055, y: 545, start: "axel" },
    { id: "XW", x: 1090, y: 675, start: "xiu" },
    { id: "EW", x: 825, y: 720, start: "edd" },
    { id: "WE", x: 1190, y: 720, start: "wade" },
    { id: "RVn", x: 125, y: 530, start: "ryan" },
    { id: "LVn", x: 70, y: 425, start: "lance" },
    { id: "HVn", x: 300, y: 700, start: "hannah" },
    { id: "MVn", x: 290, y: 850, start: "vngelica" },
    { id: "VpB", x: 1210, y: 800, start: "viper" },
    { id: "VpA", x: 1210, y: 435, start: "viper" },
    { id: "BS", x: 590, y: 790, start: "blade" },
    { id: "SW", x: 935, y: 835, start: "susie" },
    { id: "ScS", x: 950, y: 1035, start: "susie" },
    { id: "ScW", x: 960, y: 950, start: "wade" },
    { id: "HSc", x: 740, y: 1090, start: "hannah" },
    { id: "LSc", x: 1100, y: 745, start: "lance" },
    { id: "ZRZL", x: 370, y: 975, start: "zarah" },
    { id: "SZL", x: 660, y: 975, start: "zoelle" },
    { id: "LZL", x: 545, y: 850, start: "lance" },
    { id: "ZRY", x: 70, y: 140, start: "zarah" },
    { id: "ZRR", x: 70, y: 950, start: "zarah" }
]

const charaData = {
    blade: {
        jpname: "ブレイド",
        age: 16,
        color: "rgb(127, 180, 57)",
        button: "",
        photoPos: {
            x: 620,
            y: 340,
            rotation: 4
        }
    },
    axel: {
        jpname: "アクセル",
        age: 15,
        color: "rgb(221, 140, 33)",
        button: "",
        photoPos: {
            x: 890,
            y: 340,
            rotation: -4
        }
    },
    xiu: {
        jpname: "シュウ",
        age: 18,
        color: "rgb(65, 173, 206)",
        button: "",
        photoPos: {
            x: 890,
            y: 85,
            rotation: 3
        }
    },
    yoni: {
        jpname: "ヨニ",
        age: 16,
        color: "rgb(224, 213, 54)",
        button: "",
        photoPos: {
            x: 620,
            y: 85,
            rotation: -4
        }
    },
    hannah: {
        jpname: "ハンナ",
        age: 19,
        color: "rgb(41, 81, 194)",
        button: "",
        photoPos: {
            x: 235,
            y: 425,
            rotation: -2
        }
    },
    lance: {
        jpname: "ランス",
        age: 20,
        color: "rgb(148, 77, 206)",
        button: "",
        photoPos: {
            x: 365,
            y: 200,
            rotation: 0
        }
    },
    estelle: {
        jpname: "エステル（エリ）",
        age: 14,
        color: "rgb(17, 148, 87)",
        button: "",
        photoPos: {
            x: 1140,
            y: 230,
            rotation: 3
        }
    },
    edd: {
        jpname: "エッド",
        age: 18,
        color: "rgb(211, 43, 43)",
        button: "",
        photoPos: {
            x: 620,
            y: 605,
            rotation: -2
        }
    },
    minerva: {
        jpname: "ミネルヴァ",
        age: 18,
        color: "rgb(167, 87, 83)",
        button: "",
        photoPos: {
            x: 365,
            y: 660,
            rotation: 3
        }
    },
    viper: {
        jpname: "",
        age: 18,
        color: "rgb(216, 40, 163)",
        button: "",
        photoPos: {
            x: 1167,
            y: 490,
            rotation: 6
        }
    },
    ryan: {
        jpname: "",
        age: 20,
        color: "rgb(92, 165, 155)",
        button: "",
        photoPos: {
            x: 100,
            y: 200,
            rotation: -5
        }
    },
    vngelica: {
        jpname: "アンジェリカ",
        age: 19,
        color: "rgb(190, 190, 190)",
        button: "",
        photoPos: {
            x: 100,
            y: 660,
            rotation: -2
        }
    },
    wade: {
        jpname: "ウェイド",
        age: 17,
        color: "rgb(82, 69, 126)",
        button: "",
        photoPos: {
            x: 890,
            y: 605,
            rotation: 5
        }
    },
    scott: {
        jpname: "スコット",
        age: 19,
        color: "rgb(158, 152, 119)",
        button: "",
        photoPos: {
            x: 1025,
            y: 843,
            rotation: -2
        }
    },
    susie: {
        jpname: "スージー",
        age: 10,
        color: "rgb(243, 238, 189)",
        button: "",
        photoPos: {
            x: 735,
            y: 843,
            rotation: -2
        }
    },
    zoelle: {
        jpname: "ゾエル（ゾーイ）",
        age: 10,
        color: "rgb(91, 108, 139)",
        button: "",
        photoPos: {
            x: 442,
            y: 900,
            rotation: -3
        }
    },
    zarah: {
        jpname: "サラ",
        age: 23,
        color: "rgb(64, 61, 41)",
        button: "",
        photoPos: {
            x: 148,
            y: 900,
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
        chara2: "estelle",
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
        chara2: "estelle",
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
        chara1: "estelle",
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
        desc2: "Loves",
        content: [
            "Under construction..."
        ]
    },
    {
        id: "AE",
        label: "Siblings",
        chara1: "estelle",
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
        label: "Friends",
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
        chara1: "estelle",
        chara2: "wade",
        label: "Friends",
        desc1: "Funny weeb",
        desc2: "Funny irl",
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
    },
    {
        id: "BS",
        label: "Mentorship",
        chara1: "blade",
        chara2: "susie",
        desc1: "Coaches",
        desc2: "Admires",
        content: [
            "---"
        ]
    },
    {
        id: "SW",
        label: "Freinds",
        chara1: "wade",
        chara2: "susie",
        desc1: "Impressed by",
        desc2: "Nags",
        content: [
            "---"
        ]
    },
    {
        id: "ScS",
        label: "Siblings",
        chara1: "scott",
        chara2: "susie",
        desc1: "Watches over",
        desc2: "Respects",
        content: [
            "---"
        ]
    },
    {
        id: "ScW",
        label: "Acquaintance",
        chara1: "wade",
        chara2: "scott",
        desc1: "Awkward",
        desc2: "Observes",
        content: [
            "---"
        ]
    },
    {
        id: "HSc",
        label: "Old friends",
        chara1: "hannah",
        chara2: "scott",
        desc1: "Loathes",
        desc2: "Makes fun of",
        content: [
            "---"
        ]
    },
    {
        id: "LSc",
        label: "Friends",
        chara1: "lance",
        chara2: "scott",
        desc1: "Trust",
        desc2: "Interested in",
        content: [
            "---"
        ]
    },
    {
        id: "ZRZL",
        label: "Siblings",
        chara1: "zarah",
        chara2: "zoelle",
        desc1: "Doesn't care",
        desc2: "Doesn't like",
        content: [
            "---"
        ]
    },
    {
        id: "SZL",
        label: "Rivals",
        chara1: "susie",
        chara2: "zoelle",
        desc1: "I won't lose!",
        desc2: "Fair opponent",
        content: [
            "---"
        ]
    },
    {
        id: "LZL",
        label: "Mentorship",
        chara1: "lance",
        chara2: "zoelle",
        desc1: "Coaches",
        desc2: "Admires",
        content: [
            "---"
        ]
    },
    {
        id: "ZRY",
        label: "Co-worker?",
        chara1: "yoni",
        chara2: "zarah",
        desc1: "Cool lady!!",
        desc2: "Teases",
        content: [
            "---"
        ]
    },
    {
        id: "ZRR",
        label: "Co-worker?",
        chara1: "ryan",
        chara2: "zarah",
        desc1: "Tall bitch",
        desc2: "Brat",
        content: [
            "---"
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
            "Gloomy, Angsty, Quiet",
            "Has anxiety issue",
            "Lack of confidence",
            "Tries to act cool",
            "Is actually a sweet boy"
        ],
        outfits: [
            { name: "Regular", url: "profile/blade.png" },
            { name: "Agent 3", url: "profile/blade_agent3.png" },
            { name: "Captain", url: "profile/blade_captain.png" },
            { name: "Splatsville", url: "profile/blade_sp3.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
            "His actual name is Branden, Axel was the one who started calling him \"Blade\", which came from his online handle, and the rest of his friends started doing the same.",
            "He is a great cook, mostly excels in home style cooking.",
            "His braclet, ear cuff, hair ties and necklace are all gifts from his friend."
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
            "Rude, Brusque, Cocky",
            "Has anger management issue",
            "Aggressive behaviors",
            "Picks fights daily",
            "Cares about his grandma"
        ],
        outfits: [
            { name: "Regular", url: "profile/axel.png" },
            { name: "Agent 4", url: "profile/axel_agent4.png" }
        ],
        bio: [
            "Under construction..."

        ],
        trivia: [
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
            "Dashing, Charming, Sociable",
            "Social media addict",
            "Can't resist hot guys",
            "Likes to impress people",
            "Is a train wreck inside"
        ],
        outfits: [
            { name: "Regular", url: "profile/xiu.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
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
            "Goofy, Hyper, Bizarre",
            "Is a junkie",
            "Get excited easily",
            "Just a happy crackpot",
            "Can make lots of money"
        ],
        outfits: [
            { name: "Regular", url: "profile/yoni.png" }
        ],
        bio: [
            "Under construction..."
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
            "Vicious, Intimidating, Hostile",
            "Abusive to her brother",
            "Very mean",
            "Laughs like a maniac",
            "Is actually a great leader"
        ],
        outfits: [
            { name: "Regular", url: "profile/hannah.png" }
        ],
        bio: [
            "Under construction..."
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
            "Level-headed, Righteous",
            "OCPD, a bit of a neat freak",
            "A reliable brotherly figure",
            "Is a good listener"
        ],
        outfits: [
            { name: "Regular", url: "profile/lance.png" }
        ],
        bio: [
            "Under construction..."
        ],
        trivia: []
    },
    {
        id: "estelle",
        name: "Estelle \"Ellie\"",
        gender: "Female",
        like: "Gossips",
        dislike: "Selfish people",
        rank: "A+",
        mains: "Splash-o-matic",
        traits: [
            "Outgoing, Humorous",
            "Is a SJW",
            "Engages in online shaming",
            "Loves to chitchat",
            "Is actually very empathetic"

        ],
        outfits: [
            { name: "Regular", url: "profile/estelle.png" }
        ],
        bio: [
            "Under construction..."
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
            "Stoic, Aloof, Selfish",
            "Doesn't trust anyone",
            "Tends to observe people",
            "Daydreams about...stuff",
            "Horny af"
        ],
        outfits: [
            { name: "Regular", url: "profile/edd.png" },
            { name: "Agent 8", url: "profile/edd_agent8.png" }
        ],
        bio: [
            "Under construction..."
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
            "Loyal, Honest",
            "Stockholm Syndrome?",
            "Workholic",
            "Enters \"flow state\" often",
            "Just a law-abiding normal girl"
        ],
        outfits: [
            { name: "Regular", url: "profile/minerva.png" }
        ],
        bio: [
            "Under construction..."
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
            "Arrogant, Ambitious",
            "Delusional",
            "DJ Octavio's biggest fanboy",
            "Just your typical villian",
            "Always fails miserably"
        ],
        outfits: [
            { name: "Regular", url: "profile/viper.png" }
        ],
        bio: [
            "Under construction..."
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
            "Cruel, Cold-blooded, Impatient",
            "Lack of empathy",
            "Efficient and professional",
            "Rather sadistic",
            "Doesn't know how to socialize"
        ],
        outfits: [
            { name: "Regular", url: "profile/rj.png" }
        ],
        bio: [
            "Under construction..."
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
            "Polite, Other-worldly",
            "Devoted cult missionary",
            "Lord this, Lord that",
            "From the Deep"
        ],
        outfits: [
            { name: "Regular", url: "profile/vngelica.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    },
    {
        id: "wade",
        name: "Wade",
        gender: "Male",
        like: "Video game",
        dislike: "Social contact",
        rank: "A-",
        mains: "Aerospray",
        traits: [
            "Simple, Dorky, Incompetent",
            "Gacha game whale",
            "A bit shy",
            "Dumb virgin"
        ],
        outfits: [
            { name: "Regular", url: "profile/wade.png" },
            { name: "Agent 3", url: "profile/wade_agent3.png" },
            { name: "Agent 3+", url: "profile/wade_agent3full.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    },
    {
        id: "scott",
        name: "Scott",
        gender: "Male",
        like: "--",
        dislike: "--",
        rank: "--",
        mains: "--",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "profile/scott.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    },
    {
        id: "susie",
        name: "Susie",
        gender: "Female",
        like: "--",
        dislike: "--",
        rank: "--",
        mains: "--",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "profile/susie.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    },
    {
        id: "zoelle",
        name: "Zoelle",
        gender: "Female",
        like: "--",
        dislike: "--",
        rank: "--",
        mains: "--",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "profile/zoelle.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    },
    {
        id: "zarah",
        name: "Zarah",
        gender: "Female",
        like: "--",
        dislike: "--",
        rank: "--",
        mains: "--",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "profile/zarah.png" }
        ],
        bio: [
            "Under construction..."
        ],
        personality: [
            "Under construction..."
        ],
        trivia: [
        ],
        themes: [
        ]
    } 
]

var relationPhotoReverse = [
    "HB", "EB", "LY", "AB"
]




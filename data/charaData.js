
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
    { id: "AE", x: 1165, y: 545, start: "estelle" },
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
    estelle: {
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
        button: "",
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
        button: "",
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
        jpname: "ウェイド",
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
        jpname: "スコット",
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
        chara1: "estelle",
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
            "Gloomy, Angsty, Quiet",
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
            { name: "Regular", url: "profile/axel.png" }
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
            { name: "Regular", url: "profile/edd.png" }
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




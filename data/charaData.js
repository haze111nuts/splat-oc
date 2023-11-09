
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
    { id: "AE", x: 1090, y: 370, start: "estelle" },
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
    { id: "VpA", x: 1190, y: 434, start: "viper" },
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
    { id: "ZRR", x: 100, y: 875, start: "zarah" }
]

const charaData = {
    blade: {
        jpname: "ブレイド",
        age: 16,
        color: "rgb(127 180 57)",
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
        color: "rgb(221 140 33)",
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
        color: "rgb(65 173 206)",
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
        color: "rgb(224 213 54)",
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
        color: "rgb(41 81 194)",
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
        color: "rgb(148 77 206)",
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
        color: "rgb(17 148 87)",
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
        color: "rgb(211 43 43)",
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
        color: "rgb(167 87 83)",
        button: "",
        photoPos: {
            x: 365,
            y: 660,
            rotation: 3
        }
    },
    viper: {
        jpname: "毒牙",
        age: 18,
        color: "rgb(216 40 163)",
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
        color: "rgb(92 165 155)",
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
        color: "rgb(190 190 190)",
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
        color: "rgb(97 89 129)",
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
        color: "rgb(158 152 119)",
        button: "",
        photoPos: {
            x: 1025,
            y: 843,
            rotation: -1
        }
    },
    susie: {
        jpname: "スージー",
        age: 10,
        color: "rgb(243 238 189)",
        button: "",
        photoPos: {
            x: 735,
            y: 843,
            rotation: -2
        }
    },
    zoelle: {
        jpname: "ゾエル（ゾーイ）",
        age: 10,
        color: "rgb(91 108 139)",
        button: "",
        photoPos: {
            x: 442,
            y: 900,
            rotation: -3
        }
    },
    zarah: {
        jpname: "ザラ",
        age: 25,
        color: "rgb(106 114 39)",
        button: "",
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
        desc1: "Booyah!!",
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
        desc1: "bOoYaAH!!",
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
        desc1: "BEST BRO!!",
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
        desc1: "BOOOYAAH!!!",
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
            "When Agent 3 defeated DJ Octavio, it was like a ray of light shone on him, this gave him hope of escape from underground. He then followed Agent 3 to get out but it ended in failure due to some particular complication. "
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
        chara1: "susie",
        chara2: "scott",
        desc1: "Respects",
        desc2: "Watches over",
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
        desc2: "A fair opponent",
        content:[
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
        mains: "Splattershot Pro, .96",
        quirk: "Anxiety Issue",
        traits: [
            "Gloomy, Angsty, Quiet",
            "Lack of onfidence",
            "Tries to act cool",
            "Is actually a sweet boy"
        ],
        outfits: [
            { name: "Regular", url: "full-body/blade.png" },
            { name: "Agent 3", url: "full-body/blade_agent3.png" },
            { name: "Captain", url: "full-body/blade_captain.png" },
            { name: "S3", url: "full-body/blade_sp3.png" }
        ],
        bio: [
            "Blade used to be a gentle and docile boy when he was little. He was favored by his mother, much to his older sister Hannah's dismay. After their mother passed, Hannah's hatred toward him turned into full-blown domestic violence. The long-term abuse from his sister turned Blade into a gloomy introvert.",
            "Following Hannah's step, he took interest in playing Turf War when he was young, but Hannah's constant belittlement toward his skill crushed his confidence, caused him to utterly gave up on sport, and he lost any will to social with others.",
            "After being abruptly scouted by Captain Cuttlefish as Agent 3, he received support from captain and the first two agents, it was then he decided to step out his comfort zone and start making change. The work and training he has done as Agent 3 gave him the necessary boost in confidence, which allowed him to regain his will to play.",
            "He then met Axel and other friends, they eventually got along well as Blade is now a bit more opened-up to people. They decided to form a team called \"Bad Button Boys\" with Blade as leader. As his sister Hannah moved out, he currently live alone in a house that is under his Father's name. His Father rarely visit him, but he supports Blade financially from time to time.",
            "Blade is diligent on his role as Agent 3, he met Edd as Agent 8 in the Deepsea Metro ordeal, and then eventually became Captain of New Squidbeak Splatoon and met Wade, the new Agent 3. He recruited both Octoling into Bad Button Boys."
        ],
        personality: [
            "Blade used to be a timid but kindhearted boy, a bit needy at times. His older sister Hannah often play pranks on him to a point that he would get very scared at things like imaginary monsters.",
            // "Hannah's abuse and insult had only escalated after their mother passed. Hannah despises young Blade's Splat skill, she frequently mocked his mistake. Living under such condition caused Blade to develop a very withdrawn personality. He often tried to act cool in front of others in order to cope with his insecurity.",
            // "He is ",
            "Living under Hannah's abuse and insult caused Blade to develop a very withdrawn personality, even more so after their mother passed. He is insecure and anxious around other people, he prefers wearing cloth that could cover his neck, he also had a habit to use his visor to conseal his face and avoid making eye contact with stranger. He often has depressed and nervous",


            "*Blade's overall personality and personal antic*",
            "*His true kindhearted nature*",
            "*His tendency to do the right thing*",
            "*He's attitude toward love*"
        ],
        trivia: [
            "His name was acutally Branden. It was after Axel started calling him \"Blade\" which came from his online handle, the rest of his friends started doing the same, and he ended up officially changing his name to Blade",
            "He is a great cook, mostly excels in home style cooking.",
            "His braclet, ear cuff, hair ties and necklace are all gifts from his friend."
        ],
        refsheets: [
            "assets/img/refsheet/blade_v2.png",
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
        quirk: "Anger Management Issue",
        traits: [
            "Rude, Brusque, Cocky",
            "Aggressive behaviors",
            "Picks fights daily",
            "Cares about his grandma"
        ],
        outfits: [
            { name: "Regular", url: "full-body/axel.png" },
            { name: "Agent 4", url: "full-body/axel_agent4.png" }
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
        quirk: "Problmetic Influencer",
        traits: [
            "Dashing, Charming, Sociable",
            "24/7 on phone",
            "Can't resist hot guys",
            "Is a train wreck inside"
        ],
        outfits: [
            { name: "Regular", url: "full-body/xiu.png" }
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
        quirk: "Junkie",        
        traits: [
            "Goofy, Hyper, Bizarre",
            "Get excited easily",
            "Just a happy crackpot",
            "Can make lots of money"
        ],
        outfits: [
            { name: "Regular", url: "full-body/yoni.png" },
            { name: "No Shade", url: "full-body/yoni_noShade.png" }
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
        quirk: "Toxic",        
        traits: [
            "Vicious, Intimidating, Hostile",
            "Very mean",
            "Laughs like a maniac",
            "Is actually a great leader"
        ],
        outfits: [
            { name: "Regular", url: "full-body/hannah.png" }
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
        quirk: "OCPD & Neat Freak",
        traits: [
            "Level-headed, Righteous",
            "A reliable brotherly figure",
            "Is a good listener"
        ],
        outfits: [
            { name: "Regular", url: "full-body/lance.png" }
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
        quirk: "SJW",
        traits: [
            "Outgoing, Humorous",
            "Engages in online shaming",
            "Loves to chitchat",
            "Is actually very empathetic"

        ],
        outfits: [
            { name: "Regular", url: "full-body/estelle.png" }
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
        quirk: "Rebel",
        traits: [
            "Stoic, Aloof, Selfish",
            "Doesn't trust anyone",
            "Tends to observe people",
            "Horny af"
        ],
        outfits: [
            { name: "Regular", url: "full-body/edd.png" },
            { name: "Agent 8", url: "full-body/edd_agent8.png" }
        ],
        bio: [
            "Edd is Minerva's younger twin brother, He grew up in Octarian society like most other octolings. During his elementary school years, he came across some Inkopolis books that is banned in Octarian world, it sparked his interest to the Surface. Contrary to the Octarian army's teaching, he believed that free life on the surface is much superior than the obedient society in the underground. It was still a very unpopular opinion back then, not only did he have trouble getting along with his peers, he was also harshly disciplined for his insubordination and false belief. He was constantly under surveillance after many failed escape attempts, so he was unable to leave even when many others defected after that fateful event. It made him a very bitter person.", 
            "One day, Agent 3 broke into the section of Octarian base he was in. Edd used him to create an oppertunity for escaping from the army, but unforturnately he got caught up in the Deepsea Metro Ordeal, where he become Agent 8 and eventually made it to the surface. Blade, who is still Angent 3 at the time, became a very special person to him, and Edd found his way into Blade's Splatoon team. His uncooperative attittude caused some friction amongst the team, it took them time and effort, but they eventually got along better.",
        ],
        personality: [
            "An opinionated person, he has an inquiring mind and is always quesioning the social norms when he is still in the underground. He used to be talktive over his ideals, but being an Octarian society reject had made him taciturn and morose. Nowdays he keeps his distance with others, observing people from the side.",
            "He does thing his own way and does not abide by the rules, He hates being forced into a situation against his will.",
            "做事非常的我行我素，而且不喜歡被束縛住，因而嚮往章魚軍團世界外的自由生活，也因如此非常的討厭那種自己束手無策、什麼都做不了的狀況。",
            "對他人非常不信任，因而有點自私且常常不在乎他人的感受，行事總以自己的利益為優先，所以會有些不擇手段，甚至會利用別人來達到自己想要的目的。",
            "很少跟別人溝通，也不在乎別人對自己的看法，時常以強迫的方式讓別人照著自己的想法走，即使他的理由很正當又或是出自好心。被他人責怪時不管是不是自己的錯都不會替自己辯解，因此很容易鬧出對自己不利的誤會，對於這件事艾德似乎只覺得無所謂。",
            "小布的出現讓他心中的各種希望復燃，和小布相處讓他找回了一點對世界的信任，也在加入Bad Button Boys後開始感受到以前沒有的歸屬感，這也漸漸的改善了他利己又自私的觀念。不過因為他不善於溝通所以關心別人的方式通常都很怪。",
            "曾經多次在章魚軍團的懲戒所被長時間關禁閉並接受行為矯正，長期下來他開始變得會對窄小的地方感到非常不適。"
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
        quirk: "Conformist",       
        traits: [
            "Loyal, Honest",
            "Workholic",
            "Enters \"flow state\" often",
            "Just a law-abiding normal girl"
        ],
        outfits: [
            { name: "Regular", url: "full-body/minerva.png" }
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
        quirk: "Delusional",
        traits: [
            "Arrogant, Ambitious",
            "DJ Octavio's biggest fanboy",
            "Just your typical villian",
            "Always fails miserably"
        ],
        outfits: [
            { name: "Regular", url: "full-body/viper.png" }
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
        quirk: "Lack of Empathy",
        traits: [
            "Cruel, Cold-blooded, Impatient",
            "Efficient and professional",
            "Rather sadistic",
            "Doesn't know how to socialize"
        ],
        outfits: [
            { name: "Regular", url: "full-body/rj.png" }
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
        quirk: "Cultism",
        traits: [
            "Polite, Other-worldly",
            "Lord this, Lord that",
            "From the Deep"
        ],
        outfits: [
            { name: "Regular", url: "full-body/vngelica.png" }
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
        quirk: "Wimp",
        traits: [
            "Simple, Dorky, Incompetent",
            "Gacha game whale",
            "A bit shy",
            "Dumb virgin"
        ],
        outfits: [
            { name: "Regular", url: "full-body/wade.png" },
            { name: "Agent 3", url: "full-body/wade_agent3.png" },
            { name: "Agent 3+", url: "full-body/wade_agent3full.png" }
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
        quirk: "Malicious Reporter",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "full-body/scott.png" }
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
        quirk: "Vegan Activist",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "full-body/susie.png" }
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
        quirk: "Hoarder",
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "full-body/zoelle.png" }
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
        quirk: "Con Artist",     
        traits: [
            "--",
            "--",
            "--",
            "--"
        ],
        outfits: [
            { name: "Regular", url: "full-body/zarah.png" }
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
    "HB", "EB", "LY", "AB", "SZL", "ScS"
]





//=====================//
//===   variables   ===//
//=====================//

var relationshipPosData = [
    {id:"RY", x: 170, y: 50, start:"ryan"},
    {id:"YE", x: 1030, y: 50, start:"yoni"},
    {id:"XY", x: 745, y: 25, start:"yoni"},
    {id:"RL", x: 170, y: 130, start:"lance"},
    {id:"LM", x: 220, y: 630, start:"minerva"},
    {id:"LY", x: 455, y: 130, start:"lance"},
    {id:"LB", x: 455, y: 280, start:"lance"},
    {id:"XB", x: 715, y: 185, start:"xiu"},
    {id:"EX", x: 1102, y: 745, start:"edd"},
    {id:"XE", x: 1015, y: 145, start:"xiu"},
    {id:"XA", x: 945, y: 265, start:"xiu"},
    {id:"RH", x: 180, y: 405, start:"ryan"},
    {id:"LH", x: 315, y: 280, start:"lance"},
    {id:"YB", x: 560, y: 285, start:"yoni"},
    {id:"YA", x: 710, y: 265, start:"yoni"},
    {id:"BE", x: 850, y: 295, start:"blade"},
    {id:"HB", x: 455, y: 405, start:"hannah"},
    {id:"AB", x: 715, y: 405, start:"blade"},
    {id:"AE", x: 1000, y: 435, start:"ellie"},
    {id:"RM", x: 105, y: 670, start:"minerva"},
    {id:"RB", x: 355, y: 520, start:"ryan"},
    {id:"HM", x: 280, y: 560, start:"minerva"},
    {id:"BM", x: 455, y: 480, start:"blade"},
    {id:"EB", x: 570, y: 625, start:"edd"},
    {id:"EA", x: 845, y: 625, start:"edd"},
    {id:"EM", x: 560, y: 745, start:"minerva"},
    {id:"SB", x: 780, y: 530, start:"simon"},
    {id:"SA", x: 975, y: 520, start:"simon"}
]

const charaData = {
    blade: {
        jpname: 'ブレイド',
        color: "rgb(127, 180, 57)",
        photoPos: {
            x: 520,
            y: 335,
            rotation: 4
        }
    },
    axel: {
        jpname: 'アクセル',
        color: "rgb(221, 155, 33)",
        photoPos: {
            x: 770,
            y: 330,
            rotation: -4
        }
    },
    xiu: {
        jpname: 'シュウ',
        color: "rgb(65, 173, 206)",
        photoPos: {
            x: 770,
            y: 80,
            rotation: 3
        }
    },
    yoni: {
        jpname: 'ヨニ',
        color: "rgb(224, 213, 54)",
        photoPos: {
            x: 520,
            y: 75,
            rotation: -4
        }
    },
    hannah: {
        jpname: 'ハンナ',        
        color: "rgb(41, 81, 194)",
        photoPos: {
            x: 245,
            y: 320,
            rotation: -2
        }
    },
    lance: {
        jpname: 'ランス',        
        color: "rgb(148, 77, 206)",
        photoPos: {
            x: 245,
            y: 80,
            rotation: 0
        }
    },
    ellie: {
        jpname: 'エリ（エステル）',        
        color: "rgb(17, 148, 87)",
        photoPos: {
            x: 1005,
            y: 200,
            rotation: 3
        }
    },
    edd: {
        jpname: 'エッド',        
        color: "rgb(211, 43, 43)",
        photoPos: {
            x: 630,
            y: 570,
            rotation: -2
        }
    },
    minerva: {
        jpname: 'ミネルヴァ',        
        color: "rgb(167, 87, 83)",
        photoPos: {
            x: 360,
            y: 570,
            rotation: 3
        }
    },
    simon: {
        jpname: 'サイモン',        
        color: "rgb(216, 40, 163)",
        photoPos: {
            x: 920,
            y: 570,
            rotation: 6
        }
    },
    ryan: {
        jpname: '',
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
        label: "At war",
        chara1: "yoni",
        chara2: "ryan",
        desc1: "So badass!!!",
        desc2: "You little shit..."
    },
    {
        id: "YE",
        label: "Friends",
        chara1: "yoni",
        chara2: "ellie",
        desc1: "*Shoves gummies*",
        desc2: "So funny and weird"
    },
    {
        id: "XY",
        label: "Friends",
        chara1: "yoni",
        chara2: "xiu",
        desc1: "*Shoves gummies*",
        desc2: "A little wary of"
    },
    {
        id: "RL",
        label: "Close Friends",
        chara1: "lance",
        chara2: "ryan",
        desc1: "Get your shit together.",
        desc2: "What shit?"
    },
    {
        id: "LM",
        label: "Teammates",
        chara1: "lance",
        chara2: "minerva",
        desc1: "Newbie with potential",
        desc2: "Slightly awkward"
    },
    {
        id: "LY",
        label: "Siblings",
        chara1: "yoni",
        chara2: "lance",
        desc1: "*invades space*",
        desc2: "*throws out of window*"
    },
    {
        id: "LB",
        label: "Mentorship",
        chara1: "lance",
        chara2: "blade",
        desc1: "Cares",
        desc2: "Admires/likes"
    },
    {
        id: "XB",
        label: "Close Friends",
        chara1: "xiu",
        chara2: "blade",
        desc1: "Really likes",
        desc2: "Annoyed by"
    },
    {
        id: "EX",
        label: "Co-workers",
        chara1: "xiu",
        chara2: "edd",
        desc1: "Sarcastic",
        desc2: "Tries to impress"
    },
    {
        id: "XE",
        label: "Online Pals",
        chara1: "xiu",
        chara2: "ellie",
        desc1: "Trusts",
        desc2: "Supportive"
    },
    {
        id: "XA",
        label: "Ex Boyfriends",
        chara1: "xiu",
        chara2: "axel",
        desc1: "Chill bro!",
        desc2: "Not happy about"
    },
    {
        id: "RH",
        label: "Teammates",
        chara1: "ryan",
        chara2: "hannah",
        desc1: "Follows orders",
        desc2: "A little wary of"
    },
    {
        id: "LH",
        label: "Old friends",
        chara1: "lance",
        chara2: "hannah",
        desc1: "Knows well",
        desc2: "Trust"
    },
    {
        id: "YB",
        label: "Childhood<br>Friends",
        chara1: "yoni",
        chara2: "blade",
        desc1: "Love you bro!",
        desc2: "Annoyed by"
    },
    {
        id: "YA",
        label: "Friends",
        chara1: "yoni",
        chara2: "axel",
        desc1: "*Shoves gummies*",
        desc2: "What an oddball"
    },
    {
        id: "BE",
        label: "Friends",
        chara1: "ellie",
        chara2: "blade",
        desc1: "Slight crush",
        desc2: "A bit noisy"
    },
    {
        id: "HB",
        label: "Siblings",
        chara1: "blade",
        chara2: "hannah",
        desc1: "Hates/afraid of",
        desc2: "Hates/torments"
    },    
    {
        id: "AB",
        label: "Close Friends",
        chara1: "blade",
        chara2: "axel",
        desc1: "Annoyed by",
        desc2: "Has feelings for"
    },
    {
        id: "AE",
        label: "Siblings",
        chara1: "ellie",
        chara2: "axel",
        desc1: "Nags",
        desc2: "Urgh!"
    },
    {
        id: "RM",
        label: "Teammates",
        chara1: "ryan",
        chara2: "minerva",
        desc1: "Cooperates",
        desc2: "Scary..."
    },
    {
        id: "RB",
        label: "Friends???",
        chara1: "ryan",
        chara2: "blade",
        desc1: "Teases",
        desc2: "Scary..."
    },
    {
        id: "HM",
        label: "Friends",
        chara1: "hannah",
        chara2: "minerva",
        desc1: "Recruits",
        desc2: "Why me?"
    },
    {
        id: "BM",
        label: "Acquaintance",
        chara1: "blade",
        chara2: "minerva",
        desc1: "Respects",
        desc2: "Slightly interested"
    },
    {
        id: "EB",
        label: "Friends",
        chara1: "blade",
        chara2: "edd",
        desc1: "Annoyed by",
        desc2: "Wants to be close"
    },
    {
        id: "EA",
        label: "Rivals",
        chara1: "axel",
        chara2: "edd",
        desc1: "Dislike",
        desc2: "Displeased"
    },
    {
        id: "EM",
        label: "Twins",
        chara1: "minerva",
        chara2: "edd",
        desc1: "Let's train",
        desc2: "Catching up"
    },
    {
        id: "SB",
        label: "Enemies...?",
        chara1: "blade",
        chara2: "simon",
        desc1: "God you're ANNOYING",
        desc2: "One-side rivalry"
    },
    {
        id: "SA",
        label: "Enemies",
        chara1: "axel",
        chara2: "simon",
        desc1: "Fucking Octarian scum!",
        desc2: "Shut up Inkling pest!"
    }
]

var bioData_en = [
    {
        id: 'blade',
        name: 'Branden “Blade”',   
        gender: 'Male',
        like: 'To be alone',
        dislike: 'Self…and everything',
        rank: "S+ to X",
        mains: "Splattershot Pro, Carbon, .52/.96",
        traits: [
            'Gloomy, angsty, quiet',
            'Has anxiety issue',
            'Lack of confidence',
            'Tries to act cool',
            'Is actually a sweet boy'
        ],
        outfits: [
            { name: 'Regular', url: 'bl1.png' },
            { name: 'Agent 3', url: 'bl2.png' },
            { name: 'Sanitized', url: 'bl3.png' }
        ],
        bio: [
            'He used to go by the name Branden. The constant bullying and abusing from his older sister made him a very gloomy introvert, he often puts up a cool look to cover up the insecure side of him.',
            'He used to refuse playing any turf/ranked and would push away anyone who wants to be friend due to his anxious nature. After being abruptly scouted by Captain Cuttlefish as agent 3, he received support from captain and the other two agents, it was then he decided to make change and begin the process of healing. Operating as agent 3 has helped him both mentally and physically, he is now able to play competitively. It was around this time he moved out to live on his own with a new name “Blade”.',
            'He then met Axel and other friends and eventually got along since he is now a bit more opened-up to other people, and they decided to form a team called “Rotten Buttons” with Blade as leader.'
        ]
    },
    {
        id: 'axel',
        name: 'Axel',   
        gender: 'Male',
        like: 'Compete',
        dislike: 'Losing or getting mocked',
        rank: "S+ to X",
        mains: "Dualies",
        traits: [
            'Rude, brusque, cocky',
            'Has anger management issue',
            'Aggressive behaviors',
            "Picks fights daily",
            'Cares about his grandma'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 4', url: 'xxx.png' }
        ],
        bio: [
            'He had been trying to form a competitive team with skilled players; however, due to his short-temper and violent nature, they often fell out very quickly, and usually in a pretty bad way.',
            'One day in a random match he met Blade and picked a fight with him, and later realized that Blade could be the teammate he had been looking for. He then chased him through the sewer system in Inkopolis Square where he became Agent 4 just for another chance to meet Blade. He eventually got to meet Blade again and was able to befriend him and formed a team "Rotten Buttons" like he always wanted to.',
            'Ever since Blade walked into his life, he is shown to have less frequent temper issues.'
        ]
    },
    {
        id: 'xiu',
        name: 'Xiu',    
        gender: 'Male',
        like: 'Performing, coral collecting',
        dislike: 'Losing followers',
        rank: "S+ to X",
        mains: "Sloshers and Brellas",
        traits: [
            "Dashing, charming, sociable",
            "Social media addict",
            "Craves for attention",
            "Cares about his appearance",
            "Kind of a drama queen"
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 4', url: 'xxx.png' }
        ],
        bio: [
            'Was once a very caring and kindhearted nerd boy. After falling victim to bullying and harassment, he started to change and would resort to revenge. Although this has made him more confident and brave, it nevertheless brought him more trouble than before.',
            'When he was still coping with the harassment, he met Axel and eventually started dating. He used to play league with him until they broke up, he then shifted his focus onto social media and flair bartending. He then took interest in Blade when he found out Axel was hanging out with him, and decided to start playing again.',
            'He is an extrovert who can blend himself into all kinds of groups, he is the one who comes up with party game ideas that are often questionable. His right eye was damaged as a result of a dangerous streaming challenge, therefore a strange pupil shape.'
        ]
    },
    {
        id: 'yoni',
        name: 'Yoni',
        gender: 'Male',
        like: 'Happy stuff',
        dislike: 'Theft',
        rank: "S+",
        mains: "Hydra, Dynamo Roller",
        traits: [
            'Goofy, happy, bizarre',
            'Is a junkie',
            'Get excited easily',
            'Has destructive strength',
            'Can make lots of money'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' }
        ],
        bio: [
            'A care-free and cheerful boy, also a bit of a joker who can be pretty naughty sometimes. Speaks and behaves in a comical and silly way. He finds a lot of things funny and will laugh everything off even when the timing is inappropriate.',
            'He loves getting high using...some substance, which is obviously banned in all sports. While wanting to play with Blade as a member of Rotten Buttons, he had cut out most of it. However, he wasn\'t able to fully resist the temptation of such things, so he has been looking for a solution so he can have it both ways',
            'Seems to be involved in some suspicious activities.'
        ]
    },
    {
        id: 'hannah',
        name: 'Hannah',
        gender: 'Female',
        like: 'Splat Battles',
        dislike: 'Blade',
        rank: "X",
        mains: "N-zap, .52/.96",
        traits: [
            'Vicious, intimidating, hostile',
            'Abusive to her brother',
            'Very mean',
            'Laugh like a maniac',
            'Is actually a great leader'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            'Hannah was specially neglected by her mother when she was little, and her mother heavily favored the younger brother Blade over her,  this caused Hannah to hold a strong grudge against Blade. After their mother passed away, the grudge soon turned into abuse.',
            'Splat battle has been an outlet for her anger. As she poured her heart and soul into the games, she became unreasonably good at them. She actively searched for long-term teammates and eventually got Lance, RJ and Minerva to form an elite team.',
            'She is aware of her flaws and had thought of fixing the relationship with Blade, but gave up after failing to make any attempt, stating "It\'s too late now".'
        ]
    },
    {
        id: 'lance',
        name: 'Lance',
        gender: 'Male',
        like: 'Pop rocks candy',
        dislike: 'Sudden change in plan',
        rank: "X",
        mains: "Blasters & Nozzlenose",
        traits: [
            'Level-headed, righteous',
            'OCPD, a bit of a neat freak',
            'A reliable brotherly figure',
            'Also has destructive strength',
            'Is a good listener'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            'Yoni\'s older brother, he is a childhood friend to both Hannah and Blade. He may look and act intimidating, but he is a very reliable, supportive and caring person. He is also a very organized perfectionist with high standards, he also has incredibly (and sometimes unnecessarily ) sharp attention to details. He occasionally bursts out life advice with a poker face.',
            'He was the first member Hannah recruited in Midnight Mayhem, he deals with things Hannah doesn\'t know how to do or had trouble with.',
            'He works really hard to live with his OCPD and is always seen wearing a pair of black gloves. He <u>MUST</u> eat at least one pack of pop rocks before going to any battle in the morning.'
        ]
    },
    {
        id: 'ellie',
        name: 'Estelle "Ellie"',
        gender: 'Female',
        like: '???',
        dislike: '???',
        rank: "A+",
        mains: "???",
        traits: [
            'SWJ',
            'Engage in online shaming',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 4', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    },
    {
        id: 'edd',
        name: 'Edd',
        gender: 'Male',
        like: '???',
        dislike: '???',
        rank: "S+ to X",
        mains: "???",
        traits: [
            'Stoic',
            '',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 8', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    },
    {
        id: 'minerva',
        name: 'Minerva',
        gender: 'Female',
        like: '???',
        dislike: '???',
        rank: "X",
        mains: "???",
        traits: [
            '',
            '',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 8', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    },
    {
        id: 'simon',
        name: 'Simon',
        gender: 'Male',
        like: '???',
        dislike: '???',
        rank: "?",
        mains: "???",
        traits: [
            '',
            '',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    },
    {
        id: 'ryan',
        name: 'Ryan',
        gender: 'Male',
        like: 'Doppio espresso',
        dislike: 'Broken promise',
        rank: "X",
        mains: "Chargers",
        traits: [
            '',
            '',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    }
]




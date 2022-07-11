
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
    {id:"EX", x: 1105, y: 745, start:"edd"},
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
        color: "rgb(127, 180, 57)",
        photoPos: {
            x: 520,
            y: 335,
            rotation: 4
        }
    },
    axel: {
        color: "rgb(221, 155, 33)",
        photoPos: {
            x: 770,
            y: 330,
            rotation: -4
        }
    },
    xiu: {
        color: "rgb(65, 173, 206)",
        photoPos: {
            x: 770,
            y: 80,
            rotation: 3
        }
    },
    yoni: {
        color: "rgb(224, 213, 54)",
        photoPos: {
            x: 520,
            y: 75,
            rotation: -4
        }
    },
    hannah: {
        color: "rgb(41, 81, 194)",
        photoPos: {
            x: 245,
            y: 320,
            rotation: -2
        }
    },
    lance: {
        color: "rgb(148, 77, 206)",
        photoPos: {
            x: 245,
            y: 80,
            rotation: 0
        }
    },
    ellie: {
        color: "rgb(17, 148, 87)",
        photoPos: {
            x: 1005,
            y: 200,
            rotation: 3
        }
    },
    edd: {
        color: "rgb(211, 43, 43)",
        photoPos: {
            x: 630,
            y: 570,
            rotation: -2
        }
    },
    minerva: {
        color: "rgb(167, 87, 83)",
        photoPos: {
            x: 360,
            y: 570,
            rotation: 3
        }
    },
    simon: {
        color: "rgb(216, 40, 163)",
        photoPos: {
            x: 920,
            y: 570,
            rotation: 6
        }
    },
    ryan: {
        color: "rgb(180, 180, 180)",
        photoPos: {
            x: 55,
            y: 200,
            rotation: 5
        }
    }
}

var relationshipData_ch = [
    {
        id: "RY",
        label: "一觸即發",
        chara1: "yoni",
        chara2: "ryan",
        desc1: "好強！！！",
        desc2: "臭小鬼殺了你"
    },
    {
        id: "YE",
        label: "朋友？",
        chara1: "yoni",
        chara2: "ellie",
        desc1: "吃軟糖ㄇ！",
        desc2: "超怪的人笑死"
    },
    {
        id: "XY",
        label: "朋友",
        chara1: "yoni",
        chara2: "xiu",
        desc1: "吃軟糖ㄇ！",
        desc2: "覺得有點危險"
    },
    {
        id: "RL",
        label: "親友",
        chara1: "lance",
        chara2: "ryan",
        desc1: "不要再添麻煩了",
        desc2: "什麼麻煩？"
    },
    {
        id: "LM",
        label: "隊友",
        chara1: "lance",
        chara2: "minerva",
        desc1: "有潛力的新人",
        desc2: "不太敢搭話"
    },
    {
        id: "LY",
        label: "兄弟",
        chara1: "yoni",
        chara2: "lance",
        desc1: "(亂碰私人物品)",
        desc2: "(抓住扔出窗外)"
    },
    {
        id: "LB",
        label: "前後輩",
        chara1: "lance",
        chara2: "blade",
        desc1: "指導＆照顧",
        desc2: "仰慕＆喜歡"
    },
    {
        id: "XB",
        label: "親友",
        chara1: "xiu",
        chara2: "blade",
        desc1: "很喜歡",
        desc2: "別煩"
    },
    {
        id: "EX",
        label: "朋友&同事",
        chara1: "xiu",
        chara2: "edd",
        desc1: "酸言酸語",
        desc2: "酸言酸語"
    },
    {
        id: "XE",
        label: "網路閨密",
        chara1: "xiu",
        chara2: "ellie",
        desc1: "信賴",
        desc2: "支持"
    },
    {
        id: "XA",
        label: "已分手",
        chara1: "xiu",
        chara2: "axel",
        desc1: "別計較了嘛",
        desc2: "還是有點不爽"
    },
    {
        id: "RH",
        label: "隊友",
        chara1: "ryan",
        chara2: "hannah",
        desc1: "遵從指示",
        desc2: "覺得有點危險"
    },
    {
        id: "LH",
        label: "舊識",
        chara1: "lance",
        chara2: "hannah",
        desc1: "很瞭解",
        desc2: "信賴"
    },
    {
        id: "YB",
        label: "兒時玩伴",
        chara1: "yoni",
        chara2: "blade",
        desc1: "小布讚讚",
        desc2: "別煩"
    },
    {
        id: "YA",
        label: "朋友",
        chara1: "yoni",
        chara2: "axel",
        desc1: "吃軟糖ㄇ！",
        desc2: "怪胎欸"
    },
    {
        id: "BE",
        label: "朋友",
        chara1: "ellie",
        chara2: "blade",
        desc1: "在意＆崇拜",
        desc2: "有點吵"
    },
    {
        id: "HB",
        label: "姊弟",
        chara1: "blade",
        chara2: "hannah",
        desc1: "畏懼",
        desc2: "家暴＆厭惡"
    },
    {
        id: "AB",
        label: "親友&勁敵",
        chara1: "blade",
        chara2: "axel",
        desc1: "別煩",
        desc2: "有好感"
    },
    {
        id: "AE",
        label: "兄妹",
        chara1: "ellie",
        chara2: "axel",
        desc1: "吵死了！",
        desc2: "你才吵！",
    },
    {
        id: "RM",
        label: "隊友",
        chara1: "ryan",
        chara2: "minerva",
        desc1: "有何貴幹?",
        desc2: "可怕的人…"
    },
    {
        id: "RB",
        label: "微妙",
        chara1: "ryan",
        chara2: "blade",
        desc1: "真好欺負",
        desc2: "可怕的人…"
    },
    {
        id: "HM",
        label: "朋友",
        chara1: "hannah",
        chara2: "minerva",
        desc1: "堅持拉進隊裡",
        desc2: "為什麼特別選我？"
    },
    {
        id: "BM",
        label: "點頭之交",
        chara1: "blade",
        chara2: "minerva",
        desc1: "覺得很厲害",
        desc2: "有點感興趣"
    },
    {
        id: "EB",
        label: "朋友",
        chara1: "blade",
        chara2: "edd",
        desc1: "別煩",
        desc2: "想更親密"
    },
    {
        id: "EA",
        label: "關係不佳",
        chara1: "axel",
        chara2: "edd",
        desc1: "非常不爽",
        desc2: "令人不愉快"
    },
    {
        id: "EM",
        label: "雙胞胎",
        chara1: "minerva",
        chara2: "edd",
        desc1: "訓練對象",
        desc2: "努力追趕"
    },
    {
        id: "SB",
        label: "英雄vs惡役",
        chara1: "blade",
        chara2: "simon",
        desc1: "你超煩",
        desc2: "永遠的勁敵"
    },
    {
        id: "SA",
        label: "死對頭",
        chara1: "axel",
        chara2: "simon",
        desc1: "幹臭章螂滾啦！",
        desc2: "浮魷垃圾閉嘴！"
    }
]

var relationshipData_en = [
    {
        id: "RY",
        label: "Acquaintance",
        chara1: "yoni",
        chara2: "ryan",
        desc1: "So badass!!!",
        desc2: "You little shit..."
    },
    {
        id: "YE",
        label: "Friends?",
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
        desc1: "*touch belongings*",
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
        desc1: "May I help you?",
        desc2: "Scary..."
    },
    {
        id: "RB",
        label: "Teammates",
        chara1: "ryan",
        chara2: "blade",
        desc1: "So vulnerable",
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
        desc1: "God you're Annoying",
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
            'Emo, angsty, quiet',
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
            'A boy who lives around Inkopolis City Plaza.',
            'He used to refuse playing any turf/ranked game and would push away anyone who wants to be friend due to his anxious nature, which resulted from being bullied by his older sister for a long period of time. After being abruptly scouted by Captain Cuttlefish as agent 3, he received support from captain’s grandkids, it was then he decided to move out and live on his own with the new name “Blade”, he started practicing and eventually became able to play competitively.',
            'He then met Axel and other friends and eventually got along since he is now a bit more opened-up to other people, and they decided to form a team called “Bad Buttons” with Blade as leader.'
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
            'A boy who lives around Inkopolis Square with his grandma and sister Ellie.', 
            'He had trouble finding teammate for competitive games due to his bad temper.',
            'One day in a random match he met Blade and picked a fight with him, and later realized that Blade could be the teammate he has been looking for. He then chased him through the sewer system in Inkopolis Square where he became Agent 4 just for another chance to meet Blade. He eventually found Blade and was able to befriend him and form a team like he wanted to.'
        ]
    },
    {
        id: 'xiu',
        name: 'Xiu',
        gender: 'Male',
        like: 'Trendy things',
        dislike: 'Losing followers',
        rank: "S+ to X",
        mains: "Sloshers and Brellas",
        traits: [
            "Social media addict",
            "Charming, sociable, stylish",
            "Cares about his appearance",
            "Kind of a drama queen",
            "Is quite popular"
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 4', url: 'xxx.png' }
        ],
        bio: [
            'He lives around Inkopolis Square.',
            'He spend most of his time maintaining his social life and his online images, he also took interest in bartending and is working part-time in a bar after he dropped out of school.',
            'He used to play with Axel until they broke up, he then shifted his focus onto social media. He then took interest in Blade when he found out Axel is hanging out with him, and decided to start playing again.'
        ]
    },
    {
        id: 'yoni',
        name: 'Yoni',
        gender: 'Male',
        like: 'Anything that gets him high',
        dislike: 'No acces to substance',
        rank: "S+",
        mains: "Hydra, Dynamo Roller",
        traits: [
            'Junky',
            'Kind of goofy',
            'Get excited easily',
            'Has destructive strength',
            'Actually kind of rich'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' }
        ],
        bio: [
            'He loves to be get high using some substence, but ever since he joined Bad Buttons he had cut out most of it, due to Turf War Association\'s ban on use of illegal drug. Although He wasn\'t able resist the temptation of getting high so he has been looking for a solution that would allow him to play Turf War.',
            'He is involved in some low level gang activity, mostly selling drugs.'
        ]
    },
    {
        id: 'hannah',
        name: 'Hannah',
        gender: 'Female',
        like: '???',
        dislike: 'Blade',
        rank: "X",
        mains: "N-zap, .52/.96",
        traits: [
            'Bully',
            '',
            '',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            ':/'
        ]
    },
    {
        id: 'lance',
        name: 'Lance',
        gender: 'Male',
        like: '???',
        dislike: '??',
        rank: "X",
        mains: "Nozzlenose and Blasters",
        traits: [
            'Has OCD',
            'Perfectionist',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            ':/'
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
        name: 'Ryan Joseph "RJ" Cameron',
        gender: 'Male',
        like: '???',
        dislike: '???',
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

var bioData_ch = [
    {
        id: 'blade',
        name: '布雷德(小布)',
        jpname: 'ブレイド',
        gender: '男',
        like: '獨處',
        dislike: '自己&所有事物',
        rank: "S+ ~ X",
        mains: "P槍、輕滾、.52/.96",
        traits: [
            '彆扭、孤僻',
            '有焦慮問題',
            '沒自信',
            '會裝酷',
            '其實很乖+很認真'
        ],
        outfits: [
            { name: '通常服', url: 'bl1.png' },
            { name: '3號', url: 'bl2.png' },
            { name: '洗腦3號', url: 'bl3.png' }
        ],
        bio: [
            '住在ハイカラシティ廣場附近。',
            '原名布蘭登，因為長期被姐姐欺負跟貶低所以性格孤僻。原本不肯玩任何塗地排位戰並且很抗拒交朋友，後來因緣際會遇上司令勉強同意變成3號，之間也結識了1號與2號，在三人的支持下決定開始嘗試改變態度和擺脫陰影，透過3號的任務持續練習後終於漸漸變得可以和別人比賽，也是這時決定改名布雷德並搬出去自己住。',
            '在認識亞克和其他朋友後開始打開心房並逐漸變得要好，並以小布為中心決定組一個小隊。'
        ]
    },
    {
        id: 'axel',
        name: '亞克索爾(亞克)',
        jpname: 'アクセル',
        gender: '男',
        like: '比賽',
        dislike: '輸or被嘲笑',
        rank: "S+ ~ X",
        mains: "雙槍類",
        traits: [
            '無禮、暴躁、囂張',
            '有憤怒管理問題',
            '攻擊&侵略行為',
            "總是打架&找麻煩",
            '很照顧自己家奶奶'
        ],
        outfits: [
            { name: '通常服', url: 'xxx.png' },
            { name: '4號', url: 'xxx.png' }
        ],
        bio: [
            '住在ハイカラスクエア附近。跟奶奶和妹妹同住。',
            '小混混性格，因為脾氣暴躁所以總是跟人處不來。一直很想找可以一起比賽的隊友。',
            '一次比賽隨機排到小布，兩人起了衝突並且演變成打架，最後搞到不歡而散時，忽然萌生了想和小布組隊的想法便追了回去。結果在下水道追丟對方，接著誤打誤撞進入峽谷區遇到了螢，為了要問出小布的下落而同意當上了4號。經過一番漫長的折騰後終於如願認識小布並且組成隊伍。' 
        ]
    },
    {
        id: 'xiu',
        name: '修',
        jpname: 'シュウ',        
        gender: '男',
        like: '人氣，流行音樂',
        dislike: '掉粉',
        rank: "S+ ~ X",
        mains: "桶或傘",
        traits: [
            "有風度、善社交、很時尚",
            '有社交平台成癮問題',
            "很注重自己儀表",
            "是挺受歡迎的網紅",
            "老是搞八卦&小題大作"
        ],
        outfits: [
            { name: '通常服', url: 'xxx.png' },
            { name: '通常服2', url: 'xxx.png' },            
            { name: '4號', url: 'xxx.png' }
        ],
        bio: [
            '住在ハイカラスクエア附近。',
            '是個生活充滿社交和網路的傢伙，輟學後馬上去學調酒，目前在酒吧打工。',
            '起初跟亞克在一起時還會偶爾和他一起比賽，但分手後就全力投入網路社交媒體世界，再也沒再碰過武器。直到一次透過亞克打聽到小布而起了興趣，一起相處一陣子後決定回歸並和他們組隊。'
        ]
    },
    {
        id: 'yoni',
        name: '尤尼',
        gender: '男',
        like: '能讓人上癮的東西',
        dislike: '取不到藥物',
        rank: "S+",
        mains: "水栓或重滾",
        traits: [
            '友善、傻裡傻氣、高能量',
            '有毒癮問題',
            '很容易就興奮',
            '有怪力',
            '挺有錢的'
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' }
        ],
        bio: [
            '住在ハイカラシティ廣場附近,跟哥哥一起住。',
            '他很喜歡成癮的感覺，但因為漆彈協會禁止玩家使用非法藥物，所以自從加入小布和亞克的隊伍之後就漸漸不用了。不過毒癮終究難戒，所以他正在找一種能讓他上癮又能繼玩漆彈的辦法。',
            '他有參與低階的黑道活動，大部分都是販毒。'
        ]
    },
    {
        id: 'hannah',
        name: '漢娜',
        gender: '女',
        like: '漆彈',
        dislike: '她弟',
        rank: "X",
        mains: "N-zap, .52/.96",
        traits: [
            '凶狠，冷漠，難親近',
            '有家暴弟弟的問題',
            '講話惡毒',
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            ''
        ]
    },
    {
        id: 'lance',
        name: '蘭斯',
        gender: '男',
        like: '乾淨整齊對稱',
        dislike: '??',
        rank: "X",
        mains: "Nozzlenose and Blasters",
        traits: [
            '冷靜，',
            '有強迫症的問題',
            ''
        ],
        outfits: [
            { name: 'Regular', url: 'xxx.png' },
            { name: 'Agent 3', url: 'xxx.png' }
        ],
        bio: [
            ':/'
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
            '有網路霸凌別人的問題',
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
        name: '艾德',
        gender: '男',
        like: '???',
        dislike: '???',
        rank: "S+ to X",
        mains: "???",
        traits: [
            '',
            '有慣性說謊的問題',
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
        name: 'Ryan Joseph "RJ" Cameron',
        gender: 'Male',
        like: '???',
        dislike: '???',
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


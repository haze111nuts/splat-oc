
//=====================//
//===   variables   ===//
//=====================//

var relationshipPosData = [
  {id:"HM", x : 345, y: 180},
  {id:"BM", x : 540, y: 195},
  {id:"SB", x : 680, y: 212},
  {id:"EM", x : 812, y: 110},

  {id:"HB", x : 250, y: 330},
  {id:"EB", x : 565, y: 330},
  {id:"XB", x : 565, y: 400},

  {id:"LH", x : 90,  y: 465},
  {id:"LB", x : 210, y: 465},
  {id:"YB", x : 335, y: 465},
  {id:"AB", x : 490, y: 465},
  {id:"EA", x : 640, y: 465},
  {id:"SA", x : 760, y: 465},
  {id:"EX", x : 860, y: 465},

  {id:"YA", x : 425, y: 625},
  {id:"XA", x : 695, y: 625},

  {id:"LY", x : 185, y: 730},
  {id:"XY", x : 735, y: 730},

  {id:"AE", x : 610, y: 760},
  {id:"BE", x : 370, y: 800},
  {id:"XE", x : 850, y: 800},
]

const charaData = {
    blade: {
      color: "rgb(127, 180, 57)",
      photoPos: {
        x: 345,
        y: 245,
        rotation: 5
      }
    },
    axel: {
      color: "rgb(221, 155, 33)",
      photoPos: {
        x: 485,
        y: 525,
        rotation: -8
      }
    },
    xiu: {
      color: "rgb(65, 173, 206)",
      photoPos: {
        x: 775,
        y: 525,
        rotation: 3
      }
    },
    yoni: {
      color: "rgb(224, 213, 54)",
      photoPos: {
        x: 225,
        y: 525,
        rotation: 10
      }
    },
    hannah: {
      color: "rgb(41, 81, 194)",
      photoPos: {
        x: 35,
        y: 250,
        rotation: -6
      }
    },
    lance: {
      color: "rgb(148, 77, 206)",
      photoPos: {
        x: 35,
        y: 525,
        rotation: 0
      }
    },
    ellie: {
      color: "rgb(17, 148, 87)",
      photoPos: {
        x: 435,
        y: 780,
        rotation: 5
      }
    },
    edd: {
      color: "rgb(211, 43, 43)",
      photoPos: {
        x: 630,
        y: 250,
        rotation: -5
      }
    },
    minerva: {
      color: "rgb(167, 87, 83)",
      photoPos: {
        x: 635,
        y: 15,
        rotation: 2
      }
    },
    simon: {
      color: "rgb(216, 40, 163)",
      photoPos: {
        x: 845,
        y: 150,
        rotation: 12
      }
    },
    temp: {
      color: "rgb(200, 200, 200)",
      photoPos: {
        x: 130,
        y: 40,
        rotation: 15
      }
    }
  }

var relationshipData_ch = [
  {
      id: "AB",
      label: "親友&勁敵",
      chara1: "blade",
      chara2: "axel",
      desc1: "別煩↘",
      desc2: "↖有好感"
  },
  {
      id: "XB",
      label: "親友",
      chara1: "blade",
      chara2: "xiu",
      desc1: "別煩↘",
      desc2: "↖很喜歡"
  },
  {
      id: "YB",
      label: "兒時玩伴",
      chara1: "blade",
      chara2: "yoni",
      desc1: "↙別煩",
      desc2: "小布讚讚讚↗"
  },
  {
      id: "HB",
      label: "分居姊弟",
      chara1: "blade",
      chara2: "hannah",
      desc1: "←畏懼",
      desc2: "家暴→"
  },
  {
      id: "LB",
      label: "前後輩",
      chara1: "blade",
      chara2: "lance",
      desc1: "↙仰慕&喜歡",
      desc2: "指導↗"
  },
  {
      id: "EB",
      label: "朋友",
      chara1: "blade",
      chara2: "edd",
      desc1: "別煩→",
      desc2: "←想更親密"
  },
  {
      id: "XA",
      label: "已分手",
      chara1: "axel",
      chara2: "xiu",
      desc1: "還是有點不爽→",
      desc2: "←別計較了嘛"

  },
  {
      id: "YA",
      label: "朋友",
      chara1: "axel",
      chara2: "yoni",
      desc1: "←怪胎欸",
      desc2: "吃軟糖ㄇ！→"
  },
  {
      id: "XY",
      label: "朋友",
      chara1: "xiu",
      chara2: "yoni",
      desc1: "←覺得有點危險",
      desc2: "吃軟糖ㄇ！→"
  },
  {
      id: "LY",
      label: "同居兄弟",
      chara1: "yoni",
      chara2: "lance",
      desc1: "←吃軟糖ㄇ！",
      desc2: "不要。→"
  },
  {
      id: "LH",
      label: "老朋友",
      chara1: "hannah",
      chara2: "lance",
      desc1: "↓吐苦水",
      desc2: "很瞭解↑"
  },
  {
      id: "EA",
      label: "關係不佳",
      chara1: "edd",
      chara2: "axel",
      desc1: "↙令人不愉快",
      desc2: "非常不爽↗"
  },
  {
      id: "AE",
      label: "兄妹",
      chara1: "axel",
      chara2: "ellie",
      desc1: "↓吵死了!",
      desc2: "你才吵!↑"
  },    
  {
      id: "EX",
      label: "朋友&同事",
      chara1: "edd",
      chara2: "xiu",
      desc1: "酸言酸語↓",
      desc2: "↑酸言酸語"
  },
  {
      id: "XE",
      label: "網路閨密",
      chara1: "xiu",
      chara2: "ellie",
      desc1: "↓信賴",
      desc2: "支持↑"
  },
  {
      id: "BE",
      label: "朋友",
      chara1: "blade",
      chara2: "ellie",
      desc1: "↓人還不錯",
      desc2: "有點崇拜↑"
  },
  {
      id: "HM",
      label: "朋友",
      chara1: "minerva",
      chara2: "hannah",
      desc1: "↙仰慕&喜歡",
      desc2: "實力不錯↗"
  },    
  {
      id: "EM",
      label: "雙胞胎",
      chara1: "minerva",
      chara2: "edd",
      desc1: "訓練對象↓",
      desc2: "↑努力追趕"
  },  
  {
      id: "BM",
      label: "點頭之交",
      chara1: "minerva",
      chara2: "blade",
      desc1: "↙有點感興趣",
      desc2: "佩服↗"
  },
  {
      id: "SB",
      label: "英雄vs惡役",
      chara1: "simon",
      chara2: "blade",
      desc1: "←永遠的勁敵",
      desc2: "你超煩→"
  },
  {
      id: "SA",
      label: "死對頭",
      chara1: "simon",
      chara2: "axel",
      desc1: "↙礙事的浮魷垃圾！",
      desc2: "臭章螂給我滾！↗"
  }
]

var relationshipData_en = [
  {
      id: "AB",
      label: "Close Friends",
      chara1: "blade",
      chara2: "axel",
      desc1: "Annoyed by↘",
      desc2: "↖Has feelings for"
  },
  {
      id: "XB",
      label: "Close Friends",
      chara1: "blade",
      chara2: "xiu",
      desc1: "Annoyed by↘",
      desc2: "↖Really likes"
  },
  {
      id: "YB",
      label: "Childhood<br>Friends",
      chara1: "blade",
      chara2: "yoni",
      desc1: "↙Annoyed by",
      desc2: "U r awesome!!↗"
  },
  {
      id: "HB",
      label: "Siblings",
      chara1: "blade",
      chara2: "hannah",
      desc1: "←Hates/afraid of",
      desc2: "Hates/torments→"
  },
  {
      id: "LB",
      label: "Mentorship",
      chara1: "blade",
      chara2: "lance",
      desc1: "↙Admires/likes",
      desc2: "Strict but caring↗"
  },
  {
      id: "EB",
      label: "Friends",
      chara1: "blade",
      chara2: "edd",
      desc1: "Annoyed by→",
      desc2: "←Wants to be close"
  },
  {
      id: "XA",
      label: "Ex Boyfriends",
      chara1: "axel",
      chara2: "xiu",
      desc1: "Not happy about→",
      desc2: "←You need to chill"
  },
  {
      id: "YA",
      label: "Friends",
      chara1: "axel",
      chara2: "yoni",
      desc1: "←What an oddball",
      desc2: "*Shoves gummies*→"
  },
  {
      id: "XY",
      label: "Friends",
      chara1: "xiu",
      chara2: "yoni",
      desc1: "←A little wary of",
      desc2: "*Shoves gummies*→"
  },
  {
      id: "LY",
      label: "Siblings",
      chara1: "yoni",
      chara2: "lance",
      desc1: "←*Shoves gummies*",
      desc2: "*Rejects gummies*→"
  },
  {
      id: "LH",
      label: "Old friends",
      chara1: "hannah",
      chara2: "lance",
      desc1: "↓Vents to",
      desc2: "Knows well↑"
  },
  {
      id: "EA",
      label: "Love Rivals?",
      chara1: "edd",
      chara2: "axel",
      desc1: "↙Displeased",
      desc2: "Strong dislike↗"
  },
  {
      id: "AE",
      label: "Siblings",
      chara1: "axel",
      chara2: "ellie",
      desc1: "↓Urgh!",
      desc2: "Nags↑"
  },    
  {
      id: "EX",
      label: "Co-workers",
      chara1: "edd",
      chara2: "xiu",
      desc1: "Tries to impress↓",
      desc2: "↑Sarcastic"
  },
  {
      id: "XE",
      label: "Online Pals",
      chara1: "xiu",
      chara2: "ellie",
      desc1: "↓Trusts",
      desc2: "Supportive↑"
  },
  {
      id: "BE",
      label: "Friends",
      chara1: "blade",
      chara2: "ellie",
      desc1: "↓A bit noisy",
      desc2: "Kind of admires↑"
  },
  {
      id: "HM",
      label: "Friends",
      chara1: "minerva",
      chara2: "hannah",
      desc1: "↙Crush",
      desc2: "Not too shabby↗"
  },    
  {
      id: "EM",
      label: "Twins",
      chara1: "minerva",
      chara2: "edd",
      desc1: "Let's train↓",
      desc2: "↑Catching up"
  },  
  {
      id: "BM",
      label: "Acquaintance",
      chara1: "minerva",
      chara2: "blade",
      desc1: "↙Slightly interested",
      desc2: "Respects↗"
  },
  {
      id: "SB",
      label: "Enemies...?",
      chara1: "simon",
      chara2: "blade",
      desc1: "←One-side rivalry",
      desc2: "Annoyed by→"
  },
  {
      id: "SA",
      label: "Enemies",
      chara1: "simon",
      chara2: "axel",
      desc1: "↙Inkling pest!",
      desc2: "Octarian scum!↗"
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
          'Emo & angsty',
          'Has anxiety issue',
          'Lack of confidence',
          'Tries to act cool',
          'Is actually a sweet boy'
      ],
      outfits:[
          { name: 'Regular', url: 'bl1.png'},
          { name: 'Agent 3', url: 'bl2.png'},
          { name: 'Sanitized', url: 'bl3.png'}
      ],
      bio:[
          'A boy who came from around Inkopolis Plaza.',
          '[S1] He used to refuse playing any turf/ranked game and would push away anyone who wants to be friend due to his anxious nature, which resulted from being bullied by his older sister for a long period of time. After being abruptly scouted by Captain Cuttlefish as agent 3, he received support from captain’s grandkids, it was then he decided to move out and live his own life with the new name “Blade”, he started practicing and eventually became able to play competitively.',
          '[S2] He then met Axel and other friends and eventually got along since he is now a bit more opened-up to other people, and they decided to form a team called “Bad Buttons” with Blade as leader.'
      ]
  },
  {
      id: 'axel',
      name: 'Axel',
      gender: 'Male',
      like: 'Fight',
      dislike: 'Losing or getting mocked',
      rank: "S+ to X",
      mains: "Dualies",
      traits: [
          'Aggressive behaviors',
          "Always gets into fights",
          'Rude, brusque, cocky',
          'Hot headed',
          'Cares about his grandma'
      ],
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 4', url: 'xxx.png'}
      ],
      bio:[
          ' :P '
      ]
  },
  {
      id: 'xiu',
      name: 'Xiu',
      gender: 'Male',
      like: 'Attentions',
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 4', url: 'xxx.png'}
      ],
      bio:[
          ' :P '
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'}
      ],
      bio:[
          'He loves to be get high using some substence, but ever since he joined Bad Buttons he had cut out most of it, due to Turf War Association\'s ban on use of illegal drug. Although He wasn\'t able resist the temptation of getting high so he has been looking for a solution that would allow him to play Turf War.',
          'He is involved in some low level gang activity, mostly selling drugs.'
      ]
  },
  {
      id: 'hannah',
      name: 'Hannah',
      gender: 'Female',
      like: '???',
      dislike: '??',
      rank: "X",
      mains: "N-zap, .52/.96",
      traits: [
          'Bully',
          '',
          '',
          ''
      ],
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 3', url: 'xxx.png'}
      ],
      bio:[
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 3', url: 'xxx.png'}
      ],
      bio:[
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 4', url: 'xxx.png'}
      ],
      bio:[
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 8', url: 'xxx.png'}
      ],
      bio:[
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'},
          { name: 'Agent 8', url: 'xxx.png'}
      ],
      bio:[
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
      outfits:[
          { name: 'Regular', url: 'xxx.png'}
      ],
      bio:[
          ':/'
      ]
  }   

]

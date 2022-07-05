//=====================//
//===   variables   ===//
//=====================//
var charaNameData = [
    "blade",
    "axel",
    "xiu",
    "yoni",
    "hannah",
    "lance",
    "ellie",
    "edd",
    "minerva",
    "simon",
    "temp"
]

const charaBasicData = new Map([
    ["blade", "rgb(127, 180, 57)"],
    ["axel", "rgb(221, 155, 33)"],
    ["xiu", "rgb(65, 173, 206)"],
    ["yoni", "rgb(224, 213, 54)"],
    ["hannah", "rgb(41, 81, 194)"],
    ["lance", "rgb(148, 77, 206)"],
    ["ellie", "rgb(17, 148, 87)"],
    ["edd", "rgb(211, 43, 43)"],
    ["minerva", "rgb(167, 87, 83)"],
    ["simon", "rgb(216, 40, 163)"]
  ]);

var photoPosData = [
    {id:"minerva", x : 635, y: 15, rot: 2},
    {id:"simon", x : 845, y: 150, rot: 12},
    {id:"temp", x : 130, y: 40, rot: 15},

    {id:"blade", x : 345, y: 245, rot: 5},
    {id:"hannah", x : 35, y: 250, rot: -6},
    {id:"edd", x : 630, y: 250, rot: -5},

    {id:"lance", x : 35, y: 525, rot: 0},
    {id:"yoni", x : 225, y: 525, rot: 10},
    {id:"axel", x : 485, y: 525, rot: -8},
    {id:"xiu", x : 775, y: 525, rot: 3},

    {id:"ellie", x : 435, y: 780, rot: 5},
]

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

//=====================//
//===   functions   ===//
//=====================//

function buildChart(relationshipData){
    var chartHTML = "";
    chartHTML += "<ul>";
    chartHTML += "<li class='group teamBB'></li>";
    for(var i=0; i<charaNameData.length; i++){
        chartHTML += "<li class='chara md-trigger' id='"+ charaNameData[i] +"' data-modal='modal-blur'>";
        chartHTML += "<div class='nameSticker'>"+ charaNameData[i].charAt(0).toUpperCase() + charaNameData[i].slice(1); +"</div>";
        chartHTML += "</li>";
    }
    for(var j=0; j<relationshipData.length; j++){
        chartHTML += "<li class='relation' id='rel_"+ relationshipData[j].id +"'>";
        chartHTML += "<span class='relDesc "+ relationshipData[j].chara1 +"' >"+ relationshipData[j].desc1 +"</span>"
        chartHTML += "<div class='relLabel'>"+ relationshipData[j].label +"</div>";
        chartHTML += "<span class='relDesc "+ relationshipData[j].chara2 +"' >"+ relationshipData[j].desc2 +"</span>"
        chartHTML += "</li>";
    }
    chartHTML += "<ul>";
    $("#chart").html(chartHTML);
}

function arrangeChartContent(relationshipPosData, iconPosData){
    //set icon positions
    for (const iconPos of iconPosData) {
        $("#"+iconPos.id).css("left", iconPos.x);
        $("#"+iconPos.id).css("top", iconPos.y);
        $("#"+iconPos.id).css("-webkit-transform", "rotate(" +iconPos.rot+"deg)");
        $("#"+iconPos.id).css("-ms-transform", "rotate(" +iconPos.rot+"deg)");
        $("#"+iconPos.id).css("transform", "rotate(" +iconPos.rot+"deg)");
    }
    //set relationship label positions
    for (const relPos of relationshipPosData) {
        $("#rel_"+relPos.id).css("left",relPos.x);
        $("#rel_"+relPos.id).css("top",relPos.y);
    }
}

function transformRotatedCharaIcon(id, posData, scale){
    //need this bc transform is too dumb to remember the initial rotation
    var currentHoverCharaRot = posData.find(e => e.id == id).rot;
    $("#"+id).css("-webkit-transform", "rotate(" + currentHoverCharaRot +"deg) " + scale);
    $("#"+id).css("-ms-transform", "rotate(" + currentHoverCharaRot +"deg) " + scale);
    $("#"+id).css("transform", "rotate(" + currentHoverCharaRot +"deg) "+ scale);
}

function relationshipHoverEvent(relationshipData){
    $('[id^=rel_]').each(function () {
        const id = this.id.replace("rel_","");
        const relationship = relationshipData.find( r => r.id == id);
        const otherChara = charaNameData.filter(e => e !== relationship.chara1 && e !== relationship.chara2 );           
        const otherRelation = relationshipData.filter(r => r !== relationship );
        $(this).hover(function() {
            $("#line_"+id+"_fill").addClass('animatedPath');
            // hide other chara
            for(const chara of otherChara ){
                $("#"+chara).addClass("faded");
            }
            // hide other relationship
            for(const relation of otherRelation ){
                $("#rel_"+relation.id).addClass("faded");
                $("#line_"+relation.id).addClass("faded");
            }
        }, function() {
            $("#line_"+id+"_fill").removeClass('animatedPath');
            // unhide other chara
            for(const chara of otherChara ){
                $("#"+chara).removeClass("faded");
            }
            // unhide other relationship
            for(const relation of otherRelation ){
                $("#rel_"+relation.id).removeClass("faded");
                $("#line_"+relation.id).removeClass("faded");
            }     
        });
    });
}

function charaHoverEvent(relationshipData, iconPosData){
    $('.chara').each(function () {
        var unrelatedChara = getUnrelated(this.id, relationshipData);
        var unrelatedRelations = relationshipData.filter(r => r.chara1 !== this.id && r.chara2 !== this.id );
        var relatedRelations = relationshipData.filter(r => r.chara1 === this.id || r.chara2 === this.id );
        $(this).hover(function() {
            transformRotatedCharaIcon(this.id, iconPosData, "scale(1.1)");
            for(const chara of unrelatedChara){
                $("#"+chara).addClass("faded");
            }
            for(const relation of unrelatedRelations){
                $("#rel_"+relation.id).addClass("faded");
                $("#line_"+relation.id).addClass("faded");
            }
            for(const relation of relatedRelations){
                
                if(relation.id == "HB" || relation.id == "BM"){
                    $("#line_"+relation.id+"_fill").addClass('animatedPath2');
                }else{
                    $("#line_"+relation.id+"_fill").addClass('animatedPath');
                }
                $("#line_"+relation.id+"_fill").addClass(this.id);
            }
        }, function() {
            transformRotatedCharaIcon(this.id, iconPosData, "")
            for(const chara of unrelatedChara){
                $("#"+chara).removeClass("faded");
            }
            for(const relation of unrelatedRelations){
                $("#rel_"+relation.id).removeClass("faded");
                $("#line_"+relation.id).removeClass("faded");
            }
            for(const relation of relatedRelations){
                if(relation.id == "HB" || relation.id == "BM"){
                    $("#line_"+relation.id+"_fill").removeClass('animatedPath2');
                }else{
                    $("#line_"+relation.id+"_fill").removeClass('animatedPath');
                }
                $("#line_"+relation.id+"_fill").removeClass(this.id);
            }            
        });
    });

    function getUnrelated(name, relationshipData) {
        var unrelated = charaNameData.slice();
        unrelated = unrelated.filter(e => e !== name);
    
        for (const relation of relationshipData) {
            if (relation.chara1 === name || relation.chara2 === name) {
                unrelated = unrelated.filter(e => e !== (relation.chara1 !== name ? relation.chara1 : relation.chara2));
            }
        }
        return unrelated;
    }    

}

function setUpBioPageFor(charaBioData){
    //Fill header
    $(".bioHeader").html(charaBioData.id.toUpperCase());

    //Fill outfit panel
    var outfitListHTML = ""
    for(const ourfitData of charaBioData.outfits){
        outfitListHTML += "<li>"+ ourfitData.name +"</li>";
    }
    $(".outfitSelect").html(outfitListHTML);    
    setUpOutfitSwitchEvents(charaBioData);

    //Fill basic bio panel
    var bioBasicHTML = "<table>";
    bioBasicHTML += "<tr><td>Name</td><td>"+ charaBioData.name +"</td></tr>";
    bioBasicHTML += "<tr><td>Gender</td><td>"+ charaBioData.gender +"</td></tr>";
    // bioBasicHTML += "<tr><td>Sexuality</td><td><div class='iconBi'></div>or<div class='iconPan'></div></td></tr>";
    bioBasicHTML += "<tr><td>Likes</td><td>"+ charaBioData.like +"</td></tr>";
    bioBasicHTML += "<tr><td>Dislike</td><td>"+ charaBioData.dislike +"</td></tr>";
    bioBasicHTML += "<tr><td>Rank</td><td>"+ charaBioData.rank +"</td></tr>";
    bioBasicHTML += "<tr><td>Mains</td><td>"+ charaBioData.mains +"</td></tr>";
    bioBasicHTML += "</table>";

    var bioTraitsHTML = "<div class='traitLabel'>Traits</div>";
    bioTraitsHTML += "<ul class='traits'>";
    for(const traitsData of charaBioData.traits)
        bioTraitsHTML += "<li>"+ traitsData +"</li>";
    bioTraitsHTML += "</ul>";

    $(".bioBasic").html(bioBasicHTML + bioTraitsHTML);

    //Fill detailed bio panel
    var bioLinesHTML = "";
    for(const bioLines of charaBioData.bio){
        bioLinesHTML += bioLines + "<br><br>";
    }
    $(".bioDetail").html(bioLinesHTML);

    //Set up character-specific page style
    var color = charaBasicData.get(charaBioData.id);
    $(".bioBasic table tr td:first-child").css("color", color );
    $(".bioBasic table tr td:first-child").css("border-right", "3px solid "+color );
    $(".traitLabel").css("border-bottom", "3px solid "+ color );
    $(".traitLabel").css("color", color);
    $(".bioDetail").css("box-shadow", "-25px -25px 0 " + color);
}

function setUpOutfitSwitchEvents(charaBioData){
    var newArtHTML = "";
    for(const outfit of charaBioData.outfits){
        newArtHTML += "<img src='assets/img/"+ outfit.url + "'>";
    }
    $(".bioArt").html(newArtHTML);
    $(".bioArt img:not(:first-child)").addClass("hide");
    $(".outfitSelect li:first-child").addClass("focusedOutfit");
    $(".outfitSelect li").click(function() {
        $(this).addClass("focusedOutfit");
        $(this).siblings().removeClass("focusedOutfit");
        $(".bioArt img:nth-child("+ ($(this).index()+1) +")").removeClass("hide");
        $(".bioArt img:not(:nth-child("+ ($(this).index()+1) +"))").addClass("hide");
    });
}

function modalEffectsInit(bioData) {
	var overlay = document.querySelector( '.md-overlay' );
	[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {
		var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
			close = modal.querySelector( '.md-close' );

		function removeModal( hasPerspective ) {
			classie.remove( modal, 'md-show' );

			if( hasPerspective ) {
				classie.remove( document.documentElement, 'md-perspective' );
			}
		}

		function removeModalHandler() {
			removeModal( classie.has( el, 'md-setperspective' ) );
			// document.body.classList.toggle('noscroll');
		}

		el.addEventListener( 'click', function( ev ) {
            var currentCharaBio = bioData.find(b => b.id === el.id);
            setUpBioPageFor(currentCharaBio);
            setTimeout(function(){
                classie.add( modal, 'md-show' );
                overlay.removeEventListener( 'click', removeModalHandler );
                overlay.addEventListener( 'click', removeModalHandler );
            }, 1);
            // document.body.classList.toggle('noscroll');

			if( classie.has( el, 'md-setperspective' ) ) {
				setTimeout( function() {
					classie.add( document.documentElement, 'md-perspective' );
				}, 25 );
			}
		});

		close.addEventListener( 'click', function( ev ) {
			ev.stopPropagation();
			removeModalHandler();
		});

	} );
}

function setupStuff(relationshipData, iconPosData, relationshipPosData, bioData){
    buildChart(relationshipData);
    modalEffectsInit(bioData);
    relationshipHoverEvent(relationshipData);
    charaHoverEvent(relationshipData, iconPosData);
    arrangeChartContent(relationshipPosData, iconPosData);  
}

function setupLangSwitch(){

}

//======================//
//===                ===//
//=== Ready Function ===//
//===                ===//
//======================//

var lang = "EN";

$(document).ready(function(){

    // console.log(charaData.get("blade")); // 'bar'
    console.log(charaData["blade"]); // 'bar'

    setupStuff(relationshipData_en, photoPosData, relationshipPosData, bioData_en)

    $( "#langSwitch" ).click(function() {
        if(lang == "EN"){
            lang = "CH";
            setupStuff(relationshipData_ch, photoPosData, relationshipPosData, bioData_en)
        }else{
            lang = "EN";
            setupStuff(relationshipData_en, photoPosData, relationshipPosData, bioData_en)
        }
    });

});
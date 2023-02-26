//=====================//
//===   variables   ===//
//=====================//

var siteData = {
    en: {
        title: "Hazy's SplatVerse",
        description: ["Hazy's Splatoon OC bio/lore dump", "⚠️Currently under construction","English translation still in progress so plz come back later :s"],
        bioDetailTabs: ["Bio", "Personality", "Trivia"],
        creatorList: [
            {
                name: "Haze",
                title: "Creator",
                quote: "i stan ponytail boi",
                imageUrl: "assets/img/creator_hz.png",
                subNames: ["Hazy", "Hazel", "HZ"],
                infoList:[
                    "Hi I am one who designed the art/concepts/story for these OCs, I also made this website.",
                    "I'm very shy and I cringe at myself everyday, so it means alot to me that someone is actually looking at this page🥺. Thanks so much for visiting!!!"
                ]
            },
            {
                name: "58",
                title: "Co-Creator",
                quote: "----------",
                imageUrl: "assets/img/creator_58.jpg",
                subNames: ["Woopa", "Xolot"],
                infoList:[
                    "",
                    ""
                ]
            }
        ],
        buttonTrivia: "associated Nintendo Switch button is"
    },
    ch: {
        title: "Hazy's SplatVerse",
        description: ["Hazy家漆彈角色懶人總整理+全員介紹頁面","⚠️請注意一些地名跟偶像團體名會採用我流翻譯", "定期更新素材跟設定中，時常微調"],
        bioDetailTabs: ["背景", "性格", "補充"],
        creatorList: [
            {
                name: "Haze",
                title: "主要創作人",
                quote: "一代男主我乖孫🥺",
                imageUrl: "assets/img/creator_hz.png",
                subNames: ["Hazy", "嘿紫", "嘿Z", "迷霧"],
                infoList:[
                    "負責每個角色的基本構思、設定、背景故事、美術、互動關係等等，也負責網站大部分的內容跟版型。三不五時就要被自己做出來的東西cringe一下。",
                    "《漆彈資歷》<br>一代一發售就入坑（雖然只有玩到S）二代全X。愛用武器雜多。"
                ]
            },
            {
                name: "58",
                title: "共構小夥伴",
                quote: "吃我ㄉ考察推啦！！",
                imageUrl: "assets/img/creator_58.jpg",
                subNames: ["Woopa", "烏波", "ㄨㄆ"],
                infoList:[
                    "負責角色各種設定的優化、延伸、補完等等。也會幫忙填寫網站部分的文稿。負責部分佔比較多的角色包含艾德、尤尼、偉德、毒牙。	",
                    "《漆彈資歷》<br>一代時期只有看Haze玩比較多，二代全X。MAIN水栓。"
                ]
            }
        ],
        buttonTrivia: "代表按鈕是"
    }
}

//=====================//
//===   functions   ===//
//=====================//

function buildDiagram(relationshipData) {
    var diagramHTML = "";
    diagramHTML += "<ul>";
    for (var chara in charaData) {
        diagramHTML += "<li class='charaPhotoBox md-trigger' id='" + chara + "' data-modal='modal-chara'>";
        diagramHTML += "<div class='charaPhoto " + chara + "Photo'></div>";
        diagramHTML += "<div class='nameSticker'>" + getDisplayName(chara) + "</div>";
        diagramHTML += "</li>";
    }
    for (var j = 0; j < relationshipData.length; j++) {
        diagramHTML += "<li class='relation md-trigger' id='rel_" + relationshipData[j].id + "' data-modal='modal-relationship'>";
        diagramHTML += "<span class='relDesc " + relationshipData[j].chara1 + "' >" + relationshipData[j].desc1 + "</span>"
        diagramHTML += "<div class='relLabel'>" + relationshipData[j].label + "</div>";
        diagramHTML += "<span class='relDesc " + relationshipData[j].chara2 + "' >" + relationshipData[j].desc2 + "</span>"
        diagramHTML += "</li>";
    }
    diagramHTML += "<ul>";
    $("#diagram").html(diagramHTML);
}

function arrangeDiagramContent() {
    //set icon positions
    for (var chara in charaData) {
        $("#" + chara).css("left", charaData[chara].photoPos.x);
        $("#" + chara).css("top", charaData[chara].photoPos.y);
        $("#" + chara).css("-webkit-transform", "rotate(" + charaData[chara].photoPos.rotation + "deg)");
        $("#" + chara).css("-ms-transform", "rotate(" + charaData[chara].photoPos.rotation + "deg)");
        $("#" + chara).css("transform", "rotate(" + charaData[chara].photoPos.rotation + "deg)");
    }

    //set relationship label positions
    for (const relPos of relationshipPosData) {
        $("#rel_" + relPos.id).css("left", relPos.x);
        $("#rel_" + relPos.id).css("top", relPos.y);
    }
}

function transformRotatedCharaIcon(selector, id, scale) {
    //need this bc transform is too dumb to remember the initial rotation
    var currentHoverCharaRot = charaData[id].photoPos.rotation;
    $(selector).css("-webkit-transform", "rotate(" + currentHoverCharaRot + "deg) " + scale);
    $(selector).css("-ms-transform", "rotate(" + currentHoverCharaRot + "deg) " + scale);
    $(selector).css("transform", "rotate(" + currentHoverCharaRot + "deg) " + scale);
}

function setUpRelationshipHoverEvent(relationshipData) {
    $("[id^=rel_]").each(function () {
        const id = this.id.replace("rel_", "");
        const relationship = relationshipData.find(r => r.id == id);
        const otherChara = Object.keys(charaData).filter(e => e !== relationship.chara1 && e !== relationship.chara2);
        const otherRelation = relationshipData.filter(r => r !== relationship);
        $(this).hover(function () {
            //$("#line_"+id).addClass("duoPath");
            $("#line_" + id + "_fill").addClass("duoPath");
            $("#line_" + id + "_fill").addClass(relationship.chara1);
            $("#line_" + id).addClass(relationship.chara2);
            $("#line_" + id).addClass("duoPathBase");
            // hide other chara
            for (const chara of otherChara) {
                $("#" + chara).addClass("faded");
            }
            // hide other relationship
            for (const relation of otherRelation) {
                $("#rel_" + relation.id).addClass("faded");
                $("#line_" + relation.id).addClass("faded");
            }
        }, function () {
            //$("#line_"+id).removeClass("duoPath");
            $("#line_" + id + "_fill").removeClass("duoPath");
            $("#line_" + id + "_fill").removeClass(relationship.chara1);
            $("#line_" + id).removeClass(relationship.chara2);
            $("#line_" + id).removeClass("duoPathBase");
            // unhide other chara
            for (const chara of otherChara) {
                $("#" + chara).removeClass("faded");
            }
            // unhide other relationship
            for (const relation of otherRelation) {
                $("#rel_" + relation.id).removeClass("faded");
                $("#line_" + relation.id).removeClass("faded");
            }
        });
    });
}

function setUpCharaHoverEvent(relationshipData) {
    $(".charaPhotoBox").each(function () {
        var unrelatedChara = getUnrelated(this.id, relationshipData);
        var unrelatedRelations = relationshipData.filter(r => r.chara1 !== this.id && r.chara2 !== this.id);
        var relatedRelations = relationshipData.filter(r => r.chara1 === this.id || r.chara2 === this.id);
        $(this).hover(function () {
            transformRotatedCharaIcon("#" + this.id, this.id, "scale(1.1)");
            for (const chara of unrelatedChara) {
                $("#" + chara).addClass("faded");
            }
            for (const relation of unrelatedRelations) {
                $("#rel_" + relation.id).addClass("faded");
                $("#line_" + relation.id).addClass("faded");
            }
            for (const relation of relatedRelations) {
                var start = relationshipPosData.find(r => r.id === relation.id).start;
                if (start !== this.id) {
                    $("#line_" + relation.id + "_fill_rev").addClass("animatedPath");
                } else {
                    $("#line_" + relation.id + "_fill").addClass("animatedPath");
                }
                $("#line_" + relation.id + "_fill").addClass(this.id);
                $("#line_" + relation.id + "_fill_rev").addClass(this.id);
            }
        }, function () {
            transformRotatedCharaIcon("#" + this.id, this.id, "");
            for (const chara of unrelatedChara) {
                $("#" + chara).removeClass("faded");
            }
            for (const relation of unrelatedRelations) {
                $("#rel_" + relation.id).removeClass("faded");
                $("#line_" + relation.id).removeClass("faded");
            }
            for (const relation of relatedRelations) {
                var start = relationshipPosData.find(r => r.id === relation.id).start;
                if (start !== this.id) {
                    $("#line_" + relation.id + "_fill_rev").removeClass("animatedPath");
                } else {
                    $("#line_" + relation.id + "_fill").removeClass("animatedPath");
                }
                $("#line_" + relation.id + "_fill").removeClass(this.id);
                $("#line_" + relation.id + "_fill_rev").removeClass(this.id);
            }
        });
    });

    function getUnrelated(name, relationshipData) {
        var unrelated = Object.keys(charaData).slice();
        unrelated = unrelated.filter(e => e !== name);

        for (const relation of relationshipData) {
            if (relation.chara1 === name || relation.chara2 === name) {
                unrelated = unrelated.filter(e => e !== (relation.chara1 !== name ? relation.chara1 : relation.chara2));
            }
        }
        return unrelated;
    }

}

function setUpBioPageFor(charaBioData) {
    //Fill header
    var bioHeaderName = getDisplayName(charaBioData.id);
    $(".bioHeader span:first-child").html(bioHeaderName);
    $(".bioHeader span:nth-child(2)").html(charaData[charaBioData.id].jpname);

    //Fill outfit panel
    var outfitListHTML = ""
    if (charaBioData.outfits.length > 1) {
        for (const ourfitData of charaBioData.outfits) {
            outfitListHTML += "<li>"+ ourfitData.name + "</li>";
        }
    }
    $(".outfitSelect").html(outfitListHTML);
    setUpOutfitSwitchEvents(charaBioData);

    if (currentLang == "CH")
        $(".outfitSelect li").addClass("outfitSelect-ch");
    else
        $(".outfitSelect li").removeClass("outfitSelect-ch");

    //Fill basic bio panel
    var bioBasicHTML = "<table>";
    bioBasicHTML += "<tr><td>Name</td><td>" + charaBioData.name + "</td></tr>";
    bioBasicHTML += "<tr><td>Gender</td><td>" + charaBioData.gender + "</td></tr>";
    bioBasicHTML += "<tr><td>Age</td><td>" + charaData[charaBioData.id].age + "+</td></tr>";
    // bioBasicHTML += currentLang == "CH" ? "<tr><td>Age</td><td>" + charaData[charaBioData.id].age + "歲</td></tr>" : "";
    // bioBasicHTML += "<tr><td>Sexuality</td><td><div class='iconBi'></div>or<div class='iconPan'></div></td></tr>";
    bioBasicHTML += "<tr><td>Likes</td><td>" + charaBioData.like + "</td></tr>";
    bioBasicHTML += "<tr><td>Dislike</td><td>" + charaBioData.dislike + "</td></tr>";
    bioBasicHTML += "<tr><td>Rank</td><td>" + charaBioData.rank + "</td></tr>";
    bioBasicHTML += "<tr><td>Mains</td><td>" + charaBioData.mains + "</td></tr>";
    bioBasicHTML += "</table>";

    var bioQuirkHTML = "<div class='sectionLabel'>Key Trait</div>";
    bioQuirkHTML += "<ul class='keyTrait'><li>"+charaBioData.quirk+"</li></ul>";

    var bioTraitsHTML = "<div class='sectionLabel'>Traits</div>";
    bioTraitsHTML += "<ul class='traits'>";
    for (const traitsData of charaBioData.traits)
        bioTraitsHTML += "<li>" + traitsData + "</li>";
    bioTraitsHTML += "</ul>";

    $(".bioBasic").html(bioBasicHTML + bioQuirkHTML + bioTraitsHTML);

    //Fill detailed bio panel
    setUpBioSwitchEvents(charaBioData);

    //Fill refsheets
    var refSheetHTML = "";
    if (charaBioData.refsheets) {
        for (const imgUrl of charaBioData.refsheets) {
            refSheetHTML += "<a href='" + imgUrl + "' >";
            refSheetHTML += "<div></div>";
            refSheetHTML += "</a>";
        }
    }
    $(".refSheets").html(refSheetHTML);
    if (charaBioData.refsheets) {
        for (var i = 0; i < charaBioData.refsheets.length; i++) {
            $(".refSheets").children().children().eq(i).css("background", "url(" + charaBioData.refsheets[i] + ") no-repeat");
            $(".refSheets").children().children().eq(i).css("background-size", "200%");
            $(".refSheets").children().children().eq(i).css("background-position", "center top");
        }
    }

    //Fill themes
    var themeHTML = "";
    if (charaBioData.themes) {
        for (const theme of charaBioData.themes) {
            themeHTML += "<div data-id='" + theme.id + "'></div>";
        }
    }
    $(".themes").html(themeHTML);
    setUpThemeClickEvents();

    //Set up character-specific page style
    var color = charaData[charaBioData.id].color;
    $(".bioBasic table tr td:first-child").css("color", color);
    $(".bioBasic table tr td:first-child").css("border-right", "3px solid " + color);
    $(".sectionLabel").css("border-bottom", "3px solid " + color);
    $(".sectionLabel").css("color", color);
    $(".bioDetail").css("box-shadow", "-25px -45px 0 " + color);
    $(".bioOutfits").css("top", $(".bioBasic").outerHeight() +  10);
    // $(".refSheets > a div:hover").css("box-shadow", "-8px -8px 0px 0px "+color);
    $(".refSheets").children().children().hover(function () {
        $(this).css("box-shadow", "-8px -8px 0px 0px " + color);
    }, function () {
        $(this).css("box-shadow", "-8px -8px 0px 0px black");
    });
    $(".miniBar").css("background",color);

}

function setUpRelationPageFor(relationData) {
    //fill two profile photo and name

    var chara1 = {
        name: relationData.chara1,
        desc: relationData.desc1,
        descDetail: relationData.descDetail1
    }

    var chara2 = {
        name: relationData.chara2,
        desc: relationData.desc2,
        descDetail: relationData.descDetail2
    }

    if (relationPhotoReverse.includes(relationData.id)) {
        [chara1, chara2] = [chara2, chara1];
    }

    var chara1photoHTML = "<div class='charaPhoto " + chara1.name + "Photo'></div>"
        + "<div class='nameSticker'>" + getDisplayName(chara1.name) + "</div>";
    var chara2photoHTML = "<div class='charaPhoto " + chara2.name + "Photo'></div>"
        + "<div class='nameSticker'>" + getDisplayName(chara2.name) + "</div>";
    $(".relPhotoBox:nth-child(1)").html(chara1photoHTML);
    $(".relPhotoBox:nth-child(2)").html(chara2photoHTML);

    //fill label
    $(".relTitle .middle").html(relationData.label);
    $(".relTitle .upper").html("<div>" + (chara1.descDetail || chara1.desc) + "</div>");
    $(".relTitle .lower").html((chara2.descDetail || chara2.desc));

    //fill detail
    var relationContentHTML = "<ul class='dash'>";
    for (const sentence of relationData.content) {
        relationContentHTML += "<li>" + sentence + "</li>";
    }
    relationContentHTML += "</ul>"
    $(".relDetail").html(relationContentHTML);
    $(".relDetail").scrollTop(0);

    //apply style
    $(".relTitle .upper").css("color", charaData[chara1.name].color);
    $(".relTitle .lower").css("color", charaData[chara2.name].color);
    $("#upperArrow").css("fill", charaData[chara1.name].color);
    $("#lowerArrow").css("fill", charaData[chara2.name].color);
    $(".relationshipPage").css("border-left", "25px solid " + charaData[chara1.name].color);
    $(".relationshipPage").css("border-right", "25px solid " + charaData[chara2.name].color);
}

function setUpOutfitSwitchEvents(charaBioData) {
    var useSplashSVGDef = "<svg class='splashIconSvg' viewBox='0 0 3000 3000' width='54' height='54' style='stroke-width:12;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;'><use xlink:href='#splashIcon'></svg>"
    var newArtHTML = "";
    for (const outfit of charaBioData.outfits) {
        newArtHTML += "<img src='assets/img/" + outfit.url + "'>";
    }
    $(".bioArt").html(newArtHTML);
    $(".bioArt img:not(:first-child)").addClass("hide");
    $(".outfitSelect li:first-child").addClass("focusedOutfit");
    $(".outfitSelect li:first-child").prepend(useSplashSVGDef);
    $(".splashIconSvg").css("fill", charaData[charaBioData.id].color);

    $(".outfitSelect li").click(function () {
        $(this).addClass("focusedOutfit");
        $(this).siblings().removeClass("focusedOutfit");
        $(".bioArt img:nth-child(" + ($(this).index() + 1) + ")").removeClass("hide");
        $(".bioArt img:not(:nth-child(" + ($(this).index() + 1) + "))").addClass("hide");

        $(this).prepend(useSplashSVGDef);
        $(this).siblings().find(".splashIconSvg").remove();
        $(".splashIconSvg").css("fill", charaData[charaBioData.id].color);
    });
}

function setUpBioSwitchEvents(charaBioData) {
    //load bio and focus on bio
    $(".bioDetailInner").html(printLinesWithBreak(parseToIcon(charaBioData.bio), 2));
    $(".bioDetailTabs li:first-child").addClass("bioTabFocused");
    $(".bioDetailTabs li:first-child").siblings().removeClass("bioTabFocused");
    $(".bioDetailInner").scrollTop(0);

    $(".bioDetailTabs li").click(function () {
        $(".bioDetailInner").scrollTop(0);
        $(this).addClass("bioTabFocused");
        $(this).siblings().removeClass("bioTabFocused");
        if ($(this).index() == 1) {
            $(".bioDetailInner").html(printLinesWithBreak(charaBioData.personality ? charaBioData.personality : charaBioData.bio, 2));
        } else if ($(this).index() == 2) {
            var copiedTrivia = charaBioData.trivia.slice();
            //add button trivia
            copiedTrivia.push(getPronoun(charaBioData.gender) + siteData[currentLang.toLowerCase()].buttonTrivia + "<span class='nsButton'>" + charaData[charaBioData.id].button + "<span>");
            $(".bioDetailInner").html(printLinesAsList(parseToIcon(copiedTrivia)));
        } else {
            $(".bioDetailInner").html(printLinesWithBreak(charaBioData.bio, 2));
        }
    });
}

function setUpThemeClickEvents() {
    var currentVideoId = "";
    $(".themes").children().removeClass("focusedTheme");
    $(".themes div").click(function () {
        //if the theme clicked is diff from the last one clicked
        if (!$(this).hasClass("disabled")) {
            if(currentVideoId != this.dataset.id){
                $(this).addClass("focusedTheme");
                $(this).siblings().removeClass("focusedTheme");
                removePlayer();
                var delay = currentVideoId?400:0    
                setTimeout(loadPlayer, delay, this.dataset.id);
                currentVideoId = this.dataset.id;
            }else{
                $(this).removeClass("focusedTheme");
                removePlayer();
                currentVideoId = "";
            }
    }
    });
}

function loadPlayer(videoId){
    initYouTubeVideos(videoId); 
    $(".miniBar").addClass("barShow");
}

function removePlayer(){
    $(".miniBar").removeClass("barShow");
    $(".miniBar").addClass("barHide");
    $(".ytPlayer").html('');
}

//===============//
//=== Add-ons ===//
//===============//

// -- Dialog Effects by Codrops (Edited/tuned)
// -- Credit: https://github.com/codrops/DialogEffects
function modalEffectsInit(bioData, relationshipData) {
    var overlay = document.querySelector(".md-overlay");
    var modal = document.querySelectorAll("[id^='modal']");

    //loop thru two pop-ups
    modal.forEach(function (el) {
        var close = el.querySelector(".md-close");
        function removeModalHandler() {
            $(".themes div").addClass("disabled");      
            // removeModal(classie.has(el, "md-setperspective"));
            classie.remove(el, "md-show");
            $(".langNav").removeClass("blur");
            $(document.body).removeClass("noscroll");
            removePlayer();
        }
        setTimeout(function () {
            overlay.addEventListener("click", removeModalHandler);
        }, 1);
        close.addEventListener("click", function (ev) {
            ev.stopPropagation();
            removeModalHandler();
        });
    });

    //loop thru all photo and relationship with md-trigger class
    [].slice.call(document.querySelectorAll(".md-trigger")).forEach(function (el, i) {
        var currentModal = document.querySelector("#" + el.getAttribute("data-modal"));

        el.addEventListener("click", function (ev) {
            if (el.getAttribute("data-modal") == "modal-chara") {
                //fill bio page
                var currentCharaBio = bioData.find(b => b.id === el.id);
                setUpBioPageFor(currentCharaBio);
            } else {
                //fill relationship page
                var currentRelation = relationshipData.find(r => "rel_" + r.id === el.id);
                setUpRelationPageFor(currentRelation);
            }
            $(document.body).addClass("noscroll");
            setTimeout(function () {
                classie.add(currentModal, "md-show");
            }, 1);
            $(".langNav").addClass("blur");
            if (classie.has(el, "md-setperspective")) {
                setTimeout(function () {
                    classie.add(document.documentElement, "md-perspective");
                }, 25);
            }
        });

    });
}

// -- Light YouTube Embeds by @labnol
// -- Credit: https://www.labnol.org/
function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos(videoId) {
    console.log("loading video for " + videoId);
    var playerElements = document.getElementsByClassName('ytPlayer'); 
    for (var n = 0; n < playerElements.length; n++) {
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        thumbNode.src = 'https://i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
        div.appendChild(thumbNode); 
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);
        div.onclick = function () {
            labnolIframe(this);
        };
        playerElements[n].appendChild(div);
    }
}


//=======================//
//=== Parsing Helpers ===//
//=======================//

function getPronoun(gender) {
    if (currentLang == "CH") {
        return gender == "男" ? "他的" : "她的";
    }
    return gender == "Male" ? "His " : "Her ";
}

function printLinesWithBreak(array, numberOfBr) {
    var result = "";
    for (const line of array) {
        result += line;
        if (line != array.at(-1)) {
            for (let i = 0; i < numberOfBr; i++) {
                result += "<br>";
            }
        }
    }
    return result;
}

function printLinesAsList(array) {
    var result = "<ul class='dash'>"
    for (const line of array) {
        result += "<li>" + line + "</li>";
    }
    result += "</ul>"
    return result;
}

function getDisplayName(name) {
    var result = "";
    if(name == "ryan"){
        result = "R.J."
    }else if(name == "vngelica"){
        result = "<span class='upSideDown'>A</span>ngelica"
    }else{
        result = name.charAt(0).toUpperCase() + name.slice(1)
    }
    return result;
}

function parseToIcon(bioLines) {
    //help parses words formatted like this: %fruitTart/水果塔% to an image with title label
    //$(".bioDetailInner").html(printLinesWithBreak(parseToIcon(charaBioData.bio), 2))
    var result = [];
    var regExp = /%([^%]+)\/([^%]+)%/g;
    for (const line of bioLines) {
        var matches = regExp.exec(line);
        if (matches === null) {
            result.push(line);
        } else {
            result.push(line.replaceAll(regExp, "<img class='itemIcon' src='assets/img/profile/items/" + matches[1] + ".png' title='" + matches[2] + "'>"));
        }
    }
    return result;
}

//========================//
//=== Setting up stuff ===//
//========================//

function setUpSiteInfo(siteInfo) {
    var beta = "<span class='beta'>BETA</span>";
    $(".header .title").html(siteInfo.title + beta);
    $(".header h2").html(printLinesWithBreak(siteInfo.description, 1));
    //set up bio info tab texts
    for (var i = 0; i < siteInfo.bioDetailTabs.length; i++) {
        $(".bioDetailTabs li:nth-child(" + (i + 1) + ")").html(siteInfo.bioDetailTabs[i]);
    }
}

function setUpCreatorInfo(siteInfo) {
    var creatorSectionHTML = "";
    for (const creator of siteInfo.creatorList) {
        creatorSectionHTML += "<li>" +
                              "<div class='hookCardInner'>";

        creatorSectionHTML += "<h3>【" + creator.title + "】</h3>";
        creatorSectionHTML += "<div class='quote'>" + creator.quote + "</div>";
        creatorSectionHTML += "<img src='" + creator.imageUrl + "'>";
        creatorSectionHTML += "<div class='name'>" + 
                              "<p>" + creator.name +"</p>" +
                              "<p>";
        for (const subname of creator.subNames) {
            creatorSectionHTML += subname + " | ";
        }
        creatorSectionHTML = creatorSectionHTML.slice(0,-3);
        creatorSectionHTML += "</p>" +
                              "</div>" +
                              "<div class='info'>";
        for (const info of creator.infoList) {
            creatorSectionHTML += "<p>" + info + "</p>";
        }
        creatorSectionHTML += "</div>" + 
                              "</div>" + 
                              "</li>";
    }
    $(".creators").html(creatorSectionHTML);
}

function setupLang() {
    $(".langNav").removeClass("focusOn" + currentLang);
    $(".langNav").addClass("focusOn" + nextLang);
    if (currentLang == "CH") {
        setupStuff(relationshipData_ch, bioData_ch, siteData[currentLang.toLowerCase()]);
    } else {
        setupStuff(relationshipData_en, bioData_en, siteData[currentLang.toLowerCase()]);
    }
}

function setupStuff(relationshipData, bioData, siteInfo) {
    setUpSiteInfo(siteInfo)
    buildDiagram(relationshipData);
    modalEffectsInit(bioData, relationshipData);
    setUpRelationshipHoverEvent(relationshipData);
    setUpCharaHoverEvent(relationshipData);
    arrangeDiagramContent();
    setUpCreatorInfo(siteInfo);
}

//======================================//
//=== Thing to do when window resize ===//
//======================================//

function checkWindowSize() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    //control pop up section heights
    if (windowWidth <= 959) {
        $(".md-modal").height(windowHeight);
    } else {
        $(".md-modal").height("auto");
    }
    //scroll to center for diagram
    if (windowWidth <= 1200) {
        var scrollto = ($("#diagram").width() / 2) - ($(".diagramWrapper").width() / 2);
        $(".diagramWrapper").scrollLeft(scrollto);
    }
}

//======================//
//===                ===//
//=== Ready Function ===//
//===                ===//
//======================//

var currentLang = "CH";
var nextLang = "EN";

$(document).ready(function () {

    checkWindowSize();
    $(window).resize(checkWindowSize);

    var language = window.navigator.userLanguage || window.navigator.language;

    if (language === "en-US") {
        [currentLang, nextLang] = [nextLang, currentLang];
    }
    setupLang();

    $("[id^=lang]").each(function () {
        $(this).click(function () {
            [currentLang, nextLang] = [nextLang, currentLang];
            setupLang();
        })
    })

    setTimeout(() => $(".se-pre-con").fadeOut("slow"), 200);
});
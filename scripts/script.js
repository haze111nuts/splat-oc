//=====================//
//===   variables   ===//
//=====================//

var siteData_en = {
    title : "Haze's Splat OC Stuff",
    description : ["Splatoon OC info/bio dump", "by twitter@haze111nuts"]
}

var siteData_ch = {
    title : "HAZE家漆彈角色整理",
    description : ["懶人總整理+全員介紹頁面", "素材先放草圖😔有生之年慢慢補"]
}

//=====================//
//===   functions   ===//
//=====================//

function buildChart(relationshipData){
    var chartHTML = "";
    chartHTML += "<ul>";
    chartHTML += "<li class='group teamBB'></li>";
    for (var chara in charaData) {
        chartHTML += "<li class='chara md-trigger' id='"+ chara +"' data-modal='modal-chara'>";
        chartHTML += "<div class='nameSticker'>"+ chara.charAt(0).toUpperCase() + chara.slice(1); +"</div>";
        chartHTML += "</li>";
    }
    for(var j=0; j<relationshipData.length; j++){
        chartHTML += "<li class='relation md-trigger' id='rel_"+ relationshipData[j].id +"' data-modal='modal-relationship'>";
        chartHTML += "<span class='relDesc "+ relationshipData[j].chara1 +"' >"+ relationshipData[j].desc1 +"</span>"
        chartHTML += "<div class='relLabel'>"+ relationshipData[j].label +"</div>";
        chartHTML += "<span class='relDesc "+ relationshipData[j].chara2 +"' >"+ relationshipData[j].desc2 +"</span>"
        chartHTML += "</li>";
    }
    chartHTML += "<ul>";
    $("#chart").html(chartHTML);
}

function arrangeChartContent(){
    //set icon positions
    for (var chara in charaData) {
        $("#"+chara).css("left",  charaData[chara].photoPos.x);
        $("#"+chara).css("top", charaData[chara].photoPos.y);
        $("#"+chara).css("-webkit-transform", "rotate(" +charaData[chara].photoPos.rotation+"deg)");
        $("#"+chara).css("-ms-transform", "rotate(" +charaData[chara].photoPos.rotation+"deg)");
        $("#"+chara).css("transform", "rotate(" +charaData[chara].photoPos.rotation+"deg)");
    }

    //set relationship label positions
    for (const relPos of relationshipPosData) {
        $("#rel_"+relPos.id).css("left",relPos.x);
        $("#rel_"+relPos.id).css("top",relPos.y);
    }
}

function transformRotatedCharaIcon(id, scale){
    //need this bc transform is too dumb to remember the initial rotation
    var currentHoverCharaRot = charaData[id].photoPos.rotation;
    $("#"+id).css("-webkit-transform", "rotate(" + currentHoverCharaRot +"deg) " + scale);
    $("#"+id).css("-ms-transform", "rotate(" + currentHoverCharaRot +"deg) " + scale);
    $("#"+id).css("transform", "rotate(" + currentHoverCharaRot +"deg) "+ scale);
}

function relationshipHoverEvent(relationshipData){
    $('[id^=rel_]').each(function () {
        const id = this.id.replace("rel_","");
        const relationship = relationshipData.find( r => r.id == id);
        const otherChara = Object.keys(charaData).filter(e => e !== relationship.chara1 && e !== relationship.chara2 );           
        const otherRelation = relationshipData.filter(r => r !== relationship );
        $(this).hover(function() {
            $("#line_"+id+"_fill").addClass('animatedPath');
            $("#line_"+id+"_fill").addClass('tempStrokeStyle');
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
            $("#line_"+id+"_fill").removeClass('tempStrokeStyle');
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

function charaHoverEvent(relationshipData){
    $('.chara').each(function () {
        var unrelatedChara = getUnrelated(this.id, relationshipData);
        var unrelatedRelations = relationshipData.filter(r => r.chara1 !== this.id && r.chara2 !== this.id );
        var relatedRelations = relationshipData.filter(r => r.chara1 === this.id || r.chara2 === this.id );
        $(this).hover(function() {
            transformRotatedCharaIcon(this.id, "scale(1.1)");
            for(const chara of unrelatedChara){
                $("#"+chara).addClass("faded");
            }
            for(const relation of unrelatedRelations){
                $("#rel_"+relation.id).addClass("faded");
                $("#line_"+relation.id).addClass("faded");
            }
            for(const relation of relatedRelations){
                var start = relationshipPosData.find(r => r.id === relation.id).start;
                if(start !== this.id){
                    $("#line_"+relation.id+"_fill").addClass('animatedPathReverse');
                }else{
                    $("#line_"+relation.id+"_fill").addClass('animatedPath');
                }
                $("#line_"+relation.id+"_fill").addClass(this.id);
            }
        }, function() {
            transformRotatedCharaIcon(this.id, "")
            for(const chara of unrelatedChara){
                $("#"+chara).removeClass("faded");
            }
            for(const relation of unrelatedRelations){
                $("#rel_"+relation.id).removeClass("faded");
                $("#line_"+relation.id).removeClass("faded");
            }
            for(const relation of relatedRelations){
                var start = relationshipPosData.find(r => r.id === relation.id).start;
                if(start !== this.id){
                    $("#line_"+relation.id+"_fill").removeClass('animatedPathReverse');
                }else{
                    $("#line_"+relation.id+"_fill").removeClass('animatedPath');
                }
                $("#line_"+relation.id+"_fill").removeClass(this.id);
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
    $(".bioDetailInner").html(printLinesWithBreak(charaBioData.bio, 2));

    //Set up character-specific page style
    var color = charaData[charaBioData.id].color;
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
            $(".langNav").removeClass("blur");
			// document.body.classList.toggle('noscroll');
		}

		el.addEventListener( 'click', function( ev ) {
            if(el.getAttribute( 'data-modal' ) == "modal-chara"){
                var currentCharaBio = bioData.find(b => b.id === el.id);
                setUpBioPageFor(currentCharaBio);
            }else{
                //fill relationship page
            }
            setTimeout(function(){
                classie.add( modal, 'md-show' );
                overlay.removeEventListener( 'click', removeModalHandler );
                overlay.addEventListener( 'click', removeModalHandler );
            }, 1);
            $(".langNav").addClass("blur");
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

function setUpSiteInfo(siteInfo){
    var beta = "<span class='beta'>BETA</span>";
    $(".header .title").html(siteInfo.title+beta);
    $(".header h2").html(printLinesWithBreak(siteInfo.description,1));
}

function printLinesWithBreak(array, numberOfBr){
    var result = "";
    for(const line of array){
        result += line;
        if(line != array.at(-1)){
            for (let i = 0; i < numberOfBr; i++) {
                result += "<br>";
            }
        }
    }
    return result;
}

function setupStuff(relationshipData, bioData, siteInfo){
    setUpSiteInfo(siteInfo)
    buildChart(relationshipData);
    modalEffectsInit(bioData);
    relationshipHoverEvent(relationshipData);
    charaHoverEvent(relationshipData);
    arrangeChartContent();
}


//======================//
//===                ===//
//=== Ready Function ===//
//===                ===//
//======================//

var currentLang;

$(document).ready(function(){

    currentLang = "EN";
    $(".langNav").addClass("focusOnCH");
    setupStuff(relationshipData_en, bioData_en, siteData_en);


    $(".langCh").click(function() {
        if(currentLang == "EN"){
            currentLang = "CH";
            $(".langNav").removeClass("focusOnCH");
            $(".langNav").addClass("focusOnEN");         
            setupStuff(relationshipData_ch, bioData_ch, siteData_ch);
        }
    });
    $(".langEn").click(function() {
        if(currentLang == "CH"){
            currentLang = "EN";
            $(".langNav").removeClass("focusOnEN");
            $(".langNav").addClass("focusOnCH");
            setupStuff(relationshipData_en, bioData_en, siteData_en);
        }
    });

});
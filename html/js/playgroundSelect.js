var playfieldBox;
var playfieldArray;
const FX = 12;
const FY = 7;

var cowFamiliesToPlace = new Array(4);
var currentCowFamily = 0;


function setupPlayfield() {
    playfieldBox  = document.getElementById("pf");

    //div Box mit Feldern füllen
    createField();
    window.addEventListener("keydown", changeCowFamilyDirection, false);
    addPlayfieldEventListeners();

    checkStatusPgselect();

}

function createField() {

    playfieldArray = new Array(FY);
    for(var i = 0; i < FY; i++) {
        playfieldArray[i] = new Array(FX);
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            playfieldArray[i][j] = new PlayerField(j,i , 0, playfieldBox);
        }
    }
}

function checkStatusPgselect() {
    console.log(cowFamiliesToPlace[currentCowFamily]);
    console.log(currentCowFamily);

    if(cowFamiliesToPlace[currentCowFamily] == null) {
        cowFamiliesToPlace[currentCowFamily] = new CowFamily(5, 2, 5 - currentCowFamily, 1, true);
    }

    if(cowFamiliesToPlace[currentCowFamily].isPlaced) {
        console.log("placed");
        if(currentCowFamily === cowFamiliesToPlace.length - 1 && cowFamiliesToPlace[cowFamiliesToPlace.length - 1].isPlaced){
            changeToIngame();
        } else {
            currentCowFamily ++;
            console.log("count");
            checkStatusPgselect();
        }
    }
    console.log("placed");

}

function changeToIngame() {
    show(inGame, pgselect, pselect, menu);
    setupGame();
}

function changeCowFamilyDirection(e) {
    if (e.keyCode == "82") {
        cowFamiliesToPlace[currentCowFamily].changeDirection();
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            console.log("update");
            playfieldArray[i][j].update();
        }
    }
}

function addPlayfieldEventListeners() {
        for (var i = 0; i < FY; i++) {
            for (var j = 0; j < FX; j++) {
                let element = playfieldArray[i][j];
                element.field.onmouseenter = function(){changeFieldStates(1, element);};
                element.field.onmouseleave = function(){changeFieldStates(0, element);};
                element.field.onclick = function(){changeFieldStates(2, element);};
            }
        }
}

function changeFieldStates(mouseEvent, element){

    switch(mouseEvent){
        case 1: cowFamiliesToPlace[currentCowFamily].x = element.posX;
                cowFamiliesToPlace[currentCowFamily].y = element.posY;
                cowFamiliesToPlace[currentCowFamily].setCowFamily();
                console.log("Familie 1 Feld 1:" + cowFamiliesToPlace[0].cowFamilyArray[0].isCowFamily + "Feld 2:" + cowFamiliesToPlace[0].cowFamilyArray[1].isCowFamily + "Feld 3:" + cowFamiliesToPlace[0].cowFamilyArray[2].isCowFamily + "Feld 1:" + cowFamiliesToPlace[0].cowFamilyArray[3].isCowFamily)
                break;

        case 2: if(cowFamiliesToPlace[currentCowFamily].isPlaceable){
                    cowFamiliesToPlace[currentCowFamily].isPlaced = true;
                    cowFamiliesToPlace[currentCowFamily].placeCowFamily();
                    checkStatusPgselect();
                  }
                break;
    }

    updateField();
}

function updateField(){

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            playfieldArray[i][j].update();
        }
    }

}
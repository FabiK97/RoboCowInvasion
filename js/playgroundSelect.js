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
        //prüfe ob Drehbar
        if ((cowFamiliesToPlace[currentCowFamily].direction === 2 && cowFamiliesToPlace[currentCowFamily].y <= FY - cowFamiliesToPlace[currentCowFamily].cowFamilyLength) ||
            (cowFamiliesToPlace[currentCowFamily].direction === 1 && cowFamiliesToPlace[currentCowFamily].x <= FX - cowFamiliesToPlace[currentCowFamily].cowFamilyLength)) {
                cowFamiliesToPlace[currentCowFamily].changeDirection(); //wenn drehbar, dann drehen
        }
    }

    updateField();
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

    switch(mouseEvent) {
        case 1: //prüfe ob es im platzierbaren Bereich ist
            if ((cowFamiliesToPlace[currentCowFamily].direction === 2 && element.posX <= FX - cowFamiliesToPlace[currentCowFamily].cowFamilyLength) ||
                (cowFamiliesToPlace[currentCowFamily].direction === 1 && element.posY <= FY - cowFamiliesToPlace[currentCowFamily].cowFamilyLength)){
                    cowFamiliesToPlace[currentCowFamily].x = element.posX; //CowFamily auf gehovertes Feld setzen
                    cowFamiliesToPlace[currentCowFamily].y = element.posY; //CowFamily auf gehovertes Feld setzen
                    cowFamiliesToPlace[currentCowFamily].setCowFamily(); //CowFamily neu generieren
                }
                break;

        case 2: if(cowFamiliesToPlace[currentCowFamily].isPlaceable){ //wenn platzierbar, dann Platzieren
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
            playfieldArray[i][j].update(); //gehe jedes Feld im Array durch und zeichne es neu
        }
    }

}


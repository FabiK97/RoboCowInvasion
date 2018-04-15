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

    checkStatusPgselect();

}

function createField() {

    playfieldArray = new Array(FY);
    for(var i = 0; i < FY; i++) {
        playfieldArray[i] = new Array(FX);
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            playfieldArray[i][j] = new PlayerField(j,i , 0);
        }
    }
}

function checkStatusPgselect() {
    console.log(cowFamiliesToPlace[currentCowFamily]);
    console.log(currentCowFamily);

    if(cowFamiliesToPlace[currentCowFamily] == null) {
        cowFamiliesToPlace[currentCowFamily] = new CowFamily(5, 2, 5 - currentCowFamily, 1);
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



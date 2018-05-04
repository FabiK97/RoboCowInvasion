var playfieldBox;
var playfieldArray;
const FX = 12;
const FY = 7;
const MAX_COWFAMILY_LENGTH = 5;
var checkFamily = [];


var cowFamiliesToPlace = new Array(4);
var currentCowFamily = 0;


function setupPlayfield() {
    playfieldBox  = document.getElementById("pf");

    //div Box mit Feldern füllen
    createInfobox();
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
        cowFamiliesToPlace[currentCowFamily] = new CowFamily(5, 2, MAX_COWFAMILY_LENGTH - currentCowFamily, 1, true);
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
                    muhSound.play();
                    checkFamily[currentCowFamily].style.display = "block";
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

function createInfobox(){

    //Box generieren, die dann die Familien enthält
    var Infobox = document.createElement("div");
    pgselect.appendChild(Infobox);
    Infobox.style.position = "absolute";
    Infobox.style.top = '175px';
    Infobox.style.right = '100px';
    Infobox.style.width = (FIELDSIZE*(MAX_COWFAMILY_LENGTH + 2)).toString() + 'px';
    Infobox.style.height = (FIELDSIZE*7).toString() + 'px';
    Infobox.className = "infobox";


    //mit Cowfamilys füllen
    var fLength = 5;
    var currentCheck = 0;
    for(var i = 0; i<7; i+=2){
        for(var j = 0; j<fLength; j++){
            var cow = document.createElement("div");
            Infobox.appendChild(cow);
            cow.style.position = "absolute";
            cow.style.top = (FIELDSIZE*i).toString() + 'px';
            cow.style.left = (FIELDSIZE*j).toString() + 'px';
            cow.style.width = FIELDSIZE.toString() + 'px';
            cow.style.height = FIELDSIZE.toString() + 'px';
            cow.style.backgroundImage = "url('" + player[0] + "')";

        }
        fLength --;

        //checks in Array speichern
        checkFamily[currentCheck] = document.createElement("div");
        Infobox.appendChild(checkFamily[currentCheck]);
        checkFamily[currentCheck].style.position = "absolute";
        checkFamily[currentCheck].style.top = (FIELDSIZE*i).toString() + 'px';
        checkFamily[currentCheck].style.right = 0 + 'px';
        checkFamily[currentCheck].style.width = FIELDSIZE.toString() + 'px';
        checkFamily[currentCheck].style.height = FIELDSIZE.toString() + 'px';
        checkFamily[currentCheck].style.backgroundImage = "url('img/woodenCheck.png')";
        checkFamily[currentCheck].style.backgroundPosition = "contain";
        checkFamily[currentCheck].style.display = "none";
        currentCheck++;
    }



}


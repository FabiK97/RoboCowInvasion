var playfieldBox;
var playfieldArray;
const FX = 12;
const FY = 7;

var shipsToPlace = new Array(4);
var currentShip = 0;
var Ship1;

var allShipsPlaced = false;


function setupPlayfield() {
    playfieldBox  = document.getElementById("pf");

    //div Box mit Feldern füllen
    createField();
    window.addEventListener("keydown", changeShipDirection, false);

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
    console.log(shipsToPlace[currentShip]);
    console.log(currentShip);

    if(shipsToPlace[currentShip] == null) {
        shipsToPlace[currentShip] = new Ship(5, 2, 5 - currentShip, 1);
    }

    if(shipsToPlace[currentShip].isPlaced) {
        console.log("placed");
        if(currentShip === shipsToPlace.length - 1 && shipsToPlace[shipsToPlace.length - 1].isPlaced){
            changeToIngame();
        } else {
            currentShip ++;
            console.log("count");
            checkStatusPgselect();
        }
    }
    console.log("placed");

}

function changeToIngame() {
    show(inGame, pgselect, pselect, menu);
}


function changeShipDirection(e) {
    if (e.keyCode == "82") {
        shipsToPlace[currentShip].changeDirection();
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            console.log("update");
            playfieldArray[i][j].update();
        }
    }
}



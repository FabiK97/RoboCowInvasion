var playerFieldBox;
var EnemyFieldBox;
var enemyCowFamilies = new Array(4);
var enemyFieldArray;
var randomPlacex;
var randomPlacey;
var randomDirection;



var running;
var playersTurn;
var playerHit = false;
var enemyHit = false;


var playerHits = 0;
var playerMiss = 0;
var playerShots = 0;
var accuracy = 0;

var enemyHits = 0;
var enemyMiss = 0;
var enemyShots = 0;

var playerHitsSign = document.getElementsByClassName("sign playerHits");
var playerLeftSign = document.getElementsByClassName("sign playerLeft");
var enemyHitsSign = document.getElementsByClassName("sign enemyHits");
var enemyLeftSign = document.getElementsByClassName("sign enemyLeft");

var explosionDiv = document.createElement("div");


var sinkInterval;
var intervallCounter = -1;

var NumberOfCows = 14;

var explosionArray = [];




function setupGame() {
    setupEnemyfield();
    setupPlayerfield();
    changeFarmerDivs(playerFarmer[0], enemyFarmer[0]);
    playersTurn = true;
    running = true;
    updateSigns();
    explosionDiv.style.display = "none";
}

function setupPlayerfield() {
    playerFieldBox = document.getElementById("plf");

    for (var i = 0; i < FY; i++) {
        for (var j = 0; j < FX; j++) {
            playfieldArray[i][j].createField(playerFieldBox);
        }
    }
}

function setupEnemyfield() {
    //setup Field of the Enemy here
    enemyFieldBox = document.getElementById("ef");


    enemyFieldArray = new Array(FY);
    for(var i = 0; i < FY; i++) {
        enemyFieldArray[i] = new Array(FX);
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            enemyFieldArray[i][j] = new EnemyField(j,i , 0, enemyFieldBox);
        }
    }

    setupEnemyCowFamily();

    updateEnemyField();

    addEnemyEventListeners();


}


function setupEnemyCowFamily() {

    for (let i = 0; i < 4; i++) {

        var length = 5 - i;

        setupRandomPlace(length);
        enemyCowFamilies[i] = new CowFamily(randomPlacex, randomPlacey, length, randomDirection, false);
        enemyCowFamilies[i].checkPlaceable();

        while (enemyCowFamilies[i].isPlaceable !== true) {
            setupRandomPlace(length);
            enemyCowFamilies[i].x = randomPlacex;
            enemyCowFamilies[i].y = randomPlacey;
            enemyCowFamilies[i].direction = randomDirection;
            enemyCowFamilies[i].setCowFamily();
            enemyCowFamilies[i].checkPlaceable();
        }
        enemyCowFamilies[i].isPlaced = true;
        enemyCowFamilies[i].placeCowFamily();


    }
}

function setupRandomPlace(length) {
    randomDirection = Math.ceil(Math.random()*2);

    if (randomDirection === 1) {
        randomPlacex = Math.floor(Math.random() * (FX));
        randomPlacey = Math.floor(Math.random() * (FY - length));
    } else if (randomDirection === 2) {
        randomPlacex = Math.floor(Math.random() * (FX - length));
        randomPlacey = Math.floor(Math.random() * (FY));
    }

    console.log(randomPlacex + ' - ' + randomPlacey + ' - ' + randomDirection + ' l: ' + length);
}

function addEnemyEventListeners() {
    for (var i = 0; i < FY; i++) {
        for (var j = 0; j < FX; j++) {
            let element = enemyFieldArray[i][j];
            element.field.onmouseenter = function(){checkMouseEvent(1, element);};
            element.field.onmouseleave = function(){checkMouseEvent(0, element);};
            element.field.onclick = function(){checkMouseEvent(2, element);};
        }
    }
}

function checkMouseEvent(mouseEvent, element){

    switch(mouseEvent){
        case 0: if(playersTurn){ //wenn Spieler an der Reihe
            element.state = 0; //wenn die Maus das Feld verlässt, soll es wieder nichts Anzeigen
        }
            break;
        case 1: if(playersTurn) { //wenn Spieler an der Reihe
            element.state = 1; //wenn die Maus das Feld "betretet", soll es den Hover-Zustand bekommen
        }
            break;
        case 2: if(playersTurn) { //wenn Spieler an der Reihe
            if(element.state !== 2){
                gameCycle(element); //wenn das Feld geklickt wird, soll es den Spielzyklus starten
            }
        }
            break;
    }

    updateEnemyField();
}

function updateEnemyField(){

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            enemyFieldArray[i][j].update();
        }
    }

}

function gameCycle(element) {

    if(running && !enemyHit && playersTurn){ //wenn Spiel läuft
        playerShots++;
        if(element.isCowFamily){ //wenn getroffen
            playerHit = true;
            playerHits ++;
            targetingSound.play();
            element.state = 3;
        } else { //wenn nicht getroffen
            missSound.play();
            playerHit = false;
            playerMiss ++;
            element.state = 2;
            changeFarmerDivs(enemyFarmer[0], playerFarmer[0]);
        }

        for(var i = 0; i < enemyCowFamilies.length; i++) {
            enemyCowFamilies[i].checkSunk();
        }

        //Prüfe ob alle gesunken
        var count = 0;
        for(var cf of enemyCowFamilies){
            if(cf.isSunk){
                console.log("count up!");
                count ++;
            }
        }
        console.log("count: " + count);
        //Wenn alle gesunken --> Spiel vorbei
        if((count === enemyCowFamilies.length)){
            running = false;

            gameOver(true);

        }

    }
    updateSigns();

    if(running && !playerHit) {
        turn = 1;
        playersTurn = false;
        setTimeout(function(){
            console.log("enemy is thinking...");
            enemyAttack();
        }, 500);
    }


}




function gameOver(playerHasWon) {
    //wenn Spiel vorbei dann

    accuracy = playerHits/playerShots;

    saveScore(playerShots, accuracy);
    show(endgame, pselect,inGame,scoreboard, pgselect, menu);
    if(playerHasWon) {
        victorySound.play();
        document.getElementById("victory").style.display = 'block';
        document.getElementById("gameover").style.display = 'none';
    }else{
        gameOverSound.play();
        document.getElementById("victory").style.display = 'none';
        document.getElementById("gameover").style.display = 'block';
    }

}

function updateSigns() {
    console.log("updateSigns");
    playerHitsSign[0].innerHTML = "Hits: " + playerHits;
    playerLeftSign[0].innerHTML = "Left: " + (NumberOfCows - playerHits) ;
    enemyHitsSign[0].innerHTML = "Hits: " + enemyHits;
    enemyLeftSign[0].innerHTML = "Hits: " + (NumberOfCows - enemyHits);
}

function sinkanimation(Array, iPCF){
    explosionDiv.style.display = "none";

    if(intervallCounter === -1) {
        intervallCounter = Array.length - 1;
    }
    if(iPCF) {
        //Wenn Player
        Array[intervallCounter].state = 6;
        createExplosion(Array[intervallCounter], playerFieldBox);
    } else {
        //Wenn Enemy
        Array[intervallCounter].state = 4;
        createExplosion(Array[intervallCounter], enemyFieldBox);
    }
    explosionSound.play();
    Array[intervallCounter].update();
    console.log(Array[intervallCounter]);
    intervallCounter--;

}

function createExplosion(field, divBox){
    var exPosX = field.posX;
    var exPosY = field.posY;


    divBox.appendChild(explosionDiv);
    explosionDiv.style.display = "block";
    explosionDiv.style.position = "absolute";
    explosionDiv.className = "cowAttack";
    explosionDiv.style.left = (FIELDSIZE*field.posX).toString() + 'px';
    explosionDiv.style.top = (FIELDSIZE*field.posY - 50).toString() + 'px';
    explosionDiv.className = "cowAttack";

}

function saveScore(playerShots, accuracy) {

    $.ajax({
        'url': 'index',
        'method': 'post',
        'data': {'playerShots': playerShots, 'accuracy': accuracy, 'action': 'saveScore'},
        'success': function(receivedData) {
            if(receivedData.result) {
                //alles gut - reload der seite
                //anzeigen des scoreboards...
            }
        }
    });
}

function changeFarmerDivs(farmerToHighlight, otherFarmer){

    farmerToHighlight.style.outlineColor = "brown";
    farmerToHighlight.style.outlineStyle = "solid";
    farmerToHighlight.style.outlineWidth = "5px";
    farmerToHighlight.style.backgroundColor = "#6eff6f";
    otherFarmer.style.outlineStyle = "none";
    otherFarmer.style.backgroundColor = "inherit";
}


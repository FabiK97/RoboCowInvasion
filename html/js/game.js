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

var enemyHits = 0;
var enemyMiss = 0;

var playerHitsSign = document.getElementsByClassName("sign playerHits");
var playerLeftSign = document.getElementsByClassName("sign playerLeft");
var enemyHitsSign = document.getElementsByClassName("sign enemyHits");
var enemyLeftSign = document.getElementsByClassName("sign enemyLeft");

var sinkInterval;
var intervallCounter = -1;

var NumberOfCows = 14;

function setupGame() {
    setupEnemyfield();
    setupPlayerfield();
    playersTurn = true;
    running = true;
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
                // if(element.isCowFamily){
                //     element.state = 3;
                // } else {
                //     element.state = 2;
                // }
                //
                // for(var i = 0; i < enemyCowFamilies.length; i++) {
                //     enemyCowFamilies[i].checkSunk();
                // }
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
        if(element.isCowFamily){
            playerHit = true;
            playerHits ++;
            element.state = 3;
        } else {
            playerHit = false;
            playerMiss ++;
            element.state = 2;
        }

        for(var i = 0; i < enemyCowFamilies.length; i++) {
            enemyCowFamilies[i].checkSunk();
        }

        //Prüfe ob alle gesunken
        for(var cf in enemyCowFamilies){
            var count = 0;
            if(cf.isSunk === true){
                count ++;
            }
        }

        //Wenn alle gesunken --> Spiel vorbei
        if(count === enemyCowFamilies.length){
            running = false;
            gameOver();
        }

    }
        updateSigns();

    if(running && !playerHit) {

        playersTurn = false;
        setTimeout(function(){
            console.log("enemy is thinking...");
            enemyAttack();
            }, 500);
    }

}

function gameOver() {
    //wenn Spiel vorbei dann
}

function updateSigns() {
    console.log("updateSigns");
    playerHitsSign[0].innerHTML = "Hits: " + playerHits;
    playerLeftSign[0].innerHTML = "Left: " + (NumberOfCows - playerHits) ;
    enemyHitsSign[0].innerHTML = "Hits: " + enemyHits;
    enemyLeftSign[0].innerHTML = "Hits: " + (NumberOfCows - enemyHits);
}

function sinkanimation(Array){

        if(intervallCounter == -1) {
            intervallCounter = Array.length - 1;
        }
        Array[intervallCounter].state = 4;
        Array[intervallCounter].update();
        console.log(Array[intervallCounter]);
        intervallCounter--;

}
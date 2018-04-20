var playerFieldBox;
var EnemyFieldBox;
var enemyCowFamilies = new Array(4);
var enemyFieldArray;
var randomPlacex;
var randomPlacey;
var randomDirection;

function setupGame() {
    setupEnemyfield();
    setupPlayerfield();



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

        while (enemyCowFamilies[i].isPlaceable != true) {
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
            element.field.onmouseenter = function(){changeEnemyFieldStates(1, element);};
            element.field.onmouseleave = function(){changeEnemyFieldStates(0, element);};
            element.field.onclick = function(){changeEnemyFieldStates(2, element);};
        }
    }
}

function changeEnemyFieldStates(mouseEvent, element){

    switch(mouseEvent){
        case 0: element.state = 0;
                console.log("hover");
            break;
        case 1: element.state = 1;
                console.log("hover");
            break;
        case 2: if(element.isCowFamily){
                    element.state = 3;
                } else {
                    element.state = 2;
                }

                for(var i = 0; i < enemyCowFamilies.length; i++) {
                    enemyCowFamilies[i].checkSunk();
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




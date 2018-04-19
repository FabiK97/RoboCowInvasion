var playerFieldBox;
var EnemyFieldBox;
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
            enemyFieldArray[i][j] = new PlayerField(j,i , 0, enemyFieldBox);
        }
    }

    setupEnemyCowFamily();

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            enemyFieldArray[i][j].update();
        }
    }
}


function setupEnemyCowFamily() {

    for (let i = 0; i < 4; i++) {

        var length = 5 - i;

        setupRandomPlace(length);
        enemyCowFamily = new CowFamily(randomPlacex, randomPlacey, length, randomDirection, false);
        enemyCowFamily.checkPlaceable();

        while (enemyCowFamily.isPlaceable != true) {
            setupRandomPlace(length);
            enemyCowFamily.x = randomPlacex;
            enemyCowFamily.y = randomPlacey;
            enemyCowFamily.direction = randomDirection;
            enemyCowFamily.setCowFamily();
            enemyCowFamily.checkPlaceable();
        }
        enemyCowFamily.isPlaced = true;
        enemyCowFamily.placeCowFamily();


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






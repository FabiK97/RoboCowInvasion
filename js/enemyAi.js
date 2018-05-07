var randomx;
var randomy;
var hitCowfamily = false;
var rightDir = false;
var randomDir;
var hitCounter = 0;
var tempx;
var tempy;

function enemyAttack() {

    if (!hitCowfamily) {
        randomx = Math.floor(Math.random() * 12);
        randomy = Math.floor(Math.random() * 7);
    }
    console.log("enemyAttack at " + randomx + ' - ' + randomy);

    scanField(playfieldArray[randomy][randomx]);
}

//Scannen ob Feld frei ist mit Angriff

function scanField(field) {

    if (field.state === 0 || field.state === 3) {  //Grundstatus
        shoot(field);
    }
    else if (field.state === 4 && rightDir) {
        if (hitCounter > 1) {
            hitCounter = 0;
            changeDir();
            randomx = tempx;
            randomy = tempy;
        }
        enemyAttack();
    }
    else if (field.state === 6 || field.state === 4) {
        enemyAttack();
    }
    else if (field.state === 5) {
        scanNeighbor(field);
    }

}

function scanNeighbor() {
    if (!rightDir) {
        randomDir = Math.floor(Math.random() * 4) + 1;
    } else {
        console.log("gespeicherte Dir: " + randomDir);
    }


    switch (randomDir) {
        case (1): //unten
            if (rightDir) {
                randomy++;
                console.log("ry: " + randomy);
            }
            if (randomy < FY - 1) {
                scanField(playfieldArray[randomy + 1][randomx]);
            } else {
                changeDir();
                scanField(playfieldArray[randomy][randomx]);
            }
            break;

        case (2): //rechts
            if (rightDir) {
                randomx++;
            }
            if (randomx < FX - 1) {
                scanField(playfieldArray[randomy][randomx + 1]);
            } else {
                changeDir();
                scanField(playfieldArray[randomy][randomx]);
            }
            break;
        case (3): //oben
            if (rightDir) {
                randomy--;
            }
            if (randomy > 0) {
                scanField(playfieldArray[randomy - 1][randomx]);
            } else {
                changeDir();
                scanField(playfieldArray[randomy][randomx]);
            }
            break;
        case (4): //links
            if (rightDir) {
                randomx--;
            }
            if (randomx > 0) {
                scanField(playfieldArray[randomy][randomx - 1]);
            } else {
                changeDir();
                scanField(playfieldArray[randomy][randomx]);
            }
            break;
    }
}

function shoot(field) {
    console.log("Schieße auf: " + field.posX + ' - ' + field.posY);
    if (field.isCowFamily === true) {
        //wenn getroffen dann markieren
        targetingSound.play();
        field.state = 5;
        updateField();

        enemyHits++;

        hitCowfamily = true;

        if (hitCowfamily === true) {
            hitCounter++;
        }


        if (hitCounter > 1) {
            tempx = randomx;
            tempy = randomy;
            rightDir = true;

        }

        for (var i = 0; i < enemyCowFamilies.length; i++) {
            cowFamiliesToPlace[i].checkPlayerSunk();
        }
        updateField();

        if (field.sunk) {
            hitCowfamily = false;
            hitCounter = 0;
            rightDir = false;
        }

        enemyHit = true;


        enemyShots++;

        checkAllSunk();
        gameCycle();

    } else {
        if (hitCounter > 1) {
            hitCounter = 0;
            changeDir();
            randomx = tempx;
            randomy = tempy;

        }

        field.state = 4;
        playersTurn = true;
        changeFarmerDivs(playerFarmer[0], enemyFarmer[0]);
        enemyHit = false;
        enemyMiss++;
        enemyShots++;
        updateField();
    }

}

function changeDir() {
    switch (randomDir) {
        case 1:
            console.log("Dir von Up zu Down" + randomDir);
            randomDir = 3;
            tempy++;
            break;
        case 2:
            console.log("Dir von Right zu Left" + randomDir);
            randomDir = 4;
            tempx++;
            break;
        case 3:
            console.log("Dir von Down zu Up" + randomDir);
            randomDir = 1;
            tempy--;
            break;
        case 4:
            console.log("Dir von Left zu Right" + randomDir);
            randomDir = 2;
            tempx--;
            break;
    }
}

function checkAllSunk() {
    //Prüfe ob alle gesunken
    var count = 0;
    for (var cf of cowFamiliesToPlace) {
        if (cf.isSunk === true) {
            count++;
        }
    }

    //Wenn alle gesunken --> Spiel vorbei
    if (count === enemyCowFamilies.length) {
        running = false;
        gameOver(false);
    }
}



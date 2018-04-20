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
    console.log(randomx + ' - ' + randomy);

    scanField(playfieldArray[randomy][randomx]);
}

//Scannen ob Feld frei ist mit Angriff

function scanField(field) {

    if (field.state === 0 || field.state === 3) {  //Grundstatus
            shoot(field);
    }
    else if (field.state === 4 && rightDir) {
        if(hitCounter > 1) {
            hitCounter = 0;
            changeDir();
            randomx = tempx;
            randomy = tempy;
            console.log(randomx + ' ' + randomy);
        }
        enemyAttack();
    }
    else if (field.state === 6 || field.state === 4) {
            enemyAttack();
    } //
    else if (field.state === 5) { //
        scanNeighbor(field);
    }

}

function scanNeighbor() {
    if(!rightDir){
        randomDir = Math.floor(Math.random() * 4) + 1;
    }


    console.log(randomDir);

        switch (randomDir) {
            case (1): //unten
                if(rightDir){
                    randomy ++;
                }
                if (randomy < FY) {
                    scanField(playfieldArray[randomy + 1][randomx]);
                } else {
                    scanField(playfieldArray[randomy - 1][randomx]);
                }
                break;

            case (2): //rechts
                if(rightDir){
                    randomx ++;
                }
                if (randomx < FX) {
                    scanField(playfieldArray[randomy][randomx + 1]);
                } else {

                    scanField(playfieldArray[randomy][randomx - 1]);
                }
                break;
            case (3): //oben
                if(rightDir){
                    randomy --;
                }
                if (randomy > 0) {
                    scanField(playfieldArray[randomy - 1][randomx]);
                } else {
                    scanField(playfieldArray[randomy + 1][randomx]);
                }
                break;
            case (4): //links
                if(rightDir){
                    randomx --;
                }
                if (randomx > 0) {
                    scanField(playfieldArray[randomy][randomx - 1]);
                } else {
                    scanField(playfieldArray[randomy][randomx + 1]);
                }
                break;
        }
}

function shoot(field) {
            console.log(field.posX + ' - ' + field.posY);
            if (field.isCowFamily === true) {
                //wenn getroffen dann markieren
                field.state = 5;
                updateField();

                hitCowfamily = true;

                if(hitCowfamily === true){
                    hitCounter ++;
                }
                console.log("hitcounter: " + hitCounter);
                if(hitCounter > 1){
                    tempx = randomx;
                    tempy = randomy;
                    rightDir = true;
                }

                for(var i = 0; i < enemyCowFamilies.length; i++) {
                    cowFamiliesToPlace[i].checkPlayerSunk();
                }

                if(field.state === 6) {
                    hitCowfamily = false;
                }

                enemyHit = true;

                console.log("Feld getroffen")
                gameCycle();

            } else {
                if(hitCounter > 1) {
                    hitCounter = 0;
                    changeDir();
                    randomx = tempx;
                    randomy = tempy;
                }

                field.state = 4;
                playersTurn = true;
                enemyHit = false;

                updateField();
            }

}

function changeDir(){
    switch(randomDir) {
        case 1: randomDir = 3;
                tempy --;
            break;
        case 2: randomDir = 4;
                tempx --;
            break;
        case 3: randomDir = 1;
                tempy ++;
            break;
        case 4: randomDir = 2;
                tempx ++;
            break;
    }
}




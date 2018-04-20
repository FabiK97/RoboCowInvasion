var randomx;
var randomy;

function enemyAttack() {
    if (!enemyHit) {
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
    else if (field.state === 5 || field.state === 4) {
            enemyAttack();
    } //
    else if (field.state === 5) { //
        scanNeighbor(field);
    }

}

function scanNeighbor() {

        switch (Math.floor(Math.random() * 4) + 1) {
            case (1):
                if (randomy < FY) {
                    scanField(playfieldArray[randomy + 1][randomx]);
                } else {
                    scanField(playfieldArray[randomy - 1][randomx]);
                }
                break;

            case (2):
                if (randomx < FX) {
                    scanField(playfieldArray[randomy][randomx + 1]);
                } else {
                    scanField(playfieldArray[randomy][randomx - 1]);
                }
                break;
            case (3):
                if (randomy > 0) {
                    scanField(playfieldArray[randomy - 1][randomx]);
                } else {
                    scanField(playfieldArray[randomy + 1][randomx]);
                }
                break;
            case (4):
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
                field.state = 5;
                updateField();
                enemyHit = true;
                console.log("Feld getroffen")
                gameCycle();

            } else {
                field.state = 4;
                enemyHit = false;
                updateField();
            }

}





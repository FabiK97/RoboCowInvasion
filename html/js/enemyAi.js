var randomx;
var randomy;

function enemyAttack() {
    randomx = Math.floor(Math.random() * 12);
    randomy = Math.floor(Math.random() * 7);

    scanField(playfieldArray[randomx][randomy]);
}

//Scannen ob Feld frei ist mit Angriff

function scanField(field) {
    if (field.state === 0 || field.state === 1) {  //Grundstatus

        shoot(field);
    }
    else if (field.state === 2 || field.state === 4) {
        enemyAttack();
    } //
    else if (field.state === 3) { //

        scanNeighbor(field);

    }

}

function scanNeighbor() {

    switch (Math.floor(Math.random() * 4) + 1) {
        case (1):
            if (randomx < 12) {
                scanField(playFieldArray[randomx + 1][randomy]);
            } else {
                scanField(playFieldArray[randomx - 1][randomy]);
            }
            break;

        case (2):
            if (randomy < 7) {
                scanField(playFieldArray[randomx][randomy + 1]);
            } else {
                scanField(playFieldArray[randomx][randomy - 1]);
            }
            break;
        case (3):
            if (randomx > 0) {
                scanField(playFieldArray[randomx - 1][randomy]);
            } else {
                scanField(playFieldArray[randomx + 1][randomy]);
            }
            break;
        case (4):
            if (randomy > 0) {
                scanField(playFieldArray[randomx][randomy - 1]);
            } else {
                scanField(playFieldArray[randomx][randomy + 1]);
            }
            break;
    }

    function shoot() {

        if (this.cowFamily == true) {
            field.changeFieldStates(2);
        } else {
            field.changeFieldStates(1);
        }
        update();
    }


}
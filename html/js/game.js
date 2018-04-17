var playerFieldBox;
var EnemyFieldBox;

function setupGame(){
    setupPlayerfield();
    setupEnemyfield();
}

function setupPlayerfield(){
    playerFieldBox = document.getElementById("plf");

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            playfieldArray[i][j].createField(playerFieldBox);
        }
    }
}

function setupEnemyfield(){
    //setup Field of the Enemy here
}
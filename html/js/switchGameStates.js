var inGame;
var pgselect;
var pselect;
var menu;
var playfieldSet;

var player;
var cows;



var playButton;
var scoreButton;
var helpButton;
var helpBackButton;

var farmerButton;
var roboFarmerButton;


window.onload = function() {
    inGame = document.getElementById("g1");
    pgselect = document.getElementById("pgs");
    pselect = document.getElementById("ps");
    menu = document.getElementById("m");

    playButton = document.getElementById("play");
    scoreButton = document.getElementById("score");
    helpButton = document.getElementById("help");
    helpBackButton = document.getElementById("helpBack");

    farmerButton = document.getElementById("farmer");
    roboFarmerButton = document.getElementById("roboFarmer");


    farmerButton.onclick = function() {farmer();};
    roboFarmerButton.onclick = function() {robofarmer();};

    playButton.onclick = function() {show(pselect, pgselect, inGame, menu)};
    helpButton.onclick = function() {help_on()};
    helpBackButton.onclick = function() {help_off()};

};

function show(el1, el2, el3, el4) {
    console.log("click");
        el1.style.display = 'block';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el4.style.display = 'none';
}


function farmer () {
    show(pgselect, inGame, pselect, menu);

    player = "farmer.png";
    cows = "cows_klein.png"
    setupPlayfield();
}

function robofarmer () {
    show(pgselect, inGame, pselect, menu);
    player = "robofarmer.png";
    cows = "robo-cow_klein.png"
    setupPlayfield();
}

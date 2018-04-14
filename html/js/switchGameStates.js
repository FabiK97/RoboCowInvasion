var inGame;
var pgselect;
var pselect;
var menu;
var playfieldSet;


var menuButton;
var psButton;
var pgsButton;
var ingameButton;

window.onload = function() {
    inGame = document.getElementById("g1");
    pgselect = document.getElementById("pgs");
    pselect = document.getElementById("ps");
    menu = document.getElementById("m");

    ingameButton = document.getElementById("ingameButton");
    menuButton = document.getElementById("menuButton");
    psButton = document.getElementById("psButton");
    pgsButton = document.getElementById("pgsButton");

    ingameButton.onclick = function() {show(inGame, pgselect, pselect, menu)};
    pgsButton.onclick = function() {show(pgselect, inGame, pselect, menu); setupPlayfield();};
    psButton.onclick = function() {show(pselect, pgselect, inGame, menu)};
    menuButton.onclick = function() {show(menu, inGame, pgselect, pselect)};


};

function show(el1, el2, el3, el4) {
    console.log("click");
        el1.style.display = 'block';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el4.style.display = 'none';
}


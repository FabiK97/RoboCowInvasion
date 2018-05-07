var inGame;
var pgselect;
var pselect;
var menu;
var playfieldSet;
var backgroundMusic;
var musicButton;
var endgame;
var scoreboard;

//sounds
var clickSound;
var muhSound;
var explosionSound;
var targetingSound;

var player;
var enemy;


var playButton;
var scoreButton;
var helpButton;
var helpBackButton;
var restartButton;
var goToScoreButton;

var farmerButton;
var roboFarmerButton;

var playerFarmer;
var enemyFarmer;

var humanAnimSet = ["img/cow_50x50.png","img/cowmarked_50x50.png","img/cow-dead_50x50.png","img/dreck.png"];
var robotAnimSet = ["img/robo-cow_50x50.png","img/robo-cowmarked_50x50.png","img/robo-cow-dead_50x50.png","img/dreck.png"];


window.onload = function() {
    inGame = document.getElementById("g1");
    pgselect = document.getElementById("pgs");
    pselect = document.getElementById("ps");
    menu = document.getElementById("m");
    endgame = document.getElementById("eg");
    scoreboard = document.getElementById("sb");

    playButton = document.getElementById("play");
    scoreButton = document.getElementById("score");
    helpButton = document.getElementById("help");
    helpBackButton = document.getElementById("helpBack");
    restartButton = document.getElementById("restart");
    goToScoreButton = document.getElementById("goToScore");

    farmerButton = document.getElementById("farmer");
    roboFarmerButton = document.getElementById("roboFarmer");

    musicButton = document.getElementById("musicButton");
    backgroundMusic = new sound("./musik/RoyalEntrance.mp3");

    clickSound = new sound("./musik/click.mp3");
    muhSound = new sound("./musik/muh.mp3");
    explosionSound = new sound("./musik/cowExplosion.wav");
    targetingSound = new sound("./musik/targetingSound.wav");

    playerFarmer = document.getElementsByClassName("farmerPlayer");
    enemyFarmer = document.getElementsByClassName("farmerEnemy");
    //backgroundMusic.play();

    show(menu, pselect, pgselect, inGame, endgame, scoreboard);

    farmerButton.onclick = function() {farmer();};
    roboFarmerButton.onclick = function() {robofarmer();};

    musicButton.onclick = function() {
      if(backgroundMusic.sound.paused){
         backgroundMusic.play();
      } else {
          backgroundMusic.stop();
      }

    };

    playButton.onclick = function() {show(pselect, pgselect, inGame, menu, endgame, scoreboard); clickSound.play();};
    helpButton.onclick = function() {help_on(); clickSound.play();};
    helpBackButton.onclick = function() {help_off(); clickSound.play();};
    restartButton.onclick = function() {location.reload();};
    goToScoreButton.onclick = function() {show(scoreboard, pgselect, inGame, menu, endgame, pselect);};


};

function show(el1, el2, el3, el4, el5, el6) {
    console.log("click");
        el1.style.display = 'block';
        el2.style.display = 'none';
        el3.style.display = 'none';
        el4.style.display = 'none';
        el5.style.display = 'none';
        el6.style.display = 'none';
}

function farmer () {
    show(pgselect, inGame, pselect, menu, endgame, scoreboard);
    player = humanAnimSet;
    enemy = robotAnimSet;

    playerFarmer[0].style.backgroundImage = "url('img/farmer.png')";
    enemyFarmer[0].style.backgroundImage = "url('img/robo-farmer.png')";

    clickSound.play();
    setupPlayfield();
}

function robofarmer () {
    show(pgselect, inGame, pselect, menu, endgame, scoreboard);

    player = robotAnimSet;
    enemy = humanAnimSet;

    playerFarmer[0].style.backgroundImage = "url('img/robo-farmer.png')";
    enemyFarmer[0].style.backgroundImage = "url('img/farmer.png')";

    clickSound.play();
    setupPlayfield();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.currentTime = 0;
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }

}
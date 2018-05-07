<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Robo Cow Invasion</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/design.css">
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

    <script src="js/Field.js" language="javascript" type="text/javascript"></script>
    <script src="js/PlayerField.js" language="javascript" type="text/javascript"></script>
    <script src="js/EnemyField.js" language="javascript" type="text/javascript"></script>
    <script src="js/CowFamily.js" language="javascript" type="text/javascript"></script>
    <script src="js/playgroundSelect.js" languae="javascript" type="text/javascript"></script>
    <script src="js/game.js" language="javascript" type="text/javascript"></script>
    <script src="js/enemyAi.js" language="javascript" type="text/javascript"></script>
    <script src="js/switchGameStates.js" language="javascript" type="text/javascript"></script>
    <script src="js/overlay_help.js" type="text/javascript"></script>
    <script src="js/switchToPlayerSelect.js" type="text/javascript"></script>
    <script src="js/sound.js" type="text/javascript"></script>
    <script src="js/scoreboard.js" type="text/javascript"></script>
    <link href='https://fonts.googleapis.com/css?family=Black+Ops+One' rel='stylesheet' type='text/css'>

</head>
<body>
<div class="game-box">

    <div class="header">
        <div id="musicButton">
           <img id= "soundSymbol" src="img/music_off.png" onclick="changeSoundSymbol()">
        </div>
        <div class="showUser">
            <div id="helloUser">
        <p>Hallo <strong class="username"><?php echo $this->username; ?></strong> | </p>
            </div>
        <a href="logout"><button id="logoutButton" type="button" class="btn" onclick="clickSound.play()"> logout </button></a>

            <div id ="mobileDropdown">
            <a href="logout"><button id="dropdownLogout" type="button" class="btn" onclick="clickSound.play()"></button></a>
            </div>
        </div>
    </div>

    <div id="m" class="content startMenu">
        <div class="cowWalk"></div>
        <div class="roboCowWalk"></div>
        <div class="playSign">
            <div class="fld">
                <div id="play" class="fbtn" ><img src="img/playButton.png"> </div>
                <div class="ftxt" style="font-size: 3em; padding: 10px;">Play</div>
            </div>
            <div class="fld">
                <div id="score" class="fbtn "><img src="img/scoreButton.png"></div>
                <div class="ftxt">Scoreboard</div>
            </div>
            <div id="help" class="fld">
                <div class="fbtn " ><img src="img/helpButton.png"></div>
                <div class="ftxt">Help</div>
            </div>
        </div>
        <div id="helpoverlay" class="overlay">
            <div class="overlay-box">
                <div class="overlay-content">
                    <h4>Robo Cow Invasion</h4> <br>
                    <p>Roboterbauern greifen die Farmen der Erde an! Der Bauer Farmario beschützt sein Eigentum und kämpft mit seinen Kühen gegen maschinelle Kühe. <br><br>
                        Wähle eine Seite und lass den Kampf um die Erde beginnen!</p><br><br>

                    <h5>Wie es funktioniert:</h5>
                       <p>Wähle eine Seite und platziere deine Kampfkühe als Familie auf deinem Feld. Insgesamt gibt es 4 Kuhfamilien mit 5,4,3 oder 2 Kühen. Hast du deine Kühe gesetzt, gelangst du nun zum Schlachtfeld.
                        Nun wird abwechselnd ein Feld gewählt. Verfehlst du die Gegnerkuh, wird ein Schmutzfleck sichtbar. Hast du einen Treffer gelandet, wird die Kuh des Gegners angezeigt und mit einem Fadenkreuz markiert. Das gleiche gilt für deine Kühe: Hat dein Gegner eine deiner Kühe ins Visier genommen, wird auch diese mit einem Fadenkreuz markiert. Hast du oder dein Gegner alle Kühe einer Kuhfamilie ins Visier genommen, werden Bomben auf sie geworfen und sie werden außer Gefecht gesetzt.
                        <br><br>   Derjenige, der als erstes die Kühe des Gegners ausgeschalten hat, gewinnt den Kampf!</p>
                </div>
                <div class="button">
                    <button id="helpBack" type="submit" class="btn" onclick="help_off()">back</button>
                </div>
            </div>
        </div>
    </div>


    <div id="ps" class="content pselect">
        <div class="pshead">Please Select your Player</div>
        <div id="farmer" class="farmer" ></div>
        <div id="roboFarmer" class="roboFarmer" ></div>
    </div>

    <div id="pgs" class="content pgselect">
        <h1 class="überschrift">Cow-Familiy Setup</h1>
        <h2 class="infoLine">Cow-Families to place: </h2>
        <div id="pf" class="playerfield"></div>
    </div>

    <div id="g1" class="content ingame">
        <div class="sign enemyHits"></div>
        <div class="sign playerHits"></div>
        <div class="sign enemyLeft"></div>
        <div class="sign playerLeft"></div>
        <div class="blocksign s1">
            <div class="s1 playerHits">Hits: 0</div>
            <div class="s1 playerLeft">Left: 0</div>
        </div>
        <div class="farmerPlayer"></div>

        <div class="farmerEnemy"></div>
        <div class="game">
            <div class="customCursor" id="ef"></div>
            <div id="plf"></div>
        </div>
        <div class="blocksign s2">
            <div class="s2 enemyHits">Hits: 0</div>
            <div class="s2 enemyLeft">Left: 0</div>

        </div>
    </div>
    <div id="eg" class="content endgame">
        <div id="gameover" class="continue">
            <p> GAME </p>
            <p> OVER </p>
        </div>
        <div id="victory" class="continue">
            <p> VICTORY </p>
        </div>

        <div class="restart"> <p> RESTART? </p> </div>

        <div class="decisions">
            <a href="index" id="restart"><div class="btnyes">  YES  </div></a>
            <a href="scoreboard"  id="goToScore"><div class="btnno" >  NO  </div></a>
        </div>
    </div>

    <div id="sb" class="content scoreboard">
    </div>
</div>


<!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>
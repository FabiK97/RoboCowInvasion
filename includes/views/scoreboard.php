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


    <script src="js/scoreboard.js" type="text/javascript"></script>
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
        <a href="logout"><button id="logoutButton" type="button" class="btn"> logout </button></a>

            <div id ="mobileDropdown">
            <a href="logout"><button id="dropdownLogout" type="button" class="btn"></button></a>
            </div>
        </div>
    </div>
    <div id="sb" class="content scoreboard">
        <h1 class="lbh1">Scoreboard</h1>

        <?php if($this->scores): ?>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>rank</th>
                <th>user</th>
                <th>shots</th>
                <th>accuracy</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach($this->scores as $score): $this->rank++; ?>
                <tr>
                    <td><?php echo $this->rank; ?></td>
                    <td><?php echo $score->username; ?></td>
                    <td><?php echo $score->clicks; ?></td>
                    <td><?php echo $score->accuracy*100; ?> %</td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>

        <a href="index" id="btm"><div class="returnMenuButton">back to menu</div></a>

        <?php else: ?>
        <p>&nbsp;</p>
        <div class="alert alert-info">Keine Scoretabelle.</div>
        <?php endif; ?>
    </div>
</div>


<!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>
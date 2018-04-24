<!DOCTYPE html>
<html lang="de">
<head>
    <title>Anmelden</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="./css/login_registration.css" rel="stylesheet">
    <link href="./css/cowanim.css" rel="stylesheet">

    <script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="./js/bootstrap.min.js"></script>
</head>
<body>
<div class="ufocow"></div>
<div class="cow"></div>

    <img class="logo" src="./img/logo.png">
    <div id="main">
        <div class="row">
            <?php if($this->RegisterSuccessful): ?>
            <h1>Herzlichen Glückwunsch!</h1>
            <p>
                Klicken Sie <a href="login">hier um sich anzumelden</a>
            </p>
            <?php else: ?>
            <h1 class="col-xs-12">Registrierung</h1>
            <p class="col-xs-12 registration">
               Bitte füllen Sie folgendes Formular aus um sich für <b>RoboCowInvasion</b>  zu registrieren:
            </p>

            <form method="post" class="col-xs-12">

                <div class="form-group">
                    <input type="email" name="email" class="form-control" id="email" placeholder="E-Mail">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="username" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="password" name="passwort" class="form-control" id="pwd" placeholder="Passwort">
                </div>
                <div class="form-group">
                    <input type="password" name="passwort2" class="form-control" id="pwd2" placeholder="Passwort wiederholen">
                </div>

                <button type="submit" class="btn">Registrieren</button>
                <input type="hidden" name="action" value="register">
                <br><br>
            </form>
            <?php endif; ?>
        </div>
    </div>


</body>
</html>

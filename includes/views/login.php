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
        <h1 class="col-xs-12">Login</h1>

        <form method="post" action="login" class="form-horizontal col-xs-12">
            <div class="form-group">
                <div class="col-xs-12 col-md-10">
                    <input type="text" name="username" id="username" class="text form-control" value="" placeholder="Benutzername">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12 col-md-10">
                    <input type="password" name="password" id="password" class="text form-control" value="" placeholder="Passwort">
                </div>
            </div>
            <button type="submit" class="btn">Anmelden</button>
            <input type="hidden" name="action" value="login">
        </form>

        <p class="col-xs-12">
            <br>Sie haben noch keinen Account? <br>Melden Sie sich <a href="register">hier an</a>.
        </p>
    </div>
</div>


</body>
</html>

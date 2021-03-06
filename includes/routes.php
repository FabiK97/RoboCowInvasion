<?php

//define Routes
$route['/'] = array('controller' => 'IndexController', 'uniqueName' => 'index');
$route['/index'] = array('controller' => 'IndexController', 'uniqueName' => 'index');
$route['/index.html'] = array('controller' => 'IndexController', 'uniqueName' => 'index');


$route['/login'] = array('controller' => 'LoginController', 'uniqueName' => 'login');
$route['/login.html'] = array('controller' => 'LoginController', 'uniqueName' => 'login');
$route['/anmelden'] = array('controller' => 'LoginController', 'uniqueName' => 'login');

$route['/register'] = array('controller' => 'RegisterController', 'uniqueName' => 'register');
$route['/registrierung'] = array('controller' => 'RegisterController', 'uniqueName' => 'register');

$route['/logout'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');
$route['/logout.html'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');

$route['/scoreboard.html'] = array('controller' => 'ScoreboardController', 'uniqueName' => 'score');
$route['/scoreboard'] = array('controller' => 'ScoreboardController', 'uniqueName' => 'score');


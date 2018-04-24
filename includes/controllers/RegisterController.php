<?php
/**
 * Created by PhpStorm.
 * User: Fabio Knoll
 * Date: 24.04.2018
 * Time: 13:58
 */


class RegisterController extends Controller
{

    protected $viewFileName = "register"; //this will be the View that gets the data...
    protected $loginRequired = false;


    public function run()
    {
        $this->view->title = 'Register';

        if($this->user->isLoggedIn)
        {
            $this->user->redirectToIndex();
        }

        $this->checkForRegisterPost();
    }

    private function checkForRegisterPost()
    {

        if (!empty($_POST) && isset($_POST['action']) && $_POST['action'] == 'register') {
            $requiredFields = array('username', 'passwort', 'passwort2');

            $error = false;
            $errorFields = array();

            foreach ($requiredFields as $fieldName) {
                if (!isset($_POST[$fieldName]) || $_POST[$fieldName] == '') {
                    $error = true;
                    $errorFields[$fieldName] = "Bitte Wert eingeben!";
                }
            }

            if (!$error) {
                $password = $_POST['passwort'];
                $username = $_POST['username'];
                $email = $_POST['email'];
                $firstname = $_POST['firstname'];
                $lastname = $_POST['lastname'];

                if (strlen($password) < 8) //check if password is long enough
                {
                    $error = true;
                    $errorFields['passwort'] = "Passwort ist zu kurz! Bitte mindestens 8 Zeichen eingeben";
                } else if ($password != $_POST['passwort2']) //check if password matches password repetition
                {
                    $error = true;
                    $errorFields['passwort2'] = "Passwort Wiederholung entspricht nicht dem gleichen Wert von Passwort!";
                }

                if (!$error) {
                    //check if username exists already...
                    if (User::existsWithUsername($username) == false) {
                        User::createUser(array('username' => $username, 'password' => $password, 'email' => $email, 'firstname' => $firstname));

                        $this->view->RegisterSuccessful = true;
                    } else {

                        $this->view->UserExistsAlready = true;
                    }

                }
            }

            $this->view->errorFields = $errorFields;
        }
    }
}
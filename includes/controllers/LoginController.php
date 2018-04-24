<?php

/**
 * @author Daniel Hoover <https://github.com/danielhoover>
 */
class LoginController extends Controller
{
	protected $viewFileName = "login"; //this will be the View that gets the data...
	protected $loginRequired = false;


	public function run()
	{
		$this->view->title = 'Login';

		if($this->user->isLoggedIn)
		{
			$this->user->redirectToIndex();
		}

		$this->checkForLoginPost();
		//$this->checkForRegisterPost();
	}

	private function checkForLoginPost()
	{
		if(!empty($_POST) && isset($_POST['action']) && $_POST['action'] == 'login')
		{
			//probably a login attempt!

			$username = $_POST['username'];
			$password = $_POST['password'];

			if($username != "" && $password != "")
			{
				if($this->user->login($username, $password))
				{
					$this->user->redirectToIndex();
				}
				else
				{
					$this->view->errorPasswd = true;
				}
			}

		}
	}


}
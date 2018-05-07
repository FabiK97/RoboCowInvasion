<?php

/**
 * @author Daniel Hoover <https://github.com/danielhoover>
 */
class IndexController extends Controller
{
	protected $viewFileName = "index"; //this will be the View that gets the data...
	protected $loginRequired = true;


	public function run()
	{
		$this->view->title = "Übersicht";
		$this->view->username = $this->user->username;

		//$this->view->addresses = AddressModel::getAddressesByUserId($this->user->id);

        $this->checkForScoreSavePost();
	}

	private function checkForScoreSavePost()
    {
        if(isset($_POST['action']) && $_POST['action'] == 'saveScore')
        {
            $playerShots = $_POST['playerShots'];
            $accuracy = $_POST['accuracy'];

            //var_dump($this->user);

            GameModel::saveScore($this->user->id, $playerShots, $accuracy);


            $json = new JSON();
            $json->result = true;
            $json->setMessage('habs gespeichert');
            $json->send();
        } else if(isset($_POST['action']) && $_POST['action'] == 'getScore') {
            $this->view->scores = GameModel::getScoreboardData();

            $json = new JSON();
            $json->result = true;
            $json->setMessage('habs bekommen');
            $json->send();

        }
    }

}
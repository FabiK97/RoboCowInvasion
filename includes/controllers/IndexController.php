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
            $hits = $_POST['hits'];
            $cowsLeft = $_POST['cowsLeft'];

            //var_dump($this->user);

            GameModel::saveScore($this->user->id, $hits, $cowsLeft);


            $json = new JSON();
            $json->result = true;
            $json->setMessage('habs gespeichert');
            $json->send();
        }
    }

}
<?php

/**
 * @author Daniel Hoover <https://github.com/danielhoover>
 */
class ScoreboardController extends Controller
{
	protected $viewFileName = "scoreboard"; //this will be the View that gets the data...
	protected $loginRequired = true;


	public function run()
	{
		$this->view->title = "Scoreboard";
		$this->view->username = $this->user->username;
		$this->view->rank = 0;

		//$this->view->addresses = AddressModel::getAddressesByUserId($this->user->id);

        $this->checkForScore();
	}

	private function checkForScore()
    {
            $this->view->scores = GameModel::getScoreboardData();

    }

}
<?php

class GameModel
{

	public static function saveScore($userid, $playerShots, $accuracy)
	{
		$db = new Database();

		//achtung sql injection
        $playerShots = $db->escapeString($playerShots);
        $accuracy = $db->escapeString($accuracy);

		$sql = "INSERT INTO game(`userid`,`clicks`,`accuracy`) VALUES('".$userid."','".$playerShots."','".$accuracy."')";
		$db->query($sql);
	}

	public static function getScoreboardData(){
        $db = new Database();

        $sql = "SELECT user.username, game.clicks, game.accuracy FROM game JOIN user on user.userid = game.userid ORDER BY clicks LIMIT 10";
        $result = $db->query($sql);

        if($db->numRows($result) > 0)
        {

            while($row = $db->fetchObject($result))
            {
                $addressesArray[] = $row;

            }

            return $addressesArray;
        }

        return null;

    }
}
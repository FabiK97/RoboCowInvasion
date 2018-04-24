<?php

class GameModel
{

	public static function saveScore($userid, $hits, $cowsLeft)
	{
		$db = new Database();

		//achtung sql injection
        $hits = $db->escapeString($hits);
        $cowsLeft = $db->escapeString($cowsLeft);

		$sql = "INSERT INTO game(`userid`,`hits`,`cowsLeft`) VALUES('".$userid."','".$hits."','".$cowsLeft."')";
		$db->query($sql);
	}

	public static function deleteAddress($id)
	{
		$db = new Database();

		$sql = "DELETE FROM address WHERE id=".intval($id);
		$db->query($sql);
	}
}
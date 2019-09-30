<?php
/*PHP - mysql*/
error_reporting(0);

function select(){
	//Open mysql conn
	$link = mysql_connect('localhost', 'root', '');
	mysql_set_charset('utf8',$link);
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}
	
	//select db
	$db = "worldheritage";
	mysql_select_db($db, $link);
	
	if(isset($_GET['cname']))
	{
		//Query
		$query = mysql_query("SELECT * FROM country_population_2014 WHERE cname = '".$_GET['cname']."'");
		while($row = mysql_fetch_array($query)){
		  $result = $row['populationrate'];
		}
		
		//$result = str_replace("%","",$result);
		//$result = floatval($result)*100;
		echo $result;
	}
	
	//Close mysql conn
	mysql_close($link);
}
select();
?>
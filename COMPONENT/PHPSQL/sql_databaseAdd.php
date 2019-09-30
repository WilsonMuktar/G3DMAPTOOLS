<?php
/*PHP - mysql
  COPYING ALL VALUE FROM TEMPLATE TO EACH USER DATABASE
*/
error_reporting(0);

	//Open mysql conn
	$link = mysql_connect('localhost', 'root', '');
	mysql_set_charset('utf8',$link);
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}
	
	//select db
	$db = "world";
	mysql_select_db($db, $link);
	$result = "";
	if(isset($_GET['username']) && isset($_GET['lvl']))
	{
		//Query
		$datatable = $_GET['username']."_".$_GET['lvl']; // username_countries
		$template  = "template_".$_GET['lvl']; // template_countries
		
		if(mysql_num_rows(mysql_query("SHOW TABLES LIKE '".$datatable."'"))==1) 
			;//skip
		else {
			$query = mysql_query("CREATE TABLE ".$datatable." LIKE ".$template." ; ");
			$query = mysql_query("INSERT ".$datatable." SELECT * FROM ".$template." ;");
		}
	}
	
	//Close mysql conn
	mysql_close($link);

	
?>
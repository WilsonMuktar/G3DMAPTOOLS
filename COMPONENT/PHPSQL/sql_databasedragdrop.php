<?php
/*PHP - mysql
  COPYING ALL VALUE FROM TEMPLATE TO EACH USER DATABASE
*/
//error_reporting(0);

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
	if(isset($_GET['newcolumn']) && isset($_GET['tbname']) && isset($_GET['newcolumn']))
	{
		//Query add new column
		$result = "ALTER TABLE ".$_GET['tbname']." ADD ".$_GET['newcolumn']." INT(50) NOT NULL DEFAULT '0' ";
		mysql_query($result);
		echo "";
	}
	else if(isset($_GET['updatenewcolumn']) && isset($_GET['tbname']) && isset($_GET['cname']) && isset($_GET['column']) && isset($_GET['value']))
	{
		//Query set new column value
		$cname = $_GET['cname'];
		$result = "UPDATE ".$_GET['tbname']." SET ".$_GET['column']." = ".$_GET['value']." WHERE cname = '".$cname."'";
		mysql_query($result);
		echo "";
	}
	else{
		echo "FAILED!";
	}
	
	//Close mysql conn
	mysql_close($link);

	
?>
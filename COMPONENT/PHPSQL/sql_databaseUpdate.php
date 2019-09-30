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
	if(isset($_GET['user']) && isset($_GET['lvl']))
	{
		//Query
		$result .= "UPDATE ".$_GET['user']."_".$_GET['lvl']." SET ";
		
		//get TABLE colums name
		$column = mysql_query("SHOW COLUMNS FROM ".$_GET['user']."_".$_GET['lvl'].";");
		$i = 0;
		while($row = mysql_fetch_array($column))
		{
			if($i==0){
				$result .= $row[0]." = '".$_POST[$row[0]]."'";
				$i++;
			}
			else{
				$result .= " , ".$row[0]." = '".$_POST[$row[0]]."'";
			}
		}
		$result .= " WHERE cname = '".$_POST['cname']."';";
		
		$last = mysql_query($result);
		echo $result;
	}else{
		echo "FAILED!";
	}
	
	//Close mysql conn
	mysql_close($link);

	
?>
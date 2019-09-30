<?php
		//Open mysql conn
		$link = mysql_connect('localhost', 'root', '');
		mysql_set_charset('utf8',$link);
		if (!$link) {
			die('Could not connect: ' . mysql_error());
		}
		//Select database
		mysql_select_db($_GET['db'], $link);
		
			//Query all database value
			$colormodevalue = array();
			//additional exception
			if(isset($_GET['continent'])){
				$query = mysql_query("SELECT * FROM ".$_GET['table']." WHERE continent = '".$_GET["continent"]."' ORDER BY ".$_GET['column']." DESC");
			}else{
				$query = mysql_query("SELECT * FROM ".$_GET['table']." ORDER BY ".$_GET['column']." DESC");
			}
			while($row = mysql_fetch_array($query)){
			  $colormodevalue[] = $row;
			}
			
			 //Get MAX value
			$query = mysql_query("SELECT MAX(CAST(`". $_GET['column'] ."` AS SIGNED)) FROM ". $_GET['table'] . " WHERE cname != 'World'");
			$row = mysql_fetch_array($query);
			$colormodemaxvalue = $row[0];
			 //Get MIN value
			$query = mysql_query("SELECT MIN(CAST(`". $_GET['column'] ."` AS SIGNED)) FROM ". $_GET['table']);
			$row = mysql_fetch_array($query);
			$colormodeminvalue = $row[0];
			
		//Close mysql conn
		mysql_close($link);
		
		if(isset($_GET['child'])){ //not in main function
			$result = "parent.colormodevalue = ". json_encode($colormodevalue, JSON_PRETTY_PRINT).";";
			$result.= "parent.colormodemaxvalue = ". $colormodemaxvalue.";";
			$result.= "parent.colormodeminvalue = ". $colormodeminvalue.";";
		}
		else
		{
			$result = "colormodevalue = ". json_encode($colormodevalue, JSON_PRETTY_PRINT).";";
			$result.= "colormodemaxvalue = ". $colormodemaxvalue.";";
			$result.= "colormodeminvalue = ". $colormodeminvalue.";";
		}
		
		echo $result;
?>


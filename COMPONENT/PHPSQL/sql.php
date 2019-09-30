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
		$query = mysql_query("SELECT * FROM esri_country_info WHERE Continent LIKE '%".$_GET['cname']."%'");
		while($row = mysql_fetch_array($query)){
		  $new_array[] = $row;
		}
		
		//Result
		$result = "
		<table style='font-size:2vmin;color:#ffffff;'>
		<tr>
			<td valign='top'>Countries</td>
			<td valign='top'> : </td>
			<td valign='top'>";
		foreach($new_array as $array){
			$result = $result.$array['Country']." - ".$array['ISO_cc']."<br>";
		}
		echo $result."
			</td>
		</tr>
		</table>";
	}
	
	else if(isset($_GET['conname']))
	{
		//Query
		if($_GET['conname']=="unitedstates")
			$conname_x = "united states";
		else
			$conname_x = $_GET['conname'];
		$query = mysql_query("SELECT * FROM country_info_1 WHERE conname = '".$conname_x."'");
		while($rows = mysql_fetch_array($query)){
			$row = $rows;
		}
		
		//Result
		$result = "
		<table style='font-size:2vmin;color:#ffffff;'>
		<tr>
			<td valign='top'>Name</td><td valign='top'> : </td>
			<td valign='top'>".$row['conname']."</td>
		</tr><tr>
			<td valign='top'>Capital</td><td valign='top'> : </td>
			<td valign='top'>".$row['Capital']."</td>
		</tr><tr>
			<td valign='top'>Location</td><td valign='top'> : </td>
			<td valign='top'>".$row['Location']."</td>
		</tr><tr>
			<td valign='top'>Coordinate</td><td valign='top'> : </td>
			<td valign='top'>".$row['Geo_coordinates']."</td>
		</tr><tr>
			<td valign='top'>Area</td><td valign='top'> : </td>
			<td valign='top'>".$row['Area']."</td>
		</tr><tr>
			<td valign='top'>Population</td><td valign='top'> : </td>
			<td valign='top'>".$row['population']."-".$row['population_growth_rate']."</td>
		</tr><tr>
			<td valign='top'>Government</td><td valign='top'> : </td>
			<td valign='top'>".$row['Government_type']."</td>
		</tr><tr>
			<td valign='top'>GDP</td><td valign='top'> : </td>
			<td valign='top'>".$row['GDP']."-".$row['GDP_growth_rate']."</td>
		</tr><tr>
			<td valign='top'>Description</td><td valign='top'> : </td>
			<td valign='top'>".$row['Description']."</td>
		</tr>
		</table>";
		echo $result;
	}
	
	//Close mysql conn
	mysql_close($link);
}
select();
?>
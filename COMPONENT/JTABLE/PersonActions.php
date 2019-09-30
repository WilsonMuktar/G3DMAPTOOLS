<?php
try
{
	//Open database connection
	$con = mysql_connect("localhost","root","");
	$dbname = "world";
	mysql_select_db($dbname, $con);

	//Getting records (listAction)
	if($_GET["action"] == "list")
	{
		//Get record count
		$result = mysql_query("SELECT COUNT(*) AS RecordCount FROM ".$_GET['tbname'].";");
		$row = mysql_fetch_array($result);
		$recordCount = $row['RecordCount'];

		//Get records from database
		$result = mysql_query("SELECT * FROM ".$_GET['tbname']." ORDER BY " . $_GET["jtSorting"] . " LIMIT " . $_GET["jtStartIndex"] . "," . $_GET["jtPageSize"] . ";");
		
		//Add all records to an array
		$rows = array();
		while($row = mysql_fetch_array($result))
		{
		    $rows[] = $row;
		}

		//Return result to jTable
		$jTableResult = array();
		$jTableResult['Result'] = "OK";
		$jTableResult['TotalRecordCount'] = $recordCount;
		$jTableResult['Records'] = $rows;
		print json_encode($jTableResult);
	}
	//Creating a new record (createAction)
	/* else if($_GET["action"] == "create")
	{
		//Display Database table column
		$query = mysql_query("SHOW COLUMNS FROM ".$_GET['tbname'].";");
		$i=0;
		$rows = array();
		while($row = mysql_fetch_array($query)){
			//alert($row[$i]);
			$rows[$i] = $row[0];
			$i++;
		}
			
	 	//Insert record into database
		$command = "INSERT INTO ".$_GET['tbname']." (";
			for($j=1;$j<$i;$j++){
				if($j==1)
					$command.= $rows[$j];
				else
					$command.= ",".$rows[$j];
			}
		$command.= ") VALUES(";
			for($j=1;$j<$i;$j++){
				if($j==1)
					$command.= "'".$_POST[$rows[$j]]."'";
				else
					$command.= ",'". $_POST[$rows[$j]]."'";
			}
		$command.= ");";
		
		//INSERTING
		$result = mysql_query($command);
		
		//Get last inserted record (to return to jTable)
		$result = mysql_query("SELECT * FROM ".$_GET['tbname']." WHERE id = LAST_INSERT_ID();");
		$row = mysql_fetch_array($result);
 
		//Return result to jTable
		$jTableResult = array();
		$jTableResult['Result'] = "OK";
		$jTableResult['Record'] = $row;
		print json_encode($jTableResult);
	} */
	
	//Modified as new column 
	else if($_GET["action"] == "create")
	{
		$result = mysql_query("ALTER TABLE ".$_GET['tbname']." ADD ".$_POST['cname']." INT DEFAULT 0;");
		$row = mysql_fetch_array($result);
 
		//Return result to jTable
		$jTableResult = array();
		$jTableResult['Result'] = "OK";
		print json_encode($jTableResult);
	}
	
	//Updating a record (updateAction)
	else if($_GET["action"] == "update")
	{
		//Display Database table column
		$query = mysql_query("SHOW COLUMNS FROM ".$_GET['tbname'].";");
		$i=0;
		$rows = array();
		while($row = mysql_fetch_array($query)){
			//alert($row[$i]);
			$rows[$i] = $row[0];
			$i++;
		}
		
		//Update record in database
		$command = "UPDATE ".$_GET['tbname']." SET ";
			for($j=1;$j<$i;$j++){
				if($j==1)
					$command.= $rows[$j]."="."'".$_POST[$rows[$j]]."'";
				else
					$command.= ",".$rows[$j]."="."'".$_POST[$rows[$j]]."'";
			}
		$command.= " WHERE id = ".$_POST["id"].";";
		
		//Updating
		$result = mysql_query($command);
		
		//Return result to jTable
		$jTableResult = array();
		$jTableResult['Result'] = "OK";
		print json_encode($jTableResult);
	}
	
	//Deleting a record (deleteAction)
	else if($_GET["action"] == "delete")
	{
		//Delete from database
		$command = "DELETE FROM ".$_GET['tbname']." WHERE id = ".$_POST['id'].";";
		$result = mysql_query($command);

		//Return result to jTable
		$jTableResult = array();
		$jTableResult['Result'] = "OK";
		print json_encode($jTableResult);
	}

	//Deleting a column (deleteAction)
	else if($_GET["action"] == "deleteColumn")
	{
		//Delete from database
		$command = "ALTER TABLE ".$_GET['tbname']." DROP ".$_GET['colname'];
		$result = mysql_query($command);

		//Return result to jTable
		//$jTableResult = array();
		//$jTableResult['Result'] = "OK";
		//print json_encode($jTableResult);
		//echo "alert('".$command."');";
		echo "";
	}

	//Close database connection
	mysql_close($con);

}
catch(Exception $ex)
{
    //Return error message
	$jTableResult = array();
	$jTableResult['Result'] = "ERROR";
	$jTableResult['Message'] = $ex->getMessage();
	print json_encode($jTableResult);
}
	
?>
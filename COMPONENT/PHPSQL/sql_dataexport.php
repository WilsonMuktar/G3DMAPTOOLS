<?php
		//Open mysql conn
		$link = mysql_connect('localhost', 'root', '');
		mysql_set_charset('utf8',$link);
		if (!$link) {
			die('Could not connect: ' . mysql_error());
		}
		//Select database
		mysql_select_db($_GET['db'], $link);
		$result = "parent.xlsdata = [];";
		$result .= "parent.xlsdata.push([";
		
			$columns = array();
			//Query all database column
			$rowindex = 0;
			$column = mysql_query("SHOW COLUMNS FROM ".$_GET['table'].";");
			while($row = mysql_fetch_array($column)){
				if($rowindex!=0)
					$result .=",";
				$result .= "'".$row[0]."'";
				//keep array for column loop below
				$columns[0][$rowindex] = $row[0];
				$rowindex++;
			}
			$result .="]);";
			//Query all database value
			$query = mysql_query("SELECT * FROM ".$_GET['table'].";");
			while($row = mysql_fetch_array($query)){
				$rowindex = 0;
				$result .= "parent.xlsdata.push([";
				for($i=0;$i<count($columns[0]);$i++){
					if($rowindex!=0)
						$result .=",";
					$result .= "'".$row[$i]."'";
					$rowindex++;
				}
				$result .="]);";
				$rowindex++;
			}
			
		//Close mysql conn
		mysql_close($link);
		//$result .= json_encode($results)."');";
		//$result = "	var data = [];var idstr='id';var cnamestr='cname';var valuestr='value';data.push([idstr,cnamestr,valuestr]);var id = 1;var cname = 'china';var value = 1;data.push([id,cname,value]);data.push([id,cname,value]);";
		//$result .= "createXLSfile(data,'".explode("_",$_GET['table'])[1]."');";
		//$result .= "$('#dragdroploading').css('display','none');";
		echo $result;
?>


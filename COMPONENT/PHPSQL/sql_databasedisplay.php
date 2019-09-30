<?php
/*PHP - mysql*/
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
	if(isset($_GET['tbname']))
	{
		if($_GET['tbname']=='null'){
			$result = "$('#PeopleTableContainer').jtable('destroy');";
		}
		else
		{
			$result = "
				var cal = ($(parent.document.body).height()-50)/50;
				$(document).ready(function () {
					//reset table for multiple database choices
					if($('#PeopleTableContainer').children().length > 0)
						$('#PeopleTableContainer').jtable('destroy');
					//Prepare jTable
					$('#PeopleTableContainer').jtable({
						title: '".$_GET['tbname']."',
						paging: true,
						pageSize: parseInt(cal,10),
						sorting: true,
						defaultSorting: 'cname ASC',
						actions: {
							listAction: '../JTABLE/PersonActions.php?action=list&tbname=".$_GET['tbname']."',
							createAction: '../JTABLE/PersonActions.php?action=create&tbname=".$_GET['tbname']."',
							updateAction: '../JTABLE/PersonActions.php?action=update&tbname=".$_GET['tbname']."',
							deleteAction: '../JTABLE/PersonActions.php?action=delete&tbname=".$_GET['tbname']."'
						},
						fields: {" ;
					
			//Display Database table column
			$query = mysql_query("SHOW COLUMNS FROM ".$_GET['tbname'].";");
			$i=0;
			while($row = mysql_fetch_array($query)){
				//alert($row[0]);
				if($i>0) $result.=",";
				if($row[0]=="id")
					$result.= $row[0].": {
							title: '".$row[0]."',
							width: '5%',
							key: true,
							list:false
						}";
				else
					$result.= $row[0].": {
							title: '".$row[0]."',
							width: '20%'
						}";
				$i++;
			}
					
			$result .= "}
					}); 
			});
				$('#PeopleTableContainer').jtable('load');";
		}
		echo $result;
	}
	
	//Close mysql conn
	mysql_close($link);
?>
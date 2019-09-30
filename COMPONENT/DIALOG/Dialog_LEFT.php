<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
	<script type="text/javascript" src="../../js/jquery-2.1.1.js"></script>
	
	<link rel="stylesheet" href="../../css/style.css" />
<style>
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody, #title{
	color:#fff;
	background:transparent;
}
.TitleName{
	float:left;
	margin-top: 30px;
	margin-left: 100px;
	font-size:20px;
	width:130px;
	height:100px;
}
</style>
</head>
<script>
 $(window).load(function() {
	resizedialog();
  });
</script>
<body>
    <div id="title" name="title" style="border:none;">
      <div id='name' style="font-size:20px; font-style:normal; margin-top:6px;">
		<?php if($_GET['user']!=""){ echo $_GET['cname']; }?>
	  </div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeLeftDialogbox();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody" style="overflow:auto;">
	<center>
	<form name='form' method='post' action=''>
	<table style="color:#FFF;" >
		<?php 
		if($_GET['user']!=""){
			try{
				//Open database connection
				$con = mysql_connect("localhost","root","");
				$dbname = "world";//as user database name
				mysql_select_db($dbname, $con);
				
				//get all value
				$query = mysql_query("SELECT * FROM ".$_GET['user']."_".$_GET['lvl']." WHERE cname = '".$_GET['cname']."'");
				$arrays = array(); while($rows = mysql_fetch_array($query))$arrays[]  = $rows;
				$array; foreach($arrays as $row)$array = $row;
				
				//get TABLE colums name
				$result = mysql_query("SHOW COLUMNS FROM ".$_GET['user']."_".$_GET['lvl'].";");
				$i = 0;
				while($row = mysql_fetch_array($result))
				{
			?>
					<tr><td></td></tr>
					<tr>
					<td><?php echo $row[0];?></td>
					<td>:</td>
					<td><input type="text"id="<?php echo $row[0];?>" value="<?php echo $array[$i++];?>"></input></td>
					</tr>
			<?php
				}
			}
			catch(Exception $e){}
			?>
				<tr><td></td></tr>
				<tr><td></td></tr>
				<tr><td></td><td></td><td float="right"><input type="submit" id="UPDATE" value="UPDATE"/></td></tr>
				<tr><td></td></tr>
				<tr><td></td></tr>
				<tr><td></td></tr>
				<tr><td></td></tr>
			<?php
		}
		else{
			?>
				<tr><td>&nbsp;</td></tr>
				<tr><td>&nbsp;</td></tr>
				<tr><td>&nbsp;</td></tr>
				<tr><td>Please <a onclick="parent.closeLeftDialogbox();parent.openloginpage();">LOGIN</a> first!</td></tr>
			<?php
		}
		?>
	</table>
	</form>
	</center>
	</div>
</body> 
	<script>
		//var php for
		var status = "<?php if(isset($_GET['user'])) echo "LOGIN";?>";
		if(status=="LOGIN")
		{
			var username = "<?php if(isset($_GET['user'])) echo $_GET['user'];?>";
			var template = "<?php if(isset($_GET['lvl'])) echo $_GET['lvl'];?>";
			//keep column name for dynamic UPDATE SQL operation
			var columns  = 
			"<?php 
			if($_GET['user']!=""){
			try{
				//Open database connection
				$con = mysql_connect("localhost","root","");
				$dbname = "world";//as user database name
				mysql_select_db($dbname, $con);
				
				//get TABLE colums name
				$result = mysql_query("SHOW COLUMNS FROM ".$_GET['user']."_".$_GET['lvl'].";");
				$i = 0;
				$columns = "";
				while($row = mysql_fetch_array($result))
				{
					if($i==0){
						$columns .= $row[0];$i++;
					}
					else{
						$columns .= "_".$row[0];
					}
				}
				echo $columns;
			}
			catch(Exception $e){}
			}
			?>";
			var column = columns.split('_');
			//alert(column.length);
		}
		
		//Close button hover event
		function changeImage(x){
			x.src="../../images/closer.png"
		}
		function rebackImage(x){
			x.src="../../images/closew.png"
		}
		//Resizing main dialog
		//Resizing all component to fit window
		function resizedialog(){
			var width = parent.document.documentElement.clientWidth*0.3;
			var height= parent.document.documentElement.clientHeight*0.5;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogLeft').width = width;
			parent.document.getElementById('dialogLeft').height = height;
			parent.document.getElementById('dialogbase3').style.left = "50%";
			parent.document.getElementById('dialogbase3').style.top = "50%";
			parent.document.getElementById('dialogbase3').style.marginLeft = -width/2+"px";
			parent.document.getElementById('dialogbase3').style.marginTop = -height/2+"px";
		}
		
		//FORM
		$(function() {
			$("#UPDATE").click(function() {
			  //DataString for $AJAX operation $_POST operation on dynamic column
			  var dataString = "";
			  for(var i=0;i<column.length;i++){
				  if(i==0)
					dataString+=column[i]+"="+$('#'+column[i]).val();
				  else
					dataString+="&"+column[i]+"="+$('#'+column[i]).val();
			  }
			  //alert(dataString);
			  // validate and process form here
			  $.ajax({
				type: "POST",
				url: "../PHPSQL/sql_databaseUpdate.php?user="+username+"&lvl="+template,
				data: dataString,
				cache: false,
				success: function(result) {
					alert(''+result);
				}
			  });
			  //parent.RequestExecute("COMPONENT/PHPSQL/sql_databaseUpdate.php?user="+username+"&lvl="+template);
			  return false;
			});
		});
		
	</script>
	
</html>  
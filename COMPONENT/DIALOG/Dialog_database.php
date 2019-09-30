<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
	<script type="text/javascript" src="../../js/jquery-2.1.1.js" ></script>
	<!--Custom-->
	<link rel="stylesheet" href="../../css/style.css" />
<style>
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody, #title{
	color:#fff;
	background:transparent;
}
#DBNAME{
	font-size: 20px;
	margin-left:25px;
	margin-bottom:-25px;
	background:rgba(0,0,0,0);
	border:none;
	color:#fff;
}
#DBNAME:selected{
	background:rgba(0,0,0,0);
	border:none;
}
#DBNAME option{
	font-size: 15px;
	background:rgba(0,0,0,0);
	border:none;
	color:#000;
}
</style>
</head>
<script>
 $(window).load(function() {
    addHandle(document.getElementById('title'), window);
	resizedialog();
	if(parent.global_username!=""){
		$("#dragdropbtn").css("display","block");
	}
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">Display Database</div>
      <div id='Closeicons'>
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeFloatDialogbox();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody">
		<div style="position:relative;">
			<select id="DBNAME" name="DBNAME" onchange="LoadDisplayDatabase(value);">
				<option value="null" class="DATABASENAME">-Select Database-</option>	
				<?php
					try{
						//Open database connection
						$con = mysql_connect("localhost","root","");
						$dbname = "world";//as user database name
						mysql_select_db($dbname, $con);

						//Get TABLE name from database
						$results = mysql_query("SHOW TABLES;");
						while($tables = mysql_fetch_array($results))
						{
							//exception of table permission
							if($tables[0]=="country_population_2014"||explode("_",$tables[0])[0]==$_GET['username']){
				?>
							<option value="<?php echo $tables[0];?>" class="DATABASENAME"><?php echo $tables[0];?></option>	
				<?php
							}
						}
						//Close database connection
						mysql_close($con);
					}
					catch(Exception $ex){}
				?>
			</select>
			<div id="dragdropbtn" style="display:none;position:absolute;margin-left:300px;width:150px;height:20px;background-color:#0000FF;border:white solid 1px;" onclick="parent.openDragDropDialog();"><center><span style="font-size:15px;">IMPORT DATA</span></center></div>
		</div>
		<center>
			<br/><br/>
			<?php require_once('../JTABLE/jTableSimple.php'); ?>
		</center>
	</div>
</body> 

    <script type="text/javascript" src="../../js/PHPJS.js"></script>
	<script>
		function LoadDisplayDatabase(name){
			//alert(name);
			RequestExecute("../PHPSQL/sql_databasedisplay.php?tbname="+name);
		}
	
		//Close button hover event
		function changeImage(x){
			x.src="../../images/closer.png";
		}
		function rebackImage(x){
			x.src="../../images/closew.png";
		}
		//Resizing main dialog
		//Resizing all component to fit window
		function resizedialog(){
			var width = parent.document.documentElement.clientWidth * 0.7;
			var height= parent.document.documentElement.clientHeight* 0.8;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('floatdialog').width = width;
			parent.document.getElementById('floatdialog').height = height;
			parent.document.getElementById('dialogbase').style.left = "50%";
			parent.document.getElementById('dialogbase').style.top = "50%";
			parent.document.getElementById('dialogbase').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase').style.marginTop=(-(height/2)).toString() + "px";
		}
	</script>
	
</html>  
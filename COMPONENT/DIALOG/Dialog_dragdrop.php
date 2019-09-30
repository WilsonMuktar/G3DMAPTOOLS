<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
	<script type="text/javascript" src="../../js/jquery-2.1.1.js" ></script>
    <!--SCROLLBAR UI-->
	<script type="text/javascript" src="../../js/jquery.nicescroll.js"></script>
	<!--Custom-->
	<link rel="stylesheet" href="../../css/style.css" />
	
	<!-- DRAG DROP -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" media="all" href="../DRAGDROP/style.css" />
	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="../DRAGDROP/modernizr.custom.js"></script>
	<script src="../DRAGDROP/script.js"></script>
	<script src='../DRAGDROP/xlsbuilder.js'></script>
	<script type="text/javascript" src="http://oss.sheetjs.com/js-xlsx/xlsx.core.min.js"></script>
	<script type="text/javascript" src="../DRAGDROP/FileSaver.js"></script>
	
<style>
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody, #title{
	color:#fff;
	background:transparent;
}
</style>
</head>
<script>
//position fixed
$(document).ready(function() {
	var windowHeight = $('body').width()-100;
	$('#droparea').css('minHeight', windowHeight);
	
	addHandle(document.getElementById('title'), window);<!--document.getElementsByTagName('body').item(0)-->
	resizedialog();
});
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">Drag Drop XLS DATA</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeDragDropDialog();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody1" style="overflow-y:scroll;height:350px;">
	<center>
			<select id="TEMPLATENAME" name="TEMPLATENAME" onchange="Changetemplatefile(value);" style="width:90%;">
				<option value="null" class="SELECTTEMPLATE">-Select Template-</option>	
				<?php
					try{
						$dir="../../XLStemplate";
						$cdir = scandir($dir); 
					    foreach ($cdir as $key => $value) 
					    { 
						    if (!in_array($value,array(".",".."))) 
						    { 
								if (strpos($value,".xls")) 
								{
				?>
							<option value="<?php echo $value;?>" class="OPTIONSTEMPLATE"><?php echo $value;?></option>	
				<?php
								}
							}
						}
					}
					catch(Exception $ex){}
				?>
			</select>
			<br/>
			<a href="" id="dltemplate">Download XLS Template</a>
			
			<select id="USERDATANAME" name="USERDATANAME" onchange="Changeuserdatafile(value);" style="width:90%;">
				<option value="null" class="SELECTUSERDATA">-Select UserData-</option>	
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
							<option value="<?php echo $tables[0];?>" class="OPTIONSUSERDATA"><?php echo $tables[0];?></option>	
				<?php
							}
						}
						//Close database connection
						mysql_close($con);
					}
					catch(Exception $ex){}
				?>
			</select>
			<br/>
			<a href="#" id="dluserdata" onclick="downloaduserdataXLS();">Download XLS UserData</a>
			
			
		<div id="dragdroploading" style="display:none;position:absolute;left:50%;margin-left:-15px;bottom:40px;width:30px;height:30px;background-image:url('../../images/ajax-loader2.gif');background-repeat:no-repeat;background-size:contain;"></div>
		<!-- Content -->
		<section id="wrapper">
			<div id="droparea">
				<div class="dropareainner">
					<p class="dropfiletext">Drop files here</p>
					<p>or</p>
					<p><input id="uploadbtn" class="uploadbtn" type="button" value="Select Files"/></p>
					<p id="err">Wait there! You must ENABLE Javascript to have this works!</p>
				</div>
				<input id="upload" type="file" multiple />
			</div><br/>
			<div id="result">
				<p><b>RESULT:</b></p>
				<pre id="out"></pre>
				<br />
			</div>
		</section>
	</center>
	</div>
</body> 
	<script>
		
		function Changetemplatefile(name){
			var link = document.getElementById("dltemplate");
			link.setAttribute("href", "../../XLStemplate/"+name);
		}
		var exporttable;
		function Changeuserdatafile(name){
			//$('#dragdroploading').css('display','block');
			exporttable = name;
			if(exporttable){
				parent.RequestExecute("COMPONENT/PHPSQL/sql_dataexport.php?db=world&table="+exporttable);
			}else
				alert('Select UserData First!');
		}
		function downloaduserdataXLS(){
			//export excel
			export_table_to_excel(parent.xlsdata,exporttable.split('_')[1]);
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
			var width = 300;
			var height= 380;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogdragdrop').width = width;
			parent.document.getElementById('dialogdragdrop').height = height;
			parent.document.getElementById('dialogbase8').style.left = "50%";
			parent.document.getElementById('dialogbase8').style.top = "50%";
			parent.document.getElementById('dialogbase8').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase8').style.marginTop=(-(height/2)).toString() + "px";
		}
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				$("#mainbody1").niceScroll({
					cursorcolor:"#00F",
					cursoropacitymax:"0.5",
					cursorwidth :"2px",
					horizrailenabled: true,
					rtlmode: "auto",
					oneaxismousemode: "auto"});
			}
		);
	</script>
	
</html>  
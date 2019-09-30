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
#SelectedColor{
	background-color:#fff; 
	width:80px; 
	height:40px; 
	margin-left:50px;
	margin-top:10px;
	text-align:center;
}
</style>
</head>
<script>
 $(window).load(function() {
		addHandle(document.getElementById('title'), window);<!--document.getElementsByTagName('body').item(0)-->
		resizedialog();
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:0.5em; font-style:normal; margin-top:6px;">Color Picker</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeColorPicker();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody">
	<center>
		<table width="100%"; height="80%";>
		<tr>
			<td width="200px"; height="80%";>
				<table style="color:#fff; width:100%; height:100%;">
				<tr>
				<td colspan="4" style="width:100%; text-align:center; font-size:20px">Selected Color</td></tr>
				<tr><td colspan="4" style="width:100%;">
				<div id="SelectedColor" onclick="changecolor();">OK</div>
				</td></tr>
				<tr><td>&nbsp;</td></tr>
				<tr><td>&nbsp;</td>
					<td style="text-align:center; color:#F00; font-size:25px;">R : </td>
					<td style="text-align:center;font-size:25px;"><p id="rVal">255</p></td><td>&nbsp;</td>
				</tr>
				<tr><td>&nbsp;</td>
					<td style="text-align:center; color:#0F0;font-size:25px;">G : </td>
					<td style="text-align:center;font-size:25px;"><p id="gVal">255</td><td>&nbsp;</td>
				</tr>
				<tr><td>&nbsp;</td>
					<td style="text-align:center; color:#00F;font-size:25px;">B : </td>
					<td style="text-align:center;font-size:25px;"><p id="bVal">255</td><td>&nbsp;</td>
				</tr>
				</div>
				<tr><td>&nbsp;</td></tr>
				</table>
			</td>
			<td width="150px"; height="80%";> 
				<?php require_once("colorpicker.html"); ?>
			</td>
		</tr>
		</table>
	</center>
	</div>
</body> 
	<script>
		function changecolor(){
			parent.changeselectedcolor(hexColor);
			parent.closeColorPicker();
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
			var width = 450;
			var height= parent.document.documentElement.clientHeight* 0.5;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogcolorpicker').width = width;
			parent.document.getElementById('dialogcolorpicker').height = height;
			parent.document.getElementById('dialogbase4').style.left = "50%";
			parent.document.getElementById('dialogbase4').style.top = "50%";
			parent.document.getElementById('dialogbase4').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase4').style.marginTop=(-(height/2)).toString() + "px";
		}
	</script>
	
</html>  
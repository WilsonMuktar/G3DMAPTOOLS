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
	background:transparent;//rgba(52, 27, 43, 0.5);
	color:#000;
	text-shadow:-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#mainbody, #title{
	background:transparent;
}
#legendlist{
	margin-top: 20px;
	margin-left: 10px;
	font-size: 10px;
}
#name{
	color:#000;
	font-size:12px; 
	font-style:normal;
	margin-top:6px;
	text-shadow:-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#level0{
	background-color: #FFF;
	background-size: contain;
	width: 40px;
	height: 40px;
	margin-top: -15px;
	cursor:crosshair;
	border-top:1px solid;
}
#level1{
	background-color: #FFF;
	background-size: contain;
	width: 40px;
	height: 45px;
	margin-top: -20px;
	cursor:crosshair;
	border-top:1px solid;
}
#level2{
	background-color: #FFF;
	background-size: contain;
	width: 40px;
	height: 50px;
	margin-top: -20px;
	cursor:crosshair;
	border-top:1px solid;
}
#level3{
	background-color: #FFF;
	background-size: contain;
	width: 40px;
	height: 55px;
	margin-top: -20px;
	cursor:crosshair;
	border-top:1px solid;
}
#level4{
	background-color: #FFF;
	background-size: contain;
	width: 40px;
	height: 80px;
	margin-top: -20px;
	cursor:crosshair;
	border-top:1px solid;
}
</style>
</head>
<script>
 $(window).load(function() {
    addHandle(document.getElementById('title'), window);
	resizedialog();
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name'>Legend</div>
	</div>
		<table id="legendlist">
			<tbody id="legend">
				<tr><td></td><td><div id="valuemax"\></td></tr>
				<tr>
					<td><div id="level0"></div></td>
					<td><br/><div id="value0"\></td>
				</tr>
				<tr>
					<td><div id="level1"></div></td>
					<td><br/><div id="value1"\></td>
				</tr>
				<tr>
					<td><div id="level2"></div></td>
					<td><br/><div id="value2"\></td>
				</tr>
				<tr>
					<td><div id="level3"></div></td>
					<td><br/><div id="value3"\></td>
				</tr>
				<tr>
					<td><div id="level4"></div></td>
					<td><br/><br/><br/><div id="valuemin"\></td>
				</tr>
				<tr><td></td></tr>
			</tbody>
		</table>
</body> 
	<script>

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
			var width = 200;
			var height= 300;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogLegend').width = width;
			parent.document.getElementById('dialogLegend').height = height;
			parent.document.getElementById('dialogbase2').style.left = "10%";
			parent.document.getElementById('dialogbase2').style.top = "65%";
			parent.document.getElementById('dialogbase2').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase2').style.marginTop=(-(height/2)).toString() + "px";
		}
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				//Set Database name
				document.getElementById('name').innerHTML = "<b>Legend</b>"+'<br/>'+parent.G3DMAP.selecteddatabasename.replace(',','<br/>');
				//Set Legend Color;
				document.getElementById('level0').setAttribute("style","background-color:"+parent.colorhigh);
				document.getElementById('level1').setAttribute("style","background-color:"+parent.color1);
				document.getElementById('level2').setAttribute("style","background-color:"+parent.color2);
				document.getElementById('level3').setAttribute("style","background-color:"+parent.color3);
				document.getElementById('level4').setAttribute("style","background-color:"+parent.colorlow);
				document.getElementById('valuemax').innerHTML = parseInt(parent.colormodemaxvalue);
				document.getElementById('value0').innerHTML = 	parseInt(parent.colormode0value);
				document.getElementById('value1').innerHTML = 	parseInt(parent.colormode1value);
				document.getElementById('value2').innerHTML = 	parseInt(parent.colormode2value);
				document.getElementById('value3').innerHTML = 	parseInt(parent.colormode3value);
				document.getElementById('valuemin').innerHTML = parseInt(parent.colormodeminvalue);
			}
		);
	</script>
	
</html>  
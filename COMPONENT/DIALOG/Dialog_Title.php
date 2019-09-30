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
}
#mainbody, #title{
	background:transparent;
}
#titlename{
	color:#000;
	border:none;
	background-color:transparent;
}
</style>
</head>
<script>
 $(window).load(function() {
    addHandle(document.getElementsByTagName('body').item(0), window);
	resizedialog();
  });
</script>
<body>
	<center>
      <b><input type="text" id='titlename' value="WORLDMAP" disabled style="
	font:bold 30px/20px arial,sans-serif; font-size:30px;"/></b>
	</center>
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
			var width = 500;
			var height= 100;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogtitle').width = width;
			parent.document.getElementById('dialogtitle').height = height;
			parent.document.getElementById('dialogbase5').style.left = "70%";
			parent.document.getElementById('dialogbase5').style.top = "80%";
			parent.document.getElementById('dialogbase5').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase5').style.marginTop=(-(height/2)).toString() + "px";
		}
	</script>
</html>  
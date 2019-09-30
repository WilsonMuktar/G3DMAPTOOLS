<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
	<script type="text/javascript" src="../../js/jquery-2.1.1.js" ></script>
    <!--SCROLLBAR UI-->
	<script type="text/javascript" src="../../js/jquery.nicescroll.js"></script>
	<link rel="stylesheet" href="../../css/style.css">
<style>
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody, #title{
	color:#fff;
	background:transparent;
}
#BIGTITLE{
	color: #fff;
	font-size:25px;
	width:100%;
	text-align:left;
	padding-left:25px;
}
#templatelist{
	position:relative;
	margin-left:20px;
	margin-top: 20px;
	max-height:190px;
	font-size:13px;
}
.templateicon{
	color:#fff;
	float:left;
	width:100px;
	height:190px;
	margin-left:40px;
}
.templateicon img{	
	width:100px;
	height:100px;
	margin-top:20px;
	background : #ffc000;
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
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">Save</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeFloatDialogbox();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody" style="color:#fff;">
	<center>
		<table style="width:100%;">
		<thead>
			<tr><td colspan="4" id="BIGTITLE">SAVE AS :</td></tr>
		</thead>
		<tbody>
			<tr>
				<td><center>
					<div id="templatelist">
						<div class="templateicon" onclick="parent.closeFloatDialogbox();
								if(parent.G3DMAP.is2DMODE)
									parent.openFloatDialogbox('COMPONENT/Dialog/Dialog_Save2D3DMAP.php');
								else {
									parent.closeLegend();parent.GeneratingMap=true;parent.AutoCapture();
								}"><img></img><br/><br/>2D/3D MAP GENERATOR</div>
						<div class="templateicon" onclick="parent.closeFloatDialogbox();parent.openFloatDialogbox('COMPONENT/Dialog/Dialog_Save2D3DEMBED.php');"><img></img><br/><br/>2D/3D MAP EMBED</div>
					</div></center>
				</td>
			</tr>
		</tbody>
		</table>
	</center>
	</div>
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
			var height= 350;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('floatdialog').width = width;
			parent.document.getElementById('floatdialog').height = height;
			parent.document.getElementById('dialogbase').style.left = "50%";
			parent.document.getElementById('dialogbase').style.top = "50%";
			parent.document.getElementById('dialogbase').style.marginLeft =(-(width/2)).toString() + "px";
			parent.document.getElementById('dialogbase').style.marginTop=(-(height/2)).toString() + "px";
		}
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				$("#templatelist").niceScroll({
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
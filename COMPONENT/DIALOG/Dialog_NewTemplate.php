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
	margin-top: 30px;
	max-height:190px;
}
.templateicon{
	color:#fff;
	float:left;
	width:100px;
	height:190px;
	margin-left:40px;
	margin-top:15px; 
	background-size:contain;
	background-repeat:no-repeat;
}
.templateicon img{	
	//width:100px;
	height:100px;
	//margin-top:20px;
	//background : #ffc000;
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
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">New Template</div>
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
			<tr><td colspan="4" id="BIGTITLE">TEMPLATE</td></tr>
		</thead>
		<tbody>
			<tr>
				<td><center>
					<div id="templatelist">
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/World.png');" onclick="Load('continent');"><img></img><br/><br/>World Map<br/>[Continent]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/World.png');" onclick="Load('countries');"><img></img><br/><br/>World Map<br/>[Country]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Asia.png');" onclick="LoadMore('Asia');"><img></img><br/><br/>Continent<br/>[ASIA]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Africa.png');" onclick="LoadMore('Africa');"><img></img><br/><br/>Continent<br/>[AFRICA]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/North America.png');" onclick="LoadMore('North America');"><img></img><br/><br/>Continent<br/>[NORTH AMERICA]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/South America.png');" onclick="LoadMore('South America');"><img></img><br/><br/>Continent<br/>[SOUTH AMERICA]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Europe.png');" onclick="LoadMore('Europe');"><img></img><br/><br/>Continent<br/>[EUROPE]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Oceania.png');" onclick="LoadMore('Oceania');"><img></img><br/><br/>Continent<br/>[OCEANIA]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Australia.png');" onclick="LoadMore('australia');"><img></img><br/><br/>States<br/>[Australia]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Australia.png');" onclick="LoadMore('australiacity');"><img></img><br/><br/>City<br/>[Australia]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/China.png');" onclick="LoadMore('china');"><img></img><br/><br/>States<br/>[China]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/China.png');" onclick="LoadMore('chinacity');"><img></img><br/><br/>City<br/>[China]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Indonesia.png');" onclick="LoadMore('indonesia');"><img></img><br/><br/>States<br/>[Indonesia]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/Indonesia.png');" onclick="LoadMore('indonesiacity');"><img></img><br/><br/>City<br/>[Indonesia]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/United States.png');" onclick="LoadMore('unitedstates');"><img></img><br/><br/>States<br/>[UnitedStates]</div>
						<div class="templateicon" style="background-image:url('../../IMAGES/FLAG/United States.png');" onclick="LoadMore('unitedstatescity');"><img></img><br/><br/>City<br/>[UnitedStates]</div>
					</div></center>
				</td>
			</tr>
		</tbody>
		</table>
	</center>
	</div>
</body> 
	<script>
		//CESIUM LoadJSON
		function Load(templatemode){
			parent.G3DMAP.removeall();
			parent.closeLegend();
			parent.closeRankDialog();
			parent.G3DMAP.TEMPLATEMODE = templatemode; //which template being open.
			parent.DialogMAPpositionextra(parent.G3DMAP.viewer,templatemode,2,7000000); //go to location
			parent.document.getElementById("cesiumContainer").style.display="block";
			parent.document.getElementById("loadingIndicator").style.display="block";
			parent.document.getElementById("LOGO").style.display="block";
			parent.G3DMAP.LoadGeoJSON(templatemode,true,false,"#FF0000","#FFFFFF",parent.G3DMAP.selectingtable); //load polygon
			parent.closeFloatDialogbox();
			//Assign new database template for new user
			DatabaseBASE(templatemode);
		}
		
		function LoadMore(templatemode){
			parent.G3DMAP.removeall();
			parent.closeLegend();
			parent.closeRankDialog();
			parent.G3DMAP.TEMPLATEMODE = templatemode; //which template being open.
			parent.DialogMAPpositionextra(parent.G3DMAP.viewer,templatemode,2,7000000); //go to location
			parent.document.getElementById("cesiumContainer").style.display="block";
			parent.document.getElementById("loadingIndicator").style.display="block";
			parent.document.getElementById("LOGO").style.display="block";
			parent.G3DMAP.LoadGeoJSON('continent',true,false,"#FF0000","#FFFFFF",parent.G3DMAP.selectingtable); //load polygon
			parent.G3DMAP.LoadGeoJSON(templatemode,false,false,"#FF0000","#FFFFFF",parent.G3DMAP.selectingtable); //load polygon
			parent.closeFloatDialogbox();
			//Assign new database template for new user
			DatabaseBASE(templatemode);
		}
	
		function DatabaseBASE(lvl){
			if(parent.global_username!="")//just for logged in user
			{
				parent.RequestExecute('./COMPONENT/PHPSQL/sql_databaseAdd.php?lvl='+lvl+"&username="+parent.global_username);
				//alert(parent.global_username+" "+lvl);
			}
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
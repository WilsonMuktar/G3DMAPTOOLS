<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
	<script src="./COMPONENT/CESIUMBUILD/Build/Cesium/Cesium.js"></script>
	<script type="text/javascript" src="./js/dragiframe.js"></script>
	<script src="./js/jquery-2.1.1.js"></script>
    <!--SCROLLBAR UI-->
	<script type="text/javascript" src="./js/jquery.nicescroll.js"></script>
	<!--MENY-->
	<link rel="stylesheet" href="./css/meny/demo.css">
	<script src="./js/meny/meny.js"></script>
	<style>
		@import url(./css/widgets.css);
		html, body, #cesiumContainer{
			width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;
		}
		body{
			background:#898989;
		}
		#cesiumContainer{
			display:none;
		}
		.cesium-infoBox cesium-infoBox-visible{
			z-index:99;
			position:absolute;width:0px;height:0px;
		}
		#toolbox{
			position : absolute;
			z-index : 1;
			top : 10px;
			left: 10px;
		}
    </style>
</head>
<body>
	<div class="meny" id="meny">
		<ul style="width:30000px;">
			<?php $dh = opendir('./images/flag/'); while (($file = readdir($dh)) !== false) { if($file != "." && $file != "..") {?>
				<li><img class="flags" id="<?php echo str_replace(".png","",$file)?>" title="<?php echo str_replace(".png","",$file)?>" src="images/flag/<?php echo $file ?>" draggable="true" style="height:35px;width:50px;"/></li>
			<?php }}closedir($dh);?>
		</ul>
	</div>
	<div class="meny-arrow"></div>
	<div class="contents" id="contents">
		<div id="toolbox" style="z-index:1; display:none;">
			<?php require_once('component/toolbox.php');?>
		</div>
		<div id="toolbar" style="z-index:1;"></div>
		<div id="cesiumContainer"></div>
		<div class="cesium-viewer-infoBoxContainer">
			<?php require_once('CustomDialog.html'); ?>
		</div>
	</div>
	<div id="loadingIndicator" class="loadingIndicator" style="display:none;">
		<div align="center" style="margin-top:20px;"> LOADING</div>
	</div>
	  
	<!--INCLUDE ALL JS-->
   <!--script type="text/javascript" src="./js/html2canvas/html2canvas.js"></script-->
	<script type="text/javascript" src="./js/Earth.js"></script>
	<script type="text/javascript" src="./js/initialize.js"></script>
	<script type="text/javascript" src="./js/FlagandName.js"></script>
	<script type="text/javascript" src="./js/PHPJS.js"></script>
	<script type="text/javascript" src="./js/DialogMapPosition.js"></script>
	<script type="text/javascript" src="./js/Coloring.js"></script>
	<script type="text/javascript" src="./js/Pie.js"></script>
	<script type="text/javascript" src="./js/Flag.js"></script>
	<script type="text/javascript" src="./js/photojoiner/photojoiner.js"></script>
	<script type="text/javascript" src="./js/gifcreator/gifshot.js"></script>
	<script type="text/javascript" src="./js/ScreenShot.js"></script>
	
	<script>
		var G3DMAP = new G3DMAP();
		G3DMAP.InitializeEarth();
		G3DMAP.SetLayer();
		G3DMAP.SetHandler();
		G3DMAP.SetPosition(0,0,40000000);
		//G3DMAP.GetData(G3DMAP.selecteddatabasename.split(",")[0],G3DMAP.selecteddatabasename.split(",")[1]);
		//G3DMAP.LoadGeoJSON('countries',true,true,"#FF0000","#FFFFFF",G3DMAP.selectingtable);
			
	</script>
	
</body>
</html>
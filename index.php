<!DOCTYPE html>
<html lang="en">
<head>
  <meta property="qc:admins" content="11055512665436251165456367510" />
  <!-- Use correct character set. -->
  <meta charset="utf-8">
  <!-- Tell IE to use the latest, best version (or Chrome Frame if pre-IE11). -->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <!-- Make the application on mobile take up the full browser screen and disable user scaling. -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <title>G3D MAP TOOLS</title>
  <link rel="stylesheet" href="./css/index.css">
  </head>
<body>
	<img id="LOGO" src="images/logo.png" onclick="exitpreviewmode();"></img>
	<div id="CENTERLOGO" onclick="openFloatDialogbox('./COMPONENT/DIALOG/Dialog_NewTemplate.php');"></div>
	<div id="CENTERLOADING">
		<div style="position:absolute;left:50%;margin-left:-15px;bottom:60px;width:30px;height:30px;background-image:url('images/ajax-loader2.gif');background-repeat:no-repeat;background-size:contain;"></div>
		<div style="position:absolute;z-index:1;width:100%;top:40px;font-size:15px;"><center><b>Please Keep the Browser on Top</b></center></div>
		<div style="position:absolute;z-index:1;width:100%;bottom:40px;font-size:15px;"><center><b><div id="LoadPercentage">0 %</div></b></center></div>				
	</div>
	<div id="BottomPanel" style="display:none;">
		<center><span id="cesium-latlon-text">WELCOME</span></center>
		<div id="cesium-MODE-text">2D MODE</div>
		<!--div id="rankmenu" style="display:none;">
			<div id="index">0</div>
			<img id="playpause" src="images/btnpause.png" onclick="playandpause();"/>
			<img id="prev" src="images/btnprev.png" onclick="prevTask();"/>
			<img id="next" src="images/btnnext.png" onclick="nextTask();"/>
			<div id="rankdescribe">Sorting...</div>
		</div-->
		<div id="cesium-data-text">Population</div>
	</div>
	<input type="text" id="LOG" style="display:none;position:absolute;top:50%;left:0;z-index:1;" value="LOG"></input>
	<?php 
		if(!isset($_GET['auto'])){
			require_once('./COMPONENT/topmenu.php'); 
			require_once('./COMPONENT/userpanel.php');
			echo "<script>
				document.getElementById('BottomPanel').style.display='block';
				</script>";
		}
		
		require_once('earth.php');
		//Decode the encrypted URL
		if(isset($_GET['CODE'])){
			$decodedURL = base64_decode($_GET['CODE']);
			echo "<script>
			window.open('http://bdietc.buaa.edu.cn/map/?auto'+'".$decodedURL."','_self');
			</script>";
		}
		if(isset($_GET['auto'])){
			echo "<script>
							document.getElementById('cesiumContainer').style.display='block';
							document.getElementById('loadingIndicator').style.display='block';
							document.getElementById('LOGO').style.display='block';
							document.getElementById('CENTERLOGO').style.display='none';
							document.getElementById('toolbox').style.display='block';
							document.getElementById('BottomPanel').style.bottom='-100px';
							document.getElementById('LOGO').setAttribute('style','display:block;margin-bottom:5px;');
				setTimeout(function(){
					parent.openLegend();
				},8000);
				</script>";
			//CUSTOM DATA
			if(isset($_GET['CUSTOMDATA'])){
				if(isset($_GET['TABLE'])&&isset($_GET['COLUMN'])){
					echo "<script>
					var customdb = \"".str_replace("\"","",$_GET['TABLE']).",".str_replace("\"","",$_GET['COLUMN'])."\";
					//alert(customdb);
					G3DMAP.selecteddatabasename=customdb;
					G3DMAP.selectingtable=".$_GET['COLUMN'].";
					G3DMAP.GetData(".$_GET['TABLE'].",".$_GET['COLUMN'].");</script>";
				}
			}
			else{
				echo '<script>G3DMAP.GetData(G3DMAP.selecteddatabasename.split(",")[0],G3DMAP.selecteddatabasename.split(",")[1]);</script>';
			}
			
			//CUSTOM COLOR
			if(isset($_GET['COLUMN']) && isset($_GET['HC']) && isset($_GET['LC']) ){
				echo "<script>setTimeout(function(){
					G3DMAP.LoadGeoJSON('".$_GET['T']."',true,true,'#".$_GET['HC']."','#".$_GET['LC']."',".$_GET['COLUMN'].");
					},4000);</script>";
			}
			else if(isset($_GET['HC']) && isset($_GET['LC'])){
				echo "<script>setTimeout(function(){G3DMAP.LoadGeoJSON('".$_GET['T']."',true,true,'#".$_GET['HC']."','#".$_GET['LC']."',G3DMAP.selectingtable);},4000);</script>";
			}
			else if(isset($_GET['COLUMN'])){
				echo "<script>setTimeout(function(){G3DMAP.LoadGeoJSON('".$_GET['T']."',true,true,'#5B00AE','#DCB5FF',".$_GET['COLUMN'].");},4000);</script>";
			}
			else{
				echo "<script>setTimeout(function(){G3DMAP.LoadGeoJSON('".$_GET['T']."',true,true,'#5B00AE','#DCB5FF',G3DMAP.selectingtable);},4000);</script>";
			}
			
			if(isset($_GET['2D'])) echo "<script>Switchto2Dmode();</script>"; else echo"<script>Switchto3Dmode();</script>";
			if(isset($_GET['FLAG'])) echo "<script>setTimeout(function(){DisplayFlagandName(true);},8000);</script>";
			if(isset($_GET['RANK'])) echo "<script>setTimeout(function(){
					//alert(parent.geojsonentities.length);
					var dbname = G3DMAP.selecteddatabasename.split(',')[0];
					var tbname = G3DMAP.selecteddatabasename.split(',')[1];
					openRankDialog();
					parent.RequestExecute1('COMPONENT/PHPSQL/sql_billboard.php?dbname='+dbname+'&tablename='+tbname+'&PointedMode=true');
					parent.openLegend();
			},10000);</script>";
		}
		else{
			echo '<script>G3DMAP.GetData(G3DMAP.selecteddatabasename.split(",")[0],G3DMAP.selecteddatabasename.split(",")[1]);</script>';
		}
	?>
	
</body>

  <?php 
  if(isset($_SESSION['error'])){
	  if($_SESSION['error']!="")
		echo "<script>alert('".$_SESSION['error']."');</script>";
  }?>
<script>
	var latlontext = document.getElementById('cesium-latlon-text');
	var global_username ="<?php if(isset($_SESSION['user_name'])){ $global_username = $_SESSION['user_name'];echo $global_username;}?>";
	global_username = global_username.toLowerCase();
	var xlsdata = [];
	//Close button hover event
	function changeImage(x){
		x.src="images/closer.png"
	}
	function rebackImage(x){
		x.src="images/close.png"
	}
</script>
</html>


		<!--div id="notif" name="notif">
			<img src="images/close.png" style="float:right; margin:2px;" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="closeNotif();"></img>
			<a id="Notifmessage" name="Notifmessage" style="color:rgba(0,0,0,0.5); float:right; margin:7px;">Thankyou for Using our Platform</a>
		</div-->
		
		<!--script type="text/javascript" src="dist/html2canvas.js"></script>
		<script type="text/javascript">
			html2canvas(document.body).then(function(canvas) {
				document.body.appendChild(canvas);
			});
		</script-->
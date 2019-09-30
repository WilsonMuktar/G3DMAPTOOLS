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
#mainpanel{
	position:relative;
}
#DBNAME{
	text-align:center;
	font-size: 16px;
	margin-bottom:-25px;
	margin-left:5px;
	margin-right:5px;
	width:90%;
	background:rgba(0,0,0,0);
	border:none;
	color:#fff;
}
#DBNAME option{
	text-align:center;
	font-size: 10px;
	background:rgba(0,0,0,0);
	border:none;
	color:#000;
}
.DATABASENAME{
	text-align:center; 
	border-left:1px solid #fff;
	font-size: 3em;
	text-overflow: ellipsis; /* will make [...] at the end */
    white-space: nowrap; /* paragraph to one line */
    overflow:hidden; /* older browsers */
	max-width:100px;
}
.DATABASENAME:selected{
	font-size: 3em;
}
#HighColor{
	border:1px solid rgb(255,255,255); 
	width:30px; 
	height:30px; 
}
#LowColor{
	border:1px solid rgb(255,255,255); 
	width:30px; 
	height:30px; 
}
#coloredtrue{
	width:50px;
	border-bottom:1px solid;
}
#pointedtrue{
	width:50px;
	border-bottom:1px solid;
}
#flagtrue{
	width:50px;
	border-bottom:1px solid;
}
</style>
</head>
<script>
 //SET COOKIE to pass TEMPLATEMODE　value to PHP
 function setCookie(c_name,value,expiredays)
 {
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
 }
 setCookie('TEMPLATEMODE',parent.G3DMAP.TEMPLATEMODE,365);
 if(parent.G3DMAP.TEMPLATEMODE!='<?php if(isset($_COOKIE["TEMPLATEMODE"])) echo $_COOKIE["TEMPLATEMODE"]; else echo "";?>'){
	 window.location.reload();
 }
 ///////////////////////////////////////////////////////////
 $(window).load(function() {
    addHandle(document.getElementById('title'), window);
	resizedialog();
	//default value
	parent.G3DMAP.isRANKMODE = true;
	parent.G3DMAP.isFLAGMODE = true;
  });
</script>
<body>
    <div id="title" class="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:10px; font-style:normal; margin-top:6px;">Color Mode Settings</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeFloatDialogbox();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody">
	<center>
		<div id="mainpanel">
			<p style="font-size:3em;text-align:center;">Select Database</p>
			<select id="DBNAME" name="DBNAME" style="border-top:1px solid;">
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
							$TEMPLATEMODE=$_COOKIE['TEMPLATEMODE'];
							//exception of table permission
							if(
								($tables[0]=="country_population_2014"&&($TEMPLATEMODE=="countries"||$TEMPLATEMODE=="continent"||$TEMPLATEMODE=="Asia"||$TEMPLATEMODE=="Africa"||$TEMPLATEMODE=="Europe"||$TEMPLATEMODE=="North America"||$TEMPLATEMODE=="South America"||$TEMPLATEMODE=="Oceania"))
								||($tables[0]=="countries"&&($TEMPLATEMODE=="countries"||$TEMPLATEMODE=="continent"||$TEMPLATEMODE=="Asia"||$TEMPLATEMODE=="Africa"||$TEMPLATEMODE=="Europe"||$TEMPLATEMODE=="North America"||$TEMPLATEMODE=="South America"||$TEMPLATEMODE=="Oceania"))
								||(explode("_",$tables[0])[0]==$_GET['username']&&explode("_",$tables[0])[1]==$TEMPLATEMODE)
								||(explode("_",$tables[0])[0]==$_GET['username']&&explode("_",$tables[0])[1]=="countries"&&($TEMPLATEMODE=="Asia"||$TEMPLATEMODE=="Africa"||$TEMPLATEMODE=="Europe"||$TEMPLATEMODE=="North America"||$TEMPLATEMODE=="South America"||$TEMPLATEMODE=="Oceania"))
							)
							{
								//get TABLE colums name
								$result = mysql_query("SHOW COLUMNS FROM ".$tables[0].";");
								while($row = mysql_fetch_array($result))
								//for($i=0;$i<$row.length;$i++)
								{
									if($row[0]!='id'&&$row[0]!='cname'&&$row[0]!='continent'){
				?>
									<option class="DATABASENAME"><?php echo $tables[0].','.$row[0];?></option>
				<?php
									}
								}
							}
						}
						//Close database connection
						mysql_close($con);
					}
					catch(Exception $ex){}
				?>
			</select>
			<table style="margin-top:30px; color:#fff; font-size:3em;">
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>High-Value Color</td>
				<td width="50px"></td>
				<td>
					<div id="HighColor" onclick="parent.openColorPicker();
					ishighlevel();"></div>
				</td>
			</tr>
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>Low-Value Color</td>
				<td width="50px"></td>
				<td>
					<div id="LowColor" onclick="parent.openColorPicker();
					islowlevel();"></div>
				</td>
			</tr>
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>Colored</td>
				<td onclick="setColored(true);" id="coloredtrue"; >TRUE</td>
				<td onclick="setColored(false);" id="coloredfalse">FALSE</td>
			</tr>
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>Rank Point</td>
				<td onclick="setPointed(true);" id="pointedtrue"; >TRUE</td>
				<td onclick="setPointed(false);" id="pointedfalse">FALSE</td>
			</tr>
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>Flag</td>
				<td onclick="setFlaged(true);" id="flagtrue";>TRUE</td>
				<td onclick="setFlaged(false);" id="flagfalse">FALSE</td>
			</tr>
			</table>
		</div>
	</center>
	<p onclick="APPLY();" style="position:absolute;font-size:30px;right:20px;bottom:-20px;">APPLY</p>
	</div>
</body> 
	<script type="text/javascript" src="../../js/PHPJS.js"></script>
	<script>
	
		var databasename;
		var databasetable;
		function APPLY(){
		  //empty database exception
		  if(document.getElementById('DBNAME').selectedIndex!=-1){
			try{
				parent.DialogMAPposition(parent.G3DMAP.viewer,parent.G3DMAP.TEMPLATEMODE,2);
				//parent.G3DMAP.removeall();
				setDatabaseConfig();
				//Read Database value
				//additional exception for continent
				var templ = parent.G3DMAP.TEMPLATEMODE;
				if(templ=="Asia"||templ=="Europe"||templ=="Africa"||templ=="North America"||templ=="South America"||templ=="Oceania"){
					RequestExecute("../PHPSQL/PHPVALUE.php?db=world&table="+databasename+"&column="+databasetable+"&child=true&continent="+templ);
				}
				else{
					RequestExecute("../PHPSQL/PHPVALUE.php?db=world&table="+databasename+"&column="+databasetable+"&child=true");
				}
				SetMapColorMode();
			}catch(e){}
			finally{
				setTimeout(function(){
					//Display Legend
					parent.openLegend();
					parent.document.getElementById('cesium-data-text').innerHTML = parent.G3DMAP.selectingtable;	
					setTimeout(function(){
						//Display Flag
						parent.DisplayFlagandName(parent.G3DMAP.isFLAGMODE);
						//Display Rank
						SetMapPointMode(); 
					},3500);
				},3500);
			}
		  }
		}
		
		//Colored
		var Colored = true;
		function setColored(tf){
			if(tf==true){
				document.getElementById('coloredtrue').setAttribute('style','border-bottom:1px solid');
				document.getElementById('coloredfalse').setAttribute('style','border:none');
				Colored = true;
			}
			else if(tf==false){
				document.getElementById('coloredtrue').setAttribute('style','border:none');
				document.getElementById('coloredfalse').setAttribute('style','border-bottom:1px solid');
				Colored = false;
			}
		}
		
		//Ranking Pointing
		function setPointed(tf){
			parent.G3DMAP.isRANKMODE = tf;
			if(tf==true){
				document.getElementById('pointedtrue').setAttribute('style','border-bottom:1px solid');
				document.getElementById('pointedfalse').setAttribute('style','border:none');
			}
			else if(tf==false){
				document.getElementById('pointedtrue').setAttribute('style','border:none');
				document.getElementById('pointedfalse').setAttribute('style','border-bottom:1px solid');
			}
		}
		
		//Display flag
		function setFlaged(tf){
			parent.G3DMAP.isFLAGMODE = tf;
			if(tf==true){
				document.getElementById('flagtrue').setAttribute('style','border-bottom:1px solid');
				document.getElementById('flagfalse').setAttribute('style','border:none');
			}
			else if(tf==false){
				document.getElementById('flagtrue').setAttribute('style','border:none');
				document.getElementById('flagfalse').setAttribute('style','border-bottom:1px solid');
			}
		}
	
		//Color Value
		function ishighlevel(){
			parent.CurrentLevel = "High";
		}
		function islowlevel(){
			parent.CurrentLevel = "Low";
		}
		function HIGH(hexColor){
			document.getElementById('HighColor').setAttribute("style","background-color:"+hexColor);
		}
		function LOW(hexColor){
			document.getElementById('LowColor').setAttribute("style","background-color:"+hexColor);
		}
		
		function setDatabaseConfig(){
			var dbname = document.getElementById('DBNAME').options[document.getElementById('DBNAME').selectedIndex].value;
			databasename = dbname.split(",")[0];
			databasetable= dbname.split(",")[1];
			//change templatemode
			/*if(databasename=="country_population_2014")
				parent.G3DMAP.TEMPLATEMODE = "countries";
			else 
				parent.G3DMAP.TEMPLATEMODE = dbname.split(",")[0].split("_")[1];*/
			//change database and table
			parent.G3DMAP.selecteddatabasename = dbname;
			parent.G3DMAP.selectingtable = databasetable;
		}
		
		function SetMapColorMode(){
			if(Colored==true){
				//delay for read database
				setTimeout(function () {
					//Coloring value processing
					var HighHEXCOLOR = document.getElementById('HighColor').style.backgroundColor;
						parent.colorhigh = HighHEXCOLOR;//set parent highcolor value at earth.js
					//default white HEX color
					if(HighHEXCOLOR);else{
						document.getElementById('HighColor').setAttribute("style","background-color:#fff");
						HighHEXCOLOR = document.getElementById('HighColor').style.backgroundColor;
					}
					
					var LowHEXCOLOR = document.getElementById('LowColor').style.backgroundColor;
						parent.colorlow = LowHEXCOLOR; //set parent highcolor value at earth.js
					//default white HEX color
					if(LowHEXCOLOR);else{
						document.getElementById('LowColor').setAttribute("style","background-color:#fff");
						LowHEXCOLOR = document.getElementById('LowColor').style.backgroundColor;
					}
					
					//RGB to HEX
					var rgb = (HighHEXCOLOR.split('(')[1]).split(')')[0];
					HighHEXCOLOR = parent.RgbToHex(rgb.split(',')[0],rgb.split(',')[1],rgb.split(',')[2]);
					//RGB to HEX
					rgb = LowHEXCOLOR.split('\(')[1].split('\)')[0];
					LowHEXCOLOR = parent.RgbToHex(rgb.split(',')[0],rgb.split(',')[1],rgb.split(',')[2]);
					//alert(HighHEXCOLOR+" "+LowHEXCOLOR);
					
					/*redraw polygon with color
					if(parent.G3DMAP.TEMPLATEMODE!="countries"&&parent.G3DMAP.TEMPLATEMODE!="continent"){
						LoadMore(parent.G3DMAP.TEMPLATEMODE,HighHEXCOLOR,LowHEXCOLOR)
					}else{
						Load(parent.G3DMAP.TEMPLATEMODE,HighHEXCOLOR,LowHEXCOLOR);
					}*/
					
					//not redraw just fill color
					
					
					
					
						parent.G3DMAP.HIGHCOLOR = HighHEXCOLOR;
						parent.G3DMAP.LOWCOLOR = LowHEXCOLOR;
					parent.G3DMAP.FillColor(HighHEXCOLOR,LowHEXCOLOR);
					
				},500);
			}
		}
		
		function SetMapPointMode(){
			if(parent.G3DMAP.isRANKMODE==true){
				//Read Database and Pointing billboard
				//additional exception to continent
				var templ = parent.G3DMAP.TEMPLATEMODE;
				if(templ=="Asia"||templ=="Europe"||templ=="Africa"||templ=="North America"||templ=="South America"||templ=="Oceania"){
					parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+databasename+"&tablename="+databasetable+"&PointedMode=true&end="+parent.countrywithzerorate.length+"&continent="+templ);
					parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+databasename+"&tablename="+databasetable+"&PointedMode=true&end="+parent.countrywithzerorate.length+"&continent="+templ);
				}
				else{
					parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+databasename+"&tablename="+databasetable+"&PointedMode=true&end="+parent.countrywithzerorate.length);
				}
				parent.openRankDialog();
			}
		}
		
		//CESIUM LoadJSON
		function Load(templatemode,HighHEXCOLOR,LowHEXCOLOR){
			parent.G3DMAP.removeall();
			parent.closeLegend();
			parent.G3DMAP.TEMPLATEMODE = templatemode; //which template being open.
			parent.DialogMAPpositionextra(parent.G3DMAP.viewer,templatemode,2,7000000); //go to location
			parent.document.getElementById("cesiumContainer").style.display="block";
			parent.document.getElementById("loadingIndicator").style.display="block";
			parent.document.getElementById("LOGO").style.display="block";
			parent.G3DMAP.LoadGeoJSON(templatemode,true,true,HighHEXCOLOR,LowHEXCOLOR,parent.G3DMAP.selectingtable); //load polygon
			parent.closeFloatDialogbox();
		}
		
		function LoadMore(templatemode,HighHEXCOLOR,LowHEXCOLOR){
			parent.G3DMAP.removeall();
			parent.closeLegend();
			parent.G3DMAP.TEMPLATEMODE = templatemode; //which template being open.
			parent.DialogMAPpositionextra(parent.G3DMAP.viewer,templatemode,2,7000000); //go to location
			parent.document.getElementById("cesiumContainer").style.display="block";
			parent.document.getElementById("loadingIndicator").style.display="block";
			parent.document.getElementById("LOGO").style.display="block";
			parent.G3DMAP.LoadGeoJSON('continent',true,false,HighHEXCOLOR,LowHEXCOLOR,parent.G3DMAP.selectingtable); //load polygon
			parent.G3DMAP.LoadGeoJSON(templatemode,false,true,HighHEXCOLOR,LowHEXCOLOR,parent.G3DMAP.selectingtable); //load polygon
			parent.closeFloatDialogbox();
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
			var width = 350;//parent.document.documentElement.clientWidth/4.3;
			var height= 570;//parent.document.documentElement.clientHeight/1.3;
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
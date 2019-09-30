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
	
<style>
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody{
	overflow-y:scroll;
	height:80%;
	margin-left:-2px;
}
#mainbody, #title , #imagerylayername{
	color:#fff;
	background:transparent;
}
#mainbody table tr td#imagerylayername{
	width:70%;
	padding:5px;
	text-align:left; 
	border-left:1px solid #fff;
	text-overflow: ellipsis; /* will make [...] at the end */
    white-space: nowrap; /* paragraph to one line */
    overflow:hidden; /* older browsers */
	max-width:100px;
}
.Setting{
	color:#fff;
	width:100%;
	padding:5px;
	padding-left : 20%;
	text-align:left;
}
#layerlisttable{
	margin-left:20px;
	margin-right:0px;
}
.td1 , .td3{
	width : 5%;
}
.td2{
	width : 5%;
	border-right : 1px solid #fff;
}
.td1 img, .td2 img, .td3 img{
	background-repeat:no-repeat;
	background-size:contain;
	width:30px;
	height:30px;
}
</style>
</head>
<script>
 $(window).load(function() {
		addHandle(document.getElementById('title'), window);
		resizedialog();
		definelayer();
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">CUSTOMIZE</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.G3DMAP.DisableMovingFloatLabel();parent.closeFloatDialogbox();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<center>
		<table id="layerlisttable">
			<tbody id="layerlist">
			<tr><td style="text-align:center; color:#fff; font-size:20px;" colspan="3">CUSTOMIZE</td></tr>
			<tr><td></td></tr><tr><td></td></tr>
			<tr><td></td></tr><tr><td></td></tr>
			</tbody>
		</table>
	</center>
	<div id="mainbody" style="color:#fff;">
	<center>
		<table id="layerlisttable">
			<tbody id="layerlist">
			<tr>
				<td id="imagerylayername">Polygon</td>
				<td class="td1"><img src='../../images/openbtn.png' id="1o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="1c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/setting.png' id="1s" onclick="
					if(document.getElementById('PolygonSetting').style.display=='block'){
					document.getElementById('PolygonSetting').style.display='none';}else{
					document.getElementById('PolygonSetting').style.display='block';}"></img></td>
			</tr>
				<tr class="Setting" id="PolygonSetting" style="display:none;">
					<td><input type="range" min="0" max="100" value="100" step="1"
						style="width:200px;margin-left:-22px;"
						onchange="document.getElementById('range').innerHTML = this.value; parent.G3DMAP.transvalue=(this.value/100);alert(parent.G3DMAP.transvalue);" /></td>
					<td><span id="range">100</span></td>
				</tr>
			<tr>
				<td id="imagerylayername">PlaceName</td>
				<td class="td1"><img src='../../images/openbtn.png' id="3o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="3c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">FlagandName</td>
				<td class="td1"><img src='../../images/openbtn.png' id="4o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="4c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/setting.png' id="1s" onclick="
					document.getElementById('FlagSetting').style.display=='block'?
					document.getElementById('FlagSetting').style.display='none':
					document.getElementById('FlagSetting').style.display='block';"></img></td>
			</tr>
				<tr class="Setting" id="FlagSetting" style="display:none;">
					<td>Scale : </td>
					<td class="td1"><img src='../../images/plusbtn.png' onclick="document.getElementById('4o').setAttribute('src','../../images/openbtn1.png');parent.resizeFlagandName(0.1);"></img></td>
					<td class="td1"><img src='../../images/minbtn.png' onclick="document.getElementById('4o').setAttribute('src','../../images/openbtn1.png');parent.resizeFlagandName(-0.1);"></img></td>
				</tr>
			<tr>
				<td id="imagerylayername">Boundaries</td>
				<td class="td1"><img src='../../images/openbtn.png' id="12o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="12c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/setting.png' id="1s" onclick="
					document.getElementById('BoundariesSetting').style.display=='block'?
					document.getElementById('BoundariesSetting').style.display='none':
					document.getElementById('BoundariesSetting').style.display='block';"></img></td>
			</tr>
				<tr class="Setting" id="BoundariesSetting" style="display:none;">
					<td>Scale : </td>
					<td><input type="number" id="BoundariesScale" style="width:30px;text-align:center;" value="1"></td>
					<td class="td1"><img src='../../images/openbtn1.png' id="4o" onclick="
						parent.G3DMAP.SetBoundaries(document.getElementById('BoundariesScale').value);
						document.getElementById('12o').src='../../images/openbtn1.png';
						document.getElementById('12c').src='../../images/closebtn.png';"></img></td>
				</tr>
			<tr>
				<td id="imagerylayername">RankMark</td>
				<td class="td1"><img src='../../images/openbtn.png' id="5o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="5c" onclick="activate(this);"></img></td>
				<td class="td3" style="display:none;"><img src='../../images/setting.png' id="1s" onclick="
					document.getElementById('RankSetting').style.display=='block'?
					document.getElementById('RankSetting').style.display='none':
					document.getElementById('RankSetting').style.display='block';"></img></td>
			</tr>
				<tr class="Setting" id="RankSetting" style="display:none;">
					<td>Scale : </td>
					<td class="td1"><img src='../../images/plusbtn.png' onclick=""></img></td>
					<td class="td1"><img src='../../images/minbtn.png' onclick=""></img></td>
				</tr>
			</tr>
			<tr>
				<td id="imagerylayername">Athmosphere</td>
				<td class="td1"><img src='../../images/openbtn.png' id="6o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="6c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">Legend</td>
				<td class="td1"><img src='../../images/openbtn.png' id="10o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="10c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">Title</td>
				<td class="td1"><img src='../../images/openbtn.png' id="11o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="11c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/setting.png' id="1s" onclick="
					if(document.getElementById('TitleSetting').style.display=='block'){
					document.getElementById('TitleSetting').style.display='none';
					document.getElementById('TitleSetting1').style.display='none';
					document.getElementById('TitleSetting2').style.display='none';}else{
					document.getElementById('TitleSetting').style.display='block';
					document.getElementById('TitleSetting1').style.display='block';
					document.getElementById('TitleSetting2').style.display='block';}"></img></td>
			</tr>
				<tr class="Setting" id="TitleSetting" style="display:none;">
					<td>Title &nbsp;: </td>
					<td colspan="2"><input type="text" id="TitleText" style="width:120px;text-align:center;" value="World Population Map"></td>
				</tr>
				<tr class="Setting" id="TitleSetting1" style="display:none;">
					<td>Style : </td>
					<td><input id="TitleFont" type=text list=browsers style="width:120px;text-align:center;" value="Calibri">
						<datalist id=browsers >
						   <option> Architect
						   <option> Arial
						   <option> BankFuturistic
						   <option> BankGothic
						   <option> Calibri
						   <option> Comic Sans
						   <option> Courier
						   <option> Cursive
						   <option> Decorative
						   <option> Fantasy
						   <option> Georgia
						   <option> Helvetica
						   <option> Impact
						   <option> Minion
						   <option> MicrofostYahei
						   <option> Modern
						   <option> Monospace
						   <option> Roman
						   <option> Sans-serif
						   <option> Script
						   <option> Swiss
						   <option> Times New Roman
						   <option> Tw Cen MT
						   <option> Verdana
						</datalist>
					</td>
					<td class="td1"><img id="movinglabel" src='../../images/moveable.png' onclick="parent.G3DMAP.EnableMovingFloatLabel();"></img></td>
				</tr>
				<tr class="Setting" id="TitleSetting2" style="display:none;">
					<td>Font-Size &nbsp;&nbsp;: </td>
					<td><input type="number" id="TitleSize" style="width:50px;text-align:center;" value="65"></td>
					<td class="td1"><img src='../../images/openbtn1.png' id="4o" onclick="
						DisplayText();
					"></img></td>
				</tr>
			</tr>
			<tr>
				<td id="imagerylayername">LOGO</td>
				<td class="td1"><img src='../../images/openbtn.png' id="13o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="13c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/setting.png' id="1s" onclick="
					if(document.getElementById('LogoSetting').style.display=='block'){
					document.getElementById('LogoSetting').style.display='none';}else{
					document.getElementById('LogoSetting').style.display='block';}"></img></td>
				<tr class="Setting" id="LogoSetting" style="display:none;">
					<td><div><label for="image_file">Please select image file</label></div>
						<div><input type="file"  accept="image/*" name="image_file" id="image_file" onchange="fileSelected();" style="width:200px;"/></div>
					</td>
				</tr>
			</tr><tr>
				<td id="imagerylayername">BlueOcean</td>
				<td class="td1"><img src='../../images/openbtn.png' id="2o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="2c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">ARCGIS</td>
				<td class="td1"><img src='../../images/openbtn.png' id="7o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="7c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">NATURAL EARTH</td>
				<td class="td1"><img src='../../images/openbtn.png' id="8o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="8c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">WORLD STREET MAP</td>
				<td class="td1"><img src='../../images/openbtn.png' id="9o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="9c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr>
				<td id="imagerylayername">Europe and Carribean</td>
				<td class="td1"><img src='../../images/openbtn.png' id="14o" onclick="activate(this);"></img></td>
				<td class="td2"><img src='../../images/closebtn.png' id="14c" onclick="activate(this);"></img></td>
				<td class="td3"><img src='../../images/transparent.png' id="1s" onclick=""></img></td>
			</tr>
			<tr><td></td></tr>
			</tbody>
		</table>
	</center>
	</div>
</body> 

<script>

	//Define which layer is activate
	function definelayer(){
		if(parent.geojsonentities.length>0)
			document.getElementById("1o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("1c").setAttribute("src","../../images/closebtn1.png");

		if(parent.G3DMAP.layers.contains(parent.BlueOceanLayer))
			document.getElementById("2o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("2c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.layers.contains(parent.PlaceNameLayer))
			document.getElementById("3o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("3c").setAttribute("src","../../images/closebtn1.png");
		
		if(parent.G3DMAP.FlagandNames.length>0)
			document.getElementById("4o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("4c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.RankMark.length>0)
			document.getElementById("5o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("5c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.viewer.scene.skyAtmosphere.show){
			document.getElementById("6o").setAttribute("src","../../images/openbtn1.png");
		}
		else
			document.getElementById("6c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.layers.contains(parent.ArcgisLayer)){
			document.getElementById("7o").setAttribute("src","../../images/openbtn1.png");
		}
		else
			document.getElementById("7c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.layers.contains(parent.NaturalEarthLayer)){
			document.getElementById("8o").setAttribute("src","../../images/openbtn1.png");
		}
		else
			document.getElementById("8c").setAttribute("src","../../images/closebtn1.png");
			
		if(parent.G3DMAP.layers.contains(parent.WorldStreetMapLayer)){
			document.getElementById("9o").setAttribute("src","../../images/openbtn1.png");
		}
		else
			document.getElementById("9c").setAttribute("src","../../images/closebtn1.png");

		if(parent.document.getElementById('dialogLegend').width>100)
			document.getElementById("10o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("10c").setAttribute("src","../../images/closebtn1.png");

		if(parent.captureTEXT==true)
			document.getElementById("11o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("11c").setAttribute("src","../../images/closebtn1.png");
		
		if(parent.BoundariesArray.length>0)
			document.getElementById("12o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("12c").setAttribute("src","../../images/closebtn1.png");
		
		if(parent.document.getElementById('LOGO').style.display=="block")
			document.getElementById("13o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("13c").setAttribute("src","../../images/closebtn1.png");
		
		if(parent.G3DMAP.withEuropeCarribean==true)
			document.getElementById("14o").setAttribute("src","../../images/openbtn1.png");
		else
			document.getElementById("14c").setAttribute("src","../../images/closebtn1.png");
		
	}

		//control active button
		function activate(obj){
			var id = obj.id;
			var num;
			//OPEN CLICKED
			if(id.indexOf("o")!=-1){
				num = id.split("o")[0];
				document.getElementById(num+"o").setAttribute("src","../../images/openbtn1.png");
				document.getElementById(num+"c").setAttribute("src","../../images/closebtn.png");
				if(num=='1'){
					DisplayGeoJSONpolygon(true);
				}
				else if(num=='2'){
					DisplayBlueOcean(true);
				}
				else if(num=='3'){
					DisplayPlaceName(true);
				}
				else if(num=='4'){
					parent.DisplayFlagandName(true);
				}
				else if(num=='5'){
					DisplayRankMark(true);
				}
				else if(num=='6'){
					DisplayAtmosphere(true);
				}
				else if(num=='7'){
					DisplayArcgis(true);
				}
				else if(num=='8'){
					DisplayNaturalEarth(true);
				}
				else if(num=='9'){
					DisplayWorldStreetMap(true);
				}
				else if(num=='10'){
					parent.openLegend();
				}
				else if(num=='11'){
					DisplayText();
				}
				else if(num=='12'){
					parent.G3DMAP.SetBoundaries(document.getElementById('BoundariesScale').value);
				}
				else if(num=='13'){
					parent.document.getElementById('LOGO').style.display='block';
					parent.captureLOGO = true;
				}
				else if(num=='14'){
					DisplayEuropeandCarribean(true);
				}
			}
			//CLOSED CLICKED
			else if(id.indexOf("c")!=-1){
				num = id.split("c")[0];
				document.getElementById(num+"o").setAttribute("src","../../images/openbtn.png");
				document.getElementById(num+"c").setAttribute("src","../../images/closebtn1.png");
				if(num=='1'){
					DisplayGeoJSONpolygon(false);
				}
				else if(num=='2'){
					DisplayBlueOcean(false);
				}
				else if(num=='3'){
					DisplayPlaceName(false);
				}
				else if(num=='4'){
					parent.DisplayFlagandName(false);//DisplayFlag
				}
				else if(num=='5'){
					DisplayRankMark(false);
				}
				else if(num=='6'){
					DisplayAtmosphere(false);
				}
				else if(num=='7'){
					DisplayArcgis(false);
				}
				else if(num=='8'){
					DisplayNaturalEarth(false);
				}
				else if(num=='9'){
					DisplayWorldStreetMap(false);
				}
				else if(num=='10'){
					parent.closeLegend();
				}
				else if(num=='11'){
					parent.G3DMAP.removeTitle();
				}
				else if(num=='12'){
					parent.G3DMAP.ClearBoundaries();
				}
				else if(num=='13'){
					parent.document.getElementById('LOGO').style.display='none';
					parent.captureLOGO = false;
				}
				else if(num=='14'){
					DisplayEuropeandCarribean(false);
				}
			}
		}

		function DisplayEuropeandCarribean(a){
			if(a==true){
				parent.G3DMAP.withEuropeCarribean = true;
				parent.G3DMAP.drawEuropeAndCarribeanBorder();
			}
			else{
				parent.G3DMAP.withEuropeCarribean = false;
				parent.G3DMAP.removeEuropeAndCaribbeanBorders();
			}
		
		}
		
		function DisplayText(){
			parent.captureTEXT=true;
			//change default value of font
			parent.fontsize =  document.getElementById('TitleSize').value;
			parent.fontstyle = document.getElementById('TitleFont').value;
			var Title = document.getElementById('TitleText').value.toUpperCase();
			parent.G3DMAP.setTitle(Title,parent.fontsize,parent.fontstyle,5,-65);//6.85,-64.73
			//after click
			document.getElementById('11o').src = '../../images/openbtn1.png';
			document.getElementById('11c').src = '../../images/closebtn.png';
		}
		
		//
		function DisplayGeoJSONpolygon(a){
			if(parent.geojsonentities)
				for (var i = 0; i < parent.geojsonentities.length; i++) {
					//parent.geojsonentities[i].show = a;
					parent.geojsonentities[i].polygon.show = a;
				}
		}

		function DisplayBlueOcean(a){
			if(a==true){
				HideAllLayer();
				if(!parent.G3DMAP.layers.contains(parent.BlueOceanLayer)){
					parent.G3DMAP.layers.add(parent.BlueOceanLayer);
					parent.G3DMAP.layers.lowerToBottom(parent.BlueOceanLayer);
				}
				//2 7 8 9
				document.getElementById('2o').setAttribute("src","../../images/openbtn1.png");
				document.getElementById('7o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('8o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('9o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('2c').setAttribute("src","../../images/closebtn.png");
				document.getElementById('7c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('8c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('9c').setAttribute("src","../../images/closebtn1.png");
			}
			else{
				if(parent.G3DMAP.layers.contains(parent.BlueOceanLayer))
					parent.G3DMAP.layers.remove(parent.BlueOceanLayer,false);
			}
		}

		function DisplayPlaceName(a){
			if(a==true){
				if(!parent.G3DMAP.layers.contains(parent.PlaceNameLayer)){
					parent.G3DMAP.layers.add(parent.PlaceNameLayer);
					parent.G3DMAP.layers.raiseToTop(parent.PlaceNameLayer);
				}
			}
			else
				parent.G3DMAP.layers.remove(parent.PlaceNameLayer,false);
		}
		
		function DisplayArcgis(a){
			if(a==true){
				HideAllLayer();
				if(!parent.G3DMAP.layers.contains(parent.ArcgisLayer)){
					parent.G3DMAP.layers.add(parent.ArcgisLayer);
					parent.G3DMAP.layers.lowerToBottom(parent.ArcgisLayer);
				}
				//2 7 8 9
				document.getElementById('2o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('7o').setAttribute("src","../../images/openbtn1.png");
				document.getElementById('8o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('9o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('2c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('7c').setAttribute("src","../../images/closebtn.png");
				document.getElementById('8c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('9c').setAttribute("src","../../images/closebtn1.png");
			}
			else{
				if(parent.G3DMAP.layers.contains(parent.ArcgisLayer))
					parent.G3DMAP.layers.remove(parent.ArcgisLayer,false);
			}
		}
		
		function DisplayNaturalEarth(a){
			if(a==true){
				HideAllLayer();
				if(!parent.G3DMAP.layers.contains(parent.NaturalEarthLayer)){
					parent.G3DMAP.layers.add(parent.NaturalEarthLayer);
					parent.G3DMAP.layers.lowerToBottom(parent.NaturalEarthLayer);
				}
				//2 7 8 9
				document.getElementById('2o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('7o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('8o').setAttribute("src","../../images/openbtn1.png");
				document.getElementById('9o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('2c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('7c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('8c').setAttribute("src","../../images/closebtn.png");
				document.getElementById('9c').setAttribute("src","../../images/closebtn1.png");
			}
			else{
				if(parent.G3DMAP.layers.contains(parent.NaturalEarthLayer))
					parent.G3DMAP.layers.remove(parent.NaturalEarthLayer,false);
			}
		}
		
		function DisplayWorldStreetMap(a){
			if(a==true){
				HideAllLayer();
				if(!parent.G3DMAP.layers.contains(parent.WorldStreetMapLayer)){
					parent.G3DMAP.layers.add(parent.WorldStreetMapLayer);
					parent.G3DMAP.layers.lowerToBottom(parent.WorldStreetMapLayer);
				}
				//2 7 8 9
				document.getElementById('2o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('7o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('8o').setAttribute("src","../../images/openbtn.png");
				document.getElementById('9o').setAttribute("src","../../images/openbtn1.png");
				document.getElementById('2c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('7c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('8c').setAttribute("src","../../images/closebtn1.png");
				document.getElementById('9c').setAttribute("src","../../images/closebtn.png");
			}
			else{
				if(parent.G3DMAP.layers.contains(parent.WorldStreetMapLayer))
					parent.G3DMAP.layers.remove(parent.WorldStreetMapLayer,false);
			}
		}
		
		function DisplayRankMark(a){
			parent.G3DMAP.isRANKMODE = a;
			if(a==true){
				parent.openRankDialog();
				var database = parent.G3DMAP.selecteddatabasename.split(',');
				parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+database[0]+"&tablename="+database[1]+"&PointedMode=true&end="+parent.countrywithzerorate.length);
			}
			else{				
				parent.closeRankDialog();
				for (var i = 0; i < parent.G3DMAP.RankMark.length; i++) {
					parent.G3DMAP.RankMark[i].show = a;
				}
			}
		}

		function DisplayAtmosphere(a){
			parent.G3DMAP.viewer.scene.skyAtmosphere.show = a;
		}

		function HideAllLayer(){
			
				if(parent.G3DMAP.layers.contains(parent.WorldStreetMapLayer))
					parent.G3DMAP.layers.remove(parent.WorldStreetMapLayer,false);
				if(parent.G3DMAP.layers.contains(parent.NaturalEarthLayer))
					parent.G3DMAP.layers.remove(parent.NaturalEarthLayer,false);
				if(parent.G3DMAP.layers.contains(parent.ArcgisLayer))
					parent.G3DMAP.layers.remove(parent.ArcgisLayer,false);
				if(parent.G3DMAP.layers.contains(parent.BlueOceanLayer))
					parent.G3DMAP.layers.remove(parent.BlueOceanLayer,false);
		}





		//get layer list from earth.js
		function getLayer(){
			//alert(parent.layers.length);
			for(var i=0;i<parent.layers.length;i++){
				//alert(parent.layers.get(i).id);
				genTabletr(parent.layers.get(i).id , i);
			}
		}
		//getLayer();

		//Auto generate table tr
		function genTabletr(name,order){
			var tr0 = document.createElement("tr");
			var tr = document.createElement("tr");
			var tdil = document.createElement("td");
				tdil.id = 'imagerylayername';
				tdil.innerHTML = name;
			var td = document.createElement("td");
			var td0 = document.createElement("td");
				td0.id = "td0";
			var td1 = document.createElement("td");
				td1.id = "td1";
			var td2 = document.createElement("td");
				td2.id = "td2";
			var div1 = document.createElement("div");
			var div2 = document.createElement("div");
				tr0.appendChild(tdil);
				td1.appendChild(div1);
				tr0.appendChild(td1);
				td2.appendChild(div2);
				tr0.appendChild(td2);
			document.getElementById('layerlist').appendChild(tr0);
			tr.appendChild(td);
			document.getElementById('layerlist').appendChild(tr);
		}
		
	function fileSelected() {
		var iMaxFilesize = 1048576; // 1MB

		// get selected file element
		var oFile = document.getElementById('image_file').files[0];
		// filter for image files
		var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
		if (! rFilter.test(oFile.type)) {
			alert('Please choose images!');
			return;
		}
		// little test for filesize
		if (oFile.size > iMaxFilesize) {
			alert('Max Size exceed!');
			return;
		}
		
		// get preview element
		var oImage = parent.document.getElementById('LOGO');
		// prepare HTML5 FileReader
		var oReader = new FileReader();
		oReader.onload = function(e){
			// e.target.result contains the DataURL which we will use as a source of the image
			var sResultFileSize = bytesToSize(oFile.size);
			oImage.src = e.target.result;
			oImage.onload = function () { // binding onload event
				if(oImage.naturalWidth>oImage.naturalHeight)
					oImage.style.width = '10%';
				else
					oImage.style.width = '5%';
				parent.newLOGO = e.target.result;
			};
		};
		// read selected file as DataURL
		if(oFile){
			oReader.readAsDataURL(oFile);
		}
	}
	
		
	function bytesToSize(bytes) {
		var sizes = ['Bytes', 'KB', 'MB'];
		if (bytes == 0) return 'n/a';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
	};


		
		
		
		
		
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
			var width = 350;
			var height= 570;
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
				$("#mainbody").niceScroll({cursorcolor:"#00F",cursoropacitymax:"0.5",cursorwidth :"2px"});
			}
		);
	</script>
	
</html>  
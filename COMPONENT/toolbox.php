
<style>
.toolboxicon{
	position:absolute;
	margin-left:5px;
	top:10px;
	width:30px;
	height:30px;
	transition:all 1s ease;
}
.smalltoolboxicon{
	width:30px;
	height:30px;
	margin:7px;
	margin-top:13px;
}
#icon{
	position:absolute;
	z-index:1;
	top:10px;
	width:40px;
	height:40px;
	background-color:#000000;
    -moz-border-radius: 50%; 
    -webkit-border-radius: 50%; 
    border-radius: 50%;
	border: WHITE solid 1px;
}
#icon1{
	background:url('images/icon/3D.png');
	background-size:contain;background-repeat:no-repeat;
}
#icon2{
	background:url('images/icon/2D.png');
	background-size:contain;background-repeat:no-repeat;
}
#icon3{
	background:url('images/icon/Layer.png');
	background-size:contain;background-repeat:no-repeat;
}
#icon4{
	background:url('images/icon/save.png');
	background-size:contain;background-repeat:no-repeat;
}
#icon5{
	background:url('images/icon/pen.png');
	background-size:contain;background-repeat:no-repeat;
}
#icon6{
	background:url('images/icon/point.png');
	background-size:contain;background-repeat:no-repeat;
}
</style>

	<div class="toolboxopenner" id="icon" onclick="opentoolbox();"></div>
	<div class="toolboxicon" id="icon1" onclick="parent.Switchto3Dmode();"></div>
	<div class="toolboxicon" id="icon2" onclick="parent.Switchto2Dmode();"></div>
	<div class="toolboxicon" id="icon3" onclick="parent.openFloatDialogbox('COMPONENT/Dialog/Dialog_layer.php');"></div>
	<div class="toolboxicon" id="icon4" onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_Save.php');"></div>
	<!--<div class="toolboxicon" id="icon5" onclick="parent.openFloatDialogbox('COMPONENT/Dialog/Dialog_colormode.php');"></div>
	<div class="toolboxicon" id="icon6" onclick="rank();"></div-->


<script>

var isopen = false;
var iconnum = 4;
function opentoolbox(){
	if(isopen){
		for(var i=1;i<=iconnum;i++){
			document.getElementById("icon"+i).style.top = "10px";
		}
		isopen=false;
	}
	else{
		for(var i=1;i<=iconnum;i++){
			var top;
			if(i==1) top = (i*50)+10;
			else top = (i*30)+35;
			document.getElementById("icon"+i).style.top = top+"px";
		}
		isopen=true;
	}
}

var a = true;
function rank(){
	if(a==true){
		var database = parent.G3DMAP.selecteddatabasename.split(',');
		parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+database[0]+"&tablename="+database[1]+"&PointedMode=true");
		a = false;
	}
	else{				
		for (var i = 0; i < parent.G3DMAP.RankMark.length; i++) {
			parent.G3DMAP.RankMark[i].show = a;
		}
		a = true;
	}
}

var l = true;
function legend(){
	if(l==true){
		parent.openLegend();
		l = false;
	}
	else{
		parent.closeLegend();
		l = true;
	}
}

</script>
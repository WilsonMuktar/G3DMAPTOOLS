<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TOPMENU</title>
<style type="text/css">
body{
	margin:0;
	background:#898989;
	position:absolute;
	z-index:2;
	overflow:hidden;
	width:100%;
	height:100%;
}

.menu {
	float:left;
	position:absolute;//relative;
	z-index:1;
	font-family: arial, sans-serif;
	width:100%;
	background:rgba(89,89,89,0.5);//#898989;
	margin:0;
	margin:0px 0;
}

.menu ul {
	padding:0;
	margin:0;
	list-style-type: none;
}

.menu ul li{
	float:left;
	position:relative;
}
.menu ul li.loginmenu{
	float:right;
}

.menu ul li a, .menu ul li a:visited {
	display:block;
	text-align:center;
	text-decoration:none;
	width:104px;
	height:32px;
	color:#fff;
	background:transparent;//#898989;
	line-height:30px;
	font-size:11px;
}
 

.menu ul li:hover ul {
	display:block;
	position:absolute;
	z-index:3;
	top:34px;
	left:0;
	width:200px;
	margin-left:0px;
	margin-top:-2px;
	//border:1px outset #f00;
	//border-top-left-radius: 600px 10px;
	background:rgba(255,0,0,0.5);
}
.menu ul li:hover{
	background:rgba(180,0,0,0.4);
}

.menu ul li:hover ul.TOOLS {
	display:block;
	position:absolute;
	z-index:3;
	top:34px;
	left:-260px;
	width:1400px;
	height:200px;
	margin-left:-1px;
	//border:1px solid #f00;
	//border-top-left-radius: 0px 0px;
}
.menu ul li:hover a.LOGIN {}

.menu ul li:hover ul.LOGIN {
	display:block;
	position:absolute;
	z-index:3;
	top:34px;
	left:-100px;
	width:205px;
	height:200px;
	margin-left:-1px;
}

.menu ul li:hover ul li a{
	color:#fff;
	background:rgba(89,89,89,0.5);//#898989;
	height:40px;
	width:200px;
	padding-top:7px;
}
  
 .menu ul li:hover ul.TOOLS li a{
	color:#fff;
	background:rgba(89,89,89,0.5);//#898989;
	height:193px;
	width:200px;
	padding-top:7px;
} 
 
//FILE VIEW TOOLS HELP SIZE
.menu ul li:hover a.hide{
	//border:1px solid #f00;
	//border-bottom:none;
	height:32px;
}
 
.menu ul li:hover ul ul{
	display:none;
}

.menu ul li:hover ul li{
	border:none;
}

.menu ul li:hover ul li a:hover {
	background:#dfc184;
	color:#000;
}

.menu ul ul li div.parent{
	display:block;
	position:absolute;
	z-index:99;
	width:200px;
	height:40px;
	background-image: url(images/arrow3.gif);
	background-position: right center;
	background-size: 10px 10px;
	background-repeat: no-repeat;
	left:-5px;
}
.menu ul ul li:hover div.parent{
	display:none;
}

.menu ul ul {
	display: none;
}

.menu ul ul li:hover ul{
	//border-top-left-radius: 0px 0px;
	display:block;
	top:2px;
	left:200px;
	width:200px;
	color:#fff;
}

.LOGIN{
	background:rgba(89,89,89,0.5);//#898989;
}
.LOGININPUT{
	margin:20px;
	background:transparent;
	border:none;
	font-size:20px;
	margin-top:50px;
	color:rgba(255,255,255,0.5);
}
.LOGININPUTPASS{
	margin:20px;
	background:transparent;
	border:none;
	margin-top:5px;
	font-size:20px;
	color:rgba(255,255,255,0.5);
}
.LOGINBTN{
	text-align:center;
	margin:2px;
	color:#fff;
	font-size:22px;
	margin-top:20px;
}
.BurgerMenu{
	height:25px;
	width:30px;
	margin-top:3px; 
	margin-left:5px;
	margin-right:5px;
}
.TOOLSICON{
	width:100px; 
	height:100px; 
	margin-top:20px; 
	margin-left:50px; 
	background-color:#ffc000;
	//border-radius:5px;
}
</style>
</head>
<body onload="">
<?php require_once('LOGIN/index.php'); ?>
<!--MENU-->
<div class="menu" id="menu" width="100%">
<ul id="loginmenupanel" style="position:absolute;width:100%;">
	<!--LOGIN MENU-->
	<li class="loginmenu">
		<a id="LOGINBTN" class="LOGIN" onClick='openloginpage();'>
		<?php if(isset($_SESSION['user_name'])) echo "LOGOUT"; else echo "LOGIN"; ?></a>
		<!--ul class="LOGIN">
			<li style="width:300px;">
				<input class="LOGININPUT" id="usernameinput" type="text" onClick='resetusername();' value='     USERNAME'></input>
				<input class="LOGININPUTPASS" id="passwordinput" type="text" onClick='resetpassword();'value='     PASSWORD'></input>
				<p class="LOGINBTN">LOGIN</p>
			</li>
		</ul-->
	</li>
</ul>
<ul>
	<!--BURGER MENU-->
	<li>
		<img class="BurgerMenu" onclick="opensidepanel();" src="images/burgermenu.png"/>
	</li>
	<li>
		<a class="hide">FILE</a>
		<ul>
		<li><a onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_NewTemplate.php');">NEW</a></li>
		<!--
		<li><a onclick="">OPEN</a></li>
		<li><a onclick="capture();">SAVE LEGEND</a></li>
		-->
		<li><a onclick="Screenshot(G3DMAP.viewer);">SAVE</a></li>
		<li><a onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_Save.php')">SAVE AS</a></li>
		<li><a onclick="previewmode();">PREVIEW</a></li>
		</ul>
	</li>
	<li>
		<a class="hide">VIEW</a>
		<ul>
			<li>
				<div class="parent"></div>
				<a>VIEW MODE</a>
				<ul>
					<li><a onclick="Switchto2Dmode();" >2D</a></li>
					<li><a onclick="Switchto3Dmode();" >3D</a></li>
				</ul>
			</li>
			<li>
				<a onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_layer.php');">CUSTOMIZE</a>
			</li>
			<!--li>
				<a onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_categorize.php');">CATEGORIZE</a>
			</li-->
		</ul>
	</li>
	<li>
		<a class="hide">TOOLS</a>
		<ul class="TOOLS">
		<center>
			<li><a>
				<div onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_colormode.php');" >
					<div class="TOOLSICON" style="background-image:url('images/icon/color.png');background-size:contain;"></div><br/>
						COLOR MODE
				</div>
			</a></li>
			<li><a>
				<div onclick="openFloatDialogbox('COMPONENT/Dialog/Dialog_database.php');" >
					<div class="TOOLSICON" style="background-image:url('images/icon/db.png');background-size:contain;"></div><br/>
						Edit Data
				</div>
			</a></li>
			<li><a>
				<div onclick="ImportExportData();" >
					<div class="TOOLSICON" style="background-image:url('images/icon/db.png');background-size:contain;"></div><br/>
						Import/Export Data
				</div>
			</a></li>
			<li><a onclick=""></a></li>
			<li><a onclick=""></a></li>
			<li><a onclick=""></a></li>
			<li><a onclick=""></a></li>
		</center>
		</ul>
	</li>
	<li>
		<a class="hide">HELP</a>
		<ul>
		<li><a onclick="" >DOCUMENTATION</a></li>
		<li><a onclick="opendatasourceweb();" >DATA SOURCE</a></li>
		<li><a onclick="openVersionDialogbox();" >ABOUT</a></li>
		<li><a onclick="openHelpDialog();" >HELP</a></li>
		<li><a onclick="whoisloggedin();" >WHO IS LOGGEDIN</a></li>
		<!--
		<li><a onclick="AutoCapture();" >AUTO CAPTURE</a></li>
		-->
		</ul>
	</li>
</ul>

<!-- clear the floats if required -->
<div class="clear"></div>
</div>
<script>
	function ImportExportData(){
		if(global_username!="") openDragDropDialog(); else alert('Please Login First!');
	}
	function previewmode(){
			document.getElementById('menu').setAttribute('style','-webkit-transition : all 0.5s ease; top:-100px;');
			document.getElementById('BottomPanel').setAttribute('style','-webkit-transition : all 0.5s ease; bottom:-100px;');
			document.getElementById('CENTERLOGO').setAttribute('style','display:none;');
			document.getElementById('LOGO').setAttribute('style','-webkit-transition : all 0.5s ease; display:block; margin-bottom:5px;');
							document.getElementById('toolbox').style.display='block';
	}
	function exitpreviewmode(){
			document.getElementById('menu').setAttribute('style','-webkit-transition : all 0.5s ease; top:0;');
			document.getElementById('BottomPanel').setAttribute('style','-webkit-transition : all 0.5s ease; bottom:0;');
			document.getElementById('LOGO').setAttribute('style','-webkit-transition : all 0.5s ease; display:block; margin-bottom:2%;');
							document.getElementById('toolbox').style.display='none';
	}
	
	function whoisloggedin(){
		alert(global_username);
	}
	function resizeloginmenupanel(){
		alert(document.body.clientWidth);
		document.getElementById('loginmenupanel').width = document.body.clientWidth;
	}
	function resetusername(){
		document.getElementById('usernameinput').value = "";
	}
	function resetpassword(){
		document.getElementById('passwordinput').value = "";
	}
	function resetlogin(){
		document.getElementById('usernameinput').value = "     USERNAME";
		document.getElementById('passwordinput').value = "     PASSWORD";
	}
	
	function opendatasourceweb(){
		var win = window.open('COMPONENT/aboutdata/WikiGlobe.html', '_blank');
		win.focus();
	}
	
	function openloginpage(){
		if(global_username==""){
			//login
			parent.document.getElementById('CENTERLOGO').setAttribute('style','display:none');
			document.getElementById('form').setAttribute('style','top:0;z-index:1;');
			document.getElementById('form-in').setAttribute('style','top:50%; margin-top:-230px; transition:all .5s .4s;');
		}
		else{
			//logout
			document.location.href='index.php?logout';
			alert('successfully logout!');
		}
	}
	
</script>
</body>
</html>
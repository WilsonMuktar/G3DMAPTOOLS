<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<style>
.similar:nth-child(1) { border-bottom:none; background:#CCC; border-radius:10px 10px 0 0; }
.similar { border:solid 1px #999999; padding:10px; width:280px;  border-radius:0 0 10px 10px; background:#FFF; }
.similar h2 { margin:0; padding:0; text-align:center; font-family:Georgia, "Times New Roman", Times, serif; font-size:20px; color:#963; }
.similar li, .similar ul { margin:0; padding:0; list-style-type:none; }
.similar li { height:24px; line-height:24px; border-bottom:solid 1px #CCCCCC; }
.similar li span { opacity:0; color:green; font-weight:bold; font-family:Georgia, "Times New Roman", Times, serif; }
.similar li:hover span { opacity:1; }
.similar a { text-decoration:none; transition:all .4s ease-in-out; font-family:Georgia, "Times New Roman", Times, serif; color:#06F; }
.similar a:hover { color:green; margin-left:15px; }
.set-posotion { position:fixed; left:20px; top:180px; z-index:-1; }

body { background:#fff;}
* { margin:0; padding:0; }
.f-button { height:35px; border:solid 3px #CCCCCC; background:#333; width:100px; line-height:32px; -webkit-transform:rotate(-90deg); font-weight:600; color:white; transform:rotate(-90deg);  -ms-transform:rotate(-90deg);  -moz-transform:rotate(-90deg); text-align:center; font-size:17px; position:fixed; right:-40px; top:45%; font-family:Arial, Helvetica, sans-serif; z-index:999; }
#form { height:100%; width:100%; position:fixed; top:-100%; left:0; color:#000; background:rgba(0, 0, 0, 0.65); opacity:.8; }
#open:checked ~ #form { top:0; }
#open:checked ~ #form .form-in { margin-top:110px; transition:all .5s .4s; }
input[type="radio"] { display:none; }
label { cursor:pointer; padding:8px 0; }
.form-in { height:auto; width:350px; border-radius:5px; background:#FFF; position:absolute; left:50%; top:-100%; margin-left:-175px;}
.in,.text { width:90%; margin:5px; transition:all .4s .1s; padding:9px 7px; outline:none; border-radius:4px; border:solid 2px #999999; }
.in:focus:invalid,.text:focus:invalid { border-color:#930; }
.in:focus:valid,.text:focus:valid { border-color:#063; }
.text { height:70px; }
.sb { margin:5px; padding:5px 10px; cursor:pointer; border-radius:4px; border:none; background:#333; color:white; font-size:16px; font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif; }
.close { height:15px; border-radius:4px 4px 0 0; text-align:center; margin-left:90%; width:30px; background:#FFF; position:relative;color:#900; font-weight:bold; font-size:20px; }
.close p { -webkit-transform:rotate(45deg); }
header { height:1px; overflow:hidden; }
.d { margin-left:5px; text-decoration:none; color:#960; font-weight:bold; font-family:"Times New Roman", Times, serif; }
</style>
<script>
	function closeloginpage(){
		document.getElementById('form').setAttribute('style','margin-top:-100%; transition:all .5s .4s;');
		document.getElementById('form-in').setAttribute('style','margin-top:-100%; transition:all .5s .4s;');
	} //openloginpage at topmenu.php
</script>
	<!--QQ login
	<script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" data-appid="101232269" data-redirecturi="http://bdietc.buaa.edu.cn/map/" charset="utf-8"></script>
	-->
	</head>
<header>
</header>
<input type="radio" name="r" id="open">
<input type="radio" name="r" id="close">
<!--div class="f-button"><label for="open">Feedback</label></div-->
<div id="form">
	<div class="form-in" id="form-in">
		<div class="close"><p><label for="close" onclick="closeloginpage();">+</label></p></div>
			<?php require_once('LoginPage.html'); ?>
		</div>
	</div>
</div>
</html>
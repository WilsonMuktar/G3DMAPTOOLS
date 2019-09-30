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
	<!--QRCODE-->
	<script type="text/javascript" src="../QRCODE/qrcode.js"></script>
	<!--CLIPBOARD-->
	<script type="text/javascript" src="../CLIPBOARD/clipboard.js"></script>
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
 function GenerateEMBEDURL(){
	//ENCRYPT with base64
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	parent.G3DMAP.embedurl = parent.serverurl+"?auto"; //reset url
	var encriptedURL = "";
	if(parent.G3DMAP.is2DMODE) encriptedURL += "&2D";
	if(parent.G3DMAP.isFLAGMODE) encriptedURL += "&FLAG";
	if(parent.G3DMAP.isRANKMODE) encriptedURL += "&RANK";
	if(parent.G3DMAP.selecteddatabasename!== "country_population_2014,population"){
		encriptedURL += "&CUSTOMDATA";
		encriptedURL += "&TABLE=\""+parent.G3DMAP.selecteddatabasename.split(",")[0]+"\"";
		encriptedURL += "&COLUMN=\""+parent.G3DMAP.selecteddatabasename.split(",")[1]+"\"";
	}
	encriptedURL += "&T="+parent.G3DMAP.TEMPLATEMODE;
	encriptedURL += "&HC="+parent.G3DMAP.HIGHCOLOR.replace("#","");
	encriptedURL += "&LC="+parent.G3DMAP.LOWCOLOR.replace("#","");
	encriptedURL = Base64.encode(encriptedURL);
	parent.G3DMAP.embedurl += "&CODE="+encriptedURL;
 }
 $(window).load(function() {
    addHandle(document.getElementById('title'), window);
	resizedialog();
	GenerateEMBEDURL();
	new QRCode(document.getElementById("qrcode"),{ 
			text : parent.G3DMAP.embedurl,
			width: 200,
			height: 200,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
	});
  });
</script>
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
			<tr><td colspan="4" id="BIGTITLE">Generate Embed System : </td></tr>
		</thead>
		<tbody>
			<tr>
				<td style="padding-left:25px;">
				<center>
					<p style="color:#FFF;">Copy URL below to use embedded system.</p>
					<div id="embedURL" onclick="copyembedurl();"
					style="width:150px;height:30px;border:WHITE solid 1px;color:#FFF;background-color:#5555FF;text-align:center;">COPY</div>
				</center>
				</td>
				<td>
					<!--http://localhost/t/?auto&2D&CUSTOMDATA&TABLE=%22yenwie_countries%22&COLUMN=%22chengyuanguo%22&HIGHCOLOR=FF0000&LOWCOLOR=FFFFFF&FLAG&RANK-->
					<div id="qrcode" style="margin:30px;"></div>
				</td>
			</tr>
			<tr>
			<td><b>parent.G3DMAP.embedurl</b></td>
			<tr>
		</tbody>
		</table>
	</center>
	</div>
</body> 
	<script>
		function copyembedurl(){
			alert(parent.G3DMAP.embedurl);
			clipboard.copy(parent.G3DMAP.embedurl);
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
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
	<script src="../CESIUM/Build/Cesium/Cesium.js"></script>
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
    <script type="text/javascript" src="../../js/jquery-1.11.2.min.js"></script>
    <!--SCROLLBAR UI-->
	<script type="text/javascript" src="../../js/jquery.nicescroll.js"></script>
	<!--Custom-->
	<link rel="stylesheet" href="../../css/style.css" />
	<link rel="stylesheet" href="../../css/widgets.css" />
	<?php include('../PHPSQL/sql.php')?>
	<!-- JQUERY-UI Accordion-->
	<script src="../../js/jquery-ui.js"></script>
	<script>
	  $(function() {
		$( "#accordion" ).accordion({
			collapsible: true,
			heightStyle: "fill"
		});
	  });
	</script>
	<!--Gallery-->
	<link rel="stylesheet" href="../../css/gallery/styles.css" />
	<script src="../../js/gallery/plugins.js"></script>
	<script src="../../js/gallery/scripts.js"></script>
	<script>
		$(document).ready(function(){
		 $('#gallery-container').sGallery({
			fullScreenEnabled: true
		  });
		});
	</script>
	<!--Sudo Slider-->
	<script type="text/javascript" src="../../js/jquery.sudoSlider.min.js"></script>
	  <script type="text/javascript">
		$(document).ready(function(){	
		    var speed = 800;
			//MAIN SUDOSLIDER
		    var sudoSlider = $("#slider").sudoSlider({
                speed: speed,
		        beforeAnimation: function(t){ 
		            var substract = $('#slidemenu ul').offset();
					var posi = $('#slidemenu ul li').eq(t-1).offset();
					var left =  posi.left - substract.left;
					var width = $('#slidemenu ul li').eq(t-1).width();
					$('#slidemenu ul li.currentone').animate({
						left: left
						}, speed).children().animate({
						width: width
						}, speed);
					oldt = t;
		        },
		        customLink: '.custom',
				prevNext:false,
				autoHeight:false,
				touch:true,
				responsive:true
		    });
		});
	</script>
	<!--Chart.js-->
	<script src="../../js/Chart.js"></script>
	<!--Basic Jquery slider-->
	<link rel="stylesheet" href="../../css/basicJQslider/bjqs.css" />
	<script src="../../js/basicJQslider/bjqs-1.3.min.js"></script>
	<script>
		jQuery(document).ready(function($) {
			$('#banner-fade').bjqs({
				animtype      : 'fade',
				animduration  : 500,
				animspeed 	  : 4000,
				automatic 	  : false,
				height        : 580,
				width         : 720,
				responsive    : true,
				showcontrols  : true,
				centercontrols : true,
				showmarkers : false,
				nexttext : '',
				prevtext : '',
				keyboardnav : true,
				hoverpause : true
			});
		});
	</script>
	<!--Timeline-->
	<link rel="stylesheet" type="text/css" href="../../css/timeline/flat.css">
	<script type="text/javascript" src="../../js/timeline/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="../../js/timeline/jquery.timeline.min.js"></script>
	<script type="text/javascript">
		$(window).load(function() {
			// $('.tl1').timeline({});
		});	
		function time(from,to)
		{
			var times = document.getElementById('Timelinecontainer');
			for(var ij=from;ij<=to;ij++){
				var tt = document.createElement('div');
				tt.setAttribute('class','item');
				tt.setAttribute('data-id','31/12/'+ij);
				times.appendChild(tt);
			}
		}
	</script>
</head>
<script>
 $(window).load(function() {
		addHandle(document.getElementById('title'), window);<!--document.getElementsByTagName('body').item(0)-->
		resize();
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move;">
      <img id='flag' style="float:left;margin:7px;width:30px;height:30px;"/>
      <div id='name'> </div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeDialog();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody">
		<div class="TopRight" style="float:left;width:100%;height:90%;">
		    <div id="container" style="float:left;width:100%;height:100%;">
				<div id="slidemenu">
					<ul style="position:relative;float:left;">
						<li data-target="1" class="custom current" id="mainslidemenu"><a href="javascript:void(0);" onClick="";>MAP</a></li>
						<li data-target="2" class="custom current"><a href="javascript:void(0);" onClick="";>INFO</a></li>
						<li data-target="3" class="custom"><a href="javascript:void(0);" onClick="addgallery();";>GALLERY</a></li>
						<li data-target="4" class="custom"><a href="javascript:void(0);" onClick="addchart();";>CHART</a></li>
						<li class="currentone" style="position: absolute; left: 0px; ">
							<div class="hover" style="display: block; width: 71px; "></div>
						</li>
					</ul>
				</div>
				<div id="slider" style="position:relative;" class="slidecontainer slider">
					<ul>
						<!--CESIUM-->
						<li>
							<div id="cesiumContainer" style="margin:10px;"></div>
						</li>
						<!--INFO-->
						<li>
							<div id="accordion-resizer" class="ui-widget-content">
							  <div id="accordion">
								<h3>Description</h3><div id="describe"></div>
								<h3>Other</h3><div id="describeother"></div>
							  </div>
							</div>
						</li>
						<!--GALLERY-->
						<li>
							<div class="demo-wrapper">
							  <div id="gallery-container">
								<ul class="items--small" id="items--small" style="margin:3%;overflow-y:scroll;height: 60%;">
								</ul>
								<ul class="items--big" id="items--big" >
								</ul>
								<div class="controls">
								  <span class="control icon-arrow-left" data-direction="previous"></span> 
								  <span class="control icon-arrow-right" data-direction="next"></span> 
								  <span id="icongrid" class="grid icon-grid"></span>
								  <span class="fs-toggle icon-fullscreen"></span>
								</div>
							  </div>
							</div>
						</li>    
						<!--CHART-->
						<li style=" width=100%; height:100%;">
							<div align="center" id="banner-fade" style=" width:90%; height:100%;  top: 60%; -webkit-transform: translateY(-50%);">
								<ul class="bjqs" style=" width:100%; height:100%;">
									<li>
										<div align="center" style=" width:90%; height:75%;">
											<canvas id="chartcanvas"></canvas>
										</div>
									</li>
									<li>
										<div align="center" style=" width:90%; height:75%;">
											<canvas id="chartcanvasline"></canvas>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
		    </div>
		</div>
		<div class="Bottom" style="float:left;width:96%;height:5%;margin:2%;margin-top:-8%">
			<!-- BEGIN TIMELINE
			<div class="timelineFlat tl1" id="Timelinecontainer" style="width: 100%; overflow: hidden; margin-left: auto; margin-right: auto; text-align: center; height: auto; display: block;"></div>
			<script>time(2000,2019);</script> -->
		</div>
	</div>
</body> 
 
	<script src="../../js/EarthDialog.js"></script>
	<script>
		function changeImage(x){
			x.src="../../images/close1.png"
		}
		function rebackImage(x){
			x.src="../../images/close.png"
		}
		
		//Resizing all component to fit window
		function resize(){
			var width = parent.document.documentElement.clientWidth * 0.4;
			var height= parent.document.documentElement.clientHeight* 0.4;
			if(width<550) width=550;
			if(height<440) height=440;
			document.body.style.width = width;
			document.body.style.height = width*0.8;
			parent.document.getElementById('dialogframe').width = width;
			parent.document.getElementById('dialogframe').height = width*0.8;
			parent.document.getElementById('dialogbase0').style.right = (width+20)+"px";
			parent.document.getElementById('dialogbase0').style.top = "98%";
			//parent.document.getElementById('dialogbase0').style.marginright = (-width) + "px";
			parent.document.getElementById('dialogbase0').style.marginTop=(-(width*0.8)-(parent.document.documentElement.clientHeight*0.04)).toString() + "px";
			//try fix sudoSlider height
			document.getElementById('slider').style.height = "100%";
			//accordion height
			document.getElementById('accordion-resizer').style.height = "80%";
			document.getElementById('accordion-resizer').style.width = "100%";
			$( "#accordion" ).accordion( "refresh" );
			//removing all billboard point
			removeall();
			//open info menu as default
			$( "#mainslidemenu" ).trigger( "click" );
		}
		
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				$("#items--small").niceScroll({cursorcolor:"#00F",cursoropacitymax:"0.5",cursorwidth :"2px"});
				$("#describe").niceScroll({cursorcolor:"#00F",cursoropacitymax:"0.5",cursorwidth :"2px"});
				$("#describeother").niceScroll({cursorcolor:"#00F",cursoropacitymax:"0.5",cursorwidth :"2px"});
			}
		);
	</script>
	
</html>  
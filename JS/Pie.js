
	var cusbillarray = new Array();
	function removeAllPie(){
		if(cusbillarray.length>0)
		{
			for(var i=0;i<cusbillarray.length;i++)
				viewer.entities.remove(cusbillarray[i]);
		}
	}
	
	var CustomPie = (function(){
		//variable
		var viewer;
		var module = {}; 
		var Piedata = [];
		var Pielabel = [];
		var Piecolor = []; 
		var lat;
		var lon;
		
		module.Create = function(config){
			//set default or parameter
			config = config || {};
			viewer = config.viewer;
			Piedata  = config.Piedata || [-90, 90,90,90];
			Pielabel = config.Pielabel || ["0","120", "240", "240", "240"];
			Piecolor = config.Piecolor || ["#FFFFFF","#FF0000", "#00FF00", "#0000FF", "#FFFFFF"];
			lat = config.lat || 0;
			lon = config.lon || 0;
			
			//creating canvas
			var canvas = document.createElement('canvas');
			canvas.setAttribute('id','PIE'+cusbillarray.length);
			canvas.setAttribute('style','width:50px;height:50px;');
			var context2D = canvas.getContext('2d');
			for (var i = 0; i < Piedata.length; i++) {
				drawSegment(canvas, context2D, i);
			}
        
			var cusbill = viewer.entities.add({
				width: 200,
				height: 200,
				position: Cesium.Cartesian3.fromDegrees(lon,lat),
				billboard: {
					scale : 0.5,
					image : canvas,
					eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -1100000)),
					scaleByDistance : new Cesium.NearFarScalar(10e6,1,10e4,2)
				}
			});
			cusbillarray.push(cusbill);
			//alert(cusbillarray.length);
		}
		
		function drawSegment(canvas, context, i) {
			context.save();
			var centerX = Math.floor(canvas.width / 2);
			var centerY = Math.floor(canvas.height / 2);
			radius = Math.floor(canvas.width / 6);

			var startingAngle = degreesToRadians(sumTo(Piedata, i));
			var arcSize = degreesToRadians(Piedata[i]);
			var endingAngle = startingAngle + arcSize;

			context.beginPath();
			context.moveTo(centerX, centerY);
			context.arc(centerX, centerY, radius, 
						startingAngle, endingAngle, false);
			context.closePath();
			context.fillStyle = Piecolor[i];
			context.fill();
			context.restore();

			//drawSegmentLabel(canvas, context, i);
		}
		
		function degreesToRadians(degrees) {
			return (degrees * Math.PI)/180;
		}
		function sumTo(a, i) {
			var sum = 0;
			for (var j = 0; j < i; j++) {
			   sum += a[j];
			 }
			return sum;
		}

		function drawSegmentLabel(canvas, context, i) {
		   context.save();
		   var x = Math.floor(canvas.width / 2);
		   var y = Math.floor(canvas.height / 2);
		   var angle = degreesToRadians(sumTo(Piedata, i));

		   context.translate(x, y);
		   context.rotate(angle);
		   var dx = Math.floor(canvas.width * 0.25) - 10;
		   var dy = Math.floor(canvas.height * 0.025);

		   context.textAlign = "right";
		   var fontSize = Math.floor(canvas.height / 25);
		   context.font = fontSize + "pt Helvetica";
		   context.fillText(Pielabel[i], dx, dy);
		   context.restore();
		}
		
		return module;
	})();

	function DrawPie(){
		parent.CustomPie.Create({
			'viewer':parent.G3DMAP.viewer,
			'Piedata':[-90,270],
			'Pielabel':['',''],
			'Piecolor':['#FF0000','#0000FF'],
			'lat':-1.87,
			'lon':114.32
		});
	}
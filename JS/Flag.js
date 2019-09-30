
	var Flagarray = new Array();
	function removeAllFlag(){
		if(Flagarray.length>0)
		{
			for(var i=0;i<Flagarray.length;i++)
				viewer.entities.remove(Flagarray[i]);
		}
	}
	
	var CustomFlag = (function(){
		//variable
		var viewer;
		var module = {};
		var FlagURL;
		var Title;
		var lat;
		var lon;
		
		module.Create = function(config){
			//set default or parameter
			config = config || {};
			viewer = config.viewer;
			FlagURL = config.FlagURL;
			Title = config.Title || 'Title';
			lat = config.lat || 0;
			lon = config.lon || 0;
			
			//creating canvas
			var canvas = document.createElement('canvas');
			canvas.setAttribute('id','FLAG'+Flagarray.length);
			canvas.setAttribute('style','width:50px;height:50px;');
			var context = canvas.getContext('2d');
			
			context.save();
			var imageObj = new Image();
			context.drawImage(imageObj, 2, 2 , 30,30);
			imageObj.src = FlagURL;
			context.restore();
			
			context.save();
			var x = Math.floor(canvas.width / 2);
			var y = Math.floor(canvas.height - (canvas.height/10) );
			context.textAlign = "center";
			var fontSize = Math.floor(canvas.height / 25);
			context.font = fontSize + "pt Helvetica";
			context.fillText(Title, x, y);
			context.restore();
			
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
			Flagarray.push(cusbill);
			//alert(Flagarray.length);
		}
		return module;
	})();

	function DrawFlag(){
		parent.CustomFlag.Create({
			'viewer':G3DMAP.viewer,
			'FlagURL':'images/flag/China.png',
			'Title':'China',
			'lat':-1.87,
			'lon':114.32
		});
	}
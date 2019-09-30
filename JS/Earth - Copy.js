
	var level = -1;
	var TEMPLATEMODE = "countries"; //Variable storing the template been choose from NEW
	var selecteddatabasename = "country_population_2014,population"; //SetMapColorMode(); in Dialog_colormode.php
	var selectingtable = "population"; //TABLE NAMEs
    var RankMark = new Array();//RankMark : Billboard with ranking label
    var FlagandNames = new Array(); //FlagandNames : Country Flag and country names
	
	/*****************************/
	/***SQL value for colormode***/
	/*****************************/
	//get value from database for the beginning [PHPJS.js]
	RequestExecute("./COMPONENT/PHPSQL/PHPVALUE.php?db=world&table="+selecteddatabasename.split(",")[0]+"&column="+selecteddatabasename.split(",")[1]);
	function getPHPvalue(name,v){
		var ckey = 'cname'; //country table name as primary key [ALWAYS USE 'cname' !!!!!]
		var vkey = v; //table name
		for(var i=0;i<colormodevalue.length;i++){
			if(colormodevalue[i][ckey].toLowerCase()==name.toLowerCase()){ // handles lowercase
				var rate =  colormodevalue[i][vkey];
				rate = rate.replace(/%/, ""); //% handle percentage process
				return rate;
			}
		}
		return 0;
	}
	
	document.body.backgroundColor = "#F00";
	/************/
	/***CESIUM***/
	/************/
    var viewer = new Cesium.Viewer('cesiumContainer', {
        //mapProjection : new Cesium.WebMercatorProjection(),
		selectionIndicator : false,
		geocoder:false,
		homeButton:false,
		sceneModePicker:false,
		navigationHelpButton:false,
		infoBox : false,
		geocoder:false,
		navigationHelpButton:false,
		navigationInstructionsInitiallyVisible:false,
		sceneMode : Cesium.SceneMode.SCENE2D,
		baseLayerPicker : false,
		animation : false,
		timeline : false,
		fullscreenButton : false,skyBox : false,
		//skyAtmosphere : false,
		contextOptions:{
		    webgl: {
		        alpha: false,
				preserveDrawingBuffer : true
			},
			allowTextureFilterAnisotropic:false
		},
		resolutionScale : 1.0,
		targetFrameRate : 30,
		orderIndependentTranslucency : true
		/* terrainProvider : false,
		imageryProvider : false*/
	});
	var scene = viewer.scene;
	var handler;
	var ellipsoid = Cesium.Ellipsoid.WGS84;
	scene.fxaa = false;
	scene.fxaaOrderIndependentTranslucency = false;
	scene.backgroundColor = Cesium.Color.TRANSPARENT;
	scene.globe.baseColor = Cesium.Color.TRANSPARENT;
    //scene.globe.depthTestingAgainstTerrain = false;
    //scene.globe.enableLighting  = false;
	//scene.globe.showWaterEffect = false;
    //viewer.clock.shouldAnimate = false;
	scene.skyBox = new Cesium.SkyBox({
	  sources : {
		positiveX : 'ASSETS/stars/TychoSkymapII/skybox_px.jpg',
		negativeX : 'ASSETS/stars/TychoSkymapII/skybox_mx.jpg',
		positiveY : 'ASSETS/stars/TychoSkymapII/skybox_py.jpg',
		negativeY : 'ASSETS/stars/TychoSkymapII/skybox_my.jpg',
		positiveZ : 'ASSETS/stars/TychoSkymapII/skybox_pz.jpg',
		negativeZ : 'ASSETS/stars/TychoSkymapII/skybox_mz.jpg'
	  }
	});
	
	//LIMITATION OF ZOOM
	scene.screenSpaceCameraController.minimumZoomDistance = 800000;
	scene.screenSpaceCameraController.maximumZoomDistance = 40000000;
	scene.screenSpaceCameraController.enableTilt = false; 
	//scene.screenSpaceCameraController.enableTranslate = false;
		
	//Imagery layer
	var layers = viewer.imageryLayers;
	//remove all unwanted imagery
	layers.removeAll(true);
	
	var layerCollection = layerCollection && layerCollection.destroy();
	var BlueOceanLayer = new Cesium.ImageryLayer(
		new Cesium.SingleTileImageryProvider({
			url : 'images/sea.png',
	    	rectangle : Cesium.Rectangle.fromDegrees(-180.0, -89.0, 180.0, 90.0)
        })); BlueOceanLayer.id = "BlueOcean";
    layers.add(BlueOceanLayer);

	var PlaceNameLayer = new Cesium.ImageryLayer(
		new Cesium.ArcGisMapServerImageryProvider({
			url : 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer'
        })); PlaceNameLayer.id = "PlaceName";
        //layers.add(PlaceNameLayer);

    var ArcgisLayer = new Cesium.ImageryLayer(
		new Cesium.ArcGisMapServerImageryProvider({
		    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
	    })); ArcgisLayer.id = "Arcgis";
	    //layers.add(ArcgisLayer);

	var NaturalEarthLayer = new Cesium.ImageryLayer(
		new Cesium.TileMapServiceImageryProvider({
		    url: './ASSETS/imagery/NaturalEarthII/',
			maximumLevel : 5
		})); NaturalEarthLayer.id = "NaturalEarth";
		//layers.add(NaturalEarthLayer);

	var WorldStreetMapLayer = new Cesium.ImageryLayer(
		new Cesium.ArcGisMapServerImageryProvider({
		    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
		})); WorldStreetMapLayer.id = "WorldStreetMap";
		//layers.add(WorldStreetMapLayer);
	/* 
	//cesiumjs.org/tilesets/imagery/naturalearthii
	//server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
	//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer
	//cesiumjs.org/blackmarble
	//server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer
	*/
/* 		var ProxySwapXY = {getURL:function(url){var s=url.split('/'); var p=s.pop().split('.'); var v=s.pop(); s.push(p.shift()); p.unshift(v); s.push(p.join('.')); return s.join('/');}};
		var JapanMapLayer = new Cesium.ImageryLayer(
			new Cesium.OpenStreetMapImageryProvider({
                fileExtension:'png', maximumLevel:13, proxy: ProxySwapXY,
                //url:'http://cyberjapandata.gsi.go.jp/xyz/std'
                url:'http://gsj-seamless.jp/seamless/tilemap/basic/g'
            }));
		layers.add(JapanMapLayer); 
	https://gbank.gsj.jp/seamless/tilemap/basic/g
	*/
	
	
	//MOVE VIEW TO
	viewer.camera.flyTo({
		destination :  Cesium.Cartesian3.fromDegrees(0,0,40000000),
		duration : 0
	});
	
	//load geojson
    var countrymode = false;
    var geojsonentities;
	var polygons;
	function LoadJSON(name,clear,colormode,highcolor,lowcolor,vkey){
	    $.ajax({
	        url: 'Datasource/' + name + '.topojson',
	        type: 'HEAD',
	        success: function () {//file exists
				if(floatlabel)
					floatlabel.show = false; //?
	            //show loading indicator
	            Loading(true);
	            //Clear all polygon on scene
	            if (clear){
	                viewer.dataSources.removeAll(true);
					datasource = new Cesium.GeoJsonDataSource();
				}
				//init datasource
				var datasource = new Cesium.GeoJsonDataSource();
	            datasource.load('Datasource/' + name + '.topojson').then(
					function () {
					//Get all entities value
					geojsonentities = datasource.entities.values;
					//Calculate Color level value
					var highrate = parent.colormodemaxvalue;
					var lowrate = parent.colormodeminvalue;
					var halfrate = (highrate + lowrate) / 2;
					var quatrate = (highrate + lowrate) / 4;
					var oktarate = (highrate + lowrate) / 8;
					//set value for legend
					colormode0value = halfrate;
					colormode1value = quatrate;
					colormode2value = oktarate;
					colormode3value = oktarate / 2;
					//set color level
					colorlow = CalculateColor(highcolor,lowcolor,6);
					color3 = CalculateColor(highcolor,lowcolor,5);
					color2 = CalculateColor(highcolor,lowcolor,4);
					color1 = CalculateColor(highcolor,lowcolor,3);
					colorhigh = CalculateColor(highcolor,lowcolor,2);
					for (var i = 0; i < geojsonentities.length; i++) {
						var entity = geojsonentities[i];
						if(name!="continent"){
						    if (colormode) {
								var rate = getPHPvalue(entity.name, vkey);
						        /////////////////////////////////
						        //CALCULATION OF COLORING VALUE//
						        /////////////////////////////////
								if (rate <= highrate && rate >= (halfrate))
									levelcolor = colorhigh;
						        else if (rate < (halfrate) && rate >= (quatrate)) 
									levelcolor = color1;
						        else if (rate < (quatrate) && rate >= (oktarate))
						            levelcolor = color2;
						        else if (rate < (oktarate) && rate >= (oktarate / 2))
						            levelcolor = color3;
						        else if (rate < (oktarate / 2) && rate >= (lowrate))
						             levelcolor = colorlow;
										
						            makeProperty(entity, Cesium.Color.fromCssColorString(levelcolor).withAlpha(0.8),rate);
						    }
						    else
						        makeProperty(entity, Cesium.Color.WHITE.withAlpha(0.8),rate);
						}
						else
						{
							//continent
						}
					}
					setTimeout(function () {
						Loading(false);
					}, geojsonentities.length * 20);
				});
	            viewer.dataSources.add(datasource);
	            //viewer.zoomTo(datasource);
	        },
	        error: function () {//file not exists
	            level = 0;
	            //show loading indicator
	            Loading(true);
	            //Clear all polygon on scene
	            if (clear)
	                viewer.dataSources.removeAll(true);
	            var datasource = new Cesium.GeoJsonDataSource();
	            datasource.load('Datasource/continent.topojson').then(
					function () {
						var entities = datasource.entities.values;
						for (var i = 0; i < entities.length; i++) {
						    var entity = entities[i];
						    makeProperty(entity, Cesium.Color.WHITE).withAlpha(0.8);
						}
						Loading(false);
					});
	            viewer.dataSources.add(datasource);
	        }
	    });
	}
	
	//PICKER CALLBACK
    var pickColor = Cesium.Color.WHITE.withAlpha(0.8);
    function makeProperty(entity,color,rate) {
        var colorProperty = new Cesium.CallbackProperty(function(time, result) {
            if (selectedentity) {
				if (selectedentity.name==entity.name) {
					return pickColor.clone(result);
				}
			}
            return color.clone(result);
        }, false);
        entity.polygon.material = new Cesium.ColorMaterialProperty(colorProperty);	
		entity.polygon.material.translucent = false;
        entity.polygon.outline = true;
		entity.polygon.outlineColor = Cesium.Color.BLACK;
		//entity.polygon.perPositionHeight = true;
		entity.polygon.outlineWidth   = 5;
		//entity.polygon.stRotation = 90;
        //entity.polygon.extrudedHeight = rate/500;
    } 
// 1. create a polygon from points
var polygon = new Cesium.PolygonGeometry({
  polygonHierarchy : {
    positions : Cesium.Cartesian3.fromDegreesArray([
      -72.0, 40.0,
      -70.0, 35.0,
      -75.0, 30.0,
      -70.0, 30.0,
      -68.0, 40.0
    ])
  }
});
var geometry = Cesium.PolygonGeometry.createGeometry(polygon);

	var floatlabel = null;/*initialize floating label*/
    /*reset*/
    function removeall() {
        //remove all entities
	    viewer.entities.removeAll();
	    //reset RankMark
	    FlagandNames = new Array();
	    RankMark = new Array();
		//Redraw floatLabel
        floatlabel = viewer.entities.add({
			label : {
				show : true,
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				scale : 0.4,
				horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
				verticalOrigin : Cesium.VerticalOrigin.CENTER,
				fillColor : Cesium.Color.WHITE,
				outlineColor : Cesium.Color.GRAY,
				eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -1200000)),
				//translucencyByDistance  : new Cesium.NearFarScalar(1e7,1.0,12e6,0.0)
			},
			billboard :{
				show : true,
				width : 150,
				height: 50,
				horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
				verticalOrigin : Cesium.VerticalOrigin.CENTER,
				color : 'images/black.png',
				eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -1100000)),
			}
		});
	}
	
	/*MOUSE INPUT LISTENER*/
	// Mouse over the globe to see the cartographic position
	var latlon = parent.document.getElementById('cesium-latlon-text');
	var selectedentity;
	var pickedObjects;
	var cartesian;
	var lat , lon , longitudeString , latitudeString;
	function CalculateLatLon(movement){
		cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
        if (cartesian) {
            var cartographic = ellipsoid.cartesianToCartographic(cartesian);
            longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
            latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
            lon = Cesium.Math.toDegrees(cartographic.longitude);
            lat = Cesium.Math.toDegrees(cartographic.latitude);
			
            if (latlon) {
                latlon.textContent = ' | lat: ' + longitudeString + ' | lon: ' + latitudeString + ' | ';
                latlon.setAttribute('style', 'color:#ffffff;');
            }
			//floatlabel.position = cartesian;
		}
        else {
            latlon.textContent = 'Off globe';
            latlon.setAttribute('style', 'color:#ff0000;');
        }
	}
	
	
    // Move the primitive that the mouse is over to the top.
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        //LATLON LISTENER
        CalculateLatLon(movement);
        // get an array of all primitives at the mouse position
        pickedObjects = scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObjects)) {
            //for (var i = 0; i < pickedObjects.length; ++i) {
            selectedentity = pickedObjects.id;
            try {
                if (selectedentity.name) {
                    latlon.textContent += selectedentity.name;
                    //FLOATING LABEL 
                    //floatlabel.label.text = selectedentity.name;
					//allmaterial(selectedentity);
                }
            }
            catch (e) { }
        }
        else {
            //floatlabel.label.text = '';
            selectedentity = null;
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
	
	handler.setInputAction(function(movement) {
		if(selectedentity){
			//LoadJSON(selectedentity.name.toLowerCase().replace(/ /g,""),true);
			DialogMAPpositionextra(viewer,selectedentity.name.toLowerCase().replace(/ /g,""),2,2000000);
		}
		else
			DialogMAPposition(viewer,'defaultz',2);
	}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
	
	handler.setInputAction(function(movement) {
		if(selectedentity){
			//openDialog(selectedentity.name);
			//openLeftDialogbox(selectedentity.name);
			//floatlabel.label.text = selectingtable+" : "+getPHPvalue(selectedentity.name,selectingtable);
			//floatlabel.position = cartesian;
			//floatlabel.show = true; 
			custombillboard(movement.endPosition);
		}
		else{
			//floatlabel.show = false;
			//closeLeftDialogbox();	
		}
		//reset gallery path
		if(level>1)
			document.getElementById("dialogframe").contentWindow.gallerypath = "images/worldheritage/";
	}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	
	handler.setInputAction(function(movement) {
			DialogMAPposition(viewer,'defaultz',2);
	}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
 
	/*Close Dialog when window size is changed listener*/
	/* $(window).resize(function(){
		closeDialog();
	}); */
	
	
	var cusbillarray = new Array();
	//data
	var data = [-90, 90,90,90];
	var labels = ["0","120", "240", "240", "240"];
	var colors = ["#FFFFFF","#FF0000", "#00FF00", "#0000FF", "#FFFFFF"];
	function custombillboard(pos){
		if(cusbillarray.length>0)
		{
			for(var i=0;i<cusbillarray.length;i++)
				viewer.entities.remove(cusbillarray[i]);
		}
		
		//creating canvas
		var canvas = document.createElement('canvas');
		canvas.setAttribute('id','billcanvas');
		canvas.setAttribute('style','width:50px;height:50px;');
		var context2D = canvas.getContext('2d');
		for (var i = 0; i < data.length; i++) {
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
	}
	
	function drawSegment(canvas, context, i) {
		context.save();
		var centerX = Math.floor(canvas.width / 2);
		var centerY = Math.floor(canvas.height / 2);
		radius = Math.floor(canvas.width / 6);

		var startingAngle = degreesToRadians(sumTo(data, i));
		var arcSize = degreesToRadians(data[i]);
		var endingAngle = startingAngle + arcSize;

		context.beginPath();
		context.moveTo(centerX, centerY);
		context.arc(centerX, centerY, radius, 
					startingAngle, endingAngle, false);
		context.closePath();
		context.fillStyle = colors[i];
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
	   var angle = degreesToRadians(sumTo(data, i));

	   context.translate(x, y);
	   context.rotate(angle);
	   var dx = Math.floor(canvas.width * 0.25) - 10;
	   var dy = Math.floor(canvas.height * 0.025);

	   context.textAlign = "right";
	   var fontSize = Math.floor(canvas.height / 25);
	   context.font = fontSize + "pt Helvetica";
	   context.fillText(labels[i], dx, dy);
	   context.restore();
	}


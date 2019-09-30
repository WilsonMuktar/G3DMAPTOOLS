	
/*
*
* Defining cesium earth as a new class G3DMAP
*
*/	
var serverurl = "http://bdietc.buaa.edu.cn/map"

var GeneratingMap = false;

	function G3DMAP(){
		//level of geojson view
		this.level = -1;
		//Variable storing the template been choose from NEW
		this.TEMPLATEMODE = "countries";
		//SetMapColorMode() function defining database 
		//in Dialog_colormode.php
		this.selecteddatabasename = "country_population_2014,population"; 
		//defining selected table of database
		this.selectingtable = "population"; 
		//RankMark : Billboard with ranking label
		this.RankMark = new Array();
		//FlagandNames : Country Flag and country names
		this.FlagandNames = new Array();
		//WithEurope withCarribean
		this.WithEuropeCarribean = false;
		this.tooltip = createTooltip(document.getElementById('cesiumContainer'));
		//EMBEDURL
		this.embedurl = "http://bdietc.buaa.edu.cn/map?auto&2D&FLAG&RANK";
		this.transvalue = 1;
		this.is2DMODE = true;
		this.isFLAGMODE = false;
		this.isRANKMODE = false;
		this.isLEGENDMODE = false;
		this.HIGHCOLOR = "#FF0000";
		this.LOWCOLOR = "#FFFFFF";
	}
	
	//get value from database for the beginning [PHPJS.js]
	G3DMAP.prototype.GetData = function(table,column){
		RequestExecute(
			"./COMPONENT/PHPSQL/PHPVALUE.php?"
			+"db=world"
			+"&table="+table
			+"&column="+column);
	}
	
	G3DMAP.prototype.InitializeEarth = function(){
		document.body.backgroundColor = "#F00";
		/************/
		/***CESIUM***/
		/************/
		this.viewer = new Cesium.Viewer('cesiumContainer', {
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
					antialias: true,
					preserveDrawingBuffer : true,
					failIfMajorPerformanceCaveat: false
				},
				allowTextureFilterAnisotropic:false
			},
			resolutionScale : 1.0,
			//targetFrameRate : 30,
			orderIndependentTranslucency : true
			/*terrainProvider : false,
			imageryProvider : false*/
		});
		
		this.scene = this.viewer.scene;
		this.ellipsoid = Cesium.Ellipsoid.WGS84;
		this.scene.fxaa = false;
		this.scene.fxaaOrderIndependentTranslucency = false;
		this.scene.backgroundColor = Cesium.Color.TRANSPARENT;
		this.scene.globe.baseColor = Cesium.Color.WHITE;
		this.scene.globe.depthTestingAgainstTerrain = true;
		this.scene.globe.enableLighting  = false;
		this.scene.globe.showWaterEffect = false;
		this.viewer.clock.shouldAnimate = false;
		this.scene.skyBox = new Cesium.SkyBox({
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
		//this.scene.screenSpaceCameraController.minimumZoomDistance = 800000;
		this.scene.screenSpaceCameraController.maximumZoomDistance = 40000000;
		this.scene.screenSpaceCameraController.enableTilt = false; 
		//scene.screenSpaceCameraController.enableTranslate = false;
		
	}
	
	var BlueOceanLayer,PlaceNameLayer,ArcgisLayer,NaturalEarthLayer,WorldStreetMapLayer;
	G3DMAP.prototype.SetLayer = function(){
		//Imagery layer
		this.layers = this.viewer.imageryLayers;
		//remove all unwanted imagery
		this.layers.removeAll(true);
		
		BlueOceanLayer = new Cesium.ImageryLayer(new Cesium.SingleTileImageryProvider({url : 'images/sea.png',rectangle : Cesium.Rectangle.fromDegrees(-180.0, -89.0, 180.0, 90.0)})); 
		BlueOceanLayer.id = "BlueOcean";
		this.layers.add(BlueOceanLayer);

		PlaceNameLayer = new Cesium.ImageryLayer(new Cesium.ArcGisMapServerImageryProvider({url : 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer'})); 
		PlaceNameLayer.id = "PlaceName";

		ArcgisLayer = new Cesium.ImageryLayer(new Cesium.ArcGisMapServerImageryProvider({url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'})); 
		ArcgisLayer.id = "Arcgis";

		NaturalEarthLayer = new Cesium.ImageryLayer(new Cesium.TileMapServiceImageryProvider({url: './ASSETS/imagery/NaturalEarthII/',maximumLevel : 5})); 
		NaturalEarthLayer.id = "NaturalEarth";

		WorldStreetMapLayer = new Cesium.ImageryLayer(new Cesium.ArcGisMapServerImageryProvider({url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'})); 
		WorldStreetMapLayer.id = "WorldStreetMap";
		
 		/*var shadedRelief1 = new Cesium.WebMapTileServiceImageryProvider({
			url : 'http://t0.tianditu.com/vec_c/wmts',
			layer : 'vec',
			style : 'default',
			format : 'image/png',
			tileMatrixSetID : 'default028mm',
			// tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],
			maximumLevel: 19
		});
		this.layers.addImageryProvider(shadedRelief1); */
	}
		
	G3DMAP.prototype.SetPosition = function(lat,lon,alt){
		//MOVE VIEW TO
		this.viewer.camera.flyTo({
			destination :  Cesium.Cartesian3.fromDegrees(lat,lon,alt),
			duration : 0
		});
	}
	
	var colormodevalue,colormodemaxvalue,colormodeminvalue;
	var colormode0value,colormode1value,colormode2value,colormode3value;
	var geojsonentities;
	var countrywithzerorate = new Array(); //for flagandname
	G3DMAP.prototype.LoadGeoJSON = function(name,clear,colormode,highcolor,lowcolor,vkey){
		G3DMAP.TEMPLATEMODE = name;
		G3DMAP.HIGHCOLOR = highcolor;
		G3DMAP.LOWCOLOR = lowcolor;
		//load geojson
		var viewer = this.viewer;
			$.ajax({
				url: 'Datasource/' + name.toLowerCase().replace(/ /g, "") + '.topojson',
				type: 'HEAD',
				success: function () {//file exists
					//show loading indicator
					Loading(true);
					//update gallerypath
					document.getElementById("dialogframe").contentWindow.gallerypath = document.getElementById("dialogframe").contentWindow.gallerypath;
					document.getElementById("dialogframe").contentWindow.gallerypathtemp = document.getElementById("dialogframe").contentWindow.gallerypath;
					//Clear all polygon on scene
					if (clear){
						viewer.dataSources.removeAll(true);
						datasource = new Cesium.GeoJsonDataSource();
					}
					//init datasource
					var datasource = new Cesium.GeoJsonDataSource();
					datasource.load('Datasource/' + name.toLowerCase().replace(/ /g, "") + '.topojson',{
						stroke: Cesium.Color.BLACK,
						strokeWidth: 10
					}).then(
						function () {
						//Get all entities value
						geojsonentities = datasource.entities.values;
						//Calculate Color level value
						var highrate = colormodemaxvalue+1;
						var lowrate  = colormodeminvalue;
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
						//reset flagandnamezeroarray
						countrywithzerorate = new Array();
						//countrylist = new Array();
						for (var i = 0; i < geojsonentities.length; i++) {
							var entity = geojsonentities[i];
								var rate = 0;
								//Get Rate value of each entity
								try{ rate = GetValue(entity.name, vkey); }catch(e){}
								if(rate>0){
									if(countrywithzerorate.indexOf(entity.name)<0){
										countrywithzerorate.push(entity.name);//.toLowerCase().replace(/ /g,"")
									}
									//additional extra countrylist
									if(countrylist.indexOf(entity.name)==-1)
										countrylist.push(entity.name);//.toLowerCase().replace(/ /g,"")
								}
								if (colormode) {
									/////////////////////////////////
									//CALCULATION OF COLORING VALUE//
									/////////////////////////////////
									if (rate <= highrate && rate > (halfrate))
										levelcolor = colorhigh;
									else if (rate <= (halfrate) && rate > (quatrate)) 
										levelcolor = color1;
									else if (rate <= (quatrate) && rate > (oktarate))
										levelcolor = color2;
									else if (rate <= (oktarate) && rate > (oktarate / 2))
										levelcolor = color3;
									else if (rate <= (oktarate / 2) && rate >= (lowrate))
										 levelcolor = colorlow;
									else
										 levelcolor = colorlow;
										
									
									makeProperty(entity, Cesium.Color.fromCssColorString(levelcolor),rate);
								}
								else
									entity.polygon.material = Cesium.Color.TRANSPARENT;
								//BOUNDARIES
								G3DMAP.Boundaries(entity,i,1);
								//FLAG CENTER POSITIONS
								//if(myhash[entity.name.toLowerCase().replace(/ /g, "")]==undefined)
								if(name.toLowerCase().replace(/ /g, "")!="continent")
									setDynamicPosition(entity);
								//FLAG LIST
								/* var countryname = entity.name.toLowerCase().replace(/ /g, "");
								if(countrylist.indexOf(countryname)==-1)
									countrylist.push(countryname); */
						}
						setTimeout(function () {
							Loading(false);
							DialogMAPposition(viewer,name.toLowerCase().replace(/ /g, ""),3);
						}, geojsonentities.length * 2);
					});
					viewer.dataSources.add(datasource);
					
					if(G3DMAP.withEuropeCarribean==true)
						G3DMAP.drawEuropeAndCarribeanBorder();
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
								makeProperty(entity, Cesium.Color.TRANSPARENT);
							}
							Loading(false);
						});
					viewer.dataSources.add(datasource);
					
				}
			});
			
	}
			
			function GetValue(name,v){
				var ckey = 'cname'; //country table name as primary key [ALWAYS USE 'cname' !!!!!]
				var vkey = v; //table name
				for(var i=0;i<colormodevalue.length;i++){ //colormodevalue variable generate by DOM from GetData();
					if(colormodevalue[i][ckey].toLowerCase().replace(/ /g, "")==name.toLowerCase().replace(/ /g, "")){ // handles lowercase
						var rate =  colormodevalue[i][vkey];
						rate = rate.replace(/%/, ""); //% handle percentage process
						return rate;
					}
				}
				return 0;
			}
		
			//PICKER CALLBACK
			var pickColor = Cesium.Color.GREEN.withAlpha(0.5);
			function makeProperty(entity,color,rate) {
				var colorProperty = new Cesium.CallbackProperty(function(time, result) {
					if (selectedentity&&GeneratingMap==false) {
						if (selectedentity.name==entity.name) {
							return pickColor.withAlpha(this.transvalue).clone(result);
						}
					}
					return color.withAlpha(this.transvalue).clone(result);
				}, false);
				entity.polygon.material = new Cesium.ColorMaterialProperty(colorProperty);
				//entity.polygon.outline = true;
				//entity.polygon.outlineColor = Cesium.Color.BLACK;
				//entity.polygon.perPositionHeight = true;
				//entity.polygon.outlineWidth   = 50;
				//entity.polygon.extrudedHeight = rate * 500;
			}
	
	G3DMAP.prototype.FillColor = function(highcolor,lowcolor){
		//reset RankMark and flags
		G3DMAP.removeFlagandRank();
		Loading(true);
		var levelcolor;
		//Calculate Color level value
		var highrate = colormodemaxvalue+1;
		var lowrate  = colormodeminvalue;
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
		//alert(geojsonentities.length);
		//reset flagandnamezeroarray
		countrywithzerorate = new Array();
		for (var i = 0; i < geojsonentities.length; i++) {
			var entity = geojsonentities[i];
			//Get Rate value of each entity
			var rate = 0;
			//Get Rate value of each entity
			try{ rate = GetValue(entity.name, G3DMAP.selectingtable); }catch(e){}
				if(rate>0){
					if(countrywithzerorate.indexOf(entity.name)<0)
						countrywithzerorate.push(entity.name);//.toLowerCase().replace(/ /g,"")
					//additional extra countrylist
					if(countrylist.indexOf(entity.name)==-1)
						countrylist.push(entity.name);//.toLowerCase().replace(/ /g,"")
				}
			/////////////////////////////////
			//CALCULATION OF COLORING VALUE//
			/////////////////////////////////
			if (rate <= highrate && rate > (halfrate))
				levelcolor = colorhigh;
			else if (rate <= (halfrate) && rate > (quatrate)) 
				levelcolor = color1;
			else if (rate <= (quatrate) && rate > (oktarate))
				levelcolor = color2;
			else if (rate <= (oktarate) && rate > (oktarate / 2))
				levelcolor = color3;
			else if (rate <= (oktarate / 2) && rate >= (lowrate))
				levelcolor = colorlow;
			makeProperty(entity, Cesium.Color.fromCssColorString(levelcolor),rate);
		}
		setTimeout(function () {Loading(false);}, geojsonentities.length * 2);
	}
	
	var BoundariesArray = new Array
	var BoundariesWidth = 1;
	G3DMAP.prototype.SetBoundaries = function(Width){
		//change boundaries default value
		BoundariesWidth = Width;
		//change boundaries width
		var viewer = this.viewer;
		if(geojsonentities.length>0){
			//reset
			G3DMAP.ClearBoundaries();
			for (var i = 0; i < geojsonentities.length; i++) {
				var entity = geojsonentities[i];
				G3DMAP.Boundaries(entity,i,Width);
			}
		}
	}
	G3DMAP.prototype.SetBoundariesWidth = function(Width){
		BoundariesWidth += Width;
		var viewer = this.viewer;
		if(geojsonentities.length>0){
			//reset
			G3DMAP.ClearBoundaries();
			for (var i = 0; i < geojsonentities.length; i++) {
				var entity = geojsonentities[i];
				G3DMAP.Boundaries(entity,i,BoundariesWidth);
			}
		}
	}
	//Create Bigger Boundaries Polyline
	G3DMAP.prototype.Boundaries = function(entity,i,bscale){
		var entityposition = entity.polygon.hierarchy['_value'].positions;
		for(var j=0;j<entityposition.length;j++){
			if(entityposition[j].z>0)
				entityposition[j].z += 500;
			else
				entityposition[j].z -= 500;
		}
				var polyline = new Cesium.PolylineGraphics();
				polyline.show = new Cesium.ConstantProperty(true);
				polyline.positions = entityposition;
				polyline.width = new Cesium.ConstantProperty(bscale);
				polyline.material = Cesium.Color.BLACK;
				polyline.followSurface = new Cesium.ConstantProperty(false);
				polyline.colorsPerVertex = new Cesium.ConstantProperty(true);
				polyline.appearance = new Cesium.PolylineColorAppearance({
					translucent : false
				});
				var entityline = new Cesium.Entity(i);
				entityline.polyline = polyline;
				BoundariesArray.push(this.viewer.entities.add(entityline));
			}						
	G3DMAP.prototype.ClearBoundaries = function(){
		for (var i = 0; i < BoundariesArray.length; i++) {
			this.viewer.entities.remove(BoundariesArray[i]);
		}
	}	
	G3DMAP.prototype.SetAlpha = function(Alpha){
/* 		for (var i = 0; i < geojsonentities.length; i++) {
			var entity = geojsonentities[i];
			if(entity.name=='China'){
				var currcolor = entity.polygon.material;
				alert(Cesium.Color.clone(currcolor).toString());
				entity.polygon.material = currcolor.withAlpha(Alpha);
			}
		} */
	}
	
	//reset
	G3DMAP.prototype.removeall = function() {
		//remove all entities
		this.viewer.entities.removeAll();
		//reset RankMark and flags
		this.FlagandNames = new Array();
		this.RankMark = new Array();
	}
	
	G3DMAP.prototype.removeFlagandRank = function() {
		for(var i=0;i<this.FlagandNames.length;i++){
			this.viewer.entities.remove(this.FlagandNames[i]);
		}
		for(var i=0;i<this.RankMark.length;i++){
			this.viewer.entities.remove(this.RankMark[i]);
		}
		this.FlagandNames = new Array();
		this.RankMark = new Array();
	}
		
	//MOUSE INPUT LISTENER
	// Mouse over the globe to see the cartographic position
	var latlon = parent.document.getElementById('cesium-latlon-text');
	var pickedObjects;
	var cartesian;
	var lat , lon , longitudeString , latitudeString, altString;
	var selectedentity;
	G3DMAP.prototype.SetHandler = function(){
		var viewer = this.viewer;
		var ellipsoid = this.ellipsoid;
		// Move the primitive that the mouse is over to the top.
		var handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas);
		handler.setInputAction(function (movement) {
			//LATLON LISTENER
			CalculateLatLon(movement);
			// get an array of all primitives at the mouse position
			pickedObjects = viewer.scene.pick(movement.endPosition);
			if (Cesium.defined(pickedObjects)) {
				selectedentity = pickedObjects.id;
				try {
					if (selectedentity.name) {
						latlon.textContent += selectedentity.name;
						G3DMAP.tooltip.showAt(movement.endPosition,selectedentity.name+"<br/>"+G3DMAP.selectingtable+" : "+GetValue(selectedentity.name, G3DMAP.selectingtable));
					}
				}
				catch (e) { }
			}
			else {
				selectedentity = null;
				G3DMAP.tooltip.setVisible(false);
			}
		}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
		
		handler.setInputAction(function(movement) {
			if(selectedentity){
				if(selectedentity.name!=undefined)
					DialogMAPpositionextra(viewer,selectedentity.name.toLowerCase().replace(/ /g,""),2,2000000);
			}
			else{
				DialogMAPposition(viewer,this.G3DMAP.TEMPLATEMODE,2);//'defaultz'
			}
		}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
		
		handler.setInputAction(function(movement) {
			if(selectedentity && selectedentity.name!="undefined" && selectedentity.name!=undefined){
				if(G3DMAP.TEMPLATEMODE=="countries"){
					openDialog(selectedentity.name);
					//custombillboard(movement.endPosition);
					//DrawPie();
				}
			}
			else{
				
			}
			//moving floatlabel
			if(movingfloatlabel==true){
				var Title = layerdialog.document.getElementById('TitleText').value;
				G3DMAP.setTitle(Title,layerdialog.document.getElementById('TitleSize').value,layerdialog.document.getElementById('TitleFont').value,
				lon,lat);
				//after click
				layerdialog.document.getElementById('11o').src = '../../images/openbtn1.png';
				layerdialog.document.getElementById('11c').src = '../../images/closebtn.png';
				G3DMAP.DisableMovingFloatLabel();
			}
			//reset gallery path
			//if(this.level>1)
				document.getElementById("dialogframe").contentWindow.gallerypath = "../../images/worldheritage/";
		}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
		
		handler.setInputAction(function(movement) {
				DialogMAPposition(viewer,'defaultz',2);
		}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		
		//Close Dialog when window size is changed listener
		// $(window).resize(function(){
		//	closeDialog();
		//}); 
		function CalculateLatLon(movement){
			cartesian = viewer.camera.pickEllipsoid(movement.endPosition, this.ellipsoid);
			if (cartesian) {
				var cartographic = ellipsoid.cartesianToCartographic(cartesian);
				longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
				latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
				if(G3DMAP.is2DMODE)
					altString = parseInt((viewer.camera.frustum.right - viewer.camera.frustum.left)*0.5)+"";
				else
					altString = parseInt(ellipsoid.cartesianToCartographic(viewer.camera.position).height)+"";
				lon = Cesium.Math.toDegrees(cartographic.longitude);
				lat = Cesium.Math.toDegrees(cartographic.latitude);
				
				if (latlon) {
					latlon.textContent = ' | lat: ' + latitudeString + ' | lon: ' + longitudeString  + ' | alt: ' + altString + ' |  ';
					latlon.setAttribute('style', 'color:#ffffff;');
				}
				//floatlabel.position = cartesian;
			}
			else {
				latlon.textContent = 'Off globe';
				latlon.setAttribute('style', 'color:#ff0000;');
			}
		}
	}
	
	//MOVEABLE TITLE
	var floatlabel,floatlabel1,floatlabel2;
	var movingfloatlabel = false;
	var layerdialog = parent.document.getElementById('floatdialog').contentWindow;
	//default
	var fontsize = 30;
	var fontstyle = 'MicrofostYahei';
	G3DMAP.prototype.setTitle = function(Title,FontSize,FontType,lon,lat) {
		G3DMAP.removeTitle();
		floatlabel = this.viewer.entities.add({
			id : "FloatLabel",
			name : Title,
			position : Cesium.Cartesian3.fromDegrees(lon,lat),
			label : {
				text: Title,
				show : true,
				horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
				verticalOrigin : Cesium.VerticalOrigin.TOP,
				font : 'bold '+FontSize+'px/'+FontSize/2+'px '+FontType+',sans-serif',
				fillColor : Cesium.Color.BLACK,
				eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0,-10))
			},
		});
		var objToday = new Date(),
                weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                dayOfWeek = weekday[objToday.getDay()],
                domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
                dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
                months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear(),
                curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
                curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
                curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
                curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
		var today = /*curHour + ":" + curMinute + "." + curSeconds + curMeridiem +" " +*/  dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
		floatlabel1 = this.viewer.entities.add({
			name : "FloatLabel",
			position : Cesium.Cartesian3.fromDegrees(75,-80),
			label : {
				text: today,
				show : true,
				horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
				verticalOrigin : Cesium.VerticalOrigin.TOP,
				font : 'bold 20px/20px '+FontType+',sans-serif',
				fillColor : Cesium.Color.BLACK,
				eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -100))
			},
		});
		floatlabel2 = this.viewer.entities.add({
			name : "FloatLabel",
			position : Cesium.Cartesian3.fromDegrees(75,-84),
			label : {
				text: "Powered by G3DMAPTOOLS",
				show : true,
				horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
				verticalOrigin : Cesium.VerticalOrigin.TOP,
				font : 'bold 20px/20px '+FontType+',sans-serif',
				fillColor : Cesium.Color.BLACK,
				eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -100))
			},
		});
	}
	G3DMAP.prototype.removeTitle = function() {
		if(floatlabel){
			this.viewer.entities.remove(floatlabel);
			this.viewer.entities.remove(floatlabel1);
			this.viewer.entities.remove(floatlabel2);
			parent.captureTEXT=false;
		}
	}
	G3DMAP.prototype.EnableMovingFloatLabel = function(){
		//change default value of font
		fontsize =  layerdialog.document.getElementById('TitleSize').value;
		fontstyle = layerdialog.document.getElementById('TitleFont').value;
		layerdialog.document.getElementById('movinglabel').src = "../../images/moveable1.png";
		movingfloatlabel = true;
	}
	G3DMAP.prototype.DisableMovingFloatLabel = function(){
		layerdialog.document.getElementById('movinglabel').src = "../../images/moveable.png";
		movingfloatlabel = false;
	}
 
	//Mouse Tooltip
	function createTooltip(frameDiv) {
        var tooltip = function(frameDiv) {
            var div = document.createElement('DIV');
            div.className = "twipsy right";
            var arrow = document.createElement('DIV');
            arrow.className = "twipsy-arrow";
            div.appendChild(arrow);
            var title = document.createElement('DIV');
            title.className = "twipsy-inner";
            div.appendChild(title);
            this._div = div;
            this._title = title;
            // add to frame div and display coordinates
            frameDiv.appendChild(div);
        }
        tooltip.prototype.setVisible = function(visible) {
            this._div.style.display = visible ? 'block' : 'none';
        }
        tooltip.prototype.showAt = function(position, message) {
            if(position && message) {
                this.setVisible(true);
                this._title.innerHTML = message;
                this._div.style.left = position.x + 10 + "px";
                this._div.style.top = (position.y - this._div.clientHeight / 2) + "px";
            }
        }
        return new tooltip(frameDiv);
    }
 
	//EuropeandCarribean border
	var borderarrays = new Array();
	G3DMAP.prototype.drawEuropeAndCarribeanBorder = function(){
		G3DMAP.EuropeBorder();
		//G3DMAP.CarribeanBorder();
	}
	G3DMAP.prototype.EuropeBorder = function(){
			var borders = new Array();
				//Europe border
				borders.push(new Cesium.Cartesian3.fromDegrees(EuropeStartlon,EuropeStartlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(EuropeStartlon+EuropeAddlon,EuropeStartlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(EuropeStartlon+EuropeAddlon,EuropeStartlat-EuropeAddlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(EuropeStartlon,EuropeStartlat-EuropeAddlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(EuropeStartlon,EuropeStartlat,1000));
			var polyline = new Cesium.PolylineGraphics();
			polyline.show = new Cesium.ConstantProperty(true);
			polyline.positions = borders;
			polyline.width = new Cesium.ConstantProperty(1);
			polyline.material = Cesium.Color.BLACK;
			polyline.followSurface = new Cesium.ConstantProperty(false);
			polyline.colorsPerVertex = new Cesium.ConstantProperty(true);
			polyline.appearance = new Cesium.PolylineColorAppearance({
				translucent : false
			});
			var entityborder = new Cesium.Entity(0);
			entityborder.polyline = polyline;
			borderarrays.push(this.viewer.entities.add(entityborder));
			//printed
			var borders = new Array();
				//Europe border
				borders.push(new Cesium.Cartesian3.fromDegrees(-180,-45,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(-90,-45,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(-90,-90,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(-180,-90,10000));
			var polyline = new Cesium.PolylineGraphics();
			polyline.show = new Cesium.ConstantProperty(true);
			polyline.positions = borders;
			polyline.width = new Cesium.ConstantProperty(1);
			polyline.material = Cesium.Color.BLACK;
			polyline.followSurface = new Cesium.ConstantProperty(false);
			polyline.colorsPerVertex = new Cesium.ConstantProperty(true);
			polyline.appearance = new Cesium.PolylineColorAppearance({
				translucent : false
			});
			var entityborder = new Cesium.Entity(0);
			entityborder.polyline = polyline;
			borderarrays.push(this.viewer.entities.add(entityborder));
	}
	G3DMAP.prototype.CarribeanBorder = function(){
			var borders = new Array();
				//Europe border
				borders.push(new Cesium.Cartesian3.fromDegrees(CarribeanStartlon,CarribeanStartlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(CarribeanStartlon+CarribeanAddlon,CarribeanStartlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(CarribeanStartlon+CarribeanAddlon,CarribeanStartlat-CarribeanAddlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(CarribeanStartlon,CarribeanStartlat-CarribeanAddlat,1000));
				borders.push(new Cesium.Cartesian3.fromDegrees(CarribeanStartlon,CarribeanStartlat,1000));
			var polyline = new Cesium.PolylineGraphics();
			polyline.show = new Cesium.ConstantProperty(true);
			polyline.positions = borders;
			polyline.width = new Cesium.ConstantProperty(1);
			polyline.material = Cesium.Color.BLACK;
			polyline.followSurface = new Cesium.ConstantProperty(false);
			polyline.colorsPerVertex = new Cesium.ConstantProperty(true);
			polyline.appearance = new Cesium.PolylineColorAppearance({
				translucent : false
			});
			var entityborder = new Cesium.Entity(0);
			entityborder.polyline = polyline;
			borderarrays.push(this.viewer.entities.add(entityborder));
			//printed
			var borders = new Array();
				//Europe border
				borders.push(new Cesium.Cartesian3.fromDegrees(180,-45,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(90,-45,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(90,-90,10000));
				borders.push(new Cesium.Cartesian3.fromDegrees(180,-90,10000));
			var polyline = new Cesium.PolylineGraphics();
			polyline.show = new Cesium.ConstantProperty(true);
			polyline.positions = borders;
			polyline.width = new Cesium.ConstantProperty(1);
			polyline.material = Cesium.Color.BLACK;
			polyline.followSurface = new Cesium.ConstantProperty(false);
			polyline.colorsPerVertex = new Cesium.ConstantProperty(true);
			polyline.appearance = new Cesium.PolylineColorAppearance({
				translucent : false
			});
			var entityborder = new Cesium.Entity(0);
			entityborder.polyline = polyline;
			borderarrays.push(this.viewer.entities.add(entityborder));
	}
	G3DMAP.prototype.removeEuropeAndCaribbeanBorders = function(){
		if(borderarrays.length>0){
			for(var i=0;i<borderarrays.length;i++){
				this.viewer.entities.remove(borderarrays[i]);
			}
		}
	}
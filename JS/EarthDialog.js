/*Including some other js files*/
document.write( '<script language="javascript" src="../../js/PHPJS.js"><\/script>');
document.write( '<script language="javascript" src="../../js/DialogMapPosition.js"><\/script>');

	//Close Button
	function closeDialog(){
		parent.closeDialog();
	}
	//setting up Cesium view
	var viewer = new Cesium.Viewer('cesiumContainer', {
		mapProjection : new Cesium.WebMercatorProjection(),
		resolutionScale : 1,
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
		fullscreenButton : false,
		contextOptions:{
			webgl:{
				alpha:true,
				failIfMajorPerformanceCaveat: false
			},
			allowTextureFilterAnisotropic:false
		},
		resolutionScale : 0.2,
		targetFrameRate : 30,
		terrainProvider : false,
		imageryProvider : false
	});
	var scene = viewer.scene;
	var handler;
	var ellipsoid = scene.globe.ellipsoid;
	var collection = new Cesium.PrimitiveCollection();
	var billboards = new Cesium.BillboardCollection();
	
	//lock camera controls
	scene.screenSpaceCameraController.enableRotate = false;
	scene.screenSpaceCameraController.enableTilt = false;
	scene.screenSpaceCameraController.enableTranslate = false; 
	scene.screenSpaceCameraController.enableZoom = false; 
	//scene.screenSpaceCameraController.minimumZoomDistance = 40000000;
	//scene.screenSpaceCameraController.maximumZoomDistance = 140000000;
	//scene.skyAtmosphere.show = false;
	
	//remove background
	//scene.backgroundColor = Cesium.Color.TRANSPARENT;
	//scene.globe.baseColor = Cesium.Color.TRANSPARENT;
	scene.globe.show = false;
	scene.backgroundColor = new Cesium.Color(0, 0, 0, 0);
	scene.globe.enableLighting = false; 
	scene.skyBox = scene.skyBox && scene.skyBox.destroy();
	scene.sun = scene.sun && scene.sun.destroy();
	scene.moon = scene.moon && scene.moon.destroy();
	scene.sunBloom = false;
	scene.imageryLayer = scene.imageryLayer && scene.imageryLayer.destroy();

	var countryname = 'china';
	var level = 0;
	var entities ;
	var gallerypath = "../../images/worldheritage/";
	 
	//OnSelect Highlight
	var preventity;
	function selectingentity(){
		if(preventity != selectedentity){
			if(preventity)
				makeProperty(preventity, Cesium.Color.YELLOW.withAlpha(0.5));
			if(prevbill)
				prevbill.ellipse.material = Cesium.Color.RED;
			selectedentity.polygon.material = new Cesium.ColorMaterialProperty(Cesium.Color.RED.withAlpha(0.5));
			preventity = selectedentity;
			document.getElementById('name').innerHTML  = selectedentity.name.charAt(0).toUpperCase() + selectedentity.name.slice(1);
		}
	}
	
	//OnSelect Billboard
	var prevbill;
	function selectingbillboard(){
		if(prevbill != selectedentity){
			if(preventity)
				makeProperty(preventity, Cesium.Color.YELLOW.withAlpha(0.5));
			if(prevbill)
				prevbill.ellipse.material = Cesium.Color.RED;
			selectedentity.ellipse.material = Cesium.Color.WHITE;
			prevbill = selectedentity;
			document.getElementById('name').innerHTML  = selectedentity.id;	
		}
	}

	
	function setName(name){
		//RUN PHP FUNCTION without js parameter : $x = "<?php select();?>";document.getElementById('describe').innerHTML  = $x;
		//after open dialog level always be 1
		level = 1;
		//CHANGE HTML
	    document.getElementById('flag').src = "../../images/flag/" + name + ".png";
	    document.getElementById('name').innerHTML  = name;
		countryname = name.toLowerCase();//;//lowercase
		//alert(countryname);
		//PHP function
		if(parent.level == 0)
			RequestInfo("../PHPSQL/sql.php?cname="+countryname);
		else{
			RequestInfo("../PHPSQL/sql.php?conname="+countryname);
		}
		parent.document.getElementById("loadingIndicator").style.display="none";//hide loading indicator directly
		//reset
		viewer.dataSources.removeAll(true);
		//load geojson
		LoadDialogJSON(countryname.replace(/ /g,""),true);
	}
	
	//Adding Chartjs component
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var barChartData = {
			labels : ["Population","Area","GDP"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,0.8)",
					highlightFill : "rgba(151,187,205,0.75)",
					highlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
		}
	function addchart(){
		//RENDER ONE BY ONE at the begginning 
		$("#prevchart").trigger( "click" );
		new Chart(document.getElementById("chartcanvas").getContext("2d")).Line(barChartData, {
			responsive : true,
			maintainAspectRatio: false,
			bezierCurve: true
		});
		//Give amount of time to render others
		setTimeout(function(){
			$("#prevchart").trigger( "click" );
			new Chart(document.getElementById("chartcanvasline").getContext("2d")).Bar(barChartData, {
				responsive : true,
				maintainAspectRatio: false,
				barShowStroke: false
			});
		},1500);
	}
	function galleryimage($imgurl){
		var galleryparentsmall = document.getElementById("items--small");
		var galleryparentbig = document.getElementById("items--big");
		
			//<li class="item">
			//<a href="#">
			//<img src="images/NaturalEarth2-s.png" alt="" /></a></li>				
			var imgli = document.createElement('li');
			imgli.setAttribute('class','item');
			var imga  = document.createElement('a');
			imga.setAttribute('href','#');
			var imgimg  = document.createElement('img');
			imgimg.setAttribute('src',$imgurl);
			imgimg.setAttribute('height','80px');
			imga.appendChild(imgimg);
			imgli.appendChild(imga);
			galleryparentsmall.appendChild(imgli);
			
			//<li class="item--big">
			//<a href="#">
			//<figure>
			//<img src="images/NaturalEarth2.png" alt="" />
			//<figcaption class="img-caption">Caption</figcaption></figure></a></li>				
			var imgli = document.createElement('li');
			imgli.setAttribute('class','item--big');
			var imga  = document.createElement('a');
			imga.setAttribute('href','#');
			var imgfigure  = document.createElement('figure');
			var imgfigcaption  = document.createElement('figcaption');
			imgfigcaption.setAttribute('class','img-caption');
			imgfigcaption.setAttribute('innerHTML','Caption');
			var imgimg  = document.createElement('img');
			imgimg.setAttribute('src',$imgurl);
			imgimg.setAttribute('height','200px');
			imgfigure.appendChild(imgimg);
			imgfigure.appendChild(imgfigcaption);
			imga.appendChild(imgfigure);
			imgli.appendChild(imga);
			galleryparentbig.appendChild(imgli);
		
	}
	function addgallery(){
		var galleryparentsmall = document.getElementById("items--small");
		var galleryparentbig = document.getElementById("items--big");
			$.ajax({
				url:gallerypath,
				type:'HEAD',
				success: function()
				{
					if(galleryparentsmall){
						while (galleryparentsmall.hasChildNodes()) {
							galleryparentsmall.removeChild(galleryparentsmall.lastChild);
						}
						while (galleryparentbig.hasChildNodes()) {
							galleryparentbig.removeChild(galleryparentbig.lastChild);
						}
					}
					//alert(gallerypath);
					RequestExecute("../PHPSQL/sql_gallery.php?dir="+gallerypath);
				},
				error: function()
				{
					if(galleryparentsmall){
						while (galleryparentsmall.hasChildNodes()) {
							galleryparentsmall.removeChild(galleryparentsmall.lastChild);
						}
						while (galleryparentbig.hasChildNodes()) {
							galleryparentbig.removeChild(galleryparentbig.lastChild);
						}
						galleryimage('../../images/NaturalEarth2-s.png');
					}
				}
			});
		try{
			$( "#icongrid" ).trigger( "click" );
		}catch(e){}
	}
	function LoadDialogJSON(name,clear){
		$.ajax({
				url:'../../Datasource/'+name+'.topojson',
				type:'HEAD',
				success: function()
				{
					//file exists
					//success to load TOPOJSON
					level++;
					//update gallerypath
					if(name!='continent'&&name!='countries'){
						name = name.charAt(0).toUpperCase() + name.slice(1);
						var names = name;
						if(parent.countrymode==true){
							names = parent.getcontinent(name)+"/"+name;
						}
						gallerypath = gallerypath + names ;// +"/"
						gallerypathtemp = gallerypath;
					}else
						removeall();
					//Clear all polygon on scene
					if(clear)
						viewer.dataSources.removeAll(true);
					var datasource = new Cesium.GeoJsonDataSource();
					datasource.load('../../Datasource/'+name+'.topojson', {
						  stroke: Cesium.Color.BLACK,
						  strokeWidth: 3
						}).then(
						function() {
							var entities = datasource.entities.values;
							for (var i = 0; i < entities.length; i++) {
								var entity = entities[i];
								makeProperty(entity, Cesium.Color.YELLOW.withAlpha(0.5));
							}
						});
					viewer.dataSources.add(datasource);
				},
				error: function()
				{
					//file not exists
					//fail to load TOPOJSON
					level = 0;
					//update gallerypath
					gallerypath = "../../images/worldheritage/";
					//Clear all polygon on scene
					if(clear)
						viewer.dataSources.removeAll(true);
					var datasource = new Cesium.GeoJsonDataSource();
					datasource.load('../../Datasource/continent.topojson', {
						  stroke: Cesium.Color.BLACK,
						  strokeWidth: 3
						}).then(
						function() {
							var entities = datasource.entities.values;
							for (var i = 0; i < entities.length; i++) {
								var entity = entities[i];
								makeProperty(entity, Cesium.Color.YELLOW.withAlpha(0.5));
							}
						});
					viewer.dataSources.add(datasource);
				}
		});
		//WorldHeritage
		setTimeout(function(){
			RequestExecute("../PHPSQL/sql_billboard.php?cname_bb="+name.charAt(0).toUpperCase() + name.slice(1));
		},1000); 
		//Moving camera inside dialog
		DialogMAPposition(viewer,name,0.0);	
	}
	
	//PICKER CALLBACK
	var pickColor = Cesium.Color.RED.withAlpha(0.5);
	function makeProperty(entity, color) {
		var colorProperty = new Cesium.CallbackProperty(function(time, result) {
			if (selectedentity==entity) {
				return pickColor.clone(result);
			}
			return color.clone(result);
		}, false);
		entity.polygon.material = new Cesium.ColorMaterialProperty(colorProperty);
		entity.polygon.outline = true;
		entity.polygon.outline.Width = 10.0;//?
		entity.polygon.outlineColor = Cesium.Color.BLACK;
	}
	
	//initialize floating label
	var floatlabel = viewer.entities.add({
        label : {
            show : false,
			horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
			verticalOrigin : Cesium.VerticalOrigin.TOP,
			font : '18px sans-serif',
			fillColor : Cesium.Color.WHITE
        }
    });
	function removeall(){
		//remove all include polygon and billboard
		viewer.entities.removeAll();
		viewer.dataSources.removeAll(true);
		//re-add floatlabel
		/*floatlabel = viewer.entities.add({
			label : {
				show : false,
				horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
				verticalOrigin : Cesium.VerticalOrigin.TOP,
				font : '18px sans-serif',
				fillColor : Cesium.Color.WHITE
			}
		});*/
	}	
		
		
	var gallerypathtemp;
/*MOUSE INPUT LISTENER*/
	// Mouse over the globe to see the cartographic position
	var selectedentity;
	var pickedObjects;
	// Move the primitive that the mouse is over to the top.
	handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
	handler.setInputAction(function(movement) {
		var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
        if (cartesian) {
			floatlabel.label.text = '';
			floatlabel.position = cartesian;
			floatlabel.label.show = true;
		}
		// get an array of all primitives at the mouse position
		pickedObjects = scene.pick(movement.endPosition);
		if (Cesium.defined(pickedObjects)) {
			//for (var i = 0; i < pickedObjects.length; ++i) {
				selectedentity = pickedObjects.id;
				floatlabel.label.text = ' ( ' + selectedentity.name + ' ) ';
			//}
		}
		else{
			selectedentity = null; //cause ERROR?
		}
	}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

	handler.setInputAction(function(movement) {
		if(selectedentity){
			countryname = selectedentity.name.toLowerCase().replace(/ /,"");
			document.getElementById('name').innerHTML  = selectedentity.name.charAt(0).toUpperCase() + selectedentity.name.slice(1);
			LoadDialogJSON(selectedentity.name.toLowerCase().replace(/ /,""),true);
		}
		$( "#mainslidemenu" ).trigger( "click" );
	}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

	handler.setInputAction(function(movement) {
		if(selectedentity){
			if(selectedentity.name=="point"){//Click billboard
				//alert(selectedentity.id);
					//update gallerypath
					gallerypath = gallerypathtemp + selectedentity.id + "/";
				selectingbillboard();
				RequestExecute("../PHPSQL/sql_billboard.php?worldheritagename="+selectedentity.id);
			}
			else{
				if(level>2)//prevent happend double countryname on level country
					//update gallerypath
					gallerypath = gallerypathtemp + selectedentity.name.charAt(0).toUpperCase() + selectedentity.name.slice(1) + "/";
				selectingentity();
				RequestInfo("../PHPSQL/sql.php?conname="+selectedentity.name.charAt(0).toUpperCase() + selectedentity.name.slice(1));
			}
		}
		//alert(gallerypath);
		//back to main info 
		$( "#mainslidemenu" ).trigger( "click" );
	}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	
	handler.setInputAction(function(movement) {
		setTimeout(function(){ 
			DialogMAPposition(viewer,countryname,15);
		},1000);
	}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
	


	/*************/
	/*SAVE as Image*/
	/*************/
	function resizeCanvas(){
		var canvasElement = document.getElementById('mainCanvas');
		//canvasElement.setAttribute('style','width:4961px;height:3508px;overflow:scroll;'); //300dpi
		canvasElement.setAttribute('style','width:3308px;height:2339px;overflow:scroll;'); //200dpi
		//canvasElement.setAttribute('style','width:1191px;height:842px;overflow:scroll;'); //72dpi
		//canvasElement.setAttribute('style','width:3800px;height:1900px;overflow:scroll;'); //72dpi
	}
	function resizeCanvas0(width,height){
		var canvasElement = document.getElementById('mainCanvas');
		canvasElement.setAttribute('style','width:'+width+'px;height:'+height+'px;overflow:hidden;');
	}
	function resizeCanvas1(){
		var canvasElement = document.getElementById('mainCanvas');
		canvasElement.setAttribute('style','width:100%;height:100%;overflow:hidden;');
	}
	function resizeCanvas2(){
		var canvasElement = document.getElementById('mainCanvas');
		var heightless = (parent.document.documentElement.clientHeight - 600)/2;
		var widthless = (parent.document.documentElement.clientWidth - 1200)/2;
		heightless = heightless>0?heightless:0;
		widthless = widthless>0?widthless:0;
		canvasElement.setAttribute('style','width:1200px;height:600px;overflow:hidden;margin-top:'+heightless+'px;margin-left:'+widthless+'px;');
	}
	
	function Screenshot(viewer){
		//viewer.render();
		window.open(viewer.canvas.toDataURL("image/png"));
	}
	
	//for animation layer
	var colormodelayer;
	
	//TO BE CAPTURED
	var captureLOGO = true;
	var captureTEXT = false;
	var captureLEGEND = false; //draw legend with canvas
	var newLOGO = "";
	
	//Europe capture area
	var Europecapturescale = 6;//2 4 8 12 14?
	var EuropeStartlat = 65;
	var EuropeStartlon = -11;
	var EuropeAddlat = 27;
	var EuropeAddlon = 54;
	//Carribean capture area
	var Carribeancapturescale = 5;//2 4 8 12 14?
	var CarribeanStartlat = 26.46;
	var CarribeanStartlon = -91;
	var CarribeanAddlat = 17;
	var CarribeanAddlon = 34;
	var capturescaleforflag = 8;//default as 8
	
	var Legendscale = 0;
	
	AutoCapture = function(scalevalue,withEurope){
		//MAP TITLE
		if(floatlabel){
			//SET TIMER FOR FIXING NOTRENDERED TEXT
			setTimeout(function(){
				//font size for different scale
				var fsize = scalevalue/1.5;
				if(fsize<=0) fsize = 1;
				floatlabel.label.font = 'bold '+(parent.fontsize*(fsize))+'px/'+(parent.fontsize*(fsize))/2+'px '+parent.fontstyle+',sans-serif';
				floatlabel1.label.font = 'bold '+(20*(fsize))+'px/20px '+parent.fontstyle+',sans-serif';
				floatlabel2.label.font = 'bold '+(20*(fsize))+'px/20px '+parent.fontstyle+',sans-serif';
			},time*3);
		}
		
		//hide other component dialog
		//closeDialogTitle();
		closeRankDialog();
		if(G3DMAP.isLEGENDMODE)
			captureLEGEND = true;
		closeLegend();
		closeFloatDialogbox()
		
		//Loading value
		var LoadValue = 0;
		var ValueRate = 0;
		
		//legend scale
		Legendscale = scalevalue;
		
		//World Capture area
		var capturescale = scalevalue;//2 4 8 12 14?
		capturescaleforflag = capturescale;
		var Worldcapturescale = scalevalue;
		var maxalt = 40000000;//33000000;
		var time = 4000; // >4seconds
		var maxlon = 360; //width
		var maxlat = 180; //height
		var defaultlon = -180;
		var defaultlat = 90;
		var lon = defaultlon;
		var lat = defaultlat;
		var i = 0;
		var j = 0;
		var lonless = maxlon /capturescale;
		var latless = maxlat /capturescale;
		var alt = maxalt/capturescale;//(maxalt/(capturescale))+(maxalt/(capturescale*4.7));//1.7jt
			
		//CHANGE SECTOR if not world map
	if(G3DMAP.TEMPLATEMODE!="countries"&&G3DMAP.TEMPLATEMODE!="continent"){
		maxlat = sectorlat;//+((maxlon-sectorlon)/40);
		if(sectorlon>sectorlat*2)
			maxlat = sectorlat+((maxlon-sectorlon)/40);
		maxlon = maxlat*2;
		defaultlon = sectorlxtemp-((maxlon-sectorlon)/2);
		defaultlat = sectorhytemp;//+((maxlon-sectorlon)/2);
		if(sectorlon>sectorlat*2)
			defaultlat = sectorhytemp+((maxlon-sectorlon)/2);
		//alert(maxlon+" "+maxlat+" "+defaultlon+" "+defaultlat);
		lon = defaultlon;
		lat = defaultlat;
		i = 0;
		j = 0;
		lonless = maxlon /capturescale;
		latless = maxlat /capturescale;
		alt = alt / (360/maxlon);
	}
	
	try{
		//hide topmenu and bottom
		document.getElementById('menu').setAttribute('style','-webkit-transition : all 0.5s ease; top:-100px;');
		document.getElementById('BottomPanel').setAttribute('style','-webkit-transition : all 0.5s ease; bottom:-100px;');
		document.getElementById('LOGO').setAttribute('style','-webkit-transition : all 0.5s ease; display:block; margin-bottom:5px;');
	}catch(e){}
	
		//for 2D VIEW MODE
		if(G3DMAP.is2DMODE){
			//Capture Process
			$('#CENTERLOADING').css('display','block');
			
			//Begin Capture Process
			Capture(withEurope);
			// CaptureEurope();
		}
		// for 3D VIEW MODE
		else{
			processTitle();
			var width = 800;
			var height = 440;
			resizeCanvas0(width,height);
			enablerotate();
			setTimeout(function(){
				var gifimages = [];
				var canvasElement = G3DMAP.viewer.canvas;
				Loading(true);
				var totaldegree = 27;
				var delay = 4000;
				for(var i=0;i<totaldegree;i++){
					setTimeout(function(){
						var imgdata = canvasElement.toDataURL("image/png");
						//$('body').append('<img id="newImage'+i+'" src="'+imgdata+'"></img>');
						gifimages.push(imgdata);
					},delay*i);
				}
				setTimeout(function(){
					gifshot.createGIF({
						'numWorkers': 5,
						// Desired width of the image
						'gifWidth': width,
						// Desired height of the image
						'gifHeight': height,
						'images': gifimages,
						'numFrames': 1,
						'interval': 0.1
					},function(obj) {
						if(!obj.error) {
							var image = obj.image,
							animatedImage = document.createElement('img');
							animatedImage.src = image;
							document.body.appendChild(animatedImage);
							Loading(false); 
							setTimeout(function(){
								var confirmation = confirm("Save Generated 3D MAP as file? \nNote: If using Chrome you can use rightclick > save as to prefent browser crashed!");
								if(confirmation){
									//exportURLasfile(image,"G3DMAPTOOL");
									document.location.href=image;
								}
							},2000);
						}
					});	
							//removing cesium
							$('#menu').remove();
							$('#LOGO').remove();
							$('#contents').remove();
							$('#meny').remove();
							$('#BottomPanel').remove();
							$('.meny-arrow').remove();
							$('body').css('overflow','scroll');
				},(totaldegree+2)*delay);
			},2000);
			
			function processTitle(){
				var titleentity = G3DMAP.viewer.entities.getById('FloatLabel');
				if(colormodelayer){
					//document.location.href = colormodelayer;
					G3DMAP.viewer.entities.removeAll();
					G3DMAP.viewer.dataSources.removeAll(true);
					//color bg
					var ColorLayer = new Cesium.ImageryLayer(new Cesium.SingleTileImageryProvider({url : colormodelayer,rectangle : Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0)})); 
					G3DMAP.viewer.imageryLayers.add(ColorLayer);
				}
				if(titleentity){
					G3DMAP.viewer.entities.remove(titleentity);
					var txtcanvas = document.createElement('canvas');
					//txtcanvas.setAttribute('display:none');
					document.body.appendChild(txtcanvas);
					var context = txtcanvas.getContext('2d');
					context.save();
					var x = 0;//Math.floor(txtcanvas.width / 4);
					var y = Math.floor(txtcanvas.height / 2);
					context.translate(x, y);
					var dx = Math.floor(txtcanvas.width * 0.25) - 10;
					var dy = Math.floor(txtcanvas.height * 0.025);
					context.textAlign = "left";
					var fontSize = Math.floor(txtcanvas.height / 15);
					context.font = "bold "+fontSize + "pt Helvetica";
					context.fillText(titleentity.name, dx, dy);
					context.restore();
					var blob = txtcanvas.toDataURL("image/png");
					//document.location.href=blob;
					var TitleLayer = new Cesium.ImageryLayer(new Cesium.SingleTileImageryProvider({url : blob,rectangle : Cesium.Rectangle.fromDegrees(-180.0, -60.0, 180.0, 60.0)})); 
					G3DMAP.viewer.imageryLayers.add(TitleLayer);
					document.body.removeChild(txtcanvas);
				}
			}
		}
 
		var imagesArrays = new Array(); // FULLIMAGE
		var EuropeimagesArrays = new Array(); // EUROPE IMAGE
		var CarribeanimagesArrays = new Array(); // Carribean IMAGE
		var withEurope = false;
		var withCarribean = false;
		
		function Capture(europe){
			resizeCanvas2();
			setTimeout(function(){
				imagesArrays = new Array();
				if(i==0){
					lat = defaultlat;
					lat = lat - (latless/2);
				}
				withEurope = europe;
				withCarribean = europe;
				loop1(imagesArrays);
				loop2(imagesArrays);
				i++;
			},1000);
		}
		
		function CaptureEurope(){
			//resize MAP
			capturescaleforflag = 10;//Europecapturescale*4;//55;
			resizeFlagandName(0.5);//2
			G3DMAP.SetBoundaries(6);
			//Begin
			setTimeout(function(){
				resizeCanvas2();
				//edit default value
				capturescale = Europecapturescale;
				maxlon = EuropeAddlon;
				maxlat = EuropeAddlat;
				defaultlon = EuropeStartlon;
				defaultlat = EuropeStartlat;
				lon = defaultlon;
				lat = defaultlat;
				i = 0;
				j = 0;
				lonless = maxlon /capturescale;
				latless = maxlat /capturescale;
				alt = maxalt/capturescale;//(maxalt/capturescale)+(maxalt/(capturescale*4.7));//1.7jt
				alt = alt / (360/maxlon);
				EuropeimagesArrays = new Array();
				if(i==0){
					lat = defaultlat;
					lat = lat - (latless/2);
				}
				loop1(EuropeimagesArrays);
				loop2(EuropeimagesArrays);
				i++;
			},1000);
		}
		
		function CaptureCarribean(){
			//resize MAP
			capturescaleforflag = 55;
			resizeFlagandNameBiggerLabelsize(0.2);//2
			G3DMAP.SetBoundaries(6);
			//Begin
			setTimeout(function(){
				resizeCanvas2();
				//edit default value
				capturescale = Carribeancapturescale;
				maxlon = CarribeanAddlon;
				maxlat = CarribeanAddlat;
				defaultlon = CarribeanStartlon;
				defaultlat = CarribeanStartlat;
				lon = defaultlon;
				lat = defaultlat;
				i = 0;
				j = 0;
				lonless = maxlon /capturescale;
				latless = maxlat /capturescale;
				alt = maxalt/capturescale;//(maxalt/capturescale)+(maxalt/(capturescale*4.7));//1.7jt
				alt = alt / (360/maxlon);
				CarribeanimagesArrays = new Array();
				if(i==0){
					lat = defaultlat;
					lat = lat - (latless/2);
				}
				loop1(CarribeanimagesArrays);
				loop2(CarribeanimagesArrays);
				i++;
			},1000);
		}
 
		//FIRST LOOP FOR EACH COLUMN
		function loop1(Arrays){
			setTimeout(function(){
				i++;
				lat = lat - latless;
				if(i<=capturescale){
					loop1(Arrays);
					loop2(Arrays);
				}
				else{
					setTimeout(function(){ 
						/*
						* Finishing the last canvas
						*/
						if(i>capturescale){
							//DisplayLargeImage();
							resizeCanvas1();
							SetMAPposition(G3DMAP.viewer,0,0,33000000,1);
							i==0;
							
							//withEurope = false;
							if(withEurope==true){
								CaptureEurope();
								withEurope = false; //already begin europe capture
							}
							/*else if(withCarribean==true){
								CaptureCarribean();
								withCarribean = false; //already begin Carribean capture
							}*/
							else{
								//removing cesium
								$('#menu').remove();
								$('#LOGO').remove();
								$('#contents').remove();
								$('#meny').remove();
								$('#BottomPanel').remove();
								$('.meny-arrow').remove();
								//1200px by 600px
								$('body').css('overflow','scroll');
								//$('#CENTERLOADING').css('display','none'); 
								//document.body.innerHTML = "";
								document.getElementById('LoadPercentage').innerHTML = "<b>MERGING...</b>";
								
								//Join Full WORLDMAP
								if(imagesArrays.length>0){
									JoinCaptureImages('WorldMAP',imagesArrays,Worldcapturescale,2);
								}
								
								//Join Europe MAP
								if(EuropeimagesArrays.length>0){
									setTimeout(function(){
										JoinCaptureImages('EuropeMAP',EuropeimagesArrays,Europecapturescale,20);
								
										//Join Carribean MAP
										//if(CarribeanimagesArrays.length>0){
										//	setTimeout(function(){
										//		JoinCaptureImages('CarribeanMAP',CarribeanimagesArrays,Carribeancapturescale,20);
												
													//Join ALL MAP
													setTimeout(function(){
														JoinOther();
														
													},1000*capturescale);
										//	},1000*capturescale);
										//}
									},1000*capturescale);
								}
								else{
									//Join ALL MAP
									setTimeout(function(){
										JoinOther()
									},1000*capturescale);
								}
							}
						}
					},time);
				}
			},(time+4000)*(capturescale));
		}
		
		//SECOND LOOP FOR EACH ROW
		function loop2(Arrays){
			setTimeout(function(){
				if(j==0){
					lon = defaultlon;
					lon = lon + (lonless/2);
				}
				else{
					lon = lon + lonless;
				}
				//alert("lon"+lon+"lat"+lat);
				SetMAPposition(G3DMAP.viewer,lon,lat,alt,1);
				setTimeout(function(){
					if(j<capturescale){
						/*
						* every slice of canvas
						*/
							//download as image file
							//exportCanvasAsImage(G3DMAP.viewer,'mainCanvas','MAPtiles-'+i+'-'+j);
						//keep the image data to array
						var canvasElement = document.getElementById('mainCanvas');
						var imgURI = canvasElement.toDataURL("image/png", 1.0);
						Arrays.push(imgURI);
						//alert(imagesArrays.length + " - " + EuropeimagesArrays.length);
					}
					j++;
					if(j<capturescale){
						loop2(Arrays);
					}
					else{
						j = 0;
					}
				},2000);
				
				//Calculate Percentage
				if(G3DMAP.withEuropeCarribean==true){
					if(withEurope==true){
						// alert("world "+ ValueRate +" + "+ parseInt(50/(scalevalue*scalevalue)));
						ValueRate += (50/(scalevalue*scalevalue)); // /2
					}
					/* else if(withCarribean==true){
						alert("car "+ ValueRate +" + "+ parseInt(25/(scalevalue*scalevalue)));
						ValueRate += (25/(scalevalue*scalevalue)); // /2
					} */
					else{
						// alert("eur "+ ValueRate +" + "+ parseInt(25/(scalevalue*scalevalue)));
						ValueRate += (25/(Europecapturescale*Europecapturescale)); // /2
					}
				}
				else{
					ValueRate += (100/(scalevalue*scalevalue));
				}
				LoadValue = parseInt(ValueRate*1);
				document.getElementById('LoadPercentage').innerHTML = (LoadValue>=100?100:LoadValue) + " %";
				
			},(time));
		}
		
		function JoinCaptureImages(canvasname,array,cscale,borderwidth){
			$('body').append('<canvas id="'+canvasname+'"></canvas>');
			var canvasnm = document.getElementById(canvasname);
			photojoiner.join({
				'images' : array,
				'canvas' : canvasnm,
				'canvasHeight':600*cscale,
				'captureScale':cscale,
				'borderwidth':borderwidth
			});
		}
		
		function JoinOther(){
			var canvas = document.getElementById('WorldMAP');
			var context = canvas.getContext('2d');
			
			//With Europe and Carribean view
			if(G3DMAP.withEuropeCarribean==true){
				//Europe
				var canvasnm = document.getElementById('EuropeMAP');
				var imgURI = canvasnm.toDataURL("image/png");
				var scaledown = Worldcapturescale/4;
				var image = new Image();
				image.src = imgURI;
				image.onload = function () 
				{
					context.drawImage(image, 0, 0, image.width, image.height, 0, ((600*Worldcapturescale)-(600*scaledown)), (1200*scaledown),(600*scaledown)); 
					logoandlegend();
				}
				/*Carribean
				var canvasnmn = document.getElementById('CarribeanMAP');
				var imgURI = canvasnmn.toDataURL("image/png", 1.0);
				var scaledown = Worldcapturescale/4;
				var image = new Image();
				image.src = imgURI;
				context.drawImage(image, 0, 0, image.width, image.height, ((1200*Worldcapturescale)-(1200*scaledown)), ((600*Worldcapturescale)-(600*scaledown)), (1200*scaledown),(600*scaledown)); 
				*/
			}
			else{
				logoandlegend();
			}
			function logoandlegend(){
				//LOGO
				if(captureLOGO){
					var logoimage = new Image();
					//default logo
					logoimage.src="images/logo.png";
					//custom logo
					if(newLOGO!=""){
						logoimage.src = newLOGO;
					}
					logoimage.onload = function () 
					{ 
						//alert(logoimage.src+" "+logoimage.width+" "+logoimage.height);
						//LOGO
						//resizing
						var w = logoimage.width;
						var h = logoimage.height;
						//scaling with capturescale
						var scalelogo = 0;
						if(Worldcapturescale>=4)
							scalelogo = Worldcapturescale/2;
						else
							scalelogo = 1;
						var newwidth = w * (scalelogo);
						var newheight= h * (scalelogo);
						context.drawImage(logoimage, 0, 0, logoimage.width, logoimage.height,(canvas.width - newwidth -(10*(capturescale/2))),/*(10*(capturescale/2)),*/ (canvas.height - newheight -(10*(capturescale/2))),  newwidth, newheight); 
						//alert(logoimage.width+" "+logoimage.height);
						
					}
				}
				
				//Legend
				if(captureLEGEND){
					if(colormodemaxvalue==1){
						Legends(context,Legendscale/2,Legendscale*(canvas.width*0.01),canvas.height*0.5,G3DMAP.selecteddatabasename.split(',')[0],G3DMAP.selectingtable
							,colorhigh,colorlow);
					}
					else{
						Legend(context,Legendscale/2,Legendscale*(canvas.width*0.01),canvas.height*0.4,G3DMAP.selecteddatabasename.split(',')[0],G3DMAP.selectingtable
							,colorhigh,parseInt(colormodemaxvalue),color1,parseInt(colormode0value),color2,parseInt(colormode1value),color3,parseInt(colormode2value)
							,colorlow,parseInt(colormode3value),parseInt(colormodeminvalue));
					}
				}
				
				//SAVE AS IMAGE
				setTimeout(function(){
					$('#CENTERLOADING').css('display','none'); 
					var confirmation = confirm("Save Generated 2D MAP as file? \nNote: If using Chrome you can use rightclick > save as to prefent browser crashed!");
					if(confirmation){	
						exportCanvasAsImage("WorldMAP","G3DMAPTOOL");
					}
					
					//FINAL
					imagesArrays = new Array();
					EuropeimagesArrays = new Array();
					CarribeanimagesArrays = new Array();
					geojsonentities = new Array();
					G3DMAP.FlagandNames = new Array();
					G3DMAP.RankMark = new Array();
					$('#EuropeMAP').remove();
					$('#CarribeanMAP').remove();
				},1000*(capturescale+5));
			}
		}
	}
	
	function Legend(context,s,x,y,table,column,color1,value1,color2,value2,color3,value3,color4,value4,color5,value5,value6){
		DrawText(context,"Legend",x+18,y+(s*15),"bold "+s*12+"pt");
		DrawText(context,table.replace("yenwie","world"),x+18,y+(s*40),s*12+"pt");
		DrawText(context,column,x+18,y+(s*62),s*12+"pt");
		//VALUE
		DrawRectangle(context,x+18,y+(s*90),s*50,s*50,color1);
		DrawText(context,value1,x+(s*80),y+(s*95),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*130),s*50,s*40,color2);
		DrawText(context,value2,x+(s*80),y+(s*140),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*170),s*50,s*40,color3);
		DrawText(context,value3,x+(s*80),y+(s*180),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*210),s*50,s*50,color4);
		DrawText(context,value4,x+(s*80),y+(s*220),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*260),s*50,s*70,color5);
		DrawText(context,value5,x+(s*80),y+(s*270),s*12+"pt");
		DrawText(context,value6,x+(s*80),y+(s*340),s*12+"pt");
	}
	
	function Legends(context,s,x,y,table,column,color1,color2){
		DrawText(context,"Legend",x+18,y+(s*15),"bold "+s*12+"pt");
		DrawText(context,table,x+18,y+(s*40),s*12+"pt");
		DrawText(context,column,x+18,y+(s*62),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*90),s*55,s*55,color1);
		DrawText(context,column,x+(s*90),y+(s*120),s*12+"pt");
		DrawRectangle(context,x+18,y+(s*155),s*55,s*55,color2);
		DrawText(context,"not "+column,x+(s*90),y+(s*190),s*12+"pt");
	}
	
	function DrawText(context,label,x,y,f){
		f = f || "12pt";
		context.save();
		context.textAlign = "left";
		context.font = f+" Microsoft YaHei";
		context.lineWidth = 2; 
		context.strokeStyle = 'white';
		context.strokeText(label,x,y);
		context.font = f+" Microsoft YaHei";
		context.fillStyle = 'black';
		context.fillText(label,x,y);
		context.restore();
	}
	
	function DrawRectangle(context,x,y,w,h,c){
		context.save();
		context.fillStyle = c;
		context.fillRect(x,y,w,h);
		context.restore();
	}
	
	function exportCanvasAsImage(id, fileName) {
		//viewer.render();
	    var canvasElement = document.getElementById(id);
		var MIME_TYPE = "image/png";
		var imgURL = canvasElement.toDataURL(MIME_TYPE, 1.0);
		var dlLink = document.createElement('a');
		dlLink.download = fileName;
		dlLink.href = imgURL;
		dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
		document.body.appendChild(dlLink);
		dlLink.click();
		document.body.removeChild(dlLink);
	}
	
	function exportURLasfile(gifURL, fileName) {
		var dlLink = document.createElement('a');
		dlLink.download = fileName;
		dlLink.href = gifURL;
		document.body.appendChild(dlLink);
		dlLink.click();
		document.body.removeChild(dlLink);
	}
	


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
		canvasElement.setAttribute('style','width:1200px;height:600px;margin-top:'+heightless+'px;margin-left:'+widthless+'px;overflow:hidden;');
	}
	
	function Screenshot(viewer){
		//viewer.render();
		window.open(viewer.canvas.toDataURL("image/png"));
	}
	
	//TOBE CAPTURED
	var captureLOGO = true;
	var captureTEXT = false;
	var newLOGO = "";
		//Europe capture area
		var Europecapturescale = 6;//2 4 8 12 14?
		var EuropeStartlat = 65;
		var EuropeStartlon = -11;
		var EuropeAddlat = 27;
		var EuropeAddlon = 54;
		//Carribean capture area
		var Carribeancapturescale = 8;//2 4 8 12 14?
		var CarribeanStartlat = 26.46;
		var CarribeanStartlon = -91;
		var CarribeanAddlat = 17;
		var CarribeanAddlon = 34;
		
	AutoCapture = function(scalevalue,withEurope){
		
		//MAP TITLE
		if(floatlabel){
			//font size
			var fsize = scalevalue/1.5;
			if(fsize<=0) fsize = 1;
			floatlabel.label.font = 'bold '+(parent.fontsize*(fsize-1))+'px/20px '+parent.fontstyle+',sans-serif';
			floatlabel1.label.font = 'bold '+(20*(fsize))+'px/20px '+parent.fontstyle+',sans-serif';
			floatlabel2.label.font = 'bold '+(20*(fsize))+'px/20px '+parent.fontstyle+',sans-serif';
		}
		//alert(TITLEFONT);
		//hide
		//closeDialogTitle();
		
		//Loading value
		var LoadValue = 0;
		var ValueRate = 0;
			//World Capture area
			var capturescale = scalevalue;//2 4 8 12 14?
			var Worldcapturescale = scalevalue;
			var maxalt = 40000000;//33000000;
			var time = 4000; // >4seconds
			var maxlon = 360;
			var maxlat = 180;
			var defaultlon = -180;
			var defaultlat = 90;
			var lon = defaultlat;
			var lat = defaultlon;
			var i = 0;
			var j = 0;
			var lonless = maxlon /capturescale;
			var latless = maxlat /capturescale;
			var alt = maxalt/capturescale;//(maxalt/(capturescale))+(maxalt/(capturescale*4.7));//1.7jt
			
		
		//Lock hover
		GeneratingMap = true;
		//hide topmenu and bottom
		document.getElementById('menu').setAttribute('style','-webkit-transition : all 0.5s ease; top:-100px;');
		document.getElementById('BottomPanel').setAttribute('style','-webkit-transition : all 0.5s ease; bottom:-100px;');
		document.getElementById('LOGO').setAttribute('style','-webkit-transition : all 0.5s ease; display:block; margin-bottom:5px;');
		
		//for 2D VIEW MODE
		if(is2DMODE){
			//Capture Process
			$('#CENTERLOADING').css('display','block');
			
			//Begin Capture Process
			Capture(withEurope);
			// CaptureEurope();
		}
		// for 3D VIEW MODE
		else{
			var canvasElement = G3DMAP.viewer.canvas;
			var ag = new Animated_GIF({
                repeat: 0, // Don't repeat
                workerPath: 'gifcreator/Animated_GIF.worker.js'
            });
            ag.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
			
			for(var i=0;i<10;i++){
				setTimeout(function(){
					$('body').append('<img id="newImage" src="'+G3DMAP.viewer.canvas.toDataURL("image/png")+'"></img>');
					ag.addFrame(document.getElementById('newImage'));
				},500*i);
			}
			setTimeout(function(){
				ag.getBase64GIF(function(image) {
					alert(image);
					$('body').append('<img id="newCanvas1" src="'+image+'"></img>');
				});
					//removing cesium
					$('#menu').remove();
					$('#LOGO').remove();
					$('#contents').remove();
					$('#meny').remove();
					$('#BottomPanel').remove();
					$('.meny-arrow').remove();
					$('body').css('overflow','scroll');
			},6000);
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
			resizeFlagandName(4);//2
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
				alt = (maxalt/capturescale)+(maxalt/(capturescale*4.7));//1.7jt
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
			resizeFlagandName(6);//2
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
				alt = (maxalt/capturescale)+(maxalt/(capturescale*4.7));//1.7jt
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
							
							//alert(withEurope);
							//withEurope = false;
							if(withEurope==true){
								CaptureEurope();
								withEurope = false; //already begin europe capture
							}
							else if(withCarribean==true){
								CaptureCarribean();
								withCarribean = false; //already begin Carribean capture
							}
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
										JoinCaptureImages('EuropeMAP',EuropeimagesArrays,Europecapturescale,10);
								
										//Join Carribean MAP
										if(CarribeanimagesArrays.length>0){
											setTimeout(function(){
												JoinCaptureImages('CarribeanMAP',CarribeanimagesArrays,Carribeancapturescale,20);
												
													//Join ALL MAP
													setTimeout(function(){
														JoinOther()
													},1000*capturescale);
													
											},1000*capturescale);
										}
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
					},time/2);
				}
			},time*(capturescale*2));
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
				},time-1);
				
				//Calculate Percentage
				if(G3DMAP.withEuropeCarribean==true){
					if(withEurope==true)
						ValueRate += (50/(scalevalue*scalevalue)); // /2
					else
						ValueRate += (25/(Europecapturescale*Europecapturescale)); // /2
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
					context.drawImage(logoimage, 0, 0, logoimage.width, logoimage.height,(canvas.width - newwidth -(10*(capturescale/2))),(10*(capturescale/2))/*, (canvas.height - newheight -(10*(capturescale/2)))*/,  newwidth, newheight); 
				//alert(logoimage.width+" "+logoimage.height);
				}
			}
			if(G3DMAP.withEuropeCarribean==true){
				//Europe
				var canvasnm = document.getElementById('EuropeMAP');
				var imgURI = canvasnm.toDataURL("image/png", 1.0);
				var scaledown = Worldcapturescale/4;
				var image = new Image();
				image.src = imgURI;
				context.drawImage(image, 0, 0, image.width, image.height, 0, ((600*Worldcapturescale)-(600*scaledown)), (1200*scaledown),(600*scaledown)); 
				//Carribean
				var canvasnmn = document.getElementById('CarribeanMAP');
				var imgURI = canvasnmn.toDataURL("image/png", 1.0);
				var scaledown = Worldcapturescale/4;
				var image = new Image();
				image.src = imgURI;
				context.drawImage(image, 0, 0, image.width, image.height, ((1200*Worldcapturescale)-(1200*scaledown)), ((600*Worldcapturescale)-(600*scaledown)), (1200*scaledown),(600*scaledown)); 
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
			$('#CENTERLOADING').css('display','none'); 	
		}
	}
	
	function exportCanvasAsImage(viewer,id, fileName) {
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
	
	
	
	/*****************/
	/** HTML2CANVAS **/
	/*****************/
    function capture() {
		html2canvas(document.getElementById('dialogLegend')).then(function (canvas) { //document.body
			canvas.setAttribute('style','display:block;');
			document.body.appendChild(canvas);
		});
	}
	function opencapture(){
		window.open('SS.html','_self');
	}
	
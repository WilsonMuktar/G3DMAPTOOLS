	
		/**********/
		/***MENY***/
		/**********/
		// Create an instance of Meny
		var meny = Meny.create({
			menuElement: document.querySelector( '.meny' ),// The element that will be animated in from off screen
			contentsElement: document.querySelector( '.contents' ),// The contents that gets pushed aside while Meny is active
			position: Meny.getQuery().p || 'bottom',// [optional] The alignment of the menu (top/right/bottom/left)
			height: 60,// [optional] The height of the menu (when using top/bottom position)
			width: 260,// [optional] The width of the menu (when using left/right position)	
			threshold: 40,// [optional] Distance from mouse (in pixels) when menu should open
			mouse: true,// [optional] Use mouse movement to automatically open/close
			touch: false//true// [optional] Use touch swipe events to open/close
		});
		if( Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) ) {
			var contents = document.querySelector( '.contents' );
			contents.style.padding = '0px';
			contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +
			'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
		}
		//MENY modify
		function opensidepanel(){
			if(document.getElementById('contents').getAttribute("name")!="open"){
				document.body.setAttribute("style","-webkit-perspective: 800px; -webkit-perspective-origin: 0px 50%");
				document.getElementById('contents').setAttribute("style","-webkit-transform : translateX(260px) rotateY(6deg) translateY(0px); -webkit-transform-origin : 0px 50% 0px; -webkit-transition : all 0.3s ease; -webkit-transform-style : preserve-3d; box-sizing : border-box;");
				document.getElementById('contents').setAttribute("name","open");
				//userinfo
				document.getElementById('BasicInfo').setAttribute('style','left:0;-webkit-transition : all 0.3s ease;');
			}
			else{
				document.getElementById('contents').setAttribute("name","close");
				document.body.setAttribute("style","-webkit-perspective: 800px; -webkit-perspective-origin: 50% 100%");
				document.getElementById('contents').setAttribute("style","-webkit-transform : translateX(0px) rotateY(0deg) translateY(0px); -webkit-transition : all 0.3s ease;  -webkit-transform-origin : 50% 100% 0px; -webkit-transform-style : preserve-3d; box-sizing : border-box;");
				//userinfo
				document.getElementById('BasicInfo').setAttribute('style','left:-1000px;-webkit-transition : all 0.3s ease;');
			}
		}
	
		//FLAG LISTENER
		$('img.flags').click(function(){
			//alert('clicked ' + this.id.toLowerCase());
			document.getElementById("dialogframe").contentWindow.DialogMAPposition(G3DMAP.viewer,this.id.toLowerCase(),3);
			//OPEN DIALOG
			openDialog(this.id);
			//reset gallery path
			if(parent.level>1)
				document.getElementById("dialogframe").contentWindow.gallerypath = "images/worldheritage/";
		})
		
		
		/*****************************/
		/***Draggable iframe dialog***/
		/*****************************/
		bringSelectedIframeToTop(true);// Set to true to always bring the selected IFRAME to the "top" of the zIndex.
		allowDragOffScreen(true);// Set to true to allow IFRAME objects to be dragged off the screen.
		DIF_highestZIndex=4;// You may manually set this variable to define the highest zIndex used in main document
		//Dialog with 2D transparent cesium
		function openDialog(x){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$("#dialogframe").hide();
			$("#dialogframe").slideToggle("slow");
			document.getElementById("dialogframe").contentWindow.setName(x);
			document.getElementById("dialogframe").contentWindow.resize();
		}
		function closeDialog(){
			$("#dialogframe").slideUp("slow");
			//reset gallery path
			document.getElementById("dialogframe").contentWindow.gallerypath = "images/worldheritage/";
			document.getElementById("dialogframe").contentWindow.removeall();
		}
		
		//Version Dialog
		function openVersionDialogbox(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialogversionbox',parent.document).attr('src','COMPONENT/DIALOG/Dialog_version.html');
			$("#dialogversionbox").hide();
			$("#dialogversionbox").slideToggle("slow");
		}
		function closeVersionDialogbox(){
			$("#dialogversionbox").slideUp("slow");
		}
		//Help Dialog
		function openHelpDialog(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialoghelp',parent.document).attr('src','COMPONENT/DIALOG/Dialog_help.html');
			$("#dialoghelp").hide();
			$("#dialoghelp").slideToggle("slow");
		}
		function closeHelpDialog(){
			$("#dialoghelp").slideUp("slow");
		}
		//Ranking Dialog
		function openRankDialog(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialogrank',parent.document).attr('src','COMPONENT/DIALOG/Dialog_rank.php');
			$("#dialogrank").hide();
			$("#dialogrank").slideToggle("slow");
		}
		function closeRankDialog(){
			$("#dialogrank").slideUp("slow");
		}
		
		//Ranking Drag Drop
		function openDragDropDialog(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialogdragdrop',parent.document).attr('src','COMPONENT/DIALOG/Dialog_dragdrop.php?username='+global_username);
			$("#dialogdragdrop").hide();
			$("#dialogdragdrop").slideToggle("slow");
			//custom 
			closeFloatDialogbox();
		}
		function closeDragDropDialog(){
			$("#dialogdragdrop").slideUp("slow");
		}
		
		var CurrentLevel;
		function changeselectedcolor(hexColor){
			if(CurrentLevel=='High'){
				document.getElementById("floatdialog").contentWindow.HIGH(hexColor);
			}
			else if(CurrentLevel=='Low'){
				document.getElementById("floatdialog").contentWindow.LOW(hexColor);
			}
		}
		//ColorPicker Dialog
		function openColorPicker(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialogcolorpicker',parent.document).attr('src','COMPONENT/DIALOG/Dialog_colorpicker.php');
			$("#dialogcolorpicker").hide();
			$("#dialogcolorpicker").slideToggle("slow");
		}
		function closeColorPicker(){
			$("#dialogcolorpicker").slideUp("slow");
		}
		//Legend Dialog
		function openLegend(){
			G3DMAP.isLEGENDMODE = true;
			parent.document.getElementById("CENTERLOGO").style.display="none";
			if(colormodemaxvalue==1)
				$('#dialogLegend',parent.document).attr('src','COMPONENT/DIALOG/Dialog_legend_simple.php');
			else if(colormodemaxvalue==0 && colormodeminvalue==0) return;
			else
				$('#dialogLegend',parent.document).attr('src','COMPONENT/DIALOG/Dialog_legend.php');
			$("#dialogLegend").hide();
			$("#dialogLegend").slideToggle("slow");
			$("#dialogLegend").css("z-index","99");
		}
		function closeLegend(){
			G3DMAP.isLEGENDMODE = false;
			$("#dialogLegend").slideUp("slow");
		}
		
		//Legend DialogTitle
		function openDialogTitle(){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$("#dialogtitle").hide();
			$("#dialogtitle").slideToggle("slow");
			$("#dialogtitle").css("z-index","99");
			captureTEXT = true;
		}
		function closeDialogTitle(){
			$("#dialogtitle").slideUp("slow");
		}
		
		//Float Panel
		function openFloatDialogbox(externalhtml){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#floatdialog',parent.document).attr('src',externalhtml+"?username="+global_username);
			$("#floatdialog").hide();
			$("#floatdialog").slideToggle("slow");
			//custom 
			closeDragDropDialog();
		}
		function closeFloatDialogbox(){
			$("#floatdialog").slideUp("slow");
		}
		//LEFT Panel
		function openLeftDialogbox(cname){
			parent.document.getElementById("CENTERLOGO").style.display="none";
			$('#dialogLeft',parent.document).attr('src','COMPONENT/DIALOG/Dialog_LEFT.php?user='+global_username+'&cname='+cname+'&lvl='+TEMPLATEMODE);
			$("#dialogLeft").hide();
			$("#dialogLeft").slideToggle("slow");
		}
		function closeLeftDialogbox(){
			$("#dialogLeft").slideUp("slow");
		}
		
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				$("#meny").niceScroll({cursorcolor:"#00F",cursoropacitymax:"0.5",cursorwidth :"2px"});
			}
		);
		//notif
		/* function openNotif(text){
			$("#notif").hide();
			$("#notif").slideToggle("slow");
			document.getElementById("Notifmessage").innerHTML = text;
		}
		function closeNotif(){
			$("#notif").slideUp("slow");
		} */
		function changeImage(x){
			x.src="images/close1.png"
		}
		function rebackImage(x){
			x.src="images/close.png"
		}
		
		function Loading(a){
			if(a==true)
				document.getElementById('loadingIndicator').setAttribute("style","display:block");
			else
				document.getElementById('loadingIndicator').setAttribute("style","display:none");
		}
		
	//animation saving the rotation of earth
	var animation;
	function tick() {
		//scene.render();
		G3DMAP.viewer.camera.rotateRight(0.001);
		animation = Cesium.requestAnimationFrame(tick);
	}
	function disablerotate(){
		if(animation)
		{
			Cesium.cancelAnimationFrame(animation);
			animation = null;
		}
	}
	function enablerotate(){
		Cesium.requestAnimationFrame(tick);
	}
	function Switchto2Dmode(){
		G3DMAP.is2DMODE = true;
		disablerotate();
		if(G3DMAP.viewer.scene){
			G3DMAP.viewer.scene.morphTo2D(2);
			document.getElementById('cesium-MODE-text').innerHTML = '2D MODE';
			DialogMAPpositionextra(G3DMAP.viewer,G3DMAP.TEMPLATEMODE,2,7000000);
		}
	}
	function Switchto3Dmode(){
		if(G3DMAP.is2DMODE){
			G3DMAP.is2DMODE = false;
			//Save image for animation bg
			parent.colormodelayer = parent.G3DMAP.viewer.canvas.toDataURL("image/png");
			setTimeout(function(){
				if(G3DMAP.viewer.scene){
					G3DMAP.viewer.scene.morphTo3D(2);
					document.getElementById('cesium-MODE-text').innerHTML = '3D MODE';
				}
				setTimeout(function(){
					//enablerotate();
				},2000);
				setTimeout(function(){
					G3DMAP.viewer.camera.flyTo({
						destination : Cesium.Cartesian3.fromDegrees(0, 0, 20000000)
					//DialogMAPpositionextra(viewer,TEMPLATEMODE,2,10000000);
					});
				},3000);
			},500);
			//remove europe n carribean border
			G3DMAP.removeEuropeAndCaribbeanBorders();
		}
	}
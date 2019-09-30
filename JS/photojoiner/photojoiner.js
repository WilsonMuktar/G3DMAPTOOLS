

var photojoiner = (function(){
    var drawData = new Array();
    var images = new Array();
    var image;
    var canvas_width = 0;
    var offset_x = 0;
    var offset_y = 0;
    var module = {};  
	var captureScale;
	var borderwidth = 20;
      
        module.join = function( config ){
            config = config || {};
            images = config.images || [];
            canvasHeight = config.canvasHeight || 350;
			captureScale = config.captureScale || 1;
            canvas = config.canvas || document.getElementById('joined');
            canvas.height = canvasHeight;
			borderwidth = config.borderwidth || 20;
            context = canvas.getContext('2d');
			
            if( images.length > 0 )  
            {
                image = new Image();
                image.src = images[0];
                //Wait for image load
                image.onload = function(){
                        images.shift();
                        ratio = image.naturalHeight/canvasHeight;
                        image_width = this.width/ratio/captureScale;//Width / captureScale
                        image_height = this.height/ratio/captureScale;//Height / captureScale
                        drawData.push({
                            'image': this,
                            'ratio': ratio,
                            'scaledWidth' : image_width,
                            'scaledHeight' : image_height
                        });
                        canvas_width += image_width; 
                        module.join( config );
                    };
            }else{
                canvas.width = canvas_width/captureScale;  
				var index=0;
				offset_x = 0;
				offset_y = 0;
				//alert(drawData.length);
                for( var i=0; i<captureScale; i++ )
                {
					offset_x = 0;
					canvas_width = 0;
					for(var j=0;j<captureScale;j++)
					{
						current = drawData[index++];
						context.drawImage(current.image, 0, 0, current.image.width, current.image.height, offset_x, offset_y, current.scaledWidth, current.scaledHeight); 
						offset_x += current.scaledWidth;
					}
					offset_y += current.scaledHeight;
                }
				
				//draw border
				var context = canvas.getContext('2d');
				context.fillStyle = "rgb(0,0,0)";
				context.fillRect(0,0,borderwidth,canvas.height);
				context.fillRect(0,0,canvas.width,borderwidth);
				context.fillRect(canvas.width-borderwidth,0,borderwidth,canvas.height);
				context.fillRect(0,canvas.height-borderwidth,canvas.width,borderwidth);
			
				//reset
				images = new Array();
				drawData = new Array();
            }  
        };
    return module;
})();

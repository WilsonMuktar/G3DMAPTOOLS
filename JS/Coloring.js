	
	var colormodevalue = new Array();
	var colormodemaxvalue = "0";
	var colormode0value = "0";
	var colormode1value = "0";
	var colormode2value = "0";
	var colormode3value = "0";
	var colormodeminvalue = "0";
	var colorhigh = "#FFFFFF";
	var color1 = "#FFFFFF";
	var color2 = "#FFFFFF";
	var color3 = "#FFFFFF";
	var colorlow = "#FFFFFF";
	
	//COLORING Variable
	var highRGB,highR,highG,highB,lowRGB,lowR,lowG,lowB;//color
	var n = 7; //total level of color (n+2)
	var Pi, Ti;
	var Ri,Gi,Bi;

	function CalculateColor(highcolor,lowcolor,i){
		//color
		highRGB = HexToRgb(highcolor);//HEX
		highR = parseInt(highRGB.split(',')[0]);//255
		highG = parseInt(highRGB.split(',')[1]);//255
		highB = parseInt(highRGB.split(',')[2]);//255
		lowRGB = HexToRgb(lowcolor);//HEX
		lowR = parseInt(lowRGB.split(',')[0]);//255
		lowG = parseInt(lowRGB.split(',')[1]);//255
		lowB = parseInt(lowRGB.split(',')[2]);//255
		//calculate color decrease formula
		Pi = (i-1)/(n-1);
		Ti = (1-Math.cos(Pi*Math.PI))/2;
		Ri = (Ti*lowR)+(1-Ti)*highR;
		Gi = (Ti*lowG)+(1-Ti)*highG;
		Bi = (Ti*lowB)+(1-Ti)*highB;
		return RgbToHex(Ri,Gi,Bi);
	}

	function HexToRgb(hex) {
		hex = hex.split('#')[1];
		var bigint = parseInt(hex, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;
		//alert(r+" "+g+" "+b);
		return r + "," + g + "," + b;
	}
	function RgbToHex(r, g, b) {
		r = r>255?255:r;
		g = g>255?255:g;
		b = b>255?255:b;
		 r = parseInt(r);
         g = parseInt(g);
         b = parseInt(b);
         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

    /*FLAG and NAME*/
    var countrylist = new Array(
		"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
	    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi",
        "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Cayman Islands","Chad","China","Christmas Island","Cocos Islands","Colombia","Congo","Costa Rica","Cote dIvoire","Croatia","Chile","Cuba","Curacao","Cyprus","Czech Republic",
	    "Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic",
	    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
	    "Fiji","Finland","France","French Guiana","French Polynesia",
	    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana",
	    "Haiti","Honduras","Hungary","Hong Kong",
	    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
	    "Jamaica","Japan","Jordan",
	    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
	    "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg",
	    "Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Mongolia","Montenegro","Morocco","Mozambique",
	    "Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway",
	    "Oman",
	    "Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico",
        "Qatar",
        "Reunion","Romania","Russia","Rwanda",
        "Saint Lucia","Saint Vincent and the Grenadines","Samoa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","State of Palestine","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
        "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Tongo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
	    "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Virgin Islands","Uruguay","Uzbekistan",
        "Vanuatu","Venezuela","Vietnam",
        "Western Sahara",
        "Yemen",
        "Zambia","Zimbabwe",
        "Comoros", "Aruba");
	var staticcountrylist = new Array(
		"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
	    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi",
        "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Cayman Islands","Chad","China","Christmas Island","Cocos Islands","Colombia","Congo","Costa Rica","Cote dIvoire","Croatia","Chile","Cuba","Curacao","Cyprus","Czech Republic",
	    "Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic",
	    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
	    "Fiji","Finland","France","French Guiana","French Polynesia",
	    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana",
	    "Haiti","Honduras","Hungary","Hong Kong",
	    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
	    "Jamaica","Japan","Jordan",
	    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
	    "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg",
	    "Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Mongolia","Montenegro","Morocco","Mozambique",
	    "Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway",
	    "Oman",
	    "Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico",
        "Qatar",
        "Reunion","Romania","Russia","Rwanda",
        "Saint Lucia","Saint Vincent and the Grenadines","Samoa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","State of Palestine","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
        "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Tongo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
	    "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Virgin Islands","Uruguay","Uzbekistan",
        "Vanuatu","Venezuela","Vietnam",
        "Western Sahara",
        "Yemen",
        "Zambia","Zimbabwe",
        "Comoros", "Aruba");
	var continentlist = new Array("Asia","Africa","Europe","North America","South America","Oceania");
    var countrylistzh = new Array(
        "阿富汗", "阿尔巴尼亚", "阿尔及利亚", "安道尔", "安哥拉", "安圭拉岛", "南极", "安提瓜和巴布达", "阿根廷", "亚美尼亚", "澳大利亚", "奥地利", "阿塞拜疆",
		"巴哈马","巴林","孟加拉"," 巴巴多斯","白俄罗斯","比利时","伯利兹城","贝宁湾","百慕大群岛","不丹","玻利维亚","波斯尼亚和黑塞哥维那","博茨瓦纳","布韦岛","巴西","文莱","保加利亚","布基纳法索","缅甸","布隆迪",
		"柬埔寨","喀麦隆","加拿大","佛得角","中非共和国","开曼群岛","乍得","中国","圣诞岛","科科斯群岛","哥伦比亚","刚果","哥斯达黎加","科特迪瓦","克罗地亚","智利","古巴","库拉索岛","塞浦路斯","捷克共和国",
		"刚果民主共和国","丹麦","吉布提","多米尼加","多米尼加共和国",
		"厄瓜多尔","埃及","萨尔瓦多","赤道几内亚","厄立特里亚","爱沙尼亚","埃塞俄比亚",
		"斐济","芬兰","法国","法属圭亚那","法属玻利尼西亚",   
		"加蓬","冈比亚","格鲁吉亚","德国","加纳","希腊","格陵兰","格林纳达","瓜德罗普","关岛","危地马拉","几内亚","几内亚比绍","圭亚那",    
		"海地","洪都拉斯","匈牙利","香港",
		"冰岛","印度","印度尼西亚","伊朗","伊拉克","爱尔兰","以色列","意大利",
		"牙买加","日本","约旦",
		"哈萨克斯坦", "肯尼亚", "基里巴斯", "科威特", "吉尔吉斯斯坦",
		"老挝","拉脱维亚","黎巴嫩","莱索托","利比里亚","利比亚","立陶宛","卢森堡",
		"澳门","马其顿","马达加斯加岛","马拉维","马来西亚","马尔代夫","马里","马耳他","马提尼克岛","毛利塔尼亚","毛里求斯","马约特岛","墨西哥","密克罗尼西亚","摩尔多瓦","蒙古","黑山共和国","莫桑比克","莫桑比克",
		"纳米比亚","尼泊尔","荷兰","荷属安的列斯群岛","新喀里多尼亚","新西兰","尼加拉瓜","尼日尔","尼日利亚","朝鲜","挪威",
		"阿曼",
		"巴基斯坦","巴拿马","巴布亚新几内亚","巴拉圭","秘鲁","菲律宾","波兰","葡萄牙","波多黎各",
		"卡塔尔",
		"留尼汪","罗马尼亚","俄罗斯","卢旺达",
		"圣卢西亚岛","圣文森特和格林纳丁斯","萨摩亚群岛","圣多美和普林西比 ","沙特阿拉伯","塞内加尔","塞尔维亚","塞舌尔","塞拉利昂","新加坡","斯洛伐克"," 斯洛文尼亚","所罗门群岛","索马里","南非","韩国","南苏丹","西班牙","斯里兰卡","巴勒斯坦","苏丹","苏里南","斯威士兰","瑞典","瑞士","叙利亚共和国",
		"台湾","塔吉克斯坦","坦桑尼亚","泰国","东帝汶","通戈","汤加","特立尼达和多巴哥","突尼斯","土耳其","土库曼斯坦",
		"乌干达","乌克兰","阿拉伯联合酋长国","英国","美国","美属维尔京群岛","乌拉圭","乌兹别克斯坦",
		"瓦努阿图","委内瑞拉","越南",
		"西撒哈拉",
		"也门",
		"赞比亚","津巴布韦",
		"科摩罗", "阿鲁巴岛");

    var countrylistposition = new Array();
		countrylistposition["Afghanistan"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Albania"]=new Cesium.Cartesian2(-80,20);
		countrylistposition["Andorra"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Anguilla"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Antigua and Barbuda"]=new Cesium.Cartesian2(120,-95);
		countrylistposition["Austria"]=new Cesium.Cartesian2(-100,-55);
		countrylistposition["Azerbaijan"]=new Cesium.Cartesian2(60,-50);
	    countrylistposition["Bahamas"]=new Cesium.Cartesian2(120,-50);
		countrylistposition["Bahrain"]=new Cesium.Cartesian2(-60,-90);
		//countrylistposition["Bangladesh"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Belarus"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Belgium"]=new Cesium.Cartesian2(-100,-80);
		countrylistposition["Belize"]=new Cesium.Cartesian2(55,-60);
		countrylistposition["Bermuda"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Bhutan"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Bosnia and Herzegovina"]=new Cesium.Cartesian2(60,-30);
		countrylistposition["Bouvet Island"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Brunei"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Bulgaria"]=new Cesium.Cartesian2(60,-30);
		countrylistposition["Burundi"]=new Cesium.Cartesian2(-135,-50);
		countrylistposition["Burkina Faso"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Burma"]=new Cesium.Cartesian2(120,-80);
        countrylistposition["Cambodia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Cape Verde"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Cayman Islands"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Christmas Island"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Cocos Islands"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Congo"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Costa Rica"]=new Cesium.Cartesian2(-150,0);
		countrylistposition["Cote dIvoire"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Croatia"]=new Cesium.Cartesian2(-100,-10);
		countrylistposition["Cuba"]=new Cesium.Cartesian2(-100,-60);
		countrylistposition["Curacao"]=new Cesium.Cartesian2(40,-60);
		countrylistposition["Cyprus"]=new Cesium.Cartesian2(-100,-80);
		countrylistposition["Czech Republic"]=new Cesium.Cartesian2(60,-70);
		countrylistposition["Denmark"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Djibouti"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Dominica"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Dominican Republic"]=new Cesium.Cartesian2(40,-100);
		countrylistposition["Equatorial Guinea"]=new Cesium.Cartesian2(-200,-95);
		countrylistposition["Eritrea"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Estonia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Ethiopia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["El Salvador"]=new Cesium.Cartesian2(-150,20);
		countrylistposition["Finland"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["French Guiana"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["French Polynesia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Gambia"]=new Cesium.Cartesian2(-120,-30);
		countrylistposition["Georgia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Germany"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Greece"]=new Cesium.Cartesian2(20,10);
		countrylistposition["Grenada"]=new Cesium.Cartesian2(125,10);
		countrylistposition["Guadeloupe"]=new Cesium.Cartesian2(180,-55);
		countrylistposition["Guatemala"]=new Cesium.Cartesian2(-150,0);
		countrylistposition["Guinea"]=new Cesium.Cartesian2(-100,-40);
		countrylistposition["Guinea-Bissau"]=new Cesium.Cartesian2(-230,-10);
		countrylistposition["Guyana"]=new Cesium.Cartesian2(-110,0);
	    countrylistposition["Haiti"]=new Cesium.Cartesian2(0,-110);
		countrylistposition["Honduras"]=new Cesium.Cartesian2(60,-50);
		countrylistposition["Hungary"]=new Cesium.Cartesian2(60,-50);
		countrylistposition["Iraq"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Iran"]=new Cesium.Cartesian2(120,-80);
	    countrylistposition["Jordan"]=new Cesium.Cartesian2(100,-50);
		countrylistposition["Kazakhstan"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Kenya"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Kuwait"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Kyrgyzstan"]=new Cesium.Cartesian2(120,-80);
	    countrylistposition["Laos"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Latvia"]=new Cesium.Cartesian2(-100,-50);
		countrylistposition["Lebanon"]=new Cesium.Cartesian2(60,-40);
		countrylistposition["Lesotho"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Lithuania"]=new Cesium.Cartesian2(-150,-50);
		countrylistposition["Luxembourg"]=new Cesium.Cartesian2(-270,-30);
	    countrylistposition["Macau"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Macedonia"]=new Cesium.Cartesian2(65,0);
		countrylistposition["Malawi"]=new Cesium.Cartesian2(120,-80);
		//countrylistposition["Malaysia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Maldives"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Mali"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Martinique"]=new Cesium.Cartesian2(95,-50);
		countrylistposition["Mauritius"]=new Cesium.Cartesian2(60,-30);
		countrylistposition["Mayotte"]=new Cesium.Cartesian2(60,-30);
		countrylistposition["Micronesia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Moldova"]=new Cesium.Cartesian2(60,-30);
		countrylistposition["Montenegro"]=new Cesium.Cartesian2(-120,-10);
		countrylistposition["Morocco"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Mozambique"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Netherlands"]=new Cesium.Cartesian2(-90,-130);
		countrylistposition["Netherlands Antilles"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Nicaragua"]=new Cesium.Cartesian2(60,-50);
		countrylistposition["Nigeria"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["North Korea"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Norway"]=new Cesium.Cartesian2(120,-80);
	    countrylistposition["Oman"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Poland"]=new Cesium.Cartesian2(60,-50);
		countrylistposition["Puerto Rico"]=new Cesium.Cartesian2(60,-60);
        countrylistposition["Qatar"]=new Cesium.Cartesian2(70,-100);
		countrylistposition["Romania"]=new Cesium.Cartesian2(60,1);
		countrylistposition["Rwanda"]=new Cesium.Cartesian2(-80,-80);
        countrylistposition["Saint Lucia"]=new Cesium.Cartesian2(85,-35);
		countrylistposition["Saint Vincent and the Grenadines"]=new Cesium.Cartesian2(90,-10);
		countrylistposition["Samoa"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Sao Tome and Principe"]=new Cesium.Cartesian2(-350,-40);
		countrylistposition["Senegal"]=new Cesium.Cartesian2(-120,-50);
		countrylistposition["Serbia"]=new Cesium.Cartesian2(60,-40);
		countrylistposition["Seychelles"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Sierra Leone"]=new Cesium.Cartesian2(-200,-30);
		countrylistposition["Singapore"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Slovakia"]=new Cesium.Cartesian2(60,-50);
		countrylistposition["Slovenia"]=new Cesium.Cartesian2(-140,-30);
		countrylistposition["Solomon Islands"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Somalia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["South Sudan"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Spain"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["State of Palestine"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Swaziland"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Switzerland"]=new Cesium.Cartesian2(-80,0);//-5,-110);
		countrylistposition["Sweden"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Syria"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Tajikistan"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Tanzania"]=new Cesium.Cartesian2(120,-80);
		//countrylistposition["Thailand"]=new Cesium.Cartesian2(-120,-80);
		countrylistposition["Tongo"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Tonga"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Trinidad and Tobago"]=new Cesium.Cartesian2(85,35);
		countrylistposition["Tunisia"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Turkey"]=new Cesium.Cartesian2(120,-80);
	    //countrylistposition["Uganda"]=new Cesium.Cartesian2(120,-80);
	    countrylistposition["Ukraine"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["United Arab Emirates"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["United Kingdom"]=new Cesium.Cartesian2(0,-180);
		countrylistposition["United States Virgin Islands"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Uzbekistan"]=new Cesium.Cartesian2(0,-160);
        countrylistposition["Vanuatu"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Vietnam"]=new Cesium.Cartesian2(120,-80);
        countrylistposition["Western Sahara"]=new Cesium.Cartesian2(120,-80);
        countrylistposition["Yemen"]=new Cesium.Cartesian2(120,-80);
        countrylistposition["Zambia"]=new Cesium.Cartesian2(-110,-80);
		countrylistposition["Zimbabwe"]=new Cesium.Cartesian2(120,-50);
        countrylistposition["Comoros"]=new Cesium.Cartesian2(120,-80);
		countrylistposition["Aruba"]=new Cesium.Cartesian2(0,-95);
		
	var countrylistlevel2 = new Array(
		"Albania","Armenia","Aruba","Austria","Azerbaijan","Bahrain","Benin","Belgium","Belize",
		"Bosnia and Herzegovina","Bulgaria",
		"Costa Rica","Comoros","Croatia","Czech Republic","Dominica","Dominican Republic",
		"Equatorial Guinea","Hungary","Italy","El Salvador",
		"Gambia","Ghana","Greece","Guatemala","Guinea","Guinea-Bissau",
		"Haiti","Honduras","Israel","Ivory Coast","Jordan",
		"Latvia","Lebanon","Lithuania","Luxembourg","Macau","Macedonia","Mayotte","Moldova","Montenegro",
		"Nicaragua","Romania","Puerto Rico","Poland","Switzerland",
		"State of Palestine","Qatar","Rwanda","Senegal","Serbia","Sierra Leone","Slovenia","Slovakia"
		,"State of Israel","Togo","Tongo","Trinidad and Tobago"
	);
	var countrylistlevel3 = new Array(
		"Antigua and Barbuda","Burundi","United States Virgin Islands","Guadeloupe",
		"Grenada","Martinique","Mauritius","Reunion","Saint Lucia","Saint Vincent and the Grenadines",
		"Sao Tome and Principe","Netherlands Antilles",
		"Curacao"
	);
	var countrylistlevel4 = new Array("Barbados");
	
	var BillboardLargeScale = 1.5;
	var BillboardSmallScale = 0.4;
	var LabelSize = 22;
    function DisplayFlagandName(a) {
		G3DMAP.isFLAGMODE = a;
        if (G3DMAP.isFLAGMODE==true && G3DMAP.FlagandNames.length < 1) {
            for (var i = 0; i < countrylist.length; i++) {
                var latlon = getLatLon(countrylist[i].toLowerCase().replace(/ /g, ""));
                //alert(countrylist[i] + " " + latlon);
                var latlons = new Array();
                if (latlon) {
                    latlons = latlon.split(',');
                    try {
						//not all countries
						if(countrywithzerorate.indexOf(countrylist[i])>=0)
						{
							//alert(countrylist[i]);
						  var templ = G3DMAP.TEMPLATEMODE;
						  if(templ=="countries"||templ=="Asia"||templ=="Europe"||templ=="Africa"||templ=="North America"||templ=="South America"||templ=="Oceania"){
							if(countrylistlevel2.indexOf(countrylist[i])>=0){//include for level 2
								var flagname = new Cesium.Entity({
										name: countrylist[i],
										position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
										billboard: {
											image: 'images/flag/' + countrylist[i] + '.png',
											scale: 1,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											scaleByDistance: new Cesium.NearFarScalar( 1e6,BillboardLargeScale*2, 4e6, 0.5)
										},
										label: {
											show: true,
											font: 'bold '+LabelSize*1.5+'px/17px arial, Microsoft-YaHei',
											textAlign:'center',
											style: Cesium.LabelStyle.FILL,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
											verticalOrigin: Cesium.VerticalOrigin.TOP,
											scale: 1,
											fillColor: Cesium.Color.BLACK,
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											text: countrylist[i],
											translucencyByDistance : new Cesium.NearFarScalar(6e5, 0.0, 5e4 , 1.0)
										}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									label: {
										show: true,
										font: 'bold '+(LabelSize)+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
										verticalOrigin: Cesium.VerticalOrigin.TOP,
										scale: 1,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylistzh[i],
										translucencyByDistance : new Cesium.NearFarScalar(6e5, 0.0, 5e4 , 1.0)
									}
								});
								flagname.label.pixelOffset = new Cesium.Cartesian2(0.0, LabelSize*1.5);
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
							else if(countrylistlevel3.indexOf(countrylist[i])>=0){//include for level 3
								var flagname = new Cesium.Entity({
										name: countrylist[i],
										position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
										billboard: {
											image: 'images/flag/' + countrylist[i] + '.png',
											scale: 1,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											scaleByDistance: new Cesium.NearFarScalar(1e6, BillboardLargeScale*2, 5e6, 0.3)
										},
										label: {
											show: true,
											font: 'bold '+(LabelSize-2)*1.5+'px/15px arial, Microsoft-YaHei',
											textAlign:'center',
											style: Cesium.LabelStyle.FILL,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
											verticalOrigin: Cesium.VerticalOrigin.TOP,
											scale: 1,
											fillColor: Cesium.Color.BLACK,
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											text: countrylist[i],
											translucencyByDistance : new Cesium.NearFarScalar(6e5, 0.0, 5e4, 1.0)
										}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									label: {
										show: true,
										font: 'bold '+(LabelSize-2)+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
										verticalOrigin: Cesium.VerticalOrigin.TOP,
										scale: 1,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylistzh[i],
										translucencyByDistance : new Cesium.NearFarScalar(6e5, 0.0, 5e4, 1.0)
									}
								});
								flagname.label.pixelOffset = new Cesium.Cartesian2(0.0, LabelSize*1.5);
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
							else if(countrylistlevel4.indexOf(countrylist[i])>=0){//include for level 4
								var flagname = new Cesium.Entity({
										name: countrylist[i],
										position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
										billboard: {
											image: 'images/flag/' + countrylist[i] + '.png',
											scale: 1,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											scaleByDistance: new Cesium.NearFarScalar(1e3, BillboardLargeScale*2, 7e3, 0.3)
										},
										label: {
											show: true,
											font: 'bold '+(LabelSize-2)*1.5+'px/15px arial, Microsoft-YaHei',
											textAlign:'center',
											style: Cesium.LabelStyle.FILL,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
											verticalOrigin: Cesium.VerticalOrigin.TOP,
											scale: 1,
											fillColor: Cesium.Color.BLACK,
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											text: countrylist[i],
											translucencyByDistance : new Cesium.NearFarScalar(1e3, 0.0, 5e2, 1.0)
										}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									label: {
										show: true,
										font: 'bold '+(LabelSize-2)+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
										verticalOrigin: Cesium.VerticalOrigin.TOP,
										scale: 1,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylistzh[i],
										translucencyByDistance : new Cesium.NearFarScalar(1e3, 0.0, 5e2, 1.0)
									}
								});
								flagname.label.pixelOffset = new Cesium.Cartesian2(0.0, LabelSize*1.5);
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
							else{
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: 'images/flag/' + countrylist[i] + '.png',
										scale: 1.2,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
										verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										scaleByDistance: new Cesium.NearFarScalar( 1e6, BillboardLargeScale*2,9e6, BillboardSmallScale)//-0.3
									},
									label: {
										show: true,
										font: 'bold '+(LabelSize+2.5)*1.5+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
										verticalOrigin: Cesium.VerticalOrigin.TOP,
										scale: 1,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylist[i],
										translucencyByDistance : new Cesium.NearFarScalar(20e5, 1, 21e5, 0.0)
									}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									label: {
										show: true,
										font: 'bold '+(LabelSize+2.5)+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
										verticalOrigin: Cesium.VerticalOrigin.TOP,
										scale: 1,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylistzh[i],
										translucencyByDistance : new Cesium.NearFarScalar(20e5,1, 21e5, 0.0)
									}
								});
								flagname.label.pixelOffset = new Cesium.Cartesian2(0.0, LabelSize*1.5);
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
						  }
						  //not countries
						  else{
							  //alert(countrylist[i]+" : "+latlons[0]+" - "+latlons[1]);
							  var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees((latlons[0]), latlons[1]),
									label: {
										show: true,
										font: 'bold '+LabelSize+'px/20px arial, Microsoft-YaHei',
										textAlign:'center',
										style: Cesium.LabelStyle.FILL,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
										verticalOrigin: Cesium.VerticalOrigin.CENTER,
										scale: 0.5,
										fillColor: Cesium.Color.BLACK,
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										text: countrylist[i],
										translucencyByDistance : new Cesium.NearFarScalar(6e6, 0.0, 5e6, 1)
									}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
						  }
						}
						
                    } catch (e) { }
                }
            }
        }
        else if (G3DMAP.FlagandNames.length > 0) {
            for (var i = 0; i < G3DMAP.FlagandNames.length; i++) {
                G3DMAP.FlagandNames[i].show = a;
            }
        }
        //else
        //    alert('Please Create New Scene First!');
    }
	
	function DisplayPrintingFlagandName(a) {
            for (var i = 0; i < countrylist.length; i++) {
                var latlon = getLatLon(countrylist[i].toLowerCase().replace(/ /g, ""));
                //alert(countrylist[i] + " " + latlon);
                var latlons = new Array();
                if (latlon) {
                    latlons = latlon.split(',');
                    try {
						//CUSTOM Flag
						//not all countries
						if(countrywithzerorate.indexOf(countrylist[i])>=0)
						{
							if(countrylistlevel2.indexOf(countrylist[i])>=0){//include for level 2
								var flagname = new Cesium.Entity({
										name: countrylist[i],
										position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)-1), latlons[1]),
										billboard: {
											image: 'images/flag/' + countrylist[i] + '.png',
											scale: 0.85,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											scaleByDistance: new Cesium.NearFarScalar( 1e6,BillboardLargeScale*2, 4e6, 0.5)
										}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
							else if(countrylistlevel3.indexOf(countrylist[i])>=0){//include for level 3
								var flagname = new Cesium.Entity({
										name: countrylist[i],
										position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)-1), latlons[1]),
										billboard: {
											image: 'images/flag/' + countrylist[i] + '.png',
											scale: 0.85,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											scaleByDistance: new Cesium.NearFarScalar(1e6, BillboardLargeScale*2, 5e6, 0.3)
										}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
							else if(countrylistlevel4.indexOf(countrylist[i])>=0){//include for level 3
								
							}
							else{
								var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)-1), latlons[1]),
									billboard: {
										image: 'images/flag/' + countrylist[i] + '.png',
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
										verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										scaleByDistance: new Cesium.NearFarScalar( 1e6, BillboardLargeScale*2,9e6, BillboardSmallScale)//-0.3
									}
								});
								G3DMAP.FlagandNames.push(flagname);
								G3DMAP.viewer.entities.add(flagname);
							}
						}
						
					
						//Custom LABEL
						if(countrylist[i]!="Bosnia and Herzegovina"&&countrylist[i]!="Barbados"){
							//not all countries
							if(countrywithzerorate.indexOf(countrylist[i])>=0)
							{
		
								//CUSTOM FLAG NAME at small size of printed
									var flagname = new Cesium.Entity({
										name: countrylist[i],
										position:Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)-1), latlons[1]),
										label: {
											show: true,
											font: 'bold '+(LabelSize)+'px/20px arial, Microsoft-YaHei',
											textAlign:'center',
											style: Cesium.LabelStyle.FILL,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
											verticalOrigin: Cesium.VerticalOrigin.TOP,
											scale: 1,
											fillColor: Cesium.Color.BLACK,	
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											text: countrylist[i],
											translucencyByDistance : new Cesium.NearFarScalar(5.9e6,1 ,6e6, 0)
										}
									});
									if(countrylistposition[countrylist[i]]!=null)
										flagname.label.pixelOffset = custompixeloffset(i,false);//new Cesium.Cartesian2(0.0, LabelSize);
									G3DMAP.FlagandNames.push(flagname);
									G3DMAP.viewer.entities.add(flagname);
									
									
									var flagname = new Cesium.Entity({
										name: countrylist[i],
										position:Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)-1), latlons[1]),
										label: {
											show: true,
											font: 'bold '+(LabelSize-2.5)+'px/20px arial, Microsoft-YaHei',
											textAlign:'center',
											style: Cesium.LabelStyle.FILL,
											horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
											verticalOrigin: Cesium.VerticalOrigin.TOP,
											scale: 1,
											fillColor: Cesium.Color.BLACK,	
											eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
											text: countrylistzh[i],
											translucencyByDistance : new Cesium.NearFarScalar(5.9e6,1 ,6e6, 0)
										}
									});
									if(countrylistposition[countrylist[i]]!=null)
										flagname.label.pixelOffset = custompixeloffset(i,true);
									else
										flagname.label.pixelOffset = new Cesium.Cartesian2(0,LabelSize);
									G3DMAP.FlagandNames.push(flagname);
									G3DMAP.viewer.entities.add(flagname);
							}
						}	
                    } catch (e) { }
                }
            }
			/* 
			function custompixeloffset(i,isZH){
				if(capturescaleforflag<8) capturescaleforflag = 8;
				var extra = (capturescaleforflag-8)*10; //extra 10 pixel for each different scale of slices
				//if(i==0) alert(extra);
				var extrax = extra;
				var extray = extra;
				if(countrylistposition[countrylist[i]].x<0) extrax = -1.8*extra;
				if(countrylistposition[countrylist[i]].y<0) extray = -1*extra;
				else if(countrylistposition[countrylist[i]].y==1) extray = 0;
				if(isZH==false)
				{
					var a = new Cesium.Cartesian2(countrylistposition[countrylist[i]].x+extrax, countrylistposition[countrylist[i]].y+extray);
					return a;
				}
				else{
					var a = new Cesium.Cartesian2(countrylistposition[countrylist[i]].x+extrax, countrylistposition[countrylist[i]].y+extray+LabelSize);
					return a;
				}
			} */
			function custompixeloffset(i,isZH){
				if(capturescaleforflag<7) capturescaleforflag = 7;
				var extrax = (capturescaleforflag-8)* countrylistposition[countrylist[i]].x;
				var extray = (capturescaleforflag-8)* countrylistposition[countrylist[i]].y;
				if(countrylistposition[countrylist[i]].x<0) extrax = -0.5*extrax;
				if(countrylistposition[countrylist[i]].y<0) extray = -0.5*extray;
				else if(countrylistposition[countrylist[i]].y==1) extray = 0;
				if(isZH==false)
				{
					var a = new Cesium.Cartesian2(countrylistposition[countrylist[i]].x+extrax, countrylistposition[countrylist[i]].y+extray);
					return a;
				}
				else{
					var a = new Cesium.Cartesian2(countrylistposition[countrylist[i]].x+extrax, countrylistposition[countrylist[i]].y+extray+LabelSize);
					return a;
				}
			}
	}
	
	
	function resizeFlagandName(scale){
		//Redraw
		if(G3DMAP.FlagandNames.length>0)
		{
			//configure size
			BillboardLargeScale += scale;
			BillboardSmallScale += scale;
			LabelSize += (scale*20);
			for (var i = 0; i < G3DMAP.FlagandNames.length; i++)
				G3DMAP.viewer.entities.remove(G3DMAP.FlagandNames[i]);
			G3DMAP.FlagandNames = new Array();
			if(GeneratingMap)
				DisplayPrintingFlagandName(true);
			else
				DisplayFlagandName(true);
		}
	}
	
	function resizeFlagandNameBiggerLabelsize(scale){
		//Redraw
		if(G3DMAP.FlagandNames.length>0)
		{
			//configure size
			BillboardLargeScale += scale;
			BillboardSmallScale += scale;
			LabelSize += (scale*40);//40
			for (var i = 0; i < G3DMAP.FlagandNames.length; i++)
				G3DMAP.viewer.entities.remove(G3DMAP.FlagandNames[i]);
			G3DMAP.FlagandNames = new Array();
			if(GeneratingMap)
				DisplayPrintingFlagandName(true);
			else
				DisplayFlagandName(true);
		}
	}
	
	
	function displayCanvasFlag(a){
		if (G3DMAP.viewer && G3DMAP.FlagandNames.length < 1) {
            for (var i = 0; i < countrylist.length; i++) {
                var latlon = getLatLon(countrylist[i].toLowerCase().replace(/ /g, ""));
                //alert(countrylist[i] + " " + latlon);
                var latlons = new Array();
                if (latlon) {
                    latlons = latlon.split(',');
                    try {
						if(countrylistlevel2.indexOf(countrylist[i])>=0){
							var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: FlagCanvas('images/flag/'+countrylist[i]+'.png',countrylist[i],countrylistzh[i]),
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
										verticalOrigin: Cesium.VerticalOrigin.CENTER, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										scaleByDistance: new Cesium.NearFarScalar(50e5,0,10e6, BillboardSmallScale)
									}
							});
							G3DMAP.FlagandNames.push(flagname);
							G3DMAP.viewer.entities.add(flagname);
							var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: FlagCanvas('images/flag/'+countrylist[i]+'.png',countrylist[i],countrylistzh[i]),
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
										verticalOrigin: Cesium.VerticalOrigin.CENTER, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -11000)),
										scaleByDistance: new Cesium.NearFarScalar(10e2,BillboardLargeScale,50e5, 0)
									}
							});
							G3DMAP.FlagandNames.push(flagname);
							G3DMAP.viewer.entities.add(flagname);
						}
						else if(countrylistlevel3.indexOf(countrylist[i])>=0){//include for level 3
							var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: FlagCanvas('images/flag/'+countrylist[i]+'.png',countrylist[i],countrylistzh[i]),
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
										verticalOrigin: Cesium.VerticalOrigin.CENTER, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										scaleByDistance: new Cesium.NearFarScalar( 50e5, 0,10e6, BillboardSmallScale)
									}
							});
							G3DMAP.FlagandNames.push(flagname);
							G3DMAP.viewer.entities.add(flagname);
							var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: FlagCanvas('images/flag/'+countrylist[i]+'.png',countrylist[i],countrylistzh[i]),
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
										verticalOrigin: Cesium.VerticalOrigin.CENTER, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -11000)),
										scaleByDistance: new Cesium.NearFarScalar( 10e2, BillboardLargeScale,50e5, 0)
									}
							});
							G3DMAP.FlagandNames.push(flagname);
							G3DMAP.viewer.entities.add(flagname);
						}
						else{
							var flagname = new Cesium.Entity({
									name: countrylist[i],
									position: Cesium.Cartesian3.fromDegrees(((latlons[0] * 1)), latlons[1]),
									billboard: {
										image: FlagCanvas('images/flag/'+countrylist[i]+'.png',countrylist[i],countrylistzh[i]),
										scale: 1,
										horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
										verticalOrigin: Cesium.VerticalOrigin.CENTER, // default: CENTER
										eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -10000)),
										scaleByDistance: new Cesium.NearFarScalar( 10e2,BillboardLargeScale,10e6, BillboardSmallScale)
									}
							});
							G3DMAP.FlagandNames.push(flagname);
							G3DMAP.viewer.entities.add(flagname);
						}
                    } catch (e) { }
                }
            }
        }
        else if (G3DMAP.FlagandNames.length > 0) {
            for (var i = 0; i < G3DMAP.FlagandNames.length; i++) {
                G3DMAP.FlagandNames[i].show = a;
            }
        }
        else
            alert('Please Create New Scene First!');
		
		function FlagCanvas(flagsrc,flagen,flagzh){
			var canvas = document.createElement("canvas");
			var canvaswidth = canvas.width/2;
			canvas.height = canvaswidth*2;
			var context = canvas.getContext('2d');
			var flagimage = new Image();
			flagimage.src = flagsrc;
			//flagimage.onload = function () 
			//{ 
				var width = flagimage.width;
				var height = flagimage.height;
				context.drawImage(flagimage,0,0,width,height,5,0,canvaswidth, canvaswidth); 
			//}
			context.save();
			context.textAlign = "left";
			var fontSize = Math.floor(canvas.height / 8);
			context.font = "bold " + fontSize + "pt Helvetica";
			context.fillText(flagen, 5, canvaswidth + 25);
			context.textAlign = "left";
			var fontSize = Math.floor(canvas.height / 8);
			context.font = "bold " + fontSize + "pt 微软雅黑";
			context.fillText(flagzh, 5, canvaswidth + 70);
			context.restore();
			return canvas;
		}		
	}
	
	//parent.RequestExecute1("COMPONENT/PHPSQL/sql_billboard.php?dbname="+databasename+"&tablename="+databasetable+"&PointedMode=true");
	function resizeRank(scale){
		
	}

	
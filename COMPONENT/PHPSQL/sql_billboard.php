<?php
/*PHP - mysql*/
error_reporting(0);

	$myhash =
	array(
	"defaultz" => "0,0,38000000",
	"countries" => "0,0,33000000",
	"continent" => "0,0,33000000",
	//CONTINENT
	"asia" => "95.56,40,20000000",
	"africa" => "16.34,-5,13000000",
	"europe" => "32.44,56.55,15000000",
	"southamerica" => "-61.67,-36,12000000",
	"northamerica" => "-73,46.63,15000000",
	"oceania" => "150,-37,10000000",
	//COUNTRY
	"afghanistan" => "65.96,34.12,1500000",
	"albania" => "20,41,1500000",
	"algeria" => "3,28,3000000",
	"andorra" => "1.30,42.30,1500000",
	"angola" => "18.30,-12.30,1500000",
	"anguilla" => "-63.04899,18.22723,1500000",
	"antarctica" => "0,-85,1500000",
	"antiguaandbarbuda" => "-61.48,17.03,1500000",
	"argentina" => "-64.40,-35.54,5000000",
	"armenia" => "45.21,40.07,600000",
	"aruba" => "-69.58,12.30,1500000",
	"australia" => "133.88,-26.64,6500000",
	"austria" => "13.20,47.20,1500000",
	"azerbaijan" => "47.30,40.30,1500000",
	"bahamas" => "-76,24.15,1500000",
	"bahrain" => "50.33,26,1500000",
	"bangladesh" => "90,24,1500000",
	"barbados" => "-58.6,13.10,1500000",
	"belarus" => "28,53,1500000",
	"belgium" => "4,50.50,1500000",
	"belize" => "-88.45,17.15,1500000",
	"benin" => "2.15,9.30,1500000",
	"bermuda" => "-64.45,32.20,1500000",
	"bhutan" => "90.30,27.30,1500000",
	"bolivia" => "-65,-17,1500000",
	"bosniaandherzegovina" => "18,44,1500000",
	"botswana" => "24,-22,1500000",
	"bouvetisland" => "3.228,-54.258,1500000",
	"brazil" => "-51.43,-10.19,5000000",
	"brunei" => "114.85,4.72,400000",
	"bulgaria" => "25,43,800000",
	"burkinafaso" => "-2,13,1500000",
	"burma" => "96.39,21.37,1500000",
	"burundi" => "30,-3.80,300000",
	"cambodia" => "104,12.47,300000",
	"cameroon" => "12,6,1500000",
	"canada" => "-105.4,60.24,1500000",
	"capeverde" => "-24,16,1500000",
	"centralafricanrepublic" => "21,7,1500000",
	"ivorycoast" => "-5.58,7.60,1500000",
	"caymanislands" => " -81.35,19.38,1500000",
	"chad" => "18.72,15.55,1500000",
	"china" => "104,32,8000000",
	"christmasisland" => "105.38,-10.29,1500000",
	"cocosislands" => "0,0,1500000",
	"colombia" => "-72,4,1500000",
	"comoros" => "44.15,-12.10,150000",
	"congo" => "15,-1,1500000",
	"costarica" => "-84,10,1500000",
	"cotedivoire" => "-5.58,7.60,1500000",
	"croatia" => "16.38,45.68,1500000",
	"chile" => "-71,-30,1500000",
	"cuba" => "-79.15,22.14,1500000",
	"curacao" => "-68.9,12.16,1500000",
	"cyprus" => "33,35,1500000",
	"czechrepublic" => "15.30,49.45,1500000",
	"democraticrepublicofthecongo" => "20,-5,3000000",
	"denmark" => "10,56,1500000",
	"djibouti" => "43,11.30,1500000",
	"dominica" => "-61.20,15.25,1500000",
	"dominicanrepublic" => "-70.40,19,1500000",
	"ecuador" => "-77.30,-2,1500000",
	"egypt" => "30,27,1500000",
	"elsalvador" => "-89,13.8,1500000",
	"equatorialguinea" => "10.33,1.65,1500000",
	"eritrea" => "39,15,1500000",
	"estonia" => "26,59,1500000",
	"ethiopia" => "38,8,1500000",
	"fiji" => "177.98,-17.84,1500000",
	"finland" => "26.88,64.65,1500000",
	"france" => "2.73,46.57,1500000",
	"frenchguiana" => "-53.03,4.03,1500000",
	"frenchpolynesia" => "-143.3,-13.15,1500000",
	"gabon" => "11.67,-0.65,1500000",
	"gambia" => "-15.56,13.49,1500000",
	"georgia" => "43.6,42.2,1500000",
	"germany" => "9,51,1500000",
	"ghana" => "-1,7.84,1500000",
	"greece" => "22.04,39.79,1500000",
	"greenland" => "-39.98,74.84,1500000",
	"grenada" => "-62.60,12.06,1500000",
	"guadeloupe" => "-62.82,16.74,1500000",
	"guam" => "145,12.81,1500000",
	"guatemala" => "-90.55,15.92,1500000",
	"guinea" => "-11.01,10.28,1500000",
	"guinea-bissau" => "-15.08,12.05,1500000",
	"guyana" => "-59,5,1500000",
	"haiti" => "-72.4167,19,1500000",
	"honduras" => "-86.5,15,1500000",
	"hungary" => "20,47,1500000",
	"hongkong" => "114.1667,22.25,1500000",
	"iceland" => "-18,65,1500000",
	"india" => "78,24,5500000",
	"indonesia" => "115.32,-3.52,5500000",
	"iran" => "53,32,5500000",
	"iraq" => "44,33,5500000",
	"ireland" => "-7.95,53.18,5500000",
	"israel" => "34.75,31.5,5500000",
	"italy" => "12.833,42.833,5500000",
	"jamaica" => "-77.5,18.25,5500000",
	"japan" => "138,36,5500000",
	"jordan" => "36,31,5500000",
	"kazakhstan" => "68,48,5500000",
	"kenya" => "38,1,5500000",
	"kiribati" => "173,1.4167,5500000",
	"kuwait" => "47.6581,29.3375,5500000",
	"kyrgyzstan" => "74.58,41.63,5500000",
	"laos" => "105,18,5500000",
	"latvia" => "25,57,5500000",
	"lebanon" => "35.833,33.833,5500000",
	"lesotho" => "28.5,-29.5,5500000",
	"liberia" => "-9.5,6.5,5500000",
	"libya" => "17,25,5500000",
	"lithuania" => "24,56,5500000",
	"luxembourg" => "5.95,49.78,5500000",
	"macau" => "113.78,22.14,5500000",
	"macedonia" => "21.69,41.67,5500000",
	"madagascar" => "47,-20,5500000",
	"malawi" => "33.96,-13.33,5500000",
	"malaysia" => "108.26,5.46,1500000",
	"maldives" => "73,3,5500000",
	"mali" => "-4,17,5500000",
	"malta" => "35.85,14.48,5500000",
	"martinique" => "-61,14.6,5500000",
	"mauritania" => "-10.61,20.41,5500000",
	"mauritius" => "57.67,-19.98,5500000",
	"mayotte" => "45.13,-13.02,5500000",
	"mexico" => "-102,23,5500000",
	"micronesia" => "158.51,6.46,5500000",
	"moldova" => "28.30,47.30,5500000",
	"mongolia" => "103.44,46.90,5500000",
	"montenegro" => "19.30,42.78,5500000",
	"morocco" => "-10.45,28.79,5500000",
	"mozambique" => "34.88,-17.92,5500000",
	"namibia" => "18.25,-22.16,5500000",
	"nepal" => "84, 28,1500000",
	"netherlands" => "5.58,52.31,5500000",
	"netherlandsantilles" => "-67.98,12.30,1500000",
	"newcaledonia" => "165.61,-21.25,5500000",
	"newzealand" => "172.69,-41.85,5500000",
	"nicaragua" => "-84.90,12.77,5500000",
	"niger" => "9.23,17.66,5500000",
	"nigeria" => "7.93,9.37,5500000",
	"northkorea" => "127.70,40.54,5500000",
	"norway" => "15.98,67.59,5500000",
	"oman" => "55.74,20.51,5500000",
	"pakistan" => "69.76,31.31,5500000",
	"panama" => "-80,8.89,5500000",
	"papuanewguinea" => "145.29,-6.63,5500000",
	"paraguay" => "-58.45,-23.49,5500000",
	"peru" => "-74.26,-9.76,5500000",
	"philippines" => "122,12,5500000",
	"poland" => "19.50,52.03,5500000",
	"portugal" => "-8.14,39.40,5500000",
	"puertorico" => "-66.48,18.21,5500000",
	"qatar" => "51.19,25.39,55000000",
	"reunion" => "55.48,-21.08,5500000",
	"romania" => "25,46,5500000",
	"russia" => "99.43,63.17,5500000",
	"rwanda" => "30,-2,5500000",
	"saintlucia" => "-60.95,13.91,5500000",
	"saintvincentandthegrenadines" => "-61.21,13.27,5500000",
	"samoa" => "-172.49,-13.62,55000000",
	"saotomeandprincipe" => "7,1,5500000",
	"saudiarabia" => "45,25,5500000",
	"senegal" => "-14,14,5500000",
	"serbia" => "20.89,44.38,5500000",
	"seychelles" => "55.667,-4.5,5500000",
	"sierraleone" => "-11.5,8.5,5500000",
	"singapore" => "103.8,1.366,5500000",
	"slovakia" => "19.58,48.96,5500000",
	"slovenia" => "15.06,46.25,5500000",
	"solomonislands" => "158.99,-7,72,5500000",
	"somalia" => "46.32,6.26,5500000",
	"southafrica" => "25.36,-28.42,5500000",
	"southkorea" => "127.83,36.62,5500000",
	"southsudan" => "30.51,7.2,5500000",
	"spain" => "-4,40,1500000",
	"srilanka" => "80.69,7.8,5500000",
	"stateofpalestine" => "35.29,31.97,5500000",
	"palestine" => "35.29,31.97,5500000",
	"sudan" => "30.03,16.19,5500000",
	"suriname" => "-55.89,4.25,5500000",
	"swaziland" => "31.37,-26.39,5500000",
	"sweden" => "16.13,63.47,5500000",
	"switzerland" => "8,47,1500000",
	"syria" => "38,35,5500000",
	"tajikistan" => "71,39,5500000",
	"tanzania" => "35,-6,5500000",
	"thailand" => "100,15,5500000",
	"timor-leste" => "125.95,-8.68,5500000",
	"tongo" => "1,8,5500000",
	"togo" => "1,8,5500000",
	"tonga" => "-175,-20,5500000",
	"trinidadandtobago" => "-61,11,5500000",
	"tunisia" => "9,34,5500000",
	"turkey" => "35.08,39.22,5500000",
	"turkmenistan" => "59.62,39.65,5500000",
	"uganda" => "32,1,5500000",
	"ukraine" => "31.53,50,5500000",
	"unitedarabemirates" => "54,24,1500000",
	"unitedkingdom" => "-2.47,54.98,5500000",
	"unitedstates" => "-97,38,8000000",
	"unitedstatesvirginislands" => "-66.21,17.47,5500000",
	"uruguay" => "-56.07,-31.93,5500000",
	"uzbekistan" => "64,41,5500000",
	"vanuatu" => "166.9,-15.18,5500000",
	"venezuela" => "-66,8,5500000",
	"vietnam" => "107.99,15.64,5500000",
	"westernsahara" => "-13,25,1500000",
	"yemen" => "48,15,5500000",
	"zambia" => "30,-15,5500000",
	"zimbabwe" => "29.59,-20.25,1500000");
	

	//Open mysql conn
	$link = mysql_connect('localhost', 'root', '');
	mysql_set_charset('utf8',$link);
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}
	
	//select db
	$db = "worldheritage";
	mysql_select_db($db, $link);
	
	if(isset($_GET['cname_bb']))
	{
		//Fix Countryname
		if($_GET['cname_bb']=="unitedstates")
			$conname_x = "united states";
		else
			$conname_x = $_GET['cname_bb'];
		
		//Add Billboard
		$query = mysql_query("SELECT * FROM country_yenwie WHERE cname = '".$conname_x."'");
		$arrays = array();
		while($rows = mysql_fetch_array($query)){
			$arrays[]  = $rows;
		}
		$result = "";
		foreach($arrays as $row){
			$latlons = explode(",", $row['latlon']);
			if($latlons[0]!=null)
				$result  = $result . 
				"try{
					viewer.entities.add({
						position : Cesium.Cartesian3.fromDegrees(".$latlons[0].",".$latlons[1]."),
						id : '".$row['whname']."',
						name : 'point',
						ellipse : {
							semiMinorAxis : 40000.0,
							semiMajorAxis : 40000.0,
							material : Cesium.Color.RED.withAlpha(1),
							height : 100000
						}
					});
				}catch(e){}";
		}
		echo $result;
	}
	
	else if(isset($_GET['worldheritagename'])){
		//Query
		$heritagename = $_GET['worldheritagename'];
		$query = mysql_query("SELECT * FROM country_yenwie WHERE whname = '".$heritagename."'");
		while($rows = mysql_fetch_array($query)){
			$row = $rows;
		}
		
		//Result
		$result = "
		document.getElementById('describe').innerHTML = `
			<table style='font-size:2vmin;color:#ffffff;'>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname']."</td>
				</tr><tr>
					<td valign='top'>Country</td><td valign='top'> : </td>
					<td valign='top'>".$row['cname']."</td>
				</tr><tr>
					<td valign='top'>Coordinate</td><td valign='top'> : </td>
					<td valign='top'>".$row['latlon']."</td>
				</tr><tr>
					<td valign='top'>Continent</td><td valign='top'> : </td>
					<td valign='top'>".$row['continent']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe']."</td>
				</tr><tr>
					<td valign='top'>Long Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whlongdesribe']."</td>
				</tr><tr>
					<td valign='top'>History</td><td valign='top'> : </td>
					<td valign='top'>".$row['whhistory']."</td>
				</tr>
			</table>`;
			
		document.getElementById('describeother').innerHTML =`
			<table style='font-size:2vmin;color:#ffffff;'>
				<tr><td colspan=2><strong>France</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_fr']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_fr']."</td>
				</tr>
				<tr></tr><tr><td><strong>Arab</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_ar']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_ar']."</td>
				</tr>
				<tr></tr><tr><td><strong>Chinese</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_zh']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_zh']."</td>
				</tr>
				<tr></tr><tr><td><strong>Russian</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_rs']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_rs']."</td>
				</tr>
				<tr></tr><tr><td><strong>Spanish</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_sp']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_sp']."</td>
				</tr>
				<tr></tr><tr><td><strong>Japanese</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_jp']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_jp']."</td>
				</tr>
				<tr></tr><tr><td><strong>Dutch</strong></td></tr>
				<tr>
					<td valign='top'>Name</td><td valign='top'> : </td>
					<td valign='top'>".$row['whname_dt']."</td>
				</tr><tr>
					<td valign='top'>Description</td><td valign='top'> : </td>
					<td valign='top'>".$row['whdesribe_dt']."</td>
				</tr>
			</table>`;";
			
		echo $result;
	}
	
	else if(isset($_GET['PointedMode']))
	{
		//reselect database
		$db = "world";
		mysql_select_db($db, $link);
		
		//Add Billboard CAST(".$_GET['tablename']." AS SIGNED)
		//Additional exception to continent
		if(isset($_GET['continent'])){
			$query = mysql_query("SELECT * FROM ".$_GET['dbname']." WHERE continent = '".$_GET["continent"]."' ORDER BY  CAST(".$_GET['tablename']." AS SIGNED) DESC");
		}else{
			$query = mysql_query("SELECT * FROM ".$_GET['dbname']." ORDER BY  CAST(".$_GET['tablename']." AS SIGNED) DESC");
		}
		$arrays = array();
		while($rows = mysql_fetch_array($query)){
			$arrays[]  = $rows;
		}
		$result = "";
		$i=1;
		
		$startpoint = 1;
		if(isset($_GET['start'])){
			$startpoint = $_GET['start'];
		}
		$endpoint = count($arrays);
		if(isset($_GET['end'])){
			$endpoint = $_GET['end'];
		}
		
		foreach($arrays as $row){
			
			//end on limitation
			if($i>$endpoint){
				echo $result;
				return;
			}
			//set start
			if($i>=$startpoint){
				$cname = str_replace("'","",$row['cname']);
				$latlon = $myhash[str_replace(" ","",strtolower($cname))];
				if($latlon!=""){
					$latlon = explode(",", $latlon);
					//RANKING LABEL
					$ranklabel = 0;
					if($i<10){
						$ranklabel = $i."  ";
					}
					else if($i>=10&&$i<100){
						$ranklabel = $i."  ";
					}
					else if($i>=100&&$i<1000){
						$ranklabel = $i." ";
					}
						
					$result  = $result . 
						"try{
						//not all countries
						if(parent.countrywithzerorate.indexOf('".$cname."')>=0)
						{
							var entity = parent.G3DMAP.viewer.entities.add({
								name : '".$cname." ".($i)."',
								position : Cesium.Cartesian3.fromDegrees(".(($latlon[0]*1)-1).",".$latlon[1]."),
								billboard : {
									image : 'images/Point.png',
									scale: 0.3,
									horizontalOrigin : Cesium.HorizontalOrigin.RIGHT, // default
									verticalOrigin : Cesium.VerticalOrigin.CENTER, // default: CENTER
									eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0,-10010)),
									id : 'billboard',
									scaleByDistance : new Cesium.NearFarScalar(6e6,0.3,3e6,1.5)
								},
								label : {
									show : true,
									style: Cesium.LabelStyle.FILL_AND_OUTLINE,
									textAlign:'center',
									horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
									verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
									scale: 0.6,
									fillColor : Cesium.Color.BLACK,
									outlineColor : Cesium.Color.BLACK,
									eyeOffset : new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0, -10020)),
									text : '".$ranklabel."',
									translucencyByDistance  : new Cesium.NearFarScalar(6e6,0.0,3e6,1.0)
								}	
							});
							//entity.pixelOffset = new Cesium.Cartesian2(-20, -50);
							parent.G3DMAP.RankMark.push(entity);
						}
						}catch(e){}";
				}
			}
			//counting
			$i++;
		}
		echo $result;
	}
	
	//Close mysql conn
	mysql_close($link);
	
?>
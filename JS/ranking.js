
	function showRankingMenu(){
		resetTask();
		document.getElementById('rankmenu').setAttribute("style","display:block");
	}
	function hideRankingMenu(){
		document.getElementById('rankmenu').setAttribute("style","display:none");
	}

	var isPlaying = false;
	function playandpause(){
		if(isPlaying){
			isPlaying = false;
			stopTask();
		}
		else{
			isPlaying = true;
			runRankLoop();
		}
	}
	
	var tasks = new Array();
	var keepgoing = true;
	var runindex = 1;
	var timer;
	function runRankLoop(){
		document.getElementById('playpause').src="../../images/btnplay.png";
		keepgoing = true;
		tasks = new Array();
		for(var i=0;i<= parent.countrywithzerorate.length;i++){
			tasks.push(newTask(i));
		}
		tasks.push(function(){
			//alert("finish");
			//playandpause();
			runRankLoop();
		});
		runTask(tasks);
		
		
		function newTask(i){
			return function(doneCallback){
				rankingshow(i);
				doneCallback();
			}
		}
		
		function runTask(tasks){
			runindex = 1;
			runNextTask();
			function runNextTask(){
				var task = tasks[runindex];
				task(function(){
					if(keepgoing==true){
						runindex++;
						timer = setTimeout(runNextTask,5000);
					}
				});
			}
		}
	
	}
	
	function prevTask(){
		if(runindex>1){
			runindex--;
			keepgoing = false;
			rankingshow(runindex);
		}
	}
	
	function nextTask(){
		var l = parent.countrywithzerorate.length;
		if(runindex<l){
			runindex++;
			keepgoing = false;
			rankingshow(runindex);
		}
	}
	
	function stopTask(){
		document.getElementById('playpause').src="../../images/btnpause.png";
		keepgoing = false;
		if(timer)
			 window.clearTimeout(timer);
	}
	function resetTask(){
		document.getElementById('index').innerHTML = 0;
		document.getElementById("rankdescribe").innerHTML = "Sorting...";
	}
	
	var scrollvalue = 0;
	function rankingshow(i){
		if(i==1)
			scrollvalue = 0;
		if(i>2)
			scrollvalue=25*(i-2);
		document.getElementById("tablelist").scrollTop=scrollvalue; 
		
		document.getElementById('index').innerHTML = i;
		highlightTableRowVersionA(document.getElementById("row"+(i)), '#8888FF');
		i-=1;
		parent.latlontext.innerHTML = "";
		if(parent.colormodevalue.length>0){
			var countryname = parent.colormodevalue[i]['cname'];
			if(parent.countrywithzerorate.indexOf(countryname)>=0)
			var rate = GetValue(countryname,parent.G3DMAP.selectingtable);
			var rank;
			i+=1;
			if(i==1) rank = i+"st";
			else if(i==2) rank = i+"nd";
			else if(i==3) rank = i+"rd";
			else if(i>3) rank = i+"th";
			if(rate>1)
				document.getElementById("rankdescribe").innerHTML = "["+rank+"] "+countryname+" : "+rate;
			else if(rate==0)
				document.getElementById("rankdescribe").innerHTML = "["+rank+"] "+countryname+" : not"+parent.G3DMAP.selectingtable;
			else if(rate==1)
				document.getElementById("rankdescribe").innerHTML = "["+rank+"] "+countryname+" : "+parent.G3DMAP.selectingtable;
			
			parent.DialogMAPpositionextra(parent.G3DMAP.viewer,countryname.toLowerCase().replace(/ /g,""),2,2000000);//-4000000
		}
	}
	
	function GetValue(name,v){
		var ckey = 'cname'; //country table name as primary key [ALWAYS USE 'cname' !!!!!]
		var vkey = v; //table name
		for(var i=0;i<parent.colormodevalue.length;i++){ //colormodevalue variable generate by DOM from GetData();
			if(parent.colormodevalue[i][ckey].toLowerCase().replace(/ /g,"")==name.toLowerCase().replace(/ /g,"")){ // handles lowercase
				var rate =  parent.colormodevalue[i][vkey];
				rate = rate.replace(/%/, ""); //% handle percentage process
				return rate;
			}
		}
		return 0;
	}
	
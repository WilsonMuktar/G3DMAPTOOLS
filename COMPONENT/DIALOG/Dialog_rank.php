<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no">
    <script type="text/javascript" src="../../js/dragiframe.js"></script>
	<script type="text/javascript" src="../../js/jquery-2.1.1.js" ></script>
    <!--SCROLLBAR UI-->
	<script type="text/javascript" src="../../js/jquery.nicescroll.js"></script>
	<link rel="stylesheet" href="../../css/style.css">
<style>
@CHARSET "UTF-8";
body{
	background:rgba(52, 27, 43, 0.5);
}
#mainbody, #title{
	color:#fff;
	background:transparent;
}
#BIGTITLE{
	color: #fff;
	font-size:25px;
	width:100%;
	text-align:left;
	padding-left:25px;
}
.HeadColumn{
	background-color:#181818;
	color:#fff;
	text-align:center;
	//width:10%;
}
.Column{
	text-align:center;
	color:#fff;
	/*text-overflow:ellipsis;
    max-width: 80px; 
    white-space: nowrap; 
    overflow:hidden; */
}

	#rankmenu{
		//background:rgba(18,18,18,0.5);//#898989;
		//position:absolute;
		//top:-60px;
		left:0px;
	}
	#playpause, #prev, #next{
		position:relative;
		width:15px;
		height:15px;
		margin:2px;
		margin-top:10px;
	}
	#rankdescribe{
		font-size:15px;
		color: white;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top:3px;
		margin-left:10px;
		margin-right:10px;
		margin-bottom:10px;
	}
	#index{
		min-width:50px;
		position:absolute;
		top: 38px;
		left:40%;
		text-align:center;
		font-size:20px;
		color: white;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top:10px;
		margin-left:10px;
	}
	#next{
		margin-left:65px;
		margin-right:10px;
	}
</style>
	<script type="text/javascript" src="../../js/ranking.js"></script>
</head>
<script>
 $(window).load(function() {
    addHandle(document.getElementById('title'), window);
	resizedialog();
	rankingshow(1);
  });
</script>
<body>
    <div id="title" name="title" style="cursor: move; border:none;">
      <div id='name' style="font-size:0.7em; font-style:normal; margin-top:6px;">Ranking</div>
      <div id='Closeicons'>
		  <a >
		  <img src="../../images/close.png" onmouseover="changeImage(this)" onmouseout="rebackImage(this)" onclick="parent.closeRankDialog();" style="cursor:default;">
		  </a>
	  </div>
	</div>
	<div id="mainbody" style="color:#fff;">
	<center>
		<div id="rankmenu"	style="width:100%;">
			<div id="index">0</div>
			<img id="playpause" src="../../images/btnpause.png" onclick="playandpause();"/>
			<img id="prev" src="../../images/btnprev.png" onclick="prevTask();"/>
			<img id="next" src="../../images/btnnext.png" onclick="nextTask();"/>
			<div id="rankdescribe">Sorting...</div>
		</div>
		<table style="width:100%;">
			<thead>
			<tr>
				<td class="HeadColumn">&nbsp;Rank&nbsp;</td>
				<td class="HeadColumn">&nbsp;&nbsp;&nbsp;&nbsp;Country&nbsp;&nbsp;&nbsp;&nbsp;</td>
				<td class="HeadColumn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			</tr>
			</thead>
		</table>
		<div id="tablelist" style="overflow-y:scroll; height:150px;";>
		<table id="tablerank" style="width:100%;margin-top:-25px;">
			<thead>
			<tr>
				<td class="HeadColumn">Rank</td>
				<td class="HeadColumn">&nbsp;Country&nbsp;</td>
				<td class="HeadColumn">&nbsp;Value&nbsp;</td>
			</tr>
			</thead>
		   <tbody style="max-height:200px">
				<!--tr id="row1" class="Column" onclick="javascript:rankingshow(1);">
				<td>1</td><td>China</td><td>12345</td></tr-->
			</tbody>
		</table>
		</div>
	</center>
	</div>
</body> 
	<script>
	
		function DatabaseBASE(lvl){
			if(parent.global_username!="")//just for logged in user
			{
				parent.RequestExecute('./COMPONENT/PHPSQL/sql_databaseAdd.php?lvl='+lvl+"&username="+parent.global_username);
				//alert(parent.global_username+" "+lvl);
			}
		}
	
		//Close button hover event
		function changeImage(x){
			x.src="../../images/closer.png"
		}
		function rebackImage(x){
			x.src="../../images/closew.png"
		}
		//Resizing main dialog
		//Resizing all component to fit window
		function resizedialog(){
			var width = 300;
			var height= 300;
			document.body.style.width = width;
			document.body.style.height = height;
			parent.document.getElementById('dialogrank').width = width;
			parent.document.getElementById('dialogrank').height = height;
			parent.document.getElementById('dialogbase7').style.right = (width+20)+"px";
			parent.document.getElementById('dialogbase7').style.bottom = "50px";
			//parent.document.getElementById('dialogbase7').style.marginLeft =(-(width/2)).toString() + "px";
			//parent.document.getElementById('dialogbase7').style.marginBottom=(-(height)).toString() + "px";
		}
		//FIX stylish scrollbar
		$(window).ready(
			function(){
				$("#tablelist").niceScroll({
					cursorcolor:"#00F",
					cursoropacitymax:"0.5",
					cursorwidth :"2px",
					horizrailenabled: true,
					rtlmode: "auto",
					oneaxismousemode: "auto"});
					
				//FILL Rank list
				for(var i=1;i<=parent.colormodevalue.length;i++){
					if(parent.countrywithzerorate.indexOf(parent.colormodevalue[i-1]['cname'])>=0){//
						var row = newrow(i,parent.colormodevalue[i-1]['cname'],GetValue(parent.colormodevalue[i-1]['cname'],parent.G3DMAP.selectingtable));
						document.getElementById('tablerank').appendChild(row);
					}
				}
			}
		);
		
		function newrow(rank,cname,value){
			var rows = document.createElement('tr');
			rows.className = "Column"
			rows.id = "row"+rank;
			rows.setAttribute("onclick","javascript:rankingshow("+rank+");stopTask();");
			var cols = document.createElement('td');
			cols.innerHTML = rank;
			cols.setAttribute("style","text-overflow:ellipsis;max-width:1px;white-space: nowrap;overflow:hidden;");
			rows.appendChild(cols);
			cols = document.createElement('td');
			cols.setAttribute("style","text-overflow:ellipsis;max-width:80px;white-space: nowrap;overflow:hidden;");
			cols.innerHTML = cname;
			rows.appendChild(cols);
			cols = document.createElement('td');
			cols.innerHTML = value;
			rows.appendChild(cols);
			
			return rows;
		}
		
		//TABLE Script

		var savedStateCount = 0;
		var savedStates = new Array();
		function highlightTableRowVersionA(myElement, highlightColor)
		{
		  var i=0;
		  // Restore color of the previously highlighted row
		  for (i; i<savedStateCount; i++)
		  {
			restoreBackgroundStyle(savedStates[i]); 
		  }
		  savedStateCount=0;

		  // If you don't want a particular row to be highlighted, set it's id to "header"
		  if (!myElement || (myElement && myElement.id && myElement.id=="header") )
			return;

		  // The following code traverses every <td> within the <tr> and highlights it
		  // by changing its style[backgroundColor] property
		  if (myElement)
		  {
			var tableRow=myElement;

			// Save the backgroundColor style OR the style class of the row, so we can restore
			//  it later
			if (tableRow)
			{
			  savedStates[savedStateCount]=saveBackgroundStyle(tableRow);
			  savedStateCount++;
			}

			// Since myElement is a <tr>, then find the first <td>.  
			// You'd think that the <td> is  going to be the 
			//   firstChild of the <tr>, but it's not always the case (it 
			//   depends on how the browser defines the DOM).
			var tableCell=findNode(myElement, "TD"); 

			i=0;
			// Loop through every sibling.  Theoretically, a sibling of a <td> should be 
			//  another <td>, but this is not always the case on certain browsers, 
			//  so we need to check the tagName to be sure and skip to the next 
			//  sibling if the sibling is not a <td>)
			// We then highlight every siblings
			while (tableCell)
			{
			  // Make sure it's actually a cell (a <td>)
			  if (tableCell.tagName=="TD")
			  {
				// If no style has been assigned, assign it, otherwise Netscape will 
				// behave weird.
				if (!tableCell.style)
				{
				  tableCell.style={};
				}
				else
				{
				  savedStates[savedStateCount]=saveBackgroundStyle(tableCell); 
				  savedStateCount++;
				}
				// Assign the highlight color
				tableCell.style["backgroundColor"]=highlightColor;

				// Optional: alter cursor
				tableCell.style.cursor='default';
				i++;
			  }
			  // Go to the next cell in the row
			  tableCell=tableCell.nextSibling;
			}
		  }
		}
		/////////////////////////////////////////////////////
		// This function is used to find the first descendant with the specified tag name.
		/////////////////////////////////////////////////////
		function findNode(startingNode, tagName)
		{
		  // on Firefox, the <td> node might not be the firstChild node of the <tr> node
		  myElement=startingNode;
		  var i=0;
		  while (myElement && 
			(!myElement.tagName || (myElement.tagName && myElement.tagName!=tagName)))
		  {
			myElement=startingNode.childNodes[i++];
		  } 
		  if (myElement && myElement.tagName && myElement.tagName==tagName)
		  {
			return myElement;
		  }
		  // On Internet Explorer, the <tr> node might be the firstChild node of the <tr> node 
		  else if (startingNode.firstChild)
			return findNode(startingNode.firstChild, tagName);
		  return 0;
		}
		/////////////////////////////////////////////////////
		// This function takes an element as a parameter and 
		// returns an object which contain the saved state
		// of the element's background color.
		/////////////////////////////////////////////////////
		function saveBackgroundStyle(myElement)
		{
		  saved=new Object();
		  saved.element=myElement;
		  saved.className=myElement.className;
		  saved.backgroundColor=myElement.style["backgroundColor"];
		  return saved; 
		}

		/////////////////////////////////////////////////////
		// This function takes an element as a parameter and 
		// returns an object which contain the saved state
		// of the element's background color.
		/////////////////////////////////////////////////////
		function restoreBackgroundStyle(savedState)
		{
		  savedState.element.style["backgroundColor"]=savedState.backgroundColor;
		  if (savedState.className)
		  {
			savedState.element.className=savedState.className; 
		  }
		}
		
		
	</script>
	
</html>  
	
	/******************************************/
	/* MYSQL - PHP - JS without refresh pages */
	/******************************************/
	
	var xmlHttp;
	function RequestInfo(url)//"sql.php?cname="+str
	{
		xmlHttp=new XMLHttpRequest();
		if (xmlHttp==null)
		{
		 alert ("Browser does not support HTTP Request");
		 return;
		}
		xmlHttp.onreadystatechange=function() 
		{ 
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{ 
				//STATIC OPERATION AFTER SUCCESS
				//alert(xmlHttp.responseText);
				document.getElementById('describe').innerHTML = xmlHttp.responseText;
				document.getElementById('describeother').innerHTML = "";
			} 
		}
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	}
	
	var xmlHttp1;
	function RequestExecute(url)//"sql_billboard.php?cname_bb="+str
	{ 
		xmlHttp1=new XMLHttpRequest();
		if (xmlHttp1==null)
		{
		 alert ("Browser does not support HTTP Request");
		 return;
		}
		xmlHttp1.onreadystatechange=function() 
		{
			if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
			{
				//STATIC OPERATION AFTER SUCCESS
				var s = xmlHttp1.responseText;
				//alert(s+"");
				eval(s);
			}
		}
		xmlHttp1.open("GET",url,true);
		xmlHttp1.send(null);
	}
	
	var xmlHttp2;
	function RequestExecute1(url)//"sql_billboard.php?cname_bb="+str
	{ 
		xmlHttp2=new XMLHttpRequest();
		if (xmlHttp2==null)
		{
		 alert ("Browser does not support HTTP Request");
		 return;
		}
		xmlHttp2.onreadystatechange=function() 
		{
			if (xmlHttp2.readyState==4 || xmlHttp2.readyState=="complete")
			{
				//STATIC OPERATION AFTER SUCCESS
				var s = xmlHttp2.responseText;
				//alert(s+"");
				eval(s);
			} 
		}
		xmlHttp2.open("GET",url,true);
		xmlHttp2.send(null);
	}
	
	var xmlHttp3;
	function RequestValue(url)//"sql_billboard.php?cname_bb="+str
	{ 
		xmlHttp3=new XMLHttpRequest();
		if (xmlHttp3==null)
		{
		 alert ("Browser does not support HTTP Request");
		 return;
		}
		xmlHttp3.onreadystatechange=function() 
		{
			if (xmlHttp3.readyState==4 || xmlHttp3.readyState=="complete")
			{
				//STATIC OPERATION AFTER SUCCESS
				var s = xmlHttp3.responseText;
				document.getElementById('colorvalue').innerHTML = s;
			}
		}
		xmlHttp3.open("GET",url,true);
		xmlHttp3.send(null);
	}			
	
	function JSarraytoPHParray(JSArray)
	{
		$.ajax
		({
			type: "POST",
			url: "../PHPSQL/JSarraytoPHP.php",
			data: {"JSArray" : JSON.stringify(JSArray)},
			success: function (data) 
			{
				alert(data); //count of array elements
			}
		});
	}
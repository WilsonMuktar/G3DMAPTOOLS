
var jsfile = '<script language="javascript" src="../DRAGDROP/shim.js"><\/script>'; 
document.write(jsfile);
var jsfile = '<script language="javascript" src="../DRAGDROP/xlsx.js"><\/script>'; 
document.write(jsfile);

$(document).ready(function() {
	
	/*****************************
		Variables
	*****************************/
	var imgWidth = 180,
		imgHeight = 180,
		zindex = 0;
		dropzone = $('#droparea'),
		uploadBtn = $('#uploadbtn'),
		defaultUploadBtn = $('#upload');
		

	/*****************************
		Events Handler
	*****************************/
	dropzone.on('dragover', function() {
		//add hover class when drag over
		dropzone.addClass('hover');
		return false;
	});
	dropzone.on('dragleave', function() {
		//remove hover class when drag out
		dropzone.removeClass('hover');
		return false;
	});
	dropzone.on('drop', function(e) {
		//prevent browser from open the file when drop off
		e.stopPropagation();
		e.preventDefault();
		dropzone.removeClass('hover');
		
		//retrieve uploaded files data
		var files = e.originalEvent.dataTransfer.files;
		processFiles(files);

		return false;
	});
		
	uploadBtn.on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		//trigger default file upload button
		defaultUploadBtn.click();
	});
	defaultUploadBtn.on('change', function() {
		//retrieve selected uploaded files data
		var files = $(this)[0].files;
		processFiles(files);
		
		return false;
	});
	
	
	/***************************** 
		internal functions
	*****************************/	
	//Bytes to KiloBytes conversion
	function convertToKBytes(number) {
		return (number / 1024).toFixed(1);
	}
	
	function compareWidthHeight(width, height) {
		var diff = [];
		if(width > height) {
			diff[0] = width - height;
			diff[1] = 0;
		} else {
			diff[0] = 0;
			diff[1] = height - width;
		}
		return diff;
	}
	
	
	/***************************** 
		Process FileList 
	*****************************/	
	var processFiles = function(files) {
		if(files && typeof FileReader !== "undefined") {
			//process each files only if browser is supported
			//for(var i=0; i<files.length; i++) {
				readFile(files);
			//}
		} else {
			
		}
	}
	
	
	/***************************** 
		Read the File Object
	*****************************/	
	var readFile = function(files) {
		//if( (/image/i).test(file.type) ) {
			
			var f = files[0];
			//define FileReader object
			var reader = new FileReader();
			
			//init reader onload event handlers
			reader.onload = function(e) {	
				if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
				var data = e.target.result;
				if(use_worker) {
					xw(data, process_wb);
				} else {
					var wb;
					if(rABS) {
						wb = X.read(data, {type: 'binary'});
					} else {
						var arr = fixdata(data);
						wb = X.read(btoa(arr), {type: 'base64'});
					}
					process_wb(wb);
				}
			};
			
			//begin reader read operation
			//reader.readAsDataURL(file[0]);
			
			if(rABS) reader.readAsBinaryString(f);
			else reader.readAsArrayBuffer(f);
			
			$('#err').text('');
		/*} else {
			//some message for wrong file format
			$('#err').text('*Selected file format not supported!');
		}*/
	}
	
	/****************************
		Upload Image to Server
	****************************/
	var uploadToServer = function(oldFile, newFile) {
		// prepare FormData
		var formData = new FormData();  
		//we still have to use back old file
		//since new file doesn't contains original file data
		formData.append('filename', oldFile.name);
		formData.append('filetype', oldFile.type);
		formData.append('file', newFile); 
					
		//submit formData using $.ajax			
		$.ajax({
			url: 'upload.php',
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function(data) {
				console.log(data);
			}
		});	
	}
	
	
	//file upload via original byte sequence
	var processFileInIE = function(file) {

		var imageObj = {};
		var extension = ['jpg', 'jpeg', 'gif', 'png'];
		var filepath = file.value;
		if (filepath) {
			//get file name
			var startIndex = (filepath.indexOf('\\') >= 0 ? filepath.lastIndexOf('\\') : filepath.lastIndexOf('/'));
			var filedetail = filepath.substring(startIndex);
			if (filedetail.indexOf('\\') === 0 || filedetail.indexOf('/') === 0) {
				filedetail = filedetail.substring(1);
			}
			var filename = filedetail.substr(0, filedetail.lastIndexOf('.'));
			var fileext = filedetail.slice(filedetail.lastIndexOf(".")+1).toLowerCase();

			//check file extension
			if($.inArray(fileext, extension) > -1) {
				//append using template
				$('#err').text('');
				imageObj.filepath = filepath;
				imageObj.filename = filename;
				var randvalue = Math.floor(Math.random()*31)-15;
				$("#imageTemplate").tmpl(imageObj).prependTo( "#result" )
				.hide()
				.css({
					'Transform': 'scale(1) rotate('+randvalue+'deg)',
					'msTransform': 'scale(1) rotate('+randvalue+'deg)',
					'MozTransform': 'scale(1) rotate('+randvalue+'deg)',
					'webkitTransform': 'scale(1) rotate('+randvalue+'deg)',
					'oTransform': 'scale(1) rotate('+randvalue+'deg)',
					'z-index': zindex++
				})
				.show();
				$('#result').find('figcaption span').hide();
			} else {
				$('#err').text('*Selected file format not supported!');
			}
		}
	}
	
	/****************************
		Browser compatible text
	****************************/
	if (typeof FileReader === "undefined") {
		//$('.extra').hide();
		$('#err').html('Hey! Your browser does not support <strong>HTML5 File API</strong> <br/>Try using Chrome or Firefox to have it works!');
	} else if (!Modernizr.draganddrop) {
		$('#err').html('Ops! Look like your browser does not support <strong>Drag and Drop API</strong>! <br/>Still, you are able to use \'<em>Select Files</em>\' button to upload file =)');
	} else {
		$('#err').text('');
	}
	
	
	/******************************
		Excel file reader
	*******************************/
	var X = XLS;
	var XW = {
		/* worker message */
		msg: 'xls',
		/* worker scripts */
		rABS: '../DRAGDROP/xlsxworker2.js',
		norABS: '../DRAGDROP/xlsxworker1.js',
		noxfer: '../DRAGDROP/xlsxworker.js'
	};

	var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
	if(!rABS) {
		document.getElementsByName("userabs")[0].disabled = true;
		document.getElementsByName("userabs")[0].checked = false;
	}

	var use_worker = typeof Worker !== 'undefined';
	if(!use_worker) {
		document.getElementsByName("useworker")[0].disabled = true;
		document.getElementsByName("useworker")[0].checked = false;
	}

	var transferable = use_worker;
	if(!transferable) {
		document.getElementsByName("xferable")[0].disabled = true;
		document.getElementsByName("xferable")[0].checked = false;
	}

	var wtf_mode = false;

	function fixdata(data) {
		var o = "", l = 0, w = 10240;
		for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
		o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
		return o;
	}

	function ab2str(data) {
		var o = "", l = 0, w = 10240;
		for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
		o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
		return o;
	}

	function s2ab(s) {
		var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
		for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
		return [v, b];
	}

	function xw_noxfer(data, cb) {
		var worker = new Worker(XW.noxfer);
		worker.onmessage = function(e) {
			switch(e.data.t) {
				case 'ready': break;
				case 'e': console.error(e.data.d); break;
				case XW.msg: cb(JSON.parse(e.data.d)); break;
			}
		};
		var arr = rABS ? data : btoa(fixdata(data));
		worker.postMessage({d:arr,b:rABS});
	}

	function xw_xfer(data, cb) {
		var worker = new Worker(rABS ? XW.rABS : XW.norABS);
		worker.onmessage = function(e) {
			switch(e.data.t) {
				case 'ready': break;
				case 'e': console.error(e.data.d); break;
				default: xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r"); console.log("done"); cb(JSON.parse(xx)); break;
			}
		};
		if(rABS) {
			var val = s2ab(data);
			worker.postMessage(val[1], [val[1]]);
		} else {
			worker.postMessage(data, [data]);
		}
	}

	function xw(data, cb) {
		if(transferable) xw_xfer(data, cb);
		else xw_noxfer(data, cb);
	}

	function get_radio_value( radioName ) {
		var radios = document.getElementsByName( radioName );
		for( var i = 0; i < radios.length; i++ ) {
			if( radios[i].checked || radios.length === 1 ) {
				return radios[i].value;
			}
		}
	}

	function to_json(workbook) {
		var result = {};
		workbook.SheetNames.forEach(function(sheetName) {
			var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
			if(roa.length > 0){
				result[sheetName] = roa;
			}
		});
		return result;
	}

	function to_csv(workbook) {
		var result = [];
		workbook.SheetNames.forEach(function(sheetName) {
			var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
			if(csv.length > 0){
				result.push("SHEET: " + sheetName);
				result.push("");
				result.push(csv);
			}
		});
		return result.join("\n");
	}

	function to_formulae(workbook) {
		var result = [];
		workbook.SheetNames.forEach(function(sheetName) {
			var formulae = X.utils.get_formulae(workbook.Sheets[sheetName]);
			if(formulae.length > 0){
				result.push("SHEET: " + sheetName);
				result.push("");
				result.push(formulae.join("\n"));
			}
		});
		return result.join("\n");
	}

	var tarea = document.getElementById('b64data');
	function b64it() {
		if(typeof console !== 'undefined') console.log("onload", new Date());
		var wb = X.read(tarea.value, {type: 'base64',WTF:wtf_mode});
		process_wb(wb);
	}

	function process_wb(wb) {
		if(use_worker) XLS.SSF.load_table(wb.SSF);
		var output = "";
		/*switch(get_radio_value("format")) {
			case "json":
				output = JSON.stringify(to_json(wb), 2, 2);
				break;
			case "form":
				output = to_formulae(wb);
				break;
			default:
				output = to_csv(wb);
		}*/
		//default output as JSON 
		output = JSON.stringify(to_json(wb), 2, 2);
		if(out.innerText === undefined) out.textContent = output;
		else out.innerText = output;
		//alert(output);
		jsonparser(output);
		if(typeof console !== 'undefined') console.log("output", new Date());
	}

	function jsonparser(json){
		var array = new Array();
		array = json.split('{');
		
		var jsonarraytitle = array[1].split(':')[0].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
		jsonarraytitle = jsonarraytitle.replace("\"","");
		jsonarraytitle = jsonarraytitle.replace("\"","");
		//alert(jsonarraytitle);
		
		var jsonColumn = new Array();
		var columnstring = "";
		for(var i=0;i<array[2].split(",").length-1;i++){
			var column =  array[2].split(",")[i].split(':')[0].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
			column = column.replace("\"","");
			column = column.replace("\"","");
			jsonColumn.push(column);
			
			if(i==3)
				columnstring += column;
			else if(i>3)
				columnstring += "," + column ;
			//alert(jsonColumn[i]);
		}
		
		
		var confirmation = confirm("Update data from xls file? [ "+columnstring+" ] to Server [ "+parent.global_username+"_"+jsonarraytitle+" ]");
		if(confirmation)
		{
			tasks = new Array();
			tasks.push(showLoading());
			var jsonstr = eval('('+json+')');
			//alert(jsonstr[jsonarraytitle].length);
			for(var j=3;j<jsonColumn.length;j++){
				//add addnewColumnTask
				tasks.push(addnewColumnTask(
					parent.global_username+"_"+jsonarraytitle,//(jsonarraytitle)table name
					jsonColumn[j]//columns name
				));
			}
			for(var i=0;i<jsonstr[jsonarraytitle].length;i++){
				for(var j=3;j<jsonColumn.length;j++){
					//alert(jsonstr[jsonarraytitle][i][jsonColumn[j]]);
					//add updatenewColumnTask
					tasks.push(updatenewColumnTask(
						parent.global_username+"_"+jsonarraytitle,//(jsonarraytitle)table name
						jsonColumn[j],//columns name
						jsonstr[jsonarraytitle][i][jsonColumn[1]],//cname columns value
						jsonstr[jsonarraytitle][i][jsonColumn[j]]//columns value
					));
				}
			}
			tasks.push(hideLoading());
			
			//begin alltask
			runTask(tasks);
		}
	}
	
	
	var tasks = new Array();
	var keepgoing = true;
	var runindex = 1;
	var timer;
	
		
	function showLoading(){
		return function(doneCallback){
			document.getElementById('dragdroploading').style.display = "block";
			doneCallback();
		}
	}
		
	function hideLoading(){
		return function(doneCallback){
			document.getElementById('dragdroploading').style.display = "none";
			document.getElementById('err').style.display = "block";
			document.getElementById('err').innerHTML = "Successfully updated to server!";
			doneCallback();
		}
	}
		
	function addnewColumnTask(tbname,newcolumn){
		return function(doneCallback){
			parent.RequestExecute("./COMPONENT/PHPSQL/sql_databasedragdrop.php?newcolumn&tbname="+tbname+"&newcolumn="+newcolumn);
			doneCallback();
		}
	}
		
	function updatenewColumnTask(tbname,column,cname,value){
		return function(doneCallback){
			parent.RequestExecute("./COMPONENT/PHPSQL/sql_databasedragdrop.php?updatenewcolumn&tbname="+tbname+"&column="+column+"&cname="+cname+"&value="+value);
			doneCallback();
		}
	}
		
	function runTask(tasks){
		runindex = 0;
		runNextTask();
		function runNextTask(){
			var task = tasks[runindex];
			if(task)
			task(function(){
				if(keepgoing==true){
					runindex++;
					timer = setTimeout(runNextTask,100);
				}
			});
		}
	}
	
	
	
	
});
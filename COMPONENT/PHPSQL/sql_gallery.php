<?php

$filelist = "";
$dh;

function searchdirectory($path){
	$filelist = "";
	$dh = opendir($path);
	while (($file = readdir($dh)) !== false) {
		if($file != "." && $file != "..") {
			if (substr($file, -4, -3) =="."){
				$filelist = $filelist . "galleryimage('".$path."/".$file."');";
			}else{   
				$paths = $path."/".$file;
				$filelist = $filelist .searchdirectory($paths);
			}
		}
	}
	closedir($dh);
	return $filelist;
}

if(isset($_GET['dir'])){
	$path = $_GET['dir'];
	//$path = 'images/worldheritage/Asia';
	$filelist = searchdirectory($path);
	echo $filelist;
}
?>
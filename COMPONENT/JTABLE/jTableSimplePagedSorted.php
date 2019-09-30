<html>
  <head>

    <link href="themes/redmond/jquery-ui-1.8.16.custom.css" rel="stylesheet" type="text/css" />
	<link href="../../js/jtable/themes/metro/brown/jtable.css" rel="stylesheet" type="text/css" />
	<script src="../../js/jquery-2.1.1.js" type="text/javascript"></script>
    <script src="../../js/jquery-ui.js" type="text/javascript"></script>
    <script src="../../js/jtable/jquery.jtable.js" type="text/javascript"></script>
	
  </head>
  <body onload="reload('country_population_2014');">
	<div onclick="reload('wilson');";>CLICK ME</div>
	<div id="PeopleTableContainer" style="width: 600px;"></div>
	<script type="text/javascript">
	function reload(dbname){
		//Load person list from server
		if($('#PeopleTableContainer').children().length > 0)
			$('#PeopleTableContainer').jtable('destroy');
		alert(dbname);
		$(document).ready(function () {
		    //Prepare jTable
			$('#PeopleTableContainer').jtable({
				title: 'Table of people',
				paging: true,
				pageSize: 8,
				sorting: true,
				defaultSorting: 'cname',
				actions: {
					listAction: 'PersonActions.php?action=list&dbname='+dbname,
					createAction: 'PersonActions.php?action=create&dbname='+dbname,
					updateAction: 'PersonActions.php?action=update&dbname='+dbname,
					deleteAction: 'PersonActions.php?action=delete&dbname='+dbname
				},
				fields: {
					cname: {
						title: 'cname',
						key: true,
						create: false,
						edit: false
						//list: false
					},
					continent: {
						title: 'continent',
						width: '40%'
					},
					area: {
						title: 'area',
						width: '20%'
					},
					population: {
						title: 'population',
						width: '30%',
						create: false,
						edit: false
					}
				}
			});

			//Load person list from server
			$('#PeopleTableContainer').jtable('load');

		});
	}
	</script>
 
  </body>
</html>

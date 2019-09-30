<html>
  <head>
    <link href="../JTABLE/themes/redmond/jquery-ui-1.8.16.custom.css" rel="stylesheet" type="text/css" />
	<link href="../../js/jtable/themes/metro/brown/jtable.css" rel="stylesheet" type="text/css" />
	<script src="../../js/jquery-2.1.1.js" type="text/javascript"></script>
    <script src="../../js/jquery-ui.js" type="text/javascript"></script>
    <script src="../../js/jtable/jquery.jtable.js" type="text/javascript"></script>
	<style>
		div.jtable-main-container div.jtable-bottom-panel span.jtable-page-size-change{display:none;}
	</style>
  </head>
  <body>
	<div id="PeopleTableContainer" style="width:95%; height:100%;"></div>
	<script type="text/javascript">
    /*  var cal = ($(parent.document.body).height()-50)/50;
		//alert(parseInt(cal,10));
		$(document).ready(function () {
		    //Prepare jTable
			$('#PeopleTableContainer').jtable({
				title: 'Database',
				paging: true,
				pageSize: parseInt(cal,10),
				sorting: true,
				defaultSorting: 'conname ASC',
				actions: {
					listAction: 'JTABLE/PersonActions.php?action=list',
					createAction: 'JTABLE/PersonActions.php?action=create',
					updateAction: 'JTABLE/PersonActions.php?action=update',
					deleteAction: 'JTABLE/PersonActions.php?action=delete'
				},
				fields: {
					PersonId: {
						key: true,
						create: false,
						edit: false,
						list: false
					},
					conname: {
						title: 'Name',
						width: '10%'
					},
					Location: {
						title: 'Location',
						width: '20%'
					},
					Geo_coordinates: {
						title: 'Geo',
						width: '10%',
						create: false,
						edit: false
					},
					Area: {
						title: 'Area',
						width: '20%',
						create: false,
						edit: false
					},
					population: {
						title: 'Population',
						width: '20%',
						create: false,
						edit: false
					}
				}
			});
			//Load person list from server
			$('#PeopleTableContainer').jtable('load');
		}); */
	</script>
  </body>
</html>

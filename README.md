table-bootstrap-component
=========================

A component for CDE tool that render a table with Colvis option and table tools option.

## Screen 

<img src="https://raw.githubusercontent.com/fernandommota/table-bootstrap-component/master/images/screen.png" alt="Example of table-bootstrap-component" title="Table Bootstrap Component" align="center" height="400"/>

## Installation 

 - Download and extract the zip file on this path:
 
        *biserver-ce\pentaho-solutions\system\pentaho-cdf-dd\resources\custom\components\*
 
 - Restart your server!


## Translation 

* Example Portuguese-Brazilian 

```JavaScript
//Insert the code below in preExecution propertie of component
 function pre(){
     this.chartDefinition.oColVis={"buttonText": "Exibir / Esconder Colunas"};
   
 	this.chartDefinition.oLanguage = {
 		"sProcessing": "Processando...",
 		"sLengthMenu": "Mostrar _MENU_", 
 		"sZeroRecords": "Não foram encontrados resultados",
 		"sInfo": "Mostrando de _START_ a _END_ de _TOTAL_ registros",
 		"sInfoEmpty": "Mostrando de 0 a 0 de 0 registros",
 		"sInfoFiltered": "",
 		"sInfoPostFix": "",
 		"sSearch": "Buscar:",
 		"sUrl": "",
 		"oPaginate": {
 			"sFirst": "Primeiro",
 			"sPrevious": "Anterior",
 			"sNext": "Seguinte",
 			"sLast": "Último" 
 		}
 	};
 }
```
## Fonts

 - https://datatables.net/manual/styling/bootstrap

 - https://datatables.net/release-datatables/extensions/ColVis/examples/exclude_columns.html

 - http://datatables.net/extensions/tabletools/

 

#Addin Numeric BR

addIn created to format numbers in money BR(#,###.00), for CTools datatable component.

<img src="https://raw.githubusercontent.com/fernandommota/addin-numeric-br/master/images/numericBR.PNG" alt="Example of addin-numeric-br" title="addIn numericbr" align="center" />



* **Instalation**
 - 1 - Insert a "JavaScript Function component" 
 - 2 - Insert the code of file numericBR.js in this component.


* **Usage**
 
 ***Default***
 - In your table Component, insert the propertie "Column Types" the value 'numericBR' 
 
 ***Remove Cents*** 
  - Case you need remove cents apply this function in "Pre Execution" propertie.
   ```JavaScript
   function f() {  
       this.setAddInOptions('colType','numericBR',function(state){
          // if(state.colIdx == 1){ // for a specific column
               return {
                   decimal: false
               };
           // }
       });
   }
   ```
   *Contribution by juliano.segoa@gmail.com*
    

## Grand Total 

<img src="https://raw.githubusercontent.com/fernandommota/addin-numeric-br/master/images/numericBrGrandTotal.PNG" alt="Example of addin-numeric-br" title="addIn numericBrGrandTotal" align="center" />


 ***add Footer*** 
- Use the file numericBrGrandTotal.js and add this function on "Post Execution Propertie".

   ```JavaScript
   function addFooter(){
   	var tableId='#'+this.htmlObject+'Table';
       var tableColumnSize = $(tableId+' th').length;
   	var tableColumnGrandTotalSize = $(tableId+' th.numericBrGrandTotal').length;
   	var tableColumncolspan=tableColumnSize-tableColumnGrandTotalSize;
       
   	var tfootTemplate = '<tfoot>' +
   							'<tr class="numericBr-total">'+
   								'<td>Total</td>{{tdTotal}}' +
   							'</tr>' +
   							'<tr class="numericBr-grand-total">' +
   								'<td>Grand Total</td>{{tdGrandTotal}}' +
   							'</tr>' +
   						'</tfoot>';
       
   	var tdTotal='';
   	var tdGrandTotal='';
   	for(var i=0; i< tableColumnSize-1; i++){
   		tdTotal+="<td></td>";
   		tdGrandTotal+="<td></td>";        
   	}
   
   	tfootTemplate = tfootTemplate
   					.replace("{{tdTotal}}",tdTotal)
   					.replace("{{tdGrandTotal}}",tdGrandTotal);
                       
   	$(tableId).append(tfootTemplate);    
       
   	//force the render of table
   	$(tableId+"_filter input").val(" ").keyup().val("");    
   }
   ```

That's it! 

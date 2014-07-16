/** addIn numericBrGrandTotal 
@IT4biz 2014
@fernandommota Fernando Maia da Mota
**/

//global variable
var totals={};
 
var numericBrGrandTotal = {
	name: "numericBrGrandTotal",
	label: "Numeric BR Grand Total",
	defaults: {
		decimal: true,
		textFormat: function(v, st, opt) {			
			if (v != null){
				var nStr= v.toFixed(2)+'';
				x  = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? ',' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + '.' + '$2');
				}
				return x1 + (opt.decimal ? x2 : '');
			}else
				return '';
		}
	},
	init: function(){
		$.fn.dataTableExt.oSort[this.name+'-asc'] = $.fn.dataTableExt.oSort['numeric-asc'];
		$.fn.dataTableExt.oSort[this.name+'-desc'] = $.fn.dataTableExt.oSort['numeric-desc'];   
	},    
	implementation: function(tgt, st, opt){
		tableId='#'+tgt.parentNode.parentNode.parentNode.id;
  
		//initialize if necessary the object
		if(isNaN(totals[st.colIdx]))
			totals[st.colIdx]=new Array();
            
		//clear the grandTotal variable when the table is filtered
		if(tgt.parentNode.rowIndex==1){
			totals[st.colIdx].total=0;
			totals[st.colIdx].grandTotal=0;         
			for(var i=0; i<st.rawData.queryInfo.totalRows; i++)                
				totals[st.colIdx].grandTotal+=st.rawData.resultset[i][st.colIdx]; 
            
			formattedGrandTotal=opt.textFormat.call(this, totals[st.colIdx].grandTotal, st, opt);
			$(tableId+' tfoot tr:last td').eq(st.colIdx).text( formattedGrandTotal );
		}
        
		totals[st.colIdx].total+=st.value;
		formattedTotal=opt.textFormat.call(this, totals[st.colIdx].total, st, opt);
		$(tableId+' tfoot tr:first td').eq(st.colIdx).text( formattedTotal );
        
		var text = opt.textFormat.call(this, st.value, st, opt);
		$(tgt).empty().append("<span style='text-align:right;'>"+text+"</span>");
	}
};
	
Dashboards.registerAddIn("TableBootstrap", "colType", new AddIn(numericBrGrandTotal));    
/** end addIn numericBrGrandTotal **/
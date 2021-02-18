/**
 * 
 */


var resMap;

$(document).ready(function() {
	
	$(document).on("click", "[name='getDbTablespace']", function(e) {
		//$.selectDbTablespaceChart($(e.target));
		//$.test($(e.target));
		console.log("왜?");
	});

//	$.test = function(target) {
//		$.ajax({
//			url : "/selectDbTablespace",
//			data : {
//				tablespaceName : target.text()
//			},
//			success : function(data) {
//				resMap = data.resMap;
//				$.addChart(resMap);
//			},
//			error : function() {
//				alert("실패");
//			}
//			
//		});
//		
//	}
	
	
});
;(function($){ 

	
	
	$.selectDbTablespaceChart = function(target) {
		console.log("ㅎㅎㅎ");
		alert("dgdf");
		/*$.ajax({
			url : "/selectDbTablespace",
			data : {
				tablespaceName : target.text()
			},
			success : function(data) {
				resMap = data.resMap;
				$.addChart(resMap);
			},
			error : function() {
				alert("실패");
			}
			
		});*/
		
		
	};
	
	/*$.addChart  = function() {
		var ctx = document.getElementById("myPieChart");
		var myPieChart = new Chart(ctx, {
		  type: 'pie',
		  data: {
		    labels: ["Blue", "Red", "Yellow", "Green"],
		    datasets: [{
		      data: [12.21, 15.58, 11.25, 8.32],
		      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
		    }],
		  },
		});
		
	};*/
	
}(jQuery));

	
																																																																																																																																																																																																																														// lnbUI
																																																																																																																																																																																																																														// $(function(){
																																																																																																																																																																																																																														// lnbUI.click('#lnb
																																																																																																																																																																																																																														// li',
																																																																																																																																																																																																																														// 300)
																																																																																																																																																																																																																														// });
																																																																																																																																																																																																																														// }(jQuery));



/**
 * 
 */

$(document).ready(function() {
	$(document).on("click", "#goUsers", function(){
		$.goUsers();		
	});
	
	$(document).on("click", "#goTableSpace", function(){
		$.goTableSpace();
	});
});


(function($) {
	
	$.goUsers = function() {
		$.ajax({
			url : "/dbUsers",
			type : "GET",
			error : function(){
				alert("dbUsers 페이지 이동 실패");
			}
		});
		
	};
	
	$.goTableSpace = function() {
		
		
	};
	
});

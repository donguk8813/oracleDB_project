
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var resMap;
var addChkList = [];

$(document).ready(function() {
	$.selectFileChart();
	
	/*$(document).on("click", "[name='getDbTablespace']", function(e) {
		$.selectDbTablespaceChart($(e.target), e);
	});
	
	$(document).on("click", "[name='dbUser']", function(e){
		$.selectDbUserObjType($(e.target));
	});
	
	
	$(document).on("click", "[name='objTypeList']", function(e){
		$.selectObjList($(e.target));
	});*/
	
	$(document).on("click", "#Tablespace_file", function(e){
		$.selectFileChart();
	});
	
	
	$(document).on("click", "#Tablespace_obj", function(e){
		$.selectObjList();
	});
	
	
	
});
;(function($){ 

	
	
	
	
	/*$.selectDbTablespaceChart = function(target, e) {
		
		$.ajax({
			url : "/views/selectDbTablespace",
			type : "POST",
			data : {
				tablespaceName : $.trim(target.text())
			},
			success : function(data) {
				tbsChart = data.tbsChart;

				$.addChart(tbsChart);
				
				
				$.selectDbUsers(target);
			},
			error : function() {
				alert("실패");
			}
			
		});
		
		
	};
	
	$.selectDbUsers = function(target) {
		$.ajax({
			url : "/views/selectDbUsers",
			type : "POST",
			data : {
				tablespaceName : $.trim(target.text())
			},
			success : function(data) {
				dbUsers = data.dbUsers;
				//if(addChk != 1){
					$.addObj(target, dbUsers);	
					
				//}
				
			},
			error : function() {
				alert("$.selectDbUsers 함수 실패");
			}
			
		});
		
	};
	
	$.selectDbUserObjType = function(target) {
		$.ajax({
			url : "/selectDbUserObjType",
			type : "POST",
			data : {
				userName : target.text()
			},
			success : function(data) {
				$("#userName").empty();
				$("#userName").append(target.text());
				$.addObjList(data.dbUserObjType);
				
			},
			error : function() {
				alert("실패");
			}

		});	
	};
	
	$.selectObjList = function(target) {
		
		$.ajax({
			url : "/selectObjList", 
			type : "POST",
			data : {
				objType : $.trim(target.text())
				, userName : $("#userName").text()
			},
			success : function(data) {
				
				var tr = $("#objListTr");
				tr.empty();
				
				switch($.trim(target.text())){
				case "TABLE" :
					var str = '<th>OWNER</th>'
						+ '<th>TABLE_NAME</th>'
						+ '<th>TABLESPACE_NAME</th>';
					
					tr.append(str);
						
					break;
				case "INDEX" :
					var str = '<th>OWNER</th>'
						+ '<th>INDEX_NAME</th>'
						+ '<th>INDEX_TYPE</th>'
						+ '<th>TABLE_OWNER</th>'
						+ '<th>TABLE_NAME</th>'
						+ '<th>TABLE_TYPE</th>'
						+ '<th>UNIQUENESS</th>'
						+ '<th>COMPRESSION</th>';
					
					tr.append(str);
					break;
				default:;
				
				}
				
				
				$.addColumn(data.objTypeList);
			},
			error : function() {
				alert("실패");
			}
		});
		
	};*/
	
	
	$.selectFileChart = function() {
		$.ajax({
			url : "/selectFileChart",
			type : "POST",
			success : function(data) {
				$.addChart(data);
				
			},
			error : function() {
				alert("selectFileChart 실패");
				
			}
		});
		
		
	};
	
	
	
	
	$.selectObjList = function() {
		$.ajax({
			url : "/selectObjList",
			type : "POST",
			success : function (data) {
				$.addColumn(data);
				
			},
			error : function(e) {
				alert("selectObjList 실패");
			}
			
				
		});
		
	};
	
	
	
	/*$.addChart  = function(tbsChart) {
		var div = $(".myDonutChart");
		div.empty();
		var str = '<canvas id="myDonutChart" width="100%" height="50"></canvas>';
		div.append(str);
		var ctx = $("#myDonutChart");
		var myPieChart = new Chart(ctx, {
		  type: 'doughnut',
		  data: {
		    labels: ["실제 사용량(KB, %) : " + tbsChart.userBytes + "(KB)", "남은 사용량(%)", "실제 할당량(KB) : " + tbsChart.bytes + "(KB)"],
		    datasets: [{
		      data: [tbsChart.userPer, tbsChart.freePer, 0],
		      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
		    }],
		  },
		});
		
		var div2 = $(".myAllDonutChart");
		div2.empty();
		var str2 = '<canvas id="myAllDonutChart" width="100%" height="50"></canvas>';
		div2.append(str2);
		var ctx_all = $("#myAllDonutChart")
		var myAllPieChart = new Chart(ctx_all, {
			type: 'doughnut',
			data: {
				labels: ["전체 사이즈(KB)", "실제 할당 사이즈(KB)", "실제 사용 사이즈(KB)"],
				datasets: [{
					data: [tbsChart.maxBytes, tbsChart.bytes, tbsChart.userBytes],
					backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']
					
				}]
			}
		});
		
	};*/
	
	
	/*$.addObj = function(target, dbUsers) {
		console.log($.trim(target.text()));
		
		var chk = true;
		$.each(addChkList, function(i){
			if(addChkList[i] == $.trim(target.text())){
				chk = false;
				return;
			}
		});
		if(chk){
			var str = '<div class="collapse" id="'+target.attr("id")+'" aria-labelledby="headingOne" data-parent="#sidenavAccordion">'
				+ '<nav class="sb-sidenav-menu-nested nav">';
		
			
			for(var i=0; i < dbUsers.length; i++){
				str += '<a class="nav-link" name="dbUser" href="#l">'+dbUsers[i]+'</a>';
				
			}
			
			str += '</nav></div>';
		
			target.after(str);
			
			addChkList.push($.trim(target.text()));
			
		}
	};
	

	
	$.addObjList = function(dbUserObjType) {
		var div = $("#objList");
		div.empty();
		var str = "";
		$.each(dbUserObjType, function(i){
			//str += '<button class="btn btn-primary" type="button">'
			str += "&nbsp;&nbsp;&nbsp;" + '<a class="" href="#" name="objTypeList" style="color: black">' + "&nbsp;&nbsp;&nbsp;" 
				 + dbUserObjType[i];
		});
		
		div.append(str);
		
	};*/
	
	$.addChart = function(data) {
		$("#h1").text("Tablespace 파일 사용량 확인");
		$("#div_columns").empty();
		var div = $("#div_fileChk");
		var str = "";
		div.empty();
		
		for(var i=0; i<data.chartDomain.length; i++){
			str = '</br><ol class="breadcrumb mb-4">'
				+ 		'<li class="breadcrumb-item active" >UserName : ' + data.chartDomain[i].tablespaceName
				+			'<div id="userName"></div>'
				+		'</li>'
				+	'</ol>'
				+  '<div class="row">'
				+ 			'<div class="col-lg-6">'
				+				'<div class="card mb-4">'
				+ 					'<div class="card-header">'
				+						'<i class="fas fa-chart-pie mr-1"></i>실제 사용량'
           		+					'</div>'
           		+					'<div class="card-body myDonutChart"><canvas id="myDonutChart_'+i+'" width="100%" height="50"></canvas></div>'
           		+				'</div>'
           		+			'</div>'
           		+			'<div class="col-lg-6">'
				+               '<div class="card mb-4">'
				+                   '<div class="card-header">'
				+                       '<i class="fas fa-chart-pie mr-1"></i>전체 사용량'
				+                   '</div>'
				+                   '<div class="card-body myAllDonutChart"><canvas id="myAllDonutChart_'+i+'" width="100%" height="50"></canvas></div>'
				+               '</div>'
				+           '</div>'
				+      '</div></br>';
			
			div.append(str);
			

			var ctx = $("#myDonutChart_"+i);
			var myPieChart = new Chart(ctx, {
			  type: 'doughnut',
			  data: {
			    labels: ["실제 사용량(%) : " + data.chartDomain[i].userPer  + "%", "남은 사용량(%) : " + (100-data.chartDomain[i].userPer).toFixed(3) + "%", "실제 할당량(KB) : " + data.chartDomain[i].bytes + "(KB)"],
			    datasets: [{
			      data: [data.chartDomain[i].userPer, data.chartDomain[i].freePer, 0],
			      backgroundColor: ['#dc3545', '#007bff', '#ffc107', '#28a745'],
			    }],
			  },
			});
			
			var ctx_all = $("#myAllDonutChart_"+i);
			var freePer = 100 - (Number(data.chartDomain[i].userPerTot) + Number(data.chartDomain[i].bytesPerTot));
			console.log(freePer);
			var myAllPieChart = new Chart(ctx_all, {
				type: 'doughnut',
				data: {
					labels: ["실제 사용 사이즈(%) : " + data.chartDomain[i].userPerTot + "%" , "실제 할당 사이즈(%) : " + data.chartDomain[i].bytesPerTot + "%"  , "전체 사이즈(KB) : "+data.chartDomain[i].maxBytes + "(KB)" ],
					datasets: [{
						data: [data.chartDomain[i].userPerTot,  data.chartDomain[i].bytesPerTot, freePer  ],
						backgroundColor: ['#dc3545', '#007bff', '#ffc107', '#28a745']
						
					}]
				}
			});
			
		}
		

	};
	
	
	$.addColumn = function(data) {
		
		$("#h1").text("Tablespace 객체 확인");
		$("#div_fileChk").empty();
		
		var dbTablespace = data.dbTablespace;
		var dbColumns = new Map();
		dbColumns = data.dbColumns;
		
		var div = $("#div_columns");
		
		for(var i=0; i<dbTablespace.length; i++){
			var tablespaceName = dbTablespace[i];
			var columns = dbColumns[tablespaceName];
			
			var str = '</br><div class="card mb-4 ">'
						 + 		'<div class="card-header">'
						 +			'<i class="fas fa-table mr-1" ></i>'
						 + 			'<div  id="objList" style="display:inline-block">&nbsp;&nbsp;&nbsp;'+tablespaceName+'</div>'
						 +		'</div>'
					     +      '<div class="card-body">'
					     +          '<div class="table-responsive">'
					     +              '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'
					     +                  '<thead>'
					     +                       '<tr id="objListTr">'
					     +                          '<th>TABLESPACE_NAME</th>'
					     +                          '<th>SEGMENT_TYPE</th>'
					     +                          '<th>CNT</th>'
					     +                      '</tr>'
					     +                  '</thead>'
					     +                  '<tbody id="tbody">'
					   ;
			
			for(var j=0; j<columns.length; j++) {				
				    str  +=   				'<tr>'
				    	 + 							'<td>'+columns[j].tablespaceName+'</td>'
					     +   						'<td>'+columns[j].segmentType+'</td>'
					     +   						'<td>'+columns[j].objCnt+'</td>'
					     +						'</tr>';	
			}
			
			str +=                		'</tbody>'
			     +              		'</table>'
			     +          		'</div>'
			     +     		 '</div>'
			     +  	'</div></br>';
			div.append(str);
		}
		
		
	};
	
	
	
	// Pie Chart Example
	/*var ctx = document.getElementById("myDonutChart");
	var myPieChart = new Chart(ctx, {
	  type: 'doughnut',
	  data: {
	    labels: ["Blue", "Red", "Yellow", "Green"],
	    datasets: [{
	      data: [12.21, 15.58, 11.25, test],
	      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
	     
	    }],
	  },
	  
	});*/

	
	
}(jQuery));

	
								




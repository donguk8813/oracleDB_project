/**
 * 
 */
var dbUsers = [];
var dep1_onOff = false;
var dep2_onOff = false;

$(document).ready(function() {
		$.initalizeBody();

		/*
		 * ver1
		 * */
		$(document).on("click", "[name='dbUsers']", function(e) {
			if(!dep1_onOff){
				$.selectDbUserObjType($(e.target));
				dep1_onOff = true;
			} else{
				$(e.target).parents().find(".show").removeClass("show");
				dep1_onOff = false;
				
			}
		});
		
		/*
		 * ver2
		 * */
//		$(document).on("click", "[name='dbUsers']", function(e) {	
//			$.selectAllScript($(e.target));
//		});

		$(document).on("click", "[name='dbUserObjType']", function(e) {
			if(!dep2_onOff){
				$.selectObjList($(e.target));
				dep2_onOff = true;
			} else{
				$(e.target).closest("ul").find(".show").removeClass("show");
				dep2_onOff = false;
				
			}
		});
		
		$(document).on("click", "[name='objTypeList']", function(e) {
			$.selectObjDDL($(e.target));
			
		});
		
		
	});

;


/* lnb */ 
(function($){ 
	
	$.initalizeBody = function() {

	};

	$.selectDbUserObjType = function(target) {
		$.ajax({
			url : "/selectDbUserObjType",
			type : "POST",
			data : {
				userName : target.text()
			},
			success : function(data) {
				if(data.dbUserObjType.length != 0) {
					$.addDepth(data.dbUserObjType, target, 1);
				} else {
					var div = $(".middle");
					div.empty();
					var str = "<h2>"+target.text()+"의 DDL 정보가 없습니다.</h2>";
					div.append(str);
				}
			},
			error : function() {
				alert("실패");
			}

		});	
	};
	
	$.selectObjList = function(target) {
		$.ajax({
			url : "/selectObjTypeList", 
			type : "POST",
			data : {
				objType : target.text()
				, userName : target.closest("ul").closest("li").children("a").text()
			},
			success : function(data) {
				$.addDepth(data.objTypeList, target, 2);
			},
			error : function() {
				alert("실패");
			}
		});
		
	};
	
	/*
	 * ver1
	 * */
//	$.selectObjDDL = function(target) {
//		$.ajax({
//			url : "/selectObjDDL",
//			type : "POST",
//			data : {
//				objTypeName : target.text(),
//				objType : target.closest("ul").prev().text(),
//				userName : target.closest("ul").closest("li").closest("ul").prev().text()
//				
//			},
//			success : function(data) {
//				$.addDDL(data,  target.text());
//			},
//			error : function() {
//				alert("실패");
//			}
//			
//				
//			
//		});
//		
//	};
	
	/*
	 * ver2
	 * */
	$.selectObjDDL = function(target) {
		$.ajax({
			url : "/selectTableScript",
			type : "POST",
			data : {
				objTypeName : target.text(),
				objType : target.closest("ul").prev().text(),
				userName : target.closest("ul").closest("li").closest("ul").prev().text()
				
			},
			success : function(data) {
				$.addDDL(data,  target.text());
			},
			error : function() {
				alert("실패");
			}
			
				
			
		});
		
	};
	
	
	$.selectAllScript = function(target) {
		$.ajax({
			url : "/selectAllScript",
			type : "POST",
			data : {
				userName : target.text()
			},
			success : function(data) {
				$.addAllDDL(data, target.text());
			},
			error : function(request, status, error) {
				alert("실패");
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
				
			
		});
	};
	

	$.addDepth = function(obj, target, depth) {
		var str = "";
		str += "<ul class='show'><li>";
		
		$.each(obj, function(i) {
			
			switch(depth){
			case 1: 
				str += "<a href='#none' name='dbUserObjType'>" + obj[i] + "</a>";
				break;
			case 2:
				str += "<a href='#none' name='objTypeList'>" + obj[i] + "</a>";
				break;
			default : 
				break;
			}
			
		});

		str += "</li></ul>";
		console.log(target);
		target.after(str);

	};
	
	/*
	 * ver1
	 * */
//	$.addDDL = function(data, objTypeName) { 
//		var div = $(".middle");
//		div.empty();
//		var str = "<h2>"+objTypeName+"의 DDL 정보</h2>"
//					+ "<p>" + data.objDDL.replace(/\n/g, '<br/>') + "</p>";
//		
//		div.append(str);			
//					
//	};
	
	/*
	 * ver2
	 * */
	$.addDDL = function(data, objTypeName) { 
		var div = $(".middle");
		div.empty();
		var str = "<h2>"+objTypeName+"의 DDL 정보</h2>"
					+ "<p>" + "<br/> DROP TABLE " + data.userName + '.' + data.objTypeName + '; <br/><br/>'
					+ "CREATE TABLE " +  data.userName + '.' + data.objTypeName + ' <br/>'
					+ "( <br/>" ;
		
		for(var i in data.columns){
			
			str += "&nbsp;&nbsp;&nbsp;" 
				 + data.columns[i].ddl + "<br/>";
			
//			if(col.dataType == "NUMBER"){
//				str += '&nbsp;&nbsp;"' + col.columnName + '" ' + col.dataType + '(' + col.dataPrecision + ',' + col.dataScale + ') ';
//			}
//			if(col.dataType == "VARCHAR2") {
//				str += '&emsp;&nbsp;"' + col.columnName + '" ' + col.dataType + '(' + col.dataLength + ') ';
//				
//			}
//			
//			if(col.nullable == "N"){
//				str += "NOT NULL";
//			}
//			
//			console.log(i +" / " + data.columns.length);
//			if(i != data.columns.length-1) {
//				str += ", <br/>"
//			} else {
//				str += "<br/> )";
//				
//			}
			
		}
		
		str += "); <br/><br/>" ;
		
		
		for(var i in data.index) {
			
			str += data.index[i].ddl.replace(/\n/g, "<br/>").replace(/\t/g, "&nbsp;") + "<br/><br/>"; 
		}

		for (var i in data.constraint) {
			str += data.constraint[i].ddl.replace(/\n/g, "<br/>").replace(/\t/g, "&nbsp;") + "<br/><br/>";
		}
			
			
			
		str +=  "</p>" ;
		
		div.append(str);			
					
	};
	
	$.addAllDDL = function(data, userName ){
		var div = $(".middle");
		div.empty();
		var str = "<h2>" + userName+"의 모든 script 출력</h2>"
					+ "<p>";
					
		for(var i in data.type) {
			str += data.type[i].ddl.replace(/\n/g, '<br/>') + "<br/><br/>";
			
		}
		
		for(var i in data.table) {
			var objectName = data.table[i].objectName;
			
			str += "</br> DROP TABLE " + '"' + userName + '"."' + objectName + '"; <br/>'
				+ data.table[i].ddl.replace(/\n/g, '<br/>') + ";<br/><br/>";
			//str += data.table[i].ddl + "<br/><br/>";
			
//			for(var j in data.index) {
//				if(data.index[j].tableName == tableName) {
//					str += data.index[j].ddl.replace(/\n/g, '<br/>') + ";<br/><br/>";
//				}
//			}
			
			var indexTmpList = data.index.filter(function(data) { 
				return data.tableName == objectName;
			});
			
			for(var i in indexTmpList) {
				console.log("gg "+indexTmpList[i].objectName);
			}
			
			
//			for(var j in data.constraint) {
//				console.log("여기 "+data.constraint[j].tableName+ " / "+ data.table[i].tableName );
//				if(data.constraint[j].tableName == tableName) {
//					str += data.constraint[j].ddl.replace(/\n/g, '<br/>') +";<br/><br/>";
//				}
			}
			
			for(var j in data.package) {
				str += data.package[j].ddl.replace(/\n/g, '<br/>') + ";<br/><br/>";
			}
			
		
		
		
		
		div.append(str);
		
		
	};
	
//	var lnbUI = { 
//			click : function (target, speed) { 
//				
//				var _self = this, 
//				$target = $(target); 
//				_self.speed = speed || 300; 
//				$target.each(function(){ 
//					if(findChildren($(this))) {
//						return; 
//					} 
//					$(this).addClass('noDepth'); 
//				}); 
//				
//				function findChildren(obj) {
//					return obj.find('> ul').length > 0;
//				} 
//				
//				$target.on('click','a', function(e){ 
//					e.stopPropagation(); 
//					var $this = $(this), 
//					$depthTarget = $this.next(), 
//					$siblings = $this.parent().siblings(); 
//					$this.parent('li').find('ul li').removeClass('on'); 
//					$siblings.removeClass('on'); 
//					$siblings.find('ul').slideUp(250); 
//					if($depthTarget.css('display') == 'none') { 
//						_self.activeOn($this); 
//						$depthTarget.slideDown(_self.speed); 
//					} else { 
//						$depthTarget.slideUp(_self.speed); 
//						_self.activeOff($this); 
//					} 
//				}) 
//			}, 
//			activeOff : function($target) { 
//				$target.parent().removeClass('on'); 
//			}, 
//			activeOn : function($target) { 
//				$target.parent().addClass('on'); 
//			} 
//		}; 
//	
//	// Call lnbUI 
//	$(function(){ 
//		lnbUI.click('#lnb li', 300) 
//	});
	
}(jQuery));

	
																																																																																																																																																																																																																														// lnbUI
																																																																																																																																																																																																																														// $(function(){
																																																																																																																																																																																																																														// lnbUI.click('#lnb
																																																																																																																																																																																																																														// li',
																																																																																																																																																																																																																														// 300)
																																																																																																																																																																																																																														// });
																																																																																																																																																																																																																														// }(jQuery));


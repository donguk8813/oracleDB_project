<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<script type="text/javascript" src="../resources/js/dbUsers.js"></script>
<link rel="stylesheet" type="text/css" href="../resources/css/dbUsers.css">

</head>
<body>

	<!-- <div class="header">
	  <h1>Header</h1>
	  <p>Resize the browser window to see the responsive effect.</p>
	</div> -->

	<!-- <div class="topnav">
	  <a href="#">Link</a>
	  <a href="#">Link</a>
	  <a href="#">Link</a>
	</div> -->

	<div class="row">
		<div class="column side">
			<div id="lnb">
				<h1>DB 확인</h1>
				<ul>
					<c:forEach var="item" items="${dbUsers }">
						<li><a href="#none" name="dbUsers" >${item.userName }</a>
						</li>
					</c:forEach>
				</ul>
			</div>
			
		</div>
		<div class="column middle">
			<h2>DB 계정과 Object_Type 및 해당 Object를 선택해 주세요</h2>
			<!-- p>확인 할 </p> -->
		</div>
		<!-- <div class="column side">
	    <h2>Side</h2>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
	  </div> -->
	</div>


	<!-- <div class="footer">
	  <p>Footer</p>
	</div> -->
</body>
</html>
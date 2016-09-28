<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
  String path = request.getContextPath();
  String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
  <!-- base需要放到head中 -->
  <base href=" <%=basePath%>">
  <meta charset="UTF-8">
  <meta content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    html,body{
      height: 100%;
    }
    .error{
      width: 100%;
      height: 100%;
      position: relative;
    }
    .error_img{
      width:166px;
      height:203px ;
      display: block;
      border: 0;
      position: absolute;
      left: 50%;
      margin-left: -83px;
      top: 50%;
      margin-top: -164.5px;
    }
    p{
      font-size: 0.875rem;
      color: #dbdbdb;
      line-height: 2;
      text-align: center;
      margin-top: 2rem;
    }
    .fall{
      width: 53%;
      margin: 0 auto;
      display: block;
    }
  </style>
  <title>出错了</title>
</head>
<body>
<div class="error">
  <div class="error_img">
    <img class="fall" src="../../images/error.png"/>
    <p>加载失败。。。</p>
  </div>
</div>
</body>

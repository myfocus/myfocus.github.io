<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Amaze UI Widget</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <%--<link rel="icon" type="image/png" href="/assets/i/favicon.png">--%>
    <link rel="stylesheet" href="/assets/css/amazeui.min.css">
</head>
<body>
<div id="duomai_tuan" style="background-color: #F5F5F5;">
    <!-- Slider -->
    <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}'>
        <ul class="am-slides">
            <c:forEach var="item" items="${tbkItems}">
                <li>
                    <a href="${item.clickUrl}">
                        <img src="${item.pictUrl}">
                    </a>
                </li>
            </c:forEach>
        </ul>
    </div>

    <!-- Gallery -->
    <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default"
        data-am-gallery="{ pureview: false }">


        <c:forEach var="item" items="${uatmTbkItems}">
            <li>
                <div class="am-gallery-item" style="background-color: #fff;">
                    <a href="${item.clickUrl}">
                        <img src="${item.pictUrl}"
                             alt="${item.title}"/>
                        <h3 class="am-gallery-title">${item.title}</h3>
                        <div class="am-gallery-desc" style="color: #333;font-weight: 700;">￥${item.zkFinalPrice}</div>
                        <div class="am-gallery-desc" style="color: #f50;">返: 1G流量</div>
                    </a>
                </div>
            </li>
        </c:forEach>
    </ul>

    <!-- Navbar -->
    <%--<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default ">--%>
    <%--<ul class="am-navbar-nav am-cf am-avg-sm-4" style="background-color: #dd514c;">--%>
    <%--<li>--%>
    <%--<a href="tel:123456789">--%>
    <%--<span class="am-icon-phone"></span>--%>
    <%--<span class="am-navbar-label">京东</span>--%>
    <%--</a>--%>
    <%--</li>--%>
    <%--<li data-am-navbar-share>--%>
    <%--<a href="###">--%>
    <%--<span class="am-icon-share-square-o"></span>--%>
    <%--<span class="am-navbar-label">唯品会</span>--%>
    <%--</a>--%>
    <%--</li>--%>
    <%--<li data-am-navbar-qrcode>--%>
    <%--<a href="###">--%>
    <%--<span class="am-icon-qrcode"></span>--%>
    <%--<span class="am-navbar-label">淘宝</span>--%>
    <%--</a>--%>
    <%--</li>--%>
    <%--<li>--%>
    <%--<a href="https://github.com/allmobilize/amazeui">--%>
    <%--<span class="am-icon-github"></span>--%>
    <%--<span class="am-navbar-label">蘑菇街</span>--%>
    <%--</a>--%>
    <%--</li>--%>
    <%--<li>--%>
    <%--<a href="http://amazeui.org/getting-started">--%>
    <%--<span class="am-icon-download"></span>--%>
    <%--<span class="am-navbar-label">天猫</span>--%>
    <%--</a>--%>
    <%--</li>--%>
    <%--</ul>--%>
    <%--</div>--%>

</div>

<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/amazeui.min.js"></script>
</body>
</html>


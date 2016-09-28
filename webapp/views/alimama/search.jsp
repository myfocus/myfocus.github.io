<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>商品搜索</title>
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
    <a data-type="4" data-tmpl="390x460" data-tmplid="134" data-style="2" data-border="1" biz-s_logo="1" biz-s_hot="1" href="#">爱淘宝</a>
    <!-- Gallery -->
    <%--<ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default"--%>
        <%--data-am-gallery="{ pureview: false }">--%>
        <%--<c:forEach var="item" items="${items.results}">--%>
            <%--<li>--%>
                <%--<div class="am-gallery-item" style="background-color: #fff;">--%>
                    <%--<a href="${item.clickUrl}">--%>
                        <%--<img src="${item.pictUrl}"--%>
                             <%--alt="${item.title}"/>--%>
                        <%--<h3 class="am-gallery-title">${item.title}</h3>--%>
                        <%--<div class="am-gallery-desc" style="color: #333;font-weight: 700;">￥${item.zkFinalPrice}</div>--%>
                        <%--<div class="am-gallery-desc" style="color: #f50;">返: 1G流量</div>--%>
                    <%--</a>--%>
                <%--</div>--%>
            <%--</li>--%>
        <%--</c:forEach>--%>
    <%--</ul>--%>
</div>
<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/amazeui.min.js"></script>
<script type="text/javascript">
    (function(win,doc){
        var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
        if (!win.alimamatk_show) {
            s.charset = "gbk";
            s.async = true;
            s.src = "http://a.alimama.cn/tkapi.js";
            h.insertBefore(s, h.firstChild);
        };
        var o = {
            pid: "mm_117519798_16656916_61830905",/*推广单元ID，用于区分不同的推广渠道*/
            appkey: "23465607",/*通过TOP平台申请的appkey，设置后引导成交会关联appkey*/
            unid: "${userid}",/*自定义统计字段*/
            type: "click" /* click 组件的入口标志 （使用click组件必设）*/
        };
        win.alimamatk_onload = win.alimamatk_onload || [];
        win.alimamatk_onload.push(o);
    })(window,document);
</script>

</body>
</html>


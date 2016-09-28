<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%--<!DOCTYPE html>--%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no" />
    <meta  content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" href="/css/reset.css"/>
    <link rel="stylesheet" href="/css/weixin/exchangeFlow/chongzhi.css"/>
    <title>兑换记录</title>
</head>
<body>
    <div>
        <c:if test="${fn:length(apiResponse.data)<1}">
            <section class="hasnotchange">目前没有兑换记录^_^</section>
        </c:if>
        <c:forEach var="item" items="${apiResponse.data}">
            <section class="bigcard">
                <a href="${ctx}/wx/recharge/recordDetail?cardPasswd=${item.cardPassword}&source=${item.source.value}">
                    <div class="card over">
                        <h3 class="prizecard">
                            <span class="fl prizenum">${item.packageSize}M</span>
                            <c:choose>
                                <c:when test="${item.beGlobalMNO.value == 0}">
                                    <span class="fl">${item.flowFromWhere.title}</span>
                                </c:when>
                                <c:otherwise>
                                    <span class="fl">全网</span>
                                </c:otherwise>
                            </c:choose>

                            <c:if test="${item.rechargeState.value == 1}">
                                <img class="dh_img" src="/images/weixin/exchangeFlow/loading.png"/>
                            </c:if>
                            <c:if test="${item.rechargeState.value == 2}">
                                <img class="dh_img" src="/images/weixin/exchangeFlow/sucuss.png"/>
                            </c:if>
                            <c:if test="${item.rechargeState.value == 3}">
                                <img class="dh_img" src="/images/weixin/exchangeFlow/fail.png"/>
                            </c:if>
                        </h3>
                        <div class="carddetail">
                            <div class="cardbg">
                                <p class="fl detailtext">
                                    赠卡方：${item.batchName}<br/>
                                    手机号：${item.callPhone}<br/>
                                    充值时间：<fmt:formatDate value="${item.rechargeTime}" pattern="yyyy.MM.dd HH:mm"/><br/>
                                </p>
                                <a class="fr seedetail" href="${ctx}/wx/recharge/recordDetail?cardPasswd=${item.cardPassword}&source=${item.source.value}" > 充值详情 > </a>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </c:forEach>
        <%--由于赞助商还没有做,所以先注释掉--%>
        <%--<section class="bigcard">--%>
            <%--<a href="">--%>
                <%--<div class="card">--%>
                    <%--<h3 class="prizecard">--%>
                        <%--<span class="fl prizenum">50M</span>--%>
                        <%--<span class="fl">全网</span>--%>
                        <%--<img class="dh_img" src="/images/weixin/exchangeFlow/sucuss.png"/>--%>
                    <%--</h3>--%>
                    <%--<div class="carddetail">--%>
                        <%--<div class="cardbg">--%>
                            <%--<p class="fl detailtext">--%>
                                <%--赠卡方：口粮<br/>--%>
                                <%--手机号：13259593333<br/>--%>
                                <%--充值时间：2016.03.23 12:34<br/>--%>
                            <%--</p>--%>
                            <%--<a class="fr seedetail" href="" > 充值详情 > </a>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</a>--%>
            <%--<a href="">--%>
                <%--<div class="zanzhu">--%>
                    <%--<p class="zztit">赞助商：</p>--%>
                    <%--<div>--%>
                        <%--<img class="zanzhuimg fl" src="/images/weixin/exchangeFlow/zanzhu.png"/>--%>
                        <%--<img class="zanzhuimg fl" src="/images/weixin/exchangeFlow/zanzhu.png"/>--%>
                        <%--<span class="fsf fl">...</span>--%>
                        <%--<a class="seezan fr" href="">|&nbsp查看详情></a>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</a>--%>
        <%--</section>--%>
    </div>
</body>
</html>
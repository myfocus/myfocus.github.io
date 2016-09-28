<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%--<!DOCTYPE html>--%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no" />
    <meta  content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" href="/css/reset.css"/>
    <link rel="stylesheet" href="/css/weixin/exchangeFlow/chongzhi.css"/>
    <title>查看详情</title>
</head>
<body>
<div class="chongzhi">
    <section class="cz_team">
    <div class="zctop">
        <section class="cz">
            <c:choose>
                <c:when test="${empty apiResponse.data.rechargeState.value}">
                    后台出现查询异常
                </c:when>
                <c:when test="${apiResponse.data.rechargeState.value==1 && apiResponse.data.source.value==1}">
                    <img class="cz_img" src="/images/weixin/exchangeFlow/cz_zhuangtai.png"/>
                    <p class="successtip">
                        <strong>充值提交成功</strong><br/>
                        已提交充值请求，注意查收充值到帐短信<br/>
                        点击<a href="${ctx}/wx/recharge/exchangeRecord"><b>「兑换记录」</b></a>查看
                    </p>
                </c:when>
                <c:when test="${apiResponse.data.rechargeState.value==1 && apiResponse.data.source.value==2}">
                    <img class="cz_img" src="/images/weixin/exchangeFlow/cz_zhuangtai.png"/>
                    <p class="successtip">
                        <strong>充值提交成功</strong><br/>
                        已提交充值请求，<br/>
                        注意查收充值到帐短信
                    </p>
                </c:when>
                <c:when test="${apiResponse.data.rechargeState.value==2}">
                    <img class="cz_img" src="/images/weixin/exchangeFlow/cz_sucuss.png"/>
                    <p class="successtip">
                        <strong>充值成功</strong><br/>
                    </p>
                </c:when>
                <c:when test="${apiResponse.data.rechargeState.value==3}">
                    <img class="cz_img" src="/images/weixin/exchangeFlow/cz_fail.png"/>
                    <p class="successtip">
                        <strong>充值失败</strong>
                        <br/>
                        <a class="question" href="../../../html/app_text/app_faq.html">常见问题</a>
                    </p>
                </c:when>
            </c:choose>

        </section>
        <section class="zc_middle">
            <div class="list">
                <p class="fl label">充值号码</p>
                <p class="fr mation">${apiResponse.data.callPhone}</p>
            </div>
            <div class="list">
                <p class="fl label">流量大小</p>
                <p class="fr mation">${apiResponse.data.packageSize}m
                    (<c:choose>
                        <c:when test="${apiResponse.data.beGlobalMNO.value == 0}">
                            ${apiResponse.data.flowFromWhere.title}
                        </c:when>
                        <c:otherwise>
                            全网
                        </c:otherwise>
                    </c:choose>)
                </p>
            </div>
            <div class="list">
                <p class="fl label">卡密</p>
                <p class="fr mation">${apiResponse.data.cardPassword}</p>
            </div>
            <div class="list">
                <p class="fl label">充值日期</p>
                <p class="fr mation"><fmt:formatDate value="${apiResponse.data.rechargeTime}" pattern="yyyy.MM.dd HH:mm"/></p>
            </div>
        </section>
    </div>
    <c:choose>
        <c:when test="${empty apiResponse.data.rechargeState.value}">
            后台出现查询异常
        </c:when>
        <c:when test="${apiResponse.data.rechargeState.value==1}">

        </c:when>
        <c:when test="${apiResponse.data.rechargeState.value==2}">

        </c:when>
        <c:when test="${apiResponse.data.rechargeState.value==3}">
            <div class="fail_footer">
                <input type="hidden" value="" name="">
                <a class="rcz_button" type="button" href="${ctx}/wx/recharge/exchangeFlowView?cardPassword=${apiResponse.data.cardPassword}"/>重新充值</a>
                <p class="fail_footer_words">温馨提示：由于补充流量包也为当月失效,建议您在卡密有效期内,
                    尽量在每月的前半月进行补充操作.</p>
            </div>
        </c:when>
    </c:choose>

</section>
</div>
</body>
</html>
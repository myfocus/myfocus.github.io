<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<%--<!DOCTYPE html>--%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no" />
    <meta  content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" href="/css/reset.css"/>
    <link rel="stylesheet" href="/css/weixin/exchangeFlow/chongzhi.css?var=201607"/>
    <title>兑卡密</title>
</head>
<body>
    <input type="hidden" id="h_restatus" value="${apiResponse.status}">
    <input type="hidden" id="h_remsg" value="${apiResponse.msg}">
    <input type="hidden" id="h_cardPassword" value="${cardPassword}">
    <div class="chongzhi">

        <!--输卡密--->
        <section class="cardpassward " id="cardpassward_section">
            <!----LOGO--->

            <img id="logo" class="logo" src="${ctx}/images/weixin/exchangeFlow/logo/logo.png"/>

            <section class="put">
                <div class="cardmi">
                    <label class="nametype">卡密</label>
                    <input class="cpwinput" type="tel" value="" placeholder="请输入流量卡密码" maxlength="20" id="cardPasswd" name="cardPasswd"/>

                </div>
                <input class="nextbutton" type="button" value="下一步" name="" id="cardPasswdSub"/>
            </section>
            <p class="tishi">由于月末后3天流量卡即将失效、月初前3天为充值高峰期，建议避免在这个两个时间段充值。</p>
        </section>
        <!---兑换--->
        <section class="change hide" id="change_section">
            <section class="sj">
                <img id="logoImg" class="fl zs_logo"/>
                <div class="fr zs_infor">
                    <h3 class="zs_title">
                        赠卡方：<span id="batchName"></span>
                    </h3>
                    <p class="prizename">
                        <span id="packageSize"></span>M流量卡
                    </p>
                </div>
            </section>
            <section class="cz_team">
                <form action="${ctx}/wx/recharge/recharge" method="POST" id="cz_from">
                    <input type="hidden" name="cardNo" id="cz_cardPasswd"/>
                    <div class="cardmi">
                        <label class="nametype">手机号</label>
                        <input class="cz_phone" type="tel" placeholder="请输入充值手机号" maxlength="11" name="callPhone" id="cz_callPhone"/>
                    </div>
                    <input class="cz_button" type="button" value="充值" id="cz_from_sub"/>
                </form>
            </section>
            <p class="cz_tishi">由于月末后3天流量卡即将失效、月初前3天为充值高峰期，建议避免在这个两个时间段充值。</p>
        </section>

    </div>
    <!---卡密错误提示--->
    <p class="error">卡密错误</p>
    <!-- jQuery UI -->
    <script src="${ctx}/js/zepto.min.js"></script>
    <script type="text/javascript" src="/js/weixin/exchangeFlow/card_password.js?var=201609"></script>
    <script>
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        };
        $(document).ready(function() {
            var logoname=getUrlParam("logoname");
            if(logoname!=null){
            var  logoImg = "${ctx}/images/weixin/exchangeFlow/logo/"+logoname+".jpg";
            $("#logo").attr("src",logoImg);
            }
        })
    </script>
</body>
</html>
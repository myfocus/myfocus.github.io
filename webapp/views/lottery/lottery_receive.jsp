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
    <link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../../css/lottery/lottery_receive.css"/>
    <title>口粮送你免费流量</title>
</head>
<body>
<script>
var sharedToken = '${sharedToken}';

</script>
<div id="load">
    <div id="loading"></div>
</div>

<!--领奖--->
<div class="register">
    <div class="pgb">
    <section class="img_top">
        <img class="luck_img_1" src="../../images/lottery/reveice_slogan.png"/>
    </section>
    <section class="weChart_red">
        <div class="weChart_redbg">
            <!--领取-->
            <div class="toget">
                <!--领取-->
                <div class="weChart_red_form">
                    <input class="luck_text un1" type="tel" placeholder="请输入手机号" maxlength="11" value="" name="phonenum"/>
                    <input id="submit" class="luck_submit" type="button" value="领取"/>
                </div>
                <!----已参加--->
                <div class="join" style="display: none;">
                    <p class="seetip">
                        您不是新用户或已参与过此活动
                    </p>
                    <a class="seebtn" href="/html/down.html">立即查看</a>
                </div>
            </div>
        </div>
    </section>
    </div>
    <!--中奖弹出层--->
    <section class="popup">
        <div class="pop_content">
            <img class="luck_icon" src="../images/luck_icon.png"/>
            <p class="luck_tip">
                恭喜您获得<span class="prize">10M流量卡</span>

            </p>
            <p class="text-tip">登录app后在【我的流量卡】内充值<br/>
                更多免费流量尽在「口粮」</p>
            <a class="share_button" href="/html/down.html">下载APP</a>
        </div>
    </section>
    <p class="chart_footer">本活动由 <a href="https://mp.weixin.qq.com/s?__biz=MzI2NTM1MzY4OQ==&mid=100000063&idx=1&sn=c292f1d8aca5fa477f69c36bab13d773&scene=1&srcid=0702N8r7aIWJLaxsm6zVda2O&pass_ticket=ikEOHCD%2FXg8g1%2BSr8ajgGZGwIDlZOGV%2BhP3FPfTRXvA8ih4RZUo187mk8t3CJ6ql#rd"> 口粮</a>（若为）提供技术支持</p>
</div>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../../js/lottery/lottery_receive.js"></script>
<script>
    $(window).load(function(){
        $("#load").hide();
    })
</script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    var shareUrl = window.location.href.replace(/#.*$/,"");
    $.ajax({
        url: "/api/web/wx/jsapi/signature?url="+encodeURIComponent(shareUrl),
        type: "get",
        dataType:"json",
        success: function (result) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: result.data.wxAppId, // 必填，公众号的唯一标识
                timestamp: result.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: result.data.noncestr, // 必填，生成签名的随机串
                signature: result.data.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });
    wx.ready(function(){
        var option =  {
            title: '满地免费流量等你来捡', // 分享标题
            desc: "手指一动，每月2G-3G,和小伙伴一起来拿吧", // 分享描述
            link:"",
            imgUrl: "http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d" // 分享图标
        };
        wx.onMenuShareTimeline(option);
        wx.onMenuShareAppMessage(option);
        wx.onMenuShareQQ(option);
        wx.onMenuShareQZone(option);
    });
</script>
</body>

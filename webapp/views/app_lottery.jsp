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
    <link rel="stylesheet" type="text/css" href="../css/app_luckdraw.css?var=2016060610"/>

    <title>抽奖</title>
</head>
<body>
<script>
    var useLottery = ${useLottery};
</script>
<!----微信缩略图--->
<div style="margin:0 auto;display: none;">
    <img src="http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d"/>
</div>
    <div class="lottery">
        <section class="app_img_top">
           <img class="luck_img_1" src="../images/app_lottery_tip.png"/>

        </section>
        <section class="lottery_rote">
            <img src="../images/1.png" class="luckicon" id="icon0" style="display: none;" />
            <img src="../images/500m.png" class="luckicon" id="icon1" style="display: none;"  />
            <img src="../images/2.png" class="luckicon" id="icon2" style="display: none;" />
            <img src="../images/1.png" class="luckicon" id="icon3" style="display: none;" />
            <img src="../images/1g.png" class="luckicon" id="icon4" style="display: none;" />
            <img src="../images/2.png" class="luckicon" id="icon5" style="display: none;" />

            <div class="banner">
                <div class="turnplate">
                    <canvas class="item" id="wheelcanvas" width="422px" height="422px"></canvas>
                    <img class="pointer" src="../images/turnplate-pointer.png"/>
                </div>
            </div>
            <img class="lottery_shaw" src="../images/app_lottery_shaw.png"/>
        </section>
        <div class="extract_rule">
            <h3 class="er_title">抽奖规则</h3>
            <p class="rule_text">
            1、每个用户每日均可抽奖一次；</p>
            <p class="rule_text">2、分享此抽奖页，邀请好友抽奖送流量，好友至少得10M，同时你获得10斤口粮哦！
            </p>
            <p class="rule_text mianze" style="display: none;">3、此活动与苹果公司无关。
            </p>
        </div>
        <!--中奖弹出层--->
        <section class="popup">
            <div class="pop_content">
                <img class="luck_icon" src="../images/lottery_alert.png"/>
                <p class="luck_tip">
                    恭喜您获得<span class="prize">10M流量卡</span>

                </p>
                <a class="share_button" href="ruweapp://common/share?title=口粮送你免费流量&link=http%3a%2f%2fm.ruwe.cn%2fapi%2fweb%2flottery%2fmain&icon=http%3a%2f%2fimg.ruwe.cn%2fapi%2fshow%2fimage%3ffileKey%3d9063dd1e7729dab637cae5f1f0598d8d&desc=新用户流量大派送，更多免费流量尽在小口粮">喊小伙伴来抽奖"</a>
            </div>
            <div class="close"></div>
        </section>


    </div>

    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/awardRotate.js"></script>
    <script type="text/javascript" src="../js/app_luck.js?var=201653110"></script>
<script>
    $(document).ready(function() {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            $(".mianze").show();

        };


    })
</script>
</body>

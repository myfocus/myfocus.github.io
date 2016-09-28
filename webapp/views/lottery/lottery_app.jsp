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
    <link rel="stylesheet" type="text/css" href="../css/lottery/lottery_app.min.css?var=20160623"/>
    <title>口粮送你免费流量</title>
</head>
<script>
   var useLottery = ${useLottery};
</script>
<body>

        <div class="lottery swiper-slide">
            <section class="img_top">
                <img class="luck_img_1" src="../../images/app_lottery_tip.png"/>

            </section>
            <section class="lottery_zhuan">
                <div class="turnplate">
                    <div class="deng">
                        <img id="turntableimg" class="turntableimg" src="../images/lottery/lottery_rota_app.png"/>
                    </div>
                </div>
                <img id="rotate" class="rotate" src="../images/turnplate-pointer.png"/>
            </section>
            <img class="rora_bg" src="../images/lottery/rora_bg.png"/>
            <div class="extract_rule">
                <h3 class="er_title">抽奖规则</h3>
                <p class="rule_text">
                    1、每个用户每日均可抽奖一次；</p>
                <p class="rule_text">2、分享此抽奖页，呼叫小伙伴们来抽奖！！每个被邀请的新用户至少获得10m奖励，每邀请一个新用户你得到10斤口粮！奖励无上限哦～
                </p>
                <p class="rule_text mianze" style="display: none;">3、此活动与苹果公司无关。
                </p>
            </div>

        </div>

<!--领奖--->

    <!--中奖弹出层--->
        <section class="popup">
            <div class="pop_content">
                <p class="luck_tip">
                   此功能已下架，请下载新版。
                </p>
                <a class="share_button" href="/html/down.html">下载新版本</a>
            </div>
        </section>


<script type="text/javascript" src="../js/jquery.min.js"></script>

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
<script>
    $(document).ready(function() {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            $(".mianze").show();

        };
        $("#rotate").click(function(){
            $(".popup").show();
        })

    })
</script>
</body>

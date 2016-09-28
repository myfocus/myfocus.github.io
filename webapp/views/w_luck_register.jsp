<%@ page contentType="text/html; charset=utf-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../css/w_luck_register.css"/>
    <title>口粮送你免费流量</title>
</head>
<body>
<div class="register">
    <!----微信缩略图--->
    <div style="margin:0 auto;display: none;">
    <img src="http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d"/>
    </div>
    <section class="img_top">

        <img class="luck_img_1" src="../images/w_lottery_top_img.png"/>

    </section>
    <section class="weChart_red">
        <div class="weChart_redbg">
            <!--领取-->
            <div class="toget">
                <!--领取-->
                <div class="weChart_red_form">
                    <input class="luck_text un1" type="tel" placeholder="请输入手机号" value="" name="phonenum"/>
                    <div class="test_box">
                        <input class="luck_text un2" type="tel" placeholder="请输入验证码" value="" name="Vcode"/>
                        <input class="test_button" type="button" value="获取验证码"/>
                    </div>
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
    <!--中奖弹出层--->
    <section class="popup">
        <div class="pop_content">
            <img class="luck_icon" src="../images/luck_icon.png"/>
            <p class="luck_tip">
                恭喜您获得<span class="prize">10M流量卡</span>

            </p>
            <p class="text-tip">请下载APP登录并进行充值
                更多免费流量尽在「口粮」</p>
            <a class="share_button" href="/html/down.html">立刻充值</a>
        </div>
        <div class="close"></div>
    </section>
    <div class="extract_rule">
        <h3 class="er_title">抽奖规则</h3>
        <p>
        1、本活动每个用户只可参与一次；<br>
        2、本活动支持移动、联通、电信全国用户。
        </p>
    </div>
    <p class="chart_footer">本活动由 <a href="javascript:;"> 口粮</a>（若为）提供技术支持</p>
    <script src="../js/zepto.min.js"></script>
    <%--<script src="../js/jquery-1.10.2.js"></script>--%>
    <script src="../js/w_luck_register.js?v=201606162113"></script>
</div>
</body>

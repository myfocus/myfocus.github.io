<%@ page contentType="text/html; charset=utf-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="css/APP_luck_register.css"/>
    <title></title>
</head>
<body>
    <div class="register">
        <div class="focustop">
            <section>
                <img class="luck_img_1" src="../images/choujiang_title.png"/>
                <img class="luck_img_2" src="../images/choujiang_sanjia.png"/>
            </section>
            <section class="put_text">
                <div class="putbg">
                    <img class="luck_img_3" src="../images/register_top.png"/>
                    <div class="luck_form">
                        <input class="luck_text un1" type="tel" placeholder="请输入手机号" value="" name="phonenum"/>
                        <div class="test_box">
                            <input class="luck_text un2" type="tel" placeholder="请输入验证码" value="" name="test"/>
                            <input class="test_button" type="button" value="获取验证码"/>
                        </div>
                        <input id="submit" class="luck_submit_app" type="submit" value="去抽奖"/>
                    </div>
                </div>
            </section>
        </div>
        <footer class="footer">本活动由 <a href=""> 口粮</a>（若为)提供技术支持</footer>
    </div>
<script src="../js/zepto.min.js"></script>
<script src="../js/app_luck_register.js"></script>
</body>

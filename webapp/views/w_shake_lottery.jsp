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
  <link rel="stylesheet" type="text/css" href="../css/w_shake_lottery.css"/>
    <title>清凉一夏，炫酷流量免费拿</title>
</head>
<body>
<!----输入手机号--->
<div class="get_phone">
  <img class="getPhone_top" src="../images/shake_lottery/getPhone_top.png"/>
  <section class="phone_box">
      <p class="phone_rule">
        请填写您的真实手机号，以便通知您领奖，奖品于活动结束后的10个工作日内到账
      </p>
      <input id="tel" class="putphone" type="tel" name="tel" value="" placeholder="请输入您的手机号"/>
      <input id="submit" class="submit" type="button" value="提交" />
  </section>
  <section class="rule">
      <h3 class="total_title">活动规则</h3>
    <p class="rule_text">
      <img class="fish" src="../images/shake_lottery/fish.png"/>
      <img class="haixing" src="../images/shake_lottery/haixing.png"/>
      【活动时间】<br/>
  2016年5月17日——2016年5月31日<br/>
    【参与方式】<br/>
    关注南京银行官方微信（ebank_njcb），再微信编辑框内回复关键字“摇一摇”可获得活动链接，点击链接即可进入抽奖页面。<br/>
    【活动细则】<br/>
   1.每位用户可在回复关键字后获得一次摇一摇抽奖机会，每位用户每周仅限一次。<br/>
      2.活动奖品设置<br/>
      一等奖：1G手机流量；<br/>
      二等奖：500M手机流量；<br/>
      三等奖：100M手机流量；<br/>
      四等奖：10M手机流量；<br/>
      参与奖：3M手机流量。<br/>
    【奖品发放】<br/>
    奖品将于活动结束后10个工作日内发放到幸运用户手机上（注：手机号为用户参与活动时填写的手机号码，如未填写手机号码、手机号码错误、手机号码无法充值者视为弃权）。<br/></p>

  </section>
  <footer class="getPhoneFooter">
    流量活动方案提供商 <a href="">口粮+</a>（若为）
  </footer>

</div>
<!----输入手机号OVER--->
<!----摇一摇----->
<div class="shake_lottery">
    <img class="shake_top" src="../images/shake_lottery/shake_top.jpg"/>
    <section class="shake_box">
        <img class="shake_bg" src="../images/shake_lottery/shake_bg.png"/>
        <img class="hand" src="../images/shake_lottery/hand.png"/>
      <img class="hengfu" src="../images/shake_lottery/hengfu.png"/>
    </section>
  <footer class="shakeFooter">
    流量活动方案提供商 <a href="">口粮+</a>（若为）
  </footer>

</div>
<!----摇一摇-OVER---->
<!----先关注----->
<section class="focus_tip">
    <div class="ft">
        <img class="shake_alert_img" src="../images/shake_lottery/shake_alert.png"/>
        <p class="focusstep">
            1.请先关注“南京银行”微信公众号<br/>
            2.在公众号中回复关键字“摇一摇”即可获得活动链接<br/>
            3点击链接进入抽奖页面
        </p>
        <a class="focuslink" href="">去关注</a>
    </div>
</section>
<!------中奖提示---->
<div class="luck">
    <div class="luck_box">
        <img class="luck_bg" src="../images/shake_lottery/luck_bg.png"/>
        <div class="luck_con">
            <img class="luck_title_img" src="../images/shake_lottery/luck_one.png"/>
            <div class="luck_text">
                <p class="lt">恭喜您获得<br/>
                    <span class="luck_jp">1G手机流量+100斤口粮</span></p>
                <p class="duihuan">获得口粮的用户可到<br/>
                    口粮APP 去兑换流量哦</p>
                <a class="downlink" href="/html/down.html">去下载</a>
            </div>
        </div>
    </div>
</div>
<script src="../js/jquery.min.js"></script>
<script src="../js/w_shake_lottery.js"></script>
</body>


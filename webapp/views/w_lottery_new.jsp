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
  <link rel="stylesheet" type="text/css" href="../css/w_luckdraw.css"/>
  <link rel="stylesheet" type="text/css" href="../css/w_luck_register.css"/>
  <link rel="prefetch" href="../js/awardRotate.js" />
  <link rel="prefetch" href="../js/w_lottery_new.js?20160627" />
  <title>口粮送你免费流量</title>
</head>
<body>
<script>
  var sharedToken = '${sharedToken}';

</script>
<div class="lottery">
  <section class="img_top">
    <img class="luck_img_1" src="../images/w_lottery_top_img.png"/>

  </section>
  <section class="lottery_box">
    <img src="../images/2g.png" class="luckicon" id="icon0" style="display: none;" />
    <img src="../images/10m.png" class="luckicon" id="icon1" style="display: none;"  />
    <img src="../images/500m.png" class="luckicon" id="icon2" style="display: none;" />
    <img src="../images/10m.png" class="luckicon" id="icon3" style="display: none;" />
    <img src="../images/1g.png" class="luckicon" id="icon4" style="display: none;" />
    <img src="../images/10m.png" class="luckicon" id="icon5" style="display: none;" />

    <div class="banner">
      <div class="turnplate" >
        <canvas class="item" id="wheelcanvas" width="422px" height="422px"></canvas>
        <img class="pointer" src="../images/turnplate-pointer.png"/>
      </div>
    </div>
    <img class="w_lottery_shaw" src="../images/app_lottery_shaw.png"/>
  </section>
<footer class="w_lottery_footer">
  本活动由 <a href="javascript:;">口粮</a>（若为）提供技术支持
</footer>


</div>
<!--领奖--->
<div class="register" style="display: none;">
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
            <%--<img class="test_button" id="imgObj" src="/verificode/picandcode"/>--%>
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
      <a class="share_button" href="/html/down.html">下载APP</a>
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
</div>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/awardRotate.js"></script>
<script src="../js/w_lottery_new.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '${wxappid}', // 必填，公众号的唯一标识
    timestamp: '${timestamp}', // 必填，生成签名的时间戳
    nonceStr: '${noncestr}', // 必填，生成签名的随机串
    signature: '${wxsignature}',// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function(){
    // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
    wx.onMenuShareTimeline({
      title: '免费流量等你来拿', // 分享标题
      desc: "新用户流量大派送，更多免费流量尽在小口粮", // 分享描述
      link:"",
      imgUrl: "http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d" // 分享图标
    });
    // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
    wx.onMenuShareAppMessage({
      title: '免费流量等你来拿', // 分享标题
      desc: "新用户流量大派送，更多免费流量尽在小口粮", // 分享描述
      link:"",
      imgUrl: "http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d", // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
    });
  });
</script>

</body>

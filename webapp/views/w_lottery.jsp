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

  <title>口粮送你免费流量</title>
</head>
<body>
<script>
  var sharedToken = '${sharedToken}';

</script>
<div class="lottery">
  <!----微信缩略图--->
  <div style="margin:0 auto;display: none;">
  <img src="http://img.ruwe.cn/api/show/image?fileKey=9063dd1e7729dab637cae5f1f0598d8d"/>
  </div>
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
<script type="text/javascript" src="../js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="../js/awardRotate.js"></script>
<script type="text/javascript" src="../js/w_luck.js?v=520"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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

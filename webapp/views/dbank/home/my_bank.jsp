
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta name=”format-detection” content=”telephone=no” />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" type="text/css" href="../../../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/dbank/my_bank.css"/>
    <title>我的流量银行</title>
</head>
<body>
  <div class="my_bank">
      <section class="showinfor">
          <div class="nownum">
            <p class="nowtext">当前流量</p>
            <p class="moneynum">${merchantUserInfoResp.flowCoin}<span>币</span></p>
          </div>
          <div class="show_menu">
            <span class="tqll">提取流量</span>
            <span class="fxjl">分享记录</span>
            <span class="dhjl">兑换记录</span>
          </div>
      </section>
      <section class="my_get">
          <div class="getbi">
              <div class="fl get_left">
                <p class="fun">邀请关注口粮公众号<span>+100流量币</span></p>
                <p class="result">每个好友关注成功后即可获得</p>
              </div>
              <a class="fr get_href" href="">邀请说明</a>
          </div>
          <div class="getbi">
              <div class="fl get_left">
                  <p class="fun">邀请关注口粮公众号<span>+100流量币</span></p>
                  <p class="result">每个好友关注成功后即可获得</p>
              </div>
              <a class="fr get_href" href="">邀请说明</a>
          </div>
          <div class="getbi">
              <div class="fl get_left">
                  <p class="fun">邀请关注口粮公众号<span>+100流量币</span></p>
                  <p class="result">每个好友关注成功后即可获得</p>
              </div>
              <a class="fr get_href" href="">邀请说明</a>
          </div>
      </section>
  </div>
</body>
</html>

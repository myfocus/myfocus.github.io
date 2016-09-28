
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta name=”format-detection” content=”telephone=no” />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" type="text/css" href="../../../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/dbank/extract.css"/>
    <title>我的流量银行</title>
</head>
<body>
  <div class="extract">
      <section class="nownum">
        <p class="nowtext">当前流量</p>
        <p class="moneynum">56<span>币</span></p>
        <a class="question_icon" href=""><img src="../../../images/dbank/question_icon.png"/></a>
      </section>
        <input class="phonenum" type="tel" placeholder="请输入手机号码" name="" value="" />
    <section class="changelist">
        <div class="list">
            <span class="fl gprsnum">1024M</span>
            <div class="fr change">
              <input class="fr ratiomoney" type="button" value="340币" name=""/>
              <span class="fr ratio">1m＝11.3币</span>
            </div>
        </div>
      <div class="list">
        <span class="fl gprsnum">1024M</span>
        <div class="fr change">
          <input class="fr ratiomoney active" type="button" value="340币" name=""/>
          <span class="fr ratio">1m＝11.3币</span>
        </div>
      </div>
    </section>
    <!----兑换成功---->
    <section class="changebg">
       <div class="changetip">
         <img class="changtopimg" src="../../../images/dbank/changeok.png"/>
         <h4 class="cok">兑换成功</h4>
         <p>充值提醒将以短信的形式
           发送到您的手机</p>
         <img class="close" src="../../../images/dbank/close.png"/>
       </div>
    </section>
  </div>
</body>
</html>

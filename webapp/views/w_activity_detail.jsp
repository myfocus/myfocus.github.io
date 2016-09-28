<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=utf-8" language="java" %>
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
  <link rel="stylesheet" type="text/css" href="../css/w_activity.css"/>
  <title>活动详情</title>
</head>
<body>
<div class="activity">
  <section class="explain_top">
    <div class="list_content noborder">
      <div class="icon fl"><img src="${activityDetail.imageLogoMd5}"/> </div>
      <div class="text fl">
        <p class="list_title">
          ${activityDetail.programName}

        </p>
        <p class="people_number">${activityDetail.virtualJoinPeoples}人参加</p>
      </div>
    </div>
    <p class="activity_explain" id="box">
      ${activityDetail.programDesc}<br><br>

    </p>
    <span class="showmore">更多</span>
  </section>
  <section class="get_step">
    <p class="as">活动流程：</p>
    <div id="site-wrapper" class="site-wrapper">
      <div id="active">
        <div class="swipe-wrap">
          <c:if test="${activityDetail.programSequenceInfo ne null}">
            <c:forEach items="${activityDetail.programSequenceInfo}" var="list">
              <div>
                <img src="${list.imgSeq}" />
                <p class="step_con">${list.description}</p>
              </div>
            </c:forEach>
          </c:if>

        </div>

      </div>

    </div>
  </section>
  <div class="pdb">
    <section class="activity_rule">
      <h5 class="rule_title">活动规则：</h5>

      <p class="rule_con">${activityDetail.programRuleDesc}</p>
      <c:if test="${activityDetail.programType.value eq 0}">
        <p class="call">活动参与过程中有任何疑问，可联系客服电话：
          <sapn>400-879-6969</sapn>（服务时间9:00-23:00）</p>
      </c:if>
      <c:if test="${activityDetail.programType.value eq 1}">
        <p class="call">本活动来源与网络，活动内容归原活动方所有，与口粮无关。
          如您对活动有任何的问题、疑虑或投诉，请联系原活动方寻求帮助和解决。您参加活动的同时即代表同意本声明.</p>
      </c:if>
    </section>

    <section class="about_kou" style="display:none;">
      <p class="about_title">关于口粮</p>
      <h1 class="about_h1">口粮，你的手机流量乐园</h1>
      <p class="about_text">
        1、流量轻松得，连续签到赚更多<br/>
        2、流量还可以抢？来啊，和好友互相伤害啊<br/>
        3、免费活动赚流量，10M－2G无上限！海量游戏、商品，流量边玩边得
      </p>
      <div class="about_down"><a class="about_button" href="">本官想要更多免费流量!!!</a> </div>
    </section>
  </div>
  <footer class="detaile_footer">
    <c:if test="${activityDetail.taskType eq 0}">
      <input style="display: none;" id="vcode" type="text" value="${activityDetail.targetUrl}"/>
      <a class="downnow copy" href="JavaScript:void(0);"data-clipboard-action="copy" data-clipboard-target="#vcode"> 复制公众号</a>

    </c:if>
    <c:if test="${activityDetail.taskType eq 1}">
      <a  class="downnow location" href="${activityDetail.targetUrl}" data-type="${activityDetail.taskType}" data-configs='${activityDetail.programStyleJson}'> 立即参与</a>
    </c:if>

    <c:if test="${activityDetail.taskType eq 2}">

      <a class="downnow location" href="http://192.168.199.55:8093/api/download/file?fileKey=${activityDetail.targetUrl}" data-type='${activityDetail.taskType}' data-configs='${activityDetail.programStyleJson}'> 立即下载</a>
    </c:if>
  </footer>

  <!---立即下载---->
  <div class="downbox" style="display: none;">
    <div class="down">
      <span class="down_close"></span>
      <img class="downimg" src="../images/activity/downimg.png">
      <p class="down_tip">
        参与此活动需下载app「口粮」
      </p>
      <a class="down_btn" href="">立即下载</a>
    </div>
  </div>

  <script src="../js/jquery.min.js"></script>
  <script src="../js/swipe.js"></script>
  <script src="../js/app_active_step.js"></script>
  <script src="js/clipboard.min.js"></script>

  <script>
    var text = $(".activity_explain").html();
    if(text>200){
      var hidetext = $(".activity_explain").html().substring(0,200);
      $(".activity_explain").html(hidetext+"...");
      $(".showmore").click(function(){
        if($(this).html()=="更多"){
          $(".activity_explain").html(text);
          $(".showmore").html("收起");
        }else{
          $(".activity_explain").html(hidetext+"...");
          $(".showmore").html("更多");
        }
      })
    }else{
      $(".showmore").hide();
    }


  </script>
  <script>
    $(".close").click(function(){
      $(".loginbox").fadeOut();
    });

    $(".location").click(function(){
      var type = $(this).data('type');
      var configs = $(this).data('configs');

      if(/com\.ruowei\.dataflow/.test(navigator.userAgent)){
        //口粮app访问
        if(type==1 ) return true;
        else{ //下载活动
          window.location.href = "ruweapp://activity/download?id=${activityDetail.id}&name="+configs.name +"&package="+configs.package +"&link="+encodeURIComponent($(this).attr('href'));
          return false;
        }
      }
      else{
        //非口粮app访问
        //提示框：请下载口粮app……
        $(".about_kou").show();
        $(".downbox").show();
        $(".down_close").click(function(){
          $(".downbox").hide();
        })
        return false;
      }
    })
  </script>
  <script>
    var clipboard = new Clipboard('.copy');

    clipboard.on('success', function(e) {
      alert("公众号已复制到剪切板");
      console.log(e);
    });

    clipboard.on('error', function(e) {
      console.log(e);
    });
  </script>
</body>

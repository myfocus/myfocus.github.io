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
    <meta name=”format-detection” content=”telephone=no” />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../css/app_activity.min.css?var=201608111932"/>
    <title>活动详情</title>
</head>

<body class="bg">
<div class="activity">
    <section class="explain_top">
        <div class="list_content noborder">
            <div class="icon_d fl">

                <c:if test="${activityDetail.imageLogoMd5 == '' }">
                    <img src="http://img.ruwe.cn/api/show/image?fileKey=f7b8714c059847a81201df8459579288"/>
                </c:if>

                <c:if test="${activityDetail.imageLogoMd5 != ''}">
                    <img src="${imageHost}${activityDetail.imageLogoMd5}"/>
                </c:if>
            </div>
            <div class="text_d fl">
                <p class="list_title_d">
                    ${activityDetail.programName}

                </p>
                <p class="people_number_d">${activityDetail.virtualJoinPeoples}人参加</p>
            </div>
        </div>
        <div class="exp">

            <pre class="activity_explain" id="box"> ${activityDetail.programDesc}</pre>
            <span class="showmore">更多</span>


        </div>
    </section>
    <c:if test="${activityDetail.programSequenceInfo.size()>0 }">
        <div class="box">
            <section class="get_step">
                <p class="as">活动流程：</p>
                <div class="step">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                                <c:forEach items="${activityDetail.programSequenceInfo}" var="list">
                                    <div class="swiper-slide">
                                        <div class="step_img"><img src="${imageHost}${list.imgSeq}" /></div>
                                        <h3 class="step_con">${list.description}</h3>
                                        <p class="contentDesc">${list.contentDesc}</p>
                                    </div>
                                </c:forEach>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </c:if>
    <c:if test="${activityDetail.programSequenceInfo.size() <= 0 }">

    </c:if>
    <div class="pdb">
        <section class="activity_rule">
            <div class="nom">
                <h5 class="rule_title">活动规则：</h5>

                <pre class="rule_con">${activityDetail.programRuleDesc}</pre>

            </div>
            <c:if test="${activityDetail.platformProgramType.value eq 0}">
                <p class="call" style="text-align: left;">·活动参与过程中有任何疑问，可联系客服电话：
                    <span style="color: #44c27e;">400-879-6969</span>（服务时间9:00-23:00）<br/>
                    <span class="iphonemianze" style="display: none">·此活动与苹果公司无关。</span>
                </p>
            </c:if>
            <c:if test="${activityDetail.platformProgramType.value eq 1}">
                <p class="call" style="text-align: left;">
                    ·本活动来源于网络，活动内容归原活动方所有，与口粮无关；<br/>
                    ·您参与活动的同时即代表同意本声明；<br/>
                    <span class="iphonemianze" style="display: none">·此活动与苹果公司无关。</span>
                </p>
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
            <div class="about_down"><a class="about_button" href="/html/down.html">本官想要更多免费流量!!!</a> </div>
        </section>
    </div>
    <c:if test="${activityDetail.platformProgramType.value eq 0}">
        <footer class="detaile_footer">

            <c:if test="${activityDetail.taskType eq 0}">
                <a class="downnow copy" href="ruweapp://common/copy?text=${activityDetail.targetUrl}"> 复制公众号</a>

            </c:if>

            <c:if test="${activityDetail.taskType eq 1}">
                <a  class="downnow location" href="${activityDetail.targetUrl}" data-type="${activityDetail.taskType}" data-configs='${activityDetail.programStyleJson}'> 立即参与</a>
            </c:if>

            <c:if test="${activityDetail.taskType eq 2}">

                <a class="downnow location downbtn" style="display: none;" href="${fdfsHost}${activityDetail.targetUrl}" data-type='${activityDetail.taskType}' data-configs='${activityDetail.programStyleJson}'> 立即下载</a>
            </c:if>
        </footer>
    </c:if>
    <c:if test="${activityDetail.platformProgramType.value eq 1}">
        <footer class="detaile_footer">

            <c:if test="${activityDetail.taskType eq 0}">
                <a class="downnow copy" href="ruweapp://common/copy?text=${activityDetail.targetUrl}"> 复制公众号</a>

            </c:if>

            <c:if test="${activityDetail.taskType eq 1}">
                <a  class="downnow" href="${activityDetail.targetUrl}" data-type="${activityDetail.taskType}" data-configs='${activityDetail.programStyleJson}'> 立即参与</a>
            </c:if>

            <c:if test="${activityDetail.taskType eq 2}">

                <a class="downnow downbtn" style="display: none;" href="${fdfsHost}${activityDetail.targetUrl}" data-type='${activityDetail.taskType}' data-configs='${activityDetail.programStyleJson}'> 立即下载</a>
            </c:if>
        </footer>
    </c:if>
    <!---立即下载---->
    <div class="downbox" style="display: none;">
        <div class="down">
            <span class="down_close"></span>
            <img class="downimg" src="../images/activity/downimg.png">
            <p class="down_tip">
                参与此活动需下载app「口粮」
            </p>
            <a class="down_btn" href="/html/down.html">立即下载</a>
        </div>
    </div>
</div>
<!----提示下载新版本-->
<section class="popup">
    <div class="pop_content">
        <p class="luck_tip">
            此功能已下架，请下载新版。
        </p>
        <a class="share_button" href="/html/down.html">下载新版本</a>
    </div>
</section>
<%--<script src="js/zepto.min.js"></script>--%>
<script src="../js/jquery.min.js"></script>
<script>
    if(/com\.ruowei\.dataflow/.test(navigator.userAgent)){

        $(".copy").html("复制公众号");
        $(".copy").attr("href","ruweapp://common/copy?text=${activityDetail.targetUrl}");
    }else{
        $(".copy").html("${activityDetail.targetUrl}"+"<span class='copytip'>（长按复制公众号）</span>");
        $(".copy").attr("href","javascript:;");
        $(".about_kou").show();
    }

</script>

<script src="../js/swipe.js"></script>
<script src="../js/idangerous.swiper-2.1.min.js"></script>
<script src="../js/idangerous.swiper.scrollbar-2.1.js"></script>
<script>

    var ActSwiper = new Swiper ('.swiper-container', {
        slidesPerView: 'auto'
    });

</script>
<script>
    $(document).ready(function() {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            $(".iphonemianze").fadeIn();
        };
        function getCookieValue(cookieName)
        {
            var cookieValue = document.cookie;
            var cookieStartAt = cookieValue.indexOf(""+cookieName+"=");
            if(cookieStartAt==-1)
            {
                cookieStartAt = cookieValue.indexOf(cookieName+"=");
            }
            if(cookieStartAt==-1)
            {
                cookieValue = null;
            }
            else
            {
                cookieStartAt = cookieValue.indexOf("=",cookieStartAt)+1;
                cookieEndAt = cookieValue.indexOf(";",cookieStartAt);
                if(cookieEndAt==-1)
                {
                    cookieEndAt = cookieValue.length;
                }
                cookieValue = unescape(cookieValue.substring(cookieStartAt,cookieEndAt));//解码latin-1

            }
            return cookieValue;
        }
        var androidVersion  =parseFloat (getCookieValue("androidVersion"))||"";
        if(androidVersion>=1.3) {
            $(".downbtn").hide();
        }else{
            $(".downbtn").show();
            $(".downbtn").attr("href","");
            $(".downbtn").click(function(){
                $(".popup").show()
            })


        }

    })
</script>
<script src="../js/app_active_register.js?0607254"></script>


<script>
    showMore(".activity_explain",".showmore");
    function showMore(synopsis,btn){
        var text = $(synopsis).html();
        if(text.length>100){
            $(btn).show();
            var hidetext = $(synopsis).html().substring(0,79);
            $(synopsis).html(hidetext+"...");
            $(btn).click(function(){
                if($(this).html()=="更多"){
                    $(synopsis).html(text);
                    $(btn).html("收起");
                }else{
                    $(synopsis).html(hidetext+"...");
                    $(btn).html("更多");
                }
            })
        }else{
            $(btn).hide();
        }
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
            $(".downbox").show();
            $(".down_close").click(function(){
                $(".downbox").hide();
            })
            return false;
        }
    })
</script>

</body>

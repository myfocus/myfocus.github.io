<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<head>
<meta charset="UTF-8">
<title>口粮送你免费流量</title>
    <link rel="stylesheet" type="text/css" href="/css/share/main.css?v=20160914"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
</head>

<body>
<div class="loading">
    <div class="loadingicon"></div>
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="loadingtxt">0%</div>
</div>
<div class="main hide" >
    <div class="page">
        <div class="page5">
            <div class="page5_1">
                <img src="/images/share/kl_head.png"  width="100%" />
                <div class="header">
                    <img data-sharer src="/images/share/head.jpg" alt="">
                </div>
                <div class="userInfo">
                    <strong>${sharedName}</strong>
                    <p id="dataflow"></p>
                </div>          
            </div>
            <div class="page5_2">
                <strong class="header_msg"> 
                    <img data-sharer src="/images/share/head.jpg" alt="" width="100%" height="100%">
                </strong>
                <img src="/images/share/1_message1.png" class="msg" />
            </div>
            <div class="page5_3">
                <strong class="header_msg"> 
                    <img data-sharer src="/images/share/head.jpg" alt="">
                </strong>
                <img src="/images/share/1_message2.png" class="msg" />
            </div>
            <div class="page5_4">
                <strong class="header_msg">
                    <img data-sharer src="/images/share/head.jpg" alt="">
                </strong>
                <img src="/images/share/1_message3.png" class="msg" />
            </div>
            <div class="page5_5">
                <img src="/images/share/focus.gif" class="msg"  id="btn_accept"/>
            </div>
        </div>

        <%--<div class="page6">--%>
            <%--<div class="page6_1">--%>
                 <%--<div class="header_m">--%>
                    <%--<img data-sharer src="/images/share/head.jpg" alt="">--%>
                <%--</div> --%>
                <%--<div class="user">--%>
                    <%--<div>${sharedName}</div>--%>
                    <%--<p>邀请你一起去抢流量</p>--%>
                <%--</div>    --%>
            <%--</div>--%>
            <%--<div class="page6_2">--%>
                <%--<img src="/images/share/2_button.png" id="btn_accept" />--%>
            <%--</div>--%>
        <%--</div>--%>
        <div class="page7 hide">

            <img src="/images/share/kl_head.png"  width="100%" />
            <div class="header">
                <img data-sharer src="/images/share/head.jpg" alt="">
            </div>
            <div class="user">
                <strong>${sharedName}</strong>
                <p>距离加入抢流量<span>仅剩一步</span>了哦</p>
            </div>
            <form id="form1">
                <div class="phoneNum">
                    <div class="txt_phone">
                        <input id="txtPhone" type="text" placeholder="请输入手机号" maxlength="11">
                    </div>
                    <div class="txt_code">
                        <input id="txtVerifycode" type="text" placeholder="请输入验证码">
                        <img class="test_button" id="imgObj" src="/verificode/picandcode"/>
                    </div>
                    <div class="submit">
                        <input id="btnSubmit" type="submit" value="提交" id="btn_submit">
                    </div>
                </div>
            </form>
            <div id="message" class="message">
                <img src="/images/share/3_tanchuang.png" alt="" width="100%">
                <div class="info">
                    您已经与${sharedName}成为好友<br/>
                    赶紧下载口粮app抢流量吧~！
                </div>
                <div id="download" class="msg_btn">
                    <img src="/images/share/3_tanchaung_btn.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <%--<div class="musicicon musicrotate"></div>--%>

</div>

<%--<audio id="media" loop autoplay="autoplay" src="/images/share/bg.mp3"></audio>--%>
</body>
<script>
    var sharedToken = '${sharedToken}';
    var sharedName = '${sharedName}';
    var sharedAvator = '${sharedAvator}';
    var sharedScores = ${SharedScores};
</script>
<script type="text/javascript" src="/js/share/setviewport.js"></script>
<script type="text/javascript" src="/js/share/preloadjs-0.6.0.min.js"></script>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/share/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/share/main.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
    var shareUrl = window.location.href.replace(/#.*$/,"");
    $.ajax({
        url: "/wx/jsapi/signature?url="+encodeURIComponent(shareUrl),
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
<script type="text/javascript">
    function setCookie(name, value, option) {
        var str = name + '=' + escape(value);
        if (option) {
            if (option.expireHours) {
                var d = new Date();
                d.setTime(d.getTime() + option.expireHours * 3600 * 1000);
                str += '; expires=' + d.toGMTString();
            }
            if (option.path) str += '; path=' + option.path;
            else str += '; path=/';
            if (option.domain) str += '; domain=' + option.domain;
            if (option.secure) str += '; true';
        }
        document.cookie = str;
    }

    var iswx = /MicroMessenger/.test(navigator.userAgent);
    if(iswx){$(".txt_code").hide();}

    if(sharedAvator.length>0) $('img[data-sharer]').attr('src', "http://img.ruwe.cn/"+ sharedAvator);

    function display(score){
        if(score<340) return "我在口粮APP每月最少可得<span>1G</span>流量";
        else return "赚到了<span>"+ Math.round(score/34)*10 +"M</span>免费流量";
//        else if(score < 3400) return "赚到了<span>"+ Math.round(score/34)*10 +"M</span>免费流量";
//        else return "赚到了<span>"+ Math.round(score/340)/10 +"G</span>免费流量";
    }
    $('#dataflow').html(display(sharedScores));

    setCookie('sharedName',sharedName,{expireHours:0.5});
    setCookie('sharedAvator',sharedAvator,{expireHours:0.5});

    //pv
    $(function(){
        $.ajax({
            url:"/share/click/"+sharedToken,
            type: "post",
            dataType:"json",
            success:function(result) {
                console.log(result);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(textStatus);
            }
        });
    })
</script>

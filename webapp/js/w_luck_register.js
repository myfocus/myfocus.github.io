function getCookieValue(e){var t=document.cookie,n=t.indexOf(""+e+"=");return-1==n&&(n=t.indexOf(e+"=")),-1==n?t=null:(n=t.indexOf("=",n)+1,cookieEndAt=t.indexOf(";",n),-1==cookieEndAt&&(cookieEndAt=t.length),t=unescape(t.substring(n,cookieEndAt))),t}var currUser=getCookieValue("globalID");null==currUser&&(window.location.href="/api/web/lottery/main"+location.search.replace("sharedToken%20=","sharedToken=").replace("sharedToken =","sharedToken=")),$(function(){var e=!1,t=!1;$(".close").click(function(){$(".popup").hide()}),$('input[name="phonenum"]').blur(function(){e=!1,$(this).val().match(/^(13|15|18|14|17)\d{9}$/)&&""!=$(this).val()&&(e=!0)}),$("input").bind("focus",function(){$("body").height($(window).height()+"px")}).bind("blur",function(){$("body").height("auto")}),$(".test_button").click(function(){function e(n){return 0==t?(n.removeAttribute("disabled"),n.value="\u91cd\u65b0\u53d1\u9001",t=60,$(n).css({background:"#5dd3ff"}),void 0):(n.setAttribute("disabled",!0),n.value=t+"s",t--,$(n).css({background:"#b6b6b6","font-size":"1.1rem"}),setTimeout(function(){e(n)},1e3),void 0)}if($('input[name="phonenum"]').val().match(/^(13|15|18|14|17)\d{9}$/)&&""!=$(this).val()){var t=60;e(this);var n=$('input[name="phonenum"]').val();$.ajax({url:"/api/web/lottery/getverifcation",data:{phone:n},type:"post",dataType:"json",async:!1,success:function(e){"0"==e.status&&$(".test_button").addClass("code")},error:function(){"0"!==result.status}})}}),$('input[name="Vcode"]').blur(function(){t=!1,""!=$(this).val()&&(t=!0)}),$("#submit").click(function(){if(!e)return $(".un1").focus(),!1;if(!t)return $(".un2").focus(),!1;var n=$("input[name='phonenum']").val(),o=$('input[name="Vcode"]').val(),i=localStorage.getItem("__rwlotteryglobalid__")||"",a=localStorage.getItem("__rwlotterysharedtoken__")||"";$.ajax({url:"/api/web/lottery/checkphone",type:"post",dataType:"json",data:{phone:n,verification:o,globalId:i,sharedToken:a},success:function(e){if("0"==e.status)$(".popup").show(),$(".close").click(function(){$(".popup").hide()});else{if("7"!=e.status)return alert(e.msg),!1;$(".weChart_red_form").hide(),$(".join").show(),$(".weChart_redbg").css({background:"url(../images/red_ye.png) 0 0 no-repeat","-webkit-background-size":"100% 24.47rem","background-size":"100% 23.47rem"})}},error:function(e,t){console.log(t)}})})});
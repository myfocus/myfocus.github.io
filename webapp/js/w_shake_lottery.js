function guid(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}
$(document).ready(function(){var a=/MicroMessenger/.test(navigator.userAgent),b=/[?&]from=/.test(location.search);a&&!b||$(".focus_tip").show();navigator.userAgent.match(/mobile/i)||$(".njtip").html("\u626b\u4e00\u626b\u5173\u6ce8");a=localStorage.getItem("njbankuid");a||(a=guid(),localStorage.setItem("njbankuid",a));$.ajax({url:"/api/web/lottery/check/100000-1-100016-4?uid="+a,type:"get",success:function(a){var d=a.data.prizeName;0!=a.status&&(1==a.status?($(".focus_tip").hide(),$("#tip").show(),$("#prizename").html("\u5956\u54c1\uff1a"+
    d),"10M\u6d41\u91cf\u5361"==d?$("#tiptext").html('\u8bf7\u4e0b\u8f7d"\u53e3\u7caeAPP"\u8fdb\u884c\u5151\u6362\uff0c\u66f4\u591a\u514d\u8d39\u624b\u673a\u6d41\u91cf\u5c3d\u5728\u53e3\u7cae'):$("#tiptext").html("\u6211\u4eec\u5c06\u5c3d\u5feb\u4e3a\u60a8\u5145\u503c")):alert(a.msg))},error:function(a,d,c){}})});var SHAKE_THRESHOLD=3E3,last_update=0,x=y=z=last_x=last_y=last_z=0;
function init(){window.DeviceMotionEvent?window.addEventListener("devicemotion",deviceMotionHandler,!1):alert("not support mobile event")}
function deviceMotionHandler(a){a=a.accelerationIncludingGravity;var b=(new Date).getTime(),e=b-last_update;100<e&&(last_update=b,x=a.x,y=a.y,z=a.z,Math.abs(x+y+z-last_x-last_y-last_z)/e*1E4>SHAKE_THRESHOLD&&($(".hand").addClass("shake"),window.shake||(window.shake=!0,a=$("#tel").val(),b=localStorage.getItem("njbankuid"),$.ajax({url:"/api/web/lottery/100000-1-100016-4",data:{phonenumber:a,uid:b},type:"post",success:function(a){if(0==a.status){var c=a.data.prizeName;"10M\u6d41\u91cf\u5361"==c?($("#prize").attr("src",
    "../images/shake_lottery/luck_canyu.png"),$(".duihuan").html('\u8bf7\u4e0b\u8f7d"\u53e3\u7caeAPP"\u8fdb\u884c\u5151\u6362\uff0c\u66f4\u591a\u514d\u8d39\u624b\u673a\u6d41\u91cf\u5c3d\u5728\u53e3\u7cae')):"1G\u6d41\u91cf\u5361"==c?($("#prize").attr("src","../images/shake_lottery/luck_one.png"),$(".duihuan").html("\u6d41\u91cf\u5c06\u76f4\u63a5\u5145\u503c\u81f3\u60a8\u7684\u624b\u673a\u4e0a\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u53e3\u7caeAPP\uff0c\u5728\u201c\u6211\u7684\u6d41\u91cf\u5361\u201d\u4e2d\u67e5\u8be2\u72b6\u6001")):
    "500M\u6d41\u91cf\u5361"==c?($("#prize").attr("src","../images/shake_lottery/luck_two.png"),$(".duihuan").html("\u6d41\u91cf\u5c06\u76f4\u63a5\u5145\u503c\u81f3\u60a8\u7684\u624b\u673a\u4e0a\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u53e3\u7caeAPP\uff0c\u5728\u201c\u6211\u7684\u6d41\u91cf\u5361\u201d\u4e2d\u67e5\u8be2\u72b6\u6001")):"100M\u6d41\u91cf\u5361"==c&&($("#prize").attr("src","../images/shake_lottery/luck_three.png"),$(".duihuan").html("\u6d41\u91cf\u5c06\u76f4\u63a5\u5145\u503c\u81f3\u60a8\u7684\u624b\u673a\u4e0a\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u53e3\u7caeAPP\uff0c\u5728\u201c\u6211\u7684\u6d41\u91cf\u5361\u201d\u4e2d\u67e5\u8be2\u72b6\u6001"));
    setTimeout(function(){$("#lottery_no").show();$(".luck_jp").html(c);$(".hand").removeClass("shake")},1E3)}else alert(a.msg),$(".hand").removeClass("shake")},error:function(a,c,b){}}))),last_x=x,last_y=y,last_z=z)}tel();function tel(){$("#submit").click(function(){$("#tel").val().match(/^(13|15|18|14|17)\d{9}$/)&&""!=$(this).val()&&($(".get_phone").hide(),$(".shake_lottery").show(),init())})};
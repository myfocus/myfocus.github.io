//获取cookie
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
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
};
$(document).ready(function() {

  var currUser = getCookieValue("globalID");
    //if (currUser != null) {
    //    $(".register").show();
    //    $(".swiper-container").hide();
    //    return;
    //} else {
    //    $(".register").hide();
    //    $(".swiper-container").show();
    //};

});


$(function() {
    //验证电话号码
   function testphone() {
       var mobile=$('input[name="phonenum"]').val();

        if (mobile.match(/^(13|15|18|14|17)\d{9}$/) && mobile!= '') {
          return true;
        }else{
            alert("请输入正确的手机号码");
            return false;
        }
    };


    $('input[type="tel"]').bind('focus',function(){
        $('body').height($(window).height()+'px');
    }).bind('blur',function(){

        $('body').height('auto');
    });

    $('#submit').click(function() {
        if(!testphone()) return;


        var phonenum = $("input[name='phonenum']").val();
        var globalId =  getCookieValue("globalID");
        var sharedToken = getUrlParam("sharedToken");
        $.ajax({
            url:"/api/web/lottery/checkphone",
            type: "post",
            dataType:"json",
            data: {
                phone:phonenum,
                globalId:globalId,
                sharedToken:sharedToken,
            },

            success:function(result)
            {

                if(result.status=="0"){
                    //校验成功
                    $(".popup").show();


                }else  if(result.status=="7"){
                    $(".weChart_red_form").hide();
                    $(".join").show();
                    $(".weChart_redbg").css({
                        "background":"url(../../images/red_ye.png) 0 0 no-repeat",
                        "-webkit-background-size": "100% 24.47rem",
                        "background-size": "100% 23.47rem"
                    })
                } else {

                    alert(result.msg)
                    return false ;
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(textStatus);
            }

        });
    });

});


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
    if (currUser != null) {
        $(".register").show();
        $(".lottery").hide();
        return;
    } else {
        $(".register").hide();
        $(".lottery").show();
    };

});
$(function (){

    var rotateTimeOut = function (){
        $('#turntableimg').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };
    var bRotate = false;

    var rotateFn = function (awards, angles, txt){
        bRotate = !bRotate;
        $('#turntableimg').stopRotate();
        $('#turntableimg').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:8000,
            callback:function (){
                $(".register").show();
                $(".lottery").hide();
                changeImg();

                bRotate = !bRotate;
            }
        })
    };

    $('.rotate').click(function (){
        $(".deng ").addClass("tf");
        if(bRotate)return;
        bRotate = !bRotate;
        $('#turntableimg').rotate({
            angle:0,
            animateTo:6800,
            duration:18000,
            callback:function (){
                bRotate = !bRotate;
            }
        });
        $.ajax({
            url:"/api/web/lottery/shared",
            type:"post",
            dataType:"json",
            success:function(result)
            {
                var message = result.msg;
                if(result.status == 0){
                    //api call success
                    if(result.data.beHint==true){
                        //中奖
                        var index = result.data.lotteryHint;
                        $('#turntableimg').stopRotate();

                        switch (index) {
                            case 0:
                                rotateFn(0, 240, '2G流量卡');
                                break;
                            case 1:

                                rotateFn(1, 180, '10M流量卡');
                                break;
                            case 2:

                                rotateFn(2, 120, '500M流量卡');
                                break;
                            case 3:

                                rotateFn(3, 60, '10M流量卡');
                                break;
                            case 4:

                                rotateFn(4, 360, '1G流量卡');
                                break;
                            case 5:

                                rotateFn(5, 300, '10M流量卡');
                                break;


                        }

                    }
                    else{
                        //未中奖
                        $('#turntableimg').stopRotate();
                        $(".turnplate ").removeClass("tf");
                        alert('未中奖');
                    }
                }
                else{
                    $('#turntableimg').stopRotate();
                    $(".turnplate ").removeClass("tf");

                    alert(message);
                }
            },
            error:function(XMLHttpRequest, status, error){
                $('#turntableimg').stopRotate();
                alert(error);
            }
        });
        $(this).unbind('click');



    });
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
    //验证码格式
    $(".test_button").click(function(){

            var mobile=$('input[name="phonenum"]').val();
            $.ajax({
                url: "/api/web/lottery/getverifcation",
                data:{
                    phone:mobile,
                },
                type: "post",
                dataType:"json",
                async:false,
                success: function (result) {
                    if (result.status == "0") {
                        $(".test_button").addClass("code");
                    }
                },
                error:function(){
                    if (result.status !== "0") {

                    }
                }

            })


    })
   function testcode() {
       var vcode = $("#vcode").val();

        if (vcode.match(/^\d{1,20}$/) && vcode != '') {
            return true;
        }else{
            alert("请输入正确的验证码");
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
        var iswx = /MicroMessenger/.test(navigator.userAgent);
        if(!iswx){
            if(!testcode()) return;
        }

        var phonenum = $("input[name='phonenum']").val();
        var globalId =  getCookieValue("globalID");
        var sharedToken = getUrlParam("sharedToken");
        var vcode = $("#vcode").val();
        $.ajax({
            url:"/api/web/lottery/checkphone",
            type: "post",
            dataType:"json",
            data: {
                phone:phonenum,
                globalId:globalId,
                sharedToken:sharedToken,
                vcode:vcode
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
                    changeImg();
                    return false ;
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(textStatus);
            }

        });
    });

});

function changeImg(){
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src",chgUrl(src));
}
//时间戳
//为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳
function chgUrl(url){
    var timestamp = (new Date()).valueOf();
    url = url.substring(0,22);
    if((url.indexOf("&")>=0)){
        url = url + "×tamp=" + timestamp;
    }else{
        url = url + "?timestamp=" + timestamp;
    }
    return url;
}

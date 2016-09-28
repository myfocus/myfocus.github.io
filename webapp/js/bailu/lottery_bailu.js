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
$(document).ready(function() {
    var AUTH = getCookieValue("AUTH")||"";
    if(AUTH==""){
        $(".nofocus").show();
        return;
    }
    var iswx = /MicroMessenger/.test(navigator.userAgent);
    var isoutsize = /[?&]from=/.test(location.search);
    if(!iswx || isoutsize){
        //非微信
        $(".nofocus").show();
        return;
    };

function Uid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
    var uid = localStorage.getItem('msbankuid');
    if(!uid){
        uid = Uid();
        localStorage.setItem('msbankuid',uid);
    }
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
    var phonenum;
    $('#submit').click(function() {

        phonenum = $("input[name='phonenum']").val();
        if(!testphone()) return;

        $.ajax({
            url:"/bailu/check/6-100007-120",
            type: "get",
            dataType:"json",
            data: {
                phonenumber:phonenum,
                uid:Uid()
            },

            success:function(result)
            {

                if(result.status=="0"){

                    $(".register").hide();
                    $(".lottery").show();

                }else if(result.status==1){
                    $(".register").hide();
                    $(".lottery").show();
                    $(".popup").show();
                    var prize = result.data.index;
                    if(prize==3){
                        $(".card_tip").show();
                        $("#prize").html("您已经抽过奖，奖品是：<br/>1G流量卡");
                    }else if(prize==4){
                        $(".card_tip").show();
                        $("#prize").html("您已经抽过奖，奖品是：<br/>500M流量卡")
                    }else if(prize==6){
                        $(".card_tip").show();
                        $("#prize").html("您已经抽过奖，奖品是：<br/>100M流量卡")
                    }else if(prize==7){
                        $(".card_tip").show();
                        $("#prize").html("您已经抽过奖，奖品是：<br/>30M流量卡")
                    }else if(prize==0){
                        $("#prize").html("您已经抽过奖，奖品是：<br/>30元代金券")
                    }else if(prize==2){
                        $("#prize").html("您已经抽过奖，奖品是：<br/>50元代金券")
                    }else if(prize==9){
                        $("#prize").html("您已经抽过奖，奖品是：<br/>特色菜品任选一份")
                    }else if(prize==1){
                        $("#luck_icon").attr("src","../../images/bailu/regret.png");
                        $("#prize").html("您已经抽过奖，很遗憾没有中奖！")
                    }
                }else {

                    alert(result.msg)
                    return false ;
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            }

        });
    });




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
                $(".popup").show();
                if(txt=="1G流量卡"){
                    $(".card_tip").show();
                    $("#prize").html("获得1G流量卡");
                }else if(txt=="500M流量卡"){
                    $(".card_tip").show();
                    $("#prize").html("获得500M流量卡")
                }else if(txt=="100M流量卡"){
                    $(".card_tip").show();
                    $("#prize").html("获得100M流量卡")
                }else if(txt=="30M流量卡"){
                    $(".card_tip").show();
                    $("#prize").html("获得30M流量卡")
                }else if(txt=="30元代金券"){
                    $("#prize").html("获得30元代金券")
                }else if(txt=="50元代金券"){
                    $("#prize").html("获得50元代金券")
                }else if(txt=="特色菜品任选一份"){
                    $("#prize").html("获得特色菜品任选一份")
                }else if(txt==""){
                    $("#luck_icon").attr("src","../../images/bailu/regret.png");
                    $("#prize").html("我已经用了洪荒之力了")
                }
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
            url:"/bailu/lottery/6-100007-120",
            type:"post",
            dataType:"json",
            data: {
                phonenumber:phonenum,
                uid:Uid()
            },
            success:function(result)
            {
                var message = result.msg;
                if(result.status == 0){
                    //api call success

                        //中奖
                        var index = result.data.index;
                        switch (index) {
                            case 0:
                                rotateFn(0, 36, '30元代金券');
                                break;
                            case 1:

                                rotateFn(1, 72, '');
                                break;
                            case 2:

                                rotateFn(2, 108, '50元代金券');
                                break;
                            case 3:

                                rotateFn(3, 144, '1G流量卡');
                                break;
                            case 4:

                                rotateFn(4, 180, '500M流量卡');
                                break;
                            case 5:

                                rotateFn(5, 216, '');
                                break;
                            case 6:

                                rotateFn(6, 252, '100M流量卡');
                                break;
                            case 7:

                                rotateFn(7, 288, '30M流量卡');
                                break;
                            case 8:

                                rotateFn(8, 324, '');
                                break;
                            case 9:

                                rotateFn(9, 360, '特色菜品任选一份');
                                break;


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



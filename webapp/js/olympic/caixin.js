
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
var phoneNumber = getCookieValue("_rw_mobile")||"";
if(phoneNumber==""){
    window.location.href="http://mobile.caixin.com/m_act_topic/promotion.html?utm_source=Promotion&utm_medium=Mobile&utm_campaign=MarketingPromotion";
}else{
$("#phonebtn").val(phoneNumber);
}
//验证手机号是否抽奖
$('.lotterybtn').click(function() {

    $.ajax({
        url:"/lottery/check/100006-100006-100043",
        type: "get",
        dataType:"json",
        data: {
            phonenumber:phoneNumber,
        },

        success:function(result)
        {
            var prizeSize = result.data.prizeSize;
            if(result.status==0){
                //校验成功
                $(".get_phone").addClass("hide");
                $(".lottery").removeClass("hide");


            }else if(result.status==1){
                $("#lottery_tip").show();
                $(".chouye").html("您已经抽过啦，奖品是：");
                if(prizeSize==1024){
                    $("#prize").attr("src","../../images/shake_lottery/luck_one.png");
                    $(".luck_jp").html("1G流量卡")
                }else if(prizeSize==500){
                    $("#prize").attr("src","../../images/shake_lottery/luck_two.png");
                    $(".luck_jp").html("500M流量卡")
                }else if(prizeSize==100){
                    $("#prize").attr("src","../../images/shake_lottery/luck_three.png");
                    $(".luck_jp").html("100M流量卡")
                }else if(prizeSize==10){
                    $("#prize").attr("src","../../images/shake_lottery/luck_canyu.png");
                    $(".luck_jp").html("10M流量卡")
                }

            }else if(result.status==7){
                $(".get_phone").addClass("hide");
                $(".lottery").removeClass("hide");
                $("#lottery_tip").show();
                $("#prize").attr("src","../../images/olympic/lucy_thank.png");
                $(".lt").addClass("hide");
                $(".duihuan").html("您已经是口粮用户感谢您的支持~")
            } else {

                alert(result.msg);
                $(".turnplate ").removeClass("tf");
                return false ;
            }

        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(textStatus);
        }

    });
});


//抽奖
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
                $("#lottery_tip").show();
                $(".luck_jp").html(txt);
                $(".deng ").removeClass("tf");

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
            url:"/lottery/100006-100006-100043",
            type:"post",
            dataType:"json",
            data: {phonenumber:phoneNumber},
            success:function(result)
            {
                var message = result.msg;
                if(result.status == 0){
                    //api call success
                        //中奖
                        var prizeSize = result.data.prizeSize;
                        var index = 3;
                        switch (prizeSize) {
                            case 1024:
                                index =0;
                                break;
                            case 500:
                                index =1;
                                break;
                            case 100:
                                index =2;
                                break;
                            default :
                                index =3;
                                break;
                        }

                        if(index==0){
                            $("#prize").attr("src","../../images/shake_lottery/luck_one.png")
                        }else if(index==2){
                            $("#prize").attr("src","../../images/shake_lottery/luck_two.png")
                        }else if(index==1){
                            $("#prize").attr("src","../../images/shake_lottery/luck_three.png")
                        }else if(index==3){
                            $("#prize").attr("src","../../images/shake_lottery/luck_canyu.png")
                        }
                        $('#turntableimg').stopRotate();

                        switch (index) {
                            case 0:
                                rotateFn(0, 90, '1G流量卡');
                                break;
                            case 1:

                                rotateFn(1, 180, '100M流量卡');
                                break;
                            case 2:

                                rotateFn(2, 270, '500M流量卡');
                                break;
                            case 3:

                                rotateFn(3, 360, '10M流量卡');
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


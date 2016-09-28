
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
$(document).ready(function() {
    var iswx = /MicroMessenger/.test(navigator.userAgent);
    var isoutsize = /[?&]from=/.test(location.search);
    //alert('iswx='+iswx + '; isoutsize =' + isoutsize );
    if(!iswx || isoutsize){

        //非微信
        $(".focus_tip").show();

    }
    if (!navigator.userAgent.match(/mobile/i)) {
        $(".njtip").html("扫一扫关注");
    }
    var uid = localStorage.getItem('njbankuid');
    if(!uid){
        uid = guid();
        localStorage.setItem('njbankuid',uid);
    }
    $.ajax({
        url: "/api/web/lottery/check/100000-1-100016-4?uid="+uid,
        type: "get",
        success: function (result) {
            var prizename = result.data.prizeName;
            if (result.status == 0) {
                //验证通过

            }else if(result.status == 1){

                $(".focus_tip").hide();
                $("#tip").show();
                $("#prizename").html("奖品："+prizename);
                if (prizename == "10M流量卡") {

                    $("#tiptext").html('请下载"口粮APP"进行兑换，更多免费手机流量尽在口粮');
                }else{
                    $("#tiptext").html('我们将尽快为您充值');
                }

            }else{
                alert(result.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }

    });

})
var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;
function init() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert('not support mobile event');
    }
}


function deviceMotionHandler(eventData) {

    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    var diffTime = curTime - last_update;
    if (diffTime > 100) {
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
            $(".hand").addClass("shake");

            if(!window.shake) {
                window.shake = true;
                var mobile = $('#tel').val();
                var uid = localStorage.getItem('njbankuid');
                $.ajax({
                    url: "/api/web/lottery/100000-1-100016-4",
                    data: {
                        phonenumber: mobile,
                        uid: uid
                    },
                    type: "post",
                    success: function (result) {
                        if(result.status == 0) {
                            var prize = result.data.prizeName;
                            if (prize == "10M流量卡") {
                                $("#prize").attr("src", "../images/shake_lottery/luck_canyu.png");
                                $(".duihuan").html('请下载"口粮APP"进行兑换，更多免费手机流量尽在口粮');
                            } else if (prize == "1G流量卡") {
                                $("#prize").attr("src", "../images/shake_lottery/luck_one.png");
                                $(".duihuan").html('流量将直接充值至您的手机上，您也可以下载口粮APP，在“我的流量卡”中查询状态');
                            } else if (prize == "500M流量卡") {
                                $("#prize").attr("src", "../images/shake_lottery/luck_two.png");
                                $(".duihuan").html('流量将直接充值至您的手机上，您也可以下载口粮APP，在“我的流量卡”中查询状态');
                            } else if (prize == "100M流量卡") {
                                $("#prize").attr("src", "../images/shake_lottery/luck_three.png");
                                $(".duihuan").html('流量将直接充值至您的手机上，您也可以下载口粮APP，在“我的流量卡”中查询状态');
                            }
                            setTimeout(function () {
                                $("#lottery_no").show();
                                $(".luck_jp").html(prize);

                                $(".hand").removeClass("shake");
                            }, 1000);
                        }
                        else{
                            alert(result.msg);
                            $(".hand").removeClass("shake");
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                    }

                });
            }
        }

        last_x = x;
        last_y = y;
        last_z = z;
    }
};
tel();
function tel() {

    $("#submit").click(function () {
        if ($("#tel").val().match(/^(13|15|18|14|17)\d{9}$/) && $(this).val() != '') {
            $(".get_phone").hide();
            $(".shake_lottery").show();
            init();
        }
    });
}

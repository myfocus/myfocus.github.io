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
var currUser = getCookieValue("_rw_wxopenid")||"";
if (currUser.length==0) {
    window.location.href = "http://m.ruwe.cn/wx/auth/bridge?url=http%3a%2f%2fm.ruwe.cn%2fhtml%2fecup%2flongjiang_ecup.html";
}
$(document).ready(function() {
    var iswx = /MicroMessenger/.test(navigator.userAgent);
    var isoutsize = /[?&]from=/.test(location.search);
    if(!iswx || isoutsize){

        //非微信
        $(".nofocus").show();

    };
    //获取点击数
    $.ajax({
        url:"/api/web/lottery/clicks/100003-100003-100038-9",
        type: "get",
        dataType:"json",
        success: function (result) {
            $(".num1").html(result.data[1]);
            $(".num2").html(result.data[2]);
            $(".num3").html(result.data[3]);
            $(".num4").html(result.data[4]);
            //参加人数过10万显示简称
            var peoNum =parseInt($(".num").html());
            if (peoNum >100000)
            {
                var wanNum = ((peoNum/100000).toFixed(1))+"万";
                $(".num").html(wanNum);
            };
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }

    });
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
    //奖品显示
    var oldUser = '<div class="old_user">'+
        '<img class="olduser_img" src="../../images/ecup/old_user.png"/>'+
        '<a class="downbutton" href="http://t.cn/R5QcRn1">下载口粮APP</a></div>';
    var prize100 = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/100M.png"/>'+
        '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
    var prize500 = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/500M.png"/>'+
        '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
    var prize1g = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/1G.png"/>'+
        '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
    var prize10 = '<div class="canyu"><img class="prize_10" src="../../images/ecup/10M.png"/>'+
        ' <p class="downtext">下载口粮APP去兑换吧</p>'+
        '<a class="downbutton" href="http://t.cn/R5QcRn1">马上兑换</a><p class="duihuansrc">【兑换路径】<br/>我>我的流量卡>点击该卡'+
        '</p></div>'
    //输入手机号，判断是否抽奖
    $(".golottery").click(function () {

        var phonenum = $("input[name='phonenum']").val();
        if (phonenum.match(/^(13|15|18|14|17)\d{9}$/) && phonenum != '') {
            $.ajax({
                url:"/lottery/check/100003-100003-100038",
                type: "get",
                dataType:"json",
                data:{
                    phonenumber:phonenum,
                    uid:uid

                },
                success: function (result) {
                    var msg = result.msg;
                    if(result.status=="0"){
                        $(".get_tel").addClass("hide");
                        $(".toggle").removeClass("hide");
                    }else if(result.status=="1"){
                        $(".page").unbind("click");
                        //已经抽过
                        var index =localStorage.getItem("index")||1;
                        var card = $(".page").eq(index-1);

                        card.find(".back").addClass("on");
                        card.find(".font").addClass("in");



                        $(".get_tel").addClass("hide");
                        $(".toggle").removeClass("hide");
                        var prizeSize = result.data.prizeSize;
                        if (prizeSize == "1024") {
                            card.find(".pagebg").html(prize1g);
                        } else if (prizeSize == "500") {
                            card.find(".pagebg").html(prize500);
                        } else if (prizeSize == "100") {
                            card.find(".pagebg").html(prize100);
                        } else if (prizeSize == "10") {
                            card.find(".pagebg").html(prize10);
                        }
                    }else{
                        alert(msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }

            });
        }else{
            alert("请填写正确的手机号码")
        }

    });



    //抽奖，判断奖品
    $(".page").click(function(){
        var oldUser = '<div class="old_user">'+
            '<img class="olduser_img" src="../../images/ecup/old_user.png"/>'+
            '<a class="downbutton" href="http://t.cn/R5QcRn1">下载口粮APP</a></div>';
        var prize100m = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/100M.png"/>'+
            '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
        var prize500m = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/500M.png"/>'+
            '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
        var prize1gg = '<div class="zhichong"><img class="prize_name" src="../../images/ecup/1G.png"/>'+
            '<p class="cztext">正在为您充值<br/>充值成功会以短信的形式发送到您的手机</p></div>';
        var prize10m = '<div class="canyu"><img class="prize_10" src="../../images/ecup/10M.png"/>'+
            ' <p class="downtext">下载口粮APP去兑换吧</p>'+
            '<a class="downbutton" href="http://t.cn/R5QcRn1">马上兑换</a><p class="duihuansrc">【兑换路径】<br/>我>我的流量卡>点击该卡'+
            '</p></div>'
        var index = $(this).index()+1;
        localStorage.setItem("index",index);
        var phonenum = $("input[name='phonenum']").val();
        $(this).find(".back").addClass("on");
        $(this).find(".font").addClass("in");
        $.ajax({
            url:"/lottery/100003-100003-100038",
            type: "post",
            dataType:"json",
            data:{
                index:index,
                phonenumber:phonenum,
                uid:uid


            },
            success: function (result) {
                if(result.status == 0) {
                    var prizeSize = result.data.prizeSize;
                    var card1 = $(".page").eq(index-1);
                    if (prizeSize == "1024") {
                        card1.find(".pagebg").html(prize1gg);
                    } else if (prizeSize == "500") {
                        card1.find(".pagebg").html(prize500m);
                    } else if (prizeSize == "100") {
                        card1.find(".pagebg").html(prize100m);
                    } else if (prizeSize == "10") {
                        card1.find(".pagebg").html(prize10m);
                    }
                }else if(result.status=="3"){
                    $(".page").unbind("click");
                    $(".page").eq(0).find(".pagebg").html(oldUser);
                }else{
                    alert(result.msg)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }

        });
        $(".page").unbind("click");
    });


//键盘出现输入框置顶
    $('input[type="tel"]').on('focus',function(){
        $('body').height($(window).height());
    }).on('blur',function(){
        $('body').css({'height':'100%'});
    })

});
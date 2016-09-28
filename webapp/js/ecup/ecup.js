function JsonToStr(obj) {
    if (obj == null) {
        return '""';
    }
    switch (typeof(obj)) {
        default:
        case 'number':
        case 'string':
            return '"' + obj + '"';
        case 'object':
        {
            if (obj instanceof Array) {
                var strArr = [];
                var len = obj.length;
                for (var i = 0; i < len; i++) {
                    strArr.push(JsonToStr(obj[i]));
                }
                return '[' + strArr.join(',') + ']';
            } else {
                var arr = [];
                for (var i in obj) {
                    arr.push('"' + i + '":' + JsonToStr(obj[i]));
                }
                return "{" + arr.join(',') + "}";
            }
        }
    }
    return '""';
};

var _mevents = new Array();

function setWebitEvent(evtName, evtCode) {
    if (evtName == "") {
        return;
    }
    _mevents.push(JsonToStr({
        code: evtCode,
        name: evtName
    }));
};

function getWebkitEventCode() {
    return _mevents.length > 0 ? _mevents.shift() : "0";
};

function getLoginStatus() {
    try {
        window.SysClientJs.getLoginStatus("isLoginStatus");
    } catch (e) {
        setWebitEvent("isLoginStatus", "B01");
    }
}

//回调函数 参数：loginStatus为登录状态，1：已登录 ，0：未登录
function isLoginStatus(loginStatus) {
    var userLogin = loginStatus;
    if(userLogin=="0"){
        getLogin();
    }else if(userLogin=="1"){
        getPhoneNum();
        var isNewUser = getUrlParam('isNewUser');
        if(isNewUser=="false"){
            $(".nofocus").removeClass("hide")
        }
    }
}
////
function getLogin(){
    try{
        window.SysClientJs.getLogin("loginCallFunc");//
    }catch(e){
        setWebitEvent("getLoginCallFunc()", 'A05');
    }
}

//获取回调函数名
function getLoginCallFunc(){
    return "loginCallFunc()";
}

//登录成功后，回调方法
function loginCallFunc(){
    getPhoneNum();
}
function getPhoneNum(){
    try{
        window.SysClientJs.getPhoneNo("phoneNoCallFun");
    }catch(e){
        setWebitEvent("phoneNoCallFun ", 'B09');
    }
}
var uid;
//获取客户端登录手机号信息,phoneNo为获取的手机号
function phoneNoCallFun (phoneNo){
    var no = phoneNo;
    uid = no;
    $("input[name='phonenum']").val(no);
}
function back(){
    try{
        window.SysClientJs.back();
    }catch(e){
        setWebitEvent("B05", "B05");
    }
};

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
};

$(document).ready(function() {
   //判断登录状态
    getLoginStatus();
    //获取点击数
    $.ajax({
        url:"/api/web/lottery/clicks/100001-100001-100035-9",
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
        '</p></div>';
    //输入手机号，判断是否抽奖
    $(".golottery").click(function () {
        if(uid==undefined || uid=="") uid = getUrlParam('userId');
        var phonenum = $("input[name='phonenum']").val();
        if (phonenum.match(/^(13|15|18|14|17)\d{9}$/) && phonenum != '') {
            $.ajax({
                url:"/api/web/lottery/check/100001-100001-100035-9",
                type: "get",
                dataType:"json",
                data:{
                    phonenumber:phonenum,
                    uid:uid
                },
                success: function (result) {
                    var msg = result.msg;
                    if(result.status==0){
                        $(".get_tel").addClass("hide");
                        $(".toggle").removeClass("hide");
                    }else if(result.status==1){
                        $(".page").unbind("click");
                        //已经抽过
                        var index =localStorage.getItem("index")||1;
                        var card = $(".page").eq(index-1);
                        card.find(".back").addClass("on");
                        card.find(".font").addClass("in");

                        $(".get_tel").addClass("hide");
                        $(".toggle").removeClass("hide");
                        var prizeSize = result.data.prizeSize;
                        if (prizeSize == 1024) {
                            card.find(".pagebg").html(prize1g);
                        } else if (prizeSize == 500) {
                            card.find(".pagebg").html(prize500);
                        } else if (prizeSize == 100) {
                            card.find(".pagebg").html(prize100);
                        } else if (prizeSize == 10) {
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
            '</p></div>';
        if(uid==undefined || uid=="") uid = getUrlParam('userId');
        var index = $(this).index()+1;
        localStorage.setItem("index",index);
        var phonenum = $("input[name='phonenum']").val();
        $(this).find(".back").addClass("on");
        $(this).find(".font").addClass("in");
        $.ajax({
            url:"/api/web/lottery/100001-100001-100035-9",
            type: "post",
            dataType:"json",
            data:{
                index:index,
                phonenumber:phonenum,
                uid:uid
            },
            success: function (result) {
                var card = $(".page").eq(index-1);
                if(result.status == 0) {
                    var prizeSize = result.data.prizeSize;
                    if (prizeSize == 1024) {
                        card.find(".pagebg").html(prize1gg);
                    } else if (prizeSize == 500) {
                        card.find(".pagebg").html(prize500m);
                    } else if (prizeSize == 100) {
                        card.find(".pagebg").html(prize100m);
                    } else if (prizeSize == 10) {
                        card.find(".pagebg").html(prize10m);
                    }
                }else if(result.status==3){
                    $(".page").unbind("click");
                    card.find(".pagebg").html(oldUser);
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
    $('input').on('focus',function(){
        $('body').height($(window).height());
    }).on('blur',function(){
        $('body').css({'height':'100%'});
    });
goback();
function goback(){
    $(".backclick").click(function(){
        if($(".get_tel").hasClass("hide")){
            $(".toggle").addClass("hide");
            $(".get_tel").removeClass("hide");
        }else{
            back();
        }
    });
}

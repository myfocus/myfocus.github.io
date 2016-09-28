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
//获取COOKIE参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
};
//UID
function Uid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

//超过最大值显示最大值，未到最小值显示最小值
function numberRange (option){
    var maxn=new Array();
    var minn=new Array();
    $(option).each(function(){

        var maxNumber = parseInt($(this).attr("maxn"));
        var minNumber = parseInt($(this).attr("minn"));

        maxn.push(maxNumber);
        minn.push(minNumber);
        $(this).blur(function () {

            var inputdata = $(this).val().replace(/\D/g, '');


            if (inputdata != '' && inputdata < minNumber) {
                inputdata = minNumber;
            }
            if (inputdata != '' && inputdata > maxNumber) {
                inputdata = maxNumber;
            }
            $(this).val(inputdata);

        });

    });
}
//数字过万显示类似1.2万
function numberLogogram (option){
    var peoNum =parseInt($(option).html());
    if (peoNum >100000)
    {
        var wanNum = ((peoNum/100000).toFixed(1))+"万";
        $(option).html(wanNum);
    };
}

//键盘遮挡输入框
function moveTop(option){
    $(option).on('focus',function(){
        $('body').height($(window).height());
    }).on('blur',function(){
        $('body').css({'height':'100%'});
    })
}
//获取URL参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
};

var IMG_URL = 'http://img.ruwe.cn/';//线上 http://img.ruwe.cn/  http://img.ruowei.cn/
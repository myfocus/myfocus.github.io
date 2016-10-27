var toURL = window.location.href.substring(0,location.href.lastIndexOf('/'));

var titileArr='口粮送你免费流量';
var descArr='流量赚不停';

var wxDefault = {
    title: titileArr,
    desc: descArr,
    link: toURL+"/index.html",
    imgUrl:"",
    success: function () {
        _czc.push(["_trackEvent", "按钮", "分享回调", "分享回调", 0, "callback"]);
    }
};

//端内分享
didi.setShare({
    url: wxDefault.link, // 分享地址
    icon: wxDefault.imgUrl, // 分享图标
    title: wxDefault.title, // 分享标题
    content: wxDefault.desc, // 分享文案
    success: function(res){
        _czc.push(["_trackEvent", "按钮", "分享回调", "分享回调", 0, "callback"]);
    }
});

//判断滴滴端内外
function isInDidi(){
    if(window.DidiJSBridge || (window.KDShare != undefined && window.KDShare.share != undefined) || (navigator.userAgent.indexOf('kd.passenger') > -1 )){
        return true;
    }else{
        return false;
    }
}

//拉起端内分享
function shareInDidi(){
    didi.bridge("invoke_entrance");
    console.log('拉起分享');
}

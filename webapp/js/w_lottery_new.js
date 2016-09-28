
var turnplate={
    restaraunts:[],				//大转盘奖品名称
    colors:[],					//大转盘奖品区块对应背景颜色
    outsideRadius:192,			//大转盘外圆的半径
    textRadius:155,				//大转盘奖品位置距离圆心的距离
    insideRadius:68,			//大转盘内圆的半径
    startAngle:0,				//开始角度
    bRotate:false				//false:停止;ture:旋转
};
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
$(document).ready(function(){

    var currUser = getCookieValue("globalID");
    if(currUser!=null)
    {
        $(".register").show();
        $(".lottery").hide();
        return;
    }else{
        $(".register").hide();
        $(".lottery").show();
    }

    //动态添加大转盘的奖品与奖品区域背景颜色
    turnplate.restaraunts = [ "2G流量卡","10M流量卡", "500M流量卡", "10M流量卡", "1G流量卡", "10M流量卡"] ;
    turnplate.colors = ["#fac31e","#ff8740", "#ff6666", "#6399d9","#d265dc", "#3bd5c8"];


    var rotateTimeOut = function (){
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };

    //旋转转盘 item:奖品位置; txt：提示语;
    var rotateFn = function (item, txt){

        var angles = item * (360 / turnplate.restaraunts.length)- (360 / (turnplate.restaraunts.length*2));
        if(angles<270){
            angles = 270 - angles;
        }else{
            angles = 360 - angles + 270;
        }
        $('#wheelcanvas').stopRotate();
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:8000,
            callback:function (){
                // $(".popup").show();
                // $(".prize").text(txt);

                //window.location.href = "../w_luck_register.jsp?sharedToken="+sharedToken;
                $(".register").show();
                $(".lottery").hide();
                turnplate.bRotate = !turnplate.bRotate;

            }
        });
    };
    $(".close").click(function(){
        $(".popup").hide();
        $(".turnplate").removeClass("tf");
    })
    $('.pointer').click(function (){
        $(".turnplate ").addClass("tf");
        if(turnplate.bRotate)return;
        turnplate.bRotate = !turnplate.bRotate;
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:6800,
            duration:18000,
            callback:function (){
                turnplate.bRotate = !turnplate.bRotate;
            }
        });
        $.ajax({
            url:"/api/web/lottery/shared",
            type:"post",
            dataType:"json",
            success:function(result)
            {
                if(result.status == 0){
                    //api call success
                    if(result.data.beHint==true){
                        //中奖
                        var index = result.data.lotteryHint;
                        var globalId = result.data.globalID;
                        var shareToken = sharedToken;//getQueryStringByName('sharedToken');
                        localStorage.setItem("__rwlotteryglobalid__",globalId);
                        localStorage.setItem("__rwlotterysharedtoken__",shareToken);

                        $('#wheelcanvas').stopRotate();
                        rotateFn(index+1, turnplate.restaraunts[index]);

                    }
                    else{
                        //未中奖
                        $('#wheelcanvas').stopRotate();
                        $(".turnplate ").removeClass("tf");
                        alert('未中奖');
                    }
                }
                else{
                    $('#wheelcanvas').stopRotate();
                    $(".turnplate ").removeClass("tf");
                    var message = result.msg;
                    alert(message);
                }
            },
            error:function(XMLHttpRequest, status, error){
                $('#wheelcanvas').stopRotate();
                alert(error);
            }
        });
        $(this).unbind('click');
    });
});

function rnd(n, m){

    var random = Math.floor(Math.random()*(m-n+1)+n);

    return random;

}


//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
window.onload=function(){
    drawRouletteWheel();

};

function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length/2);
        var ctx = canvas.getContext("2d");
        //在给定矩形内清空一个矩形
        ctx.clearRect(0,0,422,422);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = '16px Microsoft YaHei';
        for(var i = 0; i < turnplate.restaraunts.length; i++) {
            var angle = turnplate.startAngle + i * arc;
            ctx.fillStyle = turnplate.colors[i];
            ctx.beginPath();
            //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
            ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();



            //锁画布(为了保存之前的画布状态)
            ctx.save();

            //--绘制奖品开始----
            ctx.fillStyle = "#ffffff";
            var text = turnplate.restaraunts[i];
            var line_height = 17;
            //translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

            //rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2);

            /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
            if(text.indexOf("")>0){//流量包
                for(var j = 0; j<texts.length; j++){
                    if(j == 0){
                        ctx.fillText(texts[j]+"", -ctx.measureText(texts[j]+"").width / 2, j * line_height);

                    }else{
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);

                    }
                }
            }else if(text.length>16){//奖品名称长度超过一定范围
                text = text.substring(0,16)+text.substring(16);
                var texts = text;
                for(var j = 0; j<texts.length; j++){
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                }
            }else{
                //在画布上绘制填色的文本。文本的默认颜色是黑色
                //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

            }

            //添加对应图标

            var img= document.getElementById("icon"+i);
            if(img) {
                img.onload = function () {
                    ctx.drawImage(img, -32, 15);


                };
                ctx.drawImage(img, -32, 15);

            }
            //把当前画布返回（调整）到上一个save()状态之前
            ctx.restore();

            //----绘制奖品结束----
        }
    }
}
//////领奖


$(function() {
    var ok1 = false;
    var ok2 = false;

    $(".close").click(function(){
        $(".popup").hide();
    });
    //验证电话号码
    $('input[name="phonenum"]').blur(function() {
        ok1 = false;

        if ($(this).val().match(/^(13|15|18|14|17)\d{9}$/) && $(this).val() != '') {
            ok1 = true;

        }
    });
    $('input').bind('focus',function(){
        $('body').height($(window).height()+'px');
    }).bind('blur',function(){

        $('body').height('auto');
    });
    //验证验证码

    $(".test_button").click(function(){
        if ( $('input[name="phonenum"]').val().match(/^(13|15|18|14|17)\d{9}$/) && $(this).val() != '') {

            var countdown=60;
            function settime(obj) {
                if (countdown == 0) {
                    obj.removeAttribute("disabled");
                    obj.value="重新发送";
                    countdown = 60;
                    $(obj).css({
                        "background":"#5dd3ff",
                    })
                    return;
                } else {
                    obj.setAttribute("disabled", true);
                    obj.value=countdown + "s";
                    countdown--;
                    $(obj).css({
                        "background":"#b6b6b6",
                        "font-size":"1.1rem"
                    })
                }
                setTimeout(function() {
                        settime(obj) }
                    ,1000)
            }
            settime(this);
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
        }

    })

    $('input[name="Vcode"]').blur(function() {
        ok2 = false;

        if ($(this).val() != '') {

            ok2= true;


        }
    });

    $('#submit').click(function() {

        if (!ok1) {
            $(".un1").focus();
            return false
        };
        if (!ok2) {
            $(".un2").focus();
            return false
        }
        var phonenum = $("input[name='phonenum']").val();
        var Vcode = $('input[name="Vcode"]').val();
        var globalId =  localStorage.getItem("__rwlotteryglobalid__")||"";
        var sharedToken =localStorage.getItem("__rwlotterysharedtoken__")||"";
        $.ajax({
            url:"/api/web/lottery/checkphone",
            type: "post",
            dataType:"json",
            data: {
                phone:phonenum,
                verification:Vcode,
                globalId:globalId,
                sharedToken:sharedToken
            },

            success:function(result)
            {
                if(result.status=="0"){
                    //校验成功
                    $(".popup").show();
                    $(".close").click(function(){
                        $(".popup").hide();
                    })

                }else  if(result.status=="7"){
                    $(".weChart_red_form").hide();
                    $(".join").show();
                    $(".weChart_redbg").css({
                        "background":"url(../images/red_ye.png) 0 0 no-repeat",
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
var turnplate = {
    restaraunts: [], //大转盘奖品名称
    colors: [], //大转盘奖品区块对应背景颜色
    outsideRadius: 192, //大转盘外圆的半径
    textRadius: 155, //大转盘奖品位置距离圆心的距离
    insideRadius: 68, //大转盘内圆的半径
    startAngle: 0, //开始角度

    bRotate: false //false:停止;ture:旋转
};

$(document).ready(function() {

    //动态添加大转盘的奖品与奖品区域背景颜色
    turnplate.restaraunts = ["50斤口粮", "500M流量卡", "100斤口粮", "20斤口粮", "1G流量卡", "5斤口粮"];
    turnplate.colors = ["#ff6666", "#fad423", "#d265dc", "#6399d9", "#3bd5c8", "#ff8740"];


    var rotateTimeOut = function() {
        $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: 2160,
            duration: 8000,
            callback: function() {
                alert('网络超时，请检查您的网络设置！');
            }
        });

    };
    //旋转转盘 item:奖品位置; txt：提示语;
    var rotateFn = function(item, txt) {

        var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length * 2));
        if (angles < 270) {
            angles = 270 - angles;
        } else {
            angles = 360 - angles + 270;
        }
        $('#wheelcanvas').stopRotate();
        $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: angles + 3600,
            duration: 5000,
            callback: function() {
                $(".popup").show();
                $(".prize").text(txt);
                $(".turnplate ").removeClass("tf");
                turnplate.bRotate = !turnplate.bRotate;

            }
        });

    };
    $(".close").click(function() {
        $(".popup").hide();
        $(".turnplate ").removeClass("tf");
    })
    $('.pointer').on("click", function() {
        $(".turnplate ").addClass("tf");
        if (useLottery == false) {
            if (turnplate.bRotate) return;
            turnplate.bRotate = !turnplate.bRotate;
            $('#wheelcanvas').rotate({
                angle: 0,
                animateTo: 6800,
                duration: 18000,
                callback: function() {
                    turnplate.bRotate = !turnplate.bRotate;
                }
            });
            $.ajax({
                url: "/api/web/lottery/normal",
                type: "post",
                dataType: "json",
                success: function(result) {
                    result = {};
                    result.status = 0;
                    result.data = {};
                    result.data.lotteryHintAppEnum = rnd(1, 6);
                    result.data.beHint = true;


                    if (result.status == 0) {
                        //api call success
                        if (result.data.beHint == true) {
                            //中奖
                            // var index = result.data.lotteryHintApp;
                            // var index = result.data.index;

                            var item = rnd(1, turnplate.restaraunts.length);


                            $('#wheelcanvas').stopRotate();

                            rotateFn(item, turnplate.restaraunts[item - 1]);
                            //rotateFn(index+1, turnplate.restaraunts[index]);
                        } else {
                            //未中奖
                            $('#wheelcanvas').stopRotate();
                            alert('未中奖');
                        }
                    } else {
                        $('#wheelcanvas').stopRotate();
                        var message = result.msg;

                    }
                },
                error: function(XMLHttpRequest, status, error) {
                    $('#wheelcanvas').stopRotate();

                }
            });
        } else {

            $(".popup").show();
            $(".luck_tip").text("今天已经抽过啦");
            $(".turnplate ").removeClass("tf");
        }
        $(this).unbind('click');
        $(this).on("click", function() {
            $(".turnplate ").removeClass("tf");
            $(".popup").show();
            $(".luck_tip").text("今天已经抽过啦");
        })
    });

});

function rnd(n, m) {

    var random = Math.floor(Math.random() * (m - n + 1) + n);

    return random;

}


//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
window.onload = function() {
    drawRouletteWheel();
    $(".turnplate").show()


}

function drawRouletteWheel() {

    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length / 2);
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        //在给定矩形内清空一个矩形
        ctx.clearRect(0, 0, 422, 422);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = '16px Microsoft YaHei';
        for (var i = 0; i < turnplate.restaraunts.length; i++) {
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

            //----绘制奖品开始----
            ctx.fillStyle = "#ffffff";
            var text = turnplate.restaraunts[i];
            var line_height = 17;
            //translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

            //rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2);

            /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
            if (text.indexOf("") > 0) { //流量包
                for (var j = 0; j < texts.length; j++) {
                    if (j == 0) {
                        ctx.fillText(texts[j] + "", -ctx.measureText(texts[j] + "").width / 2, j * line_height);

                    } else {
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);

                    }
                }
            } else if (text.length > 16) { //奖品名称长度超过一定范围
                text = text.substring(0, 16) + text.substring(16);
                var texts = text;
                for (var j = 0; j < texts.length; j++) {
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                }
            } else {
                //在画布上绘制填色的文本。文本的默认颜色是黑色
                //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

            }

            //添加对应图标
            //图标大小一样
            /*** var img= document.getElementById("icon"+i);
             if(img) {
                img.onload = function () {
                    ctx.drawImage(img, -22, 10);
                };
                ctx.drawImage(img, -22, 10);
            }***/

            if (text.indexOf("口粮") > 0) {
                var img = document.getElementById("icon0");
                img.onload = function() {
                    ctx.drawImage(img, -25, 10);
                };
                ctx.drawImage(img, -25, 10);
            } else if (text.indexOf("流量卡") >= 0) {
                var img = document.getElementById("icon2");
                img.onload = function() {
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

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
                $(".popup").show();
                $(".prize").text(txt);
                $(".deng ").removeClass("tf");

                bRotate = !bRotate;
            }
        })
    };
    $(".close").click(function(){
        $(".popup").hide();

    });
    $('.rotate').click(function (){
        $(".deng ").addClass("tf");
        if (useLottery == false) {
            if (bRotate)return;
            bRotate = !bRotate;
            $('#turntableimg').rotate({
                angle: 0,
                animateTo: 6800,
                duration: 18000,
                callback: function () {
                    bRotate = !bRotate;
                }
            });
            $.ajax({
                url: "/api/web/lottery/normal",
                type: "post",
                dataType: "json",
                success: function (result) {
                    var message = result.msg;
                    var index = result.data.lotteryHintApp;
                    if (result.status == 0) {
                        //api call success
                        if (result.data.beHint == true) {
                            //中奖

                            $('#turntableimg').stopRotate();


                            switch (index) {
                                case 0:
                                    rotateFn(0, 240, '50斤口粮');
                                    break;
                                case 1:

                                    rotateFn(1, 180, '500M流量');
                                    break;
                                case 2:

                                    rotateFn(2, 120, '100斤口粮');
                                    break;
                                case 3:

                                    rotateFn(3, 60, '20斤口粮');
                                    break;
                                case 4:

                                    rotateFn(4, 360, '1G流量卡');
                                    break;
                                case 5:

                                    rotateFn(5, 300, '5斤口粮');
                                    break;


                            }

                        }
                        else {
                            //未中奖
                            $('#turntableimg').stopRotate();
                            $(".turnplate ").removeClass("tf");
                            alert('未中奖');
                        }
                    }
                    else {
                        $('#turntableimg').stopRotate();
                        $(".turnplate ").removeClass("tf");

                        alert(message);
                    }
                },
                error: function (XMLHttpRequest, status, error) {
                    $('#turntableimg').stopRotate();
                    alert(error);
                }
            });

        }else{
            $(".popup").show();
            $(".luck_tip").text("今天已经抽过啦");
            $(".deng ").removeClass("tf");
        }
        $(this).unbind('click');
        $(this).on("click", function() {
            $(".deng ").removeClass("tf");
            $(".popup").show();
            $(".luck_tip").text("今天已经抽过啦");
        })

    });
});


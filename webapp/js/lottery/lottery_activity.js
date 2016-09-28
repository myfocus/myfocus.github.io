
$(function (){

    var rotateTimeOut = function (){
        $('#turntableimg').rotate({
            angle:0,
            animateTo:2160,
            duration:4000,
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
            duration:4000,
            callback:function (){
                $(".lottery").hide();
                $(".register").show();
                $(".prize").text(txt);
                changeImg();

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
        var index = 3;


        switch (index) {
            case 0:
                rotateFn(0, 240, '2G流量卡');
                break;
            case 1:

                rotateFn(1, 180, '10M流量卡');
                break;
            case 2:

                rotateFn(2, 120, '500M流量卡');
                break;
            case 3:

                rotateFn(3, 60, '10M流量卡');
                break;
            case 4:

                rotateFn(4, 360, '1G流量卡');
                break;
            case 5:

                rotateFn(5, 300, '10M流量卡');
                break;


        }
        $(this).unbind('click');



    });
});
var url = window.location.href;
$(function() {
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
    //验证码格式
    $(".test_button").click(function(){

            var mobile=$('input[name="phonenum"]').val();
            $.ajax({
                url:url,
                data:{
                    phoneNumber:mobile,
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
                     return;
                    }
                }

            })


    })
   function testcode() {
       var vcode = $("#vcode").val();

        if (vcode.match(/^\d{1,20}$/) && vcode != '') {
            return true;
        }else{
            alert("请输入正确的验证码");
            return false;
        }
    };

    $('input[type="tel"]').bind('focus',function(){
        $('body').height($(window).height()+'px');
    }).bind('blur',function(){

        $('body').height('auto');
    });

    $('#submit').click(function() {
        if(!testphone()) return;
        var iswx = /MicroMessenger/.test(navigator.userAgent);
        if(!iswx){
            if(!testcode()) return;
        }

        var phonenum = $("input[name='phonenum']").val();
        var vcode = $("#vcode").val();
        $.ajax({
            url:url,
            type: "post",
            dataType:"json",
            data: {
                phoneNumber:phonenum,
                verifyCode:vcode
            },

            success:function(result)
            {

                if(result.status=="0"){
                    //校验成功
                    $(".popup").show();

                }else  if(result.status=="7"){
                    $(".weChart_red_form").hide();
                    $(".join").show();
                    $(".weChart_redbg").css({
                        "background":"url(../../images/red_ye.png) 0 0 no-repeat",
                        "-webkit-background-size": "100% 24.47rem",
                        "background-size": "100% 23.47rem"
                    })
                } else {

                    alert(result.msg)
                    changeImg();
                    return false ;
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(textStatus);
            }

        });
    });

});

function changeImg(){
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src",chgUrl(src));
}
//时间戳
//为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳
function chgUrl(url){
    var timestamp = (new Date()).valueOf();
    url = url.substring(0,22);
    if((url.indexOf("&")>=0)){
        url = url + "×tamp=" + timestamp;
    }else{
        url = url + "?timestamp=" + timestamp;
    }
    return url;
}


$(function() {
    var ok1 = false;
    var ok2 = false;

    $('input[type="tel"]').focus(function(){
        $(this).css("color","#333333");
        $("body").css({
            "margin-top":"-5rem",

        })
    })
    $('input[type="tel"]').blur(function(){

        $("body").css({
            "margin-top":"auto",

        })
    })

    //验证电话号码
    $('input[name="phonenum"]').blur(function() {
        ok1 = false;

        if ($(this).val().match(/^(13|15|18|14|17)\d{9}$/) && $(this).val() != '') {
            ok1 = true;

        } else {
            $(this).val("请输入正确的手机号码").css("color","#fe5555");
            $(this).focus(function(){
                $(this).val("")
            })

        }
    });

    //验证验证码

    $(".test_button").click(function(){

        var countdown=60;
        function settime(obj) {
            if (countdown == 0) {
                obj.removeAttribute("disabled");
                obj.value="免费获取验证码";
                countdown = 60;
                return;
            } else {
                obj.setAttribute("disabled", true);
                obj.value=countdown + "s";
                countdown--;
            }
            setTimeout(function() {
                    settime(obj) }
                ,1000)
        }
        settime(this);
    })
    $('input[name="test"]').blur(function() {
        ok2 = false;

        if ($(this).val() != '') {

            ok2= true;


        } else {
            $(this).val("请输入验证码").css("color","#fe5555");;
            $(this).focus(function(){
                $(this).val("")
            })

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
    });

})

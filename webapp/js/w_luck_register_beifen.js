
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
var currUser = getCookieValue("globalID");
if (currUser == null) {
    window.location.href = "/api/web/lottery/main"+location.search.replace('sharedToken%20=','sharedToken=').replace('sharedToken =','sharedToken=');
}

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
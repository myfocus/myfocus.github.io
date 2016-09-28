var maxn=new Array();
var minn=new Array();
$($(".numput")).each(function(){

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
$(".begin").click(function(){
    if($("input[name='age']").val()!="" && $("input[name='num']").val()!="" && $("input[name='time']").val()!=""){
	$(".swiper-slide").addClass("hide");
        var age = parseInt($("input[name='age']").val())
        if (age >= 100) {
            var deadtime = (101 - age) * (parseInt($("input[name='num']").val())) * (parseInt($("input[name='time']").val()));
            $(".getphone").removeClass("hide");
            $(".time").html(deadtime + "分钟");
        } else {
            var deadtime = (100 - age) * (parseInt($("input[name='num']").val())) * (parseInt($("input[name='time']").val()));
            $(".getphone").removeClass("hide");
            $(".time").html(deadtime + "分钟");
        }
    }else{
        return;
    }
})
$('input').on('focus',function(){
	$('body').height($(window).height());
}).on('blur',function(){
    	$('body').css({'height':'auto'});
});
$(".getquan").click(function () {
    var phonenum = $("input[name='phonenum']").val();
            if (phonenum.match(/^(13|15|18|14|17)\d{9}$/) && phonenum != '') {
                $.ajax({
                    url: registerUrl||"/user/register/welfare/kl",
                    type: "post",
                    dataType:"json",
                    data:{
                        phoneNumber:phonenum
                    },
                    success: function (result) {
                        var msg = result.msg;
                        if(result.status=="0"){
                            $(".getphone").addClass("hide");
                            $(".duiquan").removeClass("hide");
			                $("body").css({"overflow":"scroll"});
                        }else if(result.status=="1"){
                            $("#quan").attr("src","../../images/fatherday/olduser.png");
                            $(".getphone").addClass("hide");
                            $(".duiquan").removeClass("hide");
                            $(".step").addClass("hide");
			                $("body").css({"overflow":"scroll"});
                        }else{
                            alert(msg)
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                    }

                });
            }else{
                return;
            }






});

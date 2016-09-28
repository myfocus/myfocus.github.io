
function signOk(){
    var oldValue=parseInt($(".gn").html());
    oldValue++
    $(".gn").html(oldValue);
}
$(function(){
    $(".click_sign").click(function(){
        $.ajax({
            type: 'POST',
            url: "aaaa.action",//提交到那里 后他的服务
            data: "can1=1&can2=2&can3=3",//提交的参数
            success:function(msg){
            $(".sign_ok_bg").show();
                signOk();

            },
            error:function(){
                setTimeout($(".sign_error").show(),3000)
            }
        });

    });
});
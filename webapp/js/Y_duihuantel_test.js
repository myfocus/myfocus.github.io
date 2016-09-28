/**
 * Created by lichao on 16/4/20.
 */
$(function(){
    $("#submit").click(function(){
        if ($(".phonenumber").val().match(/^(13|15|18|14|17)\d{9}$/) && $(this).val() != '') {


        } else {
            $(".phonenumber").val("请输入正确的手机号码")
            $(".phonenumber").focus(function(){
                $(this).val("")
            })

        }
    })
})
$(function() {

    function btnL (obj,name,number){
        $(obj).keydown(function(){
            if(this.value.length>number){
                $(name).addClass("on")
            }else{
                $(name).removeClass("on")
            }
        })
    }
    btnL (".cpwinput",".nextbutton",12);
    btnL (".cz_phone",".cz_button",9);

    /**
     * 验证与查询卡密
     */
    $("#cardPasswdSub").click(function(){
            var cardPasswd = $("#cardPasswd").val();
            if(cardPasswd == '' || cardPasswd == null){
                $(".error").show();
                setTimeout(function(){$(".error").hide();},2000);
            } else{
                $.ajax({
                    url: "/wx/recharge/cardInfo",
                    data:{
                        cardPasswd:cardPasswd,
                    },
                    type: "post",
                    dataType:"json",
                    async:false,
                    success: function (result) {
                        if (result.status == "0") {
                            $("#cardpassward_section").hide();
                            $("#change_section").show();

                            $("#batchName").html(result.data.batchName);
                            $("#packageSize").html(result.data.packageSize);

                            var logoIMg;
                            if(result.data.picUrl){
                                logoImg = result.data.picUrl;
                            }else{
                                logoImg = "../../../images/weixin/exchangeFlow/zs_logo.png";
                            }
                            $("#logoImg").attr('src',logoImg);

                            $("#cz_cardPasswd").val(result.data.cardPasswd);
                        }else if(result.status == "-1"){
                            $(".error").html(result.msg).show();
                            setTimeout(function(){$(".error").hide();},2000);
                        }
                    },
                    error:function(){
                        if (result.status !== "0") {

                        }
                    }

                });//ajax end

            }//else end

    });

    /**
     * 进行充值
     */
    $("#cz_from_sub").click(function(){
        if ($("#cz_callPhone").val() == '' || $("#cz_callPhone").val() == null){
            $(".error").html("请输入要充值的手机号").show();
            setTimeout(function(){$(".error").hide();},2000);
        }else if(!(/^1[3|4|5|7|8|9]\d{9}$/.test($("#cz_callPhone").val()))){//手机格式验证
            $(".error").html("请输入要充值的手机号").show();
            setTimeout(function(){$(".error").hide();},2000);
        }else{
            $("#cz_from").submit();
        }
    });

    //如果隐藏input的卡密不为空,则跳页面
    if($("#h_cardPassword").val()){
        $("#cardPasswd").val($("#h_cardPassword").val());
        $("#cardPasswdSub").click();
        $("#h_cardPassword").val("");
    }

    //如果充值失败,需要重新充值并给出提示
    if($("#h_restatus").val() != '' && $("#h_restatus").val() != 0){
        $(".error").html("充值失败!"+$("#h_remsg").val()).show();
        setTimeout(function(){$(".error").hide();},2000);
    }

});

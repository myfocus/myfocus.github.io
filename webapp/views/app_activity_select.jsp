<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
    <!-- base需要放到head中 -->
    <base href=" <%=basePath%>">
    <meta charset="UTF-8">
    <meta content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../css/app_activity.min.css?var=201608191103"/>
    <title>赚流量</title>
</head>
<body>
    <div class="altive_list">
        <header class="select">
            <div class="seright se">
                <a class="activesort selectbox">活动排序

                </a>
                <div class="selectbg"  style="display: none;">
                <div class="typeselect">
                    <p data-value="1" data-filter="sort">活动最新</p>
                    <p data-value="0" data-filter="sort">人气最高</p>


                </div>
                    </div>
            </div>
        </header>
        <section class="list">

        </section>
        <p id="load"></p>
        <img id="goTop" src="../images/activity/goTop.png"/>
    </div>

<script src="../js/jquery-1.10.2.js"></script>
<script>

    $(function(){
        var totalPage = 0;
        var search = {"type":0,"sort":1};

        $(".se").each(function(){
            var s=$(this);
            var p= s.parents();
            var z=parseInt(s.css("z-index"));
            var dt=$(this).children(".selectbox");
            var dd=$(this).find(".selectbg");
            var _show=function(){
                dd.slideDown(20);
                dt.addClass("on");


            };   //展开效果
            var _hide=function(){
                dd.slideUp(20);
                dt.removeClass("on");

            };    //关闭效果
            dt.click(function(){
                        if(dd.hide()){
                            _show();
                            $(".select").addClass("ac");
                            $(".list").addClass("hg");
                        }else{
                            _hide();
                            $(".select").removeClass("ac");
                            $(".list").removeClass("hg");
                        }
            });
            dd.find("p").click(function(){
                dt.html($(this).html());_hide();
                if($(this).data("filter")=="type"){
                    search.type = $(this).data("value")
                }else{
                    search.sort = $(this).data("value")
                };

                //ajax
                $.ajax({
                    url:"/api/web/activity/getlist",
                    type:"get",
                    data:{tagType:search.type,sortType : search.sort},
                    success:function(html, textStatus, jqXHR)
                    {
                        totalPage = jqXHR.getResponseHeader("nomore");
                        $('section.list').html(html);
                        peoNum ($(".peonum"));

                    },
                    error:function(XMLHttpRequest, status, error){


                    }
                });

            }).first().click();
            $("body").click(function(i){ !$(i.target).parents(".se").first().is(s) ? _hide():"";});
            dd.click(function(){
                $(this).hide();
                dt.removeClass("on");
                $(".select").removeClass("ac");
            })
            //

        });
        var totalheight = 0;
        var pindex = 1;

        $(window).scroll(function(){
            var srollPos = $(window).scrollTop();


            totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
            if(($(document).height()) <= totalheight) {
                if (pindex + 1 <= totalPage) {
                    $.ajax({
                        url: "/api/web/activity/getlist",
                        type: "get",
                        data: {tagType: search.type, sortType: search.sort, pageIndex: pindex + 1},
                        success: function (html, textStatus, jqXHR) {
                            $('section.list').append(html);
                            pindex++;
                            peoNum ($(".peonum"));

                            return;
                        },
                        error: function (XMLHttpRequest, status, error) {

                        }
                    });
                }else{
                    $(window).unbind('scroll');
                   setTimeout(function(){
                       $("#load").hide();
                   },1000)

                }

            };
            if($(this).scrollTop() != 0) {
                $('#goTop').fadeIn();
                $('#goTop').click(function(){
                    document.documentElement.scrollTop = document.body.scrollTop =0;
                })
            } else {
                $('#goTop').fadeOut();
            }


        })
    });

function peoNum (obj){
    $(obj).each(function(){
        var peoNum =parseInt($(this).html());
        if (peoNum >10000)
        {
            var wanNum = ((peoNum/10000).toFixed(1))+"万";
            $(this).html(wanNum);
        }
    })
}

</script>
</body>

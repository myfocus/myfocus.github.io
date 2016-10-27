
$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";

    var musicFirst=true;
    var timeline=new TimelineMax();
    var res=0;
    var allowTouch=false;
    //阻止屏幕滑动
    $('html,body').on(touchmove,function(e){
        e.preventDefault();
    });
    //阻止屏幕双击以后向上位移 音乐开关
    $('.page').on(touchstart,function(e){
        e.preventDefault();
        if(musicFirst){
            musicFirst=false;
            var mySound = $('#media')[0];
            mySound.play();
        }
    });
    
    handleOverallComplete();
    function handleOverallComplete(event){
        //首页动画
        initIntro();
        timeline.play();
        initMusic();
    }



    function initIntro(){
        TweenMax.set('.page1',{alpha:0});
        TweenMax.set('.page2',{alpha:0});
        TweenMax.set('.page3',{alpha:0});
        TweenMax.set('.page4',{alpha:0});
        TweenMax.set('.page1_1',{alpha:0});
        TweenMax.set('.page1_2',{alpha:0,y:-50});
        TweenMax.set('.page1_3',{alpha:0,x:-100});
        TweenMax.set('.page2_1',{alpha:0});
        TweenMax.set('.page2_2',{alpha:0,y:50});
        TweenMax.set('.page2_3',{alpha:0,x:-50});
        TweenMax.set('.page3_1',{alpha:0});
        TweenMax.set('.page3_2',{alpha:0,x:50});
        TweenMax.set('.page3_3',{alpha:0,x:-50});
        TweenMax.set('.page4_1',{alpha:0});
        TweenMax.set('.page4_2',{alpha:0,y:50});
        TweenMax.set('.page4_3',{alpha:0,x:-50});
        
        
        //P1
        timeline.add(TweenMax.to('.page1',1,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page1_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page1_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page1_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextFirst();
            }});
        }}));
        
        //P2
        timeline.add(TweenMax.to('.page2',2,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page2_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page2_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page2_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextSecond();
            }});
        }}));

        //P3
        timeline.add(TweenMax.to('.page3',2,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page3_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page3_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page3_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextThird();
            }});
        }}));

        //P4
        timeline.add(TweenMax.to('.page4',2,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page4_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page4_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page4_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextFourth();
            }});
        }}));
        

        //P5
        // timeline.add(TweenMax.from('.page5',1,{scale:1.2,alpha:0,delay:1,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page5_3',.6,{alpha:0,y:30,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page5_1',.5,{alpha:0,delay:2,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page5_2',1,{alpha:0,x:50,delay:.5,ease:Linear.easeNone}));

        // //P6
        // timeline.add(TweenMax.from('.page6',1,{alpha:0,delay:2,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page6_1',.5,{scale:0,x:10,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page6_2',.6,{alpha:0,y:30,delay:0.3,ease:Linear.easeNone}));

        // //P7
        // timeline.add(TweenMax.from('.page7',1,{alpha:0,delay:2,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page7_0',1,{alpha:0,y:10,ease:Linear.easeNone,onComplete:function(){
        //     setPerson();
        //     timeline.pause();
        // }}));

        // //P8
        // timeline.add(TweenMax.to('.page8',1,{alpha:1,ease:Linear.easeNone}));
        // timeline.add(TweenMax.from('.page8_1',.8,{alpha:0,y:20,ease:Expo.easeOut,onComplete:function(){
        //     TweenMax.to('.page8_t1',.6,{alpha:1,delay:.5,ease:Linear.easeNone});
        //     TweenMax.to('.page8_t2',.6,{alpha:1,delay:1,ease:Linear.easeNone});
        //     TweenMax.to('.page8_t3',.6,{alpha:1,delay:1.5,ease:Linear.easeNone});
        //     TweenMax.to('.page8_t4',.6,{alpha:1,delay:2,ease:Linear.easeNone});
        //     TweenMax.to('.page8_t5',.6,{alpha:1,delay:2.5,ease:Linear.easeNone});
        //     TweenMax.to('.page8_t6',.6,{alpha:1,delay:3,ease:Linear.easeNone});
        // }}));
        // timeline.add(TweenMax.from('.page8_2',.8,{alpha:0,y:20,ease:Expo.easeOut,onComplete:function(){
        //     $('.page8_2').addClass('xintiao');
        // }}));
        // timeline.add(TweenMax.from('.page8_3',.8,{alpha:0,y:20,ease:Expo.easeOut}));
        // timeline.add(TweenMax.from('.page8_5',.8,{alpha:0,y:20,ease:Expo.easeOut,onComplete:function(){
        //     $('.logo').fadeIn();
        // }}));
        // timeline.pause();
        // timeline.timeScale(1.3)
    }

    // function submitResult()
    // {
    //     var startTime=new Date("January 12,2016 9:50:00");   //开始时间
    //     var nowTime=new Date();    //结束时间
    //     console.log(Math.floor((nowTime-startTime)/400));//直接减法获取的是毫秒
    //     $('.page8_4>span').text(Math.floor((nowTime-startTime)/400));
    // }


    function nextFirst(){
        $('.page1_3').on('touchstart',function(){
            setTimeout(function(){
                $('.page2').show();
                TweenMax.set('.page1',{alpha:0});
                timeline.play();
            },500)
        })
    }
    nextSecond
    function nextSecond(){
        $('.page2_3').on('touchstart',function(){
            setTimeout(function(){
                $('.page3').show();
                TweenMax.set('.page2',{alpha:0});
                timeline.play();
            },500)
        })
    }

    function nextThird(){
        $('.page3_3').on('touchstart',function(){
            setTimeout(function(){
                $('.page4').show();
                TweenMax.set('.page3',{alpha:0});
                timeline.play();
            },500)
        })
    }

    function nextFourth(){
        $('.page4_3').on('touchstart',function(){
            setTimeout(function(){
                $('.main').hide();
                TweenMax.set('.page4',{alpha:0});
                $('.flowPark').show();
            },500)
        })
    }

    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
    }

    function setPerson(){
        var arr = [1,2,3,4,5,6,7,8,9];
        var arr2 = arr.sort(randomsort);
        for(var m=0;m<arr2.length;m++){

            var tempic=$('#pic'+(m+1));

            tempic.attr('src','images/p7_'+arr2[m]+'.png');
            TweenMax.to(tempic,.5,{alpha:1,delay:.3*m});

            tempic.on(touchstart,function(){
                if(allowTouch){
                    if($(this).attr('src')=='images/p7_9.png'){
                        $('#pop1,#pop2').hide();
                        $('.popmask,#pop3').show();
                        setTimeout(function(){
                            $('.popmask').hide();
                            TweenMax.set('.page8',{y:0,alpha:0});
                            timeline.play();
                        },500)
                        _czc.push(["_trackEvent", "按钮", "选择正确", "选择正确", 0, "Btn2"]);
                        res=1;
                    }else{
                        $('#pop1,#pop3').hide();
                        $('.popmask,#pop2').show();
                        _czc.push(["_trackEvent", "按钮", "选择错误", "选择错误", 0, "Btn2"]);
                        res=0;
                    }
                }

            });

        }

        setTimeout(function(){
            $('.popmask').show();
            $('#pop1').show();
            allowTouch=true;
        },3000)

    }



    $('.popmask').on(touchstart,function(){
        if(res!=1){
            $(this).hide();
        }
        /*$(this).hide();
        if(res==1){
            TweenMax.set('.page8',{y:0,alpha:0});
            timeline.play();
        }*/
    });

    $('.page8_2').on(touchstart,function(){
        TweenMax.to('.page8_2',1,{alpha:0,y:-10,ease:Expo.easeOut});
        TweenMax.to('.page8_3',1,{alpha:0,y:-10,delay:.3,ease:Expo.easeOut});
        TweenMax.to('.page8_4',1,{alpha:1,y:0,delay:1,ease:Expo.easeOut});
        _czc.push(["_trackEvent", "按钮", "点击爱心", "点击爱心", 0, "Btn1"]);
    });

    $('.page8_5').on(touchstart,function(){
		var isInDidiok = isInDidi();
		if(isInDidiok)
		{
			shareInDidi();
		}
		else
		{
			$('.sharemask').show();
		}
    });

    $('.sharemask').on(touchstart,function(){
        $(this).hide();
    });

    //初始化音乐，如果musicPath=''，相当于什么都没做
    function initMusic(){
        $('.musicicon').on(touchstart,function(){
            var mySound = $('#media')[0];
            if($(this).hasClass('musicrotate')){
                mySound.pause();
                $(this).css('background-position','right top');
                $(this).removeClass('musicrotate');
            }else{
                mySound.play();
                $(this).css('background-position','left top');
                $(this).addClass('musicrotate');
            }
        })
    }

});
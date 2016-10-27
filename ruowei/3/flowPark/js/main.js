
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
        timeline.add(TweenMax.to('.page2',1,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page2_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page2_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page2_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextSecond();
            }});
        }}));

        //P3
        timeline.add(TweenMax.to('.page3',1,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page3_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page3_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page3_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextThird();
            }});
        }}));

        //P4
        timeline.add(TweenMax.to('.page4',1,{alpha:1,delay:1,onComplete:function(){
            TweenMax.to('.page4_1',1,{alpha:1,ease:Linear.easeNone});
            TweenMax.to('.page4_2',0.8,{alpha:1,y:0,delay:0.5,ease:Linear.easeNone});
            TweenMax.to('.page4_3',0.8,{alpha:1,x:0,delay:0.5,ease:Expo.easeNone,onComplete:function(){
                timeline.pause();
                nextFourth();
            }});
        }}));
        timeline.pause();
    }

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
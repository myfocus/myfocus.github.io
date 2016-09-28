
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
    //$('html,body').on(touchmove,function(e){
    //    e.preventDefault();
    //});
    //阻止屏幕双击以后向上位移

    //阻止屏幕双击以后向上位移
    $('.page').on(touchstart,function(e){
        e.preventDefault();
        //if(musicFirst){
        //    musicFirst=false;
        //    var mySound = $('#media')[0];
        //    mySound.play();
        //}
    });
    //阻止屏幕双击以后向上位移

    var path='/images/share/';

    //loading
    var manifest=[
        {src:path+'1_message1.png'},
        {src:path+'1_message2.png'},
        {src:path+'1_message3.png'},
        {src:path+'2_background.png'},
        {src:path+'2_button.png'},
        {src:path+'3_button.png'},
        //{src:path+'3_tanchuang_btn.png'},
        {src:path+'3_tanchuang.png'},
        {src:path+'focus.gif'},
        {src:path+'head.jpg'},
        {src:path+'head.png'},
        {src:path+'kl_background.png'},
        {src:path+'kl_head.png'},
        {src:path+'kl_head2.png'},
        {src:path+'me.jpg'}
    ];

    function handleOverallProgress(event){
        $('.loadingtxt').text(Math.ceil(event.loaded*100)+"%");
    }

    function handleOverallComplete(event){
        $('.loading').remove();
        $('.main').fadeIn(1200);

        //首页动画
        initIntro();
        timeline.play();
        //initMusic();
        // submitResult();
    }

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("progress", handleOverallProgress);
    loader.addEventListener("complete", handleOverallComplete);
    loader.setMaxConnections(1);
    loader.loadManifest(manifest);
    //loading


    function initIntro(){

        //P5

        timeline.add(TweenMax.from('.page5',.4,{scale:1.2,alpha:0,delay:.3,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page5_1',.1,{alpha:0,y:-30,delay:.6,ease:Bounce.easeOut}));
        timeline.add(TweenMax.from('.page5_2',.1,{alpha:0,y:50,delay:0.8,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page5_3',.1,{alpha:0,y:50,delay:2.2,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page5_4',.1,{alpha:0,y:50,delay:2.2,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page5_5',.1,{alpha:0,delay:0.4,ease:Linear.easeNone}));

        // // P6
        timeline.add(TweenMax.from('.page6',0.1,{alpha:0,delay:2.4,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page6_1',.1,{scale:0,x:10,ease:Linear.easeNone}));
        timeline.add(TweenMax.from('.page6_2',.1,{alpha:0,y:30,delay:0.3,ease:Linear.easeNone}));
       
    }
    $('#btn_accept').on('touchstart',function(){
       //$('.page5,.page6').hide();
       //$('.page7').show();
        window.location.href="/views/m/share/index.html?sharedToken=" + sharedToken;
    });

    $('#btn_submit').on('touchstart',function(){
        $('.message').show();
        $('#mask').show();
    });
    $('#mask').on('touchstart',function(){
        $('.message').hide();
        $('#mask').hide();
    });

    //function initMusic(){
    //    $('.musicicon').on(touchstart,function(){
    //        var mySound = $('#media')[0];
    //        if($(this).hasClass('musicrotate')){
    //            mySound.pause();
    //            $(this).css('background-position','right top');
    //            $(this).removeClass('musicrotate');
    //        }else{
    //            mySound.play();
    //            $(this).css('background-position','left top');
    //            $(this).addClass('musicrotate');
    //        }
    //    })
    //}

});
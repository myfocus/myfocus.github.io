   /* //sj.js
	var slicebox;
	$(document).ready(function() {
	  	slicebox = $('#sb-slider').slicebox({  
	        interval:10000,  //自动播放时间setInterval
	        orientation : "h", //表示幻灯片的切换方向，可取 (v)垂直方向, (h)水平方向 or (r)随机方向 
	        perspective : 1200, //透视点距离，可以通过改变其值查看效果 
	        cuboidsCount : 1,//幻灯片横向或纵向被切割的块数，切割的每一块将会以3D的形式切换 
	        cuboidsRandom : true, //是否随机 cuboidsCount 参数的值 
	        maxCuboidsCount : 1, //设置一个值用来规定最大的 cuboidsCount 值 
	        //colorHiddenSides : "#fff", //隐藏的幻灯片的颜色 
	        sequentialFactor : 150, //幻灯片切换时间（毫秒数） 
	        speed : 600, //每一块3D立方体的速度 
			autoplay :true, //是否自动开始切换 
	        onBeforeChange : function( position ) { return false; },
			onAfterChange : function( position ) { return false; },
			onReady : function() { return false; }
	    }); 
	 });
	$(function() {
		var Page = (function() {
			var $navDots = $( '#nav-dots' ).hide(),
				$nav = $navDots.children( 'span' ),
				$shadow = $( '#shadow' ).hide(),
				slicebox = $( '#sb-slider' ).slicebox( {
					onReady : function() {
						$navDots.show();
						$shadow.show();
					},
					onBeforeChange : function( pos ) {
						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );
					}
				}),
				init = function() {
					initEvents();		
				},
				initEvents = function() {
					// add navigation events
					$nav.each( function( i ) {
						$( this ).on( 'click', function( event ) {
							var $dot = $( this );								
								if( !slicebox.isActive() ) {
									$nav.removeClass( 'nav-dot-current' );
									$dot.addClass( 'nav-dot-current' );					
								}								
								slicebox.jump( i + 1 );
								return false;								
							});								
						});
					};
					return { init : init };
			})();
			Page.init();
		});*/
		//轮播
		$(document).ready(function() {
			var swiper = new Swiper('.swiper-container', {			
		        pagination: '.swiper-pagination',
		        slidesPerView: 1,
		        paginationClickable: true,
		        keyboardControl: true,
		        loop:true,
		        effect:'fade',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        autoplay:6000,
		        speed:1000,
		    });
		});

		//返回顶部	
		$(document).ready(function() {

			var oBT = document.getElementById('bt');
			var bOk = false;
			window.onscroll=function(){
				var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
				if(bOk){
					clearInterval(oBT.timer);
				}
				bOk=true;
				if(scrollT>0){
					oBT.style.display='block';
				}else{
					oBT.style.display='none';
				}
			};
			oBT.onclick=function(){
				var start = document.documentElement.scrollTop||document.body.scrollTop;
				var dis = 0-start;
				var count = parseInt(1000/30);
				var n = 0;
				clearInterval(oBT.timer);
				oBT.timer = setInterval(function(){
					bOk=false;
					n++;
					var a = 1-n/count;
					var cur = start+dis*(1-Math.pow(a,3));
					document.documentElement.scrollTop=document.body.scrollTop=cur;
					if(n==count){
						clearInterval(oBT.timer);
					}
				},30);
			};

		});

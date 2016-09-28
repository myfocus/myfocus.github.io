$(function() {
	/**
		轮播图
	*/
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    //loop: true,
	   	autoplay: 5000,//自动滑动
	    pagination: '.swiper-pagination',//分页器
	}) 

	/**
		显示隐藏
	*/

	function proHideShow($box,$btn,$tit){
		$btn.on("click",function(){
			var $index = $(this).parent().parent().index();
			$btn.not($btn.eq($index)).removeClass();
			$tit.not($tit.eq($index)).removeClass();
			$box.not($box.eq($index)).hide();
			$box.eq($index).toggle();
			if($box.is(":visible")){				
				$btn.eq($index).addClass("bg_none");
				$tit.eq($index).addClass("open");
			}else{
				$btn.eq($index).removeClass("bg_none");
				$tit.eq($index).removeClass("open");
			}
		})
	}
	//须知
	proHideShow($('#user_instructions p'),$('#user_instructions h5'),$('#user_instructions i'));

	//订单问题
	proHideShow($('#order_problem p'),$('#order_problem h5'),$('#order_problem i'));
});



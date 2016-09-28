$(function(){

	/**
		轮播图
	*/
	var mySwiper = new Swiper ('.swiper-container1', {
	    direction: 'horizontal',
	    loop: true,//环
	   	autoplay: 5000,//自动滑动
	    slidesPerView : 2,//同时显示的slides数量
	    spaceBetween : 20,
	}) 
});
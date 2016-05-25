$(function(){

	//楼盘展示效果
	var imghover=$(".floor_show li");
	imghover.hover(function(){
		$(this).find(".con").show()
	},function(){
		$(this).find(".con").hide();
	});

})
$(function(){
	

	/**
		游戏问题
	*/
	//var $box = $('.problems p');
	//var $btn = $('.pro_title h5');
	//var $tit = $('.pro_title h5').find("i");

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
	//H5游戏
	proHideShow($('#html_game p'),$('#html_game h5'),$('#html_game i'));

	//客户端游戏
	proHideShow($('#client_game p'),$('#client_game h5'),$('#client_game i'));
	
	
}) 
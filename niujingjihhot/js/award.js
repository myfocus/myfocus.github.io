$(function (){
	//转盘定时器开启
	var i=0;
	var timer=null;
	var bRotate = false;
	clearInterval(timer);
	function AwardScroll() {
		if(i>=360){
			i=0
		}else{
			i+=0.1}
		$("#rotate").rotate({
			angle: i,
		});
	}
	timer=setInterval(AwardScroll,10);

	//当转盘超过6圈时，网络超时
	var rotateTimeOut = function (){
		$('#rotate').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};

	var bRotate = false;

	//设置转盘转动的角度，时间
	var timer1=null;
	var rotateFn = function (awards, angles, txt){
		bRotate = !bRotate;
		$('#rotate').stopRotate();
		$('#rotate').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				console.log(awards)
				clearTimeout(timer1)
				var  noaward='<div class="result_bg"></div><div class="noaward"><div class="awardb"><p></p><a href="javascript:;" id="btn">再抽一次</a></div></div>';
				$("body").append(noaward);
				  	if(0<=parseInt(awards) && parseInt(awards)<6 ){
				  		$(".noaward .awardb").addClass("luck1")
				  	}
				  	else
				  	{
				  		$(".noaward .awardb").addClass("luck2")
				  	}

				$(".awardb p").html(txt);
				bRotate = !bRotate;
					timer1=setTimeout(function(){
						$(".result_bg").remove();
						$(".noaward").remove();
						timer=setInterval(AwardScroll,10);
					},3000)
			}
		})
	};
	//点击箭头开始转动
	var rotateSelect=function (){
		clearTimeout(timer1)
		clearInterval(timer);
		//转盘转动时，以及提示框出现时，点击转动无效
		if(bRotate) return;
		$(".result_bg").remove();
		$(".noaward").remove();
		//如果time=0网络延迟
		var time=[0,1];
		time=time[Math.floor(Math.random()*time.length)];
		if(time==0){
			rotateTimeOut(); //网络延时
		};
		if(bRotate)return;
		var item =rnd(0,7);
		// console.log("item"+item)
		switch (item) {
			case 0:
				rotateFn(0, 0, '笔记本电脑一台');
				break;
			case 1:
				rotateFn(1, 270, '办公椅一张');
				break;
			case 2:
				rotateFn(2, 90, '加湿器一台');
				break;
			case 3:
				rotateFn(3, 135, '500元代金券');
				break;
			case 4:
				rotateFn(4, 180, '一个月的房租');
				break;
			case 5:
				rotateFn(5, 315, '1000元代金券');
				break;
			case 6:
				rotateFn(6, 45, '');
				break;
			case 7:
				rotateFn(7, 225, '');
				break;
		}
	}

	$(document).on('click','#Pointer',rotateSelect);
	$(document).on('click','#btn',rotateSelect);
});
function rnd(n, m){
    return Math.floor(Math.random()*(m-n+1)+n)
}
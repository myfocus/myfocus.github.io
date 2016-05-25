var interval = 1000;

function fillZero(num, digit)
	{
		var str=''+num;
		while(str.length<digit)
		{
			str='0'+str;
		}
		return str;
	}
function ShowCountDown(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);

var oday1=fillZero(day1,2)
var ohour=fillZero(hour,2)
var ominute=fillZero(minute,2)
var osecond=fillZero(second,2)
$("#day").text(oday1);
$("#hour").text(ohour);
$("#min").text(ominute);
$("#sec").text(osecond);
}

window.setInterval(function(){
	ShowCountDown(2016,5,31,'divdown1');
	}, interval);
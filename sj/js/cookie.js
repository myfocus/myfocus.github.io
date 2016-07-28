'use strict';
/*
**	addCookie	add a cookie
**	params
**				name[string]
**				value[string]
**				iDay[number]  有效时间
*/
function addCookie(name,value,iDay){
	//判断iDay是否存在，如果有就设置没有就不设置
	if(iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+'; PATH=/; EXPIRES='+oDate.toGMTString();
	}else{
		document.cookie=name+'='+value+'; PATH=/';
	}
}
/*
**	getCookie		get a cookie
**	params
**				name[string]
**	return 
**				[string]
*/
function getCookie(name){
	var arr = document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
}

/*
**	removeCookie	remove a Cookie
**	params
**				name[string]
*/
function removeCookie(name){
	//把cookie的时间变成过期的就删了。
	addCookie(name,1,-1);
}













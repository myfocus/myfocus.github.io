//通过className获取元素
		function getClass(oParent,sClass){
			if (oParent.getElementsByClassName){
				return oParent.getElementsByClassName(sClass);
			}else{
				// 获取所有子级
				var aTmp=oParent.getElementsByTagName('*');
				var aRes=[];
				
				for (var i=0; i<aTmp.length; i++){
					var arr=aTmp[i].className.split(' ');
					
					for (var j=0; j<arr.length; j++){
						if (arr[j] == sClass){
							aRes.push(aTmp[i]);
						}
					}
				}
				
				return aRes;
			}
		}

		/*手机自适应设置*/
		window.onload=window.onresize=window.onscroll=function(){	
			fontSize();
			pageShow();
			
		};

		function pageShow(){
			var oBox = document.getElementsByTagName('body')[0];
			var oWap = getClass(oBox,'wrapper')[0];
			oWap.style.visibility = 'visible';
		}

		function fontSize(){
			document.documentElement.style.fontSize = 100*(document.documentElement.clientWidth/750)+'px';
		}
		/*手机自适应设置end*/
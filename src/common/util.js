var Utils = (function() {
	var namespace = function() {
		var a, v, x, o, d, i, j, len1, len2;
		a = arguments;
		len1 = a.length;
		// 支持多参数,如两个参数（a.b.c, d.e）
		for(i = 0; i < len1; i++) {
			d = a[i].split('.'); // 分解成数组，如把a.b.c分解成[a,b,c]
			o = window[d[0]] = window[d[0]] || {}; // 保证a是对象,若果全局有就用全局的，如果没有就新建{}
			x = d.slice(1); //取出[b,c]
			len2 = x.length;

			// 支持嵌套，对b和c
			for(j = 0; j < len2; j++) {
				v = x[j]
				o = o[v] = o[v] || {}; // o逐层深入，保证每层都是对象，如果是b，o变为a.b，如果是c，o最后变成a.b.c
			}
		}
	};

	if(typeof Array.prototype.indexOf != "function") {
		Array.prototype.indexOf = function(searchElement, fromIndex) {
			var index = -1;
			fromIndex = fromIndex * 1 || 0;

			for(var k = 0, length = this.length; k < length; k++) {
				if(k >= fromIndex && this[k] === searchElement) {
					index = k;
					break;
				}
			}
			return index;
		};
	}
		/*
		 * 等比缩放图片
		 * imgobj 图片对象, W_LIMIT 限制宽度, H_LIMIT 限制高度
		 */
	var changeImageSize = function(imgobj, W_LIMIT, H_LIMIT) {
			imgobj.load(function() {
				var img_h = $(this).height();
				var img_w = $(this).width();
				var width = img_w;
				var height = img_h;
				if(width > W_LIMIT) { //如果图片宽度超出容器宽度--要撑破了 
					width = W_LIMIT;
					height = (W_LIMIT * height) / width; //高度等比缩放 
				}
				if(height > H_LIMIT) {
					height = H_LIMIT;
					width = (H_LIMIT * width) / height; //高度等比缩放 
				}
				$(this).css({
					"width": width + 'px',
					"height": height + 'px'
				}); //设置缩放后的宽度和高度 
			});
		}
		// 根据参数名称获取value    
	var getUrlParameter = function(paramKey) {
		var sURLVariables, i, sParameterName, sPageURL = window.location.search.substring(1);
		if(sPageURL) {
			sURLVariables = sPageURL.split("&");
			for(i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split("=");
				if(sParameterName[0] === paramKey) return sParameterName[1]
			}
		}
	}

		/**
		 * 过滤数组中重复的数据
		 */
	var myArray_Unique = function(someArray) {
		tempArray = someArray.slice(0); //复制数组到临时数组
		for(var i = 0; i < tempArray.length; i++) {
			for(var j = i + 1; j < tempArray.length;) {
				if(tempArray[j] == null) {
					tempArray.splice(j, 1);
				} else {
					if(tempArray[j] == tempArray[i])
					//后面的元素若和待比较的相同，则删除并计数；
					//删除后，后面的元素会自动提前，所以指针j不移动
					{
						tempArray.splice(j, 1);
					} else {
						j++;
					}
					//不同，则指针移动
				}
			}
		}
		return tempArray;
	}
	return {
		namespace: namespace,
		changeImageSize: changeImageSize,
		getUrlParameter: getUrlParameter,
		myArray_Unique: myArray_Unique
	};
})();

export default Utils;
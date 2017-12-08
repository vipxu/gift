//打字函数
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '__' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 300);
		});
		return this;
	};
})(jQuery);

function timeElapse(oldDate){
	var now=new Date();
	var seconds=parseInt((now.getTime()-oldDate.getTime())/1000);//距离的所有秒数
	var days = parseInt(seconds / (3600 * 24));// 天数
	var hours = parseInt(seconds / 3600 % 24);// 小时  用总的小时数 %24  
	if (hours < 10) {
		hours = "0" + hours;
	}
	var minutes = parseInt(seconds / 60 % 60);// 分钟   不超过  60分
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var second = seconds % 60; // 还剩下秒数
	if (second < 10) {
		second = "0" + second;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + second + "</span> 秒"; 
	$("#clock").html(result);
}

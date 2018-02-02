/* ==========================================================
 * 背景移动插件 v1.0
 * 功能说明：利用背景图像位置形成背景在动的动画，无限循环
 * 原创：http://www.igooda.cn/
 * ==========================================================
 * html结构：$对象
 * 参数：	moveDelay	移动延时
 *			movePx		移动距离
 *			direction	移动方向
 * ========================================================== */

(function () {
	$.fn.backgroundMove = function (option) {
		var defaults = {
			moveDelay: 100,
			movePx: 1,
			direction: 'left',
		}
		var options = $.extend({}, defaults, option);
		return this.each(function () {
			var startPos = 0;
			var self = $(this);
			var bgXY = 'x';

			switch (options.direction) {
				case 'left':
					options.movePx = -options.movePx;
					break;

				case 'up':
					options.movePx = -options.movePx;
					bgXY = 'y';
					break;

				case 'down':
					bgXY = 'y';
					break;
			}

			function doMove() {
				startPos = startPos + options.movePx;
				self.css('backgroundPosition-' + bgXY, startPos);
			}

			setInterval(doMove, options.moveDelay);

		})
	}
})($)
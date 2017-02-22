/*
* @Author: Administrator
* @Date:   2017-02-19 14:35:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 21:25:16
*/
(function(Fly) {
	var Land = function(config) {
		this.ctx = config.ctx;
		this.img = config.img;
		this.imgW = config.img.width;
		this.imgH = config.img.height;

		this.y = config.y || 0;
		this.x = config.x || 0;
		this.speed = -0.2;
	};
	Land.prototype = {
		constructor: Land,

		draw: function(delta) {
			this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH)
			if(this.x <= -this.imgW) {
	           this.x += this.imgW * 4;
	        }
		}
	}

	Fly.Land = Land;
})(Fly);
/*
* @Author: Administrator
* @Date:   2017-02-19 10:52:34
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 21:25:38
*/

 // 天空对象 
(function( Fly ) {

	var Sky = function(config) {
		this.ctx = config.ctx;
		this.img = config.img;
	    this.imgW = this.img.width;
	    this.imgH = this.img.height;
		this.x = config.x || 0;
		this.y = config.y || 0;

		this.speed = -0.15;
	};

	Sky.prototype = {
		constructor: Sky,

		draw: function(delta) {
			// 绘制天空背景 开始
	        this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
	        this.x += delta * this.speed;
	        if(this.x <= -this.imgW) {
	            this.x += this.imgW * 2;
	        }
		}
	};

	Fly.Sky = Sky;
})(Fly);
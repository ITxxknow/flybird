/*
* @Author: Administrator
* @Date:   2017-02-19 15:16:26
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 21:25:48
*/
(function(Fly) {

	var Pipe = function(config) {
		this.ctx = config.ctx;
		this.imgDown = config.imgDown;
		this.imgUp = config.imgUp;
		this.imgW = this.imgUp.width;
		this.imgH = this.imgUp.height;

		this.x = config.x;
		this.pipeTopY = 0;
		this.pipeUpY = 0;
		this.speed = -0.15;

		//页面加载的时候初始化管道高度
		this.calcPipeHeight();
	};
	Pipe.prototype = {
		constructor: Pipe,

		draw: function(delta) {
			this.ctx.drawImage(this.imgUp, this.x, this.pipeTopY, this.imgW, this.imgH);
			this.ctx.drawImage(this.imgDown, this.x, this.pipeDownY, this.imgW, this.imgH);

			//绘制管道路径
			this.ctx.rect(this.x, this.pipeTopY, this.imgW, this.imgH);
			this.ctx.rect(this.x, this.pipeDownY, this.imgW, this.imgH);

			this.x += this.speed * delta;
			if(this.x <= -this.imgW) {
				this.x += this.imgW * 3 * 6;
				//重新生成高度
				this.calcPipeHeight();
			}
		},

		calcPipeHeight: function() {
			//随机生成上管道高度
			var pipeTopHeight = Math.random() * 200 + 50;
			this.pipeTopY = pipeTopHeight - this.imgH;
			this.pipeDownY = pipeTopHeight + 150;
		}
	};

	Fly.Pipe = Pipe;
})(Fly)
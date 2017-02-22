/*
* @Author: Administrator
* @Date:   2017-02-19 10:53:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 21:41:04
*/
 // 小鸟对象 
(function( Fly ) {

	var Bird = function(config) {
		this.ctx = config.ctx;

		// 和小鸟相关的属性
		this.img = config.img;
		this.imgW = this.img.width / 3;
		this.imgH = this.img.height;

		this.frameIndex = 0;

		this.y = 100,
		this.x = 100,
		this.speed = 0,
		this.a = 0.0005;

		this.curAngle = 0;
		this.maxAngle = 45;
        this.maxSpeed = 30;
	};

	Bird.prototype = {
		constructor: Bird,

		draw: function(delta) {
			if(this.speed >= this.maxSpeed) {
                // this.curAngle = this.maxAngle;
                 this.speed = this.maxSpeed;
            } else if(this.speed <= -this.maxSpeed) {
                // this.curAngle = -this.maxAngle;
                this.speed = -this.maxSpeed;
            }
            this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
            //根据角度旋转
	        this.ctx.translate(this.x, this.y)
	        this.ctx.rotate(Fly.toRadian(this.curAngle * 100));

	        this.ctx.drawImage(this.img, this.frameIndex++ * this.imgW, 0, this.imgW, this.imgH, -1 / 2 * this.imgW, -1 / 2 * this.imgH, this.imgW, this.imgH);
			this.frameIndex %= 3;
			//瞬时速度和位移
			this.speed = this.speed + delta * this.a;
			this.y += this.speed * delta + 1 / 2 * this.a * Math.pow(delta, 2);
		},

		changeSpeed: function(speed) {
			this.speed = speed;
		}
	};

	Fly.Bird = Bird;
})(Fly);
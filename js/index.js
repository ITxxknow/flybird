/*
* @Author: Administrator
* @Date:   2017-02-19 12:38:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 17:19:44
*/

var cv = document.querySelector("#cv");
	//获取上下文
	var ctx = cv.getContext("2d");
    cv.width = 800;
    cv.height = 600;

	var imgArr = ["birds", "land", "pipe1", "pipe2", "sky"];

	//调用方式
    Fly.loadImgs(imgArr, function(imgList) {
    	//所有代码逻辑。。。
    	console.log('代码');
    	//获取时间
    	var lastFrameTime = new Date();

        //游戏开始与停止   isStart表示游戏是否进行
        var isStart = true;
    	
        // 存储所有的游戏对象
        var roleList = [];

        // 创建小鸟对象
        var bird = new Fly.Bird({
            ctx: ctx,
            img: imgList.birds
        });
        // 创建天空背景
        for(var i = 0;i < 2;i ++) {
            roleList.push(
                new Fly.Sky({
                    ctx: ctx,
                    img: imgList.sky,
                    x: imgList.sky.width * i
                })
            );
        }
        //绘制管道
        for(var i = 0;i < 6;i ++) {
            roleList.push(
                new Fly.Pipe({
                    ctx: ctx,
                    imgDown: imgList.pipe1,
                    imgUp: imgList.pipe2,
                    x: imgList.pipe1.width * i * 3
                })
            );
        }
        //创建陆地
        for(var i = 0;i < 4;i ++) {
        	roleList.push(
        		new Fly.Land({
        			ctx: ctx,
        			img: imgList.land,
        			x: imgList.land.width * i,
        			y: cv.height - imgList.land.height
        		})
        	)
        }

        //渲染
    	(function render() {
    		ctx.clearRect(0 , 0, cv.width, cv.height);

    		//获取执行时的时间
    		var curFrameTime = new Date();

    		//时间间隔
    		var delta = (curFrameTime - lastFrameTime) / 100;

    		//修改上一帧的时间，保证每一滴时间间隔
    		lastFrameTime = curFrameTime;

            //开启新路径
            ctx.beginPath();

            // 保存
            ctx.save();
            //绘制所有
            roleList.forEach(function(role) {
                role.draw(delta);
            });

            // 绘制小鸟
            bird.draw(delta);
            //检测小鸟碰撞
            //画布顶端
            if(bird.y <= 0) {
                isStart = false;
            }
            //陆地
            if(bird.y >= cv.height - imgList.land.height) {
                isStart = false;
            }
            //管道
            if(ctx.isPointInPath(bird.x, bird.y)) {
                isStart = false;
            }
            
            ctx.restore();

            //isStart为true游戏进行
            if(isStart) {
            window.requestAnimationFrame(render);
            }
    	})();

        //注册鼠标点击事件
        cv.addEventListener('click', function() {
        	bird.changeSpeed(-40);
        });
    })
/*
* @Author: Administrator
* @Date:   2017-02-19 10:27:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 20:41:11
*/

// 公共的部分
(function(win) {
	var FlyObj = {};
	//获取弧度
	FlyObj.toRadian = function(angle) {
		return angle / 180 * Math.PI;
	} 
	// 获取角度
	FlyObj.toAngle = function(radian) {
		return radian / Math.PI * 180;
	}
    //加载图片
	FlyObj.loadImgs = function(srcList, callback) {
    	//记录加载完成的图片数量
    	var	loadedCount = 0,
    		//图片的总数量
    		len = srcList.length,
    		//取出图片。使用对象存储图片，通过键拿到对应的图片
    		retList = {};
    	srcList.forEach(function(srcStr) {
    		var img = new Image();
    		img.src = 'images/' + srcStr + '.png';
    		//监听load时间，只要图片加载完成，执行回调函数
    		img.addEventListener('load', function() {
    			loadedCount ++;
    			//把图片存到retList中
    			retList[srcStr] = img;

    			if(loadedCount >= len) {
    				//表示所有图片加载完成
    				callback(retList);
    			}
    		})
    	});
    };
    //创建canvas
    FlyObj.createCV = function(id) {
        var dv = document.getElementById(id);
        var cv = document.createElement('canvas');
        cv.height = 600;
        cv.width = 800;
        dv.appendChild(cv);
        return cv;
    }
    // 通过 window 暴露到全局环境中！供其他对象来使用
	win.Fly = FlyObj;
})(window)
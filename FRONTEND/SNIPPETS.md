<h1 align="center">前端代码片段汇总</h1>

本文收集工作中经常用到的代码片段。

持续更新中……


* [常用代码收集资源分享](https://github.com/jsfront/src)


# nodejs

## nodejs批量替换js/html文件内容
```js

var fs = require('fs')
var path=require('path');
 
var filePath=path.resolve(__dirname+'/js');  
//readdir方法读取文件名
//readFile方法读取文件内容
//writeFile改写文件内容
fs.readdir(filePath, 'utf8', function (err,data) {
 
	data.forEach(function(item, index) {
		//console.log(item)
		fs.readFile('./js/'+item,'utf8',function(err,files){
			//console.log(files)
			var result = files.replace(/要替换的内容/g, '替换后的内容');
 
			fs.writeFile('./js/'+item, result, 'utf8', function (err) {
			     if (err) return console.log(err);
			});
 
		})
	});
 
});
```


## 面试准备
![](https://user-gold-cdn.xitu.io/2020/2/15/17046e737ba4b58c?w=1822&h=1134&f=png&s=367083)

知识 能力 经验

### 职位描述(JD)分析

### 业务分析或实战模拟


### 技术栈准备


### 简历


### 自我介绍


## 一面

侧重考察基础

![](https://user-gold-cdn.xitu.io/2020/2/15/17046e76fdd50fe6?w=2650&h=1002&f=png&s=918876)
基础知识

### CSS

> 使用css实现一个持续的动画效果
<details>
<summary>答案</summary>

```js
animation:mymove 5s infinite;
@keyframes mymove {
from {top:0px;}
to {top:200px;}
}

```
主要考察

值|	描述
:---:|:---:
animation-name|	规定需要绑定到选择器的 keyframe 名称。。
animation-duration|	规定完成动画所花费的时间，以秒或毫秒计。
animation-timing-function|	规定动画的速度曲线。
animation-delay|	规定在动画开始之前的延迟。
animation-iteration-count|	规定动画应该播放的次数。
animation-direction|	规定是否应该轮流反向播放动画。


</details>

扩展：
  * 使用js实现一个持续的动画效果
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js动画</title>
    <style>
      #app{
        position: absolute;
        width: 300px;
        height: 300px;
        background-color: #f00;
      }
      
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const end = 300, duration = 5
      const $app = document.getElementById('app')
      let starttime
      function move() {
        let percent = (Date.now() - starttime) / 1000 % duration / duration
        $app.style.left = percent * end + 'px'
      }
      // 方法一
      // function start() {
      //   starttime = Date.now()
      //   let timer = setInterval(() => {
      //     move()
      //   }, 1000/60);
      // }
      // start()

      // 方法二
      // function start() {
      //   let timer = setTimeout(() => {
      //     move()
      //     start()
      //   }, 1000/60);
      // }
      // starttime = Date.now()
      // start()

      // 方法三
      function start() {
        requestAnimationFrame(() => {
          move()
          start()
        })
      }
      starttime = Date.now()
      start()
      
    </script>
  </body>
  </html>
  ```



> 
* [css中的百分比](https://zhuanlan.zhihu.com/p/93084661)
* [css实现垂直水平居中](https://juejin.im/post/5854e137128fe100698e6271)
* [css实现垂直水平居中](https://juejin.im/post/5854e137128fe100698e6271)
* [实现等高布局]https://demo.cssworld.cn/4/3-2.php https://demo.cssworld.cn/4/4-4.php


> css3新特性
![](https://user-gold-cdn.xitu.io/2020/2/18/1705850abf39af4b?w=1554&h=962&f=png&s=250353)

#### css盒模型

* 请


### html


### http

> http的特点
<details>
<summary>答案</summary>

```
无状态 无连接
```

</details>

> http报文的组成部分

<details>
<summary>答案</summary>

```
请求行 请求头 空行 请求体
转态行 响应头 空行 响应体
```

</details>

> http的方法

<details>
<summary>答案</summary>

```
GET POST PUT DELETE HEAD
```

</details>

扩展：
  * GET和POST的区别
    ![](https://user-gold-cdn.xitu.io/2020/2/16/1704c9f21c446b15?w=2386&h=1248&f=png&s=1321893)

> http的状态码
<details>
<summary>答案</summary>

能记住以下几个就行
![](https://user-gold-cdn.xitu.io/2020/2/16/1704ca219b81dbdc?w=2466&h=774&f=png&s=714664)

![](https://user-gold-cdn.xitu.io/2020/2/16/1704ca288c9ed092?w=2562&h=800&f=png&s=871763)

* [更多](https://www.runoob.com/http/http-status-codes.html)

</details>
  
> http的持久化和管线化

  了解概念即可，不必深究

  https://www.cnblogs.com/hyzm/p/9530392.html

> **浏览器缓存**



### js

#### DOM事件类型

> 请问DOM事件级别
<details>
<summary>答案</summary>

```
DOM 0级： dom.onclick = function() {}
DOM 2级： document.addEventListener('click', ()=>{})
DOM 3级： document.addEventListener('keyup', ()=>{})
```

</details>



> DOM事件模型

<details>
<summary>答案</summary>

```
捕获和冒泡
```

</details>

> DOM事件流

<details>
<summary>答案</summary>

```
捕获>目标阶段>冒泡
```

</details>



> 描述DOM事件捕获的具体流程

<details>
<summary>答案</summary>

```
window>document>html>body>...
```

</details>

延伸：

- 如何获取html？
  <details>
  <summary>答案</summary>

  ```
  document.documentElement
  ```

  </details>



> Event对象的常见应用

<details>
<summary>答案</summary>

```
event.preventDefault()
event.stopPropagation()
event.stopImmediatePropagation()
event.target
event.currentTarget
```

</details>

延伸：
  * [js中的stopImmediatePropagation方法和stopPropagation方法的区别](https://www.cnblogs.com/EnSnail/p/9796237.html)
  * [event.target 和 event.currentTarget 的区别](https://www.cnblogs.com/yzhihao/p/9398917.html)

> 自定义事件
<details>
<summary>可以用Event或CustomEvent</summary>

Event、CustomEvent的区别是CustomEvent可以传参

```js
// 首先需要提前定义好事件，并且注册相关的EventListener
var myEvent = new CustomEvent('event_name', { 
    detail: { title: 'This is title!'},
});
window.addEventListener('event_name', function(event){
    console.log('得到标题为：', event.detail.title);
});
// 随后在对应的元素上触发该事件
if(window.dispatchEvent) {  
    window.dispatchEvent(myEvent);
} else {
    window.fireEvent(myEvent);
}
// 根据listener中的callback函数定义，应当会在console中输出 "得到标题为： This is title!"
```
</details>

> fastclick的作用是什么
<details>
<summary>答案</summary>

```
解决移动端点击300ms延迟
```

</details>

扩展：
  * [如何移动端点击延迟事件](https://www.jianshu.com/p/67bae6dfca90)

> fastclick原理
<details>
<summary>答案</summary>

```
利用event.preventDefault()阻止默认行为，然后派发自定义click事件
```
</details> 



> 原型链

> This

> 闭包

> 继承
<details>
<summary>答案</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>面向对象</title>
  </head>
  <body>
    <script type="text/javascript">
      /**
       * 类的声明
       */
      var Animal = function () {
          this.name = 'Animal';
      };

      /**
       * es6中class的声明
       */
      class Animal2 {
          constructor () {
              this.name = 'Animal2';
          }
      }

      /**
       * 实例化
       */
      console.log(new Animal(), new Animal2());

      /**
       * 借助构造函数实现继承
       */
      function Parent1 () {
          this.name = 'parent1';
      }
      Parent1.prototype.say = function () {

      };
      function Child1 () {
          Parent1.call(this);
          this.type = 'child1';
      }
      console.log(new Child1(), new Child1().say());

      /**
       * 借助原型链实现继承
       */
      function Parent2 () {
          this.name = 'parent2';
          this.play = [1, 2, 3];
      }
      function Child2 () {
          this.type = 'child2';
      }
      Child2.prototype = new Parent2();

      var s1 = new Child2();
      var s2 = new Child2();
      console.log(s1.play, s2.play);
      s1.play.push(4);

      /**
       * 组合方式
       */
      function Parent3 () {
          this.name = 'parent3';
          this.play = [1, 2, 3];
      }
      function Child3 () {
          Parent3.call(this);
          this.type = 'child3';
      }
      Child3.prototype = new Parent3();
      var s3 = new Child3();
      var s4 = new Child3();
      s3.play.push(4);
      console.log(s3.play, s4.play);

      /**
       * 组合继承的优化1
       * @type {String}
       */
      function Parent4 () {
          this.name = 'parent4';
          this.play = [1, 2, 3];
      }
      function Child4 () {
          Parent4.call(this);
          this.type = 'child4';
      }
      Child4.prototype = Parent4.prototype;
      var s5 = new Child4();
      var s6 = new Child4();
      console.log(s5, s6);

      console.log(s5 instanceof Child4, s5 instanceof Parent4);
      console.log(s5.constructor);

      /**
       * 组合继承的优化2
       */
      function Parent5 () {
          this.name = 'parent5';
          this.play = [1, 2, 3];
      }
      function Child5 () {
          Parent5.call(this);
          this.type = 'child5';
      }
      Child5.prototype = Object.create(Parent5.prototype);

    </script>
  </body>
</html>


```

</details>



### 浏览器

#### 网络请求



> 浏览器同源政策及跨域

五种方法
```
jsonp
hash
cors
websocket
postmessage
```

* [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
* [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)


* [ajax跨域，这应该是最全的解决方案了](https://segmentfault.com/a/1190000012469713)



> 实现ajax


> 实现jsonp

> 实现cors


#### 网络安全

* [CSRF 是什么](https://zhuanlan.zhihu.com/p/22521378)

```
1. XSS（cross-site-scripting, 跨站脚本）攻击

解决方法： 字符串转义

2. 跨站请求伪造（CSRF）

解决方法： 1.明文传递cookie
         2. 请求一个随机字符串（只能用一次）
         3. 判断referer

```

#### 浏览器渲染机制

#### js运行机制

#### 页面性能
![](https://user-gold-cdn.xitu.io/2020/2/16/1704ddffd050262b?w=2516&h=1064&f=png&s=840739)

### 算法


## 二面
侧重考察知识面、高阶知识、深入原理等


## 三面
侧重考察以下能力
```
业务能力
团队协作能力
事务推动能力
带人能力
架构能力
项目经验
```
### 业务能力

![](https://user-gold-cdn.xitu.io/2020/2/16/1704e0d54b794efd?w=1658&h=960&f=png&s=442896)


## 终面（hr面）
侧重考察性格、潜力


![](https://user-gold-cdn.xitu.io/2020/2/16/1704e19947d63078?w=792&h=784&f=png&s=174282)
![](https://user-gold-cdn.xitu.io/2020/2/16/1704e1bbbea9ac2f?w=1576&h=988&f=png&s=452142)
职业竞争力
  对加班的看法



职业规划
  职业规划是什么
  

你有什么要问的



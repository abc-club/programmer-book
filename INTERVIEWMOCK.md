
## 目录
面试分为面试准备、基础知识面、进阶知识面、项目经验面、hr面等几个阶段

下面就每个阶段需要准备哪些知识进行详解，希望每位同学都能拿到心仪的offer!!!



## 面试准备
![](https://user-gold-cdn.xitu.io/2020/2/15/17046e737ba4b58c?w=1822&h=1134&f=png&s=367083)

知识 能力 经验

### 职位描述(JD)分析

招聘网站上招聘的岗位都会有个职位描述，这个职位描述往往比较精简，以至于大家经常忽略了其深层的意义

下面这篇文章是一个比较好的分析范例，希望大家多多研究

* [我在阿里招前端，我该怎么帮你？](https://mp.weixin.qq.com/s/pP-qvi6XK14zoGxtc2dqfA)

### 业务分析或实战模拟



### 技术栈准备



### 简历

一份好的简历，给我们的面试加分不少。那怎样写出一份优秀的（至少是好的）简历呢？下面这些文章也许能够帮助到您。不需要每篇都看，参考一两篇即可！

* [面试官到底想看什么样的简历？](https://juejin.im/post/5d1d52aff265da1bb2774de0)
* [2019 面试系列 - 简历](https://juejin.im/post/5d05ca79f265da1bc75237ea)
* [OpenDoc - 前端简历评级标准](https://juejin.im/post/58b6679461ff4b006ccd825e)
* [别的程序员是怎么读你的简历的](http://coolshell.cn/articles/1695.html)


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

> css3新特性

![](https://user-gold-cdn.xitu.io/2020/2/18/1705850abf39af4b?w=1554&h=962&f=png&s=250353)

> 如何清除浮动
<details>
<summary>答案</summary>

1. clear
```
.floatfix{
    *zoom:1;
}
.floatfix:after{
    content:"";
    display:table;
    clear:both;
}
```

2. BFC

* [CSS清浮动处理（Clear与BFC）](https://www.cnblogs.com/dolphinX/p/3508869.html)

注意事项：

1. clear只对块级元素有效

2. clear并不是清除了浮动效果，而是使当前元素盒子的边不能和前面的浮动元素 相邻。

</details>
扩展：
  什么是BFC？BFC的好处是什么？ 如何创建BFC?

  * [史上最全面、最透彻的BFC原理剖析](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)
  * [学习 BFC (Block Formatting Context)](https://juejin.im/post/59b73d5bf265da064618731d)

> css盒模型
<details>
<summary>答案</summary>

标准模型和IE模型

content padding border margin

</details>

> 四种定位的区别

<details>
<summary>答案</summary>

```
static 是默认值 不会创建BFC
relative 相对定位 相对于自身原有位置进行偏移，仍处于标准文档流中
absolute 绝对定位 相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。如果无已定位祖先元素, 以body元素为偏移参照基准, 完全脱离了标准文档流。
fixed 固定定位的元素会相对于视窗来定位,这意味着即便页面滚动，它还是会停留在相同的位置。一个固定定位元素不会保留它原本在页面应有的空隙。


```

</details>

> 其他
* [css中的百分比](https://zhuanlan.zhihu.com/p/93084661)
* [css实现垂直水平居中] https://juejin.im/post/5854e137128fe100698e6271 https://demo.cssworld.cn/5/3-10.php
* [实现等高布局]https://demo.cssworld.cn/4/3-2.php https://demo.cssworld.cn/4/4-4.php
* [你真的理解 line-height 和 vertical-align 与 基线 吗？](https://www.jianshu.com/p/7d595f941012)
* [利用inline-block基线原理的小图标对齐实例页面](https://demo.cssworld.cn/5/3-7.php)
* [focus锚点定位和overflow的选项卡切换效果实例页面](https://demo.cssworld.cn/6/4-3.php)
* [flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
* [grid布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


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


#### js基础

> var let const的区别

```
let 不存在变量提升，不能重复定义，会产生块级作用域，存在暂时性死区
const 声明就得赋值，变量的值不得改动
```
* [一道面试题引发的“血案”](https://juejin.im/post/5bab1d4ae51d450e4d2feb7a)

> 变量提升&作用域
* [图解作用域及闭包](https://juejin.im/post/5af109426fb9a07aa047f1c7)
* [深入理解 JavaScript, 从作用域与作用域链开始](https://juejin.im/post/5d13a5fce51d455a694f9560)
* [深入理解JavaScript作用域和作用域链](https://juejin.im/post/5c8290455188257e5d0ec64f)


> 获取字符串长度的方法

```js
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
codePointLength(s) // 2
```

```js
function length(str) {
  return [...str].length;
}

length('x\uD83D\uDE80y') // 3
```


> 原型链

* [用自己的方式（图）理解constructor、prototype、__proto__和原型链](https://juejin.im/post/5cc99fdfe51d453b440236c3)

> This
* [嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)
* [Js中this的用法](http://xieyufei.com/2016/09/18/Explain-Js-This.html)
* [通过运行机制看this绑定 、作用域、作用域链和闭包](https://juejin.im/post/5dde27615188256ebd1618fb)
* [JavaScript this 的六道坎](https://blog.crimx.com/2016/05/12/understanding-this/)

> 闭包
* [图解JS闭包形成的原因](https://segmentfault.com/a/1190000011504517)

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


> 请问new执行的操作

```
1. 创建一个全新的对象。
2. 这个新对象会被执行 [[Prototype]] 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```
> 你了解Object.create吗
* [详解Object.create(null)](https://juejin.im/post/5acd8ced6fb9a028d444ee4e)




## 二面
侧重考察知识面、高阶知识、深入原理等



### js

> setTimeout和setInterval和requestAnimationFrame

* [关于setInterval与setTimeout作用域问题](https://my.oschina.net/huskydog/blog/1553720)
* [注意点——setTimeout、setInterval使用](https://juejin.im/post/59cf06745188253fbe466f78)
* [你真的了解setTimeout和setInterval吗？](http://qingbob.com/difference-between-settimeout-setinterval/)
* [关于setTimeout](https://juejin.im/post/5aa4c47af265da239866e236)
* [深度解密setTimeout和setInterval——为setInterval正名！](https://juejin.im/post/5c4044e1f265da614f708f7d)
* [从setTimeout/setInterval看JS线程](https://palmer.arkstack.cn/2017/12/%E4%BB%8EsetTimeout-setInterval%E7%9C%8BJS%E7%BA%BF%E7%A8%8B/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
* [你知道的requestAnimationFrame【从0到0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429)


> JSON.parse(JSON.stringify())的缺点

在JSON.stringify()阶段

```
1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式

2.如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象

3、如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失

4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor

6、如果对象中存在循环引用的情况也无法正确实现深拷贝
```

> 对象与数组的遍历
* [javaScript遍历对象、数组总结](https://www.cnblogs.com/chenyablog/p/6477866.html)
对象的属性分为三种： 是否是自身属性 是否可以枚举 是否是Symbol属性
注意：对象没有for...of...

举个栗子

```js
var a = {a: 1}
var b= {b:2}
b.__proto__ = a
Object.defineProperty(b, 'c', {
	value: 3
})
b[Symbol()] = 4

Object.keys(b) // ["b"]  返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).

for(var i in b) {
  console.log(i,":",b[i]);
} // b : 2 a : 1   循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)

Object.getOwnPropertyNames(obj) // ["b", "c"] 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).
Reflect.ownKeys(b) // ["b", "c", Symbol()] 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.  

```

> 什么是严格模式
严格模式主要有以下限制。

```
变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀 0 表示八进制数，否则报错
不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop]
eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不会自动反映函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈
增加了保留字（比如protected、static和interface）
```


### 函数式编程
* [JavaScript 函数式编程](https://juejin.im/post/5b4ac0d0f265da0fa959a785)
* [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
* [ramda](https://github.com/ramda/ramda)
* [Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)


正则表达式
* [JS正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)

### es6
* [ES6 入门教程](http://es6.ruanyifeng.com)
* [1.5万字概括ES6全部特性](https://juejin.im/post/5d9bf530518825427b27639d)

> 什么叫暂时性死区

在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。



### typescript
* [typescript中文官网](https://www.tslang.cn/docs/home.html)
* [Typescript 中的 interface 和 type 到底有什么区别](https://juejin.im/post/5c2723635188252d1d34dc7d)


### vue
* [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
* [Vue 3 中令人兴奋的新功能](https://juejin.im/post/5dc3cfce6fb9a04a665f100e)
* [面试官: 实现双向绑定Proxy比defineproperty优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

#### vue-cli
* [改造vue-cli，让它更好用](https://juejin.im/post/5b7392b16fb9a009b82c05de)
* [这可能是vue-cli最全的解析了……](https://juejin.im/post/5b2872516fb9a00e8626e34f)
* [Vue-cli原理分析](https://juejin.im/post/5b592db551882536e5178ce6)


![vue响应式原理](https://user-gold-cdn.xitu.io/2018/4/11/162b38ab2d635662?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### react
* [官网](https://zh-hans.reactjs.org/docs/getting-started.html)
* [关于Vue和React的一些对比及个人思考（上）](https://juejin.im/post/5e153e096fb9a048297390c1)
* [【React深入】从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)

### 小程序

#### taro

### weex

#### 源码
* [Weex 中别具匠心的 JS Framework](https://halfrost.com/weex_js_framework/)

### webpack
* [2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)
* [一步步从零开始用 webpack 搭建一个大型项目](https://juejin.im/post/5de06aa851882572d672c1ad)


### 浏览器

#### 网络请求
* [七层网络结构](https://blog.csdn.net/u010359398/article/details/82142449)

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
* [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://zhuanlan.zhihu.com/p/34453198?group_id=957277540147056640)
* [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)

#### js运行机制
* [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
* [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
* [JavaScript的Event Loop详解](https://juejin.im/post/5d21c6d56fb9a07ea4209ffc)
* [Visualizing the javascript runtime at runtime](https://github.com/latentflip/loupe)


#### 页面性能
![](https://user-gold-cdn.xitu.io/2020/2/16/1704ddffd050262b?w=2516&h=1064&f=png&s=840739)
* [用100行代码提升10倍的性能](https://juejin.im/post/5bec223f5188250c102116b5)

#### 进程与线程
* [深入理解Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)
* [进程与线程的一个简单解释](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)
* [一篇让你明白进程与线程之间的区别与联系](https://juejin.im/post/5c932660f265da612524ad6d)
* [浅析操作系统的进程、线程区别](https://blog.csdn.net/zhuoxiuwu/article/details/77850724)

#### 页面渲染
* [你不知道的浏览器页面渲染机制](https://juejin.im/post/5ca0c0abe51d4553a942c17d)
* [浏览器页面渲染机制，你真的弄懂了吗？](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489674)

#### 缓存
* [彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)
* [浏览器缓存](https://segmentfault.com/a/1190000008377508)
* [前端静态资源缓存最优解以及max-age的陷阱](https://blog.csdn.net/weixin_42817899/article/details/84553595)
* [面试精选之http缓存](https://juejin.im/post/5b3c87386fb9a04f9a5cb037)

#### 垃圾回收
* [图解 JavaScript 垃圾回收 — 现代 JavaScript 教程](https://juejin.im/post/5e0ddc24f265da5d1805ee6f)

#### 架构
* [一文带你看透 Chrome 浏览器架构](https://juejin.im/post/5e11cd225188253a73288212)


### nodejs
* [npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)
* [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.im/post/5e055d9ef265da33997a42cc)
* [图文并茂，为你揭开“单点登录“的神秘面纱](https://juejin.im/post/5e11a6e96fb9a048411a4eca)


### 算法

* [前端该如何准备数据结构和算法？](https://juejin.im/post/5d5b307b5188253da24d3cd1)
* [js实现排序算法（冒泡、选择、插入、二分插入、快速、希尔）](http://blog.csdn.net/charlene0824/article/details/51387165)
* [前端面试中的常见的算法问题](https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/)
* [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
* [5分钟带你领略:某跳动公司面试出镜率最高的算法之一——虚拟十叉树建模问题](https://juejin.im/post/5d7fb1e16fb9a06ac76de435)
* [【从蛋壳到满天飞】JS 数据结构解析和算法实现-集合和映射](https://juejin.im/post/5c9242926fb9a070b33c4f57)
* [聊聊面试必考-递归思想与实战](https://juejin.im/post/5d85cda3f265da03b638e918)

#### 复杂度
* [算法的时间和空间复杂度，就是这么简单](https://www.toutiao.com/a6750625828465279495)

#### 二叉树
* [JavaScript二叉树深入理解](https://www.jianshu.com/p/61f75e0f549f)
* [3 分钟理解完全二叉树、平衡二叉树、二叉查找树](https://mp.weixin.qq.com/s/K_oGI2rl3epTirxkST5LVQ)


### 手写代码

> 手动实现new
```
function New(Constructor, ...args){
    let obj = {};   // 创建一个新对象
    Object.setPrototypeOf(obj, Constructor.prototype);  // 连接新对象与函数的原型
    return Constructor.apply(obj, args) || obj;   // 执行函数，改变 this 指向新的对象
}

function Foo(a){
    this.a = a;
}

New(Foo, 1);  // Foo { a: 1 }

```

```
function _new() {
    let target = {}; //创建的新对象
    //第一个参数是构造函数
    let [constructor, ...args] = [...arguments];
    //执行[[原型]]连接;target 是 constructor 的实例
    target.__proto__ = constructor.prototype;
    //执行构造函数，将属性或方法添加到创建的空对象上
    let result = constructor.apply(target, args);
    if (result && (typeof (result) == "object" || typeof (result) == "function")) {
        //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
        return result;
    }
    //如果构造函数返回的不是一个对象，返回创建的新对象
    return target;
}

```

> 实现深拷贝
* [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)
* [浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)

> 防抖与节流
* [js史上最精简！防抖节流（你的比我精简，算我输）](https://juejin.im/post/5da7c77a51882554c0757f46)
* [2019 面试准备 - JS 防抖与节流](https://juejin.im/post/5c87b54ce51d455f7943dddb)

> 数组去重
* [JavaScript专题之数组去重](https://juejin.im/post/5949d85f61ff4b006c0de98b)
* [如何答一道惊艳面试官的数组去重问题？](https://mp.weixin.qq.com/s/IA41OWhKS062WzTOQ6hDAA)

> 其他
* [23行代码实现一个带并发数限制的fetch请求函数](https://juejin.im/post/5c89d447f265da2dd37c604c)
* [字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/5dff8a26e51d4558105420ed)



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

### 代码质量
* [代码整洁的 JavaScript](https://github.com/beginor/clean-code-javascript)
* [如何提升 Web 应用的代码质量](https://juejin.im/post/5b21ae895188257d5e3b9f89)



## 终面（hr面）
侧重考察性格、潜力


![](https://user-gold-cdn.xitu.io/2020/2/16/1704e19947d63078?w=792&h=784&f=png&s=174282)
![](https://user-gold-cdn.xitu.io/2020/2/16/1704e1bbbea9ac2f?w=1576&h=988&f=png&s=452142)
职业竞争力
  对加班的看法



职业规划
  职业规划是什么
  

你有什么要问的


## 测试
* [2020年从基础到进阶，测试你有多了解 JavaScript，刷新你的知识！](https://juejin.im/post/5e1830c05188254c461313dc)


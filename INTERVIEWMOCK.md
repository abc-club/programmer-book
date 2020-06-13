## 目录

面试分为面试准备、基础知识面、进阶知识面、项目经验面、hr 面等几个阶段

下面就每个阶段需要准备哪些知识进行详解，希望每位同学都能拿到心仪的 offer!!!

> 本文已收录到以下个人网站和 github，欢迎 follow 和 star

- [博客](https://abc-club.github.io/js-paradise/)

- [github](https://github.com/abc-club/js-paradise)

## 面试准备

在开始面试前，我们首先得了解应聘的岗位的要求，并做针对性的准备。

准备包括以下几个方面：

1. 职位描述(JD)分析
2. 了解业务/项目
3. 简历
4. 自我介绍

### 职位描述(JD)分析

招聘网站上招聘的岗位都会有个职位描述，这个职位描述往往比较精简，以至于大家经常忽略了其深层的意义

下面的文章是比较好的分析范例，希望大家多多研究

- [我在阿里招前端，我该怎么帮你？](https://mp.weixin.qq.com/s/pP-qvi6XK14zoGxtc2dqfA)

- [1.5 年经验如何准备阿里巴巴 P6 前端面试](https://juejin.im/post/5e5522b36fb9a07ce152c51c)

### 了解业务/项目

分成两步：

1. 了解业务，比如该公司主要经营机票业务，我们是不是应该了解一下机票的一个购买流程
2. 了解项目，我们应该去了解该公司目前的项目，是 to B 还是 to C,是否有 m 站、海外站、小程序等，使用的是 vue 还是 react

### 简历

一份好的简历，给我们的面试加分不少。那怎样写出一份优秀的（至少是好的）简历呢？下面这些文章也许能够帮助到您。不需要每篇都看，参考一两篇即可！

- [一份优秀的前端开发工程师简历是怎么样的？](https://www.zhihu.com/question/23150301/answer/410066018)
- [面试官到底想看什么样的简历？](https://juejin.im/post/5d1d52aff265da1bb2774de0)
- [2019 面试系列 - 简历](https://juejin.im/post/5d05ca79f265da1bc75237ea)
- [OpenDoc - 前端简历评级标准](https://juejin.im/post/58b6679461ff4b006ccd825e)
- [别的程序员是怎么读你的简历的](http://coolshell.cn/articles/1695.html)

#### 简历模板

- [best-resume-ever](https://github.com/salomonelli/best-resume-ever)(👔 💼 Build fast 🚀 and easy multiple beautiful resumes and create your best CV ever! Made with Vue and LESS.)
- [Resumes generated using the GitHub informations](https://github.com/resume/resume.github.com)(Resumes generated using the GitHub informations )
- [送给大家一个好看的简历神器](https://juejin.im/post/59926d2251882548997aa2f8)
- [5 款精致简洁求职简历](https://xituqu.com/768.html)
- [6 款简洁多风格的求职简历](https://xituqu.com/769.html)
- [10+ 优秀简洁的个人简历下载（五](https://xituqu.com/586.html)
- [实战项目之自动简历](https://juejin.im/post/5b9d27ddf265da0ad7019775)
- [又双叒叕是一个动态简历](https://juejin.im/post/5c1fd3f1f265da61171cb8bf)
- [My resume implement by Vue.js](https://github.com/ustbhuangyi/resume)

### 自我介绍

面试中第一个问题就是让我们自我介绍，准备好这个问题，能让面试官对我们有一个准确的了解，同时我们也可以通过自我介绍，引导面试官问出我们比较拿手的问题。

## 一面

侧重考察基础知识，这部分开始我们会准备一些面试中常遇到的问题

### CSS

#### 使用 css 实现一个持续的动画效果

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

|            值             |                   描述                   |
| :-----------------------: | :--------------------------------------: |
|      animation-name       | 规定需要绑定到选择器的 keyframe 名称。。 |
|    animation-duration     | 规定完成动画所花费的时间，以秒或毫秒计。 |
| animation-timing-function |           规定动画的速度曲线。           |
|      animation-delay      |        规定在动画开始之前的延迟。        |
| animation-iteration-count |         规定动画应该播放的次数。         |
|    animation-direction    |      规定是否应该轮流反向播放动画。      |

</details>

扩展：

- 使用 js 实现一个持续的动画效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>js动画</title>
    <style>
      #app {
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
      const end = 300,
        duration = 5;
      const $app = document.getElementById("app");
      let starttime;
      function move() {
        let percent = (((Date.now() - starttime) / 1000) % duration) / duration;
        $app.style.left = percent * end + "px";
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
          move();
          start();
        });
      }
      starttime = Date.now();
      start();
    </script>
  </body>
</html>
```

#### css3 新特性

![](https://user-gold-cdn.xitu.io/2020/2/18/1705850abf39af4b?w=1554&h=962&f=png&s=250353)


1. HTML5 和 CSS3 有哪些

https://www.cnblogs.com/star91/p/5659134.html


#### 如何清除浮动

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

- [CSS 清浮动处理（Clear 与 BFC）](https://www.cnblogs.com/dolphinX/p/3508869.html)

注意事项：

1. clear 只对块级元素有效

2. clear 并不是清除了浮动效果，而是使当前元素盒子的边不能和前面的浮动元素 相邻。

</details>
扩展：
  什么是BFC？BFC的好处是什么？ 如何创建BFC?

- [史上最全面、最透彻的 BFC 原理剖析](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)
- [学习 BFC (Block Formatting Context)](https://juejin.im/post/59b73d5bf265da064618731d)

那什么时候会触发BFC呢？常见的情况如下：

<html>根元素；

float的值不为none； 

overflow的值为auto、scroll或hidden； 

display的值为table-cell、table-caption和inline-block中 的任何一个；

position的值不为relative和static。

#### css 盒模型

<details>
<summary>答案</summary>

标准模型和 IE 模型

content padding border margin

</details>

#### 四种定位的区别

<details>
<summary>答案</summary>

```
static 是默认值 不会创建BFC
relative 相对定位 相对于自身原有位置进行偏移，仍处于标准文档流中
absolute 绝对定位 相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。如果无已定位祖先元素, 以body元素为偏移参照基准, 完全脱离了标准文档流。
fixed 固定定位的元素会相对于视窗来定位,这意味着即便页面滚动，它还是会停留在相同的位置。一个固定定位元素不会保留它原本在页面应有的空隙。


```

</details>

#### 其他

- [css 中的百分比](https://zhuanlan.zhihu.com/p/93084661)
- [css 实现垂直水平居中] https://juejin.im/post/5854e137128fe100698e6271 https://demo.cssworld.cn/5/3-10.php
- [实现等高布局]https://demo.cssworld.cn/4/3-2.php https://demo.cssworld.cn/4/4-4.php
- [你真的理解 line-height 和 vertical-align 与 基线 吗？](https://www.jianshu.com/p/7d595f941012)
- [利用 inline-block 基线原理的小图标对齐实例页面](https://demo.cssworld.cn/5/3-7.php)
- [focus 锚点定位和 overflow 的选项卡切换效果实例页面](https://demo.cssworld.cn/6/4-3.php)
- [flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [grid 布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

### html

### http

#### http 的特点

<details>
<summary>答案</summary>

```
无状态 无连接
```

</details>

#### http 报文的组成部分

<details>
<summary>答案</summary>

```
请求行 请求头 空行 请求体
转态行 响应头 空行 响应体
```

</details>

#### http 的方法

<details>
<summary>答案</summary>

```
GET POST PUT DELETE HEAD
```

</details>

扩展：

- GET 和 POST 的区别
  ![](https://user-gold-cdn.xitu.io/2020/2/16/1704c9f21c446b15?w=2386&h=1248&f=png&s=1321893)

#### http 的状态码

<details>
<summary>答案</summary>

能记住以下几个就行
![](https://user-gold-cdn.xitu.io/2020/2/16/1704ca219b81dbdc?w=2466&h=774&f=png&s=714664)

![](https://user-gold-cdn.xitu.io/2020/2/16/1704ca288c9ed092?w=2562&h=800&f=png&s=871763)

- [更多](https://www.runoob.com/http/http-status-codes.html)

</details>
  
#### http的持久化和管线化

了解概念即可，不必深究

https://www.cnblogs.com/hyzm/p/9530392.html

### DOM 事件类型

#### 请问 DOM 事件级别

<details>
<summary>答案</summary>

```
DOM 0级： dom.onclick = function() {}
DOM 2级： document.addEventListener('click', ()=>{})
DOM 3级： document.addEventListener('keyup', ()=>{})
```

</details>

#### DOM 事件模型

<details>
<summary>答案</summary>

```
捕获和冒泡
```

</details>

#### DOM 事件流

<details>
<summary>答案</summary>

```
捕获>目标阶段>冒泡
```

</details>

#### 描述 DOM 事件捕获的具体流程

<details>
<summary>答案</summary>

```
window>document>html>body>...
```

</details>

延伸：

- 如何获取 html？

  <details>
  <summary>答案</summary>

  ```
  document.documentElement
  ```

  </details>

#### Event 对象的常见应用

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

- [js 中的 stopImmediatePropagation 方法和 stopPropagation 方法的区别](https://www.cnblogs.com/EnSnail/p/9796237.html)
- [event.target 和 event.currentTarget 的区别](https://www.cnblogs.com/yzhihao/p/9398917.html)

#### 自定义事件

<details>
<summary>可以用Event或CustomEvent</summary>

Event、CustomEvent 的区别是 CustomEvent 可以传参

```js
// 首先需要提前定义好事件，并且注册相关的EventListener
var myEvent = new CustomEvent("event_name", {
  detail: { title: "This is title!" }
});
window.addEventListener("event_name", function(event) {
  console.log("得到标题为：", event.detail.title);
});
// 随后在对应的元素上触发该事件
if (window.dispatchEvent) {
  window.dispatchEvent(myEvent);
} else {
  window.fireEvent(myEvent);
}
// 根据listener中的callback函数定义，应当会在console中输出 "得到标题为： This is title!"
```

</details>

#### fastclick 的作用是什么

<details>
<summary>答案</summary>

```
解决移动端点击300ms延迟
```

</details>

扩展：

- [如何移动端点击延迟事件](https://www.jianshu.com/p/67bae6dfca90)

#### fastclick 原理

<details>
<summary>答案</summary>

```
利用event.preventDefault()阻止默认行为，然后派发自定义click事件
```

</details>

### js

#### var let const 的区别

```
let 不存在变量提升，不能重复定义，会产生块级作用域，存在暂时性死区
const 声明就得赋值，变量的值不得改动
```

- [一道面试题引发的“血案”](https://juejin.im/post/5bab1d4ae51d450e4d2feb7a)

#### 变量提升&作用域

- [图解作用域及闭包](https://juejin.im/post/5af109426fb9a07aa047f1c7)
- [深入理解 JavaScript, 从作用域与作用域链开始](https://juejin.im/post/5d13a5fce51d455a694f9560)
- [深入理解 JavaScript 作用域和作用域链](https://juejin.im/post/5c8290455188257e5d0ec64f)

#### 获取字符串长度的方法

```js
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = "𠮷𠮷";

s.length; // 4
codePointLength(s); // 2
```

```js
function length(str) {
  return [...str].length;
}

length("x\uD83D\uDE80y"); // 3
```

#### 原型链

- [用自己的方式（图）理解 constructor、prototype、**proto**和原型链](https://juejin.im/post/5cc99fdfe51d453b440236c3)

#### This

- [嗨，你真的懂 this 吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)
- [Js 中 this 的用法](http://xieyufei.com/2016/09/18/Explain-Js-This.html)
- [通过运行机制看 this 绑定 、作用域、作用域链和闭包](https://juejin.im/post/5dde27615188256ebd1618fb)
- [JavaScript this 的六道坎](https://blog.crimx.com/2016/05/12/understanding-this/)

#### 闭包

- [图解 JS 闭包形成的原因](https://segmentfault.com/a/1190000011504517)

#### 继承

<details>
<summary>答案</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>面向对象</title>
  </head>
  <body>
    <script type="text/javascript">
      /**
       * 类的声明
       */
      var Animal = function() {
        this.name = "Animal";
      };

      /**
       * es6中class的声明
       */
      class Animal2 {
        constructor() {
          this.name = "Animal2";
        }
      }

      /**
       * 实例化
       */
      console.log(new Animal(), new Animal2());

      /**
       * 借助构造函数实现继承
       */
      function Parent1() {
        this.name = "parent1";
      }
      Parent1.prototype.say = function() {};
      function Child1() {
        Parent1.call(this);
        this.type = "child1";
      }
      console.log(new Child1(), new Child1().say());

      /**
       * 借助原型链实现继承
       */
      function Parent2() {
        this.name = "parent2";
        this.play = [1, 2, 3];
      }
      function Child2() {
        this.type = "child2";
      }
      Child2.prototype = new Parent2();

      var s1 = new Child2();
      var s2 = new Child2();
      console.log(s1.play, s2.play);
      s1.play.push(4);

      /**
       * 组合方式
       */
      function Parent3() {
        this.name = "parent3";
        this.play = [1, 2, 3];
      }
      function Child3() {
        Parent3.call(this);
        this.type = "child3";
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
      function Parent4() {
        this.name = "parent4";
        this.play = [1, 2, 3];
      }
      function Child4() {
        Parent4.call(this);
        this.type = "child4";
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
      function Parent5() {
        this.name = "parent5";
        this.play = [1, 2, 3];
      }
      function Child5() {
        Parent5.call(this);
        this.type = "child5";
      }
      Child5.prototype = Object.create(Parent5.prototype);
    </script>
  </body>
</html>
```

</details>

#### 请问 new 执行的操作

```
1. 创建一个全新的对象。
2. 这个新对象会被执行 [[Prototype]] 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```

#### 你了解 Object.create 吗

- [详解 Object.create(null)](https://juejin.im/post/5acd8ced6fb9a028d444ee4e)

## 二面

侧重考察知识面、高阶知识、深入原理等

### js

#### setTimeout 和 setInterval 和 requestAnimationFrame

- [关于 setInterval 与 setTimeout 作用域问题](https://my.oschina.net/huskydog/blog/1553720)
- [注意点——setTimeout、setInterval 使用](https://juejin.im/post/59cf06745188253fbe466f78)
- [你真的了解 setTimeout 和 setInterval 吗？](http://qingbob.com/difference-between-settimeout-setinterval/)
- [关于 setTimeout](https://juejin.im/post/5aa4c47af265da239866e236)
- [深度解密 setTimeout 和 setInterval——为 setInterval 正名！](https://juejin.im/post/5c4044e1f265da614f708f7d)
- [从 setTimeout/setInterval 看 JS 线程](https://palmer.arkstack.cn/2017/12/%E4%BB%8EsetTimeout-setInterval%E7%9C%8BJS%E7%BA%BF%E7%A8%8B/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [你知道的 requestAnimationFrame【从 0 到 0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429)

#### JSON.parse(JSON.stringify())的缺点

在 JSON.stringify()阶段

```
1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式

2.如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象

3、如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失

4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor

6、如果对象中存在循环引用的情况也无法正确实现深拷贝
```

#### 对象与数组的遍历

- [javaScript 遍历对象、数组总结](https://www.cnblogs.com/chenyablog/p/6477866.html)
  对象的属性分为三种： 是否是自身属性 是否可以枚举 是否是 Symbol 属性
  注意：对象没有 for...of...

举个栗子

```js
var a = { a: 1 };
var b = { b: 2 };
b.__proto__ = a;
Object.defineProperty(b, "c", {
  value: 3
});
b[Symbol()] = 4;

Object.keys(b); // ["b"]  返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).

for (var i in b) {
  console.log(i, ":", b[i]);
} // b : 2 a : 1   循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)

Object.getOwnPropertyNames(obj); // ["b", "c"] 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).
Object.getOwnPropertySymbols(obj); // [Symbol()]返回一个数组，包含对象自身的所有 Symbol 属性的键名。
Reflect.ownKeys(b); // ["b", "c", Symbol()] 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.
```

#### 什么是严格模式

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

### 设计模式

- [JavaScript 设计模式 es6（23 种)](https://juejin.im/post/5e021eb96fb9a01628014095)
- [JavaScript 中常见的十五种设计模式](https://www.cnblogs.com/imwtr/p/9451129.html)
- [设计模式](https://www.runoob.com/design-pattern/factory-pattern.html)

### 函数式编程

- [JavaScript 函数式编程](https://juejin.im/post/5b4ac0d0f265da0fa959a785)
- [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
- [ramda](https://github.com/ramda/ramda)
- [Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)

### 正则表达式

- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)

### es6

- [ES6 入门教程](http://es6.ruanyifeng.com)
- [1.5 万字概括 ES6 全部特性](https://juejin.im/post/5d9bf530518825427b27639d)

#### 什么叫暂时性死区

在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

#### CommonJS 中的 require/exports 和 ES6 中的 import/export 区别？

```
- CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。
- ES6 模块是动态引用，如果使用 import 从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
- import/export 最终都是编译为 require/exports 来执行的。
- CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
- export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

```

- [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)
- [ES6 模块与 CommonJS 模块的差异](http://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)


### typescript

- [typescript 中文官网](https://www.tslang.cn/docs/home.html)
- [Typescript 中的 interface 和 type 到底有什么区别](https://juejin.im/post/5c2723635188252d1d34dc7d)

### vue

- [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
- [Vue 3 中令人兴奋的新功能](https://juejin.im/post/5dc3cfce6fb9a04a665f100e)
- [面试官: 实现双向绑定 Proxy 比 defineproperty 优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)
- [【2019 前端进阶之路】Vue 组件间通信方式完整版](https://juejin.im/post/5c776ee4f265da2da53edfad)

#### vue-cli

- [改造 vue-cli，让它更好用](https://juejin.im/post/5b7392b16fb9a009b82c05de)
- [这可能是 vue-cli 最全的解析了……](https://juejin.im/post/5b2872516fb9a00e8626e34f)
- [Vue-cli 原理分析](https://juejin.im/post/5b592db551882536e5178ce6)

![vue响应式原理](https://user-gold-cdn.xitu.io/2018/4/11/162b38ab2d635662?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### react

- [官网](https://zh-hans.reactjs.org/docs/getting-started.html)
- [关于 Vue 和 React 的一些对比及个人思考（上）](https://juejin.im/post/5e153e096fb9a048297390c1)
- [【React 深入】从 Mixin 到 HOC 再到 Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)

### 小程序

#### taro

### weex

#### 源码

- [Weex 中别具匠心的 JS Framework](https://halfrost.com/weex_js_framework/)

### webpack

- [2020 年了,再不会 webpack 敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)
- [一步步从零开始用 webpack 搭建一个大型项目](https://juejin.im/post/5de06aa851882572d672c1ad)
- [怎么优化 webpack 打包速度](https://webpack.docschina.org/guides/build-performance/)

### 浏览器

#### 网络请求

- [七层网络结构](https://blog.csdn.net/u010359398/article/details/82142449)
- [HTTP2 详解](https://juejin.im/post/5b88a4f56fb9a01a0b31a67e)
- [深入研究：HTTP2 的真正性能到底如何](https://segmentfault.com/a/1190000007219256)
- [Service Worker ——这应该是一个挺全面的整理](https://blog.csdn.net/huangpb123/article/details/89498418)

#### 浏览器同源政策及跨域

五种方法

```
jsonp
hash
cors
websocket
postmessage
```

- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [ajax 跨域，这应该是最全的解决方案了](https://segmentfault.com/a/1190000012469713)
- [HTTP 访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

#### 网络安全

- [CSRF 是什么](https://zhuanlan.zhihu.com/p/22521378)
- [前端安全系列（一）：如何防止 XSS 攻击？](https://juejin.im/post/5bad9140e51d450e935c6d64)
- [前端安全系列（一）：如何防止 CSRF 攻击？](https://juejin.im/post/5bc009996fb9a05d0a055192)

```
1. XSS（cross-site-scripting, 跨站脚本）攻击

解决方法： 字符串转义

2. 跨站请求伪造（CSRF）

解决方法： 1.明文传递cookie
         2. 请求一个随机字符串（只能用一次）
         3. 判断referer

```

#### 浏览器渲染机制

- [从输入 URL 到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://zhuanlan.zhihu.com/p/34453198?group_id=957277540147056640)
- [从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)

#### js 运行机制

- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
- [JavaScript 运行机制详解：再谈 Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [JavaScript 的 Event Loop 详解](https://juejin.im/post/5d21c6d56fb9a07ea4209ffc)
- [Visualizing the javascript runtime at runtime](https://github.com/latentflip/loupe)

#### 页面性能

![](https://user-gold-cdn.xitu.io/2020/2/16/1704ddffd050262b?w=2516&h=1064&f=png&s=840739)

- [用 100 行代码提升 10 倍的性能](https://juejin.im/post/5bec223f5188250c102116b5)

#### 进程与线程

- [深入理解 Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)
- [进程与线程的一个简单解释](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)
- [一篇让你明白进程与线程之间的区别与联系](https://juejin.im/post/5c932660f265da612524ad6d)
- [浅析操作系统的进程、线程区别](https://blog.csdn.net/zhuoxiuwu/article/details/77850724)

#### 页面渲染

- [你不知道的浏览器页面渲染机制](https://juejin.im/post/5ca0c0abe51d4553a942c17d)
- [浏览器页面渲染机制，你真的弄懂了吗？](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489674)

#### 缓存

- [彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)
- [浏览器缓存](https://segmentfault.com/a/1190000008377508)
- [前端静态资源缓存最优解以及 max-age 的陷阱](https://blog.csdn.net/weixin_42817899/article/details/84553595)
- [面试精选之 http 缓存](https://juejin.im/post/5b3c87386fb9a04f9a5cb037)

#### 垃圾回收

- [图解 JavaScript 垃圾回收 — 现代 JavaScript 教程](https://juejin.im/post/5e0ddc24f265da5d1805ee6f)

#### 架构

- [一文带你看透 Chrome 浏览器架构](https://juejin.im/post/5e11cd225188253a73288212)

### nodejs

- [npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)
- [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.im/post/5e055d9ef265da33997a42cc)
- [图文并茂，为你揭开“单点登录“的神秘面纱](https://juejin.im/post/5e11a6e96fb9a048411a4eca)
- [当浏览器全面禁用三方 Cookie](https://juejin.im/post/5e97124df265da47b27d97ff)

### 算法

- [如何系统地学习算法？](https://www.zhihu.com/question/20588261/answer/926157817)
- [前端该如何准备数据结构和算法？](https://juejin.im/post/5d5b307b5188253da24d3cd1)
- [js 实现排序算法（冒泡、选择、插入、二分插入、快速、希尔）](http://blog.csdn.net/charlene0824/article/details/51387165)
- [前端面试中的常见的算法问题](https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/)
- [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
- [5 分钟带你领略:某跳动公司面试出镜率最高的算法之一——虚拟十叉树建模问题](https://juejin.im/post/5d7fb1e16fb9a06ac76de435)
- [【从蛋壳到满天飞】JS 数据结构解析和算法实现-集合和映射](https://juejin.im/post/5c9242926fb9a070b33c4f57)
- [聊聊面试必考-递归思想与实战](https://juejin.im/post/5d85cda3f265da03b638e918)

#### 复杂度

- [算法的时间和空间复杂度，就是这么简单](https://www.toutiao.com/a6750625828465279495)

#### 二叉树

- [JavaScript 二叉树深入理解](https://www.jianshu.com/p/61f75e0f549f)
- [3 分钟理解完全二叉树、平衡二叉树、二叉查找树](https://mp.weixin.qq.com/s/K_oGI2rl3epTirxkST5LVQ)

### 手写代码

#### 手动实现 new

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

#### 实现深拷贝

- [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)
- [浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)

#### 防抖与节流

- [js 史上最精简！防抖节流（你的比我精简，算我输）](https://juejin.im/post/5da7c77a51882554c0757f46)
- [2019 面试准备 - JS 防抖与节流](https://juejin.im/post/5c87b54ce51d455f7943dddb)

#### 数组去重

- [JavaScript 专题之数组去重](https://juejin.im/post/5949d85f61ff4b006c0de98b)
- [如何答一道惊艳面试官的数组去重问题？](https://mp.weixin.qq.com/s/IA41OWhKS062WzTOQ6hDAA)

#### 实现一个简易版 vue2

- [【手把手系列之】实现一个简易版 vue2](https://juejin.im/post/5dd89a416fb9a07aa6226e6d)

#### 其他

- [【面试题】js 各种源码实现](https://juejin.im/post/5e05c8a96fb9a016470c375e)
- [23 行代码实现一个带并发数限制的 fetch 请求函数](https://juejin.im/post/5c89d447f265da2dd37c604c)
- [字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/5dff8a26e51d4558105420ed)
- [[译] 无尽滚动的复杂度 -- 来自 Google 大神的拆解](https://juejin.im/post/58a3c81e128fe10058c57a8b)

### 代码质量

- [代码整洁的 JavaScript](https://github.com/beginor/clean-code-javascript)
- [如何提升 Web 应用的代码质量](https://juejin.im/post/5b21ae895188257d5e3b9f89)

### 工程化

- [关于前端工程化（基建）的一些总结和思考](https://juejin.im/post/5e5b869a6fb9a07cac1d61e5)

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

### 项目

面试官往往会让你说一说，都做过哪些项目，并就其中一两个深入了解。

我们需要从这些方面准备：

1. 负责的项目做出了什么业绩
2. 使用了什么技术方案
3. 有什么技术难点
4. 遇到了什么困难
5. 收获了什么

### 架构与事务推动

1. 是否自己搭建过项目？
2. 你当时选择的技术栈是什么？
3. 为什么这样选择？
4. 讲讲遇到的困难
5. 作为技术负责人你是怎么推动项目顺利进行的

### 带人与团队协作

1. 是否带过人？
2. 团队成员间怎样协作的？
3. 是否有 code review?
4. git 命令了解多少？
5. 与后端、产品、设计、项目经理间是怎样协作的？

### 解决问题的能力

1. 是否遇到过什么困难，你是怎么解决的？
2. 你平时都是怎样学习的？
3. 你平常都上哪些网站？

### 对技术的热情

1. 你是否了解 vue3？vue3 做了哪些优化？与 vue2 有什么不同？
2. 你是否了解微服务？web component? http3?等
3. 是否有开源项目？

## 终面（hr 面）

侧重考察性格、潜力

到了这一面，offer 基本已经到手了，但也不可掉以轻心，因为 hr 往往有一票否决权。

可以参考

- [面试应答有哪些话术和技巧？](https://www.zhihu.com/question/35953016/answer/674369195)
- [面试应答有哪些话术和技巧？](https://www.zhihu.com/question/35953016/answer/1007150239)
- [如何回答面试官的：你对薪资有什么要求之类的问题？](https://www.zhihu.com/question/24564013/answer/28230832)
- [如何回答“你的期望薪资是多少？”](https://zhuanlan.zhihu.com/p/32698287)
- [你有哪些面试失败的惨痛经验？](https://www.zhihu.com/question/290543744/answer/595815243)

### 这面需要我们展现以下特性：

1. 乐观积极
2. 主动沟通
3. 逻辑顺畅
4. 上进有责任心
5. 有主张，做事果断

### 可能会有以下问题：

1.  对加班的看法
2.  职业规划是什么
3.  你有什么要问的
4.  你大学都参加了什么社团
5.  你平时都喜欢干什么
6.  如果和同事有了冲突，你会怎么办

---

至此面试结束，恭喜你拿到了心仪的 offer！

接下来要讲的是面试技巧以及经验，以帮助大家更好的应对面试！！！

## 面试技巧

- [「技术面试」问答中有什么十分实用的面试技巧?](https://juejin.im/post/5d30c0cd6fb9a07efd474427)
- [5 分钟谈前端面试](https://juejin.im/post/5d04fc1c51882559ef78e88f)
- [面试前如何准备才能提高成功率（含前端面试押题）](https://juejin.im/post/5c6d4789f265da2d8e70e164)
- [作为技术面试官，为什么把你 pass 了](https://juejin.im/post/5c1e7a086fb9a049b82a7310)
- [精读《最佳前端面试题》及面试官技巧](https://zhuanlan.zhihu.com/p/28333260)
- [写给初级前端的面试经验](https://juejin.im/post/5c8bb79e6fb9a04a006fe79a)
- [前端面试指南](https://zhuanlan.zhihu.com/p/25859524)
- [关于面试流程](https://juejin.im/post/59ec3d50f265da431c6f7339)
- [程序员面试时这样介绍自己的项目经验，成功率能达到 98.99%](https://www.toutiao.com/a6750279305806217739)

## 如果你是面试官

- [谈谈面试与面试题](https://github.com/wintercn/blog/issues/4)
- [面试数十人有感](https://juejin.im/post/5bd2d92c6fb9a05d0f17218c)

## 面试经验

- [记一次大厂的面试过程](https://juejin.im/post/5db556376fb9a0207a6ddce7)
- [【新鲜面经】 四月面试不用慌，掘友攻略来帮忙| 掘金技术征文展（第一弹）](https://juejin.im/post/5e86e9da5188257391463c1d)

### 阿里

- [面试分享：2018 阿里巴巴前端面试总结 | 掘金技术征文](https://juejin.im/post/5ab0da85f265da23866fb9b7)
- [我在阿里招前端，我该怎么帮你？(文末有惊喜)](https://mp.weixin.qq.com/s/pP-qvi6XK14zoGxtc2dqfA)
- [面试分享：2018 阿里巴巴前端面试总结](https://juejin.im/post/5ab0da85f265da23866fb9b7)
- [阿里健康面试总结](https://juejin.im/post/5d8896e5e51d45621512ae4a)
- [大揭秘！“恐怖”的阿里一面，我究竟想问什么](https://juejin.im/post/5d4cd42a6fb9a06aea618155)
- [面试分享：专科半年经验面试阿里前端 P6+总结(附面试真题及答案)](https://juejin.im/post/5a92c23b5188257a6b06110b)
- [面试分享：2018 阿里巴巴前端面试总结(题目+答案)](https://blog.ihoey.com/posts/Interview/2018-02-28-alibaba-interview.html)
- [一年半经验，百度、有赞、阿里前端面试总结](https://juejin.im/post/5befeb5051882511a8527dbe)
- [面试分享：两年工作经验成功面试阿里 P6 总结](https://juejin.im/post/5d690c726fb9a06b155dd40d)
- [想进阿里吗？送你一份 4000 字《阿里内推指南》](https://juejin.im/post/5da67a41f265da5b681ff295)
- [我想加入阿里，我该怎么做](https://mp.weixin.qq.com/s/5usQY8a_6eI7PTXLXJ2Nlw)
- [阿里六面，挂在 hrg，我真的不甘心](https://www.toutiao.com/a6753809422167835139)
- [前端面试总结（at, md）](https://juejin.im/post/5a3134bf6fb9a0452405d507)
- [进入大厂的面试经验（P7）](https://juejin.im/post/5e664bdd6fb9a07cd80f3192)
- [2020 面试，已拿到头条跟阿里 offer](https://juejin.im/post/5e6b05116fb9a07cb83e39c6)

### 腾讯

- [腾讯前端面试篇（一）](https://juejin.im/post/5c19c1b6e51d451d1e06c163)
- [腾讯前端面试篇（二）](https://juejin.im/post/5c1869ab6fb9a049f154207a)
- [腾讯面试篇（三）——终章](https://juejin.im/post/5c1eec7bf265da61477034ae)

### 百度

- [我的 web 前端面试经历 - 百度](https://juejin.im/post/5d1d52aff265da1bb2774de0)

### 京东

- [面试篇 - 京东（商城用户体验设计部 - 前端架构组）](https://juejin.im/post/5c97a086f265da6116246b30)

### 小米

- [记一次凉凉的小米面试](https://juejin.im/post/5b4d543ce51d4519610dea67)

### bilibili

- [【面试总结】记一次失败的 bilibili 面试总结(1)](https://juejin.im/post/5c878397f265da2dde07293b)
- [【面试总结】记一次失败的 bilibili 面试总结(2)](https://juejin.im/post/5c88d34fe51d4559d83381af)
- [【面试总结】记一次失败的 bilibili 面试总结(3)](https://juejin.im/post/5ca2ba0ee51d4524fd28778a)

### 头条

- [两年前端头条面试记](https://juejin.im/post/5de5a2d0e51d451aec2b8883)
- [艺术喵 2 年前端面试心路历程（字节跳动、YY、虎牙、BIGO）| 掘金技术征文](https://juejin.im/post/5e85ec79e51d4547153d0738)

### 拼多多

- [金三银四魔都两年半前端面经 (拼多读、猫眼、B 站等)](https://mp.weixin.qq.com/s/_qI0R15lrMwKildQ-6vY1w)

### 其他

- [关于裸辞，关于前端面试](https://juejin.im/post/5cf3365ff265da1b9612ec78)
- [一年经验前端 杭州几家二线厂面试题梳理](https://juejin.im/post/5d3a538bf265da1b9163d947)
- [1 月前端面试记](https://juejin.im/post/587dab348d6d810058d87a0a)
- [前端面试经](https://juejin.im/post/59aa6be06fb9a0248e5cddf0)
- [2018 年 6 月前端面试经历(上)](https://juejin.im/post/5b39bb696fb9a00e57630e27)
- [2019 面试实战 - 第一回合](https://juejin.im/post/5c7bc11d6fb9a04a0956c325)
- [2018 春招前端面试: 闯关记(精排精校) | 掘金技术征文](https://juejin.im/post/5a998991f265da237f1dbdf9)
- [2018 春节后前端面试小记](https://juejin.im/post/5a99108f51882555666f1bca)
- [Web 前端岗位面试题有哪些？](https://www.zhihu.com/question/41466747/answer/747323907)
- [2019 年，看了这一份， 再也不怕前端面试了](https://zhuanlan.zhihu.com/p/87043003)
- [横扫 9 家大厂前端校招 offer，全文 14560 字，阅读需 80 分钟](https://mp.weixin.qq.com/s/tM2lvhJEhXXl0nO92hf7yQ)

## 招聘官网

- [阿里社招](https://job.alibaba.com/zhaopin/positionList.htm)
- [阿里校招](https://campus.alibaba.com/positionList.htm)
- [腾讯社招](https://careers.tencent.com/search.html?query=at_1,ci_5&keyword=%e5%89%8d%e7%ab%af)
- [今日头条社招](https://job.bytedance.com/society?summary=873&city=45&q1=%E5%89%8D%E7%AB%AF&position_type=)
- [知乎](https://app.mokahr.com/apply/zhihu/3819#/?_k=t046ya)(北京 上海 成都 广州)

## 内推

- [牛客网](https://www.nowcoder.com/discuss/referral/index)
- [一亩三分地](https://instant.1point3acres.com/tag/%E5%86%85%E6%8E%A8)
- 脉脉

## 待遇

- [阿里福利](https://campus.alibaba.com/welfare.htm)
- [【阿里员工一年挣多少钱？聊一聊阿里薪酬职级体系】](https://m.toutiaocdn.com/a6724307251558875652)
- [阿里的绩效考核：赏明星，杀白兔，野狗要示众](https://m.toutiaocdn.com/a6726291727654584839)
- [在字节跳动做程序员是一种什么样的体验？](https://www.toutiao.com/a6751338039886217736)
- [入职字节跳动 48 小时后，我发现了抖音的秘密](https://www.toutiao.com/a6751311464365031948)
- [一文揭秘 BAT 互联网大厂薪资](https://www.toutiao.com/a6750467774801248782)
- [最新·前端的工资分布情况 - 你拖后腿了吗？](https://juejin.im/post/5de25a9c5188255df3295809)

---

## 面试题仓库

- [10 小时掌握前端面试题（2019 年最新版）](https://www.bilibili.com/video/BV1aE411C7pt)
- [挑战一轮大厂后的面试总结 (含六个方向) - javascript 篇(万字长文)](https://juejin.im/post/5e523e726fb9a07c9a195a95)
- [Front-End-Interview-Notebook](https://github.com/CavsZhouyou/Front-End-Interview-Notebook)
- [javascript-questions](https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md)
* https://github.com/kdn251/interviews/blob/master/README-zh-cn.md

- [2020 年从基础到进阶，测试你有多了解 JavaScript，刷新你的知识！](https://juejin.im/post/5e1830c05188254c461313dc)

* https://github.com/jwasham/coding-interview-university/blob/master/translations/README-cn.md([译] Coding Interview University 一套完整的学习手册帮助自己准备 Google 的面试)
* https://github.com/haizlin/fe-interview
* https://github.com/30-seconds/30-seconds-of-interviews
* https://github.com/xiaomuzhu/front-end-interview
* https://github.com/yisainan/web-interview
* https://github.com/woai3c/Front-end-basic-knowledge
* https://github.com/qiu-deqing/FE-interview
* https://github.com/poetries/FE-Interview-Questions
* https://github.com/azl397985856/fe-interview

- [张云龙 blog](https://github.com/fouber/blog)
- [阿里，腾讯，百度，美团，头条等技术面试题目，以及答案](https://github.com/yttsam/interview_internal_reference)
- [如何通过饿了么 Node.js 面试](https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn)
- [面试的图谱](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)


## html
1. HTML5和CSS3有哪些

https://www.cnblogs.com/star91/p/5659134.html

2. 


## css
1. BFC
* [史上最全面、最透彻的BFC原理剖析](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)
* [学习 BFC (Block Formatting Context)](https://juejin.im/post/59b73d5bf265da064618731d)

2. CSS清浮动处理
* [CSS清浮动处理（Clear与BFC）](https://www.cnblogs.com/dolphinX/p/3508869.html)

3. 移动端1px
* [移动端1px解决方案](https://juejin.im/post/5d19b729f265da1bb2774865)
* [移动端 1px 像素问题及解决办法](https://www.jianshu.com/p/31f8907637a6)
* [吃透移动端 1px｜从基本原理到开源解决方案](https://juejin.im/post/5df3053ce51d45583d425ada)
* [CSS3 border-image 彻底明白](https://segmentfault.com/a/1190000010969367)

4. 圣杯布局和双飞翼布局
* [圣杯布局和双飞翼布局的理解与思考](https://www.jianshu.com/p/81ef7e7094e8)

5. CSS画扇形
* [css画扇形的几种实现方式](https://blog.csdn.net/young_Emily/article/details/80091667)
* [你真的理解CSS的linear-gradient？](https://www.w3cplus.com/css3/do-you-really-understand-css-linear-gradients.html)


## js

1. getcomputedstyle和style的区别
```
1.只读与可写
  getComputedStyle方法是只读的，只能获取样式，不能设置；而element.style能读能写，能屈能伸。
2.获取的对象范围
  getComputedStyle方法获取的是最终应用在元素上的所有CSS属性对象（即使没有CSS代码，也会把默认的祖宗八代都显示出来）；
  而element.style只能获取元素style属性中的CSS样式。
  因此对于一个光秃秃的元素<p>，getComputedStyle方法返回对象中length属性值（如果有）就是190+(据我测试FF:192, IE9:195, Chrome:253, 不同环境结果可能有差异), 
  而element.style就是0。
3.作用
  getComputedStyle方法有一个很重要的，类似css()方法没有的功能——获取伪类元素样式
4.兼容性
  getComputedStyle方法IE6~8是不支持的

```

2. 判断数据类型的方法
* typeof
```
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof undefined);       // undefined
console.log(typeof []);              // object 
console.log(typeof {});              // object
console.log(typeof function(){});    // function
console.log(typeof null);            // object

```

* instanceof
```
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

* Object.prototype.toString.call()
```
var toString = Object.prototype.toString;
 
console.log(toString.call(2));                      //[object Number]
console.log(toString.call(true));                   //[object Boolean]
console.log(toString.call('str'));                  //[object String]
console.log(toString.call([]));                     //[object Array]
console.log(toString.call(function(){}));           //[object Function]
console.log(toString.call({}));                     //[object Object]
console.log(toString.call(undefined));              //[object Undefined]
console.log(toString.call(null));                   //[object Null]
```

3. 变量提升&作用域
* [图解作用域及闭包](https://juejin.im/post/5af109426fb9a07aa047f1c7)
* [深入理解 JavaScript, 从作用域与作用域链开始](https://juejin.im/post/5d13a5fce51d455a694f9560)
* [深入理解JavaScript作用域和作用域链](https://juejin.im/post/5c8290455188257e5d0ec64f)


4. 闭包
* [图解JS闭包形成的原因](https://segmentfault.com/a/1190000011504517)

5. this
* [嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)
* [Js中this的用法](http://xieyufei.com/2016/09/18/Explain-Js-This.html)
* [通过运行机制看this绑定 、作用域、作用域链和闭包](https://juejin.im/post/5dde27615188256ebd1618fb)
* [JavaScript this 的六道坎](https://blog.crimx.com/2016/05/12/understanding-this/)

```
1. 普通函数的调用：this指向window(浏览器环境)。
2. 对象方法的调用：this指向调用对象。（隐式绑定）
3. 构造函数：this指向构造函数实例。
4. apply、call、bind：this指向绑定值。（显示绑定）
5. 箭头函数this：this指向外层第一个普通函数调用的this。（默认绑定）(对于箭头函数，只要看它在哪里创建)


优先级
1. 函数是否存在new绑定调用：如果是的话this绑定到新创建的对象上。
2. 函数是否通过apply、call、bind显示绑定：如果是，this绑定到指定对象上。
3. 函数是否在对象方法隐式调用：如果是的话，this绑定到调用对象。
4. 如果上面三条都不满足的话：在严格模型下，this绑定到undefined，在非严格模式下，this绑定到全局对象上。

```
5.0 new执行的操作

```
1. 创建一个全新的对象。
2. 这个新对象会被执行 [[Prototype]] 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```

手动实现new
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

6. 理解constructor、prototype、__proto__和原型链
* [用自己的方式（图）理解constructor、prototype、__proto__和原型链](https://juejin.im/post/5cc99fdfe51d453b440236c3)

```
任何一个对象都有constructor
对象和函数的constructor都是Function

```

7. let const var
* [一道面试题引发的“血案”](https://juejin.im/post/5bab1d4ae51d450e4d2feb7a)

8. setTimeout和setInterval和requestAnimationFrame

* [关于setInterval与setTimeout作用域问题](https://my.oschina.net/huskydog/blog/1553720)
* [注意点——setTimeout、setInterval使用](https://juejin.im/post/59cf06745188253fbe466f78)
* [你真的了解setTimeout和setInterval吗？](http://qingbob.com/difference-between-settimeout-setinterval/)
* [关于setTimeout](https://juejin.im/post/5aa4c47af265da239866e236)
* [深度解密setTimeout和setInterval——为setInterval正名！](https://juejin.im/post/5c4044e1f265da614f708f7d)
* [从setTimeout/setInterval看JS线程](https://palmer.arkstack.cn/2017/12/%E4%BB%8EsetTimeout-setInterval%E7%9C%8BJS%E7%BA%BF%E7%A8%8B/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
* [你知道的requestAnimationFrame【从0到0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429)

9. Event Loop
* [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
* [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
* [JavaScript的Event Loop详解](https://juejin.im/post/5d21c6d56fb9a07ea4209ffc)
* [Visualizing the javascript runtime at runtime](https://github.com/latentflip/loupe)

### JSON.parse(JSON.stringify())的缺点

```
1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式

2.如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象

3、如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失

4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor

6、如果对象中存在循环引用的情况也无法正确实现深拷贝
```

### 进程与线程
* [深入理解Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)
* [进程与线程的一个简单解释](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)
* [一篇让你明白进程与线程之间的区别与联系](https://juejin.im/post/5c932660f265da612524ad6d)
* [浅析操作系统的进程、线程区别](https://blog.csdn.net/zhuoxiuwu/article/details/77850724)

### 函数式编程
* [JavaScript 函数式编程](https://juejin.im/post/5b4ac0d0f265da0fa959a785)
* [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
* [ramda](https://github.com/ramda/ramda)
* [Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)

### 深拷贝与浅拷贝
* [浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)
* [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)
* [一步一步实现深拷贝](https://github.com/950905/record-summary/blob/master/common/%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E5%AE%9E%E7%8E%B0%E6%B7%B1%E6%8B%B7%E8%B4%9D.md)

### 防抖与节流
* [js史上最精简！防抖节流（你的比我精简，算我输）](https://juejin.im/post/5da7c77a51882554c0757f46)
* [2019 面试准备 - JS 防抖与节流](https://juejin.im/post/5c87b54ce51d455f7943dddb)

### 对象与数组的遍历
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

### 数组去重
* [JavaScript专题之数组去重](https://juejin.im/post/5949d85f61ff4b006c0de98b)
* [如何答一道惊艳面试官的数组去重问题？](https://mp.weixin.qq.com/s/IA41OWhKS062WzTOQ6hDAA)

## typescript
* [typescript中文官网](https://www.tslang.cn/docs/home.html)

## vue
* [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
* [Vue 3 中令人兴奋的新功能](https://juejin.im/post/5dc3cfce6fb9a04a665f100e)
* [面试官: 实现双向绑定Proxy比defineproperty优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

![vue响应式原理](https://user-gold-cdn.xitu.io/2018/4/11/162b38ab2d635662?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### vue3
* [面试官: 实现双向绑定Proxy比defineproperty优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

### 组件间通信示例
* [EventBus （$emit / $on）](https://codesandbox.io/s/vue-bus-tms87)
* [$attrs/$listeners](https://codesandbox.io/s/vue-attrs-listeners-z5rwe)
* [provide / inject ](https://codesandbox.io/s/affectionate-matsumoto-w5l8h)

## es6
* [1.5万字概括ES6全部特性](https://juejin.im/post/5d9bf530518825427b27639d)


## weex


### 源码
* [Weex 中别具匠心的 JS Framework](https://halfrost.com/weex_js_framework/)

## react


## webpack


## 浏览器
* [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://zhuanlan.zhihu.com/p/34453198?group_id=957277540147056640)
* [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)

### 页面渲染
* [你不知道的浏览器页面渲染机制](https://juejin.im/post/5ca0c0abe51d4553a942c17d)
* [浏览器页面渲染机制，你真的弄懂了吗？](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489674)

### 缓存
* [彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)
* [浏览器缓存](https://segmentfault.com/a/1190000008377508)
* [前端静态资源缓存最优解以及max-age的陷阱](https://blog.csdn.net/weixin_42817899/article/details/84553595)
* [面试精选之http缓存](https://juejin.im/post/5b3c87386fb9a04f9a5cb037)

### 跨域与安全
* [ajax跨域，这应该是最全的解决方案了](https://segmentfault.com/a/1190000012469713)
* [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
* [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
* 可以通过Symbol进行iframe的跨域 http://es6.ruanyifeng.com/#docs/symbol
```
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
// true
```

### http
* [七层网络结构](https://blog.csdn.net/u010359398/article/details/82142449)

### 垃圾回收
* [图解 JavaScript 垃圾回收 — 现代 JavaScript 教程](https://juejin.im/post/5e0ddc24f265da5d1805ee6f)


## 性能优化
* [用100行代码提升10倍的性能](https://juejin.im/post/5bec223f5188250c102116b5)


## 移动端
* [吃透移动端 H5 与 Hybrid｜实践踩坑12种问题汇总](https://juejin.im/post/5dfadb91e51d45584006e486)


## 算法与数据结构
* [前端该如何准备数据结构和算法？](https://juejin.im/post/5d5b307b5188253da24d3cd1)
* [js实现排序算法（冒泡、选择、插入、二分插入、快速、希尔）](http://blog.csdn.net/charlene0824/article/details/51387165)
* [前端面试中的常见的算法问题](https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/)
* [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
* [5分钟带你领略:某跳动公司面试出镜率最高的算法之一——虚拟十叉树建模问题](https://juejin.im/post/5d7fb1e16fb9a06ac76de435)
* [【从蛋壳到满天飞】JS 数据结构解析和算法实现-集合和映射](https://juejin.im/post/5c9242926fb9a070b33c4f57)

### 复杂度
* [算法的时间和空间复杂度，就是这么简单](https://www.toutiao.com/a6750625828465279495)


### 二叉树
* [JavaScript二叉树深入理解](https://www.jianshu.com/p/61f75e0f549f)
* [3 分钟理解完全二叉树、平衡二叉树、二叉查找树](https://mp.weixin.qq.com/s/K_oGI2rl3epTirxkST5LVQ)

```

```
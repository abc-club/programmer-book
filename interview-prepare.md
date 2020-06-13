## NODEJS

- [nodejs 官网](https://nodejs.org/zh-cn)
- [NodeJS 从入门到精通](https://www.bilibili.com/video/BV15W411J7Uz)
  http https http2 的区别与实践

### nodejs的特点

单线程

非阻塞IO

事件驱动


每个线程需要耗费大约2MB内存。也就是说，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。

### 事件循环
- [浏览器与Node的事件循环(Event Loop)有何区别?](https://juejin.im/post/5c337ae06fb9a049bc4cd218)
- [剖析nodejs的事件循环](https://juejin.im/post/5af1413ef265da0b851cce80)
### 模块

需要复习一下模块

#### module

- [require() 源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)(nodejs 加载机制)

#### CommonJS 中的 require/exports 和 ES6 中的 import/export 区别？

```
- CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。
- ES6 模块是动态引用，如果使用 import 从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
- import/export 最终都是编译为 require/exports 来执行的。
- CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
- export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

- CommonJS运行时加载
  CommonJS 模块输出的是一个值的拷贝，

- ES6编译时加载（或叫静态加载）
  ES6 模块是动态引用 ES6 模块输出的是值的引用。
  export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
  import命令具有提升效果，会提升到整个模块的头部，首先执行。
  如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

```

**export 如果后面跟的是会变量提升的 var/function,那么会变量提升**
**module.exports/exports 不会变量提升**

#### exports 与 module.exports 的区别

nodejs 暴露模块需要用 module.exports，其实 exports = module.exports，当我们给 epxorts.a = xxx 时，其实就是在 module.exports 上加属性

这就是为什么不能给 exports 赋值的原因，即赋值会改变 exports 的指向

event

http/http2/https
url
buffer
fs
path
querystring

console
debugger
global
process
child_process
readline
cluster

## npm
- [package.json字段全解](https://www.cnblogs.com/liaojie970/p/7155903.html)
- [package.json 中 你还不清楚的 browser，module，main 字段优先级](https://segmentfault.com/a/1190000019438150)


### npm init

```js
npm init egg --type=simple

// 等价于
npx create-egg --type=simple
```

## koa

- [koa 官网](https://demopark.github.io/koa-docs-Zh-CN/)
- [node 进阶——之事无巨细手写 koa 源码](https://juejin.im/post/5ba48fc4e51d450e704277fa)
- [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.im/post/5e055d9ef265da33997a42cc)
- [koa+jwt 实现 token 验证与刷新](https://segmentfault.com/a/1190000019338195)

## express

- [expressjs 中文](https://www.expressjs.com.cn/)
- [express 源码阅读（全）](https://segmentfault.com/a/1190000011090124)
- [awesome-express](https://github.com/wabg/awesome-express)

## egg

### egg 周边

egg egg-init egg-bin egg-scripts

- [eggjs](https://eggjs.org/zh-cn/intro/)

## es6

callback promise generator async

### string

- [unicode 表](https://unicode-table.com/cn/#cyrillic)
- [unicode 官网](https://home.unicode.org/)
- [汉字对应表](http://www.chi2ko.com/tool/CJK.htm)

```js
"z" === "z"; // true
"\172" === "z"; // true 8进制
"\x7A" === "z"; // true 16进制
"\u007A" === "z"; // true utf-16编码
"\u{7A}" === "z"; // true utf-16编码
```

#### 为什么"\u{20BB7}" === "\uD842\uDFB7" === "𠮷"

简单讲就是 utf-16 编码转换

- [字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
- [字符编码的那些事](https://segmentfault.com/a/1190000009560472)
- [一次性搞清字符编码](http://www.ccc5.cc/2517.html?cwtwns=wshh11)

### Number

由于 JavaScript 采用 IEEE 754 标准，数值存储为 64 位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。
范围： -Math.pow(2,53) ~ Math.pow(2,53) 不包括两个端点

32 为的浮点数
分为 3 部分：

第一部分是符号位，用 s 表示，代表正负，要记住的是在浮点数的范围内，所有数字都是有符号的；
第二部分是指数位，用 e 表示，代表指数，用 8 位 bit 表示的数字范围是 0~255，为了同时表示大数和小数，我们把 0~255 去掉头尾（0，255 后面会用到）的 1~254 去映射到-126~127，这样同时可以表示最大最小数字；
第三部分是有效数位，用 f 表示，代表的是有效的数位；
综合上述表示和科学计数法，我们的浮点数就可以表示为公式

```js
(-1)^s * 1.f * 2^e
```

- [二进制(原码、反码、补码)](https://www.cnblogs.com/fuhaots2009/p/3476502.html)
- [你真的知道 0.1+0.2 为何不等于 0.3 吗？](https://juejin.im/post/5d6e74c35188254628237d5d)
- [JS 的二进制操作](https://segmentfault.com/a/1190000018167547)

### 函数

#### 箭头函数有几个使用注意点。

（1）函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

（3）不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

### array

ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。

forEach(), filter(), reduce(), every() 和 some()都会跳过空位。
map()会跳过空位，但会保留这个值
join()和 toString()会将空位视为 undefined，而 undefined 和 null 会被处理成空字符串。

ES6 则是明确将空位转为 undefined。

```js
[, "a", undefined, null].join("#"); // "#a##"
[, "a", undefined, null].toString(); // ",a,,"
```

### Object

#### Object.create

Object.create 第二个参数是对象描述

```js
const obj = Object.create({}, { p: { value: 42 } }); // p是不可枚举的
Object.values(obj); // []
```

```js
const obj = Object.create(
  {},
  {
    p: {
      value: 42,
      enumerable: true,
    },
  }
);
Object.values(obj); // [42]
```

#### 对象与数组的遍历

- [javaScript 遍历对象、数组总结](https://www.cnblogs.com/chenyablog/p/6477866.html)
  对象的属性分为三种： 是否是自身属性 是否可以枚举 是否是 Symbol 属性
  注意：对象没有 for...of...

对象的扩展运算符（...）用于取出参数对象`自身`的所有`可遍历`属性，拷贝到当前对象之中。

举个栗子

```js
var a = { a: 1 };
Object.defineProperty(a, "aa", {
  value: 3,
});
var b = { b: 2 };
b.__proto__ = a;

Object.defineProperty(b, "c", {
  value: 3,
});
b[Symbol()] = 4;

Object.keys(b); // ["b"]  返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).

for (var i in b) {
  console.log(i, ":", b[i]);
} // b : 2 a : 1   循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)

Object.getOwnPropertyNames(obj); // ["b", "c"] 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).
Reflect.ownKeys(b); // ["b", "c", Symbol()] 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.

var c = { ...b }; // {b: 2, Symbol(): 4}
```

### Promise
- [Promise 源码详解](https://juejin.im/post/5b32f552f265da59991155f0)
- [捕获未处理的 Promise 错误方法](https://www.jb51.net/article/125664.htm)
- [JavaScript 引擎是如何工作的？从调用栈到 Promise 你需要知道的一切](https://segmentfault.com/a/1190000019205065)
* [面试精选之Promise](https://juejin.im/post/5b31a4b7f265da595725f322)
* [面试官眼中的Promise](https://juejin.im/post/5c233a8ee51d450d5a01b712)
- [Promise 必知必会（十道题）](https://juejin.im/post/5a04066351882517c416715d)
- [你能手写一个Promise吗？Yes I promise。](https://juejin.im/post/5c41297cf265da613356d4ec)
- [Promise之你看得懂的Promise](https://juejin.im/post/5b32f552f265da59991155f0)

 ### async/await
* [async/await 原理及执行顺序分析](https://juejin.im/post/5dc28ea66fb9a04a881d1ac0)
- [【译】JavaScript 的工作原理：事件循环及异步编程的出现和 5 种更好的 async/await 编程方式](https://juejin.im/post/5c32b971f265da61407f1057)

async继发与并发

```js
// 继发
let foo = await getFoo();
let bar = await getBar();


// 并发
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

```js

// 继发
// 方法一
async function dbFuc(db) { //这里不需要 async
  let docs = [{}, {}, {}];

  for (let doc of docs) {
    await db.post(doc);
  }
}

// 方法二
async function dbFuc(db) {
  let docs = [{}, {}, {}];

  await docs.reduce(async (_, doc) => {
    await _;
    await db.post(doc);
  }, undefined);
}

// 并发
function dbFuc(db) { //这里不需要 async
  let docs = [{}, {}, {}];

  // 可能得到错误结果
  docs.forEach(async function (doc) {
    await db.post(doc);
  });
}

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

// 或者使用下面的写法

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
```



### class
#### super

`super`指向当前对象的原型对象

注意，super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。

```js
// 报错
const obj = {
  foo: super.foo,
};

// 报错
const obj = {
  find: () => super.foo,
};

// 报错
const obj = {
  find: function() {
    return super.foo;
  },
};
// 正确
const obj = {
  foo: "world",
  find() {
    return super.foo;
  },
};
```

#### 扩展运算符的解构赋值，不能复制继承自原型对象的属性

```js
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
x; // 1
y; // undefined
z; // 3
```

#### 注意，简写的对象方法不能用作构造函数，会报错。

```js
const obj = {
  f() {
    this.foo = "bar";
  },
};

new obj.f(); // 报错
```

#### 如果对象的方法使用了取值函数（getter）和存值函数（setter），则 name 属性不是在该方法上面，而是该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set。

```js
const obj = {
  get foo() {},
  set foo(x) {},
};

obj.foo.name;
// TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(obj, "foo");

descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo"
```

#### 函数的 name 属性

```js
new Function().name; // "anonymous"

var doSomething = function() {
  // ...
};
doSomething.name; // "doSomething"
doSomething.bind().name; // "bound doSomething"

const key1 = Symbol("description");
const key2 = Symbol();
let obj = {
  [key1]() {},
  [key2]() {},
};
obj[key1].name; // "[description]"
obj[key2].name; // ""
```

#### Object.assign

- 可以用来处理数组，但是会把数组视为对象
  Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]

- 取值函数的处理

```js
const source = {
  get foo() {
    return 1;
  },
};
const target = {};

Object.assign(target, source);
// { foo: 1 }
```

### export

`export *`命令会忽略模块的 default 方法

```js
export var a = 1;
// 或者
var a = 1;
export { a };
```

```js
export defalut 1

```

```js
// modules.js
function add(x, y) {
  return x * y;
}
export { add as default };
// 等同于
// export default add;

// app.js
import { default as foo } from "modules";
// 等同于
// import foo from 'modules';
```

#### super

* super的指向以及super中this的指向问题
```
super可以作为函数和对象使用
作为函数时指向父类的构造函数，只能在构造函数中使用
作为对象时，在普通方法中指向父类原型对象，在静态方法中指向父类
super调用的方法中this指向，普通方法中this指向自身实例，静态方法中指向自身类

```

super在普通方法中等于this

易错题

```js
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3; // super等于this
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```

## babel

**注意 babel 只转换新的句法（语法），不会转换新的 API，比如 Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。**

- [caniuse](https://caniuse.com/#feat=es5)
- [browserlist](https://browserl.ist/)(查看浏览器市场占比)
- [kangax](https://kangax.github.io/compat-table/es6/)(查看 es6 支持情况)

## typescript

- [TypeScript 完全解读-26 课时](https://www.bilibili.com/video/BV12a4y1v7j9)

## JS

- [都 2020 了，还不懂 js 运算符优先级？](https://juejin.im/post/5e1eecf75188254dc022beea)
- [「前端进阶」从多线程到 Event Loop 全面梳理](https://juejin.im/post/5d5b4c2df265da03dd3d73e5)(宏任务微任务 cup 进程线程)

### performance

#### performance.timing

https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming
- [前端性能监控：window.performance](https://www.cnblogs.com/libin-1/p/6501951.html)


### Object.defineProperty

先看 configurable，再看 writable
configurable 为 false 表示不能修改属性描述符，不能删除属性
configurable 和 writable 同时为 fasle 时，不可以修改任何描述符
configurable 为 false 时，只可以修改 writable

扩展：

严格模式下 o.a 会报错

Object.isExtensible()
Object.seal() // 方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
Object.isSealed()
Object.freeze() // 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
Object.isFrozen()
Object.preventExtensions() // 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

### 正则
- [面试题之正则表达式解析一个完整的url](https://juejin.im/post/5aab72fd518825188038af9b)
- [【收藏】常用JavaScript正则表达式汇编与示例](https://juejin.im/post/5cc2c1a3e51d456e31164a3c)
- [[JS]正则精简教程](https://juejin.im/post/5e1d26dae51d4501fb53546b)
- [2019 年 JS 正则大全(常用)](https://juejin.im/post/5d245d4151882555300feb77)



## vue

vue vue-router vuex vue-ssr nuxt
实现自己的 vue2 vue3

// TODO:vue-cli

- [Vue 兼容 ie9 的全面解决方案](https://juejin.im/post/5b2868b46fb9a00e6f65f87e)

### vue面试题
* 描述下diff算法


### Vue 是如何监控到子组件修改了props属性并给出警告的


## vue3


## react

实现一个 react
- [你要的 React 面试知识点，都在这了](https://juejin.im/post/5cf0733de51d4510803ce34e)
- [你真的了解 React 生命周期吗](https://juejin.im/post/5df648836fb9a016526eba01)
- [React 源码解析](https://github.com/KieSun/react-interpretation)
- [redux](https://www.redux.org.cn/)
- [react-router](https://reacttraining.com/react-router/)


## webpack

- [Webpack4+Babel7+ES6 兼容 IE8](https://juejin.im/post/5cabf7b0e51d456e8b07dd04)
- [minipack](https://github.com/ronami/minipack)(最小打包器)


## 优化

- 域名预解析

  <meta http-equiv="x-dns-prefetch-control" content="on">
  <link rel="dns-prefetch" href="//www.zhix.net">

- 域名分散处理， 突破浏览器对单个域名的最大并发连接数
  分散到 img0.guoweiwei.com/img1.guoweiwei.com/img2.guoweiwei.com/…等不同域名


## 浏览器

### 缓存
- [一文读懂前端缓存](https://juejin.im/post/5c22ee806fb9a049fb43b2c5)


### prefetch preload
prefetch(预取)：将来某些导航下可能需要的资源
preload(预加载)：当前导航下可能需要资源

与 prefetch 指令相比，preload 指令有许多不同之处：

preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。
preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。
浏览器支持程度不同。

### 网络
- [一文看懂CDN加速原理](https://blog.csdn.net/xiangzhihong8/article/details/83147542)


## css

### BFC
  什么是BFC？BFC的好处是什么？ 如何创建BFC?

- [史上最全面、最透彻的 BFC 原理剖析](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)
- [学习 BFC (Block Formatting Context)](https://juejin.im/post/59b73d5bf265da064618731d)

### 百分比

- [css 中的百分比](https://zhuanlan.zhihu.com/p/93084661)

### display: none 和visibility: hidden 和opacity: 0的区别

display: none;
DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；
事件监听：无法进行 DOM 事件监听；
性能：动态改变此属性时会引起重排，性能较差；
继承：不会被子元素继承，毕竟子类也不会被渲染；
transition：transition 不支持 display。

visibility: hidden;
DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；
事件监听：无法进行 DOM 事件监听；
性 能：动态改变此属性时会引起重绘，性能较高；
继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；
transition：transition 不支持 display。

opacity: 0;
DOM 结构：透明度为 100%，元素隐藏，占据空间；
事件监听：可以进行 DOM 事件监听；
性 能：提升为合成层，不会触发重绘，性能较高；
继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；
transition：transition 支持 opacity。

### flex grid布局
- [flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [grid 布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


### 水平垂直居中
- [css 实现垂直水平居中] https://juejin.im/post/5854e137128fe100698e6271 https://demo.cssworld.cn/5/3-10.php

### 选择器
https://www.runoob.com/cssref/css-selectors.html

- [css选择器有哪些，选择器的权重的优先级](https://www.cnblogs.com/wuwangxiaochou/p/10856655.html)


## 算法
- [前端该如何准备数据结构和算法？](https://juejin.im/post/5d5b307b5188253da24d3cd1)



## 手写


## 项目
- [前端大文件上传](https://juejin.im/post/5cf765275188257c6b51775f)

## hr面

- [面试被问感情状况，怎样回答最加分？](https://zhuanlan.zhihu.com/p/75932700)
  目前是单身状态，我觉得感情看缘分不要着急，先找到一份满意的工作，让自己经济独立才是最为重要。


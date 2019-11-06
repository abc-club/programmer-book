<h1 align="center">面试准备过程</h1>

本文主要记录准备面试过程中每日进度

持续更新中……


## 目录


## Day 1(2019-11-04 周一)

### 目标
1. 设定目标：查看目标职位的jd, 已确定准备的范围
2. 制定计划：制定每日复习计划

### 完成度

#### 复习范围
* 算法和数据结构
* js es基础
* ts
* webpack rollup gulp 
* vue react
* css html
* nodejs express koa eggjs
* redis eleasticsearch mongodb kafaka
* 优化
* 项目经验
* 设计模式 函数式编程

#### es6

* let和var和const的区别
```
let 不存在变量提升，不能重复定义，会产生块级作用域，存在暂时性死区
const 声明就得赋值，变量的值不得改动
```

* 对象的解构赋值可以取到继承的属性
```
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
foo // "bar"
```

* 正则表达式


* 获取字符串长度的方法

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
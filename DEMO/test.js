Function.prototype.mybind = function(thisArg) {
  if (typeof this !== 'function') {
    throw TypeError("Bind must be called on a function");
  }
  // 拿到参数，为了传给调用者
  const args = Array.prototype.slice.call(arguments, 1),
    // 保存 this
    self = this,
    // 构建一个干净的函数，用于保存原函数的原型
    nop = function() {},
    // 绑定的函数
    bound = function() {
      // this instanceof nop, 判断是否使用 new 来调用 bound
      // 如果是 new 来调用的话，this的指向就是其实例，
      // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
      return self.apply(
        this instanceof nop ? this : thisArg,
        args.concat(Array.prototype.slice.call(arguments))
      );
    };

  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  // 修改绑定函数的原型指向
  bound.prototype = new nop();

  return bound;
}
var o = {a: 1}
function f(x,y) {
console.log(this.a,x,y)
}
f.myapply(o,[2,3])
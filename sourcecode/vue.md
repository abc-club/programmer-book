# vue源码笔记

```js
Object.defineProperty(Vue.prototype, '$data', dataDef)

new Vue的时候$data会在vm中显示

```

```
$el  表示dom节点
$vnode 父vnode the placeholder node in parent tree
_vnode 自身vnode  the root of the child tree

Observer用来监听data

Observer有value(__ob__指向observer实例)  dep


Watcher用来
Watcher有deps newDeps depIds newDepIds getter就是updateComponent

执行watcher.get()的时候会把watcher赋值给Dep.target,然后渲染，最后pop
执行callHook getData handleError的时候都会给Dep.target赋值为空,然后pop,目的是不给getter绑定dep

每次mountComponent的时候Dep.target就是当前的watcher


```

```
// 动作

patch 指把vnode翻译成elm,并插入到body
render 把createElement转成vnode


```

```
watcher与dep的关系

dep.subs: Array<Watcher>

watcher的depIds和deps保存的是dep, newDeps和newDepIds保存的是new



```
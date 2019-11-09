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

dep属于defineReactive里面的，可以理解为属于data

dep.subs: Array<Watcher>

watcher的depIds和deps保存的是dep, newDeps和newDepIds保存的是new

addDep的时候会把Dep.target加入到dep里，同时会把dep加入到watcher的newDeps里，cleanupDeps的时候就把newDeps赋值给deps

```

```
Watcher有
renderwatcher
_computedWatchers 是lazy的，每次执行update都会把dirty变为true，然后每次render模板的时候判断dirty是否为true来决定是否evaluate（可以理解为懒更新），执行完后把dirty变为false
watch watcher
```
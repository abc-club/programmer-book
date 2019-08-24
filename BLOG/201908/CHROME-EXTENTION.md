# 五分钟实现一个chrome插件(含源码)

## 背景

很多网站都没有实现返回顶部的功能，但现实中往往网页比较长，如果你想返回顶部就非常之麻烦，这时候如果有个按钮该有多好啊。

这就是这个项目的初衷。

找了一下chrome网上应用商店，其实已经有很多款类似插件，但往往太过陈旧或者性能较差，不能够满足个人需求，估自己捣鼓了一个插件。同时也算是练一下手。

## 项目源码

https://github.com/abc-club/ctx-scroll-top

## 实现
### 目录结构


![](https://user-gold-cdn.xitu.io/2019/8/24/16cc2751d14ac06c?w=358&h=184&f=png&s=11296)

是的！就是这么简单！总共三个文件：1个图标（用于在扩展栏显示的图标），1个配置文件（chrome插件必需的json文件），1个js脚本（用于实现功能）

### manifest.json

```
{
  "name": "Scroll Top",
  "description" : "回到顶部",
  "version": "1.0",
  "manifest_version": 2,
  "icons": {
    "16": "btn.png",
    "32": "btn.png",
    "48": "btn.png",
    "128": "btn.png"
  },
  "content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "js":[
        "index.js"
      ]
    }
  ]
}

```

需要解释的是<all_urls>，表示匹配所有的url

### index.js

```js
// 创建按钮
const createBtn = () => {
  const backToTopBtn = document.createElement('div');
  backToTopBtn.setAttribute('id', 'back-to-top');
  backToTopBtn.innerHTML = '<svg t="1566628718522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5590" width="50" height="50"><path d="M508.245 143.837c-0.606 0.059-1.194 0.174-1.791 0.258-0.725 0.104-1.45 0.188-2.168 0.332-0.687 0.135-1.351 0.325-2.024 0.495-0.622 0.156-1.247 0.293-1.861 0.479-0.661 0.202-1.298 0.448-1.945 0.68-0.614 0.219-1.232 0.422-1.836 0.671-0.604 0.25-1.181 0.544-1.771 0.821-0.622 0.293-1.251 0.569-1.861 0.897-0.563 0.301-1.097 0.645-1.644 0.972-0.6 0.358-1.206 0.696-1.791 1.087-0.606 0.405-1.175 0.856-1.756 1.292-0.487 0.364-0.987 0.701-1.459 1.091-1.044 0.856-2.048 1.76-3.001 2.714l-173.668 173.668c-15.986 15.986-15.986 41.907 0 57.894s41.907 15.986 57.894 0l103.784-103.784v556.173c0 22.61 18.328 40.937 40.937 40.937 22.61 0 40.937-18.328 40.937-40.937v-556.176l103.784 103.784c15.986 15.986 41.907 15.986 57.894 0s15.986-41.907 0-57.894l-173.668-173.668c-0.954-0.954-1.957-1.856-3.001-2.712-0.473-0.39-0.972-0.727-1.459-1.091-0.581-0.436-1.152-0.886-1.756-1.292-0.583-0.391-1.189-0.729-1.787-1.087-0.549-0.327-1.083-0.671-1.648-0.974-0.088-0.047-0.17-0.106-0.258-0.153-0.524-0.276-1.068-0.493-1.603-0.743-0.587-0.279-1.167-0.571-1.771-0.821-0.606-0.25-1.224-0.452-1.838-0.673-0.645-0.231-1.283-0.479-1.942-0.68-0.078-0.023-0.151-0.057-0.228-0.080-0.538-0.161-1.089-0.262-1.631-0.399-0.673-0.17-1.339-0.358-2.024-0.495-0.718-0.143-1.445-0.227-2.168-0.332-0.598-0.086-1.185-0.199-1.791-0.258-1.344-0.133-2.692-0.204-4.040-0.205-1.349 0.004-2.698 0.076-4.040 0.209z" p-id="5591" fill="#13227a"></path><path d="M0.571 512.074c0 282.612 229.103 511.714 511.714 511.714s511.714-229.103 511.714-511.714-229.103-511.714-511.714-511.714-511.714 229.103-511.714 511.714zM942.126 512.071c0 237.396-192.446 429.84-429.84 429.84s-429.84-192.446-429.84-429.84 192.446-429.84 429.84-429.84 429.84 192.448 429.84 429.84z" p-id="5592" fill="#13227a"></path></svg>'
  backToTopBtn.setAttribute('style', 'opacity: 0.6; position: fixed; width: 50px; height: auto; z-index: 2147483647; border: 0px; padding: 0px; min-width: auto; min-height: auto; max-width: none; max-height: none; bottom: 100px; right: 80px; margin: 0px; cursor: pointer;display:none;');
  backToTopBtn.addEventListener('click', onClick);
  return backToTopBtn;
}
// 点击事件
const onClick = () => {
  (function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  })();
}

// 把按钮插入文档
const injectBtn = () => {
  var body = document.querySelector('body');
  body.appendChild(createBtn());
};

// 监听滚动，大于50px才显示按钮
window.onscroll = function(e){
  var currentScroll=document.documentElement.scrollTop||document.body.scrollTop;
  var backToTopBtn = document.querySelector('#back-to-top');
  if (currentScroll >50) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

injectBtn();

```

## 发布
代码写好了，那么怎么看效果呢

其实也很简单



第一步：下载代码或者自己按上面的步骤实现 https://github.com/abc-club/ctx-scroll-top

第二步：浏览器打开 chrome://extensions/

第三步：把第一步下载的文件解压，把整个文件夹拖入第二步打开的页面，这时你会看到


![](https://user-gold-cdn.xitu.io/2019/8/24/16cc27ca52baa25a?w=834&h=440&f=png&s=43173)

第四步：随便打开一个网页：如 https://github.com/abc-club/free-resources

第五步：往下滚动页面，我们的按钮便会出现，点击便可以回到顶部

![](https://user-gold-cdn.xitu.io/2019/8/24/16cc27ef2646ac64?w=2524&h=1626&f=png&s=243000)


## 参考资料

 * [【干货】Chrome插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
 * [如何发布一款Chrome App](https://segmentfault.com/a/1190000000354014)
 * [从开发 2 个 Chrome 插件中学到的（对新手的 4 个提示和 6 个技巧）](https://juejin.im/post/58e6e86eac502e006c2b1307)
 * [chrome开发官方文档](https://developer.chrome.com/extensions)


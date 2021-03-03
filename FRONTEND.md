<h1 align="center">前端乐园</h1>

本文收集学习过程中使用到的资源。

持续更新中……

所有可以用 JavaScript 编写的应用程序最终都会用 JavaScript 编写 -- Jeff Atwood @2007

## 目录

- [中后台](NODEJS.md)
- [混合应用](HYBRID.md)
- [小程序](WEAPP.md)
- [css](CSS/README.md)
- [前端代码片段汇总](FRONTEND/SNIPPETS.md)
- [工具](SOFTWARE/README.md)
- [awesome chrome 插件](AWESOME/AWESOME-CHROME-EXTENTION.md)
- [awesome 微前端](AWESOME/AWESOME-MICRO-FRONTENDS.md)

- [vue](#vue)
- [react](#react)
- [typescript](#typescript)
- [常用库](#常用库)
- [js](#js)
- [es6](#es6)
- [移动端](#移动端)
- [h5 游戏](#h5游戏)
- [微信公众号](#微信公众号)
- [webpack](#webpack)
- [性能与监控、seo](#性能与监控)
- [高质文章](#高质文章)
- [趋势](#趋势)
- [动效](#动效)
- [可视化](#可视化)
- [数据结构与算法 机器学习](#数据结构与算法)
- [js core](#js-core)
- [代码规范](#代码规范)
- [canvas](#canvas)
- [测试](#测试)
- [网络请求](#网络请求)
- [pwa](#pwa)
- [其他必备知识](#其他必备知识)
- [git](#git)
- [安全](#安全)
- [框架](#框架)
- [jquery](#jquery)
- [学习网站](#学习网站)
- [工程化](#工程化)
- [值得注意的库](#值得注意的库)
- [效率](效率)

## vue

- [benchmark](https://stefankrause.net/js-frameworks-benchmark8/table.html)(各个框架对比)

### 官方

- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [mpvue](https://github.com/Meituan-Dianping/mpvue)(vue 小程序)
- [vuepress](https://github.com/vuejs/vuepress)
- [vue-i18n](https://github.com/kazupon/vue-i18n)
- [vuepress](https://github.com/vuejs/vuepress)(静态网站生成器)
- [jsx](https://github.com/vuejs/jsx)
- [Vue Template Explorer (Vue version: 2.6.11)](https://template-explorer.vuejs.org)

### vue3

- [vue提案](https://github.com/vuejs/rfcs)
- [vue3官网](https://v3.vuejs.org/)
- [vue3中文官网](https://v3.cn.vuejs.org)
- [vue3](https://github.com/vuejs/vue-next)
- [vue-next-template-explorer](https://vue-next-template-explorer.netlify.app)

- [Vue3.0】尤雨溪 - 聊聊 Vue.js 3.0 Beta 官方直播完整版](https://www.bilibili.com/video/BV1ke411W7WB)
- [尤雨溪-VueConf 2019-上海演讲视频](https://www.bilibili.com/video/BV1N4411V7Wi)
- [Vue 作者尤雨溪为你分享：Vue 3.0 进展@VueConf CN 2018](https://www.bilibili.com/video/BV1Lt411e75w)
- [从零实现 Vue3.0 响应式源码(正式版)](https://www.bilibili.com/video/BV1nE411d7eW?p=1)
- [Vue Composition API](https://composition-api.vuejs.org)
- [Vue3 中的数据侦测](https://juejin.im/post/5d99be7c6fb9a04e1e7baa34)
- [Vue3.0 前的 TypeScript 最佳入门实践](https://juejin.im/post/5d0259f2518825405d15ae62)
- [Vue3 究竟好在哪里？（和 React Hook 的详细对比）](https://juejin.im/post/5e9ce011f265da47b8450c11)
- [Vue3 体验卡～](https://juejin.im/post/5e1451385188253ab54142e9)
- [mini-vue](https://github.com/cuixiaorui/mini-vue)

### 组件库或框架

- [vue-tailwind](https://github.com/alfonsobries/vue-tailwind)(tailwind规范组件)
- [uni-app](https://github.com/dcloudio/uni-app)(uni-app 是一个使用 Vue.js 开发小程序、H5、App 的统一前端框架)
- [chameleon](https://github.com/didi/chameleon)(滴滴一套代码运行多端，一端所见即多端所见)

- [overwatch-ui](https://github.com/Haixiang6123/overwatch-ui)
- [element](https://github.com/ElemeFE/element)
- [iview \*22k+](https://github.com/iview/iview)
- [vuetify](https://github.com/vuetifyjs/vuetify)
- [mint-ui \*14k+](https://github.com/ElemeFE/mint-ui)
- [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue)
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue)
- [cube-ui](https://github.com/didi/cube-ui)
- [kpc](https://github.com/ksc-fe/kpc)(同时支持 vue 和 react 的组件库)
- [如何开发跨框架的组件](https://mp.weixin.qq.com/s/BehjH5xVXFWohQXFl3u-kQ)

* [vue-echarts](https://github.com/ecomfe/vue-echarts)
* [v-charts](https://github.com/ElemeFE/v-charts)
* [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
* [vee-validate](https://github.com/logaretm/vee-validate)
* [vue-lazyload](https://github.com/hilongjw/vue-lazyload)
* [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)
* [vue-form-making](https://github.com/GavinZhuLei/vue-form-making)
* [vuex-router-sync]()

### 文章

- [逐行分析 vue](https://github.com/HcySunYang/vue-design)(vue 源码分析)
- [learnVue](https://github.com/answershuto/learnVue)(vue 源码分析)
- [vue-analysis](https://github.com/ustbhuangyi/vue-analysis)(vue 源码分析)
- [浅谈使用 Vue 构建前端 10w+ 代码量的单页面应用开发底层](https://juejin.im/post/5b29c3bde51d45588d4d7110)
- [VUE 单页应用骨架屏方案](https://juejin.im/post/5c3d952ff265da616e4ca9ad)
- [一个 Vue 引发的性能问题](https://juejin.im/post/5c97691fe51d4522c55f9ead)
- [Vue.js 组件精讲](https://juejin.im/book/5bc844166fb9a05cd676ebca)
- [剖析 Vue.js 内部运行机制](https://juejin.im/book/5a36661851882538e2259c0f)
- [Vuejs 建议和最佳实践](https://juejin.im/post/5d48f3b7e51d4561e224a2c8)
- [Vue 项目性能优化 — 实践指南（网上最全 / 详细）](https://juejin.im/post/5d548b83f265da03ab42471d)
- [vue / react 的 UI 库都在用的几个 DOM API🚀](https://juejin.im/post/5d808601f265da03ef7a469b)
- [观众老爷们，来试试这个用 Vue 撸的数据可视化后台吧](https://juejin.im/post/5d08405a5188253049042d72)
- [收下这波 vue 技巧，让开发效率翻倍](https://juejin.im/post/5d8f0475f265da5b9d1ee503)
- [vue-router 源码：实现一个简单的 vue-router](https://juejin.im/post/5b35dcb5f265da59a117344d)
- [前端路由简介以及 vue-router 实现原理](https://juejin.im/post/5b10b46df265da6e2a08a724)
- [vue-router 源码分析-整体流程](https://juejin.im/post/584040e1ac502e006cbedb23)
- [解密 vue-router: 从源码开始](https://juejin.im/post/5af108dc518825672565cf31)
- [vue-router 源码：实现一个简单的 vue-router](https://juejin.im/post/5b35dcb5f265da59a117344d)

- [Github 上 36 个最实用的 Vue 开源库](https://www.toutiao.com/a6740807773254107651)
- [利用 VuePress 快速搭建项目文档管理系统](https://www.toutiao.com/a6740976049183523341)
- [50 个好用的前端框架，千万收好以留备用](https://www.toutiao.com/a6741905003897684493)
- [1 小时搞定 vuepress 快速制作 vue 文档/博客+免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5)

### 开源项目

- [marktext](https://github.com/marktext/marktext)(markdown editor)
- [vue-sell](https://github.com/ustbhuangyi/vue-sell)
- [vue2-elm \*29k+](https://github.com/bailicangdu/vue2-elm)
- [iview-admin](https://github.com/iview/iview-admin)
- [vue-element-admin \*38k+](https://github.com/PanJiaChen/vue-element-admin)
- [vue-data-board](https://github.com/dongsuo/vue-data-board)
- [bilibili-vue](https://github.com/lybenson/bilibili-vue)
- [best-resume-ever ](https://github.com/salomonelli/best-resume-ever)
- [vue2-manage](https://github.com/bailicangdu/vue2-manage)
- [JSUI](https://github.com/kitze/JSUI)
- [mall-admin-web](https://github.com/macrozheng/mall-admin-web)
- [vue-framework-wz](https://github.com/herozhou/vue-framework-wz)
- [Vue-cnodejs](https://github.com/shinygang/Vue-cnodejs)
- [gridea](https://github.com/getgridea/gridea)(一个静态博客写作客户端 ts vue )
- [postwoman](https://github.com/liyasthomas/postwoman)(接口管理 类似 postman)
- [微人事](https://github.com/lenve/vhr)(SpringBoot+Vue)
- [V 部落](https://github.com/lenve/VBlog)(SpringBoot+Vue)
- [KTV 点歌系统,含后台管理系统(完整版)](https://github.com/1046224544/ktv-select_music-system)
- [profile-summary-for-github](https://github.com/tipsy/profile-summary-for-github)(Tool for visualizing GitHub profiles)
- [Vue + Koa 从零打造一个 H5 页面可视化编辑器——Quark-h5](https://juejin.im/post/5dc81428e51d4523632ee793)
- [vue-admin-beautiful](https://github.com/chuzhixin/vue-admin-beautiful)(适配 pc 移动端)

### vue ssr

https://github.com/zbysir/go-vue-ssr

- [实测 Vue SSR 的渲染性能：避开 20 倍耗时](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247485601&idx=1&sn=97a45254a771d13789faed81316b465a&=41#wechat_redirect)
- [SSR 性能优化的误区](https://zhuanlan.zhihu.com/p/150259940)
- [基于 VUE-SSR 的性能优化](https://segmentfault.com/a/1190000022257834?utm_source=tag-newest)
- https://github.com/BFjacky/vue-ssr-template

### 常用工具

#### husky

- [husky](https://github.com/typicode/husky)(git hook)
- [yorkie](https://github.com/yyx990803/yorkie)(git hook 与 husky 功能相同)
  注意：一定要使用 npm 安装 eslint 和 husky，因为在 windows 操作系统下, 用 yarn 安装依赖，不会触发 husky pre-commit 钩子命令。
  还有就是注意 husky 的版本，否则也可能不触发 git 钩子

#### lerna

- [lerna](https://github.com/lerna/lerna)(多个包在一起打包)
- [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.im/post/5d4aa8905188250e4258249e)
- [Vue CLI 3 结合 Lerna 进行 UI 框架设计](https://juejin.im/post/5cb12844e51d456e7a303b64)
- [lerna帮助项目多包管理](https://www.zhangjinglin.cn/blog/d3dd7adfcdbaeb5f7adb7d78ded8ad95.html)


#### 常用组件或工具

- [vue-count-to](http://panjiachen.github.io/countTo/demo/)
- [vue-cookieconsent-component](https://www.npmjs.com/package/vue-cookieconsent-component)
- [vue-if-bot](https://www.npmjs.com/package/vue-if-bot)(防止机器人看到)
- [vue-cropperjs](https://www.npmjs.com/package/vue-cropperjs)
- [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list) (无尽列表) - Recommend
- [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller) (无尽列表) - Easy to use

### nuxt

- [nuxt](https://github.com/nuxt/nuxt.js)(vue 服务端渲染)
- [官网](https://nuxtjs.org/)
- [中文官网](https://www.nuxtjs.cn/)
- [awesome-nuxt](https://github.com/nuxt-community/awesome-nuxt)

### 常见问题

- [vue 项目使用 svg 图片（svg-sprite-loader 以及 vue2-svg-icon 的使用）](https://blog.csdn.net/txfyteen/article/details/84865157)
- [VUE-cli3 使用 svg-sprite-loader](https://juejin.im/post/6844903695478439949)

## react

### 官网

- React 官网 https://reactjs.org/
- React 中文网 https://react.docschina.org/
- React-router https://reacttraining.com/react-router
- redux https://redux.js.org/introduction/getting-started
- redux 中文 http://cn.redux.js.org/
- umi https://umijs.org/
- dva https://dvajs.com

* [react-devtools-tutorial](https://react-devtools-tutorial.now.sh/)
* [react-native-web](https://github.com/necolas/react-native-web)(rn 转 web)

### 参考资料

- [React 技术揭秘](https://react.iamkasong.com)
- [React 源码解析](https://github.com/KieSun/react-interpretation)
- [你真的了解 React 生命周期吗](https://juejin.im/post/5df648836fb9a016526eba01)

* awesome https://github.com/enaqx/awesome-react
* react-hook https://github.com/streamich/react-use
* React.js 小书 https://juejin.im/post/58c7a16e2f301e006bd03dbe
* React 入门看这篇就够了 https://segmentfault.com/a/1190000012921279#articleHeader0
* 掘金最污的 React16.x 图文视频教程(2 万 5 千字长文-慎入) https://juejin.im/post/5d085be0f265da1bac401937?utm_source=gold_browser_extension
* react demo https://gist.github.com/sAbakumoff/7b8510adcb16bded189d747e34f5e114
* 一文速览 React 全栈 https://juejin.im/post/5d0ee2906fb9a07ea33c1f8b
* React 同构与极致的性能优化 https://segmentfault.com/a/1190000012464033
* 阿里开源项目 https://segmentfault.com/a/1190000016773002

- [一文速览 React 全栈](https://juejin.im/post/5d0ee2906fb9a07ea33c1f8b)
- [掘金最污的 React16.x 图文视频教程(2 万 5 千字长文-慎入)](https://juejin.im/post/5d085be0f265da1bac401937)
- [你要的 React 面试知识点，都在这了](https://juejin.im/post/5cf0733de51d4510803ce34e)
- [如何优化你的超大型 React 应用 【原创精读】](https://juejin.im/post/5d35d3ecf265da1bc23fb654)
- [React 实战：设计模式和最佳实践](https://juejin.im/book/5ba42844f265da0a8a6aa5e9)
- [21 个让 React 开发更高效更有趣的工具](https://segmentfault.com/a/1190000020038593#articleHeader2)
- [在 react/redux 中使用 Immutable](https://www.cnblogs.com/greatluoluo/p/8469224.html)
- [从头开始，彻底理解服务端渲染原理(8 千字汇总长文)](https://zhuanlan.zhihu.com/p/76967335)
- [【长文慎入】一文吃透 React SSR 服务端渲染和同构原理](https://cloud.tencent.com/developer/article/1599720)
- [React + Koa 实现服务端渲染(SSR)](https://juejin.cn/post/6844903608501141512)
- [React 的性能优化（一）当 PureComponent 遇上 ImmutableJS](https://tech.youzan.com/purecomponent-immutablejs)
- [Profiling React performance with React 16 and Chrome Devtools.](https://calibreapp.com/blog/react-performance-profiling-optimization/)
- [React 性能优化技巧总结](https://segmentfault.com/a/1190000018257360)
- [介绍 React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [React Router 中文文档（一）](https://segmentfault.com/a/1190000014294604)
- [React Router 4 简易入门](https://segmentfault.com/a/1190000010174260)
- [看完这篇，你也能把 React Hooks 玩出花](https://juejin.im/post/5d754dbde51d4561cd2466bf)
- [React16 常用 api 解析以及原理剖析](https://juejin.im/post/5d75a881f265da03d211666c)
- [React 面试全解](https://zhuanlan.zhihu.com/p/76909668)
- [React 路由鉴权](https://juejin.im/post/5d6352116fb9a06ae8361932)
- [ReactRouter-V5 免费图文视频教程（我免费，有培训机构什么事，就出！）](https://juejin.im/post/5d50dd4ff265da039a2879cd)
- [精读《React Hooks 最佳实践》](https://juejin.im/post/5d75ae7a6fb9a06b0f2407e8)
- [收藏！送给 React 研发人员的 22 款超强工具](https://zhuanlan.zhihu.com/p/83675159)
- [全栈 React + GraphQL 教程（一）](https://www.zcfy.cc/article/full-stack-react-graphql-tutorial-apollo-graphql-4341.html?t=new)
- [React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)
- [React 之 CLODOP 实战：(一)手写并打印快递单](https://juejin.im/post/5e699522e51d4526c3591397)
- [Redux - redux-toolkit](https://juejin.cn/post/6927665767651966990)
- [使用redux-toolkit 改造你的redux](https://juejin.cn/post/6844904129178009613)
- [redux-toolkit 黑魔法](https://juejin.cn/post/6906401963655561223)

### 常用库

- [ant-design](https://ant.design/index-cn)
- [ant-design-mobile](https://mobile.ant.design/index-cn)

- [redux-actions](https://github.com/redux-utilities/redux-actions)
- [redux-toolkit](https://redux-toolkit.js.org/) (Redux官方出品)

* react-intl
* rc-form https://github.com/react-component/form

- [nivo](https://github.com/plouc/nivo)(React 数据可视化库)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)(无尽列表)
- [react-window](https://github.com/bvaughn/react-window)(无尽列表)
- [immerjs](https://github.com/immerjs/immer)(数据不可变)
- immutable https://github.com/immutable-js/immutable-js
- [immer.js:也许更适合你的 immutable js 库](https://juejin.im/post/5e83e532f265da47e02a6d5a)

### 框架

- umi https://umijs.org/
- [dumi](https://github.com/umijs/dumi)(react 文档站点)
- 飞冰 https://ice.work/
- beidou https://github.com/alibaba/beidou
- egg-react-ssr https://github.com/ykfe/egg-react-ssr
- react-server https://github.com/redfin/react-server

* [Vulcan.js](https://github.com/vulcanjs/vulcan)(The full-stack React+GraphQL framework)


### 解决方案

- [react-templates](https://github.com/wix/react-templates)(类似vue的写法)

## 服务端渲染

- next.js https://github.com/zeit/next.js
- [nextjs 官网](https://nextjs.org/)
- [nextjs 官网](https://www.nextjs.cn/)

### Demo

- [realworld ★31k+](https://github.com/gothinkster/realworld)

### 开源项目

- [wexond](https://github.com/wexond/desktop)(A privacy-focused, extensible and beautiful web browser)
- [房屋租赁平台](https://github.com/TrillCyborg/fullstack)(React/ApolloGraphQL/Node/Mongo demo written in Typescript)
- [lz-h5-edit](https://github.com/lzuntalented/lz-h5-edit)(react 版 h5 微场景编辑器 )
- [基于中间件思想设计可扩展的 UI 组件库](https://juejin.im/post/5dc4f40f5188250acf57e965)

## typescript

### 官网

### 参考资料

- 深入理解 TypeScript https://github.com/jkchao/typescript-book-chinese https://jkchao.github.io/typescript-book-chinese/ https://github.com/basarat/typescript-book/
- typescript 中文 https://www.tslang.cn/
- typescript 中文 https://ts.xcatliu.com/ https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html
- typescript https://www.html.cn/doc/typescript/doc/handbook/tutorials/React.html
- typescript 进阶 https://www.jianshu.com/p/13a4eb1001f1
- awesome https://github.com/dzharii/awesome-typescript
- TypeScript 入门指南（基础篇） https://juejin.im/post/5d3bb567f265da1b8f1b09c1
- TypeScript 入门指南 https://mp.weixin.qq.com/s/Oyawvb5BD-OKvMuF2tQ0pw?

### react+typescript demo

- React+redux+typescript https://github.com/piotrwitek/react-redux-typescript-guide

- https://github.com/fi3ework/blog/tree/master/react-typescript-cheatsheet-cn
- typescript-tutorial https://github.com/xcatliu/typescript-tutorial
- https://github.com/Lemoncode/react-typescript-samples
- https://github.com/rokoroku/react-redux-typescript-boilerplate
- https://github.com/alibaba/pont(前端接口层工具)

### 文章

- [三千字讲清 TypeScript 与 React 的实战技巧](https://juejin.im/post/5d3aad8b6fb9a07ecb0bef5e)
- [一篇朴实的文章带你 30 分钟捋完 TypeScript,方法是正反对比](https://juejin.im/post/5d53a8895188257fad671cbc)

## 常用库

- [core-js](https://github.com/zloirock/core-js)(es6 垫片)
- [driver.js](https://kamranahmed.info/driver.js/)(新手指引)



### 数据

- Immutablejs https://github.com/immutable-js/immutable-js

### 富文本编辑器

- simditor https://github.com/mycolorway/simditor
- https://mdnice.com/?from=juejin
- [ueditor]([ueditor](https://github.com/fex-team/ueditor))
- [wangEditor](https://github.com/wangeditor-team/wangEditor)
- [prosemirror](https://prosemirror.net/)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)(里面的文本编辑器)

#### 文章
- [富文本编辑器初探](https://juejin.cn/post/6844903555900375048)
- [富文本原理了解一下？](https://juejin.cn/post/6844903871110709256)

### 时间

- moment

* [dayjs](https://github.com/iamkun/dayjs)(时间格式转换)

### 网络请求

- [axios](https://github.com/axios/axios)

### 图片

- [cropperjs](https://github.com/fengyuanchen/cropperjs)(图片裁剪)
- [imgcook](https://imgcook.taobao.org/)(由设计稿一键智能生成代码)

### canvas

- [spritejs](https://spritejs.org/#/)(360)

### 其他

- [clipboard](https://github.com/zenorocha/clipboard.js)(剪贴板)
- [FileSaver](https://github.com/eligrey/FileSaver.js)(文件另存为)
- [excel-js ](https://github.com/SheetJS/js-xlsx)(xlsx 转换)
- [jsPDF](https://github.com/MrRio/jsPDF)(生成 pdf)
- [fileApi](https://github.com/mailru/FileAPI)(上传, 支持进度/分段)
- [swiper](https://github.com/nolimits4web/swiper)(轮播)
- [qrcodejs](https://github.com/davidshimjs/qrcodejs)(二维码生成器)
- [autosize](https://github.com/jackmoore/autosize)(textara 高度自适应文字)
- [shake.js](https://github.com/alexgibson/shake.js)(监听手机震动)
- [progressbar](https://github.com/kimmobrunfeldt/progressbar.js)(进度条)
- [DoraemonKit](https://github.com/didi/DoraemonKit)(简称 "DoKit" 。一款功能齐全的客户端（ iOS 、Android、微信小程序 ）研发助手，你值得拥有。)

## 物联网

- mosca https://github.com/mcollina/mosca
- MQTT https://github.com/mqttjs/MQTT.js

### 文章

- [一步步搭建物联网系统](https://github.com/phodal/designiot)
- [11 个开源物联网平台和工具](https://www.toutiao.com/a6754237961857925639)

### demo

- javascript-mqtt-demo-wearingTip https://github.com/coolnameismy/javascript-mqtt-demo-wearingTip
- 面试官(7): 聊一聊 Babel? https://juejin.im/post/5c03b85ae51d450c740de19c

## js

- [JS 官方教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [JS 代码片段](./JS/JS代码片段.md)
- [JavaScript 八张思维导图](https://zhuanlan.zhihu.com/p/60003120)
- [前端开发中 79 条不可忽视的知识点汇总](https://juejin.im/post/5d8989296fb9a06b1f147070)
- [一张刮刮卡竟包含这么多前端知识点](https://juejin.im/post/5d8a3d62e51d45780f060490)
- [透过现象看本质: 常见的前端架构风格和案例](https://juejin.im/post/5d7ffad551882545ff173083)
- [灵活运用 JS 开发技巧](https://juejin.im/post/5cc7afdde51d456e671c7e48)
- [JavaScript 工具函数大全（新）](https://juejin.im/post/5da1a04ae51d45783d6122bf)
- [js 运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- [书到用时方恨少，一大波 JS 开发工具函数来了](https://juejin.im/post/5e6cf42bf265da57397e3694)
- [JavaScript 20 年](https://github.com/doodlewind/jshistory-cn)
- [mocha1995](https://github.com/doodlewind/mocha1995)
- [freecodecamp](https://learn.freecodecamp.one/)
- [网页端「应用跳转」技术实现演变](https://zhuanlan.zhihu.com/p/33170734)


### 正则表达式

- [练完这篇就会写正则](https://juejin.im/post/5d89edb1518825097619ecfe)
- [learn-regex ★22k+](https://github.com/ziishaned/learn-regex) :100:
- [正则表达式 30 分钟入门教程](https://www.cnblogs.com/deerchao/archive/2006/08/24/zhengzhe30fengzhongjiaocheng.html)
- [正则表达式不要背](https://juejin.im/post/5cdcd42551882568651554e6)
- [2019 年 JS 正则大全(常用)](https://juejin.im/post/5d245d4151882555300feb77)
- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)

### 函数式编程

- [Pragmatic, balanced FP in JavaScript](https://github.com/getify/Functional-Light-JS)(English)
- [JavaScript 轻量级函数式编程](https://segmentfault.com/a/1190000010887890)(中文翻译)
- [「前端进阶」彻底弄懂函数组合](https://juejin.im/post/5d50bfebf265da03cb122b6f)
- [函数式编程，真香](https://juejin.im/post/5c19c3ffe51d45059b632eef)
- [深入学习 javascript 函数式编程](https://juejin.im/post/5c1a231de51d452ce364d945)
- [一文带你了解 JavaScript 函数式编程](https://mp.weixin.qq.com/s/AKYMse3cSyMhT95kdzdldw)
- [不要再尝试函数式编程了](https://mp.weixin.qq.com/s/1pAzdyBR4qE1A2aZF4GVIw)
- [范式篇 - 如何把函数式编程合理运用到日常工作中](https://juejin.im/post/5d8f0866e51d4578110dc765)
- [帮你揭开函数式编程的底层面纱——喜提国庆 buff](https://juejin.im/post/5d7683bd6fb9a06ad229f557)
- [Typescript 版图解 Functor , Applicative 和 Monad](https://juejin.im/post/5d6298c75188255625591ae6)
- [Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)

### 兼容性

- [在 javascript 中的浏览器兼容问题以及兼容浏览器汇总（默认事件，阻止冒泡，事件监听。。。）以及解决方式详解](https://www.cnblogs.com/zxlone/p/11483457.html)

### 其他

- [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.im/post/5d901418518825539312f587)
- [【译】JavaScript 的工作原理：事件循环及异步编程的出现和 5 种更好的 async/await 编程方式](https://juejin.im/post/5c32b971f265da61407f1057)
- [优秀 JavaScript 开发人员应掌握的 9 个技巧](https://juejin.im/post/5c4506c9e51d45524c7cf206)
- [JS 中轻松遍历对象属性的几种方式](https://juejin.im/post/5d48c275f265da03b12032a1)
- [你不懂 JS（系列丛书）](https://github.com/JoeHetfield/You-Dont-Know-JS)
- [前端开发变量命名系列 - JavaScript 篇](https://segmentfault.com/a/1190000020039039)
- [一文带你了解 JavaScript 函数式编程](https://mp.weixin.qq.com/s/AKYMse3cSyMhT95kdzdldw)
- [你真的知道 0.1+0.2 为何不等于 0.3 吗？](https://juejin.im/post/5d6e74c35188254628237d5d)
- [收下这波 JS 技巧，从此少加班](https://juejin.im/post/5d7659c76fb9a06b307068ed)
- [JavaScript 基础——前端不懂它，会再多框架也不过只是会用而已](https://www.toutiao.com/a6738734261286732291)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [尾调用和尾递归](https://juejin.im/post/5acdd7486fb9a028ca53547c)
- [js 中的 stopImmediatePropagation 方法和 stopPropagation 方法的区别](https://www.cnblogs.com/EnSnail/p/9796237.html)
- [二进制(原码、反码、补码)](https://www.cnblogs.com/fuhaots2009/p/3476502.html)
- [用 js 获取页面元素的位置图文总结](https://juejin.im/post/5b0eb6146fb9a009f74bf1a5)

### 开源项目

- [layout-ui](https://github.com/0123cf/layout-ui)(可视化布局 纯 css 布局 Layout-UI)
- [resume](https://github.com/resume/resume.github.com)(A service that creates a résumé based on your GitHub repos/activity.)
- [10 个后台管理 UI 框架](https://www.jianshu.com/p/3e6c9ebbd8fd)
- [muuri](https://github.com/haltu/muuri)(Responsive, sortable, filterable and draggable grid layouts)
- [odoo](https://github.com/odoo/odoo)(免费开源的企业数智化管理平台)

### 常用库

- [velocity](https://github.com/julianshapiro/velocity)(js 动画库)
- [TweenJS](https://github.com/CreateJS/TweenJS)
- [tween.js](https://github.com/tweenjs/tween.js)
- [GSAP](https://github.com/greensock/GSAP)(高性能 js 动画库)
- [color-js](https://github.com/brehaut/color-js)(A color management API )
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)(用正则匹配路径)

## es6

- [1.5 万字概括 ES6 全部特性(看图就能记下，值得收藏)](https://juejin.im/post/5d9bf530518825427b27639d)
- [ECMAScript 6 入门](https://es6.ruanyifeng.com/)
- [前端模块化详解(完整版)](https://juejin.im/post/5c17ad756fb9a049ff4e0a62)
- [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6)
- [Promise 源码详解](https://juejin.im/post/5b32f552f265da59991155f0)
- [最后一次搞懂 Event Loop](https://juejin.im/post/5cbc0a9cf265da03b11f3505)
- [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be)
- [babel-handbook](https://github.com/jamiebuilds/babel-handbook)

### babel

- [你真的会用 Babel 吗?](https://juejin.im/post/59b9ffa8f265da06710d8e89)

## 移动端

### 文章

- [移动端适配深度探究](https://juejin.im/post/5c9830e65188252d64583343)
- [第三代移动端布局方案](https://juejin.im/post/5cb078f05188251ace1fedb4)
- [移动端 1px 解决方案](https://juejin.im/post/5d19b729f265da1bb2774865)
- [拿到一份设计稿，我该如何进行移动端开发？](https://juejin.im/post/5d736747e51d4561ff66688c)
- [前端基础知识概述 -- 移动端开发的屏幕、图像、字体与布局的兼容适配](https://juejin.im/post/5d70747cf265da03e16897c8)
- [移动端 1px 细线解决方案总结](https://www.cnblogs.com/lunarorbitx/p/5287309.html)
- [稍微整理了几个经常在 H5 移动端开发遇到的东西](https://juejin.im/post/5d6e1899e51d453b1e478b29)
- [中高级前端必须注意的40条移动端H5坑位指南 | 网易三年实践](https://juejin.cn/post/6921886428158754829)


### 常用库

- lib-flexible https://github.com/amfe/lib-flexible


### 常见问题
- [iOS 上拉边界 下拉出现 白色空白](https://segmentfault.com/a/1190000023512164)
- [ios input输入时弹出键盘框 页面整体上移键盘框消失后页面不能回弹的问题](https://blog.csdn.net/zhangkeke_/article/details/88739521)
- [12个前端必会 H5 问题及解决方法](https://zhuanlan.zhihu.com/p/181212066)
- [VUE前端界面在iOS中遇到的坑](https://www.jianshu.com/p/dcdec7572987)

## h5 游戏

### 开源项目

- [Hilo - HTML5 互动游戏引擎](https://github.com/hiloteam/Hilo)
- [github games](https://github.com/leereilly/games)

### demo

- [🎮 你见过凌晨 4 点的洛杉矶吗？]（https://juejin.im/post/5e37ec2a6fb9a02fec665530)

## 微信公众号

### 实战项目

- wechaty https://github.com/Chatie/wechaty
- wechatBot https://github.com/gengchen528/wechatBot

### 文章

- [微信 H5 页面兼容性解决方案](https://mp.weixin.qq.com/s/5-BzKF0ME-vHaY51kkh6YA)

## webpack

### 官网

- [webpack](https://github.com/webpack/webpack)
- [webpack 官方文档](https://webpack.js.org)
- [webpack 中文文档](https://github.com/docschina/webpack.js.org)(https://webpack.docschina.org/)
- [深入浅出 Webpack](https://webpack.wuhaolin.cn/)(书)

### webpack

- [webpack 源码阅读之主流程分析](https://segmentfault.com/a/1190000020264009)
- [webpack 系列之一总览](https://juejin.im/post/5bf7c2186fb9a049fd0f7e8a)(滴滴)
- [Webpack 源码（二）—— 如何阅读源码](https://segmentfault.com/a/1190000008060484)
- [Webpack 源码解读：理清编译主流程](https://juejin.im/post/5dc01199f265da4d12067ebe)
- [从 Webpack 源码探究打包流程，萌新也能看懂～](https://juejin.im/post/5c0206626fb9a049bc4c6540)
- [webpack4.0 源码分析之 Tapable](https://juejin.im/post/5abf33f16fb9a028e46ec352)
- [webpack 原理](https://segmentfault.com/a/1190000015088834)
- [webpack 详解](https://juejin.im/post/5aa3d2056fb9a028c36868aa)
- [Webpack 4 配置最佳实践](https://juejin.im/post/5b304f1f51882574c72f19b0)

### loader

- [编写一个 loader](https://webpack.docschina.org/contribute/writing-a-loader/)
- [webpack loader—自己写一个按需加载插件](https://juejin.im/post/5b8e3162f265da432f655639)
- [手把手教你撸一个 Webpack Loader](https://juejin.im/post/5a698a316fb9a01c9f5b9ca0)
- [编写自己的 Webpack Loader](https://juejin.im/post/59df06e6f265da430d5701d0)

### 插件

- [编写一个插件](https://webpack.docschina.org/contribute/writing-a-plugin/)
- [干货！撸一个 webpack 插件(内含 tapable 详解+webpack 流程)](https://juejin.im/post/5beb8875e51d455e5c4dd83f)
- [编写自定义 webpack 插件从理解 Tapable 开始](https://juejin.im/post/5dcba29f6fb9a04abb01fd77)

### 文章

- [前端构建秘籍](https://juejin.im/post/5c9075305188252d5c743520)
- [【Cute-Webpack】Webpack4 入门手册（共 18 章）](https://segmentfault.com/a/1190000020063707)
- [Webpack 实用技巧高效实战](https://mp.weixin.qq.com/s?__biz=MzI1NjEwMTM4OA==&mid=2651231994&idx=1&sn=17a344ef74809ddd7e8e5b13b00c5652&scene=1&srcid=0804usmqGwAu6Ih2HtQaeZj4#rd)
- [一步步从零开始用 webpack 搭建一个大型项目](https://juejin.im/post/5de06aa851882572d672c1ad)
- [手写 webpack 核心原理，再也不怕面试官问我 webpack 原理](https://juejin.im/post/5f1a2e226fb9a07eb1525d17)
- [手写一个简易的 Webpack](https://juejin.im/post/5ccfe03f51882541e37e6959)
- [从 0 到 1，手写 webpack 的开发之路](https://juejin.im/post/5e0ae192e51d454165776c7b)
- [带你深度解锁Webpack系列(优化篇)](https://segmentfault.com/a/1190000022205477)
- [聊一聊 webpack 的打包优化实践](https://juejin.cn/post/6844904105031237645)

## 性能与监控

- [quicklink](https://github.com/GoogleChromeLabs/quicklink)(prefetch 视野内的链接)

### 文章

- [悟空活动中台 - H5 活动加载优化](https://mp.weixin.qq.com/s/6gtVR0nVNcZvREjwftZgzA)
- [前端性能优化原理与实践](https://juejin.im/book/5b936540f265da0a9624b04b)
- [GMTC 大前端时代前端监控的最佳实践](https://segmentfault.com/a/1190000015426924)
- [你必须懂的前端性能优化](https://segmentfault.com/a/1190000019897234)
- [前端性能优化不完全手册](https://segmentfault.com/a/1190000018827395)
- [那些你不知道的 meta 标签](https://juejin.im/post/5c288546e51d451a6b51554a)
- [node 实战前端缓存总结](https://juejin.im/post/5ca083eaf265da30bd3e459b)
- [前端异常监控解决方案研究 – 腾讯 CDC](https://juejin.im/entry/5d624d09e51d453bdc41c0ec)
- [从 0 到 1 的前端异常监控项目实战](https://mp.weixin.qq.com/s/Q1KGbkcF-AMWsWN7Ae7E1A)
- [炫技，从 12.67s 到 1.06s 的网站性能优化实战](https://mp.weixin.qq.com/s/sU4Y2pBU659O1vNyZSSX5Q)
- [H5 秒开方案大全](https://www.toutiao.com/a6753544973569753607)
- [撸一个前端监控系统（React + Node + Mysql + Webpack plugin + Docker）—— （上）](https://juejin.im/post/5e3146cce51d453176604809)

### 性能

#### 文章

- [「中高级前端」高性能渲染十万条数据](https://juejin.im/post/5d76f469f265da039a28aff7)
- [2018 前端性能优化清单](https://juejin.im/post/5a966bd16fb9a0635172a50a)
- [Front-End Performance Checklist 2019 [PDF, Apple Pages, MS Word]](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)
- [关于用户访问请求慢,TTFB 时间长的问题分析](https://blog.csdn.net/ankeway/article/details/78669044/)
- [性能优化魔法师：中文字体实践篇](https://juejin.im/post/5e57419f51882549431fef71)

### 监控

#### 开源库

- https://github.com/BetterJS
- https://github.com/iv-web/aegis-report
- https://github.com/RicardoCao-Biker/Front-End-Monitoring
- https://github.com/MriLiuJY/monitorFE
- https://github.com/710leo/urlooker

#### 文章

- [搭建一个前端监控系统,不再错过 BUG](https://juejin.im/post/5a372716518825258a5fbc80)
- [捕获未处理的 Promise 错误方法](https://www.jb51.net/article/125664.htm)
- [前端异常监控、上报及 js 压缩代码定位](https://juejin.im/post/5b55c3495188251acb0cf907)
- [5 分钟撸一个前端性能监控工具](https://juejin.im/post/5b7a50c0e51d4538af60d995)
- [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)
- [从无到有<前端异常监控系统>落地](https://juejin.im/post/5a3dca226fb9a04515441686)
- [轨迹回放（录屏）功能- 前端监控之数据收集篇](https://juejin.im/post/5d3ebe00e51d4561f95ee9b2)
- [前端性能监控新工具 perfume](https://juejin.im/post/5d81f82df265da03ae78ac33)
- [自己动手打造前端性能监控系统](https://www.musicfe.cn/page/17)
- [蚂蚁金服如何把前端性能监控做到极致?](https://www.infoq.cn/article/Dxa8aM44oz*Lukk5Ufhy)
- [DIY 一个前端监控平台（上）](https://juejin.im/post/5c8cd7bd5188257ed47b22fe)
- [手刃前端监控系统](https://juejin.im/post/5bbc2695e51d4539701e7ea6)
- [一步一步搭建前端监控系统：如何监控资源加载错误？](https://juejin.im/post/5d576c9e51882562945d1623)
- [撸一个前端监控系统（React + Node + Mysql + Webpack plugin + Docker）—— （上）](https://juejin.im/post/5e3146cce51d453176604809)

### 常用工具

- [阿里云监控](https://help.aliyun.com/document_detail/58652.html?spm=a2c4g.11174283.3.2.3245668cvlC7WK) (网站性能、错误等监控)
- [growingio](https://www.growingio.com) (网站访问量监控)
- [sentry](https://sentry.io) (错误监控)
- [fundebug](https://www.fundebug.com/?utm_source=random) (错误监控)
- [gtmetrix](https://gtmetrix.com) (网站访问速度)
- [zanePerfor](https://github.com/wangweianger/zanePerfor) (网站访问速度)
- [pingdom](https://www.pingdom.com/) (网站状况监控)

### 开源库

- [hiper \*2k+](https://github.com/pod4g/hiper)

### SEO

- [为什么单页面的 seo 不友好？如何解决这一问题？](https://juejin.im/post/5d9848306fb9a04ddf2c341b)

## 高质文章

- [if 我是前端团队 Leader，怎么制定前端协作规范?](https://juejin.im/post/5d3a7134f265da1b5d57f1ed#heading-44)
- [阿里大佬浅谈大型项目前端架构设计](https://mp.weixin.qq.com/s/8K4b2qLU3SWcADBlpAFtZg)
- [年终回顾，为你汇总一份「前端技术清单」](https://juejin.im/post/5bdfb387e51d452c8e0aa902)
- [8 年前端开发的知识点沉淀(不知道会多少字，一直写下去吧...)](https://juejin.im/post/5d0878aaf265da1b83338f74)
- [fullstack tutorial](https://github.com/frank-lam/fullstack-tutorial)
- [五星推荐的系列文章清单](https://juejin.im/post/5c1f01fef265da61587723f4)
- [端动态化方案详细设计](https://juejin.im/post/5c274d0151882504bd0e80b3)
- [让虚拟 DOM 和 DOM-diff 不再成为你的绊脚石](https://juejin.im/post/5c8e5e4951882545c109ae9c)
- [彻底理清前端单页面应用（SPA）的实现原理 【精读源码】](https://segmentfault.com/a/1190000019936510)
- [原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的](https://juejin.im/post/59c60691518825396f4f71a1)
- [使用 postMessage 解决 iframe 跨域通信问题](https://juejin.im/post/590c3983ac502e006531df11)
- [基于工程经验的『RESTful 接口设计规范』](https://juejin.im/post/5afee0e86fb9a07ab379b371)
- [RESTful API 编写指南](https://juejin.im/post/57d168e9bf22ec005f98a3a5)
- [前端技术栈干货文章链接（精品）](https://zhuanlan.zhihu.com/p/76184208)
- [新时代下前端工程师的推荐书籍和必备知识](https://juejin.im/post/5c7129b0f265da2d9710f7ca)
- [一个全栈增长工程师的练手项目集](https://github.com/phodal/ideabook)
- [一篇文章让你明白你多级缓存的分层架构](https://juejin.im/post/5d86cf7f6fb9a06b211724e7)
- [一文读懂前端缓存](https://juejin.im/post/5c22ee806fb9a049fb43b2c5)
- [看完这篇还不清楚缓存，求你打我 😈（有彩蛋）](https://juejin.im/post/5d9d539ee51d45780f0604fa)
- [GitHub 上有哪些优秀的项目？](https://www.zhihu.com/question/20584141/answer/774922972?hb_wx_block=0)
- [史上最全前端基础进阶系列](https://zhuanlan.zhihu.com/p/82998199)

## 趋势

- [从微前端到智能化：2020 前端开源技术趋势](https://juejin.im/post/5e55ed5fe51d4526c148131c)

### 微前端

- [awesome-microfrontends](https://github.com/abc-club/awesome-microfrontends)
- [一线大厂前端怎么做？百度资深前端工程师，带你手写微前端框架](https://www.toutiao.com/a6753519385958154763)
- [字节跳动的微前端沙盒实践](https://juejin.im/post/5e4941d46fb9a07c8334d3e9)
- [微前端在美团外卖的实践](https://juejin.im/post/5e57b6f0f265da57547794c9)
- [未来魔法校的微前端实践](https://juejin.im/post/5e6a0428e51d4527110a9f61)
- [Berial，一个硬了的微前端框架](https://juejin.im/post/6856170280600109064)

### WebAssembly

- [花椒前端基于 WebAssembly 的 H.265 播放器研发](https://mp.weixin.qq.com/s/cXbanMq93jyx5gCuaP2oTw)

### Serverless

- [serverless](https://github.com/serverless/serverless)
- [Serverless——前端的 3.0 时代](https://zhuanlan.zhihu.com/p/84054729)
- [基于 Serverless 的 VuePress 极简静态网站](https://zhuanlan.zhihu.com/p/110280999)
- [webiny-js](https://github.com/webiny/webiny-js)

### web components

- [w3c webcomponents](https://github.com/w3c/webcomponents)
- [Web Components 是个什么样的东西](https://juejin.im/post/57c40fd3128fe1005fd4629a)
- [Web Components 入门实例教程](http://www.ruanyifeng.com/blog/2019/08/web_components.html)
- [lit-element](https://github.com/polymer/lit-element)(下一代 polymer)
- [polymer](https://github.com/Polymer/polymer)
- [深度介绍：💾 你听说过原生 HTML 组件吗？](https://juejin.im/post/5bc7ead7f265da0afc2c2c6b)
- [[译] 2018 来谈谈 Web Component](https://juejin.im/post/5b780a98e51d4538980bf5cf)
- [JavaScript 是如何工作：Shadow DOM 的内部结构 + 如何编写独立的组件！](https://juejin.im/post/5c4fac7ef265da6147709696)
- [再加 150 行代码教你实现一个低配版的 web component 库](https://segmentfault.com/a/1190000011015980)

### 打包

- [vite](https://github.com/vitejs/vite)
- [snowpack](https://github.com/pikapkg/snowpack)
- [open-wc](https://github.com/open-wc/open-wc)

## 动效

### 工具库

- [可能是最全的前端动效库汇总](https://juejin.im/post/5cc089eae51d456e7d189f9d)

### demo

- [2018 最佳前端动效集锦](https://tympanus.net/codrops/2018/12/27/awesome-demos-from-2018/)

## 可视化

- [数据可视化工具目录](https://datavizcatalogue.com/ZH/)

### 库

- [Echart](https://github.com/apache/incubator-echarts)
- [zrender](https://github.com/ecomfe/zrender)(A lightweight canvas library which providing 2d draw for ECharts)
- [chartjs](https://www.chartjs.org)
- [D3](https://github.com/d3/d3)
- [Highchart](https://github.com/highcharts/highcharts)
- [plotly](https://github.com/plotly/plotly.js)(基于 d3 的 chart 库)
- [zdog](https://github.com/metafizzy/zdog)
- [Leaflet](https://leafletjs.com/examples.html)
- [zeu](https://github.com/shzlw/zeu)
- [SandDance](https://github.com/microsoft/SandDance)(microsoft 出品)

* [Antv](https://github.com/antvis/)
* [recharts](https://github.com/recharts/recharts)
* [BizCharts](https://github.com/alibaba/BizCharts)

- [vue-echarts](https://github.com/ecomfe/vue-echarts)
- [v-charts](https://github.com/ElemeFE/v-charts)

### 开源项目

- [Vue + Koa 从零打造一个 H5 页面可视化编辑器——Quark-h5](https://juejin.im/post/5dc81428e51d4523632ee793)
- [luban-h5](https://github.com/ly525/luban-h5)(类似易企秀的H5制作、建站工具)
- [Vue-Layout](https://github.com/jaweii/Vue-Layout)(vue可视化搭建)
- [h5-Dooring](https://github.com/MrXujiang/h5-Dooring)(react)

### 文章

- [14 个最好的 JavaScript 数据可视化库](https://segmentfault.com/a/1190000018646425)
- [前端必看的数据可视化入门指南](https://segmentfault.com/a/1190000019934874)
- [一步步带你实现 web 全景看房——three.js](https://juejin.im/post/5d57967a6fb9a06b017e4b62)
- [阿里基于 G6 和 React 打造的开源可视化图形编辑器——GGEditor](https://m.toutiaocdn.net/a6730972736664912387)
- [ECharts 实现地图散点图（上）](https://juejin.im/post/58cf43b3128fe1006c9817af)
- [一些好用的开源监控工具汇总](https://mp.weixin.qq.com/s/hUscNc_f9wBohHJTKzlGBw)
- [美团外卖前端可视化界面组装平台 —— 乐高](https://zhuanlan.zhihu.com/p/27288444)
- [页面可视化搭建工具前生今世](https://juejin.im/post/5b0324f4518825426a20008d)
- [可视化搭建前端工程 - 阿里飞冰了解一下](https://juejin.im/post/5b6349716fb9a04f834669d6)
- [前端工程实践之可视化搭建系统（一）](https://juejin.im/post/5d8774bff265da03ae78b2a1)
- [【第 1282 期】页面可视化搭建工具前生今世](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==)
- [【第 1524 期】页面可视化搭建工具技术要点](https://mp.weixin.qq.com/s/90JJAFhGokKmicOQZxdAGg)
- [几个开源的自定义表单设计器源码，推荐给需要的人](https://www.toutiao.com/a6756932532094108174)
- [看似复杂炫酷的数据可视化设计，用这波神器轻松搞定](https://www.toutiao.com/a6733161074633212428)
- [H5DS 编辑器技术解析](https://mp.weixin.qq.com/s/Z48FdbtM7D03gFoaE61swg)
- [[第 1 期] H5 海报生成 核心原理解析](https://mp.weixin.qq.com/s/wpSYdWmYYxd-Qyib-tOJvA)
- [一篇文章彻底搞定富文本原理 + 实战](https://mp.weixin.qq.com/s/kmqT6x-59vkHMdPa8vY4tQ)


微软power apps
google app maker
阿里妈妈创意中心
云凤蝶
imgcook
飞冰


## 数据结构与算法

### 算法

#### 官网

- [leetcode](https://leetcode.com/)
- [leetcode 中国](https://leetcode-cn.com)

#### 文章

- [优秀程序员都应该学习的数据结构与算法项目（GitHub 开源清单）](https://zhuanlan.zhihu.com/p/74584796)
- [labuladong 的算法小抄](https://labuladong.gitbook.io/algo/)
- [数据结构与算法（三）—— 常见排序算法和 swift 实现](https://juejin.im/post/5c46b05d51882524a23f3a12)
- [大家都是如何刷 LeetCode 的？](https://www.zhihu.com/question/280279208)
- [程序员必须掌握哪些算法？](https://www.zhihu.com/question/23148377/answer/820437568?hb_wx_block=0)
- [怎么学好数据结构？](https://www.zhihu.com/question/19830721/answer/667233164?hb_wx_block=0)
- [(1.8w 字)负重前行，前端工程师如何系统练习数据结构和算法？【上】](https://juejin.im/post/5e2f88156fb9a02fdd38a184)
- [一份我转行数据分析时候的学习清单](https://zhuanlan.zhihu.com/p/111519808)

#### 开源库

- [和小浩学算法](https://github.com/geekxh/hello-algorithm)
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)
- [leetcode](https://github.com/azl397985856/leetcode)
- [LeetCodeAnimation \*39k+](https://github.com/MisterBooo/LeetCodeAnimation)
- [algorithm-visualizer](https://github.com/algorithm-visualizer/algorithm-visualizer)
- [Algorithm_Interview_Notes-Chinese](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)
- [JavaScriptAlgorithms](https://github.com/vJechsmayr/JavaScriptAlgorithms)(算法 js 实现)
- [fucking-algorithm](https://github.com/labuladong/fucking-algorithm)

### 机器学习

- [tfjs](https://github.com/tensorflow/tfjs)(tensorflow.js)
- [pipcook](https://github.com/alibaba/pipcook)(基于 tfjs-node 的前端算法工程框架)
- [一文看尽 TensorFlow“奋斗史”！| CSDN 博文精选](https://mp.weixin.qq.com/s/iQ8azTcyW4oJLSacJ84w-g)
- [tensorflow 中文](https://tensorflow.google.cn/)
- [TensorFlow 如何入门，如何快速学习？](https://www.zhihu.com/question/49909565/answer/807076121)
- [前端如何学习机器学习之 TensorFlow.js](https://juejin.im/post/5b971b295188255c581a8ff0)
- [DeepLearning-500-questions](https://github.com/scutan90/DeepLearning-500-questions)(深度学习 500 问)
- [斯坦福机器学习 CS229 课程讲义的中文翻译](https://github.com/Kivy-CN/Stanford-CS-229-CN)
- [吴恩达《Machine Learning Yearning》完整中文版开源](https://www.toutiao.com/a6747535039598166531)

#### 项目

- [christmas-hat](https://github.com/hk029/christmas-hat)
- [goddess-hat](https://github.com/shenghanqin/goddess-hat)

## js-core

### 库

- [QuickJS](https://github.com/quickjs-zh/QuickJS)

### 文章

- [JavaScriptCore 全面解析](https://juejin.im/post/5c46ecec6fb9a049d1327821)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
- [你不知道的浏览器页面渲染机制](https://juejin.im/post/5ca0c0abe51d4553a942c17d)
- [JavaScript 引擎是如何工作的？从调用栈到 Promise 你需要知道的一切](https://segmentfault.com/a/1190000019205065)

## 代码规范

- [前端小纠结--集成 gitflow 和 standard-version 使用](https://juejin.im/post/6844903847924596743)
- [前端团队代码评审 CheckList 清单](https://juejin.im/post/5d1c6550518825330a3bfa01)
- [【译】Google 官方文章——如何去做 coder review](https://juejin.im/post/5d84b93f5188251d482413c8)
- [如何保证前端项目代码质量](https://zhuanlan.zhihu.com/p/82546272)
- [前端规范](http://ku.zzfriend.com/yanshi/qianduanguifan/)
- [作为 CTO，我为什么必须要求代码进行 Code Review](https://www.toutiao.com/a6739679493524308487)
- [Git 进阶：如何提交标准化的 Git Commit Message](https://www.toutiao.com/a6740794433769308684)
- [让你的 commit 更有价值(规范)](https://mp.weixin.qq.com/s/PscfzgKYV7vK1ESQ-XVWpA)
- [Git 在团队中的最佳实践--如何正确使用 Git Flow](https://www.cnblogs.com/cnblogsfans/p/5075073.html)

- [解决 vscode eslint 与 prettier 冲突 - 知乎](https://zhuanlan.zhihu.com/p/101241781?from_voters_page=true)
- [sonarqube](https://www.sonarqube.org/)(代码检查)
- [字节研发设施下的 Git 工作流](https://juejin.im/post/6875874533228838925)
- [Introduction to GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)

## canvas

### 开源项目

- [spritejs](https://github.com/spritejs/spritejs) (Draw graphics on a canvas through DOM-like APIs. Vue & React/Preact supported. )

## 测试

#### 文章

- [javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [2018 前端自动化测试综述 [英]](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
- [2019 前端自动化测试综述 [英]](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a)
- [测试你的前端代码（介绍篇）[英]](https://hackernoon.com/testing-your-frontend-code-part-i-introduction-7e307eac4446)
- [万字长文总结前端测试体系建设与最佳实践](https://mp.weixin.qq.com/s?__biz=MzI5MjYyODYyNQ==&mid=2247483987&idx=1&sn=132aea5d5185a1e4fa2fab5037a2fb3e)
- [花椒测试平台 - 接口篇](https://mp.weixin.qq.com/s/xDwEv8r_RfJ99CSir3kCfg)
- [浅谈前端单元测试](https://juejin.im/post/5b2da89cf265da597f1c7cab)
- [从 0 到 1 构建美团压测工具](https://tech.meituan.com/2016/01/08/loading-test.html)

### 单元测试

测试框架：

- 推荐 jest,功能比较完善，包含断言(facebook 开发)
- mocha + chai/expect
- karma + mocha + chai

用 sinonjs 生成函数

站在程序员的角度测试
unit 测试是把代码看成是一个个的组件。从而实现每一个组件的单独测试，测试内容主要是组件内每一个函数的返回结果是不是和期望值一样。

#### 库

- [jest](https://github.com/facebook/jest)(推荐)
- [karma](https://github.com/karma-runner/karma)(Spectacular Test Runner for JavaScript )
- [mocha](https://github.com/mochajs/mocha)(simple, flexible, fun javascript test framework for node.js & the browser)
- [enzyme](https://github.com/airbnb/enzyme/)(JavaScript Testing utilities for React )
- [vue-test-utils](https://vue-test-utils.vuejs.org/)(JavaScript Testing utilities for vue )
- [sinonjs](https://sinonjs.org/)(模拟生成函数)

#### 文章

### e2e 测试

站在用户角度的测试
e2e 测试是把我们的程序堪称是一个黑盒子，我不懂你内部是怎么实现的，我只负责打开浏览器，把测试内容在页面上输入一遍，看是不是我想要得到的结果。

#### 库

- [cypress](https://github.com/cypress-io/cypress)
- [nightwatch](https://github.com/nightwatchjs/nightwatch)
- [puppeteer](https://github.com/GoogleChrome/puppeteer)(Headless Chrome Node API )
- [Macaca](https://github.com/alibaba/macaca)
- [appium](http://appium.io/)(app 测试)
- [Selenium](https://docs.seleniumhq.org/)

#### 文章

- [端到端测试哪家强？不容错过的 Cypress](https://segmentfault.com/a/1190000014907041)
- [Puppeteer E2E 测试入门](https://juejin.im/post/5bffb344e51d45378d0d39f4)
- [大前端神器安利之 Puppeteer](https://www.jeffjade.com/2017/12/17/134-kinds-of-toss-using-puppeteer/)

### 视觉回归测试

简单来说就是测试应用整体界面是否达到了 UI 设计图的要求。

#### 库

- [hermione](https://github.com/gemini-testing/hermione)
- [PhantomCSS](https://github.com/HuddleEng/PhantomCSS)(archived)
- [gemini](https://github.com/gemini-testing/gemini)(DEPRECATED)

### 性能测试

Chrome DevTools

- [脱离 996，Chrome DevTools 面板全攻略！！！](https://juejin.im/post/5f1542e16fb9a07e6f7b80fe)
- [vivo 快应用归档](https://quickapp.vivo.com.cn/archives)
- [快应用 IDE 定制 Devtools 元素面板系列一：背景需求及方案分析](https://quickapp.vivo.com.cn/quickapp-ide-customize-devtools-element-panel-series-1/)
- [devtools-frontend/wiki](https://github.com/ChromeDevTools/devtools-frontend/wiki)
- [devtools-protocol/](https://chromedevtools.github.io/devtools-protocol/)
- [chrome-devtools](https://developers.google.com/web/tools/chrome-devtools)
- [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)
- [Chrome DevTools 远程调试协议分析及实战](https://blog.csdn.net/LuckyWinty/article/details/105743305)
- [Web 调试技术详解](https://juejin.im/post/5cbe60fd6fb9a0324b27bda2)

### api 测试

#### 库

- [去哪儿 yapi](https://github.com/ymfe/yapi)(支持接口文档、mock 和 api 自动化测试):100:
  - [接口文档](https://hellosean1025.github.io/yapi/documents/index.html)
  - [Json Schema 快速入门](https://www.jianshu.com/p/8278eb2458c4?winzoom=1)
  - [【GitHub 项目推荐｜ YApi 打通前后端及 QA 可视化接口管理平台｜神级项目】](https://m.toutiaocdn.com/a6731281999819964935)
- [rap2](http://rap2.taobao.org)
- [swagger](https://swagger.io/)(https://swagger.io/)(https://github.com/swagger-api)
- [丁香园 api-mocker \*998](https://github.com/DXY-F2E/api-mocker)
- [大搜车 Easy-Mock \*6k+](https://github.com/easy-mock/easy-mock)
- [APIJSON](https://github.com/APIJSON/APIJSON)(后端接口和文档自动化)
- [mockjs](http://mockjs.com/)

#### 文章

- [去哪儿 Api 自动化测试实践](https://juejin.im/post/5a388892f265da430e4f4681)
- [使用 YApi 管理 API 文档，测试， mock](https://juejin.im/post/5acc879f6fb9a028c42e8822#heading-0)
- [YApi 新版如何查看 http 请求数据](https://juejin.im/post/5c888a3e5188257dee0322af)
- [自动更新 Swagger 接口数据到 YApi 平台](https://juejin.im/post/5af500e251882567096140dd)
- [Jenkins+postman+newman 之 API 全自动化测试](https://blog.csdn.net/wanglin_lin/article/details/51959342)
- [Postman 调试技巧之接口签名](https://juejin.im/post/5b4579a0e51d4519133f7e28)
- [丁香园开源接口管理系统 - API Mocker](https://juejin.im/post/59bba3c0f265da067374bd1f)
- [Swagger 从入门到精通](https://huangwenchao.gitbooks.io/swagger/content/)
- [Swagger 与其他 API 文档编写工具对比](https://haofly.net/swagger/)

#### 自动化

- [Auto.js](https://github.com/hyb1996/Auto.js)(安卓平台上的 JavaScript 自动化工具)
- [taobaoVisitingVenues](https://github.com/sleepybear1113/taobaoVisitingVenues)(双十一活动自动化地操作淘宝浏览店铺得喵币脚本 for Android)
- [travis-ci](https://www.travis-ci.org/)(自动触发 GitHub 项目测试)

## 网络请求

- [axios 中文文档翻译](https://segmentfault.com/a/1190000008470355)
- [封装 axios 拦截器实现用户无感刷新 access_token](https://juejin.im/post/5f1ba98ae51d4534b73a9d7a)

## pwa

- [progressive-web-apps](https://web.dev/progressive-web-apps/)
- [饿了么的 PWA 升级实践](https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/)

## 其他必备知识

- [前端开发者必备的 Nginx 知识](https://juejin.im/post/5c85a64d6fb9a04a0e2e038c)
- [多站点单点登录实现方案](https://juejin.im/post/5d04d946f265da1b9163915a)
- [github 开发官方文档](https://developer.github.com/v3/)
- [【10 个基于 JavaScript 的机器学习实例】](https://m.toutiaocdn.net/a6730835071474860547)
- [中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)
- [一文看懂：网址，URL，域名，IP 地址，DNS，域名解析](https://www.toutiao.com/a6751517219382886925)
- [87 个前端必备开发网站](https://zhuanlan.zhihu.com/p/86777413)
- [前端开发的历史和趋势](https://www.toutiao.com/a6748272721014030862)
- [什么是 SEO](https://mp.weixin.qq.com/s/rGSNZDzhtQL87wm1hzeHxg)
  ![](ASSETS/IMAGES/imgs/seo.png)

### 常用技术

- [face++](https://www.faceplusplus.com.cn)(人脸识别)
- 前端物料中台
  - [飞冰](https://ice.work/)
  - [lugia](https://zhuanlan.zhihu.com/p/77255855)
  - [前端物料中台建设](https://juejin.im/post/5d5b542e6fb9a06acb3ea2b0)

## git

## 安全

- [我知道的跨域与安全](https://juejin.im/post/5a6320d56fb9a01cb64ee191)
- [前端安全知识](https://juejin.im/post/59dc2b7a6fb9a0451869ae3a)

## 框架

### 编译器 compiler

- [js-code-to-svg-flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart)
- [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

### AST

- [平庸前端码农之蜕变 — AST](https://juejin.im/post/5bfc21d2e51d4544313df666)
- [从 babel 讲到 AST](https://juejin.im/post/5ab35c3cf265da23771951a2)
- [AST 与前端工程化实战](https://juejin.im/post/5d50d1d9f265da03aa25607b)
- [高级前端基础-JavaScript 抽象语法树 AST](https://juejin.im/post/5c8d3c48f265da2d8763bdaf)
- [astexplorer](https://astexplorer.net/)
- [面试官: 你了解过 Babel 吗？写过 Babel 插件吗? 答: 没有。卒](https://juejin.im/post/5a9315e46fb9a0633a711f25)
- [动态模板生成小技巧](https://mp.weixin.qq.com/s/Yd7WNO8Ix8CaOM2APoeUgg)
- [plopjs](https://plopjs.com/documentation/)
- 
#### html

- [htmlparser2](https://github.com/fb55/htmlparser2)

### 数据响应式

- [observable-membrane](https://github.com/salesforce/observable-membrane)(vue3 proxy 机制)

### 框架

- [cyclejs](https://github.com/cyclejs/cyclejs/)
- [functional-frontend-architecture](https://github.com/paldepind/functional-frontend-architecture)

## jquery

### ui 框架

- []
- [semantic-ui](https://github.com/semantic-org/semantic-ui/)

## 学习网站

- [frontendmasters](https://frontendmasters.com)(各种大牛视频 英文)

## 架构

- [前端架构-让重构不那么痛苦（译）](https://juejin.im/post/5d849084e51d456206115acb)(推荐！！！)
- [基于 React 的 PC 网站前端架构分析](https://juejin.im/post/5bc336c26fb9a05cd24dbd03)
- [大型项目前端架构浅谈（8000 字原创）](https://juejin.im/post/5cea1f705188250640005472)
- [十年•杭研技术秀 | 网易蜂巢的工业化前端架构](https://mp.weixin.qq.com/s/d0OF4IflXqYs6NJZk2kW0A?)
- [阿里 9 年，我总结的前端架构演进 3 大阶段及团队管理心法](https://mp.weixin.qq.com/s/PK5eaBnSg0fG1RvPsbeJwQ)
- [【第 1399 期】美菜无线前端架构模型 2018](https://mp.weixin.qq.com/s/2IjsJZY78FQcOdTI5JC7ow)
- [前端插拔式 SPA 应用架构实现方案](https://juejin.im/post/5b768ffce51d45666f799ba2)

## 工程化

- [喜大普奔，Pont 1.0 发布了](https://juejin.im/post/5e82e7f1518825738a5ac1f3)(前后端数据服务层解决方案)
- [为什么你在辛苦做项目国际化，而别人在喝茶？](https://juejin.im/post/5e7c6ce051882535e07a3d0f)(国际化全流程解决方案)
- [研发效能提升和敏捷实施 36 计 资料合集](https://developer.aliyun.com/article/715161)

## 值得注意的库

- [hyperapp](https://github.com/jorgebucaran/hyperapp)(类似 react vue)

* [开发者手册](https://cloud.tencent.com/developer/doc/1070)

## 效率
- [【告别复制粘贴】动态模板生成小技巧](https://mp.weixin.qq.com/s/Yd7WNO8Ix8CaOM2APoeUgg)
- [bit](https://github.com/teambit/bit)(搭建组件平台)

[↑ 返回目录 ↑](#目录)

## 什么是YApi

github: https://github.com/YMFE/yapi


官网上是这么介绍的：YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台 https://hellosean1025.github.io/yapi

可以这么说YApi兼具swagger,rap2,postman的各项优点


## why YApi

如果你想要一个好用的接口管理平台，那么你需要YApi或swagger。YApi支持各种数据导入，实现无缝迁移。

如果你想mock接口，那么你需要YApi或rap2。

如果你想做接口自动化测试，那么你需要YApi或postman。

如果你担心数据放在其他平台不安全，那么你也需要YApi。YApi支持本地化部署。

此外，YApi还有很多特性。

这么优秀，难道你还不准备用吗？

## YApi有哪些功能特性

* 可视化接口管理
* 数据mock
* 自动化接口测试
* 数据导入（各种，包括swagger、har、postman、json、命令行）
* 权限管理
* 支持本地化部署
* 支持插件
* 支持二次开发

## 内网部署

如果只想先看看，可以跳过此节，直接使用官方demo http://yapi.demo.qunar.com/

这里需要您的环境满足

* nodejs（7.6+)
* mongodb（2.6+）
* git

使用yapi-cli 工具，部署 YApi 平台是非常容易的。执行 yapi server 启动可视化部署程序，输入相应的配置和点击开始部署，就能完成整个网站的部署。部署完成之后，可按照提示信息，执行 node/{网站路径/server/app.js} 启动服务器。在浏览器打开指定url, 点击登录输入您刚才设置的管理员邮箱，默认密码为 ymfe.org 登录系统（默认密码可在个人中心修改）。


**不想看字，没关系，直接在命令行输入一下命令,接着按提示一步步就可以了**



```
npm install -g yapi-cli --registry https://registry.npmmirror.com
yapi server

```
👇看截图


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd896a6086fead?w=1140&h=904&f=png&s=382959)

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd895f43747279?w=3328&h=1750&f=png&s=252550)


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd897be9ff0fd9?w=3356&h=1980&f=png&s=899254)

我们按照提示进入安装目录，后执行以下命令

```
node vendors/server/app.js
```

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd89cf29d878a0?w=1140&h=904&f=png&s=327445)

然后打开 http://localhost:3000/, 可以看到跟官方demo一样的界面。


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd89db9aad6624?w=3358&h=2012&f=png&s=2936884)

至此，我们已经本地部署好服务里。🍺

## 可视化的接口管理

接口管理页面包括预览、编辑、运行和高级mock,这样看是不是很清爽😬

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8b3bd6fb164e?w=3360&h=2100&f=png&s=677100)

## 数据导入

yapi支持swagger、HAR、postman、json、命令行五种导入

这里以HAR为例: 我们先打开开发者工具，然后打开一个网站：如 美团外卖 https://h5.waimai.meituan.com/waimai/mindex/home

如图：点击下载

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8bceb42dc43a?w=3360&h=2100&f=png&s=1068470)

接下来，如图


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8be9a1cacc84?w=3360&h=2100&f=png&s=434092)

导入成功后，我们就多了几个接口了，是不是很完美 😁


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8bf18c1b2d85?w=3360&h=2100&f=png&s=560666)


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8bf9905fa1ab?w=3360&h=2100&f=png&s=517985)


## 数据mock

yapi的mock包括很多种

### mock请求参数和返回参数


如图yapi提供给我们两种mock参数的形式

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8c3070d17905?w=2572&h=808&f=png&s=103728)

这里我们把image mock成图片


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8c4c8260b376?w=3360&h=2100&f=png&s=472533)

点击上图链接


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8c51fe9d3fda?w=1106&h=402&f=png&s=36873)

这里我们成功mock了一个接口

想想是不是经常遇到后端接口没有ready的情况，现在有了yapi是不是一切都迎刃而解了呢🤔

想了解更多，请查看官方文档 https://hellosean1025.github.io/yapi/documents/mock.html#%E6%96%B9%E5%BC%8F1.-mockjs


### 高级mock

点击高级mock，这里我们加了一个字段

![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8c86344b4625?w=3360&h=2100&f=png&s=466708)

现在来试试看吧


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8c9404549c18?w=898&h=410&f=png&s=41233)

是不是很爽？

### 全局mock脚本


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8cf87c0485ac?w=3360&h=2100&f=png&s=370585)

## 自动化接口测试

这里我们用cnode为例，接口1：/topics  接口2：/topic/:id, 其中接口2中的id由接口1返回

添加一个叫cnode的项目，注意设置好域名


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8ea013a4c948?w=3360&h=2100&f=png&s=465336)

再导入两个cnode接口


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8ebce5563adf?w=3360&h=2100&f=png&s=498578)

运行，没有问题


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8ecf0bcc6255?w=3360&h=2100&f=png&s=686252)

下面👇是重点


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8ee757eb085a?w=3360&h=2100&f=png&s=396175)


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8ef27927b6de?w=3360&h=2100&f=png&s=430725)


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8f00ed9e8352?w=3360&h=2100&f=png&s=420636)

下面开始关联两个接口，即从接口1返回的数据中获取id,并赋值给接口2的参数


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8f3632b22cbe?w=3360&h=2100&f=png&s=416677)


![](https://user-gold-cdn.xitu.io/2019/8/28/16cd8f4444c5a2e7?w=3360&h=2100&f=png&s=488570)

点击更新


![](https://user-gold-cdn.xitu.io/2019/8/29/16cd8f4c76680555?w=3360&h=2100&f=png&s=423552)

开始测试或者服务端测试

![](https://user-gold-cdn.xitu.io/2019/8/29/16cd8f609a2111db?w=3360&h=2100&f=png&s=450366)

状态pass,查看测试报告

![](https://user-gold-cdn.xitu.io/2019/8/29/16cd8f6f9a4194ba?w=3360&h=2100&f=png&s=439266)

![](https://user-gold-cdn.xitu.io/2019/8/29/16cd8f79d04237ee?w=3360&h=2100&f=png&s=392757)



今天就介绍到这里。


更多文章请关注 https://github.com/abc-club/js-paradise

喜欢请star

喜欢请star

喜欢请star

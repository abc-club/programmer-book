- mac 关闭端口：

```
sudo lsof -i :8100
sudo kill -9 8100
```

- npm 清理缓存

```
npm cache clean -f
```

- - 控制台输出到 txt

```
C:\你输入的命令 >output.txt
```

- [Mac Chrome 浏览器取消自动升级（看这一篇就够了）](https://blog.csdn.net/chenyufeng1991/article/details/78568919)

## 翻墙

- [翻墙-科学上网 ](https://github.com/bannedbook/fanqiang)
- [一键脚本搭建 SSR 服务器教程 ](https://github.com/xiaoming2028/FreeNetwork/wiki)

## mac 调试 ios 手机上的移动端页面

第一步：打开 iphone 手机的开发者模式，流程是：【设置】->【Safari】->【高级】->开启【Web 检查器】

第二步：打开 Mac 上 Safari 的开发者模式，流程是【Safari】->【偏好设置】->【高级】->【在菜单栏中显示“开发”菜单】勾选

第三步：用数据线将 iphone 手机和 mac 连接起来，在电脑的 safari 中按照流程执行：【开发】->【手机名称】->【正在调试的网站】

- [MAC 自动加载.bash_profile 文件通过.zshrc](https://blog.csdn.net/YaphetZhao/article/details/88027831)

- [在 Github Pages 上将子目录设置为网站根目录(Set subdirectory as website root on Github Pages)](http://www.it1352.com/798173.html)

```
git subtree push --prefix .vuepress/dist origin gh-pages
```

- [解决从 github 上拉取代码慢的问题](https://blog.csdn.net/yyou33459/article/details/84947819)
- [Linux/Mac/Windows-刷新 DNS 的方法](https://baijiahao.baidu.com/s?id=1616353495084098905&wfr=spider&for=pc)

* 生成图片 https://shields.io/ https://github.com/badges/shields

```
* []()  ![Github stars](https://img.shields.io/github/stars/Snailclimb/JavaGuide.svg)
```

npm link 不用安装依赖

mac 录屏 使用 qq 提供的录屏工具 ctrl+command+r,或者 quicktime

## 备份公司邮箱邮件

### 查询企业邮箱的 POP、SMTP、IMAP 服务器地址设置

https://qiye.163.com/help/client-profile.html

### 如何将 outlook 邮件保存到本地

https://zhidao.baidu.com/question/1604321182206045747.html

### 如何查看 fps

如果你用的是 Chrome，只需几步，快速测试性能：

打开开发者工具
按 Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux) 来打开命令菜单
输入 render，下拉框中选择 Show Rendering。
点击 render 页签，FPS Meter 前打钩。
滚动列表

### ssh

- [每天都在用 SSH，你知道 SSH 的原理吗？](https://juejin.im/post/5e4e30dfe51d4527107c8835)
- [SSH 协议基本原理及 wireshark 抓包分析](https://juejin.im/post/5baaf517e51d453df0442dce)

使用`ssh-keygen`生成私钥`id_rsa`和公钥`id_rsa.pub`(目录为`~/.ssh`)

把`id_rsa.pub`放到服务器（或 github）上

TODO:不明白 session key 是什么时候生成的

1. ssh 到服务器
2. 服务器会用`公钥`加密一段信息，
3. 如果我们的电脑能用`私钥`解密出来，然后再用`session key`加密返回给服务器，
4. 服务器用`session key`解密后发现是自己原来发送的信息那么就建立连接，此后的信息都用`session key`加密传送

#### github 增加 ssh 的方法

在.ssh 目录下

1. ssh-keygen -t rsa -C "youremail@example.com"
2. ssh-add ~/.ssh/id_rsa
3. 复制.pub 到 GitHub

## 服务器相关

- [腾讯云实现全站 HTTPS 方案](https://cloud.tencent.com/document/product/400/6813)

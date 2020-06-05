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
npm publish 个人不允许发布@xxx/yyy这种名字的包  要加 `npm publish --access public`, 这里的xxx还必须和我们的用户名相同



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
- [Mac 使用 ssh 公钥登录 Linux](https://segmentfault.com/a/1190000015369885)

生成证书
// openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout 密钥.pem -out 证书.pem

使用`ssh-keygen`生成私钥`id_rsa`和公钥`id_rsa.pub`(目录为`~/.ssh`)

把`id_rsa.pub`放到服务器（或 github）上

TODO:不明白 session key 是什么时候生成的

1. ssh 到服务器
2. 服务器会用`公钥`加密一段信息，
3. 如果我们的电脑能用`私钥`解密出来，然后再用`session key`加密返回给服务器，
4. 服务器用`session key`解密后发现是自己原来发送的信息那么就建立连接，此后的信息都用`session key`加密传送

// 未免密的情况

1. ssh 到服务器
2. 服务器发来 Host Key，
3. 我们确认
4. 服务器与我们协商生成`session key`（用 DH 算法）
5. 服务器要求我们输入密码
6. 我们输入密码，用`session key`加密发给服务器
7. 服务器用`session key`解密后，发现密码正确，允许登录
8. 此后我们与服务器之间的所有消息都通过`session key`加密

// 免密登录

1. ssh 到服务器，我们用 Private Key 生成签名向服务器发起登录请求
2. 服务端验证签名，检查自己有没有和这个签名匹配的 Public Key，如果有，则进入下一步。
3. 服务端生成一串随机字符串，用 Public Key 加密后发送给客户端
4. 客户端用相应的 Private Key 解密这串字符串，再使用 MD5 hash 和 Session Key 加密该字符串，将结果发送给服务端。
5. 服务端使用同样的 MD5 hash 和 Session Key 计算这串字符的加密结果，并和客户端发来的结果做比对，如果结果一样，则允许客户端登录。

#### github 增加 ssh 的方法

在.ssh 目录下

1. ssh-keygen -t rsa -C "youremail@example.com"
2. ssh-add ~/.ssh/id_rsa
3. 复制.pub 到 GitHub

## 服务器相关

- [腾讯云实现全站 HTTPS 方案](https://cloud.tencent.com/document/product/400/6813)

## charles 抓不到包的原因

可能是以下原因

1. 没勾选 Proxy -> macOS Proxy，勾选上 macOS Proxy
2. 浏览器装的插件拦截了
3. 不支持对应的协议，如 https http2 等需要另外配置

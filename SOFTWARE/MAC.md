# 装机软件

* [干货满满！推介几款 Mac 下非常好用的软件（第一弹）](https://juejin.im/post/5de664e5f265da33b82bcfce)

## 常用

1.  谷歌浏览器 √
3.  foxmail √
4.  qq 微信 √
5.  网易云音乐 √
6.  teamviewer √
7.  番茄土豆 √
8.  MPlayerX √
9.  迅雷 √
10. ps
11. wps √
12. TightVNC
13. 搜狗输入法 √
14. gitbook
15. iThoughtsX
* [Alfred](https://www.jianshu.com/p/6d08c95b7f36)

* BetterZip
* AppZapper
* shotcat 键盘操作
* elmedia 倍速播放器
* paragon ntfs for mac 移动硬盘识别软件
* 全能解压
* Handshaker(mac与Android文件互传)
* [mos for mac](https://mac.softpedia.com/get/System-Utilities/Mos.shtml#download)(让第三方鼠标滚轮丝滑顺畅)

## 办公软件
* [drawio](https://github.com/jgraph/drawio-desktop/releases)(画各种图)



## 开发

### 开发环境

1.  homebrew http://brew.sh/ √
1.  iTerm2   https://juejin.im/post/5d480e5ee51d4561f64a07b1 [mac下终端iTerm2配置](https://www.jianshu.com/p/bb630ada1f02)   [Mac版iterm2如何设置热键悬浮窗口](https://jingyan.baidu.com/article/154b46313fee0e28ca8f41ad.html)  [Mac上iterm2分屏切换](https://www.jianshu.com/p/4a27bb4c216c)
2.  Zsh
3.  git √
4.  nvm √ 一定要比 node 先安装
5.  nrm √
6.  node npm yarn √
7.  arc
8.  java √
9.  python 2.7.13 √
10. ruby √
11. php -> vs studio 2017 要修改 php.ini 参考 http://blog.csdn.net/rilyu/article/details/37379873 √
12. switchhosts
13. oh-my-zsh https://github.com/robbyrussell/oh-my-zsh


#### 脚手架

1.  hexo-cli √
2.  weex-toolkit √
3. tree  brew install tree

### 开发软件

1.  gitkraken √
2.  sourcetree √  [source tree图谱和多分支开发 - 简书](https://www.jianshu.com/p/0e64ad60899e)
3.  vscode √
4.  cmder √
5.  git bash √
6.  mongodb √
7.  Robomongo 0.9.0-RC9 √
8.  virtual box
9.  webstorm
10. RedisDesktopManager
11. android studio
12. Charles
13. Genymotion
14. mysql-workbench
15. sublimeText √
16. notepad++ √
17. TortoiseSVN
18. atom
19. mysql 官网下载安装，在系统偏好设置启动 https://www.cnblogs.com/nickchen121/p/11145123.html   [mysql提示The server quit without updating PID file /usr/local/mysql/data/localhost.localdomain.pid](https://blog.csdn.net/zhou75771217/article/details/82893997)
20. IntelliJ IDEA 2017.1.2
21.



### mac 使用

文本编辑快捷键 http://www.cnblogs.com/wangfenjin/archive/2012/09/06/2672871.html

键盘快捷键
Mission Control Ctrl ＋ 上应用程序窗口 Ctrl ＋ 下切换工作空间 Ctrl ＋ 左/右显示桌面 F11
显示 DashBoard F12
切换窗口 command ＋ tab
最小化窗口有快捷键（Cmd+M）

### 安装教程

#### arcanist

https://secure.phabricator.com/book/phabricator/article/arcanist/#installing-arcanist

#### 安装 ssh

https://help.github.com/articles/connecting-to-github-with-ssh/

#### mac美化终端

* [(效率工具)程序员必备终端及美化](https://www.jianshu.com/p/c929dc4c0f05)


### 问题

#### CocoaPods not working in macOS High Sierra

* sudo gem update --system
  sudo gem install -n /usr/local/bin cocoapods

pod install

#### pod install 安装失败

xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

https://www.jianshu.com/p/07a281ff57d3

#### 把 PHP 设为全局 path

php: command not found 命令找不到
export PATH=$PATH:/usr/local/PHP/bin

#### Mac系统如何显示隐藏文件
在终端中输代码`defaults write com.apple.finder AppleShowAllFiles -boolean true;killall Finder`即可显示隐藏文件。
https://jingyan.baidu.com/article/e8cdb32beec90337052bad89.html
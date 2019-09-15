# 装机软件

## 常用
1. 谷歌浏览器 √
13. 搜狗输入法 √
4. qq 微信 √
9. 迅雷 √
11. wps √

## 开发

### 开发环境 
2. git √  sudo apt-get install git
1. vim √ 
1. nvm √ 一定要比node先安装  http://blog.csdn.net/minchina91/article/details/40260263
1. nrm √ cnpm
2. node npm yarn √
3. arc
4. java √
5. python 2.7.13 √
6. ruby √
7. php -> vs studio 2017 要修改php.ini 参考 http://blog.csdn.net/rilyu/article/details/37379873 √ 

#### 脚手架
1. hexo-cli √
2. weex-toolkit √
3. 





### 开发软件

1. gitkraken √
2. sourcetree √
3. vscode √
5. git bash √
6. mongodb √
7. Robomongo 0.9.0-RC9 √
8. virtual box
9. webstorm
10. RedisDesktopManager
11. android studio
12. Charles
13. Genymotion
14. mysql-workbench
15. sublimeText √
16. notepad++ √
17. TortoiseSVN
18. atom
19. mysql
20. IntelliJ IDEA 2017.1.2
21. 


http://blog.csdn.net/shidaping/article/details/52218278
http://blog.csdn.net/tao_627/article/details/52635691

安装谷歌浏览器
https://jingyan.baidu.com/article/335530da98061b19cb41c31d.html

安装微信
http://blog.csdn.net/ch593030323/article/details/53571807

<!--more-->
### 安装增强功能
http://blog.csdn.net/golden1314521/article/details/45500843

安装搜狗输入法
http://blog.csdn.net/ljheee/article/details/52966456



安装qq(2017版)
http://blog.csdn.net/xs18952904/article/details/74931089?locationNum=2&fps=1
http://blog.csdn.net/ysy950803/article/details/52958538


安装迅雷
http://blog.csdn.net/zhuyucheng123/article/details/51147550

登录激活就可以使用了

安装mongodb
http://blog.csdn.net/flyfish111222/article/details/51886787
http://www.cnblogs.com/weschen/p/7395667.html（选择此方法）
```
sudo apt-get install mongodb // 安装mongodb
service mongodb start
service mongodb stop
```
```
sudo systemctl enable mongod    //设置开机启动mongodb服务
sudo service mongod start   //启动服务
systemctl status mongod

```

- MongoError: Authentication failed.
http://cnodejs.org/topic/5617d80941ceb58c4f8e6e37



安装robomongo
http://blog.csdn.net/cristal_tina/article/details/53634209


安装gitbook
http://blog.csdn.net/qq_26437925/article/details/52959733?locationNum=8&fps=1

安装webstorm
http://www.linuxidc.com/Linux/2017-08/146059.htm


安装wps
**下载地址**   
 http://wps-community.org/download.html
**字体缺失下载地址**

启动WPS for Linux后，出现提示"系统缺失字体" 。

出现提示的原因是因为WPS for Linux没有自带windows的字体，只要在Linux系统中加载字体即可。

具体操作步骤如下：

1. 下载缺失的字体文件，然后复制到Linux系统中的/usr/share/fonts文件夹中。

国外下载地址：https://www.dropbox.com/s/lfy4hvq95ilwyw5/wps_symbol_fonts.zip

国内下载地址：https://pan.baidu.com/s/1eS6xIzo

（上述数据来源网络，侵删）

下载完成后，解压并进入目录中，继续执行：

sudo cp * /usr/share/fonts

2. 执行以下命令,生成字体的索引信息：

sudo mkfontscale

sudo mkfontdir

3. 运行fc-cache命令更新字体缓存。

sudo fc-cache

4. 重启wps即可，字体缺失的提示不再出现。


## 安装zsh

```
0.查看shells
cat /etc/shells
1.
sudo yum install zsh
或者
sudo apt-get install zsh
2.
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
3.切换成zsh
chsh -s /bin/zsh
```


## 服务器软件
```
sudo apt-get install vim openssl build-essential libssl-dev wget curl git 
```
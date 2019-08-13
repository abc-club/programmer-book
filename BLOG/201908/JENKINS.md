<h1 align="center">Mac安装jenkins</h1>

## step1:
下载jenkins  https://jenkins.io/zh/
## step2:
安装, 一直点继续就可以了


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc126ef9c661)
    
## step3:

点到最后一步，会自动在浏览器打开 http://localhost:8080/, 看到如下界面


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc14ec8013f5)
    
 **这时Jenkins会给你新增了一个用户，名字就叫Jenkins**

## step4:
打开 /Users/Shared/Jenkins/Home/secrets/initialAdminPassword，打开后复制密码并粘贴，进入下一步(遇到问题？请看常遇到的问题)，点击第一个，程序会安装插件，等待安装完成。

 

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc19865aa5ff)

## step5:

点击第一个，程序会安装插件，等待安装完成，看到如下界面。填写用户名，密码，下一步


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc1b8d075d5b)

## step6:
设置路径，也可以不用设置，如下：


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc1e45373da8)

## step7:

配置完成（遇到问题？页面空白？请看常遇到的问题）

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc21550921d2)

## 常遇到的问题
### 找不到/Users/Shared/Jenkins/Home/secrets/initialAdminPassword

        这是因为没有权限查看，可以按以下步骤解决
        找到/Users/Shared/Jenkins/Home/secrets，右键-> 显示简介 -> 点击右下键锁图标 -> 点击左下角+ -> 给jenkins读写权限
    

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc24e83b9d8e)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc261f5eebbf)
    
### 初次打开jenkins页面一片空白

1. Jenkins插件管理-高级设置界面==>  http://localhost:8080/pluginManager/advanced
    把https协议改为http，并点击【提交】


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc2a00f42274)

2. 重启jenkins

    在url地址中输入： http://localhost:8080/restart ，点击【是】


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc2c1934fe0c)


## 参考资料

* [Mac下jenkins安装步骤](https://www.jianshu.com/p/8eee4b73db24)

* [初次打开jenkins页面一片空白的解决办法](https://www.cnblogs.com/kaerxifa/p/11221246.html)
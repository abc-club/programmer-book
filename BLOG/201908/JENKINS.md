<h1 align="center">Mac安装jenkins</h1>

## step1:
下载jenkins  https://jenkins.io/zh/
## step2:
安装, 一直点继续就可以了


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc126ef9c661?w=800&h=565&f=png&s=277897)
    
## step3:

点到最后一步，会自动在浏览器打开 http://localhost:8080/, 看到如下界面


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc14ec8013f5?w=800&h=411&f=png&s=111224)
    
 **这时Jenkins会给你新增了一个用户，名字就叫Jenkins**

## step4:
打开 /Users/Shared/Jenkins/Home/secrets/initialAdminPassword，打开后复制密码并粘贴，进入下一步(遇到问题？请看常遇到的问题)，点击第一个，程序会安装插件，等待安装完成。

 

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc19865aa5ff?w=800&h=468&f=png&s=109499)

## step5:

点击第一个，程序会安装插件，等待安装完成，看到如下界面。填写用户名，密码，下一步


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc1b8d075d5b?w=800&h=515&f=png&s=69296)

## step6:
设置路径，也可以不用设置，如下：


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc1e45373da8?w=800&h=342&f=png&s=59235)

## step7:

配置完成（遇到问题？页面空白？请看常遇到的问题）

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc21550921d2?w=800&h=501&f=png&s=54803)

## 常遇到的问题
### 找不到/Users/Shared/Jenkins/Home/secrets/initialAdminPassword

        这是因为没有权限查看，可以按以下步骤解决
        找到/Users/Shared/Jenkins/Home/secrets，右键-> 显示简介 -> 点击右下键锁图标 -> 点击左下角+ -> 给jenkins读写权限
    

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc24e83b9d8e?w=800&h=569&f=png&s=237670)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc261f5eebbf?w=299&h=800&f=png&s=134132)
    
### 初次打开jenkins页面一片空白

1. Jenkins插件管理-高级设置界面==>  http://localhost:8080/pluginManager/advanced
    把https协议改为http，并点击【提交】


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc2a00f42274?w=800&h=628&f=png&s=56028)

2. 重启jenkins

    在url地址中输入： http://localhost:8080/restart ，点击【是】


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bc2c1934fe0c?w=800&h=489&f=png&s=76912)


## 参考资料

* [Mac下jenkins安装步骤](https://www.jianshu.com/p/8eee4b73db24)

* [初次打开jenkins页面一片空白的解决办法](https://www.cnblogs.com/kaerxifa/p/11221246.html)
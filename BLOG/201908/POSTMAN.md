
<h1 align="center">postman+newman+Jenkins之API全自动化测试(MAC)</h1>

## 名词解释
### [postman](https://www.getpostman.com/)
   主要用于模拟网络请求包 
   快速创建请求 
   回放、管理请求 
   快速设置网络代理 


![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd00e2740d6d?w=800&h=477&f=png&s=56690)

### [newman](https://www.npmjs.com/package/newman)
    newman是postman的命令行指令，允许我们在命令行中运行postman collection.
    

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd057c6d7e0f?w=800&h=366&f=png&s=99194)

### [jenkins](https://jenkins.io/zh/)
    Jenkins是一个开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。
    

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd08320ae65b?w=800&h=447&f=png&s=161673)


## 准备工作
### 安装postman
     没有太多注意事项，直接[官网下载](https://www.getpostman.com/downloads/)，然后安装
### 安装newman
** 必须选安装node和npm **

    ```
    $ npm install -g newman
    $ newman -v 
    ```
### 安装jenkins
请参考 https://juejin.im/post/5d52e1865188255d691bdf59
    

## postman的使用与导出
下面以网易云音乐登录，然后用接口返回的userId获取用户信息为例

1. 创建test文件夹

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd0d2dd3b1b1?w=800&h=477&f=png&s=61364)

2. 定义环境，并设置变量

**注意我这里用的是网易云音乐的接口，项目地址：https://github.com/Binaryify/NeteaseCloudMusicApi**

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd3d17aaa8be?w=3172&h=1892&f=png&s=251411)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd62b1bc7816?w=3172&h=1892&f=png&s=292050)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bd7703bcc8ce?w=3172&h=1892&f=png&s=251143)

3. 登录

先增加两个变量：phone和password
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8be0e7ebd61fc?w=3172&h=1892&f=png&s=422380)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8be28dcbe6635?w=3172&h=1892&f=png&s=349050)

接下来便可以使用这几个变量了

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8be3ad9908227?w=3172&h=1892&f=png&s=359818)
填好url,点击send,如下图，请求成功
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8be50b9493e7f?w=3172&h=1892&f=png&s=500042)
cmd+s保存这个请求到test文件夹，取名为login
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8be9ba75eb766?w=3172&h=1892&f=png&s=470081)


4. 获取用户信息
保存userId到变量
```
var data = JSON.parse(responseBody);

if (data.code === 200) {
  tests["login api"] = true;
  pm.environment.set("userId", data.profile.userId);
}
else {
  tests["login api"] = false;
}
```
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bec8e320eeff?w=3172&h=1892&f=png&s=522649)

点击send后，我们可以看到userId被保存到变量中了

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bedfcf7ca70a?w=3172&h=1892&f=png&s=522854)

开始获取用户信息，这里为了演示更复杂点的功能，我们在header里加个时间戳吧
```
timestamp = new Date();
postman.setGlobalVariable("timestamp",timestamp);
```

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bf2a3e17e65c?w=3172&h=1892&f=png&s=392752)
```
var data = JSON.parse(responseBody);

if (data.code === 200) {
  tests["userDetail api"] = true;
}
else {
  tests["userDetail api"] = false;
}
```
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bfab036c32af?w=3172&h=1892&f=png&s=415951)
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bf3ebda5a296?w=3172&h=1892&f=png&s=488141)
cmd+s保存这个请求到test文件夹，取名为userDetail

5. 执行test文件夹中所有的请求

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bf80d8a1e3c9?w=3172&h=1892&f=png&s=315361)
之后看到如下界面，点击run test

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bf8814c52f87?w=2560&h=1600&f=png&s=189701)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bfb61d1f55ab?w=2560&h=1600&f=png&s=186255)

6. 导出test文件和环境变量文件

导出请求文件
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bfccf196755d?w=3172&h=1892&f=png&s=356766)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bfd2169b9a50?w=3172&h=1892&f=png&s=310774)

导出环境变量文件
![](https://user-gold-cdn.xitu.io/2019/8/14/16c8bfdbcfe06bdc?w=3172&h=1892&f=png&s=271958)

## jenkins配置
1. 新建任务

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c00913e77324?w=3360&h=2100&f=png&s=388378)

2. 填写任务信息

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c0166647a7a5?w=3360&h=2100&f=png&s=531088)

3. 配置

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c0244094be8a?w=3360&h=2100&f=png&s=445363)
```
export PATH=/Users/isaacho/.tnvm/versions/alinode/v3.11.4/bin:$PATH

newman run  /Users/isaacho/Documents/test.postman_collection.json -e /Users/isaacho/Documents/test.postman_environment.json

```

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c03d4713b46e?w=3360&h=2100&f=png&s=435680)

4. build

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c061dd0c48f1?w=3360&h=2100&f=png&s=435826)

![](https://user-gold-cdn.xitu.io/2019/8/14/16c8c05943f94b32?w=3360&h=2100&f=png&s=567570)

到这里已经大功告成了！！！

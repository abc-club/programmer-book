## 安装 java

java 安装地址https://www.oracle.com/java/technologies/javase-downloads.html#JDK11

目前（2020 年 3 月）最新是 13，发行版是 11

## 安装 maven

下载地址 http://maven.apache.org/download.cgi

1. 安装：双击解压刚才下载好的 maven 的文件，解压到你想要的文件夹底下。

2. 设置国内镜像
   ![](https://user-gold-cdn.xitu.io/2020/3/14/170d7b68cf7cc62d?w=1216&h=298&f=png&s=75688)

在`<mirrors>`里面添加

```xml
<mirror>
    <id>nexus-aliyun</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus aliyun</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```

**注意：maven 默认把依赖安装到~/.m2 下**

3. 配置

1）打开终端输入命令 vim ~/.bash_profile （编辑环境变量配置文件）

2）按下 i，进入编辑模式

3）在环境变量文件中加上如下的配置

export MAVEN_HOME=/Users/isaacho/Documents/ENV/apache-maven-3.6.3

export PATH=$PATH:$MAVEN_HOME/bin

PS:（可以将文件直接拖拽至终端内文件路径便可显示出来）

4）输入 :wq 退出并保存当前文件

5）输入 source .bash_profile，按下 Enter 键使 bash_profile 生效。

6）输入 mvn -v，结果如下图所示即表明配置成功

![](https://user-gold-cdn.xitu.io/2020/3/14/170d711caa64ef48?w=1130&h=232&f=png&s=207130)

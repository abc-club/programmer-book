---
title: Windows安装使用Arcanist
date: 2017-10-17 16:32:57
tags: Arcanist 
categories: 学习笔记
---

## 安装php环境
可以参考 {% post_link software-php 点击这里查看这篇文章 %}

## 安装git
官网下载：https://git-for-windows.github.io/
打开exe程序进行安装即可

<!--more-->

## 安装Arcanist 和 libphutil
参考：https://secure.phabricator.com/book/phabricator/article/arcanist/#installing-arcanist
新建一个目录arcanist,在目录下打开git bash，使用下面的命令clone项目
git clone https://github.com/phacility/libphutil.git
git clone https://github.com/phacility/arcanist.git

配置Path环境变量： G:\arcanist\arcanist\bin;

## 配置arc环境
```
arc set-config default <uri> // uri替换成Phabricator地址，例：arc set-config default https://phabricator.example.com/

```
## 配置arc编辑器
使用Arcanist时需要使用文本编辑器编辑大块的文本，不能使用微软自带的NotePad，有以下Windows平台的编辑器可供选择：
```
Notepad++
$ arc set-config editor "\"C:\Program Files (x86)\Notepad++\notepad++.exe\" -multiInst -nosession"
此命令是配置Notepad++的，需要你更改安装目录

vim
$ arc set-config editor "\"C:\Program Files (x86)\Git\share\vim\vim73\vim.exe\""
此命令是配置vim的，需要你更改安装目录

GitPad
$ arc set-config editor "\"C:\Users\yourusername\AppData\Roaming\GitPad\GitPad.exe\""
此命令是配置GitPad的，需要你更改安装目录

Sublime Text
$ arc set-config editor "\"C:\Program Files\Sublime Text 2\sublime_text.exe\" -w -n"
此命令是配置Sublime Text的，需要你更改安装目录

```
## 配置token
```
arc install-certificate
```
打开提示中的地址，登录复制token就可以了



## 参考链接
http://www.jianshu.com/p/b21c93d41803
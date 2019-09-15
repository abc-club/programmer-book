## windows下PHP环境的搭建:
https://segmentfault.com/a/1190000003409708

<!--more-->

### 错误

#### 执行httpd -k install 发生 could not bind to address 0.0.0.0:80
这是因为iis占用了80端口
可以在管理员权限下cmd执行
```
Windows 7/Vista
net stop was /y
or XP:
net stop iisadmin /y
```
https://www.sitepoint.com/unblock-port-80-on-windows-run-apache/

## 在windows下的CLI模式下如何运行php文件
https://jingyan.baidu.com/article/da1091fb096c97027849d68e.html


### 错误
#### search path c /usr/share/snmp/mibs cannot find module (ip-mib) at line 0 in (none)
https://stackoverflow.com/questions/16467712/php-snmp-cannot-find-module

  Open your php.ini and add some magical semicolon at line that look like:
  ```
  extension=php_snmp.dll
  ```
  It should look like:
  ```
  ;extension=php_snmp.dll
  ```


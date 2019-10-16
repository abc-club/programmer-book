<h1 align="center">nodejs汇总</h1>


持续更新中……


## 目录

* [nodejs](#nodejs)
* [Puppeteer](#Puppeteer)
* [爬虫](#爬虫)
* [koa](#koa)
* [eggjs](#eggjs)
* [GraphQL](#GraphQL)
* [数据存储](#数据存储)
* [docker](#docker)
* [其他](#其他)


## nodejs
### 官网
- 英文官网  https://nodejs.org/en/
- 中文官网  http://nodejs.cn/

### 参考资料
- 七天学会NodeJS文档  http://nqdeng.github.io/7-days-nodejs/
- node面试题  https://github.com/ElemeFE/node-interview
- Node应用内存泄漏分析方法论与实战 https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/node-memory-leak.md
- nodejs最佳实践   https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md
* [深入理解Node.js 中的进程与线程](https://juejin.im/post/5d43017be51d4561f40adcf9)
* [《Node.js 调试指南》](https://github.com/nswbmw/node-in-debugging)
* [Node.js技术栈](https://github.com/Q-Angelo/Nodejs-Roadmap)
* [Node.JS 应用最佳实践：日志](https://zhuanlan.zhihu.com/p/81989446)

### 开源项目
* [Node.js 实现远程桌面监控](https://juejin.im/post/5d18d4c36fb9a07ecb0bbe7b)

### 常用库
* [winston](https://github.com/winstonjs/winston)(A logger for just about everything)
* [node-bunyan](https://github.com/trentm/node-bunyan)(a simple and fast JSON logging module for node.js services)


## Puppeteer
* [无头浏览器 Puppeteer 初探](https://juejin.im/post/59e5a86c51882578bf185dba)


## 爬虫
* [爬虫被封怎么办？用Node构建一个私人IP代理池](https://juejin.im/post/5cc45db8f265da037129a5f2)
* [awesome-spider](https://github.com/facert/awesome-spider)
* [crawlab](https://github.com/crawlab-team/crawlab)(基于Golang的分布式爬虫管理平台)

## koa
* [koa](https://github.com/koajs/koa)
* [koa文档](https://koajs.com/)
* [koa中文文档](https://demopark.github.io/koa-docs-Zh-CN/)
* [Koa2进阶学习笔记](https://github.com/chenshenhai/koa2-note)
* [koa example](https://github.com/koajs/examples)
* [koa+jwt实现token验证与刷新](https://segmentfault.com/a/1190000019338195)
## eggjs

* [一文看懂 Eggjs-基础全面讲解（下）](https://juejin.im/post/5d37ba17f265da1bc94f2f97)

### 常用工具库
* [cron-parser](https://www.npmjs.com/package/cron-parser)(用于定时任务)
    * 文档 https://segmentfault.com/a/1190000020403852
* [egg-valparams](https://www.npmjs.com/package/egg-valparams)(参数校验)
    * 文档 https://github.com/D780/valparams/blob/HEAD/doc/api.md

### 文章
* [如何更优雅的使用egg的日志体系？](https://github.com/eggjs/egg/issues/2006)
* [基于Egg框架的日志链路追踪实践分享](https://juejin.im/post/5cf5f78951882574ce0133f3)

## GraphQL
### 官方
* [graphql-js github](https://github.com/graphql/graphql-js/)
* [express-graphql](https://github.com/graphql/express-graphql)
* [apollo-server](https://github.com/apollographql/apollo-server)
* [react-apollo](https://github.com/apollographql/react-apollo)
* [GraphQL中文](https://graphql.cn)
* [apollo](https://github.com/apollographql/apollo)(文档：https://www.apollographql.com/docs/)

### 开源项目
* [graphpack](https://github.com/glennreyes/graphpack)(零配置graphql服务器)
* [rejoiner](https://github.com/google/rejoiner)(Uniform GraphQL schema from gRPC microservices)
* [gql-generator](https://github.com/timqian/gql-generator)(通过schema生成query)

### 文章
* [前端er了解GraphQL，看这篇就够了](https://juejin.im/post/5ca1b7be51882543ea4b7f27)
* [GraphQL 入门看这篇就够了](https://mp.weixin.qq.com/s/cpPN5o_mbti9H8e-kZAY5Q)
* [awesome-graphql](https://github.com/chentsulin/awesome-graphql)
* [GraphQL 搭配 Koa 最佳入门实践](https://segmentfault.com/a/1190000012720317)
* [GraphQL 为何没有火起来?](https://www.zhihu.com/question/38596306)
* [全栈 React + GraphQL 教程（一）](https://www.zcfy.cc/article/full-stack-react-graphql-tutorial-apollo-graphql-4341.html?t=new)


## 数据存储

### mysql
* [官网](https://www.mysql.com/)
* [mysqljs](https://github.com/mysqljs/mysql)
* [21分钟MySQL基础入门](https://segmentfault.com/a/1190000006876419)
* [2019-01-11亲测Navicat Premium for Mac破解](https://www.jianshu.com/p/4e93b48f9f63)
* [MySQL命令，一篇文章替你全部搞定](https://juejin.im/post/5ae55861f265da0ba062ec71)
* [bookshelf](https://github.com/bookshelf/bookshelf)(A simple Node.js ORM for PostgreSQL, MySQL and SQLite3 built on top of Knex.js)
* [Mysql常用命令行大全](https://www.cnblogs.com/bluealine/p/7832219.html)
* [MySQL5.7 常用命令](https://blog.csdn.net/m0_37774790/article/details/81007192)
* [sequelize](https://github.com/sequelize/sequelize)(An easy-to-use multi SQL dialect ORM for Node.js )
* [sequelize官网](https://sequelize.org/master/)
* [Sequelize Docs 中文版](https://github.com/demopark/sequelize-docs-Zh-CN/tree/master)


#### 客户端
* [navicat-premium](https://www.navicat.com.cn/download/navicat-premium)
* [mac破解版navicat 安装直接即可](https://www.52pojie.cn/thread-957406-1-1.html)

#### 常见问题
* [mysql8.0版本 报错：Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol...](https://www.jianshu.com/p/c8eb6d2471f8)
* [解决2003 - 2003 - Can't connect to MySQL server on '127.0.0.1'(61 "Connection refused")](https://blog.csdn.net/zeal9s/article/details/98873165)
* [Mac mysql忘记密码](https://segmentfault.com/a/1190000020679306)
* [出现connect ECONNREFUSED 127.0.0.1:3306报错的解决方法](http://blog.ttionya.com/article-1709.html)


### mongodb
* [mongoose github](https://github.com/Automattic/mongoose)
* [mongoose中文网](http://www.mongoosejs.net)
* [MongoDB中文](https://www.mongodb.org.cn/tutorial/)
* [MongoDB中文文档](http://www.mongoing.com/docs/)
* [MongoDB 教程 | 菜鸟教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)

### cassandra
* [cassandra教程](https://www.w3cschool.cn/cassandra/)(分布式数据库)(java)

### redis

* [Redis可视化工具](https://www.jianshu.com/p/721c3762a777)
* [Redis 入门](https://juejin.im/post/5b4dd82ee51d451925629622)
* [Redis 命令参考](http://doc.redisfans.com/index.html)

#### 工具
* RedisDesktopManager
* FastRedis

### 图数据库

* [neo4j](https://github.com/neo4j/neo4j)
* [hive](https://github.com/apache/hive)

#### 文章
* [《一起学图数据库》之一：图数据库介绍](https://zhuanlan.zhihu.com/p/32857155)

### ELK
* [elasticsearch GitHub](https://github.com/elastic/elasticsearch)
* [elastic官网](https://www.elastic.co/cn/#)
* [elastic官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/6.0/getting-started.html)
* [elk入门](https://segmentfault.com/a/1190000016665082)
* [大搜车NodeJS日志规范化与分析监控](http://f2e.souche.com/blog/ri-zhi-gui-fan-hua-yu-fen-xi-jian-kong/)
* [Node 框架接入 ELK 实践总结](https://juejin.im/post/5bf4c7ff5188250e8601d432)
* [elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
* [Kibana Guide](https://www.elastic.co/guide/en/kibana/7.4/index.html)
* [elasticsearch中文文档](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)
* [elasticsearch参考手册](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
* [elasticsearch中文社区](https://elasticsearch.cn/)


#### logstash

#### ElasticSearch
* [Elasticsearch 权威指南（中文版）](https://es.xiaoleilu.com/index.html)
* [ElasticSearch学习文档](https://juejin.im/post/5d82e5955188251b764b76ff)
* [全文搜索引擎 Elasticsearch 入门教程](http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html)
* [Elasticsearch就这么简单](https://juejin.im/post/5ab4496e518825556d0e0713)
* [Elasticsearch学习笔记](https://juejin.im/post/5b9292b75188255c6b64eee5)
* [Elasticsearch 入门使用](https://juejin.im/post/58d1d7530ce4630057e6053a)
* [一文上手 Elasticsearch常用可视化管理工具](https://juejin.im/post/5bd797ce6fb9a05cd7778f8d)


#### kafka
* [震惊了！原来这才是kafka！](https://www.jianshu.com/p/d3e963ff8b70)
* [kafka中文教程](https://www.orchome.com/kafka/index)


## 中台
* [漫画：什么是中台？](https://juejin.im/post/5d995f82f265da5ba308389d)

## docker
* [写给前端工程师看的Docker教程-基础篇](https://zhuanlan.zhihu.com/p/84891860)

## 其他
* [写给前端的Docker实战教程](https://juejin.im/post/5d8440ebe51d4561eb0b2751)
* [手把手教你搭建一个 Elasticsearch 集群](https://juejin.im/post/5bad9520f265da0afe62ed95)
* [k8s日志收集实战](https://juejin.im/post/5b6eaef96fb9a04fa25a0d37)
* [[译] Kubernetes 儿童插图指南](https://juejin.im/post/5d1b2a656fb9a07edc0b7058)
* [不要用 JWT 来做 Web 应用的会话管理](https://juejin.im/entry/59748def518825592c4f9ac0)
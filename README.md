## wefoods

微信小程序 + Nodejs + MySQL + HTTP。

### 前言

外卖系统，包含客户端和服务端，使用HTTP作为C/S通信协议，用微信小程序作为前端界面的展示，分为用户端和商家端，商家端入口在 “我的” 页面菜单栏中，前端样式模仿时下流行的外卖应用。
使用Nodejs(Koa2)和MySQL开发服务端，服务端大部分接口都遵循RESTful规范。


### 开发工具和环境

- Nodejs(>v7.6.0)  

    服务端开发语言。

- cnpm

- VSCode 		  

    非常适合Nodejs开发的IDE。

- 微信开发者工具   

    小程序官方提供的IDE。

- MySQL(v5.7)		

    服务端数据库。
    安装教程：https://blog.csdn.net/m0_49284219/article/details/121972531
    下载地址：https://mirrors.tuna.tsinghua.edu.cn/mysql/downloads/
- Navicat			
    数据库图形界面工具，便于管理数据库。
    具体使用百度，完成本地MySQL连接即可

### 服务端启动指南

backend目录下是服务端的源代码，以下命令都在此目录下执行。

1. 初始化数据库
  在Navicat中运行 `./database.sql` 文件
    
1. 安装Node.js
2. 安装Cnpm
3. 项目终端下执行 `cnpm install`。
4. 启动服务

   项目终端下执行 `npm run dev`，此时会监听代码修改，自动重启服务。

5. 服务启动在本地的 8086 端口。


### 前端启动指南

frontend目录下是服务端的源代码，以下命令都在此目录下执行。

微信开发者工具启动即可

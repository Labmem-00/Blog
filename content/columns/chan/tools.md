---
title: 运行本项目与工具使用
description: 项目运行于工具使用
date: 2024-12-15 18:25:49
# updated:
# image:
categories: [专栏,chan开发文档]
tags: []
show: false
---

::alert{type="info"}
#title
Tip
#default
本项目是由 Next 编写的，请对此有基本的了解。

项目作者已经配置了基本的环境变量，请不用过加考虑，大展拳脚吧。

测试版上线地址请查看[@channel](https://www.labmem.chat)
::

## 运行本项目

### 环境要求

Node.js： 14.0.0 以上版本，最好是 18 以上

pnpm： 9.0.0 以上版本

vscode：代码编辑器

项目使用 pnpm 包管理工具，请确实安装。

### 项目运行

在本地配置 git 环境后，可以直接使用`ctrl + ~`命令打开终端界面下载项目

```sh
git clone https://github.com/Labmem-00/Lab002-Channel-Next.git
```

安装项目依赖包

```sh
pnpm i
```

启动项目

```sh
pnpm dev
```

项目正常运行，终端将出现以下信息

```sh
PS D:\Lab\channel> pnpm dev

> channel@0.1.0 dev D:\Lab\channel
> next dev -p 48596 --turbo

   ▲ Next.js 15.0.3 (Turbopack)
   - Local:        http://localhost:48596
   - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 14s

```

在浏览器访问 http://localhost:48596 即可查看项目网站

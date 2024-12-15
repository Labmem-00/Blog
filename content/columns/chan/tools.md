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

::alert{type="question"}
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

项目使用 pnpm 包管理工具，请确保安装。

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

## 开发工具的使用

### pnpm与package.json
项目的许多功能都依赖于特定的代码库，暂且称之为包。pnpm是一款快速，轻量级的包管理工具，在项目的**package.json**
文件中是项目的依赖包和脚本命令，使用json对象的配置方法。大部分的JS项目都会有这个文件，必须了解其功能。
> "scripts"对象里是本项目的一些运行指令

通过`pnpm run --- `运行，最基本的命令就是运行本地开发环境

```sh
pnpm run dev
```

> "dependencies"对象中是一些项目生产环境的依赖包

> "devDependencies"对象中是一些开发环境依赖包，不会打包到生产环境

pnpm的常见指令

```sh
pnpm i -D ---   下载名为---的包，-D可选参数，表示仅下载到开发环境依赖
```

```sh
pnpm remove ---   卸载名为---的包
```

### 代码提交规范
**commitlint.config.js**

本项目的代码提交规范，运行``git commit``命令需要遵循的提交信息格式。

如果我有新增的功能需要提交，在commitlint.config.js中可知信息标志为``feat``,

那么就需要执行以下提交命令：

```sh
git commit -m "feat(新功能---)：新增---新功能"
```
圆括号中为必填项，简单描述提交信息，否则将提交失败，请选用小写字母开头的英文单词或者纯汉字。

提交成功别忘了git push命令推送至远程分支，且请保证新建分支提交，不要提交到主分支！！！

强烈建议想要参与开发的小伙伴学习一下git的教程，这是程序员非常实用的技能。

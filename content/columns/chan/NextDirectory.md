---
title: Next项目结构
description: 关于@chan项目的结构
date: 2024-12-15 11:25:47
# updated:
# image:
categories: [专栏,chan开发文档]
tags: []
show: false
aside: [toc, github_card]
---

::alert{type="question"}
#title
Tip
#default
[本文攥写于2024年12月15日，为项目开发初期，不代表最终实现品质]{.text-story}。
::

在开始前请对照本项目[@chan](https://github.com/Labmem-00/Lab002-Channel-Next),接下来本文将逐步介绍项目的主要目录。

## .husky
这是Husky工具包的配置目录，Husky提供了一些Git命令钩子，可以在git命令前后执行一些自动化任务。

例如为了确保提交的代码符合项目标准的格式规范，在.husky目录中我创建了一个pre-commit脚本，它将在`git commit`前执行`pnpm lint:fix`命令，自动对代码进行格式修复，以保证整体的统一。

同样的配置还有`pre-push`脚本,它将在代码推送到仓库前执行build构建命令，确保提交的修改可以正确执行。

---

## .next
这是next项目构建时生成的工程文件，大多数情况下不用理会。

---

## .vscode
开发编辑器vscode的配置文件夹，在此添加只是确保项目所处的开发环境配置一致，当然也建议使用这个编辑器进行开发。

---

## app
这是项目的源码目录，所有的核心开发文件都在此目录下，采用NextJS的app路由方式以及文件命名约定，请确保你已经了解
了Next的相关技术。以下是此目录的文件介绍。

---

### (pages)
该文件夹采用路由组的方式组织了页面组件以及路由，相当于Vue项目下的pages文件夹+vue router，网站的页面都在这里。不了解NextJS的页面路由方式？指路=>[Next路由](https://nextjs.org/docs/app/building-your-application/routing)，教程为全英文，看不懂可以选择谷歌浏览器的翻译功能，当然需要一点魔法，或者可以直接百度搜索`Next路由`找中文文档。

### api
Next为什么叫全栈框架？除了提供服务端渲染以外，它还支持一些类似后端的功能，例如处理Http请求、查询数据库。

这个文件夹就是放置一些后端的代码，可以看到里面的一个hello文件夹有一个route.ts文件，该文件下的GET函数返回一个JSON格式的Response，内容为`hello world`。这个文件夹将会处理对`/api/hello`发起的GET请求，并返回一个hello world。

### components
熟悉组件化开发的大佬应该不会陌生，该文件夹下放置的是各种在页面中使用的组件，主要使用react和tailwind编写。

### hooks
包含在组件中使用的一些自定义hooks，详细可见React的官方文档。

### lib
本项目封装的一些库代码，最主要的是以下文件

- models：放置数据库模型，我使用的是MongoDB数据库，所以使用mongoose定义数据模型，这个方式非常简单易懂。
- mongoose.ts: 封装了数据库连接代码。
- pusher.ts: 封装了Pusher的操作代码。
- redis.ts: 封装了redis的连接代码。

### store
是熟悉的味道，放置一些状态管理的代码文件，本项目使用[zustand](https://awesomedevin.github.io/zustand-vue/)进行状态管理。

### styles
夹如其名，一些样式文件，使用sass编写，项目在处理一些复杂样式时建议使用css module与sass。

### types
TS的一些类型定义

### utils
封装的一些通用的工具函数

### favicon
网站图标

### global.css
全局样式文件，特别注意此文件定义了全局的颜色模式

### layout.tsx
网站的根文件，相当于app.vue,详情见Next文档

### not-found.tsx
404错误处理页面，详情见Next文档

---

## 其他文件

### node-modules
项目依赖包的安装目录，可以忽略

### public
一些静态资源文件，项目中用到的图片，视频之类

### .env.loval
环境配置文件，数据库连接的地址之类，该文件生产环境下不可见，提供的参数是测试用的云数据库

### eslint.../prettier.../sytlelint...
这是代码审查工具的配置文件，主要保持代码格式的统一，可以忽略

### .gitignore
git配置，忽略某些文件夹

### .npmrc
包管理工具的配置，可以忽略

### commitlint.config.ts
该文件需要划重点，是该项目git的提交规范，会在项目工具使用一文详细介绍

### LICENSE
项目许可证书，Apache 2.0

### next.config.ts
Next项目的配置文件，可以忽略

### package.json/pnpm-lock.yaml
项目包管理文件，会在项目工具使用一文详细介绍

### postcss.config.mjs/tailwind.../tsconfig
一些依赖包的配置文件，可以忽略

---

## 下一篇更新

[运行本项目与工具使用](/chan/tools)

---
title: Channel项目目录与简介
description: 关于@chan项目的介绍
date: 2024-12-15 09:25:47
# updated:
image: https://7.isyangs.cn/65/675e33baed1d3-65.webp
categories: [专栏,chan开发文档]
tags: []
# hideInfo: boolean #是否隐藏文章头部相关信息
# references: { title: string, link: string }[] #参考文献
show: true
aside: [toc, github_card]
github:
    name: Labmem-00/Channel-Next
    description: 基于NextJS构建的@channel论坛，本帖指向项目地址，项目暂部署于vercel，详情请见网站---labmem.chat
    url: https://github.com/Labmem-00/Lab002-Channel-Next
---

::alert{type="info"}
#title
Tip
#default
本专栏文档为NextJS版本的@channel论坛实现，目前处于开发初期阶段。NextJS是一款扎根于React的全栈框架，类比Vue的
Nuxt框架。

**如何参与本项目开发**：确保熟悉基本的网站开发知识，例如前端三剑客，了解一些框架组件化的开发思想。在参与之前建议通读[React官方文档](https://zh-hans.react.dev/learn)以及[Next官方文档](https://nextjs.org/)。大致了解本项目开发技术之后可以前往[项目地址](https://github.com/Labmem-00/Lab002-Channel-Next)clone本项目翻阅源码。也可参阅此开发文档查看项目详情，请至少了解本项目的[目录结构](chan/nextdirectory)。

**开发工具的使用**：了解[Git操作](https://liaoxuefeng.com/books/git/what-is-git/index.html)是参与多人协同开发的基本，我将在[项目开发工具的使用](chan/tools)一文详细介绍具体事项。

项目立项于2024年12月5日，本文档开始撰写于同年12月15日，本Tip写于12月15日。
::

## 项目简介

### 为什么立项？
本文作者是一名临近毕业的大四学生， 专通于前端技术，开始的目的是为了完成一个自主实现的毕业设计。
思来想去不如整发大的，利用目前所学习的技术来实现`命运石之门`[^1]中的`@channel讨论版`[^2]，实际上就是一个相当普通的ACG论坛项目。详细可以参考这个论坛:

::Link-card
---
icon: https://github.githubassets.com/images/mona-loading-dark.gif
title: Kun Galgame
description: 专注GalGame的论坛，本项目参考了一些
link: https://www.kungal.com/zh-cn
---
::

### 项目的目标
开发一款能营造良好交流氛围的，以科学ADV系列为主导，可扩展向其他ACG文化的交流论坛。
以下是项目主要目标：

- 完全开源，面向科学ADV以及ACG文化的爱好者。
- 营造良好的交流氛围，内容不限于剧情，技术，日常以及相关作品分享。
- 实时的在线聊天功能，与网上同好进行友好互动。
- 永久免费无广告。

可能会引进的目标，指由于技术与资金问题而暂入考虑之中：
- 接入训练的AI或者已开放的大语言模型实现契合剧情的Amadeus助手。

[^1]:命运石之门：这是一款集科幻与二次元文化的剧情冒险游戏
[^2]:@channel: 命运石之门中恶名昭著(悲?)的匿名讨论版

## 开发方案

### 项目开发与设计原则
- 现代化，选取目前流行的技术解决方案
- 交互友好，在易于操作的基础上适当增强用户的交互体验
- 响应式，适配手机，PC以及平板用户，保证不同平台的良好体验
- 内容管理，清晰的内容管理以杜绝不友好的恶意行为

### 技术选型
- 在兼顾快速开发与现代化中本项目选择了NextJS全栈框架，并将测试版部署于vercel

网站将采用如下技术：

> 前端页面设计: NextJS + React + Tailwind + Sass

> 语言：TypeScript，杜绝any类型

> 颜色管理：next-themes

> 动画设计：react-spring

> 后端接口：NextJS提供的API路由 + MongoDB数据库 + Redis数据库

> 实时消息推送: Pusher

项目倾向于最小化部署，不引用过多的依赖包，所以并未选择某款UI组件库，详情可见项目package.json

## 下一篇更新

[项目目录结构](/chan/nextdirectory)

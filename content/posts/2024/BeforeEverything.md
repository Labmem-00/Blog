---
title: 写在博客之前
description: 匆忙上线的落幕，顿感还得是纯静态
date: 2024-6-13 16:44:23
updated: 2024-11-10 16:44:23
image: https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/Blog/beforeV2.png
type: story
categories: [散记]
aside: [toc, github_card] 
github:
    name: Labmem-00/Blog
    description: 基于纸🦌摸鱼处源码的魔改，使用Nuxt3构建。
    url: https://github.com/Labmem-00/Blog
---

## 博客的开端

### 相遇MarkDown

2023年4月的某个早上，在某不知名学校的工作室里，正无聊地刷着《C++Primer》章节习题的我，偶然瞥见旁边的朋友正用着一种新奇的语言编写着自己的学习笔记。简单的几个标记符号就能写出排版优雅、内容美观的文档，询问几番便快速找到了[markdown](https://markdown.com.cn/)的相关资料，由此便开始在[obsidian](https://obsidian.md/)上记录一些Qt，计算机基础的学习经验并同步在github上。这大概就是我写博客的最早阶段，虽然并没有正经地发布到类似[掘金](https://juejin.cn/)的平台上就是了。

### Web入坑深似海

在互联网的汪洋大海里搜索资料会不时碰到一些有趣的个人网站。印象里第一个访问的个人站点是某个写着`BMS`[^1]入坑指南的地方，里面还有不少有关Python和机器学习的文章，能拥有这样一个可以进行知识记录的网站实在是一件很酷的事情，于是我就开始了学习Web开发的道路。最初必然是选择[MDN](https://developer.mozilla.org/zh-CN/)进行前端基础的学习，Guides页面配有详细的入坑食用指南，看到web表单并完成全部习题后，再继续Vue客户端框架的学习基本上一路通畅。框架极大地简化了页面的开发效率，也带来了不少要学习的新东西，诸如目录结构规范，构建与打包工具，css预编译器，以及各种插件配置和包管理，不禁感叹轮子真是太多了。

在不断的摸索中我也通过Vue和NodeJS实现了第一个全栈项目，一个极度简陋的博客网站，前端仅有一个展示页面和一个管理页面，后端则是常见的增删改查加上模糊搜索、分页与文件上传功能。好吧，第一个练手的实验性项目我也不苛求太多，开始部署，然而不出几个星期我就没有使用下去的欲望了。首屏启动缓慢、SEO优化困难实在是致命的缺点，再加上使用NaiveUI组件库的页面过于简陋，以及自己堆出来的复杂样式不便修改，<span title="你已经死了">**お前はもう死んでいる**{.text-repeat}</span>。

[^1]:BMS指代一种通过 .bms 文件格式来定义音乐节奏的远古？音乐游戏，始于1999年。

### 新的技术选型

在求助某GPT后，我开始有了一个新的前端重构计划，列举下当时进行琢磨的技术清单。

>SSG/SSR

::Link-card
---
icon: https://nuxt.com/assets/integrations/nuxthub.svg
title: Nuxt
description: 类似Next的Vue开发框架，支持SSG/SSR
link: https://nuxt.com/
---
::
初略通读过官网的开发文档，自动化和约定方面的特性非常有意思，更加规范项目的感觉。起初我想将原本的前端页面通过Nuxt进行重构，后端接口沿用原来的一套。

::Link-card
---
icon: https://vitepress.dev/vitepress-logo-mini.svg
title: VitePress
description: 由Vite和Vue驱动的静态站点生成器
link: https://vitepress.dev/zh/
---
::
主要面向静态文档站点的优秀框架，对博客也有不错的支持，Vue的官方文档也是使用这个编写的。然而访问过不少使用VitePress的博客，感觉并不能很好地满足我的需求。

>CSS框架

::Link-card
---
icon: https://tailwindcss.com/favicons/favicon.ico?v=3
title: Tailwindcss
description: 一个原子化css框架
link: https://tailwindcss.com/
---
::
直接在HTML标签中嵌入原子化样式，还没怎么看文档就能想象到一个标签内嵌超长class，
外加各种属性的情形了，不太适合用于编写复杂样式。
::Blur 
实在是维护的灾难
::

::Link-card
---
icon: https://sass-lang.com/assets/img/logos/logo.svg
title: SCSS
link: https://sass-lang.com/documentation/syntax/
---
::
首选框架，兼容性良好，提供了@mixin，变量，嵌套等诸多功能，不需要太多额外的学习成本就能轻易上手，能很好地兼顾维护与减少样式代码。

定好大致方向后，我开始查找起相关的资料。
偶然在[RestentOu](https://blog.gxres.net)的博客上看到了一个强大的Nuxt模块,NuxtContent。它允许在 Nuxt 应用中使用 Markdown 或 JSON 等格式来存储和处理内容,甚至提供了查询接口，还能够使用Vue组件进行客制化，结合了Nuxt和VitePress的优势。

二话不说我就跟写的后端接口说再见了，全面拥抱静态博客。同样是机缘巧合之下我通过RestentOu的友链访问到了[纸🦌](https://blog.zhilu.cyou)，很眼熟？哈哈，就是本博客的原主。

## 开源博客的二次开发

### 书接上回
浏览过各种同质化的Hexo主题博客，看到纸🦌的博客后瞬间让我眼前一亮，简洁而又不失设计的页面有种让人想要阅读并一探究竟的欲望，在评论区留言并了解到开源地址后便fork了源码进行详细学习。由于之前已经通读过Nuxt的文档，加上强大的Ai助力，理解整个项目的代码并没有多大的阻碍。加上纸🦌编写了详细的目录指南和使用示例，我大致花了3天左右将所有的组件功能和配置项都一一摸透，只能说[收获颇丰]{.text-story}。

### 搬迁开始
在清除大部分数据仅保留博客网站本体后我开始了自定义之路。博客的基础功能比较全面，但是缺少了分类功能，在开关store上添加分类开关，辅以一个分类组件，一点点弹跳的spring动画、背景透明度、高斯模糊，一个还算好看的分类开关就完成了。



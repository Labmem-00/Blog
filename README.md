# Lab-Blog

## Lab系列博客项目，用于分享技术与记录Lab系列开发进度
本项目基于开源项目进行二次开发,欢迎支持
![纸🦌摸鱼](github.com/L33Z22L11/blog-v3)

## 项目技术栈


## 快速开始

### 安装依赖

```sh
pnpm i
```

### 运行开发环境

```sh
pnpm dev
```

### 构建生产环境

```sh
pnpm generate
```

## 目录结构

```sh
.
app # 项目源目录
│   ├── assets # 资源文件(指定css预编译器 scss)
│   ├── components # 组件
│   │   ├── content # 内容组件
│   │   ├── patial # 模块组件
│   │   ├── widgets # 小组件
│   │   ├── zhilu # 个人 VI 组件
│   │   └── ... # 布局组件
│   ├── composables # 组合式函数
│   ├── pages # 页面
│   │   ├── page.vue # 首页
│   │   ├── page/[[id]].vue # 首页动态路由
│   │   ├── archive.vue # 归档
│   │   └── [...slug].vue # 正文、404
│   ├── stores # 状态管理
│   ├── types # 类型定义
│   ├── utils # 工具函数
│   ├── app.config.ts # 前端配置
│   ├── app.vue # 布局
│   └── error.vue # 错误页
├── content # 文章
│   ├── drafts # 草稿，生产环境不显示
│   ├── posts # 文章
│   ├── previews # 预览
│   ├── link.md # 友链
│   └── theme.md # 主题介绍
├── patches # npm 包补丁
├── public # 静态资源
│   └── fonts # 字体
├── server # 服务端
│   ├── api # 接口
│   │   └── stats.get.ts # 博客静态统计
│   ├── plugins # Nitro 插件
│   │   ├── anti-mirror.ts # 恶意反代跳转
│   │   ├── fix-post-date.ts # 修复文章时区
│   │   └── fix-post-path.ts # 美化文章链接
│   └── routes # 路由
│       └── atom.xml.get.ts # Atom 订阅源
├── ssl # 开发环境证书
├── blog.config.ts # 博客公共配置
├── nuxt.config.ts # Nuxt 配置
├── redirects.ts # 旧站点重定向配置
└── vercel.json # Vercel 配置
```



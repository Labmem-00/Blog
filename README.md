## Lab系列博客项目，用于分享技术与记录Lab系列开发进度  
欢迎支持[纸🦌摸鱼](github.com/L33Z22L11/blog-v3)

## 项目技术栈  
![Vue](https://img.shields.io/badge/框架-Vue-42b883?logo=vue.js&logoColor=ffffff&color=42b883)
![Nuxt](https://img.shields.io/badge/框架-Nuxt-00DC82?logo=Nuxt.js&logoColor=ffffff&color=00DC82)
![TypeScript](https://img.shields.io/badge/code-TypeScript-3178C6?logo=TypeScript&logoColor=ffffff&color=3178C6)
![SCSS](https://img.shields.io/badge/预编译器-SCSS-CC6699?logo=Sass&logoColor=ffffff&color=CC6699)
![ESLint](https://img.shields.io/badge/代码风格-ESLint-4B32C3?logo=eslint&logoColor=ffffff&color=4B32C3)
![Stylelint](https://img.shields.io/badge/代码风格-Stylelint-5B2C6F?logo=stylelint&logoColor=ffffff&color=5B2C6F)
![pnpm](https://img.shields.io/badge/工具-pnpm-0078D4?logo=pnpm&logoColor=ffffff&color=0078D4)



## 快速开始
安装依赖项
```sh
pnpm i
```

运行开发环境

```sh
pnpm dev
```

构建生产环境

```sh
pnpm generate
```

添加文章脚本

```sh
npm link 将命令部署全局
```
script两个脚本分别对应增加博文和专栏文
修改地址至本地项目的content文件夹，任意位置下使用newB/newC将自动创建对应文件并打开vscode

## 项目开发文档
...编写中

<!-- ```sh
.
app # 项目源目录
│   ├── assets # 资源文件(指定css预编译scss)
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
``` -->



import type { BundledLanguage } from 'shiki'
import type { FeedEntry } from '~/types/feed'

// 存储 nuxt.config 和 app.config 共用的配置
const blogConfig = {
    title: 'Lab-Blog',
    subtitle: '某个晴天，在一个叫做秋叶原的地方，她的生命如泡沫那般消失了。',
    description: '你好, 我是zero, 活跃于21世纪互联网的角落, 如果你有幸在此落脚，欢迎找我聊聊',
    author: {
        name: 'Lab-Blog',
        avatar: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/avator-v1.jpg',
        email: '13767083791@163.com',
        homepage: '',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: '署名-非商业性使用-相同方式共享 4.0 国际',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
    },
    favicon: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/favicon.ico',
    language: 'zh-CN',
    timeEstablished: '2023-04-1',
    timezone: 'Asia/Shanghai',
    url: 'https://blog.zhilu.cyou/',

    // 用于 Shiki、Plain Shiki 引入代码高亮
    // 同时用于显示代码块语言对应的 Iconify Catppuccin 图标
    fileExtensions: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],

    feed: {
        limit: 50,
    },

    hideContentPrefixes: [
        '/posts',
    ],
}

export const feedEntry = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: '摸鱼处',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: '这是我自己',
}

export default blogConfig

import type { ArticleOrderType } from './types/article'
import blogConfig from '~~/blog.config'
import type { Nav, NavItem } from '~/types/nav'

export default defineAppConfig({
    ...blogConfig,

    article: {
        categories: {
            分类: {},
            经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
            生活: { icon: 'ph:shooting-star-bold', color: '#3ba' },
            代码: { icon: 'ph:code-bold', color: '#77f' },
            专栏: { icon : 'line-md:coffee-half-empty-twotone-loop',color:'purple'}
        },
        order: {
            date: '创建日期',
            updated: '更新日期',
            // title: '标题',
        },
    },

    columns : [
        {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        {name: 'react', img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test2.jpg'},
        {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        // {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        // {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
        // {name: "vue", img: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/test1.jpg'},
    ],

    footer: {
        copyright: `© ${new Date().getFullYear()} ${blogConfig.author.name}`,
        iconNav: <NavItem[]>[
            { icon: 'ph:house-bold', text: '个人主页', url: 'https://github.com/Labmem-00' },
        ],
        nav: <Nav>[
            {
                title: '跃迁',
                items: [
                    { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
                ],
            },
            {
                title: '关于',
                items: [
                    { icon: 'ph:github-logo-bold', text: 'Labmem00', url: 'https://github.com/Labmem-00' },
                    { icon: 'ri:bilibili-fill', text: 'BiliBili', url:'https://space.bilibili.com/484838750'}
                ],
            },
            {
                title: '信息',
                items: [
                    { icon: 'ph:swatches-bold', text: '主题灵感源自Stellar', url: '/theme' },
                    { icon: 'ph:certificate-bold', text: '萌ICP备20246888号', url: 'https://icp.gov.moe/?keyword=20246888' },
                ],
            },
        ],
        message: '',
    },

    header: {
        logo: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/avator-v2.jpg',
        text: true,
        subtitle: blogConfig.subtitle,
        emojiTail: ['🌀', '⏳', '🎧 ', '🥼', '📺'],
    },

    indexGenerator: {
        perPage: 10,
        orderBy: <ArticleOrderType>'date',
    },

    nav: <Nav>[
        {
            title: '',
            items: [
                { icon: 'ph:files-bold', text: '文稿', url: '/' },
                { icon: 'ph:tag-bold', text:'专栏', url:'/column'},
                { icon: 'ph:archive-bold', text: '归档', url: '/archive' },
                { icon: 'ph:link-bold', text: '友链', url: '/link' },
            ],
        },
    ],

    stats: {
        wordCount: '约10万',
        postCount: 99
    },

    interactive: {
        weather:{
            icon: 'wi:day-sleet',
            tip: '获取天气'
        }
    },

    themes: {
        light: {
            icon: 'line-md:sun-rising-loop',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-bold',
            tip: '跟随系统',
        },
        dark: {
            icon: 'line-md:moon-alt-loop',
            tip: '深色模式',
        },
    },

    twikoo: {
        js: 'https://gcore.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.all.min.js',
        envId: 'https://twikooapi.labmem.chat/',
    },
})

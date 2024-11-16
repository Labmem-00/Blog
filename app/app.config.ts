import type { ArticleOrderType } from './types/article'
import blogConfig from '~~/blog.config'
import type { Nav, NavItem } from '~/types/nav'

export default defineAppConfig({
    ...blogConfig,

    article: {
        categories: {
            经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
            生活: { icon: 'ph:shooting-star-bold', color: '#3ba' },
            代码: { icon: 'ph:code-bold', color: '#77f' },
        },
        order: {
            date: '创建日期',
            updated: '更新日期',
            // title: '标题',
        },
    },

    footer: {
        copyright: `© ${new Date().getFullYear()} ${blogConfig.author.name}`,
        iconNav: <NavItem[]>[
            { icon: 'ph:house-bold', text: '个人主页', url: 'https://github.com/Labmem-00' },
            { icon: 'ri:qq-line', text: '交流群: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
            { icon: 'ph:github-logo-bold', text: 'GitHub: L33Z22L11', url: 'https://github.com/L33Z22L11' },
            { icon: 'ph:rss-simple-bold', text: 'Atom订阅', url: '/atom.xml' },
            { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
        ],
        nav: <Nav>[
            {
                title: '世界线跃迁',
                items: [
                    { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
                ],
            },
            {
                title: '关于Labmem',
                items: [
                    { icon: 'ph:github-logo-bold', text: 'Labmem00', url: 'https://github.com/Labmem-00' },
                    { icon: 'ri:bilibili-fill', text: 'BiliBili', url:'https://space.bilibili.com/484838750'}
                ],
            },
            {
                title: 'D-mail?',
                items: [
                    { icon: 'ph:swatches-bold', text: '主题灵感源自Stellar', url: '/theme' },
                    { icon: 'ph:certificate-bold', text: '萌ICP备20246888号', url: 'https://icp.gov.moe/?keyword=20246888' },
                ],
            },
        ],
        message: '',
    },

    header: {
        logo: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/avator-v1.jpg',
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
                { icon: 'ph:files-bold', text: '文章', url: '/' },
                { icon: 'ph:tag-bold', text:'分类', url:'/category'},
                { icon: 'ph:archive-bold', text: '归档', url: '/archive' },
                { icon: 'ph:link-bold', text: '友链', url: '/link' },
                
            ],
        },
    ],

    stats: {
        wordCount: '约10万',
    },

    themes: {
        light: {
            icon: 'ph:sun-bold',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-bold',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-bold',
            tip: '深色模式',
        },
    },

    twikoo: {
        js: 'https://gcore.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.all.min.js',
        envId: 'https://twikooapi.labmem.chat/',
    },
})

import type { ArticleOrderType } from './types/article'
import blogConfig from '~~/blog.config'
import type { Nav, NavItem } from '~/types/nav'

export default defineAppConfig({
    ...blogConfig,

    article: {
        categories: {
            分类: {},
            散记: {icon: 'mdi:book-open-variant', color:'#5A9BD8'},
            专栏: { icon : 'line-md:coffee-half-empty-twotone-loop',color:'#B97BDB'}
        },
        order: {
            date: '创建日期',
            updated: '更新日期',
            // title: '标题',
        },
    },

    //专栏
    columns : [
        {name: '命运石之门', img: 'https://s2.loli.net/2024/11/24/zrUlh4F7ciHf6Bn.jpg' },
        {name: 'miniVue实现', img: 'https://cn.vuejs.org/logo.svg'},
        {name: '前端基础面经', img: 'https://s2.loli.net/2024/11/27/oeNp7S1R9EtPTdh.png'},
        {name: 'JS面经', img:'https://s2.loli.net/2024/11/27/YTgD8EF97fXBdCM.png'}
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
                    // { icon: 'ph:swatches-bold', text: '主题灵感源自Stellar', url: '/theme' },
                ],
            },
        ],
        message: '',
    },

    header: {
        logo: 'https://s2.loli.net/2024/11/25/ukIEmBNJ2ocw4MQ.jpg',
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

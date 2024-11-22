import type { BundledTheme } from "shiki";
import blogConfig from "./blog.config";
// import redirects from "./redirects";

const shikiOptions = {
    langs: blogConfig.fileExtensions,
    themes: <BundledTheme[]>["catppuccin-latte", "one-dark-pro"],
    defaultTheme: <BundledTheme>"catppuccin-latte",
    darkTheme: <BundledTheme>"one-dark-pro",
};

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        rootId: "lab-root",
        head: {
            htmlAttrs: {
                lang: blogConfig.language,
            },
            link: [
                { rel: "icon", href: 'https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/favicon.ico' },
                {
                    rel: "alternate",
                    type: "application/atom+xml",
                    href: "/atom.xml",
                },
                { rel: "preconnect", href: "https://cdn-font.hyperos.mi.com" },
                // 浏览器渲染中文 VF 字重有问题
                // https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,450,500,600,650,700,900:Chinese_Simplify,Latin&display=swap
                {
                    rel: "stylesheet",
                    href: "https://cdn-font.hyperos.mi.com/font/css?family=MiSans_VF:VF:Chinese_Simplify,Latin&display=swap",
                    media: "none",
                    onload: 'this.media="all"',
                },
                { rel: "preconnect", href: "https://fonts.googleapis.cn" },
                { rel: "preconnect", href: "https://fonts.gstatic.cn" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.cn/css2?family=Fira+Code:wght@300..700&family=Noto+Serif+SC:wght@200..900&display=swap",
                    media: "none",
                    onload: 'this.media="all"',
                },
            ],
            templateParams: {
                separator: "|",
            },
            titleTemplate: `%s %separator ${blogConfig.title}`,
        },
    },

    compatibilityDate: "2024-08-03",

    components: [
        { path: "~/components/partial", prefix: "Z" },
        { path: "~/components/zhilu", prefix: "Zhilu", global: true },
        "~/components",
    ],

    css: [
        "@/assets/styles/article.scss",
        "@/assets/styles/color.scss",
        "@/assets/styles/main.scss",
        "@/assets/styles/reusable.scss",
    ],

    experimental: {
        viewTransition: true,
    },

    future: {
        compatibilityVersion: 4,
    },

    routeRules: {
        // ...redirects,
        "/api/stats": { prerender: true },
    },

    runtimeConfig: {
        public: {
            buildTime: new Date().toISOString(),
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/styles/_variable.scss" as *;
                        @use "@/assets/styles/_mixin.scss" as *;
                    `,
                    api: "modern-compiler",
                },
            },
        },
    },

    vue: {
        propsDestructure: true,
    },

    modules: [
        "@nuxt/content",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxtjs/color-mode",
        "@nuxtjs/seo",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@zinkawaii/nuxt-shiki",
    ],

    colorMode: {
        preference: "system",
        fallback: "light",
        classSuffix: "",
    },

    content: {
        experimental: {
            search: {},
        },
        highlight: {
            langs: shikiOptions.langs,
            theme: {
                default: shikiOptions.defaultTheme,
                dark: shikiOptions.darkTheme,
            },
        },
        markdown: {
            remarkPlugins: ["remark-reading-time"],
            toc: { depth: 4, searchDepth: 4 }, //目录渲染
        },
    },

    icon: {
        customCollections: [{ prefix: "zi", dir: "https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/favicon.ico" }],
        // BUG: 首次加载有概率无图标
    },

    image: {
        domains: [
        ],
        format: ["avif", "webp"],
    },


    robots: {
        disallow: ["/preview", "/previews/*"],
    },

    shiki: {
        bundledLangs: shikiOptions.langs,
        bundledThemes: shikiOptions.themes,
        defaultLang: "log",
        defaultTheme: {
            light: shikiOptions.defaultTheme,
            dark: shikiOptions.darkTheme,
        },
    },

    site: {
        name: blogConfig.title,
        url: blogConfig.url,
    },
});

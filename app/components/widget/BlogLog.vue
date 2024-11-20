<script setup lang="ts">
const appConfig = useAppConfig()
const timeEstablished = appConfig.timeEstablished

const blogLog = [
    { date: '2024-11-14', content: '添加文章分类功能，详情页添加文章进度指示条'},
    { date: '2024-11-12', content: 'canvas实现全屏的飘雪动画, 添加专栏页面，添加时间与文章记录'},
    { date: '2024-11-10', content: '网站上线，添加若干小功能和代码注释, 文章与归档页面添加升降序选项'},
    { date: '2023-11-2', content: '网站首屏加载缓慢,SEO优化困难,迁移至Nuxt开源项目https://blog.zhilu.cyou进行二次开发' },
    { date: '2024-06-21', content: 'Vue+NodeJS搭建全栈式博客' },
    { date: timeEstablished, content: '更新第一篇文章' },
]
</script>

<template>
    <h3 class="widget-title">
        更新日志
    </h3>
    <!-- TODO: 优化时间线样式 -->
    <div class="widget-card" id='log'>
        <ul>
            <li v-for="(item, index) in blogLog" :key="index">
                <small>{{ item.date }}</small><br>
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>

<style>
#log{

}
</style>

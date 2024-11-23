<script lang="ts" setup>
import type ArticleProps from "~/types/article";
const props = defineProps<{
    to?: string;
    article: ArticleProps;
}>();

const formattedDate = computed(() => {
    if (!props.article.date) return "无效日期";
    const date = new Date(props.article.date);
    // 使用 padStart 补零
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
});
</script>

<template>
    <ol class="article">
        <ZRawLink :to>
            <time>{{ formattedDate }}&nbsp &nbsp</time>
            <span>
                 {{ article.title }}
            </span>
            <NuxtImg v-if="image" class="article-cover" :src="image" :alt="title" loading="lazy" />
        </ZRawLink>
    </ol>
</template>

<style lang="scss" scoped>
.article {
    // @include border();
    position: relative;
    border-radius: 5px;
    border: 2px solid transparent;
    margin-bottom: -10px;
    time{
        display: inline-block;
        opacity: 0.4;
        font-family: var(--font-monospace);
        white-space: nowrap;
        transition: opacity 0.2s;
    }

    &:hover  {
        border: 2px solid #B97BDB;
        background-color: rgba(185, 123, 219, 0.1) ;
    }
    &:hover time {
        opacity: 1;
    }
}
</style>

<script setup lang="ts">
import friends from '~/friends'
import subscriptions from '~/subscriptions'

const layoutStore = useLayoutStore()
layoutStore.setAside([])

const { data: postLink } = await useAsyncData('/link', () => queryContent('/link').findOne())
postLink.value && useContentHead(postLink.value)
</script>

<template>
    <!-- <header class="link-reminder">
        <div class="operations">
            <ProseA href="https://app.follow.is/share/feeds/62533754566736896" icon="ph:list-plus-bold">
                在 Follow 上订阅
            </ProseA>
        </div>
    </header> -->

    <FeedGroup label="友链" :feeds="friends" />
    <FeedGroup label="订阅" :feeds="subscriptions" />

    <ContentRenderer :value="postLink">
        <!-- <ContentRendererMarkdown
            class="article"
            :value="postLink ?? {}"
            tag="article"
        /> -->
        <template #empty>
            <ZError
                icon="solar:confounded-square-bold-duotone"
                title="未配置友链文件"
            />
        </template>
        <PostComment key="/link" />
    </ContentRenderer>
</template>

<style lang="scss" scoped>
.link-reminder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.8rem 2rem;
    margin: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    background: var(--c-primary-soft);

    .operations {
        display: flex;
        flex-basis: 10em;
        flex-grow: 1;
        justify-content: end;
        gap: 0.2em 1rem;
        flex-wrap: wrap;
    }
}
</style>

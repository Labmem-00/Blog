<script setup lang="ts">
import { alphabetical, sort } from 'radash'
const layoutStore = useLayoutStore()
layoutStore.setAside(['blog_stats'])

const appConfig = useAppConfig()
useSeoMeta({
    description: appConfig.description,
})

//分页页数
const perPage = appConfig.indexGenerator.perPage || 10
//排序字段
const orderBy = ref(appConfig.indexGenerator.orderBy || 'date')
//排序方向
const orderDirection = ref(true)
const categoryStore = useCategoryStore()


const { data: listRaw } = await useAsyncData(
    'posts_index',
    () => queryContent()
        .only(['_path', 'categories', 'image', 'date', 'description', 'readingTime', 'recommend', 'title', 'updated', 'show'])
        .where({
            $and: [
                {
                    $or:[
                        { _original_dir: { $eq: '/posts' }},
                        { _original_dir: { $eq: '/columns'}},
                    ]
                },
                {
                    $or:[
                        {show: {$exists: false}},
                        {show: true}
                    ]
                }   
            ]
        })
        .find(),
    { default: () => [] },
)
console.log(listRaw.value)
const listFilterCate = computed(() => {

    return categoryStore.currentCate !== '分类'
        ? listRaw.value.filter(post => {
            return post.categories && post.categories.includes(categoryStore.currentCate)
        })
        : listRaw.value
})

const listSorted = computed(() => alphabetical(
    listFilterCate.value,
    item => item[orderBy.value],
    orderDirection.value ? 'desc' : 'asc',
))

const { page, totalPages, listPaged } = usePagination(listSorted, {
    perPage,
    bindParam: 'id',
})

const listRecommended = computed(() => sort(
    listRaw.value.filter(item => item?.recommend),
    post => post.recommend,
    true,
))
const changeOrderDir = ()=>{
    orderDirection.value = !orderDirection.value;
}

useSeoMeta({
    title: () => page.value > 1 ? `第${page.value}页` : '',
})
</script>

<template>
    <div class="mobile-only">
        <!-- 若不包裹，display: none 在 JS 加载后才有足够优先级 -->
        <ZhiluHeader to="/" />
    </div>
    <PostSlide v-if="listRecommended?.length && page === 1" :list="listRecommended" />
    <div class="post-list">
        <div class="toolbar">
            <div class="preview-entrance">
                <!-- 外层元素用于占位 -->
                <ZRawLink to="/preview">
                    <Icon name="ph:file-lock-bold" />
                    <!-- 查看预览文章 -->
                </ZRawLink>
            </div>
            <ZOrderToggle 
                @direction="changeOrderDir"
                v-model="orderBy" 
                class="order-toggle" 
            />
        </div>
        <NuxtPage :list="listPaged" :order-by />
        <ZPagination v-model="page" :per-page :total-pages />
    </div>
</template>

<style lang="scss" scoped>
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .preview-entrance {
        a {
            position: relative;
            opacity: 0;
            transition: all 0.2s 1s, color 0.2s;
            z-index: -1;
        }

        &:hover {
            a {
                opacity: 1;
                color: var(--c-primary);
                z-index: 0;
            }
        }
    }
}

.post-list {
    margin: 1rem;
}
</style>

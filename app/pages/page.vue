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

// useAsyncData默认只在组件渲染时加载一次，且自动缓存数据不便于控制
const list = ref<any[]>([]);
const cache = ref<{ [key: string]: any[] }>({})   // 用来缓存不同分类的数据
const fetchData = async (category: string) => {
    // 检查缓存是否存在
    if (cache.value[category]) {
        // 如果缓存中有数据，直接使用缓存数据
        list.value = cache.value[category];
        return;
    }
    const query = queryContent()
        .only(['_path', 'categories', 'image', 'date', 'description', 'readingTime', 'recommend', 'title', 'updated'])
        .where({ _original_dir: { $eq: '/posts' }, });

    if (category !== '分类') {
        query.where({ categories: { $in: [category] } });
    }

    const data = await query.find();
    cache.value[category] = data;
    list.value = data;
};
await fetchData(categoryStore.currentCate);
watchEffect(() => {
    const currentCategory = categoryStore.currentCate;
    // 每当分类变化时，调用 fetchData 更新列表
    fetchData(currentCategory);
});


const { data: listRaw } = await useAsyncData(
    'all_post',
    () =>{
        const query = queryContent()
        .only(['_path', 'categories', 'image', 'date', 'description', 'readingTime', 'recommend', 'title', 'updated'])
        .where({ _original_dir: { $eq: '/posts' }, });
        if(categoryStore.currentCate !=='分类'){
            query.where({categories: {$in: [categoryStore.currentCate]}});
        }
        return query.find();
    },
    { default: () => [] },
)
    
const listSorted = computed(() => alphabetical(
    list.value,
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

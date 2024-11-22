<script lang="ts" setup>
useSeoMeta({
    title: "专栏",
    description: "专栏文章",
});
const layoutStore = useLayoutStore();
layoutStore.setAside([]);

const appConfig = useAppConfig();
const columns = appConfig.columns;
const route = useRoute(); // 获取当前路由信息
const isColumn = ref(true);
</script>

<template>
    <div class="blog-column">
        <div class="column-title">
            <p>
                <span>专</span>
                <span>栏</span>
                <img
                    src="https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/桶子.png"
                />
            </p>
        </div>
        <div class="column-contain">
            <div class="row" v-show="route.path === '/column'">
                <p class="column-item" v-for="(column, index) in columns">
                    <ZRawLink :to="`/column/${column.name}`">
                        <img :src="column.img" alt="" />
                        <span>{{ column.name }}</span>
                    </ZRawLink>
                </p>
            </div>
            <!-- 神奇的解决方式，在动态切换子路由时不卡顿了 -->
            <KeepAlive>
                <NuxtPage v-if="route.path !== '/column'"></NuxtPage>
            </KeepAlive>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.column-contain {
    position: relative;
    top: 60px;
    margin-bottom: 150px;
    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
}

.column-item {
    width: 180px;
    height: 240px;
    font-size: 20px;
    max-width: 240px;
    border: 1px solid #000; /* 黑色细边框 */
    border-radius: 3px;
    box-shadow: -10px 5px 15px var(--bg-shadow-1);
    transform: rotate(10deg) scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: rotate(0deg) scale(1.3);
        box-shadow: -20px 10px 25px var(--bg-shadow-2);
        span {
            opacity: 0;
            visibility: hidden;
        }
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        object-fit: cover;
    }
    span {
        opacity: 1;
        visibility: visible; /* 默认可见 */
        transition: opacity 1s ease; /* 在不hover时触发过渡 */
    }
}

.column-title {
    @media screen and (max-width: $breakpoint-phone) {
        left: 28%;
    }
    position: relative;
    top: 10px;
    & p:after {
        content: "";
        display: inline-block;
        position: relative;
        top: 40px;
        right: 60px;
        width: 200px;
        height: 80px;
        border: #5a5a5a 3px solid;
        z-index: -1;
    }
    & img {
        position: absolute;
        height: 80px;
        width: auto;
    }
    & span {
        background-color: var(--c-bg-1);
        position: relative;
        bottom: 10px;
        &:first-child {
            position: relative;
            font-size: 50px;
        }
        &:nth-child(2) {
            font-size: 30px;
        }
    }
}
</style>

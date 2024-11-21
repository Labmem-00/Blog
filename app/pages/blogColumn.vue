<script lang="ts" setup>
useSeoMeta({
    title: "专栏",
    description: "专栏文章",
});
const layoutStore = useLayoutStore();
layoutStore.setAside(["blog_stats"]);

const appConfig = useAppConfig();
const columns = appConfig.columns;
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
            <div class="row">
                <p class="column-item" v-for="(column, index) in columns">
                    <img :src="column.img" alt="" >
                    <span>{{ column.name }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.column-contain {
    position: relative;
    top: 50px;
    margin-bottom: 120px;
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
    background: #f5f5f5;
    border: 5px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    transform: rotate(10deg) scale(1); /* 默认旋转角度 */
    transition: transform 0.3s ease, transform 0.3s ease; /* 设置旋转与放大的过渡效果 */
    &:hover{
        transform: rotate(0deg) scale(1.3);
    }
    img {
        width: 100%;
        height: 90%;
        object-fit: cover;
    }
}

.column-title {
    position: relative;
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

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
                    <img :src="column.img" alt="" />
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.column-contain {
    width: 100%;
    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* 设置间距 */
        justify-content: center; /* 居中对齐 */
    }
}

.column-item{
    flex: 0 0 25%; 
    max-width: 20%;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 10px;
    }
}

@media (max-width: 768px) {
  .column-item {
    flex: 1 1 calc(33.333% - 20px); /* 每行 3 个 */
    max-width: calc(33.333% - 20px);
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

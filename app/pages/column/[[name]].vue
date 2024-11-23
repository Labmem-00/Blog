<template>
    <div class="column-list">
        <div class="column-title">
            <h2 class="column-name">专栏 - {{ name }}</h2>
            <div class="column-info">
                <span>{{ columnWords }}字</span>
                <span>{{ listFilterColumn.length }}篇</span>
            </div>
        </div>
        <menu>
            <li>
                <ZColumn
                    v-for="article in listSorted"
                    :key="article._path"
                    :to="article._path"
                    :article="article"
                ></ZColumn>
            </li>
        </menu>
    </div>
</template>

<script lang="ts" setup>
import { alphabetical } from "radash";
const route = useRoute();
const name = computed(() => route.params.name);

const { data: listRaw } = await useAsyncData(
    "column_index",
    () =>
        queryContent()
            .only([
                "_path",
                "categories",
                "image",
                "date",
                "description",
                "readingTime",
                "recommend",
                "title",
                "updated",
            ])
            .where({
                _original_dir: { $eq: "/posts" },
                categories: { $in: ["专栏"] },
            })
            .find(),
    { default: () => [] }
);
console.log(listRaw.value);

//根据路径名动态过滤相关专栏
const listFilterColumn = computed(() => {
    return listRaw.value.filter((column) => {
        return column.categories[1] == name.value;
    });
});
const listSorted = computed(() =>
    alphabetical(listFilterColumn.value, (item) => item["date"], "asc")
);
const columnWords = computed(() => {
    return listFilterColumn.value.reduce(
        (acc, column) => acc + column.readingTime.words,
        0
    );
});
</script>

<style lang="scss" scoped>
.column-list {
    padding: 1rem 0;
    position: relative;
    top: -30px;
    &:hover .column-title {
        color: var(--c-text-3);
    }

    menu{
        position: relative;
        top: 10px;
    }
}

.column-title {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    position: sticky;
    opacity: 0.5;
    font-size: min(1em, 1em);
    @media screen and (max-width: $breakpoint-phone){
        font-size: min(0.5em, 0.5em);
    }
    color: transparent;
    transition: color 0.2s;
    .column-name {
        margin-bottom: -0.3em;
        mask: linear-gradient(#fff 50%, transparent);
        font: 800 3em/1 var(--font-stroke-free);
        z-index: -1;
        -webkit-text-stroke: 1px var(--c-text-1);
    }
    .column-info {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        column-gap: 0.5em;
        flex-wrap: wrap;
        font-size: 24px;
    }
}
</style>

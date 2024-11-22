<template>
    <h1>{{ listFilterColumn}}</h1>
</template>

<script lang="ts" setup>
const route = useRoute()
const name = computed(() => route.params.name);

const { data: listRaw } = await useAsyncData(
    'column_index',
    () => queryContent()
        .only(['_path', 'categories', 'image', 'date', 'description', 'readingTime', 'recommend', 'title', 'updated'])
        .where(
            { 
                _original_dir: { $eq: '/posts' },
                categories: { $in: ['专栏'] }
            }
        )
        .find(),
    { default: () => [] },
)
console.log(listRaw.value)

//根据路径名动态过滤相关专栏
const listFilterColumn = computed(()=>{
    return listRaw.value.filter(column=>{
        return column.categories[1] == name.value
    })
})
</script>

<style lang="scss" scoped>
</style>
<template>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "专栏",
    description: "专栏文章"
})

const layoutStore = useLayoutStore()
layoutStore.setAside(['blog_stats'])
</script>

<style lang="scss" scoped>
</style>
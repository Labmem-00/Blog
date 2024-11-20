<script setup lang="ts">
import CategoryBar from "./CategoryBar.vue";

const layoutStore = useLayoutStore();
const cateStore = useCategoryStore();

enum SortOrder {
    Ascending = "升序",
    Descending = "降序",
}
const appConfig = useAppConfig();

const orderMap = appConfig.article.order;
const orderDirection = ref(SortOrder.Descending);
const orderText = computed(() => orderDirection.value);

const orderBy = defineModel<keyof typeof orderMap>({
    required: true,
    default: "date",
});
const emit = defineEmits(["direction"]);
const props = withDefaults(defineProps<{
    isOpenCate?: boolean
}>(),
{
    isOpenCate: true
})

function switchOrder() {
    const orderKeys = Object.keys(orderMap) as (keyof typeof orderMap)[];
    const currentIndex = orderKeys.indexOf(orderBy.value);
    orderBy.value = orderKeys[(currentIndex + 1) % orderKeys.length]!;
}
const switchDirection = () => {
    emit("direction"); //触发排序方向改变事件
    orderDirection.value =
        orderDirection.value === SortOrder.Descending
            ? SortOrder.Ascending
            : SortOrder.Descending;
};
onBeforeUnmount(() => {
    layoutStore.closeOne("category");
});
</script>

<template>
    <div class="order-toggle">
        <button @click="layoutStore.toggle('category')" v-if="props.isOpenCate">
            <Icon
                :name="
                    layoutStore.isOpen('category') ? 'fe:book' : 'prime:book'
                "
            ></Icon>
            <span>
                {{ cateStore.currentCate }}
            </span>
            <CategoryBar></CategoryBar>
        </button>
        <button @click="switchDirection">
            <Icon
                :name="
                    orderDirection === SortOrder.Descending
                        ? 'ph:sort-ascending-bold'
                        : 'ph:sort-descending-bold'
                "
            />
            <span>{{ orderText }}</span>
        </button>

        <button @click="switchOrder">
            <Icon name="ph:clock-bold" />
            <span class="order-text">{{ orderMap[orderBy] }}</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.order-toggle {
    text-align: right;
    
    & button:first-of-type{
        position: relative;
        left: 15px;
        width: 100px;
    }

    > button {
        color: var(--c-text-2);
        transition: color 0.1s;
        margin-left: 1rem;
        &:hover {
            color: var(--c-primary);
        }
    }
}
</style>

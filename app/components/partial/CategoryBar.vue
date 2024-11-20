<script lang="ts" setup>
const cateStore = useCategoryStore();
const layoutStore = useLayoutStore();
</script>

<template>
    <div class="cate-bar" @click.stop>
        <Transition name="spring">
            <ul v-if="layoutStore.isOpen('category')">
                <li
                    v-for="name in cateStore.categoryNames"
                    @click="
                        cateStore.setCateName(name);
                        layoutStore.toggle('category');
                    "
                    :key="name"
                >
                    <span>{{ name ==='分类' ?'默认':name }}</span>
                </li>
            </ul>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.cate-bar {
    color: var(--c-text);
    position: absolute;
    top: 20px;
    left: -1.5px;
    height: auto;
    width: 120px;
    border-radius: 10px;
    z-index: 99;

    & ul {
        // @include border();
        margin-top: 10%;
        border-radius: 10px;
        background-color: var(--bg-a);
        backdrop-filter: blur(3px); /* 高斯模糊 */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
    }

    & li {
        color: var(--c-text-1);
        border-radius: 10px;
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
        &:hover {
            background: linear-gradient(
                to right,
                rgba(30, 144, 255, 0) 0%,
                rgba(30, 144, 255, 0.5) 50%,
                rgba(30, 144, 255, 0) 100% /* 右边透明 */
            );
        }
    }
}

.spring-enter-active {
    animation: bounceIn 0.5s ease-out forwards;
}
.spring-leave-active {
    animation: bounceOut 0.5s ease-out forwards;
}

@keyframes bounceIn {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    50% {
        transform: translateY(-5px);
    }
    70% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes bounceOut {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(50%);
        opacity: 0;
    }
}
</style>

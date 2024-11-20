<template>
    <div class="progress-circle-container">
        <!-- 动态调整画布尺寸 -->
        <canvas ref="canvas" :width="size" :height="size"></canvas>
        <span class="progress-text">{{ progress }}%</span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from "vue";

// 传入的进度值（父组件传递）
const props = defineProps({
    progress: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        default: 80, // 默认大小为 80px
    },
});

// 获取画布元素
const canvas = ref<HTMLCanvasElement | null>(null);

// 绘制圆环的函数
const drawCircle = (progress: number, size: number) => {
    if (!canvas.value) return;

    const ctx = canvas.value.getContext("2d");
    if (!ctx) return;

    const radius = size / 2 - 10; // 圆环半径（调整为画布大小的 1/2 减去一定的内边距）
    const centerX = size / 2; // 画布的中心点
    const centerY = size / 2; // 画布的中心点
    const lineWidth = 3;

    // 清空画布
    ctx.clearRect(0, 0, size, size);

    // 设置背景圆环
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    // 设置进度圆环
    const angle = (progress / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + angle);
    ctx.strokeStyle = "#1E90FF";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();
};

// 在进度变化时重新绘制
watch(
    () => props.progress,
    (newProgress) => {
        drawCircle(newProgress, props.size);
    },
    { immediate: true } // 立即调用一次
);

// 在尺寸变化时重新绘制
watch(
    () => props.size,
    (newSize) => {
        drawCircle(props.progress, newSize);
    }
);
</script>

<style scoped>
.progress-circle-container {
    position: relative;
    display: inline-block;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 500;
}
</style>

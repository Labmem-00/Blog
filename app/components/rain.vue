<template>
    <div class="rain-container">
      <canvas ref="rainCanvas" class="rain-canvas"></canvas>
    </div>
  </template>
  
  <script>
  const CREAT_RAIN_SPACE_TIME = 100; // 雨滴生成间隔
  const RAIN_RACE_TIME = 16; // 每帧更新时间（大约60FPS）
  
  export default {
    data() {
      return {
        rains: [], // 存储雨滴
        maxHeight: 0,
        maxWidth: 0,
        animationFrameId: null,
        ctx: null, // Canvas上下文
      };
    },
    mounted() {
      if (process.client) { // 仅在客户端执行
        this.maxHeight = window.innerHeight; // 获取窗口高度
        this.maxWidth = window.innerWidth;  // 获取窗口宽度
        this.initCanvas(); // 初始化 Canvas
        this.initialRains(); // 启动雨滴生成
        this.animateRains(); // 启动雨滴动画
      }
    },
    methods: {
      initCanvas() {
        const canvas = this.$refs.rainCanvas;
        if (canvas) {
          this.ctx = canvas.getContext('2d');
          canvas.width = this.maxWidth;
          canvas.height = this.maxHeight;
        } else {
          console.error("Canvas element not found!");
        }
      },
      initialRains() {
        // 每隔一段时间生成雨滴
        setInterval(() => {
          const rainItem = {
            x: Math.random() * this.maxWidth, // 随机水平位置
            y: -50, // 初始位置
            speed: Math.random() * 2 + 0.5, // 随机雨滴速度
            angle: Math.random() * Math.PI / 4 - Math.PI / 8, // 随机雨滴角度，控制倾斜方向
            size: Math.random() * 2 + 2, // 随机雨滴大小
            opacity: Math.random() * 0.2 + 0.4, // 随机透明度，模拟远近的效果
          };
          this.rains.push(rainItem);
        }, CREAT_RAIN_SPACE_TIME);
      },
      animateRains() {
        this.animationFrameId = requestAnimationFrame(this.animateRains);
        this.ctx.clearRect(0, 0, this.maxWidth, this.maxHeight); // 清除整个 Canvas
  
        // 更新雨滴位置并绘制
        this.rains.forEach((rainItem, idx) => {
          rainItem.x += Math.sin(rainItem.angle) * rainItem.speed; // 根据角度调整水平速度
          rainItem.y += rainItem.speed; // 更新雨滴的垂直速度
          this.drawRain(rainItem);
  
          // 如果雨滴到达屏幕底部，重置位置
          if (rainItem.y >= this.maxHeight) {
            // 重置雨滴的位置
            this.rains[idx].y = -50; // 重新将雨滴位置设置为屏幕顶部
            this.rains[idx].x = Math.random() * this.maxWidth; // 随机水平位置
            this.rains[idx].size = Math.random() * 2 + 2; // 随机大小
            this.rains[idx].angle = Math.random() * Math.PI / 4 - Math.PI / 8; // 随机角度
          }
        });
  
        // 控制更新频率，避免雨滴数量过多
        if (this.rains.length > 100) {
          this.rains.shift(); // 如果雨滴数量超过最大限制，移除最旧的雨滴
        }
      },
      drawRain(rainItem) {
        this.ctx.beginPath();
        this.ctx.moveTo(rainItem.x, rainItem.y);
        this.ctx.lineTo(rainItem.x + Math.sin(rainItem.angle) * rainItem.size, rainItem.y + rainItem.size); // 雨滴倾斜绘制
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${rainItem.opacity})`; // 设置透明度，模拟远近
        this.ctx.lineWidth = rainItem.size;
        this.ctx.stroke();
      },
    },
    destroyed() {
      cancelAnimationFrame(this.animationFrameId); // 清除动画帧
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .rain-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }
  
  .rain-canvas {
    width: 100%;
    height: 100%;
  }
</style>
  
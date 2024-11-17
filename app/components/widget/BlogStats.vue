<script setup lang="ts">
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

let { year, dayOfYear, yearProgress } = calculateTime();
let time: NodeJS.Timeout;
const dayProgress = ref<string>();
const computedDayPro = computed(() => {
    return dayProgress.value;
});

const timeEstablished = ref(timeElapse(appConfig.timeEstablished));
const timeUpdated = ref(timeElapse(runtimeConfig.public.buildTime));
const totalWords = ref(appConfig.stats.wordCount);
const totalPosts = ref(appConfig.stats.postCount);

const blogStats = [
    {
        title: "运营时长",
        content: timeEstablished,
    },
    {
        title: "上次更新",
        content: timeUpdated,
    },
    {
        title: "总字数",
        content: totalWords,
    },
];

onMounted(async () => {
    time = setInterval(() => {
        dayProgress.value = getDayProgress();
    }, 100);
    const { data: stats } = await useFetch("/api/stats");
    if (stats.value) {
        totalWords.value = formatNumber(stats.value.totalWords);
        totalPosts.value = stats.value.totalPosts;
    }
});

onBeforeUnmount(()=>{
    clearInterval(time);
})

</script>

<template>
    <h3 class="widget-title">记录板</h3>
    <!-- <div class="video-container">
        <video
            ref="videoPlayer"
            class="background-video"
            autoplay
            loop
            muted
            playsinline
        >
            <source src="./miao.mp4" type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </div> -->
    <div class="widget-card">
        <ul>
            <li
                v-for="(item, index) in blogStats"
                :key="index"
                data-allow-mismatch
            >
                <small>{{ item.title }}</small
                ><br />
                {{ item.content }}
            </li>
        </ul>
        <span>共计发布&nbsp{{ totalPosts }}&nbsp篇文章,&nbsp继续加油🤠</span>
        <div class="date">
            <div>
                今天是&nbsp<span>{{ year }}</span
                >&nbsp的第&nbsp{{ dayOfYear }}&nbsp天
            </div>
            <div>今年已过&nbsp{{ yearProgress }}%</div>
            <div>今天已过&nbsp{{ computedDayPro }}%</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    text-align: center;

    > li {
        flex: 1;
        white-space: nowrap;
    }
}
.date {
    > div {
        margin-bottom: 5px;
        > span {
            color: var(--c-normal);
        }
    }
    color: var(--c-text-1);
    border-top: 2px dotted var(--c-text);
    margin-top: 10px;
    padding-top: 15px;
    width: 100%;
}
// .video-container {
//     z-index: -1;
//     position: absolute;
//     video {
//         width: 80%;
//         height: 80%
//     }
// }
</style>

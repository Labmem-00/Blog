<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
    <footer class="z-footer">
        <div class="footer-line">
            <P><strong>TimeLeap-</strong></P>
            <p>到别的世界线看看？</p>
        </div>
        <nav class="footer-nav">
            <div
                v-for="(group, groupIndex) in appConfig.footer.nav"
                :key="groupIndex"
                class="footer-nav-group"
            >
                <h3 v-if="group.title">
                    {{ group.title }}
                </h3>
                <menu>
                    <li
                        v-for="(item, itemIndex) in group.items"
                        :key="itemIndex"
                    >
                        <ZRawLink :to="item.url">
                            <Icon :name="item.icon" />
                            <span class="nav-text">{{ item.text }}</span>
                        </ZRawLink>
                    </li>
                </menu>
            </div>
            <p v-html="appConfig.footer.copyright" />
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
.footer-line {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 21px;
    position: absolute;
    top: -30px;
    background-image: linear-gradient(
        to right,
        #6c7f97,
        /* 淡蓝灰色 */ #7b91a6,
        /* 明亮的蓝灰色 */ #8aa4b5,
        /* 淡蓝色 */ #a1b7c4,
        /* 亮淡蓝色 */ #adc1d3 /* 浅淡蓝色 */
    );
}
.z-footer {
    position: relative;
    @include bgImg(
        "https://cdn.jsdelivr.net/gh/Labmem-00/img-hosting@main/LabBlog/footer.png"
    );
    background-position: right bottom;
    margin: 3rem 1rem;
    font-size: 0.9em;
    color: var(--c-text-2);
    display: flex;
    justify-content: center;
    .footer-nav {
        display: flex;
        gap: 5vw;
        padding-block: 3rem;
        flex-wrap: wrap;
        h3 {
            margin: 0.5em;
            font: inherit;
        }

        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
            width: fit-content;
            padding: 0.3em 0.5em;
            border-radius: 0.5em;
            font-size: 0.9em;
            transition: background-color 0.2s, color 0.1s;

            &:hover {
                background-color: var(--c-bg-soft);
                color: var(--c-text);
            }
        }
    }
}
</style>

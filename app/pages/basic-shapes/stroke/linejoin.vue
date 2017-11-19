<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- miter 尖的 -->
                    <polyline
                        points="30 30, 45 15, 60 30"
                        stroke="#c7254e"
                        stroke-width="10"
                        stroke-linejoin="miter"
                        fill="none"
                    />
                    <!-- round 圆的 -->
                    <polyline
                        points="130 30, 145 15, 160 30"
                        stroke="#c7254e"
                        stroke-width="10"
                        stroke-linejoin="round"
                        fill="none"
                    />
                    <!-- bevel 平的 -->
                    <polyline
                        points="230 30, 245 15, 260 30"
                        stroke="#c7254e"
                        stroke-width="10"
                        stroke-linejoin="bevel"
                        fill="none"
                    />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    module.exports = {};
</script>

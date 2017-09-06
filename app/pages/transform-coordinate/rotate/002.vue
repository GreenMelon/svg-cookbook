<style lang="less" scoped>
</style>

<template>
    <main>
        <h1>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch06/rotate-center.html" target="_blank">在线示例</a>
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <!-- 轴心点  -->
            <circle cx="200" cy="150" r="5" />

            <!-- 未旋转的箭头 -->
            <g id="arrow" style="stroke: black; stroke-width: 3px;">
                <line x1="210" y1="150" x2="310" y2="150" />
                <polygon points="310 140, 310 160, 330 150" />
            </g>

            <use xlink:href="#arrow" transform="rotate(60, 200, 150)" />
            <use xlink:href="#arrow" transform="rotate(150, 200, 150)" />
            <use xlink:href="#arrow" transform="rotate(-90, 200, 150)" />
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

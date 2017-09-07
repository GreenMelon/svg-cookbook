<style lang="less" scoped>
</style>

<template>
    <main>
        <!--
            缩放公式:
            translate(- centerX * (factor -1), - centerY * (factor -1))
            scale(factor)
        -->


        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <!-- 中心点  -->
            <circle cx="50" cy="50" r="2" />

            <!-- 原来的图形 -->
            <g id="box" style="stroke: black; fill: none;">
                <rect x="35" y="40" width="30" height="20" />
            </g>

            <use xlink:href="#box" transform="translate(-50, -50) scale(2)" style="stroke-width: .5;" />
            <use xlink:href="#box" transform="translate(-75, -75) scale(2.5)" style="stroke-width: .4;" />
            <use xlink:href="#box" transform="translate(-100, -100) scale(3)" style="stroke-width: .33;" />
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

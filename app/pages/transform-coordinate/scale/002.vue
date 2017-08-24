<style lang="less" scoped>
</style>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g id="square">
                <rect x="10" y="10" width="20" height="20" style="stroke: #000; fill: none;" />
            </g>

            <!-- scale(x-value, y-value) -->
            <!-- 不等比缩放 所有的x坐标和y坐标乘以相应的值 -->
            <use xlink:href="#square" transform="scale(2, 1)" />
            <use xlink:href="#square" transform="scale(4, 2)" />
            <use xlink:href="#square" transform="scale(8, 4)" />
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

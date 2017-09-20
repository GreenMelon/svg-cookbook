<style lang="less" scoped>
</style>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g style="stroke: #f00; fill: none;">
                <path d="M 180 100 L 80 200 L 180 200 M 220 100 L 320 200 L 220 200" />
                <!-- 路径占用的内存更少 -->
                <!-- 紧凑的路径表示法在传播图形时可以减少带宽 -->
            </g>
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

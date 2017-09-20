<style lang="less" scoped>
</style>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g style="stroke: #000; fill: none;">
                <!-- 绝对坐标表示法 -->
                <path d="M 100 100 L 300 100 L 200 200 L 100 100" />

                <!-- 相对坐标表示法 -->
                <path d="M 100 100 l 200 0 l -100 100 l -100 -100" />
            </g>
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

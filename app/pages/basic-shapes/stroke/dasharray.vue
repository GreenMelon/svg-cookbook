<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
</style>

<template>
    <main>
        <!-- stroke-dasharray的值由一系列数字构成，代表线的长度和空隙的长度 -->
        <ul>
            <li>
                <!-- 10个像素的虚线，5个像素的空隙 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1" style="stroke-dasharray: 10 5" />
                </svg>
            </li>
            <li>
                <!-- 8个像素的虚线，4个像素的空隙，2个像素的虚线，1个像素的空隙 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1" style="stroke-dasharray: 8 4 2 1;" />
                </svg>
            </li>
            <li>
                <!-- 复制奇数个数 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1" style="stroke-dasharray: 7 3 1;" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    module.exports = {};
</script>

<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
    line {
        stroke-width: 10;
    }
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- 关键字 -->
                    <line x1="100" y1="50" x2="300" y2="50" style="stroke: black" />
                    <!-- 16进制 -->
                    <line x1="100" y1="100" x2="300" y2="100" style="stroke: #f00" />
                    <!-- rgb -->
                    <line x1="100" y1="150" x2="300" y2="150" style="stroke: rgb(0, 255, 0)" />
                    <!-- rgb -->
                    <line x1="100" y1="200" x2="300" y2="200" style="stroke: rgb(0%, 0%, 100%)" />
                    <!-- rgba -->
                    <line x1="100" y1="250" x2="300" y2="250" style="stroke: rgba(255, 255, 0, 0.5)" />
                    <!-- currentColor -->
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {};
</script>

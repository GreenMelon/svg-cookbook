<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
</style>

<template>
    <main>
        <ul>
            <!-- 默认用黑色填充 -->
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <rect x="100" y="75" width="200" height="150" rx="0" ry="0" stroke-width="5" stroke="#000" />
                </svg>
            </li>
            <!-- 不填充，保持透明 -->
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <rect x="100" y="75" width="200" height="150" rx="0" ry="0" stroke-width="5" stroke="#000" fill="none" />
                </svg>
            </li>
            <!-- 指定填充颜色 -->
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <rect x="100" y="75" width="200" height="150" stroke-width="5" stroke="#000" fill="#007dd4" />
                </svg>
            </li>
            <!-- 半透明填充 fill-opacity -->
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <rect x="100" y="75" width="200" height="150" stroke-width="5" stroke="#c7254e" fill="#007dd4" fill-opacity=".5" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    module.exports = {}
</script>

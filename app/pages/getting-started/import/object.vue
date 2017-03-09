<style lang="less" scoped>
</style>

<template>
    <main>
        <!--
            type属性表示要嵌入的文档类型 MIME
            data属性指定了文件的位置
        -->
        <object type="image/svg+xml" data="/app/images/watermelon.svg" alt="melon" title="svg">
            <!-- 文本和图像作为备用选项 -->
            <p>No SVG Support!</p>
            <img src="/app/images/watermelon.svg" alt="">
        </object>
    </main>
</template>

<script>
    module.exports = {};
</script>

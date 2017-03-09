<style lang="less" scoped>
</style>

<template>
    <main>
        <!--
            支持老版本浏览器
            src属性指定了文件的位置
            不能包含任何子元素(文本和注释可以？)
            pluginspage
        -->
        <embed src="/app/images/watermelon.svg"></embed>
        <embed src="/app/images/watermelon.svg">
            <!-- 注释 -->
        </embed>
    </main>
</template>

<script>
    module.exports = {};
</script>

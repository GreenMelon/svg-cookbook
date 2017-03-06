<style lang="less" scoped>
</style>

<template>
    <main>
        <!-- XML处理指令 -->
        <?xml version="1.0"?>
        <!-- DOCTYPE声明 -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">

        <!-- title元素的内容被显示在标题栏或作为鼠标指向时的提示 -->
        <title>circle</title>
        <!-- 定义完整的描述信息 -->
        <desc>More info</desc>

            <!-- 在这里绘制 -->
            <circle cx="200" cy="150" r="50" style="stroke: black; fill: none" />

            <!-- 位置和尺寸是绘图结构的一部分 -->
            <!-- 颜色是表现的一部分 -->
            <!-- 要做到结构和表现相分离,表现信息放在style属性中 -->

        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

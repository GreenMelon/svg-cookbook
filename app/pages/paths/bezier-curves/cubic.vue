<style lang="less" scoped>
</style>

<template>
    <main>
        <p>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch07/cubic-bezier.html" target="_blank">三次贝塞尔曲线在线示例</a>
        </p>
        <!-- 绘制三次贝塞尔曲线需要四个参数 -->
        <!-- 起点坐标 控制点1坐标 控制点2坐标 终点坐标 -->

        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
            <g style="stroke: #000; fill: none;">
                <!-- 命令C表示 -->
                <path d="M 20 80 C 50 20, 150 60, 200 120" />
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
            <g style="stroke: #000; fill: none;">
                <!-- 可以指定多组坐标,生成多边三次贝塞尔曲线 -->
                <path d="M 30 100 C 50 50, 70 20, 100 100, 110 130, 45 150, 65 100"/>
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
            <g style="stroke: #000; fill: none;">
                <!-- 命令S可以实现平滑的多边三次贝塞尔曲线 -->
                <!-- 新的曲线的起点是上一段曲线的端点 -->
                <!-- 新的曲线的第一个控制点自动计算,是上一段曲线的控制点的中心对称点 -->
                <!-- 需要下一个端点的控制点坐标和下一个端点坐标 -->
                <path d="M 30 100 C 50 30, 70 50, 100 100 S 150 40, 200 80"/>
            </g>
        </svg>
    </main>
</template>

<script>
    module.exports = {}
</script>

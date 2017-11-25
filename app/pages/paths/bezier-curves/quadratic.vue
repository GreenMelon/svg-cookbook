<template>
    <main>
        <p>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch07/quadratic-bezier.html" target="_blank">简单的二次贝塞尔曲线在线示例</a>
        </p>
        <p>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch07/smooth-quadratic-bezier.html" target="_blank">平滑的二次贝塞尔曲线在线示例</a>
        </p>
        <!-- 绘制二次贝塞尔曲线需要三个参数 -->
        <!-- 起点坐标 控制点坐标 终点坐标 -->
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g style="stroke: #000; fill: none;">
                <!-- 命令Q表示 -->
                <path d="M 50 100 Q 100 20, 150 60" />

                <!-- 可以指定多组坐标,生成多边二次贝塞尔曲线 -->
                <path d="M 130 150 Q 180 80, 200 150, 230 115, 300 130" />

                <!-- 命令T可以实现平滑的多边二次贝塞尔曲线 -->
                <!-- 后面紧跟着下一个曲线的端点 -->
                <!-- 控制点会自动计算,使得新的控制点与前一个控制点基于当前点 中心对称 -->

                <path d="M 180 250 Q 230 180, 250 250 T 350 180" />
            </g>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

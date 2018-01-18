<template>
    <main>
        <h1>确定一段椭圆弧需要的条件</h1>
        <ol>
            <li>点所在的椭圆的x半径和y半径</li>
            <li>椭圆x轴旋转角度 x-axis-rotation</li>
            <li>large-arc-flag 弧线的角度大于或等于180度时，值为1，否则为0</li>
            <li>sweep-flag 顺时针为1，逆时针为0</li>
            <li>终点的x坐标和y坐标</li>
        </ol>
        <p><a href="http://oreillymedia.github.io/svg-essentials-examples/ch07/arc.html" target="_blank">在线示例</a></p>

        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <!-- 起点 -->
            <circle cx="125" cy="75" r="2"></circle>
            <!-- 终点 -->
            <circle cx="225" cy="125" r="2"></circle>

            <!-- 短弧线,逆时针 -->
            <g style="stroke: red; fill: none;">
                <path d="M125,75 A100,50 0 0 0 225,125"/>
            </g>
            <!-- 短弧线,顺时针 -->
            <g style="stroke: green; fill: none;">
                <path d="M125,75 A100,50 0 0 1 225,125"/>
            </g>
            <!-- 长弧线,逆时针 -->
            <g style="stroke: orange; fill: none;">
                <path d="M125,75 A100,50 0 1 0 225,125"/>
            </g>
            <!-- 长弧线,顺时针 -->
            <g style="stroke: purple; fill: none;">
                <path d="M125,75 A100,50 0 1 1 225,125"/>
            </g>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

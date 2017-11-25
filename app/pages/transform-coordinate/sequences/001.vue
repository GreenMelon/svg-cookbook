<template>
    <main>
        <h1>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch06/sequence.html" target="_blank">在线示例</a>
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <!-- 坐标轴 -->
            <line x1="0" y1="0" x2="800" y2="0" style="stroke: gray" />
            <line x1="0" y1="0" x2="0" y2="800" style="stroke: gray" />

            <!-- 先平移后缩放 -->
            <rect x="10" y="10" width="20" height="15" style="fill: blue" transform="translate(30, 20) scale(2)"/>
            <!-- 先平移后缩放 -->
            <g transform="translate(30, 20)">
                <g transform="scale(2)">
                    <rect x="10" y="10" width="20" height="15" style="fill: yellow" />
                </g>
            </g>

            <!-- 先缩放后平移 -->
            <rect x="10" y="10" width="20" height="15" style="fill: green" transform="scale(2) translate(30, 20)"/>
            <!-- 先缩放后平移 -->
            <g transform="scale(2)">
                <g transform="translate(30, 20)">
                    <rect x="10" y="10" width="20" height="15" style="fill: red" />
                </g>
            </g>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

<template>
    <main>
        <h1>
            <a href="http://oreillymedia.github.io/svg-essentials-examples/ch06/translate.html" target="_blank">在线实例</a>
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g id="circle">
                <circle cx="100" cy="100" r="50" style="stroke-width: 5; stroke: #000" fill="none" />
            </g>

            <!-- translate(x-value, y-value) -->
            <!-- 获取整个网格，并移动到画布的新位置 -->
            <use xlink:href="#circle" transform="translate(100, 0)" />
            <!-- 简写 -->
            <use xlink:href="#circle" x="50" y="50" />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

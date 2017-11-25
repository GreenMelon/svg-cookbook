<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g id="square">
                <rect x="10" y="10" width="20" height="20" style="stroke: #000; fill: none;" />
            </g>

            <!-- scale(value) -->
            <!-- 等比缩放 所有的x坐标和y坐标乘以给定的值 -->
            <!-- 网格没有移动，原点还在相同的位置 -->
            <!-- 但是用户坐标扩大了,因此导致了轮廓线变粗了 -->
            <use xlink:href="#square" transform="scale(2)" />
            <use xlink:href="#square" transform="scale(4)" />
            <use xlink:href="#square" transform="scale(8)" />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

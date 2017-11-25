<template>
    <main>
        <h1>从笛卡尔坐标系导过来的数据，由于y轴相反，因此上下颠倒了</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <!-- 坐标轴 -->
            <line x1="0" y1="0" x2="100" y2="0" style="stroke: gray" />
            <line x1="0" y1="0" x2="0" y2="100" style="stroke: gray" />
            <!-- 梯形 -->
            <polygon points="40 40, 100 40, 70 70, 40 70" />
        </svg>

        <h1>还原</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <g transform="translate(0, 100) scale(1, -1)">
                <!-- 坐标轴 -->
                <line x1="0" y1="0" x2="100" y2="0" style="stroke: gray" />
                <line x1="0" y1="0" x2="0" y2="100" style="stroke: gray" />
                <!-- 梯形 -->
                <polygon points="40 40, 100 40, 70 70, 40 70" />
            </g>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

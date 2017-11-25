<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <!-- 坐标轴 -->
            <polyline points="100 0, 0 0, 0 100" style="stroke: black; fill: none;" />

            <rect x="80" y="10" width="20" height="20" style="fill: #007dd4;" />

            <!-- 默认选装的中心点(轴心点)假定为(0, 0) -->
            <rect x="80" y="10" width="20" height="20" style="fill: orange;" transform="rotate(45)" />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

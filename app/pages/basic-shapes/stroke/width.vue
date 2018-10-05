<style lang="less" scoped>
    #line {
        stroke: black;
        stroke-width: 10;
    }
</style>

<template>
    <main>
        <ul>
            <li>
                <!-- stroke属性 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1" />
                </svg>
            </li>
            <li>
                <!-- style属性 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line x1="100" y1="150" x2="300" y2="150" style="stroke-width: 5; stroke: black" />
                </svg>
            </li>
            <li>
                <!-- 样式表 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <line id="line" x1="100" y1="150" x2="300" y2="150" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {};
</script>

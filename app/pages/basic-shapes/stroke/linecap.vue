<style lang="less" scoped>
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- 默认值 -->
                    <line x1="100" y1="50" x2="300" y2="50" stroke="#000" stroke-width="10" stroke-linecap="butt"/>
                    <!-- 圆头，超出起止位置 -->
                    <line x1="100" y1="150" x2="300" y2="150" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                    <!-- 方，超出起止位置 -->
                    <line x1="100" y1="250" x2="300" y2="250" stroke="#000" stroke-width="10" stroke-linecap="square"/>
                    <!-- 参考线 -->
                    <line x1="100" y1="20" x2="100" y2="280" stroke="#007dd4" stroke-dasharray="2 1" />
                    <line x1="300" y1="20" x2="300" y2="280" stroke="#007dd4" stroke-dasharray="2 1" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {}
</script>

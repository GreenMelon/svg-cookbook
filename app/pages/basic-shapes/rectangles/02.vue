<style lang="less" scoped>
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <rect x="100" y="75" width="200" height="150" rx="5" ry="5" stroke-width="5" stroke="#000" fill="none" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- 只指定其中一个值,则另一个默认相等 -->
                    <rect x="100" y="75" width="200" height="150" rx="20" stroke-width="5" stroke="#000" fill="none" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- ry的最大值是高度的一半,rx同理 -->
                    <rect x="100" y="75" width="200" height="150" ry="80" stroke-width="5" stroke="#000" fill="none" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                    <!-- rx与ry取不同值,可以变化多种图形 -->
                    <rect x="100" y="75" width="200" height="150" rx="80" ry="50" stroke-width="5" stroke="#000" fill="none" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    svg {
        display: block;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        background-color: purple;
    }
    circle {
        fill: orange;
    }
    text {
        font-size: 20px;
    }
</style>

<template>
    <main>
        <!-- xmlns为SVG命名空间, HTML5可不用设置 -->
        <!-- 默认情况, SVG定位采用内联显示模式 -->
        <h1>Inline SVG in HTML5</h1>
        <svg viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="100" />
            <text x="125" y="125" dy="0.5em" text-anchor="middle">
                Here is some text.
            </text>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

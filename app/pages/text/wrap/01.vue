<style scoped="">
    span {
        font-size: 12px;
    }
</style>

<template>
    <main>
        <span>文字换行显示</span>

        <!-- tsapn 实现    -->
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
            <text font-size="12">
                <tspan x="0" y="10">一段需要word wrap</tspan>
                <tspan x="0" y="24">的文字。</tspan>
            </text>
        </svg>

        <!-- foreignObject 实现 -->
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
            <foreignObject width="120" height="50">
                <body xmlns="http://www.w3.org/1999/xhtml" style="margin: 0; padding: 0; background: transparent;">
                    <p style="margin: 0; font-size: 12px;">一段需要word wrap的文字。</p>
                </body>
            </foreignObject>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>
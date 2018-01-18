<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
                    <g stroke="red" fill="none">
                        <path d="M400,200 A100,100 0 1 1 300,300"/>
                    </g>
                    <g stroke="green" fill="none">
                        <path d="M400,200 A100,100 0 1 0 300,300"/>
                    </g>
                    <g stroke="orange" fill="none">
                        <path d="M400,200 A100,100 0 0 1 300,300"/>
                    </g>
                    <g stroke="purple" fill="none">
                        <path d="M400,200 A100,100 0 0 0 300,300"/>
                    </g>
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {}
</script>

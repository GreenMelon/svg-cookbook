<style lang="less" scoped>
    @import '../../../less/page/basic-shapes/index.less';
</style>

<template>
    <main>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                    <!-- 默认值 nonzero -->
                    <polygon points="48,16 16,96 96,48 0,48 80,96" stroke="#000" fill="#007dd4" fill-rule="nonzero" />
                    <!-- evenodd -->
                    <polygon points="148,16 116,96 196,48 100,48 180,96" stroke="#000" fill="#c7254e" fill-rule="evenodd" />
                </svg>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {}
</script>

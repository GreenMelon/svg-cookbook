<style lang="less" scoped>
    svg {
        display: block;
        margin: 0 auto;
    }
</style>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
            <circle
                cx="200"
                cy="200"
                r="200"
                stroke-width="1"
                stroke="#000"
                fill="none">
            </circle>

            <path
                d="M 400 200 A 200 200 0 1 0 0 200 A100 100 0 1 0 200 200"
                fill="#000"
            />
            <path
                d="M 400 200 A 100 100 0 1 0 200 200"
                fill="#fff"
            />

            <circle
                cx="100"
                cy="200"
                r="10"
                fill="#fff"
            ></circle>

            <circle
                cx="300"
                cy="200"
                r="10"
                fill="#000"
            ></circle>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

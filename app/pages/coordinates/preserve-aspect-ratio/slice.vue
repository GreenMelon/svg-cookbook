<style scoped>
svg {
    margin: 10px;
    border: 1px dashed #000;
}

.horizontal {
    display: flex;
    flex-direction: column;
}
</style>

<template>
    <main>
        <div class="vertical">
            <svg
                v-for="(value, index) in values"
                :key="index"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="150"
                viewBox="0 0 100 100"
                :preserveAspectRatio="`${value} slice`"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="50"
                />
            </svg>
        </div>

        <div class="horizontal">
            <svg
                v-for="(value, index) in values"
                :key="index"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="50"
                viewBox="0 0 100 100"
                :preserveAspectRatio="`${value} slice`"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="50"
                />
            </svg>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                values: [
                    'xMinYMin',
                    'xMinYMid',
                    'xMinYMax',
                    'xMidYMin',
                    'xMidYMid',
                    'xMidYMax',
                    'xMaxYMin',
                    'xMaxYMid',
                    'xMaxYMax',
                ],
            }
        },
    }
</script>

<template>
    <main>
        <svg
            v-for="(option, index) in options"
            :key="index"
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="120"
            style="fill:#007dd4;"
        >
            <circle
                cx="60"
                cy="60"
                r="60"
            >
                <animate
                    attributeName="cx"
                    attributeType="XML"
                    to="260"
                    begin="0s"
                    dur="4s"
                    fill="freeze"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill"
                    attributeType="XML"
                    values="#007dd4;#ff7f00;#7f00ff;#e91a8c"
                    :keyTimes="option"
                    begin="0s"
                    dur="4s"
                    fill="freeze"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </main>
</template>

<script>
export default {
    alias: '动画过渡值',

    data() {
        return {
            options: [
                'linear',
                'paced',
                'discrete',
                'spline',
                '0;0.33;0.66;1'
            ],
        }
    },
}
</script>

<style scoped>
svg {
    display: block;
    margin: 10px;
    border: 1px dashed #000;
}
</style>

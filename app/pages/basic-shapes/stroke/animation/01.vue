<style scoped>
main {
    text-align: center;
}

.circle {
    stroke: #007dd4;
    fill: transparent;
}

#circle1 {
    animation: 2s circle1 infinite;
}

#circle2 {
    animation: 2s circle2 infinite;
}

@keyframes circle1 {
    0% {
        stroke-dasharray: 0 628;
    }
    100% {
        stroke-dasharray: 628 0;
    }
}
@keyframes circle2 {
    0% {
        stroke-dasharray: 0 210;
    }
    100% {
        stroke-dasharray: 210 0;
    }
}
</style>

<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
        >
            <circle
                cx="150"
                cy="150"
                r="100"
                class="circle"
                id="circle1"
            />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
        >
            <circle
                cx="150"
                cy="150"
                r="100"
                class="circle"
                id="circle2"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

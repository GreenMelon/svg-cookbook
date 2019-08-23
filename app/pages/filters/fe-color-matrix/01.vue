<style lang="css">
svg {
    margin: 0 auto;
    display: block;
}

.circle1 {
    fill: #c00;
    transform: matrix(1,0,0,1,0,0);
    animation: ghost1 5s cubic-bezier(.3,0.6,.3,1.1) infinite forwards;
}

.cricle2 {
    fill: #2d78f4;
    transform-origin: 50% 50%;
    animation: ghost2 4s cubic-bezier(.3,0.6,.3,1.1) infinite forwards;
}

@keyframes ghost1 {
    0%, 100% {
        transform: matrix(1,0,0,1,0,0);
    }
    50% {
        transform: matrix(1,0,0,1,260,0);
    }
}

@keyframes ghost2 {
    0%, 100% {
        transform: matrix(1,0,0,1,0,0);
    }
    50% {
        transform: matrix(1,0,0,1,-260,0);
    }
}
</style>

<template>
    <main>
        <svg width="500" height="300">
            <g filter="url(#Blur)">
                <circle class="cricle2" r="50" cx="400" cy="150"></circle>
                <circle class="circle1" r="50" cx="100" cy="150"></circle>
            </g>

            <defs>
                <filter id="Blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -7" result="goo"></feColorMatrix>
                </filter>
            </defs>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

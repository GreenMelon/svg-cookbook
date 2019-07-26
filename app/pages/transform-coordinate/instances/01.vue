<template>
    <main>
        <div>
            <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="100px" y="100px" viewBox="0 0 145 318.8">
                <symbol id="petal">
                    <path
                        fill="pink"
                        stroke="none"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        d="M72,309.2c0,0-61.9-55-61.9-142.5S72,12.8,72,12.8l0,0c0,0,61.9,55,61.9,142.5S72,309.2,72,309.2L72,309.2z"
                        transform="scale(0.1) translate(500, 300)"
                    />
                </symbol>

                <use
                    v-for="i in length"
                    :key="i"
                    xlink:href="#petal"
                    :id="'petal' + i"
                />
            </svg>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                length: 36,
            }
        }
    }
</script>

<style scoped lang="less">
    svg {
        display: block;
        width: 500px;
        margin: 20px auto;
    }
    #petal1 {
        animation: petal1 ease 1s both;
        transform-origin: 55px 60px;
    }
    @keyframes petal1 {
        0% {
            opacity: 0;
            transform: rotate(0deg);
        }
        100% {
            opacity: 0.8;
            transform: rotate(10deg);
        }
    }
    #petal2 {
        animation: petal2 ease 2s both;
        transform-origin: 55px 60px;
    }
    @keyframes petal2 {
        0% {
            opacity: 0;
            transform: rotate(0deg);
        }
        100% {
            opacity: 0.8;
            transform: rotate(20deg);
        }
    }
    #petal3 {
        animation: petal3 ease 3s both;
        transform-origin: 55px 60px;
    }
    @keyframes petal3 {
        0% {
            opacity: 0;
            transform: rotate(0deg);
        }
        100% {
            opacity: 0.8;
            transform: rotate(30deg);
        }
    }
</style>

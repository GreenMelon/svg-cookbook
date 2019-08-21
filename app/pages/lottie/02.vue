<style lang="less" scoped>
#bodymovin {
    margin: auto;
    display: block;
    width: 500px;
    height: 500px;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    background-color: #333;
}
</style>

<template>
    <main>
        <div id="bodymovin"></div>
    </main>
</template>

<script>
    import Lottie from 'lottie-web';

    export default {
        data() {
            return {}
        },

        mounted() {
            this.init();
        },

        methods: {
            init() {
                const element = document.getElementById('bodymovin');

                const elemSize = {
                    w: element.clientWidth,
                    h: element.clientHeight,
                };

                const windowSize = {
                    w: window.innerWidth,
                    h: window.innerHeight,
                };

                const data = {
                    container: element,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/278239/joysticks.json',
                };

                let scale = 1;
                let animRel = 1;

                const animation = Lottie.loadAnimation(data);
                animation.addEventListener('DOMLoaded', () => {
                    animRel = animation.animationData.w / animation.animationData.h;

                    calculateScale();

                    window.addEventListener('mousemove', (evt) => {
                        const xPos = (evt.pageX - windowSize.w / 2) * scale - 96;
                        const yPos = (evt.pageY - windowSize.h / 2) * scale + 96;
                        animation.animationData.layers[0].ks.p.k[0].s = [xPos, yPos, 0];
                        animation.animationData.layers[0].ks.p.k[0].e = [xPos, yPos, 0];
                    });
                });

                window.addEventListener('resize', (evt) => {
                    windowSize.w = window.innerWidth;
                    windowSize.h = window.innerHeight;
                    elemSize.w = element.clientWidth;
                    elemSize.h = element.clientHeight;

                    calculateScale();
                });

                function calculateScale() {
                    var elemRel = animation.animationData.w / animation.animationData.h;

                    if (animRel > elemRel) {
                        scale = animation.animationData.w / elemSize.w;
                    } else {
                        scale = animation.animationData.h / elemSize.h;
                    }

                    scale /= 2.5;
                }
            },
        },
    };
</script>

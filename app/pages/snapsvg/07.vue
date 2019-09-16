<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="300"
            id="svg"
            :class="{
                'css-animation': cssAnimation,
            }"
        >
        </svg>
    </main>
</template>

<script>
import Base from './base.js';

export default {
    mixins: [Base],

    data() {
        return {
            cssAnimation: 0,
        };
    },

    mounted() {
        this.loadSnapSvg().then(svg => {
            const rect = svg.paper.rect({
                x: 0,
                y: 0,
                width: 50,
                height: 30,
                fill: '#007dd4',
            });

            function animate() {
                Snap.animate(0, 300, function(val) {
                    const m = new Snap.Matrix();
                    m.translate(val, 0); // translate 位移 API
                    rect.transform(m); // 在 rect 节点应用 matrix
                }, 2000, mina.easeout(), function() {
                    console.log('animation end');
                    setTimeout(animate, 0);
                });
            }

            if (!this.cssAnimation) {
                animate();
            }
        });
    },
};
</script>

<style lang="less">
@keyframes run {
    100% {
        transform: translate3d(300px, 0, 0);
    }
}

.css-animation rect {
    animation: run 2s ease-out infinite;
}
</style>

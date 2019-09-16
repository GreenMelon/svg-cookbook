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
            cssAnimation: 1,
        };
    },

    mounted() {
        this.loadSnapSvg().then(svg => {
            const x = 10;
            const y = 100;
            const width = 50;
            const height = 30;

            const rect = svg.paper.rect({
                x,
                y,
                width,
                height,
                fill: '#007dd4',
            });
            const g = svg.paper.group(rect);

            function rotate() {
                Snap.animate(0, 250, function(val) {
                    const m = new Snap.Matrix();
                    m.rotate((val / 250) * 360, x + width / 2, y + height / 2);
                    rect.transform(m);
                }, 500, mina.easeout(), function() {
                    console.log('animation end');
                    rotate();
                });
            };

            function move() {
                Snap.animate(0, 250, function(val) {
                    const m = new Snap.Matrix();
                    m.translate(val, 0);
                    g.transform(m);
                }, 2000, mina.easeout(), function() {
                    console.log('animation end');
                    move();
                });
            };

            if (!this.cssAnimation) {
                rotate();
                move();
            }
        });
    },
};
</script>

<style lang="less">
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes move {
    100% {
        transform: translate3d(250px, 0, 0);
    }
}

.css-animation {
    g {
        animation: move 2s linear infinite;
    }

    rect {
        transform-origin: 35px 115px;
        animation: rotate .5s linear infinite;
    }
}
</style>

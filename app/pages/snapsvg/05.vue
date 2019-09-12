<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="300"
            id="svg"
        >
        </svg>
    </main>
</template>

<script>
import Base from './base.js';

export default {
    mixins: [Base],

    data() {
        return {};
    },

    mounted() {
        this.loadSnapSvg().then(svg => {
            const path = svg.paper.path({
                d: 'M0.500,65.500 C18.680,33.758 45.141,-6.797 72.500,2.500 C99.859,11.797 72.148,59.027 79.500,98.500 C86.852,137.973 117.668,128.914 138.500,59.500 C159.332,-9.914 246.500,59.500 246.500,59.500 C273.181,117.750 137.350,184.417 225.500,173.500 C351.137,157.940 155.369,160.617 162.500,86.500 C165.180,58.645 237.169,-2.418 283.500,2.500 C357.654,10.371 363.758,80.355 364.500,109.500',
                stroke: '#f00',
                fill: 'rgba(0, 0, 0, 0)',
            });
            const length = Snap.path.getTotalLength(path);

            path.attr({
                'stroke-dashoffset': length,
                'stroke-dasharray': length,
            });

            Snap.animate(length, 0, function(val) {
                path.attr({
                    'stroke-dashoffset': val,
                });
            }, 10000, mina.easeout(), function() {
                console.log('animation end');
            });
        });
    },
};
</script>

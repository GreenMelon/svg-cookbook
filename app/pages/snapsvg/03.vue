<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            id="svg"
        >
            <circle
                cx="50"
                cy="50"
                r="50"
                style="fill: #007dd4;"
            >
            </circle>
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
            const circle = svg.select('circle');
            circle.click(function() {
                console.log('animation begin');

                Snap.animate(50, 150, function(val) {
                    circle.attr({ cx: val });
                }, 1000, mina.easeout(), function() {
                    console.log('animation end');
                });
            });
        });
    },
}
</script>

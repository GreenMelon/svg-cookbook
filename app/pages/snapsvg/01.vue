<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            id="svg"
        >
            <circle
                cx="60"
                cy="60"
                r="60"
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
        this.init().then(() => {
            const svg = Snap('#svg');
            const circle = svg.select('circle');
            circle.click(function() {
                console.log('animation begin');

                circle.animate({cx: 160}, 1000, mina.easeout(), function() {
                    console.log('animation end');
                });
            });
        });
    },
}
</script>

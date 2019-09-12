<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
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
        console.log(1);

        this.init().then(() => {
            const svg = Snap('#svg');

            // create
            svg.paper.circle({
                cx: 50,
                cy: 50,
                r: 50,
                fill: '#f00',
                id: 'circle',
            });

            // event
            const circle = svg.select('circle');
            circle.click(function() {
                alert('hello');
            });
        });
    },
};
</script>

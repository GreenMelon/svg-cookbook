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
// import snap from 'snapsvg';
import { loadScript } from '@/utils';

export default {
    data() {
        return {}
    },

    mounted() {
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

    methods: {
        init() {
            const url = 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js';
            return loadScript(url).then(() => {});
        },
    },
}
</script>

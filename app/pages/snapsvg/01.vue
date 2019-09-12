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
// import snap from 'snapsvg';
import { loadScript } from '@/utils';

export default {
    data() {
        return {}
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

    methods: {
        init() {
            const url = 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js';
            return loadScript(url).then(() => {});
        },
    },
}
</script>

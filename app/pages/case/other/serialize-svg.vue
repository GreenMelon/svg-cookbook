<style lang="less" scoped>
</style>

<template>
    <main>
        <button @click="parseSVG">解析 SVG</button>
    </main>
</template>

<script>
    import $ from 'jquery';

    export default {
        methods: {
            parseSVG: function() {
                $.getJSON('./data/svg.json').then(function(element) {
                    $.get('./data/delete.svg').then(function(svg) {
                        const parser = new XMLSerializer();
                        const svgContent = parser.serializeToString(svg);
                        eelementl.content = svgContent;

                        console.log({ svgContent });
                    });
                });
            },
        },
    }
</script>

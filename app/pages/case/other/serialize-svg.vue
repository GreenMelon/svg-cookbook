<style lang="less" scoped>
</style>

<template>
    <main>
        <button @click="XML2String">XML2String</button>
        <button @click="String2XML">String2XML</button>
    </main>
</template>

<script>
    import $ from 'jquery';

    export default {
        data() {
            return {
                svg: {},
                svgContent: '',
            }
        },
        methods: {
            XML2String() {
                $.getJSON('./data/svg.json').then(function(element) {
                    $.get('./data/delete.svg').then(function(svg) {
                        const parser = new XMLSerializer();
                        const svgContent = parser.serializeToString(svg);
                        element.content = svgContent;

                        console.log({ svg, svgContent });

                        this.svg = svg;
                        this.svgContent = svgContent;
                    });
                });
            },
            String2XML() {
                const { svgContent } = this;

                const parser = new DOMParser();
                const xmlObject = parser.parseFromString(svgContent, 'text/xml');

                console.log({ xmlObject });
            },
        },
    }
</script>

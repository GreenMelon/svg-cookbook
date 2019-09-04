<style lang="less" scoped>
</style>

<template>
    <main>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <line x1="100" y1="150" x2="300" y2="150" stroke-width="10" stroke="#c7254e" />
        </svg>
    </main>
</template>

<script>
    export default {
        methods: {
            detectSvgElement() {
                const element = document.querySelector('#svg');

                // 方法1
                console.log('element instanceof SVGElement', element instanceof SVGElement);
                
                // 方法2 ? 
                console.log('element.ownerSVGElement', element.ownerSVGElement); 
            },
        },
        mounted() {
            this.detectSvgElement();
        }
    }
</script>

<style lang="less" scoped>
a:hover,
a:focus {
    stroke: #c7254e;
    stroke-width: 4;
    outline: none;
}
</style>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs v-html="style"></defs>

            <a xlink:href="http://www.w3.org/SVG/" target="_blank">
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    style="fill: #007dd4;"
                />
            </a>
        </svg>
    </main>
</template>

<script>
    const style = `
        <style xmlns="http://www.w3.org/2000/svg" type="text/css"><![CDATA[
            a:hover, a:focus {
                stroke: #66f;
                stroke-width: 4;
                outline: none;
            }
         ]]></style>
    `;

    export default {
        data() {
            return {
                style,
            }
        },
    }
</script>

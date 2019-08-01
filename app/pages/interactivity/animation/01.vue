<style lang="less" scoped>
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
                />
            </a>
        </svg>
    </main>
</template>

<script>
    const style = `
        <style xmlns="http://www.w3.org/2000/svg" type="text/css"><![CDATA[
            a {
                animation-name: colorChange;
                animation-iteration-count: infinite;
                animation-duration: 5s;
                animation-direction: alternate;
                animation-play-state: paused;
            }
            a:hover {
                animation-play-state: running;
            }
            
            @keyframes colorChange {
                0% {
                    fill: red;
                }
                50% {
                    fill: green;
                }
                100% {
                    fill: blue;
                }
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

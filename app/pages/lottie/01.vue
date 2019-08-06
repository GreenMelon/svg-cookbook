<style lang="less" scoped>
.grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
    grid-gap: 1%;
    background-color: #ddd;
}
.box {
    padding: 4px;
    color: #fff;
    background-color: #444;
}
</style>

<template>
    <main>
        <div class="grid">
            <div
                v-for="(animation, index) in animations"
                :key="index"
                :id="animation"
                class="box"
            />
        </div>
    </main>
</template>

<script>
    import Lottie from 'lottie-web';

    export default {
        data() {
            return {
                animations: [
                    'rejection',
                    'inattentive',
                    'mnemonics',
                    'phonological',
                    'estimate',
                    'dyslexia',
                    'articulation',
                    'incomprehension',
                    'confusion'
                ],
            }
        },

        mounted() {
            this.init();
        },

        methods: {
            init() {
                const { animations } = this;

                animations.forEach((name) => {
                    const element = document.getElementById(name);
                    const data = {
                        container: element,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        rendererSettings: {
                            progressiveLoad: true,
                            preserveAspectRatio:'xMidYMid meet',
                        },
                        path: `https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/${name}.json`,
                    };

                    const animation = Lottie.loadAnimation(data);
                    animation.setSubframe(false);
                });
            },
        },
    };
</script>

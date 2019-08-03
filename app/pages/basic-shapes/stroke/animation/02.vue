<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

main {
    font: 14.5em/1 Open Sans, Impact;
    text-transform: uppercase;
    text-align: center;
    background: #212121;
    background-size: .2em 100%;
}

/* S */
.text {
    stroke-width: 6;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    fill: none;
    animation: Sstroke 6s infinite linear;
}
.text:nth-child(5n+1) {
    stroke: #F2385A;
    animation-delay: -1.2s;
}
.text:nth-child(5n+2) {
    stroke: #F5A503;
    animation-delay: -2.4s;
}
.text:nth-child(5n+3) {
    stroke: #E9F1DF;
    animation-delay: -3.6s;
}
.text:nth-child(5n+4) {
    stroke: #56D9CD;
    animation-delay: -4.8s;
}
.text:nth-child(5n+5) {
    stroke: #3AA1BF;
    animation-delay: -6s;
}
@keyframes Sstroke {
    100% {
        stroke-dashoffset: -400;
    }
}

/* V */
.text1 {
    stroke-linejoin: round;
    stroke-dasharray: 1160;
    stroke-dashoffset: 1160;
    fill: none;
    animation: Vstroke 6s infinite ease-in-out;
}
.text1:nth-child(3n+1) {
	stroke: yellow;
	stroke-width: 1;
    animation-delay: -.2s;
}
.text1:nth-child(3n+2) {
	stroke: red;
	stroke-width: 2;
    animation-delay: -.1s;
}
.text1:nth-child(3n+3) {
	stroke-width: 4;
	stroke: #3AA1BF;
    animation-delay: 00s;
}
@keyframes Vstroke {
	100% {
        stroke-dashoffset: 0;
    }
}

/* G */
#g-usetag {
	stroke-width: 6;
	stroke: #F2385A;
	animation: gstrokeanim 2s infinite linear;
}

@keyframes gstrokeanim {
	0% {
        stroke-width: 6;
    }
	50% {
        stroke-width: 0;
    }
	100% {
        stroke-width: 6;
    }
}
</style>

<template>
    <main>
        <svg width="600" viewBox="0 0 600 300">
            <!--pattern-->
            <defs>
                <pattern
                    id="GPattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(35)"
                >
                    <animateTransform
                        attributeType="xml"
                        attributeName="patternTransform"
                        type="rotate" 
                        from="35" 
                        to="395" 
                        begin="0"
                        dur="160s"
                        repeatCount="indefinite"
                    />
                    <circle cx="10" cy="10" r="10" stroke="none" fill="yellow">
                        <animate
                            attributeName="r"
                            type="xml"
                            from="1"
                            to="1"
                            values="1; 10; 1"
                            begin="0s"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </pattern>
            </defs>

            <!-- Symbol -->
            <symbol id="s-text">
                <text
                    text-anchor="middle"
                    x="10%"
                    y="50%"
                    dy=".35em"
                >
                    S
                </text>
            </symbol>
            <symbol id="v-text">
                <text
                    text-anchor="middle"
                    x="40%"
                    y="50%"
                    dy=".35em"
                >
                    V
                </text>
            </symbol> 
            <symbol id="g-text">
                <text
                    text-anchor="middle"
                    x="70%"
                    y="50%"
                    dy=".35em"
                >
                    G
                </text>
            </symbol>

            <!-- Duplicate symbols -->
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use id="g-usetag" xlink:href="#g-text" class="text2" style="fill: url(#GPattern)"></use>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

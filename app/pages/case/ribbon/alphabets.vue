<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        :width="totalWidth"
        :height="totalHeight"
        :viewBox="`0 0 ${totalWidth} ${totalHeight}`"
    >
        <defs>
            <polygon
                id="horizontal-top"
                :points="`0 ${size}, ${size} 0, ${width - size} 0, ${width} ${size}`"
            />
            <polygon
                id="horizontal-center"
                :points="`0 ${halfHeight + halfSize}, ${size} ${halfHeight - halfSize}, ${width - size} ${halfHeight - halfSize}, ${width} ${halfHeight + halfSize}`"
            />
            <polygon
                id="horizontal-center-reverse"
                :points="`${width} ${halfHeight - halfSize}, ${width - size} ${halfHeight + halfSize}, ${size} ${halfHeight + halfSize}, 0 ${halfHeight - halfSize}`"
            />
            <polygon
                id="horizontal-center-square"
                :points="`${size} ${halfHeight - halfSize}, ${width - size} ${halfHeight - halfSize}, ${width - size} ${halfHeight + halfSize}, ${size} ${halfHeight + halfSize}`"
            />
            <polygon
                id="horizontal-bottom"
                :points="`0 ${height - size}, ${width} ${height - size}, ${width - size} ${height}, ${size} ${height}`"
            />
            <polygon
                id="vertical-left"
                :points="`${size} 0, ${size} ${height}, 0 ${height - size}, 0 ${size}`"
            />
            <polygon
                id="vertical-left-top"
                :points="`${size} 0, ${size} ${halfHeight + halfSize}, 0 ${halfHeight - halfSize}, 0 ${size}`"
            />
            <polygon
                id="vertical-left-bottom"
                :points="`${size} ${halfHeight - halfSize}, ${size} ${height}, 0 ${height - size}, 0 ${halfHeight + halfSize}`"
            />
            <polygon
                id="vertical-left-square"
                :points="`0 0, ${size} 0, ${size} ${height}, 0 ${height}`"
                :fill="purple"
            />
            <polygon
                id="vertical-center"
                :points="`${halfWidth - halfSize} ${size}, ${halfWidth + halfSize} 0, ${halfWidth + halfSize} ${height}, ${halfWidth - halfSize} ${height - size}`"
            />
            <polygon
                id="vertical-center-square"
                :points="`${halfWidth - halfSize} ${size}, ${halfWidth + halfSize} ${size}, ${halfWidth + halfSize} ${height}, ${halfWidth - halfSize} ${height}`"
            />
            <polygon
                id="vertical-right"
                :points="`${width - size} 0, ${width} ${size}, ${width} ${height - size}, ${width - size} ${height}`"
            />
            <polygon
                id="vertical-right-top"
                :points="`${width - size} 0, ${width} ${size}, ${width} ${halfHeight - halfSize}, ${width - size} ${halfHeight + halfSize}`"
            />
            <polygon
                id="vertical-right-bottom"
                :points="`${width - size} ${halfHeight - halfSize}, ${width} ${halfHeight + halfSize}, ${width} ${height - size}, ${width - size} ${height}`"
            />
        </defs>

        <defs>
            <g id="A">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="B">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="C">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="red" />
                <use xlink:href="#vertical-left" :fill="purple" />
            </g>
            <g id="D">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-square" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="E">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center" :fill="red" />
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
            </g>
            <g id="F">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-reverse" :fill="red" />
                <use xlink:href="#vertical-left" :fill="purple" />
            </g>
            <g id="G">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <polygon
                    :points="`${halfWidth - size} ${halfHeight + halfSize}, ${halfWidth} ${halfHeight - halfSize}, ${width - size} ${halfHeight - halfSize}, ${width} ${halfHeight + halfSize}`"
                    :fill="orange"
                />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="H">
                <use xlink:href="#horizontal-center" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="I">
                <use xlink:href="#horizontal-top" :fill="red" />
                <use xlink:href="#vertical-center-square" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="purple" />
            </g>
            <g id="J">
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left-bottom" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="K">
                <polygon
                    :points="`${width - 1.4 * size} 0, ${width} 0, ${1.4 * size} ${halfHeight}, 0 ${halfHeight}`"
                    :fill="orange"
                />
                <polygon
                    :points="`0 ${halfHeight}, ${1.4 * size} ${halfHeight}, ${width} ${height}, ${width - 1.4 * size} ${height}`"
                    :fill="red"
                />
                <use xlink:href="#vertical-left-square" :fill="purple" />
            </g>
            <g id="L">
                <use xlink:href="#horizontal-bottom" :fill="red" />
                <use xlink:href="#vertical-left" :fill="purple" />
            </g>
            <g id="M">
                <polygon
                    :points="`0 0, ${size} 0, ${halfWidth + halfSize} ${halfHeight}, ${halfWidth - halfSize} ${halfHeight}`"
                    :fill="blue"
                />
                <polygon
                    :points="`0 0, ${size} 0, 0 ${size}`"
                    :fill="white" 
                />
                <polygon
                    :points="`${width - size} 0, ${width} 0, ${halfWidth + halfSize} ${halfHeight}, ${halfWidth - halfSize} ${halfHeight}`"
                    :fill="orange"
                />
                <polygon
                    :points="`${width - size} 0, ${width} 0, ${width} ${size}`"
                    :fill="white" 
                />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="N">
                <polygon
                    :points="`0 0, ${size} 0, ${width} ${height}, ${width - size} ${height}`"
                    :fill="orange" 
                />
                <polygon
                    :points="`0 0, ${size} 0, 0 ${size}`"
                    :fill="white" 
                />
                <polygon
                    :points="`${width} ${height - size}, ${width} ${height}, ${width - size} ${height}`"
                    :fill="white" 
                />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="O">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="P">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
            </g>
            <g id="Q">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
                <polygon
                    :points="`${width} ${height - size}, ${width - size} ${height}, ${width - size - 2.63 * size} ${height  - 2.63 * size}, ${width - 2.63 * size} ${height - size - 2.63 * size}`"
                    :fill="orange"
                    :style="`stroke-width: ${halfSize}; stroke: #fff;`"
                />
            </g>
            <g id="R">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="orange" />
                <polygon
                    :points="`0 ${size}, ${size} 0, ${size} ${height}, 0 ${height}`"
                    :fill="purple" 
                />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <polygon
                    :points="`${width - size} ${height}, ${halfWidth - halfSize} ${halfHeight + halfSize}, ${halfWidth + halfSize} ${halfHeight + halfSize}, ${width} ${height}`"
                    :fill="purple" 
                />
            </g>
            <g id="S">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="T">
                <use xlink:href="#horizontal-top" :fill="red" />
                <use xlink:href="#vertical-center-square" :fill="purple" />
            </g>
            <g id="U">
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="V">
                <polygon
                    :points="`${size} 0, ${size} ${halfHeight + halfSize}, ${halfWidth + halfSize} ${height}, ${halfWidth - halfSize} ${height}, 0 ${halfHeight + halfSize}, 0 ${size}`"
                    :fill="purple"
                />
                <polygon
                    :points="`${width - size} 0, ${width} ${size}, ${width} ${halfHeight + halfSize}, ${halfWidth + halfSize} ${height}, ${halfWidth - halfSize} ${height}, ${width - size} ${halfHeight + halfSize}`"
                    :fill="red"
                />
            </g>
            <g id="W">
                <polygon
                    :points="`0 ${height}, ${halfWidth - halfSize} ${halfHeight}, ${halfWidth + halfSize} ${halfHeight}, ${size} ${height}`"
                    :fill="blue"
                />
                <polygon
                    :points="`0 ${height - size}, ${size} ${height}, 0 ${height}`"
                    :fill="white" 
                />
                <polygon
                    :points="`${width - size} ${height}, ${halfWidth - halfSize} ${halfHeight}, ${halfWidth + halfSize} ${halfHeight}, ${width} ${height}`"
                    :fill="orange" 
                />
                <polygon
                    :points="`${width} ${height - size}, ${width} ${height}, ${width - size} ${height}`"
                    :fill="white" 
                />
                <use xlink:href="#vertical-left" :fill="purple" />
                <use xlink:href="#vertical-right" :fill="red" />
            </g>
            <g id="X">
                <polygon
                    :points="`0 0, ${size} 0, ${width} ${height}, ${width - size} ${height}`"
                    :fill="purple"
                />
                <polygon
                    :points="`${width - size} 0, ${width} 0, ${size} ${height}, 0 ${height}`"
                    :fill="red"
                />
            </g>
            <g id="Y">
                <polygon
                    :points="`0 0, ${size} 0, ${halfWidth + halfSize} ${halfHeight}, ${halfWidth - halfSize} ${halfHeight}`"
                    :fill="purple"
                />
                <polygon
                    :points="`${width - size} 0, ${width} 0, ${halfWidth + halfSize} ${halfHeight}, ${halfWidth - halfSize} ${halfHeight}`"
                    :fill="red"
                />
                <polygon
                    :points="`${halfWidth - halfSize} ${halfHeight}, ${halfWidth + halfSize} ${halfHeight}, ${halfWidth + halfSize} ${height}, ${halfWidth - halfSize} ${height}`"
                    :fill="orange"
                />
            </g>
            <g id="Z">
                <use xlink:href="#horizontal-top" :fill="red" />
                <use xlink:href="#horizontal-bottom" :fill="purple" />
                <polygon
                    :points="`${width - size} ${size}, ${width} ${size}, ${size} ${height - size}, 0 ${height - size}`"
                    :fill="orange"
                />
            </g>
            <g id="0">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-bottom" :fill="blue" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-left-bottom" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="1">
                <use xlink:href="#vertical-center" :fill="purple" />
            </g>
            <g id="2">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-bottom" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
            </g>
            <g id="3">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="4">
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="5">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="6">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-left-bottom" :fill="purple" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="7">
                <use xlink:href="#horizontal-top" :fill="red" />=
                <use xlink:href="#vertical-right-top" :fill="purple" />
                <use xlink:href="#vertical-right-bottom" :fill="purple" />
            </g>
            <g id="8">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-left-bottom" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
            <g id="9">
                <use xlink:href="#horizontal-top" :fill="orange" />
                <use xlink:href="#horizontal-center-square" :fill="blue" />
                <use xlink:href="#horizontal-bottom" :fill="orange" />
                <use xlink:href="#vertical-left-top" :fill="purple" />
                <use xlink:href="#vertical-right-top" :fill="red" />
                <use xlink:href="#vertical-right-bottom" :fill="red" />
            </g>
        </defs>

        <template v-for="(word, index) in words">
            <g
                :key="index"
                :transform="`translate(${(totalWidth - (word.length * width + (word.length - 1) * horizontalSpacing)) / 2}, ${index * (height + verticalSpacing)})`"
            >
                <use
                    v-for="(letter, subIndex) in word"
                    :key="`${index}-${subIndex}`"
                    :xlink:href="`#${letter}`"
                    :transform="`translate(${subIndex * (width + horizontalSpacing)}, 0)`"
                />
            </g>
        </template>
    </svg>
</template>

<script>
export default {
    props: {
        words: {
            type: Array,
        },
    },

    data() {
        return {
            // sizes
            unit: 12,
            widthTimes: 6,
            heightTimes: 10,
            // colors
            orange: '#ff7f00',
            purple: '#7f00ff',
            blue: '#411ad6',
            red: '#e91a8c',
            white: '#ffffff',
        };
    },

    computed: {
        size() {
            return 1 * this.unit;
        },

        halfSize() {
            return this.size / 2;
        },

        width() {
            return this.widthTimes * this.unit;
        },

        halfWidth() {
            return this.width / 2;
        },

        height() {
            return this.heightTimes * this.unit;
        },

        halfHeight() {
            return this.height / 2;
        },

        totalWidth() {
            const max = this.words.reduce((prev, word) => {
                return Math.max(prev, word.length);
            }, 0);

            return max * this.width + (max - 1) * this.halfWidth;
        },

        totalHeight() {
            const row = this.words.length;

            return row * this.height + (row - 1) * this.halfHeight;
        },

        horizontalSpacing() {
            return this.width / 2;
        },

        verticalSpacing() {
            return this.height / 4;
        },
    },
};
</script>

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
                :points="`${size} 0, ${width - size} 0, ${width} ${size}, 0 ${size}`"
                :fill="orange"
            />
            <polygon
                id="horizontal-bottom-square"
                :points="`0 ${halfHeight - halfSize}, ${width} ${halfHeight - halfSize}, ${width} ${halfHeight + halfSize}, 0 ${halfHeight + halfSize}`"
                :fill="blue"
            />
            <polygon
                id="horizontal-bottom"
                :points="`0 ${height - size}, ${width} ${height - size}, ${width - size} ${height}, ${size} ${height}`"
                :fill="blue"
            />
            <polygon
                id="vertical-left"
                :points="`${size} 0, ${size} ${height}, 0 ${height - size}, 0 ${size}`"
                :fill="purple"
            />
            <polygon
                id="vertical-right"
                :points="`${width - size} 0, ${width} ${size}, ${width} ${height - size}, ${width - size} ${height}`"
                :fill="red"
            />
        </defs>

        <defs>
            <g id="A">
                <use xlink:href="#horizontal-top" />
                <use xlink:href="#horizontal-bottom-square" />
                <use xlink:href="#vertical-left" />
                <use xlink:href="#vertical-right" />
            </g>
            <g id="C">
                <use xlink:href="#horizontal-top" />
                <use xlink:href="#horizontal-bottom" />
                <use xlink:href="#vertical-left" />
            </g>
        </defs>

        <template v-for="(word, index) in words">
            <g
                :key="index"
                :transform="`translate(${(totalWidth - (word.length * width + (word.length - 1) * halfWidth)) / 2}, 0)`"
            >
                <use
                    v-for="(letter, subIndex) in word"
                    :key="`${index}-${subIndex}`"
                    :xlink:href="`#${letter}`"
                    :transform="`translate(${subIndex * (width + halfWidth)}, ${index * (height + halfHeight)})`"
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
            heightTimes: 8,
            // colors
            orange: '#ff7f00',
            purple: '#7f00ff',
            blue: '#411ad6',
            red: '#e91a8c',
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
    },
};
</script>

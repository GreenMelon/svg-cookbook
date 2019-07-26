<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        :height="height"
        :viewBox="`0 0 200 ${height}`"
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
            <g id="a">
                <use xlink:href="#horizontal-top" />
                <use xlink:href="#horizontal-bottom-square" />
                <use xlink:href="#vertical-left" />
                <use xlink:href="#vertical-right" />
            </g>
            <g id="c">
                <use xlink:href="#horizontal-top" />
                <use xlink:href="#horizontal-bottom" />
                <use xlink:href="#vertical-left" />
            </g>
        </defs>

        <use xlink:href="#a" />
        <use xlink:href="#c" transform="translate(100, 0)" />
    </svg>
</template>

<script>
export default {
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

        height() {
            return this.heightTimes * this.unit;
        },

        halfHeight() {
            return this.height / 2;
        },
    },
};
</script>

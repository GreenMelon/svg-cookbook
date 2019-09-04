<template>
    <main>
        <categories
            :base-route="baseRoute"
            :categories="categories"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            baseRoute: '/basic-shapes',
            categories: [
                {
                    name: 'lines',
                    alias: '直线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'triangles',
                    alias: '三角形',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'rectangles',
                    alias: '矩形',
                    children: [
                        {
                            route: '01',
                        }, {
                            alias: '圆角矩形',
                            route: '02',
                        },
                    ],
                }, {
                    name: 'circles',
                    alias: '圆',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'ellipses',
                    alias: '椭圆',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'polygon',
                    alias: '多边形',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'polyline',
                    alias: '折线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'stroke',
                    alias: '笔画特性',
                    children: [
                        {
                            alias: '笔画宽度',
                            route: 'width',
                        }, {
                            alias: '笔画颜色',
                            route: 'color',
                        }, {
                            alias: '点线与虚线',
                            route: 'dasharray',
                        }, {
                            alias: '锯齿与反锯齿',
                            route: 'shape-rendering',
                        }, {
                            alias: '头尾形状',
                            route: 'linecap',
                        }, {
                            alias: '线连接',
                            route: 'linejoin',
                        },
                    ],
                }, {
                    name: 'stroke/animation',
                    alias: '线条动画',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        },
                    ],
                }, {
                    name: 'fill',
                    alias: '填充特性',
                    children: [
                        {
                            alias: '填充边线交叉',
                            route: 'rule',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

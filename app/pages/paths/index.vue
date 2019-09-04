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
            baseRoute: '/paths',
            categories: [
                {
                    name: 'moveto',
                    alias: 'moveTo 移动画笔到指定位置',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'closepath',
                    alias: 'closepath 闭合路径',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'relative',
                    alias: 'relative 相对坐标',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'horizontal',
                    alias: 'horizontal 水平线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'vertical',
                    alias: 'vertical 垂直线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'elliptical-arc',
                    alias: 'elliptical-arc 椭圆弧',
                    children: [
                        {
                            route: '01'
                        }, {
                            alias: '圆弧',
                            route: '02',
                        }, {
                            alias: '太极',
                            route: 'taichi',
                        },
                    ],
                }, {
                    name: 'bezier-curves',
                    alias: 'bezier-curves 贝塞尔曲线',
                    children: [
                        {
                            alias: '二次贝塞尔曲线',
                            route: 'quadratic',
                        }, {
                            alias: '三次贝塞尔曲线',
                            route: 'cubic',
                        },
                    ],
                }, {
                    name: 'filling',
                    alias: 'filling 路径和填充',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'marker',
                    alias: 'marker 标记',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

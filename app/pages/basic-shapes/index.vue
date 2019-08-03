<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '直线',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/lines/01'
                            }
                        ]
                    },{
                        name: '三角形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/triangles/01'
                            }
                        ]
                    },{
                        name: '矩形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/rectangles/01'
                            },{
                                name: '圆角矩形',
                                route: '/basic-shapes/rectangles/02'
                            }
                        ]
                    },{
                        name: '圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/circles/01'
                            }
                        ]
                    },{
                        name: '椭圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/ellipses/01'
                            }
                        ]
                    },{
                        name: '多边形',
                        instances: [
                            {
                                name: '实例',
                                route: '/basic-shapes/polygon/01'
                            }
                        ]
                    },{
                        name: '折线',
                        instances: [
                            {
                                name: '实例',
                                route: '/basic-shapes/polyline/01'
                            }
                        ]
                    },{
                        name: '笔画特性',
                        instances: [
                            {
                                name: '笔画宽度',
                                route: '/basic-shapes/stroke/width'
                            },{
                                name: '笔画颜色',
                                route: '/basic-shapes/stroke/color'
                            },{
                                name: '点线与虚线',
                                route: '/basic-shapes/stroke/dasharray'
                            },{
                                name: '锯齿与反锯齿',
                                route: '/basic-shapes/stroke/shape-rendering'
                            },{
                                name: '头尾形状',
                                route: '/basic-shapes/stroke/linecap'
                            },{
                                name: '线连接',
                                route: '/basic-shapes/stroke/linejoin'
                            }
                        ]
                    },{
                        name: '线条动画',
                        instances: [
                            {
                                name: '01',
                                route: '/basic-shapes/stroke/animation/01'
                            },{
                                name: '02',
                                route: '/basic-shapes/stroke/animation/02'
                            }
                        ]
                    },{
                        name: '填充特性',
                        instances: [
                            {
                                name: '填充边线交叉',
                                route: '/basic-shapes/fill/rule'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

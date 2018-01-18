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
                        name: 'moveTo 移动画笔到指定位置',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/moveto/01'
                            }
                        ]
                    },{
                        name: 'closepath 闭合路径',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/closepath/01'
                            }
                        ]
                    },{
                        name: 'relative 相对坐标',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/relative/01'
                            }
                        ]
                    },{
                        name: 'horizontal 水平线',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/horizontal/01'
                            }
                        ]
                    },{
                        name: 'vertical 垂直线',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/vertical/01'
                            }
                        ]
                    },{
                        name: 'elliptical-arc 椭圆弧',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/elliptical-arc/01'
                            },{
                                name: '太极',
                                route: '/paths/elliptical-arc/taichi'
                            }
                        ]
                    },{
                        name: 'bezier-curves 贝塞尔曲线',
                        instances: [
                            {
                                name: '二次贝塞尔曲线',
                                route: '/paths/bezier-curves/quadratic'
                            },{
                                name: '三次贝塞尔曲线',
                                route: '/paths/bezier-curves/cubic'
                            }
                        ]
                    },{
                        name: 'filling 路径和填充',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/filling/01'
                            }
                        ]
                    },{
                        name: 'marker 标记',
                        instances: [
                            {
                                name: '01',
                                route: '/paths/marker/01'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

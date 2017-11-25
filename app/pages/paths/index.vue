<template>
    <main>
        <ul class="mod-categories list-category">
            <li v-for="category in categories" class="item-main">
                <h2 v-text="category.name"></h2>
                <ul class="list-instance">
                    <li v-for="instance in category.instances" class="item-sub">
                        <router-link :to="instance.route">{{ instance.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
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
                                name: '001',
                                route: '/paths/moveto/001'
                            }
                        ]
                    },{
                        name: 'closepath 闭合路径',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/closepath/001'
                            }
                        ]
                    },{
                        name: 'relative 相对坐标',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/relative/001'
                            }
                        ]
                    },{
                        name: 'horizontal 水平线',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/horizontal/001'
                            }
                        ]
                    },{
                        name: 'vertical 垂直线',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/vertical/001'
                            }
                        ]
                    },{
                        name: 'elliptical-arc 椭圆弧',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/elliptical-arc/001'
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
                                name: '001',
                                route: '/paths/filling/001'
                            }
                        ]
                    },{
                        name: 'marker 标记',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/marker/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

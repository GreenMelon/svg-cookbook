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
    module.exports = {
        data() {
            return {
                categories: [
                    {
                        name: '直线',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/lines/001'
                            }
                        ]
                    },{
                        name: '三角形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/triangles/001'
                            }
                        ]
                    },{
                        name: '矩形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/rectangles/001'
                            },{
                                name: '圆角矩形',
                                route: '/basic-shapes/rectangles/002'
                            }
                        ]
                    },{
                        name: '圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/circles/001'
                            }
                        ]
                    },{
                        name: '椭圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/ellipses/001'
                            }
                        ]
                    },{
                        name: '多边形',
                        instances: [
                            {
                                name: '实例',
                                route: '/basic-shapes/polygon/001'
                            }
                        ]
                    },{
                        name: '折线',
                        instances: [
                            {
                                name: '实例',
                                route: '/basic-shapes/polyline/001'
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
        methods: {},
        created() {}
    }
</script>

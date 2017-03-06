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
                    }
                ]
            }
        },
        methods: {},
        created() {}
    }
</script>

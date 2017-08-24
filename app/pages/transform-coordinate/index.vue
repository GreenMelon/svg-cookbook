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
                        name: '平移',
                        instances: [
                            {
                                name: '示例',
                                route: '/transform-coordinate/translate/001'
                            }
                        ]
                    },{
                        name: '缩放',
                        instances: [
                            {
                                name: '等比缩放',
                                route: '/transform-coordinate/scale/001'
                            },{
                                name: '不等比缩放',
                                route: '/transform-coordinate/scale/002'
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

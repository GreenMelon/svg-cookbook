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
                        name: 'moveTo',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/moveto/001'
                            }
                        ]
                    },{
                        name: 'closepath',
                        instances: [
                            {
                                name: '001',
                                route: '/paths/closepath/001'
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

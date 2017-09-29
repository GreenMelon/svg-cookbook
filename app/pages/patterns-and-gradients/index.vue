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
                        name: 'patternUnits',
                        instances: [
                            {
                                name: '001 objectBoundingBox',
                                route: '/patterns-and-gradients/pattern-units/001'
                            },{
                                name: '002 userSpaceOnUse',
                                route: '/patterns-and-gradients/pattern-units/002'
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

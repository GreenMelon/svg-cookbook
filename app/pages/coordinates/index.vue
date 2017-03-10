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
                        name: '基础',
                        instances: [
                            {
                                name: '概念',
                                route: '/coordinates/concept'
                            },{
                                name: '保留宽高比',
                                route: '/coordinates/preserve-aspect-ratio'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

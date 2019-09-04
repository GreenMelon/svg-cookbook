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
            baseRoute: '/interactivity',
            categories: [
                {
                    name: 'links',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        },
                    ],
                }, {
                    name: 'animation',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'user-trigger',
                    children: [
                        {
                            alias: 'click',
                            route: '01',
                        }, {
                            alias: 'addEventListener',
                            route: '02',
                        },
                    ],
                }
            ],
        }
    },
}
</script>

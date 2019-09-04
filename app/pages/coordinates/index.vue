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
            baseRoute: '/coordinates',
            categories: [
                {
                    alias: '基础',
                    children: [
                        {
                            alias: '概念',
                            route: 'concept',
                        }, {
                            alias: 'preserve-aspect-ratio: meet',
                            route: 'preserve-aspect-ratio/meet',
                        }, {
                            alias: 'preserve-aspect-ratio: slice',
                            route: 'preserve-aspect-ratio/slice',
                        }, {
                            alias: 'preserve-aspect-ratio: none',
                            route: 'preserve-aspect-ratio/none',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

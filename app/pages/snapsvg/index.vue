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
            baseRoute: '/snapsvg',
            categories: [
                {
                    alias: '实例',
                    children: [
                        {
                            alias: 'svg.paper',
                            route: '01',
                        }, {
                            alias: 'element.animate',
                            route: '02',
                        }, {
                            alias: 'Snap.animate',
                            route: '03',
                        }, {
                            alias: 'svg.paper.path',
                            route: '04',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

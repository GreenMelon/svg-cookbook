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
            baseRoute: '/filters',
            categories: [
                {
                    name: 'fe-color-matrix',
                    alias: 'feColorMatrix',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }
            ],
        }
    },
}
</script>

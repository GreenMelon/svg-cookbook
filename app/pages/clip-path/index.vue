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
            baseRoute: '/clip-path',
            categories: [
                {
                    alias: '示例',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

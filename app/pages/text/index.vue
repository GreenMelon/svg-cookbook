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
            baseRoute: '/text',
            categories: [
                {
                    name: 'wrap',
                    alias: '文本换行',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'font-family',
                    alias: '字体',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'color',
                    alias: '着色',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

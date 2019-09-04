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
            baseRoute: '/instances',
            categories: [
                {
                    name: 'ribbon',
                    children: [
                        {
                            route: 'name',
                        },
                    ],
                }, {
                    name: 'other',
                    alias: '其他',
                    children: [
                        {
                            alias: '判断是否是 SVG 元素',    
                            route: 'is-svg-element',
                        }, {
                            alias: '解析 SVG',
                            route: 'serialize-svg',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

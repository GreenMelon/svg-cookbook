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
            baseRoute: '/patterns-and-gradients',
            categories: [
                {
                    name: 'pattern-units',
                    alias: 'patternUnits',
                    children: [
                        {
                            alias: 'objectBoundingBox',
                            route: '01',
                        }, {
                            alias: 'userSpaceOnUse',
                            route: '02',
                        },
                    ],
                }, {
                    name: 'pattern-content-units',
                    alias: 'patternContentUnits',
                    children: [
                        {
                            alias: 'objectBoundingBox',
                            route: '01',
                        },
                    ],
                }, {
                    name: 'linear-gradient',
                    alias: '线性渐变',
                    children: [
                        {
                            route: 'stop',
                        }, {
                            route: 'stop-opacity',
                        }, {
                            route: 'direction',
                        }, {
                            route: 'spread-method',
                        }, {
                            alias: '渐变圆',
                            route: 'circle',
                        },
                    ],
                }, {
                    name: 'radial-gradient',
                    alias: '径向渐变',
                    children: [
                        {
                            alias: '简单例子',
                            route: '01',
                        }, {
                            alias: '设置范围',
                            route: 'transition-limit',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

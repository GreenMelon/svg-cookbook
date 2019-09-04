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
            baseRoute: '/animation',
            categories: [
                {
                    name: 'animate',
                    children: [
                        {
                            alias: '简单的宽度变化',
                            route: '01',
                        }, {
                            alias: '同步动画',
                            route: '02',
                        }, {
                            alias: 'end 属性',
                            route: '03',
                        }, {
                            alias: '重复动作 repeatCount',
                            route: '04',
                        }, {
                            alias: '重复动作 repeatDur',
                            route: '05',
                        }, {
                            alias: '重复动作的同步动画',
                            route: '06',
                        }, {
                            alias: '多属性动画',
                            route: '07',
                        }, {
                            alias: '路径和多边形动画',
                            route: '08',
                        }, {
                            alias: '动画过渡值',
                            route: '09',
                        }, {
                            alias: 'set',
                            route: '10',
                        },
                    ]
                }, {
                    name: 'animate-transform',
                    alias: 'animateTransform',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'animate-motion',
                    alias: 'animateMotion',
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

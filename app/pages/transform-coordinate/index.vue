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
            baseRoute: '/transform-coordinate',
            categories: [
                {
                    name: 'translate',
                    alias: '平移',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'scale',
                    alias: '缩放',
                    children: [
                        {
                            alias: '等比缩放',
                            route: '01',
                        }, {
                            alias: '不等比缩放',
                            route: '02',
                        }, {
                            alias: '围绕中心点缩放',
                            route: '03',
                        },
                    ],
                }, {
                    name: 'rotate',
                    alias: '旋转',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        },
                    ],
                }, {
                    name: 'skew',
                    alias: '倾斜',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'sequences',
                    alias: '变换序列',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'cartesian',
                    alias: '笛卡尔坐标系统转换',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'instances',
                    alias: '实例',
                    children: [
                        {
                            alias: '花瓣',
                            route: '01',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

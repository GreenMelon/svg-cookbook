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
                        }, {
                            alias: '简单曲线描边动画',
                            route: '05',
                        }, {
                            alias: '路径跟随动画',
                            route: '06',
                        }, {
                            alias: 'Snap.Matrix 位移动画',
                            route: '07',
                        }, {
                            alias: 'Snap.Matrix 位移旋转复合动画',
                            route: '08',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

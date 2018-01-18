<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '平移',
                        instances: [
                            {
                                name: '示例',
                                route: '/transform-coordinate/translate/01'
                            }
                        ]
                    },{
                        name: '缩放',
                        instances: [
                            {
                                name: '等比缩放',
                                route: '/transform-coordinate/scale/01'
                            },{
                                name: '不等比缩放',
                                route: '/transform-coordinate/scale/02'
                            },{
                                name: '围绕中心点缩放',
                                route: '/transform-coordinate/scale/03'
                            }
                        ]
                    },{
                        name: '旋转',
                        instances: [
                            {
                                name: '01',
                                route: '/transform-coordinate/rotate/01'
                            },{
                                name: '02',
                                route: '/transform-coordinate/rotate/02'
                            }
                        ]
                    },{
                        name: '倾斜',
                        instances: [
                            {
                                name: '01',
                                route: '/transform-coordinate/skew/01'
                            }
                        ]
                    },{
                        name: '变换序列',
                        instances: [
                            {
                                name: '实例',
                                route: '/transform-coordinate/sequences/01'
                            }
                        ]
                    },{
                        name: '笛卡尔坐标系统转换',
                        instances: [
                            {
                                name: '实例',
                                route: '/transform-coordinate/cartesian/01'
                            }
                        ]
                    },{
                        name: '实例',
                        instances: [
                            {
                                name: '花瓣',
                                route: '/transform-coordinate/instances/01'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

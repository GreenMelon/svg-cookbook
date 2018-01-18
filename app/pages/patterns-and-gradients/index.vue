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
                        name: 'patternUnits',
                        instances: [
                            {
                                name: '01 objectBoundingBox',
                                route: '/patterns-and-gradients/pattern-units/01'
                            },{
                                name: '02 userSpaceOnUse',
                                route: '/patterns-and-gradients/pattern-units/02'
                            }
                        ]
                    },{
                        name: 'patternContentUnits',
                        instances: [
                            {
                                name: '01 objectBoundingBox',
                                route: '/patterns-and-gradients/pattern-content-units/01'
                            }
                        ]
                    },{
                        name: 'linearGradient 线性渐变',
                        instances: [
                            {
                                name: '01 stop',
                                route: '/patterns-and-gradients/linear-gradient/stop'
                            },{
                                name: '02 stop-opacity',
                                route: '/patterns-and-gradients/linear-gradient/stop-opacity'
                            },{
                                name: '03 direction',
                                route: '/patterns-and-gradients/linear-gradient/direction'
                            },{
                                name: '04 spreadMethod',
                                route: '/patterns-and-gradients/linear-gradient/spread-method'
                            },{
                                name: '渐变圆',
                                route: '/patterns-and-gradients/linear-gradient/circle'
                            }
                        ]
                    },{
                        name: 'radialGradient 径向渐变',
                        instances: [
                            {
                                name: '简单例子',
                                route: '/patterns-and-gradients/radial-gradient/01'
                            },{
                                name: '设置范围',
                                route: '/patterns-and-gradients/radial-gradient/transition-limit'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

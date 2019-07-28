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
                        name: 'animate',
                        instances: [
                            {
                                name: '简单的宽度变化',
                                route: '/animation/animate/01'
                            },{
                                name: '同步动画',
                                route: '/animation/animate/02'
                            },{
                                name: 'end 属性',
                                route: '/animation/animate/03'
                            },{
                                name: '重复动作 repeatCount',
                                route: '/animation/animate/04'
                            },{
                                name: '重复动作 repeatDur',
                                route: '/animation/animate/05'
                            },{
                                name: '重复动作的同步动画',
                                route: '/animation/animate/06'
                            },{
                                name: '多属性动画',
                                route: '/animation/animate/07'
                            },{
                                name: '路径和多边形动画',
                                route: '/animation/animate/08'
                            },{
                                name: '动画过渡值',
                                route: '/animation/animate/09'
                            },{
                                name: 'set',
                                route: '/animation/animate/10'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

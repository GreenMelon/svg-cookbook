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
                        name: '示例',
                        instances: [
                            {
                                name: '简单的宽度变化',
                                route: '/animation/01'
                            },{
                                name: '同步动画',
                                route: '/animation/02'
                            },{
                                name: 'end 属性',
                                route: '/animation/03'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

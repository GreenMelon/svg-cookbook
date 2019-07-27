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
                        name: 'ribbon',
                        instances: [
                            {
                                name: 'name',
                                route: '/case/ribbon/name'
                            }
                        ]
                    },{
                        name: '其他',
                        instances: [
                            {
                                name: '判断是否是 SVG 元素',    
                                route: '/case/other/is-svg-element'
                            },{
                                name: '解析 SVG',
                                route: '/case/other/serialize-svg'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

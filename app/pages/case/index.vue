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
                                name: 'alphabets',
                                route: '/case/ribbon/alphabet'
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
                            },{
                                name: '判断是否为空的 SVG',
                                route: '/case/other/is-svg-transparent'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

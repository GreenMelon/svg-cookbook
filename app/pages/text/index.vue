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
                        name: '文本换行',
                        instances: [
                            {
                                name: '01',
                                route: '/text/wrap/01'
                            }
                        ]
                    },{
                        name: '字体',
                        instances: [
                            {
                                name: '01',
                                route: '/text/font-family/01'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

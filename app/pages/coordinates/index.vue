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
                        name: '基础',
                        instances: [
                            {
                                name: '概念',
                                route: '/coordinates/concept'
                            },{
                                name: '保留宽高比',
                                route: '/coordinates/preserve-aspect-ratio'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

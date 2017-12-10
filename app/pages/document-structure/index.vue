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
                        name: '文档结构',
                        instances: [
                            {
                                name: '基础',
                                route: '/document-structure/001'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

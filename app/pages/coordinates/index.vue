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
                                name: 'preserve-aspect-ratio: meet',
                                route: '/coordinates/preserve-aspect-ratio/meet'
                            },{
                                name: 'preserve-aspect-ratio: slice',
                                route: '/coordinates/preserve-aspect-ratio/slice'
                            },{
                                name: 'preserve-aspect-ratio: none',
                                route: '/coordinates/preserve-aspect-ratio/none'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

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
                                name: '01',
                                route: '/lottie/01'
                            },{
                                name: '02',
                                route: '/lottie/02'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

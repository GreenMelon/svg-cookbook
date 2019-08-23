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
                        name: 'feColorMatrix',
                        instances: [
                            {
                                name: '01',
                                route: '/filters/fe-color-matrix/01'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

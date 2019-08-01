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
                                route: '/clip-path/01'
                            },{
                                name: '02',
                                route: '/clip-path/02'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

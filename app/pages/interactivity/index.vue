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
                        name: 'links',
                        instances: [
                            {
                                name: '01',
                                route: '/interactivity/links/01'
                            },{
                                name: '02 style',
                                route: '/interactivity/links/02'
                            }
                        ]
                    },{
                        name: 'animation',
                        instances: [
                            {
                                name: '01',
                                route: '/interactivity/animation/01'
                            }
                        ]
                    },{
                        name: 'user-trigger',
                        instances: [
                            {
                                name: 'click',
                                route: '/interactivity/user-trigger/01'
                            },{
                                name: 'addEventListener',
                                route: '/interactivity/user-trigger/02'
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

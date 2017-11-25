<template>
    <main>
        <ul class="mod-categories list-category">
            <li v-for="category in categories" class="item-main">
                <h2 v-text="category.name"></h2>
                <ul class="list-instance">
                    <li v-for="instance in category.instances" class="item-sub">
                        <router-link :to="instance.route">{{ instance.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '引入方式',
                        instances: [
                            {
                                name: '作为图像引入 <img>',
                                route: '/getting-started/import/img'
                            },{
                                name: 'CSS中包含',
                                route: '/getting-started/import/css'
                            },{
                                name: '嵌入对象 <object>',
                                route: '/getting-started/import/object'
                            },{
                                name: '嵌入对象 <embed>',
                                route: '/getting-started/import/embed'
                            },{
                                name: 'svg中的 <foreignObject>',
                                route: '/getting-started/import/foreign-object'
                            },{
                                name: 'Infile SVG',
                                route: '/getting-started/import/infile-svg'
                            },{
                                name: 'XSL-FO',
                                route: '/getting-started/import/XSL-FO'
                            },{
                                name: '分享：SVG的多种引用方法',
                                route: 'http://weixin.github.io/resources/slide/cssconf2016/doubleluo/index.html#/3'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

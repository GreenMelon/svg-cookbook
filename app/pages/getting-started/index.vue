<template>
    <main>
        <categories
            :base-route="baseRoute"
            :categories="categories"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            baseRoute: '/getting-started',
            categories: [
                {
                    name: 'import',
                    alias: '引入方式',
                    children: [
                        {
                            alias: '作为图像引入 <img>',
                            route: 'img',
                        }, {
                            alias: 'CSS中包含',
                            route: 'css',
                        }, {
                            alias: '嵌入对象 <object>',
                            route: 'object',
                        }, {
                            alias: '嵌入对象 <embed>',
                            route: 'embed',
                        }, {
                            alias: 'svg中的 <foreignObject>',
                            route: 'foreign-object',
                        }, {
                            alias: 'Infile SVG',
                            route: 'infile-svg',
                        }, {
                            alias: 'XSL-FO',
                            route: 'XSL-FO',
                        },

                        // {
                        //     alias: '分享：SVG 的引入方式',
                        //     outerRoute: 'http://weixin.github.io/resources/slide/cssconf2016/doubleluo/index.html#/3',
                        // },
                    ],
                },
            ],
        }
    },
}
</script>

/**
 * 这里是开发环境和生产环境通用的配置
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 入口配置
    entry: {
        main: './app/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出配置
    output: {
        /**
         * path 是文件输出到本地的路径
         * __dirname 是 node.js 中的一个全局变量, 它指向当前执行脚本所在的目录
         */
        path: path.join(__dirname, './dist'),

        // publicPath 是文件的引用路径, 比如开发环境可将其配置为cdn路径
        publicPath: '/dist/',

        // filename 是主入口的文件名
        filename: '[name].js',

        /**
         * chunkFilename 是每个路由编译后的文件名
         * 其中 [hash] 是用来唯一标识文件, 主要用来防止缓存
         */
        chunkFilename: '[name].[hash].js'
    },
    // 加载器
    module: {
        // 不同的 loaders 通过正则来对不同模块文件进行处理
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },{
                // babel-loader: 语法解析
                test: /\.js$/,
                loader: 'babel',
                // exclude 可以过滤掉特定文件
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: 'style!css!postcss'
            },{
                test: /\.less$/,
                loader: 'style!css!less?sourceMap'
            },{
                /**
                 * url-loader
                 * 它会将小于8kb的图片、iconfont字体都转为base64, 超过8kb的才会生成具体文件
                 */
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },{
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        /**
         * require 时省略的扩展名
         * 如 require('module') 不需要 module.js
         */
        extensions: ['', '.js', '.vue'],
        // 别名, 可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './app/filter'),
            components: path.join(__dirname, './app/component'),
            vue: path.join(__dirname, 'node_modules/vue/dist/vue')
        }
    },
    plugins: []
};
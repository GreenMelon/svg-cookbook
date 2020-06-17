<template>
    <div id="app">
        <modules :modules="modules"></modules>
        <router-view></router-view>
    </div>
</template>

<script>
import './components/modules';
import './components/categories';

export default {
    data() {
        return {
            modules: [
                {
                    name: '坐标系统',
                    route: '/coordinates'
                }, {
                    name: '基本形状',
                    route: '/basic-shapes'
                }, {
                    name: '坐标系统转换',
                    route: '/transform-coordinate'
                }, {
                    name: '路径',
                    route: '/paths'
                }, {
                    name: '图案和渐变',
                    route: '/patterns-and-gradients'
                }, {
                    name: '文本',
                    route: '/text'
                }, {
                    name: '裁剪',
                    route: '/clip-path'
                }, {
                    name: '蒙版',
                    route: '/mask'
                }, {
                    name: '滤镜',
                    route: '/filters'
                }, {
                    name: '动画',
                    route: '/animation'
                }, {
                    name: '交互',
                    route: '/interactivity'
                }, {
                    name: '实例',
                    route: '/instances'
                }, {
                    name: 'lottie',
                    route: '/lottie'
                }, {
                    name: 'Snap.svg',
                    route: '/snapsvg'
                },
            ]
        }
    }
};
</script>

<style lang="less">
@import './less/main.less';
</style>

<style lang="css">
@import './css/main.css';
</style>

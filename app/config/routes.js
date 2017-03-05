/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';
import BasicShapesIndex from '../pages/basic-shapes/index';
import Lines001 from '../pages/basic-shapes/lines/001';

export default [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    },

    {
        path: '/basic-shapes',
        component: BasicShapesIndex
    },{
        path: '/basic-shapes/lines/001',
        component: Lines001
    },

    {
        path: '*',
        component: NotFound
    }
];

/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

export default [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    },

    {
        path: '*',
        component: NotFound
    }
];

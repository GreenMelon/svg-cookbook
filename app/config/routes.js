/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';
import BasicShapesIndex from '../pages/basic-shapes/index';
import Lines001 from '../pages/basic-shapes/lines/001';
import Triangles001 from '../pages/basic-shapes/triangles/001';
import Rectangles001 from '../pages/basic-shapes/rectangles/001';
import Rectangles002 from '../pages/basic-shapes/rectangles/002';
import Circles001 from '../pages/basic-shapes/circles/001';
import Ellipses001 from '../pages/basic-shapes/ellipses/001';

import DocStruIndex from '../pages/document-structure/index';
import DocStru001 from '../pages/document-structure/001';

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
    },{
        path: '/basic-shapes/triangles/001',
        component: Triangles001
    },{
        path: '/basic-shapes/rectangles/001',
        component: Rectangles001
    },{
        path: '/basic-shapes/rectangles/002',
        component: Rectangles002
    },{
        path: '/basic-shapes/circles/001',
        component: Circles001
    },{
        path: '/basic-shapes/ellipses/001',
        component: Ellipses001
    },

    {
        path: '/document-structure',
        component: DocStruIndex
    },{
        path: '/document-structure/001',
        component: DocStru001
    },

    {
        path: '*',
        component: NotFound
    }
];

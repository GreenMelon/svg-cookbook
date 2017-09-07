/**
 * 定义路由
 */

import NotFound from '../pages/index/404';
import Index from '../pages/index/index';

import GettingStartedIndex from '../pages/getting-started/index';
import ImportByImg from '../pages/getting-started/import/img';
import ImportByCss from '../pages/getting-started/import/css';
import ImportByObject from '../pages/getting-started/import/object';
import ImportByEmbed from '../pages/getting-started/import/embed';
import ForeignObject from '../pages/getting-started/import/foreign-object';
import InfileSvg from '../pages/getting-started/import/infile-svg';
import XSLFO from '../pages/getting-started/import/XSL-FO';

import CoordinatesIndex from '../pages/coordinates/index';
import CoordinatesConcept from '../pages/coordinates/concept';
import PreserveAspectRatio from '../pages/coordinates/preserve-aspect-ratio';

import BasicShapesIndex from '../pages/basic-shapes/index';
import Lines001 from '../pages/basic-shapes/lines/001';
import Triangles001 from '../pages/basic-shapes/triangles/001';
import Rectangles001 from '../pages/basic-shapes/rectangles/001';
import Rectangles002 from '../pages/basic-shapes/rectangles/002';
import Circles001 from '../pages/basic-shapes/circles/001';
import Ellipses001 from '../pages/basic-shapes/ellipses/001';
import Polygon001 from '../pages/basic-shapes/polygon/001';
import Polyline001 from '../pages/basic-shapes/polyline/001';

import StrokeWidth from '../pages/basic-shapes/stroke/width';
import StrokeColor from '../pages/basic-shapes/stroke/color';
import StrokeDasharray from '../pages/basic-shapes/stroke/dasharray';
import StrokeLinecap from '../pages/basic-shapes/stroke/linecap';
import StrokeLinejoin from '../pages/basic-shapes/stroke/linejoin';

import FillRule from '../pages/basic-shapes/fill/rule';

import ShapeRendering from '../pages/basic-shapes/stroke/shape-rendering';

import DocStruIndex from '../pages/document-structure/index';
import DocStru001 from '../pages/document-structure/001';

import TransformCoordinateIndex from '../pages/transform-coordinate/index';
import Translate001 from '../pages/transform-coordinate/translate/001';
import Scale001 from '../pages/transform-coordinate/scale/001';
import Scale002 from '../pages/transform-coordinate/scale/002';
import Scale003 from '../pages/transform-coordinate/scale/003';
import Rotate001 from '../pages/transform-coordinate/rotate/001';
import Rotate002 from '../pages/transform-coordinate/rotate/002';
import Sequences001 from '../pages/transform-coordinate/sequences/001';
import Cartesian001 from '../pages/transform-coordinate/cartesian/001';

export default [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    },

    {
        path: '/getting-started',
        component: GettingStartedIndex
    },{
        path: '/getting-started/import/img',
        component: ImportByImg
    },{
        path: '/getting-started/import/css',
        component: ImportByCss
    },{
        path: '/getting-started/import/object',
        component: ImportByObject
    },{
        path: '/getting-started/import/embed',
        component: ImportByEmbed
    },{
        path: '/getting-started/import/foreign-object',
        component: ForeignObject
    },{
        path: '/getting-started/import/infile-svg',
        component: InfileSvg
    },{
        path: '/getting-started/import/XSL-FO',
        component: XSLFO
    },

    {
        path: '/coordinates',
        component: CoordinatesIndex
    },{
        path: '/coordinates/concept',
        component: CoordinatesConcept
    },{
        path: '/coordinates/preserve-aspect-ratio',
        component: PreserveAspectRatio
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
    },{
        path: '/basic-shapes/polygon/001',
        component: Polygon001
    },{
        path: '/basic-shapes/polyline/001',
        component: Polyline001
    },

    {
        path: '/basic-shapes/stroke/width',
        component: StrokeWidth
    },{
        path: '/basic-shapes/stroke/color',
        component: StrokeColor
    },{
        path: '/basic-shapes/stroke/dasharray',
        component: StrokeDasharray
    },{
        path: '/basic-shapes/stroke/shape-rendering',
        component: ShapeRendering
    },{
        path: '/basic-shapes/stroke/linecap',
        component: StrokeLinecap
    },{
        path: '/basic-shapes/stroke/linejoin',
        component: StrokeLinejoin
    },{
        path: '/basic-shapes/fill/rule',
        component: FillRule
    },

    {
        path: '/document-structure',
        component: DocStruIndex
    },{
        path: '/document-structure/001',
        component: DocStru001
    },

    {
        path: '/transforming-the-coordinate-system',
        component: TransformCoordinateIndex
    },{
        path: '/transform-coordinate/translate/001',
        component: Translate001
    },{
        path: '/transform-coordinate/scale/001',
        component: Scale001
    },{
        path: '/transform-coordinate/scale/002',
        component: Scale002
    },{
        path: '/transform-coordinate/scale/003',
        component: Scale003
    },{
        path: '/transform-coordinate/rotate/001',
        component: Rotate001
    },{
        path: '/transform-coordinate/rotate/002',
        component: Rotate002
    },{
        path: '/transform-coordinate/sequences/001',
        component: Sequences001
    },{
        path: '/transform-coordinate/cartesian/001',
        component: Cartesian001
    },

    {
        path: '*',
        component: NotFound
    }
];

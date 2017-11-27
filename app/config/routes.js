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
import Skew001 from '../pages/transform-coordinate/skew/001';
import Sequences001 from '../pages/transform-coordinate/sequences/001';
import Cartesian001 from '../pages/transform-coordinate/cartesian/001';

import PathsIndex from '../pages/paths/index';
import MoveTo001 from '../pages/paths/moveto/001';
import ClosePath001 from '../pages/paths/closepath/001';
import Relative001 from '../pages/paths/relative/001';
import HorizontalLineTo001 from '../pages/paths/horizontal/001';
import VerticalLineTo001 from '../pages/paths/vertical/001';
import EllipticalArc001 from '../pages/paths/elliptical-arc/001';
import Taichi from '../pages/paths/elliptical-arc/taichi';
import QuadraticBezierCurves from '../pages/paths/bezier-curves/quadratic';
import CubicBezierCurves from '../pages/paths/bezier-curves/cubic';
import PathsAndFilling from '../pages/paths/filling/001';
import Marker001 from '../pages/paths/marker/001';

import PatternsAndGradientsIndex from '../pages/patterns-and-gradients/index';
import PatternUnits001 from '../pages/patterns-and-gradients/pattern-units/001';
import PatternUnits002 from '../pages/patterns-and-gradients/pattern-units/002';
import PatternContentUnits001 from '../pages/patterns-and-gradients/pattern-content-units/001';
import LinearGradientStop from '../pages/patterns-and-gradients/linear-gradient/stop';
import LinearGradientStopOpacity from '../pages/patterns-and-gradients/linear-gradient/stop-opacity';
import LinearGradientDirection from '../pages/patterns-and-gradients/linear-gradient/direction';
import LinearGradientSpreadMethod from '../pages/patterns-and-gradients/linear-gradient/spread-method';

import TextIndex from '../pages/text/index';

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
        path: '/transform-coordinate/skew/001',
        component: Skew001
    },{
        path: '/transform-coordinate/sequences/001',
        component: Sequences001
    },{
        path: '/transform-coordinate/cartesian/001',
        component: Cartesian001
    },

    {
        path: '/paths',
        component: PathsIndex
    },{
        path: '/paths/moveto/001',
        component: MoveTo001
    },{
        path: '/paths/closepath/001',
        component: ClosePath001
    },{
        path: '/paths/relative/001',
        component: Relative001
    },{
        path: '/paths/horizontal/001',
        component: HorizontalLineTo001
    },{
        path: '/paths/vertical/001',
        component: VerticalLineTo001
    },{
        path: '/paths/elliptical-arc/001',
        component: EllipticalArc001
    },{
        path: '/paths/elliptical-arc/taichi',
        component: Taichi
    },{
        path: '/paths/bezier-curves/quadratic',
        component: QuadraticBezierCurves
    },{
        path: '/paths/bezier-curves/cubic',
        component: CubicBezierCurves
    },{
        path: '/paths/filling/001',
        component: PathsAndFilling
    },{
        path: '/paths/marker/001',
        component: Marker001
    },

    {
        path: '/patterns-and-gradients',
        component: PatternsAndGradientsIndex
    },{
        path: '/patterns-and-gradients/pattern-units/001',
        component: PatternUnits001
    },{
        path: '/patterns-and-gradients/pattern-units/002',
        component: PatternUnits002
    },{
        path: '/patterns-and-gradients/pattern-content-units/001',
        component: PatternContentUnits001
    },{
        path: '/patterns-and-gradients/linear-gradient/stop',
        component: LinearGradientStop
    },{
        path: '/patterns-and-gradients/linear-gradient/stop-opacity',
        component: LinearGradientStopOpacity
    },{
        path: '/patterns-and-gradients/linear-gradient/direction',
        component: LinearGradientDirection
    },{
        path: '/patterns-and-gradients/linear-gradient/spread-method',
        component: LinearGradientSpreadMethod
    },

    {
        path: '/text',
        component: TextIndex
    },

    {
        path: '*',
        component: NotFound
    }
];

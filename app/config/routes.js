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
import Lines01 from '../pages/basic-shapes/lines/01';
import Triangles01 from '../pages/basic-shapes/triangles/01';
import Rectangles01 from '../pages/basic-shapes/rectangles/01';
import Rectangles02 from '../pages/basic-shapes/rectangles/02';
import Circles01 from '../pages/basic-shapes/circles/01';
import Ellipses01 from '../pages/basic-shapes/ellipses/01';
import Polygon01 from '../pages/basic-shapes/polygon/01';
import Polyline01 from '../pages/basic-shapes/polyline/01';

import StrokeWidth from '../pages/basic-shapes/stroke/width';
import StrokeColor from '../pages/basic-shapes/stroke/color';
import StrokeDasharray from '../pages/basic-shapes/stroke/dasharray';
import StrokeLinecap from '../pages/basic-shapes/stroke/linecap';
import StrokeLinejoin from '../pages/basic-shapes/stroke/linejoin';

import FillRule from '../pages/basic-shapes/fill/rule';

import ShapeRendering from '../pages/basic-shapes/stroke/shape-rendering';

import DocStruIndex from '../pages/document-structure/index';
import DocStru01 from '../pages/document-structure/01';

import TransformCoordinateIndex from '../pages/transform-coordinate/index';
import Translate01 from '../pages/transform-coordinate/translate/01';
import Scale01 from '../pages/transform-coordinate/scale/01';
import Scale02 from '../pages/transform-coordinate/scale/02';
import Scale03 from '../pages/transform-coordinate/scale/03';
import Rotate01 from '../pages/transform-coordinate/rotate/01';
import Rotate02 from '../pages/transform-coordinate/rotate/02';
import Skew01 from '../pages/transform-coordinate/skew/01';
import Sequences01 from '../pages/transform-coordinate/sequences/01';
import Cartesian01 from '../pages/transform-coordinate/cartesian/01';
import TransformInstances01 from '../pages/transform-coordinate/instances/01';

import PathsIndex from '../pages/paths/index';
import MoveTo01 from '../pages/paths/moveto/01';
import ClosePath01 from '../pages/paths/closepath/01';
import Relative01 from '../pages/paths/relative/01';
import HorizontalLineTo01 from '../pages/paths/horizontal/01';
import VerticalLineTo01 from '../pages/paths/vertical/01';
import EllipticalArc01 from '../pages/paths/elliptical-arc/01';
import EllipticalArc02 from '../pages/paths/elliptical-arc/02';
import Taichi from '../pages/paths/elliptical-arc/taichi';
import QuadraticBezierCurves from '../pages/paths/bezier-curves/quadratic';
import CubicBezierCurves from '../pages/paths/bezier-curves/cubic';
import PathsAndFilling from '../pages/paths/filling/01';
import Marker01 from '../pages/paths/marker/01';

import PatternsAndGradientsIndex from '../pages/patterns-and-gradients/index';
import PatternUnits01 from '../pages/patterns-and-gradients/pattern-units/01';
import PatternUnits02 from '../pages/patterns-and-gradients/pattern-units/02';
import PatternContentUnits01 from '../pages/patterns-and-gradients/pattern-content-units/01';
import LinearGradientStop from '../pages/patterns-and-gradients/linear-gradient/stop';
import LinearGradientStopOpacity from '../pages/patterns-and-gradients/linear-gradient/stop-opacity';
import LinearGradientDirection from '../pages/patterns-and-gradients/linear-gradient/direction';
import LinearGradientSpreadMethod from '../pages/patterns-and-gradients/linear-gradient/spread-method';
import LinearGradientCircle from '../pages/patterns-and-gradients/linear-gradient/circle';
import RadialGradient01 from '../pages/patterns-and-gradients/radial-gradient/01';
import RadialGradientTransitionLimit from '../pages/patterns-and-gradients/radial-gradient/transition-limit';

import TextIndex from '../pages/text/index';
import WrapText01 from '../pages/text/wrap/01';

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
        path: '/basic-shapes/lines/01',
        component: Lines01
    },{
        path: '/basic-shapes/triangles/01',
        component: Triangles01
    },{
        path: '/basic-shapes/rectangles/01',
        component: Rectangles01
    },{
        path: '/basic-shapes/rectangles/02',
        component: Rectangles02
    },{
        path: '/basic-shapes/circles/01',
        component: Circles01
    },{
        path: '/basic-shapes/ellipses/01',
        component: Ellipses01
    },{
        path: '/basic-shapes/polygon/01',
        component: Polygon01
    },{
        path: '/basic-shapes/polyline/01',
        component: Polyline01
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
        path: '/document-structure/01',
        component: DocStru01
    },

    {
        path: '/transforming-the-coordinate-system',
        component: TransformCoordinateIndex
    },{
        path: '/transform-coordinate/translate/01',
        component: Translate01
    },{
        path: '/transform-coordinate/scale/01',
        component: Scale01
    },{
        path: '/transform-coordinate/scale/02',
        component: Scale02
    },{
        path: '/transform-coordinate/scale/03',
        component: Scale03
    },{
        path: '/transform-coordinate/rotate/01',
        component: Rotate01
    },{
        path: '/transform-coordinate/rotate/02',
        component: Rotate02
    },{
        path: '/transform-coordinate/skew/01',
        component: Skew01
    },{
        path: '/transform-coordinate/sequences/01',
        component: Sequences01
    },{
        path: '/transform-coordinate/cartesian/01',
        component: Cartesian01
    },{
        path: '/transform-coordinate/instances/01',
        component: TransformInstances01
    },

    {
        path: '/paths',
        component: PathsIndex
    },{
        path: '/paths/moveto/01',
        component: MoveTo01
    },{
        path: '/paths/closepath/01',
        component: ClosePath01
    },{
        path: '/paths/relative/01',
        component: Relative01
    },{
        path: '/paths/horizontal/01',
        component: HorizontalLineTo01
    },{
        path: '/paths/vertical/01',
        component: VerticalLineTo01
    },{
        path: '/paths/elliptical-arc/01',
        component: EllipticalArc01
    },{
        path: '/paths/elliptical-arc/02',
        component: EllipticalArc02
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
        path: '/paths/filling/01',
        component: PathsAndFilling
    },{
        path: '/paths/marker/01',
        component: Marker01
    },

    {
        path: '/patterns-and-gradients',
        component: PatternsAndGradientsIndex
    },{
        path: '/patterns-and-gradients/pattern-units/01',
        component: PatternUnits01
    },{
        path: '/patterns-and-gradients/pattern-units/02',
        component: PatternUnits02
    },{
        path: '/patterns-and-gradients/pattern-content-units/01',
        component: PatternContentUnits01
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
    },{
        path: '/patterns-and-gradients/linear-gradient/circle',
        component: LinearGradientCircle
    },{
        path: '/patterns-and-gradients/radial-gradient/01',
        component: RadialGradient01
    },{
        path: '/patterns-and-gradients/radial-gradient/transition-limit',
        component: RadialGradientTransitionLimit
    },

    {
        path: '/text',
        component: TextIndex
    },{
        path: '/text/wrap/01',
        component: WrapText01
    },

    {
        path: '*',
        component: NotFound
    }
];

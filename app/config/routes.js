/**
 * 定义路由
 */

const NotFound = () => import('../pages/index/404');
const Index = () => import('../pages/index/index');

const GettingStartedIndex = () => import('../pages/getting-started/index');
const ImportByImg = () => import('../pages/getting-started/import/img');
const ImportByCss = () => import('../pages/getting-started/import/css');
const ImportByObject = () => import('../pages/getting-started/import/object');
const ImportByEmbed = () => import('../pages/getting-started/import/embed');
const ForeignObject = () => import('../pages/getting-started/import/foreign-object');
const InfileSvg = () => import('../pages/getting-started/import/infile-svg');
const XSLFO = () => import('../pages/getting-started/import/XSL-FO');

const CoordinatesIndex = () => import('../pages/coordinates/index');
const CoordinatesConcept = () => import('../pages/coordinates/concept');
const PreserveAspectRatio = () => import('../pages/coordinates/preserve-aspect-ratio');

const BasicShapesIndex = () => import('../pages/basic-shapes/index');
const Lines01 = () => import('../pages/basic-shapes/lines/01');
const Triangles01 = () => import('../pages/basic-shapes/triangles/01');
const Rectangles01 = () => import('../pages/basic-shapes/rectangles/01');
const Rectangles02 = () => import('../pages/basic-shapes/rectangles/02');
const Circles01 = () => import('../pages/basic-shapes/circles/01');
const Ellipses01 = () => import('../pages/basic-shapes/ellipses/01');
const Polygon01 = () => import('../pages/basic-shapes/polygon/01');
const Polyline01 = () => import('../pages/basic-shapes/polyline/01');

const StrokeWidth = () => import('../pages/basic-shapes/stroke/width');
const StrokeColor = () => import('../pages/basic-shapes/stroke/color');
const StrokeDasharray = () => import('../pages/basic-shapes/stroke/dasharray');
const StrokeLinecap = () => import('../pages/basic-shapes/stroke/linecap');
const StrokeLinejoin = () => import('../pages/basic-shapes/stroke/linejoin');

const FillRule = () => import('../pages/basic-shapes/fill/rule');

const ShapeRendering = () => import('../pages/basic-shapes/stroke/shape-rendering');

const DocStruIndex = () => import('../pages/document-structure/index');
const DocStru01 = () => import('../pages/document-structure/01');

const TransformCoordinateIndex = () => import('../pages/transform-coordinate/index');
const Translate01 = () => import('../pages/transform-coordinate/translate/01');
const Scale01 = () => import('../pages/transform-coordinate/scale/01');
const Scale02 = () => import('../pages/transform-coordinate/scale/02');
const Scale03 = () => import('../pages/transform-coordinate/scale/03');
const Rotate01 = () => import('../pages/transform-coordinate/rotate/01');
const Rotate02 = () => import('../pages/transform-coordinate/rotate/02');
const Skew01 = () => import('../pages/transform-coordinate/skew/01');
const Sequences01 = () => import('../pages/transform-coordinate/sequences/01');
const Cartesian01 = () => import('../pages/transform-coordinate/cartesian/01');
const TransformInstances01 = () => import('../pages/transform-coordinate/instances/01');

const PathsIndex = () => import('../pages/paths/index');
const MoveTo01 = () => import('../pages/paths/moveto/01');
const ClosePath01 = () => import('../pages/paths/closepath/01');
const Relative01 = () => import('../pages/paths/relative/01');
const HorizontalLineTo01 = () => import('../pages/paths/horizontal/01');
const VerticalLineTo01 = () => import('../pages/paths/vertical/01');
const EllipticalArc01 = () => import('../pages/paths/elliptical-arc/01');
const EllipticalArc02 = () => import('../pages/paths/elliptical-arc/02');
const Taichi = () => import('../pages/paths/elliptical-arc/taichi');
const QuadraticBezierCurves = () => import('../pages/paths/bezier-curves/quadratic');
const CubicBezierCurves = () => import('../pages/paths/bezier-curves/cubic');
const PathsAndFilling = () => import('../pages/paths/filling/01');
const Marker01 = () => import('../pages/paths/marker/01');

const PatternsAndGradientsIndex = () => import('../pages/patterns-and-gradients/index');
const PatternUnits01 = () => import('../pages/patterns-and-gradients/pattern-units/01');
const PatternUnits02 = () => import('../pages/patterns-and-gradients/pattern-units/02');
const PatternContentUnits01 = () => import('../pages/patterns-and-gradients/pattern-content-units/01');
const LinearGradientStop = () => import('../pages/patterns-and-gradients/linear-gradient/stop');
const LinearGradientStopOpacity = () => import('../pages/patterns-and-gradients/linear-gradient/stop-opacity');
const LinearGradientDirection = () => import('../pages/patterns-and-gradients/linear-gradient/direction');
const LinearGradientSpreadMethod = () => import('../pages/patterns-and-gradients/linear-gradient/spread-method');
const LinearGradientCircle = () => import('../pages/patterns-and-gradients/linear-gradient/circle');
const RadialGradient01 = () => import('../pages/patterns-and-gradients/radial-gradient/01');
const RadialGradientTransitionLimit = () => import('../pages/patterns-and-gradients/radial-gradient/transition-limit');

const TextIndex = () => import('../pages/text/index');
const WrapText01 = () => import('../pages/text/wrap/01');

const MaskIndex = () => import('../pages/mask/index');
const Mask01 = () => import('../pages/mask/01');

const Animation = () => import('../pages/animation/index');
const Animate01 = () => import('../pages/animation/animate/01');
const Animate02 = () => import('../pages/animation/animate/02');
const Animate03 = () => import('../pages/animation/animate/03');
const Animate04 = () => import('../pages/animation/animate/04');
const Animate05 = () => import('../pages/animation/animate/05');
const Animate06 = () => import('../pages/animation/animate/06');
const Animate07 = () => import('../pages/animation/animate/07');
const Animate08 = () => import('../pages/animation/animate/08');
const Animate09 = () => import('../pages/animation/animate/09');
const Animate10 = () => import('../pages/animation/animate/10');
const AnimateTransform01 = () => import('../pages/animation/animate-transform/01');
const AnimateMotion01 = () => import('../pages/animation/animate-motion/01');

const CaseIndex = () => import('../pages/case/index');
const RibbonName = () => import('../pages/case/ribbon/name');
const IsSvgElement = () => import('../pages/case/other/is-svg-element');
const SerializeSvg = () => import('../pages/case/other/serialize-svg');

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
        path: '/mask',
        component: MaskIndex
    },{
        path: '/mask/01',
        component: Mask01
    },

    {
        path: '/animation',
        component: Animation
    },{
        path: '/animation/animate/01',
        component: Animate01
    },{
        path: '/animation/animate/02',
        component: Animate02
    },{
        path: '/animation/animate/03',
        component: Animate03
    },{
        path: '/animation/animate/04',
        component: Animate04
    },{
        path: '/animation/animate/05',
        component: Animate05
    },{
        path: '/animation/animate/06',
        component: Animate06
    },{
        path: '/animation/animate/07',
        component: Animate07
    },{
        path: '/animation/animate/08',
        component: Animate08
    },{
        path: '/animation/animate/09',
        component: Animate09
    },{
        path: '/animation/animate/10',
        component: Animate10
    },{
        path: '/animation/animate-transform/01',
        component: AnimateTransform01
    },{
        path: '/animation/animate-motion/01',
        component: AnimateMotion01
    },

    {
        path: '/case',
        component: CaseIndex
    },{
        path: '/case/ribbon/name',
        component: RibbonName
    },{
        path: '/case/other/is-svg-element',
        component: IsSvgElement
    },{
        path: '/case/other/serialize-svg',
        component: SerializeSvg
    },

    {
        path: '*',
        component: NotFound
    }
];

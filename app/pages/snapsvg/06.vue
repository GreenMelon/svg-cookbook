<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="300"
            id="svg"
        >
        </svg>
    </main>
</template>

<script>
import Base from './base.js';

export default {
    mixins: [Base],

    data() {
        return {};
    },

    mounted() {
        this.loadSnapSvg().then(svg => {
            const path = svg.paper.path({
                d: 'M221.712,180.442C237.176,177.728,279.348,178.094,261,152c-18.742-26.654-48.543-28.207-63-22-14.981,6.431-34.763,6.357-34,40s66.09,74.162,88,68,60.358-23.742,67-49,14.211-59.957-27-81S163.688,88.664,153,98c-7.828,6.838-32.045,22.952-32,64,0.039,35.491,7.878,62.872,14,78s52.737,39.557,73,41,58.638,16.552,105-7c44.249-22.478,75.073-94.409,55-164C349.768,46.792,217.142,54.519,200,55S104.613,66.128,78,111c-16.922,28.532-16.5,96.616,1,134,14.482,30.932,51.88,58.52,68,64,39.988,13.593,100.081,21.615,129,17',
                stroke: '#f00',
                fill: 'rgba(0, 0, 0, 0)',
            });
            const plane = svg.paper.path({
                d: 'M-2.282-6.074l0.001,3.926l-3.318,2.101C-5.7-0.66-6.141-1.885-6.775-1.891c-0.734,0.003-1.203,1.596-1.208,2.062l0.001,1.29l-2.328,1.474v2.858l2.327-0.827v0.116h2.406l0.001-0.972l3.299-1.172l0.593,4.73l-2.83,2.773v1.611l3.217-1.877h2.588l3.214,1.877v-1.611l-3.007-2.95l0.776-4.552L5.58,4.107V5.08l2.401-0.006V4.959l2.327,0.825V2.926L7.982,1.452L7.981,0.169c0-0.461-0.472-2.058-1.208-2.062c-0.629-0.01-1.08,1.227-1.182,1.838L2.277-2.162V-6.08c-0.006-1.333-0.89-5.986-2.286-5.972C-1.388-12.056-2.282-7.413-2.282-6.074z',
                stroke: '#fff',
                fill: 'rgb(0, 0, 0)',
            });
            const length = Snap.path.getTotalLength(path);
            const g = svg.paper.g(path, plane);

            g.attr({
                transform: 'translate(-30px, 0)',
            });

            function animate() {
                Snap.animate(0, length, function(val) {
                    const point = Snap.path.getPointAtLength(path, val); //根据path长度变化获取坐标
                    const m = new Snap.Matrix();
                    m.translate(point.x, point.y);
                    m.rotate(point.alpha - 90); //使飞机总是朝着曲线方向, point.alpha是点的切线和水平线形成的夹角
                    plane.transform(m);
                }, 30000, mina.easeout(), function() {
                    console.log('animation end');
                });
            };

            animate();
        });
    },
};
</script>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <pattern
                    id="tile"
                    patternUnits="objectBoundingBox"
                    patternContentUnits="objectBoundingBox"
                    x="0" y="0" width=".2" height=".2"
                >
                    <path
                        d="M 0 0 Q .05 .20 .10 .10 T .20 .20"
                        style="stroke: black; fill: none; stroke-width: 0.01;"
                    />
                    <path
                        d="M 0 0 h 0.2 v 0.2 h-0.2z"
                        style="stroke: black; fill: none; stroke-width: 0.01;"
                    />
                </pattern>
            </defs>

            <g transform="translate(20,20)">
                <rect x="0" y="0" width="100" height="100" style="fill: url(#tile); stroke: black;" />
            </g>

            <g transform="translate(135,20)">
                <rect x="0" y="0" width="70" height="80" style="fill: url(#tile); stroke: black;" />
            </g>

            <g transform="translate(220,20)">
                <rect x="0" y="0" width="150" height="130" style="fill: url(#tile); stroke: black;" />
            </g>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

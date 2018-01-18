<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <radialGradient id="three_stops">
                    <stop offset="0%" style="stop-color: #f00;"/>
                    <stop offset="50%" style="stop-color: #0f0;"/>
                    <stop offset="100%" style="stop-color: #00f;"/>
                </radialGradient>
            </defs>

            <rect
                x="20"
                y="20"
                width="200"
                height="200"
                style="fill: url(#three_stops); stroke: black;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

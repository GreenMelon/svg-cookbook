<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <linearGradient id="three_opacity_stops">
                    <stop offset="0%" style="stop-color: #906; stop-opacity: 1.0" />
                    <stop offset="50%" style="stop-color: #906; stop-opacity: 0.3" />
                    <stop offset="100%" style="stop-color: #906; stop-opacity: 0.1" />
                </linearGradient>
            </defs>

            <rect
                x="20"
                y="20"
                width="200"
                height="100"
                style="fill: url(#three_opacity_stops); stroke: black;"
            />
        </svg>
    </main>
</template>

<script>
    export default {};
</script>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <radialGradient
                    cx="0%"
                    cy="0%"
                    r="141%"
                    id="center_origin"
                >
                    <stop offset="0%" style="stop-color: #f00;"/>
                    <stop offset="50%" style="stop-color: #0f0;"/>
                    <stop offset="100%" style="stop-color: #00f;"/>
                </radialGradient>
            </defs>

            <rect
                x="20"
                y="20"
                width="100"
                height="100"
                style="fill: url(#center_origin); stroke: black;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

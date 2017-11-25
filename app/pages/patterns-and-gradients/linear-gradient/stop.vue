<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <linearGradient id="two_hues">
                    <stop offset="0%" style="stop-color: #ffcc00;"/>
                    <stop offset="100%" style="stop-color: #0099cc;"/>
                </linearGradient>
            </defs>

            <rect
                x="20"
                y="20"
                width="200"
                height="100"
                style="fill: url(#two_hues); stroke: black;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

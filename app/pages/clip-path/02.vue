<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="cp1">
                    <text
                        x="0"
                        y="50"
                        style="font-size: 48px; fill: black;"
                    >
                        caigua
                    </text>
                </clipPath>
                <rect
                    id="rect1"
                    x="0"
                    y="0"
                    width="200"
                    height="100"
                    style="fill: #007dd4;"
                />
            </defs>

            <use
                xlink:href="#rect1"
                style="clip-path: url('#cp1');"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

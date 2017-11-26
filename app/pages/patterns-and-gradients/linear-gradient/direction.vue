<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <!-- 下面的渐变会继承这个渐变 -->
                <linearGradient id="three_stops">
                    <stop offset="0%" style="stop-color: #ffcc00;"/>
                    <stop offset="33.33%" style="stop-color: #cc6699;"/>
                    <stop offset="100%" style="stop-color: #66cc99;"/>
                </linearGradient>

                <!-- 从右到左的渐变 -->
                <linearGradient
                    id="right_to_left"
                    xlink:href="#three_stops"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="00%"
                />

                <!-- 从上到下的渐变 -->
                <linearGradient
                    id="top_to_bottom"
                    xlink:href="#three_stops"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                />

                <!-- 从下到上的渐变 -->
                <linearGradient
                    id="bottom_to_top"
                    xlink:href="#three_stops"
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                />

                <!-- 对角线渐变 -->
                <linearGradient
                    id="diagonal"
                    xlink:href="#three_stops"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                />
            </defs>

            <rect
                x="40"
                y="20"
                width="200"
                height="40"
                style="fill: url(#three_stops); stroke: black;"
            />

            <rect
                x="40"
                y="70"
                width="200"
                height="40"
                style="fill: url(#right_to_left); stroke: black;"
            />

            <rect
                x="250"
                y="20"
                width="40"
                height="200"
                style="fill: url(#top_to_bottom); stroke: black;"
            />

            <rect
                x="300"
                y="20"
                width="40"
                height="200"
                style="fill: url(#bottom_to_top); stroke: black;"
            />

            <rect
                x="40"
                y="120"
                width="200"
                height="100"
                style="fill: url(#diagonal); stroke: black;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
                <linearGradient id="gradient">
                    <stop  offset="0.107" style="stop-color:#00A29A"/>
                    <stop  offset="0.1301" style="stop-color:#28A891"/>
                    <stop  offset="0.1968" style="stop-color:#76B874"/>
                    <stop  offset="0.2649" style="stop-color:#9FC758"/>
                    <stop  offset="0.3339" style="stop-color:#BBD338"/>
                    <stop  offset="0.4041" style="stop-color:#CDDA06"/>
                    <stop  offset="0.4761" style="stop-color:#D7DE00"/>
                    <stop  offset="0.5527" style="stop-color:#DAE000"/>
                    <stop  offset="0.9265" style="stop-color:#F39800"/>
                </linearGradient>
            </defs>

            <circle
                cx="200"
                cy="200"
                r="80"
                stroke="url(#gradient)"
                stroke-width="16"
                stroke-miterlimit="10"
                fill="none"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <polygon
                points="30 30, 70 30, 90 70, 10 70"
                style="fill:pink; stroke:black"
            >
                <animate
                    attributeName="points"
                    attributeType="XML"
                    to="50 30, 70 50, 50 90, 30 50"
                    begin="0s"
                    dur="2s"
                    fill="freeze"
                />
            </polygon>

            <path
                d="M 10 150 L 50 100 L 90 150"
                style="fill:none; stroke:black"
            >
                <animate
                    attributeName="d"
                    attributeType="XML"
                    to="M 10 100 L 50 150 L 90 100"
                    begin="0s"
                    dur="2s"
                    fill="freeze"
                />
            </path>
        </svg>
    </main>
</template>

<script>
// 路径和多边形动画
export default {}
</script>

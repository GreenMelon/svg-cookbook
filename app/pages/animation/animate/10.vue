<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="60"
                cy="60"
                r="60"
                style="fill: #007dd4; stroke: none;"
            >
                <animate
                    attributeType="XML"
                    attributeName="r"
                    to="0"
                    begin="0s"
                    dur="2s"
                    fill="freeze"
                />
            </circle>

            <text
                text-anchor="middle"
                x="60"
                y="60"
                style="visibility: hidden;"
            >
                <set
                    attributeName="visibility"
                    attributeType="CSS"
                    to="visible"
                    begin="2.5s"
                    dur="1s"
                    fill="freeze"
                />
                All gone!
            </text>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="600">
            <circle
                cx="60"
                cy="60"
                r="60"
                style="fill: #007dd4;"
            >
                <animate
                    id="a1"
                    attributeName="cx"
                    attributeType="XML"
                    to="160"
                    begin="1s"
                    dur="1s"
                    fill="freeze"
                    repeatCount="2"
                />
            </circle>

            <circle
                id="c2"
                cx="280"
                cy="60"
                r="60"
                style="fill: #ed143d;"
            >
                <animate
                    attributeName="cx"
                    attributeType="XML"
                    to="380"
                    begin="a1.repeat(1)"
                    dur="2s"
                    fill="freeze"
                />
            </circle>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

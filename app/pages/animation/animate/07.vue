<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="60"
                cy="60"
                r="60"
                style="fill: #007dd4;"
            >
                <animate
                    attributeName="cx"
                    attributeType="XML"
                    to="160"
                    begin="0s"
                    dur="4s"
                    fill="freeze"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill"
                    attributeType="XML"
                    to="#ed143d"
                    begin="0s"
                    dur="4s"
                    fill="freeze"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

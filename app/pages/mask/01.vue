<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask
                    id="m1"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        style="fill: #007dd4;"
                    />
                </mask>
            </defs>

            <rect
                x="0"
                y="0"
                width="100"
                height="100"
                mask="url(#m1)"
                style="fill: #ed143d;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

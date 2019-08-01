<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="cp1">
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                    />
                </clipPath>
                <rect
                    id="rect1"
                    x="0"
                    y="0"
                    width="100"
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

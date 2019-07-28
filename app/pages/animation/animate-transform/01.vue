<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <rect
                x="50"
                y="50"
                width="10"
                height="10"
                stroke="black"
                fill="none"
            >
                <animateTransform
                    attributeType="XML"
                    attributeName="transform"
                    type="scale"
                    from="1"
                    to="2 1"
                    begin="0s"
                    dur="2s"
                    fill="freeze"
                    additive="sum"
                />
                <animateTransform
                    attributeType="XML"
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="-30"
                    begin="0s"
                    dur="2s"
                    fill="freeze"
                    additive="sum"
                />
            </rect>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

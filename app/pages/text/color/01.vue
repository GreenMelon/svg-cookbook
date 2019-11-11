<template>
    <main>
        <svg width="600" height="150" viewBox="0 0 600 150">
            <defs>
                <filter x="0" y="0" width="1" height="1" id="solid">
                    <feFlood flood-color="yellow" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <text
                style="
                    font-family: 'Baloo Thambi';
                    font-size: 64px;
                    fill: rebeccapurple;
                    stroke: crimson;
                "
                filter="url(#solid)"
            >
                <tspan x="50" y="100">font family</tspan>
            </text>
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

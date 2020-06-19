<template>
    <main>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="250"
        >
            <path
                id="p1"
                d="M50,125 C 100,25 150,225, 200, 125"
                style="fill:none; stroke:#007dd4;"
            />

            <circle
                r="10"
                style="fill:#ed143d;"
            >
                <animateMotion
                    dur="6s"
                    fill="freeze"
                    repeatCount="indefinite"
                >
                    <mpath xlink:href="#p1" />
                </animateMotion>
            </circle>
        </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="250"
        >
            <path
                id="p1"
                d="M50,125 C 100,25 150,225, 200, 125"
                style="fill:none; stroke:#007dd4;"
            />

            <path
                d="M-10,-3 L10,-3 L0,-25z"
                style="fill:#ed143d; stroke:none;"
            >
                <animateMotion
                    dur="6s"
                    fill="freeze"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath xlink:href="#p1" />
                </animateMotion>
            </path>
        </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="250"
        >
            <path
                id="p1"
                d="M50,125 C 100,25 150,225, 200, 125"
                style="fill:none; stroke:#007dd4;"
            />

            <path
                d="M-10,-3 L10,-3 L0,-25z"
                style="fill:#ed143d; stroke:none;"
            >
                <animateMotion
                    dur="6s"
                    fill="freeze"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                    keyPoints="0;0.2;0.8;1"
                    keyTimes="0;0.33;0.66;1"
                >
                    <mpath xlink:href="#p1" />
                </animateMotion>
            </path>
        </svg>
    </main>
</template>

<script>
export default {}
</script>

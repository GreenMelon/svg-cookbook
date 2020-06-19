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
                    values="60;100;160;100;60"
                    begin="1s"
                    dur="2s"
                    fill="freeze"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </main>
</template>

<script>
export default {
    alias: '重复动作 repeatCount',
}
</script>

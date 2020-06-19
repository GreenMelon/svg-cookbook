<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <rect
                x="10"
                y="10"
                width="20"
                height="20"
                stroke="black"
                fill="none"
            >
                <animate
                    attributeName="width"
                    attributeType="XML"
                    from="20"
                    to="200"
                    begin="1s"
                    dur="5s"
                    end="3s"
                    fill="freeze"
                />
            </rect>
        </svg>
    </main>
</template>

<script>
export default {
    alias: 'end 属性',
}
</script>

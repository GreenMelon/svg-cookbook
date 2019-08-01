<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg">
            <script type="application/ecmascript">
                function grow(evt) {
                    evt.target.setAttribute('r', '50');
                }

                function shrink(evt) {
                    evt.target.setAttribute('r', '30');
                }

                var circle = document.getElementById('circle');
                circle.addEventListener('mouseover', grow);
                circle.addEventListener('mouseout', shrink);
            </script>

            <circle
                id="circle"
                cx="100"
                cy="100"
                r="30"
                style="fill: #007dd4;"
            />
        </svg>
    </main>
</template>

<script>
    export default {}
</script>

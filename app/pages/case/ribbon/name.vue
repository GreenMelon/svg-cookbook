<template>
    <main>
        <form>
            <textarea v-model="content">
            </textarea>

            <button
                type="button"
                @click="download"
            >
                download
            </button>
        </form>

        <div id="svg-container">
            <alphabets :words="words" />
        </div>
    </main>
</template>

<script>
    import alphabets from './alphabets';

    export default {
        components: {
            alphabets,
        },

        data() {
            return {
                content: 'abcdefg\nhijklmn\nopq rst\nuvw xyz',
            };
        },

        computed: {
            words() {
                const res = this.content.toUpperCase().replace(/[^\S\n]/g, '-').split('\n');
                return res;
            },
        },

        mounted() {},

        methods: {
            download() {
                const fileName = 'name.svg';

                const content = document.getElementById('svg-container').innerHTML;

                const file = new File([content], fileName, {
                    type: 'text/plain',
                });

                const url = URL.createObjectURL(file);

                const a = document.createElement('a');

                a.href = url;
                a.download = fileName;
                a.click();
            },
        },
    };
</script>

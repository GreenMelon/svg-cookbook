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
            content: 'abcdefg\nhijklmn\nopq rst\nuvw xyz\n0123456789',
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

<style lang="less" scoped>
#svg-container {
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    textarea {
        width: 400px;
        height: 100px;
        padding: 16px;
    }
    button {
        margin-left: 50px;
        height: 50px;
        padding: 0 16px;
        cursor: pointer;
    }
}
</style>

import { loadScript } from '@/utils';

export default {
    methods: {
        init() {
            const url = 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js';
            return loadScript(url).then(() => {});
        },
    },
};

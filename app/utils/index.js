import $ from 'jquery';

export function loadScript(url) {
    loadScript.caches = loadScript.caches || {};
    const { caches } = loadScript;

    if (!caches[url]) {
        $.ajaxSetup({ cache: true });

        caches[url] = new Promise((resolve, reject) => {
            $.getScript(url, resolve, reject);
        });
    }

    return caches[url];
};

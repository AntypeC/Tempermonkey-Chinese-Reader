// ==UserScript==
// @name         script 1 (-90deg)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Rotates the page -90 degrees counterclockwise only (no flipping)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', () => {
        const body = document.body;

        const wrapper = document.createElement('div');
        wrapper.id = 'rotate-wrapper';

        while (body.firstChild) {
            wrapper.appendChild(body.firstChild);
        }
        body.appendChild(wrapper);

        const fullHeight = document.documentElement.scrollHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        body.style.margin = '0';
        body.style.padding = '0';
        body.style.overflowX = 'auto';
        body.style.overflowY = 'hidden';
        body.style.width = fullHeight + 'px';
        body.style.height = viewportHeight + 'px';

        wrapper.style.transform = `rotate(-90deg) translateX(-${viewportHeight}px)`;
        wrapper.style.transformOrigin = 'top left';
        wrapper.style.position = 'absolute';
        wrapper.style.top = '0';
        wrapper.style.left = '0';
        wrapper.style.width = viewportHeight + 'px';
        wrapper.style.height = fullHeight + 'px';

        window.scrollTo({ left: 0 });
    });
})();

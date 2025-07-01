// ==UserScript==
// @name         script 2 (flip)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Flips the already rotated page 180°, reverses scroll direction, and scrolls to bottom-right
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', () => {
        const wrapper = document.getElementById('rotate-wrapper');
        if (!wrapper) return;

        const outer = document.createElement('div');
        outer.id = 'flip-wrapper';

        wrapper.parentNode.replaceChild(outer, wrapper);
        outer.appendChild(wrapper);

        outer.style.transform = 'rotate(180deg)';
        outer.style.transformOrigin = 'center center';
        outer.style.position = 'relative';
        outer.style.width = '200%'; // horizontal scroll depth
        outer.style.height = '100%';

        requestAnimationFrame(() => {
            const scrollX = document.documentElement.scrollWidth;
            const scrollY = document.documentElement.scrollHeight;
            window.scrollTo({
                left: scrollX,
                top: scrollY,
            });
        });

        // Reverse both scroll directions
        window.addEventListener('wheel', (e) => {
            e.preventDefault();
            window.scrollBy(-e.deltaX, -e.deltaY); // invert both axes
        }, { passive: false });
    });
})();

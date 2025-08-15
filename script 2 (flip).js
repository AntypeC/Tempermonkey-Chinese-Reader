// ==UserScript==
// @name         script 2 (flip+scroll)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Flips the entire page 180°
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Wait until body is available
    function flipPage() {
        if (!document.body) {
            requestAnimationFrame(flipPage);
            return;
        }

        // Create wrapper and apply transform
        const wrapper = document.createElement('div');
        wrapper.style.transform = 'rotate(180deg)';
        wrapper.style.webkitTransform = 'rotate(180deg)';
        wrapper.style.transformOrigin = 'center center';
        wrapper.style.width = '100%';
        wrapper.style.height = '400%';

        // Move all children of body into wrapper
        while (document.body.firstChild) {
            wrapper.appendChild(document.body.firstChild);
        }
        document.body.appendChild(wrapper);
    }

    flipPage();

    function scrollToRight() {
        const maxScrollLeft = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        window.scrollTo({
            left: maxScrollLeft,
            top: 0,
            behavior: 'instant' // use 'smooth' if you want animation
        });
    }
    window.addEventListener('load', () => {
        requestAnimationFrame(scrollToRight);
    });

})();

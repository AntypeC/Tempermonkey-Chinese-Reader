// ==UserScript==
// @name         remove spam insert
// @namespace    http://tampermonkey.net/
// @version      2025-06-30
// @description  Remove scraper tags auto-inserted into a novel by its publication
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const targetText = "一秒记住【沧元图小说网】09read.com，更新快，无弹窗！";
    const paragraphs = document.querySelectorAll("p");

    for (let p of paragraphs) {
        const normalizedText = p.textContent.replace(/\s/g, '');
        if (normalizedText.includes(targetText.replace(/\s/g, ''))) {
            p.remove();
            break;
        }
    }

})();

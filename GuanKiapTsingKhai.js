// ==UserScript==
// @name         GuanKiapTsingKhai
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Forcibly change the font for Chinese characters on all websites
// @author       You
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // You can change the font here to any installed font on your system
    const customFont = `"Bpmf Zihi Only", "GuanKiapTsingKhai-W-90", "GuanKiapTsingKhai-TW-90"`;

    // Unicode range for CJK Unified Ideographs (used in Chinese)
    const chineseFontCSS = `
        @font-face {
            font-family: 'ForceChineseFont';
            unicode-range: U+4E00-9FFF;
        }

        * {
            font-family: ${customFont} !important;
        }

        h1 {
            font-family: "GuanKiapTsingKhai-W-90" !important;
            font-size: 2rem !important;
        }

        #txt {
            font-size: 26px;
            line-height: 60px !important;
        }
    `;

    GM_addStyle(chineseFontCSS);
})();

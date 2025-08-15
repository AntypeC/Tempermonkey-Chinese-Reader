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

    const chineseFontCSS = `
        @font-face {
            font-family: 'ForceChineseFont';
            unicode-range: U+4E00-9FFF;
        }
        html, body, * {
            font-family: ${customFont} !important;
            background-color: #041421 !important;
            color: #d0d6d6 !important;
        }
        h1 {
            font-family: "GuanKiapTsingKhai-W-90" !important;
            //font-size: 2rem !important;
        }
        #content, #nr1, #novelcontent, #mycontent, #txt {
            font-size: 27px !important;
            //line-height: 64px !important;
        }
        .read-info-body {font-size:27px!important;}
        .read-info-body br {  display: inline;
  content: ' ';
  padding: 0 3px;}
        .reader-main .content#content {width:90%!important;line-height:62px;}
        .row-rank .layout-col1,
        .row-detail .layout-col1,
        .row-section .layout-col1 {
            border: 0;
            box-shadow: 0px 0px 3px #dddddd;
        }
        .content, .articlebody p{margin:10px;text-indent:1em;font-size:27px!important;font-weight:normal!important;line-height:190%;} //adjust font-size here
        .row {width:100%;}
        .page_next {
            float: right !important;
            position: relative;
            bottom: 40px;
        }
    `;

    GM_addStyle(chineseFontCSS);
})();

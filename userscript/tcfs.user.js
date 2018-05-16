// ==UserScript==
// @name         Twitch Chat Font Size
// @namespace    http://jacksp.co.uk
// @version      0.1
// @description  Add chat font size controls to Twitch.tv!
// @author       ColossalPercy
// @match        *://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let src;

    if (localStorage.tcfsDev == 'true') {
        src = 'http://127.0.0.1:3000/build/tcfs.dev.js';
        console.log('%c[TCFS]:%c Dev mode %cENABLED', 'color: purple; font-weight: bold', '', 'color: red; font-weight: bolder');
    } else {
        src = 'https://rawgit.com/ColossalPercy/twitch_chat_font_size/master/build/tcfs.min.js';
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.head.append(script);
})();
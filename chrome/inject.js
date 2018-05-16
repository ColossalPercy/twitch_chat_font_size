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
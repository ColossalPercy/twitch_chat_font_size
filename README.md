# Twitch Chat Font Size

Copyright (c) 2018 ColossalPercy

Licensed under MIT license, see [LICENSE](https://github.com/ColossalPercy/twitch_chat_font_size/blob/master/LICENSE).

# About

Twitch Chat Font Size adds useful simple controls to [twitch.tv](https://www.twitch.tv), to change the font size of the chat.

# Issues

For any issues or suggestions, please post in the [Issues](https://github.com/ColossalPercy/twitch_chat_font_size/issues/new) section.

# Developers

To modify for personal use or to contribute to the development requires [node.js](https://nodejs.org/en/). Once installed, clone the repo to your computer.

Open a terminal in the root of the project (where `package.json` is located) and run `npm install` to install the project dependencies.

Run `npm start` to load the development server. This loads a webserver on port 3000 and watches for files changes, automatically updating the build file. To load the development script in the browser, enter `localStorage.tcfsDev = true` into the browser console.

*Note: The browser plugin is still required in order to load the script into twitch.*

To compile the script for production run `npm run build` in the terminal.

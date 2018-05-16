import Logger from './utils/logger';
import urlListener from './utils/listener';
import wait from './utils/wait';

// *****************************************************************************
// Class for site loading
// *****************************************************************************
export default class Loader {
    constructor() {
        this.log = new Logger();

        this.selector = 'tcfs-container';
        this.container = null;
        this.type = null;

        this.watchURL();
    }

    // watch for the URL to change as twitch use popstates
    watchURL() {
        // listen for a change of URL with popstate
        urlListener(event => {
            this.checkURL();
        });
    }

    // find out what type of twitch page we are on
    // TODO: collections page - similar to VOD
    checkURL() {
        // parse URL
        let path = window.location.pathname;
        let route = path.split('/');
        route.splice(0, 1);

        // is the page a VOD or Live/hosting channel
        if (route[0] == 'videos') {
            // found a VOD
            this.log.info('Navigation - video ' + route[1]);
            this.type = 'VOD';
            this.getVOD();
        } else if (!URL.includes('/' + route[0])) {
            // found a channel
            this.log.info('Navigation - Channel ' + path);
            this.type = 'CHAT';
            this.getChat();
        }
    }

    // get the buttons container if watching a VOD
    getVOD() {
        // wait for the chat submit button after 500ms initially
        // add reference to button's parent for our container
        // call for the buttons to be added
        wait('[data-a-target="video-chat-submit-button"]', 500)
            .then(el => this.container = el.parentElement)
            .then(el => this.addButtons());
    }

    // get the buttons container if watching a channel
    getChat() {
        // wait for the chat input button's container
        // add reference to button's first child for our container
        // call for the buttons to be added
        wait('.chat-input__buttons-container')
            .then(el => this.container = el.children[0])
            .then(el => this.addButtons());
    }

}

// URLs we don't want to be found as channels
const URL = [
    '/',
    '/directory',
    '/friends',
    '/messages',
    '/subscriptions',
    '/inventory',
    '/payments',
    '/settings',
    '/communities',
    '/collections',
    '/event',
    '/popout'
];
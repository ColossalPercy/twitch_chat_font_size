// *****************************************************************************
// Twitch Chat Font Size
// Copyright (c) 2018 ColossalPercy
// Licensed under MIT license
// *****************************************************************************
import { buttons } from './components';
import Loader from './loader';
import { insert, createElement } from './utils/dom';

const DIRECTION = {
    increase: +2,
    decrease: -2
};

// *****************************************************************************
// Main class for TCFS
// *****************************************************************************
class TwitchChatFontSize extends Loader {
    constructor() {
        super();

        this.version = '[AIV]{version}[/AIV]';
        this.size = localStorage.tcfsSize ? parseInt(localStorage.tcfsSize) : 13;

        this.log.info('Loaded Version ' + this.version);
        this.checkURL();
    }

    // add the buttons to the correct container
    addButtons() {
        // change some HTML if adding buttons for VODs
        if (this.type == 'VOD') {

            // grab the twitch chat settings button
            let settings = this.container.children[0];

            // create a new div to contain all buttons so flex correctly justified
            let el = createElement('div', {
                id: 'video-chat__input-flex',
                className: 'tw-flex tw-flex-row'
            }).outerHTML;

            // insert this new container div beforebegin to settings button
            insert(settings, 'bb', el);

            // select the new contain we made and move the setting button inside
            this.container = document.querySelector('#video-chat__input-flex');
            this.container.appendChild(settings);
        }

        // insert our buttons beforeend to container
        insert(this.container, 'be', buttons);


        // find the two buttons we added
        // attach listeners for clicks on said buttons
        let inc = document.querySelector('#tcfs-increase');
        let dec = document.querySelector('#tcfs-decrease');
        inc.addEventListener('click', this.changeSize.bind(this));
        dec.addEventListener('click', this.changeSize.bind(this));

        // call the initial setting of the size on navigation
        this.setSize();
    }

    // apply our size to the correct elements in chat
    setSize(change) {
        // check that the size we are changing to is in range
        // TODO: customisable range and increment
        if (change && this.size + change < 25 && this.size + change > 7) {
            this.size = this.size + change;

            // commit our change to localStorage for the future
            localStorage.tcfsSize = this.size;
            this.log.info('Setting size to ' + this.size + 'px');
        } else if (!change) {
            this.log.info('Size loaded as ' + this.size + 'px');
        }

        // update our hand dandy tooltip so the peeps know what size they are on
        document.querySelector('#tcfs-tooltip').innerHTML = 'Font Size: ' + this.size + 'px';

        // initialise the elements we want to add our size to
        let resizers = {};

        // TODO: does user want input to change?
        if (this.type == 'CHAT') {
            // if channel, select the chat list and chat input
            resizers.chat = document.querySelector('[role="log"]');
            resizers.inpt = document.querySelector('[data-a-target="chat-input"]');
        }
        if (this.type == 'VOD') {
            // if VOD select different named chat list and input
            // TODO: make VOD input height change
            resizers.chat = document.querySelector('.video-chat__message-list-wrapper').children[0];
            resizers.inpt = document.querySelector('[data-a-target="video-chat-input"]');
        }

        // for all the elements we want to apply our size, apply it
        for (let el in resizers) {
            resizers[el].style.fontSize = this.size + 'px';
        }
    }

    // called when we click one of our buttons
    changeSize(event) {
        // get the element we actually clicked
        let clicked = event.target;

        // search up the element tree until we find the actual button
        while (clicked.tagName.toLowerCase() != 'button') {
            clicked = clicked.parentElement;
        }

        // get the direction of size from the clicked button's id
        let dir = clicked.id.substr(5);

        // translate our direction to an amount to change size by
        // TODO: apply our user changed increment?
        this.setSize(DIRECTION[dir]);

    }
}

// *****************************************************************************
// Make class accessible to window
// *****************************************************************************
window.TwitchChatFontSize = TwitchChatFontSize;
window.tcfs = new TwitchChatFontSize();
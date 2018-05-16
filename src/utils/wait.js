// *****************************************************************************
// Module to wait for an element to exist
// *****************************************************************************
const config = {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true
};

/**
 * export wait module
 * @param {string} sel html selector e.g. class
 * @param {number} pause amount of time to pause before looping, default: 250ms
 * @param {number} timeout amount of time between each loop, default: 250ms
 * @param {number} max maximum number of loops to perform, default: 20
 * @returns {Promise}
 */
export default function(sel, pause = 250, timeout = 250, max = 20) {
    let count = 0;

    // main loop to find sel
    function loop(resolve, reject) {
        // if not reached max attempts
        if (count < max) {
            // check for sel
            let el = document.querySelector(sel);
            if (el) {
                return resolve(el);
            }
            // wait to repeat check for sel
            setTimeout(function() {
                loop(resolve, reject);
            }, timeout);
        } else {
            // if not found sel in max loops then error!
            reject(new Error(sel + 'not found in ' + (timeout * max) + 'ms'));
        }
        count++;
    }

    // create a new Promise to return
    return new Promise(function(resolve, reject) {
        // wait before looping in case sel already exists
        setTimeout(function() {
            // call loop to check for existence of sel
            loop(resolve, reject);
        }, pause);
    });
}
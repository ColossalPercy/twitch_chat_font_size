// *****************************************************************************
// Original code by Tram-One
// Availbale from https://github.com/Tram-One/url-listener
// *****************************************************************************

module.exports = (callback) => {
    window.addEventListener('popstate', callback, false);
    const pushState = window.history.pushState;
    window.history.pushState = (state, ...args) => {
        const returnValue = pushState.apply(history, [state].concat(args));
        callback({
            state
        });
        return returnValue;
    };
};
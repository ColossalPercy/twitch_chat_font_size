// *****************************************************************************
// Function to insert adjacent HTML from text
// *****************************************************************************
/**
 * @param {element} parent the element to insert HTML relative to
 * @param {string} pos shorthand position relative to parent; bb, ab, be, ae
 * @param {string} html the HTML string to insert
 */
export function insert(parent, pos, html) {
    parent.insertAdjacentHTML(positions[pos], html);
}

// translations of shorthand positions
const positions = {
    bb: 'beforebegin',
    ab: 'afterbegin',
    be: 'beforeend',
    ae: 'afterend'
};

// *****************************************************************************
// Function to create a new element
// *****************************************************************************
/**
 * @param {string} tag the HTML tag to create
 * @param {object} attr an object of attributes to apply to the new element
 * @returns {element}
 */
export function createElement(tag, attr) {
    // create the element with tag
    let el = document.createElement(tag);

    // loop through all attributes we want to set
    for (let key in attr) {
        let prop = attr[key];
        // if (attr[key] instanceof Array) {
        //     prop = attr[key].join(' ');
        // }
        el[key] = prop;
    }
    return el;
}
// *****************************************************************************
// Class to easily create logs
// *****************************************************************************
/**
 * for each function of the class
 * @param {string} m the message to send to the console in some way
 */
export default class Logger {
    // send a console.log
    info(m) {
        m = this.make(m);
        // rest parameter to turn use array as list of arguments
        console.log(...m);
    }

    // send a console.warn
    warn(m) {
        m = this.make(m);
        // rest parameter to turn use array as list of arguments
        console.warn(...m);
    }

    // send a console.error
    error(m) {
        m = this.make(m);
        // rest parameter to turn use array as list of arguments
        console.error(...m);
    }

    // apply nice pretty formatting and return as an array
    make(m) {
        return [`%c[TCFS]:%c ${m}`, 'color: purple; font-weight: bold', ''];
    }
}
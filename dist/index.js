/**
 * @author TroyTae
 * @version 1.3.4
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (args
        .filter(Boolean)
        .join()
        .replace(/,/g, ' '));
}

module.exports = OneSpaces;

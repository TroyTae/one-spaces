/**
 * @author TroyTae
 * @version 1.3.3
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args
        .map(function (arg) {
        return Array.isArray(arg) ?
            OneSpaces.apply(0, arg) : arg;
    })
        .filter(Boolean)
        .join(' ');
}

module.exports = OneSpaces;

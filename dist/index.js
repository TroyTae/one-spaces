/**
 * @author TroyTae
 * @version 1.2.7
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arg, index = 0, className = '';
    for (; index < arguments.length;) {
        if (arg = arguments[index++]) {
            if (className) {
                className += ' ';
            }
            className += (arg.pop
                ? OneSpaces.apply(0, arg)
                : arg);
        }
    }
    return className;
}

module.exports = OneSpaces;

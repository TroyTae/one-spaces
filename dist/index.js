/**
 * @author TroyTae
 * @version 1.3.2
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
  var
    arg,
    index = 0,
    className = ''
  ;
  for (;index < arguments.length;) {
    if (arg = arguments[index++]) {
      if (className) {
        className += ' ';
      }
      className += (
        arg.pop
          ? OneSpaces.apply(0, arg)
          : arg
      );
    }
  }
  return className;
}

module.exports = OneSpaces;

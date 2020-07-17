/**
 * @author TroyTae
 * @version 1.3.7
 * @license MIT
 * @name one-spaces
 */
var OneSpaces=function(){"use strict";function n(r){for(var t,e=0,u="";e<r.length;)!(t=r[e++])||t.pop&&!(t=n(t))||(u&&(u+=" "),u+=t);return u}return function(){return n(arguments)}}();

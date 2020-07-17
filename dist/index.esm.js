/**
 * @author TroyTae
 * @version 1.3.7
 * @license MIT
 * @name one-spaces
 */
function n(r){for(var t,e=0,o="";e<r.length;)!(t=r[e++])||t.pop&&!(t=n(t))||(o&&(o+=" "),o+=t);return o}export default function(){return n(arguments)}

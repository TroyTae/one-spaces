/**
 * @author TroyTae
 * @version 1.3.8
 * @license MIT
 * @name one-spaces
 */
function n(r){for(var o,t=0,e="";t<r.length;)(o=r[t++])&&(o.pop&&!(o=n(o))||(e&&(e+=" "),e+=o));return e}module.exports=function(){return n(arguments)};

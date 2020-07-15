/**
 * @author TroyTae
 * @version 1.3.5
 * @name one-spaces
 */
function OneSpaces(args) {
  var item, index = 0, str = '';

  while (index < args.length) {
    if (
      (item = args[index++]) &&
      (!item.pop || (item = OneSpaces(item)))
    ) {
      str && (str += ' ');
      str += item;
    }
  }

  return str;
}

function index () {
  return OneSpaces(arguments);
}

export default index;

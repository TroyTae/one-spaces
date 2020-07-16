function OneSpaces(args) {
  var item, index = 0, str = '';

  while (index < args.length) {
    if (
      (item = args[index++]) &&
      (!item.pop || (item = OneSpaces(item)))
    ) {
      if (str) {
        str += ' ';
      }
      str += item;
    }
  }

  return str;
}

export default function () {
  return OneSpaces(arguments);
}

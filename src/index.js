function OneSpaces(args) {
  var item, index = 0, str = '';

  for (;index < args.length;) {
    if (item = args[index++]) {
      if (!item.pop || (item = OneSpaces(item))) {
        str && (str += ' ');
        str += item;
      }
    }
  }

  return str;
}

export default function () {
  return OneSpaces(arguments);
}

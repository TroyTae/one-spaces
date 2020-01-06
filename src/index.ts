type ClassName = string | undefined | null | boolean | ClassName[];

function OneSpaces(...args: ClassName[]) {
  let
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

export default OneSpaces;

type ClassName = undefined | null | boolean | string | ClassName[];

function OneSpaces(...args: ClassName[]): string {
  return args
    .map(function(arg) {
      return Array.isArray(arg) ?
        OneSpaces.apply(0, arg) : arg;
    })
    .filter(Boolean)
    .join(' ');
}

export default OneSpaces;

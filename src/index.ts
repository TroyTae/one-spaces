type ClassName = undefined | null | boolean | string | ClassName[];

function OneSpaces(...args: ClassName[]): string {
  return (
    args
      .filter(Boolean)
      .join()
      .replace(/,/g, ' ')
  );
}

export default OneSpaces;

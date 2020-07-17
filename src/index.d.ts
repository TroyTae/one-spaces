declare type ClassName = undefined | null | boolean | string | ClassName[];
declare function spaces(...args: ClassName[]): string;
export default spaces;

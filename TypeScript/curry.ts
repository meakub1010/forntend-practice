// implement curry function in TypeScript


const join = (a: string,b: string, c:string) => {
    return `${a}_${b}_${c}`;
}
const curry = <T extends any[], R>(fn: (...args: T) => R) => {
    return function curried(...args: any[]): any {
        if (args.length >= fn.length) {
            return fn(...(args as T));
        }
        return function(...nextArgs: any[]) {
            return curried(...args, ...nextArgs);
        };
    };

}

const curriedJoin = curry(join);
console.log(curriedJoin("a")("b")("c")); // "a_b_c"
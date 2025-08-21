"use strict";
// implement curry function in TypeScript
const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
};
const curriedJoin = curry(join);
console.log(curriedJoin("a")("b")("c")); // "a_b_c"
//# sourceMappingURL=curry.js.map
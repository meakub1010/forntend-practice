// convert a regular function to a curried function
// with variable number of arguments


const total = (x,y,z) => {
    return x + y + z;
};

const curry = (fn) => {

    return curried = (...args) => {
        console.log(`args length ${args.length} fn length ${fn.length}`);
        console.log(`args ${args}`);

        if(args.length !== fn.length) {
            return curried.bind(null, ...args); // bind creates a new function
        }
        return fn(...args);
    }
};


const curriedTotal = curry(total);
console.log(curriedTotal(1)(2)(3)); // Output: 6

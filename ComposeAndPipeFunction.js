// compose functions to create a new function that applies the first function to the result of the second function
const compose = (...fns) => {
    return (x) => {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, x);
    };
};

// Example functions to compose
const add = (x) => x + 2;
const multiply = (x) => x * 3;  
const subtract = (x) => x - 1;
// Composing the functions
const composedFunction = compose(add, multiply, subtract); // read as add -> multiply -> subtract
// Using the composed function
const result = composedFunction(5); // Start with 5
console.log(result); // Output: 20
// Explanation:
// 1. Start with 5
// 2. Add 2: 5 + 2 = 7
// 3. Multiply by 3: 7 * 3 = 21
// 4. Subtract 1: 21 - 1 = 20   


// Pipe function to create a new function that applies the first function to the result of the second function
const pipe = (...fns) => {
    return (x) => {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, x);
    };
}


const double = x => x * 2;
const square = x => x * x;
const increment = x => x + 1;

const process = pipe(increment, double, square);

console.log(process(2)); // Output: ((2 + 1) * 2)^2 = 36
// Explanation:
// 1. Start with 2
// 2. Increment by 1: 2 + 1 = 3     
// 3. Double: 3 * 2 = 6
// 4. Square: 6 * 6 = 36


// PIPE VS COMPOSE
// The main difference between `pipe` and `compose` is the order in which the functions are applied.
// - `pipe` applies the functions from left to right, meaning the first function is applied first.
// - `compose` applies the functions from right to left, meaning the last function is applied first.
//// In practice, this means that `pipe` is more intuitive for reading the flow of data,
// while `compose` is more intuitive for reading the flow of transformations.

// PIPE can be used for filter1 -> filter2
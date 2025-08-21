// Currying function that takes a function and returns a curried version of it
// named after mathematician Haskell Curry


/*
Currying is a functional programming technique where a function with multiple arguments is transformed into 
a sequence of functions, each taking a single argument. 
This allows for partial application of functions and can lead to more reusable and composable code.
It is particularly useful in JavaScript for creating functions that can be partially applied or for creating more 
specialized functions from a general one.


multiplyByTen and multiplyByTwenty are examples of curried functions that can be reused with different arguments.


 */


const buildFizza = (topping1) => {
    return (topping2) => {
        return (topping3) => {
            return `Fizza with ${topping1}, ${topping2}, and ${topping3}`;
        };
    };
};

// Example usage
const myFizza = buildFizza("pepperoni")("mushrooms")("olives");
console.log(myFizza); // Output: Fizza with pepperoni, mushrooms, and olives


const threeArgs = (a) => (b) => (c) => a + b + c;

console.log(threeArgs(1)(2)(3)); // Output: 6
console.log(threeArgs(10)(20)(30)); // Output: 60

const multiply = (a) => (b) => a * b;

const multiplyByTen = multiply(10);
const multiplyByTwenty = multiply(20);

console.log(multiplyByTen(100)); // Output: 1000
console.log(multiplyByTwenty(100)); // Output: 2000


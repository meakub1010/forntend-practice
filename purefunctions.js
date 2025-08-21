// pure functions require that the output is determined solely by the input values, without any side effects or reliance on external state.
// avoid mutating the input data or relying on external variables that can change over time.
// pure functions are easier to test, debug, and reason about, as they always produce the same output for the same input.


// A pure function is a function that always produces the same output for the same input and does not cause any side effects.
// This means that the function's output is determined solely by its input parameters, and it does not modify any external state or variables.
// Pure functions are predictable and easier to test, debug, and reason about.
// They do not rely on or modify any external state, making them more reliable and easier

// Impure functions, on the other hand, may produce different outputs for the same input or cause side effects, such as modifying global variables or performing I/O operations.

// why we need pure functions:
// 1. Predictability: Pure functions always produce the same output for the same input,
//    making them easier to reason about and test.
// 2. Reusability: Pure functions can be reused in different contexts without worrying about
//    unintended side effects or dependencies on external state.
// 3. Composability: Pure functions can be easily composed to create more complex functions,
//    allowing for better code organization and modularity.

const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
console.log(fullName("John", "Doe")); // Output: John Doe

// we can replace the function with the output of the function
// this is called referential transparency

// referential transparency means that an expression can be replaced with its value without changing the program's behavior.
// This allows for easier reasoning about code and can lead to optimizations by compilers or interpreters.
// For example, if we have a function that calculates the square of a number, we can replace the function call with the calculated value without changing the program's behavior:   
const square = (x) => x * x;
console.log(square(5)); // Output: 25
// We can replace square(5) with 25 in the code without changing its behavior.


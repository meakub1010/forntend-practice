
// reasons to use
// 1. Simplifies code for problems that can be defined in terms of smaller subproblems
// 2. Makes code more readable and maintainable
// 3. Can lead to elegant solutions for complex problems

// reasons to avoid
// 1. Can lead to stack overflow errors if not implemented carefully
// 2. May be less efficient than iterative solutions for some problems
// 3. Can be harder to debug due to multiple function calls and stack traces


// Example of recursion: Factorial function
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10



function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120


// without recursion
const fibonacci = (n, array = [0,1]) => {
    while(n > 2){
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        n--;
    }
    return array;
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// with recursion
const fibonacciRecursive = (n, array = [0, 1]) => {
    if (n <= 2) {
        return array;
    }
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    return fibonacciRecursive(n - 1, array);
}

console.log(fibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
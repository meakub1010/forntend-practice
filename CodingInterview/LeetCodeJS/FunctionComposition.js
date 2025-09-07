var compose = function (fns) {
    return function (x) {
        let rest = x;

        for(let i = fns.length - 1; i >= 0; i--){
            rest = fns[i](rest);
        }
        return rest;
    }
}

const compose2 = function (fns){
    return function(x){
        return fns.reduceRight((acc, f) => f(acc), x)
    }
}

const compose3 = function (fns){
    return function(x){
        return fns.reverse().reduce((acc, f) => f(acc), x)
    }
}



const double = (x) => x * 2;
const square = (x) => x * x;
const increment = (x) => x + 1;

const composedFunction = compose([double, square, increment]);
console.log(composedFunction(2)); // Output: 25
// Explanation: increment(2) -> 3, square(3) -> 9, double(9) -> 18

const composedFunction2 = compose2([double, square, increment]);
console.log(composedFunction2(2)); // Output: 25
// Explanation: increment(2) -> 3, square(3) -> 9, double(9) -> 18

const composedFunction3 = compose3([double, square, increment]);
console.log(composedFunction3(2)); // Output: 18
// Explanation: increment(2) -> 3, square(3) -> 9, double(9) -> 18  
const argsLength = (...args) => args.length;

console.log(argsLength(1,2,3)); // Output: 3
console.log(argsLength('a','b')); // Output: 2
console.log(argsLength()); // Output: 0 

// Time: O(1) | Space: O(1)

const argsLength2 = function(...args){
    console.log(args);
    let count = 0;
    for(let arg of args){
        count++;
    }
    return count;
}

console.log(argsLength2(1,2,3)); // Output: 3
console.log(argsLength2({}, null, "3")); // Output: 3
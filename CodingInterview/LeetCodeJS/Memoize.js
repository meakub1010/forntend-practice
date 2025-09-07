let callCount = 0;
function memoize(fn) {
    const cache = {};

    return function(...args){
        const key = args.toString();
        if(key in cache){
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}
// Time: O(n) | Space: O(n)

const memoizedFn = memoize((a,b) => {
    callCount++;
    return a+b;
});

console.log(memoizedFn(1,2)); // 3
console.log(memoizedFn(1,2)); // 3
console.log(memoizedFn(2,3)); // 5
console.log(memoizedFn(1,2)); // 3
console.log(memoizedFn(2,3)); // 5

console.log('callCount', callCount); // 2   
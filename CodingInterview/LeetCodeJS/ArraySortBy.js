const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}

console.log(sortBy([5,4,1,2,3], x => x)); // [1,2,3,4,5]